"""Exact outward/inward offset of the PCB Edge.Cuts outline (lines + tangent arcs),
matching OpenSCAD offset(delta=d): arcs that would collapse become sharp mitred corners.
usage: offset_outline.py in.dxf out.dxf distance"""
import sys, math, ezdxf
import shapely.geometry as sg
doc = ezdxf.readfile(sys.argv[1]); d = float(sys.argv[3])
ents = []
for e in doc.modelspace():
    if e.dxftype() == 'LINE':
        ents.append({'t': 'L', 'a': tuple(e.dxf.start)[:2], 'b': tuple(e.dxf.end)[:2]})
    else:
        c = tuple(e.dxf.center)[:2]; r = e.dxf.radius
        a0 = math.radians(e.dxf.start_angle); a1 = math.radians(e.dxf.end_angle)
        ents.append({'t': 'A', 'c': c, 'r': r, 'a0': a0, 'a1': a1,
                     'a': (c[0]+r*math.cos(a0), c[1]+r*math.sin(a0)), 'b': (c[0]+r*math.cos(a1), c[1]+r*math.sin(a1))})
# chain into ordered loop
def close(p, q): return math.dist(p, q) < 1e-3
loop = [ents.pop(0)]; loop[0]['rev'] = False
def ends(e): return (e['b'], e['a']) if e['rev'] else (e['a'], e['b'])
while ents:
    tail = ends(loop[-1])[1]
    for i, e in enumerate(ents):
        if close(e['a'], tail): e['rev'] = False; break
        if close(e['b'], tail): e['rev'] = True; break
    else: raise SystemExit('open chain')
    loop.append(ents.pop(i))
# orientation: make CCW
pts = [ends(e)[0] for e in loop]
poly = sg.Polygon(pts)
if not poly.exterior.is_ccw:
    loop.reverse()
    for e in loop: e['rev'] = not e['rev']
# For CCW loop, outward normal of a directed line is right-hand side (dy, -dx)
off = []
for e in loop:
    p, q = ends(e)
    if e['t'] == 'L':
        dx, dy = q[0]-p[0], q[1]-p[1]; L = math.hypot(dx, dy); n = (dy/L, -dx/L)
        off.append({'t': 'L', 'p': (p[0]+d*n[0], p[1]+d*n[1]), 'q': (q[0]+d*n[0], q[1]+d*n[1])})
    else:
        # arc traversed CCW (not rev) => convex for CCW loop: radius grows
        convex = not e['rev']
        r2 = e['r'] + d if convex else e['r'] - d
        c = e['c']
        def at(pt): a = math.atan2(pt[1]-c[1], pt[0]-c[0]); return (c[0]+r2*math.cos(a), c[1]+r2*math.sin(a))
        if r2 <= 1e-6: off.append({'t': 'X', 'c0': c})   # collapsed -> mitre
        else: off.append({'t': 'A', 'c': c, 'r': r2, 'p': at(p), 'q': at(q), 'ccw': convex})
def isect_all(a, b):
    """intersections of the infinite line / full circle carrying a and b"""
    def lc(l, c, r):
        (x1, y1), (x2, y2) = l['p'], l['q']; dx, dy = x2-x1, y2-y1
        fx, fy = x1-c[0], y1-c[1]
        A = dx*dx+dy*dy; B = 2*(fx*dx+fy*dy); C = fx*fx+fy*fy-r*r
        disc = B*B-4*A*C
        if disc < 0: return []
        s = math.sqrt(disc)
        return [(x1+t*dx, y1+t*dy) for t in ((-B-s)/(2*A), (-B+s)/(2*A))]
    if a['t'] == 'L' and b['t'] == 'L':
        (x1, y1), (x2, y2) = a['p'], a['q']; (x3, y3), (x4, y4) = b['p'], b['q']
        den = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4)
        t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den
        return [(x1+t*(x2-x1), y1+t*(y2-y1))]
    if a['t'] == 'L': return lc(a, b['c'], b['r'])
    if b['t'] == 'L': return lc(b, a['c'], a['r'])
    (x0, y0), r0 = a['c'], a['r']; (x1, y1), r1 = b['c'], b['r']
    dd = math.dist(a['c'], b['c'])
    if dd > r0+r1 or dd < abs(r0-r1): return []
    aa = (r0*r0-r1*r1+dd*dd)/(2*dd); h = math.sqrt(max(r0*r0-aa*aa, 0))
    xm, ym = x0+aa*(x1-x0)/dd, y0+aa*(y1-y0)/dd
    return [(xm+h*(y1-y0)/dd, ym-h*(x1-x0)/dd), (xm-h*(y1-y0)/dd, ym+h*(x1-x0)/dd)]
n = len(off)
for i, e in enumerate(off):
    if e['t'] == 'X':
        prv, nxt = off[i-1], off[(i+1) % n]
        assert prv['t'] != 'X' and nxt['t'] != 'X', 'two collapsed arcs in a row'
        cands = isect_all(prv, nxt)
        P = min(cands, key=lambda p: math.dist(p, e['c0']))
        prv['q'] = P; nxt['p'] = P
# drop sliver lines (< 0.2 mm) left beside collapsed corners: extend neighbours to meet
off = [e for e in off if e['t'] != 'X']
changed = True
while changed:
    changed = False
    for i, e in enumerate(off):
        if e['t'] == 'L' and math.dist(e['p'], e['q']) < 0.2:
            prv, nxt = off[i-1], off[(i+1) % len(off)]
            mid = ((e['p'][0]+e['q'][0])/2, (e['p'][1]+e['q'][1])/2)
            P = min(isect_all(prv, nxt), key=lambda p: math.dist(p, mid))
            print(f'  sliver at {mid[0]:.3f},{mid[1]:.3f} removed, corner moved {math.dist(P, mid):.4f} mm')
            prv['q'] = P; nxt['p'] = P; off.pop(i); changed = True; break
# make every arc exactly tangent to the line(s) it was (nearly) tangent to
def unit(v): L = math.hypot(*v); return (v[0]/L, v[1]/L)
def line_dir(l): return unit((l['q'][0]-l['p'][0], l['q'][1]-l['p'][1]))
def arc_tan(a, pt):
    c = a['c']; rx, ry = pt[0]-c[0], pt[1]-c[1]
    t = (-ry, rx) if a['ccw'] else (ry, -rx); return unit(t)
def turn(t1, t2): return math.degrees(abs(math.atan2(t1[0]*t2[1]-t1[1]*t2[0], t1[0]*t2[0]+t1[1]*t2[1])))
def proj(pt, l):
    d = line_dir(l); s = (pt[0]-l['p'][0])*d[0]+(pt[1]-l['p'][1])*d[1]
    return (l['p'][0]+s*d[0], l['p'][1]+s*d[1])
N = len(off); maxmove = 0
for i, a in enumerate(off):
    if a['t'] != 'A': continue
    prv, nxt = off[i-1], off[(i+1) % N]
    assert prv['t'] == 'L' and nxt['t'] == 'L'
    tp = turn(line_dir(prv), arc_tan(a, a['p'])) < 0.5
    tn = turn(arc_tan(a, a['q']), line_dir(nxt)) < 0.5
    old = a['c']
    if tp and tn:   # exact fillet between the two lines
        cands = []
        for s1 in (1, -1):
            for s2 in (1, -1):
                def sh(l, s):
                    d = line_dir(l); n = (-d[1]*s*a['r'], d[0]*s*a['r'])
                    return {'t': 'L', 'p': (l['p'][0]+n[0], l['p'][1]+n[1]), 'q': (l['q'][0]+n[0], l['q'][1]+n[1])}
                try: cands += isect_all(sh(prv, s1), sh(nxt, s2))
                except ZeroDivisionError: pass
        a['c'] = min(cands, key=lambda p: math.dist(p, old))
        a['p'] = proj(a['c'], prv); a['q'] = proj(a['c'], nxt)
        prv['q'] = a['p']; nxt['p'] = a['q']
    elif tp or tn:  # tangent on one side, sharp on the other
        tl, ol = (prv, nxt) if tp else (nxt, prv)
        foot = proj(old, tl); n = unit((old[0]-foot[0], old[1]-foot[1]))
        a['c'] = (foot[0]+n[0]*a['r'], foot[1]+n[1]*a['r'])
        tpt = proj(a['c'], tl)
        sharp_old = a['q'] if tp else a['p']
        spt = min(isect_all(a, ol), key=lambda p: math.dist(p, sharp_old))
        if tp: a['p'] = tpt; prv['q'] = tpt; a['q'] = spt; nxt['p'] = spt
        else:  a['q'] = tpt; nxt['p'] = tpt; a['p'] = spt; prv['q'] = spt
    maxmove = max(maxmove, math.dist(old, a['c']))
print(f'  arcs made tangent, max centre move {maxmove*1000:.2f} um')
out = ezdxf.new(units=4); out.header['$MEASUREMENT'] = 1; msp = out.modelspace()
nl = na = nx = 0
for e in off:
    if e['t'] == 'L': msp.add_line(e['p'], e['q']); nl += 1
    elif e['t'] == 'A':
        c = e['c']; s, t = (e['p'], e['q']) if e['ccw'] else (e['q'], e['p'])
        msp.add_arc(c, e['r'], math.degrees(math.atan2(s[1]-c[1], s[0]-c[0])), math.degrees(math.atan2(t[1]-c[1], t[0]-c[0]))); na += 1
    else: nx += 1
out.saveas(sys.argv[2])
# check: polygon area
samp = []
for e in off:
    if e['t'] == 'L': samp.append(e['p'])
    elif e['t'] == 'A':
        c = e['c']; a0 = math.atan2(e['p'][1]-c[1], e['p'][0]-c[0]); a1 = math.atan2(e['q'][1]-c[1], e['q'][0]-c[0])
        sw = (a1-a0) % (2*math.pi) if e['ccw'] else -((a0-a1) % (2*math.pi))
        for k in range(64): samp.append((c[0]+e['r']*math.cos(a0+sw*k/64), c[1]+e['r']*math.sin(a0+sw*k/64)))
P = sg.Polygon(samp)
print(f'offset {d}: {nl} lines, {na} arcs, {nx} mitred corners, area {P.area:.2f}, valid {P.is_valid}, bounds', [round(v, 3) for v in P.bounds])

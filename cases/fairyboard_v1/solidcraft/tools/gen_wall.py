"""Generate a SolidCraft batch that draws the case outer wall outline directly, constrained to the
projected PCB outline: wall lines parallel to PCB lines at `dist`, wall arcs tangent to neighbours with
radius = PCB arc radius + dist (via concentric construction circles), concave corners sharp, segments that
vanish at this offset dropped (as OpenSCAD offset(delta=) does)."""
import sys, math, json
sys.path.insert(0, sys.argv[1])
from chain import load
loop = load(sys.argv[2]); out = sys.argv[3]; d = float(sys.argv[4]); dexpr = sys.argv[5]; zpick = float(sys.argv[6])
n = len(loop)
for i, e in enumerate(loop): e['i'] = i
def unit(v): L = math.hypot(*v); return (v[0]/L, v[1]/L)
# offset entities (CCW loop: outward = right of direction)
off = []
for e in loop:
    if e['t'] == 'L':
        t = unit((e['q'][0]-e['p'][0], e['q'][1]-e['p'][1])); nr = (t[1], -t[0])
        off.append({'t':'L','src':e,'p':(e['p'][0]+d*nr[0], e['p'][1]+d*nr[1]),'q':(e['q'][0]+d*nr[0], e['q'][1]+d*nr[1]),'dir':t})
    elif e['convex']:
        off.append({'t':'A','src':e,'c':e['c'],'r':e['r']+d})
    # concave arcs collapse (r - d < 0 for d > 1.1) -> dropped
def lc(l, c, r):
    (x1,y1),(x2,y2) = l['p'], l['q']; dx,dy = x2-x1, y2-y1; fx,fy = x1-c[0], y1-c[1]
    A=dx*dx+dy*dy; B=2*(fx*dx+fy*dy); C=fx*fx+fy*fy-r*r; D=B*B-4*A*C
    if D < 0: return []
    s = math.sqrt(D); return [(x1+t*dx, y1+t*dy) for t in ((-B-s)/(2*A), (-B+s)/(2*A))]
def ll(a, b):
    (x1,y1),(x2,y2)=a['p'],a['q']; (x3,y3),(x4,y4)=b['p'],b['q']
    den=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4); t=((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den
    return (x1+t*(x2-x1), y1+t*(y2-y1))
def adjacent(a, b):  # tangent continuation in the source loop (no concave arc between)
    return (b['src']['i'] - a['src']['i']) % n == 1
def joint(a, b):
    if adjacent(a, b):
        # tangent joint: offset of the shared source point along the common normal
        if a['t'] == 'L': return a['q']
        if b['t'] == 'L': return b['p']
    if a['t'] == 'L' and b['t'] == 'L': return ll(a, b)
    l, c = (a, b) if a['t'] == 'L' else (b, a)
    src_pt = a['src']['q']
    cs = lc(l, c['c'], c['r']); return min(cs, key=lambda p: math.dist(p, src_pt))
changed = True
while changed:
    changed = False
    m = len(off)
    for k in range(m):
        e = off[k]
        if e['t'] != 'L': continue
        s = joint(off[k-1], e); t = joint(e, off[(k+1) % m])
        L = (t[0]-s[0])*e['dir'][0] + (t[1]-s[1])*e['dir'][1]
        if L < 0.05:
            print(f"dropping wall segment from PCB line {e['src']['i']} (length {L:.4f} at this offset)")
            off.pop(k); changed = True; break
m = len(off)
J = [joint(off[k], off[(k+1) % m]) for k in range(m)]
start = next(k for k in range(m) if off[k]['t'] == 'L')
off = off[start:] + off[:start]; J = J[start:] + J[:start]
r6 = lambda v: round(v, 6)
lines = [e for e in off if e['t']=='L']; arcs = [e for e in off if e['t']=='A']
cmds = []
cmds.append({'command':'sketch.project','params':{'refs':[{'edge':[r6(e['src']['mid'][0]), r6(e['src']['mid'][1]), zpick]} for e in lines],'construction':True}})
cmds.append({'command':'sketch.project','params':{'refs':[{'edge':[r6(e['src']['mid'][0]), r6(e['src']['mid'][1]), zpick]} for e in arcs],'construction':True}})
for i,e in enumerate(lines): e['proj'] = 'l%d' % (i+1)
for i,e in enumerate(arcs): e['proj'] = 'a%d' % (i+1)
# draw wall chain w0..w(m-1)
for k, e in enumerate(off):
    wid = 'w%d' % k
    s = 'w%d.end' % (k-1) if k > 0 else [r6(J[-1][0]), r6(J[-1][1])]
    t = 'w0.start' if k == m-1 else [r6(J[k][0]), r6(J[k][1])]
    if e['t'] == 'L':
        cmds.append({'command':'sketch.line','params':{'points':[s, t],'ids':[wid],'connect':False}})
    else:
        cmds.append({'command':'sketch.arc.center_point','params':{'center':[r6(e['c'][0]), r6(e['c'][1])],'start':s,'end':t,'id':wid,'connect':False}})
# aux construction circles for the radius of fully tangent arcs
for k, e in enumerate(off):
    if e['t'] == 'A':
        e['both'] = adjacent(off[k-1], e) and adjacent(e, off[(k+1) % m])
        if e['both']:
            e['aux'] = 'x%d' % k
            cmds.append({'command':'sketch.circle.center','params':{'center':[r6(e['c'][0]), r6(e['c'][1])],'radius':r6(e['r']),'construction':True,'id':e['aux'],'connect':False}})
            cmds.append({'command':'sketch.constraint.concentric','params':{'a':e['aux'],'b':e['proj']}})
            cmds.append({'command':'sketch.dimension','params':{'entities':[e['aux'], e['proj']],'value':dexpr}})
for k, e in enumerate(off):
    wid = 'w%d' % k
    if e['t'] == 'L':
        cmds.append({'command':'sketch.constraint.parallel','params':{'a':wid,'b':e['proj']}})
        cmds.append({'command':'sketch.dimension','params':{'entities':[wid, e['proj']],'value':dexpr}})
    else:
        prv, nxt = off[k-1], off[(k+1) % m]
        if e['both']:
            cmds.append({'command':'sketch.constraint.equal','params':{'a':wid,'b':e['aux']}})
            cmds.append({'command':'sketch.constraint.tangent','params':{'a':wid,'b':'w%d' % ((k-1) % m)}})
            cmds.append({'command':'sketch.constraint.tangent','params':{'a':wid,'b':'w%d' % ((k+1) % m)}})
        else:
            cmds.append({'command':'sketch.constraint.concentric','params':{'a':wid,'b':e['proj']}})
            side = 'w%d' % ((k-1) % m) if adjacent(prv, e) else 'w%d' % ((k+1) % m)
            cmds.append({'command':'sketch.constraint.tangent','params':{'a':wid,'b':side}})
cmds.append({'command':'sketch.solve','params':{}})
json.dump({'commands': cmds}, open(out, 'w'))
# fillet picks (wall edge midpoints)
picks = []
for k, e in enumerate(off):
    s, t = J[k-1], J[k]
    if e['t'] == 'L': picks.append(((s[0]+t[0])/2, (s[1]+t[1])/2))
    else:
        c = e['c']; a0 = math.atan2(s[1]-c[1], s[0]-c[0]); a1 = math.atan2(t[1]-c[1], t[0]-c[0])
        am = a0 + ((a1-a0) % (2*math.pi))/2; picks.append((c[0]+e['r']*math.cos(am), c[1]+e['r']*math.sin(am)))
json.dump([[r6(x), r6(y)] for x, y in picks], open(out + '.picks.json', 'w'))
# area check
pts = []
for k, e in enumerate(off):
    s, t = J[k-1], J[k]
    if e['t'] == 'L': pts.append(s)
    else:
        c = e['c']; a0 = math.atan2(s[1]-c[1], s[0]-c[0]); a1 = math.atan2(t[1]-c[1], t[0]-c[0]); sw = (a1-a0) % (2*math.pi)
        pts += [(c[0]+e['r']*math.cos(a0+sw*j/64), c[1]+e['r']*math.sin(a0+sw*j/64)) for j in range(64)]
A = sum(pts[i-1][0]*pts[i][1] - pts[i][0]*pts[i-1][1] for i in range(len(pts)))/2
print('wall elements', m, 'lines', len(lines), 'arcs', len(arcs), 'aux', sum(1 for e in arcs if e['both']), 'commands', len(cmds), 'area %.2f' % A)

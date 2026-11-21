import re, sys, math, ezdxf, json
import shapely.geometry as sg
from shapely.ops import polygonize, unary_union
src = open(sys.argv[1]).read()
ents = []
for m in re.finditer(r'\((gr_line|gr_arc)\s*\(start ([-\d.]+) ([-\d.]+)\)\s*(?:\(mid ([-\d.]+) ([-\d.]+)\)\s*)?\(end ([-\d.]+) ([-\d.]+)\)(.*?)\(layer "([^"]+)"\)', src, re.S):
    if m.group(9) != 'Edge.Cuts': continue
    f = lambda i: float(m.group(i))
    if m.group(1) == 'gr_line': ents.append(['L', (f(2), f(3)), (f(6), f(7))])
    else: ents.append(['A', (f(2), f(3)), (f(4), f(5)), (f(6), f(7))])
TX, TY = float(sys.argv[3]), float(sys.argv[4])
T = lambda p: (p[0]+TX, TY-p[1])
ents = [[e[0]] + [T(p) for p in e[1:]] for e in ents]
# snap endpoints
pts=[]
def snap(p):
    for q in pts:
        if math.dist(p,q[0])<0.002: q[1].append(p); return q
    q=[p,[p]]; pts.append(q); return q
refs=[]
for e in ents: refs.append((snap(e[1]), snap(e[-1])))
for q in pts: q[0]=(sum(p[0] for p in q[1])/len(q[1]), sum(p[1] for p in q[1])/len(q[1]))
print('unique vertices', len(pts), 'ents', len(ents), 'all degree 2:', all(len(q[1])==2 for q in pts))
def circ(a,b,c):
    ax,ay=a;bx,by=b;cx,cy=c
    d=2*(ax*(by-cy)+bx*(cy-ay)+cx*(ay-by))
    ux=((ax*ax+ay*ay)*(by-cy)+(bx*bx+by*by)*(cy-ay)+(cx*cx+cy*cy)*(ay-by))/d
    uy=((ax*ax+ay*ay)*(cx-bx)+(bx*bx+by*by)*(ax-cx)+(cx*cx+cy*cy)*(bx-ax))/d
    return (ux,uy), math.hypot(ax-ux,ay-uy)
out = ezdxf.new(units=4); out.header["$MEASUREMENT"]=1; msp = out.modelspace()
segs=[]; radii=[]
for e,(qa,qb) in zip(ents,refs):
    s, en = qa[0], qb[0]
    if e[0]=='L':
        msp.add_line(s,en); segs.append([s,en])
    else:
        m = e[2]; c,r = circ(s,m,en); radii.append(r)
        ang=lambda p: math.atan2(p[1]-c[1],p[0]-c[0])
        a0,am,a1=ang(s),ang(m),ang(en)
        cd=lambda x,y:(y-x)%(2*math.pi)
        if cd(a0,am) > cd(a0,a1): a0,a1=a1,a0; s,en=en,s
        msp.add_arc(c,r,math.degrees(a0),math.degrees(a1))
        sw=cd(a0,a1); n=max(16,int(sw/0.005))
        pl=[(c[0]+r*math.cos(a0+sw*i/n), c[1]+r*math.sin(a0+sw*i/n)) for i in range(n+1)]
        pl[0]=s; pl[-1]=en; segs.append(pl)
out.saveas(sys.argv[2])
polys=sorted(polygonize(unary_union([sg.LineString(s) for s in segs])), key=lambda p:-p.area)
print('loops', len(polys), [round(p.area,2) for p in polys[:4]])
P=polys[0]; print('bounds', [round(v,4) for v in P.bounds], 'area', round(P.area,3), 'perimeter', round(P.length,3))
print('min arc r', round(min(radii),3), 'max', round(max(radii),2))
# tangency: angle at each vertex
import itertools

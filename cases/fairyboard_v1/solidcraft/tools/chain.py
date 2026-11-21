"""Load PCB Edge.Cuts DXF (old frame) -> ordered CCW loop in the hole-aligned frame, classify arcs."""
import ezdxf, math, sys
DX, DY = -211.7331 - (-211.7326), 158.6875 - 158.6689   # old dxf frame -> hole frame
def load(path):
    ents=[]
    for e in ezdxf.readfile(path).modelspace():
        if e.dxftype()=='LINE':
            ents.append({'t':'L','a':(e.dxf.start.x+DX,e.dxf.start.y+DY),'b':(e.dxf.end.x+DX,e.dxf.end.y+DY)})
        else:
            c=(e.dxf.center.x+DX,e.dxf.center.y+DY); r=e.dxf.radius
            a0=math.radians(e.dxf.start_angle); a1=math.radians(e.dxf.end_angle)
            ents.append({'t':'A','c':c,'r':r,'a0':a0,'a1':a1,
                         'a':(c[0]+r*math.cos(a0),c[1]+r*math.sin(a0)),'b':(c[0]+r*math.cos(a1),c[1]+r*math.sin(a1))})
    loop=[ents.pop(0)]; loop[0]['rev']=False
    E=lambda e:(e['b'],e['a']) if e['rev'] else (e['a'],e['b'])
    while ents:
        t=E(loop[-1])[1]
        for i,e in enumerate(ents):
            if math.dist(e['a'],t)<1e-3: e['rev']=False;break
            if math.dist(e['b'],t)<1e-3: e['rev']=True;break
        else: raise SystemExit('open')
        loop.append(ents.pop(i))
    area=sum(E(e)[0][0]*E(e)[1][1]-E(e)[1][0]*E(e)[0][1] for e in loop)
    if area<0:
        loop.reverse()
        for e in loop: e['rev']=not e['rev']
    for e in loop:
        e['p'],e['q']=E(e)
        if e['t']=='A':
            e['convex']= not e['rev']   # CCW arc in CCW loop
            am=e['a0']+((e['a1']-e['a0'])%(2*math.pi))/2
            e['mid']=(e['c'][0]+e['r']*math.cos(am), e['c'][1]+e['r']*math.sin(am))
        else:
            e['mid']=((e['p'][0]+e['q'][0])/2,(e['p'][1]+e['q'][1])/2)
    return loop
if __name__=='__main__':
    loop=load(sys.argv[1])
    s=''.join('L' if e['t']=='L' else ('V' if e['convex'] else 'C') for e in loop)
    print(len(loop), s)
    import collections
    print(collections.Counter(s[i-1]+s[i]+s[(i+1)%len(s)] for i in range(len(s)) if s[i]=='C'))

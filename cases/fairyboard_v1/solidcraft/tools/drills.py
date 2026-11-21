import re, sys
def read(path):
    tools={}; cur=None; pts=[]
    for line in open(path):
        line=line.strip()
        m=re.match(r'T(\d+)C([\d.]+)',line)
        if m: tools[m.group(1)]=float(m.group(2)); continue
        m=re.match(r'^T(\d+)$',line)
        if m: cur=m.group(1); continue
        m=re.match(r'X([-\d.]+)Y([-\d.]+)',line)
        if m and cur: pts.append((tools[cur],float(m.group(1)),float(m.group(2))))
    return pts
if __name__=='__main__':
    for p in sys.argv[1:]:
        for d,x,y in read(p):
            if d>=2.1 and d<=3.3: print(p.split('/')[-1], d, x, y)

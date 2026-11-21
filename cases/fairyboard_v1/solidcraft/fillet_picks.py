"""edge midpoints of a DXF outline loop, as solid.fillet picks at height z"""
import ezdxf, math, sys, json
def picks(path, z):
    out = []
    for e in ezdxf.readfile(path).modelspace():
        if e.dxftype() == 'LINE':
            a, b = e.dxf.start, e.dxf.end; out.append([round((a.x+b.x)/2, 5), round((a.y+b.y)/2, 5), z])
        elif e.dxftype() == 'ARC':
            c = e.dxf.center; a0 = math.radians(e.dxf.start_angle); a1 = math.radians(e.dxf.end_angle)
            am = a0 + ((a1-a0) % (2*math.pi))/2
            out.append([round(c.x+e.dxf.radius*math.cos(am), 5), round(c.y+e.dxf.radius*math.sin(am), 5), z])
    return out
if __name__ == '__main__':
    print(json.dumps(picks(sys.argv[1], float(sys.argv[2]))))

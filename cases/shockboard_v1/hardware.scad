module screw(d, l) {
    union() {
        cylinder(l, d/2, d/2);
        
        translate([0, 0, l])
        difference() {
            cylinder(2, 2, 2);
            
            translate([0, 0, 2])
            cube([6, 1, 1.1], center = true);
        }
    }
}

module standoff(di, do, l) {
    difference() {
        cylinder(l, do/2, do/2);
        
        translate([0, 0, -0.5])
        cylinder(l+1, di/2, di/2);
    }
}

screw(2, 8);
standoff(2, 4, 3.5);

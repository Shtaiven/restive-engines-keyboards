use <shockboard_v1.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;

module keywell() {
    difference() {
        plate_outline();
        
        offset(delta=0.5) // create space for the keycaps
        keywell_mx();
    };
}

module plate() {
    difference() {
        plate_mx();
        
        offset(delta=0.2)
        m2_holes();
    };
}

module wedge(size) {
    intersection() {
        cube(size);
        
        rotate([0, 45, 0])
        cube(size*2);
    }
}

module case_hipro_mx_top() {
    plate_thickness = 1.5;
    keywell_rise = 6.2 + 1.2;

    difference() {
        union() {
            translate([0, 0, plate_thickness])
            linear_extrude(keywell_rise)
            keywell();

            linear_extrude(plate_thickness)
            plate();
        }

        translate([0, 0, -1])
        linear_extrude(10)
        promicro_cutout();
        
        // fix for interference with battery connector
        translate([226.4 + 5, -122.1 + 18, 0])
        rotate([0, 0, 180])
        resize([0, 12.5, 0])
        wedge(10);

        // fix for interference with reset button
        translate([198.4 - 5, -122.1 + 26 , 0])
        resize([0, 8, 0])
        wedge(10);
        
        // fix for interference with reset button
        translate([198.4-2, -122.1 + 26 , 2.5])
        cube([5, 8, 10]);
    }
}

case_hipro_mx_top();

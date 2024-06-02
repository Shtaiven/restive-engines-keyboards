use <shockboard_v1.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;

module plate() {
    difference() {
        plate_mx();
        
        offset(delta=0.2)
        m2_holes();
    };
}

module case_lopro_mx_top() {
    plate_thickness = 1.5;

    difference() {
        linear_extrude(plate_thickness)
        plate();

        translate([0, 0, -1])
        linear_extrude(10)
        promicro_cutout();
        
        // fix for interference with battery connector
        translate([226.4 + 5, -122.1 + 18, -1])
        rotate([0, 0, 180])
        cube([10, 12.5, 10]);

        // fix for interference with reset button
        translate([198.4 - 5, -122.1 + 26 , -1])
        cube([10, 8, 10]);
    }
}

case_lopro_mx_top();

use <shockboard_v1.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;

module keywell() {
    difference() {
        plate_outline();
        keywell_mx();
    };
}

module plate() {
    difference() {
        plate_mx();
        m2_holes();
    };
}

module case_top() {
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
    
        linear_extrude(10)
        translate([0, 0, -1])
        promicro_cutout();
    }
}

case_top();

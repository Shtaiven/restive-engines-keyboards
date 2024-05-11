use <shockboard_v1.scad>


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

    translate([0, 0, plate_thickness])
    linear_extrude(keywell_rise)
    keywell();

    linear_extrude(plate_thickness)
    plate();
}

case_top();

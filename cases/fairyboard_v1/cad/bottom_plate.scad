use <fairyboard_v1.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

module bottom_plate(thickness=1.5) {
    linear_extrude(thickness)
    difference() {
        pcb_outline();
        m2_holes();
    }
}

bottom_plate();

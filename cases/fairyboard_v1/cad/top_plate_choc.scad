use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

module top_plate_choc() {
    linear_extrude(1.2)
    difference() {
        pcb_outline();
        m2_holes();
        cutouts_choc();
        
        translate([0, -0.4, 0])
        board_connector_extended();
        
        translate([182.21, -114.51, 0])
        rotate([0, 0, -14])
        edge_rounding(1.1);
        
        translate([238.68, -114.51, 0])
        rotate([0, 0, 104])
        edge_rounding(1.1);
    }
}

top_plate_choc();




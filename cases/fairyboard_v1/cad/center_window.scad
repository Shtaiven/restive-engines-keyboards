use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type=0; // [0:Case, 1:Plate]

// effects case height
Switch_type=0; // [0:MX, 1:Choc v1, 2:Choc v2]

/* [Hidden] */


module center_window_base(fillet=0) {
    scale([0.99, 1, 1])
    offset(r=1.1)
    offset(delta=-1.1)
    board_connector();
}

//--------------------------------------------------------------------------------
module center_window(height=7, thickness=1.5) {
    // TODO: refine
    
    top_fillet(1, height+thickness, 0)
    difference() {
        linear_extrude(thickness+height, convexity=5)
        center_window_base();
        
        if (height > 0) {
            translate([0, 0, -0.01])
            linear_extrude(height+0.01, convexity=5)
            offset(delta=-thickness)
            center_window_base();
        }
                
        translate([0, 0, -0.01])
        linear_extrude(height+thickness+0.02)
        window_mounting_holes();
    }
}

center_window(height=7, thickness=1.5);

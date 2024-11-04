use <fairyboard_v1.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type=0; // [0:Case, 1:Plate]

// effects case height
Switch_type=0; // [0:MX, 1:Choc v1, 2:Choc v2]

/* [Hidden] */


//--------------------------------------------------------------------------------
module center_window(thickness=1.5) {
    // TODO: refine
    linear_extrude(thickness, convexity=5)
    difference() {
    offset(r=1.1)
    offset(delta=-1.1)
        board_connector();
        window_mounting_holes();
    }
}

center_window();

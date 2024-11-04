use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type=0; // [0:Case, 1:Plate]

// effects cutout size and wall height
Switch_type=0; // [0:MX, 1:Choc v1, 2:Choc v2]

/* [Hidden] */


//--------------------------------------------------------------------------------
/** Create the top plate.
 *  Params:
 *    choc_v1_cutouts (bool): choc cutouts and 1.2 height if true
 *      otherwise mx cutouts and 1.5 height
 */
module top_plate(choc_v1_cutouts=false) {
    height = choc_v1_cutouts ? 1.2 : 1.5;
    
    linear_extrude(height, convexity=5)
    difference() {
        pcb_outline();
        m2_holes();
        if (choc_v1_cutouts) {
            cutouts_choc();
        } else {
            cutouts_mx();
        }
    }
}


//--------------------------------------------------------------------------------
/** Wall beneath the plate, with space for the keys.
 *  Params:
 *    height (float): height of the wall (not including plate)
 *      this should be the space between the plate bottom and pcb top
 */
module top_wall(height=5) {
    translate([0, 0, -height])
    linear_extrude(height, convexity=5)
    difference() {
        pcb_outline();
        cutouts_extension();
        m2_spacers();
    }
}


//--------------------------------------------------------------------------------
/** Top case construction without fillets.
 *  Params:
 *    wall_height (float): height of the wall (not including plate)
 *      this should be the space between the plate bottom and pcb top
 *    choc_v1_cutouts (bool): choc cutouts and 1.2 height if true
 *      otherwise mx cutouts and 1.5 height
 */
module top_case_no_fillet(wall_height=5, choc_v1_cutouts=false) {
    translate([0, 0, wall_height])
    difference() {
        union() {
            top_plate(choc_v1_cutouts);
            top_wall(wall_height);
        }

        // Refine top case shape
        linear_extrude(wall_height*2+4, center=true, convexity=5)
        union() {
            // Split the halves of the plate to expose middle of the pcb
            translate([0, -0.326, 0])
            board_connector_extended();

            // Round the top right corner of the left plate
            translate([-28.27, 42.71 , 0])
            rotate([0, 0, -14])
            edge_rounding(1.1);
            
            // Round the top left corner of the right plate
            translate([28.27, 42.71, 0])
            rotate([0, 0, 104])
            edge_rounding(1.1);
        }
    }
}


//--------------------------------------------------------------------------------
/** Top case construction with fillets and completely filled.
 *  Params:
 *    height (float): height of the object. a distance of fillet is below the object
 *      so add fillet to total height for top-only fillet
 *    fillet(float): fillet radius
 *    choc_v1_cutouts (bool): choc cutouts and 1.2 height if true
 *      otherwise mx cutouts and 1.5 height
 */
module top_case_filled_fillet(height=6, fillet=1, choc_v1_cutouts=false) {
    minkowski(convexity=5) {
        linear_extrude(height-(2*fillet), convexity=5)
        fill()
        offset(r=-fillet)
        projection()
        top_case_no_fillet(wall_height=0, choc_v1_cutouts);
        
        sphere(fillet);
    }
}


//--------------------------------------------------------------------------------
/** Top case construction with top fillets.
 *  Params:
 *    wall_height (float): height of the case walls
 *    top_fillet(float): fillet radius
 *    choc_v1_cutouts (bool): choc cutouts and add 1.2 height if true
 *      otherwise mx cutouts and add 1.5 height to total object height
 */
module top_case(wall_height=5, top_fillet=1, choc_v1_cutouts=false) {
    height_addition = choc_v1_cutouts ? 1.2 : 1.5;
    intersection() {
        top_case_no_fillet(wall_height, choc_v1_cutouts);
        
        if (top_fillet > 0) {
            top_case_filled_fillet(height=wall_height+top_fillet+height_addition, choc_v1_cutouts=choc_v1_cutouts);
        }
    }
}


//--------------------------------------------------------------------------------
function switch_type_to_wall_height(switch_type) = (
    switch_type==0 ?
        // MX top case
        // Uses a 1.5mm plate (mx) and top to pcb distance is 5.0mm
        3.5 :
    switch_type==1 ?
        // Choc v1 top case
        // Uses a 1.2mm plate (choc) and top to pcb distance is 2.2mm
        1.0 :
    switch_type==2 ?
        // Choc v2 top case
        // Uses a 1.5mm plate (mx) and top to pcb distance is 2.2mm
        0.7 :
    undef
);


//--------------------------------------------------------------------------------
module generate_top_case(case_type, switch_type) { 
    choc_v1_cutouts = switch_type==1;  // MX/Choc v2 or Choc v1 cutouts
    wall_height = case_type==1 ? 0 : switch_type_to_wall_height(switch_type);
    top_fillet = case_type==1 ? 0 : 1;
    
    if (is_undef(wall_height)) {
        assert(str("wall_height is undefined! case_type must be [0,1] (is ", case_type, ") switch_type must be [0,1,2] (is ", switch_type, ")"));
    }
    top_case(wall_height=wall_height, top_fillet=top_fillet, choc_v1_cutouts=choc_v1_cutouts);
}

generate_top_case(Case_type, Switch_type);

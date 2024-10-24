use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

/**Create the top plate.
 * Params:
 *   choc_v1_cutouts (bool): choc cutouts and 1.2 height if true
 *     otherwise mx cutouts and 1.5 height
 */
module top_plate(choc_v1_cutouts=false) {
    height = choc_v1_cutouts ? 1.2 : 1.5;
    
    linear_extrude(height)
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

/** Wall beneath the plate, with space for the keys.
 *  Params:
 *    height (float): height of the wall (not including plate)
 *      this should be the space between the plate bottom and pcb top
 */
module top_wall(height=5) {
    translate([0, 0, -height])
    linear_extrude(height)
    difference() {
        pcb_outline();
        cutouts_extension();
        m2_spacers();
    }
}

/** Top case construction.
 * Params:
 *   choc_v1_cutouts (bool): choc cutouts and 1.2 height if true
 *     otherwise mx cutouts and 1.5 height
 *   wall_height (float): height of the wall (not including plate)
 *      this should be the space between the plate bottom and pcb top
 */
module top_case(wall_height=5, choc_v1_cutouts=false) {
    difference() {
        union() {
            top_plate(choc_v1_cutouts);
            top_wall(wall_height);
        }

        // Refine top case shape
        linear_extrude(wall_height*2+4, center=true)
        union() {
            // Split the halves of the plate to expose middle of the pcb
            translate([0, -0.326, 0])
            board_connector_extended();

            // Round the top right corner of the left plate
            translate([182.182928, -114.51, 0])
            rotate([0, 0, -14])
            edge_rounding(1.1);
            
            // Round the top left corner of the right plate
            translate([238.722928, -114.51, 0])
            rotate([0, 0, 104])
            edge_rounding(1.1);
        }
    }
}

// Enable (remove *) the case you would like to generate, and disable (add *) the others

// MX top case
// Uses a 1.5mm plate (mx) and top to pcb distance is 5.0mm
top_case(wall_height=3.5, choc_v1_cutouts=false);

// Choc v1 top case
// Uses a 1.2mm plate (choc) and top to pcb distance is 2.2mm
*top_case(wall_height=1.0, choc_v1_cutouts=true);

// Choc v2 top case
// Uses a 1.5mm plate (mx) and top to pcb distance is 2.2mm
*top_case(wall_height=0.7, choc_v1_cutouts=false);

// MX and choc v2 top plate
// No wall between plate and pcb
*top_case(wall_height=0, choc_v1_cutouts=false);

// Choc v1 top plate
// No wall between plate and pcb
*top_case(wall_height=0, choc_v1_cutouts=true);


use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type = 1; // [0:Plate, 1:Case, 2:Spacer]

// effects cutout size and wall height
Switch_type = 1; // [0:MX, 1:Choc v1, 2:Choc v2]

// top fillet radius (default = 1.1)
Top_fillet_radius = 1.1;

// if true, rounds inner top corners
Corner_correction = true;

// generate in 2d for laser cutting
Draw_2D = false;

// correction for width of the laser for laser cutting
Cut_line_width = 0.0;

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
module top_wall() {
    difference() {
        pcb_outline();
        cutouts_extension();
        m2_spacers();
    }
}


//--------------------------------------------------------------------------------
/** Shape for removing infill from top wing.
 *  Params:
 *    wall_thickness (float): thickness of the wall around the cutout
 */
module wing_cutouts(wall_thickness=1.5) {
    offset(delta=-wall_thickness)
    intersection() {
        translate([-75, 0, 0])
        square(150);
        
        difference() {
            pcb_outline();
            
            offset(delta=2.5)
            cutouts_mx();
            
            board_connector_extended();
        }
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
module top_case_no_fillet(wall_height=5, choc_v1_cutouts=false, corner_correction=true) {
    translate([0, 0, wall_height])
    difference() {
        union() {
            top_plate(choc_v1_cutouts);
            
            translate([0, 0, -wall_height])
            linear_extrude(wall_height, convexity=5)
            top_wall();
        }

        // Cutouts for the top wings to reduce material
        // Disabled as this reduces text visibility
        // BUG: Large, infinitely long wings have appeared
        // with a recent update to OpenSCAD
        *mirror([0, 0, 1])
        linear_extrude(wall_height+0.01, convexity=5)
        wing_cutouts();
        
        // Cutouts to remove thin walls around thumb pcb spacers
        mirror([0, 0, 1])
        linear_extrude(wall_height+0.01) {
            translate([44.8, -36.7])
            rotate([0, 0, 38])
            square([6, 1], center = true);
            
            mirror([1, 0, 0])
            translate([44.8, -36.7])
            rotate([0, 0, 38])
            square([6, 1], center = true);
        }
 
        // Refine top case shape
        linear_extrude(wall_height*2+4, center=true, convexity=5)
        union() {
            // Split the halves of the plate to expose middle of the pcb
            translate([0, -0.326, 0])
            board_connector_extended();

            if (corner_correction) {
                // Round the top right corner of the left plate
                translate([-28.27, 42.71 , 0])
                rotate([0, 0, -14])
                edge_rounding_tool(1.1);
                
                // Round the top left corner of the right plate
                translate([28.27, 42.71, 0])
                rotate([0, 0, 104])
                edge_rounding_tool(1.1);
            }
        }
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
module top_case(wall_height=5, top_fillet=1, choc_v1_cutouts=false, corner_correction=true) {
    height_addition = choc_v1_cutouts ? 1.2 : 1.5;
    top_fillet(radius=top_fillet, top=wall_height+height_addition, bottom=0, convexity=5)
    top_case_no_fillet(wall_height, choc_v1_cutouts, corner_correction);
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
module generate_top_case(case_type, switch_type, top_fillet_radius=1.1, corner_correction=true, cut_line_width=0.2) { 
    choc_v1_cutouts = switch_type==1;  // MX/Choc v2 or Choc v1 cutouts
    wall_height = case_type==0 ? 0 : switch_type_to_wall_height(switch_type);
    top_fillet = case_type==0 ? 0 : top_fillet_radius;
    
    if (case_type==2) {
        // TODO: Move this into its own module
        spacer_height = switch_type == 0 ? 3.5 : 1.0;
        
        translate([0, 0, -spacer_height-0.01])
        linear_extrude(spacer_height+0.02)
        offset(delta=cut_line_width/2)
        difference() {
            top_wall();
            
            board_connector_extended();
            
            if (corner_correction) {
                // Round the top right corner of the left plate
                translate([-28.27, 42.71 , 0])
                rotate([0, 0, -14])
                edge_rounding_tool(1.1);
                
                // Round the top left corner of the right plate
                translate([28.27, 42.71, 0])
                rotate([0, 0, 104])
                edge_rounding_tool(1.1);
            }
        }
    } else {
        assert(!is_undef(wall_height), str("wall_height is undefined! switch_type must be [0,1,2] (is ", switch_type, ")"));
        top_case(wall_height=wall_height, top_fillet=top_fillet, choc_v1_cutouts=choc_v1_cutouts, corner_correction=corner_correction);
    }
}

if (Draw_2D) {
    projection()
    generate_top_case(Case_type, Switch_type, Top_fillet_radius, Corner_correction, Cut_line_width);
} else {
    generate_top_case(Case_type, Switch_type, Top_fillet_radius, Corner_correction, Cut_line_width);
}
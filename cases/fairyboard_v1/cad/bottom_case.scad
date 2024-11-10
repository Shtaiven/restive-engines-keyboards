use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type = 0; // [0:Case, 1:Plate]

// effects case height
Switch_type = 0; // [0:MX, 1:Choc v1, 2:Choc v2]

/* [Hidden] */


//--------------------------------------------------------------------------------
/** Create the bottom plate
 *  Params:
 *    height (float): total height of the bottom plate
 *    bottom_fillet (float): radius of the bottom fillet
 *      requirement height >= bottom_fillet > 0
 */
module bottom_plate(height=1.5, bottom_fillet=0) {
    difference() {
    
        // Create the fillet at the bottom of the plate if wanted
        if (height >= bottom_fillet && bottom_fillet > 0) {
            bottom_fillet(bottom_fillet, height, 0, convexity=5)
            linear_extrude(height, convexity=5)
            pcb_outline();
        }

        // Simply extrude otherwise
        else {
            linear_extrude(height, convexity=5)
            pcb_outline();
        }
        
        // Cut out the holes
        linear_extrude(height)
        m2_holes();
    }
}


//--------------------------------------------------------------------------------
/** Inner cutout of the bottom case
 *  Params:
 *    height (float): height of the cutout
 */
module bottom_case_inner(height=2, wall_thickness=0.8) {
    linear_extrude(height, convexity=5)
    offset(delta=-wall_thickness)
    pcb_outline();
}


//--------------------------------------------------------------------------------
/** Construct the bottom case
 *  Params:
 *    height (float): total height of the bottom case
 *    bottom_fillet (float): radius of the bottom fillet
 *      requirement height >= bottom_fillet > 0
 */
module bottom_case(height=5, bottom_thickness=3, bottom_fillet=1.1, wall_thickness=1.5) {
    difference() {
        bottom_plate(height=height, bottom_fillet=bottom_fillet);
        
        
        if (bottom_thickness < height) {
            // Fillet
            translate([0, 0, bottom_thickness])
            bottom_case_inner(height=height-bottom_thickness+0.01, wall_thickness=wall_thickness);
            
            // Cutouts for hotswap sockets near the edge
            translate([0, 0, bottom_thickness])
            linear_extrude(height-bottom_thickness+0.01, convexity=5)
            component_cutouts();
        }
        
        // Detents for screws
        if (bottom_thickness < height && bottom_thickness > 1.5) {
            linear_extrude(1.5, convexity=5)
            offset(r=0.2)
            m2_spacers();
        }
        

    }
}


//--------------------------------------------------------------------------------
/** Cutouts for components which may intersect with the case walls
 *  Params:
 *    cutout_size (float): size of the squares for the hotswap cutouts
 */
module component_cutouts(cutout_size=2.6) {
    // left matrix sockets
    intersection() {
        difference() {
            translate([-100, 0, 0])
            square([200, 150], center=true);
            
            translate([-43, -39, 0])
            rotate([0, 0, -46])
            square([40, 25], center=true);
        }
        
        translate([-8.937, -1.636, 0])
        offset(delta=-(14-cutout_size)/2)
        cutouts_mx();
    }
    
    // right matrix sockets
    intersection() {
        difference() {
            translate([100, 0, 0])
            square([200, 150], center=true);
            
            translate([43, -39, 0])
            rotate([0, 0, 46])
            square([40, 25], center=true);
        }
        
        translate([-7.122, -5.641, 0])
        offset(delta=-(14-cutout_size)/2)
        cutouts_mx();
    }
    
    // right thumb sockets
    intersection() {
        translate([36, -46, 0])
        rotate([0, 0, 46])
        square([20, 25], center=true);
        
        translate([-2.900, -8.610, 0])
        offset(delta=-(14-cutout_size)/2)
        cutouts_mx();
    }
    
    // Reset switch
    translate([-18, 5.8675+39.782-5.5, 0])  // 39.782 is height of middle part, 5.5 is height of switch
    square([7.3, 4.5], center=true);
}


//--------------------------------------------------------------------------------
function switch_type_to_case_height(switch_type) = (
    // Base wall height = 2mm
    // Bottom thickness = 1.5mm
    switch_type==0 ?
        // MX: 7mm spacer - 1.5mm pcb - 2mm hotswap sockets - 3.5mm between plate and pcb = 0 extra wall height
        2+3 :
    switch_type==1 ?
        // Choc v1: 5mm spacer - 1.5mm pcb - 2mm hotswap sockets - 1mm between plate and pcb = 0.5mm extra wall height
        2.5+3 :
    switch_type==2 ?
        // Choc v2: 5mm spacer - 1.5mm pcb - 2mm hotswap sockets - 0.7mm between plate and pcb = 0.8mm extra wall height
        2.8+3 :
    undef
);


//--------------------------------------------------------------------------------
module generate_bottom_case(case_type, switch_type) {
    case_height = switch_type_to_case_height(switch_type);
    
     // translation helps with assembly so height doesn't need to be known at assembly
    translate([0, 0, -case_height])
    if (case_type==1) {  // Plate: compatible with all switch type
        bottom_plate();
    }
    else {  // Case
        if (is_undef(case_height) || case_type!=0) {
            assert(str("height is undefined! case_type must be [0,1] (is ", case_type, ") switch_type must be [0,1,2] (is ", switch_type, ")"));
        }
        
        bottom_case(height=case_height);
    }
}

generate_bottom_case(Case_type, Switch_type);

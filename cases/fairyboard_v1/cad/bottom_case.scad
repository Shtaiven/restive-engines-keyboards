use <fairyboard_v1.scad>
use <hardware.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// type of case
Case_type = 0; // [0:Plate, 1:Low profile case, 2:High profile case]

// effects case height for high profile
Switch_type = 0; // [0:MX, 1:Choc v1, 2:Choc v2]

// place holes for mounting the center window to the bottom
Window_mounting_holes = false;

/* [Hidden] */


//--------------------------------------------------------------------------------
/** Create the bottom plate.
 *  Params:
 *    height (float): total height of the bottom plate
 *    bottom_fillet (float): radius of the bottom fillet
 *      requirement height >= bottom_fillet > 0
 *    hole_diameter (float): diameter of the screw holes
 */
module bottom_plate(height=1.5, bottom_fillet=0, hole_diameter=2.4, window_mounting_detents=true) {
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
        translate([0, 0, -0.01])
        linear_extrude(height+0.02, convexity=5)
        offset(r=(hole_diameter-2.4)/2)
        m2_holes();
        
        if (window_mounting_detents) {
            translate([0, 0, -0.01])
            linear_extrude(height+0.02, convexity=5)
            offset(r=(hole_diameter-2.4)/2)
            window_mounting_holes();
        }
    }
}


//--------------------------------------------------------------------------------
/** Cutouts for components which may intersect with the case walls.
 *  Params:
 *    socket_pad_size (float): size of the squares for the hotswap cutouts
 *    diode_size (float): size of the squares for the diode cutouts
 */
module component_cutouts(socket_pad_size=2.6, diode_size=5.2) {
    module left_matrix_sockets_centered(socket_pad_size) {
        // left matrix sockets
        intersection() {
            // region of interest
            difference() {
                translate([-100, 0, 0])
                square([200, 150], center=true);
                
                // middle thumb
                translate([-54, -31, 0])
                rotate([0, 0, -31])
                square([20, 20], center=true);
                
                // inner thumb
                translate([-37.5, -45, 0])
                rotate([0, 0, -47])
                square([20, 20], center=true);
            }
            
            // pads
            offset(delta=-(14-socket_pad_size)/2)
            cutouts_mx();
        }
    }
    module left_thumb_middle_sockets_centered(socket_pad_size) {
        intersection() {
            translate([-54, -31, 0])
            rotate([0, 0, -31])
            square([20, 20], center=true);
            
            offset(delta=-(14-socket_pad_size)/2)
            cutouts_mx();
        }
    }
    module left_thumb_inner_sockets_centered(socket_pad_size) {
        intersection() {
            translate([-37.5, -45, 0])
            rotate([0, 0, -47])
            square([20, 20], center=true);
            
            offset(delta=-(14-socket_pad_size)/2)
            cutouts_mx();
        }
    }
    module right_matrix_sockets_centered(socket_pad_size) {
        intersection() {
            difference() {
                translate([100, 0, 0])
                square([200, 150], center=true);
                
                translate([54, -31, 0])
                rotate([0, 0, 31])
                square([20, 20], center=true);
                
                translate([37.5, -45, 0])
                rotate([0, 0, 47])
                square([20, 20], center=true);
            }
            
            offset(delta=-(14-socket_pad_size)/2)
            cutouts_mx();
        }
    }
    module right_thumb_middle_sockets_centered(socket_pad_size) {
        intersection() {
            translate([54, -31, 0])
            rotate([0, 0, 31])
            square([20, 20], center=true);
            
            offset(delta=-(14-socket_pad_size)/2)
            cutouts_mx();
        }
    }
    module right_thumb_inner_sockets_centered(socket_pad_size) {
        intersection() {
            translate([37.5, -45, 0])
            rotate([0, 0, 47])
            square([20, 20], center=true);
            
            offset(delta=-(14-socket_pad_size)/2)
            cutouts_mx();
        }
    }
    
    // For each region of socket, we will iterate over the 4 hotwap socket pad
    // locations relative to the center of a switch in that region.
    // These are obtained from the kicad pcb
    left_matrix_socket_translations = [
        [-8.937, -1.636, socket_pad_size],  // bottom-left
        [-6.261, 4.178, socket_pad_size],  // top-left
        [6.898, 3.517, socket_pad_size],  // top-right
        [1.737, -6.566, socket_pad_size],  // bottom-right
        [5.885, -5.332, diode_size]  // diode
    ];
    left_thumb_middle_socket_translations = [
        [-9.034, 0.968, socket_pad_size],  // bottom-left
        [-4.815, 5.784, socket_pad_size],  // top-left
        [7.621, 1.413, socket_pad_size],  // top-right
        [-0.199, -6.789, socket_pad_size],  // bottom-right
        [4.128, -6.784, diode_size]  // diode
    ];
    left_thumb_inner_socket_translations = [
        [-8.387, 3.494, socket_pad_size],  // bottom-left
        [-2.974, 6.915, socket_pad_size],  // top-left
        [7.700, -0.807, socket_pad_size],  // top-right
        [-2.119, -6.453, socket_pad_size],  // bottom-right
        [2.031, -7.677, diode_size]  // diode
    ];
    right_matrix_socket_translations = [
        [-7.122, -5.641, socket_pad_size],  // bottom-left
        [-7.490, 0.750, socket_pad_size],  // top-left
        [4.439, 6.343, socket_pad_size],  // top-right
        [4.617, -4.982, socket_pad_size],  // bottom-right
        [7.699, -1.945, diode_size]  // diode
    ];
    right_thumb_middle_socket_translations = [
        [-5.226, 7.432, socket_pad_size],  // bottom-left
        [-7.394, 1.407, socket_pad_size],  // top-left
        [2.455, 7.343, socket_pad_size],  // top-right
        [5.841, -3.465, socket_pad_size],  // bottom-right
        [7.935, 0.322, diode_size]  // diode
    ];
    right_thumb_inner_socket_translations = [
        [-2.900, -8.610, socket_pad_size],  // bottom-left
        [-6.690, -3.449, socket_pad_size],  // top-left
        [0.268, 7.738, socket_pad_size],  // top-right
        [6.585, -1.664, socket_pad_size],  // bottom-right
        [7.517, 2.562, diode_size]  // diode
    ];

    
    for (t=left_matrix_socket_translations) {
        translate([t.x, t.y, 0])
        left_matrix_sockets_centered(t[2]);
    }
    
    for (t=left_thumb_middle_socket_translations) {
        translate([t.x, t.y, 0])
        left_thumb_middle_sockets_centered(t[2]);
    }
    
    for (t=left_thumb_inner_socket_translations) {
        translate([t.x, t.y, 0])
        left_thumb_inner_sockets_centered(t[2]);
    }
    
    for (t=right_matrix_socket_translations) {
        translate([t.x, t.y, 0])
        right_matrix_sockets_centered(t[2]);
    }
    
    for (t=right_thumb_middle_socket_translations) {
        translate([t.x, t.y, 0])
        right_thumb_middle_sockets_centered(t[2]);
    }
    
    for (t=right_thumb_inner_socket_translations) {
        translate([t.x, t.y, 0])
        right_thumb_inner_sockets_centered(t[2]);
    }

    
    // Reset switch
    translate([-18, 5.8675+39.782-5.5, 0])  // 39.782 is height of middle part, 5.5 is height of switch
    square([7.3, 4.5], center=true);
}


//--------------------------------------------------------------------------------
/** Inner cutout of the bottom case for the high profile case.
 *  Params:
 *    height (float): height of the cutout
 */
module bottom_case_inner(height=2, wall_thickness=0.8) {
    linear_extrude(height, convexity=5)
    offset(delta=-wall_thickness)
    pcb_outline();
}


//--------------------------------------------------------------------------------
/** Construct the high profile bottom case.
 *  Params:
 *    height (float): total height of the bottom case
 *    bottom_fillet (float): radius of the bottom fillet
 *      requirement height >= bottom_fillet > 0
 *    hole_diameter (float): diameter of the screw holes
 *    screw_detent_diameter (float): diameter of the screw detents
 *    screw_detent_depth (float): depth of the screw detents
 */
module bottom_case_high_profile(
    height=5,
    bottom_thickness=3,
    bottom_fillet=1.1,
    wall_thickness=1.5,
    hole_diameter=2.4,
    screw_detent_diameter=4,
    screw_detent_depth=1.5,
    scuf_detents=true,
    window_mounting_detents=true
) {
    difference() {
        bottom_plate(height=height, bottom_fillet=bottom_fillet, hole_diameter=hole_diameter, window_mounting_detents=window_mounting_detents);
        
        if (bottom_thickness < height) {
            // Inner cutout
            translate([0, 0, bottom_thickness])
            bottom_case_inner(height=height-bottom_thickness+0.01, wall_thickness=wall_thickness);
            
            // Cutouts for hotswap sockets near the edge
            translate([0, 0, bottom_thickness])
            linear_extrude(height-bottom_thickness+0.01, convexity=5)
            component_cutouts();
        }
        
        // Detents for screws
        if (bottom_thickness < height && bottom_thickness > 1.5) {
            linear_extrude(screw_detent_depth, convexity=5)
            offset(r=(screw_detent_diameter-3.2)/2)
            m2_spacers();
            
            if (window_mounting_detents) {
                linear_extrude(screw_detent_depth, convexity=5)
                offset(r=(screw_detent_diameter-2.4)/2)
                window_mounting_holes();
            }
        }
        
        // SCUF Rubber feet detents
        if (scuf_detents) {
            center_to_board_bottom = [0, 3.68];
            board_bottom_to_top_index = [57.105, 41.097];
            top_index_to_board_edge = [0.2, 0.1];
            board_bottom_to_home_pinky = [121.363, 18.986];
       
            top_right_scuf = center_to_board_bottom + board_bottom_to_top_index  + top_index_to_board_edge;
            mid_right_scuf =  center_to_board_bottom + board_bottom_to_home_pinky;
            bot_right_scuf = [56, -33];

            // [x, y, rotation]
            detent_locations = [
                [top_right_scuf.x, top_right_scuf.y, 14],  // top-right
                [-top_right_scuf.x, top_right_scuf.y, -14],  // top-right
                [mid_right_scuf.x, mid_right_scuf.y, 90+14],  // mid-right
                [-mid_right_scuf.x, mid_right_scuf.y, 90-14],  // mid-left
                [bot_right_scuf.x, bot_right_scuf.y, 46],  // bottom-right
                [-bot_right_scuf.x, bot_right_scuf.y, -46],  // bottom-left
            ];
            for (l=detent_locations) {
                translate([l.x, l.y, 0])
                rotate([0, 0, l.z])
                scuf_feet_detent();
            }
        }
    }
}


//--------------------------------------------------------------------------------
/** Construct the low profile bottom case.
 */
module bottom_case_low_profile(bottom_fillet=1.1, wall_thickness=1.5, window_mounting_detents=true) {  
    // Most of the low profile bottom case is a special case of the high profile case
    bottom_case_high_profile(
        height=5,  // Total case thickness = min height of m2 x 3 heatset inserts + 1mm for screws and stability= 5mm
        bottom_thickness=3,  // Leave enough space for components
        bottom_fillet=bottom_fillet,
        wall_thickness=wall_thickness,
        hole_diameter=3.1,  // diameter needed for the heatset inserts
        screw_detent_depth=0,  // we don't have screws!
        window_mounting_detents=window_mounting_detents
    );
    
    // Create the outer wall for the heatset inserts
    // Wall diameter = 3.1 + 2*1.3 = 5.7
    translate([0, 0, 2]) {
    difference() {
        linear_extrude(height=2, convexity=5)
        offset(r=(5.7-3.2)/2)
        m2_spacers();
        
        translate([0, 0, -0.01])
        linear_extrude(height=2+0.02, convexity=5)
        offset(r=(3.1-3.2)/2)
        m2_spacers();
        
        linear_extrude(height=2+0.01, convexity=5)
        component_cutouts();
    }
            
        
    if (window_mounting_detents) {
        difference() {
            linear_extrude(height=2, convexity=5)
            offset(r=(5.7-2.4)/2)
            window_mounting_holes();
        
            translate([0, 0, -0.01])
            linear_extrude(height=2+0.02, convexity=5)
            offset(r=(3.1-2.4)/2)
            window_mounting_holes();
        }
    }
    }
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
module generate_bottom_case(case_type, switch_type, window_mounting_holes) {
     // translation helps with assembly so height doesn't need to be known at assembly
    if (case_type==0) {  // Plate: compatible with all switch type
        bottom_plate(window_mounting_detents=window_mounting_holes);
    }
    else if (case_type==1) {  // Low profile case
        translate([0, 0, -5])
        bottom_case_low_profile(window_mounting_detents=window_mounting_holes);
    }
    else if (case_type==2) {  // High profile case
        case_height = switch_type_to_case_height(switch_type);
        assert(!is_undef(case_height), str("height is undefined! switch_type must be [0,1,2] (is ", switch_type, ")"));
        translate([0, 0, -case_height])
        bottom_case_high_profile(height=case_height, window_mounting_detents=window_mounting_holes);
    }
    else {
        assert(false, str("invalid case type! case_type must be [0,1,2] (is ", case_type, ")"));
    }
}

generate_bottom_case(Case_type, Switch_type, Window_mounting_holes);

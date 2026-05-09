use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

/* [General] */

// plate (flat) or case (featured)
Window_type = 1;  //[0:Plate, 1:Case]

// set to true if you want to export dxf for plate
Projection_2D = false;

/* [Window parameters] */

// height of the outer walls
Wall_height = 0.7;  //[::float]

// height of the circular window
Window_height = 10.0;  //[::float]

// thickness of the shell
Thickness = 1.5;  //[::float]

// fillet radius along the top edges
Top_fillet = 1.1;  //[::float]

// the fillet around the window bump (if present)
Window_bump_fillet = 1.1;  //[::float]

// cutout for a screen if opaque
Screen_cutout = true;

// cutout for an 8-pos terminal block on the left
Terminal8_cutout = true;

// cutout for a 5-pos terminal block on the right
Terminal5_cutout = false;

// cutout in the back for the usb and microcontroller
Usb_cutout=true;

// cutout in the back for the reset button
Reset_button_cutout=true;

// cutout in the back for the power switch
Power_switch_cutout=true;

// cutout for the JST connector
JST_cutout=true;

// hollow out the base shape
Hollow=false;

// round the corners of the base
Corner_rounding=false;

// how much the window should overhang the top (for outer walls)
Top_overhang=1.8*2 + 0.15;

/* [Hidden] */


//--------------------------------------------------------------------------------
/// Create the base shape of the center window.
module center_window_base(corner_radius=1.1) {
    scale([0.985, 1, 1])
    offset(r=corner_radius)
    offset(delta=-corner_radius)
    board_connector();
}


//--------------------------------------------------------------------------------
/// Create the protruding window shape.
module center_window_inner(top_overhang=undef) {
    if (is_undef(top_overhang)) {
        intersection() {
            translate([0, -23.575, 0])
            center_window_base();

            square([22, 55], center = true); 
        }
    } else {
        // allow a top overhang (helps cover usb port if you have outer walls)
        square([22, 39.78+top_overhang], center = true);
    }
}

//--------------------------------------------------------------------------------
/** Create the center window with a wall and rounded window.
 *  Params:
 *    wall_height (float): height of the outer wall
 *    window_height (float): height of the circular window
 *    thickness (float): thickness of the shell
 *    fillet (float): fillet radius along the top edges
 *    *_cutout (bool): make a cutout for the component if true
 */
module center_window(
    wall_height=3.5,
    window_height=10.0,
    thickness=1.5,
    fillet=1.1,
    window_bump_fillet=1.1,
    screen_cutout=true,
    terminal8_cutout=true,
    terminal5_cutout=false,
    usb_cutout=true,
    reset_button_cutout=true,
    power_switch_cutout=true,
    jst_cutout=true,
    hollow=true,
    corner_rounding=true,
    top_overhang=undef
) {
    max_window_fillet = 4;
    calculated_window_fillet = min(window_height-wall_height, max_window_fillet);
    
    top_window_fillet = is_undef(window_bump_fillet) ? calculated_window_fillet : window_bump_fillet;
    difference() {
        union() {
            // Create the main hollowed window shape
            top_fillet(fillet, wall_height+thickness, 0)
            linear_extrude(thickness+wall_height, convexity=5)
            center_window_base(corner_rounding ? 1.1 : 0);
            
            // Create the window bump
            if (window_height > wall_height) {
                translate([0, 23.575, wall_height+thickness])
                top_fillet(top_window_fillet, window_height-wall_height, 0)
                linear_extrude(window_height-wall_height)
                center_window_inner(top_overhang);
            }
        }

        // Hollow out the base shape
        if (wall_height > 0 && hollow) {
            translate([0, 0, -0.01])
            linear_extrude(wall_height+0.01, convexity=5)
            offset(delta=-thickness)
            center_window_base();
        }
        
        // Hollow out the window bump
        if (window_height > wall_height) {
            top_fillet(top_window_fillet, window_height, 0)
            translate([0, 23.575, 0])
            linear_extrude(window_height)
            offset(delta=-thickness)
            center_window_inner();
        }
        
        // Mounting hole cutouts
        translate([0, 0, -0.01])
        linear_extrude(window_height+thickness+0.02)
        window_mounting_holes();

        bottom_offset = 3.68;  // y-offset of the "bottom" of the window
        
        // Terminal cutouts
        if (terminal8_cutout) {
            translate([-11.78, bottom_offset, -0.01])
            mirror([1, 0, 0])
            // extra x added to chop off the thin bit left over
            cube([25.88, 7.4, window_height+thickness+0.02]);
        }

        if (terminal5_cutout) {
            translate([11.84, bottom_offset, -0.01])
            cube([13.26, 7.4, window_height+thickness+0.02]);
        }
        
        top_edge_offset = 43.47;
        
        // USB cutout
        if (usb_cutout) {
            usb_overhang = is_undef(top_overhang) ? 0.0 : top_overhang;
            usb_dims = [19, 8.5+window_bump_fillet];
            translate([-usb_dims.x/2, top_edge_offset-thickness-0.25, -window_bump_fillet])
            rotate([90, 0 ,0])
            linear_extrude(thickness+2, center=true)
            offset(r=window_bump_fillet)
            offset(delta=-window_bump_fillet)
            square(usb_dims);
            
            translate([-5, top_edge_offset+1-thickness-1+usb_overhang/2, -window_bump_fillet])
            rotate([90, 0 ,0])
            linear_extrude(thickness+2, center=true)
            offset(r=window_bump_fillet)
            offset(delta=-window_bump_fillet)
            square([10, usb_dims.y]);
        }
        
        // Slide switch cutout
        if (power_switch_cutout) {
            pwr_sw_size = [9.2, 9, 3];
            translate([13.2, top_edge_offset+1, 0])
            mirror([0, 1, 0])
            cube(pwr_sw_size);
        }
        
        // Reset button cutout
        if (reset_button_cutout) {
            reset_btn_size = [8.5, 9, 5];
            translate([-13.8, top_edge_offset+1, 0])
            mirror([1, 1, 0])
            cube(reset_btn_size);
        }
        
        // JST (battery) cutout
        if (jst_cutout) {
            jst_size = [8, 11, 6];
            translate([11, bottom_offset+14, 0])
            cube(jst_size);
            
            // space for wires
            wires_size = [10, 10, 1.6];
            translate([9, bottom_offset+4, 0])
            cube(wires_size);
        }
        
        // Optional screen cutout
        if (screen_cutout) {
            // Original rounded extruded screen cutout
            screen_dims = [12, 26];
            //translate([-screen_dims.x/2, bottom_offset+7, 0])
            //linear_extrude(window_height+thickness+1)
            //offset(r=fillet)
            //offset(delta=-fillet)
            //square([screen_dims.x, screen_dims.y]);
            
            // New chamfered screen cutout (60 degrees)
            translate([0, (bottom_offset+top_edge_offset)/2, window_height-0.03])
            chamfered_rectangle([screen_dims.x+2*(thickness+0.03), screen_dims.y+(2*thickness+0.03)], screen_dims, thickness+0.03);
        }
    }
}


//--------------------------------------------------------------------------------
/** Create the flat center plate.
 *  Params:
 *    thickness (float): thickness of the plate
 *    *_cutout (bool): make a cutout for the component if true
 */
module center_plate(
    thickness=2,
    screen_cutout=false,
    terminal8_cutout=true,
    terminal5_cutout=false
) {
    center_window(
        wall_height=0,
        window_height=0,
        thickness=thickness,
        fillet=0,
        screen_cutout=screen_cutout,
        terminal8_cutout=terminal8_cutout,
        terminal5_cutout=terminal5_cutout,
        usb_cutout=false,
        reset_button_cutout=false,
        power_switch_cutout=false,
        jst_cutout=false,
        hollow=false,
        corner_rounding=Corner_rounding,
    );
}

if (Window_type == 1 /* Case */) { 
    center_window(
        wall_height=Wall_height,
        window_height=Window_height,
        thickness=Thickness,
        fillet=Top_fillet,
        window_bump_fillet=Window_bump_fillet,
        screen_cutout=Screen_cutout,
        terminal8_cutout=Terminal8_cutout,
        terminal5_cutout=Terminal5_cutout,
        usb_cutout=Usb_cutout,
        reset_button_cutout=Reset_button_cutout,
        power_switch_cutout=Power_switch_cutout,
        jst_cutout=JST_cutout,
        hollow=Hollow,
        corner_rounding=Corner_rounding,
        top_overhang=Top_overhang
    );
}
else if (Window_type == 0 /* Plate */) {
    if (Projection_2D) {
        projection() center_plate(
            thickness=Thickness,
            screen_cutout=Screen_cutout,
            terminal8_cutout=Terminal8_cutout,
            terminal5_cutout=Terminal5_cutout
        );
    }
    else {
        center_plate(
            thickness=Thickness,
            screen_cutout=Screen_cutout,
            terminal8_cutout=Terminal8_cutout,
            terminal5_cutout=Terminal5_cutout
        );
    }
}

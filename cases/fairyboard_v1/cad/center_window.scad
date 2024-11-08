// TODO: cutouts
// TODO: try different window shapes
use <fairyboard_v1.scad>
use <util.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// height of the outer walls
Wall_height = 5;

// height of the circular window
Window_height = 10;

// thickness of the shell
Thickness = 1.5;

// fillet radius along the top edges
Top_fillet = 1.1;

/* [Hidden] */


//--------------------------------------------------------------------------------
/// Create the base shape of the center window.
module center_window_base() {
    scale([0.99, 1, 1])
    offset(r=1.1)
    offset(delta=-1.1)
    board_connector();
}


//--------------------------------------------------------------------------------
/// Create the protruding window shape.
module center_window_inner() {
    resize([27.9, 0, 0])
    translate([0, 23.575, 0])
    mirror([0, 1, 0])
    center_window_base();
    
//    circle(19.89);
}

//--------------------------------------------------------------------------------
/** Create the center window with a wall and circular window.
 *  Params:
 *    wall_height (float): height of the outer wall
 *    window_height (float): height of the circular window
 *    thickness (float): thickness of the shell
 *    fillet (float): fillet radius along the top edges
 */
module center_window(wall_height=5, window_height=10, thickness=1.5, fillet=1.1) {
    difference() {
        union() {
            top_fillet(fillet, wall_height+thickness, 0)
            difference() {
                linear_extrude(thickness+wall_height, convexity=5)
                center_window_base();
                
                if (wall_height > 0) {
                    translate([0, 0, -0.01])
                    linear_extrude(wall_height+0.01, convexity=5)
                    offset(delta=-thickness)
                    center_window_base();
                }
            }
            
            if (window_height > wall_height) {
                
                translate([0, 23.575, wall_height])
                top_fillet(fillet, thickness+window_height-wall_height, 0)
                linear_extrude(thickness+window_height-wall_height)
                center_window_inner();
            }
        }

        if (window_height > wall_height) {
            translate([0, 23.575, 0])
            linear_extrude(window_height)
            offset(delta=-thickness)
            center_window_inner();

        }
        
        // Mounting hole cutouts
        translate([0, 0, -0.01])
        linear_extrude(window_height+thickness+0.02)
        window_mounting_holes();
        
        // Terminal cutouts
        translate([-11, 3.6, -0.01])
        mirror([1, 0, 0])
        cube([21, 7.2, window_height+thickness+0.02]);
        
        translate([11, 3.6, -0.01])
        cube([13.5, 7.2, window_height+thickness+0.02]);
        
        // USB cutout
        
        // Slide switch cutout
        
        // Reset button cutout
    }
}

center_window(wall_height=Wall_height, window_height=Window_height, thickness=Thickness, fillet=Top_fillet);

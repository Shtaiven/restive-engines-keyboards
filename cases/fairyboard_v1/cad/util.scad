//--------------------------------------------------------------------------------
/** Contruction to round an arbitrary edge with by taking the difference.
 *  Params:
 *    radius (float): rounding radius
 */
module edge_rounding_tool(radius) {
    difference() {
        square(radius*1.01);
        circle(radius);
    }
}


//--------------------------------------------------------------------------------
/** Construct a filled object with top and bottom fillets.
 *  Params:
 *    radius (float): fillet radius
 *    height (float): height of the object
 *    convexity (int): convexity of minkowski and extrusion operations (default=5)
 */
module top_bottom_fillet_filled(radius, height, convexity=5) {
    translate([0, 0, radius])
    minkowski(convexity=convexity) {
        linear_extrude(height-(2*radius), convexity=convexity)
        fill()
        offset(r=-radius)
        projection() {
            children();
        }
        
        sphere(radius);
    }
}


//--------------------------------------------------------------------------------
/** Fillet the top and bottom of a flat 3d object with arbitrary outline.
 *  Params:
 *    radius (float): fillet radius
 *    top (float): top (z) of the object to fillet
 *    bottom (float): bottom (z) of the object to fillet
 *    convexity (int): convexity of minkowski and extrusion operations (default=5)
 */
module top_bottom_fillet(radius, top, bottom, convexity=5) {
    intersection() {
        translate([0, 0, bottom])
        top_bottom_fillet_filled(radius=radius, height=top-bottom, convexity=convexity)
        children();
        
        children();
    }
}


//--------------------------------------------------------------------------------
/** Fillet the top of a flat 3d object with arbitrary outline.
 *  Params:
 *    radius (float): fillet radius
 *    top (float): top (z) of the object to fillet
 *    bottom (float): bottom (z) of the object to fillet
 *    convexity (int): convexity of minkowski and extrusion operations (default=5)
 */
module top_fillet(radius, top, bottom, convexity=5) {
    top_bottom_fillet(radius, top, bottom-radius-0.01, convexity=convexity)
    children();
}


//--------------------------------------------------------------------------------
/** Fillet the bottom of a flat 3d object with arbitrary outline.
 *  Params:
 *    radius (float): fillet radius
 *    top (float): top (z) of the object to fillet
 *    bottom (float): bottom (z) of the object to fillet
 *    convexity (int): convexity of minkowski and extrusion operations (default=5)
 */
module bottom_fillet(radius, top, bottom, convexity=5) {
    top_bottom_fillet(radius, top+radius+0.01, bottom, convexity=convexity)
    children();
}


// Testing
$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

translate([0, 15, 0])
linear_extrude(2)
edge_rounding_tool(5);

top_bottom_fillet(2, 10, 0)
cube(10);
%cube(10);

translate([10+5, 0, 0]) {
top_fillet(2, 20, 0)
cube(20);
%cube(20);
}

translate([10+20+5+5, 0, 0]) {
bottom_fillet(2, 5, 0)
cube(5);
%cube(5);
}

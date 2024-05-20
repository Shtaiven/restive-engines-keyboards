use <openscad-fillets/fillets3d.scad>
use <hardware.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;

LENGTH = 25;
WIDTH = 22;
HEIGHT = 10;
FILLET_STEPS = $preview ? 10 : 25;
FILLET_ENABLE = 1;

module outline(width, length) {
    translate([-width/2, 0, 0])
    square([width, length/2]);
    
    translate([-width/2,-length/2,0])
    square([width/2, length]);
    
    radius = width < length ? width/2 : length/2;
    difference(){
    resize([width, length, 0])
    circle(radius);
        
    translate([-radius, 0, 0])
    square(radius*2);
        
    translate([-radius-width/2, -length/2, 0])
    square(radius*2);
    }
}

difference() {
topFillet(t=HEIGHT, r=5, s=FILLET_STEPS, e=FILLET_ENABLE)
linear_extrude(HEIGHT)
outline(WIDTH, LENGTH);

translate([0, 0, 2])    
linear_extrude(HEIGHT)
offset(delta=-5)
outline(WIDTH, LENGTH);

translate([-6, LENGTH/2-6, 4])
cube([12, 7, HEIGHT]);

translate([-WIDTH/2-2.5, -7.5, 2])
cube([10, 12.5, HEIGHT/2-2]);
    
translate([0, 0, -1])
cylinder(h=5, d=1.6);
}


standoff(1.6, 2.9, 4);
module scuf_feet_outline() {
    width = 36;
    diameter = 6;
    
    hull() {
        translate([width/2, 0, 0])
        circle(d=diameter);
        translate([-width/2, 0, 0])
        circle(d=diameter);
    }
    
}

module scuf_feet_detent() {
    translate([0, 0, 0.5])
    mirror([0, 0, 1])
    linear_extrude(0.5, convexity=5, scale=[42.2/42, 6.2/6]) // 0.1mm chamfer
    scuf_feet_outline();
}

module choc_v1_keycap_spacer(depth=0.6) {
    hole_size = [1.4, 3.2];
    x_distance = 5.7;
    fillet_radius = 2;
    $fn=8;
    linear_extrude(depth, convexity=5)
    difference() {
        offset(delta=-fillet_radius)
        offset(r=fillet_radius)
        square([x_distance+hole_size.x+2, hole_size.y+2], center = true);
        
        translate([x_distance/2, 0, 0])
        square(hole_size, center = true);
        
        translate([-x_distance/2, 0, 0])
        square(hole_size, center = true);
    }
}

//scuf_feet_detent();
choc_v1_keycap_spacer();

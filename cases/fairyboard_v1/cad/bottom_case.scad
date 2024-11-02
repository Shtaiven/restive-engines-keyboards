use <fairyboard_v1.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

module bottom_plate(height=1.5) {
    linear_extrude(height)
    difference() {
        pcb_outline();
        m2_holes();
    }
}

module bottom_case_inner(height=2) {
    linear_extrude(height)
    pcb_edge_support();
}

module bottom_case(wall_height=2) {
    difference() {
        // TODO: apply fillet
        bottom_plate(height=wall_height);
        
        // TODO: apply fillet
        translate([0, 0, 1.5])
        bottom_case_inner(height=wall_height-1.5);
    }
}

// Compatible with all
*bottom_plate();

// MX 7mm spacer - 1.5mm pcb - 2mm hotswap sockets - 3.5mm between plate and pcb = 0 extra wall height
bottom_case(wall_height=2);

// Choc v1 5mm spacer - 1.5mm pcb - 2mm hotswap sockets - 1mm between plate and pcb = 0.5mm extra wall height
*bottom_case(wall_height=2.5);

// Choc v2 5mm spacer - 1.5mm pcb - 2mm hotswap sockets - 0.7mm between plate and pcb = 0.8mm extra wall height
*bottom_case(wall_height=2.8);

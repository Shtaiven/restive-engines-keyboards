//BOARD_WIDTH = 282.9;
//BOARD_HEIGHT = 125.942;
//OFFSET_X = -100;
//OFFSET_Y = 130;

OFFSET_X = 0;
OFFSET_Y = 0;

module board() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/board.dxf");
}

module case_outline() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/case_outline.dxf");
}

module cutouts_choc() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/cutouts_choc.dxf");
}

module cutouts_mx() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/cutouts_mx.dxf");
}
    
module keywell_mx() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/keywell_mx.dxf");
}

module m2_holes() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/m2_holes.dxf");
}

module mounting_holes() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/mounting_holes.dxf");
}

module mounting_holes_inner() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/mounting_holes_inner.dxf");
}

module mounting_holes_outer() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/mounting_holes_outer.dxf");
}

module plate_choc() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/plate_choc.dxf");
}

module plate_mx() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/plate_mx.dxf");
}

module plate_outline() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/plate_outline.dxf");
}

module promicro_cutout() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/promicro_cutout.dxf");
}

module usbc_cutout() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/usbc_cutout.dxf");
}

module wall() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import("../../ergogen/shockboard_v1/output/outlines/wall.dxf");
}

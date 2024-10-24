OFFSET_X = 0;
OFFSET_Y = 0;

outline_dir = "../outlines/";

module board_connector_cutout() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir, "board_connector_cutout.dxf"));
}

module board_connector() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"board_connector.dxf"));
}

module board_connector_extended() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"board_connector_extended.dxf"));
}

module board() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"board.dxf"));
}

module board_raw() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"board_raw.dxf"));
}

module case_outline() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"case_outline.dxf"));
}

module cutouts_choc() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"cutouts_choc.dxf"));
}

module cutouts_mx() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"cutouts_mx.dxf"));
}

module cutouts_extension() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"cutouts_extension.dxf"));
}

module demo() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"demo.dxf"));
}

module m2_holes() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"m2_holes.dxf"));
}

module m2_spacers() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"m2_spacers.dxf"));
}

module pcb_outline() {
    // this is exported directly from the pcb unlike the others in this file
    translate([OFFSET_X-1.272928, OFFSET_Y+1.45, 0]) // offsets compared in inkscape
    fill() // requires openscad development version
    import(str(outline_dir,"pcb_outline.dxf"));
}

module pcb_edge_support() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"pcb_edge_support.dxf"));
}

module plate_choc() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"plate_choc.dxf"));
}

module plate_mx() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"plate_mx.dxf"));
}

module plate_outline() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"plate_outline.dxf"));
}

module wall() {
    translate([OFFSET_X, OFFSET_Y, 0])
    import(str(outline_dir,"wall.dxf"));
}

pcb_outline();
#board();
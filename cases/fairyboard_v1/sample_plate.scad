linear_extrude(height = 11, center = false, convexity = 10)
difference() {
   import("sample_plate_outline.dxf");
   import("sample_plate_cutouts.dxf");
}
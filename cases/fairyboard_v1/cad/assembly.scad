use <fairyboard_v1.scad>
use <top_case.scad>
use <bottom_case.scad>
use <center_window.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type = 1; // [0:Plate, 1:Low profile case, 2:Spacer case]

// effects case height
Switch_type = 1; // [0:MX, 1:Choc v1, 2:Choc v2]

// threaded insert type for the low profile case
Threaded_insert_type = 0;  // [0:Heatset, 1:Resin]

// outer wall that will hide the pcb
Outer_wall = true;

// thickness of pcb
PCB_thickness = 1.6;

/* [Hidden] */

Color_top_case = "purple";
Top_alpha = 1.0;

Color_bottom_case = "aquamarine";
Bottom_alpha = 1.0;

Color_center_window = "aquamarine";
Window_alpha = 1.0;

Color_pcb = "purple";


//--------------------------------------------------------------------------------
module pcb(thickness=1.6) {
   linear_extrude(PCB_thickness, convexity=5)
    difference() {
        pcb_outline();
        m2_spacers();
        window_mounting_holes();
    }
}


//--------------------------------------------------------------------------------
module case_assembly(case_type, switch_type, pcb_thickness, threaded_insert_type, outer_wall) {
    top_fillet_radius = outer_wall ? 0 : 1.1;
    corner_correction = outer_wall? false : true;
    is_lp_walled = outer_wall && case_type == 1 && switch_type != 0;
    top_overhang = is_lp_walled ? 2*2 : undef;
    
    alpha = 1.0;
    color(Color_top_case, Top_alpha)
    translate([0, 0, pcb_thickness])
    generate_top_case(case_type, switch_type, top_fillet_radius, corner_correction);

    // adjust the center window to be flush with the plate
    center_window_wall_height = switch_type==0 ? 3.5 : 0.7;
    color(Color_center_window, Window_alpha)
    translate([0, 0, pcb_thickness])
    center_window(
        wall_height=center_window_wall_height,
        thickness=1.5,
        hollow=switch_type==0,
        fillet=is_lp_walled ? 0 : 1.1,
        corner_rounding=!is_lp_walled,
        top_overhang=top_overhang
    );
    
    color(Color_pcb)
    pcb(pcb_thickness);
    
    color(Color_bottom_case, Bottom_alpha)
    generate_bottom_case(case_type, switch_type, window_mounting_holes=case_type!=0, threaded_insert_type, bottom_fillet=1.1, outer_wall=outer_wall);
}

case_assembly(Case_type, Switch_type, PCB_thickness, Threaded_insert_type, Outer_wall);

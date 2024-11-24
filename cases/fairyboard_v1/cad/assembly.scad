use <fairyboard_v1.scad>
use <top_case.scad>
use <bottom_case.scad>
use <center_window.scad>

$fs = $preview ? 0.5 : 0.1;
$fa = $preview ? 3 : 0.1;

// case or plate
Case_type = 0; // [0:Plate, 1:Low profile case, 2:High profile case]

// effects case height
Switch_type = 0; // [0:MX, 1:Choc v1, 2:Choc v2]

// thickness of pcb
PCB_thickness = 1.6;

/* [Hidden] */


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
module case_assembly(case_type, switch_type, pcb_thickness) {
    color("white", 0.2)
    translate([0, 0, PCB_thickness])
    generate_top_case(Case_type, Switch_type);

    // adjust the center window to be flush with the plate
    center_window_wall_height = switch_type==0 ? 3.5 : 0.7;
    color("white", 0.2)
    translate([0, 0, PCB_thickness])
    center_window(
        wall_height=center_window_wall_height,
        thickness=1.5,
        hollow=switch_type==0
    );
    
    color("purple")
    pcb(PCB_thickness);
    
    color("white", 0.2)
    generate_bottom_case(Case_type, Switch_type);
}

case_assembly(Case_type, Switch_type, PCB_thickness);

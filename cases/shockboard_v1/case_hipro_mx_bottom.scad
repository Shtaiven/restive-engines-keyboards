use <shockboard_v1.scad>
use <../openscad-fillets/fillets3d.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;
FILLET_STEPS = $preview ? 10 : 25;

module fillet_wall(wall_height, fillet_radius, fillet_steps, fillet_enable) {
    difference() {
        topFillet(wall_height, fillet_radius, fillet_steps, fillet_enable)
        linear_extrude(wall_height)
        case_outline();
        
        translate([0, 0, -1])
        linear_extrude(wall_height+2)
        board();
    };
}

module case_bottom_no_cutout(wall_height=18, fillet_radius=2.5, fillet_steps=50, fillet_enable=1) {
    difference() {
        union() {
            linear_extrude(2)
            case_outline();

            linear_extrude(4)
            mounting_holes_outer();
        }

        translate([0, 0, -1])
        linear_extrude(6)
        mounting_holes_inner();
    }

    fillet_wall(wall_height, fillet_radius, fillet_steps, fillet_enable);
}

module case_bottom(wall_height=18, fillet_radius=3, fillet_steps=20, fillet_enable=1) {
    difference() {
        case_bottom_no_cutout(wall_height, fillet_radius, fillet_steps, fillet_enable);
        
        translate([0, 0, 5.6])
        linear_extrude(15)
        usbc_cutout();
        
        translate([0, 0, 5.6])
        linear_extrude(15)
        battery_switch_cutout();
    }
}

case_bottom(fillet_steps=FILLET_STEPS);
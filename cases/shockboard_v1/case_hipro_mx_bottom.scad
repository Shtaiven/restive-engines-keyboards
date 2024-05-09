use <shockboard_v1.scad>
use <../openscad-fillets/fillets3d.scad>


ENABLE_FILLET = 1;


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

module case_bottom(wall_height=18, fillet_radius=3, fillet_steps=20, fillet_enable=1) {
    difference() {
        union() {
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

case_bottom(fillet_enable=ENABLE_FILLET);

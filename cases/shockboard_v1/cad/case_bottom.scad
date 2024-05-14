use <shockboard_v1.scad>
use <openscad-fillets/fillets3d.scad>

module fillet_wall(wall_height, fillet_radius, fillet_steps, fillet_enable, clearance) {
    difference() {
        topFillet(wall_height, fillet_radius, fillet_steps, fillet_enable)
        linear_extrude(wall_height)
        offset(delta=clearance)
        case_outline();
        
        translate([0, 0, -1])
        linear_extrude(wall_height+2)
        offset(delta=clearance)
        plate_outline();
    };
}

module case_bottom_no_cutout(wall_height=18, fillet_radius=2.5, fillet_steps=50, fillet_enable=1, clearance=1) {
    difference() {
        union() {
            linear_extrude(2)
            offset(delta=clearance)
            case_outline();

            linear_extrude(4)
            mounting_holes_outer();
        }

        translate([0, 0, -1])
        linear_extrude(6)
        mounting_holes_inner();
    }

    fillet_wall(wall_height, fillet_radius, fillet_steps, fillet_enable, clearance);
}

module case_bottom(wall_height=18, fillet_radius=3, fillet_steps=20, fillet_enable=1, clearance=1) {
    difference() {
        case_bottom_no_cutout(wall_height, fillet_radius, fillet_steps, fillet_enable, clearance);
        
        translate([0, 0, 5.6])
        linear_extrude(15)
        usbc_cutout();
        
        translate([0, 0, 5.6])
        linear_extrude(15)
        battery_switch_cutout();
        
        // fix for interference with left bottom hotswap socket
        //translate([108.60-3.7, -137-3, 2])
        //rotate([0, 0, -8])
        //linear_extrude(3)
        //square(3);
        
        // fix for interference with right bottom hotswap socket
        //translate([313.60+3.7, -137-3, 2])
        //rotate([0, 0, 8])
        //linear_extrude(3)
        //square(3);
    }    
}

case_bottom();
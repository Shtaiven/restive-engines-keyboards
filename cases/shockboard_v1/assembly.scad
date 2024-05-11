use <shockboard_v1.scad>
use <hardware.scad>
use <case_hipro_mx_bottom.scad>
use <case_hipro_mx_top.scad>

FILLET_ENABLE = 0;
EXPLODE = 0;

SCREW_HOLE_LOCATIONS = [
    [97.6, -93.17],
    [108.68, -137.06],
    [173.93, -96.81],
    [166.03, -152.36],
    [251.12, -96.87],
    [258.87, -152.39],
    [327.30, -93.28],
    [316.20, -136.98]
];

module assembly(explode=0, fillet_enable=0) {
    color("cyan", 0.2)
    case_bottom(fillet_enable=fillet_enable);

    color("magenta", 1)
    translate([0, 0, 4 + explode*2])
    linear_extrude(1.6)
    board();

    color("yellow", 0.2)
    translate([0, 0, 9.1 + explode*4])
    case_top();
    
    for(location = SCREW_HOLE_LOCATIONS) {
        color("red", 0.2)
        translate([location[0], location[1], 5.6 + explode*3])
        standoff(2, 4, 3.5);
        
        color("green", 0.2)
        translate([location[0], location[1], 2.4 + explode*5])
        screw(2, 8);
        
        color("blue", 0.2)
        translate([location[0], location[1], 1 + explode])
        standoff(2, 3.6, 3); // heat set inserts
    }
}

assembly(explode=EXPLODE, fillet_enable=FILLET_ENABLE);

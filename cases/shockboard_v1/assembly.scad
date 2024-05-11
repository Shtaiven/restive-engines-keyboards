use <shockboard_v1.scad>
use <case_hipro_mx_bottom.scad>
use <case_hipro_mx_top.scad>

EXPLODE = 0;

module assembly(explode=0) {
    color("cyan", 0.2)
    case_bottom();

    color("magenta", 0.2)
    translate([0, 0, 4 + explode])
    linear_extrude(1.6)
    board();

    color("yellow", 0.2)
    translate([0, 0, 10.6 + explode*2])
    case_top();
}

assembly(explode=EXPLODE);

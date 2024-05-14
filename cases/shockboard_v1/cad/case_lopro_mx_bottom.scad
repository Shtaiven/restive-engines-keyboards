use <case_bottom.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;
FILLET_STEPS = $preview ? 10 : 25;
BOARD_CLEARANCE = 0.5;
WALL_HEIGHT = 10.6;

module case_lopro_mx_bottom(fillet_enable=1, fillet_steps=FILLET_STEPS) {
    case_bottom(fillet_steps=fillet_steps, clearance=BOARD_CLEARANCE, wall_height=WALL_HEIGHT, fillet_enable=fillet_enable);
}

case_lopro_mx_bottom();
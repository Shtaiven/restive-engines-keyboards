use <shockboard_v1.scad>

$fs = $preview ? 1 : 0.1;
$fa = $preview ? 3 : 0.1;

module pcb_spacer_no_cutout() {
    difference() {
        union() {
            difference() {
                board();
                    
                offset(r=1)
                cutouts_mx();
            }
            
            offset(delta=1.4)
            m2_holes();
        }
        offset(delta=0.2)
        m2_holes();
    };
}

module pcb_spacer(thickness=3.5) {
    linear_extrude(thickness)
    
    difference() {
        pcb_spacer_no_cutout();

        translate([0, 0, -1])
        promicro_cutout();
        
        // fix for interference with battery connector
        translate([226.4 + 5, -122.1 + 18, 0])
        rotate([0, 0, 180])
        square([20, 25]);

        // fix for interference with reset button
        translate([190, -122.1 + 26 , 0])
        square([10, 8]);
    }
}

pcb_spacer(3.5);

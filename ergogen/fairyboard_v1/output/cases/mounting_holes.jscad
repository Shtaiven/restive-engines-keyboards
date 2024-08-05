function mounting_holes_extrude_6_outline_fn(){
    return CAG.circle({"center":[326.2622565,-147.547947],"radius":2.9})
.subtract(
    CAG.circle({"center":[326.2622565,-147.547947],"radius":1.6})
).union(
    CAG.circle({"center":[93.6878505,-147.547947],"radius":2.9})
.subtract(
    CAG.circle({"center":[93.6878505,-147.547947],"radius":1.6})
)).union(
    CAG.circle({"center":[270.8657719,-168.8317907],"radius":2.9})
.subtract(
    CAG.circle({"center":[270.8657719,-168.8317907],"radius":1.6})
)).union(
    CAG.circle({"center":[149.0843351,-168.8317907],"radius":2.9})
.subtract(
    CAG.circle({"center":[149.0843351,-168.8317907],"radius":1.6})
)).union(
    CAG.circle({"center":[337.3384942,-121.28834],"radius":2.9})
.subtract(
    CAG.circle({"center":[337.3384942,-121.28834],"radius":1.6})
)).union(
    CAG.circle({"center":[82.6116128,-121.28834],"radius":2.9})
.subtract(
    CAG.circle({"center":[82.6116128,-121.28834],"radius":1.6})
)).union(
    CAG.circle({"center":[261.9025657,-132.882334],"radius":2.9})
.subtract(
    CAG.circle({"center":[261.9025657,-132.882334],"radius":1.6})
)).union(
    CAG.circle({"center":[158.0475413,-132.882334],"radius":2.9})
.subtract(
    CAG.circle({"center":[158.0475413,-132.882334],"radius":1.6})
)).extrude({ offset: [0, 0, 6] });
}




                function mounting_holes_case_fn() {
                    

                // creating part 0 of case mounting_holes
                let mounting_holes__part_0 = mounting_holes_extrude_6_outline_fn();

                // make sure that rotations are relative
                let mounting_holes__part_0_bounds = mounting_holes__part_0.getBounds();
                let mounting_holes__part_0_x = mounting_holes__part_0_bounds[0].x + (mounting_holes__part_0_bounds[1].x - mounting_holes__part_0_bounds[0].x) / 2
                let mounting_holes__part_0_y = mounting_holes__part_0_bounds[0].y + (mounting_holes__part_0_bounds[1].y - mounting_holes__part_0_bounds[0].y) / 2
                mounting_holes__part_0 = translate([-mounting_holes__part_0_x, -mounting_holes__part_0_y, 0], mounting_holes__part_0);
                mounting_holes__part_0 = rotate([0,0,0], mounting_holes__part_0);
                mounting_holes__part_0 = translate([mounting_holes__part_0_x, mounting_holes__part_0_y, 0], mounting_holes__part_0);

                mounting_holes__part_0 = translate([0,0,0], mounting_holes__part_0);
                let result = mounting_holes__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return mounting_holes_case_fn();
            }

        
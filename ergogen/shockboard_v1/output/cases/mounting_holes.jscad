function mounting_holes_extrude_6_outline_fn(){
    return CAG.circle({"center":[316.1589629,-136.9466169],"radius":2.9})
.subtract(
    CAG.circle({"center":[316.1589629,-136.9466169],"radius":1.6})
).union(
    CAG.circle({"center":[108.5975789,-136.9466169],"radius":2.9})
.subtract(
    CAG.circle({"center":[108.5975789,-136.9466169],"radius":1.6})
)).union(
    CAG.circle({"center":[258.8411787,-152.323356],"radius":2.9})
.subtract(
    CAG.circle({"center":[258.8411787,-152.323356],"radius":1.6})
)).union(
    CAG.circle({"center":[165.9153631,-152.323356],"radius":2.9})
.subtract(
    CAG.circle({"center":[165.9153631,-152.323356],"radius":1.6})
)).union(
    CAG.circle({"center":[327.2751113,-93.1735516],"radius":2.9})
.subtract(
    CAG.circle({"center":[327.2751113,-93.1735516],"radius":1.6})
)).union(
    CAG.circle({"center":[97.4814305,-93.1735516],"radius":2.9})
.subtract(
    CAG.circle({"center":[97.4814305,-93.1735516],"radius":1.6})
)).union(
    CAG.circle({"center":[251.0405264,-96.8188307],"radius":2.9})
.subtract(
    CAG.circle({"center":[251.0405264,-96.8188307],"radius":1.6})
)).union(
    CAG.circle({"center":[173.7160154,-96.8188307],"radius":2.9})
.subtract(
    CAG.circle({"center":[173.7160154,-96.8188307],"radius":1.6})
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

        
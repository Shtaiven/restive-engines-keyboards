function mounting_holes_extrude_6_outline_fn(){
    return CAG.circle({"center":[323.8494719,-149.1605532],"radius":2.9})
.subtract(
    CAG.circle({"center":[323.8494719,-149.1605532],"radius":1.6})
).union(
    CAG.circle({"center":[91.0985147,-149.1605532],"radius":2.9})
.subtract(
    CAG.circle({"center":[91.0985147,-149.1605532],"radius":1.6})
)).union(
    CAG.circle({"center":[268.8328788,-171.4079571],"radius":2.9})
.subtract(
    CAG.circle({"center":[268.8328788,-171.4079571],"radius":1.6})
)).union(
    CAG.circle({"center":[146.1151078,-171.4079571],"radius":2.9})
.subtract(
    CAG.circle({"center":[146.1151078,-171.4079571],"radius":1.6})
)).union(
    CAG.circle({"center":[334.4657293,-122.7116386],"radius":2.9})
.subtract(
    CAG.circle({"center":[334.4657293,-122.7116386],"radius":1.6})
)).union(
    CAG.circle({"center":[80.4822573,-122.7116386],"radius":2.9})
.subtract(
    CAG.circle({"center":[80.4822573,-122.7116386],"radius":1.6})
)).union(
    CAG.circle({"center":[259.2436332,-135.6204053],"radius":2.9})
.subtract(
    CAG.circle({"center":[259.2436332,-135.6204053],"radius":1.6})
)).union(
    CAG.circle({"center":[155.7043534,-135.6204053],"radius":2.9})
.subtract(
    CAG.circle({"center":[155.7043534,-135.6204053],"radius":1.6})
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

        
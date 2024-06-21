function mounting_holes_extrude_6_outline_fn(){
    return CAG.circle({"center":[285.0882737,-156.532711],"radius":2.9})
.subtract(
    CAG.circle({"center":[285.0882737,-156.532711],"radius":1.6})
).union(
    CAG.circle({"center":[77.7516585,-156.532711],"radius":2.9})
.subtract(
    CAG.circle({"center":[77.7516585,-156.532711],"radius":1.6})
)).union(
    CAG.circle({"center":[232.2200244,-183.4904689],"radius":2.9})
.subtract(
    CAG.circle({"center":[232.2200244,-183.4904689],"radius":1.6})
)).union(
    CAG.circle({"center":[130.6199078,-183.4904689],"radius":2.9})
.subtract(
    CAG.circle({"center":[130.6199078,-183.4904689],"radius":1.6})
)).union(
    CAG.circle({"center":[286.8605755,-111.4050149],"radius":2.9})
.subtract(
    CAG.circle({"center":[286.8605755,-111.4050149],"radius":1.6})
)).union(
    CAG.circle({"center":[75.9793567,-111.4050149],"radius":2.9})
.subtract(
    CAG.circle({"center":[75.9793567,-111.4050149],"radius":1.6})
)).union(
    CAG.circle({"center":[213.0497953,-130.8206975],"radius":2.9})
.subtract(
    CAG.circle({"center":[213.0497953,-130.8206975],"radius":1.6})
)).union(
    CAG.circle({"center":[149.7901369,-130.8206975],"radius":2.9})
.subtract(
    CAG.circle({"center":[149.7901369,-130.8206975],"radius":1.6})
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

        
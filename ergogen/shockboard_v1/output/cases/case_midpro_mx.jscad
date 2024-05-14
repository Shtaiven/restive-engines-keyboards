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


function case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[281.0227501,-198.852412],[143.7337917,-198.852412]]).appendArc([137.983441,-197.0336996],{"radius":10,"clockwise":true,"large":false}).appendPoint([84.6435699,-159.5429072]).appendArc([84.6427516,-159.5423322],{"radius":5,"clockwise":true,"large":false}).appendArc([82.4067472,-157.3791947],{"radius":10,"clockwise":true,"large":false}).appendPoint([67.9561855,-138.2026516]).appendArc([67.9553345,-138.201522],{"radius":5,"clockwise":true,"large":false}).appendArc([66.0398599,-130.7927704],{"radius":10,"clockwise":true,"large":false}).appendPoint([73.6836844,-76.4041332]).appendArc([82.2903931,-67.880197],{"radius":10,"clockwise":true,"large":false}).appendPoint([117.3278217,-63.3008254]).appendArc([118.4540467,-63.2179334],{"radius":10,"clockwise":true,"large":false}).appendPoint([137.0116813,-62.9028773]).appendArc([138.5731594,-62.9987558],{"radius":10,"clockwise":true,"large":false}).appendPoint([160.3423649,-66.0582182]).appendArc([161.9920708,-66.4346371],{"radius":10,"clockwise":true,"large":false}).appendPoint([197.570332,-77.7936605]).appendArc([197.5712847,-77.7939646],{"radius":5,"clockwise":true,"large":false}).appendPoint([227.1852571,-77.7939646]).appendArc([227.1862098,-77.7936605],{"radius":5,"clockwise":true,"large":false}).appendPoint([262.764471,-66.4346371]).appendArc([264.4141769,-66.0582181],{"radius":10,"clockwise":true,"large":false}).appendPoint([286.1833825,-62.9987558]).appendArc([287.7448604,-62.9028773],{"radius":10,"clockwise":true,"large":false}).appendPoint([306.3024952,-63.2179334]).appendArc([307.4287201,-63.3008254],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.4661487,-67.880197]).appendArc([351.0728574,-76.4041332],{"radius":10,"clockwise":true,"large":false}).appendPoint([358.7166818,-130.7927704]).appendArc([356.8003564,-138.2026515],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.3497946,-157.3791948]).appendArc([340.1137901,-159.5423322],{"radius":10,"clockwise":true,"large":false}).appendArc([340.1129719,-159.5429072],{"radius":5,"clockwise":true,"large":false}).appendPoint([286.7731007,-197.0336997]).appendArc([281.0227501,-198.852412],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_11_6_outline_fn(){
    return new CSG.Path2D([[281.0227501,-198.852412],[143.7337917,-198.852412]]).appendArc([137.983441,-197.0336996],{"radius":10,"clockwise":true,"large":false}).appendPoint([84.6435699,-159.5429072]).appendArc([84.6427516,-159.5423322],{"radius":5,"clockwise":true,"large":false}).appendArc([82.4067472,-157.3791947],{"radius":10,"clockwise":true,"large":false}).appendPoint([67.9561855,-138.2026516]).appendArc([67.9553345,-138.201522],{"radius":5,"clockwise":true,"large":false}).appendArc([66.0398599,-130.7927704],{"radius":10,"clockwise":true,"large":false}).appendPoint([73.6836844,-76.4041332]).appendArc([82.2903931,-67.880197],{"radius":10,"clockwise":true,"large":false}).appendPoint([117.3278217,-63.3008254]).appendArc([118.4540467,-63.2179334],{"radius":10,"clockwise":true,"large":false}).appendPoint([137.0116813,-62.9028773]).appendArc([138.5731594,-62.9987558],{"radius":10,"clockwise":true,"large":false}).appendPoint([160.3423649,-66.0582182]).appendArc([161.9920708,-66.4346371],{"radius":10,"clockwise":true,"large":false}).appendPoint([197.570332,-77.7936605]).appendArc([197.5712847,-77.7939646],{"radius":5,"clockwise":true,"large":false}).appendPoint([227.1852571,-77.7939646]).appendArc([227.1862098,-77.7936605],{"radius":5,"clockwise":true,"large":false}).appendPoint([262.764471,-66.4346371]).appendArc([264.4141769,-66.0582181],{"radius":10,"clockwise":true,"large":false}).appendPoint([286.1833825,-62.9987558]).appendArc([287.7448604,-62.9028773],{"radius":10,"clockwise":true,"large":false}).appendPoint([306.3024952,-63.2179334]).appendArc([307.4287201,-63.3008254],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.4661487,-67.880197]).appendArc([351.0728574,-76.4041332],{"radius":10,"clockwise":true,"large":false}).appendPoint([358.7166818,-130.7927704]).appendArc([356.8003564,-138.2026515],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.3497946,-157.3791948]).appendArc([340.1137901,-159.5423322],{"radius":10,"clockwise":true,"large":false}).appendArc([340.1129719,-159.5429072],{"radius":5,"clockwise":true,"large":false}).appendPoint([286.7731007,-197.0336997]).appendArc([281.0227501,-198.852412],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[281.0227501,-195.352412],[143.7337917,-195.352412]]).appendArc([139.9960637,-194.1702489],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([86.6558226,-156.6791964]).appendArc([85.2019715,-155.2728422],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([70.7514098,-136.096299]).appendArc([69.5057981,-131.2798763],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([77.1496226,-76.891239]).appendArc([82.7439833,-71.3506805],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([117.7814119,-66.7713089]).appendArc([118.5134581,-66.7174291],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([137.0710928,-66.402373]).appendArc([138.0860535,-66.464694],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([159.855259,-69.5241564]).appendArc([160.9275679,-69.7688287],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([196.5067818,-81.1281562]).appendArc([197.5712847,-81.2939646],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([227.1852571,-81.2939646]).appendArc([228.24976,-81.1281562],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([263.8289739,-69.7688288]).appendArc([264.9012828,-69.5241563],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([286.6704883,-66.4646941]).appendArc([287.685449,-66.402373],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([306.2430837,-66.7174291]).appendArc([306.9751299,-66.7713089],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([342.0125585,-71.3506805]).appendArc([347.6069192,-76.8912391],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([355.2507436,-131.2798763]).appendArc([354.0051321,-136.096299],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([339.5545703,-155.2728422]).appendArc([338.1011674,-156.6788815],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([284.760478,-194.170249]).appendArc([281.0227501,-195.352412],{"radius":6.5,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 11.6] });
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
            
            

                function _bottom_case_fn() {
                    

                // creating part 0 of case _bottom
                let _bottom__part_0 = case_outline_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _bottom__part_0_bounds = _bottom__part_0.getBounds();
                let _bottom__part_0_x = _bottom__part_0_bounds[0].x + (_bottom__part_0_bounds[1].x - _bottom__part_0_bounds[0].x) / 2
                let _bottom__part_0_y = _bottom__part_0_bounds[0].y + (_bottom__part_0_bounds[1].y - _bottom__part_0_bounds[0].y) / 2
                _bottom__part_0 = translate([-_bottom__part_0_x, -_bottom__part_0_y, 0], _bottom__part_0);
                _bottom__part_0 = rotate([0,0,0], _bottom__part_0);
                _bottom__part_0 = translate([_bottom__part_0_x, _bottom__part_0_y, 0], _bottom__part_0);

                _bottom__part_0 = translate([0,0,0], _bottom__part_0);
                let result = _bottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_mid_mx_case_fn() {
                    

                // creating part 0 of case _wall_mid_mx
                let _wall_mid_mx__part_0 = wall_extrude_11_6_outline_fn();

                // make sure that rotations are relative
                let _wall_mid_mx__part_0_bounds = _wall_mid_mx__part_0.getBounds();
                let _wall_mid_mx__part_0_x = _wall_mid_mx__part_0_bounds[0].x + (_wall_mid_mx__part_0_bounds[1].x - _wall_mid_mx__part_0_bounds[0].x) / 2
                let _wall_mid_mx__part_0_y = _wall_mid_mx__part_0_bounds[0].y + (_wall_mid_mx__part_0_bounds[1].y - _wall_mid_mx__part_0_bounds[0].y) / 2
                _wall_mid_mx__part_0 = translate([-_wall_mid_mx__part_0_x, -_wall_mid_mx__part_0_y, 0], _wall_mid_mx__part_0);
                _wall_mid_mx__part_0 = rotate([0,0,0], _wall_mid_mx__part_0);
                _wall_mid_mx__part_0 = translate([_wall_mid_mx__part_0_x, _wall_mid_mx__part_0_y, 0], _wall_mid_mx__part_0);

                _wall_mid_mx__part_0 = translate([0,0,0], _wall_mid_mx__part_0);
                let result = _wall_mid_mx__part_0;
                
            
                    return result;
                }
            
            

                function case_midpro_mx_case_fn() {
                    

                // creating part 0 of case case_midpro_mx
                let case_midpro_mx__part_0 = mounting_holes_case_fn();

                // make sure that rotations are relative
                let case_midpro_mx__part_0_bounds = case_midpro_mx__part_0.getBounds();
                let case_midpro_mx__part_0_x = case_midpro_mx__part_0_bounds[0].x + (case_midpro_mx__part_0_bounds[1].x - case_midpro_mx__part_0_bounds[0].x) / 2
                let case_midpro_mx__part_0_y = case_midpro_mx__part_0_bounds[0].y + (case_midpro_mx__part_0_bounds[1].y - case_midpro_mx__part_0_bounds[0].y) / 2
                case_midpro_mx__part_0 = translate([-case_midpro_mx__part_0_x, -case_midpro_mx__part_0_y, 0], case_midpro_mx__part_0);
                case_midpro_mx__part_0 = rotate([0,0,0], case_midpro_mx__part_0);
                case_midpro_mx__part_0 = translate([case_midpro_mx__part_0_x, case_midpro_mx__part_0_y, 0], case_midpro_mx__part_0);

                case_midpro_mx__part_0 = translate([0,0,0], case_midpro_mx__part_0);
                let result = case_midpro_mx__part_0;
                
            

                // creating part 1 of case case_midpro_mx
                let case_midpro_mx__part_1 = _bottom_case_fn();

                // make sure that rotations are relative
                let case_midpro_mx__part_1_bounds = case_midpro_mx__part_1.getBounds();
                let case_midpro_mx__part_1_x = case_midpro_mx__part_1_bounds[0].x + (case_midpro_mx__part_1_bounds[1].x - case_midpro_mx__part_1_bounds[0].x) / 2
                let case_midpro_mx__part_1_y = case_midpro_mx__part_1_bounds[0].y + (case_midpro_mx__part_1_bounds[1].y - case_midpro_mx__part_1_bounds[0].y) / 2
                case_midpro_mx__part_1 = translate([-case_midpro_mx__part_1_x, -case_midpro_mx__part_1_y, 0], case_midpro_mx__part_1);
                case_midpro_mx__part_1 = rotate([0,0,0], case_midpro_mx__part_1);
                case_midpro_mx__part_1 = translate([case_midpro_mx__part_1_x, case_midpro_mx__part_1_y, 0], case_midpro_mx__part_1);

                case_midpro_mx__part_1 = translate([0,0,0], case_midpro_mx__part_1);
                result = result.union(case_midpro_mx__part_1);
                
            

                // creating part 2 of case case_midpro_mx
                let case_midpro_mx__part_2 = _wall_mid_mx_case_fn();

                // make sure that rotations are relative
                let case_midpro_mx__part_2_bounds = case_midpro_mx__part_2.getBounds();
                let case_midpro_mx__part_2_x = case_midpro_mx__part_2_bounds[0].x + (case_midpro_mx__part_2_bounds[1].x - case_midpro_mx__part_2_bounds[0].x) / 2
                let case_midpro_mx__part_2_y = case_midpro_mx__part_2_bounds[0].y + (case_midpro_mx__part_2_bounds[1].y - case_midpro_mx__part_2_bounds[0].y) / 2
                case_midpro_mx__part_2 = translate([-case_midpro_mx__part_2_x, -case_midpro_mx__part_2_y, 0], case_midpro_mx__part_2);
                case_midpro_mx__part_2 = rotate([0,0,0], case_midpro_mx__part_2);
                case_midpro_mx__part_2 = translate([case_midpro_mx__part_2_x, case_midpro_mx__part_2_y, 0], case_midpro_mx__part_2);

                case_midpro_mx__part_2 = translate([0,0,0], case_midpro_mx__part_2);
                result = result.union(case_midpro_mx__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_midpro_mx_case_fn();
            }

        
function _standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[316.1589629,-136.9466169],"radius":2.5})
.union(
    CAG.circle({"center":[108.5975789,-136.9466169],"radius":2.5})
).union(
    CAG.circle({"center":[258.8411787,-152.323356],"radius":2.5})
).union(
    CAG.circle({"center":[165.9153631,-152.323356],"radius":2.5})
).union(
    CAG.circle({"center":[327.2751113,-93.1735516],"radius":2.5})
).union(
    CAG.circle({"center":[97.4814305,-93.1735516],"radius":2.5})
).union(
    CAG.circle({"center":[251.0405264,-96.8188307],"radius":2.5})
).union(
    CAG.circle({"center":[173.7160154,-96.8188307],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function _mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[316.1589629,-136.9466169],"radius":1.5})
.union(
    CAG.circle({"center":[108.5975789,-136.9466169],"radius":1.5})
).union(
    CAG.circle({"center":[258.8411787,-152.323356],"radius":1.5})
).union(
    CAG.circle({"center":[165.9153631,-152.323356],"radius":1.5})
).union(
    CAG.circle({"center":[327.2751113,-93.1735516],"radius":1.5})
).union(
    CAG.circle({"center":[97.4814305,-93.1735516],"radius":1.5})
).union(
    CAG.circle({"center":[251.0405264,-96.8188307],"radius":1.5})
).union(
    CAG.circle({"center":[173.7160154,-96.8188307],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function padded_board_extrude_1_outline_fn(){
    return new CSG.Path2D([[281.0227501,-198.852412],[143.7337917,-198.852412]]).appendArc([137.983441,-197.0336996],{"radius":10,"clockwise":true,"large":false}).appendPoint([84.6435699,-159.5429072]).appendArc([84.6427516,-159.5423322],{"radius":5,"clockwise":true,"large":false}).appendArc([82.4067472,-157.3791947],{"radius":10,"clockwise":true,"large":false}).appendPoint([67.9561855,-138.2026516]).appendArc([67.9553345,-138.201522],{"radius":5,"clockwise":true,"large":false}).appendArc([66.0398599,-130.7927704],{"radius":10,"clockwise":true,"large":false}).appendPoint([73.6836844,-76.4041332]).appendArc([82.2903931,-67.880197],{"radius":10,"clockwise":true,"large":false}).appendPoint([117.3278217,-63.3008254]).appendArc([118.4540467,-63.2179334],{"radius":10,"clockwise":true,"large":false}).appendPoint([137.0116813,-62.9028773]).appendArc([138.5731594,-62.9987558],{"radius":10,"clockwise":true,"large":false}).appendPoint([160.3423649,-66.0582182]).appendArc([161.9920708,-66.4346371],{"radius":10,"clockwise":true,"large":false}).appendPoint([197.570332,-77.7936605]).appendArc([197.5712847,-77.7939646],{"radius":5,"clockwise":true,"large":false}).appendPoint([227.1852571,-77.7939646]).appendArc([227.1862098,-77.7936605],{"radius":5,"clockwise":true,"large":false}).appendPoint([262.764471,-66.4346371]).appendArc([264.4141769,-66.0582181],{"radius":10,"clockwise":true,"large":false}).appendPoint([286.1833825,-62.9987558]).appendArc([287.7448604,-62.9028773],{"radius":10,"clockwise":true,"large":false}).appendPoint([306.3024952,-63.2179334]).appendArc([307.4287201,-63.3008254],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.4661487,-67.880197]).appendArc([351.0728574,-76.4041332],{"radius":10,"clockwise":true,"large":false}).appendPoint([358.7166818,-130.7927704]).appendArc([356.8003564,-138.2026515],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.3497946,-157.3791948]).appendArc([340.1137901,-159.5423322],{"radius":10,"clockwise":true,"large":false}).appendArc([340.1129719,-159.5429072],{"radius":5,"clockwise":true,"large":false}).appendPoint([286.7731007,-197.0336997]).appendArc([281.0227501,-198.852412],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function padded_board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[281.0227501,-198.852412],[143.7337917,-198.852412]]).appendArc([137.983441,-197.0336996],{"radius":10,"clockwise":true,"large":false}).appendPoint([84.6435699,-159.5429072]).appendArc([84.6427516,-159.5423322],{"radius":5,"clockwise":true,"large":false}).appendArc([82.4067472,-157.3791947],{"radius":10,"clockwise":true,"large":false}).appendPoint([67.9561855,-138.2026516]).appendArc([67.9553345,-138.201522],{"radius":5,"clockwise":true,"large":false}).appendArc([66.0398599,-130.7927704],{"radius":10,"clockwise":true,"large":false}).appendPoint([73.6836844,-76.4041332]).appendArc([82.2903931,-67.880197],{"radius":10,"clockwise":true,"large":false}).appendPoint([117.3278217,-63.3008254]).appendArc([118.4540467,-63.2179334],{"radius":10,"clockwise":true,"large":false}).appendPoint([137.0116813,-62.9028773]).appendArc([138.5731594,-62.9987558],{"radius":10,"clockwise":true,"large":false}).appendPoint([160.3423649,-66.0582182]).appendArc([161.9920708,-66.4346371],{"radius":10,"clockwise":true,"large":false}).appendPoint([197.570332,-77.7936605]).appendArc([197.5712847,-77.7939646],{"radius":5,"clockwise":true,"large":false}).appendPoint([227.1852571,-77.7939646]).appendArc([227.1862098,-77.7936605],{"radius":5,"clockwise":true,"large":false}).appendPoint([262.764471,-66.4346371]).appendArc([264.4141769,-66.0582181],{"radius":10,"clockwise":true,"large":false}).appendPoint([286.1833825,-62.9987558]).appendArc([287.7448604,-62.9028773],{"radius":10,"clockwise":true,"large":false}).appendPoint([306.3024952,-63.2179334]).appendArc([307.4287201,-63.3008254],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.4661487,-67.880197]).appendArc([351.0728574,-76.4041332],{"radius":10,"clockwise":true,"large":false}).appendPoint([358.7166818,-130.7927704]).appendArc([356.8003564,-138.2026515],{"radius":10,"clockwise":true,"large":false}).appendPoint([342.3497946,-157.3791948]).appendArc([340.1137901,-159.5423322],{"radius":10,"clockwise":true,"large":false}).appendArc([340.1129719,-159.5429072],{"radius":5,"clockwise":true,"large":false}).appendPoint([286.7731007,-197.0336997]).appendArc([281.0227501,-198.852412],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[281.0227501,-193.852412],[143.7337917,-193.852412]]).appendArc([140.8586163,-192.9430558],{"radius":5,"clockwise":true,"large":false}).appendPoint([87.5179271,-155.4516884]).appendArc([86.3999248,-154.3701197],{"radius":5,"clockwise":true,"large":false}).appendPoint([71.949363,-135.1935765]).appendArc([70.9912003,-131.4886359],{"radius":5,"clockwise":true,"large":false}).appendPoint([78.6350248,-77.0999987]).appendArc([82.9383791,-72.8380306],{"radius":5,"clockwise":true,"large":false}).appendPoint([117.9758077,-68.258659]).appendArc([118.5389202,-68.217213],{"radius":5,"clockwise":true,"large":false}).appendPoint([137.0965549,-67.9021569]).appendArc([137.8772939,-67.9500962],{"radius":5,"clockwise":true,"large":false}).appendPoint([159.6464994,-71.0095585]).appendArc([160.4713523,-71.197768],{"radius":5,"clockwise":true,"large":false}).appendPoint([196.0505663,-82.5570955]).appendArc([197.5712847,-82.7939646],{"radius":5,"clockwise":false,"large":false}).appendPoint([227.1852571,-82.7939646]).appendArc([228.7059755,-82.5570954],{"radius":5,"clockwise":false,"large":false}).appendPoint([264.2851894,-71.197768]).appendArc([265.1100424,-71.0095585],{"radius":5,"clockwise":true,"large":false}).appendPoint([286.879248,-67.9500962]).appendArc([287.6599869,-67.9021569],{"radius":5,"clockwise":true,"large":false}).appendPoint([306.2176216,-68.217213]).appendArc([306.7807341,-68.258659],{"radius":5,"clockwise":true,"large":false}).appendPoint([341.8181627,-72.8380306]).appendArc([346.121517,-77.0999987],{"radius":5,"clockwise":true,"large":false}).appendPoint([353.7653415,-131.4886359]).appendArc([352.8071788,-135.1935765],{"radius":5,"clockwise":true,"large":false}).appendPoint([338.356617,-154.3701197]).appendArc([337.2386148,-155.4516884],{"radius":5,"clockwise":true,"large":false}).appendPoint([283.8979254,-192.9430558]).appendArc([281.0227501,-193.852412],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = _standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = _mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = padded_board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outer_wall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _inner_wall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outer_wall_case_fn() {
                    

                // creating part 0 of case _outer_wall
                let _outer_wall__part_0 = padded_board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outer_wall__part_0_bounds = _outer_wall__part_0.getBounds();
                let _outer_wall__part_0_x = _outer_wall__part_0_bounds[0].x + (_outer_wall__part_0_bounds[1].x - _outer_wall__part_0_bounds[0].x) / 2
                let _outer_wall__part_0_y = _outer_wall__part_0_bounds[0].y + (_outer_wall__part_0_bounds[1].y - _outer_wall__part_0_bounds[0].y) / 2
                _outer_wall__part_0 = translate([-_outer_wall__part_0_x, -_outer_wall__part_0_y, 0], _outer_wall__part_0);
                _outer_wall__part_0 = rotate([0,0,0], _outer_wall__part_0);
                _outer_wall__part_0 = translate([_outer_wall__part_0_x, _outer_wall__part_0_y, 0], _outer_wall__part_0);

                _outer_wall__part_0 = translate([0,0,0], _outer_wall__part_0);
                let result = _outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _inner_wall_case_fn() {
                    

                // creating part 0 of case _inner_wall
                let _inner_wall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _inner_wall__part_0_bounds = _inner_wall__part_0.getBounds();
                let _inner_wall__part_0_x = _inner_wall__part_0_bounds[0].x + (_inner_wall__part_0_bounds[1].x - _inner_wall__part_0_bounds[0].x) / 2
                let _inner_wall__part_0_y = _inner_wall__part_0_bounds[0].y + (_inner_wall__part_0_bounds[1].y - _inner_wall__part_0_bounds[0].y) / 2
                _inner_wall__part_0 = translate([-_inner_wall__part_0_x, -_inner_wall__part_0_y, 0], _inner_wall__part_0);
                _inner_wall__part_0 = rotate([0,0,0], _inner_wall__part_0);
                _inner_wall__part_0 = translate([_inner_wall__part_0_x, _inner_wall__part_0_y, 0], _inner_wall__part_0);

                _inner_wall__part_0 = translate([0,0,0], _inner_wall__part_0);
                let result = _inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = bottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        
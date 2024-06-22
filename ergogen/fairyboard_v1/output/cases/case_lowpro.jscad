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
    CAG.circle({"center":[329.5481675,-104.3590479],"radius":2.9})
.subtract(
    CAG.circle({"center":[329.5481675,-104.3590479],"radius":1.6})
)).union(
    CAG.circle({"center":[85.3998191,-104.3590479],"radius":2.9})
.subtract(
    CAG.circle({"center":[85.3998191,-104.3590479],"radius":1.6})
)).union(
    CAG.circle({"center":[254.3260714,-117.2678146],"radius":2.9})
.subtract(
    CAG.circle({"center":[254.3260714,-117.2678146],"radius":1.6})
)).union(
    CAG.circle({"center":[160.6219152,-117.2678146],"radius":2.9})
.subtract(
    CAG.circle({"center":[160.6219152,-117.2678146],"radius":1.6})
)).extrude({ offset: [0, 0, 6] });
}


function case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[244.0380715,-221.905439],[170.9099151,-221.905439]]).appendArc([166.30726,-220.7832521],{"radius":10,"clockwise":true,"large":false}).appendPoint([117.0071957,-195.2238985]).appendPoint([66.4009745,-169.5624918]).appendArc([62.2633022,-165.6436212],{"radius":10,"clockwise":true,"large":false}).appendPoint([50.6069839,-145.4542858]).appendArc([49.6079796,-137.8660957],{"radius":10,"clockwise":true,"large":false}).appendArc([49.6082386,-137.8651297],{"radius":5,"clockwise":true,"large":false}).appendPoint([63.8231357,-84.8144108]).appendArc([73.4044981,-77.4029044],{"radius":10,"clockwise":true,"large":false}).appendPoint([108.7388483,-77.1276552]).appendArc([109.8667803,-77.1826335],{"radius":10,"clockwise":true,"large":false}).appendPoint([128.3244843,-79.1315324]).appendArc([129.8626384,-79.4169924],{"radius":10,"clockwise":true,"large":false}).appendArc([129.8636044,-79.4172514],{"radius":5,"clockwise":true,"large":false}).appendPoint([151.0967253,-85.1066488]).appendArc([152.6882607,-85.6813106],{"radius":10,"clockwise":true,"large":false}).appendPoint([186.3306227,-101.159801]).appendPoint([228.6173638,-101.159801]).appendPoint([262.2597259,-85.6813107]).appendArc([262.2610107,-85.6807197],{"radius":5,"clockwise":true,"large":false}).appendArc([263.8512615,-85.1066487],{"radius":10,"clockwise":true,"large":false}).appendPoint([285.085348,-79.4169925]).appendArc([286.6235023,-79.1315324],{"radius":10,"clockwise":true,"large":false}).appendPoint([305.0802119,-77.1827386]).appendArc([306.2091383,-77.1276553],{"radius":10,"clockwise":true,"large":false}).appendPoint([341.5434886,-77.4029044]).appendArc([351.1248509,-84.8144109],{"radius":10,"clockwise":true,"large":false}).appendPoint([365.339748,-137.8651297]).appendArc([364.3410026,-145.4542858],{"radius":10,"clockwise":true,"large":false}).appendPoint([352.6846844,-165.6436212]).appendArc([348.5470122,-169.5624918],{"radius":10,"clockwise":true,"large":false}).appendPoint([297.940791,-195.2238984]).appendPoint([248.6407264,-220.7832522]).appendArc([244.0380715,-221.905439],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[244.0380715,-221.905439],[170.9099151,-221.905439]]).appendArc([166.30726,-220.7832521],{"radius":10,"clockwise":true,"large":false}).appendPoint([117.0071957,-195.2238985]).appendPoint([66.4009745,-169.5624918]).appendArc([62.2633022,-165.6436212],{"radius":10,"clockwise":true,"large":false}).appendPoint([50.6069839,-145.4542858]).appendArc([49.6079796,-137.8660957],{"radius":10,"clockwise":true,"large":false}).appendArc([49.6082386,-137.8651297],{"radius":5,"clockwise":true,"large":false}).appendPoint([63.8231357,-84.8144108]).appendArc([73.4044981,-77.4029044],{"radius":10,"clockwise":true,"large":false}).appendPoint([108.7388483,-77.1276552]).appendArc([109.8667803,-77.1826335],{"radius":10,"clockwise":true,"large":false}).appendPoint([128.3244843,-79.1315324]).appendArc([129.8626384,-79.4169924],{"radius":10,"clockwise":true,"large":false}).appendArc([129.8636044,-79.4172514],{"radius":5,"clockwise":true,"large":false}).appendPoint([151.0967253,-85.1066488]).appendArc([152.6882607,-85.6813106],{"radius":10,"clockwise":true,"large":false}).appendPoint([186.3306227,-101.159801]).appendPoint([228.6173638,-101.159801]).appendPoint([262.2597259,-85.6813107]).appendArc([262.2610107,-85.6807197],{"radius":5,"clockwise":true,"large":false}).appendArc([263.8512615,-85.1066487],{"radius":10,"clockwise":true,"large":false}).appendPoint([285.085348,-79.4169925]).appendArc([286.6235023,-79.1315324],{"radius":10,"clockwise":true,"large":false}).appendPoint([305.0802119,-77.1827386]).appendArc([306.2091383,-77.1276553],{"radius":10,"clockwise":true,"large":false}).appendPoint([341.5434886,-77.4029044]).appendArc([351.1248509,-84.8144109],{"radius":10,"clockwise":true,"large":false}).appendPoint([365.339748,-137.8651297]).appendArc([364.3410026,-145.4542858],{"radius":10,"clockwise":true,"large":false}).appendPoint([352.6846844,-165.6436212]).appendArc([348.5470122,-169.5624918],{"radius":10,"clockwise":true,"large":false}).appendPoint([297.940791,-195.2238984]).appendPoint([248.6407264,-220.7832522]).appendArc([244.0380715,-221.905439],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[244.0380715,-217.905439],[170.9099151,-217.905439]]).appendArc([168.1483221,-217.2321269],{"radius":6,"clockwise":true,"large":false}).appendPoint([118.8482576,-191.6727732]).appendArc([118.8162283,-191.6563501],{"radius":4,"clockwise":false,"large":false}).appendPoint([68.2100072,-165.9949436]).appendArc([65.7274038,-163.6436212],{"radius":6,"clockwise":true,"large":false}).appendPoint([54.0713093,-143.454673]).appendArc([53.471683,-138.9013717],{"radius":6,"clockwise":true,"large":false}).appendPoint([67.686839,-85.849687]).appendArc([73.4356565,-81.402783],{"radius":6,"clockwise":true,"large":false}).appendPoint([108.7700067,-81.1275339]).appendArc([109.4467659,-81.1605209],{"radius":6,"clockwise":true,"large":false}).appendPoint([127.9044699,-83.1094198]).appendArc([128.8273624,-83.2806958],{"radius":6,"clockwise":true,"large":false}).appendPoint([150.0614491,-88.9703521]).appendArc([151.0163704,-89.3151492],{"radius":6,"clockwise":true,"large":false}).appendPoint([184.6587325,-104.7936396]).appendArc([186.3306228,-105.159801],{"radius":4,"clockwise":false,"large":false}).appendPoint([228.6173638,-105.159801]).appendArc([230.2892541,-104.7936396],{"radius":4,"clockwise":false,"large":false}).appendPoint([263.9316162,-89.3151493]).appendArc([264.8865375,-88.9703521],{"radius":6,"clockwise":true,"large":false}).appendPoint([286.1206242,-83.2806958]).appendArc([287.0435167,-83.1094198],{"radius":6,"clockwise":true,"large":false}).appendPoint([305.5012207,-81.1605208]).appendArc([306.1779799,-81.1275339],{"radius":6,"clockwise":true,"large":false}).appendPoint([341.5123301,-81.4027831]).appendArc([347.2611475,-85.8496869],{"radius":6,"clockwise":true,"large":false}).appendPoint([361.4761878,-138.9009398]).appendArc([360.876901,-143.4542858],{"radius":6,"clockwise":true,"large":false}).appendPoint([349.2205828,-163.6436212]).appendArc([346.7379795,-165.9949436],{"radius":6,"clockwise":true,"large":false}).appendPoint([296.1317583,-191.6563501]).appendArc([296.099729,-191.6727731],{"radius":4,"clockwise":false,"large":false}).appendPoint([246.7996645,-217.2321269]).appendArc([244.0380715,-217.905439],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
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
            
            

                function _wall_low_case_fn() {
                    

                // creating part 0 of case _wall_low
                let _wall_low__part_0 = wall_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let _wall_low__part_0_bounds = _wall_low__part_0.getBounds();
                let _wall_low__part_0_x = _wall_low__part_0_bounds[0].x + (_wall_low__part_0_bounds[1].x - _wall_low__part_0_bounds[0].x) / 2
                let _wall_low__part_0_y = _wall_low__part_0_bounds[0].y + (_wall_low__part_0_bounds[1].y - _wall_low__part_0_bounds[0].y) / 2
                _wall_low__part_0 = translate([-_wall_low__part_0_x, -_wall_low__part_0_y, 0], _wall_low__part_0);
                _wall_low__part_0 = rotate([0,0,0], _wall_low__part_0);
                _wall_low__part_0 = translate([_wall_low__part_0_x, _wall_low__part_0_y, 0], _wall_low__part_0);

                _wall_low__part_0 = translate([0,0,0], _wall_low__part_0);
                let result = _wall_low__part_0;
                
            
                    return result;
                }
            
            

                function case_lowpro_case_fn() {
                    

                // creating part 0 of case case_lowpro
                let case_lowpro__part_0 = mounting_holes_case_fn();

                // make sure that rotations are relative
                let case_lowpro__part_0_bounds = case_lowpro__part_0.getBounds();
                let case_lowpro__part_0_x = case_lowpro__part_0_bounds[0].x + (case_lowpro__part_0_bounds[1].x - case_lowpro__part_0_bounds[0].x) / 2
                let case_lowpro__part_0_y = case_lowpro__part_0_bounds[0].y + (case_lowpro__part_0_bounds[1].y - case_lowpro__part_0_bounds[0].y) / 2
                case_lowpro__part_0 = translate([-case_lowpro__part_0_x, -case_lowpro__part_0_y, 0], case_lowpro__part_0);
                case_lowpro__part_0 = rotate([0,0,0], case_lowpro__part_0);
                case_lowpro__part_0 = translate([case_lowpro__part_0_x, case_lowpro__part_0_y, 0], case_lowpro__part_0);

                case_lowpro__part_0 = translate([0,0,0], case_lowpro__part_0);
                let result = case_lowpro__part_0;
                
            

                // creating part 1 of case case_lowpro
                let case_lowpro__part_1 = _bottom_case_fn();

                // make sure that rotations are relative
                let case_lowpro__part_1_bounds = case_lowpro__part_1.getBounds();
                let case_lowpro__part_1_x = case_lowpro__part_1_bounds[0].x + (case_lowpro__part_1_bounds[1].x - case_lowpro__part_1_bounds[0].x) / 2
                let case_lowpro__part_1_y = case_lowpro__part_1_bounds[0].y + (case_lowpro__part_1_bounds[1].y - case_lowpro__part_1_bounds[0].y) / 2
                case_lowpro__part_1 = translate([-case_lowpro__part_1_x, -case_lowpro__part_1_y, 0], case_lowpro__part_1);
                case_lowpro__part_1 = rotate([0,0,0], case_lowpro__part_1);
                case_lowpro__part_1 = translate([case_lowpro__part_1_x, case_lowpro__part_1_y, 0], case_lowpro__part_1);

                case_lowpro__part_1 = translate([0,0,0], case_lowpro__part_1);
                result = result.union(case_lowpro__part_1);
                
            

                // creating part 2 of case case_lowpro
                let case_lowpro__part_2 = _wall_low_case_fn();

                // make sure that rotations are relative
                let case_lowpro__part_2_bounds = case_lowpro__part_2.getBounds();
                let case_lowpro__part_2_x = case_lowpro__part_2_bounds[0].x + (case_lowpro__part_2_bounds[1].x - case_lowpro__part_2_bounds[0].x) / 2
                let case_lowpro__part_2_y = case_lowpro__part_2_bounds[0].y + (case_lowpro__part_2_bounds[1].y - case_lowpro__part_2_bounds[0].y) / 2
                case_lowpro__part_2 = translate([-case_lowpro__part_2_x, -case_lowpro__part_2_y, 0], case_lowpro__part_2);
                case_lowpro__part_2 = rotate([0,0,0], case_lowpro__part_2);
                case_lowpro__part_2 = translate([case_lowpro__part_2_x, case_lowpro__part_2_y, 0], case_lowpro__part_2);

                case_lowpro__part_2 = translate([0,0,0], case_lowpro__part_2);
                result = result.union(case_lowpro__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_lowpro_case_fn();
            }

        
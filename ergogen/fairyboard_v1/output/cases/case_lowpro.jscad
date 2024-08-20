function mounting_holes_extrude_6_outline_fn(){
    return CAG.circle({"center":[326.7461003,-145.6073555],"radius":2.9})
.subtract(
    CAG.circle({"center":[326.7461003,-145.6073555],"radius":1.6})
).union(
    CAG.circle({"center":[94.1716943,-145.6073555],"radius":2.9})
.subtract(
    CAG.circle({"center":[94.1716943,-145.6073555],"radius":1.6})
)).union(
    CAG.circle({"center":[271.8334595,-168.8317907],"radius":2.9})
.subtract(
    CAG.circle({"center":[271.8334595,-168.8317907],"radius":1.6})
)).union(
    CAG.circle({"center":[149.0843351,-168.8317907],"radius":2.9})
.subtract(
    CAG.circle({"center":[149.0843351,-168.8317907],"radius":1.6})
)).union(
    CAG.circle({"center":[338.3061818,-121.28834],"radius":2.9})
.subtract(
    CAG.circle({"center":[338.3061818,-121.28834],"radius":1.6})
)).union(
    CAG.circle({"center":[82.6116128,-121.28834],"radius":2.9})
.subtract(
    CAG.circle({"center":[82.6116128,-121.28834],"radius":1.6})
)).union(
    CAG.circle({"center":[262.8702533,-132.882334],"radius":2.9})
.subtract(
    CAG.circle({"center":[262.8702533,-132.882334],"radius":1.6})
)).union(
    CAG.circle({"center":[158.0475413,-132.882334],"radius":2.9})
.subtract(
    CAG.circle({"center":[158.0475413,-132.882334],"radius":1.6})
)).extrude({ offset: [0, 0, 6] });
}


function case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[57.2086434,-144.6363409],[69.8224879,-147.7813256]]).appendPoint([67.161347,-158.4545785]).appendArc([71.53159,-165.7278842],{"radius":6,"clockwise":false,"large":false}).appendPoint([89.9672088,-170.3244003]).appendArc([97.2405145,-165.9541573],{"radius":6,"clockwise":false,"large":false}).appendPoint([98.3291631,-161.5878265]).appendPoint([123.556852,-167.8777958]).appendPoint([119.0812969,-185.8282668]).appendArc([123.4515398,-193.1015725],{"radius":6,"clockwise":false,"large":false}).appendPoint([141.0430416,-197.4876265]).appendPoint([155.9148325,-206.2477808]).appendPoint([168.2794907,-219.5072534]).appendArc([176.7596032,-219.8033853],{"radius":6,"clockwise":false,"large":false}).appendPoint([190.6553234,-206.8454167]).appendArc([190.6571145,-206.8437456],{"radius":5,"clockwise":false,"large":false}).appendArc([190.9531256,-198.3670961],{"radius":6,"clockwise":false,"large":false}).appendArc([190.9514555,-198.3653043],{"radius":5,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812818,-178.510459]).appendPoint([229.9663392,-198.3653043]).appendArc([230.2624711,-206.8454166],{"radius":6,"clockwise":false,"large":false}).appendPoint([244.1581915,-219.8033855]).appendArc([252.6383038,-219.5072535],{"radius":6,"clockwise":false,"large":false}).appendPoint([265.0029621,-206.2477807]).appendPoint([279.874753,-197.4876265]).appendPoint([297.4662547,-193.1015725]).appendArc([301.8364977,-185.8282668],{"radius":6,"clockwise":false,"large":false}).appendPoint([297.3609426,-167.8777958]).appendPoint([322.5886316,-161.5878265]).appendPoint([323.6772801,-165.9541573]).appendArc([330.9505858,-170.3244002],{"radius":6,"clockwise":false,"large":false}).appendPoint([349.3862046,-165.7278842]).appendArc([353.7564475,-158.4545785],{"radius":6,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([363.7091512,-144.6363409]).appendArc([368.0793941,-137.3630352],{"radius":6,"clockwise":false,"large":false}).appendPoint([358.8863621,-100.4917976]).appendArc([351.6130564,-96.1215547],{"radius":6,"clockwise":false,"large":false}).appendPoint([337.5167321,-99.6361631]).appendArc([332.6935938,-98.7774792],{"radius":6,"clockwise":false,"large":false}).appendPoint([320.0797493,-101.9224638]).appendPoint([318.9911008,-97.556133]).appendArc([311.7177951,-93.1858901],{"radius":6,"clockwise":false,"large":false}).appendPoint([298.3239808,-96.5253431]).appendArc([292.5564106,-94.871519],{"radius":6,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([128.361384,-94.871519]).appendArc([122.5938138,-96.5253431],{"radius":6,"clockwise":false,"large":false}).appendPoint([109.1999995,-93.18589]).appendArc([101.9266938,-97.556133],{"radius":6,"clockwise":false,"large":false}).appendPoint([100.8380452,-101.9224638]).appendPoint([88.2242008,-98.7774791]).appendArc([83.4010624,-99.6361631],{"radius":6,"clockwise":false,"large":false}).appendPoint([69.3047382,-96.1215546]).appendArc([62.0314325,-100.4917976],{"radius":6,"clockwise":false,"large":false}).appendPoint([52.8384005,-137.3630352]).appendArc([57.2086434,-144.6363409],{"radius":6,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[57.2086434,-144.6363409],[69.8224879,-147.7813256]]).appendPoint([67.161347,-158.4545785]).appendArc([71.53159,-165.7278842],{"radius":6,"clockwise":false,"large":false}).appendPoint([89.9672088,-170.3244003]).appendArc([97.2405145,-165.9541573],{"radius":6,"clockwise":false,"large":false}).appendPoint([98.3291631,-161.5878265]).appendPoint([123.556852,-167.8777958]).appendPoint([119.0812969,-185.8282668]).appendArc([123.4515398,-193.1015725],{"radius":6,"clockwise":false,"large":false}).appendPoint([141.0430416,-197.4876265]).appendPoint([155.9148325,-206.2477808]).appendPoint([168.2794907,-219.5072534]).appendArc([176.7596032,-219.8033853],{"radius":6,"clockwise":false,"large":false}).appendPoint([190.6553234,-206.8454167]).appendArc([190.6571145,-206.8437456],{"radius":5,"clockwise":false,"large":false}).appendArc([190.9531256,-198.3670961],{"radius":6,"clockwise":false,"large":false}).appendArc([190.9514555,-198.3653043],{"radius":5,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812818,-178.510459]).appendPoint([229.9663392,-198.3653043]).appendArc([230.2624711,-206.8454166],{"radius":6,"clockwise":false,"large":false}).appendPoint([244.1581915,-219.8033855]).appendArc([252.6383038,-219.5072535],{"radius":6,"clockwise":false,"large":false}).appendPoint([265.0029621,-206.2477807]).appendPoint([279.874753,-197.4876265]).appendPoint([297.4662547,-193.1015725]).appendArc([301.8364977,-185.8282668],{"radius":6,"clockwise":false,"large":false}).appendPoint([297.3609426,-167.8777958]).appendPoint([322.5886316,-161.5878265]).appendPoint([323.6772801,-165.9541573]).appendArc([330.9505858,-170.3244002],{"radius":6,"clockwise":false,"large":false}).appendPoint([349.3862046,-165.7278842]).appendArc([353.7564475,-158.4545785],{"radius":6,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([363.7091512,-144.6363409]).appendArc([368.0793941,-137.3630352],{"radius":6,"clockwise":false,"large":false}).appendPoint([358.8863621,-100.4917976]).appendArc([351.6130564,-96.1215547],{"radius":6,"clockwise":false,"large":false}).appendPoint([337.5167321,-99.6361631]).appendArc([332.6935938,-98.7774792],{"radius":6,"clockwise":false,"large":false}).appendPoint([320.0797493,-101.9224638]).appendPoint([318.9911008,-97.556133]).appendArc([311.7177951,-93.1858901],{"radius":6,"clockwise":false,"large":false}).appendPoint([298.3239808,-96.5253431]).appendArc([292.5564106,-94.871519],{"radius":6,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([128.361384,-94.871519]).appendArc([122.5938138,-96.5253431],{"radius":6,"clockwise":false,"large":false}).appendPoint([109.1999995,-93.18589]).appendArc([101.9266938,-97.556133],{"radius":6,"clockwise":false,"large":false}).appendPoint([100.8380452,-101.9224638]).appendPoint([88.2242008,-98.7774791]).appendArc([83.4010624,-99.6361631],{"radius":6,"clockwise":false,"large":false}).appendPoint([69.3047382,-96.1215546]).appendArc([62.0314325,-100.4917976],{"radius":6,"clockwise":false,"large":false}).appendPoint([52.8384005,-137.3630352]).appendArc([57.2086434,-144.6363409],{"radius":6,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[58.4182529,-139.7848623],[74.9132803,-143.8975345]]).appendArc([75.6416541,-145.1097521],{"radius":1,"clockwise":true,"large":false}).appendPoint([72.0128257,-159.664188]).appendArc([72.7411995,-160.8764056],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.1768183,-165.4729216]).appendArc([92.3890359,-164.7445478],{"radius":1,"clockwise":false,"large":false}).appendPoint([94.445372,-156.4970341]).appendArc([95.6575896,-155.7686603],{"radius":1,"clockwise":true,"large":false}).appendPoint([128.6476444,-163.9940047]).appendArc([129.3760182,-165.2062223],{"radius":1,"clockwise":true,"large":false}).appendPoint([123.9327755,-187.0378763]).appendArc([124.6611493,-188.2500939],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.8153957,-192.7764559]).appendArc([143.0810122,-192.8851224],{"radius":1,"clockwise":true,"large":false}).appendPoint([158.9522455,-202.2339933]).appendArc([159.1760608,-202.4136241],{"radius":1,"clockwise":true,"large":false}).appendPoint([171.9362592,-216.0972616]).appendArc([173.3496113,-216.1466169],{"radius":1,"clockwise":false,"large":false}).appendPoint([187.2453316,-203.1886482]).appendArc([187.2946869,-201.7752961],{"radius":1,"clockwise":false,"large":false}).appendPoint([167.2985647,-180.3320802]).appendArc([167.0596227,-179.4081599],{"radius":1,"clockwise":true,"large":false}).appendPoint([173.3211189,-154.2946704]).appendArc([174.2914146,-153.5365923],{"radius":1,"clockwise":true,"large":false}).appendPoint([246.62638,-153.5365923]).appendArc([247.5966757,-154.2946704],{"radius":1,"clockwise":true,"large":false}).appendPoint([253.8581719,-179.4081599]).appendArc([253.6192299,-180.3320802],{"radius":1,"clockwise":true,"large":false}).appendPoint([233.6231077,-201.7752961]).appendArc([233.672463,-203.1886482],{"radius":1,"clockwise":false,"large":false}).appendPoint([247.5681833,-216.1466169]).appendArc([248.9815354,-216.0972616],{"radius":1,"clockwise":false,"large":false}).appendPoint([261.7417338,-202.4136241]).appendArc([261.9655491,-202.2339933],{"radius":1,"clockwise":true,"large":false}).appendPoint([277.8367824,-192.8851224]).appendArc([278.1023989,-192.7764559],{"radius":1,"clockwise":true,"large":false}).appendPoint([296.2566453,-188.2500939]).appendArc([296.9850191,-187.0378763],{"radius":1,"clockwise":false,"large":false}).appendPoint([291.5417764,-165.2062223]).appendArc([292.2701502,-163.9940047],{"radius":1,"clockwise":true,"large":false}).appendPoint([325.260205,-155.7686603]).appendArc([326.4724226,-156.4970341],{"radius":1,"clockwise":true,"large":false}).appendPoint([328.5287587,-164.7445478]).appendArc([329.7409763,-165.4729216],{"radius":1,"clockwise":false,"large":false}).appendPoint([348.1765951,-160.8764056]).appendArc([348.9049689,-159.664188],{"radius":1,"clockwise":false,"large":false}).appendPoint([345.2761405,-145.1097521]).appendArc([346.0045143,-143.8975345],{"radius":1,"clockwise":true,"large":false}).appendPoint([362.4995417,-139.7848623]).appendArc([363.2279155,-138.5726447],{"radius":1,"clockwise":false,"large":false}).appendPoint([354.0348835,-101.7014071]).appendArc([352.8226659,-100.9730333],{"radius":1,"clockwise":false,"large":false}).appendPoint([336.3276385,-105.0857055]).appendArc([335.1154209,-104.3573317],{"radius":1,"clockwise":true,"large":false}).appendArc([333.9032033,-103.6289578],{"radius":1,"clockwise":false,"large":false}).appendPoint([317.4081759,-107.74163]).appendArc([316.1959583,-107.0132562],{"radius":1,"clockwise":true,"large":false}).appendPoint([314.1396222,-98.7657425]).appendArc([312.9274046,-98.0373687],{"radius":1,"clockwise":false,"large":false}).appendPoint([296.4323772,-102.1500409]).appendArc([295.2201596,-101.4216671],{"radius":1,"clockwise":true,"large":false}).appendPoint([294.9782377,-100.4513714]).appendArc([293.7660201,-99.7229976],{"radius":1,"clockwise":false,"large":false}).appendPoint([237.6080054,-113.7247632]).appendArc([237.3660835,-113.7544675],{"radius":1,"clockwise":true,"large":false}).appendPoint([183.5517111,-113.7544675]).appendArc([183.3097892,-113.7247632],{"radius":1,"clockwise":true,"large":false}).appendPoint([127.1517745,-99.7229976]).appendArc([125.9395569,-100.4513714],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.697635,-101.4216671]).appendArc([124.4854174,-102.1500409],{"radius":1,"clockwise":true,"large":false}).appendPoint([107.99039,-98.0373687]).appendArc([106.7781724,-98.7657425],{"radius":1,"clockwise":false,"large":false}).appendPoint([104.7218363,-107.0132562]).appendArc([103.5096187,-107.74163],{"radius":1,"clockwise":true,"large":false}).appendPoint([87.0145913,-103.6289578]).appendArc([85.8023737,-104.3573316],{"radius":1,"clockwise":false,"large":false}).appendArc([84.5901561,-105.0857055],{"radius":1,"clockwise":true,"large":false}).appendPoint([68.0951287,-100.9730333]).appendArc([66.8829111,-101.7014071],{"radius":1,"clockwise":false,"large":false}).appendPoint([57.6898791,-138.5726447]).appendArc([58.4182529,-139.7848623],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
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

        
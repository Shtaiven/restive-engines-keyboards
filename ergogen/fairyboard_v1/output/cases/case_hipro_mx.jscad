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


function case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[261.9187263,-224.1714173],[100.9212059,-224.1714173]]).appendArc([93.595529,-220.9783592],{"radius":10,"clockwise":true,"large":false}).appendPoint([49.6223883,-173.654167]).appendArc([47.8849875,-171.073408],{"radius":10,"clockwise":true,"large":false}).appendArc([47.8845648,-171.0725014],{"radius":5,"clockwise":true,"large":false}).appendPoint([37.7372329,-149.3114777]).appendArc([37.4033844,-141.6650939],{"radius":10,"clockwise":true,"large":false}).appendArc([37.4037265,-141.664154],{"radius":5,"clockwise":true,"large":false}).appendPoint([56.1878646,-90.0551587]).appendArc([66.3790638,-83.5059864],{"radius":10,"clockwise":true,"large":false}).appendPoint([101.6029453,-86.3113762]).appendArc([102.7217932,-86.4644509],{"radius":10,"clockwise":true,"large":false}).appendPoint([120.9394033,-90.0146287]).appendArc([120.940791,-90.0148993],{"radius":5,"clockwise":true,"large":false}).appendArc([122.4468251,-90.4330616],{"radius":10,"clockwise":true,"large":false}).appendArc([122.447765,-90.4334037],{"radius":5,"clockwise":true,"large":false}).appendPoint([143.1042239,-97.9517399]).appendArc([144.6396176,-98.6629263],{"radius":10,"clockwise":true,"large":false}).appendPoint([176.6042939,-116.9001748]).appendPoint([186.2356385,-116.9001747]).appendPoint([218.2003145,-98.6629263]).appendArc([219.7357085,-97.9517399],{"radius":10,"clockwise":true,"large":false}).appendPoint([240.3921672,-90.4334037]).appendArc([240.393107,-90.4330615],{"radius":5,"clockwise":true,"large":false}).appendArc([241.9005292,-90.0146287],{"radius":10,"clockwise":true,"large":false}).appendPoint([260.1181388,-86.4644509]).appendArc([261.236987,-86.3113762],{"radius":10,"clockwise":true,"large":false}).appendPoint([296.4608682,-83.5059864]).appendArc([306.6517257,-90.0542192],{"radius":10,"clockwise":true,"large":false}).appendPoint([325.4365478,-141.6650938]).appendArc([325.1026992,-149.3114779],{"radius":10,"clockwise":true,"large":false}).appendPoint([314.9549448,-171.0734078]).appendArc([313.2175439,-173.654167],{"radius":10,"clockwise":true,"large":false}).appendPoint([269.2444032,-220.9783591]).appendArc([261.9187263,-224.1714173],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_17_8_outline_fn(){
    return new CSG.Path2D([[261.9187263,-224.1714173],[100.9212059,-224.1714173]]).appendArc([93.595529,-220.9783592],{"radius":10,"clockwise":true,"large":false}).appendPoint([49.6223883,-173.654167]).appendArc([47.8849875,-171.073408],{"radius":10,"clockwise":true,"large":false}).appendArc([47.8845648,-171.0725014],{"radius":5,"clockwise":true,"large":false}).appendPoint([37.7372329,-149.3114777]).appendArc([37.4033844,-141.6650939],{"radius":10,"clockwise":true,"large":false}).appendArc([37.4037265,-141.664154],{"radius":5,"clockwise":true,"large":false}).appendPoint([56.1878646,-90.0551587]).appendArc([66.3790638,-83.5059864],{"radius":10,"clockwise":true,"large":false}).appendPoint([101.6029453,-86.3113762]).appendArc([102.7217932,-86.4644509],{"radius":10,"clockwise":true,"large":false}).appendPoint([120.9394033,-90.0146287]).appendArc([120.940791,-90.0148993],{"radius":5,"clockwise":true,"large":false}).appendArc([122.4468251,-90.4330616],{"radius":10,"clockwise":true,"large":false}).appendArc([122.447765,-90.4334037],{"radius":5,"clockwise":true,"large":false}).appendPoint([143.1042239,-97.9517399]).appendArc([144.6396176,-98.6629263],{"radius":10,"clockwise":true,"large":false}).appendPoint([176.6042939,-116.9001748]).appendPoint([186.2356385,-116.9001747]).appendPoint([218.2003145,-98.6629263]).appendArc([219.7357085,-97.9517399],{"radius":10,"clockwise":true,"large":false}).appendPoint([240.3921672,-90.4334037]).appendArc([240.393107,-90.4330615],{"radius":5,"clockwise":true,"large":false}).appendArc([241.9005292,-90.0146287],{"radius":10,"clockwise":true,"large":false}).appendPoint([260.1181388,-86.4644509]).appendArc([261.236987,-86.3113762],{"radius":10,"clockwise":true,"large":false}).appendPoint([296.4608682,-83.5059864]).appendArc([306.6517257,-90.0542192],{"radius":10,"clockwise":true,"large":false}).appendPoint([325.4365478,-141.6650938]).appendArc([325.1026992,-149.3114779],{"radius":10,"clockwise":true,"large":false}).appendPoint([314.9549448,-171.0734078]).appendArc([313.2175439,-173.654167],{"radius":10,"clockwise":true,"large":false}).appendPoint([269.2444032,-220.9783591]).appendArc([261.9187263,-224.1714173],{"radius":10,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[261.9187263,-220.1714173],[100.9212059,-220.1714173]]).appendArc([96.5257998,-218.2555824],{"radius":6,"clockwise":true,"large":false}).appendPoint([52.5526591,-170.9313903]).appendArc([51.5102186,-169.3829348],{"radius":6,"clockwise":true,"large":false}).appendPoint([41.3626531,-147.6214099]).appendArc([41.1621549,-143.0331743],{"radius":6,"clockwise":true,"large":false}).appendPoint([59.946977,-91.4222996]).appendArc([66.0614914,-87.49336],{"radius":6,"clockwise":true,"large":false}).appendPoint([101.2853728,-90.2987498]).appendArc([101.9566816,-90.3905946],{"radius":6,"clockwise":true,"large":false}).appendPoint([120.1742915,-93.9407723]).appendArc([121.0787447,-94.1918321],{"radius":6,"clockwise":true,"large":false}).appendPoint([141.7361433,-101.7105104]).appendArc([142.6573796,-102.1372222],{"radius":6,"clockwise":true,"large":false}).appendPoint([174.6220558,-120.3744707]).appendArc([176.6042937,-120.9001747],{"radius":4,"clockwise":false,"large":false}).appendPoint([186.2356385,-120.9001747]).appendArc([188.2178765,-120.3744707],{"radius":4,"clockwise":false,"large":false}).appendPoint([220.1825526,-102.1372222]).appendArc([221.1037889,-101.7105104],{"radius":6,"clockwise":true,"large":false}).appendPoint([241.7611875,-94.1918321]).appendArc([242.6656408,-93.9407724],{"radius":6,"clockwise":true,"large":false}).appendPoint([260.8832506,-90.3905946]).appendArc([261.5545594,-90.2987498],{"radius":6,"clockwise":true,"large":false}).appendPoint([296.7784407,-87.49336]).appendArc([302.8929552,-91.4222996],{"radius":6,"clockwise":true,"large":false}).appendPoint([321.6776243,-143.032754]).appendArc([321.4774681,-147.6210047],{"radius":6,"clockwise":true,"large":false}).appendPoint([311.3299026,-169.3825294]).appendArc([310.2872731,-170.9313902],{"radius":6,"clockwise":true,"large":false}).appendPoint([266.3141324,-218.2555824]).appendArc([261.9187263,-220.1714173],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 17.8] });
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
            
            

                function _wall_high_mx_case_fn() {
                    

                // creating part 0 of case _wall_high_mx
                let _wall_high_mx__part_0 = wall_extrude_17_8_outline_fn();

                // make sure that rotations are relative
                let _wall_high_mx__part_0_bounds = _wall_high_mx__part_0.getBounds();
                let _wall_high_mx__part_0_x = _wall_high_mx__part_0_bounds[0].x + (_wall_high_mx__part_0_bounds[1].x - _wall_high_mx__part_0_bounds[0].x) / 2
                let _wall_high_mx__part_0_y = _wall_high_mx__part_0_bounds[0].y + (_wall_high_mx__part_0_bounds[1].y - _wall_high_mx__part_0_bounds[0].y) / 2
                _wall_high_mx__part_0 = translate([-_wall_high_mx__part_0_x, -_wall_high_mx__part_0_y, 0], _wall_high_mx__part_0);
                _wall_high_mx__part_0 = rotate([0,0,0], _wall_high_mx__part_0);
                _wall_high_mx__part_0 = translate([_wall_high_mx__part_0_x, _wall_high_mx__part_0_y, 0], _wall_high_mx__part_0);

                _wall_high_mx__part_0 = translate([0,0,0], _wall_high_mx__part_0);
                let result = _wall_high_mx__part_0;
                
            
                    return result;
                }
            
            

                function case_hipro_mx_case_fn() {
                    

                // creating part 0 of case case_hipro_mx
                let case_hipro_mx__part_0 = mounting_holes_case_fn();

                // make sure that rotations are relative
                let case_hipro_mx__part_0_bounds = case_hipro_mx__part_0.getBounds();
                let case_hipro_mx__part_0_x = case_hipro_mx__part_0_bounds[0].x + (case_hipro_mx__part_0_bounds[1].x - case_hipro_mx__part_0_bounds[0].x) / 2
                let case_hipro_mx__part_0_y = case_hipro_mx__part_0_bounds[0].y + (case_hipro_mx__part_0_bounds[1].y - case_hipro_mx__part_0_bounds[0].y) / 2
                case_hipro_mx__part_0 = translate([-case_hipro_mx__part_0_x, -case_hipro_mx__part_0_y, 0], case_hipro_mx__part_0);
                case_hipro_mx__part_0 = rotate([0,0,0], case_hipro_mx__part_0);
                case_hipro_mx__part_0 = translate([case_hipro_mx__part_0_x, case_hipro_mx__part_0_y, 0], case_hipro_mx__part_0);

                case_hipro_mx__part_0 = translate([0,0,0], case_hipro_mx__part_0);
                let result = case_hipro_mx__part_0;
                
            

                // creating part 1 of case case_hipro_mx
                let case_hipro_mx__part_1 = _bottom_case_fn();

                // make sure that rotations are relative
                let case_hipro_mx__part_1_bounds = case_hipro_mx__part_1.getBounds();
                let case_hipro_mx__part_1_x = case_hipro_mx__part_1_bounds[0].x + (case_hipro_mx__part_1_bounds[1].x - case_hipro_mx__part_1_bounds[0].x) / 2
                let case_hipro_mx__part_1_y = case_hipro_mx__part_1_bounds[0].y + (case_hipro_mx__part_1_bounds[1].y - case_hipro_mx__part_1_bounds[0].y) / 2
                case_hipro_mx__part_1 = translate([-case_hipro_mx__part_1_x, -case_hipro_mx__part_1_y, 0], case_hipro_mx__part_1);
                case_hipro_mx__part_1 = rotate([0,0,0], case_hipro_mx__part_1);
                case_hipro_mx__part_1 = translate([case_hipro_mx__part_1_x, case_hipro_mx__part_1_y, 0], case_hipro_mx__part_1);

                case_hipro_mx__part_1 = translate([0,0,0], case_hipro_mx__part_1);
                result = result.union(case_hipro_mx__part_1);
                
            

                // creating part 2 of case case_hipro_mx
                let case_hipro_mx__part_2 = _wall_high_mx_case_fn();

                // make sure that rotations are relative
                let case_hipro_mx__part_2_bounds = case_hipro_mx__part_2.getBounds();
                let case_hipro_mx__part_2_x = case_hipro_mx__part_2_bounds[0].x + (case_hipro_mx__part_2_bounds[1].x - case_hipro_mx__part_2_bounds[0].x) / 2
                let case_hipro_mx__part_2_y = case_hipro_mx__part_2_bounds[0].y + (case_hipro_mx__part_2_bounds[1].y - case_hipro_mx__part_2_bounds[0].y) / 2
                case_hipro_mx__part_2 = translate([-case_hipro_mx__part_2_x, -case_hipro_mx__part_2_y, 0], case_hipro_mx__part_2);
                case_hipro_mx__part_2 = rotate([0,0,0], case_hipro_mx__part_2);
                case_hipro_mx__part_2 = translate([case_hipro_mx__part_2_x, case_hipro_mx__part_2_y, 0], case_hipro_mx__part_2);

                case_hipro_mx__part_2 = translate([0,0,0], case_hipro_mx__part_2);
                result = result.union(case_hipro_mx__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_hipro_mx_case_fn();
            }

        
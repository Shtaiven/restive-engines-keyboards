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


function case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[53.7097523,-145.3539215],[67.2327139,-148.9773882]]).appendPoint([63.6092472,-162.5003497]).appendArc([67.1457471,-168.6243329],{"radius":5,"clockwise":false,"large":false}).appendPoint([87.4292235,-174.059274]).appendArc([93.5529478,-170.5237401],{"radius":5,"clockwise":false,"large":false}).appendPoint([94.9764526,-165.2111481]).appendPoint([108.4994141,-168.8346148]).appendArc([111.0876046,-168.8346147],{"radius":5,"clockwise":false,"large":false}).appendPoint([106.3848955,-186.3853643]).appendArc([109.9204294,-192.5090886],{"radius":5,"clockwise":false,"large":false}).appendPoint([128.3986304,-197.4603077]).appendPoint([138.6091266,-203.7173078]).appendArc([139.6548544,-209.9117025],{"radius":5,"clockwise":false,"large":false}).appendPoint([155.3829246,-223.8267235]).appendArc([162.4408034,-223.3950451],{"radius":5,"clockwise":false,"large":false}).appendPoint([176.3558244,-207.6669749]).appendArc([175.924146,-200.6090961],{"radius":5,"clockwise":false,"large":false}).appendPoint([162.2065616,-188.4728026]).appendPoint([162.5578356,-187.8995754]).appendArc([162.9759697,-187.0435288],{"radius":5,"clockwise":false,"large":false}).appendArc([168.7750439,-183.4325067],{"radius":5,"clockwise":false,"large":false}).appendPoint([184.0453675,-126.442883]).appendArc([180.5098336,-120.3191587],{"radius":5,"clockwise":false,"large":false}).appendPoint([165.606288,-116.3257657]).appendArc([162.5454715,-113.9527081],{"radius":5,"clockwise":false,"large":false}).appendPoint([149.02251,-110.3292415]).appendArc([145.4860101,-104.2052583],{"radius":5,"clockwise":false,"large":false}).appendPoint([125.2025337,-98.7703172]).appendArc([119.9996483,-100.4820369],{"radius":5,"clockwise":false,"large":false}).appendPoint([106.073486,-96.7505329]).appendArc([99.9497616,-100.2860668],{"radius":5,"clockwise":false,"large":false}).appendPoint([98.5262568,-105.5986588]).appendPoint([66.6507045,-97.0576303]).appendArc([60.5269802,-100.5931642],{"radius":5,"clockwise":false,"large":false}).appendPoint([50.1742184,-139.2301972]).appendArc([53.7097523,-145.3539215],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[347.7152727,-148.9773881],[361.2382344,-145.3539215]]).appendArc([364.7737682,-139.2301972],{"radius":5,"clockwise":false,"large":false}).appendPoint([354.4212652,-100.5941301]).appendArc([348.2972821,-97.0576303],{"radius":5,"clockwise":false,"large":false}).appendPoint([316.4217298,-105.5986588]).appendPoint([314.998225,-100.2860667]).appendArc([308.8745007,-96.7505329],{"radius":5,"clockwise":false,"large":false}).appendPoint([294.9483382,-100.4820368]).appendArc([289.7454529,-98.7703172],{"radius":5,"clockwise":false,"large":false}).appendPoint([269.4610106,-104.2055171]).appendArc([265.9254767,-110.3292414],{"radius":5,"clockwise":false,"large":false}).appendPoint([252.402515,-113.9527081]).appendArc([249.3416985,-116.3257658],{"radius":5,"clockwise":false,"large":false}).appendPoint([234.438153,-120.3191587]).appendArc([230.9026191,-126.442883],{"radius":5,"clockwise":false,"large":false}).appendPoint([246.1729427,-183.4325067]).appendArc([251.9720169,-187.0435288],{"radius":5,"clockwise":false,"large":false}).appendArc([252.390151,-187.8995754],{"radius":5,"clockwise":false,"large":false}).appendPoint([252.7414251,-188.4728026]).appendPoint([239.0238406,-200.6090961]).appendArc([238.5921622,-207.6669749],{"radius":5,"clockwise":false,"large":false}).appendPoint([252.5071832,-223.3950451]).appendArc([259.565062,-223.8267235],{"radius":5,"clockwise":false,"large":false}).appendPoint([275.2931322,-209.9117025]).appendArc([276.33886,-203.7173078],{"radius":5,"clockwise":false,"large":false}).appendPoint([286.5493564,-197.4603076]).appendPoint([305.0275572,-192.5090886]).appendArc([308.5630911,-186.3853643],{"radius":5,"clockwise":false,"large":false}).appendPoint([303.860382,-168.8346147]).appendArc([306.4485725,-168.8346147],{"radius":5,"clockwise":false,"large":false}).appendPoint([319.9715341,-165.2111481]).appendPoint([321.3950388,-170.5237401]).appendArc([327.5187631,-174.059274],{"radius":5,"clockwise":false,"large":false}).appendPoint([347.8032054,-168.6240741]).appendArc([351.3387393,-162.5003498],{"radius":5,"clockwise":false,"large":false}).appendPoint([347.7152727,-148.9773881]).close().innerToCAG()
).extrude({ offset: [0, 0, 2] });
}


function wall_extrude_17_8_outline_fn(){
    return new CSG.Path2D([[53.7097523,-145.3539215],[67.2327139,-148.9773882]]).appendPoint([63.6092472,-162.5003497]).appendArc([67.1457471,-168.6243329],{"radius":5,"clockwise":false,"large":false}).appendPoint([87.4292235,-174.059274]).appendArc([93.5529478,-170.5237401],{"radius":5,"clockwise":false,"large":false}).appendPoint([94.9764526,-165.2111481]).appendPoint([108.4994141,-168.8346148]).appendArc([111.0876046,-168.8346147],{"radius":5,"clockwise":false,"large":false}).appendPoint([106.3848955,-186.3853643]).appendArc([109.9204294,-192.5090886],{"radius":5,"clockwise":false,"large":false}).appendPoint([128.3986304,-197.4603077]).appendPoint([138.6091266,-203.7173078]).appendArc([139.6548544,-209.9117025],{"radius":5,"clockwise":false,"large":false}).appendPoint([155.3829246,-223.8267235]).appendArc([162.4408034,-223.3950451],{"radius":5,"clockwise":false,"large":false}).appendPoint([176.3558244,-207.6669749]).appendArc([175.924146,-200.6090961],{"radius":5,"clockwise":false,"large":false}).appendPoint([162.2065616,-188.4728026]).appendPoint([162.5578356,-187.8995754]).appendArc([162.9759697,-187.0435288],{"radius":5,"clockwise":false,"large":false}).appendArc([168.7750439,-183.4325067],{"radius":5,"clockwise":false,"large":false}).appendPoint([184.0453675,-126.442883]).appendArc([180.5098336,-120.3191587],{"radius":5,"clockwise":false,"large":false}).appendPoint([165.606288,-116.3257657]).appendArc([162.5454715,-113.9527081],{"radius":5,"clockwise":false,"large":false}).appendPoint([149.02251,-110.3292415]).appendArc([145.4860101,-104.2052583],{"radius":5,"clockwise":false,"large":false}).appendPoint([125.2025337,-98.7703172]).appendArc([119.9996483,-100.4820369],{"radius":5,"clockwise":false,"large":false}).appendPoint([106.073486,-96.7505329]).appendArc([99.9497616,-100.2860668],{"radius":5,"clockwise":false,"large":false}).appendPoint([98.5262568,-105.5986588]).appendPoint([66.6507045,-97.0576303]).appendArc([60.5269802,-100.5931642],{"radius":5,"clockwise":false,"large":false}).appendPoint([50.1742184,-139.2301972]).appendArc([53.7097523,-145.3539215],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[347.7152727,-148.9773881],[361.2382344,-145.3539215]]).appendArc([364.7737682,-139.2301972],{"radius":5,"clockwise":false,"large":false}).appendPoint([354.4212652,-100.5941301]).appendArc([348.2972821,-97.0576303],{"radius":5,"clockwise":false,"large":false}).appendPoint([316.4217298,-105.5986588]).appendPoint([314.998225,-100.2860667]).appendArc([308.8745007,-96.7505329],{"radius":5,"clockwise":false,"large":false}).appendPoint([294.9483382,-100.4820368]).appendArc([289.7454529,-98.7703172],{"radius":5,"clockwise":false,"large":false}).appendPoint([269.4610106,-104.2055171]).appendArc([265.9254767,-110.3292414],{"radius":5,"clockwise":false,"large":false}).appendPoint([252.402515,-113.9527081]).appendArc([249.3416985,-116.3257658],{"radius":5,"clockwise":false,"large":false}).appendPoint([234.438153,-120.3191587]).appendArc([230.9026191,-126.442883],{"radius":5,"clockwise":false,"large":false}).appendPoint([246.1729427,-183.4325067]).appendArc([251.9720169,-187.0435288],{"radius":5,"clockwise":false,"large":false}).appendArc([252.390151,-187.8995754],{"radius":5,"clockwise":false,"large":false}).appendPoint([252.7414251,-188.4728026]).appendPoint([239.0238406,-200.6090961]).appendArc([238.5921622,-207.6669749],{"radius":5,"clockwise":false,"large":false}).appendPoint([252.5071832,-223.3950451]).appendArc([259.565062,-223.8267235],{"radius":5,"clockwise":false,"large":false}).appendPoint([275.2931322,-209.9117025]).appendArc([276.33886,-203.7173078],{"radius":5,"clockwise":false,"large":false}).appendPoint([286.5493564,-197.4603076]).appendPoint([305.0275572,-192.5090886]).appendArc([308.5630911,-186.3853643],{"radius":5,"clockwise":false,"large":false}).appendPoint([303.860382,-168.8346147]).appendArc([306.4485725,-168.8346147],{"radius":5,"clockwise":false,"large":false}).appendPoint([319.9715341,-165.2111481]).appendPoint([321.3950388,-170.5237401]).appendArc([327.5187631,-174.059274],{"radius":5,"clockwise":false,"large":false}).appendPoint([347.8032054,-168.6240741]).appendArc([351.3387393,-162.5003498],{"radius":5,"clockwise":false,"large":false}).appendPoint([347.7152727,-148.9773881]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[276.0895718,-174.898732],[277.4361226,-174.5379249]]).appendPoint([278.6541872,-179.0838039]).appendPoint([276.0895718,-174.898732]).close().innerToCAG()
.union(
    new CSG.Path2D([[342.8162932,-146.148961],[360.2029582,-141.4902182]]).appendArc([360.9100649,-140.2654734],{"radius":1,"clockwise":false,"large":false}).appendPoint([350.5574188,-101.6288724]).appendArc([349.3325583,-100.9213336],{"radius":1,"clockwise":false,"large":false}).appendPoint([313.5933026,-110.4976383]).appendPoint([311.1345217,-101.3213429]).appendArc([309.9097769,-100.6142362],{"radius":1,"clockwise":false,"large":false}).appendPoint([292.523112,-105.272979]).appendPoint([292.0054739,-103.3411272]).appendArc([290.7807291,-102.6340205],{"radius":1,"clockwise":false,"large":false}).appendPoint([270.4962868,-108.0692204]).appendArc([269.78918,-109.2939652],{"radius":1,"clockwise":false,"large":false}).appendPoint([270.8244562,-113.1576686]).appendPoint([253.4377912,-117.8164114]).appendArc([252.7306845,-119.0411562],{"radius":1,"clockwise":false,"large":false}).appendPoint([252.8600941,-119.5241192]).appendPoint([235.4734292,-124.182862]).appendArc([234.7663224,-125.4076068],{"radius":1,"clockwise":false,"large":false}).appendPoint([250.036646,-182.3972305]).appendArc([251.2613908,-183.1043373],{"radius":1,"clockwise":false,"large":false}).appendPoint([263.7714546,-179.7522759]).appendPoint([256.1308532,-184.4344425]).appendArc([255.8007116,-185.8095812],{"radius":1,"clockwise":false,"large":false}).appendPoint([258.0252181,-189.4396458]).appendArc([257.402391,-189.6898979],{"radius":1,"clockwise":false,"large":false}).appendPoint([241.6743208,-203.604919]).appendArc([241.5879851,-205.0164947],{"radius":1,"clockwise":false,"large":false}).appendPoint([255.5030061,-220.7445649]).appendArc([256.9145818,-220.8309006],{"radius":1,"clockwise":false,"large":false}).appendPoint([272.642652,-206.9158796]).appendArc([272.7289877,-205.5043039],{"radius":1,"clockwise":false,"large":false}).appendPoint([270.2815171,-202.7379416]).appendPoint([284.9538702,-193.7467121]).appendPoint([303.9922811,-188.6453853]).appendArc([304.6993878,-187.4206405],{"radius":1,"clockwise":false,"large":false}).appendPoint([298.3583212,-163.7554577]).appendPoint([303.6709134,-162.3319529]).appendPoint([304.1885514,-164.2638047]).appendArc([305.4132963,-164.9709114],{"radius":1,"clockwise":false,"large":false}).appendPoint([322.7999612,-160.3121686]).appendPoint([325.2587421,-169.488464]).appendArc([326.4834869,-170.1955707],{"radius":1,"clockwise":false,"large":false}).appendPoint([346.7679292,-164.7603708]).appendArc([347.475036,-163.535626],{"radius":1,"clockwise":false,"large":false}).appendPoint([342.8162932,-146.148961]).close().innerToCAG()
))).extrude({ offset: [0, 0, 17.8] });
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

        
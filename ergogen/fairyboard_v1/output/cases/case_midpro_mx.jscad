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
    return new CSG.Path2D([[57.305673,-144.6605331],[69.8224879,-147.7813256]]).appendPoint([67.1855392,-158.3575489]).appendArc([71.6286196,-165.7520764],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([89.8701792,-170.3002081]).appendArc([97.2647067,-165.8571277],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([98.3291631,-161.5878265]).appendPoint([110.8459779,-164.708619]).appendArc([116.6692603,-163.0686854],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([124.2826177,-164.9669087]).appendPoint([119.1054891,-185.7312372]).appendArc([123.5485694,-193.1257647],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([141.0430418,-197.4876266]).appendPoint([155.9148324,-206.2477807]).appendPoint([168.2112909,-219.434118]).appendArc([176.8327386,-219.7351855],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([190.582188,-206.9136165]).appendArc([190.8832555,-198.2921688],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812818,-178.5104591]).appendPoint([230.034539,-198.2921689]).appendArc([230.3356065,-206.9136164],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([244.0850561,-219.7351856]).appendArc([244.0867786,-219.7367911],{"radius":5,"clockwise":false,"large":false}).appendArc([252.7065036,-219.4341181],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([265.002962,-206.2477808]).appendPoint([279.8747531,-197.4876265]).appendPoint([297.3692252,-193.1257647]).appendArc([297.3715103,-193.1251944],{"radius":5,"clockwise":false,"large":false}).appendArc([301.8123055,-185.7312372],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([296.6351769,-164.9669086]).appendPoint([304.2485342,-163.0686854]).appendArc([310.0718167,-164.7086189],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([322.5886316,-161.5878265]).appendPoint([323.6530879,-165.8571277]).appendArc([331.0476154,-170.300208],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([349.289175,-165.7520764]).appendArc([353.7322553,-158.3575489],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([363.6121216,-144.6605331]).appendArc([368.0552019,-137.2660056],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([358.9105543,-100.5888272]).appendArc([351.5160268,-96.1457469],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([338.0289162,-99.5084611]).appendArc([333.6638895,-98.5355573],{"radius":5,"clockwise":false,"large":false}).appendPoint([320.0797493,-101.9224638]).appendPoint([319.015293,-97.6531626]).appendArc([311.6207655,-93.2100823],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([298.2826634,-96.5356446]).appendArc([292.459381,-94.8957112],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([128.4584136,-94.8957112]).appendArc([122.6351311,-96.5356447],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([109.2970291,-93.2100822]).appendArc([101.9025016,-97.6531626],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([100.8380452,-101.9224638]).appendPoint([88.3212304,-98.8016713]).appendArc([83.454914,-99.6495897],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([69.4017678,-96.1457468]).appendArc([62.0072403,-100.5888272],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([52.8625927,-137.2660056]).appendArc([57.305673,-144.6605331],{"radius":6.1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_11_6_outline_fn(){
    return new CSG.Path2D([[57.305673,-144.6605331],[69.8224879,-147.7813256]]).appendPoint([67.1855392,-158.3575489]).appendArc([71.6286196,-165.7520764],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([89.8701792,-170.3002081]).appendArc([97.2647067,-165.8571277],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([98.3291631,-161.5878265]).appendPoint([110.8459779,-164.708619]).appendArc([116.6692603,-163.0686854],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([124.2826177,-164.9669087]).appendPoint([119.1054891,-185.7312372]).appendArc([123.5485694,-193.1257647],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([141.0430418,-197.4876266]).appendPoint([155.9148324,-206.2477807]).appendPoint([168.2112909,-219.434118]).appendArc([176.8327386,-219.7351855],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([190.582188,-206.9136165]).appendArc([190.8832555,-198.2921688],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812818,-178.5104591]).appendPoint([230.034539,-198.2921689]).appendArc([230.3356065,-206.9136164],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([244.0850561,-219.7351856]).appendArc([244.0867786,-219.7367911],{"radius":5,"clockwise":false,"large":false}).appendArc([252.7065036,-219.4341181],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([265.002962,-206.2477808]).appendPoint([279.8747531,-197.4876265]).appendPoint([297.3692252,-193.1257647]).appendArc([297.3715103,-193.1251944],{"radius":5,"clockwise":false,"large":false}).appendArc([301.8123055,-185.7312372],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([296.6351769,-164.9669086]).appendPoint([304.2485342,-163.0686854]).appendArc([310.0718167,-164.7086189],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([322.5886316,-161.5878265]).appendPoint([323.6530879,-165.8571277]).appendArc([331.0476154,-170.300208],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([349.289175,-165.7520764]).appendArc([353.7322553,-158.3575489],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([363.6121216,-144.6605331]).appendArc([368.0552019,-137.2660056],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([358.9105543,-100.5888272]).appendArc([351.5160268,-96.1457469],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([338.0289162,-99.5084611]).appendArc([333.6638895,-98.5355573],{"radius":5,"clockwise":false,"large":false}).appendPoint([320.0797493,-101.9224638]).appendPoint([319.015293,-97.6531626]).appendArc([311.6207655,-93.2100823],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([298.2826634,-96.5356446]).appendArc([292.459381,-94.8957112],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([128.4584136,-94.8957112]).appendArc([122.6351311,-96.5356447],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([109.2970291,-93.2100822]).appendArc([101.9025016,-97.6531626],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([100.8380452,-101.9224638]).appendPoint([88.3212304,-98.8016713]).appendArc([83.454914,-99.6495897],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([69.4017678,-96.1457468]).appendArc([62.0072403,-100.5888272],{"radius":6.1,"clockwise":false,"large":false}).appendPoint([52.8625927,-137.2660056]).appendArc([57.305673,-144.6605331],{"radius":6.1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[58.5152825,-139.8090545],[74.8162507,-143.8733423]]).appendArc([75.6174619,-145.2067817],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([72.0370179,-159.5671584]).appendArc([72.8382291,-160.9005978],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([91.0797887,-165.4487294]).appendArc([92.4132281,-164.6475182],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([94.4211798,-156.5940637]).appendArc([95.7546192,-155.7928525],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([112.0555874,-159.8571403]).appendArc([113.3890268,-159.0559291],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([113.5825643,-158.2796926]).appendArc([114.9160037,-157.4784814],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([129.2763805,-161.0589254]).appendArc([130.0775917,-162.3923648],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([123.9569677,-186.9408467]).appendArc([124.7581789,-188.2742861],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([142.8013272,-192.7729482]).appendArc([143.0935053,-192.8924814],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([158.9397524,-202.2266343]).appendArc([159.1859492,-202.4242282],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([171.8680594,-216.0241262]).appendArc([173.4227467,-216.078417],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([187.1721962,-203.256848]).appendArc([187.226487,-201.7021607],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([167.3355942,-180.3717895]).appendArc([167.0727579,-179.3554771],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([173.3022179,-154.3704782]).appendArc([174.3695432,-153.5365923],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([246.5482514,-153.5365923]).appendArc([247.6155767,-154.3704782],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([253.8450367,-179.3554771]).appendArc([253.5822004,-180.3717894],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([233.6913075,-201.7021607]).appendArc([233.7455984,-203.2568479],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([247.4950479,-216.0784171]).appendArc([249.0497351,-216.0241262],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([261.7318453,-202.4242281]).appendArc([261.9780422,-202.2266343],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([277.8242892,-192.8924814]).appendArc([278.1164674,-192.7729482],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([296.1596157,-188.2742861]).appendArc([296.9608269,-186.9408467],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([290.8402029,-162.3923648]).appendArc([291.6414141,-161.0589254],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([306.0017909,-157.4784814]).appendArc([307.3352303,-158.2796926],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([307.5287678,-159.0559291]).appendArc([308.8622072,-159.8571403],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([325.1631754,-155.7928525]).appendArc([326.4966148,-156.5940637],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([328.5045665,-164.6475182]).appendArc([329.8380059,-165.4487294],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([348.0795655,-160.9005978]).appendArc([348.8807767,-159.5671584],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([345.3003327,-145.2067817]).appendArc([346.1015439,-143.8733423],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([362.4025121,-139.8090545]).appendArc([363.2037233,-138.4756151],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([354.0590757,-101.7984367]).appendArc([352.7256363,-100.9972255],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([336.4246681,-105.0615133]).appendArc([335.0912287,-104.2603021],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([334.873499,-103.3870359]).appendPoint([317.5052055,-107.7174378]).appendArc([316.1717661,-106.9162266],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([314.1638144,-98.8627721]).appendArc([312.830375,-98.0615609],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([296.5294068,-102.1258487]).appendArc([295.1959674,-101.3246375],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([295.0024299,-100.548401]).appendArc([293.6689905,-99.7471898],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([237.6199191,-113.7217928]).appendArc([237.353805,-113.7544675],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([183.5639896,-113.7544675]).appendArc([183.2978755,-113.7217928],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([127.2488041,-99.7471898]).appendArc([125.9153647,-100.548401],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([125.7218272,-101.3246375]).appendArc([124.3883878,-102.1258487],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([108.0874196,-98.0615609]).appendArc([106.7539802,-98.8627721],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([104.7460285,-106.9162266]).appendArc([103.4125891,-107.7174378],{"radius":1.1,"clockwise":true,"large":false}).appendPoint([87.1116209,-103.65315]).appendArc([85.7781815,-104.4543612],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([85.5604518,-105.3276274]).appendPoint([68.1921583,-100.9972255]).appendArc([66.8587189,-101.7984367],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([57.7140713,-138.4756151]).appendArc([58.5152825,-139.8090545],{"radius":1.1,"clockwise":false,"large":false}).close().innerToCAG()
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

        
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
    return new CSG.Path2D([[56.2383477,-144.394419],[69.8224879,-147.7813256]]).appendPoint([66.9194252,-159.4248742]).appendArc([70.5612943,-165.4859623],{"radius":5,"clockwise":false,"large":false}).appendPoint([90.9375045,-170.5663221]).appendArc([96.9985926,-166.924453],{"radius":5,"clockwise":false,"large":false}).appendPoint([98.329163,-161.5878265]).appendPoint([111.9133032,-164.9747331]).appendArc([117.0855225,-163.1724713],{"radius":5,"clockwise":false,"large":false}).appendPoint([124.2826176,-164.9669087]).appendPoint([118.839375,-186.7985625]).appendArc([122.4812441,-192.8596506],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.0430418,-197.4876266]).appendPoint([155.9148325,-206.2477808]).appendPoint([168.961489,-220.2386071]).appendArc([176.0282494,-220.4853838],{"radius":5,"clockwise":false,"large":false}).appendPoint([191.3866771,-206.1634183]).appendArc([191.6334538,-199.096658],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.3114883,-183.7382303]).appendArc([175.0882941,-182.3581423],{"radius":5,"clockwise":false,"large":false}).appendArc([173.2597324,-180.4863524],{"radius":5,"clockwise":false,"large":false}).appendPoint([172.1123744,-179.8105069]).appendPoint([176.0859866,-163.8732188]).appendPoint([244.831808,-163.8732188]).appendPoint([248.8054202,-179.8105069]).appendPoint([247.6580622,-180.4863524]).appendArc([245.8295004,-182.3581424],{"radius":5,"clockwise":false,"large":false}).appendArc([243.6063063,-183.7382303],{"radius":5,"clockwise":false,"large":false}).appendPoint([229.2843408,-199.096658]).appendArc([229.5311175,-206.1634183],{"radius":5,"clockwise":false,"large":false}).appendPoint([244.8895452,-220.4853838]).appendArc([251.9563055,-220.2386071],{"radius":5,"clockwise":false,"large":false}).appendPoint([265.0029622,-206.2477807]).appendPoint([279.8747531,-197.4876265]).appendPoint([298.4365505,-192.8596506]).appendArc([302.0784196,-186.7985625],{"radius":5,"clockwise":false,"large":false}).appendPoint([296.6351769,-164.9669087]).appendPoint([303.8322721,-163.1724713]).appendArc([309.0044914,-164.974733],{"radius":5,"clockwise":false,"large":false}).appendPoint([322.5886316,-161.5878265]).appendPoint([323.919202,-166.924453]).appendArc([329.9802901,-170.5663221],{"radius":5,"clockwise":false,"large":false}).appendPoint([350.3565003,-165.4859623]).appendArc([353.9983694,-159.4248742],{"radius":5,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([364.6794469,-144.394419]).appendArc([368.321316,-138.3333309],{"radius":5,"clockwise":false,"large":false}).appendPoint([354.8946508,-84.4819182]).appendArc([348.8335627,-80.8400491],{"radius":5,"clockwise":false,"large":false}).appendPoint([273.1504961,-99.7099569]).appendArc([269.508627,-105.771045],{"radius":5,"clockwise":false,"large":false}).appendPoint([255.9244869,-109.1579515]).appendArc([252.1431978,-113.7078805],{"radius":5,"clockwise":false,"large":false}).appendPoint([238.9312813,-117.0019812]).appendPoint([181.9865132,-117.0019812]).appendPoint([168.7745968,-113.7078804]).appendArc([164.9933078,-109.1579515],{"radius":5,"clockwise":false,"large":false}).appendPoint([151.4091676,-105.771045]).appendArc([147.7672985,-99.7099569],{"radius":5,"clockwise":false,"large":false}).appendPoint([72.0842319,-80.8400491]).appendArc([66.0231438,-84.4819182],{"radius":5,"clockwise":false,"large":false}).appendPoint([52.5964786,-138.3333309]).appendArc([56.2383477,-144.394419],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_11_6_outline_fn(){
    return new CSG.Path2D([[56.2383477,-144.394419],[69.8224879,-147.7813256]]).appendPoint([66.9194252,-159.4248742]).appendArc([70.5612943,-165.4859623],{"radius":5,"clockwise":false,"large":false}).appendPoint([90.9375045,-170.5663221]).appendArc([96.9985926,-166.924453],{"radius":5,"clockwise":false,"large":false}).appendPoint([98.329163,-161.5878265]).appendPoint([111.9133032,-164.9747331]).appendArc([117.0855225,-163.1724713],{"radius":5,"clockwise":false,"large":false}).appendPoint([124.2826176,-164.9669087]).appendPoint([118.839375,-186.7985625]).appendArc([122.4812441,-192.8596506],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.0430418,-197.4876266]).appendPoint([155.9148325,-206.2477808]).appendPoint([168.961489,-220.2386071]).appendArc([176.0282494,-220.4853838],{"radius":5,"clockwise":false,"large":false}).appendPoint([191.3866771,-206.1634183]).appendArc([191.6334538,-199.096658],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.3114883,-183.7382303]).appendArc([175.0882941,-182.3581423],{"radius":5,"clockwise":false,"large":false}).appendArc([173.2597324,-180.4863524],{"radius":5,"clockwise":false,"large":false}).appendPoint([172.1123744,-179.8105069]).appendPoint([176.0859866,-163.8732188]).appendPoint([244.831808,-163.8732188]).appendPoint([248.8054202,-179.8105069]).appendPoint([247.6580622,-180.4863524]).appendArc([245.8295004,-182.3581424],{"radius":5,"clockwise":false,"large":false}).appendArc([243.6063063,-183.7382303],{"radius":5,"clockwise":false,"large":false}).appendPoint([229.2843408,-199.096658]).appendArc([229.5311175,-206.1634183],{"radius":5,"clockwise":false,"large":false}).appendPoint([244.8895452,-220.4853838]).appendArc([251.9563055,-220.2386071],{"radius":5,"clockwise":false,"large":false}).appendPoint([265.0029622,-206.2477807]).appendPoint([279.8747531,-197.4876265]).appendPoint([298.4365505,-192.8596506]).appendArc([302.0784196,-186.7985625],{"radius":5,"clockwise":false,"large":false}).appendPoint([296.6351769,-164.9669087]).appendPoint([303.8322721,-163.1724713]).appendArc([309.0044914,-164.974733],{"radius":5,"clockwise":false,"large":false}).appendPoint([322.5886316,-161.5878265]).appendPoint([323.919202,-166.924453]).appendArc([329.9802901,-170.5663221],{"radius":5,"clockwise":false,"large":false}).appendPoint([350.3565003,-165.4859623]).appendArc([353.9983694,-159.4248742],{"radius":5,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([364.6794469,-144.394419]).appendArc([368.321316,-138.3333309],{"radius":5,"clockwise":false,"large":false}).appendPoint([354.8946508,-84.4819182]).appendArc([348.8335627,-80.8400491],{"radius":5,"clockwise":false,"large":false}).appendPoint([273.1504961,-99.7099569]).appendArc([269.508627,-105.771045],{"radius":5,"clockwise":false,"large":false}).appendPoint([255.9244869,-109.1579515]).appendArc([252.1431978,-113.7078805],{"radius":5,"clockwise":false,"large":false}).appendPoint([238.9312813,-117.0019812]).appendPoint([181.9865132,-117.0019812]).appendPoint([168.7745968,-113.7078804]).appendArc([164.9933078,-109.1579515],{"radius":5,"clockwise":false,"large":false}).appendPoint([151.4091676,-105.771045]).appendArc([147.7672985,-99.7099569],{"radius":5,"clockwise":false,"large":false}).appendPoint([72.0842319,-80.8400491]).appendArc([66.0231438,-84.4819182],{"radius":5,"clockwise":false,"large":false}).appendPoint([52.5964786,-138.3333309]).appendArc([56.2383477,-144.394419],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[270.6043203,-176.0948915],[271.525841,-175.8651306]]).appendPoint([272.3015007,-178.976132]).appendPoint([270.6043203,-176.0948915]).close().innerToCAG()
.union(
    new CSG.Path2D([[149.3919537,-175.8651306],[150.3134743,-176.0948914]]).appendPoint([148.6162939,-178.9761321]).appendPoint([149.3919537,-175.8651306]).close().innerToCAG()
).union(
    new CSG.Path2D([[57.2060353,-140.5132361],[74.6713584,-144.8678303]]).appendPoint([70.8006081,-160.3925618]).appendArc([71.5289819,-161.6047794],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.9051921,-166.6851392]).appendArc([93.1174097,-165.9567654],{"radius":1,"clockwise":false,"large":false}).appendPoint([95.4156677,-156.738956]).appendPoint([112.8809908,-161.0935501]).appendArc([114.0932084,-160.3651763],{"radius":1,"clockwise":false,"large":false}).appendPoint([114.5770522,-158.4245849]).appendPoint([129.1314881,-162.0534134]).appendPoint([122.7205579,-187.7662501]).appendArc([123.4489317,-188.9784677],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.5734739,-193.7467517]).appendPoint([158.444707,-203.0956223]).appendPoint([171.8869039,-217.5106137]).appendArc([173.300256,-217.559969],{"radius":1,"clockwise":false,"large":false}).appendPoint([188.6586837,-203.2380035]).appendArc([188.708039,-201.8246514],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.3860735,-186.4662237]).appendArc([172.9727214,-186.4168684],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.4337651,-190.6495136]).appendPoint([171.5836698,-185.3020365]).appendArc([171.229579,-183.932869],{"radius":1,"clockwise":false,"large":false}).appendPoint([163.5084262,-179.3847625]).appendPoint([166.8572768,-180.2197247]).appendArc([168.0694944,-179.4913509],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.9608441,-159.8732188]).appendPoint([247.9569505,-159.8732188]).appendPoint([252.8483002,-179.4913509]).appendArc([254.0605178,-180.2197247],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.4093684,-179.3847625]).appendPoint([249.6882156,-183.9328691]).appendArc([249.3341249,-185.3020366],{"radius":1,"clockwise":false,"large":false}).appendPoint([252.4840295,-190.6495136]).appendPoint([247.9450732,-186.4168684]).appendArc([246.5317211,-186.4662237],{"radius":1,"clockwise":false,"large":false}).appendPoint([232.2097556,-201.8246514]).appendArc([232.2591109,-203.2380035],{"radius":1,"clockwise":false,"large":false}).appendPoint([247.6175386,-217.559969]).appendArc([249.0308907,-217.5106137],{"radius":1,"clockwise":false,"large":false}).appendPoint([262.4730874,-203.0956225]).appendPoint([278.3443206,-193.7467516]).appendPoint([297.4688629,-188.9784677]).appendArc([298.1972367,-187.7662501],{"radius":1,"clockwise":false,"large":false}).appendPoint([291.7863064,-162.0534133]).appendPoint([306.3407424,-158.4245849]).appendPoint([306.8245861,-160.3651763]).appendArc([308.0368038,-161.0935501],{"radius":1,"clockwise":false,"large":false}).appendPoint([325.5021269,-156.738956]).appendPoint([327.8003849,-165.9567654]).appendArc([329.0126025,-166.6851392],{"radius":1,"clockwise":false,"large":false}).appendPoint([349.3888127,-161.6047794]).appendArc([350.1171865,-160.3925618],{"radius":1,"clockwise":false,"large":false}).appendPoint([346.2464362,-144.8678302]).appendPoint([363.7117593,-140.5132361]).appendArc([364.4401331,-139.3010185],{"radius":1,"clockwise":false,"large":false}).appendPoint([351.0134679,-85.4496058]).appendArc([349.8012503,-84.721232],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.1181837,-103.5911398]).appendArc([273.3898099,-104.8033574],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.3574974,-108.6845403]).appendPoint([256.8921744,-113.0391344]).appendArc([256.1638006,-114.251352],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.7686053,-116.6770914]).appendPoint([239.4224196,-121.0019812]).appendPoint([181.495375,-121.0019812]).appendPoint([164.1491893,-116.6770913]).appendPoint([164.7539941,-114.251352]).appendArc([164.0256202,-113.0391344],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.5602971,-108.6845403]).appendPoint([147.5279847,-104.8033574]).appendArc([146.7996109,-103.5911398],{"radius":1,"clockwise":false,"large":false}).appendPoint([71.1165443,-84.721232]).appendArc([69.9043267,-85.4496058],{"radius":1,"clockwise":false,"large":false}).appendPoint([56.4776615,-139.3010185]).appendArc([57.2060353,-140.5132361],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 11.6] });
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

        
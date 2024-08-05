function mounting_holes_extrude_6_outline_fn(){
    return CAG.circle({"center":[326.2622565,-147.547947],"radius":2.9})
.subtract(
    CAG.circle({"center":[326.2622565,-147.547947],"radius":1.6})
).union(
    CAG.circle({"center":[93.6878505,-147.547947],"radius":2.9})
.subtract(
    CAG.circle({"center":[93.6878505,-147.547947],"radius":1.6})
)).union(
    CAG.circle({"center":[270.8657719,-168.8317907],"radius":2.9})
.subtract(
    CAG.circle({"center":[270.8657719,-168.8317907],"radius":1.6})
)).union(
    CAG.circle({"center":[149.0843351,-168.8317907],"radius":2.9})
.subtract(
    CAG.circle({"center":[149.0843351,-168.8317907],"radius":1.6})
)).union(
    CAG.circle({"center":[337.3384942,-121.28834],"radius":2.9})
.subtract(
    CAG.circle({"center":[337.3384942,-121.28834],"radius":1.6})
)).union(
    CAG.circle({"center":[82.6116128,-121.28834],"radius":2.9})
.subtract(
    CAG.circle({"center":[82.6116128,-121.28834],"radius":1.6})
)).union(
    CAG.circle({"center":[261.9025657,-132.882334],"radius":2.9})
.subtract(
    CAG.circle({"center":[261.9025657,-132.882334],"radius":1.6})
)).union(
    CAG.circle({"center":[158.0475413,-132.882334],"radius":2.9})
.subtract(
    CAG.circle({"center":[158.0475413,-132.882334],"radius":1.6})
)).extrude({ offset: [0, 0, 6] });
}


function case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[56.2383477,-144.394419],[69.8224879,-147.7813256]]).appendPoint([66.4355814,-161.3654657]).appendArc([70.0774505,-167.4265538],{"radius":5,"clockwise":false,"large":false}).appendPoint([90.4536607,-172.5069136]).appendArc([96.5147488,-168.8650445],{"radius":5,"clockwise":false,"large":false}).appendPoint([97.8453192,-163.528418]).appendPoint([111.4294594,-166.9153246]).appendArc([116.6016787,-165.1130628],{"radius":5,"clockwise":false,"large":false}).appendPoint([123.7987739,-166.9075001]).appendPoint([118.839375,-186.7985625]).appendArc([122.4812441,-192.8596506],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.0430418,-197.4876266]).appendPoint([155.9148325,-206.2477808]).appendPoint([168.961489,-220.2386071]).appendArc([176.0282494,-220.4853838],{"radius":5,"clockwise":false,"large":false}).appendPoint([191.3866771,-206.1634183]).appendArc([191.6334538,-199.096658],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.3114883,-183.7382303]).appendArc([175.0882941,-182.3581423],{"radius":5,"clockwise":false,"large":false}).appendArc([173.2597324,-180.4863524],{"radius":5,"clockwise":false,"large":false}).appendPoint([172.1123744,-179.8105069]).appendPoint([176.0859866,-163.8732188]).appendPoint([243.8641204,-163.8732188]).appendPoint([247.8377326,-179.8105069]).appendPoint([246.6903746,-180.4863524]).appendArc([244.8618128,-182.3581424],{"radius":5,"clockwise":false,"large":false}).appendArc([242.6386187,-183.7382303],{"radius":5,"clockwise":false,"large":false}).appendPoint([228.3166532,-199.096658]).appendArc([228.5634299,-206.1634183],{"radius":5,"clockwise":false,"large":false}).appendPoint([243.9218576,-220.4853838]).appendArc([250.9886179,-220.2386071],{"radius":5,"clockwise":false,"large":false}).appendPoint([264.0352746,-206.2477807]).appendPoint([278.9070655,-197.4876265]).appendPoint([297.4688629,-192.8596506]).appendArc([301.110732,-186.7985625],{"radius":5,"clockwise":false,"large":false}).appendPoint([296.1513331,-166.9075001]).appendPoint([303.3484283,-165.1130627]).appendArc([308.5206476,-166.9153245],{"radius":5,"clockwise":false,"large":false}).appendPoint([322.1047878,-163.528418]).appendPoint([323.4353582,-168.8650445]).appendArc([329.4964463,-172.5069136],{"radius":5,"clockwise":false,"large":false}).appendPoint([349.8726565,-167.4265538]).appendArc([353.5145256,-161.3654657],{"radius":5,"clockwise":false,"large":false}).appendPoint([350.1276191,-147.7813256]).appendPoint([363.7117593,-144.394419]).appendArc([367.3536284,-138.3333309],{"radius":5,"clockwise":false,"large":false}).appendPoint([354.410807,-86.4225096]).appendArc([348.3497189,-82.7806405],{"radius":5,"clockwise":false,"large":false}).appendPoint([272.6666523,-101.6505483]).appendArc([269.0247832,-107.7116364],{"radius":5,"clockwise":false,"large":false}).appendPoint([255.440643,-111.098543]).appendArc([252.3388771,-113.4178205],{"radius":5,"clockwise":false,"large":false}).appendPoint([237.9635937,-117.0019812]).appendPoint([181.9865132,-117.0019812]).appendPoint([167.6112299,-113.4178205]).appendArc([164.509464,-111.098543],{"radius":5,"clockwise":false,"large":false}).appendPoint([150.9253238,-107.7116364]).appendArc([147.2834547,-101.6505483],{"radius":5,"clockwise":false,"large":false}).appendPoint([71.6003881,-82.7806405]).appendArc([65.5393,-86.4225096],{"radius":5,"clockwise":false,"large":false}).appendPoint([52.5964786,-138.3333309]).appendArc([56.2383477,-144.394419],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_11_6_outline_fn(){
    return new CSG.Path2D([[56.2383477,-144.394419],[69.8224879,-147.7813256]]).appendPoint([66.4355814,-161.3654657]).appendArc([70.0774505,-167.4265538],{"radius":5,"clockwise":false,"large":false}).appendPoint([90.4536607,-172.5069136]).appendArc([96.5147488,-168.8650445],{"radius":5,"clockwise":false,"large":false}).appendPoint([97.8453192,-163.528418]).appendPoint([111.4294594,-166.9153246]).appendArc([116.6016787,-165.1130628],{"radius":5,"clockwise":false,"large":false}).appendPoint([123.7987739,-166.9075001]).appendPoint([118.839375,-186.7985625]).appendArc([122.4812441,-192.8596506],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.0430418,-197.4876266]).appendPoint([155.9148325,-206.2477808]).appendPoint([168.961489,-220.2386071]).appendArc([176.0282494,-220.4853838],{"radius":5,"clockwise":false,"large":false}).appendPoint([191.3866771,-206.1634183]).appendArc([191.6334538,-199.096658],{"radius":5,"clockwise":false,"large":false}).appendPoint([177.3114883,-183.7382303]).appendArc([175.0882941,-182.3581423],{"radius":5,"clockwise":false,"large":false}).appendArc([173.2597324,-180.4863524],{"radius":5,"clockwise":false,"large":false}).appendPoint([172.1123744,-179.8105069]).appendPoint([176.0859866,-163.8732188]).appendPoint([243.8641204,-163.8732188]).appendPoint([247.8377326,-179.8105069]).appendPoint([246.6903746,-180.4863524]).appendArc([244.8618128,-182.3581424],{"radius":5,"clockwise":false,"large":false}).appendArc([242.6386187,-183.7382303],{"radius":5,"clockwise":false,"large":false}).appendPoint([228.3166532,-199.096658]).appendArc([228.5634299,-206.1634183],{"radius":5,"clockwise":false,"large":false}).appendPoint([243.9218576,-220.4853838]).appendArc([250.9886179,-220.2386071],{"radius":5,"clockwise":false,"large":false}).appendPoint([264.0352746,-206.2477807]).appendPoint([278.9070655,-197.4876265]).appendPoint([297.4688629,-192.8596506]).appendArc([301.110732,-186.7985625],{"radius":5,"clockwise":false,"large":false}).appendPoint([296.1513331,-166.9075001]).appendPoint([303.3484283,-165.1130627]).appendArc([308.5206476,-166.9153245],{"radius":5,"clockwise":false,"large":false}).appendPoint([322.1047878,-163.528418]).appendPoint([323.4353582,-168.8650445]).appendArc([329.4964463,-172.5069136],{"radius":5,"clockwise":false,"large":false}).appendPoint([349.8726565,-167.4265538]).appendArc([353.5145256,-161.3654657],{"radius":5,"clockwise":false,"large":false}).appendPoint([350.1276191,-147.7813256]).appendPoint([363.7117593,-144.394419]).appendArc([367.3536284,-138.3333309],{"radius":5,"clockwise":false,"large":false}).appendPoint([354.410807,-86.4225096]).appendArc([348.3497189,-82.7806405],{"radius":5,"clockwise":false,"large":false}).appendPoint([272.6666523,-101.6505483]).appendArc([269.0247832,-107.7116364],{"radius":5,"clockwise":false,"large":false}).appendPoint([255.440643,-111.098543]).appendArc([252.3388771,-113.4178205],{"radius":5,"clockwise":false,"large":false}).appendPoint([237.9635937,-117.0019812]).appendPoint([181.9865132,-117.0019812]).appendPoint([167.6112299,-113.4178205]).appendArc([164.509464,-111.098543],{"radius":5,"clockwise":false,"large":false}).appendPoint([150.9253238,-107.7116364]).appendArc([147.2834547,-101.6505483],{"radius":5,"clockwise":false,"large":false}).appendPoint([71.6003881,-82.7806405]).appendArc([65.5393,-86.4225096],{"radius":5,"clockwise":false,"large":false}).appendPoint([52.5964786,-138.3333309]).appendArc([56.2383477,-144.394419],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[269.6366327,-176.0948915],[270.5581534,-175.8651306]]).appendPoint([271.3338131,-178.976132]).appendPoint([269.6366327,-176.0948915]).close().innerToCAG()
.union(
    new CSG.Path2D([[149.3919537,-175.8651306],[150.3134743,-176.0948914]]).appendPoint([148.6162939,-178.9761321]).appendPoint([149.3919537,-175.8651306]).close().innerToCAG()
).union(
    new CSG.Path2D([[57.2060353,-140.5132361],[74.6713584,-144.8678303]]).appendPoint([70.3167643,-162.3331533]).appendArc([71.0451381,-163.5453709],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.4213483,-168.6257307]).appendArc([92.6335659,-167.8973569],{"radius":1,"clockwise":false,"large":false}).appendPoint([94.9318239,-158.6795475]).appendPoint([112.397147,-163.0341416]).appendArc([113.6093646,-162.3057678],{"radius":1,"clockwise":false,"large":false}).appendPoint([114.0932084,-160.3651763]).appendPoint([128.6476444,-163.9940048]).appendPoint([122.7205579,-187.7662501]).appendArc([123.4489317,-188.9784677],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.5734739,-193.7467517]).appendPoint([158.444707,-203.0956223]).appendPoint([171.8869039,-217.5106137]).appendArc([173.300256,-217.559969],{"radius":1,"clockwise":false,"large":false}).appendPoint([188.6586837,-203.2380035]).appendArc([188.708039,-201.8246514],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.3860735,-186.4662237]).appendArc([172.9727214,-186.4168684],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.4337651,-190.6495136]).appendPoint([171.5836698,-185.3020365]).appendArc([171.229579,-183.932869],{"radius":1,"clockwise":false,"large":false}).appendPoint([163.5084262,-179.3847625]).appendPoint([166.8572768,-180.2197247]).appendArc([168.0694944,-179.4913509],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.9608441,-159.8732188]).appendPoint([246.9892629,-159.8732188]).appendPoint([251.8806126,-179.4913509]).appendArc([253.0928302,-180.2197247],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.4416808,-179.3847625]).appendPoint([248.720528,-183.9328691]).appendArc([248.3664373,-185.3020366],{"radius":1,"clockwise":false,"large":false}).appendPoint([251.5163419,-190.6495136]).appendPoint([246.9773856,-186.4168684]).appendArc([245.5640335,-186.4662237],{"radius":1,"clockwise":false,"large":false}).appendPoint([231.242068,-201.8246514]).appendArc([231.2914233,-203.2380035],{"radius":1,"clockwise":false,"large":false}).appendPoint([246.649851,-217.559969]).appendArc([248.0632031,-217.5106137],{"radius":1,"clockwise":false,"large":false}).appendPoint([261.5053998,-203.0956225]).appendPoint([277.376633,-193.7467516]).appendPoint([296.5011753,-188.9784677]).appendArc([297.2295491,-187.7662501],{"radius":1,"clockwise":false,"large":false}).appendPoint([291.3024626,-163.9940047]).appendPoint([305.8568986,-160.3651763]).appendPoint([306.3407424,-162.3057678]).appendArc([307.55296,-163.0341416],{"radius":1,"clockwise":false,"large":false}).appendPoint([325.0182831,-158.6795475]).appendPoint([327.3165411,-167.8973569]).appendArc([328.5287587,-168.6257307],{"radius":1,"clockwise":false,"large":false}).appendPoint([348.9049689,-163.5453709]).appendArc([349.6333427,-162.3331533],{"radius":1,"clockwise":false,"large":false}).appendPoint([345.2787486,-144.8678302]).appendPoint([362.7440717,-140.5132361]).appendArc([363.4724455,-139.3010185],{"radius":1,"clockwise":false,"large":false}).appendPoint([350.5296241,-87.3901972]).appendArc([349.3174065,-86.6618234],{"radius":1,"clockwise":false,"large":false}).appendPoint([273.6343399,-105.5317312]).appendArc([272.9059661,-106.7439488],{"radius":1,"clockwise":false,"large":false}).appendPoint([273.8736537,-110.6251318]).appendPoint([256.4083306,-114.9797259]).appendArc([255.6799568,-116.1919435],{"radius":1,"clockwise":false,"large":false}).appendPoint([255.8009177,-116.6770914]).appendPoint([238.454732,-121.0019812]).appendPoint([181.495375,-121.0019812]).appendPoint([164.1491893,-116.6770913]).appendPoint([164.2701503,-116.1919435]).appendArc([163.5417764,-114.9797259],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.0764533,-110.6251318]).appendPoint([147.0441409,-106.7439488]).appendArc([146.3157671,-105.5317312],{"radius":1,"clockwise":false,"large":false}).appendPoint([70.6327005,-86.6618234]).appendArc([69.4204829,-87.3901972],{"radius":1,"clockwise":false,"large":false}).appendPoint([56.4776615,-139.3010185]).appendArc([57.2060353,-140.5132361],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
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

        
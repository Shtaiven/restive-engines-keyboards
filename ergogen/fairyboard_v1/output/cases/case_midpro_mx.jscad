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
    return new CSG.Path2D([[58.1789392,-144.8782628],[69.8224879,-147.7813256]]).appendPoint([67.403269,-157.4842827]).appendArc([67.4028168,-157.4860978],{"radius":5,"clockwise":false,"large":false}).appendArc([72.5018858,-165.9698061],{"radius":7,"clockwise":false,"large":false}).appendPoint([121.016672,-178.0659009]).appendPoint([119.3232188,-184.857971]).appendArc([124.4218356,-193.3434944],{"radius":7,"clockwise":false,"large":false}).appendPoint([141.0430416,-197.4876265]).appendPoint([155.9148325,-206.2477808]).appendPoint([167.5974924,-218.7758998]).appendArc([177.490957,-219.121387],{"radius":7,"clockwise":false,"large":false}).appendPoint([189.9232384,-207.5280969]).appendArc([189.9239699,-207.5274149],{"radius":5,"clockwise":false,"large":false}).appendArc([190.269457,-197.6339504],{"radius":7,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812819,-178.510459]).appendPoint([230.6490196,-197.6332192]).appendArc([230.9938247,-207.5274149],{"radius":7,"clockwise":false,"large":false}).appendArc([230.9945562,-207.5280969],{"radius":5,"clockwise":false,"large":false}).appendPoint([243.4261064,-219.120705]).appendArc([253.3203021,-218.7758999],{"radius":7,"clockwise":false,"large":false}).appendArc([253.3209841,-218.7751684],{"radius":5,"clockwise":false,"large":false}).appendPoint([265.0029621,-206.2477808]).appendPoint([279.8747531,-197.4876265]).appendPoint([296.495959,-193.3434944]).appendArc([296.4977741,-193.3430415],{"radius":5,"clockwise":false,"large":false}).appendArc([301.5950281,-184.8597862],{"radius":7,"clockwise":false,"large":false}).appendArc([301.5945758,-184.8579709],{"radius":5,"clockwise":false,"large":false}).appendPoint([299.9011225,-178.0659009]).appendPoint([348.4159088,-165.9698061]).appendArc([348.417724,-165.9693532],{"radius":5,"clockwise":false,"large":false}).appendArc([353.5145256,-157.4842827],{"radius":7,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([362.7388554,-144.8782628]).appendArc([362.7406708,-144.8778099],{"radius":5,"clockwise":false,"large":false}).appendArc([367.8379245,-136.3945547],{"radius":7,"clockwise":false,"large":false}).appendArc([367.8374722,-136.3927394],{"radius":5,"clockwise":false,"large":false}).appendPoint([355.3784946,-86.4225097]).appendArc([346.8947866,-81.3234406],{"radius":7,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([74.0248234,-81.3238929]).appendArc([65.5393,-86.4225097],{"radius":7,"clockwise":false,"large":false}).appendPoint([53.0803224,-136.3927394]).appendArc([58.1789392,-144.8782628],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_11_6_outline_fn(){
    return new CSG.Path2D([[58.1789392,-144.8782628],[69.8224879,-147.7813256]]).appendPoint([67.403269,-157.4842827]).appendArc([67.4028168,-157.4860978],{"radius":5,"clockwise":false,"large":false}).appendArc([72.5018858,-165.9698061],{"radius":7,"clockwise":false,"large":false}).appendPoint([121.016672,-178.0659009]).appendPoint([119.3232188,-184.857971]).appendArc([124.4218356,-193.3434944],{"radius":7,"clockwise":false,"large":false}).appendPoint([141.0430416,-197.4876265]).appendPoint([155.9148325,-206.2477808]).appendPoint([167.5974924,-218.7758998]).appendArc([177.490957,-219.121387],{"radius":7,"clockwise":false,"large":false}).appendPoint([189.9232384,-207.5280969]).appendArc([189.9239699,-207.5274149],{"radius":5,"clockwise":false,"large":false}).appendArc([190.269457,-197.6339504],{"radius":7,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812819,-178.510459]).appendPoint([230.6490196,-197.6332192]).appendArc([230.9938247,-207.5274149],{"radius":7,"clockwise":false,"large":false}).appendArc([230.9945562,-207.5280969],{"radius":5,"clockwise":false,"large":false}).appendPoint([243.4261064,-219.120705]).appendArc([253.3203021,-218.7758999],{"radius":7,"clockwise":false,"large":false}).appendArc([253.3209841,-218.7751684],{"radius":5,"clockwise":false,"large":false}).appendPoint([265.0029621,-206.2477808]).appendPoint([279.8747531,-197.4876265]).appendPoint([296.495959,-193.3434944]).appendArc([296.4977741,-193.3430415],{"radius":5,"clockwise":false,"large":false}).appendArc([301.5950281,-184.8597862],{"radius":7,"clockwise":false,"large":false}).appendArc([301.5945758,-184.8579709],{"radius":5,"clockwise":false,"large":false}).appendPoint([299.9011225,-178.0659009]).appendPoint([348.4159088,-165.9698061]).appendArc([348.417724,-165.9693532],{"radius":5,"clockwise":false,"large":false}).appendArc([353.5145256,-157.4842827],{"radius":7,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([362.7388554,-144.8782628]).appendArc([362.7406708,-144.8778099],{"radius":5,"clockwise":false,"large":false}).appendArc([367.8379245,-136.3945547],{"radius":7,"clockwise":false,"large":false}).appendArc([367.8374722,-136.3927394],{"radius":5,"clockwise":false,"large":false}).appendPoint([355.3784946,-86.4225097]).appendArc([346.8947866,-81.3234406],{"radius":7,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([74.0248234,-81.3238929]).appendArc([65.5393,-86.4225097],{"radius":7,"clockwise":false,"large":false}).appendPoint([53.0803224,-136.3927394]).appendArc([58.1789392,-144.8782628],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[59.1466268,-140.9970799],[73.7006287,-144.6258001]]).appendArc([74.4294364,-145.838126],{"radius":1,"clockwise":true,"large":false}).appendPoint([71.2844519,-158.4519702]).appendArc([73.4695734,-162.0886232],{"radius":3,"clockwise":false,"large":false}).appendPoint([124.8948129,-174.9103754]).appendArc([125.6236206,-176.1227013],{"radius":1,"clockwise":true,"large":false}).appendPoint([123.2044017,-185.8256586]).appendArc([125.3895232,-189.4623115],{"radius":3,"clockwise":false,"large":false}).appendPoint([142.4323542,-193.7115665]).appendArc([142.6984046,-193.8203413],{"radius":1,"clockwise":true,"large":false}).appendPoint([158.3197768,-203.0220328]).appendArc([158.5435921,-203.2016635],{"radius":1,"clockwise":true,"large":false}).appendPoint([170.5226023,-216.0475792]).appendArc([174.7629634,-216.1959722],{"radius":3,"clockwise":false,"large":false}).appendPoint([187.1956492,-204.6023051]).appendArc([187.3440422,-200.361944],{"radius":3,"clockwise":false,"large":false}).appendPoint([168.4002133,-180.0471745]).appendArc([168.1612713,-179.1232543],{"radius":1,"clockwise":true,"large":false}).appendPoint([174.1022963,-155.2951043]).appendArc([175.0727003,-154.5365923],{"radius":1,"clockwise":true,"large":false}).appendPoint([245.8450943,-154.5365923]).appendArc([246.81539,-155.2946704],{"radius":1,"clockwise":true,"large":false}).appendPoint([252.7564152,-179.1228203]).appendArc([252.5175813,-180.0471746],{"radius":1,"clockwise":true,"large":false}).appendPoint([233.5737523,-200.361944]).appendArc([233.7218183,-204.6020001],{"radius":3,"clockwise":false,"large":false}).appendPoint([246.1545041,-216.1956672]).appendArc([250.3948873,-216.0479063],{"radius":3,"clockwise":false,"large":false}).appendPoint([262.3742026,-203.2016636]).appendArc([262.5980178,-203.0220327],{"radius":1,"clockwise":true,"large":false}).appendPoint([278.21939,-193.8203414]).appendArc([278.4850065,-193.7116748],{"radius":1,"clockwise":true,"large":false}).appendPoint([295.5282714,-189.4623115]).appendArc([297.7135253,-185.82619],{"radius":3,"clockwise":false,"large":false}).appendPoint([295.2942821,-176.1231353]).appendArc([296.0225478,-174.9104837],{"radius":1,"clockwise":true,"large":false}).appendPoint([347.4482212,-162.0886232]).appendArc([349.6333427,-158.4519703],{"radius":3,"clockwise":false,"large":false}).appendPoint([346.4884663,-145.83856]).appendArc([347.216732,-144.6259084],{"radius":1,"clockwise":true,"large":false}).appendPoint([361.7711678,-140.9970799]).appendArc([363.9564217,-137.3609584],{"radius":3,"clockwise":false,"large":false}).appendPoint([351.4973117,-87.3901973]).appendArc([347.8611903,-85.2049434],{"radius":3,"clockwise":false,"large":false}).appendPoint([237.4856546,-112.7246551]).appendArc([237.2432987,-112.7544675],{"radius":1,"clockwise":true,"large":false}).appendPoint([183.6744959,-112.7544675]).appendArc([183.432574,-112.7247632],{"radius":1,"clockwise":true,"large":false}).appendPoint([73.0571358,-85.2050758]).appendArc([69.4204829,-87.3901973],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.9615053,-137.360427]).appendArc([59.1466268,-140.9970799],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
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

        
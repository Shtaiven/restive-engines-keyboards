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
    return new CSG.Path2D([[58.1789392,-144.8782628],[69.8224879,-147.7813256]]).appendPoint([67.403269,-157.4842827]).appendArc([67.4028168,-157.4860978],{"radius":5,"clockwise":false,"large":false}).appendArc([72.5018858,-165.9698061],{"radius":7,"clockwise":false,"large":false}).appendPoint([88.996913,-170.0824783]).appendArc([88.9987283,-170.0829306],{"radius":5,"clockwise":false,"large":false}).appendArc([97.4824364,-164.9838615],{"radius":7,"clockwise":false,"large":false}).appendPoint([98.329163,-161.5878265]).appendPoint([123.5568519,-167.8777958]).appendPoint([119.3232188,-184.857971]).appendArc([124.4218356,-193.3434944],{"radius":7,"clockwise":false,"large":false}).appendPoint([141.0430416,-197.4876265]).appendPoint([155.9148325,-206.2477808]).appendPoint([167.5974924,-218.7758998]).appendArc([177.490957,-219.121387],{"radius":7,"clockwise":false,"large":false}).appendPoint([189.9232384,-207.5280969]).appendArc([189.9239699,-207.5274149],{"radius":5,"clockwise":false,"large":false}).appendArc([190.269457,-197.6339504],{"radius":7,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812819,-178.510459]).appendPoint([230.6490196,-197.6332192]).appendArc([230.9938247,-207.5274149],{"radius":7,"clockwise":false,"large":false}).appendArc([230.9945562,-207.5280969],{"radius":5,"clockwise":false,"large":false}).appendPoint([243.4261064,-219.120705]).appendArc([253.3203021,-218.7758999],{"radius":7,"clockwise":false,"large":false}).appendArc([253.3209841,-218.7751684],{"radius":5,"clockwise":false,"large":false}).appendPoint([265.0029621,-206.2477808]).appendPoint([279.8747531,-197.4876265]).appendPoint([296.495959,-193.3434944]).appendArc([296.4977741,-193.3430415],{"radius":5,"clockwise":false,"large":false}).appendArc([301.5950281,-184.8597861],{"radius":7,"clockwise":false,"large":false}).appendArc([301.5945758,-184.8579709],{"radius":5,"clockwise":false,"large":false}).appendPoint([297.3609426,-167.8777958]).appendPoint([322.5886316,-161.5878265]).appendPoint([323.4353582,-164.9838615]).appendArc([323.4358111,-164.9856769],{"radius":5,"clockwise":false,"large":false}).appendArc([331.9208816,-170.0824783],{"radius":7,"clockwise":false,"large":false}).appendPoint([348.4159088,-165.9698061]).appendArc([353.5145256,-157.4842827],{"radius":7,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([362.7388554,-144.8782628]).appendArc([362.7406708,-144.8778099],{"radius":5,"clockwise":false,"large":false}).appendArc([367.8379245,-136.3945547],{"radius":7,"clockwise":false,"large":false}).appendArc([367.8374722,-136.3927394],{"radius":5,"clockwise":false,"large":false}).appendPoint([355.3784946,-86.4225097]).appendArc([346.8947866,-81.3234406],{"radius":7,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([74.0248234,-81.3238929]).appendArc([65.5393,-86.4225097],{"radius":7,"clockwise":false,"large":false}).appendPoint([53.0803224,-136.3927394]).appendArc([58.1789392,-144.8782628],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function wall_extrude_17_8_outline_fn(){
    return new CSG.Path2D([[58.1789392,-144.8782628],[69.8224879,-147.7813256]]).appendPoint([67.403269,-157.4842827]).appendArc([67.4028168,-157.4860978],{"radius":5,"clockwise":false,"large":false}).appendArc([72.5018858,-165.9698061],{"radius":7,"clockwise":false,"large":false}).appendPoint([88.996913,-170.0824783]).appendArc([88.9987283,-170.0829306],{"radius":5,"clockwise":false,"large":false}).appendArc([97.4824364,-164.9838615],{"radius":7,"clockwise":false,"large":false}).appendPoint([98.329163,-161.5878265]).appendPoint([123.5568519,-167.8777958]).appendPoint([119.3232188,-184.857971]).appendArc([124.4218356,-193.3434944],{"radius":7,"clockwise":false,"large":false}).appendPoint([141.0430416,-197.4876265]).appendPoint([155.9148325,-206.2477808]).appendPoint([167.5974924,-218.7758998]).appendArc([177.490957,-219.121387],{"radius":7,"clockwise":false,"large":false}).appendPoint([189.9232384,-207.5280969]).appendArc([189.9239699,-207.5274149],{"radius":5,"clockwise":false,"large":false}).appendArc([190.269457,-197.6339504],{"radius":7,"clockwise":false,"large":false}).appendPoint([172.4365127,-178.510459]).appendPoint([177.4165571,-158.5365923]).appendPoint([243.5012375,-158.5365923]).appendPoint([248.4812819,-178.510459]).appendPoint([230.6490196,-197.6332192]).appendArc([230.9938247,-207.5274149],{"radius":7,"clockwise":false,"large":false}).appendArc([230.9945562,-207.5280969],{"radius":5,"clockwise":false,"large":false}).appendPoint([243.4261064,-219.120705]).appendArc([253.3203021,-218.7758999],{"radius":7,"clockwise":false,"large":false}).appendArc([253.3209841,-218.7751684],{"radius":5,"clockwise":false,"large":false}).appendPoint([265.0029621,-206.2477808]).appendPoint([279.8747531,-197.4876265]).appendPoint([296.495959,-193.3434944]).appendArc([296.4977741,-193.3430415],{"radius":5,"clockwise":false,"large":false}).appendArc([301.5950281,-184.8597861],{"radius":7,"clockwise":false,"large":false}).appendArc([301.5945758,-184.8579709],{"radius":5,"clockwise":false,"large":false}).appendPoint([297.3609426,-167.8777958]).appendPoint([322.5886316,-161.5878265]).appendPoint([323.4353582,-164.9838615]).appendArc([323.4358111,-164.9856769],{"radius":5,"clockwise":false,"large":false}).appendArc([331.9208816,-170.0824783],{"radius":7,"clockwise":false,"large":false}).appendPoint([348.4159088,-165.9698061]).appendArc([353.5145256,-157.4842827],{"radius":7,"clockwise":false,"large":false}).appendPoint([351.0953067,-147.7813256]).appendPoint([362.7388554,-144.8782628]).appendArc([362.7406708,-144.8778099],{"radius":5,"clockwise":false,"large":false}).appendArc([367.8379245,-136.3945547],{"radius":7,"clockwise":false,"large":false}).appendArc([367.8374722,-136.3927394],{"radius":5,"clockwise":false,"large":false}).appendPoint([355.3784946,-86.4225097]).appendArc([346.8947866,-81.3234406],{"radius":7,"clockwise":false,"large":false}).appendPoint([236.8749453,-108.7544675]).appendPoint([184.0428493,-108.7544675]).appendPoint([74.0248234,-81.3238929]).appendArc([65.5393,-86.4225097],{"radius":7,"clockwise":false,"large":false}).appendPoint([53.0803224,-136.3927394]).appendArc([58.1789392,-144.8782628],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[59.3885487,-140.0267842],[73.9429845,-143.6556126]]).appendArc([75.3997321,-146.0800479],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.2547476,-158.6938922]).appendArc([73.7114953,-161.1183274],{"radius":2,"clockwise":false,"large":false}).appendPoint([90.2065225,-165.2309997]).appendArc([92.6309577,-163.774252],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.2034501,-157.4673299]).appendArc([96.6278854,-156.0105823],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.6773486,-163.7520828]).appendArc([129.1340962,-166.1765181],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.1746974,-186.0675805]).appendArc([125.6314451,-188.4920157],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.67471,-192.741379]).appendArc([143.2059429,-192.9587122],{"radius":2,"clockwise":true,"large":false}).appendPoint([158.8273152,-202.1604037]).appendArc([159.2749458,-202.5196651],{"radius":2,"clockwise":true,"large":false}).appendPoint([171.2542609,-215.365908]).appendArc([174.0809651,-215.4646186],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.513978,-203.8706465]).appendArc([186.6126886,-201.0439423],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.6688596,-180.7291729]).appendArc([167.1909756,-178.8813324],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.1321088,-155.0527485]).appendArc([175.0727003,-153.5365923],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.8450943,-153.5365923]).appendArc([247.7856857,-155.0527485],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.7268191,-178.8813323]).appendArc([253.248935,-180.729173],{"radius":2,"clockwise":true,"large":false}).appendPoint([234.305106,-201.0439424]).appendArc([234.4038166,-203.8706465],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.8368296,-215.4646185]).appendArc([249.6635337,-215.365908],{"radius":2,"clockwise":false,"large":false}).appendPoint([261.6428488,-202.5196652]).appendArc([262.0904795,-202.1604036],{"radius":2,"clockwise":true,"large":false}).appendPoint([277.7118517,-192.9587122]).appendArc([278.2430846,-192.7413791],{"radius":2,"clockwise":true,"large":false}).appendPoint([295.2863495,-188.4920158]).appendArc([296.7430971,-186.0675805],{"radius":2,"clockwise":false,"large":false}).appendPoint([291.7836983,-166.1765181]).appendArc([293.240446,-163.7520829],{"radius":2,"clockwise":true,"large":false}).appendPoint([324.2899092,-156.0105822]).appendArc([326.7143444,-157.4673299],{"radius":2,"clockwise":true,"large":false}).appendPoint([328.2868368,-163.774252]).appendArc([330.7112721,-165.2309996],{"radius":2,"clockwise":false,"large":false}).appendPoint([347.2062993,-161.1183275]).appendArc([348.6630469,-158.6938922],{"radius":2,"clockwise":false,"large":false}).appendPoint([345.5180624,-146.0800479]).appendArc([346.9748101,-143.6556127],{"radius":2,"clockwise":true,"large":false}).appendPoint([361.5292459,-140.0267842]).appendArc([362.9859935,-137.6023489],{"radius":2,"clockwise":false,"large":false}).appendPoint([350.527016,-87.6321192]).appendArc([348.1025807,-86.1753716],{"radius":2,"clockwise":false,"large":false}).appendPoint([237.7271425,-113.695059]).appendArc([237.2432987,-113.7544675],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.6744959,-113.7544675]).appendArc([183.1906521,-113.6950589],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.8152139,-86.1753715]).appendArc([70.3907787,-87.6321192],{"radius":2,"clockwise":false,"large":false}).appendPoint([57.931801,-137.6023489]).appendArc([59.3885487,-140.0267841],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
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

        
function plate_mx_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[261.9187263,-220.1714173],[213.7171468,-220.1714173]]).appendPoint([221.6750193,-213.4939694]).appendPoint([212.6759927,-202.7693472]).appendPoint([201.9513705,-211.7683738]).appendPoint([209.0023613,-220.1714173]).appendPoint([153.8375709,-220.1714173]).appendPoint([160.8885617,-211.7683738]).appendPoint([150.1639395,-202.7693472]).appendPoint([141.1649129,-213.4939694]).appendPoint([149.1227854,-220.1714173]).appendPoint([100.9212059,-220.1714173]).appendArc([96.5257998,-218.2555824],{"radius":6,"clockwise":true,"large":false}).appendPoint([52.5526591,-170.9313903]).appendArc([51.5102186,-169.3829348],{"radius":6,"clockwise":true,"large":false}).appendPoint([41.3626531,-147.6214099]).appendArc([41.1621549,-143.0331743],{"radius":6,"clockwise":true,"large":false}).appendPoint([59.946977,-91.4222996]).appendArc([66.0614914,-87.49336],{"radius":6,"clockwise":true,"large":false}).appendPoint([101.2853728,-90.2987498]).appendArc([101.9566816,-90.3905946],{"radius":6,"clockwise":true,"large":false}).appendPoint([120.1742915,-93.9407723]).appendArc([121.0787447,-94.1918321],{"radius":6,"clockwise":true,"large":false}).appendPoint([141.7361433,-101.7105104]).appendArc([142.6573796,-102.1372222],{"radius":6,"clockwise":true,"large":false}).appendPoint([174.6220558,-120.3744707]).appendArc([176.6042937,-120.9001747],{"radius":4,"clockwise":false,"large":false}).appendPoint([186.2356385,-120.9001747]).appendArc([188.2178765,-120.3744707],{"radius":4,"clockwise":false,"large":false}).appendPoint([220.1825526,-102.1372222]).appendArc([221.1037889,-101.7105104],{"radius":6,"clockwise":true,"large":false}).appendPoint([241.7611875,-94.1918321]).appendArc([242.6656408,-93.9407724],{"radius":6,"clockwise":true,"large":false}).appendPoint([260.8832506,-90.3905946]).appendArc([261.5545594,-90.2987498],{"radius":6,"clockwise":true,"large":false}).appendPoint([296.7784407,-87.49336]).appendArc([302.8929552,-91.4222996],{"radius":6,"clockwise":true,"large":false}).appendPoint([321.6776243,-143.032754]).appendArc([321.4774681,-147.6210047],{"radius":6,"clockwise":true,"large":false}).appendPoint([311.3299026,-169.3825294]).appendArc([310.2872731,-170.9313902],{"radius":6,"clockwise":true,"large":false}).appendPoint([266.3141324,-218.2555824]).appendArc([261.9187263,-220.1714173],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[233.1238667,-206.4403859],[246.2795633,-201.6521039]]).appendPoint([241.4912813,-188.4964073]).appendPoint([228.3355847,-193.2846893]).appendPoint([233.1238667,-206.4403859]).close().innerToCAG()
.union(
    new CSG.Path2D([[204.487876,-155.53979],[217.6435726,-150.751508]]).appendPoint([212.8552906,-137.5958114]).appendPoint([199.699594,-142.3840934]).appendPoint([204.487876,-155.53979]).close().innerToCAG()
).union(
    new CSG.Path2D([[210.9862588,-173.3939498],[224.1419554,-168.6056678]]).appendPoint([219.3536734,-155.4499712]).appendPoint([206.1979768,-160.2382532]).appendPoint([210.9862588,-173.3939498]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.4846415,-191.2481096],[230.6403381,-186.4598276]]).appendPoint([225.8520561,-173.304131]).appendPoint([212.6963595,-178.092413]).appendPoint([217.4846415,-191.2481096]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.8290056,-147.6318684],[234.9847022,-142.8435864]]).appendPoint([230.1964202,-129.6878898]).appendPoint([217.0407236,-134.4761718]).appendPoint([221.8290056,-147.6318684]).close().innerToCAG()
).union(
    new CSG.Path2D([[228.3273883,-165.4860282],[241.4830849,-160.6977462]]).appendPoint([236.6948029,-147.5420496]).appendPoint([223.5391063,-152.3303316]).appendPoint([228.3273883,-165.4860282]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.8257711,-183.340188],[247.9814677,-178.551906]]).appendPoint([243.1931857,-165.3962094]).appendPoint([230.0374891,-170.1844914]).appendPoint([234.8257711,-183.340188]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.1963596,-150.751508],[158.3520562,-155.53979]]).appendPoint([163.1403382,-142.3840934]).appendPoint([149.9846416,-137.5958114]).appendPoint([145.1963596,-150.751508]).close().innerToCAG()
).union(
    new CSG.Path2D([[138.6979768,-168.6056678],[151.8536734,-173.3939498]]).appendPoint([156.6419554,-160.2382532]).appendPoint([143.4862588,-155.4499712]).appendPoint([138.6979768,-168.6056678]).close().innerToCAG()
).union(
    new CSG.Path2D([[132.1995941,-186.4598276],[145.3552907,-191.2481096]]).appendPoint([150.1435727,-178.092413]).appendPoint([136.9878761,-173.304131]).appendPoint([132.1995941,-186.4598276]).close().innerToCAG()
).union(
    new CSG.Path2D([[197.9894933,-137.6856302],[211.1451899,-132.8973482]]).appendPoint([206.3569079,-119.7416516]).appendPoint([193.2012113,-124.5299336]).appendPoint([197.9894933,-137.6856302]).close().innerToCAG()
).union(
    new CSG.Path2D([[237.9730647,-136.4350225],[251.1287613,-131.6467405]]).appendPoint([246.3404793,-118.4910439]).appendPoint([233.1847827,-123.2793259]).appendPoint([237.9730647,-136.4350225]).close().innerToCAG()
).union(
    new CSG.Path2D([[256.8532849,-132.7557177],[270.0089815,-127.9674357]]).appendPoint([265.2206995,-114.8117391]).appendPoint([252.0650029,-119.6000211]).appendPoint([256.8532849,-132.7557177]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.5603689,-201.6521039],[129.7160655,-206.4403859]]).appendPoint([134.5043475,-193.2846893]).appendPoint([121.3486509,-188.4964073]).appendPoint([116.5603689,-201.6521039]).close().innerToCAG()
).union(
    new CSG.Path2D([[151.6947423,-132.8973482],[164.8504389,-137.6856302]]).appendPoint([169.6387209,-124.5299336]).appendPoint([156.4830243,-119.7416516]).appendPoint([151.6947423,-132.8973482]).close().innerToCAG()
).union(
    new CSG.Path2D([[121.3568473,-160.6977462],[134.5125439,-165.4860282]]).appendPoint([139.3008259,-152.3303316]).appendPoint([126.1451293,-147.5420496]).appendPoint([121.3568473,-160.6977462]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.7111709,-131.6467405],[124.8668675,-136.4350225]]).appendPoint([129.6551495,-123.2793259]).appendPoint([116.4994529,-118.4910439]).appendPoint([111.7111709,-131.6467405]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.85523,-142.8435864],[141.0109266,-147.6318684]]).appendPoint([145.7992086,-134.4761718]).appendPoint([132.643512,-129.6878898]).appendPoint([127.85523,-142.8435864]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.3306229,-129.7777086],[228.4863195,-124.9894266]]).appendPoint([223.6980375,-111.83373]).appendPoint([210.5423409,-116.622012]).appendPoint([215.3306229,-129.7777086]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.474682,-118.5808627],[244.6303786,-113.7925807]]).appendPoint([239.8420966,-100.6368841]).appendPoint([226.6864,-105.4251661]).appendPoint([231.474682,-118.5808627]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.9698301,-172.1433421],[264.1255267,-167.3550601]]).appendPoint([259.3372447,-154.1993635]).appendPoint([246.1815481,-158.9876455]).appendPoint([250.9698301,-172.1433421]).close().innerToCAG()
).union(
    new CSG.Path2D([[134.3536127,-124.9894266],[147.5093093,-129.7777086]]).appendPoint([152.2975913,-116.622012]).appendPoint([139.1418947,-111.83373]).appendPoint([134.3536127,-124.9894266]).close().innerToCAG()
).union(
    new CSG.Path2D([[114.8584645,-178.551906],[128.0141611,-183.340188]]).appendPoint([132.8024431,-170.1844914]).appendPoint([119.6467465,-165.3962094]).appendPoint([114.8584645,-178.551906]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.2127882,-149.5009003],[118.3684848,-154.2891823]]).appendPoint([123.1567668,-141.1334857]).appendPoint([110.0010702,-136.3452037]).appendPoint([105.2127882,-149.5009003]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.7144055,-167.3550601],[111.8701021,-172.1433421]]).appendPoint([116.6583841,-158.9876455]).appendPoint([103.5026875,-154.1993635]).appendPoint([98.7144055,-167.3550601]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.8309507,-127.9674357],[105.9866473,-132.7557177]]).appendPoint([110.7749293,-119.6000211]).appendPoint([97.6192327,-114.8117391]).appendPoint([92.8309507,-127.9674357]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.332568,-145.8215955],[99.4882646,-150.6098775]]).appendPoint([104.2765466,-137.4541809]).appendPoint([91.12085,-132.6658989]).appendPoint([86.332568,-145.8215955]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.8341852,-163.6757553],[92.9898818,-168.4640373]]).appendPoint([97.7781638,-155.3083407]).appendPoint([84.6224672,-150.5200587]).appendPoint([79.8341852,-163.6757553]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.8871967,-149.1899853],[78.0428933,-153.9782673]]).appendPoint([82.8311753,-140.8225707]).appendPoint([69.6754787,-136.0342887]).appendPoint([64.8871967,-149.1899853]).close().innerToCAG()
).union(
    new CSG.Path2D([[58.3888139,-167.0441451],[71.5445105,-171.8324271]]).appendPoint([76.3327925,-158.6767305]).appendPoint([63.1770959,-153.8884485]).appendPoint([58.3888139,-167.0441451]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.0330369,-142.6916025],[60.1887335,-147.4798845]]).appendPoint([64.9770155,-134.3241879]).appendPoint([51.8213189,-129.5359059]).appendPoint([47.0330369,-142.6916025]).close().innerToCAG()
).union(
    new CSG.Path2D([[244.4714474,-154.2891823],[257.627144,-149.5009003]]).appendPoint([252.838862,-136.3452037]).appendPoint([239.6831654,-141.1334857]).appendPoint([244.4714474,-154.2891823]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.3549022,-114.9015579],[263.5105988,-110.1132759]]).appendPoint([258.7223168,-96.9575793]).appendPoint([245.5666202,-101.7458613]).appendPoint([250.3549022,-114.9015579]).close().innerToCAG()
).union(
    new CSG.Path2D([[263.3516676,-150.6098775],[276.5073642,-145.8215955]]).appendPoint([271.7190822,-132.6658989]).appendPoint([258.5633856,-137.4541809]).appendPoint([263.3516676,-150.6098775]).close().innerToCAG()
).union(
    new CSG.Path2D([[269.8500504,-168.4640373],[283.005747,-163.6757553]]).appendPoint([278.217465,-150.5200587]).appendPoint([265.0617684,-155.3083407]).appendPoint([269.8500504,-168.4640373]).close().innerToCAG()
).union(
    new CSG.Path2D([[284.7970389,-153.9782673],[297.9527355,-149.1899853]]).appendPoint([293.1644535,-136.0342887]).appendPoint([280.0087569,-140.8225707]).appendPoint([284.7970389,-153.9782673]).close().innerToCAG()
).union(
    new CSG.Path2D([[291.2954217,-171.8324271],[304.4511183,-167.0441451]]).appendPoint([299.6628363,-153.8884485]).appendPoint([286.5071397,-158.6767305]).appendPoint([291.2954217,-171.8324271]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.6511987,-147.4798845],[315.8068953,-142.6916025]]).appendPoint([311.0186133,-129.5359059]).appendPoint([297.8629167,-134.3241879]).appendPoint([302.6511987,-147.4798845]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.2095536,-113.7925807],[131.3652502,-118.5808627]]).appendPoint([136.1535322,-105.4251661]).appendPoint([122.9978356,-100.6368841]).appendPoint([118.2095536,-113.7925807]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.3293334,-110.1132759],[112.48503,-114.9015579]]).appendPoint([117.273312,-101.7458613]).appendPoint([104.1176154,-96.9575793]).appendPoint([99.3293334,-110.1132759]).close().innerToCAG()
).union(
    new CSG.Path2D([[77.8839621,-113.4816657],[91.0396587,-118.2699477]]).appendPoint([95.8279407,-105.1142511]).appendPoint([82.6722441,-100.3259691]).appendPoint([77.8839621,-113.4816657]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.3855794,-131.3358255],[84.541276,-136.1241075]]).appendPoint([89.329558,-122.9684109]).appendPoint([76.1738614,-118.1801289]).appendPoint([71.3855794,-131.3358255]).close().innerToCAG()
).union(
    new CSG.Path2D([[60.0298023,-106.9832829],[73.1854989,-111.7715649]]).appendPoint([77.9737809,-98.6158683]).appendPoint([64.8180843,-93.8275863]).appendPoint([60.0298023,-106.9832829]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.2986562,-136.1241075],[291.4543528,-131.3358255]]).appendPoint([286.6660708,-118.1801289]).appendPoint([273.5103742,-122.9684109]).appendPoint([278.2986562,-136.1241075]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.5314196,-124.8374427],[66.6871162,-129.6257247]]).appendPoint([71.4753982,-116.4700281]).appendPoint([58.3197016,-111.6817461]).appendPoint([53.5314196,-124.8374427]).close().innerToCAG()
).union(
    new CSG.Path2D([[271.8002735,-118.2699477],[284.9559701,-113.4816657]]).appendPoint([280.1676881,-100.3259691]).appendPoint([267.0119915,-105.1142511]).appendPoint([271.8002735,-118.2699477]).close().innerToCAG()
).union(
    new CSG.Path2D([[289.6544333,-111.7715649],[302.8101299,-106.9832829]]).appendPoint([298.0218479,-93.8275863]).appendPoint([284.8661513,-98.6158683]).appendPoint([289.6544333,-111.7715649]).close().innerToCAG()
).union(
    new CSG.Path2D([[296.152816,-129.6257247],[309.3085126,-124.8374427]]).appendPoint([304.5202306,-111.6817461]).appendPoint([291.364534,-116.4700281]).appendPoint([296.152816,-129.6257247]).close().innerToCAG()
).union(
    new CSG.Path2D([[95.3652918,-197.0233048],[108.0536008,-191.1066492]]).appendPoint([102.1369452,-178.4183402]).appendPoint([89.4486362,-184.3349958]).appendPoint([95.3652918,-197.0233048]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.7863314,-191.1066492],[267.4746404,-197.0233048]]).appendPoint([273.391296,-184.3349958]).appendPoint([260.702987,-178.4183402]).appendPoint([254.7863314,-191.1066492]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function plate_mx_case_fn() {
                    

                // creating part 0 of case plate_mx
                let plate_mx__part_0 = plate_mx_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plate_mx__part_0_bounds = plate_mx__part_0.getBounds();
                let plate_mx__part_0_x = plate_mx__part_0_bounds[0].x + (plate_mx__part_0_bounds[1].x - plate_mx__part_0_bounds[0].x) / 2
                let plate_mx__part_0_y = plate_mx__part_0_bounds[0].y + (plate_mx__part_0_bounds[1].y - plate_mx__part_0_bounds[0].y) / 2
                plate_mx__part_0 = translate([-plate_mx__part_0_x, -plate_mx__part_0_y, 0], plate_mx__part_0);
                plate_mx__part_0 = rotate([0,0,0], plate_mx__part_0);
                plate_mx__part_0 = translate([plate_mx__part_0_x, plate_mx__part_0_y, 0], plate_mx__part_0);

                plate_mx__part_0 = translate([0,0,0], plate_mx__part_0);
                let result = plate_mx__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_mx_case_fn();
            }

        
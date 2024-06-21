function plate_mx_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[299.9590143,-207.800212],[246.7872389,-207.800212]]).appendPoint([253.1180599,-199.6971307]).appendPoint([242.0859094,-191.07787]).appendPoint([233.4666487,-202.1100205]).appendPoint([240.7497616,-207.800212]).appendPoint([174.198225,-207.800212]).appendPoint([181.4813379,-202.1100205]).appendPoint([172.8620772,-191.07787]).appendPoint([161.8299267,-199.6971307]).appendPoint([168.1607477,-207.800212]).appendPoint([114.9889723,-207.800212]).appendArc([110.909259,-206.1997505],{"radius":6,"clockwise":true,"large":false}).appendPoint([67.2098207,-165.6770519]).appendArc([66.0933817,-164.2775134],{"radius":6,"clockwise":true,"large":false}).appendPoint([54.0710856,-143.4542859]).appendArc([53.471683,-138.9013717],{"radius":6,"clockwise":true,"large":false}).appendPoint([67.686839,-85.849687]).appendArc([73.4356565,-81.402783],{"radius":6,"clockwise":true,"large":false}).appendPoint([108.7700067,-81.1275339]).appendArc([109.4467659,-81.1605209],{"radius":6,"clockwise":true,"large":false}).appendPoint([127.9044699,-83.1094198]).appendArc([128.8273624,-83.2806958],{"radius":6,"clockwise":true,"large":false}).appendPoint([150.0614491,-88.9703521]).appendArc([151.0163704,-89.3151492],{"radius":6,"clockwise":true,"large":false}).appendPoint([184.6587325,-104.7936396]).appendArc([186.3306228,-105.159801],{"radius":4,"clockwise":false,"large":false}).appendPoint([228.6173638,-105.159801]).appendArc([230.2892541,-104.7936396],{"radius":4,"clockwise":false,"large":false}).appendPoint([263.9316162,-89.3151493]).appendArc([264.8865375,-88.9703521],{"radius":6,"clockwise":true,"large":false}).appendPoint([286.1206242,-83.2806958]).appendArc([287.0435167,-83.1094198],{"radius":6,"clockwise":true,"large":false}).appendPoint([305.5012207,-81.1605208]).appendArc([306.1779799,-81.1275339],{"radius":6,"clockwise":true,"large":false}).appendPoint([341.5123301,-81.4027831]).appendArc([347.2611475,-85.8496869],{"radius":6,"clockwise":true,"large":false}).appendPoint([361.4761878,-138.9009398]).appendArc([360.876901,-143.4542858],{"radius":6,"clockwise":true,"large":false}).appendPoint([348.8546049,-164.2775134]).appendArc([347.7381658,-165.6770519],{"radius":6,"clockwise":true,"large":false}).appendPoint([304.0387275,-206.1997506]).appendArc([299.9590143,-207.800212],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[318.8644179,-128.2378565],[332.3873795,-124.6143899]]).appendPoint([328.7639129,-111.0914283]).appendPoint([315.2409513,-114.7148949]).appendPoint([318.8644179,-128.2378565]).close().innerToCAG()
.union(
    new CSG.Path2D([[276.7475981,-191.2868334],[290.2705597,-187.6633668]]).appendPoint([286.6470931,-174.1404052]).appendPoint([273.1241315,-177.7638718]).appendPoint([276.7475981,-191.2868334]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.6066839,-134.7801725],[275.1296455,-131.1567059]]).appendPoint([271.5061789,-117.6337443]).appendPoint([257.9832173,-121.2572109]).appendPoint([261.6066839,-134.7801725]).close().innerToCAG()
).union(
    new CSG.Path2D([[266.5242458,-153.1327632],[280.0472074,-149.5092966]]).appendPoint([276.4237408,-135.986335]).appendPoint([262.9007792,-139.6098016]).appendPoint([266.5242458,-153.1327632]).close().innerToCAG()
).union(
    new CSG.Path2D([[271.4418077,-171.4853539],[284.9647693,-167.8618873]]).appendPoint([281.3413027,-154.3389257]).appendPoint([267.8183411,-157.9623923]).appendPoint([271.4418077,-171.4853539]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.7476176,-106.6803908],[287.2705792,-103.0569242]]).appendPoint([283.6471126,-89.5339626]).appendPoint([270.124151,-93.1574292]).appendPoint([273.7476176,-106.6803908]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.6651794,-125.0329815],[292.188141,-121.4095149]]).appendPoint([288.5646744,-107.8865533]).appendPoint([275.0417128,-111.5100199]).appendPoint([278.6651794,-125.0329815]).close().innerToCAG()
).union(
    new CSG.Path2D([[283.5827413,-143.3855722],[297.1057029,-139.7621056]]).appendPoint([293.4822363,-126.239144]).appendPoint([279.9592747,-129.8626106]).appendPoint([283.5827413,-143.3855722]).close().innerToCAG()
).union(
    new CSG.Path2D([[288.5003031,-161.7381629],[302.0232647,-158.1146963]]).appendPoint([298.3997981,-144.5917347]).appendPoint([284.8768365,-148.2152013]).appendPoint([288.5003031,-161.7381629]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.8766654,-104.6606065],[306.399627,-101.0371399]]).appendPoint([302.7761604,-87.5141783]).appendPoint([289.2531988,-91.1376449]).appendPoint([292.8766654,-104.6606065]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.7942272,-123.0131972],[311.3171888,-119.3897306]]).appendPoint([307.6937222,-105.866769]).appendPoint([294.1707606,-109.4902356]).appendPoint([297.7942272,-123.0131972]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.7117891,-141.3657879],[316.2347507,-137.7423213]]).appendPoint([312.6112841,-124.2193597]).appendPoint([299.0883225,-127.8428263]).appendPoint([302.7117891,-141.3657879]).close().innerToCAG()
).union(
    new CSG.Path2D([[307.629351,-159.7183786],[321.1523126,-156.094912]]).appendPoint([317.528846,-142.5719504]).appendPoint([304.0058844,-146.195417]).appendPoint([307.629351,-159.7183786]).close().innerToCAG()
).union(
    new CSG.Path2D([[313.9468561,-109.8852658],[327.4698177,-106.2617992]]).appendPoint([323.8463511,-92.7388376]).appendPoint([310.3233895,-96.3623042]).appendPoint([313.9468561,-109.8852658]).close().innerToCAG()
).union(
    new CSG.Path2D([[323.7819798,-146.5904472],[337.3049414,-142.9669806]]).appendPoint([333.6814748,-129.444019]).appendPoint([320.1585132,-133.0674856]).appendPoint([323.7819798,-146.5904472]).close().innerToCAG()
).union(
    new CSG.Path2D([[328.6995416,-164.9430379],[342.2225032,-161.3195713]]).appendPoint([338.5990366,-147.7966097]).appendPoint([325.076075,-151.4200763]).appendPoint([328.6995416,-164.9430379]).close().innerToCAG()
).union(
    new CSG.Path2D([[332.2994468,-104.9677039],[345.8224084,-101.3442373]]).appendPoint([342.1989418,-87.8212757]).appendPoint([328.6759802,-91.4447423]).appendPoint([332.2994468,-104.9677039]).close().innerToCAG()
).union(
    new CSG.Path2D([[337.2170086,-123.3202946],[350.7399702,-119.696828]]).appendPoint([347.1165036,-106.1738664]).appendPoint([333.593542,-109.797333]).appendPoint([337.2170086,-123.3202946]).close().innerToCAG()
).union(
    new CSG.Path2D([[342.1345705,-141.6728853],[355.6575321,-138.0494187]]).appendPoint([352.0340655,-124.5264571]).appendPoint([338.5111039,-128.1499237]).appendPoint([342.1345705,-141.6728853]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.3950074,-196.2043952],[271.917969,-192.5809286]]).appendPoint([268.2945024,-179.057967]).appendPoint([254.7715408,-182.6814336]).appendPoint([258.3950074,-196.2043952]).close().innerToCAG()
).union(
    new CSG.Path2D([[243.6423218,-141.1466231],[257.1652834,-137.5231565]]).appendPoint([253.5418168,-124.0001949]).appendPoint([240.0188552,-127.6236615]).appendPoint([243.6423218,-141.1466231]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.4774455,-177.8518045],[267.0004071,-174.2283379]]).appendPoint([263.3769405,-160.7053763]).appendPoint([249.8539789,-164.3288429]).appendPoint([253.4774455,-177.8518045]).close().innerToCAG()
).union(
    new CSG.Path2D([[256.6891221,-116.4275818],[270.2120837,-112.8041152]]).appendPoint([266.5886171,-99.2811536]).appendPoint([253.0656555,-102.9046202]).appendPoint([256.6891221,-116.4275818]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.9247219,-158.1146963],[126.4476835,-161.7381629]]).appendPoint([130.0711501,-148.2152013]).appendPoint([116.5481885,-144.5917347]).appendPoint([112.9247219,-158.1146963]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.5606071,-124.6143899],[96.0835687,-128.2378565]]).appendPoint([99.7070353,-114.7148949]).appendPoint([86.1840737,-111.0914283]).appendPoint([82.5606071,-124.6143899]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.72476,-122.7940324],[252.2477216,-119.1705658]]).appendPoint([248.624255,-105.6476042]).appendPoint([235.1012934,-109.2710708]).appendPoint([238.72476,-122.7940324]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.0300176,-192.5809286],[156.5529792,-196.2043952]]).appendPoint([160.1764458,-182.6814336]).appendPoint([146.6534842,-179.057967]).appendPoint([143.0300176,-192.5809286]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.6774269,-187.6633668],[138.2003885,-191.2868334]]).appendPoint([141.8238551,-177.7638718]).appendPoint([128.3008935,-174.1404052]).appendPoint([124.6774269,-187.6633668]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.700265,-119.1705658],[176.2232266,-122.7940324]]).appendPoint([179.8466932,-109.2710708]).appendPoint([166.3237316,-105.6476042]).appendPoint([162.700265,-119.1705658]).close().innerToCAG()
).union(
    new CSG.Path2D([[157.7827032,-137.5231565],[171.3056648,-141.1466231]]).appendPoint([174.9291314,-127.6236615]).appendPoint([161.4061698,-124.0001949]).appendPoint([157.7827032,-137.5231565]).close().innerToCAG()
).union(
    new CSG.Path2D([[152.8651413,-155.8757472],[166.3881029,-159.4992138]]).appendPoint([170.0115695,-145.9762522]).appendPoint([156.4886079,-142.3527856]).appendPoint([152.8651413,-155.8757472]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.9475795,-174.2283379],[161.4705411,-177.8518045]]).appendPoint([165.0940077,-164.3288429]).appendPoint([151.5710461,-160.7053763]).appendPoint([147.9475795,-174.2283379]).close().innerToCAG()
).union(
    new CSG.Path2D([[144.7359029,-112.8041152],[158.2588645,-116.4275818]]).appendPoint([161.8823311,-102.9046202]).appendPoint([148.3593695,-99.2811536]).appendPoint([144.7359029,-112.8041152]).close().innerToCAG()
).union(
    new CSG.Path2D([[139.8183411,-131.1567059],[153.3413027,-134.7801725]]).appendPoint([156.9647693,-121.2572109]).appendPoint([143.4418077,-117.6337443]).appendPoint([139.8183411,-131.1567059]).close().innerToCAG()
).union(
    new CSG.Path2D([[134.9007792,-149.5092966],[148.4237408,-153.1327632]]).appendPoint([152.0472074,-139.6098016]).appendPoint([138.5242458,-135.986335]).appendPoint([134.9007792,-149.5092966]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.9832173,-167.8618873],[143.5061789,-171.4853539]]).appendPoint([147.1296455,-157.9623923]).appendPoint([133.6066839,-154.3389257]).appendPoint([129.9832173,-167.8618873]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.6774074,-103.0569242],[141.200369,-106.6803908]]).appendPoint([144.8238356,-93.1574292]).appendPoint([131.300874,-89.5339626]).appendPoint([127.6774074,-103.0569242]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.7598456,-121.4095149],[136.2828072,-125.0329815]]).appendPoint([139.9062738,-111.5100199]).appendPoint([126.3833122,-107.8865533]).appendPoint([122.7598456,-121.4095149]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.8422837,-139.7621056],[131.3652453,-143.3855722]]).appendPoint([134.9887119,-129.8626106]).appendPoint([121.4657503,-126.239144]).appendPoint([117.8422837,-139.7621056]).close().innerToCAG()
).union(
    new CSG.Path2D([[108.5483596,-101.0371399],[122.0713212,-104.6606065]]).appendPoint([125.6947878,-91.1376449]).appendPoint([112.1718262,-87.5141783]).appendPoint([108.5483596,-101.0371399]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.6307978,-119.3897306],[117.1537594,-123.0131972]]).appendPoint([120.777226,-109.4902356]).appendPoint([107.2542644,-105.866769]).appendPoint([103.6307978,-119.3897306]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.7132359,-137.7423213],[112.2361975,-141.3657879]]).appendPoint([115.8596641,-127.8428263]).appendPoint([102.3367025,-124.2193597]).appendPoint([98.7132359,-137.7423213]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.795674,-156.094912],[107.3186356,-159.7183786]]).appendPoint([110.9421022,-146.195417]).appendPoint([97.4191406,-142.5719504]).appendPoint([93.795674,-156.094912]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.4781689,-106.2617992],[101.0011305,-109.8852658]]).appendPoint([104.6245971,-96.3623042]).appendPoint([91.1016355,-92.7388376]).appendPoint([87.4781689,-106.2617992]).close().innerToCAG()
).union(
    new CSG.Path2D([[77.6430452,-142.9669806],[91.1660068,-146.5904472]]).appendPoint([94.7894734,-133.0674856]).appendPoint([81.2665118,-129.444019]).appendPoint([77.6430452,-142.9669806]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.7254834,-161.3195713],[86.248445,-164.9430379]]).appendPoint([89.8719116,-151.4200763]).appendPoint([76.34895,-147.7966097]).appendPoint([72.7254834,-161.3195713]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.1255782,-101.3442373],[82.6485398,-104.9677039]]).appendPoint([86.2720064,-91.4447423]).appendPoint([72.7490448,-87.8212757]).appendPoint([69.1255782,-101.3442373]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.2080164,-119.696828],[77.730978,-123.3202946]]).appendPoint([81.3544446,-109.797333]).appendPoint([67.831483,-106.1738664]).appendPoint([64.2080164,-119.696828]).close().innerToCAG()
).union(
    new CSG.Path2D([[59.2904545,-138.0494187],[72.8134161,-141.6728853]]).appendPoint([76.4368827,-128.1499237]).appendPoint([62.9139211,-124.5264571]).appendPoint([59.2904545,-138.0494187]).close().innerToCAG()
).union(
    new CSG.Path2D([[248.5598837,-159.4992138],[262.0828453,-155.8757472]]).appendPoint([258.4593787,-142.3527856]).appendPoint([244.9364171,-145.9762522]).appendPoint([248.5598837,-159.4992138]).close().innerToCAG()
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

        
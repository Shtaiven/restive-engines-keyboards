function mx_plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[281.0227501,-193.852412],[143.7337917,-193.852412]]).appendArc([140.8586163,-192.9430558],{"radius":5,"clockwise":true,"large":false}).appendPoint([87.5179271,-155.4516884]).appendArc([86.3999248,-154.3701197],{"radius":5,"clockwise":true,"large":false}).appendPoint([71.949363,-135.1935765]).appendArc([70.9912003,-131.4886359],{"radius":5,"clockwise":true,"large":false}).appendPoint([78.6350248,-77.0999987]).appendArc([82.9383791,-72.8380306],{"radius":5,"clockwise":true,"large":false}).appendPoint([117.9758077,-68.258659]).appendArc([118.5389202,-68.217213],{"radius":5,"clockwise":true,"large":false}).appendPoint([137.0965549,-67.9021569]).appendArc([137.8772939,-67.9500962],{"radius":5,"clockwise":true,"large":false}).appendPoint([159.6464994,-71.0095585]).appendArc([160.4713523,-71.197768],{"radius":5,"clockwise":true,"large":false}).appendPoint([196.0505663,-82.5570955]).appendArc([197.5712847,-82.7939646],{"radius":5,"clockwise":false,"large":false}).appendPoint([227.1852571,-82.7939646]).appendArc([228.7059755,-82.5570954],{"radius":5,"clockwise":false,"large":false}).appendPoint([264.2851894,-71.197768]).appendArc([265.1100424,-71.0095585],{"radius":5,"clockwise":true,"large":false}).appendPoint([286.879248,-67.9500962]).appendArc([287.6599869,-67.9021569],{"radius":5,"clockwise":true,"large":false}).appendPoint([306.2176216,-68.217213]).appendArc([306.7807341,-68.258659],{"radius":5,"clockwise":true,"large":false}).appendPoint([341.8181627,-72.8380306]).appendArc([346.121517,-77.0999987],{"radius":5,"clockwise":true,"large":false}).appendPoint([353.7653415,-131.4886359]).appendArc([352.8071788,-135.1935765],{"radius":5,"clockwise":true,"large":false}).appendPoint([338.356617,-154.3701197]).appendArc([337.2386148,-155.4516884],{"radius":5,"clockwise":true,"large":false}).appendPoint([283.8979254,-192.9430558]).appendArc([281.0227501,-193.852412],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[279.3308648,-164.4649036],[290.5117619,-172.8903139]]).appendPoint([298.9371722,-161.7094168]).appendPoint([287.7562751,-153.2840065]).appendPoint([279.3308648,-164.4649036]).close().innerToCAG()
.union(
    new CSG.Path2D([[134.2447799,-172.8903139],[145.425677,-164.4649036]]).appendPoint([137.0002667,-153.2840065]).appendPoint([125.8193696,-161.7094168]).appendPoint([134.2447799,-172.8903139]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.9272624,-186.0513802],[242.2885287,-179.4787783]]).appendPoint([235.7159268,-167.117512]).appendPoint([223.3546605,-173.6901139]).appendPoint([229.9272624,-186.0513802]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.4680131,-179.4787783],[194.8292794,-186.0513802]]).appendPoint([201.4018813,-173.6901139]).appendPoint([189.040615,-167.117512]).appendPoint([182.4680131,-179.4787783]).close().innerToCAG()
).union(
    new CSG.Path2D([[256.1326508,-115.0879377],[269.9964038,-113.1395143]]).appendPoint([268.0479804,-99.2757613]).appendPoint([254.1842274,-101.2241847]).appendPoint([256.1326508,-115.0879377]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.7769397,-133.903031],[272.6406927,-131.9546076]]).appendPoint([270.6922693,-118.0908546]).appendPoint([256.8285163,-120.039278]).appendPoint([258.7769397,-133.903031]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.4212287,-152.7181243],[275.2849817,-150.7697009]]).appendPoint([273.3365583,-136.9059479]).appendPoint([259.4728053,-138.8543713]).appendPoint([261.4212287,-152.7181243]).close().innerToCAG()
).union(
    new CSG.Path2D([[271.6075897,-88.6772151],[285.4713427,-86.7287917]]).appendPoint([283.5229193,-72.8650387]).appendPoint([269.6591663,-74.8134621]).appendPoint([271.6075897,-88.6772151]).close().innerToCAG()
).union(
    new CSG.Path2D([[274.2518786,-107.4923084],[288.1156316,-105.543885]]).appendPoint([286.1672082,-91.680132]).appendPoint([272.3034552,-93.6285554]).appendPoint([274.2518786,-107.4923084]).close().innerToCAG()
).union(
    new CSG.Path2D([[276.8961676,-126.3074018],[290.7599206,-124.3589784]]).appendPoint([288.8114972,-110.4952254]).appendPoint([274.9477442,-112.4436488]).appendPoint([276.8961676,-126.3074018]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.5404565,-145.1224951],[293.4042095,-143.1740717]]).appendPoint([291.4557861,-129.3103187]).appendPoint([277.5920331,-131.2587421]).appendPoint([279.5404565,-145.1224951]).close().innerToCAG()
).union(
    new CSG.Path2D([[290.8402023,-89.0037304],[304.7039553,-87.055307]]).appendPoint([302.7555319,-73.191554]).appendPoint([288.8917789,-75.1399774]).appendPoint([290.8402023,-89.0037304]).close().innerToCAG()
).union(
    new CSG.Path2D([[293.4844912,-107.8188237],[307.3482442,-105.8704003]]).appendPoint([305.3998208,-92.0066473]).appendPoint([291.5360678,-93.9550707]).appendPoint([293.4844912,-107.8188237]).close().innerToCAG()
).union(
    new CSG.Path2D([[296.1287802,-126.633917],[309.9925332,-124.6854936]]).appendPoint([308.0441098,-110.8217406]).appendPoint([294.1803568,-112.770164]).appendPoint([296.1287802,-126.633917]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.7730691,-145.4490103],[312.6368221,-143.5005869]]).appendPoint([310.6883987,-129.6368339]).appendPoint([296.8246457,-131.5852573]).appendPoint([298.7730691,-145.4490103]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.1166132,-96.7572562],[324.9803662,-94.8088328]]).appendPoint([323.0319428,-80.9450798]).appendPoint([309.1681898,-82.8935032]).appendPoint([311.1166132,-96.7572562]).close().innerToCAG()
).union(
    new CSG.Path2D([[313.7609021,-115.5723495],[327.6246551,-113.6239261]]).appendPoint([325.6762317,-99.7601731]).appendPoint([311.8124787,-101.7085965]).appendPoint([313.7609021,-115.5723495]).close().innerToCAG()
).union(
    new CSG.Path2D([[316.405191,-134.3874428],[330.268944,-132.4390194]]).appendPoint([328.3205206,-118.5752664]).appendPoint([314.4567676,-120.5236898]).appendPoint([316.405191,-134.3874428]).close().innerToCAG()
).union(
    new CSG.Path2D([[319.0494799,-153.2025362],[332.9132329,-151.2541128]]).appendPoint([330.9648095,-137.3903598]).appendPoint([317.1010565,-139.3387832]).appendPoint([319.0494799,-153.2025362]).close().innerToCAG()
).union(
    new CSG.Path2D([[329.9317065,-94.1129673],[343.7954595,-92.1645439]]).appendPoint([341.8470361,-78.3007909]).appendPoint([327.9832831,-80.2492143]).appendPoint([329.9317065,-94.1129673]).close().innerToCAG()
).union(
    new CSG.Path2D([[332.5759954,-112.9280606],[346.4397484,-110.9796372]]).appendPoint([344.491325,-97.1158842]).appendPoint([330.627572,-99.0643076]).appendPoint([332.5759954,-112.9280606]).close().innerToCAG()
).union(
    new CSG.Path2D([[335.2202843,-131.7431539],[349.0840373,-129.7947305]]).appendPoint([347.1356139,-115.9309775]).appendPoint([333.2718609,-117.8794009]).appendPoint([335.2202843,-131.7431539]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.814895,-156.8478153],[256.678648,-154.8993919]]).appendPoint([254.7302246,-141.0356389]).appendPoint([240.8664716,-142.9840623]).appendPoint([242.814895,-156.8478153]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.9537138,-174.9596817],[268.8174668,-173.0112583]]).appendPoint([266.8690434,-159.1475053]).appendPoint([253.0052904,-161.0959287]).appendPoint([254.9537138,-174.9596817]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.4883619,-96.2728444],[267.3521149,-94.324421]]).appendPoint([265.4036915,-80.460668]).appendPoint([251.5399385,-82.4090914]).appendPoint([253.4883619,-96.2728444]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.8820283,-100.4025354],[248.7457813,-98.454112]]).appendPoint([246.7973579,-84.590359]).appendPoint([232.9336049,-86.5387824]).appendPoint([234.8820283,-100.4025354]).close().innerToCAG()
).union(
    new CSG.Path2D([[237.5263172,-119.2176287],[251.3900702,-117.2692053]]).appendPoint([249.4416468,-103.4054523]).appendPoint([235.5778938,-105.3538757]).appendPoint([237.5263172,-119.2176287]).close().innerToCAG()
).union(
    new CSG.Path2D([[240.1706061,-138.032722],[254.0343591,-136.0842986]]).appendPoint([252.0859357,-122.2205456]).appendPoint([238.2221827,-124.168969]).appendPoint([240.1706061,-138.032722]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.939075,-173.0112583],[169.802828,-174.9596817]]).appendPoint([171.7512514,-161.0959287]).appendPoint([157.8874984,-159.1475053]).appendPoint([155.939075,-173.0112583]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.0107605,-98.454112],[189.8745135,-100.4025354]]).appendPoint([191.8229369,-86.5387824]).appendPoint([177.9591839,-84.590359]).appendPoint([176.0107605,-98.454112]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.3664716,-117.2692053],[187.2302246,-119.2176287]]).appendPoint([189.178648,-105.3538757]).appendPoint([175.314895,-103.4054523]).appendPoint([173.3664716,-117.2692053]).close().innerToCAG()
).union(
    new CSG.Path2D([[170.7221827,-136.0842986],[184.5859357,-138.032722]]).appendPoint([186.5343591,-124.168969]).appendPoint([172.6706061,-122.2205456]).appendPoint([170.7221827,-136.0842986]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.0778938,-154.8993919],[181.9416468,-156.8478153]]).appendPoint([183.8900702,-142.9840623]).appendPoint([170.0263172,-141.0356389]).appendPoint([168.0778938,-154.8993919]).close().innerToCAG()
).union(
    new CSG.Path2D([[157.4044269,-94.324421],[171.2681799,-96.2728444]]).appendPoint([173.2166033,-82.4090914]).appendPoint([159.3528503,-80.460668]).appendPoint([157.4044269,-94.324421]).close().innerToCAG()
).union(
    new CSG.Path2D([[154.760138,-113.1395143],[168.623891,-115.0879377]]).appendPoint([170.5723144,-101.2241847]).appendPoint([156.7085614,-99.2757613]).appendPoint([154.760138,-113.1395143]).close().innerToCAG()
).union(
    new CSG.Path2D([[152.1158491,-131.9546076],[165.9796021,-133.903031]]).appendPoint([167.9280255,-120.039278]).appendPoint([154.0642725,-118.0908546]).appendPoint([152.1158491,-131.9546076]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.4715601,-150.7697009],[163.3353131,-152.7181243]]).appendPoint([165.2837365,-138.8543713]).appendPoint([151.4199835,-136.9059479]).appendPoint([149.4715601,-150.7697009]).close().innerToCAG()
).union(
    new CSG.Path2D([[139.2851991,-86.7287917],[153.1489521,-88.6772151]]).appendPoint([155.0973755,-74.8134621]).appendPoint([141.2336225,-72.8650387]).appendPoint([139.2851991,-86.7287917]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.6409102,-105.543885],[150.5046632,-107.4923084]]).appendPoint([152.4530866,-93.6285554]).appendPoint([138.5893336,-91.680132]).appendPoint([136.6409102,-105.543885]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.9966212,-124.3589784],[147.8603742,-126.3074018]]).appendPoint([149.8087976,-112.4436488]).appendPoint([135.9450446,-110.4952254]).appendPoint([133.9966212,-124.3589784]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.3523323,-143.1740717],[145.2160853,-145.1224951]]).appendPoint([147.1645087,-131.2587421]).appendPoint([133.3007557,-129.3103187]).appendPoint([131.3523323,-143.1740717]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.0525865,-87.055307],[133.9163395,-89.0037304]]).appendPoint([135.8647629,-75.1399774]).appendPoint([122.0010099,-73.191554]).appendPoint([120.0525865,-87.055307]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.4082976,-105.8704003],[131.2720506,-107.8188237]]).appendPoint([133.220474,-93.9550707]).appendPoint([119.356721,-92.0066473]).appendPoint([117.4082976,-105.8704003]).close().innerToCAG()
).union(
    new CSG.Path2D([[114.7640086,-124.6854936],[128.6277616,-126.633917]]).appendPoint([130.576185,-112.770164]).appendPoint([116.712432,-110.8217406]).appendPoint([114.7640086,-124.6854936]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.1197197,-143.5005869],[125.9834727,-145.4490103]]).appendPoint([127.9318961,-131.5852573]).appendPoint([114.0681431,-129.6368339]).appendPoint([112.1197197,-143.5005869]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.7761756,-94.8088328],[113.6399286,-96.7572562]]).appendPoint([115.588352,-82.8935032]).appendPoint([101.724599,-80.9450798]).appendPoint([99.7761756,-94.8088328]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.1318867,-113.6239261],[110.9956397,-115.5723495]]).appendPoint([112.9440631,-101.7085965]).appendPoint([99.0803101,-99.7601731]).appendPoint([97.1318867,-113.6239261]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.4875978,-132.4390194],[108.3513508,-134.3874428]]).appendPoint([110.2997742,-120.5236898]).appendPoint([96.4360212,-118.5752664]).appendPoint([94.4875978,-132.4390194]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.8433089,-151.2541128],[105.7070619,-153.2025362]]).appendPoint([107.6554853,-139.3387832]).appendPoint([93.7917323,-137.3903598]).appendPoint([91.8433089,-151.2541128]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.9610823,-92.1645439],[94.8248353,-94.1129673]]).appendPoint([96.7732587,-80.2492143]).appendPoint([82.9095057,-78.3007909]).appendPoint([80.9610823,-92.1645439]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.3167934,-110.9796372],[92.1805464,-112.9280606]]).appendPoint([94.1289698,-99.0643076]).appendPoint([80.2652168,-97.1158842]).appendPoint([78.3167934,-110.9796372]).close().innerToCAG()
).union(
    new CSG.Path2D([[75.6725045,-129.7947305],[89.5362575,-131.7431539]]).appendPoint([91.4846809,-117.8794009]).appendPoint([77.6209279,-115.9309775]).appendPoint([75.6725045,-129.7947305]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function mx_plate_case_fn() {
                    

                // creating part 0 of case mx_plate
                let mx_plate__part_0 = mx_plate_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let mx_plate__part_0_bounds = mx_plate__part_0.getBounds();
                let mx_plate__part_0_x = mx_plate__part_0_bounds[0].x + (mx_plate__part_0_bounds[1].x - mx_plate__part_0_bounds[0].x) / 2
                let mx_plate__part_0_y = mx_plate__part_0_bounds[0].y + (mx_plate__part_0_bounds[1].y - mx_plate__part_0_bounds[0].y) / 2
                mx_plate__part_0 = translate([-mx_plate__part_0_x, -mx_plate__part_0_y, 0], mx_plate__part_0);
                mx_plate__part_0 = rotate([0,0,0], mx_plate__part_0);
                mx_plate__part_0 = translate([mx_plate__part_0_x, mx_plate__part_0_y, 0], mx_plate__part_0);

                mx_plate__part_0 = translate([0,0,0], mx_plate__part_0);
                let result = mx_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return mx_plate_case_fn();
            }

        
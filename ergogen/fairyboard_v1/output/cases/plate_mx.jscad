function plate_mx_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[57.2060353,-140.5132361],[74.6713584,-144.8678303]]).appendPoint([70.3167643,-162.3331533]).appendArc([71.0451381,-163.5453709],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.4213483,-168.6257307]).appendArc([92.6335659,-167.8973569],{"radius":1,"clockwise":false,"large":false}).appendPoint([94.9318239,-158.6795475]).appendPoint([112.397147,-163.0341416]).appendArc([113.6093646,-162.3057678],{"radius":1,"clockwise":false,"large":false}).appendPoint([114.0932084,-160.3651763]).appendPoint([128.6476444,-163.9940048]).appendPoint([122.7205579,-187.7662501]).appendArc([123.4489317,-188.9784677],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.5734739,-193.7467517]).appendPoint([158.444707,-203.0956223]).appendPoint([171.8869039,-217.5106137]).appendArc([173.300256,-217.559969],{"radius":1,"clockwise":false,"large":false}).appendPoint([188.6586837,-203.2380035]).appendArc([188.708039,-201.8246514],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.3860735,-186.4662237]).appendArc([172.9727214,-186.4168684],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.4337651,-190.6495136]).appendPoint([171.5836698,-185.3020365]).appendArc([171.229579,-183.932869],{"radius":1,"clockwise":false,"large":false}).appendPoint([163.5084262,-179.3847625]).appendPoint([166.8572768,-180.2197247]).appendArc([168.0694944,-179.4913509],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.9608441,-159.8732188]).appendPoint([246.9892629,-159.8732188]).appendPoint([251.8806126,-179.4913509]).appendArc([253.0928302,-180.2197247],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.4416808,-179.3847625]).appendPoint([248.720528,-183.9328691]).appendArc([248.3664373,-185.3020366],{"radius":1,"clockwise":false,"large":false}).appendPoint([251.5163419,-190.6495136]).appendPoint([246.9773856,-186.4168684]).appendArc([245.5640335,-186.4662237],{"radius":1,"clockwise":false,"large":false}).appendPoint([231.242068,-201.8246514]).appendArc([231.2914233,-203.2380035],{"radius":1,"clockwise":false,"large":false}).appendPoint([246.649851,-217.559969]).appendArc([248.0632031,-217.5106137],{"radius":1,"clockwise":false,"large":false}).appendPoint([261.5053998,-203.0956225]).appendPoint([277.376633,-193.7467516]).appendPoint([296.5011753,-188.9784677]).appendArc([297.2295491,-187.7662501],{"radius":1,"clockwise":false,"large":false}).appendPoint([291.3024626,-163.9940047]).appendPoint([305.8568986,-160.3651763]).appendPoint([306.3407424,-162.3057678]).appendArc([307.55296,-163.0341416],{"radius":1,"clockwise":false,"large":false}).appendPoint([325.0182831,-158.6795475]).appendPoint([327.3165411,-167.8973569]).appendArc([328.5287587,-168.6257307],{"radius":1,"clockwise":false,"large":false}).appendPoint([348.9049689,-163.5453709]).appendArc([349.6333427,-162.3331533],{"radius":1,"clockwise":false,"large":false}).appendPoint([345.2787486,-144.8678302]).appendPoint([362.7440717,-140.5132361]).appendArc([363.4724455,-139.3010185],{"radius":1,"clockwise":false,"large":false}).appendPoint([350.5296241,-87.3901972]).appendArc([349.3174065,-86.6618234],{"radius":1,"clockwise":false,"large":false}).appendPoint([273.6343399,-105.5317312]).appendArc([272.9059661,-106.7439488],{"radius":1,"clockwise":false,"large":false}).appendPoint([273.8736537,-110.6251318]).appendPoint([256.4083306,-114.9797259]).appendArc([255.6799568,-116.1919435],{"radius":1,"clockwise":false,"large":false}).appendPoint([255.8009177,-116.6770914]).appendPoint([238.454732,-121.0019812]).appendPoint([181.495375,-121.0019812]).appendPoint([164.1491893,-116.6770913]).appendPoint([164.2701503,-116.1919435]).appendArc([163.5417764,-114.9797259],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.0764533,-110.6251318]).appendPoint([147.0441409,-106.7439488]).appendArc([146.3157671,-105.5317312],{"radius":1,"clockwise":false,"large":false}).appendPoint([70.6327005,-86.6618234]).appendArc([69.4204829,-87.3901972],{"radius":1,"clockwise":false,"large":false}).appendPoint([56.4776615,-139.3010185]).appendArc([57.2060353,-140.5132361],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[269.6366327,-176.0948915],[270.5581534,-175.8651306]]).appendPoint([271.3338131,-178.976132]).appendPoint([269.6366327,-176.0948915]).close().innerToCAG()
.union(
    new CSG.Path2D([[149.3919537,-175.8651306],[150.3134743,-176.0948914]]).appendPoint([148.6162939,-178.9761321]).appendPoint([149.3919537,-175.8651306]).close().innerToCAG()
).union(
    new CSG.Path2D([[247.1591057,-211.8818831],[256.7070827,-201.6429313]]).appendPoint([246.4681309,-192.0949543]).appendPoint([236.9201539,-202.3339061]).appendPoint([247.1591057,-211.8818831]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.2430243,-201.6429313],[172.7910013,-211.8818831]]).appendPoint([183.0299531,-202.3339061]).appendPoint([173.4819761,-192.0949543]).appendPoint([163.2430243,-201.6429313]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.4323516,-188.8457702],[292.0164918,-185.4588636]]).appendPoint([288.6295852,-171.8747234]).appendPoint([275.045445,-175.26163]).appendPoint([278.4323516,-188.8457702]).close().innerToCAG()
).union(
    new CSG.Path2D([[264.2799207,-132.0834702],[277.8640609,-128.6965636]]).appendPoint([274.4771543,-115.1124234]).appendPoint([260.8930141,-118.49933]).appendPoint([264.2799207,-132.0834702]).close().innerToCAG()
).union(
    new CSG.Path2D([[268.8764367,-150.519089],[282.4605769,-147.1321824]]).appendPoint([279.0736703,-133.5480422]).appendPoint([265.4895301,-136.9349488]).appendPoint([268.8764367,-150.519089]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.4729527,-168.9547078],[287.0570929,-165.5678012]]).appendPoint([283.6701863,-151.983661]).appendPoint([270.0860461,-155.3705676]).appendPoint([273.4729527,-168.9547078]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.50593,-122.6354755],[295.0900702,-119.2485689]]).appendPoint([291.7031636,-105.6644287]).appendPoint([278.1190234,-109.0513353]).appendPoint([281.50593,-122.6354755]).close().innerToCAG()
).union(
    new CSG.Path2D([[286.102446,-141.0710943],[299.6865862,-137.6841877]]).appendPoint([296.2996796,-124.1000475]).appendPoint([282.7155394,-127.4869541]).appendPoint([286.102446,-141.0710943]).close().innerToCAG()
).union(
    new CSG.Path2D([[290.698962,-159.5067131],[304.2831022,-156.1198065]]).appendPoint([300.8961956,-142.5356663]).appendPoint([287.3120554,-145.9225729]).appendPoint([290.698962,-159.5067131]).close().innerToCAG()
).union(
    new CSG.Path2D([[300.6673145,-120.9498467],[314.2514547,-117.5629401]]).appendPoint([310.8645481,-103.9787999]).appendPoint([297.2804079,-107.3657065]).appendPoint([300.6673145,-120.9498467]).close().innerToCAG()
).union(
    new CSG.Path2D([[305.2638305,-139.3854655],[318.8479707,-135.9985589]]).appendPoint([315.4610641,-122.4144187]).appendPoint([301.8769239,-125.8013253]).appendPoint([305.2638305,-139.3854655]).close().innerToCAG()
).union(
    new CSG.Path2D([[309.8603465,-157.8210843],[323.4444867,-154.4341777]]).appendPoint([320.0575801,-140.8500375]).appendPoint([306.4734399,-144.2369441]).appendPoint([309.8603465,-157.8210843]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.6431132,-126.5414358],[335.2272534,-123.1545292]]).appendPoint([331.8403468,-109.570389]).appendPoint([318.2562066,-112.9572956]).appendPoint([321.6431132,-126.5414358]).close().innerToCAG()
).union(
    new CSG.Path2D([[326.2396292,-144.9770546],[339.8237694,-141.590148]]).appendPoint([336.4368628,-128.0060078]).appendPoint([322.8527226,-131.3929144]).appendPoint([326.2396292,-144.9770546]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.8361452,-163.4126734],[344.4202854,-160.0257668]]).appendPoint([341.0333788,-146.4416266]).appendPoint([327.4492386,-149.8285332]).appendPoint([330.8361452,-163.4126734]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.078732,-121.9449198],[353.6628722,-118.5580132]]).appendPoint([350.2759656,-104.973873]).appendPoint([336.6918254,-108.3607796]).appendPoint([340.078732,-121.9449198]).close().innerToCAG()
).union(
    new CSG.Path2D([[344.675248,-140.3805386],[358.2593882,-136.993632]]).appendPoint([354.8724816,-123.4094918]).appendPoint([341.2883414,-126.7963984]).appendPoint([344.675248,-140.3805386]).close().innerToCAG()
).union(
    new CSG.Path2D([[255.4002167,-175.0066674],[268.9843569,-171.6197608]]).appendPoint([265.5974503,-158.0356206]).appendPoint([252.0133101,-161.4225272]).appendPoint([255.4002167,-175.0066674]).close().innerToCAG()
).union(
    new CSG.Path2D([[246.2071847,-138.1354298],[259.7913249,-134.7485232]]).appendPoint([256.4044183,-121.164383]).appendPoint([242.8202781,-124.5512896]).appendPoint([246.2071847,-138.1354298]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.8037007,-156.5710486],[264.3878409,-153.184142]]).appendPoint([261.0009343,-139.6000018]).appendPoint([247.4167941,-142.9869084]).appendPoint([250.8037007,-156.5710486]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.6907188,-136.993632],[75.274859,-140.3805386]]).appendPoint([78.6617656,-126.7963984]).appendPoint([65.0776254,-123.4094918]).appendPoint([61.6907188,-136.993632]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.9336152,-185.4588636],[141.5177554,-188.8457702]]).appendPoint([144.904662,-175.26163]).appendPoint([131.3205218,-171.8747234]).appendPoint([127.9336152,-185.4588636]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.1587821,-134.7485232],[173.7429223,-138.1354298]]).appendPoint([177.1298289,-124.5512896]).appendPoint([163.5456887,-121.164383]).appendPoint([160.1587821,-134.7485232]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.5622661,-153.184142],[169.1464063,-156.5710486]]).appendPoint([172.5333129,-142.9869084]).appendPoint([158.9491727,-139.6000018]).appendPoint([155.5622661,-153.184142]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.9657501,-171.6197608],[164.5498903,-175.0066674]]).appendPoint([167.9367969,-161.4225272]).appendPoint([154.3526567,-158.0356206]).appendPoint([150.9657501,-171.6197608]).close().innerToCAG()
).union(
    new CSG.Path2D([[142.0860461,-128.6965636],[155.6701863,-132.0834702]]).appendPoint([159.0570929,-118.49933]).appendPoint([145.4729527,-115.1124234]).appendPoint([142.0860461,-128.6965636]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.4895301,-147.1321824],[151.0736703,-150.519089]]).appendPoint([154.4605769,-136.9349488]).appendPoint([140.8764367,-133.5480422]).appendPoint([137.4895301,-147.1321824]).close().innerToCAG()
).union(
    new CSG.Path2D([[132.8930141,-165.5678012],[146.4771543,-168.9547078]]).appendPoint([149.8640609,-155.3705676]).appendPoint([136.2799207,-151.983661]).appendPoint([132.8930141,-165.5678012]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.8600368,-119.2485689],[138.444177,-122.6354755]]).appendPoint([141.8310836,-109.0513353]).appendPoint([128.2469434,-105.6644287]).appendPoint([124.8600368,-119.2485689]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.2635208,-137.6841877],[133.847661,-141.0710943]]).appendPoint([137.2345676,-127.4869541]).appendPoint([123.6504274,-124.1000475]).appendPoint([120.2635208,-137.6841877]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.6670048,-156.1198065],[129.251145,-159.5067131]]).appendPoint([132.6380516,-145.9225729]).appendPoint([119.0539114,-142.5356663]).appendPoint([115.6670048,-156.1198065]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.6986523,-117.5629401],[119.2827925,-120.9498467]]).appendPoint([122.6696991,-107.3657065]).appendPoint([109.0855589,-103.9787999]).appendPoint([105.6986523,-117.5629401]).close().innerToCAG()
).union(
    new CSG.Path2D([[101.1021363,-135.9985589],[114.6862765,-139.3854655]]).appendPoint([118.0731831,-125.8013253]).appendPoint([104.4890429,-122.4144187]).appendPoint([101.1021363,-135.9985589]).close().innerToCAG()
).union(
    new CSG.Path2D([[96.5056203,-154.4341777],[110.0897605,-157.8210843]]).appendPoint([113.4766671,-144.2369441]).appendPoint([99.8925269,-140.8500375]).appendPoint([96.5056203,-154.4341777]).close().innerToCAG()
).union(
    new CSG.Path2D([[84.7228536,-123.1545292],[98.3069938,-126.5414358]]).appendPoint([101.6939004,-112.9572956]).appendPoint([88.1097602,-109.570389]).appendPoint([84.7228536,-123.1545292]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.1263376,-141.590148],[93.7104778,-144.9770546]]).appendPoint([97.0973844,-131.3929144]).appendPoint([83.5132442,-128.0060078]).appendPoint([80.1263376,-141.590148]).close().innerToCAG()
).union(
    new CSG.Path2D([[75.5298216,-160.0257668],[89.1139618,-163.4126734]]).appendPoint([92.5008684,-149.8285332]).appendPoint([78.9167282,-146.4416266]).appendPoint([75.5298216,-160.0257668]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.2872348,-118.5580132],[79.871375,-121.9449198]]).appendPoint([83.2582816,-108.3607796]).appendPoint([69.6741414,-104.973873]).appendPoint([66.2872348,-118.5580132]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.7616089,-190.9910872],[158.8244172,-198.0966243]]).appendPoint([165.9299543,-186.033816]).appendPoint([153.867146,-178.9282789]).appendPoint([146.7616089,-190.9910872]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.1256898,-198.0966243],[273.1884981,-190.9910872]]).appendPoint([266.082961,-178.9282789]).appendPoint([254.0201527,-186.033816]).appendPoint([261.1256898,-198.0966243]).close().innerToCAG()
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

        
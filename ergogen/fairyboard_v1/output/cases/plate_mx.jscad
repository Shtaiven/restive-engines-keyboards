function plate_mx_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[57.2060353,-140.5132361],[74.6713584,-144.8678303]]).appendPoint([70.8006081,-160.3925618]).appendArc([71.5289819,-161.6047794],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.9051921,-166.6851392]).appendArc([93.1174097,-165.9567654],{"radius":1,"clockwise":false,"large":false}).appendPoint([95.4156677,-156.738956]).appendPoint([112.8809908,-161.0935501]).appendArc([114.0932084,-160.3651763],{"radius":1,"clockwise":false,"large":false}).appendPoint([114.5770522,-158.4245849]).appendPoint([129.1314881,-162.0534134]).appendPoint([122.7205579,-187.7662501]).appendArc([123.4489317,-188.9784677],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.5734739,-193.7467517]).appendPoint([158.444707,-203.0956223]).appendPoint([171.8869039,-217.5106137]).appendArc([173.300256,-217.559969],{"radius":1,"clockwise":false,"large":false}).appendPoint([188.6586837,-203.2380035]).appendArc([188.708039,-201.8246514],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.3860735,-186.4662237]).appendArc([172.9727214,-186.4168684],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.4337651,-190.6495136]).appendPoint([171.5836698,-185.3020365]).appendArc([171.229579,-183.932869],{"radius":1,"clockwise":false,"large":false}).appendPoint([163.5084262,-179.3847625]).appendPoint([166.8572768,-180.2197247]).appendArc([168.0694944,-179.4913509],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.9608441,-159.8732188]).appendPoint([247.9569505,-159.8732188]).appendPoint([252.8483002,-179.4913509]).appendArc([254.0605178,-180.2197247],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.4093684,-179.3847625]).appendPoint([249.6882156,-183.9328691]).appendArc([249.3341249,-185.3020366],{"radius":1,"clockwise":false,"large":false}).appendPoint([252.4840295,-190.6495136]).appendPoint([247.9450732,-186.4168684]).appendArc([246.5317211,-186.4662237],{"radius":1,"clockwise":false,"large":false}).appendPoint([232.2097556,-201.8246514]).appendArc([232.2591109,-203.2380035],{"radius":1,"clockwise":false,"large":false}).appendPoint([247.6175386,-217.559969]).appendArc([249.0308907,-217.5106137],{"radius":1,"clockwise":false,"large":false}).appendPoint([262.4730874,-203.0956225]).appendPoint([278.3443206,-193.7467516]).appendPoint([297.4688629,-188.9784677]).appendArc([298.1972367,-187.7662501],{"radius":1,"clockwise":false,"large":false}).appendPoint([291.7863064,-162.0534133]).appendPoint([306.3407424,-158.4245849]).appendPoint([306.8245861,-160.3651763]).appendArc([308.0368038,-161.0935501],{"radius":1,"clockwise":false,"large":false}).appendPoint([325.5021269,-156.738956]).appendPoint([327.8003849,-165.9567654]).appendArc([329.0126025,-166.6851392],{"radius":1,"clockwise":false,"large":false}).appendPoint([349.3888127,-161.6047794]).appendArc([350.1171865,-160.3925618],{"radius":1,"clockwise":false,"large":false}).appendPoint([346.2464362,-144.8678302]).appendPoint([363.7117593,-140.5132361]).appendArc([364.4401331,-139.3010185],{"radius":1,"clockwise":false,"large":false}).appendPoint([351.0134679,-85.4496058]).appendArc([349.8012503,-84.721232],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.1181837,-103.5911398]).appendArc([273.3898099,-104.8033574],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.3574974,-108.6845403]).appendPoint([256.8921744,-113.0391344]).appendArc([256.1638006,-114.251352],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.7686053,-116.6770914]).appendPoint([239.4224196,-121.0019812]).appendPoint([181.495375,-121.0019812]).appendPoint([164.1491893,-116.6770913]).appendPoint([164.7539941,-114.251352]).appendArc([164.0256202,-113.0391344],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.5602971,-108.6845403]).appendPoint([147.5279847,-104.8033574]).appendArc([146.7996109,-103.5911398],{"radius":1,"clockwise":false,"large":false}).appendPoint([71.1165443,-84.721232]).appendArc([69.9043267,-85.4496058],{"radius":1,"clockwise":false,"large":false}).appendPoint([56.4776615,-139.3010185]).appendArc([57.2060353,-140.5132361],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[270.6043203,-176.0948915],[271.525841,-175.8651306]]).appendPoint([272.3015007,-178.976132]).appendPoint([270.6043203,-176.0948915]).close().innerToCAG()
.union(
    new CSG.Path2D([[149.3919537,-175.8651306],[150.3134743,-176.0948914]]).appendPoint([148.6162939,-178.9761321]).appendPoint([149.3919537,-175.8651306]).close().innerToCAG()
).union(
    new CSG.Path2D([[248.1267933,-211.8818831],[257.6747703,-201.6429313]]).appendPoint([247.4358185,-192.0949543]).appendPoint([237.8878415,-202.3339061]).appendPoint([248.1267933,-211.8818831]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.2430243,-201.6429313],[172.7910013,-211.8818831]]).appendPoint([183.0299531,-202.3339061]).appendPoint([173.4819761,-192.0949543]).appendPoint([163.2430243,-201.6429313]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.4000392,-188.8457702],[292.9841794,-185.4588636]]).appendPoint([289.5972728,-171.8747234]).appendPoint([276.0131326,-175.26163]).appendPoint([279.4000392,-188.8457702]).close().innerToCAG()
).union(
    new CSG.Path2D([[264.7637645,-130.1428787],[278.3479047,-126.7559721]]).appendPoint([274.9609981,-113.1718319]).appendPoint([261.3768579,-116.5587385]).appendPoint([264.7637645,-130.1428787]).close().innerToCAG()
).union(
    new CSG.Path2D([[269.3602805,-148.5784975],[282.9444207,-145.1915909]]).appendPoint([279.5575141,-131.6074507]).appendPoint([265.9733739,-134.9943573]).appendPoint([269.3602805,-148.5784975]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.9567965,-167.0141163],[287.5409367,-163.6272097]]).appendPoint([284.1540301,-150.0430695]).appendPoint([270.5698899,-153.4299761]).appendPoint([273.9567965,-167.0141163]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.9897738,-120.6948841],[295.573914,-117.3079775]]).appendPoint([292.1870074,-103.7238373]).appendPoint([278.6028672,-107.1107439]).appendPoint([281.9897738,-120.6948841]).close().innerToCAG()
).union(
    new CSG.Path2D([[286.5862898,-139.1305029],[300.17043,-135.7435963]]).appendPoint([296.7835234,-122.1594561]).appendPoint([283.1993832,-125.5463627]).appendPoint([286.5862898,-139.1305029]).close().innerToCAG()
).union(
    new CSG.Path2D([[291.1828058,-157.5661217],[304.766946,-154.1792151]]).appendPoint([301.3800394,-140.5950749]).appendPoint([287.7958992,-143.9819815]).appendPoint([291.1828058,-157.5661217]).close().innerToCAG()
).union(
    new CSG.Path2D([[301.1511583,-119.0092552],[314.7352985,-115.6223486]]).appendPoint([311.3483919,-102.0382084]).appendPoint([297.7642517,-105.425115]).appendPoint([301.1511583,-119.0092552]).close().innerToCAG()
).union(
    new CSG.Path2D([[305.7476743,-137.444874],[319.3318145,-134.0579674]]).appendPoint([315.9449079,-120.4738272]).appendPoint([302.3607677,-123.8607338]).appendPoint([305.7476743,-137.444874]).close().innerToCAG()
).union(
    new CSG.Path2D([[310.3441903,-155.8804928],[323.9283305,-152.4935862]]).appendPoint([320.5414239,-138.909446]).appendPoint([306.9572837,-142.2963526]).appendPoint([310.3441903,-155.8804928]).close().innerToCAG()
).union(
    new CSG.Path2D([[322.126957,-124.6008443],[335.7110972,-121.2139377]]).appendPoint([332.3241906,-107.6297975]).appendPoint([318.7400504,-111.0167041]).appendPoint([322.126957,-124.6008443]).close().innerToCAG()
).union(
    new CSG.Path2D([[326.723473,-143.0364631],[340.3076132,-139.6495565]]).appendPoint([336.9207066,-126.0654163]).appendPoint([323.3365664,-129.4523229]).appendPoint([326.723473,-143.0364631]).close().innerToCAG()
).union(
    new CSG.Path2D([[331.319989,-161.4720819],[344.9041292,-158.0851753]]).appendPoint([341.5172226,-144.5010351]).appendPoint([327.9330824,-147.8879417]).appendPoint([331.319989,-161.4720819]).close().innerToCAG()
).union(
    new CSG.Path2D([[341.0464196,-121.9449198],[354.6305598,-118.5580132]]).appendPoint([351.2436532,-104.973873]).appendPoint([337.659513,-108.3607796]).appendPoint([341.0464196,-121.9449198]).close().innerToCAG()
).union(
    new CSG.Path2D([[345.6429356,-140.3805386],[359.2270758,-136.993632]]).appendPoint([355.8401692,-123.4094918]).appendPoint([342.256029,-126.7963984]).appendPoint([345.6429356,-140.3805386]).close().innerToCAG()
).union(
    new CSG.Path2D([[251.7713883,-156.5710486],[265.3555285,-153.184142]]).appendPoint([261.9686219,-139.6000018]).appendPoint([248.3844817,-142.9869084]).appendPoint([251.7713883,-156.5710486]).close().innerToCAG()
).union(
    new CSG.Path2D([[256.3679043,-175.0066674],[269.9520445,-171.6197608]]).appendPoint([266.5651379,-158.0356206]).appendPoint([252.9809977,-161.4225272]).appendPoint([256.3679043,-175.0066674]).close().innerToCAG()
).union(
    new CSG.Path2D([[247.1748723,-138.1354298],[260.7590125,-134.7485232]]).appendPoint([257.3721059,-121.164383]).appendPoint([243.7879657,-124.5512896]).appendPoint([247.1748723,-138.1354298]).close().innerToCAG()
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
    new CSG.Path2D([[142.5698899,-126.7559721],[156.1540301,-130.1428787]]).appendPoint([159.5409367,-116.5587385]).appendPoint([145.9567965,-113.1718319]).appendPoint([142.5698899,-126.7559721]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.9733739,-145.1915909],[151.5575141,-148.5784975]]).appendPoint([154.9444207,-134.9943573]).appendPoint([141.3602805,-131.6074507]).appendPoint([137.9733739,-145.1915909]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.3768579,-163.6272097],[146.9609981,-167.0141163]]).appendPoint([150.3479047,-153.4299761]).appendPoint([136.7637645,-150.0430695]).appendPoint([133.3768579,-163.6272097]).close().innerToCAG()
).union(
    new CSG.Path2D([[125.3438806,-117.3079775],[138.9280208,-120.6948841]]).appendPoint([142.3149274,-107.1107439]).appendPoint([128.7307872,-103.7238373]).appendPoint([125.3438806,-117.3079775]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.7473646,-135.7435963],[134.3315048,-139.1305029]]).appendPoint([137.7184114,-125.5463627]).appendPoint([124.1342712,-122.1594561]).appendPoint([120.7473646,-135.7435963]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.1508486,-154.1792151],[129.7349888,-157.5661217]]).appendPoint([133.1218954,-143.9819815]).appendPoint([119.5377552,-140.5950749]).appendPoint([116.1508486,-154.1792151]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.1824961,-115.6223486],[119.7666363,-119.0092552]]).appendPoint([123.1535429,-105.425115]).appendPoint([109.5694027,-102.0382084]).appendPoint([106.1824961,-115.6223486]).close().innerToCAG()
).union(
    new CSG.Path2D([[101.5859801,-134.0579674],[115.1701203,-137.444874]]).appendPoint([118.5570269,-123.8607338]).appendPoint([104.9728867,-120.4738272]).appendPoint([101.5859801,-134.0579674]).close().innerToCAG()
).union(
    new CSG.Path2D([[96.9894641,-152.4935862],[110.5736043,-155.8804928]]).appendPoint([113.9605109,-142.2963526]).appendPoint([100.3763707,-138.909446]).appendPoint([96.9894641,-152.4935862]).close().innerToCAG()
).union(
    new CSG.Path2D([[85.2066974,-121.2139377],[98.7908376,-124.6008443]]).appendPoint([102.1777442,-111.0167041]).appendPoint([88.593604,-107.6297975]).appendPoint([85.2066974,-121.2139377]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.6101814,-139.6495565],[94.1943216,-143.0364631]]).appendPoint([97.5812282,-129.4523229]).appendPoint([83.997088,-126.0654163]).appendPoint([80.6101814,-139.6495565]).close().innerToCAG()
).union(
    new CSG.Path2D([[76.0136654,-158.0851753],[89.5978056,-161.4720819]]).appendPoint([92.9847122,-147.8879417]).appendPoint([79.400572,-144.5010351]).appendPoint([76.0136654,-158.0851753]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.2872348,-118.5580132],[79.871375,-121.9449198]]).appendPoint([83.2582816,-108.3607796]).appendPoint([69.6741414,-104.973873]).appendPoint([66.2872348,-118.5580132]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.7616089,-190.9910872],[158.8244172,-198.0966243]]).appendPoint([165.9299543,-186.033816]).appendPoint([153.867146,-178.9282789]).appendPoint([146.7616089,-190.9910872]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.0933774,-198.0966243],[274.1561857,-190.9910872]]).appendPoint([267.0506486,-178.9282789]).appendPoint([254.9878403,-186.033816]).appendPoint([262.0933774,-198.0966243]).close().innerToCAG()
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

        
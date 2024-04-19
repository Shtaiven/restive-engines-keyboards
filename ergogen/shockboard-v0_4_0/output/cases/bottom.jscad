function _padded_fillet_extrude_1_outline_fn(){
    return new CSG.Path2D([[279.2455142,-201.948531],[145.5110276,-201.948531]]).appendArc([142.5492777,-200.9769349],{"radius":5,"clockwise":true,"large":false}).appendPoint([84.0758558,-157.9862959]).appendArc([83.0444281,-156.9669672],{"radius":5,"clockwise":true,"large":false}).appendPoint([68.5610395,-137.7468614]).appendArc([67.6028768,-134.0419208],{"radius":5,"clockwise":true,"large":false}).appendPoint([76.0817399,-73.7116752]).appendArc([80.3850942,-69.4497071],{"radius":5,"clockwise":true,"large":false}).appendPoint([115.4225228,-64.8703355]).appendArc([115.9856353,-64.8288895],{"radius":5,"clockwise":true,"large":false}).appendPoint([134.54327,-64.5138334]).appendArc([135.324009,-64.5617727],{"radius":5,"clockwise":true,"large":false}).appendPoint([163.0348229,-68.4562736]).appendArc([163.8596758,-68.6444831],{"radius":5,"clockwise":true,"large":false}).appendPoint([199.4388898,-80.0038106]).appendArc([200.9596082,-80.2406797],{"radius":5,"clockwise":false,"large":false}).appendPoint([223.7969336,-80.2406797]).appendArc([225.317652,-80.0038105],{"radius":5,"clockwise":false,"large":false}).appendPoint([260.8968659,-68.6444831]).appendArc([261.7217189,-68.4562736],{"radius":5,"clockwise":true,"large":false}).appendPoint([289.4325329,-64.5617727]).appendArc([290.2132718,-64.5138334],{"radius":5,"clockwise":true,"large":false}).appendPoint([308.7709065,-64.8288895]).appendArc([309.334019,-64.8703355],{"radius":5,"clockwise":true,"large":false}).appendPoint([344.3714476,-69.4497071]).appendArc([348.6748019,-73.7116752],{"radius":5,"clockwise":true,"large":false}).appendPoint([357.153665,-134.0419208]).appendArc([356.1955023,-137.7468614],{"radius":5,"clockwise":true,"large":false}).appendPoint([341.7121137,-156.9669672]).appendArc([340.680686,-157.986296],{"radius":5,"clockwise":true,"large":false}).appendPoint([282.2072641,-200.9769348]).appendArc([279.2455142,-201.948531],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = _padded_fillet_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        
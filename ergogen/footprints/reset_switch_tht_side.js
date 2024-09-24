// Copyright (c) 2024 Steven Eisinger
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: restive engines
//
// Description:
//  A through-hole side-actuated momentary switch, supplied by splitkb (ALPS SKHLACA010)
//
// Datasheet:
//  https://www.mouser.com/datasheet/2/15/SKHL-1370655.pdf
//
// Params:
//    side: default is F for Front
//      the side on which to place the single-side footprint and designator, either F or B
//    reversible: default is false
//      if true, it will include silkscreen on both Front and Back, if silkscreen is included.
//      because the footprint is through-hole and because it's only connecting RST to GND, the
//      pads are reversible in any case.
//    include_silkscreen: default is true
//      if true it will include silkscreen markings

module.exports = {
    params: {
        designator: 'RST', // for Button
        side: 'F',
        reversible: false,
        include_silkscreen: true,
        from: { type: 'net', value: 'GND' },
        to: { type: 'net', value: 'RST' },
    },
    body: p => {
        const common_start = `
            (module "restiveengines:reset_switch_tht_side" (layer ${p.side}.Cu) (tedit 5B9559E6) (tstamp 61905781)
                ${p.at /* parametric position */}
                (fp_text value "reset_switch_tht_side" (at 0 -2.55 ${p.r}) (layer ${p.side}.Fab) (effects (font (size 1 1) (thickness 0.15))))
                (fp_text reference "${p.ref}" (at 0 2.55 ${90 + p.r}) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            `
        const silkscreen_front = `
                (fp_text user "RST" (at 0 0 ${p.r}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
                (fp_rect (start -3.65 -3.25) (end 3.65 2.25) (width 0.12) (fill none) (layer F.SilkS))
            `
        const silkscreen_back = `
                (fp_text user "RST" (at 0 0 ${p.r}) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
                (fp_rect (start -3.65 -3.25) (end 3.65 2.25) (width 0.12) (fill none) (layer B.SilkS))
                `
        const common_end = `
                (fp_rect (start -1.5 -4.97) (end 1.5 -3.25) (width 0.12) (fill none) (layer Dwgs.User))
                (pad 1 thru_hole circle (at 2.5 -1.25 ${p.r}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.from.str})
                (pad 2 thru_hole circle (at -2.5 -1.25 ${p.r}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.to.str})
                (pad "" thru_hole circle (at 3.5 1.25 ${p.r}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask))
                (pad "" thru_hole circle (at -3.5 1.25 ${p.r}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask))
            )
        `

        let final = common_start;
        if (p.side == "F" || p.reversible) {
            if (p.include_silkscreen) {
                final += silkscreen_front
            }
        }
        if (p.side == "B" || p.reversible) {
            if (p.include_silkscreen) {
                final += silkscreen_back
            }
        }
        final += common_end;
        return final;
    }
}

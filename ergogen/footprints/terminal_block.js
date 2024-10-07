// Copyright (c) 2024 Steven Eisinger
//
// SPDX-License-Identifier: CC-BY-NC-SA-4.0
//
// To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
//
// Author: @restiveengines
//
// Description:
//  Footprint for a low-profile 9-pin terminal block
//
// Pinout and schematics:
//  https://nl.rs-online.com/web/p/pcb-terminal-blocks/2204333
//
// Params:
//    side: default is F for Front
//      the side on which to place the single-side footprint and designator, either F or B
//    pitch: pitch between pins in mm
//    include_labels: default is true
//      if true it will include the pin labels on the Silkscreen layer
//    label_side: default is top
//      either 'top' or 'bottom'
//

module.exports = {
  params: {
    designator: 'TERMINAL',
    side: 'F',
    pitch: 2.54,
    include_labels: true,
    label_side: 'top',
    RAW: { type: 'net', value: 'RAW'},
    VCC: { type: 'net', value: 'VCC' },
    GND: { type: 'net', value: 'GND' },
    D0: { type: 'net', value: 'D0' },
    D1: { type: 'net', value: 'D1' },
    D2: { type: 'net', value: 'D2' },
    D3: { type: 'net', value: 'D3' },
    D4: { type: 'net', value: 'D4' },
    D5: { type: 'net', value: 'D5' },
  },
  body: p => {
    let socket_nets = [
      p.RAW,
      p.VCC,
      p.GND,
      p.D0,
      p.D1,
      p.D2,
      p.D3,
      p.D4,
      p.D5,
    ];

    local_nets = [
      p.local_net("1"),
      p.local_net("2"),
      p.local_net("3"),
      p.local_net("4"),
      p.local_net("5"),
      p.local_net("6"),
      p.local_net("7"),
      p.local_net("8"),
      p.local_net("9"),
    ];

    let start_pos_x = -p.pitch*socket_nets.length/2;

    const top = `
      (module "restiveengines:terminal_block" (layer ${p.side}.Cu) (tedit 6448AF5B)
      ${p.at /* parametric position */}
      (attr virtual)
      (fp_text reference "${p.ref}" (at 0 20 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text user %R (at 0 20 ${p.rot}) (layer ${p.side}.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
    `;

    let label_justify = `(justify`;
    if (p.label_side === 'top') {
      label_justify += ' left';
    } else {
      label_justify += ' right';
    }
    if (p.side === 'B') {
      label_justify += ' mirror';
    }
    label_justify += ')';

    let label_pos = 13.2;
    if (p.label_side === 'bottom') {
      label_pos = 20.2;
    }

    let labels = '';
    let pads = '';
    for (let i = 0; i < socket_nets.length; ++i) {
      let net_name = `D${i-3}`
      if (i === 0) {
        net_name = "RAW";
      } else if (i === 1) {
        net_name = "VCC";
      } else if (i === 2) {
        net_name = "GND";
      }
      labels += `
      (fp_text user ${net_name} (at ${start_pos_x + i*p.pitch} ${label_pos} ${p.rot + 90}) (layer ${p.side}.SilkS)
        (effects (font (size 1 1) (thickness 0.15)) ${label_justify})
      )
      `;
      pads += `
      (pad ${i+1} thru_hole circle (at ${start_pos_x + i*p.pitch} 16.7 ${270 + p.rot})
        (size 1.8 1.8) (drill 1.1) (layers *.Cu *.Mask) ${socket_nets[i]}
      )
      (pad "" np_thru_hole circle (at ${start_pos_x + i*p.pitch} 19.24 ${270 + p.rot}) (size 1.1 1.1) (drill 1.1) (layers *.Cu *.Mask))
      `;
    }

    const outlines = `
      (fp_line (start ${start_pos_x - 1.5} 13.6) (end ${start_pos_x - 1.5} 19.8) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.5} 19.8) (end ${start_pos_x - 1.5} 19.8) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.5} 13.6) (end ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.5} 19.8) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.5} 13.6) (end ${start_pos_x - 1.5} 13.6) (layer ${p.side}.SilkS) (width 0.12))
      (fp_line (start ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.91} 13.2) (end ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.91} 20.2) (layer ${p.side}.CrtYd) (width 0.15))
      (fp_line (start ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.91} 20.2) (end ${start_pos_x - 1.91} 20.2) (layer ${p.side}.CrtYd) (width 0.15))
      (fp_line (start ${start_pos_x - 1.91} 20.2) (end ${start_pos_x - 1.91} 13.2) (layer ${p.side}.CrtYd) (width 0.15))
      (fp_line (start ${start_pos_x - 1.91} 13.2) (end ${start_pos_x + p.pitch*(socket_nets.length-1) + 1.91} 13.2) (layer ${p.side}.CrtYd) (width 0.15))
    `;

    const bottom = ")";

    let final = top
    if (p.include_labels) {
      final += labels;
    }
    final += outlines + pads + bottom;

    return final;
  }
}
module.exports = {
    params: {
        designator: 'VIK_OUT',
        side: "F",
        V3V: { type: 'net', value: 'V3V' },
        GND: { type: 'net', value: 'GND' },
        SDA: { type: 'net', value: 'SDA' },
        SCL: { type: 'net', value: 'SCL' },
        RGB_LED_OUT: { type: 'net', value: 'RGB_LED_OUT' },
        V5V: { type: 'net', value: 'V5V' },
        GPIO1: { type: 'net', value: 'GPIO1' },
        MOSI: { type: 'net', value: 'MOSI' },
        GPIO2: { type: 'net', value: 'GPIO2' },
        SPI_CS: { type: 'net', value: 'SPI_CS' },
        MISO: { type: 'net', value: 'MISO' },
        SCLK: { type: 'net', value: 'SCLK' }
    },
    body: p => `
    (module "vik-keyboard-connector-horizontal" (version 20210722) (generator pcbnew)
        (layer "F.Cu")
        ${p.at /* parametric position */}

        ${''/* footprint reference */}
        (fp_text reference "${p.ref}" (at 4.25 -3.5 unlocked) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 6a24f8c0-aeb6-4acc-9c9e-28fc44782c17)
        )

        ${''/* footprint symbols */}
        (fp_text value "vik-keyboard-connector-horizontal" (at 0.05 5.09 unlocked) (layer "F.Fab")
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp c70d6d6a-d6fc-495d-9524-6faba107174f)
        )
        (fp_text user "3v3" (at -5.9 -2.7 unlocked) (layer "F.SilkS")
            (effects (font (size 0.75 0.75) (thickness 0.15)) (justify left bottom))
            (tstamp 406371b3-d729-4746-a81f-a7e7bae453e6)
        )
        (fp_text user "VIK OUT" (at -3.05 -3.48 unlocked) (layer "F.SilkS" knockout)
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 680dee3f-61a6-4e55-8e3f-51c2eda13336)
        )
        (fp_text user "C479750" (at 0 0.75) (layer "User.2")
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp f5c1073f-d475-4492-a36d-fb0b7148e8a1)
        )
        (fp_line (start -5.5 -2.2) (end -3.131 -2.2)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp e9c3c16c-d370-46bb-8ec2-bcf5a670a865))
        (fp_line (start -5.5 -0.539) (end -5.5 -2.2)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp 432687d1-f599-4763-a3a1-716eb5338f19))
        (fp_line (start -5.5 4.295) (end -5.5 1.912)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp 500be781-dcbb-4d71-aa39-5dc1c0b2a28b))
        (fp_line (start 5.5 -2.2) (end 3.131 -2.2)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp d62be2f6-d1e3-4136-a34b-7d2f16211654))
        (fp_line (start 5.5 -0.539) (end 5.5 -2.2)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp aff7b656-725d-4a36-bd1d-dfb618d9818f))
        (fp_line (start 5.5 4.295) (end -5.5 4.295)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp 60ebbfd5-fbba-4ecf-91e2-3418f75fdb23))
        (fp_line (start 5.5 4.295) (end 5.5 1.912)
            (stroke (width 0.254) (type solid)) (layer "F.SilkS") (tstamp 6bfda8d1-d217-4924-ba4e-8c2698453f37))
        (fp_circle (center -3.429 -2.708) (end -3.302 -2.708)
            (stroke (width 0.254) (type solid)) (fill none) (layer "F.SilkS") (tstamp 23c8b252-36ac-4d51-ab48-29ba0dc7cb7f))
        (fp_line (start -3.5 2) (end -3.5 4.5)
            (stroke (width 0.12) (type default)) (layer "Cmts.User") (tstamp 4ea22fb2-74e3-4048-bbfa-0116ba82c802))
        (fp_line (start 3.5 2) (end 3.5 4.5)
            (stroke (width 0.12) (type default)) (layer "Cmts.User") (tstamp 5942cc9a-20b1-4fc9-ba6f-30ad255b531b))

        ${''/* SMD pads */}
        (pad "1" smd rect (at -2.75 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.V3V.str})
        (pad "2" smd rect (at -2.25 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str})
        (pad "3" smd rect (at -1.75 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.SDA.str})
        (pad "4" smd rect (at -1.25 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.SCL.str})
        (pad "5" smd rect (at -0.75 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.RGB_LED_OUT.str})
        (pad "6" smd rect (at -0.25 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.V5V.str})
        (pad "7" smd rect (at 0.25 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GPIO1.str})
        (pad "8" smd rect (at 0.75 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.MOSI.str})
        (pad "9" smd rect (at 1.25 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GPIO2.str})
        (pad "10" smd rect (at 1.75 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.SPI_CS.str})
        (pad "11" smd rect (at 2.25 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.MISO.str})
        (pad "12" smd rect (at 2.75 -2.038) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.SCLK.str})
        (pad "" smd rect (at 4.55 0.686) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask"))
        (pad "" smd rect (at -4.55 0.686) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask"))
    )
    `
}
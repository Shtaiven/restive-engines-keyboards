module.exports = {
    params: {
        designator: 'VIK_THROUGHHOLE',
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
    (module "vik-keyboard-throughhole" (version 20210722) (generator pcbnew)
        (layer "F.Cu")
        ${p.at /* parametric position */}

        ${''/* footprint reference */}
        (fp_text reference "${p.ref}" (at 1.08 -0.5 unlocked) (layer "F.SilkS") ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 6a24f8c0-aeb6-4acc-9c9e-28fc44782c17)
        )

        ${''/* footprint symbols */}
        (fp_text value "vik-keyboard-throughole" (at 2.16 1 unlocked) (layer "F.Fab") hide
            (effects (font (size 1 1) (thickness 0.15)))
            (tstamp 36098acb-a4d3-48cf-9968-60aad765d2f9)
        )
        (fp_text user "SDA" (at -1.86 -2.97 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 21efb994-0217-46ac-bfe0-0999afc9cf76)
        )
        (fp_text user "MISO" (at 8.3 -2.87 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 275bf651-2d8f-4070-8109-86d17f385192)
        )
        (fp_text user "3.3V" (at -4.4 -2.77 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 2f90b66a-007d-4f47-a3f2-d8b30d4c288d)
        )
        (fp_text user "MOSI" (at 3.22 6.17 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 70f7aedb-93de-4fa6-bf4f-04437f5a0f54)
        )
        (fp_text user "SCLK" (at 8.3 6.27 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 744b139f-0d05-4839-aa34-c34f851b8c63)
        )
        (fp_text user "SPI CS" (at 5.76 7.67 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp 9e97d068-77ee-4d3a-9b9c-8d886d830744)
        )
        (fp_text user "RGB" (at 0.68 -2.97 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp a51a2213-6f61-401d-8cd8-1218b3b2e263)
        )
        (fp_text user "GP AD2" (at 5.76 -2.87 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp aa396028-b86e-40e1-be35-000ada6b6c8e)
        )
        (fp_text user "5V" (at 0.68 4.97 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp bf9baf8e-5fc6-4b96-9f7f-9f49d0b2dc27)
        )
        (fp_text user "SCL" (at -1.86 5.47 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp c5f68e0b-f0de-4158-8a10-fc73c9d31a15)
        )
        (fp_text user "GND" (at -4.4 5.67 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp d44eca05-6b62-4d42-817d-81bf87e6a833)
        )
        (fp_text user "GP AD1" (at 3.22 -2.97 90 unlocked) (layer "F.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp df40c44f-6991-4248-9d0f-fd6df1f41818)
        )
        (fp_text user "VIK OUT" (at -7.02 2.99 90 unlocked) (layer "F.SilkS" knockout)
            (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            (tstamp f5c52d25-13ac-4f45-b650-8a223554b140)
        )

        ${''/* thru hole pads */}
        (pad "1" thru_hole circle (at -5 -1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.V3V.str})
        (pad "2" thru_hole circle (at -5 1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.GND.str})
        (pad "3" thru_hole circle (at -2.46 -1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.SDA.str})
        (pad "4" thru_hole circle (at -2.46 1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.SCL.str})
        (pad "5" thru_hole circle (at 0.08 -1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.RGB_LED_OUT.str})
        (pad "6" thru_hole circle (at 0.08 1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.V5V.str})
        (pad "7" thru_hole circle (at 2.62 -1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.GPIO1.str})
        (pad "8" thru_hole circle (at 2.62 1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.MOSI.str})
        (pad "9" thru_hole circle (at 5.16 -1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.GPIO2.str})
        (pad "10" thru_hole circle (at 5.16 1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.SPI_CS.str})
        (pad "11" thru_hole circle (at 7.7 -1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.MISO.str})
        (pad "12" thru_hole circle (at 7.7 1.27) (size 1.5 1.5) (drill 1.1) (layers "*.Cu" "*.Mask") ${p.SCLK.str})
    )
    `
}
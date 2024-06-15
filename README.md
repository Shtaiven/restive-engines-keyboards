# shockboard

## Introduction

The shockboard is a monoblock split columnar-staggered keyboard inspired by boards such as the corne, Lily58, Le Chiffre, and others. It is designed based on my own finger positions, with a thumb cluster that is comfortable for my smaller hands while resting in what I consider a neutral position. A monoblock design has been chosen easy portability and setup.

## Manufacturing

### PCB manufacture

See `pcbs/shockboard_v1/shockboard_v1.zip` for files containing pcb fabrication files for each keyboard revision. This zip file can be uploaded to JLCPCB for manufacturing.

### Case manufacture

Only case files for MX switches are currently available in the cases folder.

To print the high profile MX case you will need:

* `cases/shockboard_v1/case_hipro_mx/case_hipro_mx_bottom.stl`
* `cases/shockboard_v1/case_hipro_mx/case_hipro_mx_top.stl`
* `cases/shockboard_v1/pcb_spacer.stl`

These files are provided in both `stl` and `3mf` variants, as well as split into left and right for smaller printers.

## Assembly

### PCB assembly

Materials:

* 1x shockboard PCB
* 1x pro-micro pin compatible microcontroller (nice!nano recommended)
* Mill Max low profile sockets for your micricontroller (see [How do I socket a microcontroller?](https://docs.splitkb.com/hc/en-us/articles/360011263059-How-do-I-socket-a-microcontroller))
* 1x SKHLACA010 footprint compatible button
* 1x MSK12C02 footprint compatible switch
* 52x 1N4148W diodes (SOD-123 surface mount or through-hole)
* 52x CPG151101S11 Kailh hotswap sockets
* 52x MX compatible keyboard switches
* 52x MX compatible keycaps
* 1x SSD1306 OLED display with male and female header pins (optional)
* 1x 301230 LiPo battery with 2-pin JST connector (optional for wireless microcontroller)
* 1x JST 2-pin jack (optional for wireless microcontroller)

Assembling the PCB:

1. Solder the diodes to the back of the PCB (the side with the picture of the cat on it).
2. Solder the Kailh hotswap sockets to the back of the PCB. The hotswap sockets should be oriented such that the bumps fit through the holes and the metal contacts rest on the solder pads.
3. Solder Mill Max low profile female headers to the top side of the PCB in the middle for the microcontroller pins. See [here](https://docs.splitkb.com/hc/en-us/articles/360011263059-How-do-I-socket-a-microcontroller).
4. Socket your microcontroller such that the PCB will lie with its components face-down when attached to the PCB. The microcontroller will be attached from the top of the pcb, so match up the pin labels with those you see on the silkscreen there. See [here](https://docs.splitkb.com/hc/en-us/articles/360011263059-How-do-I-socket-a-microcontroller).
5. Solder the SKHLACA010 button (reset button) to the top of the PCB to the left of the microcontroller.
6. Solder the MSK12C02 switch (power switch) to the top right corner of the PCB.
7. (optional) Solder the 2-pin JST connector to the top side of the board to the right of the microcontroller.
8. (optional) Solder the female headers for the OLED screen to the top side of the board below the microcontroller.
9. (optional) Install the battery into the JST connector and lay in down between the Mill Max headers where the microcontroller will be placed. Make sure that the red battery lead is connected to the left side of the JST jack (marked +) and the black lead is connected to the right side of the JST jack (marked -).
10. Insert the socketed microcontroller with the components faces away from you to the Mill Max sockets.
11. (optional) Insert the OLED display with the pins on the bottom into the female headers.

### Case assembly

Materials:

* 1x case bottom
* 1x case top
* 1x PCB spacer
* 8x m2x8mm screws
* 8x m2 heat-set inserts

Assembling the case:

1. Using a soldering iron, press in the heat-set inserts into the holes of the case bottom from the top-side such that the screws can be screwed in from the top.
2. Create a sandwich with the pieces in the following order from bottom to top:
    1. Case bottom
    2. PCB
    3. PCB spacer
    4. Case top
3. Align the 8 holes of all 4 pieces and screw in the 8 m2 screws from the top of the case until reasonable tight.
4. Insert your favorite switches and keycaps and upload, your keyboard firmware, and enjoy!

## Firmware

This keyboard shield has been build with bluetooth-enabled pro-micro compatible boards in mind, like the [nice!nano](https://nicekeyboards.com/nice-nano/).

[ZMK](https://zmk.dev/) support has been added as an [external module](https://zmk.dev/docs/development/build-flash#building-with-external-modules) in my [zmk-config](https://github.com/Shtaiven/shockboard-zmk-config).

For an example of using this with the [miryoku](https://github.com/manna-harbour/miryoku/) layout, see [here](https://github.com/Shtaiven/miryoku_zmk/blob/master/.github/workflows/build.yml).

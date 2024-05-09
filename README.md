# shockboard

## Introduction

The shockboard is a split columnar-staggered keyboard inspired by boards such as the CRKBD (corne), Lily58, Sofle, and others. It is designed based on my own finger positions, with a thumb cluster that is comfortable for my smaller hands while resting in what I consider a neutral position. A monoblock design has been chosen easy portability and setup.

## Manufacturing the keyboard

The repository contains `pcbs/{revision}/{revision}.zip` files containing pcb fabrication files for each keyboard revision. This zip file can be uploaded to JLCPCB for manufacturing.

## Firmware

This keyboard shield has been build with bluetooth-enabled pro-micro compatible boards in mind, like the [nice!nano](https://nicekeyboards.com/nice-nano/).

[ZMK](https://zmk.dev/) support has been added as an [external module](https://zmk.dev/docs/development/build-flash#building-with-external-modules) in my [zmk-config](https://github.com/Shtaiven/shockboard-zmk-config).

For an example of using this with the [miryoku](https://github.com/manna-harbour/miryoku/) layout, see [here](https://github.com/Shtaiven/miryoku_zmk/blob/master/.github/workflows/build.yml).

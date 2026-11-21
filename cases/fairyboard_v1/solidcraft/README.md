# Fairyboard v1 case — SolidCraft recreation

SolidCraft rebuild of the `slim_case_with_walls` print parts (`../slim_case_with_walls/*.stl`),
generated from `../cad/*.scad` with the `assembly.scad` defaults: low profile case, Choc v1,
heatset inserts, outer wall, PCB_thickness 1.6.

| Part | Design | Exports | Volume vs. original STL |
|---|---|---|---|
| Bottom case | `fairyboard_bottom_case.sc` | `bottom_case.step/.stl` | 93496 vs 93488 mm³, all surfaces within 0.1 mm |
| Center window | `fairyboard_center_window.sc` | `center_window.step/.stl` | 5530 vs 5529 mm³, all surfaces within 0.016 mm |

Coordinates match the OpenSCAD outputs: the bottom case spans z −6 → 3.8 (PCB seat at z 0) and the window spans z 0 → 11.5.

## Outline sources
- `pcb_edge_cuts.dxf`: KiCad Edge.Cuts from `pcbs/fairyboard_v1/fairyboard/fairyboard.kicad_pcb`,
  moved into the SCAD frame by `kicad_edge_cuts_to_dxf.py <pcb> <out.dxf> -211.7326 158.6689`.
  OpenSCAD's `pcb_outline()` is this outline grown by 0.075 mm (half the 0.15 mm stroke), so the
  design applies the `edge_stroke` parameter in its sketch offsets.
- `case_outer_wall.dxf`: outline offset by +1.975 mm (0.075 + 0.3 tol + 1.6 wall), made by
  `offset_outline.py pcb_edge_cuts.dxf case_outer_wall.dxf 1.975`. SolidCraft's sketch offset
  refuses this distance because the r≈1.1 concave corners collapse, so the script mitres them
  like OpenSCAD `offset(delta=)` does. It also removes 0.075 mm sliver edges and makes the arcs
  exactly tangent, which the fillet kernel needs. If `wall` or `tol` changes, regenerate this
  file and replace the OuterWallSketch geometry.

SolidCraft only reads files from its own folders, so copy the DXFs into its MCP temp/recovery folder
before inserting them again.

## Differences from the SCAD
- The hotswap/diode clearance cutouts in the floor rim are left out on purpose: the 2 mm floor pocket already clears them.
- The window lip join begins 0.3 mm lower inside the solid, which gives the same shape. A join that started exactly on the fillet's tangent line failed in the kernel.
- The screen chamfer is lofted from z 10.72 rather than SCAD's 10.73. The 0.01 mm hull slab step is left out.

## Assembly (`fairyboard_assembly.sc`, `fairyboard_assembly.step`)
The parts are linked from `fairyboard_bottom_case.sc`, `fairyboard_center_window.sc`, `fairyboard_pcb.sc` and
`fairyboard_plate.sc` (the plate is inserted twice). The PCB and plate designs were built in SolidCraft from the
fabrication Gerbers and drill files (`file.insert_gerber`), using the outline and drills only. The main board's
silkscreen has more than 200k primitives and was too large to import.

| Part | Placement |
|---|---|
| bottom case | origin (z −6 → 3.8) |
| PCB, 1.2 mm (`pcb_t`) | rests on the bottom case ledge at z 0; XY shifted so its 16 M2 holes sit on the case holes |
| plate ×2, 1.6 mm (`plate_t`) | `plate_gap` 1 mm above the PCB top (top_case.scad `wall_height` for Choc v1) → z 2.2 → 3.8, flush with the case's top edge; left copy as is, right copy turned over (180° about Y) |
| center window | rests on the case lip: z = max(`pcb_t`, `case_top` − 2.2) = 1.6, base top flush at 3.8 |

All 16 screw holes line up within 0.0006 mm (the drill files' rounding), and rays through every hole pass all
parts. No parts interfere.

Main PCB holes in the SCAD's `pcb_outline` frame sit 0.0185 mm off the case/ergogen holes. The assembly lines up the
holes and accepts that offset at the PCB edge, which has 0.3 mm of clearance.

The plates, the window base and the case's top edge are all flush at z 3.8. Under the window's base there is a
0.4 mm gap above the PCB: the window rests on the case lip, and its raised section overhangs the PCB edge, so it
cannot sit any lower.

The links point at SolidCraft's temp folder, the only folder it may read. The bodies are stored in the assembly,
so it still opens after those files are gone. Relink to these files if you want updates to carry over.

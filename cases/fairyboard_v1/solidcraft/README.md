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

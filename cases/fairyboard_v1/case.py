# %%
from pathlib import Path
from build123d import *
from ocp_vscode import *
import ezdxf
from ezdxf.addons.drawing import Frontend, RenderContext, svg, layout

set_port(3939)


# %%
def export_to_svg(dxf_path: str | Path, svg_path: str | Path = "output.svg") -> None:
    doc = ezdxf.readfile(str(dxf_path))
    msp = doc.modelspace()
    context = RenderContext(doc)
    backend = svg.SVGBackend()
    frontend = Frontend(context, backend)
    frontend.draw_layout(msp)
    page = layout.Page(297, 210, layout.Units.mm, margins=layout.Margins.all(20))
    svg_string = backend.get_string(page)
    with open(str(svg_path), "wt", encoding="utf8") as fp:
        fp.write(svg_string)


# %%
length, width, thickness = 80.0, 60.0, 10.0
ex1 = Box(length, width, thickness)
show(ex1)

# %%
# create an svg
board_dxf_file = (
    Path(__file__).parent.parent.parent
    / "ergogen"
    / "fairyboard_v1"
    / "output"
    / "outlines"
    / "board.dxf"
)
board_svg_file = Path(__file__).parent / "board.svg"
export_to_svg(board_dxf_file, board_svg_file)

board = import_svg(board_svg_file)

show(board[3])

# %%

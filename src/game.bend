import Base
import ./world.bend as W
import ./copy.bend as C

# The whole public surface of the Bend core, as seen from JavaScript.
# Everything below is pure: no IO, no windows, no hidden state.

def layout() -> W.Layout:
  W.layout()

def slide(x: U32, y: U32, nx: U32, ny: U32) -> W.Vec:
  W.slide(W.Vec{x, y}, nx, ny)

def focus(x: U32, y: U32) -> W.Near:
  W.find(x, y)

def reach2() -> U32:
  W.reach2()

def ui() -> C.Copy:
  C.ui()

def story() -> List<C.Line>:
  C.story()

def projects() -> List<C.Proj>:
  C.projects()

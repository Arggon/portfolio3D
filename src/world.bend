import Base

# Arggon Labs, after hours.
# All coordinates are centimetres, origin at the top-left corner of the room.
# x grows to the right, y grows towards the entrance (south).

type Vec is Data:
  Vec{x: U32, y: U32}

type Desk is Data:
  Desk{id: U32, x: U32, y: U32, w: U32, h: U32, hue: U32, side: U32}

type Prop is Data:
  Prop{kind: U32, x: U32, y: U32, w: U32, h: U32, rot: U32}

type Room is Data:
  Room{w: U32, h: U32}

type Near is Data:
  Near{found: Bool, idx: U32, d2: U32, can: Bool}

type Layout is Type:
  Layout{room: Room, start: Vec, desks: +List<Desk>, props: List<Prop>, palette: List<U32>}

# ---------- constants ----------

def room_w() -> U32:
  2400

def room_h() -> U32:
  1600

def margin() -> U32:
  50

def radius() -> U32:
  38

def reach() -> U32:
  250

def reach2() -> U32:
  (reach() * reach() : U32)

def room() -> Room:
  Room{room_w(), room_h()}

def start() -> Vec:
  Vec{900, 1410}

# ---------- small helpers ----------

def pick_u32(c: Bool, +x: U32, +y: U32) -> U32:
  match c:
    case True{}:
      x
    case False{}:
      y

def pick_vec(c: Bool, +x: Vec, +y: Vec) -> Vec:
  match c:
    case True{}:
      x
    case False{}:
      y

def pick_near(c: Bool, +x: Near, +y: Near) -> Near:
  match c:
    case True{}:
      x
    case False{}:
      y

def gap(+a: U32, +b: U32) -> U32:
  hi = pick_u32(U32.is_ge(a, b), a, b)
  lo = pick_u32(U32.is_gt(a, b), b, a)
  U32.sub(hi, lo)

def clamp_axis(+v: U32, +lo: U32, +hi: U32) -> U32:
  pick_u32(U32.is_lt(v, lo), lo, pick_u32(U32.is_gt(v, hi), hi, v))

# ---------- furniture ----------

def Desk.list() -> +List<Desk>:
  Desk{0, 380, 270, 300, 120, 3526911, 0}
  <> Desk{1, 380, 740, 300, 120, 16732067, 0}
  <> Desk{2, 380, 1210, 300, 120, 16757575, 0}
  <> Desk{3, 1720, 270, 300, 120, 7069818, 1}
  <> Desk{4, 1720, 740, 300, 120, 10189823, 1}
  <> Desk{5, 1720, 1210, 300, 120, 16743004, 1}
  <> Nil{}

def Prop.list() -> List<Prop>:
  # kind 0: reception, 1: sofa, 2: coffee table, 3: plant, 4: bookshelf, 5: cooler
  Prop{0, 1000, 1120, 400, 120, 0}
  <> Prop{1, 1040, 120, 320, 140, 0}
  <> Prop{2, 1120, 310, 160, 90, 0}
  <> Prop{3, 90, 90, 90, 90, 0}
  <> Prop{3, 2220, 90, 90, 90, 0}
  <> Prop{3, 90, 1420, 90, 90, 0}
  <> Prop{3, 2220, 1420, 90, 90, 0}
  <> Prop{4, 70, 430, 70, 420, 0}
  <> Prop{5, 2250, 760, 80, 80, 0}
  <> Nil{}

def palette() -> List<U32>:
  3526911
  <> 16732067
  <> 16757575
  <> 7069818
  <> 10189823
  <> 16743004
  <> 15262678
  <> 3046911
  <> Nil{}

def layout() -> Layout:
  Layout{room(), start(), Desk.list(), Prop.list(), palette()}

# ---------- collision ----------

def Prop.hit(p: Prop, +x: U32, +y: U32) -> Bool:
  match p:
    case Prop{_, +px, +py, +pw, +ph, _}:
      +r = radius()
      Bool.and(
        Bool.and(
          U32.is_gt(U32.add(x, r), px),
          U32.is_lt(x, U32.add(U32.add(px, pw), r))),
        Bool.and(
          U32.is_gt(U32.add(y, r), py),
          U32.is_lt(y, U32.add(U32.add(py, ph), r))))

def inside_props(+x: U32, +y: U32, ps: List<Prop>) -> Bool:
  match ps:
    case Nil{}:
      False{}
    case Con{p, rest}:
      Bool.or(Prop.hit(p, x, y), inside_props(x, y, rest))

def try_x(+px: U32, +py: U32, +nx: U32) -> Vec:
  Vec{pick_u32(inside_props(nx, py, Prop.list()), px, nx), py}

def try_y(+x: U32, +y: U32, +ny: U32) -> U32:
  pick_u32(inside_props(x, ny, Prop.list()), y, ny)

# Slide the avatar from (x, y) towards (nx, ny), one axis at a time,
# clamped to the room and pushed out of every piece of furniture.
def slide.after(vy: U32, ay: U32, p: Vec) -> Vec:
  match p:
    case Vec{+qx, +qy}:
      Vec{qx, try_y(qx, qy, ay)}

def slide(v: Vec, nx: U32, ny: U32) -> Vec:
  match v:
    case Vec{vx, +vy}:
      ax = clamp_axis(nx, margin(), U32.sub(room_w(), margin()))
      ay = clamp_axis(ny, margin(), U32.sub(room_h(), margin()))
      slide.after(vy, ay, try_x(vx, vy, ax))

# ---------- focus ----------

def Desk.d2(d: Desk, +x: U32, +y: U32) -> U32:
  match d:
    case Desk{_, +px, +py, +pw, +ph, _, _}:
      cx = U32.add(px, U32.div(pw, 2))
      cy = U32.add(py, U32.div(ph, 2))
      +dx = gap(cx, x)
      +dy = gap(cy, y)
      U32.add(U32.mul(dx, dx), U32.mul(dy, dy))

def Near.update(best: Near, i: U32, +d2: U32) -> Near:
  match best:
    case Near{found, bidx, +bd2, bcan}:
      pick_near(
        U32.is_lt(d2, bd2),
        Near{True{}, i, d2, U32.is_lt(d2, reach2())},
        Near{found, bidx, bd2, bcan})

def scan(ds: +List<Desk>, +i: U32, +x: U32, +y: U32, best: Near) -> Near:
  match ds:
    case Nil{}:
      best
    case Con{d, rest}:
      +d2 = Desk.d2(d, x, y)
      scan(rest, U32.add(i, 1), x, y, Near.update(best, i, d2))

def find(x: U32, y: U32) -> Near:
  scan(Desk.list(), 0, x, y, Near{False{}, 0, 4294967295, False{}})

# ---------- invariants used by LAWS.bend ----------

def inside_room(+x: U32, +y: U32) -> Bool:
  Bool.and(
    Bool.and(U32.is_ge(x, margin()), U32.is_le(x, U32.sub(room_w(), margin()))),
    Bool.and(U32.is_ge(y, margin()), U32.is_le(y, U32.sub(room_h(), margin()))))

def Desk.in_room(d: Desk) -> Bool:
  match d:
    case Desk{_, +px, +py, +pw, +ph, _, _}:
      Bool.and(
        U32.is_ge(px, margin()),
        Bool.and(
          U32.is_le(U32.add(px, pw), U32.sub(room_w(), margin())),
          Bool.and(
            U32.is_ge(py, margin()),
            U32.is_le(U32.add(py, ph), U32.sub(room_h(), margin())))))

def Desk.overlaps(a: Desk, b: Desk) -> Bool:
  match a:
    case Desk{_, +ax, +ay, +aw, +ah, _, _}:
      match b:
        case Desk{_, +bx, +by, +bw, +bh, _, _}:
          Bool.and(
            U32.is_lt(ax, U32.add(bx, bw)),
            Bool.and(
              U32.is_lt(bx, U32.add(ax, aw)),
              Bool.and(
                U32.is_lt(ay, U32.add(by, bh)),
                U32.is_lt(by, U32.add(ay, ah)))))

def Desk.clear_one(+d: Desk, rest: +List<Desk>) -> Bool:
  match rest:
    case Nil{}:
      True{}
    case Con{e, more}:
      Bool.and(Bool.not(Desk.overlaps(d, e)), Desk.clear_one(d, more))

def Desks.clear(ds: +List<Desk>) -> Bool:
  match ds:
    case Nil{}:
      True{}
    case Con{d, +rest}:
      Bool.and(Desk.clear_one(d, rest), Desks.clear(rest))

def Desks.ids(ds: +List<Desk>, +i: U32) -> Bool:
  match ds:
    case Nil{}:
      True{}
    case Con{d, rest}:
      match d:
        case Desk{id, _, _, _, _, _, _}:
          Bool.and(U32.is_eq(id, i), Desks.ids(rest, U32.add(i, 1)))

def Desks.all_in_room(ds: +List<Desk>) -> Bool:
  match ds:
    case Nil{}:
      True{}
    case Con{d, rest}:
      Bool.and(Desk.in_room(d), Desks.all_in_room(rest))

def start_clear.at(v: Vec) -> Bool:
  match v:
    case Vec{+x, +y}:
      Bool.and(inside_room(x, y), Bool.not(inside_props(x, y, Prop.list())))

def start_clear() -> Bool:
  start_clear.at(start())

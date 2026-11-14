import Base
import ./src/world.bend as W
import ./src/copy.bend as C

# The office must fit its own room, the six stations must not overlap,
# and the player must spawn on free floor.
law six_desks:
  {List.length(&2, W.Desk, W.Desk.list()) == 6n : Nat}

law desk_ids:
  {W.Desks.ids(W.Desk.list(), 0) == True{} : Bool}

law desks_in_room:
  {W.Desks.all_in_room(W.Desk.list()) == True{} : Bool}

law desks_apart:
  {W.Desks.clear(W.Desk.list()) == True{} : Bool}

law start_is_clear:
  {W.start_clear() == True{} : Bool}

# Six projects, every card text present in both languages.
law six_projects:
  {List.length(&1, C.Proj, C.projects()) == 6n : Nat}

law translations_filled:
  {C.all_filled() == True{} : Bool}

law projects_valid:
  {C.projects_valid(C.projects()) == True{} : Bool}

# Appending bilingual copy is associative: the order the game joins
# story, UI and project text cannot change the resulting list.
law append_assoc:
  for a: List<String>
  for b: List<String>
  for c: List<String>
  {List.append(&1, String, a, List.append(&1, String, b, c)) ==
    List.append(&1, String, List.append(&1, String, a, b), c) : List<String>}

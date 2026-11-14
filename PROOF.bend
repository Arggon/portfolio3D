import Base
import ./LAWS.bend as L
import ./src/world.bend as W
import ./src/copy.bend as C

def L.six_desks():
  {==}

def L.desk_ids():
  {==}

def L.desks_in_room():
  {==}

def L.desks_apart():
  {==}

def L.start_is_clear():
  {==}

def L.six_projects():
  {==}

def L.translations_filled():
  {==}

def L.projects_valid():
  {==}

def L.append_assoc(a, b, c):
  match a:
    case Nil{}:
      {==}
    case Con{h, t}:
      %L.append_assoc(t, b, c) : {Con{h, List.append(&1, String, t, List.append(&1, String, b, c))} == Con{h, _} : List<String>}
      {==}

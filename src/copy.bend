import Base

# Every user-facing line lives here, in English and Spanish.
# Keeping both halves in one record makes a missing translation a type error.

type Line is Data:
  Line{en: String, es: String}

type Copy is Data:
  Copy{
    kicker: Line,
    title: Line,
    role: Line,
    intro: Line,
    enter: Line,
    skip: Line,
    next: Line,
    back: Line,
    createTitle: Line,
    createSub: Line,
    nameLabel: Line,
    namePlaceholder: Line,
    lookLabel: Line,
    colorLabel: Line,
    clockIn: Line,
    nameError: Line,
    hudHint: Line,
    hudHintTouch: Line,
    inspect: Line,
    close: Line,
    openRepo: Line,
    liveDemo: Line,
    aboutTitle: Line,
    aboutBody: Line,
    aboutGithub: Line,
    aboutCv: Line,
    aboutHint: Line,
    soundOn: Line,
    soundOff: Line,
    loading: Line,
    live: Line,
    offline: Line,
    restart: Line,
    credits: Line,
    presetA: Line,
    presetB: Line,
    presetC: Line,
    factStations: Line,
    factEngine: Line,
    factData: Line,
    technical: Line,
    onboarding: Line,
    playerRole: Line
  }

type Proj is Type:
  Proj{name: String, lang: String, es: String, tags: List<String>}

def ui() -> Copy:
  Copy{
    Line{"ARGGON LABS // CANDIDATE INTAKE", "ARGGON LABS // INGRESO DE CANDIDATOS"},
    Line{"Six projects. One very late recruiter.", "Seis proyectos. Una recruiter muy nocturna."},
    Line{"Full Stack Developer · Argentina", "Desarrollador Full Stack · Argentina"},
    Line{"The lights are off. The CI is green.", "Las luces están apagadas. La CI está en verde."},
    Line{"ENTER THE OFFICE", "ENTRAR A LA OFICINA"},
    Line{"Skip intro", "Saltar intro"},
    Line{"Continue", "Continuar"},
    Line{"Back", "Volver"},
    Line{"BUILD YOUR RECRUITER", "ARMÁ A TU RECLUTADOR"},
    Line{"This is you. Probably.", "Eso sos vos. Probablemente."},
    Line{"Name", "Nombre"},
    Line{"e.g. Alex Rivera", "ej. Alex Rivera"},
    Line{"Look", "Apariencia"},
    Line{"Badge color", "Color de credencial"},
    Line{"CLOCK IN", "FICHAR"},
    Line{"Enter a name to clock in.", "Poné un nombre para poder fichar."},
    Line{"WASD / arrows to move · drag to look · E to inspect", "WASD / flechas para moverte · arrastrá para mirar · E para inspeccionar"},
    Line{"Joystick to move · tap a station to inspect", "Joystick para moverte · tocá una estación para inspeccionar"},
    Line{"Inspect", "Inspeccionar"},
    Line{"Close", "Cerrar"},
    Line{"Open repository", "Abrir repositorio"},
    Line{"Open site", "Abrir sitio"},
    Line{"ABOUT GONZALO", "SOBRE GONZALO"},
    Line{"Full-stack developer from Argentina. Backends that hold up, tools that remove busywork, and games that ship. This office is a Bend program: its layout, collision and copy are checked by the compiler.", "Desarrollador full stack argentino. Backends que aguantan, herramientas que sacan trabajo de encima y juegos que se publican. Esta oficina es un programa en Bend: su diseño, colisiones y textos están verificados por el compilador."},
    Line{"github.com/Arggon", "github.com/Arggon"},
    Line{"View CV", "Ver CV"},
    Line{"H — about Gonzalo", "H — sobre Gonzalo"},
    Line{"Sound on", "Sonido sí"},
    Line{"Sound off", "Sonido no"},
    Line{"Fetching live GitHub data…", "Buscando datos en vivo de GitHub…"},
    Line{"live GitHub data", "datos en vivo de GitHub"},
    Line{"local snapshot", "instantánea local"},
    Line{"Restart shift", "Reiniciar turno"},
    Line{"Built with Bend + Three.js · layout and copy are law-checked", "Hecho con Bend + Three.js · diseño y textos verificados con leyes"},
    Line{"Ava", "Ava"},
    Line{"Max", "Max"},
    Line{"Rin", "Rin"},
    Line{"project stations", "estaciones de proyectos"},
    Line{"Bend + Three.js", "Bend + Three.js"},
    Line{"live GitHub data", "datos en vivo de GitHub"},
    Line{"The office layout, collision rules, focus logic and every line of copy live in Bend. Nine laws, all proofs check.", "El diseño de la oficina, las colisiones, la lógica de foco y cada línea de texto viven en Bend. Nueve leyes, todas demostradas."},
    Line{"Onboarding complete. Day 1 of 1.", "Onboarding completo. Día 1 de 1."},
    Line{"Senior Talent Acquisition Specialist", "Especialista Senior en Adquisición de Talento"}
  }

def story() -> List<Line>:
  Line{"10:47 PM. Arggon Labs. The lights are off. The CI is green.", "22:47. Arggon Labs. Las luces están apagadas. La CI está en verde."}
  <> Line{"You are a Senior Talent Acquisition Specialist. Four thousand CVs tonight, not one working demo.", "Sos Senior Talent Acquisition Specialist. Cuatro mil CVs esta noche, ni una demo que funcione."}
  <> Line{"Then a link arrives: github.com/Arggon. Six projects. Zero buzzwords.", "Entonces llega un link: github.com/Arggon. Seis proyectos. Cero palabras de moda."}
  <> Line{"Protocol says evaluate in person. Protocol did not mention the office would still be open.", "El protocolo dice evaluar en persona. El protocolo no menciona que la oficina sigue abierta."}
  <> Line{"Grab a badge. The candidate left the door unlocked.", "Agarrá una credencial. El candidato dejó la puerta sin llave."}
  <> Nil{}

def projects() -> List<Proj>:
  Proj{"dotnet-batchyard", "C#", ".NET 10 de punta a punta: ingesta batch con TVP+MERGE, CQRS con outbox y RabbitMQ, y una migración strangler con YARP.", [".NET 10", "C#", "CQRS", "RabbitMQ", "YARP", "OpenTelemetry"]}
  <> Proj{"cuentas-claras", "TypeScript", "Gastos compartidos sin planillas: quién pagó, quién debe y la mínima cantidad de transferencias para saldar.", ["TypeScript", "Node", "Express"]}
  <> Proj{"suizo", "Go", "Torneos suizos para eventos amateur: un binario, un archivo JSON y cero infraestructura.", ["Go", "CLI", "JSON"]}
  <> Proj{"racha", "Rust", "Hábitos y rachas desde la terminal: datos locales, notificaciones de escritorio y nada de nube.", ["Rust", "CLI"]}
  <> Proj{"estanteria", "Go", "Tu biblioteca personal en la terminal: CLI en Go con un ledger JSON atómico.", ["Go", "CLI", "JSON"]}
  <> Proj{"ember-ascent", "JavaScript", "Roguelike de cartas jugable por agentes en el navegador, sin dependencias.", ["JavaScript", "Canvas", "Game"]}
  <> Nil{}

# ---------- invariants used by LAWS.bend ----------

def String.has_text(s: String) -> Bool:
  match s:
    case SNil{}:
      False{}
    case SCon{_, _}:
      True{}

def Line.filled(l: Line) -> Bool:
  match l:
    case Line{en, es}:
      Bool.and(String.has_text(en), String.has_text(es))

def ui_lines(u: Copy) -> List<Line>:
  match u:
    case Copy{kicker, title, role, intro, enter, skip, next, back, createTitle,
      createSub, nameLabel, namePlaceholder, lookLabel, colorLabel, clockIn,
      nameError, hudHint, hudHintTouch, inspect, close, openRepo, liveDemo,
      aboutTitle, aboutBody, aboutGithub, aboutCv, aboutHint, soundOn,
      soundOff, loading, live, offline, restart, credits, presetA, presetB,
      presetC, factStations, factEngine, factData, technical, onboarding,
      playerRole}:
      kicker <> title <> role <> intro <> enter <> skip <> next <> back
      <> createTitle <> createSub <> nameLabel <> namePlaceholder
      <> lookLabel <> colorLabel <> clockIn <> nameError <> hudHint
      <> hudHintTouch <> inspect <> close <> openRepo <> liveDemo
      <> aboutTitle <> aboutBody <> aboutGithub <> aboutCv <> aboutHint
      <> soundOn <> soundOff <> loading <> live <> offline <> restart
      <> credits <> presetA <> presetB <> presetC <> factStations
      <> factEngine <> factData <> technical <> onboarding <> playerRole
      <> Nil{}

def everything() -> List<Line>:
  List.append(&1, Line, ui_lines(ui()), story())

def lines_filled(ls: List<Line>) -> Bool:
  match ls:
    case Nil{}:
      True{}
    case Con{h, t}:
      Bool.and(Line.filled(h), lines_filled(t))

def all_filled() -> Bool:
  lines_filled(everything())

def Proj.valid(p: Proj) -> Bool:
  match p:
    case Proj{name, lang, es, tags}:
      Bool.and(
        String.has_text(name),
        Bool.and(
          String.has_text(lang),
          Bool.and(String.has_text(es), Bool.not(List.is_empty(&1, String, tags)))))

def projects_valid(ps: List<Proj>) -> Bool:
  match ps:
    case Nil{}:
      True{}
    case Con{p, rest}:
      Bool.and(Proj.valid(p), projects_valid(rest))

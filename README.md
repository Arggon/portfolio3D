# Arggon Labs — after hours

A playable 3D portfolio for **Gonzalo Arganaraz**. You are a very late recruiter, the startup office is empty, and six projects are still running on their own monitors.

Built with **Bend** for the game core and **Three.js** for the room. Every layout constant, collision rule, focus rule and bilingual line of copy lives in Bend; the browser only renders and handles input.

## Play

- **WASD / arrow keys** — move
- **Mouse drag** — orbit the camera
- **Wheel** — zoom
- **E** — inspect the project at the highlighted station
- **Click a floor tile** — walk there
- **Click a project panel** — walk over and open it
- **H**, **M**, **Esc** — about, sound, close
- **Mobile** — joystick to move, tap the floor to walk, tap a station to inspect

The intro can be skipped. The name and avatar preset/color are remembered in local storage.

## Projects on display

| Station | Project | Stack |
| --- | --- | --- |
| 01 | `dotnet-batchyard` | C# / .NET 10, CQRS, RabbitMQ, YARP |
| 02 | `cuentas-claras` | TypeScript, Node, Express |
| 03 | `suizo` | Go CLI |
| 04 | `racha` | Rust CLI |
| 05 | `estanteria` | Go CLI |
| 06 | `ember-ascent` | JavaScript, Canvas |

Cards use live metadata from the public GitHub API. If the API is unavailable or rate-limited, the committed snapshot in `web/fallback.js` is used; the page never blocks on the network.

## Development

Requirements: [Bend](https://github.com/HigherOrderCO/Bend) 2.x and a browser with WebGL 2.

```sh
bend web/index.html -o dist
python3 -m http.server -d dist 8000
# open http://localhost:8000
```

`bend` bundles the HTML, CSS, JS, the vendored Three.js module and the imported `.bend` files into `dist/`.

Refresh the offline GitHub snapshot:

```sh
node scripts/snapshot.mjs
```

Build with the proof check:

```sh
scripts/build.sh
```

### Checks

```sh
bend src/game.bend --check-only   # type-check the public API
bend PROOF.bend                   # nine laws, all proofs check
```

The laws in `LAWS.bend` pin down:

- exactly six stations and six projects;
- desk ids, spacing and containment in the room;
- a clear spawn point;
- both halves of every bilingual line are filled;
- project names/descriptions/tags are present;
- appending bilingual copy is associative.

## Layout

```
src/world.bend    room, desks, props, collision, nearest-station focus
src/copy.bend     every UI string, the five story screens, project copy
src/game.bend     the pure public surface imported by the browser
LAWS.bend         invariants
PROOF.bend        machine-checked proofs
web/index.html    screens and dialogs
web/ui.css        responsive HUD, story, creation and modal styles
web/scene.js      Three.js office, avatar, panels, camera
web/app.js        state machine, input, GitHub refresh, audio
web/fallback.js   offline GitHub snapshot
vendor/           vendored three@0.160.0 module
scripts/          build.sh and the GitHub snapshot refresher
dist/             committed static build published by GitHub Pages
```

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml`, which publishes the committed `dist/` directory to GitHub Pages. The build is done locally because the workflow does not install Bend.

The workflow asks Pages to enable itself on the first run. If it cannot, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once. The site will be served at `https://arggon.github.io/portfolio3D/`.

## Credits

- Design and code: Gonzalo Arganaraz
- Copy: English and Spanish, both in `src/copy.bend`
- Sound: procedural Web Audio, muted until you ask for it
- 3D: Three.js r160, vendored as a single ES module
- Game core: Bend 2.0

function xQ(J){return J.replace(/\p{Cs}/gu,"�")}function A0(J){while(J!==null&&typeof J==="object"&&J.$==="$JMP")J=J.f(J.x);return J}function I0(J,Z){return(...Q)=>Q.length<Z?I0((...W)=>J(...Q,...W),Z-Q.length):A0(J(...Q))}var RG=Object.create(null);function _J(){return 2400}function gJ(){return 1600}function pJ(){return 50}function mJ(){return 38}function lJ(){return 250}function H7(){let J=hJ(),Z=hJ();return Math.imul(J,Z)>>>0}function uJ(){return{$:"Room",w:t8(),h:e8()}}function dJ(){return{$:"Vec",x:900,y:1410}}function a8(J,Z,Q){if(J)return Z;else return Q}function _Q(J,Z,Q){if(J)return Z;else return Q}function cJ(J,Z,Q){if(J)return Z;else return Q}function nJ(J,Z){let Q=A8(J>=Z,J,Z),W=A8(J>Z,Z,J);return Q-W>>>0}function sJ(J,Z,Q){return a8(J<Z,Z,A8(J>Q,Q,J))}function iJ(){return{$:"Con",head:{$:"Desk",id:0,x:380,y:270,w:300,h:120,hue:3526911,side:0},tail:{$:"Con",head:{$:"Desk",id:1,x:380,y:740,w:300,h:120,hue:16732067,side:0},tail:{$:"Con",head:{$:"Desk",id:2,x:380,y:1210,w:300,h:120,hue:16757575,side:0},tail:{$:"Con",head:{$:"Desk",id:3,x:1720,y:270,w:300,h:120,hue:7069818,side:1},tail:{$:"Con",head:{$:"Desk",id:4,x:1720,y:740,w:300,h:120,hue:10189823,side:1},tail:{$:"Con",head:{$:"Desk",id:5,x:1720,y:1210,w:300,h:120,hue:16743004,side:1},tail:{$:"Nil"}}}}}}}}function oJ(){return{$:"Con",head:{$:"Prop",kind:0,x:1000,y:1120,w:400,h:120,rot:0},tail:{$:"Con",head:{$:"Prop",kind:1,x:1040,y:120,w:320,h:140,rot:0},tail:{$:"Con",head:{$:"Prop",kind:2,x:1120,y:310,w:160,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:90,y:90,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:2220,y:90,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:90,y:1420,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:2220,y:1420,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:4,x:70,y:430,w:70,h:420,rot:0},tail:{$:"Con",head:{$:"Prop",kind:5,x:2250,y:760,w:80,h:80,rot:0},tail:{$:"Nil"}}}}}}}}}}}function rJ(){return{$:"Con",head:3526911,tail:{$:"Con",head:16732067,tail:{$:"Con",head:16757575,tail:{$:"Con",head:7069818,tail:{$:"Con",head:10189823,tail:{$:"Con",head:16743004,tail:{$:"Con",head:15262678,tail:{$:"Con",head:3046911,tail:{$:"Nil"}}}}}}}}}}function aJ(){return{$:"Layout",room:rQ(),start:P4(),desks:V7(),props:w4(),palette:aQ()}}function tJ(J,Z,Q){let{x:W,y:Y,w:H,h:K}=J,X=T4(),U=Z+X>>>0,q=(W+H>>>0)+X>>>0,V=Q+X>>>0,D=(Y+K>>>0)+X>>>0;return j5(i5(U>W,Z<q),i5(V>Y,Q<D))}function eJ(J,Z,Q){if(Q.$==="Nil")return!1;else{let{head:W,tail:Y}=Q,H=tQ(W,J,Z),K=S4(J,Z,Y);return H||K}}function X7(J,Z,Q){let{x:W,y:Y,w:H,h:K}=J,X=T4(),U=Z+X>>>0,q=(W+H>>>0)+X>>>0,V=Q+X>>>0,D=(Y+K>>>0)+X>>>0;return j5(i5(U>W,Z<q),i5(V>Y,Q<D))}function J4(J,Z,Q){let{x:W,y:Y,w:H,h:K,side:X}=J,U=H/2>>>0,G=W+U>>>0,q=K/2>>>0,V=Y+q>>>0,E=A8(X===0,G-185>>>0,G+185>>>0);return X7({$:"Desk",id:0,x:E-28>>>0,y:V-28>>>0,w:56,h:56,hue:0,side:0},Z,Q)}function Z4(J,Z,Q){if(Q.$==="Nil")return!1;else{let{head:W,tail:Y}=Q,H=eQ(W,J,Z),K=JW(W,J,Z),X=H||K,U=v4(J,Z,Y);return X||U}}function Q4(J,Z){let Q=S4(J,Z,w4()),W=v4(J,Z,V7());return Q||W}function W4(J,Z,Q){return{$:"Vec",x:A8(q7(Q,Z),J,Q),y:Z}}function Y4(J,Z,Q){return a8(q7(J,Q),Z,Q)}function H4(J,Z,Q){let{x:W,y:Y}=Q;return{$:"Vec",x:W,y:ZW(W,Y,Z)}}function X4(J,Z,Q){let{x:W,y:Y}=J,H=t8(),K=s5(),X=yJ(Z,s5(),H-K>>>0),U=e8(),G=s5(),q=yJ(Q,s5(),U-G>>>0);return H4(Y,q,QW(W,Y,X))}function K4(J,Z,Q){let{x:W,y:Y,w:H,h:K}=J,X=H/2>>>0,U=W+X>>>0,G=K/2>>>0,q=Y+G>>>0,V=xJ(U,Z),E=xJ(q,Q),D=Math.imul(V,V)>>>0,O=Math.imul(E,E)>>>0;return D+O>>>0}function U4(J,Z,Q){let{found:W,idx:Y,d2:H,can:K}=J,X=WW();return cJ(Q<H,{$:"Near",found:!0,idx:Z,d2:Q,can:Q<X},{$:"Near",found:W,idx:Y,d2:H,can:K})}function G4(J,Z,Q,W,Y){for(;;){let H=J,K=Z,X=Q,U=W,G=Y;if(H.$==="Nil")return G;else{let{head:q,tail:V}=H,E=YW(q,X,U);J=V,Z=K+1>>>0,Q=X,W=U,Y=HW(G,K,E);continue}}}function V4(J,Z){return G4(V7(),0,J,Z,{$:"Near",found:!1,idx:0,d2:4294967295,can:!1})}function q4(J,Z){let Q=s5(),W=t8(),Y=s5(),H=W-Y>>>0,K=s5(),X=e8(),U=s5(),G=X-U>>>0;return j5(i5(J>=Q,J<=H),i5(Z>=K,Z<=G))}function E4(J){let{x:Z,y:Q,w:W,h:Y}=J,H=s5(),K=t8(),X=s5(),U=Z+W>>>0,G=K-X>>>0,q=s5(),V=e8(),E=s5(),D=Q+Y>>>0,O=V-E>>>0;return j5(Z>=H,i5(U<=G,i5(Q>=q,D<=O)))}function F4(J,Z){let{x:Q,y:W,w:Y,h:H}=J,K=Z.x,X=Z.y,U=Z.w,G=Z.h,q=K+U>>>0,V=Q+Y>>>0,E=X+G>>>0,D=W+H>>>0;return j5(Q<q,i5(K<V,i5(W<E,X<D)))}function D4(J,Z){if(Z.$==="Nil")return!0;else{let{head:Q,tail:W}=Z;return j5(E7(XW(J,Q)),f4(J,W))}}function N4(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return j5(f4(Z,Q),KW(Q))}}function O4(J,Z){if(J.$==="Nil")return!0;else{let W=J.head.id,Y=J.tail;return j5(W===Z,UW(Y,Z+1>>>0))}}function R4(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return j5(GW(Z),VW(Q))}}function M4(J){let{x:Z,y:Q}=J;return j5(qW(Z,Q),E7(q7(Z,Q)))}function gQ(){return M4(P4())}function K7(){return{$:"Copy",kicker:{$:"Line",en:"ARGGON LABS // CANDIDATE INTAKE",es:"ARGGON LABS // INGRESO DE CANDIDATOS"},title:{$:"Line",en:"Six projects. One very late recruiter.",es:"Seis proyectos. Una recruiter muy nocturna."},role:{$:"Line",en:"Full Stack Developer · Argentina",es:"Desarrollador Full Stack · Argentina"},intro:{$:"Line",en:"The lights are off. The CI is green.",es:"Las luces están apagadas. La CI está en verde."},enter:{$:"Line",en:"ENTER THE OFFICE",es:"ENTRAR A LA OFICINA"},skip:{$:"Line",en:"Skip intro",es:"Saltar intro"},next:{$:"Line",en:"Continue",es:"Continuar"},back:{$:"Line",en:"Back",es:"Volver"},createTitle:{$:"Line",en:"BUILD YOUR RECRUITER",es:"ARMÁ A TU RECLUTADOR"},createSub:{$:"Line",en:"This is you. Probably.",es:"Eso sos vos. Probablemente."},nameLabel:{$:"Line",en:"Name",es:"Nombre"},namePlaceholder:{$:"Line",en:"e.g. Alex Rivera",es:"ej. Alex Rivera"},lookLabel:{$:"Line",en:"Look",es:"Apariencia"},colorLabel:{$:"Line",en:"Badge color",es:"Color de credencial"},clockIn:{$:"Line",en:"CLOCK IN",es:"FICHAR"},nameError:{$:"Line",en:"Enter a name to clock in.",es:"Poné un nombre para poder fichar."},hudHint:{$:"Line",en:"WASD / arrows to move · drag to look · E to inspect",es:"WASD / flechas para moverte · arrastrá para mirar · E para inspeccionar"},hudHintTouch:{$:"Line",en:"Joystick to move · tap a station to inspect",es:"Joystick para moverte · tocá una estación para inspeccionar"},inspect:{$:"Line",en:"Inspect",es:"Inspeccionar"},close:{$:"Line",en:"Close",es:"Cerrar"},openRepo:{$:"Line",en:"Open repository",es:"Abrir repositorio"},liveDemo:{$:"Line",en:"Open site",es:"Abrir sitio"},aboutTitle:{$:"Line",en:"ABOUT GONZALO",es:"SOBRE GONZALO"},aboutBody:{$:"Line",en:"Full-stack developer from Argentina. Backends that hold up, tools that remove busywork, and games that ship. This office is a Bend program: its layout, collision and copy are checked by the compiler.",es:"Desarrollador full stack argentino. Backends que aguantan, herramientas que sacan trabajo de encima y juegos que se publican. Esta oficina es un programa en Bend: su diseño, colisiones y textos están verificados por el compilador."},aboutGithub:{$:"Line",en:"github.com/Arggon",es:"github.com/Arggon"},aboutCv:{$:"Line",en:"View CV",es:"Ver CV"},aboutHint:{$:"Line",en:"H — about Gonzalo",es:"H — sobre Gonzalo"},soundOn:{$:"Line",en:"Sound on",es:"Sonido sí"},soundOff:{$:"Line",en:"Sound off",es:"Sonido no"},loading:{$:"Line",en:"Fetching live GitHub data…",es:"Buscando datos en vivo de GitHub…"},live:{$:"Line",en:"live GitHub data",es:"datos en vivo de GitHub"},offline:{$:"Line",en:"local snapshot",es:"instantánea local"},restart:{$:"Line",en:"Restart shift",es:"Reiniciar turno"},credits:{$:"Line",en:"Built with Bend + Three.js · layout and copy are law-checked",es:"Hecho con Bend + Three.js · diseño y textos verificados con leyes"},presetA:{$:"Line",en:"Ava",es:"Ava"},presetB:{$:"Line",en:"Max",es:"Max"},presetC:{$:"Line",en:"Rin",es:"Rin"},factStations:{$:"Line",en:"project stations",es:"estaciones de proyectos"},factEngine:{$:"Line",en:"Bend + Three.js",es:"Bend + Three.js"},factData:{$:"Line",en:"live GitHub data",es:"datos en vivo de GitHub"},technical:{$:"Line",en:"The office layout, collision rules, focus logic and every line of copy live in Bend. Nine laws, all proofs check.",es:"El diseño de la oficina, las colisiones, la lógica de foco y cada línea de texto viven en Bend. Nueve leyes, todas demostradas."},onboarding:{$:"Line",en:"Onboarding complete. Day 1 of 1.",es:"Onboarding completo. Día 1 de 1."},playerRole:{$:"Line",en:"Senior Talent Acquisition Specialist",es:"Especialista Senior en Adquisición de Talento"}}}function U7(){return{$:"Con",head:{$:"Line",en:"10:47 PM. Arggon Labs. The lights are off. The CI is green.",es:"22:47. Arggon Labs. Las luces están apagadas. La CI está en verde."},tail:{$:"Con",head:{$:"Line",en:"You are a Senior Talent Acquisition Specialist. Four thousand CVs tonight, not one working demo.",es:"Sos Senior Talent Acquisition Specialist. Cuatro mil CVs esta noche, ni una demo que funcione."},tail:{$:"Con",head:{$:"Line",en:"Then a link arrives: github.com/Arggon. Six projects. Zero buzzwords.",es:"Entonces llega un link: github.com/Arggon. Seis proyectos. Cero palabras de moda."},tail:{$:"Con",head:{$:"Line",en:"Protocol says evaluate in person. Protocol did not mention the office would still be open.",es:"El protocolo dice evaluar en persona. El protocolo no menciona que la oficina sigue abierta."},tail:{$:"Con",head:{$:"Line",en:"Grab a badge. The candidate left the door unlocked.",es:"Agarrá una credencial. El candidato dejó la puerta sin llave."},tail:{$:"Nil"}}}}}}}function z4(){return{$:"Con",head:{$:"Proj",name:"dotnet-batchyard",lang:"C#",es:".NET 10 de punta a punta: ingesta batch con TVP+MERGE, CQRS con outbox y RabbitMQ, y una migración strangler con YARP.",tags:{$:"Con",head:".NET 10",tail:{$:"Con",head:"C#",tail:{$:"Con",head:"CQRS",tail:{$:"Con",head:"RabbitMQ",tail:{$:"Con",head:"YARP",tail:{$:"Con",head:"OpenTelemetry",tail:{$:"Nil"}}}}}}}},tail:{$:"Con",head:{$:"Proj",name:"cuentas-claras",lang:"TypeScript",es:"Gastos compartidos sin planillas: quién pagó, quién debe y la mínima cantidad de transferencias para saldar.",tags:{$:"Con",head:"TypeScript",tail:{$:"Con",head:"Node",tail:{$:"Con",head:"Express",tail:{$:"Nil"}}}}},tail:{$:"Con",head:{$:"Proj",name:"suizo",lang:"Go",es:"Torneos suizos para eventos amateur: un binario, un archivo JSON y cero infraestructura.",tags:{$:"Con",head:"Go",tail:{$:"Con",head:"CLI",tail:{$:"Con",head:"JSON",tail:{$:"Nil"}}}}},tail:{$:"Con",head:{$:"Proj",name:"racha",lang:"Rust",es:"Hábitos y rachas desde la terminal: datos locales, notificaciones de escritorio y nada de nube.",tags:{$:"Con",head:"Rust",tail:{$:"Con",head:"CLI",tail:{$:"Nil"}}}},tail:{$:"Con",head:{$:"Proj",name:"estanteria",lang:"Go",es:"Tu biblioteca personal en la terminal: CLI en Go con un ledger JSON atómico.",tags:{$:"Con",head:"Go",tail:{$:"Con",head:"CLI",tail:{$:"Con",head:"JSON",tail:{$:"Nil"}}}}},tail:{$:"Con",head:{$:"Proj",name:"ember-ascent",lang:"JavaScript",es:"Roguelike de cartas jugable por agentes en el navegador, sin dependencias.",tags:{$:"Con",head:"JavaScript",tail:{$:"Con",head:"Canvas",tail:{$:"Con",head:"Game",tail:{$:"Nil"}}}}},tail:{$:"Nil"}}}}}}}}function B4(J){if(J==="")return!1;else return!0}function A4(J){let{en:Z,es:Q}=J;return j5(B8(Z),B8(Q))}function I4(J){let{kicker:Z,title:Q,role:W,intro:Y,enter:H,skip:K,next:X,back:U,createTitle:G,createSub:q,nameLabel:V,namePlaceholder:E,lookLabel:D,colorLabel:O,clockIn:R,nameError:N,hudHint:F,hudHintTouch:B,inspect:M,close:C,openRepo:w,liveDemo:L,aboutTitle:f,aboutBody:p,aboutGithub:A,aboutCv:k,aboutHint:v,soundOn:n,soundOff:i,loading:T,live:x,offline:u,restart:r,credits:c,presetA:d,presetB:t,presetC:W0,factStations:y,factEngine:o,factData:X0,technical:D0,onboarding:P0,playerRole:k0}=J;return{$:"Con",head:Z,tail:{$:"Con",head:Q,tail:{$:"Con",head:W,tail:{$:"Con",head:Y,tail:{$:"Con",head:H,tail:{$:"Con",head:K,tail:{$:"Con",head:X,tail:{$:"Con",head:U,tail:{$:"Con",head:G,tail:{$:"Con",head:q,tail:{$:"Con",head:V,tail:{$:"Con",head:E,tail:{$:"Con",head:D,tail:{$:"Con",head:O,tail:{$:"Con",head:R,tail:{$:"Con",head:N,tail:{$:"Con",head:F,tail:{$:"Con",head:B,tail:{$:"Con",head:M,tail:{$:"Con",head:C,tail:{$:"Con",head:w,tail:{$:"Con",head:L,tail:{$:"Con",head:f,tail:{$:"Con",head:p,tail:{$:"Con",head:A,tail:{$:"Con",head:k,tail:{$:"Con",head:v,tail:{$:"Con",head:n,tail:{$:"Con",head:i,tail:{$:"Con",head:T,tail:{$:"Con",head:x,tail:{$:"Con",head:u,tail:{$:"Con",head:r,tail:{$:"Con",head:c,tail:{$:"Con",head:d,tail:{$:"Con",head:t,tail:{$:"Con",head:W0,tail:{$:"Con",head:y,tail:{$:"Con",head:o,tail:{$:"Con",head:X0,tail:{$:"Con",head:D0,tail:{$:"Con",head:P0,tail:{$:"Con",head:k0,tail:{$:"Nil"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}function $4(){return L4(FW(EW()),DW())}function G7(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return j5(NW(Z),OW(Q))}}function pQ(){return G7(RW())}function C4(J){let{name:Z,lang:Q,es:W,tags:Y}=J;return j5(B8(Z),i5(B8(Q),i5(B8(W),E7(MW(Y)))))}function k4(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return j5(zW(Z),BW(Q))}}function mQ(){return aJ()}function lQ(J,Z,Q,W){return X4({$:"Vec",x:J,y:Z},Q,W)}function uQ(J,Z){return V4(J,Z)}function dQ(){return H7()}function cQ(){return K7()}function nQ(){return U7()}function sQ(){return z4()}function j5(J,Z){if(!J)return!1;else return Z}function iQ(J){if(!J)return!0;else return!1}function L4(J,Z){if(J.$==="Nil")return Z;else{let{head:Q,tail:W}=J;return{$:"Con",head:Q,tail:AW(W,Z)}}}function oQ(J){if(J.$==="Nil")return!0;else return!1}var hJ=lJ,t8=_J,e8=gJ,A8=a8,rQ=uJ,P4=dJ,V7=iJ,w4=oJ,aQ=rJ,T4=mJ,i5=j5,tQ=tJ,S4=eJ,eQ=X7,JW=J4,v4=Z4,q7=Q4,ZW=Y4,s5=pJ,yJ=sJ,QW=W4,xJ=nJ,WW=H7,YW=K4,HW=U4,XW=F4,E7=iQ,f4=D4,KW=N4,UW=O4,GW=E4,VW=R4,qW=q4,B8=B4,EW=K7,FW=I4,DW=U7,NW=A4,OW=G7,RW=$4,MW=oQ,zW=C4,BW=k4,AW=L4,S6={"world:room_w":I0(()=>A0(_J()),0),"world:room_h":I0(()=>A0(gJ()),0),"world:margin":I0(()=>A0(pJ()),0),"world:radius":I0(()=>A0(mJ()),0),"world:reach":I0(()=>A0(lJ()),0),"world:reach2":I0(()=>A0(H7()),0),"world:room":I0(()=>A0(uJ()),0),"world:start":I0(()=>A0(dJ()),0),"world:pick_u32":I0((J,Z,Q)=>A0(a8(J,Z,Q)),3),"world:pick_vec":I0((J,Z,Q)=>A0(_Q(J,Z,Q)),3),"world:pick_near":I0((J,Z,Q)=>A0(cJ(J,Z,Q)),3),"world:gap":I0((J,Z)=>A0(nJ(J,Z)),2),"world:clamp_axis":I0((J,Z,Q)=>A0(sJ(J,Z,Q)),3),"world:Desk.list":I0(()=>A0(iJ()),0),"world:Prop.list":I0(()=>A0(oJ()),0),"world:palette":I0(()=>A0(rJ()),0),"world:layout":I0(()=>A0(aJ()),0),"world:Prop.hit":I0((J,Z,Q)=>A0(tJ(J,Z,Q)),3),"world:inside_props":I0((J,Z,Q)=>A0(eJ(J,Z,Q)),3),"world:Desk.hit":I0((J,Z,Q)=>A0(X7(J,Z,Q)),3),"world:Desk.chair_hit":I0((J,Z,Q)=>A0(J4(J,Z,Q)),3),"world:inside_desks":I0((J,Z,Q)=>A0(Z4(J,Z,Q)),3),"world:blocked":I0((J,Z)=>A0(Q4(J,Z)),2),"world:try_x":I0((J,Z,Q)=>A0(W4(J,Z,Q)),3),"world:try_y":I0((J,Z,Q)=>A0(Y4(J,Z,Q)),3),"world:slide.after":I0((J,Z,Q)=>A0(H4(J,Z,Q)),3),"world:slide":I0((J,Z,Q)=>A0(X4(J,Z,Q)),3),"world:Desk.d2":I0((J,Z,Q)=>A0(K4(J,Z,Q)),3),"world:Near.update":I0((J,Z,Q)=>A0(U4(J,Z,Q)),3),"world:scan":I0((J,Z,Q,W,Y)=>A0(G4(J,Z,Q,W,Y)),5),"world:find":I0((J,Z)=>A0(V4(J,Z)),2),"world:inside_room":I0((J,Z)=>A0(q4(J,Z)),2),"world:Desk.in_room":I0((J)=>A0(E4(J)),1),"world:Desk.overlaps":I0((J,Z)=>A0(F4(J,Z)),2),"world:Desk.clear_one":I0((J,Z)=>A0(D4(J,Z)),2),"world:Desks.clear":I0((J)=>A0(N4(J)),1),"world:Desks.ids":I0((J,Z)=>A0(O4(J,Z)),2),"world:Desks.all_in_room":I0((J)=>A0(R4(J)),1),"world:start_clear.at":I0((J)=>A0(M4(J)),1),"world:start_clear":I0(()=>A0(gQ()),0),"copy:ui":I0(()=>A0(K7()),0),"copy:story":I0(()=>A0(U7()),0),"copy:projects":I0(()=>A0(z4()),0),"copy:String.has_text":I0((J)=>A0(B4(xQ(J))),1),"copy:Line.filled":I0((J)=>A0(A4(J)),1),"copy:ui_lines":I0((J)=>A0(I4(J)),1),"copy:everything":I0(()=>A0($4()),0),"copy:lines_filled":I0((J)=>A0(G7(J)),1),"copy:all_filled":I0(()=>A0(pQ()),0),"copy:Proj.valid":I0((J)=>A0(C4(J)),1),"copy:projects_valid":I0((J)=>A0(k4(J)),1),layout:I0(()=>A0(mQ()),0),slide:I0((J,Z,Q,W)=>A0(lQ(J,Z,Q,W)),4),focus:I0((J,Z)=>A0(uQ(J,Z)),2),reach2:I0(()=>A0(dQ()),0),ui:I0(()=>A0(cQ()),0),story:I0(()=>A0(nQ()),0),projects:I0(()=>A0(sQ()),0)};var kZ=2;var T9=2;var LZ=4;var y8=1000;var R6="srgb";class _6{addEventListener(J,Z){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf(Z)===-1)Q[J].push(Z)}hasEventListener(J,Z){if(this._listeners===void 0)return!1;let Q=this._listeners;return Q[J]!==void 0&&Q[J].indexOf(Z)!==-1}removeEventListener(J,Z){if(this._listeners===void 0)return;let W=this._listeners[J];if(W!==void 0){let Y=W.indexOf(Z);if(Y!==-1)W.splice(Y,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let Q=this._listeners[J.type];if(Q!==void 0){J.target=this;let W=Q.slice(0);for(let Y=0,H=W.length;Y<H;Y++)W[Y].call(this,J);J.target=null}}}var S5=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var F7=Math.PI/180,l7=180/Math.PI;function V8(){let J=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(S5[J&255]+S5[J>>8&255]+S5[J>>16&255]+S5[J>>24&255]+"-"+S5[Z&255]+S5[Z>>8&255]+"-"+S5[Z>>16&15|64]+S5[Z>>24&255]+"-"+S5[Q&63|128]+S5[Q>>8&255]+"-"+S5[Q>>16&255]+S5[Q>>24&255]+S5[W&255]+S5[W>>8&255]+S5[W>>16&255]+S5[W>>24&255]).toLowerCase()}function C5(J,Z,Q){return Math.max(Z,Math.min(Q,J))}function IW(J,Z){return(J%Z+Z)%Z}function D7(J,Z,Q){return(1-Q)*J+Q*Z}function b4(J){return(J&J-1)===0&&J!==0}function u7(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function I8(J,Z){switch(Z.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function g5(J,Z){switch(Z.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class F0{constructor(J=0,Z=0){F0.prototype.isVector2=!0,this.x=J,this.y=Z}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Z){return this.x=J,this.y=Z,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Z=this.x,Q=this.y,W=J.elements;return this.x=W[0]*Z+W[3]*Q+W[6],this.y=W[1]*Z+W[4]*Q+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Z){return this.x=Math.max(J.x,Math.min(Z.x,this.x)),this.y=Math.max(J.y,Math.min(Z.y,this.y)),this}clampScalar(J,Z){return this.x=Math.max(J,Math.min(Z,this.x)),this.y=Math.max(J,Math.min(Z,this.y)),this}clampLength(J,Z){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min(Z,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let Q=this.dot(J)/Z;return Math.acos(C5(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,Q=this.y-J.y;return Z*Z+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this}lerpVectors(J,Z,Q){return this.x=J.x+(Z.x-J.x)*Q,this.y=J.y+(Z.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this}rotateAround(J,Z){let Q=Math.cos(Z),W=Math.sin(Z),Y=this.x-J.x,H=this.y-J.y;return this.x=Y*Q-H*W+J.x,this.y=Y*W+H*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class s0{constructor(J,Z,Q,W,Y,H,K,X,U){if(s0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Z,Q,W,Y,H,K,X,U)}set(J,Z,Q,W,Y,H,K,X,U){let G=this.elements;return G[0]=J,G[1]=W,G[2]=K,G[3]=Z,G[4]=Y,G[5]=X,G[6]=Q,G[7]=H,G[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Z=this.elements,Q=J.elements;return Z[0]=Q[0],Z[1]=Q[1],Z[2]=Q[2],Z[3]=Q[3],Z[4]=Q[4],Z[5]=Q[5],Z[6]=Q[6],Z[7]=Q[7],Z[8]=Q[8],this}extractBasis(J,Z,Q){return J.setFromMatrix3Column(this,0),Z.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Z=J.elements;return this.set(Z[0],Z[4],Z[8],Z[1],Z[5],Z[9],Z[2],Z[6],Z[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let Q=J.elements,W=Z.elements,Y=this.elements,H=Q[0],K=Q[3],X=Q[6],U=Q[1],G=Q[4],q=Q[7],V=Q[2],E=Q[5],D=Q[8],O=W[0],R=W[3],N=W[6],F=W[1],B=W[4],M=W[7],C=W[2],w=W[5],L=W[8];return Y[0]=H*O+K*F+X*C,Y[3]=H*R+K*B+X*w,Y[6]=H*N+K*M+X*L,Y[1]=U*O+G*F+q*C,Y[4]=U*R+G*B+q*w,Y[7]=U*N+G*M+q*L,Y[2]=V*O+E*F+D*C,Y[5]=V*R+E*B+D*w,Y[8]=V*N+E*M+D*L,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[3]*=J,Z[6]*=J,Z[1]*=J,Z[4]*=J,Z[7]*=J,Z[2]*=J,Z[5]*=J,Z[8]*=J,this}determinant(){let J=this.elements,Z=J[0],Q=J[1],W=J[2],Y=J[3],H=J[4],K=J[5],X=J[6],U=J[7],G=J[8];return Z*H*G-Z*K*U-Q*Y*G+Q*K*X+W*Y*U-W*H*X}invert(){let J=this.elements,Z=J[0],Q=J[1],W=J[2],Y=J[3],H=J[4],K=J[5],X=J[6],U=J[7],G=J[8],q=G*H-K*U,V=K*X-G*Y,E=U*Y-H*X,D=Z*q+Q*V+W*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/D;return J[0]=q*O,J[1]=(W*U-G*Q)*O,J[2]=(K*Q-W*H)*O,J[3]=V*O,J[4]=(G*Z-W*X)*O,J[5]=(W*Y-K*Z)*O,J[6]=E*O,J[7]=(Q*X-U*Z)*O,J[8]=(H*Z-Q*Y)*O,this}transpose(){let J,Z=this.elements;return J=Z[1],Z[1]=Z[3],Z[3]=J,J=Z[2],Z[2]=Z[6],Z[6]=J,J=Z[5],Z[5]=Z[7],Z[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Z=this.elements;return J[0]=Z[0],J[1]=Z[3],J[2]=Z[6],J[3]=Z[1],J[4]=Z[4],J[5]=Z[7],J[6]=Z[2],J[7]=Z[5],J[8]=Z[8],this}setUvTransform(J,Z,Q,W,Y,H,K){let X=Math.cos(Y),U=Math.sin(Y);return this.set(Q*X,Q*U,-Q*(X*H+U*K)+H+J,-W*U,W*X,-W*(-U*H+X*K)+K+Z,0,0,1),this}scale(J,Z){return this.premultiply(N7.makeScale(J,Z)),this}rotate(J){return this.premultiply(N7.makeRotation(-J)),this}translate(J,Z){return this.premultiply(N7.makeTranslation(J,Z)),this}makeTranslation(J,Z){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Z,0,0,1);return this}makeRotation(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(Z,-Q,0,Q,Z,0,0,0,1),this}makeScale(J,Z){return this.set(J,0,0,0,Z,0,0,0,1),this}equals(J){let Z=this.elements,Q=J.elements;for(let W=0;W<9;W++)if(Z[W]!==Q[W])return!1;return!0}fromArray(J,Z=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+Z];return this}toArray(J=[],Z=0){let Q=this.elements;return J[Z]=Q[0],J[Z+1]=Q[1],J[Z+2]=Q[2],J[Z+3]=Q[3],J[Z+4]=Q[4],J[Z+5]=Q[5],J[Z+6]=Q[6],J[Z+7]=Q[7],J[Z+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var N7=new s0;function PZ(J){for(let Z=J.length-1;Z>=0;--Z)if(J[Z]>=65535)return!0;return!1}function P9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function $W(){let J=P9("canvas");return J.style.display="block",J}var j4={};function w8(J){if(J in j4)return;j4[J]=!0,console.warn(J)}var h4=new s0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),y4=new s0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),J9={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(y4),fromReference:(J)=>J.applyMatrix3(h4)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(y4),fromReference:(J)=>J.applyMatrix3(h4).convertLinearToSRGB()}},CW=new Set(["srgb-linear","display-p3-linear"]),W5={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!CW.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,Z,Q){if(this.enabled===!1||Z===Q||!Z||!Q)return J;let W=J9[Z].toReference,Y=J9[Q].fromReference;return Y(W(J))},fromWorkingColorSpace:function(J,Z){return this.convert(J,this._workingColorSpace,Z)},toWorkingColorSpace:function(J,Z){return this.convert(J,Z,this._workingColorSpace)},getPrimaries:function(J){return J9[J].primaries},getTransfer:function(J){if(J==="")return"linear";return J9[J].transfer}};function U8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function O7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var d6;class r7{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(d6===void 0)d6=P9("canvas");d6.width=J.width,d6.height=J.height;let Q=d6.getContext("2d");if(J instanceof ImageData)Q.putImageData(J,0,0);else Q.drawImage(J,0,0,J.width,J.height);Z=d6}if(Z.width>2048||Z.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),Z.toDataURL("image/jpeg",0.6);else return Z.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Z=P9("canvas");Z.width=J.width,Z.height=J.height;let Q=Z.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let W=Q.getImageData(0,0,J.width,J.height),Y=W.data;for(let H=0;H<Y.length;H++)Y[H]=U8(Y[H]/255)*255;return Q.putImageData(W,0,0),Z}else if(J.data){let Z=J.data.slice(0);for(let Q=0;Q<Z.length;Q++)if(Z instanceof Uint8Array||Z instanceof Uint8ClampedArray)Z[Q]=Math.floor(U8(Z[Q]/255)*255);else Z[Q]=U8(Z[Q]);return{data:Z,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var kW=0;class a7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kW++}),this.uuid=V8(),this.data=J,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Y;if(Array.isArray(W)){Y=[];for(let H=0,K=W.length;H<K;H++)if(W[H].isDataTexture)Y.push(R7(W[H].image));else Y.push(R7(W[H]))}else Y=R7(W);Q.url=Y}if(!Z)J.images[this.uuid]=Q;return Q}}function R7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return r7.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var LW=0;class p5 extends _6{constructor(J=p5.DEFAULT_IMAGE,Z=p5.DEFAULT_MAPPING,Q=1001,W=1001,Y=1006,H=1008,K=1023,X=1009,U=p5.DEFAULT_ANISOTROPY,G=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:LW++}),this.uuid=V8(),this.name="",this.source=new a7(J),this.mipmaps=[],this.mapping=Z,this.channel=0,this.wrapS=Q,this.wrapT=W,this.magFilter=Y,this.minFilter=H,this.anisotropy=U,this.format=K,this.internalFormat=null,this.type=X,this.offset=new F0(0,0),this.repeat=new F0(1,1),this.center=new F0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new s0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof G==="string")this.colorSpace=G;else w8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=G===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!Z)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return w8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(J){w8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=J===3001?"srgb":""}}p5.DEFAULT_IMAGE=null;p5.DEFAULT_MAPPING=300;p5.DEFAULT_ANISOTROPY=1;class G5{constructor(J=0,Z=0,Q=0,W=1){G5.prototype.isVector4=!0,this.x=J,this.y=Z,this.z=Q,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Z,Q,W){return this.x=J,this.y=Z,this.z=Q,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;case 3:this.w=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this.w=J.w+Z.w,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this.w+=J.w*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this.w=J.w-Z.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Z=this.x,Q=this.y,W=this.z,Y=this.w,H=J.elements;return this.x=H[0]*Z+H[4]*Q+H[8]*W+H[12]*Y,this.y=H[1]*Z+H[5]*Q+H[9]*W+H[13]*Y,this.z=H[2]*Z+H[6]*Q+H[10]*W+H[14]*Y,this.w=H[3]*Z+H[7]*Q+H[11]*W+H[15]*Y,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Z=Math.sqrt(1-J.w*J.w);if(Z<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Z,this.y=J.y/Z,this.z=J.z/Z;return this}setAxisAngleFromRotationMatrix(J){let Z,Q,W,Y,H=0.01,K=0.1,X=J.elements,U=X[0],G=X[4],q=X[8],V=X[1],E=X[5],D=X[9],O=X[2],R=X[6],N=X[10];if(Math.abs(G-V)<0.01&&Math.abs(q-O)<0.01&&Math.abs(D-R)<0.01){if(Math.abs(G+V)<0.1&&Math.abs(q+O)<0.1&&Math.abs(D+R)<0.1&&Math.abs(U+E+N-3)<0.1)return this.set(1,0,0,0),this;Z=Math.PI;let B=(U+1)/2,M=(E+1)/2,C=(N+1)/2,w=(G+V)/4,L=(q+O)/4,f=(D+R)/4;if(B>M&&B>C)if(B<0.01)Q=0,W=0.707106781,Y=0.707106781;else Q=Math.sqrt(B),W=w/Q,Y=L/Q;else if(M>C)if(M<0.01)Q=0.707106781,W=0,Y=0.707106781;else W=Math.sqrt(M),Q=w/W,Y=f/W;else if(C<0.01)Q=0.707106781,W=0.707106781,Y=0;else Y=Math.sqrt(C),Q=L/Y,W=f/Y;return this.set(Q,W,Y,Z),this}let F=Math.sqrt((R-D)*(R-D)+(q-O)*(q-O)+(V-G)*(V-G));if(Math.abs(F)<0.001)F=1;return this.x=(R-D)/F,this.y=(q-O)/F,this.z=(V-G)/F,this.w=Math.acos((U+E+N-1)/2),this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Z){return this.x=Math.max(J.x,Math.min(Z.x,this.x)),this.y=Math.max(J.y,Math.min(Z.y,this.y)),this.z=Math.max(J.z,Math.min(Z.z,this.z)),this.w=Math.max(J.w,Math.min(Z.w,this.w)),this}clampScalar(J,Z){return this.x=Math.max(J,Math.min(Z,this.x)),this.y=Math.max(J,Math.min(Z,this.y)),this.z=Math.max(J,Math.min(Z,this.z)),this.w=Math.max(J,Math.min(Z,this.w)),this}clampLength(J,Z){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min(Z,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this.w+=(J.w-this.w)*Z,this}lerpVectors(J,Z,Q){return this.x=J.x+(Z.x-J.x)*Q,this.y=J.y+(Z.y-J.y)*Q,this.z=J.z+(Z.z-J.z)*Q,this.w=J.w+(Z.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this.w=J[Z+3],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J[Z+3]=this.w,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this.w=J.getW(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wZ extends _6{constructor(J=1,Z=1,Q={}){super();this.isRenderTarget=!0,this.width=J,this.height=Z,this.depth=1,this.scissor=new G5(0,0,J,Z),this.scissorTest=!1,this.viewport=new G5(0,0,J,Z);let W={width:J,height:Z,depth:1};if(Q.encoding!==void 0)w8("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),Q.colorSpace=Q.encoding===3001?"srgb":"";Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},Q),this.texture=new p5(W,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.internalFormat=Q.internalFormat,this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.depthTexture=Q.depthTexture,this.samples=Q.samples}setSize(J,Z,Q=1){if(this.width!==J||this.height!==Z||this.depth!==Q)this.width=J,this.height=Z,this.depth=Q,this.texture.image.width=J,this.texture.image.height=Z,this.texture.image.depth=Q,this.dispose();this.viewport.set(0,0,J,Z),this.scissor.set(0,0,J,Z)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.texture=J.texture.clone(),this.texture.isRenderTargetTexture=!0;let Z=Object.assign({},J.texture.image);if(this.texture.source=new a7(Z),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k6 extends wZ{constructor(J=1,Z=1,Q={}){super(J,Z,Q);this.isWebGLRenderTarget=!0}}class t7 extends p5{constructor(J=null,Z=1,Q=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Z,height:Q,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TZ extends p5{constructor(J=null,Z=1,Q=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Z,height:Q,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g6{constructor(J=0,Z=0,Q=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Z,this._z=Q,this._w=W}static slerpFlat(J,Z,Q,W,Y,H,K){let X=Q[W+0],U=Q[W+1],G=Q[W+2],q=Q[W+3],V=Y[H+0],E=Y[H+1],D=Y[H+2],O=Y[H+3];if(K===0){J[Z+0]=X,J[Z+1]=U,J[Z+2]=G,J[Z+3]=q;return}if(K===1){J[Z+0]=V,J[Z+1]=E,J[Z+2]=D,J[Z+3]=O;return}if(q!==O||X!==V||U!==E||G!==D){let R=1-K,N=X*V+U*E+G*D+q*O,F=N>=0?1:-1,B=1-N*N;if(B>Number.EPSILON){let C=Math.sqrt(B),w=Math.atan2(C,N*F);R=Math.sin(R*w)/C,K=Math.sin(K*w)/C}let M=K*F;if(X=X*R+V*M,U=U*R+E*M,G=G*R+D*M,q=q*R+O*M,R===1-K){let C=1/Math.sqrt(X*X+U*U+G*G+q*q);X*=C,U*=C,G*=C,q*=C}}J[Z]=X,J[Z+1]=U,J[Z+2]=G,J[Z+3]=q}static multiplyQuaternionsFlat(J,Z,Q,W,Y,H){let K=Q[W],X=Q[W+1],U=Q[W+2],G=Q[W+3],q=Y[H],V=Y[H+1],E=Y[H+2],D=Y[H+3];return J[Z]=K*D+G*q+X*E-U*V,J[Z+1]=X*D+G*V+U*q-K*E,J[Z+2]=U*D+G*E+K*V-X*q,J[Z+3]=G*D-K*q-X*V-U*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Z,Q,W){return this._x=J,this._y=Z,this._z=Q,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Z=!0){let{_x:Q,_y:W,_z:Y,_order:H}=J,K=Math.cos,X=Math.sin,U=K(Q/2),G=K(W/2),q=K(Y/2),V=X(Q/2),E=X(W/2),D=X(Y/2);switch(H){case"XYZ":this._x=V*G*q+U*E*D,this._y=U*E*q-V*G*D,this._z=U*G*D+V*E*q,this._w=U*G*q-V*E*D;break;case"YXZ":this._x=V*G*q+U*E*D,this._y=U*E*q-V*G*D,this._z=U*G*D-V*E*q,this._w=U*G*q+V*E*D;break;case"ZXY":this._x=V*G*q-U*E*D,this._y=U*E*q+V*G*D,this._z=U*G*D+V*E*q,this._w=U*G*q-V*E*D;break;case"ZYX":this._x=V*G*q-U*E*D,this._y=U*E*q+V*G*D,this._z=U*G*D-V*E*q,this._w=U*G*q+V*E*D;break;case"YZX":this._x=V*G*q+U*E*D,this._y=U*E*q+V*G*D,this._z=U*G*D-V*E*q,this._w=U*G*q-V*E*D;break;case"XZY":this._x=V*G*q-U*E*D,this._y=U*E*q-V*G*D,this._z=U*G*D+V*E*q,this._w=U*G*q+V*E*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Z===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Z){let Q=Z/2,W=Math.sin(Q);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let Z=J.elements,Q=Z[0],W=Z[4],Y=Z[8],H=Z[1],K=Z[5],X=Z[9],U=Z[2],G=Z[6],q=Z[10],V=Q+K+q;if(V>0){let E=0.5/Math.sqrt(V+1);this._w=0.25/E,this._x=(G-X)*E,this._y=(Y-U)*E,this._z=(H-W)*E}else if(Q>K&&Q>q){let E=2*Math.sqrt(1+Q-K-q);this._w=(G-X)/E,this._x=0.25*E,this._y=(W+H)/E,this._z=(Y+U)/E}else if(K>q){let E=2*Math.sqrt(1+K-Q-q);this._w=(Y-U)/E,this._x=(W+H)/E,this._y=0.25*E,this._z=(X+G)/E}else{let E=2*Math.sqrt(1+q-Q-K);this._w=(H-W)/E,this._x=(Y+U)/E,this._y=(X+G)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Z){let Q=J.dot(Z)+1;if(Q<Number.EPSILON)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*Z.z-J.z*Z.y,this._y=J.z*Z.x-J.x*Z.z,this._z=J.x*Z.y-J.y*Z.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(C5(this.dot(J),-1,1)))}rotateTowards(J,Z){let Q=this.angleTo(J);if(Q===0)return this;let W=Math.min(1,Z/Q);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Z){let{_x:Q,_y:W,_z:Y,_w:H}=J,K=Z._x,X=Z._y,U=Z._z,G=Z._w;return this._x=Q*G+H*K+W*U-Y*X,this._y=W*G+H*X+Y*K-Q*U,this._z=Y*G+H*U+Q*X-W*K,this._w=H*G-Q*K-W*X-Y*U,this._onChangeCallback(),this}slerp(J,Z){if(Z===0)return this;if(Z===1)return this.copy(J);let Q=this._x,W=this._y,Y=this._z,H=this._w,K=H*J._w+Q*J._x+W*J._y+Y*J._z;if(K<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,K=-K;else this.copy(J);if(K>=1)return this._w=H,this._x=Q,this._y=W,this._z=Y,this;let X=1-K*K;if(X<=Number.EPSILON){let E=1-Z;return this._w=E*H+Z*this._w,this._x=E*Q+Z*this._x,this._y=E*W+Z*this._y,this._z=E*Y+Z*this._z,this.normalize(),this}let U=Math.sqrt(X),G=Math.atan2(U,K),q=Math.sin((1-Z)*G)/U,V=Math.sin(Z*G)/U;return this._w=H*q+this._w*V,this._x=Q*q+this._x*V,this._y=W*q+this._y*V,this._z=Y*q+this._z*V,this._onChangeCallback(),this}slerpQuaternions(J,Z,Q){return this.copy(J).slerp(Z,Q)}random(){let J=Math.random(),Z=Math.sqrt(1-J),Q=Math.sqrt(J),W=2*Math.PI*Math.random(),Y=2*Math.PI*Math.random();return this.set(Z*Math.cos(W),Q*Math.sin(Y),Q*Math.cos(Y),Z*Math.sin(W))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Z=0){return this._x=J[Z],this._y=J[Z+1],this._z=J[Z+2],this._w=J[Z+3],this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._w,J}fromBufferAttribute(J,Z){return this._x=J.getX(Z),this._y=J.getY(Z),this._z=J.getZ(Z),this._w=J.getW(Z),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(J=0,Z=0,Q=0){P.prototype.isVector3=!0,this.x=J,this.y=Z,this.z=Q}set(J,Z,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=Z,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Z){return this.x=J.x*Z.x,this.y=J.y*Z.y,this.z=J.z*Z.z,this}applyEuler(J){return this.applyQuaternion(x4.setFromEuler(J))}applyAxisAngle(J,Z){return this.applyQuaternion(x4.setFromAxisAngle(J,Z))}applyMatrix3(J){let Z=this.x,Q=this.y,W=this.z,Y=J.elements;return this.x=Y[0]*Z+Y[3]*Q+Y[6]*W,this.y=Y[1]*Z+Y[4]*Q+Y[7]*W,this.z=Y[2]*Z+Y[5]*Q+Y[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Z=this.x,Q=this.y,W=this.z,Y=J.elements,H=1/(Y[3]*Z+Y[7]*Q+Y[11]*W+Y[15]);return this.x=(Y[0]*Z+Y[4]*Q+Y[8]*W+Y[12])*H,this.y=(Y[1]*Z+Y[5]*Q+Y[9]*W+Y[13])*H,this.z=(Y[2]*Z+Y[6]*Q+Y[10]*W+Y[14])*H,this}applyQuaternion(J){let Z=this.x,Q=this.y,W=this.z,Y=J.x,H=J.y,K=J.z,X=J.w,U=2*(H*W-K*Q),G=2*(K*Z-Y*W),q=2*(Y*Q-H*Z);return this.x=Z+X*U+H*q-K*G,this.y=Q+X*G+K*U-Y*q,this.z=W+X*q+Y*G-H*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Z=this.x,Q=this.y,W=this.z,Y=J.elements;return this.x=Y[0]*Z+Y[4]*Q+Y[8]*W,this.y=Y[1]*Z+Y[5]*Q+Y[9]*W,this.z=Y[2]*Z+Y[6]*Q+Y[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Z){return this.x=Math.max(J.x,Math.min(Z.x,this.x)),this.y=Math.max(J.y,Math.min(Z.y,this.y)),this.z=Math.max(J.z,Math.min(Z.z,this.z)),this}clampScalar(J,Z){return this.x=Math.max(J,Math.min(Z,this.x)),this.y=Math.max(J,Math.min(Z,this.y)),this.z=Math.max(J,Math.min(Z,this.z)),this}clampLength(J,Z){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min(Z,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this}lerpVectors(J,Z,Q){return this.x=J.x+(Z.x-J.x)*Q,this.y=J.y+(Z.y-J.y)*Q,this.z=J.z+(Z.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Z){let{x:Q,y:W,z:Y}=J,H=Z.x,K=Z.y,X=Z.z;return this.x=W*X-Y*K,this.y=Y*H-Q*X,this.z=Q*K-W*H,this}projectOnVector(J){let Z=J.lengthSq();if(Z===0)return this.set(0,0,0);let Q=J.dot(this)/Z;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return M7.copy(this).projectOnVector(J),this.sub(M7)}reflect(J){return this.sub(M7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let Q=this.dot(J)/Z;return Math.acos(C5(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,Q=this.y-J.y,W=this.z-J.z;return Z*Z+Q*Q+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Z,Q){let W=Math.sin(Z)*J;return this.x=W*Math.sin(Q),this.y=Math.cos(Z)*J,this.z=W*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Z,Q){return this.x=J*Math.sin(Z),this.y=Q,this.z=J*Math.cos(Z),this}setFromMatrixPosition(J){let Z=J.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this}setFromMatrixScale(J){let Z=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Z,this.y=Q,this.z=W,this}setFromMatrixColumn(J,Z){return this.fromArray(J.elements,Z*4)}setFromMatrix3Column(J,Z){return this.fromArray(J.elements,Z*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=(Math.random()-0.5)*2,Z=Math.random()*Math.PI*2,Q=Math.sqrt(1-J**2);return this.x=Q*Math.cos(Z),this.y=Q*Math.sin(Z),this.z=J,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var M7=new P,x4=new g6;class q8{constructor(J=new P(1/0,1/0,1/0),Z=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Z}set(J,Z){return this.min.copy(J),this.max.copy(Z),this}setFromArray(J){this.makeEmpty();for(let Z=0,Q=J.length;Z<Q;Z+=3)this.expandByPoint(a5.fromArray(J,Z));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Z=0,Q=J.count;Z<Q;Z++)this.expandByPoint(a5.fromBufferAttribute(J,Z));return this}setFromPoints(J){this.makeEmpty();for(let Z=0,Q=J.length;Z<Q;Z++)this.expandByPoint(J[Z]);return this}setFromCenterAndSize(J,Z){let Q=a5.copy(Z).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,Z=!1){return this.makeEmpty(),this.expandByObject(J,Z)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Z=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let Y=Q.getAttribute("position");if(Z===!0&&Y!==void 0&&J.isInstancedMesh!==!0)for(let H=0,K=Y.count;H<K;H++){if(J.isMesh===!0)J.getVertexPosition(H,a5);else a5.fromBufferAttribute(Y,H);a5.applyMatrix4(J.matrixWorld),this.expandByPoint(a5)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();Z9.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();Z9.copy(Q.boundingBox)}Z9.applyMatrix4(J.matrixWorld),this.union(Z9)}}let W=J.children;for(let Y=0,H=W.length;Y<H;Y++)this.expandByObject(W[Y],Z);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Z){return Z.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,a5),a5.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Z,Q;if(J.normal.x>0)Z=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else Z=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)Z+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else Z+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)Z+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else Z+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return Z<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter($8),Q9.subVectors(this.max,$8),c6.subVectors(J.a,$8),n6.subVectors(J.b,$8),s6.subVectors(J.c,$8),B6.subVectors(n6,c6),A6.subVectors(s6,n6),v6.subVectors(c6,s6);let Z=[0,-B6.z,B6.y,0,-A6.z,A6.y,0,-v6.z,v6.y,B6.z,0,-B6.x,A6.z,0,-A6.x,v6.z,0,-v6.x,-B6.y,B6.x,0,-A6.y,A6.x,0,-v6.y,v6.x,0];if(!z7(Z,c6,n6,s6,Q9))return!1;if(Z=[1,0,0,0,1,0,0,0,1],!z7(Z,c6,n6,s6,Q9))return!1;return W9.crossVectors(B6,A6),Z=[W9.x,W9.y,W9.z],z7(Z,c6,n6,s6,Q9)}clampPoint(J,Z){return Z.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,a5).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(a5).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return E6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),E6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),E6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),E6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),E6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),E6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),E6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),E6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(E6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var E6=[new P,new P,new P,new P,new P,new P,new P,new P],a5=new P,Z9=new q8,c6=new P,n6=new P,s6=new P,B6=new P,A6=new P,v6=new P,$8=new P,Q9=new P,W9=new P,f6=new P;function z7(J,Z,Q,W,Y){for(let H=0,K=J.length-3;H<=K;H+=3){f6.fromArray(J,H);let X=Y.x*Math.abs(f6.x)+Y.y*Math.abs(f6.y)+Y.z*Math.abs(f6.z),U=Z.dot(f6),G=Q.dot(f6),q=W.dot(f6);if(Math.max(-Math.max(U,G,q),Math.min(U,G,q))>X)return!1}return!0}var PW=new q8,C8=new P,B7=new P;class S9{constructor(J=new P,Z=-1){this.isSphere=!0,this.center=J,this.radius=Z}set(J,Z){return this.center.copy(J),this.radius=Z,this}setFromPoints(J,Z){let Q=this.center;if(Z!==void 0)Q.copy(Z);else PW.setFromPoints(J).getCenter(Q);let W=0;for(let Y=0,H=J.length;Y<H;Y++)W=Math.max(W,Q.distanceToSquared(J[Y]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Z=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Z*Z}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Z){let Q=this.center.distanceToSquared(J);if(Z.copy(J),Q>this.radius*this.radius)Z.sub(this.center).normalize(),Z.multiplyScalar(this.radius).add(this.center);return Z}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;C8.subVectors(J,this.center);let Z=C8.lengthSq();if(Z>this.radius*this.radius){let Q=Math.sqrt(Z),W=(Q-this.radius)*0.5;this.center.addScaledVector(C8,W/Q),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else B7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(C8.copy(J.center).add(B7)),this.expandByPoint(C8.copy(J.center).sub(B7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var F6=new P,A7=new P,Y9=new P,I6=new P,I7=new P,H9=new P,$7=new P;class e7{constructor(J=new P,Z=new P(0,0,-1)){this.origin=J,this.direction=Z}set(J,Z){return this.origin.copy(J),this.direction.copy(Z),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Z){return Z.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,F6)),this}closestPointToPoint(J,Z){Z.subVectors(J,this.origin);let Q=Z.dot(this.direction);if(Q<0)return Z.copy(this.origin);return Z.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Z=F6.subVectors(J,this.origin).dot(this.direction);if(Z<0)return this.origin.distanceToSquared(J);return F6.copy(this.origin).addScaledVector(this.direction,Z),F6.distanceToSquared(J)}distanceSqToSegment(J,Z,Q,W){A7.copy(J).add(Z).multiplyScalar(0.5),Y9.copy(Z).sub(J).normalize(),I6.copy(this.origin).sub(A7);let Y=J.distanceTo(Z)*0.5,H=-this.direction.dot(Y9),K=I6.dot(this.direction),X=-I6.dot(Y9),U=I6.lengthSq(),G=Math.abs(1-H*H),q,V,E,D;if(G>0)if(q=H*X-K,V=H*K-X,D=Y*G,q>=0)if(V>=-D)if(V<=D){let O=1/G;q*=O,V*=O,E=q*(q+H*V+2*K)+V*(H*q+V+2*X)+U}else V=Y,q=Math.max(0,-(H*V+K)),E=-q*q+V*(V+2*X)+U;else V=-Y,q=Math.max(0,-(H*V+K)),E=-q*q+V*(V+2*X)+U;else if(V<=-D)q=Math.max(0,-(-H*Y+K)),V=q>0?-Y:Math.min(Math.max(-Y,-X),Y),E=-q*q+V*(V+2*X)+U;else if(V<=D)q=0,V=Math.min(Math.max(-Y,-X),Y),E=V*(V+2*X)+U;else q=Math.max(0,-(H*Y+K)),V=q>0?Y:Math.min(Math.max(-Y,-X),Y),E=-q*q+V*(V+2*X)+U;else V=H>0?-Y:Y,q=Math.max(0,-(H*V+K)),E=-q*q+V*(V+2*X)+U;if(Q)Q.copy(this.origin).addScaledVector(this.direction,q);if(W)W.copy(A7).addScaledVector(Y9,V);return E}intersectSphere(J,Z){F6.subVectors(J.center,this.origin);let Q=F6.dot(this.direction),W=F6.dot(F6)-Q*Q,Y=J.radius*J.radius;if(W>Y)return null;let H=Math.sqrt(Y-W),K=Q-H,X=Q+H;if(X<0)return null;if(K<0)return this.at(X,Z);return this.at(K,Z)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Z=J.normal.dot(this.direction);if(Z===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/Z;return Q>=0?Q:null}intersectPlane(J,Z){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,Z)}intersectsPlane(J){let Z=J.distanceToPoint(this.origin);if(Z===0)return!0;if(J.normal.dot(this.direction)*Z<0)return!0;return!1}intersectBox(J,Z){let Q,W,Y,H,K,X,U=1/this.direction.x,G=1/this.direction.y,q=1/this.direction.z,V=this.origin;if(U>=0)Q=(J.min.x-V.x)*U,W=(J.max.x-V.x)*U;else Q=(J.max.x-V.x)*U,W=(J.min.x-V.x)*U;if(G>=0)Y=(J.min.y-V.y)*G,H=(J.max.y-V.y)*G;else Y=(J.max.y-V.y)*G,H=(J.min.y-V.y)*G;if(Q>H||Y>W)return null;if(Y>Q||isNaN(Q))Q=Y;if(H<W||isNaN(W))W=H;if(q>=0)K=(J.min.z-V.z)*q,X=(J.max.z-V.z)*q;else K=(J.max.z-V.z)*q,X=(J.min.z-V.z)*q;if(Q>X||K>W)return null;if(K>Q||Q!==Q)Q=K;if(X<W||W!==W)W=X;if(W<0)return null;return this.at(Q>=0?Q:W,Z)}intersectsBox(J){return this.intersectBox(J,F6)!==null}intersectTriangle(J,Z,Q,W,Y){I7.subVectors(Z,J),H9.subVectors(Q,J),$7.crossVectors(I7,H9);let H=this.direction.dot($7),K;if(H>0){if(W)return null;K=1}else if(H<0)K=-1,H=-H;else return null;I6.subVectors(this.origin,J);let X=K*this.direction.dot(H9.crossVectors(I6,H9));if(X<0)return null;let U=K*this.direction.dot(I7.cross(I6));if(U<0)return null;if(X+U>H)return null;let G=-K*I6.dot($7);if(G<0)return null;return this.at(G/H,Y)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class D5{constructor(J,Z,Q,W,Y,H,K,X,U,G,q,V,E,D,O,R){if(D5.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Z,Q,W,Y,H,K,X,U,G,q,V,E,D,O,R)}set(J,Z,Q,W,Y,H,K,X,U,G,q,V,E,D,O,R){let N=this.elements;return N[0]=J,N[4]=Z,N[8]=Q,N[12]=W,N[1]=Y,N[5]=H,N[9]=K,N[13]=X,N[2]=U,N[6]=G,N[10]=q,N[14]=V,N[3]=E,N[7]=D,N[11]=O,N[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new D5().fromArray(this.elements)}copy(J){let Z=this.elements,Q=J.elements;return Z[0]=Q[0],Z[1]=Q[1],Z[2]=Q[2],Z[3]=Q[3],Z[4]=Q[4],Z[5]=Q[5],Z[6]=Q[6],Z[7]=Q[7],Z[8]=Q[8],Z[9]=Q[9],Z[10]=Q[10],Z[11]=Q[11],Z[12]=Q[12],Z[13]=Q[13],Z[14]=Q[14],Z[15]=Q[15],this}copyPosition(J){let Z=this.elements,Q=J.elements;return Z[12]=Q[12],Z[13]=Q[13],Z[14]=Q[14],this}setFromMatrix3(J){let Z=J.elements;return this.set(Z[0],Z[3],Z[6],0,Z[1],Z[4],Z[7],0,Z[2],Z[5],Z[8],0,0,0,0,1),this}extractBasis(J,Z,Q){return J.setFromMatrixColumn(this,0),Z.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,Z,Q){return this.set(J.x,Z.x,Q.x,0,J.y,Z.y,Q.y,0,J.z,Z.z,Q.z,0,0,0,0,1),this}extractRotation(J){let Z=this.elements,Q=J.elements,W=1/i6.setFromMatrixColumn(J,0).length(),Y=1/i6.setFromMatrixColumn(J,1).length(),H=1/i6.setFromMatrixColumn(J,2).length();return Z[0]=Q[0]*W,Z[1]=Q[1]*W,Z[2]=Q[2]*W,Z[3]=0,Z[4]=Q[4]*Y,Z[5]=Q[5]*Y,Z[6]=Q[6]*Y,Z[7]=0,Z[8]=Q[8]*H,Z[9]=Q[9]*H,Z[10]=Q[10]*H,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromEuler(J){let Z=this.elements,Q=J.x,W=J.y,Y=J.z,H=Math.cos(Q),K=Math.sin(Q),X=Math.cos(W),U=Math.sin(W),G=Math.cos(Y),q=Math.sin(Y);if(J.order==="XYZ"){let V=H*G,E=H*q,D=K*G,O=K*q;Z[0]=X*G,Z[4]=-X*q,Z[8]=U,Z[1]=E+D*U,Z[5]=V-O*U,Z[9]=-K*X,Z[2]=O-V*U,Z[6]=D+E*U,Z[10]=H*X}else if(J.order==="YXZ"){let V=X*G,E=X*q,D=U*G,O=U*q;Z[0]=V+O*K,Z[4]=D*K-E,Z[8]=H*U,Z[1]=H*q,Z[5]=H*G,Z[9]=-K,Z[2]=E*K-D,Z[6]=O+V*K,Z[10]=H*X}else if(J.order==="ZXY"){let V=X*G,E=X*q,D=U*G,O=U*q;Z[0]=V-O*K,Z[4]=-H*q,Z[8]=D+E*K,Z[1]=E+D*K,Z[5]=H*G,Z[9]=O-V*K,Z[2]=-H*U,Z[6]=K,Z[10]=H*X}else if(J.order==="ZYX"){let V=H*G,E=H*q,D=K*G,O=K*q;Z[0]=X*G,Z[4]=D*U-E,Z[8]=V*U+O,Z[1]=X*q,Z[5]=O*U+V,Z[9]=E*U-D,Z[2]=-U,Z[6]=K*X,Z[10]=H*X}else if(J.order==="YZX"){let V=H*X,E=H*U,D=K*X,O=K*U;Z[0]=X*G,Z[4]=O-V*q,Z[8]=D*q+E,Z[1]=q,Z[5]=H*G,Z[9]=-K*G,Z[2]=-U*G,Z[6]=E*q+D,Z[10]=V-O*q}else if(J.order==="XZY"){let V=H*X,E=H*U,D=K*X,O=K*U;Z[0]=X*G,Z[4]=-q,Z[8]=U*G,Z[1]=V*q+O,Z[5]=H*G,Z[9]=E*q-D,Z[2]=D*q-E,Z[6]=K*G,Z[10]=O*q+V}return Z[3]=0,Z[7]=0,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromQuaternion(J){return this.compose(wW,J,TW)}lookAt(J,Z,Q){let W=this.elements;if(l5.subVectors(J,Z),l5.lengthSq()===0)l5.z=1;if(l5.normalize(),$6.crossVectors(Q,l5),$6.lengthSq()===0){if(Math.abs(Q.z)===1)l5.x+=0.0001;else l5.z+=0.0001;l5.normalize(),$6.crossVectors(Q,l5)}return $6.normalize(),X9.crossVectors(l5,$6),W[0]=$6.x,W[4]=X9.x,W[8]=l5.x,W[1]=$6.y,W[5]=X9.y,W[9]=l5.y,W[2]=$6.z,W[6]=X9.z,W[10]=l5.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let Q=J.elements,W=Z.elements,Y=this.elements,H=Q[0],K=Q[4],X=Q[8],U=Q[12],G=Q[1],q=Q[5],V=Q[9],E=Q[13],D=Q[2],O=Q[6],R=Q[10],N=Q[14],F=Q[3],B=Q[7],M=Q[11],C=Q[15],w=W[0],L=W[4],f=W[8],p=W[12],A=W[1],k=W[5],v=W[9],n=W[13],i=W[2],T=W[6],x=W[10],u=W[14],r=W[3],c=W[7],d=W[11],t=W[15];return Y[0]=H*w+K*A+X*i+U*r,Y[4]=H*L+K*k+X*T+U*c,Y[8]=H*f+K*v+X*x+U*d,Y[12]=H*p+K*n+X*u+U*t,Y[1]=G*w+q*A+V*i+E*r,Y[5]=G*L+q*k+V*T+E*c,Y[9]=G*f+q*v+V*x+E*d,Y[13]=G*p+q*n+V*u+E*t,Y[2]=D*w+O*A+R*i+N*r,Y[6]=D*L+O*k+R*T+N*c,Y[10]=D*f+O*v+R*x+N*d,Y[14]=D*p+O*n+R*u+N*t,Y[3]=F*w+B*A+M*i+C*r,Y[7]=F*L+B*k+M*T+C*c,Y[11]=F*f+B*v+M*x+C*d,Y[15]=F*p+B*n+M*u+C*t,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[4]*=J,Z[8]*=J,Z[12]*=J,Z[1]*=J,Z[5]*=J,Z[9]*=J,Z[13]*=J,Z[2]*=J,Z[6]*=J,Z[10]*=J,Z[14]*=J,Z[3]*=J,Z[7]*=J,Z[11]*=J,Z[15]*=J,this}determinant(){let J=this.elements,Z=J[0],Q=J[4],W=J[8],Y=J[12],H=J[1],K=J[5],X=J[9],U=J[13],G=J[2],q=J[6],V=J[10],E=J[14],D=J[3],O=J[7],R=J[11],N=J[15];return D*(+Y*X*q-W*U*q-Y*K*V+Q*U*V+W*K*E-Q*X*E)+O*(+Z*X*E-Z*U*V+Y*H*V-W*H*E+W*U*G-Y*X*G)+R*(+Z*U*q-Z*K*E-Y*H*q+Q*H*E+Y*K*G-Q*U*G)+N*(-W*K*G-Z*X*q+Z*K*V+W*H*q-Q*H*V+Q*X*G)}transpose(){let J=this.elements,Z;return Z=J[1],J[1]=J[4],J[4]=Z,Z=J[2],J[2]=J[8],J[8]=Z,Z=J[6],J[6]=J[9],J[9]=Z,Z=J[3],J[3]=J[12],J[12]=Z,Z=J[7],J[7]=J[13],J[13]=Z,Z=J[11],J[11]=J[14],J[14]=Z,this}setPosition(J,Z,Q){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Z,W[14]=Q;return this}invert(){let J=this.elements,Z=J[0],Q=J[1],W=J[2],Y=J[3],H=J[4],K=J[5],X=J[6],U=J[7],G=J[8],q=J[9],V=J[10],E=J[11],D=J[12],O=J[13],R=J[14],N=J[15],F=q*R*U-O*V*U+O*X*E-K*R*E-q*X*N+K*V*N,B=D*V*U-G*R*U-D*X*E+H*R*E+G*X*N-H*V*N,M=G*O*U-D*q*U+D*K*E-H*O*E-G*K*N+H*q*N,C=D*q*X-G*O*X-D*K*V+H*O*V+G*K*R-H*q*R,w=Z*F+Q*B+W*M+Y*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/w;return J[0]=F*L,J[1]=(O*V*Y-q*R*Y-O*W*E+Q*R*E+q*W*N-Q*V*N)*L,J[2]=(K*R*Y-O*X*Y+O*W*U-Q*R*U-K*W*N+Q*X*N)*L,J[3]=(q*X*Y-K*V*Y-q*W*U+Q*V*U+K*W*E-Q*X*E)*L,J[4]=B*L,J[5]=(G*R*Y-D*V*Y+D*W*E-Z*R*E-G*W*N+Z*V*N)*L,J[6]=(D*X*Y-H*R*Y-D*W*U+Z*R*U+H*W*N-Z*X*N)*L,J[7]=(H*V*Y-G*X*Y+G*W*U-Z*V*U-H*W*E+Z*X*E)*L,J[8]=M*L,J[9]=(D*q*Y-G*O*Y-D*Q*E+Z*O*E+G*Q*N-Z*q*N)*L,J[10]=(H*O*Y-D*K*Y+D*Q*U-Z*O*U-H*Q*N+Z*K*N)*L,J[11]=(G*K*Y-H*q*Y-G*Q*U+Z*q*U+H*Q*E-Z*K*E)*L,J[12]=C*L,J[13]=(G*O*W-D*q*W+D*Q*V-Z*O*V-G*Q*R+Z*q*R)*L,J[14]=(D*K*W-H*O*W-D*Q*X+Z*O*X+H*Q*R-Z*K*R)*L,J[15]=(H*q*W-G*K*W+G*Q*X-Z*q*X-H*Q*V+Z*K*V)*L,this}scale(J){let Z=this.elements,Q=J.x,W=J.y,Y=J.z;return Z[0]*=Q,Z[4]*=W,Z[8]*=Y,Z[1]*=Q,Z[5]*=W,Z[9]*=Y,Z[2]*=Q,Z[6]*=W,Z[10]*=Y,Z[3]*=Q,Z[7]*=W,Z[11]*=Y,this}getMaxScaleOnAxis(){let J=this.elements,Z=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Z,Q,W))}makeTranslation(J,Z,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Z,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,Z,-Q,0,0,Q,Z,0,0,0,0,1),this}makeRotationY(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(Z,0,Q,0,0,1,0,0,-Q,0,Z,0,0,0,0,1),this}makeRotationZ(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(Z,-Q,0,0,Q,Z,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Z){let Q=Math.cos(Z),W=Math.sin(Z),Y=1-Q,H=J.x,K=J.y,X=J.z,U=Y*H,G=Y*K;return this.set(U*H+Q,U*K-W*X,U*X+W*K,0,U*K+W*X,G*K+Q,G*X-W*H,0,U*X-W*K,G*X+W*H,Y*X*X+Q,0,0,0,0,1),this}makeScale(J,Z,Q){return this.set(J,0,0,0,0,Z,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,Z,Q,W,Y,H){return this.set(1,Q,Y,0,J,1,H,0,Z,W,1,0,0,0,0,1),this}compose(J,Z,Q){let W=this.elements,Y=Z._x,H=Z._y,K=Z._z,X=Z._w,U=Y+Y,G=H+H,q=K+K,V=Y*U,E=Y*G,D=Y*q,O=H*G,R=H*q,N=K*q,F=X*U,B=X*G,M=X*q,C=Q.x,w=Q.y,L=Q.z;return W[0]=(1-(O+N))*C,W[1]=(E+M)*C,W[2]=(D-B)*C,W[3]=0,W[4]=(E-M)*w,W[5]=(1-(V+N))*w,W[6]=(R+F)*w,W[7]=0,W[8]=(D+B)*L,W[9]=(R-F)*L,W[10]=(1-(V+O))*L,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Z,Q){let W=this.elements,Y=i6.set(W[0],W[1],W[2]).length(),H=i6.set(W[4],W[5],W[6]).length(),K=i6.set(W[8],W[9],W[10]).length();if(this.determinant()<0)Y=-Y;J.x=W[12],J.y=W[13],J.z=W[14],t5.copy(this);let U=1/Y,G=1/H,q=1/K;return t5.elements[0]*=U,t5.elements[1]*=U,t5.elements[2]*=U,t5.elements[4]*=G,t5.elements[5]*=G,t5.elements[6]*=G,t5.elements[8]*=q,t5.elements[9]*=q,t5.elements[10]*=q,Z.setFromRotationMatrix(t5),Q.x=Y,Q.y=H,Q.z=K,this}makePerspective(J,Z,Q,W,Y,H,K=2000){let X=this.elements,U=2*Y/(Z-J),G=2*Y/(Q-W),q=(Z+J)/(Z-J),V=(Q+W)/(Q-W),E,D;if(K===2000)E=-(H+Y)/(H-Y),D=-2*H*Y/(H-Y);else if(K===2001)E=-H/(H-Y),D=-H*Y/(H-Y);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return X[0]=U,X[4]=0,X[8]=q,X[12]=0,X[1]=0,X[5]=G,X[9]=V,X[13]=0,X[2]=0,X[6]=0,X[10]=E,X[14]=D,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Z,Q,W,Y,H,K=2000){let X=this.elements,U=1/(Z-J),G=1/(Q-W),q=1/(H-Y),V=(Z+J)*U,E=(Q+W)*G,D,O;if(K===2000)D=(H+Y)*q,O=-2*q;else if(K===2001)D=Y*q,O=-1*q;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return X[0]=2*U,X[4]=0,X[8]=0,X[12]=-V,X[1]=0,X[5]=2*G,X[9]=0,X[13]=-E,X[2]=0,X[6]=0,X[10]=O,X[14]=-D,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Z=this.elements,Q=J.elements;for(let W=0;W<16;W++)if(Z[W]!==Q[W])return!1;return!0}fromArray(J,Z=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+Z];return this}toArray(J=[],Z=0){let Q=this.elements;return J[Z]=Q[0],J[Z+1]=Q[1],J[Z+2]=Q[2],J[Z+3]=Q[3],J[Z+4]=Q[4],J[Z+5]=Q[5],J[Z+6]=Q[6],J[Z+7]=Q[7],J[Z+8]=Q[8],J[Z+9]=Q[9],J[Z+10]=Q[10],J[Z+11]=Q[11],J[Z+12]=Q[12],J[Z+13]=Q[13],J[Z+14]=Q[14],J[Z+15]=Q[15],J}}var i6=new P,t5=new D5,wW=new P(0,0,0),TW=new P(1,1,1),$6=new P,X9=new P,l5=new P,_4=new D5,g4=new g6;class v9{constructor(J=0,Z=0,Q=0,W=v9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Z,this._z=Q,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Z,Q,W=this._order){return this._x=J,this._y=Z,this._z=Q,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Z=this._order,Q=!0){let W=J.elements,Y=W[0],H=W[4],K=W[8],X=W[1],U=W[5],G=W[9],q=W[2],V=W[6],E=W[10];switch(Z){case"XYZ":if(this._y=Math.asin(C5(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-G,E),this._z=Math.atan2(-H,Y);else this._x=Math.atan2(V,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-C5(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(K,E),this._z=Math.atan2(X,U);else this._y=Math.atan2(-q,Y),this._z=0;break;case"ZXY":if(this._x=Math.asin(C5(V,-1,1)),Math.abs(V)<0.9999999)this._y=Math.atan2(-q,E),this._z=Math.atan2(-H,U);else this._y=0,this._z=Math.atan2(X,Y);break;case"ZYX":if(this._y=Math.asin(-C5(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(V,E),this._z=Math.atan2(X,Y);else this._x=0,this._z=Math.atan2(-H,U);break;case"YZX":if(this._z=Math.asin(C5(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-G,U),this._y=Math.atan2(-q,Y);else this._x=0,this._y=Math.atan2(K,E);break;case"XZY":if(this._z=Math.asin(-C5(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(V,U),this._y=Math.atan2(K,Y);else this._x=Math.atan2(-G,E),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Z)}if(this._order=Z,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,Z,Q){return _4.makeRotationFromQuaternion(J),this.setFromRotationMatrix(_4,Z,Q)}setFromVector3(J,Z=this._order){return this.set(J.x,J.y,J.z,Z)}reorder(J){return g4.setFromEuler(this),this.setFromQuaternion(g4,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}v9.DEFAULT_ORDER="XYZ";class f9{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var SW=0,p4=new P,o6=new g6,D6=new D5,K9=new P,k8=new P,vW=new P,fW=new g6,m4=new P(1,0,0),l4=new P(0,1,0),u4=new P(0,0,1),bW={type:"added"},jW={type:"removed"};class P5 extends _6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:SW++}),this.uuid=V8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=P5.DEFAULT_UP.clone();let J=new P,Z=new v9,Q=new g6,W=new P(1,1,1);function Y(){Q.setFromEuler(Z,!1)}function H(){Z.setFromQuaternion(Q,void 0,!1)}Z._onChange(Y),Q._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Z},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new D5},normalMatrix:{value:new s0}}),this.matrix=new D5,this.matrixWorld=new D5,this.matrixAutoUpdate=P5.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=P5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Z){this.quaternion.setFromAxisAngle(J,Z)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Z){return o6.setFromAxisAngle(J,Z),this.quaternion.multiply(o6),this}rotateOnWorldAxis(J,Z){return o6.setFromAxisAngle(J,Z),this.quaternion.premultiply(o6),this}rotateX(J){return this.rotateOnAxis(m4,J)}rotateY(J){return this.rotateOnAxis(l4,J)}rotateZ(J){return this.rotateOnAxis(u4,J)}translateOnAxis(J,Z){return p4.copy(J).applyQuaternion(this.quaternion),this.position.add(p4.multiplyScalar(Z)),this}translateX(J){return this.translateOnAxis(m4,J)}translateY(J){return this.translateOnAxis(l4,J)}translateZ(J){return this.translateOnAxis(u4,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(D6.copy(this.matrixWorld).invert())}lookAt(J,Z,Q){if(J.isVector3)K9.copy(J);else K9.set(J,Z,Q);let W=this.parent;if(this.updateWorldMatrix(!0,!1),k8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)D6.lookAt(k8,K9,this.up);else D6.lookAt(K9,k8,this.up);if(this.quaternion.setFromRotationMatrix(D6),W)D6.extractRotation(W.matrixWorld),o6.setFromRotationMatrix(D6),this.quaternion.premultiply(o6.invert())}add(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.add(arguments[Z]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D){if(J.parent!==null)J.parent.remove(J);J.parent=this,this.children.push(J),J.dispatchEvent(bW)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let Z=this.children.indexOf(J);if(Z!==-1)J.parent=null,this.children.splice(Z,1),J.dispatchEvent(jW);return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),D6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),D6.multiply(J.parent.matrixWorld);return J.applyMatrix4(D6),this.add(J),J.updateWorldMatrix(!1,!0),this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Z){if(this[J]===Z)return this;for(let Q=0,W=this.children.length;Q<W;Q++){let H=this.children[Q].getObjectByProperty(J,Z);if(H!==void 0)return H}return}getObjectsByProperty(J,Z,Q=[]){if(this[J]===Z)Q.push(this);let W=this.children;for(let Y=0,H=W.length;Y<H;Y++)W[Y].getObjectsByProperty(J,Z,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(k8,J,vW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(k8,fW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Z=this.matrixWorld.elements;return J.set(Z[8],Z[9],Z[10]).normalize()}raycast(){}traverse(J){J(this);let Z=this.children;for(let Q=0,W=Z.length;Q<W;Q++)Z[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Z=this.children;for(let Q=0,W=Z.length;Q<W;Q++)Z[Q].traverseVisible(J)}traverseAncestors(J){let Z=this.parent;if(Z!==null)J(Z),Z.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Z=this.children;for(let Q=0,W=Z.length;Q<W;Q++){let Y=Z[Q];if(Y.matrixWorldAutoUpdate===!0||J===!0)Y.updateMatrixWorld(J)}}updateWorldMatrix(J,Z){let Q=this.parent;if(J===!0&&Q!==null&&Q.matrixWorldAutoUpdate===!0)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Z===!0){let W=this.children;for(let Y=0,H=W.length;Y<H;Y++){let K=W[Y];if(K.matrixWorldAutoUpdate===!0)K.updateWorldMatrix(!1,!0)}}}toJSON(J){let Z=J===void 0||typeof J==="string",Q={};if(Z)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.visibility=this._visibility,W.active=this._active,W.bounds=this._bounds.map((K)=>({boxInitialized:K.boxInitialized,boxMin:K.box.min.toArray(),boxMax:K.box.max.toArray(),sphereInitialized:K.sphereInitialized,sphereRadius:K.sphere.radius,sphereCenter:K.sphere.center.toArray()})),W.maxGeometryCount=this._maxGeometryCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.geometryCount=this._geometryCount,W.matricesTexture=this._matricesTexture.toJSON(J),this.boundingSphere!==null)W.boundingSphere={center:W.boundingSphere.center.toArray(),radius:W.boundingSphere.radius};if(this.boundingBox!==null)W.boundingBox={min:W.boundingBox.min.toArray(),max:W.boundingBox.max.toArray()}}function Y(K,X){if(K[X.uuid]===void 0)K[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Y(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let X=K.shapes;if(Array.isArray(X))for(let U=0,G=X.length;U<G;U++){let q=X[U];Y(J.shapes,q)}else Y(J.shapes,X)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Y(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let X=0,U=this.material.length;X<U;X++)K.push(Y(J.materials,this.material[X]));W.material=K}else W.material=Y(J.materials,this.material);if(this.children.length>0){W.children=[];for(let K=0;K<this.children.length;K++)W.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let K=0;K<this.animations.length;K++){let X=this.animations[K];W.animations.push(Y(J.animations,X))}}if(Z){let K=H(J.geometries),X=H(J.materials),U=H(J.textures),G=H(J.images),q=H(J.shapes),V=H(J.skeletons),E=H(J.animations),D=H(J.nodes);if(K.length>0)Q.geometries=K;if(X.length>0)Q.materials=X;if(U.length>0)Q.textures=U;if(G.length>0)Q.images=G;if(q.length>0)Q.shapes=q;if(V.length>0)Q.skeletons=V;if(E.length>0)Q.animations=E;if(D.length>0)Q.nodes=D}return Q.object=W,Q;function H(K){let X=[];for(let U in K){let G=K[U];delete G.metadata,X.push(G)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Z=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Z===!0)for(let Q=0;Q<J.children.length;Q++){let W=J.children[Q];this.add(W.clone())}return this}}P5.DEFAULT_UP=new P(0,1,0);P5.DEFAULT_MATRIX_AUTO_UPDATE=!0;P5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var e5=new P,N6=new P,C7=new P,O6=new P,r6=new P,a6=new P,d4=new P,k7=new P,L7=new P,P7=new P,U9=!1;class J6{constructor(J=new P,Z=new P,Q=new P){this.a=J,this.b=Z,this.c=Q}static getNormal(J,Z,Q,W){W.subVectors(Q,Z),e5.subVectors(J,Z),W.cross(e5);let Y=W.lengthSq();if(Y>0)return W.multiplyScalar(1/Math.sqrt(Y));return W.set(0,0,0)}static getBarycoord(J,Z,Q,W,Y){e5.subVectors(W,Z),N6.subVectors(Q,Z),C7.subVectors(J,Z);let H=e5.dot(e5),K=e5.dot(N6),X=e5.dot(C7),U=N6.dot(N6),G=N6.dot(C7),q=H*U-K*K;if(q===0)return Y.set(0,0,0),null;let V=1/q,E=(U*X-K*G)*V,D=(H*G-K*X)*V;return Y.set(1-E-D,D,E)}static containsPoint(J,Z,Q,W){if(this.getBarycoord(J,Z,Q,W,O6)===null)return!1;return O6.x>=0&&O6.y>=0&&O6.x+O6.y<=1}static getUV(J,Z,Q,W,Y,H,K,X){if(U9===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),U9=!0;return this.getInterpolation(J,Z,Q,W,Y,H,K,X)}static getInterpolation(J,Z,Q,W,Y,H,K,X){if(this.getBarycoord(J,Z,Q,W,O6)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(Y,O6.x),X.addScaledVector(H,O6.y),X.addScaledVector(K,O6.z),X}static isFrontFacing(J,Z,Q,W){return e5.subVectors(Q,Z),N6.subVectors(J,Z),e5.cross(N6).dot(W)<0?!0:!1}set(J,Z,Q){return this.a.copy(J),this.b.copy(Z),this.c.copy(Q),this}setFromPointsAndIndices(J,Z,Q,W){return this.a.copy(J[Z]),this.b.copy(J[Q]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Z,Q,W){return this.a.fromBufferAttribute(J,Z),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return e5.subVectors(this.c,this.b),N6.subVectors(this.a,this.b),e5.cross(N6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return J6.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Z){return J6.getBarycoord(J,this.a,this.b,this.c,Z)}getUV(J,Z,Q,W,Y){if(U9===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),U9=!0;return J6.getInterpolation(J,this.a,this.b,this.c,Z,Q,W,Y)}getInterpolation(J,Z,Q,W,Y){return J6.getInterpolation(J,this.a,this.b,this.c,Z,Q,W,Y)}containsPoint(J){return J6.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return J6.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Z){let Q=this.a,W=this.b,Y=this.c,H,K;r6.subVectors(W,Q),a6.subVectors(Y,Q),k7.subVectors(J,Q);let X=r6.dot(k7),U=a6.dot(k7);if(X<=0&&U<=0)return Z.copy(Q);L7.subVectors(J,W);let G=r6.dot(L7),q=a6.dot(L7);if(G>=0&&q<=G)return Z.copy(W);let V=X*q-G*U;if(V<=0&&X>=0&&G<=0)return H=X/(X-G),Z.copy(Q).addScaledVector(r6,H);P7.subVectors(J,Y);let E=r6.dot(P7),D=a6.dot(P7);if(D>=0&&E<=D)return Z.copy(Y);let O=E*U-X*D;if(O<=0&&U>=0&&D<=0)return K=U/(U-D),Z.copy(Q).addScaledVector(a6,K);let R=G*D-E*q;if(R<=0&&q-G>=0&&E-D>=0)return d4.subVectors(Y,W),K=(q-G)/(q-G+(E-D)),Z.copy(W).addScaledVector(d4,K);let N=1/(R+O+V);return H=O*N,K=V*N,Z.copy(Q).addScaledVector(r6,H).addScaledVector(a6,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var SZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},C6={h:0,s:0,l:0},G9={h:0,s:0,l:0};function w7(J,Z,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+(Z-J)*6*Q;if(Q<0.5)return Z;if(Q<0.6666666666666666)return J+(Z-J)*6*(0.6666666666666666-Q);return J}class g0{constructor(J,Z,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Z,Q)}set(J,Z,Q){if(Z===void 0&&Q===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Z,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Z="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,W5.toWorkingColorSpace(this,Z),this}setRGB(J,Z,Q,W=W5.workingColorSpace){return this.r=J,this.g=Z,this.b=Q,W5.toWorkingColorSpace(this,W),this}setHSL(J,Z,Q,W=W5.workingColorSpace){if(J=IW(J,1),Z=C5(Z,0,1),Q=C5(Q,0,1),Z===0)this.r=this.g=this.b=Q;else{let Y=Q<=0.5?Q*(1+Z):Q+Z-Q*Z,H=2*Q-Y;this.r=w7(H,Y,J+0.3333333333333333),this.g=w7(H,Y,J),this.b=w7(H,Y,J-0.3333333333333333)}return W5.toWorkingColorSpace(this,W),this}setStyle(J,Z="srgb"){function Q(Y){if(Y===void 0)return;if(parseFloat(Y)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Y,H=W[1],K=W[2];switch(H){case"rgb":case"rgba":if(Y=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setRGB(Math.min(255,parseInt(Y[1],10))/255,Math.min(255,parseInt(Y[2],10))/255,Math.min(255,parseInt(Y[3],10))/255,Z);if(Y=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setRGB(Math.min(100,parseInt(Y[1],10))/100,Math.min(100,parseInt(Y[2],10))/100,Math.min(100,parseInt(Y[3],10))/100,Z);break;case"hsl":case"hsla":if(Y=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setHSL(parseFloat(Y[1])/360,parseFloat(Y[2])/100,parseFloat(Y[3])/100,Z);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Y=W[1],H=Y.length;if(H===3)return this.setRGB(parseInt(Y.charAt(0),16)/15,parseInt(Y.charAt(1),16)/15,parseInt(Y.charAt(2),16)/15,Z);else if(H===6)return this.setHex(parseInt(Y,16),Z);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Z);return this}setColorName(J,Z="srgb"){let Q=SZ[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,Z);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=U8(J.r),this.g=U8(J.g),this.b=U8(J.b),this}copyLinearToSRGB(J){return this.r=O7(J.r),this.g=O7(J.g),this.b=O7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return W5.fromWorkingColorSpace(v5.copy(this),J),Math.round(C5(v5.r*255,0,255))*65536+Math.round(C5(v5.g*255,0,255))*256+Math.round(C5(v5.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Z=W5.workingColorSpace){W5.fromWorkingColorSpace(v5.copy(this),Z);let{r:Q,g:W,b:Y}=v5,H=Math.max(Q,W,Y),K=Math.min(Q,W,Y),X,U,G=(K+H)/2;if(K===H)X=0,U=0;else{let q=H-K;switch(U=G<=0.5?q/(H+K):q/(2-H-K),H){case Q:X=(W-Y)/q+(W<Y?6:0);break;case W:X=(Y-Q)/q+2;break;case Y:X=(Q-W)/q+4;break}X/=6}return J.h=X,J.s=U,J.l=G,J}getRGB(J,Z=W5.workingColorSpace){return W5.fromWorkingColorSpace(v5.copy(this),Z),J.r=v5.r,J.g=v5.g,J.b=v5.b,J}getStyle(J="srgb"){W5.fromWorkingColorSpace(v5.copy(this),J);let{r:Z,g:Q,b:W}=v5;if(J!=="srgb")return`color(${J} ${Z.toFixed(3)} ${Q.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Z*255)},${Math.round(Q*255)},${Math.round(W*255)})`}offsetHSL(J,Z,Q){return this.getHSL(C6),this.setHSL(C6.h+J,C6.s+Z,C6.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Z){return this.r=J.r+Z.r,this.g=J.g+Z.g,this.b=J.b+Z.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Z){return this.r+=(J.r-this.r)*Z,this.g+=(J.g-this.g)*Z,this.b+=(J.b-this.b)*Z,this}lerpColors(J,Z,Q){return this.r=J.r+(Z.r-J.r)*Q,this.g=J.g+(Z.g-J.g)*Q,this.b=J.b+(Z.b-J.b)*Q,this}lerpHSL(J,Z){this.getHSL(C6),J.getHSL(G9);let Q=D7(C6.h,G9.h,Z),W=D7(C6.s,G9.s,Z),Y=D7(C6.l,G9.l,Z);return this.setHSL(Q,W,Y),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Z=this.r,Q=this.g,W=this.b,Y=J.elements;return this.r=Y[0]*Z+Y[3]*Q+Y[6]*W,this.g=Y[1]*Z+Y[4]*Q+Y[7]*W,this.b=Y[2]*Z+Y[5]*Q+Y[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Z=0){return this.r=J[Z],this.g=J[Z+1],this.b=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.r,J[Z+1]=this.g,J[Z+2]=this.b,J}fromBufferAttribute(J,Z){return this.r=J.getX(Z),this.g=J.getY(Z),this.b=J.getZ(Z),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var v5=new g0;g0.NAMES=SZ;var hW=0;class E8 extends _6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:hW++}),this.uuid=V8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new g0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Z in J){let Q=J[Z];if(Q===void 0){console.warn(`THREE.Material: parameter '${Z}' has value of undefined.`);continue}let W=this[Z];if(W===void 0){console.warn(`THREE.Material: '${Z}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set(Q);else if(W&&W.isVector3&&(Q&&Q.isVector3))W.copy(Q);else this[Z]=Q}}toJSON(J){let Z=J===void 0||typeof J==="string";if(Z)J={textures:{},images:{}};let Q={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function W(Y){let H=[];for(let K in Y){let X=Y[K];delete X.metadata,H.push(X)}return H}if(Z){let Y=W(J.textures),H=W(J.images);if(Y.length>0)Q.textures=Y;if(H.length>0)Q.images=H}return Q}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Z=J.clippingPlanes,Q=null;if(Z!==null){let W=Z.length;Q=Array(W);for(let Y=0;Y!==W;++Y)Q[Y]=Z[Y].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class k5 extends E8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new g0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var O5=new P,V9=new F0;class Z6{constructor(J,Z,Q=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=Z,this.count=J!==void 0?J.length/Z:0,this.normalized=Q,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Z){this.updateRanges.push({start:J,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Z,Q){J*=this.itemSize,Q*=Z.itemSize;for(let W=0,Y=this.itemSize;W<Y;W++)this.array[J+W]=Z.array[Q+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Z=0,Q=this.count;Z<Q;Z++)V9.fromBufferAttribute(this,Z),V9.applyMatrix3(J),this.setXY(Z,V9.x,V9.y);else if(this.itemSize===3)for(let Z=0,Q=this.count;Z<Q;Z++)O5.fromBufferAttribute(this,Z),O5.applyMatrix3(J),this.setXYZ(Z,O5.x,O5.y,O5.z);return this}applyMatrix4(J){for(let Z=0,Q=this.count;Z<Q;Z++)O5.fromBufferAttribute(this,Z),O5.applyMatrix4(J),this.setXYZ(Z,O5.x,O5.y,O5.z);return this}applyNormalMatrix(J){for(let Z=0,Q=this.count;Z<Q;Z++)O5.fromBufferAttribute(this,Z),O5.applyNormalMatrix(J),this.setXYZ(Z,O5.x,O5.y,O5.z);return this}transformDirection(J){for(let Z=0,Q=this.count;Z<Q;Z++)O5.fromBufferAttribute(this,Z),O5.transformDirection(J),this.setXYZ(Z,O5.x,O5.y,O5.z);return this}set(J,Z=0){return this.array.set(J,Z),this}getComponent(J,Z){let Q=this.array[J*this.itemSize+Z];if(this.normalized)Q=I8(Q,this.array);return Q}setComponent(J,Z,Q){if(this.normalized)Q=g5(Q,this.array);return this.array[J*this.itemSize+Z]=Q,this}getX(J){let Z=this.array[J*this.itemSize];if(this.normalized)Z=I8(Z,this.array);return Z}setX(J,Z){if(this.normalized)Z=g5(Z,this.array);return this.array[J*this.itemSize]=Z,this}getY(J){let Z=this.array[J*this.itemSize+1];if(this.normalized)Z=I8(Z,this.array);return Z}setY(J,Z){if(this.normalized)Z=g5(Z,this.array);return this.array[J*this.itemSize+1]=Z,this}getZ(J){let Z=this.array[J*this.itemSize+2];if(this.normalized)Z=I8(Z,this.array);return Z}setZ(J,Z){if(this.normalized)Z=g5(Z,this.array);return this.array[J*this.itemSize+2]=Z,this}getW(J){let Z=this.array[J*this.itemSize+3];if(this.normalized)Z=I8(Z,this.array);return Z}setW(J,Z){if(this.normalized)Z=g5(Z,this.array);return this.array[J*this.itemSize+3]=Z,this}setXY(J,Z,Q){if(J*=this.itemSize,this.normalized)Z=g5(Z,this.array),Q=g5(Q,this.array);return this.array[J+0]=Z,this.array[J+1]=Q,this}setXYZ(J,Z,Q,W){if(J*=this.itemSize,this.normalized)Z=g5(Z,this.array),Q=g5(Q,this.array),W=g5(W,this.array);return this.array[J+0]=Z,this.array[J+1]=Q,this.array[J+2]=W,this}setXYZW(J,Z,Q,W,Y){if(J*=this.itemSize,this.normalized)Z=g5(Z,this.array),Q=g5(Q,this.array),W=g5(W,this.array),Y=g5(Y,this.array);return this.array[J+0]=Z,this.array[J+1]=Q,this.array[J+2]=W,this.array[J+3]=Y,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class JJ extends Z6{constructor(J,Z,Q){super(new Uint16Array(J),Z,Q)}}class ZJ extends Z6{constructor(J,Z,Q){super(new Uint32Array(J),Z,Q)}}class e0 extends Z6{constructor(J,Z,Q){super(new Float32Array(J),Z,Q)}}var yW=0,o5=new D5,T7=new P5,t6=new P,u5=new q8,L8=new q8,$5=new P;class x5 extends _6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yW++}),this.uuid=V8(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((PZ(J))?ZJ:JJ)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,Z){return this.attributes[J]=Z,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Z,Q=0){this.groups.push({start:J,count:Z,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,Z){this.drawRange.start=J,this.drawRange.count=Z}applyMatrix4(J){let Z=this.attributes.position;if(Z!==void 0)Z.applyMatrix4(J),Z.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let Y=new s0().getNormalMatrix(J);Q.applyNormalMatrix(Y),Q.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return o5.makeRotationFromQuaternion(J),this.applyMatrix4(o5),this}rotateX(J){return o5.makeRotationX(J),this.applyMatrix4(o5),this}rotateY(J){return o5.makeRotationY(J),this.applyMatrix4(o5),this}rotateZ(J){return o5.makeRotationZ(J),this.applyMatrix4(o5),this}translate(J,Z,Q){return o5.makeTranslation(J,Z,Q),this.applyMatrix4(o5),this}scale(J,Z,Q){return o5.makeScale(J,Z,Q),this.applyMatrix4(o5),this}lookAt(J){return T7.lookAt(J),T7.updateMatrix(),this.applyMatrix4(T7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(t6).negate(),this.translate(t6.x,t6.y,t6.z),this}setFromPoints(J){let Z=[];for(let Q=0,W=J.length;Q<W;Q++){let Y=J[Q];Z.push(Y.x,Y.y,Y.z||0)}return this.setAttribute("position",new e0(Z,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new q8;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Z)for(let Q=0,W=Z.length;Q<W;Q++){let Y=Z[Q];if(u5.setFromBufferAttribute(Y),this.morphTargetsRelative)$5.addVectors(this.boundingBox.min,u5.min),this.boundingBox.expandByPoint($5),$5.addVectors(this.boundingBox.max,u5.max),this.boundingBox.expandByPoint($5);else this.boundingBox.expandByPoint(u5.min),this.boundingBox.expandByPoint(u5.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new S9;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(J){let Q=this.boundingSphere.center;if(u5.setFromBufferAttribute(J),Z)for(let Y=0,H=Z.length;Y<H;Y++){let K=Z[Y];if(L8.setFromBufferAttribute(K),this.morphTargetsRelative)$5.addVectors(u5.min,L8.min),u5.expandByPoint($5),$5.addVectors(u5.max,L8.max),u5.expandByPoint($5);else u5.expandByPoint(L8.min),u5.expandByPoint(L8.max)}u5.getCenter(Q);let W=0;for(let Y=0,H=J.count;Y<H;Y++)$5.fromBufferAttribute(J,Y),W=Math.max(W,Q.distanceToSquared($5));if(Z)for(let Y=0,H=Z.length;Y<H;Y++){let K=Z[Y],X=this.morphTargetsRelative;for(let U=0,G=K.count;U<G;U++){if($5.fromBufferAttribute(K,U),X)t6.fromBufferAttribute(J,U),$5.add(t6);W=Math.max(W,Q.distanceToSquared($5))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Z=this.attributes;if(J===null||Z.position===void 0||Z.normal===void 0||Z.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let Q=J.array,W=Z.position.array,Y=Z.normal.array,H=Z.uv.array,K=W.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Z6(new Float32Array(4*K),4));let X=this.getAttribute("tangent").array,U=[],G=[];for(let A=0;A<K;A++)U[A]=new P,G[A]=new P;let q=new P,V=new P,E=new P,D=new F0,O=new F0,R=new F0,N=new P,F=new P;function B(A,k,v){q.fromArray(W,A*3),V.fromArray(W,k*3),E.fromArray(W,v*3),D.fromArray(H,A*2),O.fromArray(H,k*2),R.fromArray(H,v*2),V.sub(q),E.sub(q),O.sub(D),R.sub(D);let n=1/(O.x*R.y-R.x*O.y);if(!isFinite(n))return;N.copy(V).multiplyScalar(R.y).addScaledVector(E,-O.y).multiplyScalar(n),F.copy(E).multiplyScalar(O.x).addScaledVector(V,-R.x).multiplyScalar(n),U[A].add(N),U[k].add(N),U[v].add(N),G[A].add(F),G[k].add(F),G[v].add(F)}let M=this.groups;if(M.length===0)M=[{start:0,count:Q.length}];for(let A=0,k=M.length;A<k;++A){let v=M[A],n=v.start,i=v.count;for(let T=n,x=n+i;T<x;T+=3)B(Q[T+0],Q[T+1],Q[T+2])}let C=new P,w=new P,L=new P,f=new P;function p(A){L.fromArray(Y,A*3),f.copy(L);let k=U[A];C.copy(k),C.sub(L.multiplyScalar(L.dot(k))).normalize(),w.crossVectors(f,k);let n=w.dot(G[A])<0?-1:1;X[A*4]=C.x,X[A*4+1]=C.y,X[A*4+2]=C.z,X[A*4+3]=n}for(let A=0,k=M.length;A<k;++A){let v=M[A],n=v.start,i=v.count;for(let T=n,x=n+i;T<x;T+=3)p(Q[T+0]),p(Q[T+1]),p(Q[T+2])}}computeVertexNormals(){let J=this.index,Z=this.getAttribute("position");if(Z!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new Z6(new Float32Array(Z.count*3),3),this.setAttribute("normal",Q);else for(let V=0,E=Q.count;V<E;V++)Q.setXYZ(V,0,0,0);let W=new P,Y=new P,H=new P,K=new P,X=new P,U=new P,G=new P,q=new P;if(J)for(let V=0,E=J.count;V<E;V+=3){let D=J.getX(V+0),O=J.getX(V+1),R=J.getX(V+2);W.fromBufferAttribute(Z,D),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,R),G.subVectors(H,Y),q.subVectors(W,Y),G.cross(q),K.fromBufferAttribute(Q,D),X.fromBufferAttribute(Q,O),U.fromBufferAttribute(Q,R),K.add(G),X.add(G),U.add(G),Q.setXYZ(D,K.x,K.y,K.z),Q.setXYZ(O,X.x,X.y,X.z),Q.setXYZ(R,U.x,U.y,U.z)}else for(let V=0,E=Z.count;V<E;V+=3)W.fromBufferAttribute(Z,V+0),Y.fromBufferAttribute(Z,V+1),H.fromBufferAttribute(Z,V+2),G.subVectors(H,Y),q.subVectors(W,Y),G.cross(q),Q.setXYZ(V+0,G.x,G.y,G.z),Q.setXYZ(V+1,G.x,G.y,G.z),Q.setXYZ(V+2,G.x,G.y,G.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Z=0,Q=J.count;Z<Q;Z++)$5.fromBufferAttribute(J,Z),$5.normalize(),J.setXYZ(Z,$5.x,$5.y,$5.z)}toNonIndexed(){function J(K,X){let{array:U,itemSize:G,normalized:q}=K,V=new U.constructor(X.length*G),E=0,D=0;for(let O=0,R=X.length;O<R;O++){if(K.isInterleavedBufferAttribute)E=X[O]*K.data.stride+K.offset;else E=X[O]*G;for(let N=0;N<G;N++)V[D++]=U[E++]}return new Z6(V,G,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Z=new x5,Q=this.index.array,W=this.attributes;for(let K in W){let X=W[K],U=J(X,Q);Z.setAttribute(K,U)}let Y=this.morphAttributes;for(let K in Y){let X=[],U=Y[K];for(let G=0,q=U.length;G<q;G++){let V=U[G],E=J(V,Q);X.push(E)}Z.morphAttributes[K]=X}Z.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let K=0,X=H.length;K<X;K++){let U=H[K];Z.addGroup(U.start,U.count,U.materialIndex)}return Z}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let U in X)if(X[U]!==void 0)J[U]=X[U];return J}J.data={attributes:{}};let Z=this.index;if(Z!==null)J.data.index={type:Z.array.constructor.name,array:Array.prototype.slice.call(Z.array)};let Q=this.attributes;for(let X in Q){let U=Q[X];J.data.attributes[X]=U.toJSON(J.data)}let W={},Y=!1;for(let X in this.morphAttributes){let U=this.morphAttributes[X],G=[];for(let q=0,V=U.length;q<V;q++){let E=U[q];G.push(E.toJSON(J.data))}if(G.length>0)W[X]=G,Y=!0}if(Y)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere={center:K.center.toArray(),radius:K.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Z={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone(Z));let W=J.attributes;for(let U in W){let G=W[U];this.setAttribute(U,G.clone(Z))}let Y=J.morphAttributes;for(let U in Y){let G=[],q=Y[U];for(let V=0,E=q.length;V<E;V++)G.push(q[V].clone(Z));this.morphAttributes[U]=G}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let U=0,G=H.length;U<G;U++){let q=H[U];this.addGroup(q.start,q.count,q.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var c4=new D5,b6=new e7,q9=new S9,n4=new P,e6=new P,J8=new P,Z8=new P,S7=new P,E9=new P,F9=new F0,D9=new F0,N9=new F0,s4=new P,i4=new P,o4=new P,O9=new P,R9=new P;class Y0 extends P5{constructor(J=new x5,Z=new k5){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Z,this.updateMorphTargets()}copy(J,Z){if(super.copy(J,Z),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Z=this.geometry.morphAttributes,Q=Object.keys(Z);if(Q.length>0){let W=Z[Q[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Y=0,H=W.length;Y<H;Y++){let K=W[Y].name||String(Y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Y}}}}getVertexPosition(J,Z){let Q=this.geometry,W=Q.attributes.position,Y=Q.morphAttributes.position,H=Q.morphTargetsRelative;Z.fromBufferAttribute(W,J);let K=this.morphTargetInfluences;if(Y&&K){E9.set(0,0,0);for(let X=0,U=Y.length;X<U;X++){let G=K[X],q=Y[X];if(G===0)continue;if(S7.fromBufferAttribute(q,J),H)E9.addScaledVector(S7,G);else E9.addScaledVector(S7.sub(Z),G)}Z.add(E9)}return Z}raycast(J,Z){let Q=this.geometry,W=this.material,Y=this.matrixWorld;if(W===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(q9.copy(Q.boundingSphere),q9.applyMatrix4(Y),b6.copy(J.ray).recast(J.near),q9.containsPoint(b6.origin)===!1){if(b6.intersectSphere(q9,n4)===null)return;if(b6.origin.distanceToSquared(n4)>(J.far-J.near)**2)return}if(c4.copy(Y).invert(),b6.copy(J.ray).applyMatrix4(c4),Q.boundingBox!==null){if(b6.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,Z,b6)}_computeIntersections(J,Z,Q){let W,Y=this.geometry,H=this.material,K=Y.index,X=Y.attributes.position,U=Y.attributes.uv,G=Y.attributes.uv1,q=Y.attributes.normal,V=Y.groups,E=Y.drawRange;if(K!==null)if(Array.isArray(H))for(let D=0,O=V.length;D<O;D++){let R=V[D],N=H[R.materialIndex],F=Math.max(R.start,E.start),B=Math.min(K.count,Math.min(R.start+R.count,E.start+E.count));for(let M=F,C=B;M<C;M+=3){let w=K.getX(M),L=K.getX(M+1),f=K.getX(M+2);if(W=M9(this,N,J,Q,U,G,q,w,L,f),W)W.faceIndex=Math.floor(M/3),W.face.materialIndex=R.materialIndex,Z.push(W)}}else{let D=Math.max(0,E.start),O=Math.min(K.count,E.start+E.count);for(let R=D,N=O;R<N;R+=3){let F=K.getX(R),B=K.getX(R+1),M=K.getX(R+2);if(W=M9(this,H,J,Q,U,G,q,F,B,M),W)W.faceIndex=Math.floor(R/3),Z.push(W)}}else if(X!==void 0)if(Array.isArray(H))for(let D=0,O=V.length;D<O;D++){let R=V[D],N=H[R.materialIndex],F=Math.max(R.start,E.start),B=Math.min(X.count,Math.min(R.start+R.count,E.start+E.count));for(let M=F,C=B;M<C;M+=3){let w=M,L=M+1,f=M+2;if(W=M9(this,N,J,Q,U,G,q,w,L,f),W)W.faceIndex=Math.floor(M/3),W.face.materialIndex=R.materialIndex,Z.push(W)}}else{let D=Math.max(0,E.start),O=Math.min(X.count,E.start+E.count);for(let R=D,N=O;R<N;R+=3){let F=R,B=R+1,M=R+2;if(W=M9(this,H,J,Q,U,G,q,F,B,M),W)W.faceIndex=Math.floor(R/3),Z.push(W)}}}}function xW(J,Z,Q,W,Y,H,K,X){let U;if(Z.side===1)U=W.intersectTriangle(K,H,Y,!0,X);else U=W.intersectTriangle(Y,H,K,Z.side===0,X);if(U===null)return null;R9.copy(X),R9.applyMatrix4(J.matrixWorld);let G=Q.ray.origin.distanceTo(R9);if(G<Q.near||G>Q.far)return null;return{distance:G,point:R9.clone(),object:J}}function M9(J,Z,Q,W,Y,H,K,X,U,G){J.getVertexPosition(X,e6),J.getVertexPosition(U,J8),J.getVertexPosition(G,Z8);let q=xW(J,Z,Q,W,e6,J8,Z8,O9);if(q){if(Y)F9.fromBufferAttribute(Y,X),D9.fromBufferAttribute(Y,U),N9.fromBufferAttribute(Y,G),q.uv=J6.getInterpolation(O9,e6,J8,Z8,F9,D9,N9,new F0);if(H)F9.fromBufferAttribute(H,X),D9.fromBufferAttribute(H,U),N9.fromBufferAttribute(H,G),q.uv1=J6.getInterpolation(O9,e6,J8,Z8,F9,D9,N9,new F0),q.uv2=q.uv1;if(K){if(s4.fromBufferAttribute(K,X),i4.fromBufferAttribute(K,U),o4.fromBufferAttribute(K,G),q.normal=J6.getInterpolation(O9,e6,J8,Z8,s4,i4,o4,new P),q.normal.dot(W.direction)>0)q.normal.multiplyScalar(-1)}let V={a:X,b:U,c:G,normal:new P,materialIndex:0};J6.getNormal(e6,J8,Z8,V.normal),q.face=V}return q}class j0 extends x5{constructor(J=1,Z=1,Q=1,W=1,Y=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Z,depth:Q,widthSegments:W,heightSegments:Y,depthSegments:H};let K=this;W=Math.floor(W),Y=Math.floor(Y),H=Math.floor(H);let X=[],U=[],G=[],q=[],V=0,E=0;D("z","y","x",-1,-1,Q,Z,J,H,Y,0),D("z","y","x",1,-1,Q,Z,-J,H,Y,1),D("x","z","y",1,1,J,Q,Z,W,H,2),D("x","z","y",1,-1,J,Q,-Z,W,H,3),D("x","y","z",1,-1,J,Z,Q,W,Y,4),D("x","y","z",-1,-1,J,Z,-Q,W,Y,5),this.setIndex(X),this.setAttribute("position",new e0(U,3)),this.setAttribute("normal",new e0(G,3)),this.setAttribute("uv",new e0(q,2));function D(O,R,N,F,B,M,C,w,L,f,p){let A=M/L,k=C/f,v=M/2,n=C/2,i=w/2,T=L+1,x=f+1,u=0,r=0,c=new P;for(let d=0;d<x;d++){let t=d*k-n;for(let W0=0;W0<T;W0++){let y=W0*A-v;c[O]=y*F,c[R]=t*B,c[N]=i,U.push(c.x,c.y,c.z),c[O]=0,c[R]=0,c[N]=w>0?1:-1,G.push(c.x,c.y,c.z),q.push(W0/L),q.push(1-d/f),u+=1}}for(let d=0;d<f;d++)for(let t=0;t<L;t++){let W0=V+t+T*d,y=V+t+T*(d+1),o=V+(t+1)+T*(d+1),X0=V+(t+1)+T*d;X.push(W0,y,X0),X.push(y,o,X0),r+=6}K.addGroup(E,r,p),E+=r,V+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function G8(J){let Z={};for(let Q in J){Z[Q]={};for(let W in J[Q]){let Y=J[Q][W];if(Y&&(Y.isColor||Y.isMatrix3||Y.isMatrix4||Y.isVector2||Y.isVector3||Y.isVector4||Y.isTexture||Y.isQuaternion))if(Y.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[Q][W]=null;else Z[Q][W]=Y.clone();else if(Array.isArray(Y))Z[Q][W]=Y.slice();else Z[Q][W]=Y}}return Z}function h5(J){let Z={};for(let Q=0;Q<J.length;Q++){let W=G8(J[Q]);for(let Y in W)Z[Y]=W[Y]}return Z}function _W(J){let Z=[];for(let Q=0;Q<J.length;Q++)Z.push(J[Q].clone());return Z}function vZ(J){if(J.getRenderTarget()===null)return J.outputColorSpace;return W5.workingColorSpace}var gW={clone:G8,merge:h5},pW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class L6 extends E8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pW,this.fragmentShader=mW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=G8(J.uniforms),this.uniformsGroups=_W(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Z=super.toJSON(J);Z.glslVersion=this.glslVersion,Z.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)Z.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Z.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Z.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Z.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Z.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Z.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Z.uniforms[W]={type:"m4",value:H.toArray()};else Z.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)Z.defines=this.defines;Z.vertexShader=this.vertexShader,Z.fragmentShader=this.fragmentShader,Z.lights=this.lights,Z.clipping=this.clipping;let Q={};for(let W in this.extensions)if(this.extensions[W]===!0)Q[W]=!0;if(Object.keys(Q).length>0)Z.extensions=Q;return Z}}class QJ extends P5{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new D5,this.projectionMatrix=new D5,this.projectionMatrixInverse=new D5,this.coordinateSystem=2000}copy(J,Z){return super.copy(J,Z),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Z){super.updateWorldMatrix(J,Z),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class y5 extends QJ{constructor(J=50,Z=1,Q=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=W,this.focus=10,this.aspect=Z,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Z=0.5*this.getFilmHeight()/J;this.fov=l7*2*Math.atan(Z),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(F7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return l7*2*Math.atan(Math.tan(F7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(J,Z,Q,W,Y,H){if(this.aspect=J/Z,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=Q,this.view.offsetY=W,this.view.width=Y,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Z=J*Math.tan(F7*0.5*this.fov)/this.zoom,Q=2*Z,W=this.aspect*Q,Y=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:U}=H;Y+=H.offsetX*W/X,Z-=H.offsetY*Q/U,W*=H.width/X,Q*=H.height/U}let K=this.filmOffset;if(K!==0)Y+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(Y,Y+W,Z,Z-Q,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.fov=this.fov,Z.object.zoom=this.zoom,Z.object.near=this.near,Z.object.far=this.far,Z.object.focus=this.focus,Z.object.aspect=this.aspect,this.view!==null)Z.object.view=Object.assign({},this.view);return Z.object.filmGauge=this.filmGauge,Z.object.filmOffset=this.filmOffset,Z}}var Q8=-90,W8=1;class fZ extends P5{constructor(J,Z,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new y5(Q8,W8,J,Z);W.layers=this.layers,this.add(W);let Y=new y5(Q8,W8,J,Z);Y.layers=this.layers,this.add(Y);let H=new y5(Q8,W8,J,Z);H.layers=this.layers,this.add(H);let K=new y5(Q8,W8,J,Z);K.layers=this.layers,this.add(K);let X=new y5(Q8,W8,J,Z);X.layers=this.layers,this.add(X);let U=new y5(Q8,W8,J,Z);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Z=this.children.concat(),[Q,W,Y,H,K,X]=Z;for(let U of Z)this.remove(U);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Y.up.set(0,0,-1),Y.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Y.up.set(0,0,1),Y.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Z)this.add(U),U.updateMatrixWorld()}update(J,Z){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Y,H,K,X,U,G]=this.children,q=J.getRenderTarget(),V=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,J.setRenderTarget(Q,0,W),J.render(Z,Y),J.setRenderTarget(Q,1,W),J.render(Z,H),J.setRenderTarget(Q,2,W),J.render(Z,K),J.setRenderTarget(Q,3,W),J.render(Z,X),J.setRenderTarget(Q,4,W),J.render(Z,U),Q.texture.generateMipmaps=O,J.setRenderTarget(Q,5,W),J.render(Z,G),J.setRenderTarget(q,V,E),J.xr.enabled=D,Q.texture.needsPMREMUpdate=!0}}class WJ extends p5{constructor(J,Z,Q,W,Y,H,K,X,U,G){J=J!==void 0?J:[],Z=Z!==void 0?Z:301;super(J,Z,Q,W,Y,H,K,X,U,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class bZ extends k6{constructor(J=1,Z={}){super(J,J,Z);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},W=[Q,Q,Q,Q,Q,Q];if(Z.encoding!==void 0)w8("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),Z.colorSpace=Z.encoding===3001?"srgb":"";this.texture=new WJ(W,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Z.generateMipmaps!==void 0?Z.generateMipmaps:!1,this.texture.minFilter=Z.minFilter!==void 0?Z.minFilter:1006}fromEquirectangularTexture(J,Z){this.texture.type=Z.type,this.texture.colorSpace=Z.colorSpace,this.texture.generateMipmaps=Z.generateMipmaps,this.texture.minFilter=Z.minFilter,this.texture.magFilter=Z.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},W=new j0(5,5,5),Y=new L6({name:"CubemapFromEquirect",uniforms:G8(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});Y.uniforms.tEquirect.value=Z;let H=new Y0(W,Y),K=Z.minFilter;if(Z.minFilter===1008)Z.minFilter=1006;return new fZ(1,10,this).update(J,H),Z.minFilter=K,H.geometry.dispose(),H.material.dispose(),this}clear(J,Z,Q,W){let Y=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Z,Q,W);J.setRenderTarget(Y)}}var v7=new P,lW=new P,uW=new s0;class K6{constructor(J=new P(1,0,0),Z=0){this.isPlane=!0,this.normal=J,this.constant=Z}set(J,Z){return this.normal.copy(J),this.constant=Z,this}setComponents(J,Z,Q,W){return this.normal.set(J,Z,Q),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Z){return this.normal.copy(J),this.constant=-Z.dot(this.normal),this}setFromCoplanarPoints(J,Z,Q){let W=v7.subVectors(Q,Z).cross(lW.subVectors(J,Z)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Z){return Z.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Z){let Q=J.delta(v7),W=this.normal.dot(Q);if(W===0){if(this.distanceToPoint(J.start)===0)return Z.copy(J.start);return null}let Y=-(J.start.dot(this.normal)+this.constant)/W;if(Y<0||Y>1)return null;return Z.copy(J.start).addScaledVector(Q,Y)}intersectsLine(J){let Z=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return Z<0&&Q>0||Q<0&&Z>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Z){let Q=Z||uW.getNormalMatrix(J),W=this.coplanarPoint(v7).applyMatrix4(J),Y=this.normal.applyMatrix3(Q).normalize();return this.constant=-W.dot(Y),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var j6=new S9,z9=new P;class b9{constructor(J=new K6,Z=new K6,Q=new K6,W=new K6,Y=new K6,H=new K6){this.planes=[J,Z,Q,W,Y,H]}set(J,Z,Q,W,Y,H){let K=this.planes;return K[0].copy(J),K[1].copy(Z),K[2].copy(Q),K[3].copy(W),K[4].copy(Y),K[5].copy(H),this}copy(J){let Z=this.planes;for(let Q=0;Q<6;Q++)Z[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,Z=2000){let Q=this.planes,W=J.elements,Y=W[0],H=W[1],K=W[2],X=W[3],U=W[4],G=W[5],q=W[6],V=W[7],E=W[8],D=W[9],O=W[10],R=W[11],N=W[12],F=W[13],B=W[14],M=W[15];if(Q[0].setComponents(X-Y,V-U,R-E,M-N).normalize(),Q[1].setComponents(X+Y,V+U,R+E,M+N).normalize(),Q[2].setComponents(X+H,V+G,R+D,M+F).normalize(),Q[3].setComponents(X-H,V-G,R-D,M-F).normalize(),Q[4].setComponents(X-K,V-q,R-O,M-B).normalize(),Z===2000)Q[5].setComponents(X+K,V+q,R+O,M+B).normalize();else if(Z===2001)Q[5].setComponents(K,q,O,B).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Z);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();j6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Z=J.geometry;if(Z.boundingSphere===null)Z.computeBoundingSphere();j6.copy(Z.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(j6)}intersectsSprite(J){return j6.center.set(0,0,0),j6.radius=0.7071067811865476,j6.applyMatrix4(J.matrixWorld),this.intersectsSphere(j6)}intersectsSphere(J){let Z=this.planes,Q=J.center,W=-J.radius;for(let Y=0;Y<6;Y++)if(Z[Y].distanceToPoint(Q)<W)return!1;return!0}intersectsBox(J){let Z=this.planes;for(let Q=0;Q<6;Q++){let W=Z[Q];if(z9.x=W.normal.x>0?J.max.x:J.min.x,z9.y=W.normal.y>0?J.max.y:J.min.y,z9.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(z9)<0)return!1}return!0}containsPoint(J){let Z=this.planes;for(let Q=0;Q<6;Q++)if(Z[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jZ(){let J=null,Z=!1,Q=null,W=null;function Y(H,K){Q(H,K),W=J.requestAnimationFrame(Y)}return{start:function(){if(Z===!0)return;if(Q===null)return;W=J.requestAnimationFrame(Y),Z=!0},stop:function(){J.cancelAnimationFrame(W),Z=!1},setAnimationLoop:function(H){Q=H},setContext:function(H){J=H}}}function dW(J,Z){let Q=Z.isWebGL2,W=new WeakMap;function Y(G,q){let{array:V,usage:E}=G,D=V.byteLength,O=J.createBuffer();J.bindBuffer(q,O),J.bufferData(q,V,E),G.onUploadCallback();let R;if(V instanceof Float32Array)R=J.FLOAT;else if(V instanceof Uint16Array)if(G.isFloat16BufferAttribute)if(Q)R=J.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=J.UNSIGNED_SHORT;else if(V instanceof Int16Array)R=J.SHORT;else if(V instanceof Uint32Array)R=J.UNSIGNED_INT;else if(V instanceof Int32Array)R=J.INT;else if(V instanceof Int8Array)R=J.BYTE;else if(V instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(V instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+V);return{buffer:O,type:R,bytesPerElement:V.BYTES_PER_ELEMENT,version:G.version,size:D}}function H(G,q,V){let{array:E,_updateRange:D,updateRanges:O}=q;if(J.bindBuffer(V,G),D.count===-1&&O.length===0)J.bufferSubData(V,0,E);if(O.length!==0){for(let R=0,N=O.length;R<N;R++){let F=O[R];if(Q)J.bufferSubData(V,F.start*E.BYTES_PER_ELEMENT,E,F.start,F.count);else J.bufferSubData(V,F.start*E.BYTES_PER_ELEMENT,E.subarray(F.start,F.start+F.count))}q.clearUpdateRanges()}if(D.count!==-1){if(Q)J.bufferSubData(V,D.offset*E.BYTES_PER_ELEMENT,E,D.offset,D.count);else J.bufferSubData(V,D.offset*E.BYTES_PER_ELEMENT,E.subarray(D.offset,D.offset+D.count));D.count=-1}q.onUploadCallback()}function K(G){if(G.isInterleavedBufferAttribute)G=G.data;return W.get(G)}function X(G){if(G.isInterleavedBufferAttribute)G=G.data;let q=W.get(G);if(q)J.deleteBuffer(q.buffer),W.delete(G)}function U(G,q){if(G.isGLBufferAttribute){let E=W.get(G);if(!E||E.version<G.version)W.set(G,{buffer:G.buffer,type:G.type,bytesPerElement:G.elementSize,version:G.version});return}if(G.isInterleavedBufferAttribute)G=G.data;let V=W.get(G);if(V===void 0)W.set(G,Y(G,q));else if(V.version<G.version){if(V.size!==G.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");H(V.buffer,G,q),V.version=G.version}}return{get:K,remove:X,update:U}}class B5 extends x5{constructor(J=1,Z=1,Q=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Z,widthSegments:Q,heightSegments:W};let Y=J/2,H=Z/2,K=Math.floor(Q),X=Math.floor(W),U=K+1,G=X+1,q=J/K,V=Z/X,E=[],D=[],O=[],R=[];for(let N=0;N<G;N++){let F=N*V-H;for(let B=0;B<U;B++){let M=B*q-Y;D.push(M,-F,0),O.push(0,0,1),R.push(B/K),R.push(1-N/X)}}for(let N=0;N<X;N++)for(let F=0;F<K;F++){let B=F+U*N,M=F+U*(N+1),C=F+1+U*(N+1),w=F+1+U*N;E.push(B,M,w),E.push(M,C,w)}this.setIndex(E),this.setAttribute("position",new e0(D,3)),this.setAttribute("normal",new e0(O,3)),this.setAttribute("uv",new e0(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new B5(J.width,J.height,J.widthSegments,J.heightSegments)}}var cW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nW=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oW=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aW=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tW=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eW=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ZY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WY=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YY=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HY=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XY=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,KY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VY=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qY=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EY=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FY=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,DY=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NY=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OY=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AY="gl_FragColor = linearToOutputTexel( gl_FragColor );",IY=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$Y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kY=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fY=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bY=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yY=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xY=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_Y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pY=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lY=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uY=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dY=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cY=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nY=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YH=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XH=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,UH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GH=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FH=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zH=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$H=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,PH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bH=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xH=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_H=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gH=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cH=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aH=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tH=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eH=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QX=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WX=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YX=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HX=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XX=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KX=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UX=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GX=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VX=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qX=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EX=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FX=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DX=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NX=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OX=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RX=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MX=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BX=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AX=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IX=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$X=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u0={alphahash_fragment:cW,alphahash_pars_fragment:nW,alphamap_fragment:sW,alphamap_pars_fragment:iW,alphatest_fragment:oW,alphatest_pars_fragment:rW,aomap_fragment:aW,aomap_pars_fragment:tW,batching_pars_vertex:eW,batching_vertex:JY,begin_vertex:ZY,beginnormal_vertex:QY,bsdfs:WY,iridescence_fragment:YY,bumpmap_pars_fragment:HY,clipping_planes_fragment:XY,clipping_planes_pars_fragment:KY,clipping_planes_pars_vertex:UY,clipping_planes_vertex:GY,color_fragment:VY,color_pars_fragment:qY,color_pars_vertex:EY,color_vertex:FY,common:DY,cube_uv_reflection_fragment:NY,defaultnormal_vertex:OY,displacementmap_pars_vertex:RY,displacementmap_vertex:MY,emissivemap_fragment:zY,emissivemap_pars_fragment:BY,colorspace_fragment:AY,colorspace_pars_fragment:IY,envmap_fragment:$Y,envmap_common_pars_fragment:CY,envmap_pars_fragment:kY,envmap_pars_vertex:LY,envmap_physical_pars_fragment:_Y,envmap_vertex:PY,fog_vertex:wY,fog_pars_vertex:TY,fog_fragment:SY,fog_pars_fragment:vY,gradientmap_pars_fragment:fY,lightmap_fragment:bY,lightmap_pars_fragment:jY,lights_lambert_fragment:hY,lights_lambert_pars_fragment:yY,lights_pars_begin:xY,lights_toon_fragment:gY,lights_toon_pars_fragment:pY,lights_phong_fragment:mY,lights_phong_pars_fragment:lY,lights_physical_fragment:uY,lights_physical_pars_fragment:dY,lights_fragment_begin:cY,lights_fragment_maps:nY,lights_fragment_end:sY,logdepthbuf_fragment:iY,logdepthbuf_pars_fragment:oY,logdepthbuf_pars_vertex:rY,logdepthbuf_vertex:aY,map_fragment:tY,map_pars_fragment:eY,map_particle_fragment:JH,map_particle_pars_fragment:ZH,metalnessmap_fragment:QH,metalnessmap_pars_fragment:WH,morphcolor_vertex:YH,morphnormal_vertex:HH,morphtarget_pars_vertex:XH,morphtarget_vertex:KH,normal_fragment_begin:UH,normal_fragment_maps:GH,normal_pars_fragment:VH,normal_pars_vertex:qH,normal_vertex:EH,normalmap_pars_fragment:FH,clearcoat_normal_fragment_begin:DH,clearcoat_normal_fragment_maps:NH,clearcoat_pars_fragment:OH,iridescence_pars_fragment:RH,opaque_fragment:MH,packing:zH,premultiplied_alpha_fragment:BH,project_vertex:AH,dithering_fragment:IH,dithering_pars_fragment:$H,roughnessmap_fragment:CH,roughnessmap_pars_fragment:kH,shadowmap_pars_fragment:LH,shadowmap_pars_vertex:PH,shadowmap_vertex:wH,shadowmask_pars_fragment:TH,skinbase_vertex:SH,skinning_pars_vertex:vH,skinning_vertex:fH,skinnormal_vertex:bH,specularmap_fragment:jH,specularmap_pars_fragment:hH,tonemapping_fragment:yH,tonemapping_pars_fragment:xH,transmission_fragment:_H,transmission_pars_fragment:gH,uv_pars_fragment:pH,uv_pars_vertex:mH,uv_vertex:lH,worldpos_vertex:uH,background_vert:dH,background_frag:cH,backgroundCube_vert:nH,backgroundCube_frag:sH,cube_vert:iH,cube_frag:oH,depth_vert:rH,depth_frag:aH,distanceRGBA_vert:tH,distanceRGBA_frag:eH,equirect_vert:JX,equirect_frag:ZX,linedashed_vert:QX,linedashed_frag:WX,meshbasic_vert:YX,meshbasic_frag:HX,meshlambert_vert:XX,meshlambert_frag:KX,meshmatcap_vert:UX,meshmatcap_frag:GX,meshnormal_vert:VX,meshnormal_frag:qX,meshphong_vert:EX,meshphong_frag:FX,meshphysical_vert:DX,meshphysical_frag:NX,meshtoon_vert:OX,meshtoon_frag:RX,points_vert:MX,points_frag:zX,shadow_vert:BX,shadow_frag:AX,sprite_vert:IX,sprite_frag:$X},G0={common:{diffuse:{value:new g0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new s0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new s0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new s0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new s0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new s0},normalScale:{value:new F0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new s0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new s0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new s0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new s0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new g0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new g0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0},uvTransform:{value:new s0}},sprite:{diffuse:{value:new g0(16777215)},opacity:{value:1},center:{value:new F0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}}},U6={basic:{uniforms:h5([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:u0.meshbasic_vert,fragmentShader:u0.meshbasic_frag},lambert:{uniforms:h5([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new g0(0)}}]),vertexShader:u0.meshlambert_vert,fragmentShader:u0.meshlambert_frag},phong:{uniforms:h5([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new g0(0)},specular:{value:new g0(1118481)},shininess:{value:30}}]),vertexShader:u0.meshphong_vert,fragmentShader:u0.meshphong_frag},standard:{uniforms:h5([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new g0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag},toon:{uniforms:h5([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new g0(0)}}]),vertexShader:u0.meshtoon_vert,fragmentShader:u0.meshtoon_frag},matcap:{uniforms:h5([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:u0.meshmatcap_vert,fragmentShader:u0.meshmatcap_frag},points:{uniforms:h5([G0.points,G0.fog]),vertexShader:u0.points_vert,fragmentShader:u0.points_frag},dashed:{uniforms:h5([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:u0.linedashed_vert,fragmentShader:u0.linedashed_frag},depth:{uniforms:h5([G0.common,G0.displacementmap]),vertexShader:u0.depth_vert,fragmentShader:u0.depth_frag},normal:{uniforms:h5([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:u0.meshnormal_vert,fragmentShader:u0.meshnormal_frag},sprite:{uniforms:h5([G0.sprite,G0.fog]),vertexShader:u0.sprite_vert,fragmentShader:u0.sprite_frag},background:{uniforms:{uvTransform:{value:new s0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:u0.background_vert,fragmentShader:u0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:u0.backgroundCube_vert,fragmentShader:u0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:u0.cube_vert,fragmentShader:u0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:u0.equirect_vert,fragmentShader:u0.equirect_frag},distanceRGBA:{uniforms:h5([G0.common,G0.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:u0.distanceRGBA_vert,fragmentShader:u0.distanceRGBA_frag},shadow:{uniforms:h5([G0.lights,G0.fog,{color:{value:new g0(0)},opacity:{value:1}}]),vertexShader:u0.shadow_vert,fragmentShader:u0.shadow_frag}};U6.physical={uniforms:h5([U6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new s0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new s0},clearcoatNormalScale:{value:new F0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new s0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new s0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new s0},sheen:{value:0},sheenColor:{value:new g0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new s0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new s0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new s0},transmissionSamplerSize:{value:new F0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new s0},attenuationDistance:{value:0},attenuationColor:{value:new g0(0)},specularColor:{value:new g0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new s0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new s0},anisotropyVector:{value:new F0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new s0}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag};var B9={r:0,b:0,g:0};function CX(J,Z,Q,W,Y,H,K){let X=new g0(0),U=H===!0?0:1,G,q,V=null,E=0,D=null;function O(N,F){let B=!1,M=F.isScene===!0?F.background:null;if(M&&M.isTexture)M=(F.backgroundBlurriness>0?Q:Z).get(M);if(M===null)R(X,U);else if(M&&M.isColor)R(M,1),B=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")W.buffers.color.setClear(0,0,0,1,K);else if(C==="alpha-blend")W.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||B)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(M&&(M.isCubeTexture||M.mapping===306)){if(q===void 0)q=new Y0(new j0(1,1,1),new L6({name:"BackgroundCubeMaterial",uniforms:G8(U6.backgroundCube.uniforms),vertexShader:U6.backgroundCube.vertexShader,fragmentShader:U6.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(w,L,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Y.update(q);if(q.material.uniforms.envMap.value=M,q.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,q.material.toneMapped=W5.getTransfer(M.colorSpace)!=="srgb",V!==M||E!==M.version||D!==J.toneMapping)q.material.needsUpdate=!0,V=M,E=M.version,D=J.toneMapping;q.layers.enableAll(),N.unshift(q,q.geometry,q.material,0,0,null)}else if(M&&M.isTexture){if(G===void 0)G=new Y0(new B5(2,2),new L6({name:"BackgroundMaterial",uniforms:G8(U6.background.uniforms),vertexShader:U6.background.vertexShader,fragmentShader:U6.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),Y.update(G);if(G.material.uniforms.t2D.value=M,G.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,G.material.toneMapped=W5.getTransfer(M.colorSpace)!=="srgb",M.matrixAutoUpdate===!0)M.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(M.matrix),V!==M||E!==M.version||D!==J.toneMapping)G.material.needsUpdate=!0,V=M,E=M.version,D=J.toneMapping;G.layers.enableAll(),N.unshift(G,G.geometry,G.material,0,0,null)}}function R(N,F){N.getRGB(B9,vZ(J)),W.buffers.color.setClear(B9.r,B9.g,B9.b,F,K)}return{getClearColor:function(){return X},setClearColor:function(N,F=1){X.set(N),U=F,R(X,U)},getClearAlpha:function(){return U},setClearAlpha:function(N){U=N,R(X,U)},render:O}}function kX(J,Z,Q,W){let Y=J.getParameter(J.MAX_VERTEX_ATTRIBS),H=W.isWebGL2?null:Z.get("OES_vertex_array_object"),K=W.isWebGL2||H!==null,X={},U=N(null),G=U,q=!1;function V(T,x,u,r,c){let d=!1;if(K){let t=R(r,u,x);if(G!==t)G=t,D(G.object);if(d=F(T,r,u,c),d)B(T,r,u,c)}else{let t=x.wireframe===!0;if(G.geometry!==r.id||G.program!==u.id||G.wireframe!==t)G.geometry=r.id,G.program=u.id,G.wireframe=t,d=!0}if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(d||q){if(q=!1,p(T,x,u,r),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function E(){if(W.isWebGL2)return J.createVertexArray();return H.createVertexArrayOES()}function D(T){if(W.isWebGL2)return J.bindVertexArray(T);return H.bindVertexArrayOES(T)}function O(T){if(W.isWebGL2)return J.deleteVertexArray(T);return H.deleteVertexArrayOES(T)}function R(T,x,u){let r=u.wireframe===!0,c=X[T.id];if(c===void 0)c={},X[T.id]=c;let d=c[x.id];if(d===void 0)d={},c[x.id]=d;let t=d[r];if(t===void 0)t=N(E()),d[r]=t;return t}function N(T){let x=[],u=[],r=[];for(let c=0;c<Y;c++)x[c]=0,u[c]=0,r[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:u,attributeDivisors:r,object:T,attributes:{},index:null}}function F(T,x,u,r){let c=G.attributes,d=x.attributes,t=0,W0=u.getAttributes();for(let y in W0)if(W0[y].location>=0){let X0=c[y],D0=d[y];if(D0===void 0){if(y==="instanceMatrix"&&T.instanceMatrix)D0=T.instanceMatrix;if(y==="instanceColor"&&T.instanceColor)D0=T.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==D0)return!0;if(D0&&X0.data!==D0.data)return!0;t++}if(G.attributesNum!==t)return!0;if(G.index!==r)return!0;return!1}function B(T,x,u,r){let c={},d=x.attributes,t=0,W0=u.getAttributes();for(let y in W0)if(W0[y].location>=0){let X0=d[y];if(X0===void 0){if(y==="instanceMatrix"&&T.instanceMatrix)X0=T.instanceMatrix;if(y==="instanceColor"&&T.instanceColor)X0=T.instanceColor}let D0={};if(D0.attribute=X0,X0&&X0.data)D0.data=X0.data;c[y]=D0,t++}G.attributes=c,G.attributesNum=t,G.index=r}function M(){let T=G.newAttributes;for(let x=0,u=T.length;x<u;x++)T[x]=0}function C(T){w(T,0)}function w(T,x){let{newAttributes:u,enabledAttributes:r,attributeDivisors:c}=G;if(u[T]=1,r[T]===0)J.enableVertexAttribArray(T),r[T]=1;if(c[T]!==x)(W.isWebGL2?J:Z.get("ANGLE_instanced_arrays"))[W.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,x),c[T]=x}function L(){let{newAttributes:T,enabledAttributes:x}=G;for(let u=0,r=x.length;u<r;u++)if(x[u]!==T[u])J.disableVertexAttribArray(u),x[u]=0}function f(T,x,u,r,c,d,t){if(t===!0)J.vertexAttribIPointer(T,x,u,c,d);else J.vertexAttribPointer(T,x,u,r,c,d)}function p(T,x,u,r){if(W.isWebGL2===!1&&(T.isInstancedMesh||r.isInstancedBufferGeometry)){if(Z.get("ANGLE_instanced_arrays")===null)return}M();let c=r.attributes,d=u.getAttributes(),t=x.defaultAttributeValues;for(let W0 in d){let y=d[W0];if(y.location>=0){let o=c[W0];if(o===void 0){if(W0==="instanceMatrix"&&T.instanceMatrix)o=T.instanceMatrix;if(W0==="instanceColor"&&T.instanceColor)o=T.instanceColor}if(o!==void 0){let{normalized:X0,itemSize:D0}=o,P0=Q.get(o);if(P0===void 0)continue;let{buffer:k0,type:p0,bytesPerElement:S0}=P0,t0=W.isWebGL2===!0&&(p0===J.INT||p0===J.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let h=o.data,A5=h.stride,H0=o.offset;if(h.isInstancedInterleavedBuffer){for(let s=0;s<y.locationSize;s++)w(y.location+s,h.meshPerAttribute);if(T.isInstancedMesh!==!0&&r._maxInstanceCount===void 0)r._maxInstanceCount=h.meshPerAttribute*h.count}else for(let s=0;s<y.locationSize;s++)C(y.location+s);J.bindBuffer(J.ARRAY_BUFFER,k0);for(let s=0;s<y.locationSize;s++)f(y.location+s,D0/y.locationSize,p0,X0,A5*S0,(H0+D0/y.locationSize*s)*S0,t0)}else{if(o.isInstancedBufferAttribute){for(let h=0;h<y.locationSize;h++)w(y.location+h,o.meshPerAttribute);if(T.isInstancedMesh!==!0&&r._maxInstanceCount===void 0)r._maxInstanceCount=o.meshPerAttribute*o.count}else for(let h=0;h<y.locationSize;h++)C(y.location+h);J.bindBuffer(J.ARRAY_BUFFER,k0);for(let h=0;h<y.locationSize;h++)f(y.location+h,D0/y.locationSize,p0,X0,D0*S0,D0/y.locationSize*h*S0,t0)}}else if(t!==void 0){let X0=t[W0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(y.location,X0);break;case 3:J.vertexAttrib3fv(y.location,X0);break;case 4:J.vertexAttrib4fv(y.location,X0);break;default:J.vertexAttrib1fv(y.location,X0)}}}}L()}function A(){n();for(let T in X){let x=X[T];for(let u in x){let r=x[u];for(let c in r)O(r[c].object),delete r[c];delete x[u]}delete X[T]}}function k(T){if(X[T.id]===void 0)return;let x=X[T.id];for(let u in x){let r=x[u];for(let c in r)O(r[c].object),delete r[c];delete x[u]}delete X[T.id]}function v(T){for(let x in X){let u=X[x];if(u[T.id]===void 0)continue;let r=u[T.id];for(let c in r)O(r[c].object),delete r[c];delete u[T.id]}}function n(){if(i(),q=!0,G===U)return;G=U,D(G.object)}function i(){U.geometry=null,U.program=null,U.wireframe=!1}return{setup:V,reset:n,resetDefaultState:i,dispose:A,releaseStatesOfGeometry:k,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:C,disableUnusedAttributes:L}}function LX(J,Z,Q,W){let Y=W.isWebGL2,H;function K(q){H=q}function X(q,V){J.drawArrays(H,q,V),Q.update(V,H,1)}function U(q,V,E){if(E===0)return;let D,O;if(Y)D=J,O="drawArraysInstanced";else if(D=Z.get("ANGLE_instanced_arrays"),O="drawArraysInstancedANGLE",D===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[O](H,q,V,E),Q.update(V,H,E)}function G(q,V,E){if(E===0)return;let D=Z.get("WEBGL_multi_draw");if(D===null)for(let O=0;O<E;O++)this.render(q[O],V[O]);else{D.multiDrawArraysWEBGL(H,q,0,V,0,E);let O=0;for(let R=0;R<E;R++)O+=V[R];Q.update(O,H,1)}}this.setMode=K,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function PX(J,Z,Q){let W;function Y(){if(W!==void 0)return W;if(Z.has("EXT_texture_filter_anisotropic")===!0){let f=Z.get("EXT_texture_filter_anisotropic");W=J.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(f){if(f==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";f="mediump"}if(f==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let K=typeof WebGL2RenderingContext<"u"&&J.constructor.name==="WebGL2RenderingContext",X=Q.precision!==void 0?Q.precision:"highp",U=H(X);if(U!==X)console.warn("THREE.WebGLRenderer:",X,"not supported, using",U,"instead."),X=U;let G=K||Z.has("WEBGL_draw_buffers"),q=Q.logarithmicDepthBuffer===!0,V=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),E=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),R=J.getParameter(J.MAX_VERTEX_ATTRIBS),N=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),F=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),M=E>0,C=K||Z.has("OES_texture_float"),w=M&&C,L=K?J.getParameter(J.MAX_SAMPLES):0;return{isWebGL2:K,drawBuffers:G,getMaxAnisotropy:Y,getMaxPrecision:H,precision:X,logarithmicDepthBuffer:q,maxTextures:V,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:O,maxAttributes:R,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:B,vertexTextures:M,floatFragmentTextures:C,floatVertexTextures:w,maxSamples:L}}function wX(J){let Z=this,Q=null,W=0,Y=!1,H=!1,K=new K6,X=new s0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(V,E){let D=V.length!==0||E||W!==0||Y;return Y=E,W=V.length,D},this.beginShadows=function(){H=!0,q(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(V,E){Q=q(V,E,0)},this.setState=function(V,E,D){let{clippingPlanes:O,clipIntersection:R,clipShadows:N}=V,F=J.get(V);if(!Y||O===null||O.length===0||H&&!N)if(H)q(null);else G();else{let B=H?0:W,M=B*4,C=F.clippingState||null;U.value=C,C=q(O,E,M,D);for(let w=0;w!==M;++w)C[w]=Q[w];F.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function G(){if(U.value!==Q)U.value=Q,U.needsUpdate=W>0;Z.numPlanes=W,Z.numIntersection=0}function q(V,E,D,O){let R=V!==null?V.length:0,N=null;if(R!==0){if(N=U.value,O!==!0||N===null){let F=D+R*4,B=E.matrixWorldInverse;if(X.getNormalMatrix(B),N===null||N.length<F)N=new Float32Array(F);for(let M=0,C=D;M!==R;++M,C+=4)K.copy(V[M]).applyMatrix4(B,X),K.normal.toArray(N,C),N[C+3]=K.constant}U.value=N,U.needsUpdate=!0}return Z.numPlanes=R,Z.numIntersection=0,N}}function TX(J){let Z=new WeakMap;function Q(K,X){if(X===303)K.mapping=301;else if(X===304)K.mapping=302;return K}function W(K){if(K&&K.isTexture){let X=K.mapping;if(X===303||X===304)if(Z.has(K)){let U=Z.get(K).texture;return Q(U,K.mapping)}else{let U=K.image;if(U&&U.height>0){let G=new bZ(U.height/2);return G.fromEquirectangularTexture(J,K),Z.set(K,G),K.addEventListener("dispose",Y),Q(G.texture,K.mapping)}else return null}}return K}function Y(K){let X=K.target;X.removeEventListener("dispose",Y);let U=Z.get(X);if(U!==void 0)Z.delete(X),U.dispose()}function H(){Z=new WeakMap}return{get:W,dispose:H}}class YJ extends QJ{constructor(J=-1,Z=1,Q=1,W=-1,Y=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Z,this.top=Q,this.bottom=W,this.near=Y,this.far=H,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Z,Q,W,Y,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=Q,this.view.offsetY=W,this.view.width=Y,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Z=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Y=Q-J,H=Q+J,K=W+Z,X=W-Z;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Y+=U*this.view.offsetX,H=Y+U*this.view.width,K-=G*this.view.offsetY,X=K-G*this.view.height}this.projectionMatrix.makeOrthographic(Y,H,K,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.zoom=this.zoom,Z.object.left=this.left,Z.object.right=this.right,Z.object.top=this.top,Z.object.bottom=this.bottom,Z.object.near=this.near,Z.object.far=this.far,this.view!==null)Z.object.view=Object.assign({},this.view);return Z}}var H8=4,r4=[0.125,0.215,0.35,0.446,0.526,0.582],y6=20,f7=new YJ,a4=new g0,b7=null,j7=0,h7=0,h6=(1+Math.sqrt(5))/2,Y8=1/h6,t4=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,h6,Y8),new P(0,h6,-Y8),new P(Y8,0,h6),new P(-Y8,0,h6),new P(h6,Y8,0),new P(-h6,Y8,0)];class d7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Z=0,Q=0.1,W=100){b7=this._renderer.getRenderTarget(),j7=this._renderer.getActiveCubeFace(),h7=this._renderer.getActiveMipmapLevel(),this._setSize(256);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Q,W,Y),Z>0)this._blur(Y,0,0,Z);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Z=null){return this._fromTexture(J,Z)}fromCubemap(J,Z=null){return this._fromTexture(J,Z)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ZZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=JZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(b7,j7,h7),J.scissorTest=!1,A9(J,0,0,J.width,J.height)}_fromTexture(J,Z){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);b7=this._renderer.getRenderTarget(),j7=this._renderer.getActiveCubeFace(),h7=this._renderer.getActiveMipmapLevel();let Q=Z||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Z=4*this._cubeSize,Q={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},W=e4(J,Z,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Z){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=e4(J,Z,Q);let{_lodMax:Y}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SX(Y)),this._blurMaterial=vX(Y,J,Z)}return W}_compileMaterial(J){let Z=new Y0(this._lodPlanes[0],J);this._renderer.compile(Z,f7)}_sceneToCubeUV(J,Z,Q,W){let K=new y5(90,1,Z,Q),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,q=G.autoClear,V=G.toneMapping;G.getClearColor(a4),G.toneMapping=0,G.autoClear=!1;let E=new k5({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),D=new Y0(new j0,E),O=!1,R=J.background;if(R){if(R.isColor)E.color.copy(R),J.background=null,O=!0}else E.color.copy(a4),O=!0;for(let N=0;N<6;N++){let F=N%3;if(F===0)K.up.set(0,X[N],0),K.lookAt(U[N],0,0);else if(F===1)K.up.set(0,0,X[N]),K.lookAt(0,U[N],0);else K.up.set(0,X[N],0),K.lookAt(0,0,U[N]);let B=this._cubeSize;if(A9(W,F*B,N>2?B:0,B,B),G.setRenderTarget(W),O)G.render(D,K);G.render(J,K)}D.geometry.dispose(),D.material.dispose(),G.toneMapping=V,G.autoClear=q,J.background=R}_textureToCubeUV(J,Z){let Q=this._renderer,W=J.mapping===301||J.mapping===302;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=ZZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=JZ();let Y=W?this._cubemapMaterial:this._equirectMaterial,H=new Y0(this._lodPlanes[0],Y),K=Y.uniforms;K.envMap.value=J;let X=this._cubeSize;A9(Z,0,0,3*X,2*X),Q.setRenderTarget(Z),Q.render(H,f7)}_applyPMREM(J){let Z=this._renderer,Q=Z.autoClear;Z.autoClear=!1;for(let W=1;W<this._lodPlanes.length;W++){let Y=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),H=t4[(W-1)%t4.length];this._blur(J,W-1,W,Y,H)}Z.autoClear=Q}_blur(J,Z,Q,W,Y){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Z,Q,W,"latitudinal",Y),this._halfBlur(H,J,Q,Q,W,"longitudinal",Y)}_halfBlur(J,Z,Q,W,Y,H,K){let X=this._renderer,U=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let G=3,q=new Y0(this._lodPlanes[W],U),V=U.uniforms,E=this._sizeLods[Q]-1,D=isFinite(Y)?Math.PI/(2*E):2*Math.PI/(2*y6-1),O=Y/D,R=isFinite(Y)?1+Math.floor(G*O):y6;if(R>y6)console.warn(`sigmaRadians, ${Y}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${y6}`);let N=[],F=0;for(let L=0;L<y6;++L){let f=L/O,p=Math.exp(-f*f/2);if(N.push(p),L===0)F+=p;else if(L<R)F+=2*p}for(let L=0;L<N.length;L++)N[L]=N[L]/F;if(V.envMap.value=J.texture,V.samples.value=R,V.weights.value=N,V.latitudinal.value=H==="latitudinal",K)V.poleAxis.value=K;let{_lodMax:B}=this;V.dTheta.value=D,V.mipInt.value=B-Q;let M=this._sizeLods[W],C=3*M*(W>B-H8?W-B+H8:0),w=4*(this._cubeSize-M);A9(Z,C,w,3*M,2*M),X.setRenderTarget(Z),X.render(q,f7)}}function SX(J){let Z=[],Q=[],W=[],Y=J,H=J-H8+1+r4.length;for(let K=0;K<H;K++){let X=Math.pow(2,Y);Q.push(X);let U=1/X;if(K>J-H8)U=r4[K-J+H8-1];else if(K===0)U=0;W.push(U);let G=1/(X-2),q=-G,V=1+G,E=[q,q,V,q,V,V,q,q,V,V,q,V],D=6,O=6,R=3,N=2,F=1,B=new Float32Array(R*O*D),M=new Float32Array(N*O*D),C=new Float32Array(F*O*D);for(let L=0;L<D;L++){let f=L%3*2/3-1,p=L>2?0:-1,A=[f,p,0,f+0.6666666666666666,p,0,f+0.6666666666666666,p+1,0,f,p,0,f+0.6666666666666666,p+1,0,f,p+1,0];B.set(A,R*O*L),M.set(E,N*O*L);let k=[L,L,L,L,L,L];C.set(k,F*O*L)}let w=new x5;if(w.setAttribute("position",new Z6(B,R)),w.setAttribute("uv",new Z6(M,N)),w.setAttribute("faceIndex",new Z6(C,F)),Z.push(w),Y>H8)Y--}return{lodPlanes:Z,sizeLods:Q,sigmas:W}}function e4(J,Z,Q){let W=new k6(J,Z,Q);return W.texture.mapping=306,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function A9(J,Z,Q,W,Y){J.viewport.set(Z,Q,W,Y),J.scissor.set(Z,Q,W,Y)}function vX(J,Z,Q){let W=new Float32Array(y6),Y=new P(0,1,0);return new L6({name:"SphericalGaussianBlur",defines:{n:y6,CUBEUV_TEXEL_WIDTH:1/Z,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Y}},vertexShader:HJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function JZ(){return new L6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:HJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ZZ(){return new L6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:HJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function HJ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fX(J){let Z=new WeakMap,Q=null;function W(X){if(X&&X.isTexture){let U=X.mapping,G=U===303||U===304,q=U===301||U===302;if(G||q)if(X.isRenderTargetTexture&&X.needsPMREMUpdate===!0){X.needsPMREMUpdate=!1;let V=Z.get(X);if(Q===null)Q=new d7(J);return V=G?Q.fromEquirectangular(X,V):Q.fromCubemap(X,V),Z.set(X,V),V.texture}else if(Z.has(X))return Z.get(X).texture;else{let V=X.image;if(G&&V&&V.height>0||q&&V&&Y(V)){if(Q===null)Q=new d7(J);let E=G?Q.fromEquirectangular(X):Q.fromCubemap(X);return Z.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}return X}function Y(X){let U=0,G=6;for(let q=0;q<G;q++)if(X[q]!==void 0)U++;return U===G}function H(X){let U=X.target;U.removeEventListener("dispose",H);let G=Z.get(U);if(G!==void 0)Z.delete(U),G.dispose()}function K(){if(Z=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:W,dispose:K}}function bX(J){let Z={};function Q(W){if(Z[W]!==void 0)return Z[W];let Y;switch(W){case"WEBGL_depth_texture":Y=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Y=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Y=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Y=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Y=J.getExtension(W)}return Z[W]=Y,Y}return{has:function(W){return Q(W)!==null},init:function(W){if(W.isWebGL2)Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance");else Q("WEBGL_depth_texture"),Q("OES_texture_float"),Q("OES_texture_half_float"),Q("OES_texture_half_float_linear"),Q("OES_standard_derivatives"),Q("OES_element_index_uint"),Q("OES_vertex_array_object"),Q("ANGLE_instanced_arrays");Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture")},get:function(W){let Y=Q(W);if(Y===null)console.warn("THREE.WebGLRenderer: "+W+" extension not supported.");return Y}}}function jX(J,Z,Q,W){let Y={},H=new WeakMap;function K(V){let E=V.target;if(E.index!==null)Z.remove(E.index);for(let O in E.attributes)Z.remove(E.attributes[O]);for(let O in E.morphAttributes){let R=E.morphAttributes[O];for(let N=0,F=R.length;N<F;N++)Z.remove(R[N])}E.removeEventListener("dispose",K),delete Y[E.id];let D=H.get(E);if(D)Z.remove(D),H.delete(E);if(W.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;Q.memory.geometries--}function X(V,E){if(Y[E.id]===!0)return E;return E.addEventListener("dispose",K),Y[E.id]=!0,Q.memory.geometries++,E}function U(V){let E=V.attributes;for(let O in E)Z.update(E[O],J.ARRAY_BUFFER);let D=V.morphAttributes;for(let O in D){let R=D[O];for(let N=0,F=R.length;N<F;N++)Z.update(R[N],J.ARRAY_BUFFER)}}function G(V){let E=[],D=V.index,O=V.attributes.position,R=0;if(D!==null){let B=D.array;R=D.version;for(let M=0,C=B.length;M<C;M+=3){let w=B[M+0],L=B[M+1],f=B[M+2];E.push(w,L,L,f,f,w)}}else if(O!==void 0){let B=O.array;R=O.version;for(let M=0,C=B.length/3-1;M<C;M+=3){let w=M+0,L=M+1,f=M+2;E.push(w,L,L,f,f,w)}}else return;let N=new((PZ(E))?ZJ:JJ)(E,1);N.version=R;let F=H.get(V);if(F)Z.remove(F);H.set(V,N)}function q(V){let E=H.get(V);if(E){let D=V.index;if(D!==null){if(E.version<D.version)G(V)}}else G(V);return H.get(V)}return{get:X,update:U,getWireframeAttribute:q}}function hX(J,Z,Q,W){let Y=W.isWebGL2,H;function K(D){H=D}let X,U;function G(D){X=D.type,U=D.bytesPerElement}function q(D,O){J.drawElements(H,O,X,D*U),Q.update(O,H,1)}function V(D,O,R){if(R===0)return;let N,F;if(Y)N=J,F="drawElementsInstanced";else if(N=Z.get("ANGLE_instanced_arrays"),F="drawElementsInstancedANGLE",N===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}N[F](H,O,X,D*U,R),Q.update(O,H,R)}function E(D,O,R){if(R===0)return;let N=Z.get("WEBGL_multi_draw");if(N===null)for(let F=0;F<R;F++)this.render(D[F]/U,O[F]);else{N.multiDrawElementsWEBGL(H,O,0,X,D,0,R);let F=0;for(let B=0;B<R;B++)F+=O[B];Q.update(F,H,1)}}this.setMode=K,this.setIndex=G,this.render=q,this.renderInstances=V,this.renderMultiDraw=E}function yX(J){let Z={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,K,X){switch(Q.calls++,K){case J.TRIANGLES:Q.triangles+=X*(H/3);break;case J.LINES:Q.lines+=X*(H/2);break;case J.LINE_STRIP:Q.lines+=X*(H-1);break;case J.LINE_LOOP:Q.lines+=X*H;break;case J.POINTS:Q.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",K);break}}function Y(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:Z,render:Q,programs:null,autoReset:!0,reset:Y,update:W}}function xX(J,Z){return J[0]-Z[0]}function _X(J,Z){return Math.abs(Z[1])-Math.abs(J[1])}function gX(J,Z,Q){let W={},Y=new Float32Array(8),H=new WeakMap,K=new G5,X=[];for(let G=0;G<8;G++)X[G]=[G,0];function U(G,q,V){let E=G.morphTargetInfluences;if(Z.isWebGL2===!0){let D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,O=D!==void 0?D.length:0,R=H.get(q);if(R===void 0||R.count!==O){let T=function(){n.dispose(),H.delete(q),q.removeEventListener("dispose",T)};if(R!==void 0)R.texture.dispose();let B=q.morphAttributes.position!==void 0,M=q.morphAttributes.normal!==void 0,C=q.morphAttributes.color!==void 0,w=q.morphAttributes.position||[],L=q.morphAttributes.normal||[],f=q.morphAttributes.color||[],p=0;if(B===!0)p=1;if(M===!0)p=2;if(C===!0)p=3;let A=q.attributes.position.count*p,k=1;if(A>Z.maxTextureSize)k=Math.ceil(A/Z.maxTextureSize),A=Z.maxTextureSize;let v=new Float32Array(A*k*4*O),n=new t7(v,A,k,O);n.type=1015,n.needsUpdate=!0;let i=p*4;for(let x=0;x<O;x++){let u=w[x],r=L[x],c=f[x],d=A*k*4*x;for(let t=0;t<u.count;t++){let W0=t*i;if(B===!0)K.fromBufferAttribute(u,t),v[d+W0+0]=K.x,v[d+W0+1]=K.y,v[d+W0+2]=K.z,v[d+W0+3]=0;if(M===!0)K.fromBufferAttribute(r,t),v[d+W0+4]=K.x,v[d+W0+5]=K.y,v[d+W0+6]=K.z,v[d+W0+7]=0;if(C===!0)K.fromBufferAttribute(c,t),v[d+W0+8]=K.x,v[d+W0+9]=K.y,v[d+W0+10]=K.z,v[d+W0+11]=c.itemSize===4?K.w:1}}R={count:O,texture:n,size:new F0(A,k)},H.set(q,R),q.addEventListener("dispose",T)}let N=0;for(let B=0;B<E.length;B++)N+=E[B];let F=q.morphTargetsRelative?1:1-N;V.getUniforms().setValue(J,"morphTargetBaseInfluence",F),V.getUniforms().setValue(J,"morphTargetInfluences",E),V.getUniforms().setValue(J,"morphTargetsTexture",R.texture,Q),V.getUniforms().setValue(J,"morphTargetsTextureSize",R.size)}else{let D=E===void 0?0:E.length,O=W[q.id];if(O===void 0||O.length!==D){O=[];for(let M=0;M<D;M++)O[M]=[M,0];W[q.id]=O}for(let M=0;M<D;M++){let C=O[M];C[0]=M,C[1]=E[M]}O.sort(_X);for(let M=0;M<8;M++)if(M<D&&O[M][1])X[M][0]=O[M][0],X[M][1]=O[M][1];else X[M][0]=Number.MAX_SAFE_INTEGER,X[M][1]=0;X.sort(xX);let R=q.morphAttributes.position,N=q.morphAttributes.normal,F=0;for(let M=0;M<8;M++){let C=X[M],w=C[0],L=C[1];if(w!==Number.MAX_SAFE_INTEGER&&L){if(R&&q.getAttribute("morphTarget"+M)!==R[w])q.setAttribute("morphTarget"+M,R[w]);if(N&&q.getAttribute("morphNormal"+M)!==N[w])q.setAttribute("morphNormal"+M,N[w]);Y[M]=L,F+=L}else{if(R&&q.hasAttribute("morphTarget"+M)===!0)q.deleteAttribute("morphTarget"+M);if(N&&q.hasAttribute("morphNormal"+M)===!0)q.deleteAttribute("morphNormal"+M);Y[M]=0}}let B=q.morphTargetsRelative?1:1-F;V.getUniforms().setValue(J,"morphTargetBaseInfluence",B),V.getUniforms().setValue(J,"morphTargetInfluences",Y)}}return{update:U}}function pX(J,Z,Q,W){let Y=new WeakMap;function H(U){let G=W.render.frame,q=U.geometry,V=Z.get(U,q);if(Y.get(V)!==G)Z.update(V),Y.set(V,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(Y.get(U)!==G){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);Y.set(U,G)}}if(U.isSkinnedMesh){let E=U.skeleton;if(Y.get(E)!==G)E.update(),Y.set(E,G)}return V}function K(){Y=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),Q.remove(G.instanceMatrix),G.instanceColor!==null)Q.remove(G.instanceColor)}return{update:H,dispose:K}}class XJ extends p5{constructor(J,Z,Q,W,Y,H,K,X,U,G){if(G=G!==void 0?G:1026,G!==1026&&G!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Q===void 0&&G===1026)Q=1014;if(Q===void 0&&G===1027)Q=1020;super(null,W,Y,H,K,X,G,Q,U);this.isDepthTexture=!0,this.image={width:J,height:Z},this.magFilter=K!==void 0?K:1003,this.minFilter=X!==void 0?X:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Z=super.toJSON(J);if(this.compareFunction!==null)Z.compareFunction=this.compareFunction;return Z}}var hZ=new p5,yZ=new XJ(1,1);yZ.compareFunction=515;var xZ=new t7,_Z=new TZ,gZ=new WJ,QZ=[],WZ=[],YZ=new Float32Array(16),HZ=new Float32Array(9),XZ=new Float32Array(4);function F8(J,Z,Q){let W=J[0];if(W<=0||W>0)return J;let Y=Z*Q,H=QZ[Y];if(H===void 0)H=new Float32Array(Y),QZ[Y]=H;if(Z!==0){W.toArray(H,0);for(let K=1,X=0;K!==Z;++K)X+=Q,J[K].toArray(H,X)}return H}function M5(J,Z){if(J.length!==Z.length)return!1;for(let Q=0,W=J.length;Q<W;Q++)if(J[Q]!==Z[Q])return!1;return!0}function z5(J,Z){for(let Q=0,W=Z.length;Q<W;Q++)J[Q]=Z[Q]}function j9(J,Z){let Q=WZ[Z];if(Q===void 0)Q=new Int32Array(Z),WZ[Z]=Q;for(let W=0;W!==Z;++W)Q[W]=J.allocateTextureUnit();return Q}function mX(J,Z){let Q=this.cache;if(Q[0]===Z)return;J.uniform1f(this.addr,Z),Q[0]=Z}function lX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y)J.uniform2f(this.addr,Z.x,Z.y),Q[0]=Z.x,Q[1]=Z.y}else{if(M5(Q,Z))return;J.uniform2fv(this.addr,Z),z5(Q,Z)}}function uX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z)J.uniform3f(this.addr,Z.x,Z.y,Z.z),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z}else if(Z.r!==void 0){if(Q[0]!==Z.r||Q[1]!==Z.g||Q[2]!==Z.b)J.uniform3f(this.addr,Z.r,Z.g,Z.b),Q[0]=Z.r,Q[1]=Z.g,Q[2]=Z.b}else{if(M5(Q,Z))return;J.uniform3fv(this.addr,Z),z5(Q,Z)}}function dX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z||Q[3]!==Z.w)J.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z,Q[3]=Z.w}else{if(M5(Q,Z))return;J.uniform4fv(this.addr,Z),z5(Q,Z)}}function cX(J,Z){let Q=this.cache,W=Z.elements;if(W===void 0){if(M5(Q,Z))return;J.uniformMatrix2fv(this.addr,!1,Z),z5(Q,Z)}else{if(M5(Q,W))return;XZ.set(W),J.uniformMatrix2fv(this.addr,!1,XZ),z5(Q,W)}}function nX(J,Z){let Q=this.cache,W=Z.elements;if(W===void 0){if(M5(Q,Z))return;J.uniformMatrix3fv(this.addr,!1,Z),z5(Q,Z)}else{if(M5(Q,W))return;HZ.set(W),J.uniformMatrix3fv(this.addr,!1,HZ),z5(Q,W)}}function sX(J,Z){let Q=this.cache,W=Z.elements;if(W===void 0){if(M5(Q,Z))return;J.uniformMatrix4fv(this.addr,!1,Z),z5(Q,Z)}else{if(M5(Q,W))return;YZ.set(W),J.uniformMatrix4fv(this.addr,!1,YZ),z5(Q,W)}}function iX(J,Z){let Q=this.cache;if(Q[0]===Z)return;J.uniform1i(this.addr,Z),Q[0]=Z}function oX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y)J.uniform2i(this.addr,Z.x,Z.y),Q[0]=Z.x,Q[1]=Z.y}else{if(M5(Q,Z))return;J.uniform2iv(this.addr,Z),z5(Q,Z)}}function rX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z)J.uniform3i(this.addr,Z.x,Z.y,Z.z),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z}else{if(M5(Q,Z))return;J.uniform3iv(this.addr,Z),z5(Q,Z)}}function aX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z||Q[3]!==Z.w)J.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z,Q[3]=Z.w}else{if(M5(Q,Z))return;J.uniform4iv(this.addr,Z),z5(Q,Z)}}function tX(J,Z){let Q=this.cache;if(Q[0]===Z)return;J.uniform1ui(this.addr,Z),Q[0]=Z}function eX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y)J.uniform2ui(this.addr,Z.x,Z.y),Q[0]=Z.x,Q[1]=Z.y}else{if(M5(Q,Z))return;J.uniform2uiv(this.addr,Z),z5(Q,Z)}}function JK(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z)J.uniform3ui(this.addr,Z.x,Z.y,Z.z),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z}else{if(M5(Q,Z))return;J.uniform3uiv(this.addr,Z),z5(Q,Z)}}function ZK(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z||Q[3]!==Z.w)J.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z,Q[3]=Z.w}else{if(M5(Q,Z))return;J.uniform4uiv(this.addr,Z),z5(Q,Z)}}function QK(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;let H=this.type===J.SAMPLER_2D_SHADOW?yZ:hZ;Q.setTexture2D(Z||H,Y)}function WK(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;Q.setTexture3D(Z||_Z,Y)}function YK(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;Q.setTextureCube(Z||gZ,Y)}function HK(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;Q.setTexture2DArray(Z||xZ,Y)}function XK(J){switch(J){case 5126:return mX;case 35664:return lX;case 35665:return uX;case 35666:return dX;case 35674:return cX;case 35675:return nX;case 35676:return sX;case 5124:case 35670:return iX;case 35667:case 35671:return oX;case 35668:case 35672:return rX;case 35669:case 35673:return aX;case 5125:return tX;case 36294:return eX;case 36295:return JK;case 36296:return ZK;case 35678:case 36198:case 36298:case 36306:case 35682:return QK;case 35679:case 36299:case 36307:return WK;case 35680:case 36300:case 36308:case 36293:return YK;case 36289:case 36303:case 36311:case 36292:return HK}}function KK(J,Z){J.uniform1fv(this.addr,Z)}function UK(J,Z){let Q=F8(Z,this.size,2);J.uniform2fv(this.addr,Q)}function GK(J,Z){let Q=F8(Z,this.size,3);J.uniform3fv(this.addr,Q)}function VK(J,Z){let Q=F8(Z,this.size,4);J.uniform4fv(this.addr,Q)}function qK(J,Z){let Q=F8(Z,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function EK(J,Z){let Q=F8(Z,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function FK(J,Z){let Q=F8(Z,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function DK(J,Z){J.uniform1iv(this.addr,Z)}function NK(J,Z){J.uniform2iv(this.addr,Z)}function OK(J,Z){J.uniform3iv(this.addr,Z)}function RK(J,Z){J.uniform4iv(this.addr,Z)}function MK(J,Z){J.uniform1uiv(this.addr,Z)}function zK(J,Z){J.uniform2uiv(this.addr,Z)}function BK(J,Z){J.uniform3uiv(this.addr,Z)}function AK(J,Z){J.uniform4uiv(this.addr,Z)}function IK(J,Z,Q){let W=this.cache,Y=Z.length,H=j9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTexture2D(Z[K]||hZ,H[K])}function $K(J,Z,Q){let W=this.cache,Y=Z.length,H=j9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTexture3D(Z[K]||_Z,H[K])}function CK(J,Z,Q){let W=this.cache,Y=Z.length,H=j9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTextureCube(Z[K]||gZ,H[K])}function kK(J,Z,Q){let W=this.cache,Y=Z.length,H=j9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTexture2DArray(Z[K]||xZ,H[K])}function LK(J){switch(J){case 5126:return KK;case 35664:return UK;case 35665:return GK;case 35666:return VK;case 35674:return qK;case 35675:return EK;case 35676:return FK;case 5124:case 35670:return DK;case 35667:case 35671:return NK;case 35668:case 35672:return OK;case 35669:case 35673:return RK;case 5125:return MK;case 36294:return zK;case 36295:return BK;case 36296:return AK;case 35678:case 36198:case 36298:case 36306:case 35682:return IK;case 35679:case 36299:case 36307:return $K;case 35680:case 36300:case 36308:case 36293:return CK;case 36289:case 36303:case 36311:case 36292:return kK}}class pZ{constructor(J,Z,Q){this.id=J,this.addr=Q,this.cache=[],this.type=Z.type,this.setValue=XK(Z.type)}}class mZ{constructor(J,Z,Q){this.id=J,this.addr=Q,this.cache=[],this.type=Z.type,this.size=Z.size,this.setValue=LK(Z.type)}}class lZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Z,Q){let W=this.seq;for(let Y=0,H=W.length;Y!==H;++Y){let K=W[Y];K.setValue(J,Z[K.id],Q)}}}var y7=/(\w+)(\])?(\[|\.)?/g;function KZ(J,Z){J.seq.push(Z),J.map[Z.id]=Z}function PK(J,Z,Q){let W=J.name,Y=W.length;y7.lastIndex=0;while(!0){let H=y7.exec(W),K=y7.lastIndex,X=H[1],U=H[2]==="]",G=H[3];if(U)X=X|0;if(G===void 0||G==="["&&K+2===Y){KZ(Q,G===void 0?new pZ(X,J,Z):new mZ(X,J,Z));break}else{let V=Q.map[X];if(V===void 0)V=new lZ(X),KZ(Q,V);Q=V}}}class T8{constructor(J,Z){this.seq=[],this.map={};let Q=J.getProgramParameter(Z,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let Y=J.getActiveUniform(Z,W),H=J.getUniformLocation(Z,Y.name);PK(Y,H,this)}}setValue(J,Z,Q,W){let Y=this.map[Z];if(Y!==void 0)Y.setValue(J,Q,W)}setOptional(J,Z,Q){let W=Z[Q];if(W!==void 0)this.setValue(J,Q,W)}static upload(J,Z,Q,W){for(let Y=0,H=Z.length;Y!==H;++Y){let K=Z[Y],X=Q[K.id];if(X.needsUpdate!==!1)K.setValue(J,X.value,W)}}static seqWithValue(J,Z){let Q=[];for(let W=0,Y=J.length;W!==Y;++W){let H=J[W];if(H.id in Z)Q.push(H)}return Q}}function UZ(J,Z,Q){let W=J.createShader(Z);return J.shaderSource(W,Q),J.compileShader(W),W}var wK=37297,TK=0;function SK(J,Z){let Q=J.split(`
`),W=[],Y=Math.max(Z-6,0),H=Math.min(Z+6,Q.length);for(let K=Y;K<H;K++){let X=K+1;W.push(`${X===Z?">":" "} ${X}: ${Q[K]}`)}return W.join(`
`)}function vK(J){let Z=W5.getPrimaries(W5.workingColorSpace),Q=W5.getPrimaries(J),W;if(Z===Q)W="";else if(Z==="p3"&&Q==="rec709")W="LinearDisplayP3ToLinearSRGB";else if(Z==="rec709"&&Q==="p3")W="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[W,"LinearTransferOETF"];case"srgb":case"display-p3":return[W,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[W,"LinearTransferOETF"]}}function GZ(J,Z,Q){let W=J.getShaderParameter(Z,J.COMPILE_STATUS),Y=J.getShaderInfoLog(Z).trim();if(W&&Y==="")return"";let H=/ERROR: 0:(\d+)/.exec(Y);if(H){let K=parseInt(H[1]);return Q.toUpperCase()+`

`+Y+`

`+SK(J.getShaderSource(Z),K)}else return Y}function fK(J,Z){let Q=vK(Z);return`vec4 ${J}( vec4 value ) { return ${Q[0]}( ${Q[1]}( value ) ); }`}function bK(J,Z){let Q;switch(Z){case 1:Q="Linear";break;case 2:Q="Reinhard";break;case 3:Q="OptimizedCineon";break;case 4:Q="ACESFilmic";break;case 6:Q="AgX";break;case 5:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Z),Q="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}function jK(J){return[J.extensionDerivatives||!!J.envMapCubeUVHeight||J.bumpMap||J.normalMapTangentSpace||J.clearcoatNormalMap||J.flatShading||J.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(J.extensionFragDepth||J.logarithmicDepthBuffer)&&J.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",J.extensionDrawBuffers&&J.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(J.extensionShaderTextureLOD||J.envMap||J.transmission)&&J.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(X8).join(`
`)}function hK(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(X8).join(`
`)}function yK(J){let Z=[];for(let Q in J){let W=J[Q];if(W===!1)continue;Z.push("#define "+Q+" "+W)}return Z.join(`
`)}function xK(J,Z){let Q={},W=J.getProgramParameter(Z,J.ACTIVE_ATTRIBUTES);for(let Y=0;Y<W;Y++){let H=J.getActiveAttrib(Z,Y),K=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;Q[K]={type:H.type,location:J.getAttribLocation(Z,K),locationSize:X}}return Q}function X8(J){return J!==""}function VZ(J,Z){let Q=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows)}function qZ(J,Z){return J.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}var _K=/^[ \t]*#include +<([\w\d./]+)>/gm;function c7(J){return J.replace(_K,pK)}var gK=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pK(J,Z){let Q=u0[Z];if(Q===void 0){let W=gK.get(Z);if(W!==void 0)Q=u0[W],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Z,W);else throw Error("Can not resolve #include <"+Z+">")}return c7(Q)}var mK=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function EZ(J){return J.replace(mK,lK)}function lK(J,Z,Q,W){let Y="";for(let H=parseInt(Z);H<parseInt(Q);H++)Y+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return Y}function FZ(J){let Z="precision "+J.precision+` float;
precision `+J.precision+" int;";if(J.precision==="highp")Z+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Z+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Z+=`
#define LOW_PRECISION`;return Z}function uK(J){let Z="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)Z="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)Z="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)Z="SHADOWMAP_TYPE_VSM";return Z}function dK(J){let Z="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:Z="ENVMAP_TYPE_CUBE";break;case 306:Z="ENVMAP_TYPE_CUBE_UV";break}return Z}function cK(J){let Z="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:Z="ENVMAP_MODE_REFRACTION";break}return Z}function nK(J){let Z="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:Z="ENVMAP_BLENDING_MULTIPLY";break;case 1:Z="ENVMAP_BLENDING_MIX";break;case 2:Z="ENVMAP_BLENDING_ADD";break}return Z}function sK(J){let Z=J.envMapCubeUVHeight;if(Z===null)return null;let Q=Math.log2(Z)-2,W=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:W,maxMip:Q}}function iK(J,Z,Q,W){let Y=J.getContext(),H=Q.defines,K=Q.vertexShader,X=Q.fragmentShader,U=uK(Q),G=dK(Q),q=cK(Q),V=nK(Q),E=sK(Q),D=Q.isWebGL2?"":jK(Q),O=hK(Q),R=yK(H),N=Y.createProgram(),F,B,M=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R].filter(X8).join(`
`),F.length>0)F+=`
`;if(B=[D,"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R].filter(X8).join(`
`),B.length>0)B+=`
`}else F=[FZ(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+q:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors&&Q.isWebGL2?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+U:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.useLegacyLights?"#define LEGACY_LIGHTS":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.logarithmicDepthBuffer&&Q.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(X8).join(`
`),B=[D,FZ(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+q:"",Q.envMap?"#define "+V:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+U:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.useLegacyLights?"#define LEGACY_LIGHTS":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.logarithmicDepthBuffer&&Q.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==0?"#define TONE_MAPPING":"",Q.toneMapping!==0?u0.tonemapping_pars_fragment:"",Q.toneMapping!==0?bK("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",u0.colorspace_pars_fragment,fK("linearToOutputTexel",Q.outputColorSpace),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(X8).join(`
`);if(K=c7(K),K=VZ(K,Q),K=qZ(K,Q),X=c7(X),X=VZ(X,Q),X=qZ(X,Q),K=EZ(K),X=EZ(X),Q.isWebGL2&&Q.isRawShaderMaterial!==!0)M=`#version 300 es
`,F=[O,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,B=["precision mediump sampler2DArray;","#define varying in",Q.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+B;let C=M+F+K,w=M+B+X,L=UZ(Y,Y.VERTEX_SHADER,C),f=UZ(Y,Y.FRAGMENT_SHADER,w);if(Y.attachShader(N,L),Y.attachShader(N,f),Q.index0AttributeName!==void 0)Y.bindAttribLocation(N,0,Q.index0AttributeName);else if(Q.morphTargets===!0)Y.bindAttribLocation(N,0,"position");Y.linkProgram(N);function p(n){if(J.debug.checkShaderErrors){let i=Y.getProgramInfoLog(N).trim(),T=Y.getShaderInfoLog(L).trim(),x=Y.getShaderInfoLog(f).trim(),u=!0,r=!0;if(Y.getProgramParameter(N,Y.LINK_STATUS)===!1)if(u=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Y,N,L,f);else{let c=GZ(Y,L,"vertex"),d=GZ(Y,f,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Y.getError()+" - VALIDATE_STATUS "+Y.getProgramParameter(N,Y.VALIDATE_STATUS)+`

Program Info Log: `+i+`
`+c+`
`+d)}else if(i!=="")console.warn("THREE.WebGLProgram: Program Info Log:",i);else if(T===""||x==="")r=!1;if(r)n.diagnostics={runnable:u,programLog:i,vertexShader:{log:T,prefix:F},fragmentShader:{log:x,prefix:B}}}Y.deleteShader(L),Y.deleteShader(f),A=new T8(Y,N),k=xK(Y,N)}let A;this.getUniforms=function(){if(A===void 0)p(this);return A};let k;this.getAttributes=function(){if(k===void 0)p(this);return k};let v=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(v===!1)v=Y.getProgramParameter(N,wK);return v},this.destroy=function(){W.releaseStatesOfProgram(this),Y.deleteProgram(N),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=TK++,this.cacheKey=Z,this.usedTimes=1,this.program=N,this.vertexShader=L,this.fragmentShader=f,this}var oK=0;class uZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Z,fragmentShader:Q}=J,W=this._getShaderStage(Z),Y=this._getShaderStage(Q),H=this._getShaderCacheForMaterial(J);if(H.has(W)===!1)H.add(W),W.usedTimes++;if(H.has(Y)===!1)H.add(Y),Y.usedTimes++;return this}remove(J){let Z=this.materialCache.get(J);for(let Q of Z)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Z=this.materialCache,Q=Z.get(J);if(Q===void 0)Q=new Set,Z.set(J,Q);return Q}_getShaderStage(J){let Z=this.shaderCache,Q=Z.get(J);if(Q===void 0)Q=new dZ(J),Z.set(J,Q);return Q}}class dZ{constructor(J){this.id=oK++,this.code=J,this.usedTimes=0}}function rK(J,Z,Q,W,Y,H,K){let X=new f9,U=new uZ,G=[],q=Y.isWebGL2,V=Y.logarithmicDepthBuffer,E=Y.vertexTextures,D=Y.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){if(A===0)return"uv";return`uv${A}`}function N(A,k,v,n,i){let T=n.fog,x=i.geometry,u=A.isMeshStandardMaterial?n.environment:null,r=(A.isMeshStandardMaterial?Q:Z).get(A.envMap||u),c=!!r&&r.mapping===306?r.image.height:null,d=O[A.type];if(A.precision!==null){if(D=Y.getMaxPrecision(A.precision),D!==A.precision)console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",D,"instead.")}let t=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,W0=t!==void 0?t.length:0,y=0;if(x.morphAttributes.position!==void 0)y=1;if(x.morphAttributes.normal!==void 0)y=2;if(x.morphAttributes.color!==void 0)y=3;let o,X0,D0,P0;if(d){let b5=U6[d];o=b5.vertexShader,X0=b5.fragmentShader}else o=A.vertexShader,X0=A.fragmentShader,U.update(A),D0=U.getVertexShaderID(A),P0=U.getFragmentShaderID(A);let k0=J.getRenderTarget(),p0=i.isInstancedMesh===!0,S0=i.isBatchedMesh===!0,t0=!!A.map,h=!!A.matcap,A5=!!r,H0=!!A.aoMap,s=!!A.lightMap,Q0=!!A.bumpMap,K0=!!A.normalMap,M0=!!A.displacementMap,$0=!!A.emissiveMap,$=!!A.metalnessMap,z=!!A.roughnessMap,_=A.anisotropy>0,e=A.clearcoat>0,a=A.iridescence>0,Z0=A.sheen>0,v0=A.transmission>0,q0=_&&!!A.anisotropyMap,z0=e&&!!A.clearcoatMap,w0=e&&!!A.clearcoatNormalMap,l0=e&&!!A.clearcoatRoughnessMap,J0=a&&!!A.iridescenceMap,N5=a&&!!A.iridescenceThicknessMap,i0=Z0&&!!A.sheenColorMap,x0=Z0&&!!A.sheenRoughnessMap,B0=!!A.specularMap,C0=!!A.specularColorMap,o0=!!A.specularIntensityMap,Y5=v0&&!!A.transmissionMap,a0=v0&&!!A.thicknessMap,H5=!!A.gradientMap,U0=!!A.alphaMap,S=A.alphaTest>0,V0=!!A.alphaHash,E0=!!A.extensions,h0=!!x.attributes.uv1,T0=!!x.attributes.uv2,X5=!!x.attributes.uv3,U5=0;if(A.toneMapped){if(k0===null||k0.isXRRenderTarget===!0)U5=J.toneMapping}return{isWebGL2:q,shaderID:d,shaderType:A.type,shaderName:A.name,vertexShader:o,fragmentShader:X0,defines:A.defines,customVertexShaderID:D0,customFragmentShaderID:P0,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:D,batching:S0,instancing:p0,instancingColor:p0&&i.instanceColor!==null,supportsVertexTextures:E,outputColorSpace:k0===null?J.outputColorSpace:k0.isXRRenderTarget===!0?k0.texture.colorSpace:"srgb-linear",map:t0,matcap:h,envMap:A5,envMapMode:A5&&r.mapping,envMapCubeUVHeight:c,aoMap:H0,lightMap:s,bumpMap:Q0,normalMap:K0,displacementMap:E&&M0,emissiveMap:$0,normalMapObjectSpace:K0&&A.normalMapType===1,normalMapTangentSpace:K0&&A.normalMapType===0,metalnessMap:$,roughnessMap:z,anisotropy:_,anisotropyMap:q0,clearcoat:e,clearcoatMap:z0,clearcoatNormalMap:w0,clearcoatRoughnessMap:l0,iridescence:a,iridescenceMap:J0,iridescenceThicknessMap:N5,sheen:Z0,sheenColorMap:i0,sheenRoughnessMap:x0,specularMap:B0,specularColorMap:C0,specularIntensityMap:o0,transmission:v0,transmissionMap:Y5,thicknessMap:a0,gradientMap:H5,opaque:A.transparent===!1&&A.blending===1,alphaMap:U0,alphaTest:S,alphaHash:V0,combine:A.combine,mapUv:t0&&R(A.map.channel),aoMapUv:H0&&R(A.aoMap.channel),lightMapUv:s&&R(A.lightMap.channel),bumpMapUv:Q0&&R(A.bumpMap.channel),normalMapUv:K0&&R(A.normalMap.channel),displacementMapUv:M0&&R(A.displacementMap.channel),emissiveMapUv:$0&&R(A.emissiveMap.channel),metalnessMapUv:$&&R(A.metalnessMap.channel),roughnessMapUv:z&&R(A.roughnessMap.channel),anisotropyMapUv:q0&&R(A.anisotropyMap.channel),clearcoatMapUv:z0&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:w0&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:l0&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:J0&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:N5&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:i0&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:x0&&R(A.sheenRoughnessMap.channel),specularMapUv:B0&&R(A.specularMap.channel),specularColorMapUv:C0&&R(A.specularColorMap.channel),specularIntensityMapUv:o0&&R(A.specularIntensityMap.channel),transmissionMapUv:Y5&&R(A.transmissionMap.channel),thicknessMapUv:a0&&R(A.thicknessMap.channel),alphaMapUv:U0&&R(A.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(K0||_),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,vertexUv1s:h0,vertexUv2s:T0,vertexUv3s:X5,pointsUvs:i.isPoints===!0&&!!x.attributes.uv&&(t0||U0),fog:!!T,useFog:A.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:V,skinning:i.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:W0,morphTextureStride:y,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:A.dithering,shadowMapEnabled:J.shadowMap.enabled&&v.length>0,shadowMapType:J.shadowMap.type,toneMapping:U5,useLegacyLights:J._useLegacyLights,decodeVideoTexture:t0&&A.map.isVideoTexture===!0&&W5.getTransfer(A.map.colorSpace)==="srgb",premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:E0&&A.extensions.derivatives===!0,extensionFragDepth:E0&&A.extensions.fragDepth===!0,extensionDrawBuffers:E0&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:E0&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:E0&&A.extensions.clipCullDistance&&W.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:q||W.has("EXT_frag_depth"),rendererExtensionDrawBuffers:q||W.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:q||W.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:W.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function F(A){let k=[];if(A.shaderID)k.push(A.shaderID);else k.push(A.customVertexShaderID),k.push(A.customFragmentShaderID);if(A.defines!==void 0)for(let v in A.defines)k.push(v),k.push(A.defines[v]);if(A.isRawShaderMaterial===!1)B(k,A),M(k,A),k.push(J.outputColorSpace);return k.push(A.customProgramCacheKey),k.join()}function B(A,k){A.push(k.precision),A.push(k.outputColorSpace),A.push(k.envMapMode),A.push(k.envMapCubeUVHeight),A.push(k.mapUv),A.push(k.alphaMapUv),A.push(k.lightMapUv),A.push(k.aoMapUv),A.push(k.bumpMapUv),A.push(k.normalMapUv),A.push(k.displacementMapUv),A.push(k.emissiveMapUv),A.push(k.metalnessMapUv),A.push(k.roughnessMapUv),A.push(k.anisotropyMapUv),A.push(k.clearcoatMapUv),A.push(k.clearcoatNormalMapUv),A.push(k.clearcoatRoughnessMapUv),A.push(k.iridescenceMapUv),A.push(k.iridescenceThicknessMapUv),A.push(k.sheenColorMapUv),A.push(k.sheenRoughnessMapUv),A.push(k.specularMapUv),A.push(k.specularColorMapUv),A.push(k.specularIntensityMapUv),A.push(k.transmissionMapUv),A.push(k.thicknessMapUv),A.push(k.combine),A.push(k.fogExp2),A.push(k.sizeAttenuation),A.push(k.morphTargetsCount),A.push(k.morphAttributeCount),A.push(k.numDirLights),A.push(k.numPointLights),A.push(k.numSpotLights),A.push(k.numSpotLightMaps),A.push(k.numHemiLights),A.push(k.numRectAreaLights),A.push(k.numDirLightShadows),A.push(k.numPointLightShadows),A.push(k.numSpotLightShadows),A.push(k.numSpotLightShadowsWithMaps),A.push(k.numLightProbes),A.push(k.shadowMapType),A.push(k.toneMapping),A.push(k.numClippingPlanes),A.push(k.numClipIntersection),A.push(k.depthPacking)}function M(A,k){if(X.disableAll(),k.isWebGL2)X.enable(0);if(k.supportsVertexTextures)X.enable(1);if(k.instancing)X.enable(2);if(k.instancingColor)X.enable(3);if(k.matcap)X.enable(4);if(k.envMap)X.enable(5);if(k.normalMapObjectSpace)X.enable(6);if(k.normalMapTangentSpace)X.enable(7);if(k.clearcoat)X.enable(8);if(k.iridescence)X.enable(9);if(k.alphaTest)X.enable(10);if(k.vertexColors)X.enable(11);if(k.vertexAlphas)X.enable(12);if(k.vertexUv1s)X.enable(13);if(k.vertexUv2s)X.enable(14);if(k.vertexUv3s)X.enable(15);if(k.vertexTangents)X.enable(16);if(k.anisotropy)X.enable(17);if(k.alphaHash)X.enable(18);if(k.batching)X.enable(19);if(A.push(X.mask),X.disableAll(),k.fog)X.enable(0);if(k.useFog)X.enable(1);if(k.flatShading)X.enable(2);if(k.logarithmicDepthBuffer)X.enable(3);if(k.skinning)X.enable(4);if(k.morphTargets)X.enable(5);if(k.morphNormals)X.enable(6);if(k.morphColors)X.enable(7);if(k.premultipliedAlpha)X.enable(8);if(k.shadowMapEnabled)X.enable(9);if(k.useLegacyLights)X.enable(10);if(k.doubleSided)X.enable(11);if(k.flipSided)X.enable(12);if(k.useDepthPacking)X.enable(13);if(k.dithering)X.enable(14);if(k.transmission)X.enable(15);if(k.sheen)X.enable(16);if(k.opaque)X.enable(17);if(k.pointsUvs)X.enable(18);if(k.decodeVideoTexture)X.enable(19);A.push(X.mask)}function C(A){let k=O[A.type],v;if(k){let n=U6[k];v=gW.clone(n.uniforms)}else v=A.uniforms;return v}function w(A,k){let v;for(let n=0,i=G.length;n<i;n++){let T=G[n];if(T.cacheKey===k){v=T,++v.usedTimes;break}}if(v===void 0)v=new iK(J,k,A,H),G.push(v);return v}function L(A){if(--A.usedTimes===0){let k=G.indexOf(A);G[k]=G[G.length-1],G.pop(),A.destroy()}}function f(A){U.remove(A)}function p(){U.dispose()}return{getParameters:N,getProgramCacheKey:F,getUniforms:C,acquireProgram:w,releaseProgram:L,releaseShaderCache:f,programs:G,dispose:p}}function aK(){let J=new WeakMap;function Z(H){let K=J.get(H);if(K===void 0)K={},J.set(H,K);return K}function Q(H){J.delete(H)}function W(H,K,X){J.get(H)[K]=X}function Y(){J=new WeakMap}return{get:Z,remove:Q,update:W,dispose:Y}}function tK(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.material.id!==Z.material.id)return J.material.id-Z.material.id;else if(J.z!==Z.z)return J.z-Z.z;else return J.id-Z.id}function DZ(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.z!==Z.z)return Z.z-J.z;else return J.id-Z.id}function NZ(){let J=[],Z=0,Q=[],W=[],Y=[];function H(){Z=0,Q.length=0,W.length=0,Y.length=0}function K(V,E,D,O,R,N){let F=J[Z];if(F===void 0)F={id:V.id,object:V,geometry:E,material:D,groupOrder:O,renderOrder:V.renderOrder,z:R,group:N},J[Z]=F;else F.id=V.id,F.object=V,F.geometry=E,F.material=D,F.groupOrder=O,F.renderOrder=V.renderOrder,F.z=R,F.group=N;return Z++,F}function X(V,E,D,O,R,N){let F=K(V,E,D,O,R,N);if(D.transmission>0)W.push(F);else if(D.transparent===!0)Y.push(F);else Q.push(F)}function U(V,E,D,O,R,N){let F=K(V,E,D,O,R,N);if(D.transmission>0)W.unshift(F);else if(D.transparent===!0)Y.unshift(F);else Q.unshift(F)}function G(V,E){if(Q.length>1)Q.sort(V||tK);if(W.length>1)W.sort(E||DZ);if(Y.length>1)Y.sort(E||DZ)}function q(){for(let V=Z,E=J.length;V<E;V++){let D=J[V];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:Q,transmissive:W,transparent:Y,init:H,push:X,unshift:U,finish:q,sort:G}}function eK(){let J=new WeakMap;function Z(W,Y){let H=J.get(W),K;if(H===void 0)K=new NZ,J.set(W,[K]);else if(Y>=H.length)K=new NZ,H.push(K);else K=H[Y];return K}function Q(){J=new WeakMap}return{get:Z,dispose:Q}}function JU(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let Q;switch(Z.type){case"DirectionalLight":Q={direction:new P,color:new g0};break;case"SpotLight":Q={position:new P,direction:new P,color:new g0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new P,color:new g0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new P,skyColor:new g0,groundColor:new g0};break;case"RectAreaLight":Q={color:new g0,position:new P,halfWidth:new P,halfHeight:new P};break}return J[Z.id]=Q,Q}}}function ZU(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let Q;switch(Z.type){case"DirectionalLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0};break;case"SpotLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0};break;case"PointLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Z.id]=Q,Q}}}var QU=0;function WU(J,Z){return(Z.castShadow?2:0)-(J.castShadow?2:0)+(Z.map?1:0)-(J.map?1:0)}function YU(J,Z){let Q=new JU,W=ZU(),Y={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let q=0;q<9;q++)Y.probe.push(new P);let H=new P,K=new D5,X=new D5;function U(q,V){let E=0,D=0,O=0;for(let n=0;n<9;n++)Y.probe[n].set(0,0,0);let R=0,N=0,F=0,B=0,M=0,C=0,w=0,L=0,f=0,p=0,A=0;q.sort(WU);let k=V===!0?Math.PI:1;for(let n=0,i=q.length;n<i;n++){let T=q[n],x=T.color,u=T.intensity,r=T.distance,c=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)E+=x.r*u*k,D+=x.g*u*k,O+=x.b*u*k;else if(T.isLightProbe){for(let d=0;d<9;d++)Y.probe[d].addScaledVector(T.sh.coefficients[d],u);A++}else if(T.isDirectionalLight){let d=Q.get(T);if(d.color.copy(T.color).multiplyScalar(T.intensity*k),T.castShadow){let t=T.shadow,W0=W.get(T);W0.shadowBias=t.bias,W0.shadowNormalBias=t.normalBias,W0.shadowRadius=t.radius,W0.shadowMapSize=t.mapSize,Y.directionalShadow[R]=W0,Y.directionalShadowMap[R]=c,Y.directionalShadowMatrix[R]=T.shadow.matrix,C++}Y.directional[R]=d,R++}else if(T.isSpotLight){let d=Q.get(T);d.position.setFromMatrixPosition(T.matrixWorld),d.color.copy(x).multiplyScalar(u*k),d.distance=r,d.coneCos=Math.cos(T.angle),d.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),d.decay=T.decay,Y.spot[F]=d;let t=T.shadow;if(T.map){if(Y.spotLightMap[f]=T.map,f++,t.updateMatrices(T),T.castShadow)p++}if(Y.spotLightMatrix[F]=t.matrix,T.castShadow){let W0=W.get(T);W0.shadowBias=t.bias,W0.shadowNormalBias=t.normalBias,W0.shadowRadius=t.radius,W0.shadowMapSize=t.mapSize,Y.spotShadow[F]=W0,Y.spotShadowMap[F]=c,L++}F++}else if(T.isRectAreaLight){let d=Q.get(T);d.color.copy(x).multiplyScalar(u),d.halfWidth.set(T.width*0.5,0,0),d.halfHeight.set(0,T.height*0.5,0),Y.rectArea[B]=d,B++}else if(T.isPointLight){let d=Q.get(T);if(d.color.copy(T.color).multiplyScalar(T.intensity*k),d.distance=T.distance,d.decay=T.decay,T.castShadow){let t=T.shadow,W0=W.get(T);W0.shadowBias=t.bias,W0.shadowNormalBias=t.normalBias,W0.shadowRadius=t.radius,W0.shadowMapSize=t.mapSize,W0.shadowCameraNear=t.camera.near,W0.shadowCameraFar=t.camera.far,Y.pointShadow[N]=W0,Y.pointShadowMap[N]=c,Y.pointShadowMatrix[N]=T.shadow.matrix,w++}Y.point[N]=d,N++}else if(T.isHemisphereLight){let d=Q.get(T);d.skyColor.copy(T.color).multiplyScalar(u*k),d.groundColor.copy(T.groundColor).multiplyScalar(u*k),Y.hemi[M]=d,M++}}if(B>0)if(Z.isWebGL2)if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=G0.LTC_FLOAT_1,Y.rectAreaLTC2=G0.LTC_FLOAT_2;else Y.rectAreaLTC1=G0.LTC_HALF_1,Y.rectAreaLTC2=G0.LTC_HALF_2;else if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=G0.LTC_FLOAT_1,Y.rectAreaLTC2=G0.LTC_FLOAT_2;else if(J.has("OES_texture_half_float_linear")===!0)Y.rectAreaLTC1=G0.LTC_HALF_1,Y.rectAreaLTC2=G0.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");Y.ambient[0]=E,Y.ambient[1]=D,Y.ambient[2]=O;let v=Y.hash;if(v.directionalLength!==R||v.pointLength!==N||v.spotLength!==F||v.rectAreaLength!==B||v.hemiLength!==M||v.numDirectionalShadows!==C||v.numPointShadows!==w||v.numSpotShadows!==L||v.numSpotMaps!==f||v.numLightProbes!==A)Y.directional.length=R,Y.spot.length=F,Y.rectArea.length=B,Y.point.length=N,Y.hemi.length=M,Y.directionalShadow.length=C,Y.directionalShadowMap.length=C,Y.pointShadow.length=w,Y.pointShadowMap.length=w,Y.spotShadow.length=L,Y.spotShadowMap.length=L,Y.directionalShadowMatrix.length=C,Y.pointShadowMatrix.length=w,Y.spotLightMatrix.length=L+f-p,Y.spotLightMap.length=f,Y.numSpotLightShadowsWithMaps=p,Y.numLightProbes=A,v.directionalLength=R,v.pointLength=N,v.spotLength=F,v.rectAreaLength=B,v.hemiLength=M,v.numDirectionalShadows=C,v.numPointShadows=w,v.numSpotShadows=L,v.numSpotMaps=f,v.numLightProbes=A,Y.version=QU++}function G(q,V){let E=0,D=0,O=0,R=0,N=0,F=V.matrixWorldInverse;for(let B=0,M=q.length;B<M;B++){let C=q[B];if(C.isDirectionalLight){let w=Y.directional[E];w.direction.setFromMatrixPosition(C.matrixWorld),H.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(H),w.direction.transformDirection(F),E++}else if(C.isSpotLight){let w=Y.spot[O];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(F),w.direction.setFromMatrixPosition(C.matrixWorld),H.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(H),w.direction.transformDirection(F),O++}else if(C.isRectAreaLight){let w=Y.rectArea[R];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(F),X.identity(),K.copy(C.matrixWorld),K.premultiply(F),X.extractRotation(K),w.halfWidth.set(C.width*0.5,0,0),w.halfHeight.set(0,C.height*0.5,0),w.halfWidth.applyMatrix4(X),w.halfHeight.applyMatrix4(X),R++}else if(C.isPointLight){let w=Y.point[D];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(F),D++}else if(C.isHemisphereLight){let w=Y.hemi[N];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(F),N++}}}return{setup:U,setupView:G,state:Y}}function OZ(J,Z){let Q=new YU(J,Z),W=[],Y=[];function H(){W.length=0,Y.length=0}function K(V){W.push(V)}function X(V){Y.push(V)}function U(V){Q.setup(W,V)}function G(V){Q.setupView(W,V)}return{init:H,state:{lightsArray:W,shadowsArray:Y,lights:Q},setupLights:U,setupLightsView:G,pushLight:K,pushShadow:X}}function HU(J,Z){let Q=new WeakMap;function W(H,K=0){let X=Q.get(H),U;if(X===void 0)U=new OZ(J,Z),Q.set(H,[U]);else if(K>=X.length)U=new OZ(J,Z),X.push(U);else U=X[K];return U}function Y(){Q=new WeakMap}return{get:W,dispose:Y}}class cZ extends E8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class nZ extends E8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var XU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UU(J,Z,Q){let W=new b9,Y=new F0,H=new F0,K=new G5,X=new cZ({depthPacking:3201}),U=new nZ,G={},q=Q.maxTextureSize,V={[0]:1,[1]:0,[2]:2},E=new L6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new F0},radius:{value:4}},vertexShader:XU,fragmentShader:KU}),D=E.clone();D.defines.HORIZONTAL_PASS=1;let O=new x5;O.setAttribute("position",new Z6(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let R=new Y0(O,E),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let F=this.type;this.render=function(L,f,p){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(L.length===0)return;let A=J.getRenderTarget(),k=J.getActiveCubeFace(),v=J.getActiveMipmapLevel(),n=J.state;n.setBlending(0),n.buffers.color.setClear(1,1,1,1),n.buffers.depth.setTest(!0),n.setScissorTest(!1);let i=F!==3&&this.type===3,T=F===3&&this.type!==3;for(let x=0,u=L.length;x<u;x++){let r=L[x],c=r.shadow;if(c===void 0){console.warn("THREE.WebGLShadowMap:",r,"has no shadow.");continue}if(c.autoUpdate===!1&&c.needsUpdate===!1)continue;Y.copy(c.mapSize);let d=c.getFrameExtents();if(Y.multiply(d),H.copy(c.mapSize),Y.x>q||Y.y>q){if(Y.x>q)H.x=Math.floor(q/d.x),Y.x=H.x*d.x,c.mapSize.x=H.x;if(Y.y>q)H.y=Math.floor(q/d.y),Y.y=H.y*d.y,c.mapSize.y=H.y}if(c.map===null||i===!0||T===!0){let W0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(c.map!==null)c.map.dispose();c.map=new k6(Y.x,Y.y,W0),c.map.texture.name=r.name+".shadowMap",c.camera.updateProjectionMatrix()}J.setRenderTarget(c.map),J.clear();let t=c.getViewportCount();for(let W0=0;W0<t;W0++){let y=c.getViewport(W0);K.set(H.x*y.x,H.y*y.y,H.x*y.z,H.y*y.w),n.viewport(K),c.updateMatrices(r,W0),W=c.getFrustum(),C(f,p,c.camera,r,this.type)}if(c.isPointLightShadow!==!0&&this.type===3)B(c,p);c.needsUpdate=!1}F=this.type,N.needsUpdate=!1,J.setRenderTarget(A,k,v)};function B(L,f){let p=Z.update(R);if(E.defines.VSM_SAMPLES!==L.blurSamples)E.defines.VSM_SAMPLES=L.blurSamples,D.defines.VSM_SAMPLES=L.blurSamples,E.needsUpdate=!0,D.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new k6(Y.x,Y.y);E.uniforms.shadow_pass.value=L.map.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,J.setRenderTarget(L.mapPass),J.clear(),J.renderBufferDirect(f,null,p,E,R,null),D.uniforms.shadow_pass.value=L.mapPass.texture,D.uniforms.resolution.value=L.mapSize,D.uniforms.radius.value=L.radius,J.setRenderTarget(L.map),J.clear(),J.renderBufferDirect(f,null,p,D,R,null)}function M(L,f,p,A){let k=null,v=p.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(v!==void 0)k=v;else if(k=p.isPointLight===!0?U:X,J.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0){let n=k.uuid,i=f.uuid,T=G[n];if(T===void 0)T={},G[n]=T;let x=T[i];if(x===void 0)x=k.clone(),T[i]=x,f.addEventListener("dispose",w);k=x}if(k.visible=f.visible,k.wireframe=f.wireframe,A===3)k.side=f.shadowSide!==null?f.shadowSide:f.side;else k.side=f.shadowSide!==null?f.shadowSide:V[f.side];if(k.alphaMap=f.alphaMap,k.alphaTest=f.alphaTest,k.map=f.map,k.clipShadows=f.clipShadows,k.clippingPlanes=f.clippingPlanes,k.clipIntersection=f.clipIntersection,k.displacementMap=f.displacementMap,k.displacementScale=f.displacementScale,k.displacementBias=f.displacementBias,k.wireframeLinewidth=f.wireframeLinewidth,k.linewidth=f.linewidth,p.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let n=J.properties.get(k);n.light=p}return k}function C(L,f,p,A,k){if(L.visible===!1)return;if(L.layers.test(f.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&k===3)&&(!L.frustumCulled||W.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,L.matrixWorld);let i=Z.update(L),T=L.material;if(Array.isArray(T)){let x=i.groups;for(let u=0,r=x.length;u<r;u++){let c=x[u],d=T[c.materialIndex];if(d&&d.visible){let t=M(L,d,A,k);L.onBeforeShadow(J,L,f,p,i,t,c),J.renderBufferDirect(p,null,i,t,L,c),L.onAfterShadow(J,L,f,p,i,t,c)}}}else if(T.visible){let x=M(L,T,A,k);L.onBeforeShadow(J,L,f,p,i,x,null),J.renderBufferDirect(p,null,i,x,L,null),L.onAfterShadow(J,L,f,p,i,x,null)}}}let n=L.children;for(let i=0,T=n.length;i<T;i++)C(n[i],f,p,A,k)}function w(L){L.target.removeEventListener("dispose",w);for(let p in G){let A=G[p],k=L.target.uuid;if(k in A)A[k].dispose(),delete A[k]}}}function GU(J,Z,Q){let W=Q.isWebGL2;function Y(){let S=!1,V0=new G5,E0=null,h0=new G5(0,0,0,0);return{setMask:function(T0){if(E0!==T0&&!S)J.colorMask(T0,T0,T0,T0),E0=T0},setLocked:function(T0){S=T0},setClear:function(T0,X5,U5,R5,b5){if(b5===!0)T0*=R5,X5*=R5,U5*=R5;if(V0.set(T0,X5,U5,R5),h0.equals(V0)===!1)J.clearColor(T0,X5,U5,R5),h0.copy(V0)},reset:function(){S=!1,E0=null,h0.set(-1,0,0,0)}}}function H(){let S=!1,V0=null,E0=null,h0=null;return{setTest:function(T0){if(T0)S0(J.DEPTH_TEST);else t0(J.DEPTH_TEST)},setMask:function(T0){if(V0!==T0&&!S)J.depthMask(T0),V0=T0},setFunc:function(T0){if(E0!==T0){switch(T0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}E0=T0}},setLocked:function(T0){S=T0},setClear:function(T0){if(h0!==T0)J.clearDepth(T0),h0=T0},reset:function(){S=!1,V0=null,E0=null,h0=null}}}function K(){let S=!1,V0=null,E0=null,h0=null,T0=null,X5=null,U5=null,R5=null,b5=null;return{setTest:function(J5){if(!S)if(J5)S0(J.STENCIL_TEST);else t0(J.STENCIL_TEST)},setMask:function(J5){if(V0!==J5&&!S)J.stencilMask(J5),V0=J5},setFunc:function(J5,H6,X6){if(E0!==J5||h0!==H6||T0!==X6)J.stencilFunc(J5,H6,X6),E0=J5,h0=H6,T0=X6},setOp:function(J5,H6,X6){if(X5!==J5||U5!==H6||R5!==X6)J.stencilOp(J5,H6,X6),X5=J5,U5=H6,R5=X6},setLocked:function(J5){S=J5},setClear:function(J5){if(b5!==J5)J.clearStencil(J5),b5=J5},reset:function(){S=!1,V0=null,E0=null,h0=null,T0=null,X5=null,U5=null,R5=null,b5=null}}}let X=new Y,U=new H,G=new K,q=new WeakMap,V=new WeakMap,E={},D={},O=new WeakMap,R=[],N=null,F=!1,B=null,M=null,C=null,w=null,L=null,f=null,p=null,A=new g0(0,0,0),k=0,v=!1,n=null,i=null,T=null,x=null,u=null,r=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),c=!1,d=0,t=J.getParameter(J.VERSION);if(t.indexOf("WebGL")!==-1)d=parseFloat(/^WebGL (\d)/.exec(t)[1]),c=d>=1;else if(t.indexOf("OpenGL ES")!==-1)d=parseFloat(/^OpenGL ES (\d)/.exec(t)[1]),c=d>=2;let W0=null,y={},o=J.getParameter(J.SCISSOR_BOX),X0=J.getParameter(J.VIEWPORT),D0=new G5().fromArray(o),P0=new G5().fromArray(X0);function k0(S,V0,E0,h0){let T0=new Uint8Array(4),X5=J.createTexture();J.bindTexture(S,X5),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let U5=0;U5<E0;U5++)if(W&&(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY))J.texImage3D(V0,0,J.RGBA,1,1,h0,0,J.RGBA,J.UNSIGNED_BYTE,T0);else J.texImage2D(V0+U5,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,T0);return X5}let p0={};if(p0[J.TEXTURE_2D]=k0(J.TEXTURE_2D,J.TEXTURE_2D,1),p0[J.TEXTURE_CUBE_MAP]=k0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),W)p0[J.TEXTURE_2D_ARRAY]=k0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),p0[J.TEXTURE_3D]=k0(J.TEXTURE_3D,J.TEXTURE_3D,1,1);X.setClear(0,0,0,1),U.setClear(1),G.setClear(0),S0(J.DEPTH_TEST),U.setFunc(3),$0(!1),$(1),S0(J.CULL_FACE),K0(0);function S0(S){if(E[S]!==!0)J.enable(S),E[S]=!0}function t0(S){if(E[S]!==!1)J.disable(S),E[S]=!1}function h(S,V0){if(D[S]!==V0){if(J.bindFramebuffer(S,V0),D[S]=V0,W){if(S===J.DRAW_FRAMEBUFFER)D[J.FRAMEBUFFER]=V0;if(S===J.FRAMEBUFFER)D[J.DRAW_FRAMEBUFFER]=V0}return!0}return!1}function A5(S,V0){let E0=R,h0=!1;if(S){if(E0=O.get(V0),E0===void 0)E0=[],O.set(V0,E0);if(S.isWebGLMultipleRenderTargets){let T0=S.texture;if(E0.length!==T0.length||E0[0]!==J.COLOR_ATTACHMENT0){for(let X5=0,U5=T0.length;X5<U5;X5++)E0[X5]=J.COLOR_ATTACHMENT0+X5;E0.length=T0.length,h0=!0}}else if(E0[0]!==J.COLOR_ATTACHMENT0)E0[0]=J.COLOR_ATTACHMENT0,h0=!0}else if(E0[0]!==J.BACK)E0[0]=J.BACK,h0=!0;if(h0)if(Q.isWebGL2)J.drawBuffers(E0);else Z.get("WEBGL_draw_buffers").drawBuffersWEBGL(E0)}function H0(S){if(N!==S)return J.useProgram(S),N=S,!0;return!1}let s={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};if(W)s[103]=J.MIN,s[104]=J.MAX;else{let S=Z.get("EXT_blend_minmax");if(S!==null)s[103]=S.MIN_EXT,s[104]=S.MAX_EXT}let Q0={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function K0(S,V0,E0,h0,T0,X5,U5,R5,b5,J5){if(S===0){if(F===!0)t0(J.BLEND),F=!1;return}if(F===!1)S0(J.BLEND),F=!0;if(S!==5){if(S!==B||J5!==v){if(M!==100||L!==100)J.blendEquation(J.FUNC_ADD),M=100,L=100;if(J5)switch(S){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}C=null,w=null,f=null,p=null,A.set(0,0,0),k=0,B=S,v=J5}return}if(T0=T0||V0,X5=X5||E0,U5=U5||h0,V0!==M||T0!==L)J.blendEquationSeparate(s[V0],s[T0]),M=V0,L=T0;if(E0!==C||h0!==w||X5!==f||U5!==p)J.blendFuncSeparate(Q0[E0],Q0[h0],Q0[X5],Q0[U5]),C=E0,w=h0,f=X5,p=U5;if(R5.equals(A)===!1||b5!==k)J.blendColor(R5.r,R5.g,R5.b,b5),A.copy(R5),k=b5;B=S,v=!1}function M0(S,V0){S.side===2?t0(J.CULL_FACE):S0(J.CULL_FACE);let E0=S.side===1;if(V0)E0=!E0;$0(E0),S.blending===1&&S.transparent===!1?K0(0):K0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),U.setFunc(S.depthFunc),U.setTest(S.depthTest),U.setMask(S.depthWrite),X.setMask(S.colorWrite);let h0=S.stencilWrite;if(G.setTest(h0),h0)G.setMask(S.stencilWriteMask),G.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),G.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);_(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?S0(J.SAMPLE_ALPHA_TO_COVERAGE):t0(J.SAMPLE_ALPHA_TO_COVERAGE)}function $0(S){if(n!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);n=S}}function $(S){if(S!==0){if(S0(J.CULL_FACE),S!==i)if(S===1)J.cullFace(J.BACK);else if(S===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else t0(J.CULL_FACE);i=S}function z(S){if(S!==T){if(c)J.lineWidth(S);T=S}}function _(S,V0,E0){if(S){if(S0(J.POLYGON_OFFSET_FILL),x!==V0||u!==E0)J.polygonOffset(V0,E0),x=V0,u=E0}else t0(J.POLYGON_OFFSET_FILL)}function e(S){if(S)S0(J.SCISSOR_TEST);else t0(J.SCISSOR_TEST)}function a(S){if(S===void 0)S=J.TEXTURE0+r-1;if(W0!==S)J.activeTexture(S),W0=S}function Z0(S,V0,E0){if(E0===void 0)if(W0===null)E0=J.TEXTURE0+r-1;else E0=W0;let h0=y[E0];if(h0===void 0)h0={type:void 0,texture:void 0},y[E0]=h0;if(h0.type!==S||h0.texture!==V0){if(W0!==E0)J.activeTexture(E0),W0=E0;J.bindTexture(S,V0||p0[S]),h0.type=S,h0.texture=V0}}function v0(){let S=y[W0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function q0(){try{J.compressedTexImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function z0(){try{J.compressedTexImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function w0(){try{J.texSubImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function l0(){try{J.texSubImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function J0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function N5(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function i0(){try{J.texStorage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function x0(){try{J.texStorage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function B0(){try{J.texImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function C0(){try{J.texImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function o0(S){if(D0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),D0.copy(S)}function Y5(S){if(P0.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),P0.copy(S)}function a0(S,V0){let E0=V.get(V0);if(E0===void 0)E0=new WeakMap,V.set(V0,E0);let h0=E0.get(S);if(h0===void 0)h0=J.getUniformBlockIndex(V0,S.name),E0.set(S,h0)}function H5(S,V0){let h0=V.get(V0).get(S);if(q.get(V0)!==h0)J.uniformBlockBinding(V0,h0,S.__bindingPointIndex),q.set(V0,h0)}function U0(){if(J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),W===!0)J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null);J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),E={},W0=null,y={},D={},O=new WeakMap,R=[],N=null,F=!1,B=null,M=null,C=null,w=null,L=null,f=null,p=null,A=new g0(0,0,0),k=0,v=!1,n=null,i=null,T=null,x=null,u=null,D0.set(0,0,J.canvas.width,J.canvas.height),P0.set(0,0,J.canvas.width,J.canvas.height),X.reset(),U.reset(),G.reset()}return{buffers:{color:X,depth:U,stencil:G},enable:S0,disable:t0,bindFramebuffer:h,drawBuffers:A5,useProgram:H0,setBlending:K0,setMaterial:M0,setFlipSided:$0,setCullFace:$,setLineWidth:z,setPolygonOffset:_,setScissorTest:e,activeTexture:a,bindTexture:Z0,unbindTexture:v0,compressedTexImage2D:q0,compressedTexImage3D:z0,texImage2D:B0,texImage3D:C0,updateUBOMapping:a0,uniformBlockBinding:H5,texStorage2D:i0,texStorage3D:x0,texSubImage2D:w0,texSubImage3D:l0,compressedTexSubImage2D:J0,compressedTexSubImage3D:N5,scissor:o0,viewport:Y5,reset:U0}}function VU(J,Z,Q,W,Y,H,K){let X=Y.isWebGL2,U=Z.has("WEBGL_multisampled_render_to_texture")?Z.get("WEBGL_multisampled_render_to_texture"):null,G=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),q=new WeakMap,V,E=new WeakMap,D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch($){}function O($,z){return D?new OffscreenCanvas($,z):P9("canvas")}function R($,z,_,e){let a=1;if($.width>e||$.height>e)a=e/Math.max($.width,$.height);if(a<1||z===!0)if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap){let Z0=z?u7:Math.floor,v0=Z0(a*$.width),q0=Z0(a*$.height);if(V===void 0)V=O(v0,q0);let z0=_?O(v0,q0):V;return z0.width=v0,z0.height=q0,z0.getContext("2d").drawImage($,0,0,v0,q0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+v0+"x"+q0+")."),z0}else{if("data"in $)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+").");return $}return $}function N($){return b4($.width)&&b4($.height)}function F($){if(X)return!1;return $.wrapS!==1001||$.wrapT!==1001||$.minFilter!==1003&&$.minFilter!==1006}function B($,z){return $.generateMipmaps&&z&&$.minFilter!==1003&&$.minFilter!==1006}function M($){J.generateMipmap($)}function C($,z,_,e,a=!1){if(X===!1)return z;if($!==null){if(J[$]!==void 0)return J[$];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+$+"'")}let Z0=z;if(z===J.RED){if(_===J.FLOAT)Z0=J.R32F;if(_===J.HALF_FLOAT)Z0=J.R16F;if(_===J.UNSIGNED_BYTE)Z0=J.R8}if(z===J.RED_INTEGER){if(_===J.UNSIGNED_BYTE)Z0=J.R8UI;if(_===J.UNSIGNED_SHORT)Z0=J.R16UI;if(_===J.UNSIGNED_INT)Z0=J.R32UI;if(_===J.BYTE)Z0=J.R8I;if(_===J.SHORT)Z0=J.R16I;if(_===J.INT)Z0=J.R32I}if(z===J.RG){if(_===J.FLOAT)Z0=J.RG32F;if(_===J.HALF_FLOAT)Z0=J.RG16F;if(_===J.UNSIGNED_BYTE)Z0=J.RG8}if(z===J.RGBA){let v0=a?"linear":W5.getTransfer(e);if(_===J.FLOAT)Z0=J.RGBA32F;if(_===J.HALF_FLOAT)Z0=J.RGBA16F;if(_===J.UNSIGNED_BYTE)Z0=v0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(_===J.UNSIGNED_SHORT_4_4_4_4)Z0=J.RGBA4;if(_===J.UNSIGNED_SHORT_5_5_5_1)Z0=J.RGB5_A1}if(Z0===J.R16F||Z0===J.R32F||Z0===J.RG16F||Z0===J.RG32F||Z0===J.RGBA16F||Z0===J.RGBA32F)Z.get("EXT_color_buffer_float");return Z0}function w($,z,_){if(B($,_)===!0||$.isFramebufferTexture&&$.minFilter!==1003&&$.minFilter!==1006)return Math.log2(Math.max(z.width,z.height))+1;else if($.mipmaps!==void 0&&$.mipmaps.length>0)return $.mipmaps.length;else if($.isCompressedTexture&&Array.isArray($.image))return z.mipmaps.length;else return 1}function L($){if($===1003||$===1004||$===1005)return J.NEAREST;return J.LINEAR}function f($){let z=$.target;if(z.removeEventListener("dispose",f),A(z),z.isVideoTexture)q.delete(z)}function p($){let z=$.target;z.removeEventListener("dispose",p),v(z)}function A($){let z=W.get($);if(z.__webglInit===void 0)return;let _=$.source,e=E.get(_);if(e){let a=e[z.__cacheKey];if(a.usedTimes--,a.usedTimes===0)k($);if(Object.keys(e).length===0)E.delete(_)}W.remove($)}function k($){let z=W.get($);J.deleteTexture(z.__webglTexture);let _=$.source,e=E.get(_);delete e[z.__cacheKey],K.memory.textures--}function v($){let z=$.texture,_=W.get($),e=W.get(z);if(e.__webglTexture!==void 0)J.deleteTexture(e.__webglTexture),K.memory.textures--;if($.depthTexture)$.depthTexture.dispose();if($.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(_.__webglFramebuffer[a]))for(let Z0=0;Z0<_.__webglFramebuffer[a].length;Z0++)J.deleteFramebuffer(_.__webglFramebuffer[a][Z0]);else J.deleteFramebuffer(_.__webglFramebuffer[a]);if(_.__webglDepthbuffer)J.deleteRenderbuffer(_.__webglDepthbuffer[a])}else{if(Array.isArray(_.__webglFramebuffer))for(let a=0;a<_.__webglFramebuffer.length;a++)J.deleteFramebuffer(_.__webglFramebuffer[a]);else J.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)J.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)J.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let a=0;a<_.__webglColorRenderbuffer.length;a++)if(_.__webglColorRenderbuffer[a])J.deleteRenderbuffer(_.__webglColorRenderbuffer[a])}if(_.__webglDepthRenderbuffer)J.deleteRenderbuffer(_.__webglDepthRenderbuffer)}if($.isWebGLMultipleRenderTargets)for(let a=0,Z0=z.length;a<Z0;a++){let v0=W.get(z[a]);if(v0.__webglTexture)J.deleteTexture(v0.__webglTexture),K.memory.textures--;W.remove(z[a])}W.remove(z),W.remove($)}let n=0;function i(){n=0}function T(){let $=n;if($>=Y.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+$+" texture units while this GPU supports only "+Y.maxTextures);return n+=1,$}function x($){let z=[];return z.push($.wrapS),z.push($.wrapT),z.push($.wrapR||0),z.push($.magFilter),z.push($.minFilter),z.push($.anisotropy),z.push($.internalFormat),z.push($.format),z.push($.type),z.push($.generateMipmaps),z.push($.premultiplyAlpha),z.push($.flipY),z.push($.unpackAlignment),z.push($.colorSpace),z.join()}function u($,z){let _=W.get($);if($.isVideoTexture)M0($);if($.isRenderTargetTexture===!1&&$.version>0&&_.__version!==$.version){let e=$.image;if(e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D0(_,$,z);return}}Q.bindTexture(J.TEXTURE_2D,_.__webglTexture,J.TEXTURE0+z)}function r($,z){let _=W.get($);if($.version>0&&_.__version!==$.version){D0(_,$,z);return}Q.bindTexture(J.TEXTURE_2D_ARRAY,_.__webglTexture,J.TEXTURE0+z)}function c($,z){let _=W.get($);if($.version>0&&_.__version!==$.version){D0(_,$,z);return}Q.bindTexture(J.TEXTURE_3D,_.__webglTexture,J.TEXTURE0+z)}function d($,z){let _=W.get($);if($.version>0&&_.__version!==$.version){P0(_,$,z);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+z)}let t={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},W0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},y={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function o($,z,_){if(_){if(J.texParameteri($,J.TEXTURE_WRAP_S,t[z.wrapS]),J.texParameteri($,J.TEXTURE_WRAP_T,t[z.wrapT]),$===J.TEXTURE_3D||$===J.TEXTURE_2D_ARRAY)J.texParameteri($,J.TEXTURE_WRAP_R,t[z.wrapR]);J.texParameteri($,J.TEXTURE_MAG_FILTER,W0[z.magFilter]),J.texParameteri($,J.TEXTURE_MIN_FILTER,W0[z.minFilter])}else{if(J.texParameteri($,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri($,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE),$===J.TEXTURE_3D||$===J.TEXTURE_2D_ARRAY)J.texParameteri($,J.TEXTURE_WRAP_R,J.CLAMP_TO_EDGE);if(z.wrapS!==1001||z.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(J.texParameteri($,J.TEXTURE_MAG_FILTER,L(z.magFilter)),J.texParameteri($,J.TEXTURE_MIN_FILTER,L(z.minFilter)),z.minFilter!==1003&&z.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(z.compareFunction)J.texParameteri($,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri($,J.TEXTURE_COMPARE_FUNC,y[z.compareFunction]);if(Z.has("EXT_texture_filter_anisotropic")===!0){let e=Z.get("EXT_texture_filter_anisotropic");if(z.magFilter===1003)return;if(z.minFilter!==1005&&z.minFilter!==1008)return;if(z.type===1015&&Z.has("OES_texture_float_linear")===!1)return;if(X===!1&&(z.type===1016&&Z.has("OES_texture_half_float_linear")===!1))return;if(z.anisotropy>1||W.get(z).__currentAnisotropy)J.texParameterf($,e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,Y.getMaxAnisotropy())),W.get(z).__currentAnisotropy=z.anisotropy}}function X0($,z){let _=!1;if($.__webglInit===void 0)$.__webglInit=!0,z.addEventListener("dispose",f);let e=z.source,a=E.get(e);if(a===void 0)a={},E.set(e,a);let Z0=x(z);if(Z0!==$.__cacheKey){if(a[Z0]===void 0)a[Z0]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,_=!0;a[Z0].usedTimes++;let v0=a[$.__cacheKey];if(v0!==void 0){if(a[$.__cacheKey].usedTimes--,v0.usedTimes===0)k(z)}$.__cacheKey=Z0,$.__webglTexture=a[Z0].texture}return _}function D0($,z,_){let e=J.TEXTURE_2D;if(z.isDataArrayTexture||z.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(z.isData3DTexture)e=J.TEXTURE_3D;let a=X0($,z),Z0=z.source;Q.bindTexture(e,$.__webglTexture,J.TEXTURE0+_);let v0=W.get(Z0);if(Z0.version!==v0.__version||a===!0){Q.activeTexture(J.TEXTURE0+_);let q0=W5.getPrimaries(W5.workingColorSpace),z0=z.colorSpace===""?null:W5.getPrimaries(z.colorSpace),w0=z.colorSpace===""||q0===z0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,w0);let l0=F(z)&&N(z.image)===!1,J0=R(z.image,l0,!1,Y.maxTextureSize);J0=$0(z,J0);let N5=N(J0)||X,i0=H.convert(z.format,z.colorSpace),x0=H.convert(z.type),B0=C(z.internalFormat,i0,x0,z.colorSpace,z.isVideoTexture);o(e,z,N5);let C0,o0=z.mipmaps,Y5=X&&z.isVideoTexture!==!0&&B0!==36196,a0=v0.__version===void 0||a===!0,H5=w(z,J0,N5);if(z.isDepthTexture){if(B0=J.DEPTH_COMPONENT,X)if(z.type===1015)B0=J.DEPTH_COMPONENT32F;else if(z.type===1014)B0=J.DEPTH_COMPONENT24;else if(z.type===1020)B0=J.DEPTH24_STENCIL8;else B0=J.DEPTH_COMPONENT16;else if(z.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(z.format===1026&&B0===J.DEPTH_COMPONENT){if(z.type!==1012&&z.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),z.type=1014,x0=H.convert(z.type)}if(z.format===1027&&B0===J.DEPTH_COMPONENT){if(B0=J.DEPTH_STENCIL,z.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),z.type=1020,x0=H.convert(z.type)}if(a0)if(Y5)Q.texStorage2D(J.TEXTURE_2D,1,B0,J0.width,J0.height);else Q.texImage2D(J.TEXTURE_2D,0,B0,J0.width,J0.height,0,i0,x0,null)}else if(z.isDataTexture)if(o0.length>0&&N5){if(Y5&&a0)Q.texStorage2D(J.TEXTURE_2D,H5,B0,o0[0].width,o0[0].height);for(let U0=0,S=o0.length;U0<S;U0++)if(C0=o0[U0],Y5)Q.texSubImage2D(J.TEXTURE_2D,U0,0,0,C0.width,C0.height,i0,x0,C0.data);else Q.texImage2D(J.TEXTURE_2D,U0,B0,C0.width,C0.height,0,i0,x0,C0.data);z.generateMipmaps=!1}else if(Y5){if(a0)Q.texStorage2D(J.TEXTURE_2D,H5,B0,J0.width,J0.height);Q.texSubImage2D(J.TEXTURE_2D,0,0,0,J0.width,J0.height,i0,x0,J0.data)}else Q.texImage2D(J.TEXTURE_2D,0,B0,J0.width,J0.height,0,i0,x0,J0.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){if(Y5&&a0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,H5,B0,o0[0].width,o0[0].height,J0.depth);for(let U0=0,S=o0.length;U0<S;U0++)if(C0=o0[U0],z.format!==1023)if(i0!==null)if(Y5)Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,0,C0.width,C0.height,J0.depth,i0,C0.data,0,0);else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,U0,B0,C0.width,C0.height,J0.depth,0,C0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Y5)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,0,C0.width,C0.height,J0.depth,i0,x0,C0.data);else Q.texImage3D(J.TEXTURE_2D_ARRAY,U0,B0,C0.width,C0.height,J0.depth,0,i0,x0,C0.data)}else{if(Y5&&a0)Q.texStorage2D(J.TEXTURE_2D,H5,B0,o0[0].width,o0[0].height);for(let U0=0,S=o0.length;U0<S;U0++)if(C0=o0[U0],z.format!==1023)if(i0!==null)if(Y5)Q.compressedTexSubImage2D(J.TEXTURE_2D,U0,0,0,C0.width,C0.height,i0,C0.data);else Q.compressedTexImage2D(J.TEXTURE_2D,U0,B0,C0.width,C0.height,0,C0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Y5)Q.texSubImage2D(J.TEXTURE_2D,U0,0,0,C0.width,C0.height,i0,x0,C0.data);else Q.texImage2D(J.TEXTURE_2D,U0,B0,C0.width,C0.height,0,i0,x0,C0.data)}else if(z.isDataArrayTexture)if(Y5){if(a0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,H5,B0,J0.width,J0.height,J0.depth);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,i0,x0,J0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,B0,J0.width,J0.height,J0.depth,0,i0,x0,J0.data);else if(z.isData3DTexture)if(Y5){if(a0)Q.texStorage3D(J.TEXTURE_3D,H5,B0,J0.width,J0.height,J0.depth);Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,i0,x0,J0.data)}else Q.texImage3D(J.TEXTURE_3D,0,B0,J0.width,J0.height,J0.depth,0,i0,x0,J0.data);else if(z.isFramebufferTexture){if(a0)if(Y5)Q.texStorage2D(J.TEXTURE_2D,H5,B0,J0.width,J0.height);else{let{width:U0,height:S}=J0;for(let V0=0;V0<H5;V0++)Q.texImage2D(J.TEXTURE_2D,V0,B0,U0,S,0,i0,x0,null),U0>>=1,S>>=1}}else if(o0.length>0&&N5){if(Y5&&a0)Q.texStorage2D(J.TEXTURE_2D,H5,B0,o0[0].width,o0[0].height);for(let U0=0,S=o0.length;U0<S;U0++)if(C0=o0[U0],Y5)Q.texSubImage2D(J.TEXTURE_2D,U0,0,0,i0,x0,C0);else Q.texImage2D(J.TEXTURE_2D,U0,B0,i0,x0,C0);z.generateMipmaps=!1}else if(Y5){if(a0)Q.texStorage2D(J.TEXTURE_2D,H5,B0,J0.width,J0.height);Q.texSubImage2D(J.TEXTURE_2D,0,0,0,i0,x0,J0)}else Q.texImage2D(J.TEXTURE_2D,0,B0,i0,x0,J0);if(B(z,N5))M(e);if(v0.__version=Z0.version,z.onUpdate)z.onUpdate(z)}$.__version=z.version}function P0($,z,_){if(z.image.length!==6)return;let e=X0($,z),a=z.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,$.__webglTexture,J.TEXTURE0+_);let Z0=W.get(a);if(a.version!==Z0.__version||e===!0){Q.activeTexture(J.TEXTURE0+_);let v0=W5.getPrimaries(W5.workingColorSpace),q0=z.colorSpace===""?null:W5.getPrimaries(z.colorSpace),z0=z.colorSpace===""||v0===q0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,z0);let w0=z.isCompressedTexture||z.image[0].isCompressedTexture,l0=z.image[0]&&z.image[0].isDataTexture,J0=[];for(let U0=0;U0<6;U0++){if(!w0&&!l0)J0[U0]=R(z.image[U0],!1,!0,Y.maxCubemapSize);else J0[U0]=l0?z.image[U0].image:z.image[U0];J0[U0]=$0(z,J0[U0])}let N5=J0[0],i0=N(N5)||X,x0=H.convert(z.format,z.colorSpace),B0=H.convert(z.type),C0=C(z.internalFormat,x0,B0,z.colorSpace),o0=X&&z.isVideoTexture!==!0,Y5=Z0.__version===void 0||e===!0,a0=w(z,N5,i0);o(J.TEXTURE_CUBE_MAP,z,i0);let H5;if(w0){if(o0&&Y5)Q.texStorage2D(J.TEXTURE_CUBE_MAP,a0,C0,N5.width,N5.height);for(let U0=0;U0<6;U0++){H5=J0[U0].mipmaps;for(let S=0;S<H5.length;S++){let V0=H5[S];if(z.format!==1023)if(x0!==null)if(o0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S,0,0,V0.width,V0.height,x0,V0.data);else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S,C0,V0.width,V0.height,0,V0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(o0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S,0,0,V0.width,V0.height,x0,B0,V0.data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S,C0,V0.width,V0.height,0,x0,B0,V0.data)}}}else{if(H5=z.mipmaps,o0&&Y5){if(H5.length>0)a0++;Q.texStorage2D(J.TEXTURE_CUBE_MAP,a0,C0,J0[0].width,J0[0].height)}for(let U0=0;U0<6;U0++)if(l0){if(o0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,0,0,J0[U0].width,J0[U0].height,x0,B0,J0[U0].data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,C0,J0[U0].width,J0[U0].height,0,x0,B0,J0[U0].data);for(let S=0;S<H5.length;S++){let E0=H5[S].image[U0].image;if(o0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S+1,0,0,E0.width,E0.height,x0,B0,E0.data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S+1,C0,E0.width,E0.height,0,x0,B0,E0.data)}}else{if(o0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,0,0,x0,B0,J0[U0]);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,C0,x0,B0,J0[U0]);for(let S=0;S<H5.length;S++){let V0=H5[S];if(o0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S+1,0,0,x0,B0,V0.image[U0]);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,S+1,C0,x0,B0,V0.image[U0])}}}if(B(z,i0))M(J.TEXTURE_CUBE_MAP);if(Z0.__version=a.version,z.onUpdate)z.onUpdate(z)}$.__version=z.version}function k0($,z,_,e,a,Z0){let v0=H.convert(_.format,_.colorSpace),q0=H.convert(_.type),z0=C(_.internalFormat,v0,q0,_.colorSpace);if(!W.get(z).__hasExternalTextures){let l0=Math.max(1,z.width>>Z0),J0=Math.max(1,z.height>>Z0);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)Q.texImage3D(a,Z0,z0,l0,J0,z.depth,0,v0,q0,null);else Q.texImage2D(a,Z0,z0,l0,J0,0,v0,q0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,$),K0(z))U.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,a,W.get(_).__webglTexture,0,Q0(z));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,a,W.get(_).__webglTexture,Z0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function p0($,z,_){if(J.bindRenderbuffer(J.RENDERBUFFER,$),z.depthBuffer&&!z.stencilBuffer){let e=X===!0?J.DEPTH_COMPONENT24:J.DEPTH_COMPONENT16;if(_||K0(z)){let a=z.depthTexture;if(a&&a.isDepthTexture){if(a.type===1015)e=J.DEPTH_COMPONENT32F;else if(a.type===1014)e=J.DEPTH_COMPONENT24}let Z0=Q0(z);if(K0(z))U.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Z0,e,z.width,z.height);else J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,e,z.width,z.height)}else J.renderbufferStorage(J.RENDERBUFFER,e,z.width,z.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.RENDERBUFFER,$)}else if(z.depthBuffer&&z.stencilBuffer){let e=Q0(z);if(_&&K0(z)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,e,J.DEPTH24_STENCIL8,z.width,z.height);else if(K0(z))U.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,e,J.DEPTH24_STENCIL8,z.width,z.height);else J.renderbufferStorage(J.RENDERBUFFER,J.DEPTH_STENCIL,z.width,z.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.RENDERBUFFER,$)}else{let e=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let a=0;a<e.length;a++){let Z0=e[a],v0=H.convert(Z0.format,Z0.colorSpace),q0=H.convert(Z0.type),z0=C(Z0.internalFormat,v0,q0,Z0.colorSpace),w0=Q0(z);if(_&&K0(z)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,w0,z0,z.width,z.height);else if(K0(z))U.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,w0,z0,z.width,z.height);else J.renderbufferStorage(J.RENDERBUFFER,z0,z.width,z.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function S0($,z){if(z&&z.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer(J.FRAMEBUFFER,$),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!W.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0;u(z.depthTexture,0);let e=W.get(z.depthTexture).__webglTexture,a=Q0(z);if(z.depthTexture.format===1026)if(K0(z))U.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,e,0,a);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,e,0);else if(z.depthTexture.format===1027)if(K0(z))U.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,e,0,a);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format")}function t0($){let z=W.get($),_=$.isWebGLCubeRenderTarget===!0;if($.depthTexture&&!z.__autoAllocateDepthBuffer){if(_)throw Error("target.depthTexture not supported in Cube render targets");S0(z.__webglFramebuffer,$)}else if(_){z.__webglDepthbuffer=[];for(let e=0;e<6;e++)Q.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer[e]),z.__webglDepthbuffer[e]=J.createRenderbuffer(),p0(z.__webglDepthbuffer[e],$,!1)}else Q.bindFramebuffer(J.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=J.createRenderbuffer(),p0(z.__webglDepthbuffer,$,!1);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function h($,z,_){let e=W.get($);if(z!==void 0)k0(e.__webglFramebuffer,$,$.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(_!==void 0)t0($)}function A5($){let z=$.texture,_=W.get($),e=W.get(z);if($.addEventListener("dispose",p),$.isWebGLMultipleRenderTargets!==!0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=z.version,K.memory.textures++}let a=$.isWebGLCubeRenderTarget===!0,Z0=$.isWebGLMultipleRenderTargets===!0,v0=N($)||X;if(a){_.__webglFramebuffer=[];for(let q0=0;q0<6;q0++)if(X&&z.mipmaps&&z.mipmaps.length>0){_.__webglFramebuffer[q0]=[];for(let z0=0;z0<z.mipmaps.length;z0++)_.__webglFramebuffer[q0][z0]=J.createFramebuffer()}else _.__webglFramebuffer[q0]=J.createFramebuffer()}else{if(X&&z.mipmaps&&z.mipmaps.length>0){_.__webglFramebuffer=[];for(let q0=0;q0<z.mipmaps.length;q0++)_.__webglFramebuffer[q0]=J.createFramebuffer()}else _.__webglFramebuffer=J.createFramebuffer();if(Z0)if(Y.drawBuffers){let q0=$.texture;for(let z0=0,w0=q0.length;z0<w0;z0++){let l0=W.get(q0[z0]);if(l0.__webglTexture===void 0)l0.__webglTexture=J.createTexture(),K.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(X&&$.samples>0&&K0($)===!1){let q0=Z0?z:[z];_.__webglMultisampledFramebuffer=J.createFramebuffer(),_.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,_.__webglMultisampledFramebuffer);for(let z0=0;z0<q0.length;z0++){let w0=q0[z0];_.__webglColorRenderbuffer[z0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,_.__webglColorRenderbuffer[z0]);let l0=H.convert(w0.format,w0.colorSpace),J0=H.convert(w0.type),N5=C(w0.internalFormat,l0,J0,w0.colorSpace,$.isXRRenderTarget===!0),i0=Q0($);J.renderbufferStorageMultisample(J.RENDERBUFFER,i0,N5,$.width,$.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+z0,J.RENDERBUFFER,_.__webglColorRenderbuffer[z0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),$.depthBuffer)_.__webglDepthRenderbuffer=J.createRenderbuffer(),p0(_.__webglDepthRenderbuffer,$,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(a){Q.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),o(J.TEXTURE_CUBE_MAP,z,v0);for(let q0=0;q0<6;q0++)if(X&&z.mipmaps&&z.mipmaps.length>0)for(let z0=0;z0<z.mipmaps.length;z0++)k0(_.__webglFramebuffer[q0][z0],$,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,z0);else k0(_.__webglFramebuffer[q0],$,z,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0);if(B(z,v0))M(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(Z0){let q0=$.texture;for(let z0=0,w0=q0.length;z0<w0;z0++){let l0=q0[z0],J0=W.get(l0);if(Q.bindTexture(J.TEXTURE_2D,J0.__webglTexture),o(J.TEXTURE_2D,l0,v0),k0(_.__webglFramebuffer,$,l0,J.COLOR_ATTACHMENT0+z0,J.TEXTURE_2D,0),B(l0,v0))M(J.TEXTURE_2D)}Q.unbindTexture()}else{let q0=J.TEXTURE_2D;if($.isWebGL3DRenderTarget||$.isWebGLArrayRenderTarget)if(X)q0=$.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(Q.bindTexture(q0,e.__webglTexture),o(q0,z,v0),X&&z.mipmaps&&z.mipmaps.length>0)for(let z0=0;z0<z.mipmaps.length;z0++)k0(_.__webglFramebuffer[z0],$,z,J.COLOR_ATTACHMENT0,q0,z0);else k0(_.__webglFramebuffer,$,z,J.COLOR_ATTACHMENT0,q0,0);if(B(z,v0))M(q0);Q.unbindTexture()}if($.depthBuffer)t0($)}function H0($){let z=N($)||X,_=$.isWebGLMultipleRenderTargets===!0?$.texture:[$.texture];for(let e=0,a=_.length;e<a;e++){let Z0=_[e];if(B(Z0,z)){let v0=$.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,q0=W.get(Z0).__webglTexture;Q.bindTexture(v0,q0),M(v0),Q.unbindTexture()}}}function s($){if(X&&$.samples>0&&K0($)===!1){let z=$.isWebGLMultipleRenderTargets?$.texture:[$.texture],_=$.width,e=$.height,a=J.COLOR_BUFFER_BIT,Z0=[],v0=$.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,q0=W.get($),z0=$.isWebGLMultipleRenderTargets===!0;if(z0)for(let w0=0;w0<z.length;w0++)Q.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+w0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+w0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,q0.__webglMultisampledFramebuffer),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer);for(let w0=0;w0<z.length;w0++){if(Z0.push(J.COLOR_ATTACHMENT0+w0),$.depthBuffer)Z0.push(v0);let l0=q0.__ignoreDepthValues!==void 0?q0.__ignoreDepthValues:!1;if(l0===!1){if($.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if($.stencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(z0)J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[w0]);if(l0===!0)J.invalidateFramebuffer(J.READ_FRAMEBUFFER,[v0]),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[v0]);if(z0){let J0=W.get(z[w0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,J0,0)}if(J.blitFramebuffer(0,0,_,e,0,0,_,e,a,J.NEAREST),G)J.invalidateFramebuffer(J.READ_FRAMEBUFFER,Z0)}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),z0)for(let w0=0;w0<z.length;w0++){Q.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+w0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[w0]);let l0=W.get(z[w0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+w0,J.TEXTURE_2D,l0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglMultisampledFramebuffer)}}function Q0($){return Math.min(Y.maxSamples,$.samples)}function K0($){let z=W.get($);return X&&$.samples>0&&Z.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function M0($){let z=K.render.frame;if(q.get($)!==z)q.set($,z),$.update()}function $0($,z){let{colorSpace:_,format:e,type:a}=$;if($.isCompressedTexture===!0||$.isVideoTexture===!0||$.format===1035)return z;if(_!=="srgb-linear"&&_!=="")if(W5.getTransfer(_)==="srgb"){if(X===!1)if(Z.has("EXT_sRGB")===!0&&e===1023)$.format=1035,$.minFilter=1006,$.generateMipmaps=!1;else z=r7.sRGBToLinear(z);else if(e!==1023||a!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",_);return z}this.allocateTextureUnit=T,this.resetTextureUnits=i,this.setTexture2D=u,this.setTexture2DArray=r,this.setTexture3D=c,this.setTextureCube=d,this.rebindTextures=h,this.setupRenderTarget=A5,this.updateRenderTargetMipmap=H0,this.updateMultisampleRenderTarget=s,this.setupDepthRenderbuffer=t0,this.setupFrameBufferTexture=k0,this.useMultisampledRTT=K0}function qU(J,Z,Q){let W=Q.isWebGL2;function Y(H,K=""){let X,U=W5.getTransfer(K);if(H===1009)return J.UNSIGNED_BYTE;if(H===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(H===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(H===1010)return J.BYTE;if(H===1011)return J.SHORT;if(H===1012)return J.UNSIGNED_SHORT;if(H===1013)return J.INT;if(H===1014)return J.UNSIGNED_INT;if(H===1015)return J.FLOAT;if(H===1016){if(W)return J.HALF_FLOAT;if(X=Z.get("OES_texture_half_float"),X!==null)return X.HALF_FLOAT_OES;else return null}if(H===1021)return J.ALPHA;if(H===1023)return J.RGBA;if(H===1024)return J.LUMINANCE;if(H===1025)return J.LUMINANCE_ALPHA;if(H===1026)return J.DEPTH_COMPONENT;if(H===1027)return J.DEPTH_STENCIL;if(H===1035)if(X=Z.get("EXT_sRGB"),X!==null)return X.SRGB_ALPHA_EXT;else return null;if(H===1028)return J.RED;if(H===1029)return J.RED_INTEGER;if(H===1030)return J.RG;if(H===1031)return J.RG_INTEGER;if(H===1033)return J.RGBA_INTEGER;if(H===33776||H===33777||H===33778||H===33779)if(U==="srgb")if(X=Z.get("WEBGL_compressed_texture_s3tc_srgb"),X!==null){if(H===33776)return X.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(H===33777)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(H===33778)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(H===33779)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(X=Z.get("WEBGL_compressed_texture_s3tc"),X!==null){if(H===33776)return X.COMPRESSED_RGB_S3TC_DXT1_EXT;if(H===33777)return X.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(H===33778)return X.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(H===33779)return X.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(H===35840||H===35841||H===35842||H===35843)if(X=Z.get("WEBGL_compressed_texture_pvrtc"),X!==null){if(H===35840)return X.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(H===35841)return X.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(H===35842)return X.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(H===35843)return X.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(H===36196)if(X=Z.get("WEBGL_compressed_texture_etc1"),X!==null)return X.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(H===37492||H===37496)if(X=Z.get("WEBGL_compressed_texture_etc"),X!==null){if(H===37492)return U==="srgb"?X.COMPRESSED_SRGB8_ETC2:X.COMPRESSED_RGB8_ETC2;if(H===37496)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:X.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(H===37808||H===37809||H===37810||H===37811||H===37812||H===37813||H===37814||H===37815||H===37816||H===37817||H===37818||H===37819||H===37820||H===37821)if(X=Z.get("WEBGL_compressed_texture_astc"),X!==null){if(H===37808)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:X.COMPRESSED_RGBA_ASTC_4x4_KHR;if(H===37809)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:X.COMPRESSED_RGBA_ASTC_5x4_KHR;if(H===37810)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:X.COMPRESSED_RGBA_ASTC_5x5_KHR;if(H===37811)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:X.COMPRESSED_RGBA_ASTC_6x5_KHR;if(H===37812)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:X.COMPRESSED_RGBA_ASTC_6x6_KHR;if(H===37813)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:X.COMPRESSED_RGBA_ASTC_8x5_KHR;if(H===37814)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:X.COMPRESSED_RGBA_ASTC_8x6_KHR;if(H===37815)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:X.COMPRESSED_RGBA_ASTC_8x8_KHR;if(H===37816)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:X.COMPRESSED_RGBA_ASTC_10x5_KHR;if(H===37817)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:X.COMPRESSED_RGBA_ASTC_10x6_KHR;if(H===37818)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:X.COMPRESSED_RGBA_ASTC_10x8_KHR;if(H===37819)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:X.COMPRESSED_RGBA_ASTC_10x10_KHR;if(H===37820)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:X.COMPRESSED_RGBA_ASTC_12x10_KHR;if(H===37821)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:X.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(H===36492||H===36494||H===36495)if(X=Z.get("EXT_texture_compression_bptc"),X!==null){if(H===36492)return U==="srgb"?X.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:X.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(H===36494)return X.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(H===36495)return X.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(H===36283||H===36284||H===36285||H===36286)if(X=Z.get("EXT_texture_compression_rgtc"),X!==null){if(H===36492)return X.COMPRESSED_RED_RGTC1_EXT;if(H===36284)return X.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(H===36285)return X.COMPRESSED_RED_GREEN_RGTC2_EXT;if(H===36286)return X.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(H===1020){if(W)return J.UNSIGNED_INT_24_8;if(X=Z.get("WEBGL_depth_texture"),X!==null)return X.UNSIGNED_INT_24_8_WEBGL;else return null}return J[H]!==void 0?J[H]:null}return{convert:Y}}class sZ extends y5{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class K5 extends P5{constructor(){super();this.isGroup=!0,this.type="Group"}}var EU={type:"move"};class L9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new K5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new K5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new K5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Z=this._hand;if(Z)for(let Q of J.hand.values())this._getHandJoint(Z,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Z,Q){let W=null,Y=null,H=null,K=this._targetRay,X=this._grip,U=this._hand;if(J&&Z.session.visibilityState!=="visible-blurred"){if(U&&J.hand){H=!0;for(let O of J.hand.values()){let R=Z.getJointPose(O,Q),N=this._getHandJoint(U,O);if(R!==null)N.matrix.fromArray(R.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=R.radius;N.visible=R!==null}let G=U.joints["index-finger-tip"],q=U.joints["thumb-tip"],V=G.position.distanceTo(q.position),E=0.02,D=0.005;if(U.inputState.pinching&&V>E+D)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&V<=E-D)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(Y=Z.getPose(J.gripSpace,Q),Y!==null){if(X.matrix.fromArray(Y.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Y.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Y.linearVelocity);else X.hasLinearVelocity=!1;if(Y.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Y.angularVelocity);else X.hasAngularVelocity=!1}}if(K!==null){if(W=Z.getPose(J.targetRaySpace,Q),W===null&&Y!==null)W=Y;if(W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(EU)}}}if(K!==null)K.visible=W!==null;if(X!==null)X.visible=Y!==null;if(U!==null)U.visible=H!==null;return this}_getHandJoint(J,Z){if(J.joints[Z.jointName]===void 0){let Q=new K5;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[Z.jointName]=Q,J.add(Q)}return J.joints[Z.jointName]}}class iZ extends _6{constructor(J,Z){super();let Q=this,W=null,Y=1,H=null,K="local-floor",X=1,U=null,G=null,q=null,V=null,E=null,D=null,O=Z.getContextAttributes(),R=null,N=null,F=[],B=[],M=new F0,C=null,w=new y5;w.layers.enable(1),w.viewport=new G5;let L=new y5;L.layers.enable(2),L.viewport=new G5;let f=[w,L],p=new sZ;p.layers.enable(1),p.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let o=F[y];if(o===void 0)o=new L9,F[y]=o;return o.getTargetRaySpace()},this.getControllerGrip=function(y){let o=F[y];if(o===void 0)o=new L9,F[y]=o;return o.getGripSpace()},this.getHand=function(y){let o=F[y];if(o===void 0)o=new L9,F[y]=o;return o.getHandSpace()};function v(y){let o=B.indexOf(y.inputSource);if(o===-1)return;let X0=F[o];if(X0!==void 0)X0.update(y.inputSource,y.frame,U||H),X0.dispatchEvent({type:y.type,data:y.inputSource})}function n(){W.removeEventListener("select",v),W.removeEventListener("selectstart",v),W.removeEventListener("selectend",v),W.removeEventListener("squeeze",v),W.removeEventListener("squeezestart",v),W.removeEventListener("squeezeend",v),W.removeEventListener("end",n),W.removeEventListener("inputsourceschange",i);for(let y=0;y<F.length;y++){let o=B[y];if(o===null)continue;B[y]=null,F[y].disconnect(o)}A=null,k=null,J.setRenderTarget(R),E=null,V=null,q=null,W=null,N=null,W0.stop(),Q.isPresenting=!1,J.setPixelRatio(C),J.setSize(M.width,M.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){if(Y=y,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){if(K=y,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||H},this.setReferenceSpace=function(y){U=y},this.getBaseLayer=function(){return V!==null?V:E},this.getBinding=function(){return q},this.getFrame=function(){return D},this.getSession=function(){return W},this.setSession=async function(y){if(W=y,W!==null){if(R=J.getRenderTarget(),W.addEventListener("select",v),W.addEventListener("selectstart",v),W.addEventListener("selectend",v),W.addEventListener("squeeze",v),W.addEventListener("squeezestart",v),W.addEventListener("squeezeend",v),W.addEventListener("end",n),W.addEventListener("inputsourceschange",i),O.xrCompatible!==!0)await Z.makeXRCompatible();if(C=J.getPixelRatio(),J.getSize(M),W.renderState.layers===void 0||J.capabilities.isWebGL2===!1){let o={antialias:W.renderState.layers===void 0?O.antialias:!0,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Y};E=new XRWebGLLayer(W,Z,o),W.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new k6(E.framebufferWidth,E.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil})}else{let o=null,X0=null,D0=null;if(O.depth)D0=O.stencil?Z.DEPTH24_STENCIL8:Z.DEPTH_COMPONENT24,o=O.stencil?1027:1026,X0=O.stencil?1020:1014;let P0={colorFormat:Z.RGBA8,depthFormat:D0,scaleFactor:Y};q=new XRWebGLBinding(W,Z),V=q.createProjectionLayer(P0),W.updateRenderState({layers:[V]}),J.setPixelRatio(1),J.setSize(V.textureWidth,V.textureHeight,!1),N=new k6(V.textureWidth,V.textureHeight,{format:1023,type:1009,depthTexture:new XJ(V.textureWidth,V.textureHeight,X0,void 0,void 0,void 0,void 0,void 0,void 0,o),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0});let k0=J.properties.get(N);k0.__ignoreDepthValues=V.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(X),U=null,H=await W.requestReferenceSpace(K),W0.setContext(W),W0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode};function i(y){for(let o=0;o<y.removed.length;o++){let X0=y.removed[o],D0=B.indexOf(X0);if(D0>=0)B[D0]=null,F[D0].disconnect(X0)}for(let o=0;o<y.added.length;o++){let X0=y.added[o],D0=B.indexOf(X0);if(D0===-1){for(let k0=0;k0<F.length;k0++)if(k0>=B.length){B.push(X0),D0=k0;break}else if(B[k0]===null){B[k0]=X0,D0=k0;break}if(D0===-1)break}let P0=F[D0];if(P0)P0.connect(X0)}}let T=new P,x=new P;function u(y,o,X0){T.setFromMatrixPosition(o.matrixWorld),x.setFromMatrixPosition(X0.matrixWorld);let D0=T.distanceTo(x),P0=o.projectionMatrix.elements,k0=X0.projectionMatrix.elements,p0=P0[14]/(P0[10]-1),S0=P0[14]/(P0[10]+1),t0=(P0[9]+1)/P0[5],h=(P0[9]-1)/P0[5],A5=(P0[8]-1)/P0[0],H0=(k0[8]+1)/k0[0],s=p0*A5,Q0=p0*H0,K0=D0/(-A5+H0),M0=K0*-A5;o.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(M0),y.translateZ(K0),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert();let $0=p0+K0,$=S0+K0,z=s-M0,_=Q0+(D0-M0),e=t0*S0/$*$0,a=h*S0/$*$0;y.projectionMatrix.makePerspective(z,_,e,a,$0,$),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}function r(y,o){if(o===null)y.matrixWorld.copy(y.matrix);else y.matrixWorld.multiplyMatrices(o.matrixWorld,y.matrix);y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(W===null)return;if(p.near=L.near=w.near=y.near,p.far=L.far=w.far=y.far,A!==p.near||k!==p.far)W.updateRenderState({depthNear:p.near,depthFar:p.far}),A=p.near,k=p.far;let o=y.parent,X0=p.cameras;r(p,o);for(let D0=0;D0<X0.length;D0++)r(X0[D0],o);if(X0.length===2)u(p,w,L);else p.projectionMatrix.copy(w.projectionMatrix);c(y,p,o)};function c(y,o,X0){if(X0===null)y.matrix.copy(o.matrixWorld);else y.matrix.copy(X0.matrixWorld),y.matrix.invert(),y.matrix.multiply(o.matrixWorld);if(y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(o.projectionMatrix),y.projectionMatrixInverse.copy(o.projectionMatrixInverse),y.isPerspectiveCamera)y.fov=l7*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(V===null&&E===null)return;return X},this.setFoveation=function(y){if(X=y,V!==null)V.fixedFoveation=y;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=y};let d=null;function t(y,o){if(G=o.getViewerPose(U||H),D=o,G!==null){let X0=G.views;if(E!==null)J.setRenderTargetFramebuffer(N,E.framebuffer),J.setRenderTarget(N);let D0=!1;if(X0.length!==p.cameras.length)p.cameras.length=0,D0=!0;for(let P0=0;P0<X0.length;P0++){let k0=X0[P0],p0=null;if(E!==null)p0=E.getViewport(k0);else{let t0=q.getViewSubImage(V,k0);if(p0=t0.viewport,P0===0)J.setRenderTargetTextures(N,t0.colorTexture,V.ignoreDepthValues?void 0:t0.depthStencilTexture),J.setRenderTarget(N)}let S0=f[P0];if(S0===void 0)S0=new y5,S0.layers.enable(P0),S0.viewport=new G5,f[P0]=S0;if(S0.matrix.fromArray(k0.transform.matrix),S0.matrix.decompose(S0.position,S0.quaternion,S0.scale),S0.projectionMatrix.fromArray(k0.projectionMatrix),S0.projectionMatrixInverse.copy(S0.projectionMatrix).invert(),S0.viewport.set(p0.x,p0.y,p0.width,p0.height),P0===0)p.matrix.copy(S0.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(D0===!0)p.cameras.push(S0)}}for(let X0=0;X0<F.length;X0++){let D0=B[X0],P0=F[X0];if(D0!==null&&P0!==void 0)P0.update(D0,o,U||H)}if(d)d(y,o);if(o.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:o});D=null}let W0=new jZ;W0.setAnimationLoop(t),this.setAnimationLoop=function(y){d=y},this.dispose=function(){}}}function FU(J,Z){function Q(N,F){if(N.matrixAutoUpdate===!0)N.updateMatrix();F.value.copy(N.matrix)}function W(N,F){if(F.color.getRGB(N.fogColor.value,vZ(J)),F.isFog)N.fogNear.value=F.near,N.fogFar.value=F.far;else if(F.isFogExp2)N.fogDensity.value=F.density}function Y(N,F,B,M,C){if(F.isMeshBasicMaterial)H(N,F);else if(F.isMeshLambertMaterial)H(N,F);else if(F.isMeshToonMaterial)H(N,F),V(N,F);else if(F.isMeshPhongMaterial)H(N,F),q(N,F);else if(F.isMeshStandardMaterial){if(H(N,F),E(N,F),F.isMeshPhysicalMaterial)D(N,F,C)}else if(F.isMeshMatcapMaterial)H(N,F),O(N,F);else if(F.isMeshDepthMaterial)H(N,F);else if(F.isMeshDistanceMaterial)H(N,F),R(N,F);else if(F.isMeshNormalMaterial)H(N,F);else if(F.isLineBasicMaterial){if(K(N,F),F.isLineDashedMaterial)X(N,F)}else if(F.isPointsMaterial)U(N,F,B,M);else if(F.isSpriteMaterial)G(N,F);else if(F.isShadowMaterial)N.color.value.copy(F.color),N.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function H(N,F){if(N.opacity.value=F.opacity,F.color)N.diffuse.value.copy(F.color);if(F.emissive)N.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)N.map.value=F.map,Q(F.map,N.mapTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,Q(F.alphaMap,N.alphaMapTransform);if(F.bumpMap){if(N.bumpMap.value=F.bumpMap,Q(F.bumpMap,N.bumpMapTransform),N.bumpScale.value=F.bumpScale,F.side===1)N.bumpScale.value*=-1}if(F.normalMap){if(N.normalMap.value=F.normalMap,Q(F.normalMap,N.normalMapTransform),N.normalScale.value.copy(F.normalScale),F.side===1)N.normalScale.value.negate()}if(F.displacementMap)N.displacementMap.value=F.displacementMap,Q(F.displacementMap,N.displacementMapTransform),N.displacementScale.value=F.displacementScale,N.displacementBias.value=F.displacementBias;if(F.emissiveMap)N.emissiveMap.value=F.emissiveMap,Q(F.emissiveMap,N.emissiveMapTransform);if(F.specularMap)N.specularMap.value=F.specularMap,Q(F.specularMap,N.specularMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest;let B=Z.get(F).envMap;if(B)N.envMap.value=B,N.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=F.reflectivity,N.ior.value=F.ior,N.refractionRatio.value=F.refractionRatio;if(F.lightMap){N.lightMap.value=F.lightMap;let M=J._useLegacyLights===!0?Math.PI:1;N.lightMapIntensity.value=F.lightMapIntensity*M,Q(F.lightMap,N.lightMapTransform)}if(F.aoMap)N.aoMap.value=F.aoMap,N.aoMapIntensity.value=F.aoMapIntensity,Q(F.aoMap,N.aoMapTransform)}function K(N,F){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,F.map)N.map.value=F.map,Q(F.map,N.mapTransform)}function X(N,F){N.dashSize.value=F.dashSize,N.totalSize.value=F.dashSize+F.gapSize,N.scale.value=F.scale}function U(N,F,B,M){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,N.size.value=F.size*B,N.scale.value=M*0.5,F.map)N.map.value=F.map,Q(F.map,N.uvTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,Q(F.alphaMap,N.alphaMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest}function G(N,F){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,N.rotation.value=F.rotation,F.map)N.map.value=F.map,Q(F.map,N.mapTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,Q(F.alphaMap,N.alphaMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest}function q(N,F){N.specular.value.copy(F.specular),N.shininess.value=Math.max(F.shininess,0.0001)}function V(N,F){if(F.gradientMap)N.gradientMap.value=F.gradientMap}function E(N,F){if(N.metalness.value=F.metalness,F.metalnessMap)N.metalnessMap.value=F.metalnessMap,Q(F.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=F.roughness,F.roughnessMap)N.roughnessMap.value=F.roughnessMap,Q(F.roughnessMap,N.roughnessMapTransform);if(Z.get(F).envMap)N.envMapIntensity.value=F.envMapIntensity}function D(N,F,B){if(N.ior.value=F.ior,F.sheen>0){if(N.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),N.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)N.sheenColorMap.value=F.sheenColorMap,Q(F.sheenColorMap,N.sheenColorMapTransform);if(F.sheenRoughnessMap)N.sheenRoughnessMap.value=F.sheenRoughnessMap,Q(F.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(N.clearcoat.value=F.clearcoat,N.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)N.clearcoatMap.value=F.clearcoatMap,Q(F.clearcoatMap,N.clearcoatMapTransform);if(F.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,Q(F.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(N.clearcoatNormalMap.value=F.clearcoatNormalMap,Q(F.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===1)N.clearcoatNormalScale.value.negate()}}if(F.iridescence>0){if(N.iridescence.value=F.iridescence,N.iridescenceIOR.value=F.iridescenceIOR,N.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)N.iridescenceMap.value=F.iridescenceMap,Q(F.iridescenceMap,N.iridescenceMapTransform);if(F.iridescenceThicknessMap)N.iridescenceThicknessMap.value=F.iridescenceThicknessMap,Q(F.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(F.transmission>0){if(N.transmission.value=F.transmission,N.transmissionSamplerMap.value=B.texture,N.transmissionSamplerSize.value.set(B.width,B.height),F.transmissionMap)N.transmissionMap.value=F.transmissionMap,Q(F.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=F.thickness,F.thicknessMap)N.thicknessMap.value=F.thicknessMap,Q(F.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=F.attenuationDistance,N.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(N.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)N.anisotropyMap.value=F.anisotropyMap,Q(F.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=F.specularIntensity,N.specularColor.value.copy(F.specularColor),F.specularColorMap)N.specularColorMap.value=F.specularColorMap,Q(F.specularColorMap,N.specularColorMapTransform);if(F.specularIntensityMap)N.specularIntensityMap.value=F.specularIntensityMap,Q(F.specularIntensityMap,N.specularIntensityMapTransform)}function O(N,F){if(F.matcap)N.matcap.value=F.matcap}function R(N,F){let B=Z.get(F).light;N.referencePosition.value.setFromMatrixPosition(B.matrixWorld),N.nearDistance.value=B.shadow.camera.near,N.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Y}}function DU(J,Z,Q,W){let Y={},H={},K=[],X=Q.isWebGL2?J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS):0;function U(B,M){let C=M.program;W.uniformBlockBinding(B,C)}function G(B,M){let C=Y[B.id];if(C===void 0)O(B),C=q(B),Y[B.id]=C,B.addEventListener("dispose",N);let w=M.program;W.updateUBOMapping(B,w);let L=Z.render.frame;if(H[B.id]!==L)E(B),H[B.id]=L}function q(B){let M=V();B.__bindingPointIndex=M;let C=J.createBuffer(),w=B.__size,L=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,w,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,C),C}function V(){for(let B=0;B<X;B++)if(K.indexOf(B)===-1)return K.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(B){let M=Y[B.id],C=B.uniforms,w=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let L=0,f=C.length;L<f;L++){let p=Array.isArray(C[L])?C[L]:[C[L]];for(let A=0,k=p.length;A<k;A++){let v=p[A];if(D(v,L,A,w)===!0){let n=v.__offset,i=Array.isArray(v.value)?v.value:[v.value],T=0;for(let x=0;x<i.length;x++){let u=i[x],r=R(u);if(typeof u==="number"||typeof u==="boolean")v.__data[0]=u,J.bufferSubData(J.UNIFORM_BUFFER,n+T,v.__data);else if(u.isMatrix3)v.__data[0]=u.elements[0],v.__data[1]=u.elements[1],v.__data[2]=u.elements[2],v.__data[3]=0,v.__data[4]=u.elements[3],v.__data[5]=u.elements[4],v.__data[6]=u.elements[5],v.__data[7]=0,v.__data[8]=u.elements[6],v.__data[9]=u.elements[7],v.__data[10]=u.elements[8],v.__data[11]=0;else u.toArray(v.__data,T),T+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,n,v.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(B,M,C,w){let L=B.value,f=M+"_"+C;if(w[f]===void 0){if(typeof L==="number"||typeof L==="boolean")w[f]=L;else w[f]=L.clone();return!0}else{let p=w[f];if(typeof L==="number"||typeof L==="boolean"){if(p!==L)return w[f]=L,!0}else if(p.equals(L)===!1)return p.copy(L),!0}return!1}function O(B){let M=B.uniforms,C=0,w=16;for(let f=0,p=M.length;f<p;f++){let A=Array.isArray(M[f])?M[f]:[M[f]];for(let k=0,v=A.length;k<v;k++){let n=A[k],i=Array.isArray(n.value)?n.value:[n.value];for(let T=0,x=i.length;T<x;T++){let u=i[T],r=R(u),c=C%w;if(c!==0&&w-c<r.boundary)C+=w-c;n.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),n.__offset=C,C+=r.storage}}}let L=C%w;if(L>0)C+=w-L;return B.__size=C,B.__cache={},this}function R(B){let M={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")M.boundary=4,M.storage=4;else if(B.isVector2)M.boundary=8,M.storage=8;else if(B.isVector3||B.isColor)M.boundary=16,M.storage=12;else if(B.isVector4)M.boundary=16,M.storage=16;else if(B.isMatrix3)M.boundary=48,M.storage=48;else if(B.isMatrix4)M.boundary=64,M.storage=64;else if(B.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B);return M}function N(B){let M=B.target;M.removeEventListener("dispose",N);let C=K.indexOf(M.__bindingPointIndex);K.splice(C,1),J.deleteBuffer(Y[M.id]),delete Y[M.id],delete H[M.id]}function F(){for(let B in Y)J.deleteBuffer(Y[B]);K=[],Y={},H={}}return{bind:U,update:G,dispose:F}}class h9{constructor(J={}){let{canvas:Z=$W(),context:Q=null,depth:W=!0,stencil:Y=!0,alpha:H=!1,antialias:K=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:U=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:q=!1}=J;this.isWebGLRenderer=!0;let V;if(Q!==null)V=Q.getContextAttributes().alpha;else V=H;let E=new Uint32Array(4),D=new Int32Array(4),O=null,R=null,N=[],F=[];this.domElement=Z,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let B=this,M=!1,C=0,w=0,L=null,f=-1,p=null,A=new G5,k=new G5,v=null,n=new g0(0),i=0,T=Z.width,x=Z.height,u=1,r=null,c=null,d=new G5(0,0,T,x),t=new G5(0,0,T,x),W0=!1,y=new b9,o=!1,X0=!1,D0=null,P0=new D5,k0=new F0,p0=new P,S0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function t0(){return L===null?u:1}let h=Q;function A5(I,j){for(let m=0;m<I.length;m++){let l=I[m],g=Z.getContext(l,j);if(g!==null)return g}return null}try{let I={alpha:!0,depth:W,stencil:Y,antialias:K,premultipliedAlpha:X,preserveDrawingBuffer:U,powerPreference:G,failIfMajorPerformanceCaveat:q};if("setAttribute"in Z)Z.setAttribute("data-engine","three.js r160");if(Z.addEventListener("webglcontextlost",H5,!1),Z.addEventListener("webglcontextrestored",U0,!1),Z.addEventListener("webglcontextcreationerror",S,!1),h===null){let j=["webgl2","webgl","experimental-webgl"];if(B.isWebGL1Renderer===!0)j.shift();if(h=A5(j,I),h===null)if(A5(j))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&h instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(h.getShaderPrecisionFormat===void 0)h.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let H0,s,Q0,K0,M0,$0,$,z,_,e,a,Z0,v0,q0,z0,w0,l0,J0,N5,i0,x0,B0,C0,o0;function Y5(){H0=new bX(h),s=new PX(h,H0,J),H0.init(s),B0=new qU(h,H0,s),Q0=new GU(h,H0,s),K0=new yX(h),M0=new aK,$0=new VU(h,H0,Q0,M0,s,B0,K0),$=new TX(B),z=new fX(B),_=new dW(h,s),C0=new kX(h,H0,_,s),e=new jX(h,_,K0,C0),a=new pX(h,e,_,K0),N5=new gX(h,s,$0),w0=new wX(M0),Z0=new rK(B,$,z,H0,s,C0,w0),v0=new FU(B,M0),q0=new eK,z0=new HU(H0,s),J0=new CX(B,$,z,Q0,a,V,X),l0=new UU(B,a,s),o0=new DU(h,K0,s,Q0),i0=new LX(h,H0,K0,s),x0=new hX(h,H0,K0,s),K0.programs=Z0.programs,B.capabilities=s,B.extensions=H0,B.properties=M0,B.renderLists=q0,B.shadowMap=l0,B.state=Q0,B.info=K0}Y5();let a0=new iZ(B,h);this.xr=a0,this.getContext=function(){return h},this.getContextAttributes=function(){return h.getContextAttributes()},this.forceContextLoss=function(){let I=H0.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=H0.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return u},this.setPixelRatio=function(I){if(I===void 0)return;u=I,this.setSize(T,x,!1)},this.getSize=function(I){return I.set(T,x)},this.setSize=function(I,j,m=!0){if(a0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(T=I,x=j,Z.width=Math.floor(I*u),Z.height=Math.floor(j*u),m===!0)Z.style.width=I+"px",Z.style.height=j+"px";this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(T*u,x*u).floor()},this.setDrawingBufferSize=function(I,j,m){T=I,x=j,u=m,Z.width=Math.floor(I*m),Z.height=Math.floor(j*m),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(d)},this.setViewport=function(I,j,m,l){if(I.isVector4)d.set(I.x,I.y,I.z,I.w);else d.set(I,j,m,l);Q0.viewport(A.copy(d).multiplyScalar(u).floor())},this.getScissor=function(I){return I.copy(t)},this.setScissor=function(I,j,m,l){if(I.isVector4)t.set(I.x,I.y,I.z,I.w);else t.set(I,j,m,l);Q0.scissor(k.copy(t).multiplyScalar(u).floor())},this.getScissorTest=function(){return W0},this.setScissorTest=function(I){Q0.setScissorTest(W0=I)},this.setOpaqueSort=function(I){r=I},this.setTransparentSort=function(I){c=I},this.getClearColor=function(I){return I.copy(J0.getClearColor())},this.setClearColor=function(){J0.setClearColor.apply(J0,arguments)},this.getClearAlpha=function(){return J0.getClearAlpha()},this.setClearAlpha=function(){J0.setClearAlpha.apply(J0,arguments)},this.clear=function(I=!0,j=!0,m=!0){let l=0;if(I){let g=!1;if(L!==null){let O0=L.texture.format;g=O0===1033||O0===1031||O0===1029}if(g){let O0=L.texture.type,L0=O0===1009||O0===1014||O0===1012||O0===1020||O0===1017||O0===1018,f0=J0.getClearColor(),y0=J0.getClearAlpha(),c0=f0.r,_0=f0.g,m0=f0.b;if(L0)E[0]=c0,E[1]=_0,E[2]=m0,E[3]=y0,h.clearBufferuiv(h.COLOR,0,E);else D[0]=c0,D[1]=_0,D[2]=m0,D[3]=y0,h.clearBufferiv(h.COLOR,0,D)}else l|=h.COLOR_BUFFER_BIT}if(j)l|=h.DEPTH_BUFFER_BIT;if(m)l|=h.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);h.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if(Z.removeEventListener("webglcontextlost",H5,!1),Z.removeEventListener("webglcontextrestored",U0,!1),Z.removeEventListener("webglcontextcreationerror",S,!1),q0.dispose(),z0.dispose(),M0.dispose(),$.dispose(),z.dispose(),a.dispose(),C0.dispose(),o0.dispose(),Z0.dispose(),a0.dispose(),a0.removeEventListener("sessionstart",R5),a0.removeEventListener("sessionend",b5),D0)D0.dispose(),D0=null;J5.stop()};function H5(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U0(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=K0.autoReset,j=l0.enabled,m=l0.autoUpdate,l=l0.needsUpdate,g=l0.type;Y5(),K0.autoReset=I,l0.enabled=j,l0.autoUpdate=m,l0.needsUpdate=l,l0.type=g}function S(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function V0(I){let j=I.target;j.removeEventListener("dispose",V0),E0(j)}function E0(I){h0(I),M0.remove(I)}function h0(I){let j=M0.get(I).programs;if(j!==void 0){if(j.forEach(function(m){Z0.releaseProgram(m)}),I.isShaderMaterial)Z0.releaseShaderCache(I)}}this.renderBufferDirect=function(I,j,m,l,g,O0){if(j===null)j=S0;let L0=g.isMesh&&g.matrixWorld.determinant()<0,f0=bQ(I,j,m,l,g);Q0.setMaterial(l,L0);let y0=m.index,c0=1;if(l.wireframe===!0){if(y0=e.getWireframeAttribute(m),y0===void 0)return;c0=2}let _0=m.drawRange,m0=m.attributes.position,F5=_0.start*c0,m5=(_0.start+_0.count)*c0;if(O0!==null)F5=Math.max(F5,O0.start*c0),m5=Math.min(m5,(O0.start+O0.count)*c0);if(y0!==null)F5=Math.max(F5,0),m5=Math.min(m5,y0.count);else if(m0!==void 0&&m0!==null)F5=Math.max(F5,0),m5=Math.min(m5,m0.count);let I5=m5-F5;if(I5<0||I5===1/0)return;C0.setup(g,l,f0,m,y0);let q6,V5=i0;if(y0!==null)q6=_.get(y0),V5=x0,V5.setIndex(q6);if(g.isMesh)if(l.wireframe===!0)Q0.setLineWidth(l.wireframeLinewidth*t0()),V5.setMode(h.LINES);else V5.setMode(h.TRIANGLES);else if(g.isLine){let n0=l.linewidth;if(n0===void 0)n0=1;if(Q0.setLineWidth(n0*t0()),g.isLineSegments)V5.setMode(h.LINES);else if(g.isLineLoop)V5.setMode(h.LINE_LOOP);else V5.setMode(h.LINE_STRIP)}else if(g.isPoints)V5.setMode(h.POINTS);else if(g.isSprite)V5.setMode(h.TRIANGLES);if(g.isBatchedMesh)V5.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)V5.renderInstances(F5,I5,g.count);else if(m.isInstancedBufferGeometry){let n0=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,Z7=Math.min(m.instanceCount,n0);V5.renderInstances(F5,I5,Z7)}else V5.render(F5,I5)};function T0(I,j,m){if(I.transparent===!0&&I.side===2&&I.forceSinglePass===!1)I.side=1,I.needsUpdate=!0,r8(I,j,m),I.side=0,I.needsUpdate=!0,r8(I,j,m),I.side=2;else r8(I,j,m)}this.compile=function(I,j,m=null){if(m===null)m=I;if(R=z0.get(m),R.init(),F.push(R),m.traverseVisible(function(g){if(g.isLight&&g.layers.test(j.layers)){if(R.pushLight(g),g.castShadow)R.pushShadow(g)}}),I!==m)I.traverseVisible(function(g){if(g.isLight&&g.layers.test(j.layers)){if(R.pushLight(g),g.castShadow)R.pushShadow(g)}});R.setupLights(B._useLegacyLights);let l=new Set;return I.traverse(function(g){let O0=g.material;if(O0)if(Array.isArray(O0))for(let L0=0;L0<O0.length;L0++){let f0=O0[L0];T0(f0,m,g),l.add(f0)}else T0(O0,m,g),l.add(O0)}),F.pop(),R=null,l},this.compileAsync=function(I,j,m=null){let l=this.compile(I,j,m);return new Promise((g)=>{function O0(){if(l.forEach(function(L0){if(M0.get(L0).currentProgram.isReady())l.delete(L0)}),l.size===0){g(I);return}setTimeout(O0,10)}if(H0.get("KHR_parallel_shader_compile")!==null)O0();else setTimeout(O0,10)})};let X5=null;function U5(I){if(X5)X5(I)}function R5(){J5.stop()}function b5(){J5.start()}let J5=new jZ;if(J5.setAnimationLoop(U5),typeof self<"u")J5.setContext(self);this.setAnimationLoop=function(I){X5=I,a0.setAnimationLoop(I),I===null?J5.stop():J5.start()},a0.addEventListener("sessionstart",R5),a0.addEventListener("sessionend",b5),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(a0.enabled===!0&&a0.isPresenting===!0){if(a0.cameraAutoUpdate===!0)a0.updateCamera(j);j=a0.getCamera()}if(I.isScene===!0)I.onBeforeRender(B,I,j,L);if(R=z0.get(I,F.length),R.init(),F.push(R),P0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),y.setFromProjectionMatrix(P0),X0=this.localClippingEnabled,o=w0.init(this.clippingPlanes,X0),O=q0.get(I,N.length),O.init(),N.push(O),H6(I,j,0,B.sortObjects),O.finish(),B.sortObjects===!0)O.sort(r,c);if(this.info.render.frame++,o===!0)w0.beginShadows();let m=R.state.shadowsArray;if(l0.render(m,I,j),o===!0)w0.endShadows();if(this.info.autoReset===!0)this.info.reset();if(J0.render(O,I),R.setupLights(B._useLegacyLights),j.isArrayCamera){let l=j.cameras;for(let g=0,O0=l.length;g<O0;g++){let L0=l[g];X6(O,I,L0,L0.viewport)}}else X6(O,I,j);if(L!==null)$0.updateMultisampleRenderTarget(L),$0.updateRenderTargetMipmap(L);if(I.isScene===!0)I.onAfterRender(B,I,j);if(C0.resetDefaultState(),f=-1,p=null,F.pop(),F.length>0)R=F[F.length-1];else R=null;if(N.pop(),N.length>0)O=N[N.length-1];else O=null};function H6(I,j,m,l){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)m=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(j)}else if(I.isLight){if(R.pushLight(I),I.castShadow)R.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||y.intersectsSprite(I)){if(l)p0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(P0);let L0=a.update(I),f0=I.material;if(f0.visible)O.push(I,L0,f0,m,p0.z,null)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||y.intersectsObject(I)){let L0=a.update(I),f0=I.material;if(l){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();p0.copy(I.boundingSphere.center)}else{if(L0.boundingSphere===null)L0.computeBoundingSphere();p0.copy(L0.boundingSphere.center)}p0.applyMatrix4(I.matrixWorld).applyMatrix4(P0)}if(Array.isArray(f0)){let y0=L0.groups;for(let c0=0,_0=y0.length;c0<_0;c0++){let m0=y0[c0],F5=f0[m0.materialIndex];if(F5&&F5.visible)O.push(I,L0,F5,m,p0.z,m0)}}else if(f0.visible)O.push(I,L0,f0,m,p0.z,null)}}}let O0=I.children;for(let L0=0,f0=O0.length;L0<f0;L0++)H6(O0[L0],j,m,l)}function X6(I,j,m,l){let{opaque:g,transmissive:O0,transparent:L0}=I;if(R.setupLightsView(m),o===!0)w0.setGlobalState(B.clippingPlanes,m);if(O0.length>0)fQ(g,O0,j,m);if(l)Q0.viewport(A.copy(l));if(g.length>0)o8(g,j,m);if(O0.length>0)o8(O0,j,m);if(L0.length>0)o8(L0,j,m);Q0.buffers.depth.setTest(!0),Q0.buffers.depth.setMask(!0),Q0.buffers.color.setMask(!0),Q0.setPolygonOffset(!1)}function fQ(I,j,m,l){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;let O0=s.isWebGL2;if(D0===null)D0=new k6(1,1,{generateMipmaps:!0,type:H0.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:O0?4:0});if(B.getDrawingBufferSize(k0),O0)D0.setSize(k0.x,k0.y);else D0.setSize(u7(k0.x),u7(k0.y));let L0=B.getRenderTarget();if(B.setRenderTarget(D0),B.getClearColor(n),i=B.getClearAlpha(),i<1)B.setClearColor(16777215,0.5);B.clear();let f0=B.toneMapping;B.toneMapping=0,o8(I,m,l),$0.updateMultisampleRenderTarget(D0),$0.updateRenderTargetMipmap(D0);let y0=!1;for(let c0=0,_0=j.length;c0<_0;c0++){let m0=j[c0],F5=m0.object,m5=m0.geometry,I5=m0.material,q6=m0.group;if(I5.side===2&&F5.layers.test(l.layers)){let V5=I5.side;I5.side=1,I5.needsUpdate=!0,SJ(F5,m,l,m5,I5,q6),I5.side=V5,I5.needsUpdate=!0,y0=!0}}if(y0===!0)$0.updateMultisampleRenderTarget(D0),$0.updateRenderTargetMipmap(D0);B.setRenderTarget(L0),B.setClearColor(n,i),B.toneMapping=f0}function o8(I,j,m){let l=j.isScene===!0?j.overrideMaterial:null;for(let g=0,O0=I.length;g<O0;g++){let L0=I[g],f0=L0.object,y0=L0.geometry,c0=l===null?L0.material:l,_0=L0.group;if(f0.layers.test(m.layers))SJ(f0,j,m,y0,c0,_0)}}function SJ(I,j,m,l,g,O0){if(I.onBeforeRender(B,j,m,l,g,O0),I.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),g.onBeforeRender(B,j,m,l,I,O0),g.transparent===!0&&g.side===2&&g.forceSinglePass===!1)g.side=1,g.needsUpdate=!0,B.renderBufferDirect(m,j,l,g,I,O0),g.side=0,g.needsUpdate=!0,B.renderBufferDirect(m,j,l,g,I,O0),g.side=2;else B.renderBufferDirect(m,j,l,g,I,O0);I.onAfterRender(B,j,m,l,g,O0)}function r8(I,j,m){if(j.isScene!==!0)j=S0;let l=M0.get(I),g=R.state.lights,O0=R.state.shadowsArray,L0=g.state.version,f0=Z0.getParameters(I,g.state,O0,j,m),y0=Z0.getProgramCacheKey(f0),c0=l.programs;if(l.environment=I.isMeshStandardMaterial?j.environment:null,l.fog=j.fog,l.envMap=(I.isMeshStandardMaterial?z:$).get(I.envMap||l.environment),c0===void 0)I.addEventListener("dispose",V0),c0=new Map,l.programs=c0;let _0=c0.get(y0);if(_0!==void 0){if(l.currentProgram===_0&&l.lightsStateVersion===L0)return fJ(I,f0),_0}else f0.uniforms=Z0.getUniforms(I),I.onBuild(m,f0,B),I.onBeforeCompile(f0,B),_0=Z0.acquireProgram(f0,y0),c0.set(y0,_0),l.uniforms=f0.uniforms;let m0=l.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)m0.clippingPlanes=w0.uniform;if(fJ(I,f0),l.needsLights=hQ(I),l.lightsStateVersion=L0,l.needsLights)m0.ambientLightColor.value=g.state.ambient,m0.lightProbe.value=g.state.probe,m0.directionalLights.value=g.state.directional,m0.directionalLightShadows.value=g.state.directionalShadow,m0.spotLights.value=g.state.spot,m0.spotLightShadows.value=g.state.spotShadow,m0.rectAreaLights.value=g.state.rectArea,m0.ltc_1.value=g.state.rectAreaLTC1,m0.ltc_2.value=g.state.rectAreaLTC2,m0.pointLights.value=g.state.point,m0.pointLightShadows.value=g.state.pointShadow,m0.hemisphereLights.value=g.state.hemi,m0.directionalShadowMap.value=g.state.directionalShadowMap,m0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,m0.spotShadowMap.value=g.state.spotShadowMap,m0.spotLightMatrix.value=g.state.spotLightMatrix,m0.spotLightMap.value=g.state.spotLightMap,m0.pointShadowMap.value=g.state.pointShadowMap,m0.pointShadowMatrix.value=g.state.pointShadowMatrix;return l.currentProgram=_0,l.uniformsList=null,_0}function vJ(I){if(I.uniformsList===null){let j=I.currentProgram.getUniforms();I.uniformsList=T8.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function fJ(I,j){let m=M0.get(I);m.outputColorSpace=j.outputColorSpace,m.batching=j.batching,m.instancing=j.instancing,m.instancingColor=j.instancingColor,m.skinning=j.skinning,m.morphTargets=j.morphTargets,m.morphNormals=j.morphNormals,m.morphColors=j.morphColors,m.morphTargetsCount=j.morphTargetsCount,m.numClippingPlanes=j.numClippingPlanes,m.numIntersection=j.numClipIntersection,m.vertexAlphas=j.vertexAlphas,m.vertexTangents=j.vertexTangents,m.toneMapping=j.toneMapping}function bQ(I,j,m,l,g){if(j.isScene!==!0)j=S0;$0.resetTextureUnits();let O0=j.fog,L0=l.isMeshStandardMaterial?j.environment:null,f0=L===null?B.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:"srgb-linear",y0=(l.isMeshStandardMaterial?z:$).get(l.envMap||L0),c0=l.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,_0=!!m.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),m0=!!m.morphAttributes.position,F5=!!m.morphAttributes.normal,m5=!!m.morphAttributes.color,I5=0;if(l.toneMapped){if(L===null||L.isXRRenderTarget===!0)I5=B.toneMapping}let q6=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,V5=q6!==void 0?q6.length:0,n0=M0.get(l),Z7=R.state.lights;if(o===!0){if(X0===!0||I!==p){let n5=I===p&&l.id===f;w0.setState(l,I,n5)}}let E5=!1;if(l.version===n0.__version){if(n0.needsLights&&n0.lightsStateVersion!==Z7.state.version)E5=!0;else if(n0.outputColorSpace!==f0)E5=!0;else if(g.isBatchedMesh&&n0.batching===!1)E5=!0;else if(!g.isBatchedMesh&&n0.batching===!0)E5=!0;else if(g.isInstancedMesh&&n0.instancing===!1)E5=!0;else if(!g.isInstancedMesh&&n0.instancing===!0)E5=!0;else if(g.isSkinnedMesh&&n0.skinning===!1)E5=!0;else if(!g.isSkinnedMesh&&n0.skinning===!0)E5=!0;else if(g.isInstancedMesh&&n0.instancingColor===!0&&g.instanceColor===null)E5=!0;else if(g.isInstancedMesh&&n0.instancingColor===!1&&g.instanceColor!==null)E5=!0;else if(n0.envMap!==y0)E5=!0;else if(l.fog===!0&&n0.fog!==O0)E5=!0;else if(n0.numClippingPlanes!==void 0&&(n0.numClippingPlanes!==w0.numPlanes||n0.numIntersection!==w0.numIntersection))E5=!0;else if(n0.vertexAlphas!==c0)E5=!0;else if(n0.vertexTangents!==_0)E5=!0;else if(n0.morphTargets!==m0)E5=!0;else if(n0.morphNormals!==F5)E5=!0;else if(n0.morphColors!==m5)E5=!0;else if(n0.toneMapping!==I5)E5=!0;else if(s.isWebGL2===!0&&n0.morphTargetsCount!==V5)E5=!0}else E5=!0,n0.__version=l.version;let w6=n0.currentProgram;if(E5===!0)w6=r8(l,j,g);let bJ=!1,z8=!1,Q7=!1,T5=w6.getUniforms(),T6=n0.uniforms;if(Q0.useProgram(w6.program))bJ=!0,z8=!0,Q7=!0;if(l.id!==f)f=l.id,z8=!0;if(bJ||p!==I){T5.setValue(h,"projectionMatrix",I.projectionMatrix),T5.setValue(h,"viewMatrix",I.matrixWorldInverse);let n5=T5.map.cameraPosition;if(n5!==void 0)n5.setValue(h,p0.setFromMatrixPosition(I.matrixWorld));if(s.logarithmicDepthBuffer)T5.setValue(h,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)T5.setValue(h,"isOrthographic",I.isOrthographicCamera===!0);if(p!==I)p=I,z8=!0,Q7=!0}if(g.isSkinnedMesh){T5.setOptional(h,g,"bindMatrix"),T5.setOptional(h,g,"bindMatrixInverse");let n5=g.skeleton;if(n5)if(s.floatVertexTextures){if(n5.boneTexture===null)n5.computeBoneTexture();T5.setValue(h,"boneTexture",n5.boneTexture,$0)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}if(g.isBatchedMesh)T5.setOptional(h,g,"batchingTexture"),T5.setValue(h,"batchingTexture",g._matricesTexture,$0);let W7=m.morphAttributes;if(W7.position!==void 0||W7.normal!==void 0||W7.color!==void 0&&s.isWebGL2===!0)N5.update(g,m,w6);if(z8||n0.receiveShadow!==g.receiveShadow)n0.receiveShadow=g.receiveShadow,T5.setValue(h,"receiveShadow",g.receiveShadow);if(l.isMeshGouraudMaterial&&l.envMap!==null)T6.envMap.value=y0,T6.flipEnvMap.value=y0.isCubeTexture&&y0.isRenderTargetTexture===!1?-1:1;if(z8){if(T5.setValue(h,"toneMappingExposure",B.toneMappingExposure),n0.needsLights)jQ(T6,Q7);if(O0&&l.fog===!0)v0.refreshFogUniforms(T6,O0);v0.refreshMaterialUniforms(T6,l,u,x,D0),T8.upload(h,vJ(n0),T6,$0)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)T8.upload(h,vJ(n0),T6,$0),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)T5.setValue(h,"center",g.center);if(T5.setValue(h,"modelViewMatrix",g.modelViewMatrix),T5.setValue(h,"normalMatrix",g.normalMatrix),T5.setValue(h,"modelMatrix",g.matrixWorld),l.isShaderMaterial||l.isRawShaderMaterial){let n5=l.uniformsGroups;for(let Y7=0,yQ=n5.length;Y7<yQ;Y7++)if(s.isWebGL2){let jJ=n5[Y7];o0.update(jJ,w6),o0.bind(jJ,w6)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return w6}function jQ(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function hQ(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}if(this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,j,m){M0.get(I.texture).__webglTexture=j,M0.get(I.depthTexture).__webglTexture=m;let l=M0.get(I);if(l.__hasExternalTextures=!0,l.__hasExternalTextures){if(l.__autoAllocateDepthBuffer=m===void 0,!l.__autoAllocateDepthBuffer){if(H0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),l.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(I,j){let m=M0.get(I);m.__webglFramebuffer=j,m.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(I,j=0,m=0){L=I,C=j,w=m;let l=!0,g=null,O0=!1,L0=!1;if(I){let y0=M0.get(I);if(y0.__useDefaultFramebuffer!==void 0)Q0.bindFramebuffer(h.FRAMEBUFFER,null),l=!1;else if(y0.__webglFramebuffer===void 0)$0.setupRenderTarget(I);else if(y0.__hasExternalTextures)$0.rebindTextures(I,M0.get(I.texture).__webglTexture,M0.get(I.depthTexture).__webglTexture);let c0=I.texture;if(c0.isData3DTexture||c0.isDataArrayTexture||c0.isCompressedArrayTexture)L0=!0;let _0=M0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(_0[j]))g=_0[j][m];else g=_0[j];O0=!0}else if(s.isWebGL2&&I.samples>0&&$0.useMultisampledRTT(I)===!1)g=M0.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(_0))g=_0[m];else g=_0;A.copy(I.viewport),k.copy(I.scissor),v=I.scissorTest}else A.copy(d).multiplyScalar(u).floor(),k.copy(t).multiplyScalar(u).floor(),v=W0;if(Q0.bindFramebuffer(h.FRAMEBUFFER,g)&&s.drawBuffers&&l)Q0.drawBuffers(I,g);if(Q0.viewport(A),Q0.scissor(k),Q0.setScissorTest(v),O0){let y0=M0.get(I.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+j,y0.__webglTexture,m)}else if(L0){let y0=M0.get(I.texture),c0=j||0;h.framebufferTextureLayer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,y0.__webglTexture,m||0,c0)}f=-1},this.readRenderTargetPixels=function(I,j,m,l,g,O0,L0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let f0=M0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&L0!==void 0)f0=f0[L0];if(f0){Q0.bindFramebuffer(h.FRAMEBUFFER,f0);try{let y0=I.texture,c0=y0.format,_0=y0.type;if(c0!==1023&&B0.convert(c0)!==h.getParameter(h.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let m0=_0===1016&&(H0.has("EXT_color_buffer_half_float")||s.isWebGL2&&H0.has("EXT_color_buffer_float"));if(_0!==1009&&B0.convert(_0)!==h.getParameter(h.IMPLEMENTATION_COLOR_READ_TYPE)&&!(_0===1015&&(s.isWebGL2||H0.has("OES_texture_float")||H0.has("WEBGL_color_buffer_float")))&&!m0){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=I.width-l&&(m>=0&&m<=I.height-g))h.readPixels(j,m,l,g,B0.convert(c0),B0.convert(_0),O0)}finally{let y0=L!==null?M0.get(L).__webglFramebuffer:null;Q0.bindFramebuffer(h.FRAMEBUFFER,y0)}}},this.copyFramebufferToTexture=function(I,j,m=0){let l=Math.pow(2,-m),g=Math.floor(j.image.width*l),O0=Math.floor(j.image.height*l);$0.setTexture2D(j,0),h.copyTexSubImage2D(h.TEXTURE_2D,m,0,0,I.x,I.y,g,O0),Q0.unbindTexture()},this.copyTextureToTexture=function(I,j,m,l=0){let g=j.image.width,O0=j.image.height,L0=B0.convert(m.format),f0=B0.convert(m.type);if($0.setTexture2D(m,0),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,m.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,m.unpackAlignment),j.isDataTexture)h.texSubImage2D(h.TEXTURE_2D,l,I.x,I.y,g,O0,L0,f0,j.image.data);else if(j.isCompressedTexture)h.compressedTexSubImage2D(h.TEXTURE_2D,l,I.x,I.y,j.mipmaps[0].width,j.mipmaps[0].height,L0,j.mipmaps[0].data);else h.texSubImage2D(h.TEXTURE_2D,l,I.x,I.y,L0,f0,j.image);if(l===0&&m.generateMipmaps)h.generateMipmap(h.TEXTURE_2D);Q0.unbindTexture()},this.copyTextureToTexture3D=function(I,j,m,l,g=0){if(B.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let O0=I.max.x-I.min.x+1,L0=I.max.y-I.min.y+1,f0=I.max.z-I.min.z+1,y0=B0.convert(l.format),c0=B0.convert(l.type),_0;if(l.isData3DTexture)$0.setTexture3D(l,0),_0=h.TEXTURE_3D;else if(l.isDataArrayTexture||l.isCompressedArrayTexture)$0.setTexture2DArray(l,0),_0=h.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,l.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,l.unpackAlignment);let m0=h.getParameter(h.UNPACK_ROW_LENGTH),F5=h.getParameter(h.UNPACK_IMAGE_HEIGHT),m5=h.getParameter(h.UNPACK_SKIP_PIXELS),I5=h.getParameter(h.UNPACK_SKIP_ROWS),q6=h.getParameter(h.UNPACK_SKIP_IMAGES),V5=m.isCompressedTexture?m.mipmaps[g]:m.image;if(h.pixelStorei(h.UNPACK_ROW_LENGTH,V5.width),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,V5.height),h.pixelStorei(h.UNPACK_SKIP_PIXELS,I.min.x),h.pixelStorei(h.UNPACK_SKIP_ROWS,I.min.y),h.pixelStorei(h.UNPACK_SKIP_IMAGES,I.min.z),m.isDataTexture||m.isData3DTexture)h.texSubImage3D(_0,g,j.x,j.y,j.z,O0,L0,f0,y0,c0,V5.data);else if(m.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),h.compressedTexSubImage3D(_0,g,j.x,j.y,j.z,O0,L0,f0,y0,V5.data);else h.texSubImage3D(_0,g,j.x,j.y,j.z,O0,L0,f0,y0,c0,V5);if(h.pixelStorei(h.UNPACK_ROW_LENGTH,m0),h.pixelStorei(h.UNPACK_IMAGE_HEIGHT,F5),h.pixelStorei(h.UNPACK_SKIP_PIXELS,m5),h.pixelStorei(h.UNPACK_SKIP_ROWS,I5),h.pixelStorei(h.UNPACK_SKIP_IMAGES,q6),g===0&&l.generateMipmaps)h.generateMipmap(_0);Q0.unbindTexture()},this.initTexture=function(I){if(I.isCubeTexture)$0.setTextureCube(I,0);else if(I.isData3DTexture)$0.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)$0.setTexture2DArray(I,0);else $0.setTexture2D(I,0);Q0.unbindTexture()},this.resetState=function(){C=0,w=0,L=null,Q0.reset(),C0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Z=this.getContext();Z.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",Z.unpackColorSpace=W5.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(J){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=J===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(J){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=J}}class oZ extends h9{}oZ.prototype.isWebGL1Renderer=!0;class y9{constructor(J,Z=0.00025){this.isFogExp2=!0,this.name="",this.color=new g0(J),this.density=Z}clone(){return new y9(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class KJ extends P5{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Z){if(super.copy(J,Z),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Z=super.toJSON(J);if(this.fog!==null)Z.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Z.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Z.object.backgroundIntensity=this.backgroundIntensity;return Z}}class M6 extends p5{constructor(J,Z,Q,W,Y,H,K,X,U){super(J,Z,Q,W,Y,H,K,X,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Q6{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(J,Z){let Q=this.getUtoTmapping(J);return this.getPoint(Q,Z)}getPoints(J=5){let Z=[];for(let Q=0;Q<=J;Q++)Z.push(this.getPoint(Q/J));return Z}getSpacedPoints(J=5){let Z=[];for(let Q=0;Q<=J;Q++)Z.push(this.getPointAt(Q/J));return Z}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Z=[],Q,W=this.getPoint(0),Y=0;Z.push(0);for(let H=1;H<=J;H++)Q=this.getPoint(H/J),Y+=Q.distanceTo(W),Z.push(Y),W=Q;return this.cacheArcLengths=Z,Z}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Z){let Q=this.getLengths(),W=0,Y=Q.length,H;if(Z)H=Z;else H=J*Q[Y-1];let K=0,X=Y-1,U;while(K<=X)if(W=Math.floor(K+(X-K)/2),U=Q[W]-H,U<0)K=W+1;else if(U>0)X=W-1;else{X=W;break}if(W=X,Q[W]===H)return W/(Y-1);let G=Q[W],V=Q[W+1]-G,E=(H-G)/V;return(W+E)/(Y-1)}getTangent(J,Z){let W=J-0.0001,Y=J+0.0001;if(W<0)W=0;if(Y>1)Y=1;let H=this.getPoint(W),K=this.getPoint(Y),X=Z||(H.isVector2?new F0:new P);return X.copy(K).sub(H).normalize(),X}getTangentAt(J,Z){let Q=this.getUtoTmapping(J);return this.getTangent(Q,Z)}computeFrenetFrames(J,Z){let Q=new P,W=[],Y=[],H=[],K=new P,X=new D5;for(let E=0;E<=J;E++){let D=E/J;W[E]=this.getTangentAt(D,new P)}Y[0]=new P,H[0]=new P;let U=Number.MAX_VALUE,G=Math.abs(W[0].x),q=Math.abs(W[0].y),V=Math.abs(W[0].z);if(G<=U)U=G,Q.set(1,0,0);if(q<=U)U=q,Q.set(0,1,0);if(V<=U)Q.set(0,0,1);K.crossVectors(W[0],Q).normalize(),Y[0].crossVectors(W[0],K),H[0].crossVectors(W[0],Y[0]);for(let E=1;E<=J;E++){if(Y[E]=Y[E-1].clone(),H[E]=H[E-1].clone(),K.crossVectors(W[E-1],W[E]),K.length()>Number.EPSILON){K.normalize();let D=Math.acos(C5(W[E-1].dot(W[E]),-1,1));Y[E].applyMatrix4(X.makeRotationAxis(K,D))}H[E].crossVectors(W[E],Y[E])}if(Z===!0){let E=Math.acos(C5(Y[0].dot(Y[J]),-1,1));if(E/=J,W[0].dot(K.crossVectors(Y[0],Y[J]))>0)E=-E;for(let D=1;D<=J;D++)Y[D].applyMatrix4(X.makeRotationAxis(W[D],E*D)),H[D].crossVectors(W[D],Y[D])}return{tangents:W,normals:Y,binormals:H}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class x9 extends Q6{constructor(J=0,Z=0,Q=1,W=1,Y=0,H=Math.PI*2,K=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Z,this.xRadius=Q,this.yRadius=W,this.aStartAngle=Y,this.aEndAngle=H,this.aClockwise=K,this.aRotation=X}getPoint(J,Z){let Q=Z||new F0,W=Math.PI*2,Y=this.aEndAngle-this.aStartAngle,H=Math.abs(Y)<Number.EPSILON;while(Y<0)Y+=W;while(Y>W)Y-=W;if(Y<Number.EPSILON)if(H)Y=0;else Y=W;if(this.aClockwise===!0&&!H)if(Y===W)Y=-W;else Y=Y-W;let K=this.aStartAngle+J*Y,X=this.aX+this.xRadius*Math.cos(K),U=this.aY+this.yRadius*Math.sin(K);if(this.aRotation!==0){let G=Math.cos(this.aRotation),q=Math.sin(this.aRotation),V=X-this.aX,E=U-this.aY;X=V*G-E*q+this.aX,U=V*q+E*G+this.aY}return Q.set(X,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class rZ extends x9{constructor(J,Z,Q,W,Y,H){super(J,Z,Q,Q,W,Y,H);this.isArcCurve=!0,this.type="ArcCurve"}}function UJ(){let J=0,Z=0,Q=0,W=0;function Y(H,K,X,U){J=H,Z=X,Q=-3*H+3*K-2*X-U,W=2*H-2*K+X+U}return{initCatmullRom:function(H,K,X,U,G){Y(K,X,G*(X-H),G*(U-K))},initNonuniformCatmullRom:function(H,K,X,U,G,q,V){let E=(K-H)/G-(X-H)/(G+q)+(X-K)/q,D=(X-K)/q-(U-K)/(q+V)+(U-X)/V;E*=q,D*=q,Y(K,X,E,D)},calc:function(H){let K=H*H,X=K*H;return J+Z*H+Q*K+W*X}}}var I9=new P,x7=new UJ,_7=new UJ,g7=new UJ;class _9 extends Q6{constructor(J=[],Z=!1,Q="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Z,this.curveType=Q,this.tension=W}getPoint(J,Z=new P){let Q=Z,W=this.points,Y=W.length,H=(Y-(this.closed?0:1))*J,K=Math.floor(H),X=H-K;if(this.closed)K+=K>0?0:(Math.floor(Math.abs(K)/Y)+1)*Y;else if(X===0&&K===Y-1)K=Y-2,X=1;let U,G;if(this.closed||K>0)U=W[(K-1)%Y];else I9.subVectors(W[0],W[1]).add(W[0]),U=I9;let q=W[K%Y],V=W[(K+1)%Y];if(this.closed||K+2<Y)G=W[(K+2)%Y];else I9.subVectors(W[Y-1],W[Y-2]).add(W[Y-1]),G=I9;if(this.curveType==="centripetal"||this.curveType==="chordal"){let E=this.curveType==="chordal"?0.5:0.25,D=Math.pow(U.distanceToSquared(q),E),O=Math.pow(q.distanceToSquared(V),E),R=Math.pow(V.distanceToSquared(G),E);if(O<0.0001)O=1;if(D<0.0001)D=O;if(R<0.0001)R=O;x7.initNonuniformCatmullRom(U.x,q.x,V.x,G.x,D,O,R),_7.initNonuniformCatmullRom(U.y,q.y,V.y,G.y,D,O,R),g7.initNonuniformCatmullRom(U.z,q.z,V.z,G.z,D,O,R)}else if(this.curveType==="catmullrom")x7.initCatmullRom(U.x,q.x,V.x,G.x,this.tension),_7.initCatmullRom(U.y,q.y,V.y,G.y,this.tension),g7.initCatmullRom(U.z,q.z,V.z,G.z,this.tension);return Q.set(x7.calc(X),_7.calc(X),g7.calc(X)),Q}copy(J){super.copy(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Z=0,Q=this.points.length;Z<Q;Z++){let W=this.points[Z];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(new P().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function RZ(J,Z,Q,W,Y){let H=(W-Z)*0.5,K=(Y-Q)*0.5,X=J*J,U=J*X;return(2*Q-2*W+H+K)*U+(-3*Q+3*W-2*H-K)*X+H*J+Q}function NU(J,Z){let Q=1-J;return Q*Q*Z}function OU(J,Z){return 2*(1-J)*J*Z}function RU(J,Z){return J*J*Z}function S8(J,Z,Q,W){return NU(J,Z)+OU(J,Q)+RU(J,W)}function MU(J,Z){let Q=1-J;return Q*Q*Q*Z}function zU(J,Z){let Q=1-J;return 3*Q*Q*J*Z}function BU(J,Z){return 3*(1-J)*J*J*Z}function AU(J,Z){return J*J*J*Z}function v8(J,Z,Q,W,Y){return MU(J,Z)+zU(J,Q)+BU(J,W)+AU(J,Y)}class GJ extends Q6{constructor(J=new F0,Z=new F0,Q=new F0,W=new F0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Z,this.v2=Q,this.v3=W}getPoint(J,Z=new F0){let Q=Z,W=this.v0,Y=this.v1,H=this.v2,K=this.v3;return Q.set(v8(J,W.x,Y.x,H.x,K.x),v8(J,W.y,Y.y,H.y,K.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class aZ extends Q6{constructor(J=new P,Z=new P,Q=new P,W=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Z,this.v2=Q,this.v3=W}getPoint(J,Z=new P){let Q=Z,W=this.v0,Y=this.v1,H=this.v2,K=this.v3;return Q.set(v8(J,W.x,Y.x,H.x,K.x),v8(J,W.y,Y.y,H.y,K.y),v8(J,W.z,Y.z,H.z,K.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class VJ extends Q6{constructor(J=new F0,Z=new F0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Z}getPoint(J,Z=new F0){let Q=Z;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,Z){return this.getPoint(J,Z)}getTangent(J,Z=new F0){return Z.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Z){return this.getTangent(J,Z)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class tZ extends Q6{constructor(J=new P,Z=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Z}getPoint(J,Z=new P){let Q=Z;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,Z){return this.getPoint(J,Z)}getTangent(J,Z=new P){return Z.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Z){return this.getTangent(J,Z)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class qJ extends Q6{constructor(J=new F0,Z=new F0,Q=new F0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Z,this.v2=Q}getPoint(J,Z=new F0){let Q=Z,W=this.v0,Y=this.v1,H=this.v2;return Q.set(S8(J,W.x,Y.x,H.x),S8(J,W.y,Y.y,H.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class EJ extends Q6{constructor(J=new P,Z=new P,Q=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Z,this.v2=Q}getPoint(J,Z=new P){let Q=Z,W=this.v0,Y=this.v1,H=this.v2;return Q.set(S8(J,W.x,Y.x,H.x),S8(J,W.y,Y.y,H.y),S8(J,W.z,Y.z,H.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class FJ extends Q6{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Z=new F0){let Q=Z,W=this.points,Y=(W.length-1)*J,H=Math.floor(Y),K=Y-H,X=W[H===0?H:H-1],U=W[H],G=W[H>W.length-2?W.length-1:H+1],q=W[H>W.length-3?W.length-1:H+2];return Q.set(RZ(K,X.x,U.x,G.x,q.x),RZ(K,X.y,U.y,G.y,q.y)),Q}copy(J){super.copy(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Z=0,Q=this.points.length;Z<Q;Z++){let W=this.points[Z];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(new F0().fromArray(W))}return this}}var n7=Object.freeze({__proto__:null,ArcCurve:rZ,CatmullRomCurve3:_9,CubicBezierCurve:GJ,CubicBezierCurve3:aZ,EllipseCurve:x9,LineCurve:VJ,LineCurve3:tZ,QuadraticBezierCurve:qJ,QuadraticBezierCurve3:EJ,SplineCurve:FJ});class eZ extends Q6{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Z=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Z)){let Q=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new n7[Q](Z,J))}return this}getPoint(J,Z){let Q=J*this.getLength(),W=this.getCurveLengths(),Y=0;while(Y<W.length){if(W[Y]>=Q){let H=W[Y]-Q,K=this.curves[Y],X=K.getLength(),U=X===0?0:1-H/X;return K.getPointAt(U,Z)}Y++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Z=0;for(let Q=0,W=this.curves.length;Q<W;Q++)Z+=this.curves[Q].getLength(),J.push(Z);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Z=[];for(let Q=0;Q<=J;Q++)Z.push(this.getPoint(Q/J));if(this.autoClose)Z.push(Z[0]);return Z}getPoints(J=12){let Z=[],Q;for(let W=0,Y=this.curves;W<Y.length;W++){let H=Y[W],K=H.isEllipseCurve?J*2:H.isLineCurve||H.isLineCurve3?1:H.isSplineCurve?J*H.points.length:J,X=H.getPoints(K);for(let U=0;U<X.length;U++){let G=X[U];if(Q&&Q.equals(G))continue;Z.push(G),Q=G}}if(this.autoClose&&Z.length>1&&!Z[Z.length-1].equals(Z[0]))Z.push(Z[0]);return Z}copy(J){super.copy(J),this.curves=[];for(let Z=0,Q=J.curves.length;Z<Q;Z++){let W=J.curves[Z];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Z=0,Q=this.curves.length;Z<Q;Z++){let W=this.curves[Z];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Z=0,Q=J.curves.length;Z<Q;Z++){let W=J.curves[Z];this.curves.push(new n7[W.type]().fromJSON(W))}return this}}class w9 extends eZ{constructor(J){super();if(this.type="Path",this.currentPoint=new F0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Z=1,Q=J.length;Z<Q;Z++)this.lineTo(J[Z].x,J[Z].y);return this}moveTo(J,Z){return this.currentPoint.set(J,Z),this}lineTo(J,Z){let Q=new VJ(this.currentPoint.clone(),new F0(J,Z));return this.curves.push(Q),this.currentPoint.set(J,Z),this}quadraticCurveTo(J,Z,Q,W){let Y=new qJ(this.currentPoint.clone(),new F0(J,Z),new F0(Q,W));return this.curves.push(Y),this.currentPoint.set(Q,W),this}bezierCurveTo(J,Z,Q,W,Y,H){let K=new GJ(this.currentPoint.clone(),new F0(J,Z),new F0(Q,W),new F0(Y,H));return this.curves.push(K),this.currentPoint.set(Y,H),this}splineThru(J){let Z=[this.currentPoint.clone()].concat(J),Q=new FJ(Z);return this.curves.push(Q),this.currentPoint.copy(J[J.length-1]),this}arc(J,Z,Q,W,Y,H){let K=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+K,Z+X,Q,W,Y,H),this}absarc(J,Z,Q,W,Y,H){return this.absellipse(J,Z,Q,Q,W,Y,H),this}ellipse(J,Z,Q,W,Y,H,K,X){let U=this.currentPoint.x,G=this.currentPoint.y;return this.absellipse(J+U,Z+G,Q,W,Y,H,K,X),this}absellipse(J,Z,Q,W,Y,H,K,X){let U=new x9(J,Z,Q,W,Y,H,K,X);if(this.curves.length>0){let q=U.getPoint(0);if(!q.equals(this.currentPoint))this.lineTo(q.x,q.y)}this.curves.push(U);let G=U.getPoint(1);return this.currentPoint.copy(G),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class DJ extends x5{constructor(J=[new F0(0,-0.5),new F0(0.5,0),new F0(0,0.5)],Z=12,Q=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Z,phiStart:Q,phiLength:W},Z=Math.floor(Z),W=C5(W,0,Math.PI*2);let Y=[],H=[],K=[],X=[],U=[],G=1/Z,q=new P,V=new F0,E=new P,D=new P,O=new P,R=0,N=0;for(let F=0;F<=J.length-1;F++)switch(F){case 0:R=J[F+1].x-J[F].x,N=J[F+1].y-J[F].y,E.x=N*1,E.y=-R,E.z=N*0,O.copy(E),E.normalize(),X.push(E.x,E.y,E.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:R=J[F+1].x-J[F].x,N=J[F+1].y-J[F].y,E.x=N*1,E.y=-R,E.z=N*0,D.copy(E),E.x+=O.x,E.y+=O.y,E.z+=O.z,E.normalize(),X.push(E.x,E.y,E.z),O.copy(D)}for(let F=0;F<=Z;F++){let B=Q+F*G*W,M=Math.sin(B),C=Math.cos(B);for(let w=0;w<=J.length-1;w++){q.x=J[w].x*M,q.y=J[w].y,q.z=J[w].x*C,H.push(q.x,q.y,q.z),V.x=F/Z,V.y=w/(J.length-1),K.push(V.x,V.y);let L=X[3*w+0]*M,f=X[3*w+1],p=X[3*w+0]*C;U.push(L,f,p)}}for(let F=0;F<Z;F++)for(let B=0;B<J.length-1;B++){let M=B+F*J.length,C=M,w=M+J.length,L=M+J.length+1,f=M+1;Y.push(C,w,f),Y.push(L,f,w)}this.setIndex(Y),this.setAttribute("position",new e0(H,3)),this.setAttribute("uv",new e0(K,2)),this.setAttribute("normal",new e0(U,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new DJ(J.points,J.segments,J.phiStart,J.phiLength)}}class g9 extends DJ{constructor(J=1,Z=1,Q=4,W=8){let Y=new w9;Y.absarc(0,-Z/2,J,Math.PI*1.5,0),Y.absarc(0,Z/2,J,0,Math.PI*0.5);super(Y.getPoints(Q),W);this.type="CapsuleGeometry",this.parameters={radius:J,length:Z,capSegments:Q,radialSegments:W}}static fromJSON(J){return new g9(J.radius,J.length,J.capSegments,J.radialSegments)}}class p9 extends x5{constructor(J=1,Z=32,Q=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Z,thetaStart:Q,thetaLength:W},Z=Math.max(3,Z);let Y=[],H=[],K=[],X=[],U=new P,G=new F0;H.push(0,0,0),K.push(0,0,1),X.push(0.5,0.5);for(let q=0,V=3;q<=Z;q++,V+=3){let E=Q+q/Z*W;U.x=J*Math.cos(E),U.y=J*Math.sin(E),H.push(U.x,U.y,U.z),K.push(0,0,1),G.x=(H[V]/J+1)/2,G.y=(H[V+1]/J+1)/2,X.push(G.x,G.y)}for(let q=1;q<=Z;q++)Y.push(q,q+1,0);this.setIndex(Y),this.setAttribute("position",new e0(H,3)),this.setAttribute("normal",new e0(K,3)),this.setAttribute("uv",new e0(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class L5 extends x5{constructor(J=1,Z=1,Q=1,W=32,Y=1,H=!1,K=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Z,height:Q,radialSegments:W,heightSegments:Y,openEnded:H,thetaStart:K,thetaLength:X};let U=this;W=Math.floor(W),Y=Math.floor(Y);let G=[],q=[],V=[],E=[],D=0,O=[],R=Q/2,N=0;if(F(),H===!1){if(J>0)B(!0);if(Z>0)B(!1)}this.setIndex(G),this.setAttribute("position",new e0(q,3)),this.setAttribute("normal",new e0(V,3)),this.setAttribute("uv",new e0(E,2));function F(){let M=new P,C=new P,w=0,L=(Z-J)/Q;for(let f=0;f<=Y;f++){let p=[],A=f/Y,k=A*(Z-J)+J;for(let v=0;v<=W;v++){let n=v/W,i=n*X+K,T=Math.sin(i),x=Math.cos(i);C.x=k*T,C.y=-A*Q+R,C.z=k*x,q.push(C.x,C.y,C.z),M.set(T,L,x).normalize(),V.push(M.x,M.y,M.z),E.push(n,1-A),p.push(D++)}O.push(p)}for(let f=0;f<W;f++)for(let p=0;p<Y;p++){let A=O[p][f],k=O[p+1][f],v=O[p+1][f+1],n=O[p][f+1];G.push(A,k,n),G.push(k,v,n),w+=6}U.addGroup(N,w,0),N+=w}function B(M){let C=D,w=new F0,L=new P,f=0,p=M===!0?J:Z,A=M===!0?1:-1;for(let v=1;v<=W;v++)q.push(0,R*A,0),V.push(0,A,0),E.push(0.5,0.5),D++;let k=D;for(let v=0;v<=W;v++){let i=v/W*X+K,T=Math.cos(i),x=Math.sin(i);L.x=p*x,L.y=R*A,L.z=p*T,q.push(L.x,L.y,L.z),V.push(0,A,0),w.x=T*0.5+0.5,w.y=x*0.5*A+0.5,E.push(w.x,w.y),D++}for(let v=0;v<W;v++){let n=C+v,i=k+v;if(M===!0)G.push(i,i+1,n);else G.push(i+1,i,n);f+=3}U.addGroup(N,f,M===!0?1:2),N+=f}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L5(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class m9 extends L5{constructor(J=1,Z=1,Q=32,W=1,Y=!1,H=0,K=Math.PI*2){super(0,J,Z,Q,W,Y,H,K);this.type="ConeGeometry",this.parameters={radius:J,height:Z,radialSegments:Q,heightSegments:W,openEnded:Y,thetaStart:H,thetaLength:K}}static fromJSON(J){return new m9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class l9 extends w9{constructor(J){super(J);this.uuid=V8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Z=[];for(let Q=0,W=this.holes.length;Q<W;Q++)Z[Q]=this.holes[Q].getPoints(J);return Z}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Z=0,Q=J.holes.length;Z<Q;Z++){let W=J.holes[Z];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Z=0,Q=this.holes.length;Z<Q;Z++){let W=this.holes[Z];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Z=0,Q=J.holes.length;Z<Q;Z++){let W=J.holes[Z];this.holes.push(new w9().fromJSON(W))}return this}}var IU={triangulate:function(J,Z,Q=2){let W=Z&&Z.length,Y=W?Z[0]*Q:J.length,H=JQ(J,0,Y,Q,!0),K=[];if(!H||H.next===H.prev)return K;let X,U,G,q,V,E,D;if(W)H=PU(J,Z,H,Q);if(J.length>80*Q){X=G=J[0],U=q=J[1];for(let O=Q;O<Y;O+=Q){if(V=J[O],E=J[O+1],V<X)X=V;if(E<U)U=E;if(V>G)G=V;if(E>q)q=E}D=Math.max(G-X,q-U),D=D!==0?32767/D:0}return b8(H,K,Q,X,U,D,0),K}};function JQ(J,Z,Q,W,Y){let H,K;if(Y===_U(J,Z,Q,W)>0)for(H=Z;H<Q;H+=W)K=MZ(H,J[H],J[H+1],K);else for(H=Q-W;H>=Z;H-=W)K=MZ(H,J[H],J[H+1],K);if(K&&u9(K,K.next))h8(K),K=K.next;return K}function x6(J,Z){if(!J)return J;if(!Z)Z=J;let Q=J,W;do if(W=!1,!Q.steiner&&(u9(Q,Q.next)||q5(Q.prev,Q,Q.next)===0)){if(h8(Q),Q=Z=Q.prev,Q===Q.next)break;W=!0}else Q=Q.next;while(W||Q!==Z);return Z}function b8(J,Z,Q,W,Y,H,K){if(!J)return;if(!K&&H)fU(J,W,Y,H);let X=J,U,G;while(J.prev!==J.next){if(U=J.prev,G=J.next,H?CU(J,W,Y,H):$U(J)){Z.push(U.i/Q|0),Z.push(J.i/Q|0),Z.push(G.i/Q|0),h8(J),J=G.next,X=G.next;continue}if(J=G,J===X){if(!K)b8(x6(J),Z,Q,W,Y,H,1);else if(K===1)J=kU(x6(J),Z,Q),b8(J,Z,Q,W,Y,H,2);else if(K===2)LU(J,Z,Q,W,Y,H);break}}}function $U(J){let Z=J.prev,Q=J,W=J.next;if(q5(Z,Q,W)>=0)return!1;let Y=Z.x,H=Q.x,K=W.x,X=Z.y,U=Q.y,G=W.y,q=Y<H?Y<K?Y:K:H<K?H:K,V=X<U?X<G?X:G:U<G?U:G,E=Y>H?Y>K?Y:K:H>K?H:K,D=X>U?X>G?X:G:U>G?U:G,O=W.next;while(O!==Z){if(O.x>=q&&O.x<=E&&O.y>=V&&O.y<=D&&K8(Y,X,H,U,K,G,O.x,O.y)&&q5(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function CU(J,Z,Q,W){let Y=J.prev,H=J,K=J.next;if(q5(Y,H,K)>=0)return!1;let X=Y.x,U=H.x,G=K.x,q=Y.y,V=H.y,E=K.y,D=X<U?X<G?X:G:U<G?U:G,O=q<V?q<E?q:E:V<E?V:E,R=X>U?X>G?X:G:U>G?U:G,N=q>V?q>E?q:E:V>E?V:E,F=s7(D,O,Z,Q,W),B=s7(R,N,Z,Q,W),M=J.prevZ,C=J.nextZ;while(M&&M.z>=F&&C&&C.z<=B){if(M.x>=D&&M.x<=R&&M.y>=O&&M.y<=N&&M!==Y&&M!==K&&K8(X,q,U,V,G,E,M.x,M.y)&&q5(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,C.x>=D&&C.x<=R&&C.y>=O&&C.y<=N&&C!==Y&&C!==K&&K8(X,q,U,V,G,E,C.x,C.y)&&q5(C.prev,C,C.next)>=0)return!1;C=C.nextZ}while(M&&M.z>=F){if(M.x>=D&&M.x<=R&&M.y>=O&&M.y<=N&&M!==Y&&M!==K&&K8(X,q,U,V,G,E,M.x,M.y)&&q5(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(C&&C.z<=B){if(C.x>=D&&C.x<=R&&C.y>=O&&C.y<=N&&C!==Y&&C!==K&&K8(X,q,U,V,G,E,C.x,C.y)&&q5(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function kU(J,Z,Q){let W=J;do{let Y=W.prev,H=W.next.next;if(!u9(Y,H)&&ZQ(Y,W,W.next,H)&&j8(Y,H)&&j8(H,Y))Z.push(Y.i/Q|0),Z.push(W.i/Q|0),Z.push(H.i/Q|0),h8(W),h8(W.next),W=J=H;W=W.next}while(W!==J);return x6(W)}function LU(J,Z,Q,W,Y,H){let K=J;do{let X=K.next.next;while(X!==K.prev){if(K.i!==X.i&&hU(K,X)){let U=QQ(K,X);K=x6(K,K.next),U=x6(U,U.next),b8(K,Z,Q,W,Y,H,0),b8(U,Z,Q,W,Y,H,0);return}X=X.next}K=K.next}while(K!==J)}function PU(J,Z,Q,W){let Y=[],H,K,X,U,G;for(H=0,K=Z.length;H<K;H++){if(X=Z[H]*W,U=H<K-1?Z[H+1]*W:J.length,G=JQ(J,X,U,W,!1),G===G.next)G.steiner=!0;Y.push(jU(G))}Y.sort(wU);for(H=0;H<Y.length;H++)Q=TU(Y[H],Q);return Q}function wU(J,Z){return J.x-Z.x}function TU(J,Z){let Q=SU(J,Z);if(!Q)return Z;let W=QQ(Q,J);return x6(W,W.next),x6(Q,Q.next)}function SU(J,Z){let Q=Z,W=-1/0,Y,H=J.x,K=J.y;do{if(K<=Q.y&&K>=Q.next.y&&Q.next.y!==Q.y){let E=Q.x+(K-Q.y)*(Q.next.x-Q.x)/(Q.next.y-Q.y);if(E<=H&&E>W){if(W=E,Y=Q.x<Q.next.x?Q:Q.next,E===H)return Y}}Q=Q.next}while(Q!==Z);if(!Y)return null;let X=Y,U=Y.x,G=Y.y,q=1/0,V;Q=Y;do{if(H>=Q.x&&Q.x>=U&&H!==Q.x&&K8(K<G?H:W,K,U,G,K<G?W:H,K,Q.x,Q.y)){if(V=Math.abs(K-Q.y)/(H-Q.x),j8(Q,J)&&(V<q||V===q&&(Q.x>Y.x||Q.x===Y.x&&vU(Y,Q))))Y=Q,q=V}Q=Q.next}while(Q!==X);return Y}function vU(J,Z){return q5(J.prev,J,Z.prev)<0&&q5(Z.next,J,J.next)<0}function fU(J,Z,Q,W){let Y=J;do{if(Y.z===0)Y.z=s7(Y.x,Y.y,Z,Q,W);Y.prevZ=Y.prev,Y.nextZ=Y.next,Y=Y.next}while(Y!==J);Y.prevZ.nextZ=null,Y.prevZ=null,bU(Y)}function bU(J){let Z,Q,W,Y,H,K,X,U,G=1;do{Q=J,J=null,H=null,K=0;while(Q){K++,W=Q,X=0;for(Z=0;Z<G;Z++)if(X++,W=W.nextZ,!W)break;U=G;while(X>0||U>0&&W){if(X!==0&&(U===0||!W||Q.z<=W.z))Y=Q,Q=Q.nextZ,X--;else Y=W,W=W.nextZ,U--;if(H)H.nextZ=Y;else J=Y;Y.prevZ=H,H=Y}Q=W}H.nextZ=null,G*=2}while(K>1);return J}function s7(J,Z,Q,W,Y){return J=(J-Q)*Y|0,Z=(Z-W)*Y|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Z=(Z|Z<<8)&16711935,Z=(Z|Z<<4)&252645135,Z=(Z|Z<<2)&858993459,Z=(Z|Z<<1)&1431655765,J|Z<<1}function jU(J){let Z=J,Q=J;do{if(Z.x<Q.x||Z.x===Q.x&&Z.y<Q.y)Q=Z;Z=Z.next}while(Z!==J);return Q}function K8(J,Z,Q,W,Y,H,K,X){return(Y-K)*(Z-X)>=(J-K)*(H-X)&&(J-K)*(W-X)>=(Q-K)*(Z-X)&&(Q-K)*(H-X)>=(Y-K)*(W-X)}function hU(J,Z){return J.next.i!==Z.i&&J.prev.i!==Z.i&&!yU(J,Z)&&(j8(J,Z)&&j8(Z,J)&&xU(J,Z)&&(q5(J.prev,J,Z.prev)||q5(J,Z.prev,Z))||u9(J,Z)&&q5(J.prev,J,J.next)>0&&q5(Z.prev,Z,Z.next)>0)}function q5(J,Z,Q){return(Z.y-J.y)*(Q.x-Z.x)-(Z.x-J.x)*(Q.y-Z.y)}function u9(J,Z){return J.x===Z.x&&J.y===Z.y}function ZQ(J,Z,Q,W){let Y=C9(q5(J,Z,Q)),H=C9(q5(J,Z,W)),K=C9(q5(Q,W,J)),X=C9(q5(Q,W,Z));if(Y!==H&&K!==X)return!0;if(Y===0&&$9(J,Q,Z))return!0;if(H===0&&$9(J,W,Z))return!0;if(K===0&&$9(Q,J,W))return!0;if(X===0&&$9(Q,Z,W))return!0;return!1}function $9(J,Z,Q){return Z.x<=Math.max(J.x,Q.x)&&Z.x>=Math.min(J.x,Q.x)&&Z.y<=Math.max(J.y,Q.y)&&Z.y>=Math.min(J.y,Q.y)}function C9(J){return J>0?1:J<0?-1:0}function yU(J,Z){let Q=J;do{if(Q.i!==J.i&&Q.next.i!==J.i&&Q.i!==Z.i&&Q.next.i!==Z.i&&ZQ(Q,Q.next,J,Z))return!0;Q=Q.next}while(Q!==J);return!1}function j8(J,Z){return q5(J.prev,J,J.next)<0?q5(J,Z,J.next)>=0&&q5(J,J.prev,Z)>=0:q5(J,Z,J.prev)<0||q5(J,J.next,Z)<0}function xU(J,Z){let Q=J,W=!1,Y=(J.x+Z.x)/2,H=(J.y+Z.y)/2;do{if(Q.y>H!==Q.next.y>H&&Q.next.y!==Q.y&&Y<(Q.next.x-Q.x)*(H-Q.y)/(Q.next.y-Q.y)+Q.x)W=!W;Q=Q.next}while(Q!==J);return W}function QQ(J,Z){let Q=new i7(J.i,J.x,J.y),W=new i7(Z.i,Z.x,Z.y),Y=J.next,H=Z.prev;return J.next=Z,Z.prev=J,Q.next=Y,Y.prev=Q,W.next=Q,Q.prev=W,H.next=W,W.prev=H,W}function MZ(J,Z,Q,W){let Y=new i7(J,Z,Q);if(!W)Y.prev=Y,Y.next=Y;else Y.next=W.next,Y.prev=W,W.next.prev=Y,W.next=Y;return Y}function h8(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function i7(J,Z,Q){this.i=J,this.x=Z,this.y=Q,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _U(J,Z,Q,W){let Y=0;for(let H=Z,K=Q-W;H<Q;H+=W)Y+=(J[K]-J[H])*(J[H+1]+J[K+1]),K=H;return Y}class f8{static area(J){let Z=J.length,Q=0;for(let W=Z-1,Y=0;Y<Z;W=Y++)Q+=J[W].x*J[Y].y-J[Y].x*J[W].y;return Q*0.5}static isClockWise(J){return f8.area(J)<0}static triangulateShape(J,Z){let Q=[],W=[],Y=[];zZ(J),BZ(Q,J);let H=J.length;Z.forEach(zZ);for(let X=0;X<Z.length;X++)W.push(H),H+=Z[X].length,BZ(Q,Z[X]);let K=IU.triangulate(Q,W);for(let X=0;X<K.length;X+=3)Y.push(K.slice(X,X+3));return Y}}function zZ(J){let Z=J.length;if(Z>2&&J[Z-1].equals(J[0]))J.pop()}function BZ(J,Z){for(let Q=0;Q<Z.length;Q++)J.push(Z[Q].x),J.push(Z[Q].y)}class d9 extends x5{constructor(J=0.5,Z=1,Q=32,W=1,Y=0,H=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Z,thetaSegments:Q,phiSegments:W,thetaStart:Y,thetaLength:H},Q=Math.max(3,Q),W=Math.max(1,W);let K=[],X=[],U=[],G=[],q=J,V=(Z-J)/W,E=new P,D=new F0;for(let O=0;O<=W;O++){for(let R=0;R<=Q;R++){let N=Y+R/Q*H;E.x=q*Math.cos(N),E.y=q*Math.sin(N),X.push(E.x,E.y,E.z),U.push(0,0,1),D.x=(E.x/Z+1)/2,D.y=(E.y/Z+1)/2,G.push(D.x,D.y)}q+=V}for(let O=0;O<W;O++){let R=O*(Q+1);for(let N=0;N<Q;N++){let F=N+R,B=F,M=F+Q+1,C=F+Q+2,w=F+1;K.push(B,M,w),K.push(M,C,w)}}this.setIndex(K),this.setAttribute("position",new e0(X,3)),this.setAttribute("normal",new e0(U,3)),this.setAttribute("uv",new e0(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new d9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class c9 extends x5{constructor(J=new l9([new F0(0,0.5),new F0(-0.5,-0.5),new F0(0.5,-0.5)]),Z=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Z};let Q=[],W=[],Y=[],H=[],K=0,X=0;if(Array.isArray(J)===!1)U(J);else for(let G=0;G<J.length;G++)U(J[G]),this.addGroup(K,X,G),K+=X,X=0;this.setIndex(Q),this.setAttribute("position",new e0(W,3)),this.setAttribute("normal",new e0(Y,3)),this.setAttribute("uv",new e0(H,2));function U(G){let q=W.length/3,V=G.extractPoints(Z),E=V.shape,D=V.holes;if(f8.isClockWise(E)===!1)E=E.reverse();for(let R=0,N=D.length;R<N;R++){let F=D[R];if(f8.isClockWise(F)===!0)D[R]=F.reverse()}let O=f8.triangulateShape(E,D);for(let R=0,N=D.length;R<N;R++){let F=D[R];E=E.concat(F)}for(let R=0,N=E.length;R<N;R++){let F=E[R];W.push(F.x,F.y,0),Y.push(0,0,1),H.push(F.x,F.y)}for(let R=0,N=O.length;R<N;R++){let F=O[R],B=F[0]+q,M=F[1]+q,C=F[2]+q;Q.push(B,M,C),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Z=this.parameters.shapes;return gU(Z,J)}static fromJSON(J,Z){let Q=[];for(let W=0,Y=J.shapes.length;W<Y;W++){let H=Z[J.shapes[W]];Q.push(H)}return new c9(Q,J.curveSegments)}}function gU(J,Z){if(Z.shapes=[],Array.isArray(J))for(let Q=0,W=J.length;Q<W;Q++){let Y=J[Q];Z.shapes.push(Y.uuid)}else Z.shapes.push(J.uuid);return Z}class d5 extends x5{constructor(J=1,Z=32,Q=16,W=0,Y=Math.PI*2,H=0,K=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Z,heightSegments:Q,phiStart:W,phiLength:Y,thetaStart:H,thetaLength:K},Z=Math.max(3,Math.floor(Z)),Q=Math.max(2,Math.floor(Q));let X=Math.min(H+K,Math.PI),U=0,G=[],q=new P,V=new P,E=[],D=[],O=[],R=[];for(let N=0;N<=Q;N++){let F=[],B=N/Q,M=0;if(N===0&&H===0)M=0.5/Z;else if(N===Q&&X===Math.PI)M=-0.5/Z;for(let C=0;C<=Z;C++){let w=C/Z;q.x=-J*Math.cos(W+w*Y)*Math.sin(H+B*K),q.y=J*Math.cos(H+B*K),q.z=J*Math.sin(W+w*Y)*Math.sin(H+B*K),D.push(q.x,q.y,q.z),V.copy(q).normalize(),O.push(V.x,V.y,V.z),R.push(w+M,1-B),F.push(U++)}G.push(F)}for(let N=0;N<Q;N++)for(let F=0;F<Z;F++){let B=G[N][F+1],M=G[N][F],C=G[N+1][F],w=G[N+1][F+1];if(N!==0||H>0)E.push(B,M,w);if(N!==Q-1||X<Math.PI)E.push(M,C,w)}this.setIndex(E),this.setAttribute("position",new e0(D,3)),this.setAttribute("normal",new e0(O,3)),this.setAttribute("uv",new e0(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new d5(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class x8 extends x5{constructor(J=1,Z=0.4,Q=12,W=48,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Z,radialSegments:Q,tubularSegments:W,arc:Y},Q=Math.floor(Q),W=Math.floor(W);let H=[],K=[],X=[],U=[],G=new P,q=new P,V=new P;for(let E=0;E<=Q;E++)for(let D=0;D<=W;D++){let O=D/W*Y,R=E/Q*Math.PI*2;q.x=(J+Z*Math.cos(R))*Math.cos(O),q.y=(J+Z*Math.cos(R))*Math.sin(O),q.z=Z*Math.sin(R),K.push(q.x,q.y,q.z),G.x=J*Math.cos(O),G.y=J*Math.sin(O),V.subVectors(q,G).normalize(),X.push(V.x,V.y,V.z),U.push(D/W),U.push(E/Q)}for(let E=1;E<=Q;E++)for(let D=1;D<=W;D++){let O=(W+1)*E+D-1,R=(W+1)*(E-1)+D-1,N=(W+1)*(E-1)+D,F=(W+1)*E+D;H.push(O,R,F),H.push(R,N,F)}this.setIndex(H),this.setAttribute("position",new e0(K,3)),this.setAttribute("normal",new e0(X,3)),this.setAttribute("uv",new e0(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x8(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}class n9 extends x5{constructor(J=new EJ(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),Z=64,Q=1,W=8,Y=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Z,radius:Q,radialSegments:W,closed:Y};let H=J.computeFrenetFrames(Z,Y);this.tangents=H.tangents,this.normals=H.normals,this.binormals=H.binormals;let K=new P,X=new P,U=new F0,G=new P,q=[],V=[],E=[],D=[];O(),this.setIndex(D),this.setAttribute("position",new e0(q,3)),this.setAttribute("normal",new e0(V,3)),this.setAttribute("uv",new e0(E,2));function O(){for(let B=0;B<Z;B++)R(B);R(Y===!1?Z:0),F(),N()}function R(B){G=J.getPointAt(B/Z,G);let M=H.normals[B],C=H.binormals[B];for(let w=0;w<=W;w++){let L=w/W*Math.PI*2,f=Math.sin(L),p=-Math.cos(L);X.x=p*M.x+f*C.x,X.y=p*M.y+f*C.y,X.z=p*M.z+f*C.z,X.normalize(),V.push(X.x,X.y,X.z),K.x=G.x+Q*X.x,K.y=G.y+Q*X.y,K.z=G.z+Q*X.z,q.push(K.x,K.y,K.z)}}function N(){for(let B=1;B<=Z;B++)for(let M=1;M<=W;M++){let C=(W+1)*(B-1)+(M-1),w=(W+1)*B+(M-1),L=(W+1)*B+M,f=(W+1)*(B-1)+M;D.push(C,w,f),D.push(w,L,f)}}function F(){for(let B=0;B<=Z;B++)for(let M=0;M<=W;M++)U.x=B/Z,U.y=M/W,E.push(U.x,U.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new n9(new n7[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}class N0 extends E8{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new g0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new g0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class _8 extends N0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new F0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return C5(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Z){this.ior=(1+0.4*Z)/(1-0.4*Z)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new g0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new g0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new g0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}function k9(J,Z,Q){if(!J||!Q&&J.constructor===Z)return J;if(typeof Z.BYTES_PER_ELEMENT==="number")return new Z(J);return Array.prototype.slice.call(J)}function pU(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class g8{constructor(J,Z,Q,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Z.constructor(Q),this.sampleValues=Z,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Z=this.parameterPositions,Q=this._cachedIndex,W=Z[Q],Y=Z[Q-1];Q:{J:{let H;Z:{W:if(!(J<W)){for(let K=Q+2;;){if(W===void 0){if(J<Y)break W;return Q=Z.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===K)break;if(Y=W,W=Z[++Q],J<W)break J}H=Z.length;break Z}if(!(J>=Y)){let K=Z[1];if(J<K)Q=2,Y=K;for(let X=Q-2;;){if(Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===X)break;if(W=Y,Y=Z[--Q-1],J>=Y)break J}H=Q,Q=0;break Z}break Q}while(Q<H){let K=Q+H>>>1;if(J<Z[K])H=K;else Q=K+1}if(W=Z[Q],Y=Z[Q-1],Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return Q=Z.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,Y,W)}return this.interpolate_(Q,Y,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Z=this.resultBuffer,Q=this.sampleValues,W=this.valueSize,Y=J*W;for(let H=0;H!==W;++H)Z[H]=Q[Y+H];return Z}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class WQ extends g8{constructor(J,Z,Q,W){super(J,Z,Q,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Z,Q){let W=this.parameterPositions,Y=J-2,H=J+1,K=W[Y],X=W[H];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:Y=J,K=2*Z-Q;break;case 2402:Y=W.length-2,K=Z+W[Y]-W[Y+1];break;default:Y=J,K=Q}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*Q-Z;break;case 2402:H=1,X=Q+W[1]-W[0];break;default:H=J-1,X=Z}let U=(Q-Z)*0.5,G=this.valueSize;this._weightPrev=U/(Z-K),this._weightNext=U/(X-Q),this._offsetPrev=Y*G,this._offsetNext=H*G}interpolate_(J,Z,Q,W){let Y=this.resultBuffer,H=this.sampleValues,K=this.valueSize,X=J*K,U=X-K,G=this._offsetPrev,q=this._offsetNext,V=this._weightPrev,E=this._weightNext,D=(Q-Z)/(W-Z),O=D*D,R=O*D,N=-V*R+2*V*O-V*D,F=(1+V)*R+(-1.5-2*V)*O+(-0.5+V)*D+1,B=(-1-E)*R+(1.5+E)*O+0.5*D,M=E*R-E*O;for(let C=0;C!==K;++C)Y[C]=N*H[G+C]+F*H[U+C]+B*H[X+C]+M*H[q+C];return Y}}class YQ extends g8{constructor(J,Z,Q,W){super(J,Z,Q,W)}interpolate_(J,Z,Q,W){let Y=this.resultBuffer,H=this.sampleValues,K=this.valueSize,X=J*K,U=X-K,G=(Q-Z)/(W-Z),q=1-G;for(let V=0;V!==K;++V)Y[V]=H[U+V]*q+H[X+V]*G;return Y}}class HQ extends g8{constructor(J,Z,Q,W){super(J,Z,Q,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class G6{constructor(J,Z,Q,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Z===void 0||Z.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=k9(Z,this.TimeBufferType),this.values=k9(Q,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Z=J.constructor,Q;if(Z.toJSON!==this.toJSON)Q=Z.toJSON(J);else{Q={name:J.name,times:k9(J.times,Array),values:k9(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)Q.interpolation=W}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new HQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new YQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new WQ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Z;switch(J){case 2300:Z=this.InterpolantFactoryMethodDiscrete;break;case 2301:Z=this.InterpolantFactoryMethodLinear;break;case 2302:Z=this.InterpolantFactoryMethodSmooth;break}if(Z===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=Z,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Z=this.times;for(let Q=0,W=Z.length;Q!==W;++Q)Z[Q]+=J}return this}scale(J){if(J!==1){let Z=this.times;for(let Q=0,W=Z.length;Q!==W;++Q)Z[Q]*=J}return this}trim(J,Z){let Q=this.times,W=Q.length,Y=0,H=W-1;while(Y!==W&&Q[Y]<J)++Y;while(H!==-1&&Q[H]>Z)--H;if(++H,Y!==0||H!==W){if(Y>=H)H=Math.max(H,1),Y=H-1;let K=this.getValueSize();this.times=Q.slice(Y,H),this.values=this.values.slice(Y*K,H*K)}return this}validate(){let J=!0,Z=this.getValueSize();if(Z-Math.floor(Z)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,W=this.values,Y=Q.length;if(Y===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let K=0;K!==Y;K++){let X=Q[K];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,K,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,K,X,H),J=!1;break}H=X}if(W!==void 0){if(pU(W))for(let K=0,X=W.length;K!==X;++K){let U=W[K];if(isNaN(U)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,K,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Z=this.values.slice(),Q=this.getValueSize(),W=this.getInterpolation()===2302,Y=J.length-1,H=1;for(let K=1;K<Y;++K){let X=!1,U=J[K],G=J[K+1];if(U!==G&&(K!==1||U!==J[0]))if(!W){let q=K*Q,V=q-Q,E=q+Q;for(let D=0;D!==Q;++D){let O=Z[q+D];if(O!==Z[V+D]||O!==Z[E+D]){X=!0;break}}}else X=!0;if(X){if(K!==H){J[H]=J[K];let q=K*Q,V=H*Q;for(let E=0;E!==Q;++E)Z[V+E]=Z[q+E]}++H}}if(Y>0){J[H]=J[Y];for(let K=Y*Q,X=H*Q,U=0;U!==Q;++U)Z[X+U]=Z[K+U];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Z.slice(0,H*Q);else this.times=J,this.values=Z;return this}clone(){let J=this.times.slice(),Z=this.values.slice(),W=new this.constructor(this.name,J,Z);return W.createInterpolant=this.createInterpolant,W}}G6.prototype.TimeBufferType=Float32Array;G6.prototype.ValueBufferType=Float32Array;G6.prototype.DefaultInterpolation=2301;class D8 extends G6{}D8.prototype.ValueTypeName="bool";D8.prototype.ValueBufferType=Array;D8.prototype.DefaultInterpolation=2300;D8.prototype.InterpolantFactoryMethodLinear=void 0;D8.prototype.InterpolantFactoryMethodSmooth=void 0;class XQ extends G6{}XQ.prototype.ValueTypeName="color";class KQ extends G6{}KQ.prototype.ValueTypeName="number";class UQ extends g8{constructor(J,Z,Q,W){super(J,Z,Q,W)}interpolate_(J,Z,Q,W){let Y=this.resultBuffer,H=this.sampleValues,K=this.valueSize,X=(Q-Z)/(W-Z),U=J*K;for(let G=U+K;U!==G;U+=4)g6.slerpFlat(Y,0,H,U-K,H,U,X);return Y}}class s9 extends G6{InterpolantFactoryMethodLinear(J){return new UQ(this.times,this.values,this.getValueSize(),J)}}s9.prototype.ValueTypeName="quaternion";s9.prototype.DefaultInterpolation=2301;s9.prototype.InterpolantFactoryMethodSmooth=void 0;class N8 extends G6{}N8.prototype.ValueTypeName="string";N8.prototype.ValueBufferType=Array;N8.prototype.DefaultInterpolation=2300;N8.prototype.InterpolantFactoryMethodLinear=void 0;N8.prototype.InterpolantFactoryMethodSmooth=void 0;class GQ extends G6{}GQ.prototype.ValueTypeName="vector";class VQ{constructor(J,Z,Q){let W=this,Y=!1,H=0,K=0,X=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Z,this.onError=Q,this.itemStart=function(G){if(K++,Y===!1){if(W.onStart!==void 0)W.onStart(G,H,K)}Y=!0},this.itemEnd=function(G){if(H++,W.onProgress!==void 0)W.onProgress(G,H,K);if(H===K){if(Y=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(G){if(W.onError!==void 0)W.onError(G)},this.resolveURL=function(G){if(X)return X(G);return G},this.setURLModifier=function(G){return X=G,this},this.addHandler=function(G,q){return U.push(G,q),this},this.removeHandler=function(G){let q=U.indexOf(G);if(q!==-1)U.splice(q,2);return this},this.getHandler=function(G){for(let q=0,V=U.length;q<V;q+=2){let E=U[q],D=U[q+1];if(E.global)E.lastIndex=0;if(E.test(G))return D}return null}}}var mU=new VQ;class qQ{constructor(J){this.manager=J!==void 0?J:mU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Z){let Q=this;return new Promise(function(W,Y){Q.load(J,W,Z,Y)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}qQ.DEFAULT_MATERIAL_NAME="__DEFAULT";class p8 extends P5{constructor(J,Z=1){super();this.isLight=!0,this.type="Light",this.color=new g0(J),this.intensity=Z}dispose(){}copy(J,Z){return super.copy(J,Z),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Z=super.toJSON(J);if(Z.object.color=this.color.getHex(),Z.object.intensity=this.intensity,this.groundColor!==void 0)Z.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Z.object.distance=this.distance;if(this.angle!==void 0)Z.object.angle=this.angle;if(this.decay!==void 0)Z.object.decay=this.decay;if(this.penumbra!==void 0)Z.object.penumbra=this.penumbra;if(this.shadow!==void 0)Z.object.shadow=this.shadow.toJSON();return Z}}class NJ extends p8{constructor(J,Z,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(P5.DEFAULT_UP),this.updateMatrix(),this.groundColor=new g0(Z)}copy(J,Z){return super.copy(J,Z),this.groundColor.copy(J.groundColor),this}}var p7=new D5,AZ=new P,IZ=new P;class OJ{constructor(J){this.camera=J,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new F0(512,512),this.map=null,this.mapPass=null,this.matrix=new D5,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new b9,this._frameExtents=new F0(1,1),this._viewportCount=1,this._viewports=[new G5(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Z=this.camera,Q=this.matrix;AZ.setFromMatrixPosition(J.matrixWorld),Z.position.copy(AZ),IZ.setFromMatrixPosition(J.target.matrixWorld),Z.lookAt(IZ),Z.updateMatrixWorld(),p7.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p7),Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Q.multiply(p7)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var $Z=new D5,P8=new P,m7=new P;class EQ extends OJ{constructor(){super(new y5(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new F0(4,2),this._viewportCount=6,this._viewports=[new G5(2,1,1,1),new G5(0,1,1,1),new G5(3,1,1,1),new G5(1,1,1,1),new G5(3,0,1,1),new G5(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(J,Z=0){let Q=this.camera,W=this.matrix,Y=J.distance||Q.far;if(Y!==Q.far)Q.far=Y,Q.updateProjectionMatrix();P8.setFromMatrixPosition(J.matrixWorld),Q.position.copy(P8),m7.copy(Q.position),m7.add(this._cubeDirections[Z]),Q.up.copy(this._cubeUps[Z]),Q.lookAt(m7),Q.updateMatrixWorld(),W.makeTranslation(-P8.x,-P8.y,-P8.z),$Z.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix($Z)}}class O8 extends p8{constructor(J,Z,Q=0,W=2){super(J,Z);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=W,this.shadow=new EQ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Z){return super.copy(J,Z),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class FQ extends OJ{constructor(){super(new YJ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class RJ extends p8{constructor(J,Z){super(J,Z);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(P5.DEFAULT_UP),this.updateMatrix(),this.target=new P5,this.shadow=new FQ}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class MJ extends p8{constructor(J,Z){super(J,Z);this.isAmbientLight=!0,this.type="AmbientLight"}}var zJ="\\[\\]\\.:\\/",lU=new RegExp("["+zJ+"]","g"),BJ="[^"+zJ+"]",uU="[^"+zJ.replace("\\.","")+"]",dU=/((?:WC+[\/:])*)/.source.replace("WC",BJ),cU=/(WCOD+)?/.source.replace("WCOD",uU),nU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",BJ),sU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",BJ),iU=new RegExp("^"+dU+cU+nU+sU+"$"),oU=["material","materials","bones","map"];class DQ{constructor(J,Z,Q){let W=Q||Q5.parseTrackName(Z);this._targetGroup=J,this._bindings=J.subscribe_(Z,W)}getValue(J,Z){this.bind();let Q=this._targetGroup.nCachedObjects_,W=this._bindings[Q];if(W!==void 0)W.getValue(J,Z)}setValue(J,Z){let Q=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Y=Q.length;W!==Y;++W)Q[W].setValue(J,Z)}bind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Q=J.length;Z!==Q;++Z)J[Z].bind()}unbind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Q=J.length;Z!==Q;++Z)J[Z].unbind()}}class Q5{constructor(J,Z,Q){this.path=Z,this.parsedPath=Q||Q5.parseTrackName(Z),this.node=Q5.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Z,Q){if(!(J&&J.isAnimationObjectGroup))return new Q5(J,Z,Q);else return new Q5.Composite(J,Z,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(lU,"")}static parseTrackName(J){let Z=iU.exec(J);if(Z===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:Z[2],objectName:Z[3],objectIndex:Z[4],propertyName:Z[5],propertyIndex:Z[6]},W=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Y=Q.nodeName.substring(W+1);if(oU.indexOf(Y)!==-1)Q.nodeName=Q.nodeName.substring(0,W),Q.objectName=Y}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,Z){if(Z===void 0||Z===""||Z==="."||Z===-1||Z===J.name||Z===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName(Z);if(Q!==void 0)return Q}if(J.children){let Q=function(Y){for(let H=0;H<Y.length;H++){let K=Y[H];if(K.name===Z||K.uuid===Z)return K;let X=Q(K.children);if(X)return X}return null},W=Q(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Z){J[Z]=this.targetObject[this.propertyName]}_getValue_array(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)J[Z++]=Q[W]}_getValue_arrayElement(J,Z){J[Z]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Z){this.resolvedProperty.toArray(J,Z)}_setValue_direct(J,Z){this.targetObject[this.propertyName]=J[Z]}_setValue_direct_setNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)Q[W]=J[Z++]}_setValue_array_setNeedsUpdate(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)Q[W]=J[Z++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)Q[W]=J[Z++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z]}_setValue_arrayElement_setNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Z){this.resolvedProperty.fromArray(J,Z)}_setValue_fromArray_setNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Z){this.bind(),this.getValue(J,Z)}_setValue_unbound(J,Z){this.bind(),this.setValue(J,Z)}bind(){let J=this.node,Z=this.parsedPath,Q=Z.objectName,W=Z.propertyName,Y=Z.propertyIndex;if(!J)J=Q5.findNode(this.rootNode,Z.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let U=Z.objectIndex;switch(Q){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===U){U=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(U!==void 0){if(J[U]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let H=J[W];if(H===void 0){let U=Z.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+U+"."+W+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)K=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)K=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(Y!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Y]!==void 0)Y=J.morphTargetDictionary[Y]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=Y}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Q5.Composite=DQ;Q5.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Q5.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Q5.prototype.GetterByBindingType=[Q5.prototype._getValue_direct,Q5.prototype._getValue_array,Q5.prototype._getValue_arrayElement,Q5.prototype._getValue_toArray];Q5.prototype.SetterByBindingTypeAndVersioning=[[Q5.prototype._setValue_direct,Q5.prototype._setValue_direct_setNeedsUpdate,Q5.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Q5.prototype._setValue_array,Q5.prototype._setValue_array_setNeedsUpdate,Q5.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Q5.prototype._setValue_arrayElement,Q5.prototype._setValue_arrayElement_setNeedsUpdate,Q5.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Q5.prototype._setValue_fromArray,Q5.prototype._setValue_fromArray_setNeedsUpdate,Q5.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zG=new Float32Array(1);class i9{constructor(J,Z,Q=0,W=1/0){this.ray=new e7(J,Z),this.near=Q,this.far=W,this.camera=null,this.layers=new f9,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Z){this.ray.set(J,Z)}setFromCamera(J,Z){if(Z.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Z.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Z).sub(this.ray.origin).normalize(),this.camera=Z;else if(Z.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Z.near+Z.far)/(Z.near-Z.far)).unproject(Z),this.ray.direction.set(0,0,-1).transformDirection(Z.matrixWorld),this.camera=Z;else console.error("THREE.Raycaster: Unsupported camera type: "+Z.type)}intersectObject(J,Z=!0,Q=[]){return o7(J,this,Q,Z),Q.sort(CZ),Q}intersectObjects(J,Z=!0,Q=[]){for(let W=0,Y=J.length;W<Y;W++)o7(J[W],this,Q,Z);return Q.sort(CZ),Q}}function CZ(J,Z){return J.distance-Z.distance}function o7(J,Z,Q,W){if(J.layers.test(Z.layers))J.raycast(Z,Q);if(W===!0){let Y=J.children;for(let H=0,K=Y.length;H<K;H++)o7(Y[H],Z,Q,!0)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="160";var p6=(J,Z,Q)=>Math.min(Q,Math.max(Z,J));var aU=(J)=>J<0.5?2*J*J:1-Math.pow(-2*J+2,2)/2,NQ=[{id:0,key:"ava",height:1.68,shoulder:0.46,hair:"long",skin:13208418,hairColor:2824982,eyes:4861986},{id:1,key:"max",height:1.78,shoulder:0.54,hair:"short",skin:12089941,hairColor:1380886,eyes:3154458},{id:2,key:"rin",height:1.64,shoulder:0.48,hair:"bun",skin:14725514,hairColor:2759448,eyes:3811872}],l8=[3526911,16732067,16757575,7069818,10189823,16743004,15262678,3046911];function m6(J,Z){let Q=document.createElement("canvas");return Q.width=J,Q.height=Z,{canvas:Q,ctx:Q.getContext("2d")}}function tU(J,Z,Q,W){let Y=String(Z||"").split(/\s+/),H=[],K="";for(let X of Y){let U=K?`${K} ${X}`:X;if(J.measureText(U).width>Q&&K){if(H.push(K),K=X,H.length===W)return H[W-1]=`${H[W-1].replace(/[.,;:]$/,"")}…`,H}else K=U}if(K)H.push(K);return H}function c5(J,Z){let Q=J>>16&255,W=J>>8&255,Y=J&255;return`rgba(${Q}, ${W}, ${Y}, ${Z})`}class AJ{constructor(J,Z){this.canvas=J,this.layoutDesks=Z&&Z.desks?Z.desks:[],this.lang="en",this.projects=[],this.focusId=-1,this.mode="cinematic",this.blend=0,this.time=0,this.avatarPos={x:9,z:14.1},this.avatarYaw=Math.PI,this.targetYaw=Math.PI,this.speed=0,this.walkPhase=0,this.cameraOrbit={yaw:0,pitch:0.24,dist:5.6},this.cameraTarget=new P(9,1.15,14.1),this.cameraPos=new P(9,2.4,9),this.panelAnchors=[],this.raycaster=new i9,this.cameraRay=new i9,this.pointer=new F0,this.blockers=[],this.renderer=new h9({canvas:J,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kZ,this.renderer.outputColorSpace=R6,this.renderer.toneMapping=LZ,this.renderer.toneMappingExposure=1.28,this.scene=new KJ,this.scene.background=new g0(329228),this.scene.fog=new y9(395022,0.012),this.camera=new y5(56,1,0.05,120),this.buildLights(),this.buildRoom(),this.buildCity(),this.buildReception(),this.buildLounge(),this.buildDetails(),this.buildDesks(),this.buildAvatar(),this.scene.traverse((Q)=>{if(Q.isMesh&&Q.userData&&Q.userData.blocker)this.blockers.push(Q)}),this.resize()}buildLights(){let J=new NJ(8163263,2761252,0.95);this.scene.add(J);let Z=new MJ(5988736,0.85);this.scene.add(Z);let Q=new RJ(10467071,1.7);Q.position.set(6,11,-4),Q.castShadow=!0,Q.shadow.mapSize.set(2048,2048),Q.shadow.camera.left=-15,Q.shadow.camera.right=15,Q.shadow.camera.top=15,Q.shadow.camera.bottom=-15,Q.shadow.camera.near=1,Q.shadow.camera.far=40,Q.shadow.bias=-0.0006,Q.shadow.normalBias=0.03,this.scene.add(Q);let W=16764826,Y=[[5.2,4.2],[11.2,4.2],[18.4,4.2],[5.2,10.8],[11.2,10.8],[18.4,10.8]];for(let[G,q]of Y){let V=new O8(W,42,15,2);V.position.set(G,3.05,q),this.scene.add(V);let E=new Y0(new j0(2,0.07,0.16),new N0({color:16773590,emissive:16767400,emissiveIntensity:2.4,roughness:0.4}));E.position.set(G,3.34,q),this.scene.add(E);let D=new Y0(new L5(0.01,0.01,0.28,4),new k5({color:1118744}));D.position.set(G,3.46,q),this.scene.add(D)}let H=new O8(7317759,10,18,2);H.position.set(12,2.4,0.6),this.scene.add(H);let K=new O8(16766894,34,18,2);K.position.set(10,3,18.4),this.scene.add(K);let X=new Y0(new j0(1.8,0.06,0.14),new N0({color:16773590,emissive:16767400,emissiveIntensity:2.2,roughness:0.4}));X.position.set(12,3.5,19.6),this.scene.add(X);let U=new O8(10475775,16,10,2);U.position.set(12,2.6,11.6),this.scene.add(U)}buildRoom(){let W=(()=>{let{canvas:k,ctx:v}=m6(256,256);v.fillStyle="#2a2732",v.fillRect(0,0,256,256);for(let i=0;i<2400;i+=1){let T=28+Math.random()*28;v.fillStyle=`rgba(${T+8}, ${T+4}, ${T+14}, 0.5)`,v.fillRect(Math.random()*256,Math.random()*256,1.5,1.5)}v.strokeStyle="rgba(12, 11, 18, 0.5)",v.lineWidth=1;for(let i=0;i<=256;i+=32)v.beginPath(),v.moveTo(i,0),v.lineTo(i,256),v.stroke(),v.beginPath(),v.moveTo(0,i),v.lineTo(256,i),v.stroke();let n=new M6(k);return n.colorSpace=R6,n.wrapS=y8,n.wrapT=y8,n.repeat.set(12,8),n.anisotropy=8,n})(),Y=new Y0(new B5(24,40),new N0({color:16777215,map:W,roughness:0.9,metalness:0.04}));Y.rotation.x=-Math.PI/2,Y.position.set(12,0,12),Y.receiveShadow=!0,this.scene.add(Y);let H=new Y0(new j0(24,0.02,0.1),new N0({color:4868696,metalness:0.4,roughness:0.4}));H.position.set(12,0.01,16),this.scene.add(H);let K=new Y0(new B5(22,3.2),new _8({color:7311296,transparent:!0,opacity:0.08,roughness:0.1,metalness:0.2,side:T9}));K.position.set(12,1.6,23.4),this.scene.add(K);for(let k=0;k<5;k+=1){let v=new Y0(new j0(0.07,3.2,0.07),new N0({color:1315867,roughness:0.5}));v.position.set(1.6+k*20.8/4,1.6,23.4),this.scene.add(v)}let X=new Y0(new B5(3.2,12.4),new N0({color:2828089,roughness:1}));X.rotation.x=-Math.PI/2,X.position.set(12,0.006,8.2),X.receiveShadow=!0,this.scene.add(X);let U=new N0({color:2894646,roughness:0.95}),G=new N0({color:1841956,roughness:0.9}),q=(k,v,n,i,T,x=0)=>{let u=new Y0(new j0(k,v,0.16),U);return u.position.set(n,i,T),u.rotation.y=x,u.receiveShadow=!0,u.userData.blocker=!0,this.scene.add(u),u};q(0.16,3.6,0,1.8,8,Math.PI/2),q(0.16,3.6,24,1.8,8,Math.PI/2);let V=5.4,E=0.9,D=4.6;q(D-0.45,3.6,(D-0.45)/2,1.8,0),q(24-(D+V*3+E*2)+0.45,3.6,(D+V*3+E*2+24)/2,1.8,0);for(let k=0;k<3;k+=1){let v=D+k*(V+E);if(q(V,0.85,v+V/2,0.425,0),q(V,0.5,v+V/2,3.35,0),k<2)q(E,3.6,v+V+E/2,1.8,0);let n=new Y0(new B5(V-0.1,2.2),new _8({color:10340351,transparent:!0,opacity:0.09,roughness:0.08,metalness:0.1,side:T9}));n.position.set(v+V/2,2.25,0.02),this.scene.add(n);for(let T=0;T<=2;T+=1){let x=new Y0(new j0(0.06,2.2,0.06),G);x.position.set(v+0.05+T*(V-0.1)/2,2.25,0.06),this.scene.add(x)}let i=new Y0(new j0(V,0.06,0.3),G);i.position.set(v+V/2,1.12,0.14),i.castShadow=!0,this.scene.add(i)}let O=new Y0(new B5(24,16),new N0({color:1513247,roughness:1}));O.rotation.x=Math.PI/2,O.position.set(12,3.6,8),this.scene.add(O);let R=new Y0(new B5(24,10),new N0({color:1381661,roughness:1}));R.rotation.x=Math.PI/2,R.position.set(12,3.6,19),this.scene.add(R);let N=new Y0(new B5(8,3.4),new N0({color:3485764,roughness:1}));N.rotation.x=-Math.PI/2,N.position.set(12,0.008,19.2),N.receiveShadow=!0,this.scene.add(N);let F=new N0({color:3812904,roughness:0.7}),B=new Y0(new j0(3.2,0.1,0.5),F);B.position.set(12,0.44,21.4),B.castShadow=!0,this.scene.add(B);for(let k of[-1.3,1.3]){let v=new Y0(new j0(0.08,0.42,0.44),new N0({color:1381402,roughness:0.5}));v.position.set(12+k,0.21,21.4),this.scene.add(v)}let M=new N0({color:1315867,roughness:0.7}),C=(k,v,n,i=0)=>{let T=new Y0(new j0(k,0.12,0.05),M);T.position.set(v,0.06,n),T.rotation.y=i,this.scene.add(T)};C(16,0.1,8,Math.PI/2),C(16,23.9,8,Math.PI/2),this.buildNeonSign(23.9,2.4,9.4,-Math.PI/2);let w=new K5,L=new Y0(new L5(0.22,0.22,0.03,28),new N0({color:14275266,roughness:0.7}));L.rotation.x=Math.PI/2,w.add(L);let f=new k5({color:1315867}),p=new Y0(new j0(0.02,0.13,0.012),f);p.position.set(0,0.05,0.03),p.rotation.z=-0.6,w.add(p);let A=new Y0(new j0(0.015,0.18,0.012),f);A.position.set(0.03,0.07,0.035),A.rotation.z=-1.9,w.add(A),w.position.set(2.4,2.45,0.12),this.scene.add(w)}buildNeonSign(J,Z,Q,W){let{canvas:Y,ctx:H}=m6(1024,320);H.fillStyle="#0a0810",H.fillRect(0,0,1024,320),H.strokeStyle="rgba(255,79,163,0.85)",H.lineWidth=6,H.strokeRect(10,10,1004,300),H.font="900 128px ui-sans-serif, system-ui, sans-serif",H.textAlign="center",H.textBaseline="middle",H.shadowColor="#ff4fa3",H.shadowBlur=46,H.fillStyle="#ffbfd9",H.fillText("AFTER HOURS",512,156),H.shadowBlur=0,H.font="600 30px ui-monospace, monospace",H.fillStyle="rgba(255,191,217,0.6)",H.fillText("NO STANDUPS PAST MIDNIGHT",512,266);let K=new M6(Y);K.colorSpace=R6,K.anisotropy=4;let X=new Y0(new B5(3.2,1),new k5({map:K,transparent:!0}));X.position.set(J,Z,Q),X.rotation.y=W,this.scene.add(X)}buildCity(){let J=(()=>{let{canvas:W,ctx:Y}=m6(128,256);Y.fillStyle="#05060c",Y.fillRect(0,0,128,256);for(let K=6;K<250;K+=10)for(let X=6;X<122;X+=12)if(Math.random()<0.42){let U=Math.random()<0.35;Y.fillStyle=U?"rgba(255,190,110,0.85)":"rgba(130,190,255,0.7)",Y.fillRect(X,K,5,4)}let H=new M6(W);return H.colorSpace=R6,H.wrapS=y8,H.wrapT=y8,H})(),Z=(W,Y)=>W+Math.random()*(Y-W);for(let W=0;W<26;W+=1){let Y=Z(2.5,6),H=Z(4,20),K=Z(-10,34),X=Z(-24,-3.5),U=J.clone();U.needsUpdate=!0,U.repeat.set(Math.max(1,Math.round(Y/2.2)),Math.max(1,Math.round(H/4)));let G=new Y0(new j0(Y,H,Y),new k5({map:U,color:8952251,fog:!0}));G.position.set(K,H/2-1.2,X),this.scene.add(G)}for(let W=0;W<16;W+=1){let Y=Z(3,7),H=Z(5,18),K=Z(-6,30),X=Z(27,40),U=J.clone();U.needsUpdate=!0,U.repeat.set(Math.max(1,Math.round(Y/2.2)),Math.max(1,Math.round(H/4)));let G=new Y0(new j0(Y,H,Y),new k5({map:U,color:8228016,fog:!0}));G.position.set(K,H/2-1.4,X),this.scene.add(G)}let Q=new Y0(new p9(1.2,32),new k5({color:13621503,transparent:!0,opacity:0.55}));Q.position.set(17,10,-28),this.scene.add(Q)}buildReception(){let J=new K5,Z=new N0({color:2763576,roughness:0.65}),Q=new Y0(new j0(4,1.08,1.2),Z);Q.position.set(12,0.54,11.8),Q.castShadow=!0,Q.receiveShadow=!0,Q.userData.blocker=!0,J.add(Q);let W=new Y0(new j0(4.25,0.07,1.4),new N0({color:4864560,roughness:0.5}));W.position.set(12,1.12,11.8),W.castShadow=!0,W.userData.blocker=!0,J.add(W);let Y=new Y0(new j0(3.6,0.035,0.02),new k5({color:3526911}));Y.position.set(12,0.92,12.41),J.add(Y);let{canvas:H,ctx:K}=m6(1024,320);K.clearRect(0,0,1024,320),K.textAlign="center",K.font="800 96px ui-sans-serif, system-ui, sans-serif",K.fillStyle="#eef1f7",K.fillText("ARGGON LABS",512,120),K.font="600 30px ui-monospace, monospace",K.fillStyle="#6f7488",K.letterSpacing="8px",K.fillText("CANDIDATE EVALUATION",512,184);let X=new M6(H);X.colorSpace=R6;let U=new Y0(new B5(3.1,0.97),new k5({map:X,transparent:!0}));U.position.set(12,1.55,12.42),J.add(U);let G=new K5,q=new Y0(new j0(0.9,0.55,0.05),new N0({color:723728,roughness:0.4}));G.add(q);let V=new Y0(new B5(0.82,0.47),new k5({map:this.screenTexture(-1,"INTAKE",3526911)}));V.position.z=0.03,G.add(V),G.position.set(10.85,1.43,11.55),G.rotation.y=0,J.add(G);let E=new N0({color:14209732,roughness:0.9});for(let D=0;D<3;D+=1){let O=new Y0(new j0(0.34,0.02,0.26),E);O.position.set(13+D*0.02,1.165+D*0.022,11.72+D*0.015),O.rotation.y=D*0.14,O.castShadow=!0,J.add(O)}this.scene.add(J)}buildLounge(){let J=new K5,Z=new N0({color:3422797,roughness:0.95}),Q=new Y0(new j0(3.2,0.42,1.4),Z);Q.position.set(12,0.21,1.9),Q.castShadow=!0,Q.userData.blocker=!0,J.add(Q);let W=new Y0(new j0(3.2,0.62,0.32),Z);W.position.set(12,0.72,1.34),W.castShadow=!0,W.userData.blocker=!0,J.add(W);for(let V of[10.55,13.45]){let E=new Y0(new j0(0.32,0.2,1.4),Z);E.position.set(V,0.62,1.9),E.castShadow=!0,J.add(E)}for(let V of[11.2,12.8]){let E=new Y0(new j0(1.2,0.16,1.05),Z);E.position.set(V,0.5,1.94),E.castShadow=!0,J.add(E)}for(let[V,E]of[[11,16732067],[13,3526911]]){let D=new Y0(new j0(0.4,0.34,0.14),new N0({color:E,roughness:0.9}));D.position.set(V,0.66,1.62),D.rotation.z=V<12?0.3:-0.3,D.castShadow=!0,J.add(D)}let Y=new N0({color:3878697,roughness:0.55}),H=new Y0(new j0(1.6,0.06,0.9),Y);H.position.set(12,0.42,3.55),H.castShadow=!0,H.receiveShadow=!0,J.add(H);for(let[V,E]of[[-0.7,-0.35],[0.7,-0.35],[-0.7,0.35],[0.7,0.35]]){let D=new Y0(new j0(0.05,0.42,0.05),new N0({color:1512989,roughness:0.4}));D.position.set(12+V,0.21,3.55+E),J.add(D)}let K=new N0({color:16757575,roughness:0.6}),X=new Y0(new L5(0.06,0.055,0.11,12),K);X.position.set(11.7,0.51,3.5),X.castShadow=!0,J.add(X);let U=new Y0(new j0(0.42,0.02,0.3),new N0({color:2434606,roughness:0.4}));U.position.set(12.35,0.46,3.45),J.add(U);let G=new Y0(new j0(0.42,0.27,0.015),new N0({color:1381660,roughness:0.3}));G.position.set(12.35,0.6,3.28),G.rotation.x=-0.25,J.add(G);let q=new Y0(new B5(5.4,3.4),new N0({color:3287872,roughness:1}));q.rotation.x=-Math.PI/2,q.position.set(12,0.004,2.6),q.receiveShadow=!0,J.add(q),this.scene.add(J)}buildDetails(){for(let[E,D,O]of[[1.3,1.3,1.1],[22.7,1.3,1.2],[1.3,14.7,1],[22.7,14.7,1.15]]){let R=new K5,N=new Y0(new L5(0.28,0.22,0.5,12),new N0({color:2762016,roughness:0.9}));N.position.y=0.25,N.castShadow=!0,R.add(N);let F=new Y0(new L5(0.035,0.045,0.9,6),new N0({color:3097652,roughness:1}));F.position.y=0.95,R.add(F);for(let B=0;B<5;B+=1){let M=new Y0(new d5(0.3,8,6),new N0({color:B%2?3107653:4030290,roughness:1})),C=B/5*Math.PI*2;M.position.set(Math.cos(C)*0.28,1.35+B%3*0.16,Math.sin(C)*0.28),M.scale.set(1,0.7,1),M.castShadow=!0,R.add(M)}R.position.set(E,0,D),R.scale.setScalar(O),this.scene.add(R)}let J=new K5,Z=new N0({color:3812904,roughness:0.7}),Q=new Y0(new j0(0.7,4,4.2),Z);Q.position.set(1.05,2,6.4),Q.castShadow=!0,Q.receiveShadow=!0,Q.userData.blocker=!0,J.add(Q);for(let E=0;E<5;E+=1){let D=0.45+E*0.78,O=[16732067,16757575,3526911,7069818,10189823,14209732];for(let R=0;R<7;R+=1){let N=0.07+Math.random()*0.05,F=0.3+Math.random()*0.18,B=new Y0(new j0(0.24,F,N),new N0({color:O[(R+E)%O.length],roughness:0.85}));B.position.set(1.42,D+F/2,4.55+R*0.24),B.castShadow=!0,J.add(B)}}this.scene.add(J);let W=new K5,Y=new Y0(new L5(0.32,0.32,1,14),new N0({color:13223613,roughness:0.7}));Y.position.y=0.5,Y.castShadow=!0,W.add(Y);let H=new Y0(new L5(0.22,0.26,0.5,14),new _8({color:8369896,roughness:0.15,transparent:!0,opacity:0.6}));H.position.y=1.25,W.add(H),W.position.set(22.9,0,8),this.scene.add(W);let K=new Y0(new j0(2.8,1.5,0.06),new N0({color:14276559,roughness:0.85}));K.position.set(21.2,1.9,0.12),K.castShadow=!0,K.userData.blocker=!0,this.scene.add(K);let X=(()=>{let{canvas:E,ctx:D}=m6(1024,560);D.fillStyle="#e6e4db",D.fillRect(0,0,1024,560),D.strokeStyle="rgba(30,30,40,0.14)";for(let N=80;N<560;N+=90)D.beginPath(),D.moveTo(0,N),D.lineTo(1024,N),D.stroke();D.fillStyle="#1d2440",D.font="700 44px ui-sans-serif, system-ui, sans-serif",D.fillText("BEFORE WE SHIP",54,78),D.font="600 32px ui-monospace, monospace",["1. kill flaky tests   ✓","2. demo > slides      ✓","3. docs future-me     ~","4. deploy on friday   ?"].forEach((N,F)=>{D.fillStyle=F===3?"#b4232f":"#2b3550",D.fillText(N,56,160+F*78)}),D.strokeStyle="#b4232f",D.lineWidth=5,D.beginPath(),D.moveTo(714,390),D.lineTo(908,434),D.stroke();let R=new M6(E);return R.colorSpace=R6,R})(),U=new Y0(new B5(2.7,1.4),new k5({map:X}));U.position.set(21.2,1.9,0.16),this.scene.add(U);let G=new K5,q=new Y0(new L5(0.03,0.03,1.8,8),new N0({color:1644832,metalness:0.5,roughness:0.4}));q.position.y=0.9,G.add(q);let V=new Y0(new m9(0.34,0.9,8),new N0({color:4865877,roughness:0.95}));V.position.set(0.1,1.35,0.05),V.rotation.z=0.08,G.add(V),G.position.set(21.8,0,14.2),this.scene.add(G)}buildDesks(){this.deskGroups=[],this.panels=[];let J=this.layoutDesks||[];for(let Z=0;Z<6;Z+=1){let Q=J[Z]||{x:380,y:270,w:300,h:120,hue:3526911,side:0};this.buildDesk(Q,Z)}}buildDesk(J,Z){let Q=new K5,W=J.x/100,Y=J.y/100,H=J.w/100,K=J.h/100,X=W+H/2,U=Y+K/2,G=J.side||0,q=J.hue,V=G===0?1:-1,E=new N0({color:4075817,roughness:0.62}),D=new N0({color:1513246,metalness:0.5,roughness:0.35}),O=new N0({color:q,emissive:q,emissiveIntensity:0.8,roughness:0.4}),R=new Y0(new j0(H,0.08,K),E);R.position.set(X,0.78,U),R.castShadow=!0,R.receiveShadow=!0,R.userData.blocker=!0,Q.add(R);let N=new Y0(new j0(0.06,0.5,K*0.9),E);N.position.set(X+V*(H/2-0.06),0.5,U),Q.add(N);for(let[y,o]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let X0=new Y0(new j0(0.06,0.78,0.06),D);X0.position.set(X+y*(H/2-0.12),0.39,U+o*(K/2-0.12)),Q.add(X0)}let F=new K5,B=new Y0(new j0(0.98,0.6,0.05),new N0({color:657936,roughness:0.35}));B.castShadow=!0,F.add(B);let M=new Y0(new B5(0.9,0.52),new k5({map:this.screenTexture(Z,"",q)}));M.position.z=0.028,M.userData={deskId:Z},F.add(M);let C=new Y0(new L5(0.025,0.025,0.26,8),D);C.position.y=-0.43,F.add(C);let w=new Y0(new j0(0.34,0.03,0.18),D);w.position.y=-0.56,F.add(w),F.position.set(X+V*0.35,1.395,U),F.rotation.y=G===0?Math.PI/2:-Math.PI/2,Q.add(F);let L=new Y0(new j0(0.52,0.025,0.17),new N0({color:1842212,roughness:0.6}));L.position.set(X+V*-0.15,0.835,U),L.rotation.y=F.rotation.y,L.castShadow=!0,Q.add(L);let f=new Y0(new L5(0.055,0.05,0.12,12),new N0({color:Z%2?15262678:2829107,roughness:0.6}));f.position.set(X+V*-0.55,0.88,U+0.32),f.castShadow=!0,Q.add(f);let p=new Y0(new L5(0.09,0.07,0.13,8),new N0({color:7031349,roughness:0.9}));p.position.set(X+V*-0.72,0.885,U-0.36),Q.add(p);let A=new Y0(new d5(0.1,8,6),new N0({color:4160079,roughness:1}));A.scale.y=0.7,A.position.set(X+V*-0.72,0.985,U-0.36),A.castShadow=!0,Q.add(A);let k=new K5,v=new N0({color:2105642,roughness:0.9}),n=new Y0(new j0(0.52,0.09,0.5),v);n.position.y=0.47,n.castShadow=!0,k.add(n);let i=new Y0(new j0(0.5,0.55,0.08),v);i.position.set(0,0.78,-0.22),i.rotation.x=0.08,i.castShadow=!0,k.add(i);let T=new Y0(new L5(0.04,0.04,0.38,8),D);T.position.y=0.24,k.add(T);for(let y=0;y<5;y+=1){let o=y/5*Math.PI*2,X0=new Y0(new j0(0.3,0.04,0.06),D);X0.position.set(Math.cos(o)*0.13,0.05,Math.sin(o)*0.13),X0.rotation.y=-o,k.add(X0)}k.position.set(X+V*-1.85,0,U+0.05),k.rotation.y=G===0?-0.35:Math.PI+0.35,Q.add(k);let x=new K5,u=this.panelTexture(Z),r=new k5({map:u,transparent:!0,toneMapped:!1}),c=new Y0(new B5(1.7,1.03),r);c.userData={deskId:Z,blocker:!0},x.add(c);let d=new Y0(new B5(1.82,1.15),new N0({color:789780,emissive:q,emissiveIntensity:0.35,metalness:0.4,roughness:0.35,transparent:!0,opacity:0.75}));d.position.z=-0.012,d.userData.blocker=!0,x.add(d);let t=new Y0(new L5(0.035,0.045,0.72,8),D);t.position.set(X+V*0.85,1.18,U-0.5),Q.add(t);let W0=new Y0(new d5(0.05,8,6),O);W0.position.set(X+V*0.85,1.54,U-0.5),Q.add(W0),x.position.set(X+V*0.92,2,U),x.rotation.y=G===0?Math.PI/2:-Math.PI/2,x.rotation.x=-0.05,Q.add(x),this.panels.push({group:x,mesh:c,tex:u,index:Z,baseY:2}),this.scene.add(Q),this.deskGroups.push(Q)}buildAvatar(){let J=new Y0(new d9(0.62,0.74,56),new k5({color:3526911,transparent:!0,opacity:0.45,side:T9}));J.rotation.x=-Math.PI/2,J.position.set(12,0.02,7.9),J.visible=!1,this.createPad=J,this.scene.add(J),this.avatar=new K5,this.scene.add(this.avatar),this.setAvatar({preset:0,color:l8[0]})}setAvatar({preset:J=0,color:Z=l8[0]}){if(this.avatarPreset=J,this.avatarColor=Z,this.eyeGroups=[],this.kneeL=null,this.kneeR=null,this.avatarBody){let H0=new Set,s=new Set;this.avatarBody.traverse((Q0)=>{if(Q0.geometry)H0.add(Q0.geometry);if(Q0.material){let K0=Array.isArray(Q0.material)?Q0.material:[Q0.material];for(let M0 of K0)if(M0)s.add(M0)}}),H0.forEach((Q0)=>Q0.dispose()),s.forEach((Q0)=>Q0.dispose()),this.avatar.remove(this.avatarBody)}let Q=NQ[J]||NQ[0],W=new K5,Y=Q.shoulder,H=new N0({color:Z,roughness:0.72}),K=new N0({color:new g0(Z).multiplyScalar(0.58),roughness:0.8}),X=new N0({color:2500403,roughness:0.88}),U=new N0({color:15328728,roughness:0.78}),G=new N0({color:Q.skin,roughness:0.64}),q=new N0({color:new g0(Q.skin).multiplyScalar(0.88),roughness:0.7}),V=new N0({color:Q.hairColor,roughness:0.92}),E=new N0({color:789521,roughness:0.94,metalness:0}),D=new N0({color:460554,roughness:0.9}),O=new N0({color:16052455,roughness:0.4}),R=new N0({color:Q.eyes,roughness:0.45}),N=new k5({color:789008}),F=new N0({color:15986661,roughness:0.55}),B=new N0({color:new g0(Z).multiplyScalar(0.42),roughness:0.68}),M=(H0,s,Q0,K0,M0,$0=W)=>{let $=new Y0(H0,s);return $.position.set(Q0,K0,M0),$.castShadow=!0,$0.add($),$},C=(H0,s,Q0,K0,M0,$0,$,z=W)=>M(new j0(H0,s,Q0),K0,M0,$0,$,z),w=(H0,s,Q0,K0,M0,$0=W,$=20)=>M(new d5(H0,$,Math.round($*0.72)),s,Q0,K0,M0,$0),L=(H0,s,Q0,K0,M0,$0,$=W)=>M(new g9(H0,s,6,12),Q0,K0,M0,$0,$),f=(H0,s,Q0,K0,M0,$0,$,z=W,_=18)=>M(new L5(H0,s,Q0,_),K0,M0,$0,$,z),p=(H0)=>{let s=new K5;s.position.set(H0*0.105,0.88,0),W.add(s);let Q0=L(0.083,0.26,X,0,-0.2,0,s);Q0.scale.z=0.94,w(0.06,X,0,-0.4,0,s,14);let K0=new K5;K0.position.y=-0.4,s.add(K0);let M0=L(0.061,0.25,X,0,-0.18,0,K0);M0.scale.z=0.9;let $0=f(0.06,0.063,0.08,X,0,-0.34,0,K0,12);$0.scale.z=0.9;let $=new K5;$.position.set(0,-0.41,0.03),K0.add($);let z=L(0.062,0.14,E,0,0.005,0.03,$);z.rotation.x=Math.PI/2,z.scale.set(0.95,1,0.58),w(0.055,E,0,0,0.15,$,16).scale.set(1,0.32,1.05);let e=C(0.134,0.025,0.255,D,0,-0.045,0.028,$);return e.scale.z=0.98,C(0.12,0.035,0.06,D,0,-0.043,-0.08,$),C(0.052,0.006,0.01,new N0({color:5591646,roughness:0.7}),0,0.043,0.055,$),{hip:s,knee:K0}},A=p(-1),k=p(1);this.legL=A.hip,this.legR=k.hip,this.kneeL=A.knee,this.kneeR=k.knee;let v=f(0.155,0.17,0.22,X,0,0.85,0);v.scale.z=0.82,w(0.08,X,-0.105,0.88,0,W,14),w(0.08,X,0.105,0.88,0,W,14);let n=f(0.23,0.16,0.44,H,0,1.14,0,W,24),i=1+(Y-0.46)*0.8;n.scale.set(i,1,0.76),w(0.23,H,0,1.35,0,W,24).scale.set(i,0.46,0.8),f(0.19,0.198,0.12,H,0,0.965,0,W,24).scale.set(i,1,0.8);let u=new l9;u.moveTo(-0.072,1.365),u.lineTo(0.072,1.365),u.lineTo(0,1.115),u.closePath();let r=new Y0(new c9(u),U);r.position.z=0.161,r.castShadow=!1,W.add(r);for(let H0 of[-1,1]){let s=C(0.062,0.21,0.016,K,H0*0.085,1.265,0.166);s.rotation.z=H0*0.24;let Q0=C(0.075,0.026,0.03,K,H0*0.06,1.39,0.145);Q0.rotation.z=H0*0.42}let c=C(0.045,0.036,0.014,B,0,1.36,0.176),d=C(0.036,0.195,0.012,B,0,1.245,0.176);d.rotation.x=0.02;for(let H0 of[1.06,0.985]){let s=w(0.011,K,0.038,H0,0.157,W,8);s.scale.z=0.6}for(let H0 of[-1,1]){let s=C(0.085,0.018,0.01,K,H0*0.115,1,0.15);s.rotation.z=H0*0.02}C(0.007,0.31,0.008,K,0,1.09,0.157),C(0.007,0.29,0.008,K,0,1.11,-0.157),C(0.26,0.007,0.008,K,0,1.3,-0.157);let t=C(0.006,0.16,0.008,K,0,0.97,-0.157);t.rotation.x=0,f(0.052,0.059,0.11,G,0,1.43,0,W,12);let W0=f(0.072,0.078,0.03,U,0,1.405,0,W,14);W0.scale.z=0.9,w(0.145,G,0,1.62,0,W,28).scale.set(0.92,1.03,0.94),w(0.1,G,0,1.56,0.012,W,20).scale.set(0.98,0.6,0.86);for(let H0 of[-1,1])w(0.028,q,H0*0.138,1.605,-0.002,W,12).scale.set(0.52,1,0.78);let X0=(H0)=>{let s=new K5;s.position.set(H0,1.648,0.128),W.add(s);let Q0=w(0.018,O,0,0,0,s,16);Q0.scale.set(1,0.68,0.5),Q0.castShadow=!1,M(new d5(0.0088,12,9),R,0,0,0.008,s).castShadow=!1,M(new d5(0.0042,8,6),N,0,0,0.0125,s).castShadow=!1,M(new d5(0.0022,6,4),O,0.0032,0.003,0.015,s).castShadow=!1;let K0=C(0.04,0.007,0.012,q,H0,1.661,0.132);K0.rotation.z=H0<0?0.05:-0.05,this.eyeGroups.push(s)};X0(-0.05),X0(0.05);for(let H0 of[-1,1]){let s=C(0.046,0.0055,0.011,V,H0*0.05,1.678,0.13);s.rotation.z=H0*-0.1}w(0.017,q,0,1.602,0.141,W,12).scale.set(0.9,1.15,0.95);let P0=new Y0(new x8(0.026,0.0032,6,18,Math.PI*0.72),new N0({color:9261384,roughness:0.62}));P0.position.set(0,1.568,0.141),P0.rotation.z=Math.PI,P0.castShadow=!1,W.add(P0);let k0=(H0,s,Q0,K0,M0,$0,$=0)=>{let z=w(0.05,V,H0,s,Q0,W,14);return z.scale.set(K0,M0,$0),z.rotation.z=$,z},p0=(H0=1)=>{let s=w(0.148,V,0,1.615,-0.052,W,22);return s.scale.set(1,0.9*H0,0.6),s},S0=(H0)=>{let s=w(0.05,V,H0*0.145,1.615,0.008,W,12);return s.scale.set(0.55,1.5,0.85),s.rotation.z=H0*0.08,s};if(Q.hair==="long"){M(new d5(0.152,26,18,0,Math.PI*2,0,Math.PI*0.34),V,0,1.62,-0.004).scale.set(1.03,1,1.03),k0(-0.085,1.706,0.108,1.08,0.38,0.72,-0.16),k0(-0.008,1.703,0.112,1,0.34,0.66,0.04),k0(0.073,1.698,0.103,0.88,0.3,0.6,0.16);for(let M0 of[-1,1]){S0(M0);let $0=L(0.032,0.2,V,M0*0.122,1.48,0.018);$0.rotation.z=M0*0.04}p0(1),L(0.082,0.2,V,0,1.48,-0.11).scale.set(1.15,1,0.72);let Q0=L(0.052,0.2,V,0,1.34,-0.17);Q0.rotation.x=-0.22;let K0=f(0.053,0.053,0.025,K,0,1.455,-0.14,W,12);K0.rotation.x=Math.PI/2}else if(Q.hair==="short"){M(new d5(0.152,26,18,0,Math.PI*2,0,Math.PI*0.36),V,0,1.62,-0.004).scale.set(1.03,1,1.03),k0(-0.085,1.703,0.108,1,0.36,0.65,-0.12),k0(-0.012,1.707,0.112,1.1,0.4,0.7,0.02),k0(0.06,1.702,0.105,0.9,0.34,0.6,0.14);for(let Q0 of[-1,1]){S0(Q0);let K0=C(0.02,0.06,0.024,V,Q0*0.138,1.595,0.04);K0.rotation.z=Q0*0.05}p0(0.92),w(0.07,V,0,1.555,-0.105,W,12).scale.set(1.2,0.6,0.5)}else{M(new d5(0.152,26,18,0,Math.PI*2,0,Math.PI*0.36),V,0,1.62,-0.004).scale.set(1.03,1,1.03),k0(-0.08,1.705,0.108,1,0.36,0.65,-0.12),k0(-0.005,1.708,0.112,1.05,0.38,0.68,0.02),k0(0.065,1.703,0.104,0.9,0.32,0.6,0.14);for(let M0 of[-1,1]){S0(M0);let $0=L(0.018,0.09,V,M0*0.12,1.56,0.045);$0.rotation.z=M0*0.12}p0(0.96),w(0.065,V,0,1.56,-0.105,W,12).scale.set(1.15,0.6,0.5),w(0.058,V,0,1.762,-0.058,W,16).scale.set(1,0.95,1);let K0=M(new x8(0.043,0.007,6,18),new N0({color:1512730,roughness:0.8}),0,1.732,-0.058,W);K0.rotation.x=Math.PI/2,K0.scale.z=0.95}let t0=new N0({color:1776676,roughness:0.7});for(let H0 of[-1,1]){let s=new _9([new P(H0*0.06,1.445,0.025),new P(H0*0.055,1.35,0.11),new P(H0*0.025,1.27,0.16),new P(0,1.225,0.182)]),Q0=new Y0(new n9(s,16,0.005,5,!1),t0);Q0.castShadow=!1,W.add(Q0)}let h=C(0.062,0.086,0.012,F,0,1.175,0.188);h.rotation.x=-0.04,C(0.064,0.018,0.014,K,0,1.211,0.19),C(0.019,0.026,0.014,H,-0.016,1.163,0.195),C(0.028,0.0035,0.014,new N0({color:4869724,roughness:0.6}),0.006,1.175,0.195),C(0.028,0.0035,0.014,new N0({color:4869724,roughness:0.6}),0.006,1.164,0.195);let A5=(H0)=>{let s=new K5;s.position.set(H0*(Y/2-0.005),1.335,0),s.rotation.z=H0*0.06,W.add(s);let Q0=L(0.058,0.19,H,0,-0.15,0,s);Q0.scale.z=0.95,w(0.052,H,0,-0.3,0,s,12);let K0=new K5;K0.position.y=-0.3,K0.rotation.x=-0.14,s.add(K0);let M0=L(0.052,0.18,H,0,-0.115,0,K0);M0.scale.z=0.92;let $0=f(0.052,0.052,0.02,U,0,-0.215,0,K0,12);$0.scale.z=0.9,w(0.045,G,0,-0.255,0.004,K0,14).scale.set(1,1.1,0.7);for(let _=0;_<4;_+=1){let e=L(0.009,0.028,G,-0.018+_*0.012,-0.316,0.006,K0);e.scale.z=0.8,e.castShadow=!1}let z=L(0.011,0.022,G,-H0*0.032,-0.26,0.022,K0);return z.rotation.z=-H0*0.6,z.castShadow=!1,f(0.053,0.053,0.012,new N0({color:1710883,roughness:0.7}),0,-0.202,0,K0,12),s};this.armL=A5(-1),this.armR=A5(1),this.avatarBaseScale=Q.height/1.78,W.scale.setScalar(this.avatarBaseScale),this.avatarBody=W,this.avatar.add(W)}projectData(J){let Z=this.projects[J]||{};return{name:(Z.name||`project-${J+1}`).replace(/-/g," "),desc:(this.lang==="es"?Z.es:Z.description)||Z.description||"",tags:(Z.topics&&Z.topics.length?Z.topics:Z.tags||[]).slice(0,4),lang:Z.language||"code",stars:Z.stars||0,hue:this.deskHue(J)}}deskHue(J){let Z=this.layoutDesks[J];if(Z&&typeof Z.hue==="number")return Z.hue;let Q=[3526911,16732067,16757575,7069818,10189823,16743004];return Q[J%Q.length]}panelTexture(J){let Z=this.projectData(J),{canvas:Q,ctx:W}=m6(1024,620),Y=Z.hue,H=W.createLinearGradient(0,0,1024,620);H.addColorStop(0,"rgba(12, 16, 28, 0.97)"),H.addColorStop(1,"rgba(7, 9, 16, 0.97)"),W.fillStyle=H,W.fillRect(0,0,1024,620);let K=W.createRadialGradient(820,40,20,820,40,700);K.addColorStop(0,c5(Y,0.18)),K.addColorStop(1,"rgba(0,0,0,0)"),W.fillStyle=K,W.fillRect(0,0,1024,620),W.strokeStyle=c5(Y,0.75),W.lineWidth=3,W.strokeRect(1.5,1.5,1021,617),W.fillStyle=c5(Y,0.95),W.fillRect(0,0,1024,7),W.font="800 118px ui-sans-serif, system-ui, sans-serif",W.fillStyle=c5(Y,0.2),W.textAlign="right",W.fillText(String(J+1).padStart(2,"0"),980,150),W.textAlign="left",W.font="700 22px ui-monospace, monospace",W.fillStyle="rgba(164, 169, 187, 0.9)",W.fillText(`STATION ${String(J+1).padStart(2,"0")} / 06`,54,62),W.font="800 52px ui-sans-serif, system-ui, sans-serif",W.fillStyle="#f2f4f8";let X=Z.name.toUpperCase();W.fillText(X.length>22?`${X.slice(0,21)}…`:X,54,140),W.font="400 25px ui-sans-serif, system-ui, sans-serif",W.fillStyle="rgba(198, 203, 219, 0.92)",tU(W,Z.desc,900,3).forEach((D,O)=>W.fillText(D,54,196+O*36));let G=54,q=344;W.font="700 17px ui-monospace, monospace";for(let D of Z.tags){let O=String(D).toUpperCase().slice(0,18),R=W.measureText(O).width+28;if(G+R>960)break;W.fillStyle=c5(Y,0.12),m8(W,G,q,R,40,20),W.fill(),W.strokeStyle=c5(Y,0.45),W.lineWidth=1.5,m8(W,G,q,R,40,20),W.stroke(),W.fillStyle=c5(Y,0.95),W.fillText(O,G+14,q+26),G+=R+10}W.strokeStyle="rgba(150, 165, 210, 0.18)",W.lineWidth=1,W.beginPath(),W.moveTo(54,416),W.lineTo(970,416),W.stroke(),[0.55,0.8,0.35,0.92,0.62].forEach((D,O)=>{W.fillStyle=c5(Y,0.35+O*0.08),m8(W,54+O*82,452,58*D,12,6),W.fill()}),W.font="700 20px ui-monospace, monospace",W.fillStyle="rgba(164, 169, 187, 0.85)",W.textAlign="right",W.fillText(`${Z.lang.toUpperCase()}  ·  ${Z.stars}★`,968,462),W.fillText("GITHUB  ↗",968,500),W.textAlign="left",W.font="600 15px ui-monospace, monospace",W.fillStyle=c5(Y,0.55),W.fillText("LIVE PANEL · BEND",54,500);let E=new M6(Q);return E.colorSpace=R6,E.anisotropy=8,E}screenTexture(J,Z,Q){let{canvas:W,ctx:Y}=m6(1024,600);Y.fillStyle="#0b0d15",Y.fillRect(0,0,1024,600);let H=Y.createLinearGradient(0,0,1024,600);H.addColorStop(0,c5(Q,0.22)),H.addColorStop(1,"rgba(5,6,12,0)"),Y.fillStyle=H,Y.fillRect(0,0,1024,600),Y.fillStyle="rgba(255,255,255,0.06)",Y.fillRect(0,0,1024,54),["#ff4fa3","#ffb347","#6be07a"].forEach((U,G)=>{Y.beginPath(),Y.arc(32+G*28,27,7,0,Math.PI*2),Y.fillStyle=U,Y.fill()}),Y.font="600 18px ui-monospace, monospace",Y.fillStyle="rgba(200,205,220,0.5)",Y.fillText(Z?`${Z.toLowerCase()} — zsh`:"intake — zsh",150,34),Y.font="700 190px ui-sans-serif, system-ui, sans-serif",Y.fillStyle=c5(Q,0.16),Y.textAlign="right",Y.fillText(J<0?"HR":String(J+1).padStart(2,"0"),960,430),Y.textAlign="left",Y.font="600 24px ui-monospace, monospace",(J<0?["$ opening candidate file","$ authorizing: gonzalo","$ six projects found","$ run --in-person"]:["$ git log --oneline -3","$ deploy --prod","$ status: ships","$ coffee --refill"]).forEach((U,G)=>{Y.fillStyle=G===0?c5(Q,0.95):"rgba(200,205,220,0.55)",Y.fillText(U,60,150+G*52)});for(let U=0;U<4;U+=1){let G=400+U*34;Y.fillStyle="rgba(255,255,255,0.07)",m8(Y,60,G,520,12,6),Y.fill(),Y.fillStyle=c5(Q,0.8),m8(Y,60,G,120+U*92,12,6),Y.fill()}let X=new M6(W);return X.colorSpace=R6,X}setLayout(J){this.layoutDesks=J.desks}setLang(J){this.lang=J;for(let Z of this.panels)Z.tex.dispose(),Z.tex=this.panelTexture(Z.index),Z.mesh.material.map=Z.tex,Z.mesh.material.needsUpdate=!0}setProjects(J){this.projects=J;for(let Z of this.panels)Z.tex.dispose(),Z.tex=this.panelTexture(Z.index),Z.mesh.material.map=Z.tex,Z.mesh.material.needsUpdate=!0}setFocus(J){this.focusId=J;for(let Z of this.panels){let Q=Z.index===J;Z.group.scale.setScalar(Q?1.035:1);let W=Z.group.children[1];if(W&&W.material)W.material.emissiveIntensity=Q?1.15:0.35}}placeAvatar(J,Z,Q,W){this.avatarPos.x=J,this.avatarPos.z=Z,this.targetYaw=Q,this.speed=W}setMode(J){if(this.mode=J,this.createPad)this.createPad.visible=J==="create"}setBlend(J){this.blend=p6(J,0,1)}setCamera({yaw:J,pitch:Z,dist:Q}){if(J!==void 0)this.cameraOrbit.yaw=J;if(Z!==void 0)this.cameraOrbit.pitch=Z;if(Q!==void 0)this.cameraOrbit.dist=Q}snapCamera(){let{yaw:J,pitch:Z,dist:Q}=this.cameraOrbit,W=new P(this.avatarPos.x,1.15,this.avatarPos.z);this.cameraPos.set(W.x+Math.sin(J)*Math.cos(Z)*Q,W.y+Math.sin(Z)*Q,W.z+Math.cos(J)*Math.cos(Z)*Q),this.cameraPos.x=p6(this.cameraPos.x,0.9,23.1),this.cameraPos.z=p6(this.cameraPos.z,0.9,21),this.cameraPos.y=p6(this.cameraPos.y,0.75,3.2),this.cameraTarget.copy(W),this.camera.position.copy(this.cameraPos),this.camera.lookAt(this.cameraTarget)}pickAt(J,Z){let Q=this.canvas.getBoundingClientRect();this.pointer.x=(J-Q.left)/Q.width*2-1,this.pointer.y=-((Z-Q.top)/Q.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);let W=[];for(let H of this.panels)W.push(...H.group.children);let Y=this.raycaster.intersectObjects(W,!1);for(let H of Y){let K=H.object.userData&&H.object.userData.deskId;if(typeof K==="number")return K}return null}groundAt(J,Z){let Q=this.canvas.getBoundingClientRect(),W=new F0((J-Q.left)/Q.width*2-1,-((Z-Q.top)/Q.height)*2+1);this.raycaster.setFromCamera(W,this.camera);let Y=new K6(new P(0,1,0),0),H=new P;if(!this.raycaster.ray.intersectPlane(Y,H))return null;if(Math.abs(H.x-12)>20||Math.abs(H.z-8)>14)return null;return{x:H.x,z:H.z}}pointerOnDesk(J,Z){return this.pickAt(J,Z)}resize(){let{innerWidth:J,innerHeight:Z}=window;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(J,Z,!1),this.camera.aspect=J/Z,this.camera.updateProjectionMatrix()}update(J){this.time+=J;let Z=this.time,Q=Math.min(1,this.speed/2.6);this.walkPhase+=J*(3.2+this.speed*2.4);let W=Math.sin(this.walkPhase)*0.62*Q;if(this.legL&&this.legR){if(this.legL.rotation.x=W,this.legR.rotation.x=-W,this.kneeL)this.kneeL.rotation.x=Math.max(0,-W)*0.9+0.035;if(this.kneeR)this.kneeR.rotation.x=Math.max(0,W)*0.9+0.035;let H=1-Q;this.armL.rotation.x=-W*0.75+Math.sin(Z*1.15)*0.018*H,this.armR.rotation.x=W*0.75+Math.sin(Z*1.15+1.3)*0.018*H,this.avatarBody.position.y=Math.abs(Math.sin(this.walkPhase*2))*0.03*Q,this.avatarBody.rotation.z=Math.sin(this.walkPhase)*0.015*Q;let K=1+Math.sin(Z*1.6)*0.008;this.avatarBody.scale.y=this.avatarBaseScale*K;let X=Math.sin(Z*1.35)>0.994?0.14:1;for(let U of this.eyeGroups)U.scale.y=X}let Y=this.targetYaw-this.avatarYaw;while(Y>Math.PI)Y-=Math.PI*2;while(Y<-Math.PI)Y+=Math.PI*2;if(this.avatarYaw+=Y*Math.min(1,J*11),this.avatar.position.set(this.avatarPos.x,0,this.avatarPos.z),this.avatar.rotation.y=this.avatarYaw,this.mode==="create")this.avatar.rotation.y=Math.sin(Z*0.32)*0.32;for(let H of this.panels){H.group.position.y=H.baseY+Math.sin(Z*1.1+H.index*0.8)*0.012;let K=H.index===this.focusId?1.035:1;H.group.scale.x+=(K-H.group.scale.x)*Math.min(1,J*8),H.group.scale.y=H.group.scale.x,H.group.scale.z=H.group.scale.x}this.updateCamera(J),this.renderer.render(this.scene,this.camera)}updateCamera(J){let Z=new P(this.avatarPos.x,1.15,this.avatarPos.z),Q,W;if(this.mode==="cinematic"){let H=this.time*0.05;Q=new P(12+Math.cos(H)*5.2,2.6+Math.sin(H*0.7)*0.14,9.6+Math.sin(H)*2.6),W=new P(12,1.25,7.2)}else if(this.mode==="create")Q=new P(this.avatarPos.x+0.72,1.55,this.avatarPos.z+2.85),W=new P(this.avatarPos.x,1.02,this.avatarPos.z);else{let{yaw:H,pitch:K,dist:X}=this.cameraOrbit;Q=new P(Z.x+Math.sin(H)*Math.cos(K)*X,Z.y+Math.sin(K)*X,Z.z+Math.cos(H)*Math.cos(K)*X),W=Z;let U=new P(Z.x,1.4,Z.z),G=new P().subVectors(Q,U),q=G.length();if(q>0.1){G.normalize(),this.cameraRay.set(U,G),this.cameraRay.far=q;let V=this.cameraRay.intersectObjects(this.blockers,!1);if(V.length){let E=Math.max(0.9,V[0].distance-0.28);Q.copy(U).addScaledVector(G,E)}}if(this.blend>0&&this.blend<1){let V=this.blend,E=new P(this.avatarPos.x+0.72,1.55,this.avatarPos.z+2.85),D=new P(this.avatarPos.x,1.02,this.avatarPos.z),O=aU(V);Q.lerpVectors(E,Q,O),W=new P().lerpVectors(D,W,O)}}Q.x=p6(Q.x,0.9,23.1),Q.z=p6(Q.z,0.9,21),Q.y=p6(Q.y,0.75,3.2);let Y=this.mode==="cinematic"?1-Math.exp(-J*1.6):1-Math.exp(-J*9);this.cameraPos.lerp(Q,Y),this.cameraTarget.lerp(W,1-Math.exp(-J*12)),this.camera.position.copy(this.cameraPos),this.camera.lookAt(this.cameraTarget)}}function m8(J,Z,Q,W,Y,H){let K=Math.min(H,Y/2,W/2);J.beginPath(),J.moveTo(Z+K,Q),J.arcTo(Z+W,Q,Z+W,Q+Y,K),J.arcTo(Z+W,Q+Y,Z,Q+Y,K),J.arcTo(Z,Q+Y,Z,Q,K),J.arcTo(Z,Q,Z+W,Q,K),J.closePath()}class IJ{constructor(){this.enabled=!1,this.ctx=null,this.master=null,this.ambient=null,this.lastStep=0}ensure(){if(this.ctx){if(this.ctx.state==="suspended")this.ctx.resume();return}let J=window.AudioContext||window.webkitAudioContext;if(!J)return;this.ctx=new J,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination),this.buildAmbient()}buildAmbient(){let J=this.ctx,Z=J.createGain();Z.gain.value=0.035;let Q=J.createBiquadFilter();Q.type="lowpass",Q.frequency.value=420,Q.Q.value=0.6,Z.connect(Q),Q.connect(this.master);let Y=[55,82.5,110,164.81].map((X,U)=>{let G=J.createOscillator();G.type=U===3?"sine":"triangle",G.frequency.value=X,G.detune.value=(U-1.5)*6;let q=J.createGain();return q.gain.value=U===3?0.05:0.16/(U+1),G.connect(q),q.connect(Z),G.start(),G}),H=J.createOscillator();H.frequency.value=0.05;let K=J.createGain();K.gain.value=140,H.connect(K),K.connect(Q.frequency),H.start(),this.ambient={bus:Z,filter:Q,oscs:[...Y,H]}}setEnabled(J){if(this.enabled=!!J,this.enabled){if(this.ensure(),this.master){let Z=this.ctx.currentTime;this.master.gain.cancelScheduledValues(Z),this.master.gain.setTargetAtTime(0.5,Z,0.35)}}else if(this.master){let Z=this.ctx.currentTime;this.master.gain.cancelScheduledValues(Z),this.master.gain.setTargetAtTime(0,Z,0.2)}}tone(J,Z=0.12,{type:Q="sine",gain:W=0.12,slide:Y=0,delay:H=0}={}){if(!this.enabled||!this.ctx)return;let K=this.ctx,X=K.currentTime+H,U=K.createOscillator();if(U.type=Q,U.frequency.setValueAtTime(J,X),Y)U.frequency.exponentialRampToValueAtTime(Math.max(40,J+Y),X+Z);let G=K.createGain();return G.gain.setValueAtTime(0.0001,X),G.gain.exponentialRampToValueAtTime(W,X+0.012),G.gain.exponentialRampToValueAtTime(0.0001,X+Z),U.connect(G),G.connect(this.master),U.start(X),U.stop(X+Z+0.05),U}noise(J=0.08,{gain:Z=0.05,freq:Q=500,q:W=1.2,delay:Y=0}={}){if(!this.enabled||!this.ctx)return;let H=this.ctx,K=H.currentTime+Y,X=Math.max(1,Math.floor(H.sampleRate*J)),U=H.createBuffer(1,X,H.sampleRate),G=U.getChannelData(0);for(let D=0;D<X;D+=1)G[D]=Math.random()*2-1;let q=H.createBufferSource();q.buffer=U;let V=H.createBiquadFilter();V.type="bandpass",V.frequency.value=Q,V.Q.value=W;let E=H.createGain();E.gain.setValueAtTime(Z,K),E.gain.exponentialRampToValueAtTime(0.0001,K+J),q.connect(V),V.connect(E),E.connect(this.master),q.start(K),q.stop(K+J+0.02)}step(){let J=performance.now();if(J-this.lastStep<230)return;this.lastStep=J,this.noise(0.07,{gain:0.035,freq:260+Math.random()*120,q:0.9})}ui(){this.tone(720,0.06,{type:"square",gain:0.04})}open(){this.tone(392,0.16,{type:"triangle",gain:0.09}),this.tone(587.33,0.28,{type:"triangle",gain:0.07,delay:0.06})}close(){this.tone(587.33,0.12,{type:"triangle",gain:0.05,slide:-180})}chime(){[523.25,659.25,783.99].forEach((J,Z)=>{this.tone(J,0.5,{type:"sine",gain:0.08,delay:Z*0.09})})}startShift(){this.tone(110,0.5,{type:"sine",gain:0.16}),this.noise(0.25,{gain:0.04,freq:180,q:0.7}),this.chime()}}var OQ="Arggon",o9="https://github.com/Arggon",$J="https://arggon.github.io/arggon-cv/";var RQ=[{name:"dotnet-batchyard",description:".NET 10 backend showcase: TVP+MERGE batch ingest, JWT plans and roles, CQRS payments with outbox and RabbitMQ, a strangler migration from monolith to service via YARP, OpenTelemetry. k6 on a cloud VM: extracted ingest p50 93% lower than the monolith at 500 items/request.",language:"TypeScript",stars:0,forks:0,homepage:null,topics:["arggonmanager","aspnetcore","cqrs","csharp","dotnet","k6","microservices","opentelemetry","outbox-pattern","rabbitmq","redis","sql-server","strangler-fig","testcontainers","yarp"],updated:"2026-10-15",url:"https://github.com/Arggon/dotnet-batchyard"},{name:"cuentas-claras",description:"Shared-expense tracker for trips and groups: log who paid, see who owes whom, settle up with the fewest transfers. Node + TypeScript + Express.",language:"TypeScript",stars:0,forks:0,homepage:null,topics:["expense-tracker","express","nodejs","split-bills","typescript"],updated:"2026-10-14",url:"https://github.com/Arggon/cuentas-claras"},{name:"suizo",description:"Swiss-system tournament manager for amateur events — one binary, one JSON file",language:"Go",stars:0,forks:0,homepage:null,topics:["cli","go","swiss-system","tournament"],updated:"2026-10-14",url:"https://github.com/Arggon/suizo"},{name:"racha",description:"Tracker de hábitos con rachas — CLI en Rust, datos locales, notificaciones de escritorio",language:"Rust",stars:0,forks:0,homepage:null,topics:["cli","habit-tracker","productivity","rust","streaks"],updated:"2026-10-13",url:"https://github.com/Arggon/racha"},{name:"estanteria",description:"Tracker de lectura personal: CLI en Go + ledger JSON atómico",language:"Go",stars:0,forks:0,homepage:null,topics:["cli","go","json","reading-tracker"],updated:"2026-10-14",url:"https://github.com/Arggon/estanteria"},{name:"ember-ascent",description:"Ember Ascent — agent-playable roguelike deckbuilder (browser, zero deps)",language:"JavaScript",stars:0,forks:0,homepage:"https://arggondev.itch.io/ember-ascent",topics:[],updated:"2026-10-18",url:"https://github.com/Arggon/ember-ascent"}];var R0=(J)=>document.getElementById(J);function l6(J){let Z=[],Q=J;while(Q&&Q.$==="Con")Z.push(Q.head),Q=Q.tail;return Z}var a9=(J,Z,Q)=>Math.min(Q,Math.max(Z,J)),V6={get(J,Z){try{let Q=localStorage.getItem(J);return Q===null?Z:Q}catch{return Z}},set(J,Z){try{localStorage.setItem(J,String(Z))}catch{}}},eU=window.matchMedia("(prefers-reduced-motion: reduce)").matches,M8=window.matchMedia("(pointer: coarse)").matches,u8=S6.layout(),Y6={room:u8.room,start:u8.start,desks:l6(u8.desks),props:l6(u8.props),palette:l6(u8.palette)},u6=Y6.palette.length?Y6.palette:l8,b0=S6.ui(),s8=l6(S6.story()),JG=l6(S6.projects()),d0={lang:V6.get("al.lang",navigator.language&&navigator.language.toLowerCase().startsWith("es")?"es":"en"),sound:V6.get("al.sound","off")==="on",name:V6.get("al.name",""),preset:a9(Number(V6.get("al.preset","0"))||0,0,2),color:a9(Number(V6.get("al.color","0"))||0,0,u6.length-1)},P6=JG.map((J)=>{let Z=RQ.find((Q)=>Q.name===J.name)||{};return{name:J.name,lang:J.lang,es:J.es,tags:l6(J.tags),fallbackTags:l6(J.tags),description:Z.description||"",language:Z.language||"code",stars:Z.stars||0,topics:Z.topics||[],homepage:Z.homepage||"",updated:Z.updated||"",url:Z.url||`${o9}/${J.name}`}}),r5=(J)=>J?J[d0.lang]:"",ZG=(J)=>J.topics&&J.topics.length?J.topics:J.tags||[],b={phase:"hero",modal:null,storyIndex:0,x:Y6.start.x,y:Y6.start.y,vx:0,vy:0,facing:Math.PI,camYaw:0,camPitch:M8?0.13:0.24,camDist:M8?7.4:5.6,blend:0,hovered:-1,focus:{idx:-1,can:!1},target:null,pending:null,moveSpeed:300,onboardingUntil:0},Z5;try{Z5=new AJ(R0("scene"),Y6),Z5.setProjects(P6),Z5.setLang(d0.lang),Z5.setAvatar({preset:d0.preset,color:u6[d0.color]}),Z5.placeAvatar(b.x/100,b.y/100,b.facing,0)}catch(J){throw console.error("WebGL unavailable:",J),document.querySelectorAll(".screen").forEach((Z)=>Z.classList.add("hidden")),R0("btn-lang-intro").classList.add("hidden"),R0("screen-fatal").classList.remove("hidden"),J}var w5=new IJ;w5.enabled=d0.sound;var QG=["screen-hero","screen-story","screen-create"];function i8(J){for(let Z of QG)R0(Z).classList.toggle("hidden",Z!==J);R0("hud").classList.toggle("hidden",J!==null)}function e9(J){R0("hud").classList.toggle("hidden",!J),R0("btn-lang-intro").classList.toggle("hidden",J)}function r0(J,Z){let Q=R0(J);if(Q)Q.textContent=Z}function kJ(){document.documentElement.lang=d0.lang;let J=(Q)=>r5(Q);r0("hero-kicker",J(b0.kicker)),r0("hero-role",J(b0.role)),r0("hero-intro",J(b0.intro)),r0("hero-credits",J(b0.credits)),r0("btn-enter",J(b0.enter)),r0("btn-hero-skip",J(b0.skip)),R0("hero-github").href=o9,R0("hero-cv").href=$J;let Z=R0("hero-facts");Z.innerHTML="";for(let Q of[`${Y6.desks.length.toString().padStart(2,"0")} ${J(b0.factStations)}`,J(b0.factEngine),J(b0.factData)]){let W=document.createElement("li");W.textContent=Q,Z.appendChild(W)}if(r0("story-kicker",J(b0.kicker)),r0("btn-story-next",J(b0.next)),r0("btn-story-skip",J(b0.skip)),PJ(),r0("create-kicker",J(b0.kicker)),r0("create-title",J(b0.createTitle)),r0("create-sub",J(b0.createSub)),r0("name-label",J(b0.nameLabel)),R0("name-input").placeholder=J(b0.namePlaceholder),r0("look-label",J(b0.lookLabel)),r0("color-label",J(b0.colorLabel)),r0("btn-back",J(b0.back)),r0("btn-clock-in",J(b0.clockIn)),r0("name-error",J(b0.nameError)),r0("player-role",J(b0.playerRole)),r0("hint",M8?J(b0.hudHintTouch):J(b0.hudHint)),R0("btn-lang").textContent=d0.lang==="en"?"ES":"EN",R0("btn-lang-intro").textContent=d0.lang==="en"?"ES":"EN",R0("btn-lang").setAttribute("aria-label",d0.lang==="en"?"Cambiar a español":"Switch to English"),R0("btn-sound").setAttribute("aria-label",d0.sound?J(b0.soundOn):J(b0.soundOff)),R0("btn-sound").setAttribute("aria-pressed",d0.sound?"true":"false"),R0("btn-about").setAttribute("aria-label",J(b0.aboutTitle)),r0("a-title",J(b0.aboutTitle)),r0("a-body",J(b0.aboutBody)),r0("a-github",J(b0.aboutGithub)+" ↗"),R0("a-github").href=o9,r0("a-cv",J(b0.aboutCv)+" ↗"),R0("a-cv").href=$J,r0("a-credits",J(b0.credits)),r0("a-technical",J(b0.technical)),r0("a-restart",J(b0.restart)),r0("a-close",J(b0.close)),r0("p-close",J(b0.close)),wQ(),TQ(),document.title=d0.lang==="es"?"Arggon Labs — fuera de horario":"Arggon Labs — after hours",b.modal==="project")TJ(b.openProject);if(b.phase==="story")LJ(s8[b.storyIndex][d0.lang],!0)}var z6={timer:null,full:"",done:!0};function PQ(){if(z6.timer)clearTimeout(z6.timer);z6.timer=null}function CJ(){PQ(),R0("story-text").textContent=z6.full,R0("story-text").classList.add("done"),z6.done=!0}function LJ(J,Z=!1){PQ(),z6.full=J,z6.done=!1;let Q=R0("story-text");if(Q.classList.remove("done"),Z||eU){CJ();return}let W=0,Y=()=>{if(W=Math.min(J.length,W+1),Q.textContent=J.slice(0,W),W>=J.length)CJ();else z6.timer=setTimeout(Y,14+Math.random()*26)};Y()}function PJ(){let J=R0("story-dots");J.innerHTML="";for(let Z=0;Z<s8.length;Z+=1){let Q=document.createElement("i");if(Z===b.storyIndex)Q.className="on";J.appendChild(Q)}}function r9(J=0){b.phase="story",b.storyIndex=J,Z5.setMode("cinematic"),i8("screen-story"),PJ(),LJ(s8[J][d0.lang]),R0("btn-story-next").focus()}function MQ(){if(!z6.done){CJ();return}if(b.storyIndex<s8.length-1)b.storyIndex+=1,PJ(),LJ(s8[b.storyIndex][d0.lang]);else wJ()}function zQ(){wJ()}function wQ(){let J=R0("presets");J.innerHTML="";let Z=[r5(b0.presetA),r5(b0.presetB),r5(b0.presetC)],Q=["☾","◈","◇"];Z.forEach((W,Y)=>{let H=document.createElement("button");H.type="button",H.className="preset",H.setAttribute("role","radio"),H.setAttribute("aria-checked",String(Y===d0.preset)),H.setAttribute("aria-label",W),H.innerHTML=`<span class="silhouette" aria-hidden="true">${Q[Y]}</span><strong>${W}</strong><small>0${Y+1}</small>`,H.addEventListener("click",()=>{d0.preset=Y,V6.set("al.preset",Y),Z5.setAvatar({preset:Y,color:u6[d0.color]}),wQ(),w5.ui()}),J.appendChild(H)})}function TQ(){let J=R0("swatches");J.innerHTML="",l8.forEach((Z,Q)=>{let W=document.createElement("button");W.type="button",W.className="swatch",W.setAttribute("role","radio"),W.setAttribute("aria-checked",String(Q===d0.color)),W.setAttribute("aria-label",`Color ${Q+1}`),W.style.background=`#${Z.toString(16).padStart(6,"0")}`,W.addEventListener("click",()=>{d0.color=Q,V6.set("al.color",Q),Z5.setAvatar({preset:d0.preset,color:u6[Q]}),TQ(),w5.ui()}),J.appendChild(W)})}function wJ(){b.phase="create",b.modal=null,b.x=1200,b.y=790,b.facing=0,Z5.setMode("create"),Z5.placeAvatar(12,7.9,b.facing,0),Z5.setAvatar({preset:d0.preset,color:u6[d0.color]}),i8("screen-create"),e9(!1),R0("name-error").classList.add("hidden"),R0("name-input").value=d0.name||"",w5.ui(),setTimeout(()=>R0("name-input").focus(),80)}function BQ(){let J=R0("name-input").value.trim().replace(/\s+/g," ");if(!J){R0("name-error").classList.remove("hidden"),R0("name-input").focus(),w5.close();return}d0.name=J.slice(0,20),V6.set("al.name",d0.name),b.phase="play",b.modal=null,b.x=Y6.start.x,b.y=Y6.start.y,b.vx=0,b.vy=0,b.facing=Math.PI,b.camYaw=0,b.camPitch=M8?0.13:0.24,b.camDist=M8?7.4:5.6,b.blend=1,b.target=null,b.pending=null,b.onboardingUntil=performance.now()+5200,Z5.setMode("follow"),Z5.setBlend(1),Z5.placeAvatar(b.x/100,b.y/100,b.facing,0),Z5.setCamera({yaw:b.camYaw,pitch:b.camPitch,dist:b.camDist}),Z5.snapCamera(),r0("player-name",d0.name),R0("badge-chip").style.background=`#${u6[d0.color].toString(16).padStart(6,"0")}`,R0("badge-chip").style.color=`#${u6[d0.color].toString(16).padStart(6,"0")}`,i8(null),e9(!0),R0("status").textContent=r5(b0.onboarding),w5.startShift(),R0("prompt").classList.add("hidden"),R8()}var d8="";function R8(){if(performance.now()<b.onboardingUntil)return;R0("status").textContent=d8}var SQ="al.repos.v1",WG=600000;function AQ(J){for(let Z of P6){let Q=J.find((W)=>W.name===Z.name);if(!Q)continue;Z.description=Q.description||Z.description,Z.language=Q.language||Z.language,Z.stars=Q.stargazers_count||0,Z.topics=Q.topics||[],Z.homepage=Q.homepage||Z.homepage,Z.updated=(Q.updated_at||"").slice(0,10),Z.url=Q.html_url||Z.url}Z5.setProjects(P6)}function YG(){try{let J=sessionStorage.getItem(SQ);if(!J)return null;let Z=JSON.parse(J);if(!Z||!Array.isArray(Z.repos))return null;if(Date.now()-Number(Z.at)>WG)return null;return Z.repos}catch{return null}}function HG(J){try{sessionStorage.setItem(SQ,JSON.stringify({at:Date.now(),repos:J.map((Z)=>({name:Z.name,description:Z.description,language:Z.language,stargazers_count:Z.stargazers_count,topics:Z.topics,homepage:Z.homepage,updated_at:Z.updated_at,html_url:Z.html_url}))}))}catch{}}async function XG(){let J=YG();if(J){AQ(J),d8=`${P6.length} · ${r5(b0.live)}`,R8();return}d8=r5(b0.loading),R8();let Z=new AbortController,Q=setTimeout(()=>Z.abort(),7000);try{let W=await fetch(`https://api.github.com/users/${OQ}/repos?per_page=100&sort=updated`,{headers:{Accept:"application/vnd.github+json"},signal:Z.signal});if(!W.ok)throw Error(`GitHub ${W.status}`);let Y=await W.json();AQ(Y),HG(Y),d8=`${P6.length} · ${r5(b0.live)}`}catch(W){d8=`${P6.length} · ${r5(b0.offline)}`}finally{if(clearTimeout(Q),b.onboardingUntil=0,R8(),b.modal==="project")TJ(b.openProject)}}function TJ(J){let Z=P6[J];if(!Z)return;b.openProject=J,r0("p-index",`STATION ${String(J+1).padStart(2,"0")} / 06 · ${(Z.lang||Z.language||"code").toUpperCase()}`),r0("p-title",Z.name.replace(/-/g," ").toUpperCase());let Q=d0.lang==="es"?Z.es||Z.description:Z.description||Z.es;r0("p-desc",Q||"");let W=R0("p-tags");W.innerHTML="";for(let K of ZG(Z).slice(0,8)){let X=document.createElement("span");X.textContent=String(K).toUpperCase(),W.appendChild(X)}r0("p-meta",[Z.lang||Z.language||"",`${Z.stars||0}★`,Z.updated||""].filter(Boolean).join(" · "));let Y=R0("p-repo");Y.href=Z.url,Y.textContent=r5(b0.openRepo)+" ↗";let H=R0("p-live");if(Z.homepage)H.href=Z.homepage,H.textContent=r5(b0.liveDemo)+" ↗",H.classList.remove("hidden");else H.classList.add("hidden")}function vQ(J){if(b.phase!=="play")return;b.modal="project",TJ(J),R0("modal-project").classList.remove("hidden"),R0("p-close").focus(),w5.open(),J7()}function IQ(){b.modal="about",R0("modal-about").classList.remove("hidden"),R0("a-close").focus(),w5.open(),J7()}function c8(){if(!b.modal)return;b.modal=null,R0("modal-project").classList.add("hidden"),R0("modal-about").classList.add("hidden"),R0("scene").focus(),w5.close()}var W6=new Set,_5=null,t9=-1,$Q={x:0,y:0};function J7(){W6.clear(),b.vx=0,b.vy=0}function KG(J){let Z=Y6.desks[J];if(!Z)return null;let Q=Z.x+Z.w/2,W=Z.y+Z.h/2;return{x:Z.side===0?Z.x+Z.w+80:Z.x-80,y:W}}function UG(J,Z){if(b.phase!=="play"||b.modal)return;let Q=Z5.pickAt(J,Z);if(Q!==null){let Y=KG(Q);b.pending=Q,b.target=Y,w5.ui();return}let W=Z5.groundAt(J,Z);if(W)b.target={x:W.x*100,y:W.z*100},b.pending=null,w5.ui()}function GG(){let J=R0("scene");J.addEventListener("pointerdown",(Q)=>{if(b.phase!=="play"||b.modal)return;J.setPointerCapture(Q.pointerId),_5={x:Q.clientX,y:Q.clientY,moved:!1,id:Q.pointerId},$Q={x:Q.clientX,y:Q.clientY}}),J.addEventListener("pointermove",(Q)=>{if($Q={x:Q.clientX,y:Q.clientY},_5&&_5.id===Q.pointerId){let W=Q.clientX-_5.x,Y=Q.clientY-_5.y;if(!_5.moved&&Math.hypot(W,Y)>5)_5.moved=!0;if(_5.moved)b.camYaw-=W*0.006,b.camPitch=a9(b.camPitch+Y*0.004,0.08,1.12),_5.x=Q.clientX,_5.y=Q.clientY,J.style.cursor="grabbing";return}if(b.phase==="play"&&!b.modal){let W=Z5.pickAt(Q.clientX,Q.clientY);t9=W===null?-1:W,J.style.cursor=t9>=0?"pointer":"grab"}});let Z=(Q)=>{if(!_5||_5.id!==Q.pointerId)return;let W=!_5.moved;if(_5=null,J.style.cursor="grab",W)UG(Q.clientX,Q.clientY)};J.addEventListener("pointerup",Z),J.addEventListener("pointercancel",()=>{_5=null,J.style.cursor="grab"}),J.addEventListener("wheel",(Q)=>{if(b.phase!=="play"||b.modal)return;Q.preventDefault(),b.camDist=a9(b.camDist+Math.sign(Q.deltaY)*0.45,3.6,10)},{passive:!1}),window.addEventListener("keydown",(Q)=>{let W=Q.target&&Q.target.tagName||"";if(W==="INPUT"||W==="TEXTAREA"){if(Q.key==="Enter"&&b.phase==="create")BQ();return}if((W==="BUTTON"||W==="A")&&(Q.key==="Enter"||Q.key===" "))return;let Y=Q.key.toLowerCase();if(b.modal){if(Y==="escape")c8();return}if(b.phase==="hero"){if(Y==="enter"||Y===" ")Q.preventDefault(),r9(0);return}if(b.phase==="story"){if(Y==="enter"||Y===" "||Y==="arrowright")Q.preventDefault(),MQ();if(Y==="escape")zQ();return}if(b.phase==="create"){if(Y==="escape")r9(0);return}if(b.phase!=="play")return;if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(Y))Q.preventDefault(),W6.add(Y),b.target=null,b.pending=null;if(Y==="e")Q.preventDefault(),CQ();if(Y==="h")IQ();if(Y==="m")LQ();if(Y==="escape")c8()}),window.addEventListener("keyup",(Q)=>{W6.delete(Q.key.toLowerCase())}),window.addEventListener("blur",J7),R0("btn-enter").addEventListener("click",()=>r9(0)),R0("btn-hero-skip").addEventListener("click",()=>wJ()),R0("btn-story-next").addEventListener("click",MQ),R0("btn-story-skip").addEventListener("click",zQ),R0("btn-back").addEventListener("click",()=>r9(0)),R0("btn-clock-in").addEventListener("click",BQ),R0("prompt").addEventListener("click",CQ),R0("btn-about").addEventListener("click",IQ),R0("btn-lang").addEventListener("click",kQ),R0("btn-lang-intro").addEventListener("click",kQ),R0("btn-sound").addEventListener("click",LQ),R0("a-restart").addEventListener("click",FG),document.querySelectorAll("[data-close]").forEach((Q)=>{Q.addEventListener("click",c8)}),document.querySelectorAll(".modal").forEach((Q)=>{Q.addEventListener("pointerdown",(W)=>{if(W.target===Q)c8()})}),qG(),VG()}function CQ(){if(b.phase!=="play"||b.modal)return;if(b.focus&&b.focus.can&&b.focus.idx>=0)vQ(b.focus.idx)}function kQ(){if(d0.lang=d0.lang==="en"?"es":"en",V6.set("al.lang",d0.lang),Z5.setLang(d0.lang),kJ(),b.phase==="play")R8();w5.ui()}function LQ(){if(d0.sound=!d0.sound,V6.set("al.sound",d0.sound?"on":"off"),w5.setEnabled(d0.sound),d0.sound)w5.ui();kJ()}function VG(){let J=()=>{if(d0.sound)w5.setEnabled(!0);window.removeEventListener("pointerdown",J),window.removeEventListener("keydown",J)};window.addEventListener("pointerdown",J,{once:!0}),window.addEventListener("keydown",J,{once:!0})}var f5={active:!1,id:null,x:0,y:0};function qG(){let J=R0("joystick"),Z=J.querySelector(".knob");if(!M8){J.classList.add("hidden");return}J.classList.remove("hidden");let Q=(Y)=>{let H=J.getBoundingClientRect(),K=H.left+H.width/2,X=H.top+H.height/2,U=(Y.clientX-K)/(H.width*0.42),G=(Y.clientY-X)/(H.height*0.42),q=Math.hypot(U,G),V=q>1?U/q:U,E=q>1?G/q:G;f5.x=V,f5.y=E,Z.style.transform=`translate(${V*32}px, ${E*32}px)`};J.addEventListener("pointerdown",(Y)=>{if(b.phase!=="play"||b.modal)return;Y.preventDefault(),J.setPointerCapture(Y.pointerId),f5.active=!0,f5.id=Y.pointerId,Q(Y)}),J.addEventListener("pointermove",(Y)=>{if(f5.active&&f5.id===Y.pointerId)Q(Y)});let W=(Y)=>{if(f5.id!==Y.pointerId)return;f5.active=!1,f5.id=null,f5.x=0,f5.y=0,Z.style.transform="translate(0, 0)"};J.addEventListener("pointerup",W),J.addEventListener("pointercancel",W)}function EG(J){let Z=0,Q=0;if(W6.has("w")||W6.has("arrowup"))Q+=1;if(W6.has("s")||W6.has("arrowdown"))Q-=1;if(W6.has("d")||W6.has("arrowright"))Z+=1;if(W6.has("a")||W6.has("arrowleft"))Z-=1;if(f5.active&&(Math.abs(f5.x)>0.08||Math.abs(f5.y)>0.08))Z+=f5.x,Q+=-f5.y;let W=0,Y=0;if(Math.abs(Z)+Math.abs(Q)>0.05){let E=Math.hypot(Z,Q)||1;Z/=E,Q/=E;let D=-Math.sin(b.camYaw),O=-Math.cos(b.camYaw),R=Math.cos(b.camYaw),N=-Math.sin(b.camYaw),F=D*Q+R*Z,B=O*Q+N*Z;W=F*b.moveSpeed,Y=B*b.moveSpeed,b.target=null}else if(b.target){let E=b.target.x-b.x,D=b.target.y-b.y,O=Math.hypot(E,D);if(O<16)b.target=null;else W=E/O*b.moveSpeed,Y=D/O*b.moveSpeed}let H=1-Math.exp(-J*12);if(b.vx+=(W-b.vx)*H,b.vy+=(Y-b.vy)*H,Math.abs(b.vx)<0.5)b.vx=0;if(Math.abs(b.vy)<0.5)b.vy=0;let K=Math.round(b.x+b.vx*J),X=Math.round(b.y+b.vy*J),U=S6.slide(b.x,b.y,K,X);b.x=U.x,b.y=U.y;let G=Math.hypot(b.vx,b.vy);if(G>6){if(b.facing=Math.atan2(b.vx,b.vy),G>80)w5.step()}Z5.placeAvatar(b.x/100,b.y/100,b.facing,G/100),Z5.setCamera({yaw:b.camYaw,pitch:b.camPitch,dist:b.camDist});let q=S6.focus(b.x,b.y);b.focus={idx:q.can?Number(q.idx):-1,can:!!q.can};let V=t9>=0?t9:b.focus.can?b.focus.idx:-1;if(Z5.setFocus(V),b.focus.can){let E=b.focus.idx;r0("prompt-text",`${r5(b0.inspect)} — ${P6[E].name.replace(/-/g," ")}`),R0("prompt").classList.remove("hidden")}else R0("prompt").classList.add("hidden");if(b.pending!==null&&b.focus.can&&b.focus.idx===b.pending){let E=b.pending;b.pending=null,b.target=null,vQ(E)}}function n8(J){let Z=Math.min(0.05,(J-n8.last)/1000||0.016);if(n8.last=J,b.phase==="play"&&!b.modal)EG(Z);if(b.blend<1){if(b.blend=Math.min(1,b.blend+Z/1.6),Z5)Z5.setBlend(b.blend)}if(b.onboardingUntil&&performance.now()>b.onboardingUntil)b.onboardingUntil=0,R8();Z5.update(Z),requestAnimationFrame(n8)}n8.last=performance.now();function FG(){c8(),b.phase="hero",b.storyIndex=0,b.x=Y6.start.x,b.y=Y6.start.y,b.vx=0,b.vy=0,b.facing=Math.PI,b.target=null,b.pending=null,b.blend=0,J7(),Z5.setMode("cinematic"),Z5.placeAvatar(b.x/100,b.y/100,b.facing,0),i8("screen-hero"),e9(!1),w5.close()}window.addEventListener("resize",()=>Z5.resize());function DG(){GG(),kJ(),i8("screen-hero"),e9(!1),R0("btn-enter").focus({preventScroll:!0}),XG(),requestAnimationFrame(n8)}DG();

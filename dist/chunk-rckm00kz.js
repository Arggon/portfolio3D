function UQ(J){return J.replace(/\p{Cs}/gu,"�")}function R0(J){while(J!==null&&typeof J==="object"&&J.$==="$JMP")J=J.f(J.x);return J}function M0(J,Z){return(...Q)=>Q.length<Z?M0((...W)=>J(...Q,...W),Z-Q.length):R0(J(...Q))}var $U=Object.create(null);function R4(){return 2400}function M4(){return 1600}function z4(){return 50}function B4(){return 38}function A4(){return 250}function c9(){let J=D4(),Z=D4();return Math.imul(J,Z)>>>0}function I4(){return{$:"Room",w:c8(),h:n8()}}function $4(){return{$:"Vec",x:900,y:1410}}function d8(J,Z,Q){if(J)return Z;else return Q}function VQ(J,Z,Q){if(J)return Z;else return Q}function C4(J,Z,Q){if(J)return Z;else return Q}function k4(J,Z){let Q=u8(J>=Z,J,Z),W=u8(J>Z,Z,J);return Q-W>>>0}function L4(J,Z,Q){return d8(J<Z,Z,u8(J>Q,Q,J))}function w4(){return{$:"Con",head:{$:"Desk",id:0,x:380,y:270,w:300,h:120,hue:3526911,side:0},tail:{$:"Con",head:{$:"Desk",id:1,x:380,y:740,w:300,h:120,hue:16732067,side:0},tail:{$:"Con",head:{$:"Desk",id:2,x:380,y:1210,w:300,h:120,hue:16757575,side:0},tail:{$:"Con",head:{$:"Desk",id:3,x:1720,y:270,w:300,h:120,hue:7069818,side:1},tail:{$:"Con",head:{$:"Desk",id:4,x:1720,y:740,w:300,h:120,hue:10189823,side:1},tail:{$:"Con",head:{$:"Desk",id:5,x:1720,y:1210,w:300,h:120,hue:16743004,side:1},tail:{$:"Nil"}}}}}}}}function P4(){return{$:"Con",head:{$:"Prop",kind:0,x:1000,y:1120,w:400,h:120,rot:0},tail:{$:"Con",head:{$:"Prop",kind:1,x:1040,y:120,w:320,h:140,rot:0},tail:{$:"Con",head:{$:"Prop",kind:2,x:1120,y:310,w:160,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:90,y:90,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:2220,y:90,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:90,y:1420,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:3,x:2220,y:1420,w:90,h:90,rot:0},tail:{$:"Con",head:{$:"Prop",kind:4,x:70,y:430,w:70,h:420,rot:0},tail:{$:"Con",head:{$:"Prop",kind:5,x:2250,y:760,w:80,h:80,rot:0},tail:{$:"Nil"}}}}}}}}}}}function T4(){return{$:"Con",head:3526911,tail:{$:"Con",head:16732067,tail:{$:"Con",head:16757575,tail:{$:"Con",head:7069818,tail:{$:"Con",head:10189823,tail:{$:"Con",head:16743004,tail:{$:"Con",head:15262678,tail:{$:"Con",head:3046911,tail:{$:"Nil"}}}}}}}}}}function S4(){return{$:"Layout",room:AQ(),start:WJ(),desks:YJ(),props:s8(),palette:IQ()}}function v4(J,Z,Q){let{x:W,y:Y,w:H,h:K}=J,X=$Q(),U=Z+X>>>0,q=(W+H>>>0)+X>>>0,G=Q+X>>>0,N=(Y+K>>>0)+X>>>0;return y5(H6(U>W,Z<q),H6(G>Y,Q<N))}function f4(J,Z,Q){if(Q.$==="Nil")return!1;else{let{head:W,tail:Y}=Q,H=CQ(W,J,Z),K=i8(J,Z,Y);return H||K}}function b4(J,Z,Q){return{$:"Vec",x:u8(i8(Q,Z,s8()),J,Q),y:Z}}function h4(J,Z,Q){return d8(i8(J,Q,s8()),Z,Q)}function j4(J,Z,Q){let{x:W,y:Y}=Q;return{$:"Vec",x:W,y:kQ(W,Y,Z)}}function y4(J,Z,Q){let{x:W,y:Y}=J,H=c8(),K=d5(),X=N4(Z,d5(),H-K>>>0),U=n8(),V=d5(),q=N4(Q,d5(),U-V>>>0);return j4(Y,q,LQ(W,Y,X))}function _4(J,Z,Q){let{x:W,y:Y,w:H,h:K}=J,X=H/2>>>0,U=W+X>>>0,V=K/2>>>0,q=Y+V>>>0,G=O4(U,Z),E=O4(q,Q),N=Math.imul(G,G)>>>0,O=Math.imul(E,E)>>>0;return N+O>>>0}function x4(J,Z,Q){let{found:W,idx:Y,d2:H,can:K}=J,X=wQ();return C4(Q<H,{$:"Near",found:!0,idx:Z,d2:Q,can:Q<X},{$:"Near",found:W,idx:Y,d2:H,can:K})}function g4(J,Z,Q,W,Y){for(;;){let H=J,K=Z,X=Q,U=W,V=Y;if(H.$==="Nil")return V;else{let{head:q,tail:G}=H,E=PQ(q,X,U);J=G,Z=K+1>>>0,Q=X,W=U,Y=TQ(V,K,E);continue}}}function p4(J,Z){return g4(YJ(),0,J,Z,{$:"Near",found:!1,idx:0,d2:4294967295,can:!1})}function m4(J,Z){let Q=d5(),W=c8(),Y=d5(),H=W-Y>>>0,K=d5(),X=n8(),U=d5(),V=X-U>>>0;return y5(H6(J>=Q,J<=H),H6(Z>=K,Z<=V))}function l4(J){let{x:Z,y:Q,w:W,h:Y}=J,H=d5(),K=c8(),X=d5(),U=Z+W>>>0,V=K-X>>>0,q=d5(),G=n8(),E=d5(),N=Q+Y>>>0,O=G-E>>>0;return y5(Z>=H,H6(U<=V,H6(Q>=q,N<=O)))}function u4(J,Z){let{x:Q,y:W,w:Y,h:H}=J,K=Z.x,X=Z.y,U=Z.w,V=Z.h,q=K+U>>>0,G=Q+Y>>>0,E=X+V>>>0,N=W+H>>>0;return y5(Q<q,H6(K<G,H6(W<E,X<N)))}function d4(J,Z){if(Z.$==="Nil")return!0;else{let{head:Q,tail:W}=Z;return y5(o9(SQ(J,Q)),HJ(J,W))}}function c4(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return y5(HJ(Z,Q),vQ(Q))}}function n4(J,Z){if(J.$==="Nil")return!0;else{let W=J.head.id,Y=J.tail;return y5(W===Z,fQ(Y,Z+1>>>0))}}function s4(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return y5(bQ(Z),hQ(Q))}}function i4(J){let{x:Z,y:Q}=J;return y5(jQ(Z,Q),o9(i8(Z,Q,s8())))}function GQ(){return i4(WJ())}function n9(){return{$:"Copy",kicker:{$:"Line",en:"ARGGON LABS // CANDIDATE INTAKE",es:"ARGGON LABS // INGRESO DE CANDIDATOS"},title:{$:"Line",en:"Six projects. One very late recruiter.",es:"Seis proyectos. Una recruiter muy nocturna."},role:{$:"Line",en:"Full Stack Developer · Argentina",es:"Desarrollador Full Stack · Argentina"},intro:{$:"Line",en:"The lights are off. The CI is green.",es:"Las luces están apagadas. La CI está en verde."},enter:{$:"Line",en:"ENTER THE OFFICE",es:"ENTRAR A LA OFICINA"},skip:{$:"Line",en:"Skip intro",es:"Saltar intro"},next:{$:"Line",en:"Continue",es:"Continuar"},back:{$:"Line",en:"Back",es:"Volver"},createTitle:{$:"Line",en:"BUILD YOUR RECRUITER",es:"ARMÁ A TU RECLUTADOR"},createSub:{$:"Line",en:"This is you. Probably.",es:"Eso sos vos. Probablemente."},nameLabel:{$:"Line",en:"Name",es:"Nombre"},namePlaceholder:{$:"Line",en:"e.g. Alex Rivera",es:"ej. Alex Rivera"},lookLabel:{$:"Line",en:"Look",es:"Apariencia"},colorLabel:{$:"Line",en:"Badge color",es:"Color de credencial"},clockIn:{$:"Line",en:"CLOCK IN",es:"FICHAR"},nameError:{$:"Line",en:"Enter a name to clock in.",es:"Poné un nombre para poder fichar."},hudHint:{$:"Line",en:"WASD / arrows to move · drag to look · E to inspect",es:"WASD / flechas para moverte · arrastrá para mirar · E para inspeccionar"},hudHintTouch:{$:"Line",en:"Joystick to move · tap a station to inspect",es:"Joystick para moverte · tocá una estación para inspeccionar"},inspect:{$:"Line",en:"Inspect",es:"Inspeccionar"},close:{$:"Line",en:"Close",es:"Cerrar"},openRepo:{$:"Line",en:"Open repository",es:"Abrir repositorio"},liveDemo:{$:"Line",en:"Live demo",es:"Ver demo"},aboutTitle:{$:"Line",en:"ABOUT GONZALO",es:"SOBRE GONZALO"},aboutBody:{$:"Line",en:"Full-stack developer from Argentina. Backends that hold up, tools that remove busywork, and games that ship. This office is a Bend program: its layout, collision and copy are checked by the compiler.",es:"Desarrollador full stack argentino. Backends que aguantan, herramientas que sacan trabajo de encima y juegos que se publican. Esta oficina es un programa en Bend: su diseño, colisiones y textos están verificados por el compilador."},aboutGithub:{$:"Line",en:"github.com/Arggon",es:"github.com/Arggon"},aboutCv:{$:"Line",en:"View CV",es:"Ver CV"},aboutHint:{$:"Line",en:"H — about Gonzalo",es:"H — sobre Gonzalo"},soundOn:{$:"Line",en:"Sound on",es:"Sonido sí"},soundOff:{$:"Line",en:"Sound off",es:"Sonido no"},loading:{$:"Line",en:"Fetching live GitHub data…",es:"Buscando datos en vivo de GitHub…"},live:{$:"Line",en:"live GitHub data",es:"datos en vivo de GitHub"},offline:{$:"Line",en:"local snapshot",es:"instantánea local"},restart:{$:"Line",en:"Restart shift",es:"Reiniciar turno"},credits:{$:"Line",en:"Built with Bend + Three.js · layout and copy are law-checked",es:"Hecho con Bend + Three.js · diseño y textos verificados con leyes"},presetA:{$:"Line",en:"Ava",es:"Ava"},presetB:{$:"Line",en:"Max",es:"Max"},presetC:{$:"Line",en:"Rin",es:"Rin"},factStations:{$:"Line",en:"project stations",es:"estaciones de proyectos"},factEngine:{$:"Line",en:"Bend + Three.js",es:"Bend + Three.js"},factData:{$:"Line",en:"live GitHub data",es:"datos en vivo de GitHub"},technical:{$:"Line",en:"The office layout, collision rules, focus logic and every line of copy live in Bend. Nine laws, all proofs check.",es:"El diseño de la oficina, las colisiones, la lógica de foco y cada línea de texto viven en Bend. Nueve leyes, todas demostradas."},onboarding:{$:"Line",en:"Onboarding complete. Day 1 of 1.",es:"Onboarding completo. Día 1 de 1."},playerRole:{$:"Line",en:"Senior Talent Acquisition Specialist",es:"Especialista Senior en Adquisición de Talento"}}}function s9(){return{$:"Con",head:{$:"Line",en:"10:47 PM. Arggon Labs. The lights are off. The CI is green.",es:"22:47. Arggon Labs. Las luces están apagadas. La CI está en verde."},tail:{$:"Con",head:{$:"Line",en:"You are a Senior Talent Acquisition Specialist. Four thousand CVs tonight, not one working demo.",es:"Sos Senior Talent Acquisition Specialist. Cuatro mil CVs esta noche, ni una demo que funcione."},tail:{$:"Con",head:{$:"Line",en:"Then a link arrives: github.com/Arggon. Six projects. Zero buzzwords.",es:"Entonces llega un link: github.com/Arggon. Seis proyectos. Cero palabras de moda."},tail:{$:"Con",head:{$:"Line",en:"Protocol says evaluate in person. Protocol did not mention the office would still be open.",es:"El protocolo dice evaluar en persona. El protocolo no menciona que la oficina sigue abierta."},tail:{$:"Con",head:{$:"Line",en:"Grab a badge. The candidate left the door unlocked.",es:"Agarrá una credencial. El candidato dejó la puerta sin llave."},tail:{$:"Nil"}}}}}}}function o4(){return{$:"Con",head:{$:"Proj",name:"dotnet-batchyard",lang:"C#",es:".NET 10 de punta a punta: ingesta batch con TVP+MERGE, CQRS con outbox y RabbitMQ, y una migración strangler con YARP.",tags:{$:"Con",head:".NET 10",tail:{$:"Con",head:"C#",tail:{$:"Con",head:"CQRS",tail:{$:"Con",head:"RabbitMQ",tail:{$:"Con",head:"YARP",tail:{$:"Con",head:"OpenTelemetry",tail:{$:"Nil"}}}}}}}},tail:{$:"Con",head:{$:"Proj",name:"cuentas-claras",lang:"TypeScript",es:"Gastos compartidos sin planillas: quién pagó, quién debe y la mínima cantidad de transferencias para saldar.",tags:{$:"Con",head:"TypeScript",tail:{$:"Con",head:"Node",tail:{$:"Con",head:"Express",tail:{$:"Nil"}}}}},tail:{$:"Con",head:{$:"Proj",name:"suizo",lang:"Go",es:"Torneos suizos para eventos amateur: un binario, un archivo JSON y cero infraestructura.",tags:{$:"Con",head:"Go",tail:{$:"Con",head:"CLI",tail:{$:"Con",head:"JSON",tail:{$:"Nil"}}}}},tail:{$:"Con",head:{$:"Proj",name:"racha",lang:"Rust",es:"Hábitos y rachas desde la terminal: datos locales, notificaciones de escritorio y nada de nube.",tags:{$:"Con",head:"Rust",tail:{$:"Con",head:"CLI",tail:{$:"Nil"}}}},tail:{$:"Con",head:{$:"Proj",name:"estanteria",lang:"Go",es:"Tu biblioteca personal en la terminal: CLI en Go con un ledger JSON atómico.",tags:{$:"Con",head:"Go",tail:{$:"Con",head:"CLI",tail:{$:"Con",head:"JSON",tail:{$:"Nil"}}}}},tail:{$:"Con",head:{$:"Proj",name:"ember-ascent",lang:"JavaScript",es:"Roguelike de cartas jugable por agentes en el navegador, sin dependencias.",tags:{$:"Con",head:"JavaScript",tail:{$:"Con",head:"Canvas",tail:{$:"Con",head:"Game",tail:{$:"Nil"}}}}},tail:{$:"Nil"}}}}}}}}function r4(J){if(J==="")return!1;else return!0}function a4(J){let{en:Z,es:Q}=J;return y5(R8(Z),R8(Q))}function t4(J){let{kicker:Z,title:Q,role:W,intro:Y,enter:H,skip:K,next:X,back:U,createTitle:V,createSub:q,nameLabel:G,namePlaceholder:E,lookLabel:N,colorLabel:O,clockIn:R,nameError:D,hudHint:F,hudHintTouch:z,inspect:B,close:L,openRepo:P,liveDemo:k,aboutTitle:f,aboutBody:m,aboutGithub:A,aboutCv:$,aboutHint:v,soundOn:n,soundOff:s,loading:w,live:_,offline:u,restart:a,credits:c,presetA:d,presetB:e,presetC:Q0,factStations:y,factEngine:i,factData:W0,technical:V0,onboarding:k0,playerRole:P0}=J;return{$:"Con",head:Z,tail:{$:"Con",head:Q,tail:{$:"Con",head:W,tail:{$:"Con",head:Y,tail:{$:"Con",head:H,tail:{$:"Con",head:K,tail:{$:"Con",head:X,tail:{$:"Con",head:U,tail:{$:"Con",head:V,tail:{$:"Con",head:q,tail:{$:"Con",head:G,tail:{$:"Con",head:E,tail:{$:"Con",head:N,tail:{$:"Con",head:O,tail:{$:"Con",head:R,tail:{$:"Con",head:D,tail:{$:"Con",head:F,tail:{$:"Con",head:z,tail:{$:"Con",head:B,tail:{$:"Con",head:L,tail:{$:"Con",head:P,tail:{$:"Con",head:k,tail:{$:"Con",head:f,tail:{$:"Con",head:m,tail:{$:"Con",head:A,tail:{$:"Con",head:$,tail:{$:"Con",head:v,tail:{$:"Con",head:n,tail:{$:"Con",head:s,tail:{$:"Con",head:w,tail:{$:"Con",head:_,tail:{$:"Con",head:u,tail:{$:"Con",head:a,tail:{$:"Con",head:c,tail:{$:"Con",head:d,tail:{$:"Con",head:e,tail:{$:"Con",head:Q0,tail:{$:"Con",head:y,tail:{$:"Con",head:i,tail:{$:"Con",head:W0,tail:{$:"Con",head:V0,tail:{$:"Con",head:k0,tail:{$:"Con",head:P0,tail:{$:"Nil"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}function e4(){return QJ(_Q(yQ()),xQ())}function i9(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return y5(gQ(Z),pQ(Q))}}function qQ(){return i9(mQ())}function JJ(J){let{name:Z,lang:Q,es:W,tags:Y}=J;return y5(R8(Z),H6(R8(Q),H6(R8(W),o9(lQ(Y)))))}function ZJ(J){if(J.$==="Nil")return!0;else{let{head:Z,tail:Q}=J;return y5(uQ(Z),dQ(Q))}}function EQ(){return S4()}function FQ(J,Z,Q,W){return y4({$:"Vec",x:J,y:Z},Q,W)}function DQ(J,Z){return p4(J,Z)}function NQ(){return c9()}function OQ(){return n9()}function RQ(){return s9()}function MQ(){return o4()}function y5(J,Z){if(!J)return!1;else return Z}function zQ(J){if(!J)return!0;else return!1}function QJ(J,Z){if(J.$==="Nil")return Z;else{let{head:Q,tail:W}=J;return{$:"Con",head:Q,tail:cQ(W,Z)}}}function BQ(J){if(J.$==="Nil")return!0;else return!1}var D4=A4,c8=R4,n8=M4,u8=d8,AQ=I4,WJ=$4,YJ=w4,s8=P4,IQ=T4,$Q=B4,H6=y5,CQ=v4,i8=f4,kQ=h4,d5=z4,N4=L4,LQ=b4,O4=k4,wQ=c9,PQ=_4,TQ=x4,SQ=u4,o9=zQ,HJ=d4,vQ=c4,fQ=n4,bQ=l4,hQ=s4,jQ=m4,R8=r4,yQ=n9,_Q=t4,xQ=s9,gQ=a4,pQ=i9,mQ=e4,lQ=BQ,uQ=JJ,dQ=ZJ,cQ=QJ,S6={"world:room_w":M0(()=>R0(R4()),0),"world:room_h":M0(()=>R0(M4()),0),"world:margin":M0(()=>R0(z4()),0),"world:radius":M0(()=>R0(B4()),0),"world:reach":M0(()=>R0(A4()),0),"world:reach2":M0(()=>R0(c9()),0),"world:room":M0(()=>R0(I4()),0),"world:start":M0(()=>R0($4()),0),"world:pick_u32":M0((J,Z,Q)=>R0(d8(J,Z,Q)),3),"world:pick_vec":M0((J,Z,Q)=>R0(VQ(J,Z,Q)),3),"world:pick_near":M0((J,Z,Q)=>R0(C4(J,Z,Q)),3),"world:gap":M0((J,Z)=>R0(k4(J,Z)),2),"world:clamp_axis":M0((J,Z,Q)=>R0(L4(J,Z,Q)),3),"world:Desk.list":M0(()=>R0(w4()),0),"world:Prop.list":M0(()=>R0(P4()),0),"world:palette":M0(()=>R0(T4()),0),"world:layout":M0(()=>R0(S4()),0),"world:Prop.hit":M0((J,Z,Q)=>R0(v4(J,Z,Q)),3),"world:inside_props":M0((J,Z,Q)=>R0(f4(J,Z,Q)),3),"world:try_x":M0((J,Z,Q)=>R0(b4(J,Z,Q)),3),"world:try_y":M0((J,Z,Q)=>R0(h4(J,Z,Q)),3),"world:slide.after":M0((J,Z,Q)=>R0(j4(J,Z,Q)),3),"world:slide":M0((J,Z,Q)=>R0(y4(J,Z,Q)),3),"world:Desk.d2":M0((J,Z,Q)=>R0(_4(J,Z,Q)),3),"world:Near.update":M0((J,Z,Q)=>R0(x4(J,Z,Q)),3),"world:scan":M0((J,Z,Q,W,Y)=>R0(g4(J,Z,Q,W,Y)),5),"world:find":M0((J,Z)=>R0(p4(J,Z)),2),"world:inside_room":M0((J,Z)=>R0(m4(J,Z)),2),"world:Desk.in_room":M0((J)=>R0(l4(J)),1),"world:Desk.overlaps":M0((J,Z)=>R0(u4(J,Z)),2),"world:Desk.clear_one":M0((J,Z)=>R0(d4(J,Z)),2),"world:Desks.clear":M0((J)=>R0(c4(J)),1),"world:Desks.ids":M0((J,Z)=>R0(n4(J,Z)),2),"world:Desks.all_in_room":M0((J)=>R0(s4(J)),1),"world:start_clear.at":M0((J)=>R0(i4(J)),1),"world:start_clear":M0(()=>R0(GQ()),0),"copy:ui":M0(()=>R0(n9()),0),"copy:story":M0(()=>R0(s9()),0),"copy:projects":M0(()=>R0(o4()),0),"copy:String.has_text":M0((J)=>R0(r4(UQ(J))),1),"copy:Line.filled":M0((J)=>R0(a4(J)),1),"copy:ui_lines":M0((J)=>R0(t4(J)),1),"copy:everything":M0(()=>R0(e4()),0),"copy:lines_filled":M0((J)=>R0(i9(J)),1),"copy:all_filled":M0(()=>R0(qQ()),0),"copy:Proj.valid":M0((J)=>R0(JJ(J)),1),"copy:projects_valid":M0((J)=>R0(ZJ(J)),1),layout:M0(()=>R0(EQ()),0),slide:M0((J,Z,Q,W)=>R0(FQ(J,Z,Q,W)),4),focus:M0((J,Z)=>R0(DQ(J,Z)),2),reach2:M0(()=>R0(NQ()),0),ui:M0(()=>R0(OQ()),0),story:M0(()=>R0(RQ()),0),projects:M0(()=>R0(MQ()),0)};var rJ=2;var A9=2;var aJ=4;var P8=1000;var O6="srgb";class _6{addEventListener(J,Z){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf(Z)===-1)Q[J].push(Z)}hasEventListener(J,Z){if(this._listeners===void 0)return!1;let Q=this._listeners;return Q[J]!==void 0&&Q[J].indexOf(Z)!==-1}removeEventListener(J,Z){if(this._listeners===void 0)return;let W=this._listeners[J];if(W!==void 0){let Y=W.indexOf(Z);if(Y!==-1)W.splice(Y,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let Q=this._listeners[J.type];if(Q!==void 0){J.target=this;let W=Q.slice(0);for(let Y=0,H=W.length;Y<H;Y++)W[Y].call(this,J);J.target=null}}}var P5=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var r9=Math.PI/180,k7=180/Math.PI;function T8(){let J=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(P5[J&255]+P5[J>>8&255]+P5[J>>16&255]+P5[J>>24&255]+"-"+P5[Z&255]+P5[Z>>8&255]+"-"+P5[Z>>16&15|64]+P5[Z>>24&255]+"-"+P5[Q&63|128]+P5[Q>>8&255]+"-"+P5[Q>>16&255]+P5[Q>>24&255]+P5[W&255]+P5[W>>8&255]+P5[W>>16&255]+P5[W>>24&255]).toLowerCase()}function C5(J,Z,Q){return Math.max(Z,Math.min(Q,J))}function nQ(J,Z){return(J%Z+Z)%Z}function a9(J,Z,Q){return(1-Q)*J+Q*Z}function XJ(J){return(J&J-1)===0&&J!==0}function L7(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function M8(J,Z){switch(Z.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function _5(J,Z){switch(Z.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class q0{constructor(J=0,Z=0){q0.prototype.isVector2=!0,this.x=J,this.y=Z}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Z){return this.x=J,this.y=Z,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Z=this.x,Q=this.y,W=J.elements;return this.x=W[0]*Z+W[3]*Q+W[6],this.y=W[1]*Z+W[4]*Q+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Z){return this.x=Math.max(J.x,Math.min(Z.x,this.x)),this.y=Math.max(J.y,Math.min(Z.y,this.y)),this}clampScalar(J,Z){return this.x=Math.max(J,Math.min(Z,this.x)),this.y=Math.max(J,Math.min(Z,this.y)),this}clampLength(J,Z){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min(Z,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let Q=this.dot(J)/Z;return Math.acos(C5(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,Q=this.y-J.y;return Z*Z+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this}lerpVectors(J,Z,Q){return this.x=J.x+(Z.x-J.x)*Q,this.y=J.y+(Z.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this}rotateAround(J,Z){let Q=Math.cos(Z),W=Math.sin(Z),Y=this.x-J.x,H=this.y-J.y;return this.x=Y*Q-H*W+J.x,this.y=Y*W+H*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class d0{constructor(J,Z,Q,W,Y,H,K,X,U){if(d0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Z,Q,W,Y,H,K,X,U)}set(J,Z,Q,W,Y,H,K,X,U){let V=this.elements;return V[0]=J,V[1]=W,V[2]=K,V[3]=Z,V[4]=Y,V[5]=X,V[6]=Q,V[7]=H,V[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Z=this.elements,Q=J.elements;return Z[0]=Q[0],Z[1]=Q[1],Z[2]=Q[2],Z[3]=Q[3],Z[4]=Q[4],Z[5]=Q[5],Z[6]=Q[6],Z[7]=Q[7],Z[8]=Q[8],this}extractBasis(J,Z,Q){return J.setFromMatrix3Column(this,0),Z.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Z=J.elements;return this.set(Z[0],Z[4],Z[8],Z[1],Z[5],Z[9],Z[2],Z[6],Z[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let Q=J.elements,W=Z.elements,Y=this.elements,H=Q[0],K=Q[3],X=Q[6],U=Q[1],V=Q[4],q=Q[7],G=Q[2],E=Q[5],N=Q[8],O=W[0],R=W[3],D=W[6],F=W[1],z=W[4],B=W[7],L=W[2],P=W[5],k=W[8];return Y[0]=H*O+K*F+X*L,Y[3]=H*R+K*z+X*P,Y[6]=H*D+K*B+X*k,Y[1]=U*O+V*F+q*L,Y[4]=U*R+V*z+q*P,Y[7]=U*D+V*B+q*k,Y[2]=G*O+E*F+N*L,Y[5]=G*R+E*z+N*P,Y[8]=G*D+E*B+N*k,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[3]*=J,Z[6]*=J,Z[1]*=J,Z[4]*=J,Z[7]*=J,Z[2]*=J,Z[5]*=J,Z[8]*=J,this}determinant(){let J=this.elements,Z=J[0],Q=J[1],W=J[2],Y=J[3],H=J[4],K=J[5],X=J[6],U=J[7],V=J[8];return Z*H*V-Z*K*U-Q*Y*V+Q*K*X+W*Y*U-W*H*X}invert(){let J=this.elements,Z=J[0],Q=J[1],W=J[2],Y=J[3],H=J[4],K=J[5],X=J[6],U=J[7],V=J[8],q=V*H-K*U,G=K*X-V*Y,E=U*Y-H*X,N=Z*q+Q*G+W*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/N;return J[0]=q*O,J[1]=(W*U-V*Q)*O,J[2]=(K*Q-W*H)*O,J[3]=G*O,J[4]=(V*Z-W*X)*O,J[5]=(W*Y-K*Z)*O,J[6]=E*O,J[7]=(Q*X-U*Z)*O,J[8]=(H*Z-Q*Y)*O,this}transpose(){let J,Z=this.elements;return J=Z[1],Z[1]=Z[3],Z[3]=J,J=Z[2],Z[2]=Z[6],Z[6]=J,J=Z[5],Z[5]=Z[7],Z[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Z=this.elements;return J[0]=Z[0],J[1]=Z[3],J[2]=Z[6],J[3]=Z[1],J[4]=Z[4],J[5]=Z[7],J[6]=Z[2],J[7]=Z[5],J[8]=Z[8],this}setUvTransform(J,Z,Q,W,Y,H,K){let X=Math.cos(Y),U=Math.sin(Y);return this.set(Q*X,Q*U,-Q*(X*H+U*K)+H+J,-W*U,W*X,-W*(-U*H+X*K)+K+Z,0,0,1),this}scale(J,Z){return this.premultiply(t9.makeScale(J,Z)),this}rotate(J){return this.premultiply(t9.makeRotation(-J)),this}translate(J,Z){return this.premultiply(t9.makeTranslation(J,Z)),this}makeTranslation(J,Z){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Z,0,0,1);return this}makeRotation(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(Z,-Q,0,Q,Z,0,0,0,1),this}makeScale(J,Z){return this.set(J,0,0,0,Z,0,0,0,1),this}equals(J){let Z=this.elements,Q=J.elements;for(let W=0;W<9;W++)if(Z[W]!==Q[W])return!1;return!0}fromArray(J,Z=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+Z];return this}toArray(J=[],Z=0){let Q=this.elements;return J[Z]=Q[0],J[Z+1]=Q[1],J[Z+2]=Q[2],J[Z+3]=Q[3],J[Z+4]=Q[4],J[Z+5]=Q[5],J[Z+6]=Q[6],J[Z+7]=Q[7],J[Z+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var t9=new d0;function tJ(J){for(let Z=J.length-1;Z>=0;--Z)if(J[Z]>=65535)return!0;return!1}function B9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function sQ(){let J=B9("canvas");return J.style.display="block",J}var KJ={};function C8(J){if(J in KJ)return;KJ[J]=!0,console.warn(J)}var UJ=new d0().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),VJ=new d0().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),o8={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(J)=>J,fromReference:(J)=>J},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(J)=>J.convertSRGBToLinear(),fromReference:(J)=>J.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(J)=>J.applyMatrix3(VJ),fromReference:(J)=>J.applyMatrix3(UJ)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(J)=>J.convertSRGBToLinear().applyMatrix3(VJ),fromReference:(J)=>J.applyMatrix3(UJ).convertLinearToSRGB()}},iQ=new Set(["srgb-linear","display-p3-linear"]),Q5={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(J){if(!iQ.has(J))throw Error(`Unsupported working color space, "${J}".`);this._workingColorSpace=J},convert:function(J,Z,Q){if(this.enabled===!1||Z===Q||!Z||!Q)return J;let W=o8[Z].toReference,Y=o8[Q].fromReference;return Y(W(J))},fromWorkingColorSpace:function(J,Z){return this.convert(J,this._workingColorSpace,Z)},toWorkingColorSpace:function(J,Z){return this.convert(J,Z,this._workingColorSpace)},getPrimaries:function(J){return o8[J].primaries},getTransfer:function(J){if(J==="")return"linear";return o8[J].transfer}};function X8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function e9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var u6;class S7{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(u6===void 0)u6=B9("canvas");u6.width=J.width,u6.height=J.height;let Q=u6.getContext("2d");if(J instanceof ImageData)Q.putImageData(J,0,0);else Q.drawImage(J,0,0,J.width,J.height);Z=u6}if(Z.width>2048||Z.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),Z.toDataURL("image/jpeg",0.6);else return Z.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Z=B9("canvas");Z.width=J.width,Z.height=J.height;let Q=Z.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let W=Q.getImageData(0,0,J.width,J.height),Y=W.data;for(let H=0;H<Y.length;H++)Y[H]=X8(Y[H]/255)*255;return Q.putImageData(W,0,0),Z}else if(J.data){let Z=J.data.slice(0);for(let Q=0;Q<Z.length;Q++)if(Z instanceof Uint8Array||Z instanceof Uint8ClampedArray)Z[Q]=Math.floor(X8(Z[Q]/255)*255);else Z[Q]=X8(Z[Q]);return{data:Z,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var oQ=0;class v7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oQ++}),this.uuid=T8(),this.data=J,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Y;if(Array.isArray(W)){Y=[];for(let H=0,K=W.length;H<K;H++)if(W[H].isDataTexture)Y.push(J7(W[H].image));else Y.push(J7(W[H]))}else Y=J7(W);Q.url=Y}if(!Z)J.images[this.uuid]=Q;return Q}}function J7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return S7.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var rQ=0;class x5 extends _6{constructor(J=x5.DEFAULT_IMAGE,Z=x5.DEFAULT_MAPPING,Q=1001,W=1001,Y=1006,H=1008,K=1023,X=1009,U=x5.DEFAULT_ANISOTROPY,V=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:rQ++}),this.uuid=T8(),this.name="",this.source=new v7(J),this.mipmaps=[],this.mapping=Z,this.channel=0,this.wrapS=Q,this.wrapT=W,this.magFilter=Y,this.minFilter=H,this.anisotropy=U,this.format=K,this.internalFormat=null,this.type=X,this.offset=new q0(0,0),this.repeat=new q0(1,1),this.center=new q0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new d0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof V==="string")this.colorSpace=V;else C8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=V===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!Z)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return C8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(J){C8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=J===3001?"srgb":""}}x5.DEFAULT_IMAGE=null;x5.DEFAULT_MAPPING=300;x5.DEFAULT_ANISOTROPY=1;class K5{constructor(J=0,Z=0,Q=0,W=1){K5.prototype.isVector4=!0,this.x=J,this.y=Z,this.z=Q,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Z,Q,W){return this.x=J,this.y=Z,this.z=Q,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;case 3:this.w=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this.w=J.w+Z.w,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this.w+=J.w*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this.w=J.w-Z.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Z=this.x,Q=this.y,W=this.z,Y=this.w,H=J.elements;return this.x=H[0]*Z+H[4]*Q+H[8]*W+H[12]*Y,this.y=H[1]*Z+H[5]*Q+H[9]*W+H[13]*Y,this.z=H[2]*Z+H[6]*Q+H[10]*W+H[14]*Y,this.w=H[3]*Z+H[7]*Q+H[11]*W+H[15]*Y,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Z=Math.sqrt(1-J.w*J.w);if(Z<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Z,this.y=J.y/Z,this.z=J.z/Z;return this}setAxisAngleFromRotationMatrix(J){let Z,Q,W,Y,H=0.01,K=0.1,X=J.elements,U=X[0],V=X[4],q=X[8],G=X[1],E=X[5],N=X[9],O=X[2],R=X[6],D=X[10];if(Math.abs(V-G)<0.01&&Math.abs(q-O)<0.01&&Math.abs(N-R)<0.01){if(Math.abs(V+G)<0.1&&Math.abs(q+O)<0.1&&Math.abs(N+R)<0.1&&Math.abs(U+E+D-3)<0.1)return this.set(1,0,0,0),this;Z=Math.PI;let z=(U+1)/2,B=(E+1)/2,L=(D+1)/2,P=(V+G)/4,k=(q+O)/4,f=(N+R)/4;if(z>B&&z>L)if(z<0.01)Q=0,W=0.707106781,Y=0.707106781;else Q=Math.sqrt(z),W=P/Q,Y=k/Q;else if(B>L)if(B<0.01)Q=0.707106781,W=0,Y=0.707106781;else W=Math.sqrt(B),Q=P/W,Y=f/W;else if(L<0.01)Q=0.707106781,W=0.707106781,Y=0;else Y=Math.sqrt(L),Q=k/Y,W=f/Y;return this.set(Q,W,Y,Z),this}let F=Math.sqrt((R-N)*(R-N)+(q-O)*(q-O)+(G-V)*(G-V));if(Math.abs(F)<0.001)F=1;return this.x=(R-N)/F,this.y=(q-O)/F,this.z=(G-V)/F,this.w=Math.acos((U+E+D-1)/2),this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Z){return this.x=Math.max(J.x,Math.min(Z.x,this.x)),this.y=Math.max(J.y,Math.min(Z.y,this.y)),this.z=Math.max(J.z,Math.min(Z.z,this.z)),this.w=Math.max(J.w,Math.min(Z.w,this.w)),this}clampScalar(J,Z){return this.x=Math.max(J,Math.min(Z,this.x)),this.y=Math.max(J,Math.min(Z,this.y)),this.z=Math.max(J,Math.min(Z,this.z)),this.w=Math.max(J,Math.min(Z,this.w)),this}clampLength(J,Z){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min(Z,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this.w+=(J.w-this.w)*Z,this}lerpVectors(J,Z,Q){return this.x=J.x+(Z.x-J.x)*Q,this.y=J.y+(Z.y-J.y)*Q,this.z=J.z+(Z.z-J.z)*Q,this.w=J.w+(Z.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this.w=J[Z+3],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J[Z+3]=this.w,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this.w=J.getW(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eJ extends _6{constructor(J=1,Z=1,Q={}){super();this.isRenderTarget=!0,this.width=J,this.height=Z,this.depth=1,this.scissor=new K5(0,0,J,Z),this.scissorTest=!1,this.viewport=new K5(0,0,J,Z);let W={width:J,height:Z,depth:1};if(Q.encoding!==void 0)C8("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),Q.colorSpace=Q.encoding===3001?"srgb":"";Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},Q),this.texture=new x5(W,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.internalFormat=Q.internalFormat,this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.depthTexture=Q.depthTexture,this.samples=Q.samples}setSize(J,Z,Q=1){if(this.width!==J||this.height!==Z||this.depth!==Q)this.width=J,this.height=Z,this.depth=Q,this.texture.image.width=J,this.texture.image.height=Z,this.texture.image.depth=Q,this.dispose();this.viewport.set(0,0,J,Z),this.scissor.set(0,0,J,Z)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.texture=J.texture.clone(),this.texture.isRenderTargetTexture=!0;let Z=Object.assign({},J.texture.image);if(this.texture.source=new v7(Z),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k6 extends eJ{constructor(J=1,Z=1,Q={}){super(J,Z,Q);this.isWebGLRenderTarget=!0}}class f7 extends x5{constructor(J=null,Z=1,Q=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Z,height:Q,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JZ extends x5{constructor(J=null,Z=1,Q=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Z,height:Q,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x6{constructor(J=0,Z=0,Q=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Z,this._z=Q,this._w=W}static slerpFlat(J,Z,Q,W,Y,H,K){let X=Q[W+0],U=Q[W+1],V=Q[W+2],q=Q[W+3],G=Y[H+0],E=Y[H+1],N=Y[H+2],O=Y[H+3];if(K===0){J[Z+0]=X,J[Z+1]=U,J[Z+2]=V,J[Z+3]=q;return}if(K===1){J[Z+0]=G,J[Z+1]=E,J[Z+2]=N,J[Z+3]=O;return}if(q!==O||X!==G||U!==E||V!==N){let R=1-K,D=X*G+U*E+V*N+q*O,F=D>=0?1:-1,z=1-D*D;if(z>Number.EPSILON){let L=Math.sqrt(z),P=Math.atan2(L,D*F);R=Math.sin(R*P)/L,K=Math.sin(K*P)/L}let B=K*F;if(X=X*R+G*B,U=U*R+E*B,V=V*R+N*B,q=q*R+O*B,R===1-K){let L=1/Math.sqrt(X*X+U*U+V*V+q*q);X*=L,U*=L,V*=L,q*=L}}J[Z]=X,J[Z+1]=U,J[Z+2]=V,J[Z+3]=q}static multiplyQuaternionsFlat(J,Z,Q,W,Y,H){let K=Q[W],X=Q[W+1],U=Q[W+2],V=Q[W+3],q=Y[H],G=Y[H+1],E=Y[H+2],N=Y[H+3];return J[Z]=K*N+V*q+X*E-U*G,J[Z+1]=X*N+V*G+U*q-K*E,J[Z+2]=U*N+V*E+K*G-X*q,J[Z+3]=V*N-K*q-X*G-U*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Z,Q,W){return this._x=J,this._y=Z,this._z=Q,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Z=!0){let{_x:Q,_y:W,_z:Y,_order:H}=J,K=Math.cos,X=Math.sin,U=K(Q/2),V=K(W/2),q=K(Y/2),G=X(Q/2),E=X(W/2),N=X(Y/2);switch(H){case"XYZ":this._x=G*V*q+U*E*N,this._y=U*E*q-G*V*N,this._z=U*V*N+G*E*q,this._w=U*V*q-G*E*N;break;case"YXZ":this._x=G*V*q+U*E*N,this._y=U*E*q-G*V*N,this._z=U*V*N-G*E*q,this._w=U*V*q+G*E*N;break;case"ZXY":this._x=G*V*q-U*E*N,this._y=U*E*q+G*V*N,this._z=U*V*N+G*E*q,this._w=U*V*q-G*E*N;break;case"ZYX":this._x=G*V*q-U*E*N,this._y=U*E*q+G*V*N,this._z=U*V*N-G*E*q,this._w=U*V*q+G*E*N;break;case"YZX":this._x=G*V*q+U*E*N,this._y=U*E*q+G*V*N,this._z=U*V*N-G*E*q,this._w=U*V*q-G*E*N;break;case"XZY":this._x=G*V*q-U*E*N,this._y=U*E*q-G*V*N,this._z=U*V*N+G*E*q,this._w=U*V*q+G*E*N;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Z===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Z){let Q=Z/2,W=Math.sin(Q);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let Z=J.elements,Q=Z[0],W=Z[4],Y=Z[8],H=Z[1],K=Z[5],X=Z[9],U=Z[2],V=Z[6],q=Z[10],G=Q+K+q;if(G>0){let E=0.5/Math.sqrt(G+1);this._w=0.25/E,this._x=(V-X)*E,this._y=(Y-U)*E,this._z=(H-W)*E}else if(Q>K&&Q>q){let E=2*Math.sqrt(1+Q-K-q);this._w=(V-X)/E,this._x=0.25*E,this._y=(W+H)/E,this._z=(Y+U)/E}else if(K>q){let E=2*Math.sqrt(1+K-Q-q);this._w=(Y-U)/E,this._x=(W+H)/E,this._y=0.25*E,this._z=(X+V)/E}else{let E=2*Math.sqrt(1+q-Q-K);this._w=(H-W)/E,this._x=(Y+U)/E,this._y=(X+V)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Z){let Q=J.dot(Z)+1;if(Q<Number.EPSILON)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*Z.z-J.z*Z.y,this._y=J.z*Z.x-J.x*Z.z,this._z=J.x*Z.y-J.y*Z.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(C5(this.dot(J),-1,1)))}rotateTowards(J,Z){let Q=this.angleTo(J);if(Q===0)return this;let W=Math.min(1,Z/Q);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Z){let{_x:Q,_y:W,_z:Y,_w:H}=J,K=Z._x,X=Z._y,U=Z._z,V=Z._w;return this._x=Q*V+H*K+W*U-Y*X,this._y=W*V+H*X+Y*K-Q*U,this._z=Y*V+H*U+Q*X-W*K,this._w=H*V-Q*K-W*X-Y*U,this._onChangeCallback(),this}slerp(J,Z){if(Z===0)return this;if(Z===1)return this.copy(J);let Q=this._x,W=this._y,Y=this._z,H=this._w,K=H*J._w+Q*J._x+W*J._y+Y*J._z;if(K<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,K=-K;else this.copy(J);if(K>=1)return this._w=H,this._x=Q,this._y=W,this._z=Y,this;let X=1-K*K;if(X<=Number.EPSILON){let E=1-Z;return this._w=E*H+Z*this._w,this._x=E*Q+Z*this._x,this._y=E*W+Z*this._y,this._z=E*Y+Z*this._z,this.normalize(),this}let U=Math.sqrt(X),V=Math.atan2(U,K),q=Math.sin((1-Z)*V)/U,G=Math.sin(Z*V)/U;return this._w=H*q+this._w*G,this._x=Q*q+this._x*G,this._y=W*q+this._y*G,this._z=Y*q+this._z*G,this._onChangeCallback(),this}slerpQuaternions(J,Z,Q){return this.copy(J).slerp(Z,Q)}random(){let J=Math.random(),Z=Math.sqrt(1-J),Q=Math.sqrt(J),W=2*Math.PI*Math.random(),Y=2*Math.PI*Math.random();return this.set(Z*Math.cos(W),Q*Math.sin(Y),Q*Math.cos(Y),Z*Math.sin(W))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Z=0){return this._x=J[Z],this._y=J[Z+1],this._z=J[Z+2],this._w=J[Z+3],this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._w,J}fromBufferAttribute(J,Z){return this._x=J.getX(Z),this._y=J.getY(Z),this._z=J.getZ(Z),this._w=J.getW(Z),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(J=0,Z=0,Q=0){T.prototype.isVector3=!0,this.x=J,this.y=Z,this.z=Q}set(J,Z,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=Z,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Z){return this.x=J.x*Z.x,this.y=J.y*Z.y,this.z=J.z*Z.z,this}applyEuler(J){return this.applyQuaternion(GJ.setFromEuler(J))}applyAxisAngle(J,Z){return this.applyQuaternion(GJ.setFromAxisAngle(J,Z))}applyMatrix3(J){let Z=this.x,Q=this.y,W=this.z,Y=J.elements;return this.x=Y[0]*Z+Y[3]*Q+Y[6]*W,this.y=Y[1]*Z+Y[4]*Q+Y[7]*W,this.z=Y[2]*Z+Y[5]*Q+Y[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Z=this.x,Q=this.y,W=this.z,Y=J.elements,H=1/(Y[3]*Z+Y[7]*Q+Y[11]*W+Y[15]);return this.x=(Y[0]*Z+Y[4]*Q+Y[8]*W+Y[12])*H,this.y=(Y[1]*Z+Y[5]*Q+Y[9]*W+Y[13])*H,this.z=(Y[2]*Z+Y[6]*Q+Y[10]*W+Y[14])*H,this}applyQuaternion(J){let Z=this.x,Q=this.y,W=this.z,Y=J.x,H=J.y,K=J.z,X=J.w,U=2*(H*W-K*Q),V=2*(K*Z-Y*W),q=2*(Y*Q-H*Z);return this.x=Z+X*U+H*q-K*V,this.y=Q+X*V+K*U-Y*q,this.z=W+X*q+Y*V-H*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Z=this.x,Q=this.y,W=this.z,Y=J.elements;return this.x=Y[0]*Z+Y[4]*Q+Y[8]*W,this.y=Y[1]*Z+Y[5]*Q+Y[9]*W,this.z=Y[2]*Z+Y[6]*Q+Y[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Z){return this.x=Math.max(J.x,Math.min(Z.x,this.x)),this.y=Math.max(J.y,Math.min(Z.y,this.y)),this.z=Math.max(J.z,Math.min(Z.z,this.z)),this}clampScalar(J,Z){return this.x=Math.max(J,Math.min(Z,this.x)),this.y=Math.max(J,Math.min(Z,this.y)),this.z=Math.max(J,Math.min(Z,this.z)),this}clampLength(J,Z){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min(Z,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this}lerpVectors(J,Z,Q){return this.x=J.x+(Z.x-J.x)*Q,this.y=J.y+(Z.y-J.y)*Q,this.z=J.z+(Z.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Z){let{x:Q,y:W,z:Y}=J,H=Z.x,K=Z.y,X=Z.z;return this.x=W*X-Y*K,this.y=Y*H-Q*X,this.z=Q*K-W*H,this}projectOnVector(J){let Z=J.lengthSq();if(Z===0)return this.set(0,0,0);let Q=J.dot(this)/Z;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return Z7.copy(this).projectOnVector(J),this.sub(Z7)}reflect(J){return this.sub(Z7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let Q=this.dot(J)/Z;return Math.acos(C5(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,Q=this.y-J.y,W=this.z-J.z;return Z*Z+Q*Q+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Z,Q){let W=Math.sin(Z)*J;return this.x=W*Math.sin(Q),this.y=Math.cos(Z)*J,this.z=W*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Z,Q){return this.x=J*Math.sin(Z),this.y=Q,this.z=J*Math.cos(Z),this}setFromMatrixPosition(J){let Z=J.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this}setFromMatrixScale(J){let Z=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Z,this.y=Q,this.z=W,this}setFromMatrixColumn(J,Z){return this.fromArray(J.elements,Z*4)}setFromMatrix3Column(J,Z){return this.fromArray(J.elements,Z*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=(Math.random()-0.5)*2,Z=Math.random()*Math.PI*2,Q=Math.sqrt(1-J**2);return this.x=Q*Math.cos(Z),this.y=Q*Math.sin(Z),this.z=J,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Z7=new T,GJ=new x6;class U8{constructor(J=new T(1/0,1/0,1/0),Z=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Z}set(J,Z){return this.min.copy(J),this.max.copy(Z),this}setFromArray(J){this.makeEmpty();for(let Z=0,Q=J.length;Z<Q;Z+=3)this.expandByPoint(o5.fromArray(J,Z));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Z=0,Q=J.count;Z<Q;Z++)this.expandByPoint(o5.fromBufferAttribute(J,Z));return this}setFromPoints(J){this.makeEmpty();for(let Z=0,Q=J.length;Z<Q;Z++)this.expandByPoint(J[Z]);return this}setFromCenterAndSize(J,Z){let Q=o5.copy(Z).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,Z=!1){return this.makeEmpty(),this.expandByObject(J,Z)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Z=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let Y=Q.getAttribute("position");if(Z===!0&&Y!==void 0&&J.isInstancedMesh!==!0)for(let H=0,K=Y.count;H<K;H++){if(J.isMesh===!0)J.getVertexPosition(H,o5);else o5.fromBufferAttribute(Y,H);o5.applyMatrix4(J.matrixWorld),this.expandByPoint(o5)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();r8.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();r8.copy(Q.boundingBox)}r8.applyMatrix4(J.matrixWorld),this.union(r8)}}let W=J.children;for(let Y=0,H=W.length;Y<H;Y++)this.expandByObject(W[Y],Z);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Z){return Z.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,o5),o5.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Z,Q;if(J.normal.x>0)Z=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else Z=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)Z+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else Z+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)Z+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else Z+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return Z<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(z8),a8.subVectors(this.max,z8),d6.subVectors(J.a,z8),c6.subVectors(J.b,z8),n6.subVectors(J.c,z8),B6.subVectors(c6,d6),A6.subVectors(n6,c6),v6.subVectors(d6,n6);let Z=[0,-B6.z,B6.y,0,-A6.z,A6.y,0,-v6.z,v6.y,B6.z,0,-B6.x,A6.z,0,-A6.x,v6.z,0,-v6.x,-B6.y,B6.x,0,-A6.y,A6.x,0,-v6.y,v6.x,0];if(!Q7(Z,d6,c6,n6,a8))return!1;if(Z=[1,0,0,0,1,0,0,0,1],!Q7(Z,d6,c6,n6,a8))return!1;return t8.crossVectors(B6,A6),Z=[t8.x,t8.y,t8.z],Q7(Z,d6,c6,n6,a8)}clampPoint(J,Z){return Z.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,o5).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(o5).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return q6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),q6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),q6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),q6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),q6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),q6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),q6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),q6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(q6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var q6=[new T,new T,new T,new T,new T,new T,new T,new T],o5=new T,r8=new U8,d6=new T,c6=new T,n6=new T,B6=new T,A6=new T,v6=new T,z8=new T,a8=new T,t8=new T,f6=new T;function Q7(J,Z,Q,W,Y){for(let H=0,K=J.length-3;H<=K;H+=3){f6.fromArray(J,H);let X=Y.x*Math.abs(f6.x)+Y.y*Math.abs(f6.y)+Y.z*Math.abs(f6.z),U=Z.dot(f6),V=Q.dot(f6),q=W.dot(f6);if(Math.max(-Math.max(U,V,q),Math.min(U,V,q))>X)return!1}return!0}var aQ=new U8,B8=new T,W7=new T;class I9{constructor(J=new T,Z=-1){this.isSphere=!0,this.center=J,this.radius=Z}set(J,Z){return this.center.copy(J),this.radius=Z,this}setFromPoints(J,Z){let Q=this.center;if(Z!==void 0)Q.copy(Z);else aQ.setFromPoints(J).getCenter(Q);let W=0;for(let Y=0,H=J.length;Y<H;Y++)W=Math.max(W,Q.distanceToSquared(J[Y]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Z=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Z*Z}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Z){let Q=this.center.distanceToSquared(J);if(Z.copy(J),Q>this.radius*this.radius)Z.sub(this.center).normalize(),Z.multiplyScalar(this.radius).add(this.center);return Z}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;B8.subVectors(J,this.center);let Z=B8.lengthSq();if(Z>this.radius*this.radius){let Q=Math.sqrt(Z),W=(Q-this.radius)*0.5;this.center.addScaledVector(B8,W/Q),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else W7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(B8.copy(J.center).add(W7)),this.expandByPoint(B8.copy(J.center).sub(W7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var E6=new T,Y7=new T,e8=new T,I6=new T,H7=new T,J9=new T,X7=new T;class b7{constructor(J=new T,Z=new T(0,0,-1)){this.origin=J,this.direction=Z}set(J,Z){return this.origin.copy(J),this.direction.copy(Z),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Z){return Z.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,E6)),this}closestPointToPoint(J,Z){Z.subVectors(J,this.origin);let Q=Z.dot(this.direction);if(Q<0)return Z.copy(this.origin);return Z.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Z=E6.subVectors(J,this.origin).dot(this.direction);if(Z<0)return this.origin.distanceToSquared(J);return E6.copy(this.origin).addScaledVector(this.direction,Z),E6.distanceToSquared(J)}distanceSqToSegment(J,Z,Q,W){Y7.copy(J).add(Z).multiplyScalar(0.5),e8.copy(Z).sub(J).normalize(),I6.copy(this.origin).sub(Y7);let Y=J.distanceTo(Z)*0.5,H=-this.direction.dot(e8),K=I6.dot(this.direction),X=-I6.dot(e8),U=I6.lengthSq(),V=Math.abs(1-H*H),q,G,E,N;if(V>0)if(q=H*X-K,G=H*K-X,N=Y*V,q>=0)if(G>=-N)if(G<=N){let O=1/V;q*=O,G*=O,E=q*(q+H*G+2*K)+G*(H*q+G+2*X)+U}else G=Y,q=Math.max(0,-(H*G+K)),E=-q*q+G*(G+2*X)+U;else G=-Y,q=Math.max(0,-(H*G+K)),E=-q*q+G*(G+2*X)+U;else if(G<=-N)q=Math.max(0,-(-H*Y+K)),G=q>0?-Y:Math.min(Math.max(-Y,-X),Y),E=-q*q+G*(G+2*X)+U;else if(G<=N)q=0,G=Math.min(Math.max(-Y,-X),Y),E=G*(G+2*X)+U;else q=Math.max(0,-(H*Y+K)),G=q>0?Y:Math.min(Math.max(-Y,-X),Y),E=-q*q+G*(G+2*X)+U;else G=H>0?-Y:Y,q=Math.max(0,-(H*G+K)),E=-q*q+G*(G+2*X)+U;if(Q)Q.copy(this.origin).addScaledVector(this.direction,q);if(W)W.copy(Y7).addScaledVector(e8,G);return E}intersectSphere(J,Z){E6.subVectors(J.center,this.origin);let Q=E6.dot(this.direction),W=E6.dot(E6)-Q*Q,Y=J.radius*J.radius;if(W>Y)return null;let H=Math.sqrt(Y-W),K=Q-H,X=Q+H;if(X<0)return null;if(K<0)return this.at(X,Z);return this.at(K,Z)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Z=J.normal.dot(this.direction);if(Z===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/Z;return Q>=0?Q:null}intersectPlane(J,Z){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,Z)}intersectsPlane(J){let Z=J.distanceToPoint(this.origin);if(Z===0)return!0;if(J.normal.dot(this.direction)*Z<0)return!0;return!1}intersectBox(J,Z){let Q,W,Y,H,K,X,U=1/this.direction.x,V=1/this.direction.y,q=1/this.direction.z,G=this.origin;if(U>=0)Q=(J.min.x-G.x)*U,W=(J.max.x-G.x)*U;else Q=(J.max.x-G.x)*U,W=(J.min.x-G.x)*U;if(V>=0)Y=(J.min.y-G.y)*V,H=(J.max.y-G.y)*V;else Y=(J.max.y-G.y)*V,H=(J.min.y-G.y)*V;if(Q>H||Y>W)return null;if(Y>Q||isNaN(Q))Q=Y;if(H<W||isNaN(W))W=H;if(q>=0)K=(J.min.z-G.z)*q,X=(J.max.z-G.z)*q;else K=(J.max.z-G.z)*q,X=(J.min.z-G.z)*q;if(Q>X||K>W)return null;if(K>Q||Q!==Q)Q=K;if(X<W||W!==W)W=X;if(W<0)return null;return this.at(Q>=0?Q:W,Z)}intersectsBox(J){return this.intersectBox(J,E6)!==null}intersectTriangle(J,Z,Q,W,Y){H7.subVectors(Z,J),J9.subVectors(Q,J),X7.crossVectors(H7,J9);let H=this.direction.dot(X7),K;if(H>0){if(W)return null;K=1}else if(H<0)K=-1,H=-H;else return null;I6.subVectors(this.origin,J);let X=K*this.direction.dot(J9.crossVectors(I6,J9));if(X<0)return null;let U=K*this.direction.dot(H7.cross(I6));if(U<0)return null;if(X+U>H)return null;let V=-K*I6.dot(X7);if(V<0)return null;return this.at(V/H,Y)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class F5{constructor(J,Z,Q,W,Y,H,K,X,U,V,q,G,E,N,O,R){if(F5.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Z,Q,W,Y,H,K,X,U,V,q,G,E,N,O,R)}set(J,Z,Q,W,Y,H,K,X,U,V,q,G,E,N,O,R){let D=this.elements;return D[0]=J,D[4]=Z,D[8]=Q,D[12]=W,D[1]=Y,D[5]=H,D[9]=K,D[13]=X,D[2]=U,D[6]=V,D[10]=q,D[14]=G,D[3]=E,D[7]=N,D[11]=O,D[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new F5().fromArray(this.elements)}copy(J){let Z=this.elements,Q=J.elements;return Z[0]=Q[0],Z[1]=Q[1],Z[2]=Q[2],Z[3]=Q[3],Z[4]=Q[4],Z[5]=Q[5],Z[6]=Q[6],Z[7]=Q[7],Z[8]=Q[8],Z[9]=Q[9],Z[10]=Q[10],Z[11]=Q[11],Z[12]=Q[12],Z[13]=Q[13],Z[14]=Q[14],Z[15]=Q[15],this}copyPosition(J){let Z=this.elements,Q=J.elements;return Z[12]=Q[12],Z[13]=Q[13],Z[14]=Q[14],this}setFromMatrix3(J){let Z=J.elements;return this.set(Z[0],Z[3],Z[6],0,Z[1],Z[4],Z[7],0,Z[2],Z[5],Z[8],0,0,0,0,1),this}extractBasis(J,Z,Q){return J.setFromMatrixColumn(this,0),Z.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,Z,Q){return this.set(J.x,Z.x,Q.x,0,J.y,Z.y,Q.y,0,J.z,Z.z,Q.z,0,0,0,0,1),this}extractRotation(J){let Z=this.elements,Q=J.elements,W=1/s6.setFromMatrixColumn(J,0).length(),Y=1/s6.setFromMatrixColumn(J,1).length(),H=1/s6.setFromMatrixColumn(J,2).length();return Z[0]=Q[0]*W,Z[1]=Q[1]*W,Z[2]=Q[2]*W,Z[3]=0,Z[4]=Q[4]*Y,Z[5]=Q[5]*Y,Z[6]=Q[6]*Y,Z[7]=0,Z[8]=Q[8]*H,Z[9]=Q[9]*H,Z[10]=Q[10]*H,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromEuler(J){let Z=this.elements,Q=J.x,W=J.y,Y=J.z,H=Math.cos(Q),K=Math.sin(Q),X=Math.cos(W),U=Math.sin(W),V=Math.cos(Y),q=Math.sin(Y);if(J.order==="XYZ"){let G=H*V,E=H*q,N=K*V,O=K*q;Z[0]=X*V,Z[4]=-X*q,Z[8]=U,Z[1]=E+N*U,Z[5]=G-O*U,Z[9]=-K*X,Z[2]=O-G*U,Z[6]=N+E*U,Z[10]=H*X}else if(J.order==="YXZ"){let G=X*V,E=X*q,N=U*V,O=U*q;Z[0]=G+O*K,Z[4]=N*K-E,Z[8]=H*U,Z[1]=H*q,Z[5]=H*V,Z[9]=-K,Z[2]=E*K-N,Z[6]=O+G*K,Z[10]=H*X}else if(J.order==="ZXY"){let G=X*V,E=X*q,N=U*V,O=U*q;Z[0]=G-O*K,Z[4]=-H*q,Z[8]=N+E*K,Z[1]=E+N*K,Z[5]=H*V,Z[9]=O-G*K,Z[2]=-H*U,Z[6]=K,Z[10]=H*X}else if(J.order==="ZYX"){let G=H*V,E=H*q,N=K*V,O=K*q;Z[0]=X*V,Z[4]=N*U-E,Z[8]=G*U+O,Z[1]=X*q,Z[5]=O*U+G,Z[9]=E*U-N,Z[2]=-U,Z[6]=K*X,Z[10]=H*X}else if(J.order==="YZX"){let G=H*X,E=H*U,N=K*X,O=K*U;Z[0]=X*V,Z[4]=O-G*q,Z[8]=N*q+E,Z[1]=q,Z[5]=H*V,Z[9]=-K*V,Z[2]=-U*V,Z[6]=E*q+N,Z[10]=G-O*q}else if(J.order==="XZY"){let G=H*X,E=H*U,N=K*X,O=K*U;Z[0]=X*V,Z[4]=-q,Z[8]=U*V,Z[1]=G*q+O,Z[5]=H*V,Z[9]=E*q-N,Z[2]=N*q-E,Z[6]=K*V,Z[10]=O*q+G}return Z[3]=0,Z[7]=0,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromQuaternion(J){return this.compose(tQ,J,eQ)}lookAt(J,Z,Q){let W=this.elements;if(p5.subVectors(J,Z),p5.lengthSq()===0)p5.z=1;if(p5.normalize(),$6.crossVectors(Q,p5),$6.lengthSq()===0){if(Math.abs(Q.z)===1)p5.x+=0.0001;else p5.z+=0.0001;p5.normalize(),$6.crossVectors(Q,p5)}return $6.normalize(),Z9.crossVectors(p5,$6),W[0]=$6.x,W[4]=Z9.x,W[8]=p5.x,W[1]=$6.y,W[5]=Z9.y,W[9]=p5.y,W[2]=$6.z,W[6]=Z9.z,W[10]=p5.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let Q=J.elements,W=Z.elements,Y=this.elements,H=Q[0],K=Q[4],X=Q[8],U=Q[12],V=Q[1],q=Q[5],G=Q[9],E=Q[13],N=Q[2],O=Q[6],R=Q[10],D=Q[14],F=Q[3],z=Q[7],B=Q[11],L=Q[15],P=W[0],k=W[4],f=W[8],m=W[12],A=W[1],$=W[5],v=W[9],n=W[13],s=W[2],w=W[6],_=W[10],u=W[14],a=W[3],c=W[7],d=W[11],e=W[15];return Y[0]=H*P+K*A+X*s+U*a,Y[4]=H*k+K*$+X*w+U*c,Y[8]=H*f+K*v+X*_+U*d,Y[12]=H*m+K*n+X*u+U*e,Y[1]=V*P+q*A+G*s+E*a,Y[5]=V*k+q*$+G*w+E*c,Y[9]=V*f+q*v+G*_+E*d,Y[13]=V*m+q*n+G*u+E*e,Y[2]=N*P+O*A+R*s+D*a,Y[6]=N*k+O*$+R*w+D*c,Y[10]=N*f+O*v+R*_+D*d,Y[14]=N*m+O*n+R*u+D*e,Y[3]=F*P+z*A+B*s+L*a,Y[7]=F*k+z*$+B*w+L*c,Y[11]=F*f+z*v+B*_+L*d,Y[15]=F*m+z*n+B*u+L*e,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[4]*=J,Z[8]*=J,Z[12]*=J,Z[1]*=J,Z[5]*=J,Z[9]*=J,Z[13]*=J,Z[2]*=J,Z[6]*=J,Z[10]*=J,Z[14]*=J,Z[3]*=J,Z[7]*=J,Z[11]*=J,Z[15]*=J,this}determinant(){let J=this.elements,Z=J[0],Q=J[4],W=J[8],Y=J[12],H=J[1],K=J[5],X=J[9],U=J[13],V=J[2],q=J[6],G=J[10],E=J[14],N=J[3],O=J[7],R=J[11],D=J[15];return N*(+Y*X*q-W*U*q-Y*K*G+Q*U*G+W*K*E-Q*X*E)+O*(+Z*X*E-Z*U*G+Y*H*G-W*H*E+W*U*V-Y*X*V)+R*(+Z*U*q-Z*K*E-Y*H*q+Q*H*E+Y*K*V-Q*U*V)+D*(-W*K*V-Z*X*q+Z*K*G+W*H*q-Q*H*G+Q*X*V)}transpose(){let J=this.elements,Z;return Z=J[1],J[1]=J[4],J[4]=Z,Z=J[2],J[2]=J[8],J[8]=Z,Z=J[6],J[6]=J[9],J[9]=Z,Z=J[3],J[3]=J[12],J[12]=Z,Z=J[7],J[7]=J[13],J[13]=Z,Z=J[11],J[11]=J[14],J[14]=Z,this}setPosition(J,Z,Q){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Z,W[14]=Q;return this}invert(){let J=this.elements,Z=J[0],Q=J[1],W=J[2],Y=J[3],H=J[4],K=J[5],X=J[6],U=J[7],V=J[8],q=J[9],G=J[10],E=J[11],N=J[12],O=J[13],R=J[14],D=J[15],F=q*R*U-O*G*U+O*X*E-K*R*E-q*X*D+K*G*D,z=N*G*U-V*R*U-N*X*E+H*R*E+V*X*D-H*G*D,B=V*O*U-N*q*U+N*K*E-H*O*E-V*K*D+H*q*D,L=N*q*X-V*O*X-N*K*G+H*O*G+V*K*R-H*q*R,P=Z*F+Q*z+W*B+Y*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return J[0]=F*k,J[1]=(O*G*Y-q*R*Y-O*W*E+Q*R*E+q*W*D-Q*G*D)*k,J[2]=(K*R*Y-O*X*Y+O*W*U-Q*R*U-K*W*D+Q*X*D)*k,J[3]=(q*X*Y-K*G*Y-q*W*U+Q*G*U+K*W*E-Q*X*E)*k,J[4]=z*k,J[5]=(V*R*Y-N*G*Y+N*W*E-Z*R*E-V*W*D+Z*G*D)*k,J[6]=(N*X*Y-H*R*Y-N*W*U+Z*R*U+H*W*D-Z*X*D)*k,J[7]=(H*G*Y-V*X*Y+V*W*U-Z*G*U-H*W*E+Z*X*E)*k,J[8]=B*k,J[9]=(N*q*Y-V*O*Y-N*Q*E+Z*O*E+V*Q*D-Z*q*D)*k,J[10]=(H*O*Y-N*K*Y+N*Q*U-Z*O*U-H*Q*D+Z*K*D)*k,J[11]=(V*K*Y-H*q*Y-V*Q*U+Z*q*U+H*Q*E-Z*K*E)*k,J[12]=L*k,J[13]=(V*O*W-N*q*W+N*Q*G-Z*O*G-V*Q*R+Z*q*R)*k,J[14]=(N*K*W-H*O*W-N*Q*X+Z*O*X+H*Q*R-Z*K*R)*k,J[15]=(H*q*W-V*K*W+V*Q*X-Z*q*X-H*Q*G+Z*K*G)*k,this}scale(J){let Z=this.elements,Q=J.x,W=J.y,Y=J.z;return Z[0]*=Q,Z[4]*=W,Z[8]*=Y,Z[1]*=Q,Z[5]*=W,Z[9]*=Y,Z[2]*=Q,Z[6]*=W,Z[10]*=Y,Z[3]*=Q,Z[7]*=W,Z[11]*=Y,this}getMaxScaleOnAxis(){let J=this.elements,Z=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Z,Q,W))}makeTranslation(J,Z,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Z,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,Z,-Q,0,0,Q,Z,0,0,0,0,1),this}makeRotationY(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(Z,0,Q,0,0,1,0,0,-Q,0,Z,0,0,0,0,1),this}makeRotationZ(J){let Z=Math.cos(J),Q=Math.sin(J);return this.set(Z,-Q,0,0,Q,Z,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Z){let Q=Math.cos(Z),W=Math.sin(Z),Y=1-Q,H=J.x,K=J.y,X=J.z,U=Y*H,V=Y*K;return this.set(U*H+Q,U*K-W*X,U*X+W*K,0,U*K+W*X,V*K+Q,V*X-W*H,0,U*X-W*K,V*X+W*H,Y*X*X+Q,0,0,0,0,1),this}makeScale(J,Z,Q){return this.set(J,0,0,0,0,Z,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,Z,Q,W,Y,H){return this.set(1,Q,Y,0,J,1,H,0,Z,W,1,0,0,0,0,1),this}compose(J,Z,Q){let W=this.elements,Y=Z._x,H=Z._y,K=Z._z,X=Z._w,U=Y+Y,V=H+H,q=K+K,G=Y*U,E=Y*V,N=Y*q,O=H*V,R=H*q,D=K*q,F=X*U,z=X*V,B=X*q,L=Q.x,P=Q.y,k=Q.z;return W[0]=(1-(O+D))*L,W[1]=(E+B)*L,W[2]=(N-z)*L,W[3]=0,W[4]=(E-B)*P,W[5]=(1-(G+D))*P,W[6]=(R+F)*P,W[7]=0,W[8]=(N+z)*k,W[9]=(R-F)*k,W[10]=(1-(G+O))*k,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Z,Q){let W=this.elements,Y=s6.set(W[0],W[1],W[2]).length(),H=s6.set(W[4],W[5],W[6]).length(),K=s6.set(W[8],W[9],W[10]).length();if(this.determinant()<0)Y=-Y;J.x=W[12],J.y=W[13],J.z=W[14],r5.copy(this);let U=1/Y,V=1/H,q=1/K;return r5.elements[0]*=U,r5.elements[1]*=U,r5.elements[2]*=U,r5.elements[4]*=V,r5.elements[5]*=V,r5.elements[6]*=V,r5.elements[8]*=q,r5.elements[9]*=q,r5.elements[10]*=q,Z.setFromRotationMatrix(r5),Q.x=Y,Q.y=H,Q.z=K,this}makePerspective(J,Z,Q,W,Y,H,K=2000){let X=this.elements,U=2*Y/(Z-J),V=2*Y/(Q-W),q=(Z+J)/(Z-J),G=(Q+W)/(Q-W),E,N;if(K===2000)E=-(H+Y)/(H-Y),N=-2*H*Y/(H-Y);else if(K===2001)E=-H/(H-Y),N=-H*Y/(H-Y);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return X[0]=U,X[4]=0,X[8]=q,X[12]=0,X[1]=0,X[5]=V,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=E,X[14]=N,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Z,Q,W,Y,H,K=2000){let X=this.elements,U=1/(Z-J),V=1/(Q-W),q=1/(H-Y),G=(Z+J)*U,E=(Q+W)*V,N,O;if(K===2000)N=(H+Y)*q,O=-2*q;else if(K===2001)N=Y*q,O=-1*q;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return X[0]=2*U,X[4]=0,X[8]=0,X[12]=-G,X[1]=0,X[5]=2*V,X[9]=0,X[13]=-E,X[2]=0,X[6]=0,X[10]=O,X[14]=-N,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Z=this.elements,Q=J.elements;for(let W=0;W<16;W++)if(Z[W]!==Q[W])return!1;return!0}fromArray(J,Z=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+Z];return this}toArray(J=[],Z=0){let Q=this.elements;return J[Z]=Q[0],J[Z+1]=Q[1],J[Z+2]=Q[2],J[Z+3]=Q[3],J[Z+4]=Q[4],J[Z+5]=Q[5],J[Z+6]=Q[6],J[Z+7]=Q[7],J[Z+8]=Q[8],J[Z+9]=Q[9],J[Z+10]=Q[10],J[Z+11]=Q[11],J[Z+12]=Q[12],J[Z+13]=Q[13],J[Z+14]=Q[14],J[Z+15]=Q[15],J}}var s6=new T,r5=new F5,tQ=new T(0,0,0),eQ=new T(1,1,1),$6=new T,Z9=new T,p5=new T,qJ=new F5,EJ=new x6;class $9{constructor(J=0,Z=0,Q=0,W=$9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Z,this._z=Q,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Z,Q,W=this._order){return this._x=J,this._y=Z,this._z=Q,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Z=this._order,Q=!0){let W=J.elements,Y=W[0],H=W[4],K=W[8],X=W[1],U=W[5],V=W[9],q=W[2],G=W[6],E=W[10];switch(Z){case"XYZ":if(this._y=Math.asin(C5(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-V,E),this._z=Math.atan2(-H,Y);else this._x=Math.atan2(G,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-C5(V,-1,1)),Math.abs(V)<0.9999999)this._y=Math.atan2(K,E),this._z=Math.atan2(X,U);else this._y=Math.atan2(-q,Y),this._z=0;break;case"ZXY":if(this._x=Math.asin(C5(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-q,E),this._z=Math.atan2(-H,U);else this._y=0,this._z=Math.atan2(X,Y);break;case"ZYX":if(this._y=Math.asin(-C5(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(G,E),this._z=Math.atan2(X,Y);else this._x=0,this._z=Math.atan2(-H,U);break;case"YZX":if(this._z=Math.asin(C5(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-V,U),this._y=Math.atan2(-q,Y);else this._x=0,this._y=Math.atan2(K,E);break;case"XZY":if(this._z=Math.asin(-C5(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(G,U),this._y=Math.atan2(K,Y);else this._x=Math.atan2(-V,E),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Z)}if(this._order=Z,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,Z,Q){return qJ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(qJ,Z,Q)}setFromVector3(J,Z=this._order){return this.set(J.x,J.y,J.z,Z)}reorder(J){return EJ.setFromEuler(this),this.setFromQuaternion(EJ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$9.DEFAULT_ORDER="XYZ";class C9{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var JW=0,FJ=new T,i6=new x6,F6=new F5,Q9=new T,A8=new T,ZW=new T,QW=new x6,DJ=new T(1,0,0),NJ=new T(0,1,0),OJ=new T(0,0,1),WW={type:"added"},YW={type:"removed"};class k5 extends _6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:JW++}),this.uuid=T8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=k5.DEFAULT_UP.clone();let J=new T,Z=new $9,Q=new x6,W=new T(1,1,1);function Y(){Q.setFromEuler(Z,!1)}function H(){Z.setFromQuaternion(Q,void 0,!1)}Z._onChange(Y),Q._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Z},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new F5},normalMatrix:{value:new d0}}),this.matrix=new F5,this.matrixWorld=new F5,this.matrixAutoUpdate=k5.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=k5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Z){this.quaternion.setFromAxisAngle(J,Z)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Z){return i6.setFromAxisAngle(J,Z),this.quaternion.multiply(i6),this}rotateOnWorldAxis(J,Z){return i6.setFromAxisAngle(J,Z),this.quaternion.premultiply(i6),this}rotateX(J){return this.rotateOnAxis(DJ,J)}rotateY(J){return this.rotateOnAxis(NJ,J)}rotateZ(J){return this.rotateOnAxis(OJ,J)}translateOnAxis(J,Z){return FJ.copy(J).applyQuaternion(this.quaternion),this.position.add(FJ.multiplyScalar(Z)),this}translateX(J){return this.translateOnAxis(DJ,J)}translateY(J){return this.translateOnAxis(NJ,J)}translateZ(J){return this.translateOnAxis(OJ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(F6.copy(this.matrixWorld).invert())}lookAt(J,Z,Q){if(J.isVector3)Q9.copy(J);else Q9.set(J,Z,Q);let W=this.parent;if(this.updateWorldMatrix(!0,!1),A8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)F6.lookAt(A8,Q9,this.up);else F6.lookAt(Q9,A8,this.up);if(this.quaternion.setFromRotationMatrix(F6),W)F6.extractRotation(W.matrixWorld),i6.setFromRotationMatrix(F6),this.quaternion.premultiply(i6.invert())}add(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.add(arguments[Z]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D){if(J.parent!==null)J.parent.remove(J);J.parent=this,this.children.push(J),J.dispatchEvent(WW)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let Z=this.children.indexOf(J);if(Z!==-1)J.parent=null,this.children.splice(Z,1),J.dispatchEvent(YW);return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),F6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),F6.multiply(J.parent.matrixWorld);return J.applyMatrix4(F6),this.add(J),J.updateWorldMatrix(!1,!0),this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Z){if(this[J]===Z)return this;for(let Q=0,W=this.children.length;Q<W;Q++){let H=this.children[Q].getObjectByProperty(J,Z);if(H!==void 0)return H}return}getObjectsByProperty(J,Z,Q=[]){if(this[J]===Z)Q.push(this);let W=this.children;for(let Y=0,H=W.length;Y<H;Y++)W[Y].getObjectsByProperty(J,Z,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(A8,J,ZW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(A8,QW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Z=this.matrixWorld.elements;return J.set(Z[8],Z[9],Z[10]).normalize()}raycast(){}traverse(J){J(this);let Z=this.children;for(let Q=0,W=Z.length;Q<W;Q++)Z[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Z=this.children;for(let Q=0,W=Z.length;Q<W;Q++)Z[Q].traverseVisible(J)}traverseAncestors(J){let Z=this.parent;if(Z!==null)J(Z),Z.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Z=this.children;for(let Q=0,W=Z.length;Q<W;Q++){let Y=Z[Q];if(Y.matrixWorldAutoUpdate===!0||J===!0)Y.updateMatrixWorld(J)}}updateWorldMatrix(J,Z){let Q=this.parent;if(J===!0&&Q!==null&&Q.matrixWorldAutoUpdate===!0)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Z===!0){let W=this.children;for(let Y=0,H=W.length;Y<H;Y++){let K=W[Y];if(K.matrixWorldAutoUpdate===!0)K.updateWorldMatrix(!1,!0)}}}toJSON(J){let Z=J===void 0||typeof J==="string",Q={};if(Z)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.visibility=this._visibility,W.active=this._active,W.bounds=this._bounds.map((K)=>({boxInitialized:K.boxInitialized,boxMin:K.box.min.toArray(),boxMax:K.box.max.toArray(),sphereInitialized:K.sphereInitialized,sphereRadius:K.sphere.radius,sphereCenter:K.sphere.center.toArray()})),W.maxGeometryCount=this._maxGeometryCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.geometryCount=this._geometryCount,W.matricesTexture=this._matricesTexture.toJSON(J),this.boundingSphere!==null)W.boundingSphere={center:W.boundingSphere.center.toArray(),radius:W.boundingSphere.radius};if(this.boundingBox!==null)W.boundingBox={min:W.boundingBox.min.toArray(),max:W.boundingBox.max.toArray()}}function Y(K,X){if(K[X.uuid]===void 0)K[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Y(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let X=K.shapes;if(Array.isArray(X))for(let U=0,V=X.length;U<V;U++){let q=X[U];Y(J.shapes,q)}else Y(J.shapes,X)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Y(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let X=0,U=this.material.length;X<U;X++)K.push(Y(J.materials,this.material[X]));W.material=K}else W.material=Y(J.materials,this.material);if(this.children.length>0){W.children=[];for(let K=0;K<this.children.length;K++)W.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let K=0;K<this.animations.length;K++){let X=this.animations[K];W.animations.push(Y(J.animations,X))}}if(Z){let K=H(J.geometries),X=H(J.materials),U=H(J.textures),V=H(J.images),q=H(J.shapes),G=H(J.skeletons),E=H(J.animations),N=H(J.nodes);if(K.length>0)Q.geometries=K;if(X.length>0)Q.materials=X;if(U.length>0)Q.textures=U;if(V.length>0)Q.images=V;if(q.length>0)Q.shapes=q;if(G.length>0)Q.skeletons=G;if(E.length>0)Q.animations=E;if(N.length>0)Q.nodes=N}return Q.object=W,Q;function H(K){let X=[];for(let U in K){let V=K[U];delete V.metadata,X.push(V)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Z=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Z===!0)for(let Q=0;Q<J.children.length;Q++){let W=J.children[Q];this.add(W.clone())}return this}}k5.DEFAULT_UP=new T(0,1,0);k5.DEFAULT_MATRIX_AUTO_UPDATE=!0;k5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var a5=new T,D6=new T,K7=new T,N6=new T,o6=new T,r6=new T,RJ=new T,U7=new T,V7=new T,G7=new T,W9=!1;class t5{constructor(J=new T,Z=new T,Q=new T){this.a=J,this.b=Z,this.c=Q}static getNormal(J,Z,Q,W){W.subVectors(Q,Z),a5.subVectors(J,Z),W.cross(a5);let Y=W.lengthSq();if(Y>0)return W.multiplyScalar(1/Math.sqrt(Y));return W.set(0,0,0)}static getBarycoord(J,Z,Q,W,Y){a5.subVectors(W,Z),D6.subVectors(Q,Z),K7.subVectors(J,Z);let H=a5.dot(a5),K=a5.dot(D6),X=a5.dot(K7),U=D6.dot(D6),V=D6.dot(K7),q=H*U-K*K;if(q===0)return Y.set(0,0,0),null;let G=1/q,E=(U*X-K*V)*G,N=(H*V-K*X)*G;return Y.set(1-E-N,N,E)}static containsPoint(J,Z,Q,W){if(this.getBarycoord(J,Z,Q,W,N6)===null)return!1;return N6.x>=0&&N6.y>=0&&N6.x+N6.y<=1}static getUV(J,Z,Q,W,Y,H,K,X){if(W9===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),W9=!0;return this.getInterpolation(J,Z,Q,W,Y,H,K,X)}static getInterpolation(J,Z,Q,W,Y,H,K,X){if(this.getBarycoord(J,Z,Q,W,N6)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(Y,N6.x),X.addScaledVector(H,N6.y),X.addScaledVector(K,N6.z),X}static isFrontFacing(J,Z,Q,W){return a5.subVectors(Q,Z),D6.subVectors(J,Z),a5.cross(D6).dot(W)<0?!0:!1}set(J,Z,Q){return this.a.copy(J),this.b.copy(Z),this.c.copy(Q),this}setFromPointsAndIndices(J,Z,Q,W){return this.a.copy(J[Z]),this.b.copy(J[Q]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Z,Q,W){return this.a.fromBufferAttribute(J,Z),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return a5.subVectors(this.c,this.b),D6.subVectors(this.a,this.b),a5.cross(D6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return t5.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Z){return t5.getBarycoord(J,this.a,this.b,this.c,Z)}getUV(J,Z,Q,W,Y){if(W9===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),W9=!0;return t5.getInterpolation(J,this.a,this.b,this.c,Z,Q,W,Y)}getInterpolation(J,Z,Q,W,Y){return t5.getInterpolation(J,this.a,this.b,this.c,Z,Q,W,Y)}containsPoint(J){return t5.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return t5.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Z){let Q=this.a,W=this.b,Y=this.c,H,K;o6.subVectors(W,Q),r6.subVectors(Y,Q),U7.subVectors(J,Q);let X=o6.dot(U7),U=r6.dot(U7);if(X<=0&&U<=0)return Z.copy(Q);V7.subVectors(J,W);let V=o6.dot(V7),q=r6.dot(V7);if(V>=0&&q<=V)return Z.copy(W);let G=X*q-V*U;if(G<=0&&X>=0&&V<=0)return H=X/(X-V),Z.copy(Q).addScaledVector(o6,H);G7.subVectors(J,Y);let E=o6.dot(G7),N=r6.dot(G7);if(N>=0&&E<=N)return Z.copy(Y);let O=E*U-X*N;if(O<=0&&U>=0&&N<=0)return K=U/(U-N),Z.copy(Q).addScaledVector(r6,K);let R=V*N-E*q;if(R<=0&&q-V>=0&&E-N>=0)return RJ.subVectors(Y,W),K=(q-V)/(q-V+(E-N)),Z.copy(W).addScaledVector(RJ,K);let D=1/(R+O+G);return H=O*D,K=G*D,Z.copy(Q).addScaledVector(o6,H).addScaledVector(r6,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var ZZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},C6={h:0,s:0,l:0},Y9={h:0,s:0,l:0};function q7(J,Z,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+(Z-J)*6*Q;if(Q<0.5)return Z;if(Q<0.6666666666666666)return J+(Z-J)*6*(0.6666666666666666-Q);return J}class g0{constructor(J,Z,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Z,Q)}set(J,Z,Q){if(Z===void 0&&Q===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Z,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Z="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,Q5.toWorkingColorSpace(this,Z),this}setRGB(J,Z,Q,W=Q5.workingColorSpace){return this.r=J,this.g=Z,this.b=Q,Q5.toWorkingColorSpace(this,W),this}setHSL(J,Z,Q,W=Q5.workingColorSpace){if(J=nQ(J,1),Z=C5(Z,0,1),Q=C5(Q,0,1),Z===0)this.r=this.g=this.b=Q;else{let Y=Q<=0.5?Q*(1+Z):Q+Z-Q*Z,H=2*Q-Y;this.r=q7(H,Y,J+0.3333333333333333),this.g=q7(H,Y,J),this.b=q7(H,Y,J-0.3333333333333333)}return Q5.toWorkingColorSpace(this,W),this}setStyle(J,Z="srgb"){function Q(Y){if(Y===void 0)return;if(parseFloat(Y)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Y,H=W[1],K=W[2];switch(H){case"rgb":case"rgba":if(Y=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setRGB(Math.min(255,parseInt(Y[1],10))/255,Math.min(255,parseInt(Y[2],10))/255,Math.min(255,parseInt(Y[3],10))/255,Z);if(Y=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setRGB(Math.min(100,parseInt(Y[1],10))/100,Math.min(100,parseInt(Y[2],10))/100,Math.min(100,parseInt(Y[3],10))/100,Z);break;case"hsl":case"hsla":if(Y=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setHSL(parseFloat(Y[1])/360,parseFloat(Y[2])/100,parseFloat(Y[3])/100,Z);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Y=W[1],H=Y.length;if(H===3)return this.setRGB(parseInt(Y.charAt(0),16)/15,parseInt(Y.charAt(1),16)/15,parseInt(Y.charAt(2),16)/15,Z);else if(H===6)return this.setHex(parseInt(Y,16),Z);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Z);return this}setColorName(J,Z="srgb"){let Q=ZZ[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,Z);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=X8(J.r),this.g=X8(J.g),this.b=X8(J.b),this}copyLinearToSRGB(J){return this.r=e9(J.r),this.g=e9(J.g),this.b=e9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return Q5.fromWorkingColorSpace(T5.copy(this),J),Math.round(C5(T5.r*255,0,255))*65536+Math.round(C5(T5.g*255,0,255))*256+Math.round(C5(T5.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Z=Q5.workingColorSpace){Q5.fromWorkingColorSpace(T5.copy(this),Z);let{r:Q,g:W,b:Y}=T5,H=Math.max(Q,W,Y),K=Math.min(Q,W,Y),X,U,V=(K+H)/2;if(K===H)X=0,U=0;else{let q=H-K;switch(U=V<=0.5?q/(H+K):q/(2-H-K),H){case Q:X=(W-Y)/q+(W<Y?6:0);break;case W:X=(Y-Q)/q+2;break;case Y:X=(Q-W)/q+4;break}X/=6}return J.h=X,J.s=U,J.l=V,J}getRGB(J,Z=Q5.workingColorSpace){return Q5.fromWorkingColorSpace(T5.copy(this),Z),J.r=T5.r,J.g=T5.g,J.b=T5.b,J}getStyle(J="srgb"){Q5.fromWorkingColorSpace(T5.copy(this),J);let{r:Z,g:Q,b:W}=T5;if(J!=="srgb")return`color(${J} ${Z.toFixed(3)} ${Q.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Z*255)},${Math.round(Q*255)},${Math.round(W*255)})`}offsetHSL(J,Z,Q){return this.getHSL(C6),this.setHSL(C6.h+J,C6.s+Z,C6.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Z){return this.r=J.r+Z.r,this.g=J.g+Z.g,this.b=J.b+Z.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Z){return this.r+=(J.r-this.r)*Z,this.g+=(J.g-this.g)*Z,this.b+=(J.b-this.b)*Z,this}lerpColors(J,Z,Q){return this.r=J.r+(Z.r-J.r)*Q,this.g=J.g+(Z.g-J.g)*Q,this.b=J.b+(Z.b-J.b)*Q,this}lerpHSL(J,Z){this.getHSL(C6),J.getHSL(Y9);let Q=a9(C6.h,Y9.h,Z),W=a9(C6.s,Y9.s,Z),Y=a9(C6.l,Y9.l,Z);return this.setHSL(Q,W,Y),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Z=this.r,Q=this.g,W=this.b,Y=J.elements;return this.r=Y[0]*Z+Y[3]*Q+Y[6]*W,this.g=Y[1]*Z+Y[4]*Q+Y[7]*W,this.b=Y[2]*Z+Y[5]*Q+Y[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Z=0){return this.r=J[Z],this.g=J[Z+1],this.b=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.r,J[Z+1]=this.g,J[Z+2]=this.b,J}fromBufferAttribute(J,Z){return this.r=J.getX(Z),this.g=J.getY(Z),this.b=J.getZ(Z),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var T5=new g0;g0.NAMES=ZZ;var HW=0;class V8 extends _6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:HW++}),this.uuid=T8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new g0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Z in J){let Q=J[Z];if(Q===void 0){console.warn(`THREE.Material: parameter '${Z}' has value of undefined.`);continue}let W=this[Z];if(W===void 0){console.warn(`THREE.Material: '${Z}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set(Q);else if(W&&W.isVector3&&(Q&&Q.isVector3))W.copy(Q);else this[Z]=Q}}toJSON(J){let Z=J===void 0||typeof J==="string";if(Z)J={textures:{},images:{}};let Q={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors===!0)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=!0;if(this.blendSrc!==204)Q.blendSrc=this.blendSrc;if(this.blendDst!==205)Q.blendDst=this.blendDst;if(this.blendEquation!==100)Q.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Q.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Q.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Q.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Q.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Q.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Q.depthFunc=this.depthFunc;if(this.depthTest===!1)Q.depthTest=this.depthTest;if(this.depthWrite===!1)Q.depthWrite=this.depthWrite;if(this.colorWrite===!1)Q.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Q.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Q.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Q.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Q.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Q.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Q.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Q.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Q.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=!0;if(this.alphaToCoverage===!0)Q.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Q.forceSinglePass=!0;if(this.wireframe===!0)Q.wireframe=!0;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=!0;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function W(Y){let H=[];for(let K in Y){let X=Y[K];delete X.metadata,H.push(X)}return H}if(Z){let Y=W(J.textures),H=W(J.images);if(Y.length>0)Q.textures=Y;if(H.length>0)Q.images=H}return Q}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Z=J.clippingPlanes,Q=null;if(Z!==null){let W=Z.length;Q=Array(W);for(let Y=0;Y!==W;++Y)Q[Y]=Z[Y].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class B5 extends V8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new g0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var N5=new T,H9=new q0;class e5{constructor(J,Z,Q=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=Z,this.count=J!==void 0?J.length/Z:0,this.normalized=Q,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(J){return this.usage=J,this}addUpdateRange(J,Z){this.updateRanges.push({start:J,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Z,Q){J*=this.itemSize,Q*=Z.itemSize;for(let W=0,Y=this.itemSize;W<Y;W++)this.array[J+W]=Z.array[Q+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Z=0,Q=this.count;Z<Q;Z++)H9.fromBufferAttribute(this,Z),H9.applyMatrix3(J),this.setXY(Z,H9.x,H9.y);else if(this.itemSize===3)for(let Z=0,Q=this.count;Z<Q;Z++)N5.fromBufferAttribute(this,Z),N5.applyMatrix3(J),this.setXYZ(Z,N5.x,N5.y,N5.z);return this}applyMatrix4(J){for(let Z=0,Q=this.count;Z<Q;Z++)N5.fromBufferAttribute(this,Z),N5.applyMatrix4(J),this.setXYZ(Z,N5.x,N5.y,N5.z);return this}applyNormalMatrix(J){for(let Z=0,Q=this.count;Z<Q;Z++)N5.fromBufferAttribute(this,Z),N5.applyNormalMatrix(J),this.setXYZ(Z,N5.x,N5.y,N5.z);return this}transformDirection(J){for(let Z=0,Q=this.count;Z<Q;Z++)N5.fromBufferAttribute(this,Z),N5.transformDirection(J),this.setXYZ(Z,N5.x,N5.y,N5.z);return this}set(J,Z=0){return this.array.set(J,Z),this}getComponent(J,Z){let Q=this.array[J*this.itemSize+Z];if(this.normalized)Q=M8(Q,this.array);return Q}setComponent(J,Z,Q){if(this.normalized)Q=_5(Q,this.array);return this.array[J*this.itemSize+Z]=Q,this}getX(J){let Z=this.array[J*this.itemSize];if(this.normalized)Z=M8(Z,this.array);return Z}setX(J,Z){if(this.normalized)Z=_5(Z,this.array);return this.array[J*this.itemSize]=Z,this}getY(J){let Z=this.array[J*this.itemSize+1];if(this.normalized)Z=M8(Z,this.array);return Z}setY(J,Z){if(this.normalized)Z=_5(Z,this.array);return this.array[J*this.itemSize+1]=Z,this}getZ(J){let Z=this.array[J*this.itemSize+2];if(this.normalized)Z=M8(Z,this.array);return Z}setZ(J,Z){if(this.normalized)Z=_5(Z,this.array);return this.array[J*this.itemSize+2]=Z,this}getW(J){let Z=this.array[J*this.itemSize+3];if(this.normalized)Z=M8(Z,this.array);return Z}setW(J,Z){if(this.normalized)Z=_5(Z,this.array);return this.array[J*this.itemSize+3]=Z,this}setXY(J,Z,Q){if(J*=this.itemSize,this.normalized)Z=_5(Z,this.array),Q=_5(Q,this.array);return this.array[J+0]=Z,this.array[J+1]=Q,this}setXYZ(J,Z,Q,W){if(J*=this.itemSize,this.normalized)Z=_5(Z,this.array),Q=_5(Q,this.array),W=_5(W,this.array);return this.array[J+0]=Z,this.array[J+1]=Q,this.array[J+2]=W,this}setXYZW(J,Z,Q,W,Y){if(J*=this.itemSize,this.normalized)Z=_5(Z,this.array),Q=_5(Q,this.array),W=_5(W,this.array),Y=_5(Y,this.array);return this.array[J+0]=Z,this.array[J+1]=Q,this.array[J+2]=W,this.array[J+3]=Y,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class h7 extends e5{constructor(J,Z,Q){super(new Uint16Array(J),Z,Q)}}class j7 extends e5{constructor(J,Z,Q){super(new Uint32Array(J),Z,Q)}}class V5 extends e5{constructor(J,Z,Q){super(new Float32Array(J),Z,Q)}}var XW=0,c5=new F5,E7=new k5,a6=new T,m5=new U8,I8=new U8,$5=new T;class n5 extends _6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XW++}),this.uuid=T8(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((tJ(J))?j7:h7)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,Z){return this.attributes[J]=Z,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Z,Q=0){this.groups.push({start:J,count:Z,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,Z){this.drawRange.start=J,this.drawRange.count=Z}applyMatrix4(J){let Z=this.attributes.position;if(Z!==void 0)Z.applyMatrix4(J),Z.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let Y=new d0().getNormalMatrix(J);Q.applyNormalMatrix(Y),Q.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return c5.makeRotationFromQuaternion(J),this.applyMatrix4(c5),this}rotateX(J){return c5.makeRotationX(J),this.applyMatrix4(c5),this}rotateY(J){return c5.makeRotationY(J),this.applyMatrix4(c5),this}rotateZ(J){return c5.makeRotationZ(J),this.applyMatrix4(c5),this}translate(J,Z,Q){return c5.makeTranslation(J,Z,Q),this.applyMatrix4(c5),this}scale(J,Z,Q){return c5.makeScale(J,Z,Q),this.applyMatrix4(c5),this}lookAt(J){return E7.lookAt(J),E7.updateMatrix(),this.applyMatrix4(E7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(a6).negate(),this.translate(a6.x,a6.y,a6.z),this}setFromPoints(J){let Z=[];for(let Q=0,W=J.length;Q<W;Q++){let Y=J[Q];Z.push(Y.x,Y.y,Y.z||0)}return this.setAttribute("position",new V5(Z,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new U8;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Z)for(let Q=0,W=Z.length;Q<W;Q++){let Y=Z[Q];if(m5.setFromBufferAttribute(Y),this.morphTargetsRelative)$5.addVectors(this.boundingBox.min,m5.min),this.boundingBox.expandByPoint($5),$5.addVectors(this.boundingBox.max,m5.max),this.boundingBox.expandByPoint($5);else this.boundingBox.expandByPoint(m5.min),this.boundingBox.expandByPoint(m5.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new I9;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(J){let Q=this.boundingSphere.center;if(m5.setFromBufferAttribute(J),Z)for(let Y=0,H=Z.length;Y<H;Y++){let K=Z[Y];if(I8.setFromBufferAttribute(K),this.morphTargetsRelative)$5.addVectors(m5.min,I8.min),m5.expandByPoint($5),$5.addVectors(m5.max,I8.max),m5.expandByPoint($5);else m5.expandByPoint(I8.min),m5.expandByPoint(I8.max)}m5.getCenter(Q);let W=0;for(let Y=0,H=J.count;Y<H;Y++)$5.fromBufferAttribute(J,Y),W=Math.max(W,Q.distanceToSquared($5));if(Z)for(let Y=0,H=Z.length;Y<H;Y++){let K=Z[Y],X=this.morphTargetsRelative;for(let U=0,V=K.count;U<V;U++){if($5.fromBufferAttribute(K,U),X)a6.fromBufferAttribute(J,U),$5.add(a6);W=Math.max(W,Q.distanceToSquared($5))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Z=this.attributes;if(J===null||Z.position===void 0||Z.normal===void 0||Z.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let Q=J.array,W=Z.position.array,Y=Z.normal.array,H=Z.uv.array,K=W.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new e5(new Float32Array(4*K),4));let X=this.getAttribute("tangent").array,U=[],V=[];for(let A=0;A<K;A++)U[A]=new T,V[A]=new T;let q=new T,G=new T,E=new T,N=new q0,O=new q0,R=new q0,D=new T,F=new T;function z(A,$,v){q.fromArray(W,A*3),G.fromArray(W,$*3),E.fromArray(W,v*3),N.fromArray(H,A*2),O.fromArray(H,$*2),R.fromArray(H,v*2),G.sub(q),E.sub(q),O.sub(N),R.sub(N);let n=1/(O.x*R.y-R.x*O.y);if(!isFinite(n))return;D.copy(G).multiplyScalar(R.y).addScaledVector(E,-O.y).multiplyScalar(n),F.copy(E).multiplyScalar(O.x).addScaledVector(G,-R.x).multiplyScalar(n),U[A].add(D),U[$].add(D),U[v].add(D),V[A].add(F),V[$].add(F),V[v].add(F)}let B=this.groups;if(B.length===0)B=[{start:0,count:Q.length}];for(let A=0,$=B.length;A<$;++A){let v=B[A],n=v.start,s=v.count;for(let w=n,_=n+s;w<_;w+=3)z(Q[w+0],Q[w+1],Q[w+2])}let L=new T,P=new T,k=new T,f=new T;function m(A){k.fromArray(Y,A*3),f.copy(k);let $=U[A];L.copy($),L.sub(k.multiplyScalar(k.dot($))).normalize(),P.crossVectors(f,$);let n=P.dot(V[A])<0?-1:1;X[A*4]=L.x,X[A*4+1]=L.y,X[A*4+2]=L.z,X[A*4+3]=n}for(let A=0,$=B.length;A<$;++A){let v=B[A],n=v.start,s=v.count;for(let w=n,_=n+s;w<_;w+=3)m(Q[w+0]),m(Q[w+1]),m(Q[w+2])}}computeVertexNormals(){let J=this.index,Z=this.getAttribute("position");if(Z!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new e5(new Float32Array(Z.count*3),3),this.setAttribute("normal",Q);else for(let G=0,E=Q.count;G<E;G++)Q.setXYZ(G,0,0,0);let W=new T,Y=new T,H=new T,K=new T,X=new T,U=new T,V=new T,q=new T;if(J)for(let G=0,E=J.count;G<E;G+=3){let N=J.getX(G+0),O=J.getX(G+1),R=J.getX(G+2);W.fromBufferAttribute(Z,N),Y.fromBufferAttribute(Z,O),H.fromBufferAttribute(Z,R),V.subVectors(H,Y),q.subVectors(W,Y),V.cross(q),K.fromBufferAttribute(Q,N),X.fromBufferAttribute(Q,O),U.fromBufferAttribute(Q,R),K.add(V),X.add(V),U.add(V),Q.setXYZ(N,K.x,K.y,K.z),Q.setXYZ(O,X.x,X.y,X.z),Q.setXYZ(R,U.x,U.y,U.z)}else for(let G=0,E=Z.count;G<E;G+=3)W.fromBufferAttribute(Z,G+0),Y.fromBufferAttribute(Z,G+1),H.fromBufferAttribute(Z,G+2),V.subVectors(H,Y),q.subVectors(W,Y),V.cross(q),Q.setXYZ(G+0,V.x,V.y,V.z),Q.setXYZ(G+1,V.x,V.y,V.z),Q.setXYZ(G+2,V.x,V.y,V.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Z=0,Q=J.count;Z<Q;Z++)$5.fromBufferAttribute(J,Z),$5.normalize(),J.setXYZ(Z,$5.x,$5.y,$5.z)}toNonIndexed(){function J(K,X){let{array:U,itemSize:V,normalized:q}=K,G=new U.constructor(X.length*V),E=0,N=0;for(let O=0,R=X.length;O<R;O++){if(K.isInterleavedBufferAttribute)E=X[O]*K.data.stride+K.offset;else E=X[O]*V;for(let D=0;D<V;D++)G[N++]=U[E++]}return new e5(G,V,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Z=new n5,Q=this.index.array,W=this.attributes;for(let K in W){let X=W[K],U=J(X,Q);Z.setAttribute(K,U)}let Y=this.morphAttributes;for(let K in Y){let X=[],U=Y[K];for(let V=0,q=U.length;V<q;V++){let G=U[V],E=J(G,Q);X.push(E)}Z.morphAttributes[K]=X}Z.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let K=0,X=H.length;K<X;K++){let U=H[K];Z.addGroup(U.start,U.count,U.materialIndex)}return Z}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let U in X)if(X[U]!==void 0)J[U]=X[U];return J}J.data={attributes:{}};let Z=this.index;if(Z!==null)J.data.index={type:Z.array.constructor.name,array:Array.prototype.slice.call(Z.array)};let Q=this.attributes;for(let X in Q){let U=Q[X];J.data.attributes[X]=U.toJSON(J.data)}let W={},Y=!1;for(let X in this.morphAttributes){let U=this.morphAttributes[X],V=[];for(let q=0,G=U.length;q<G;q++){let E=U[q];V.push(E.toJSON(J.data))}if(V.length>0)W[X]=V,Y=!0}if(Y)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere={center:K.center.toArray(),radius:K.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Z={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone(Z));let W=J.attributes;for(let U in W){let V=W[U];this.setAttribute(U,V.clone(Z))}let Y=J.morphAttributes;for(let U in Y){let V=[],q=Y[U];for(let G=0,E=q.length;G<E;G++)V.push(q[G].clone(Z));this.morphAttributes[U]=V}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let U=0,V=H.length;U<V;U++){let q=H[U];this.addGroup(q.start,q.count,q.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var MJ=new F5,b6=new b7,X9=new I9,zJ=new T,t6=new T,e6=new T,J8=new T,F7=new T,K9=new T,U9=new q0,V9=new q0,G9=new q0,BJ=new T,AJ=new T,IJ=new T,q9=new T,E9=new T;class o extends k5{constructor(J=new n5,Z=new B5){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Z,this.updateMorphTargets()}copy(J,Z){if(super.copy(J,Z),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Z=this.geometry.morphAttributes,Q=Object.keys(Z);if(Q.length>0){let W=Z[Q[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Y=0,H=W.length;Y<H;Y++){let K=W[Y].name||String(Y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Y}}}}getVertexPosition(J,Z){let Q=this.geometry,W=Q.attributes.position,Y=Q.morphAttributes.position,H=Q.morphTargetsRelative;Z.fromBufferAttribute(W,J);let K=this.morphTargetInfluences;if(Y&&K){K9.set(0,0,0);for(let X=0,U=Y.length;X<U;X++){let V=K[X],q=Y[X];if(V===0)continue;if(F7.fromBufferAttribute(q,J),H)K9.addScaledVector(F7,V);else K9.addScaledVector(F7.sub(Z),V)}Z.add(K9)}return Z}raycast(J,Z){let Q=this.geometry,W=this.material,Y=this.matrixWorld;if(W===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(X9.copy(Q.boundingSphere),X9.applyMatrix4(Y),b6.copy(J.ray).recast(J.near),X9.containsPoint(b6.origin)===!1){if(b6.intersectSphere(X9,zJ)===null)return;if(b6.origin.distanceToSquared(zJ)>(J.far-J.near)**2)return}if(MJ.copy(Y).invert(),b6.copy(J.ray).applyMatrix4(MJ),Q.boundingBox!==null){if(b6.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,Z,b6)}_computeIntersections(J,Z,Q){let W,Y=this.geometry,H=this.material,K=Y.index,X=Y.attributes.position,U=Y.attributes.uv,V=Y.attributes.uv1,q=Y.attributes.normal,G=Y.groups,E=Y.drawRange;if(K!==null)if(Array.isArray(H))for(let N=0,O=G.length;N<O;N++){let R=G[N],D=H[R.materialIndex],F=Math.max(R.start,E.start),z=Math.min(K.count,Math.min(R.start+R.count,E.start+E.count));for(let B=F,L=z;B<L;B+=3){let P=K.getX(B),k=K.getX(B+1),f=K.getX(B+2);if(W=F9(this,D,J,Q,U,V,q,P,k,f),W)W.faceIndex=Math.floor(B/3),W.face.materialIndex=R.materialIndex,Z.push(W)}}else{let N=Math.max(0,E.start),O=Math.min(K.count,E.start+E.count);for(let R=N,D=O;R<D;R+=3){let F=K.getX(R),z=K.getX(R+1),B=K.getX(R+2);if(W=F9(this,H,J,Q,U,V,q,F,z,B),W)W.faceIndex=Math.floor(R/3),Z.push(W)}}else if(X!==void 0)if(Array.isArray(H))for(let N=0,O=G.length;N<O;N++){let R=G[N],D=H[R.materialIndex],F=Math.max(R.start,E.start),z=Math.min(X.count,Math.min(R.start+R.count,E.start+E.count));for(let B=F,L=z;B<L;B+=3){let P=B,k=B+1,f=B+2;if(W=F9(this,D,J,Q,U,V,q,P,k,f),W)W.faceIndex=Math.floor(B/3),W.face.materialIndex=R.materialIndex,Z.push(W)}}else{let N=Math.max(0,E.start),O=Math.min(X.count,E.start+E.count);for(let R=N,D=O;R<D;R+=3){let F=R,z=R+1,B=R+2;if(W=F9(this,H,J,Q,U,V,q,F,z,B),W)W.faceIndex=Math.floor(R/3),Z.push(W)}}}}function KW(J,Z,Q,W,Y,H,K,X){let U;if(Z.side===1)U=W.intersectTriangle(K,H,Y,!0,X);else U=W.intersectTriangle(Y,H,K,Z.side===0,X);if(U===null)return null;E9.copy(X),E9.applyMatrix4(J.matrixWorld);let V=Q.ray.origin.distanceTo(E9);if(V<Q.near||V>Q.far)return null;return{distance:V,point:E9.clone(),object:J}}function F9(J,Z,Q,W,Y,H,K,X,U,V){J.getVertexPosition(X,t6),J.getVertexPosition(U,e6),J.getVertexPosition(V,J8);let q=KW(J,Z,Q,W,t6,e6,J8,q9);if(q){if(Y)U9.fromBufferAttribute(Y,X),V9.fromBufferAttribute(Y,U),G9.fromBufferAttribute(Y,V),q.uv=t5.getInterpolation(q9,t6,e6,J8,U9,V9,G9,new q0);if(H)U9.fromBufferAttribute(H,X),V9.fromBufferAttribute(H,U),G9.fromBufferAttribute(H,V),q.uv1=t5.getInterpolation(q9,t6,e6,J8,U9,V9,G9,new q0),q.uv2=q.uv1;if(K){if(BJ.fromBufferAttribute(K,X),AJ.fromBufferAttribute(K,U),IJ.fromBufferAttribute(K,V),q.normal=t5.getInterpolation(q9,t6,e6,J8,BJ,AJ,IJ,new T),q.normal.dot(W.direction)>0)q.normal.multiplyScalar(-1)}let G={a:X,b:U,c:V,normal:new T,materialIndex:0};t5.getNormal(t6,e6,J8,G.normal),q.face=G}return q}class C0 extends n5{constructor(J=1,Z=1,Q=1,W=1,Y=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Z,depth:Q,widthSegments:W,heightSegments:Y,depthSegments:H};let K=this;W=Math.floor(W),Y=Math.floor(Y),H=Math.floor(H);let X=[],U=[],V=[],q=[],G=0,E=0;N("z","y","x",-1,-1,Q,Z,J,H,Y,0),N("z","y","x",1,-1,Q,Z,-J,H,Y,1),N("x","z","y",1,1,J,Q,Z,W,H,2),N("x","z","y",1,-1,J,Q,-Z,W,H,3),N("x","y","z",1,-1,J,Z,Q,W,Y,4),N("x","y","z",-1,-1,J,Z,-Q,W,Y,5),this.setIndex(X),this.setAttribute("position",new V5(U,3)),this.setAttribute("normal",new V5(V,3)),this.setAttribute("uv",new V5(q,2));function N(O,R,D,F,z,B,L,P,k,f,m){let A=B/k,$=L/f,v=B/2,n=L/2,s=P/2,w=k+1,_=f+1,u=0,a=0,c=new T;for(let d=0;d<_;d++){let e=d*$-n;for(let Q0=0;Q0<w;Q0++){let y=Q0*A-v;c[O]=y*F,c[R]=e*z,c[D]=s,U.push(c.x,c.y,c.z),c[O]=0,c[R]=0,c[D]=P>0?1:-1,V.push(c.x,c.y,c.z),q.push(Q0/k),q.push(1-d/f),u+=1}}for(let d=0;d<f;d++)for(let e=0;e<k;e++){let Q0=G+e+w*d,y=G+e+w*(d+1),i=G+(e+1)+w*(d+1),W0=G+(e+1)+w*d;X.push(Q0,y,W0),X.push(y,i,W0),a+=6}K.addGroup(E,a,m),E+=a,G+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function K8(J){let Z={};for(let Q in J){Z[Q]={};for(let W in J[Q]){let Y=J[Q][W];if(Y&&(Y.isColor||Y.isMatrix3||Y.isMatrix4||Y.isVector2||Y.isVector3||Y.isVector4||Y.isTexture||Y.isQuaternion))if(Y.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[Q][W]=null;else Z[Q][W]=Y.clone();else if(Array.isArray(Y))Z[Q][W]=Y.slice();else Z[Q][W]=Y}}return Z}function b5(J){let Z={};for(let Q=0;Q<J.length;Q++){let W=K8(J[Q]);for(let Y in W)Z[Y]=W[Y]}return Z}function UW(J){let Z=[];for(let Q=0;Q<J.length;Q++)Z.push(J[Q].clone());return Z}function QZ(J){if(J.getRenderTarget()===null)return J.outputColorSpace;return Q5.workingColorSpace}var VW={clone:K8,merge:b5},GW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class L6 extends V8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GW,this.fragmentShader=qW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=K8(J.uniforms),this.uniformsGroups=UW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Z=super.toJSON(J);Z.glslVersion=this.glslVersion,Z.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)Z.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Z.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Z.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Z.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Z.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Z.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Z.uniforms[W]={type:"m4",value:H.toArray()};else Z.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)Z.defines=this.defines;Z.vertexShader=this.vertexShader,Z.fragmentShader=this.fragmentShader,Z.lights=this.lights,Z.clipping=this.clipping;let Q={};for(let W in this.extensions)if(this.extensions[W]===!0)Q[W]=!0;if(Object.keys(Q).length>0)Z.extensions=Q;return Z}}class y7 extends k5{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new F5,this.projectionMatrix=new F5,this.projectionMatrixInverse=new F5,this.coordinateSystem=2000}copy(J,Z){return super.copy(J,Z),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Z){super.updateWorldMatrix(J,Z),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class h5 extends y7{constructor(J=50,Z=1,Q=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=W,this.focus=10,this.aspect=Z,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Z=0.5*this.getFilmHeight()/J;this.fov=k7*2*Math.atan(Z),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(r9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return k7*2*Math.atan(Math.tan(r9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(J,Z,Q,W,Y,H){if(this.aspect=J/Z,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=Q,this.view.offsetY=W,this.view.width=Y,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Z=J*Math.tan(r9*0.5*this.fov)/this.zoom,Q=2*Z,W=this.aspect*Q,Y=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:U}=H;Y+=H.offsetX*W/X,Z-=H.offsetY*Q/U,W*=H.width/X,Q*=H.height/U}let K=this.filmOffset;if(K!==0)Y+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(Y,Y+W,Z,Z-Q,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.fov=this.fov,Z.object.zoom=this.zoom,Z.object.near=this.near,Z.object.far=this.far,Z.object.focus=this.focus,Z.object.aspect=this.aspect,this.view!==null)Z.object.view=Object.assign({},this.view);return Z.object.filmGauge=this.filmGauge,Z.object.filmOffset=this.filmOffset,Z}}var Z8=-90,Q8=1;class WZ extends k5{constructor(J,Z,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new h5(Z8,Q8,J,Z);W.layers=this.layers,this.add(W);let Y=new h5(Z8,Q8,J,Z);Y.layers=this.layers,this.add(Y);let H=new h5(Z8,Q8,J,Z);H.layers=this.layers,this.add(H);let K=new h5(Z8,Q8,J,Z);K.layers=this.layers,this.add(K);let X=new h5(Z8,Q8,J,Z);X.layers=this.layers,this.add(X);let U=new h5(Z8,Q8,J,Z);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Z=this.children.concat(),[Q,W,Y,H,K,X]=Z;for(let U of Z)this.remove(U);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Y.up.set(0,0,-1),Y.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Y.up.set(0,0,1),Y.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Z)this.add(U),U.updateMatrixWorld()}update(J,Z){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Y,H,K,X,U,V]=this.children,q=J.getRenderTarget(),G=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),N=J.xr.enabled;J.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,J.setRenderTarget(Q,0,W),J.render(Z,Y),J.setRenderTarget(Q,1,W),J.render(Z,H),J.setRenderTarget(Q,2,W),J.render(Z,K),J.setRenderTarget(Q,3,W),J.render(Z,X),J.setRenderTarget(Q,4,W),J.render(Z,U),Q.texture.generateMipmaps=O,J.setRenderTarget(Q,5,W),J.render(Z,V),J.setRenderTarget(q,G,E),J.xr.enabled=N,Q.texture.needsPMREMUpdate=!0}}class _7 extends x5{constructor(J,Z,Q,W,Y,H,K,X,U,V){J=J!==void 0?J:[],Z=Z!==void 0?Z:301;super(J,Z,Q,W,Y,H,K,X,U,V);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class YZ extends k6{constructor(J=1,Z={}){super(J,J,Z);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},W=[Q,Q,Q,Q,Q,Q];if(Z.encoding!==void 0)C8("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),Z.colorSpace=Z.encoding===3001?"srgb":"";this.texture=new _7(W,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Z.generateMipmaps!==void 0?Z.generateMipmaps:!1,this.texture.minFilter=Z.minFilter!==void 0?Z.minFilter:1006}fromEquirectangularTexture(J,Z){this.texture.type=Z.type,this.texture.colorSpace=Z.colorSpace,this.texture.generateMipmaps=Z.generateMipmaps,this.texture.minFilter=Z.minFilter,this.texture.magFilter=Z.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new C0(5,5,5),Y=new L6({name:"CubemapFromEquirect",uniforms:K8(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});Y.uniforms.tEquirect.value=Z;let H=new o(W,Y),K=Z.minFilter;if(Z.minFilter===1008)Z.minFilter=1006;return new WZ(1,10,this).update(J,H),Z.minFilter=K,H.geometry.dispose(),H.material.dispose(),this}clear(J,Z,Q,W){let Y=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Z,Q,W);J.setRenderTarget(Y)}}var D7=new T,EW=new T,FW=new d0;class X6{constructor(J=new T(1,0,0),Z=0){this.isPlane=!0,this.normal=J,this.constant=Z}set(J,Z){return this.normal.copy(J),this.constant=Z,this}setComponents(J,Z,Q,W){return this.normal.set(J,Z,Q),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Z){return this.normal.copy(J),this.constant=-Z.dot(this.normal),this}setFromCoplanarPoints(J,Z,Q){let W=D7.subVectors(Q,Z).cross(EW.subVectors(J,Z)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Z){return Z.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Z){let Q=J.delta(D7),W=this.normal.dot(Q);if(W===0){if(this.distanceToPoint(J.start)===0)return Z.copy(J.start);return null}let Y=-(J.start.dot(this.normal)+this.constant)/W;if(Y<0||Y>1)return null;return Z.copy(J.start).addScaledVector(Q,Y)}intersectsLine(J){let Z=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return Z<0&&Q>0||Q<0&&Z>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Z){let Q=Z||FW.getNormalMatrix(J),W=this.coplanarPoint(D7).applyMatrix4(J),Y=this.normal.applyMatrix3(Q).normalize();return this.constant=-W.dot(Y),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var h6=new I9,D9=new T;class k9{constructor(J=new X6,Z=new X6,Q=new X6,W=new X6,Y=new X6,H=new X6){this.planes=[J,Z,Q,W,Y,H]}set(J,Z,Q,W,Y,H){let K=this.planes;return K[0].copy(J),K[1].copy(Z),K[2].copy(Q),K[3].copy(W),K[4].copy(Y),K[5].copy(H),this}copy(J){let Z=this.planes;for(let Q=0;Q<6;Q++)Z[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,Z=2000){let Q=this.planes,W=J.elements,Y=W[0],H=W[1],K=W[2],X=W[3],U=W[4],V=W[5],q=W[6],G=W[7],E=W[8],N=W[9],O=W[10],R=W[11],D=W[12],F=W[13],z=W[14],B=W[15];if(Q[0].setComponents(X-Y,G-U,R-E,B-D).normalize(),Q[1].setComponents(X+Y,G+U,R+E,B+D).normalize(),Q[2].setComponents(X+H,G+V,R+N,B+F).normalize(),Q[3].setComponents(X-H,G-V,R-N,B-F).normalize(),Q[4].setComponents(X-K,G-q,R-O,B-z).normalize(),Z===2000)Q[5].setComponents(X+K,G+q,R+O,B+z).normalize();else if(Z===2001)Q[5].setComponents(K,q,O,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Z);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();h6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Z=J.geometry;if(Z.boundingSphere===null)Z.computeBoundingSphere();h6.copy(Z.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(h6)}intersectsSprite(J){return h6.center.set(0,0,0),h6.radius=0.7071067811865476,h6.applyMatrix4(J.matrixWorld),this.intersectsSphere(h6)}intersectsSphere(J){let Z=this.planes,Q=J.center,W=-J.radius;for(let Y=0;Y<6;Y++)if(Z[Y].distanceToPoint(Q)<W)return!1;return!0}intersectsBox(J){let Z=this.planes;for(let Q=0;Q<6;Q++){let W=Z[Q];if(D9.x=W.normal.x>0?J.max.x:J.min.x,D9.y=W.normal.y>0?J.max.y:J.min.y,D9.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(D9)<0)return!1}return!0}containsPoint(J){let Z=this.planes;for(let Q=0;Q<6;Q++)if(Z[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function HZ(){let J=null,Z=!1,Q=null,W=null;function Y(H,K){Q(H,K),W=J.requestAnimationFrame(Y)}return{start:function(){if(Z===!0)return;if(Q===null)return;W=J.requestAnimationFrame(Y),Z=!0},stop:function(){J.cancelAnimationFrame(W),Z=!1},setAnimationLoop:function(H){Q=H},setContext:function(H){J=H}}}function DW(J,Z){let Q=Z.isWebGL2,W=new WeakMap;function Y(V,q){let{array:G,usage:E}=V,N=G.byteLength,O=J.createBuffer();J.bindBuffer(q,O),J.bufferData(q,G,E),V.onUploadCallback();let R;if(G instanceof Float32Array)R=J.FLOAT;else if(G instanceof Uint16Array)if(V.isFloat16BufferAttribute)if(Q)R=J.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)R=J.SHORT;else if(G instanceof Uint32Array)R=J.UNSIGNED_INT;else if(G instanceof Int32Array)R=J.INT;else if(G instanceof Int8Array)R=J.BYTE;else if(G instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:O,type:R,bytesPerElement:G.BYTES_PER_ELEMENT,version:V.version,size:N}}function H(V,q,G){let{array:E,_updateRange:N,updateRanges:O}=q;if(J.bindBuffer(G,V),N.count===-1&&O.length===0)J.bufferSubData(G,0,E);if(O.length!==0){for(let R=0,D=O.length;R<D;R++){let F=O[R];if(Q)J.bufferSubData(G,F.start*E.BYTES_PER_ELEMENT,E,F.start,F.count);else J.bufferSubData(G,F.start*E.BYTES_PER_ELEMENT,E.subarray(F.start,F.start+F.count))}q.clearUpdateRanges()}if(N.count!==-1){if(Q)J.bufferSubData(G,N.offset*E.BYTES_PER_ELEMENT,E,N.offset,N.count);else J.bufferSubData(G,N.offset*E.BYTES_PER_ELEMENT,E.subarray(N.offset,N.offset+N.count));N.count=-1}q.onUploadCallback()}function K(V){if(V.isInterleavedBufferAttribute)V=V.data;return W.get(V)}function X(V){if(V.isInterleavedBufferAttribute)V=V.data;let q=W.get(V);if(q)J.deleteBuffer(q.buffer),W.delete(V)}function U(V,q){if(V.isGLBufferAttribute){let E=W.get(V);if(!E||E.version<V.version)W.set(V,{buffer:V.buffer,type:V.type,bytesPerElement:V.elementSize,version:V.version});return}if(V.isInterleavedBufferAttribute)V=V.data;let G=W.get(V);if(G===void 0)W.set(V,Y(V,q));else if(G.version<V.version){if(G.size!==V.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");H(G.buffer,V,q),G.version=V.version}}return{get:K,remove:X,update:U}}class A5 extends n5{constructor(J=1,Z=1,Q=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Z,widthSegments:Q,heightSegments:W};let Y=J/2,H=Z/2,K=Math.floor(Q),X=Math.floor(W),U=K+1,V=X+1,q=J/K,G=Z/X,E=[],N=[],O=[],R=[];for(let D=0;D<V;D++){let F=D*G-H;for(let z=0;z<U;z++){let B=z*q-Y;N.push(B,-F,0),O.push(0,0,1),R.push(z/K),R.push(1-D/X)}}for(let D=0;D<X;D++)for(let F=0;F<K;F++){let z=F+U*D,B=F+U*(D+1),L=F+1+U*(D+1),P=F+1+U*D;E.push(z,B,P),E.push(B,L,P)}this.setIndex(E),this.setAttribute("position",new V5(N,3)),this.setAttribute("normal",new V5(O,3)),this.setAttribute("uv",new V5(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new A5(J.width,J.height,J.widthSegments,J.heightSegments)}}var NW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OW=`#ifdef USE_ALPHAHASH
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
#endif`,RW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zW=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AW=`#ifdef USE_AOMAP
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
#endif`,IW=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$W=`#ifdef USE_BATCHING
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
#endif`,CW=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kW=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LW=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wW=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PW=`#ifdef USE_IRIDESCENCE
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
#endif`,TW=`#ifdef USE_BUMPMAP
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
#endif`,SW=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bW=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hW=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jW=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yW=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_W=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xW=`#define PI 3.141592653589793
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
} // validated`,gW=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pW=`vec3 transformedNormal = objectNormal;
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
#endif`,mW=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lW=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uW=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dW=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cW="gl_FragColor = linearToOutputTexel( gl_FragColor );",nW=`
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
}`,sW=`#ifdef USE_ENVMAP
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
#endif`,iW=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oW=`#ifdef USE_ENVMAP
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
#endif`,rW=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aW=`#ifdef USE_ENVMAP
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
#endif`,tW=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eW=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QY=`#ifdef USE_GRADIENTMAP
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
}`,WY=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,YY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KY=`uniform bool receiveShadow;
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
#endif`,UY=`#ifdef USE_ENVMAP
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
#endif`,VY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FY=`PhysicalMaterial material;
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
#endif`,DY=`struct PhysicalMaterial {
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
}`,NY=`
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
#endif`,OY=`#if defined( RE_IndirectDiffuse )
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
#endif`,RY=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zY=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AY=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$Y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kY=`#if defined( USE_POINTS_UV )
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
#endif`,LY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PY=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TY=`#ifdef USE_MORPHNORMALS
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
#endif`,SY=`#ifdef USE_MORPHTARGETS
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
#endif`,vY=`#ifdef USE_MORPHTARGETS
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
#endif`,fY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_Y=`#ifdef USE_NORMALMAP
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
#endif`,xY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eY=`float getShadowMask() {
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
}`,JH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZH=`#ifdef USE_SKINNING
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
#endif`,QH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WH=`#ifdef USE_SKINNING
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
#endif`,YH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KH=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UH=`#ifdef USE_TRANSMISSION
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
#endif`,VH=`#ifdef USE_TRANSMISSION
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
#endif`,GH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,DH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NH=`uniform sampler2D t2D;
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
}`,OH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RH=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BH=`#include <common>
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
}`,AH=`#if DEPTH_PACKING == 3200
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
}`,IH=`#define DISTANCE
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
}`,$H=`#define DISTANCE
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
}`,CH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LH=`uniform float scale;
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
}`,wH=`uniform vec3 diffuse;
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
}`,PH=`#include <common>
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
}`,TH=`uniform vec3 diffuse;
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
}`,SH=`#define LAMBERT
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
}`,vH=`#define LAMBERT
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
}`,fH=`#define MATCAP
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
}`,bH=`#define MATCAP
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
}`,hH=`#define NORMAL
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
}`,jH=`#define NORMAL
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
}`,yH=`#define PHONG
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
}`,_H=`#define PHONG
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
}`,xH=`#define STANDARD
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
}`,gH=`#define STANDARD
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
}`,pH=`#define TOON
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
}`,mH=`#define TOON
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
}`,lH=`uniform float size;
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
}`,uH=`uniform vec3 diffuse;
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
}`,dH=`#include <common>
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
}`,cH=`uniform vec3 color;
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
}`,nH=`uniform float rotation;
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
}`,sH=`uniform vec3 diffuse;
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
}`,x0={alphahash_fragment:NW,alphahash_pars_fragment:OW,alphamap_fragment:RW,alphamap_pars_fragment:MW,alphatest_fragment:zW,alphatest_pars_fragment:BW,aomap_fragment:AW,aomap_pars_fragment:IW,batching_pars_vertex:$W,batching_vertex:CW,begin_vertex:kW,beginnormal_vertex:LW,bsdfs:wW,iridescence_fragment:PW,bumpmap_pars_fragment:TW,clipping_planes_fragment:SW,clipping_planes_pars_fragment:vW,clipping_planes_pars_vertex:fW,clipping_planes_vertex:bW,color_fragment:hW,color_pars_fragment:jW,color_pars_vertex:yW,color_vertex:_W,common:xW,cube_uv_reflection_fragment:gW,defaultnormal_vertex:pW,displacementmap_pars_vertex:mW,displacementmap_vertex:lW,emissivemap_fragment:uW,emissivemap_pars_fragment:dW,colorspace_fragment:cW,colorspace_pars_fragment:nW,envmap_fragment:sW,envmap_common_pars_fragment:iW,envmap_pars_fragment:oW,envmap_pars_vertex:rW,envmap_physical_pars_fragment:UY,envmap_vertex:aW,fog_vertex:tW,fog_pars_vertex:eW,fog_fragment:JY,fog_pars_fragment:ZY,gradientmap_pars_fragment:QY,lightmap_fragment:WY,lightmap_pars_fragment:YY,lights_lambert_fragment:HY,lights_lambert_pars_fragment:XY,lights_pars_begin:KY,lights_toon_fragment:VY,lights_toon_pars_fragment:GY,lights_phong_fragment:qY,lights_phong_pars_fragment:EY,lights_physical_fragment:FY,lights_physical_pars_fragment:DY,lights_fragment_begin:NY,lights_fragment_maps:OY,lights_fragment_end:RY,logdepthbuf_fragment:MY,logdepthbuf_pars_fragment:zY,logdepthbuf_pars_vertex:BY,logdepthbuf_vertex:AY,map_fragment:IY,map_pars_fragment:$Y,map_particle_fragment:CY,map_particle_pars_fragment:kY,metalnessmap_fragment:LY,metalnessmap_pars_fragment:wY,morphcolor_vertex:PY,morphnormal_vertex:TY,morphtarget_pars_vertex:SY,morphtarget_vertex:vY,normal_fragment_begin:fY,normal_fragment_maps:bY,normal_pars_fragment:hY,normal_pars_vertex:jY,normal_vertex:yY,normalmap_pars_fragment:_Y,clearcoat_normal_fragment_begin:xY,clearcoat_normal_fragment_maps:gY,clearcoat_pars_fragment:pY,iridescence_pars_fragment:mY,opaque_fragment:lY,packing:uY,premultiplied_alpha_fragment:dY,project_vertex:cY,dithering_fragment:nY,dithering_pars_fragment:sY,roughnessmap_fragment:iY,roughnessmap_pars_fragment:oY,shadowmap_pars_fragment:rY,shadowmap_pars_vertex:aY,shadowmap_vertex:tY,shadowmask_pars_fragment:eY,skinbase_vertex:JH,skinning_pars_vertex:ZH,skinning_vertex:QH,skinnormal_vertex:WH,specularmap_fragment:YH,specularmap_pars_fragment:HH,tonemapping_fragment:XH,tonemapping_pars_fragment:KH,transmission_fragment:UH,transmission_pars_fragment:VH,uv_pars_fragment:GH,uv_pars_vertex:qH,uv_vertex:EH,worldpos_vertex:FH,background_vert:DH,background_frag:NH,backgroundCube_vert:OH,backgroundCube_frag:RH,cube_vert:MH,cube_frag:zH,depth_vert:BH,depth_frag:AH,distanceRGBA_vert:IH,distanceRGBA_frag:$H,equirect_vert:CH,equirect_frag:kH,linedashed_vert:LH,linedashed_frag:wH,meshbasic_vert:PH,meshbasic_frag:TH,meshlambert_vert:SH,meshlambert_frag:vH,meshmatcap_vert:fH,meshmatcap_frag:bH,meshnormal_vert:hH,meshnormal_frag:jH,meshphong_vert:yH,meshphong_frag:_H,meshphysical_vert:xH,meshphysical_frag:gH,meshtoon_vert:pH,meshtoon_frag:mH,points_vert:lH,points_frag:uH,shadow_vert:dH,shadow_frag:cH,sprite_vert:nH,sprite_frag:sH},H0={common:{diffuse:{value:new g0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new d0},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new d0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new d0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new d0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new d0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new d0},normalScale:{value:new q0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new d0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new d0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new d0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new d0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new g0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new g0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0},uvTransform:{value:new d0}},sprite:{diffuse:{value:new g0(16777215)},opacity:{value:1},center:{value:new q0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new d0},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0}}},K6={basic:{uniforms:b5([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.fog]),vertexShader:x0.meshbasic_vert,fragmentShader:x0.meshbasic_frag},lambert:{uniforms:b5([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new g0(0)}}]),vertexShader:x0.meshlambert_vert,fragmentShader:x0.meshlambert_frag},phong:{uniforms:b5([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new g0(0)},specular:{value:new g0(1118481)},shininess:{value:30}}]),vertexShader:x0.meshphong_vert,fragmentShader:x0.meshphong_frag},standard:{uniforms:b5([H0.common,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.roughnessmap,H0.metalnessmap,H0.fog,H0.lights,{emissive:{value:new g0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag},toon:{uniforms:b5([H0.common,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.gradientmap,H0.fog,H0.lights,{emissive:{value:new g0(0)}}]),vertexShader:x0.meshtoon_vert,fragmentShader:x0.meshtoon_frag},matcap:{uniforms:b5([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,{matcap:{value:null}}]),vertexShader:x0.meshmatcap_vert,fragmentShader:x0.meshmatcap_frag},points:{uniforms:b5([H0.points,H0.fog]),vertexShader:x0.points_vert,fragmentShader:x0.points_frag},dashed:{uniforms:b5([H0.common,H0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:x0.linedashed_vert,fragmentShader:x0.linedashed_frag},depth:{uniforms:b5([H0.common,H0.displacementmap]),vertexShader:x0.depth_vert,fragmentShader:x0.depth_frag},normal:{uniforms:b5([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,{opacity:{value:1}}]),vertexShader:x0.meshnormal_vert,fragmentShader:x0.meshnormal_frag},sprite:{uniforms:b5([H0.sprite,H0.fog]),vertexShader:x0.sprite_vert,fragmentShader:x0.sprite_frag},background:{uniforms:{uvTransform:{value:new d0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:x0.background_vert,fragmentShader:x0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:x0.backgroundCube_vert,fragmentShader:x0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:x0.cube_vert,fragmentShader:x0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:x0.equirect_vert,fragmentShader:x0.equirect_frag},distanceRGBA:{uniforms:b5([H0.common,H0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:x0.distanceRGBA_vert,fragmentShader:x0.distanceRGBA_frag},shadow:{uniforms:b5([H0.lights,H0.fog,{color:{value:new g0(0)},opacity:{value:1}}]),vertexShader:x0.shadow_vert,fragmentShader:x0.shadow_frag}};K6.physical={uniforms:b5([K6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new d0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new d0},clearcoatNormalScale:{value:new q0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new d0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new d0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new d0},sheen:{value:0},sheenColor:{value:new g0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new d0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new d0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new d0},transmissionSamplerSize:{value:new q0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new d0},attenuationDistance:{value:0},attenuationColor:{value:new g0(0)},specularColor:{value:new g0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new d0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new d0},anisotropyVector:{value:new q0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new d0}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag};var N9={r:0,b:0,g:0};function iH(J,Z,Q,W,Y,H,K){let X=new g0(0),U=H===!0?0:1,V,q,G=null,E=0,N=null;function O(D,F){let z=!1,B=F.isScene===!0?F.background:null;if(B&&B.isTexture)B=(F.backgroundBlurriness>0?Q:Z).get(B);if(B===null)R(X,U);else if(B&&B.isColor)R(B,1),z=!0;let L=J.xr.getEnvironmentBlendMode();if(L==="additive")W.buffers.color.setClear(0,0,0,1,K);else if(L==="alpha-blend")W.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||z)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(B&&(B.isCubeTexture||B.mapping===306)){if(q===void 0)q=new o(new C0(1,1,1),new L6({name:"BackgroundCubeMaterial",uniforms:K8(K6.backgroundCube.uniforms),vertexShader:K6.backgroundCube.vertexShader,fragmentShader:K6.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),q.geometry.deleteAttribute("uv"),q.onBeforeRender=function(P,k,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Y.update(q);if(q.material.uniforms.envMap.value=B,q.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,q.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,q.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,q.material.toneMapped=Q5.getTransfer(B.colorSpace)!=="srgb",G!==B||E!==B.version||N!==J.toneMapping)q.material.needsUpdate=!0,G=B,E=B.version,N=J.toneMapping;q.layers.enableAll(),D.unshift(q,q.geometry,q.material,0,0,null)}else if(B&&B.isTexture){if(V===void 0)V=new o(new A5(2,2),new L6({name:"BackgroundMaterial",uniforms:K8(K6.background.uniforms),vertexShader:K6.background.vertexShader,fragmentShader:K6.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),V.geometry.deleteAttribute("normal"),Object.defineProperty(V.material,"map",{get:function(){return this.uniforms.t2D.value}}),Y.update(V);if(V.material.uniforms.t2D.value=B,V.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,V.material.toneMapped=Q5.getTransfer(B.colorSpace)!=="srgb",B.matrixAutoUpdate===!0)B.updateMatrix();if(V.material.uniforms.uvTransform.value.copy(B.matrix),G!==B||E!==B.version||N!==J.toneMapping)V.material.needsUpdate=!0,G=B,E=B.version,N=J.toneMapping;V.layers.enableAll(),D.unshift(V,V.geometry,V.material,0,0,null)}}function R(D,F){D.getRGB(N9,QZ(J)),W.buffers.color.setClear(N9.r,N9.g,N9.b,F,K)}return{getClearColor:function(){return X},setClearColor:function(D,F=1){X.set(D),U=F,R(X,U)},getClearAlpha:function(){return U},setClearAlpha:function(D){U=D,R(X,U)},render:O}}function oH(J,Z,Q,W){let Y=J.getParameter(J.MAX_VERTEX_ATTRIBS),H=W.isWebGL2?null:Z.get("OES_vertex_array_object"),K=W.isWebGL2||H!==null,X={},U=D(null),V=U,q=!1;function G(w,_,u,a,c){let d=!1;if(K){let e=R(a,u,_);if(V!==e)V=e,N(V.object);if(d=F(w,a,u,c),d)z(w,a,u,c)}else{let e=_.wireframe===!0;if(V.geometry!==a.id||V.program!==u.id||V.wireframe!==e)V.geometry=a.id,V.program=u.id,V.wireframe=e,d=!0}if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(d||q){if(q=!1,m(w,_,u,a),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function E(){if(W.isWebGL2)return J.createVertexArray();return H.createVertexArrayOES()}function N(w){if(W.isWebGL2)return J.bindVertexArray(w);return H.bindVertexArrayOES(w)}function O(w){if(W.isWebGL2)return J.deleteVertexArray(w);return H.deleteVertexArrayOES(w)}function R(w,_,u){let a=u.wireframe===!0,c=X[w.id];if(c===void 0)c={},X[w.id]=c;let d=c[_.id];if(d===void 0)d={},c[_.id]=d;let e=d[a];if(e===void 0)e=D(E()),d[a]=e;return e}function D(w){let _=[],u=[],a=[];for(let c=0;c<Y;c++)_[c]=0,u[c]=0,a[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:u,attributeDivisors:a,object:w,attributes:{},index:null}}function F(w,_,u,a){let c=V.attributes,d=_.attributes,e=0,Q0=u.getAttributes();for(let y in Q0)if(Q0[y].location>=0){let W0=c[y],V0=d[y];if(V0===void 0){if(y==="instanceMatrix"&&w.instanceMatrix)V0=w.instanceMatrix;if(y==="instanceColor"&&w.instanceColor)V0=w.instanceColor}if(W0===void 0)return!0;if(W0.attribute!==V0)return!0;if(V0&&W0.data!==V0.data)return!0;e++}if(V.attributesNum!==e)return!0;if(V.index!==a)return!0;return!1}function z(w,_,u,a){let c={},d=_.attributes,e=0,Q0=u.getAttributes();for(let y in Q0)if(Q0[y].location>=0){let W0=d[y];if(W0===void 0){if(y==="instanceMatrix"&&w.instanceMatrix)W0=w.instanceMatrix;if(y==="instanceColor"&&w.instanceColor)W0=w.instanceColor}let V0={};if(V0.attribute=W0,W0&&W0.data)V0.data=W0.data;c[y]=V0,e++}V.attributes=c,V.attributesNum=e,V.index=a}function B(){let w=V.newAttributes;for(let _=0,u=w.length;_<u;_++)w[_]=0}function L(w){P(w,0)}function P(w,_){let{newAttributes:u,enabledAttributes:a,attributeDivisors:c}=V;if(u[w]=1,a[w]===0)J.enableVertexAttribArray(w),a[w]=1;if(c[w]!==_)(W.isWebGL2?J:Z.get("ANGLE_instanced_arrays"))[W.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,_),c[w]=_}function k(){let{newAttributes:w,enabledAttributes:_}=V;for(let u=0,a=_.length;u<a;u++)if(_[u]!==w[u])J.disableVertexAttribArray(u),_[u]=0}function f(w,_,u,a,c,d,e){if(e===!0)J.vertexAttribIPointer(w,_,u,c,d);else J.vertexAttribPointer(w,_,u,a,c,d)}function m(w,_,u,a){if(W.isWebGL2===!1&&(w.isInstancedMesh||a.isInstancedBufferGeometry)){if(Z.get("ANGLE_instanced_arrays")===null)return}B();let c=a.attributes,d=u.getAttributes(),e=_.defaultAttributeValues;for(let Q0 in d){let y=d[Q0];if(y.location>=0){let i=c[Q0];if(i===void 0){if(Q0==="instanceMatrix"&&w.instanceMatrix)i=w.instanceMatrix;if(Q0==="instanceColor"&&w.instanceColor)i=w.instanceColor}if(i!==void 0){let{normalized:W0,itemSize:V0}=i,k0=Q.get(i);if(k0===void 0)continue;let{buffer:P0,type:c0,bytesPerElement:v0}=k0,e0=W.isWebGL2===!0&&(c0===J.INT||c0===J.UNSIGNED_INT||i.gpuType===1013);if(i.isInterleavedBufferAttribute){let j=i.data,v5=j.stride,r0=i.offset;if(j.isInstancedInterleavedBuffer){for(let A0=0;A0<y.locationSize;A0++)P(y.location+A0,j.meshPerAttribute);if(w.isInstancedMesh!==!0&&a._maxInstanceCount===void 0)a._maxInstanceCount=j.meshPerAttribute*j.count}else for(let A0=0;A0<y.locationSize;A0++)L(y.location+A0);J.bindBuffer(J.ARRAY_BUFFER,P0);for(let A0=0;A0<y.locationSize;A0++)f(y.location+A0,V0/y.locationSize,c0,W0,v5*v0,(r0+V0/y.locationSize*A0)*v0,e0)}else{if(i.isInstancedBufferAttribute){for(let j=0;j<y.locationSize;j++)P(y.location+j,i.meshPerAttribute);if(w.isInstancedMesh!==!0&&a._maxInstanceCount===void 0)a._maxInstanceCount=i.meshPerAttribute*i.count}else for(let j=0;j<y.locationSize;j++)L(y.location+j);J.bindBuffer(J.ARRAY_BUFFER,P0);for(let j=0;j<y.locationSize;j++)f(y.location+j,V0/y.locationSize,c0,W0,V0*v0,V0/y.locationSize*j*v0,e0)}}else if(e!==void 0){let W0=e[Q0];if(W0!==void 0)switch(W0.length){case 2:J.vertexAttrib2fv(y.location,W0);break;case 3:J.vertexAttrib3fv(y.location,W0);break;case 4:J.vertexAttrib4fv(y.location,W0);break;default:J.vertexAttrib1fv(y.location,W0)}}}}k()}function A(){n();for(let w in X){let _=X[w];for(let u in _){let a=_[u];for(let c in a)O(a[c].object),delete a[c];delete _[u]}delete X[w]}}function $(w){if(X[w.id]===void 0)return;let _=X[w.id];for(let u in _){let a=_[u];for(let c in a)O(a[c].object),delete a[c];delete _[u]}delete X[w.id]}function v(w){for(let _ in X){let u=X[_];if(u[w.id]===void 0)continue;let a=u[w.id];for(let c in a)O(a[c].object),delete a[c];delete u[w.id]}}function n(){if(s(),q=!0,V===U)return;V=U,N(V.object)}function s(){U.geometry=null,U.program=null,U.wireframe=!1}return{setup:G,reset:n,resetDefaultState:s,dispose:A,releaseStatesOfGeometry:$,releaseStatesOfProgram:v,initAttributes:B,enableAttribute:L,disableUnusedAttributes:k}}function rH(J,Z,Q,W){let Y=W.isWebGL2,H;function K(q){H=q}function X(q,G){J.drawArrays(H,q,G),Q.update(G,H,1)}function U(q,G,E){if(E===0)return;let N,O;if(Y)N=J,O="drawArraysInstanced";else if(N=Z.get("ANGLE_instanced_arrays"),O="drawArraysInstancedANGLE",N===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}N[O](H,q,G,E),Q.update(G,H,E)}function V(q,G,E){if(E===0)return;let N=Z.get("WEBGL_multi_draw");if(N===null)for(let O=0;O<E;O++)this.render(q[O],G[O]);else{N.multiDrawArraysWEBGL(H,q,0,G,0,E);let O=0;for(let R=0;R<E;R++)O+=G[R];Q.update(O,H,1)}}this.setMode=K,this.render=X,this.renderInstances=U,this.renderMultiDraw=V}function aH(J,Z,Q){let W;function Y(){if(W!==void 0)return W;if(Z.has("EXT_texture_filter_anisotropic")===!0){let f=Z.get("EXT_texture_filter_anisotropic");W=J.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(f){if(f==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";f="mediump"}if(f==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let K=typeof WebGL2RenderingContext<"u"&&J.constructor.name==="WebGL2RenderingContext",X=Q.precision!==void 0?Q.precision:"highp",U=H(X);if(U!==X)console.warn("THREE.WebGLRenderer:",X,"not supported, using",U,"instead."),X=U;let V=K||Z.has("WEBGL_draw_buffers"),q=Q.logarithmicDepthBuffer===!0,G=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),E=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),R=J.getParameter(J.MAX_VERTEX_ATTRIBS),D=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),F=J.getParameter(J.MAX_VARYING_VECTORS),z=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,L=K||Z.has("OES_texture_float"),P=B&&L,k=K?J.getParameter(J.MAX_SAMPLES):0;return{isWebGL2:K,drawBuffers:V,getMaxAnisotropy:Y,getMaxPrecision:H,precision:X,logarithmicDepthBuffer:q,maxTextures:G,maxVertexTextures:E,maxTextureSize:N,maxCubemapSize:O,maxAttributes:R,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:z,vertexTextures:B,floatFragmentTextures:L,floatVertexTextures:P,maxSamples:k}}function tH(J){let Z=this,Q=null,W=0,Y=!1,H=!1,K=new X6,X=new d0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(G,E){let N=G.length!==0||E||W!==0||Y;return Y=E,W=G.length,N},this.beginShadows=function(){H=!0,q(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(G,E){Q=q(G,E,0)},this.setState=function(G,E,N){let{clippingPlanes:O,clipIntersection:R,clipShadows:D}=G,F=J.get(G);if(!Y||O===null||O.length===0||H&&!D)if(H)q(null);else V();else{let z=H?0:W,B=z*4,L=F.clippingState||null;U.value=L,L=q(O,E,B,N);for(let P=0;P!==B;++P)L[P]=Q[P];F.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function V(){if(U.value!==Q)U.value=Q,U.needsUpdate=W>0;Z.numPlanes=W,Z.numIntersection=0}function q(G,E,N,O){let R=G!==null?G.length:0,D=null;if(R!==0){if(D=U.value,O!==!0||D===null){let F=N+R*4,z=E.matrixWorldInverse;if(X.getNormalMatrix(z),D===null||D.length<F)D=new Float32Array(F);for(let B=0,L=N;B!==R;++B,L+=4)K.copy(G[B]).applyMatrix4(z,X),K.normal.toArray(D,L),D[L+3]=K.constant}U.value=D,U.needsUpdate=!0}return Z.numPlanes=R,Z.numIntersection=0,D}}function eH(J){let Z=new WeakMap;function Q(K,X){if(X===303)K.mapping=301;else if(X===304)K.mapping=302;return K}function W(K){if(K&&K.isTexture){let X=K.mapping;if(X===303||X===304)if(Z.has(K)){let U=Z.get(K).texture;return Q(U,K.mapping)}else{let U=K.image;if(U&&U.height>0){let V=new YZ(U.height/2);return V.fromEquirectangularTexture(J,K),Z.set(K,V),K.addEventListener("dispose",Y),Q(V.texture,K.mapping)}else return null}}return K}function Y(K){let X=K.target;X.removeEventListener("dispose",Y);let U=Z.get(X);if(U!==void 0)Z.delete(X),U.dispose()}function H(){Z=new WeakMap}return{get:W,dispose:H}}class x7 extends y7{constructor(J=-1,Z=1,Q=1,W=-1,Y=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Z,this.top=Q,this.bottom=W,this.near=Y,this.far=H,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Z,Q,W,Y,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=Q,this.view.offsetY=W,this.view.width=Y,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Z=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Y=Q-J,H=Q+J,K=W+Z,X=W-Z;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,V=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Y+=U*this.view.offsetX,H=Y+U*this.view.width,K-=V*this.view.offsetY,X=K-V*this.view.height}this.projectionMatrix.makeOrthographic(Y,H,K,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.zoom=this.zoom,Z.object.left=this.left,Z.object.right=this.right,Z.object.top=this.top,Z.object.bottom=this.bottom,Z.object.near=this.near,Z.object.far=this.far,this.view!==null)Z.object.view=Object.assign({},this.view);return Z}}var Y8=4,$J=[0.125,0.215,0.35,0.446,0.526,0.582],y6=20,N7=new x7,CJ=new g0,O7=null,R7=0,M7=0,j6=(1+Math.sqrt(5))/2,W8=1/j6,kJ=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,j6,W8),new T(0,j6,-W8),new T(W8,0,j6),new T(-W8,0,j6),new T(j6,W8,0),new T(-j6,W8,0)];class w7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Z=0,Q=0.1,W=100){O7=this._renderer.getRenderTarget(),R7=this._renderer.getActiveCubeFace(),M7=this._renderer.getActiveMipmapLevel(),this._setSize(256);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Q,W,Y),Z>0)this._blur(Y,0,0,Z);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Z=null){return this._fromTexture(J,Z)}fromCubemap(J,Z=null){return this._fromTexture(J,Z)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=PJ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=wJ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(O7,R7,M7),J.scissorTest=!1,O9(J,0,0,J.width,J.height)}_fromTexture(J,Z){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);O7=this._renderer.getRenderTarget(),R7=this._renderer.getActiveCubeFace(),M7=this._renderer.getActiveMipmapLevel();let Q=Z||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Z=4*this._cubeSize,Q={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},W=LJ(J,Z,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Z){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=LJ(J,Z,Q);let{_lodMax:Y}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JX(Y)),this._blurMaterial=ZX(Y,J,Z)}return W}_compileMaterial(J){let Z=new o(this._lodPlanes[0],J);this._renderer.compile(Z,N7)}_sceneToCubeUV(J,Z,Q,W){let K=new h5(90,1,Z,Q),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],V=this._renderer,q=V.autoClear,G=V.toneMapping;V.getClearColor(CJ),V.toneMapping=0,V.autoClear=!1;let E=new B5({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),N=new o(new C0,E),O=!1,R=J.background;if(R){if(R.isColor)E.color.copy(R),J.background=null,O=!0}else E.color.copy(CJ),O=!0;for(let D=0;D<6;D++){let F=D%3;if(F===0)K.up.set(0,X[D],0),K.lookAt(U[D],0,0);else if(F===1)K.up.set(0,0,X[D]),K.lookAt(0,U[D],0);else K.up.set(0,X[D],0),K.lookAt(0,0,U[D]);let z=this._cubeSize;if(O9(W,F*z,D>2?z:0,z,z),V.setRenderTarget(W),O)V.render(N,K);V.render(J,K)}N.geometry.dispose(),N.material.dispose(),V.toneMapping=G,V.autoClear=q,J.background=R}_textureToCubeUV(J,Z){let Q=this._renderer,W=J.mapping===301||J.mapping===302;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=PJ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=wJ();let Y=W?this._cubemapMaterial:this._equirectMaterial,H=new o(this._lodPlanes[0],Y),K=Y.uniforms;K.envMap.value=J;let X=this._cubeSize;O9(Z,0,0,3*X,2*X),Q.setRenderTarget(Z),Q.render(H,N7)}_applyPMREM(J){let Z=this._renderer,Q=Z.autoClear;Z.autoClear=!1;for(let W=1;W<this._lodPlanes.length;W++){let Y=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),H=kJ[(W-1)%kJ.length];this._blur(J,W-1,W,Y,H)}Z.autoClear=Q}_blur(J,Z,Q,W,Y){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Z,Q,W,"latitudinal",Y),this._halfBlur(H,J,Q,Q,W,"longitudinal",Y)}_halfBlur(J,Z,Q,W,Y,H,K){let X=this._renderer,U=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let V=3,q=new o(this._lodPlanes[W],U),G=U.uniforms,E=this._sizeLods[Q]-1,N=isFinite(Y)?Math.PI/(2*E):2*Math.PI/(2*y6-1),O=Y/N,R=isFinite(Y)?1+Math.floor(V*O):y6;if(R>y6)console.warn(`sigmaRadians, ${Y}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${y6}`);let D=[],F=0;for(let k=0;k<y6;++k){let f=k/O,m=Math.exp(-f*f/2);if(D.push(m),k===0)F+=m;else if(k<R)F+=2*m}for(let k=0;k<D.length;k++)D[k]=D[k]/F;if(G.envMap.value=J.texture,G.samples.value=R,G.weights.value=D,G.latitudinal.value=H==="latitudinal",K)G.poleAxis.value=K;let{_lodMax:z}=this;G.dTheta.value=N,G.mipInt.value=z-Q;let B=this._sizeLods[W],L=3*B*(W>z-Y8?W-z+Y8:0),P=4*(this._cubeSize-B);O9(Z,L,P,3*B,2*B),X.setRenderTarget(Z),X.render(q,N7)}}function JX(J){let Z=[],Q=[],W=[],Y=J,H=J-Y8+1+$J.length;for(let K=0;K<H;K++){let X=Math.pow(2,Y);Q.push(X);let U=1/X;if(K>J-Y8)U=$J[K-J+Y8-1];else if(K===0)U=0;W.push(U);let V=1/(X-2),q=-V,G=1+V,E=[q,q,G,q,G,G,q,q,G,G,q,G],N=6,O=6,R=3,D=2,F=1,z=new Float32Array(R*O*N),B=new Float32Array(D*O*N),L=new Float32Array(F*O*N);for(let k=0;k<N;k++){let f=k%3*2/3-1,m=k>2?0:-1,A=[f,m,0,f+0.6666666666666666,m,0,f+0.6666666666666666,m+1,0,f,m,0,f+0.6666666666666666,m+1,0,f,m+1,0];z.set(A,R*O*k),B.set(E,D*O*k);let $=[k,k,k,k,k,k];L.set($,F*O*k)}let P=new n5;if(P.setAttribute("position",new e5(z,R)),P.setAttribute("uv",new e5(B,D)),P.setAttribute("faceIndex",new e5(L,F)),Z.push(P),Y>Y8)Y--}return{lodPlanes:Z,sizeLods:Q,sigmas:W}}function LJ(J,Z,Q){let W=new k6(J,Z,Q);return W.texture.mapping=306,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function O9(J,Z,Q,W,Y){J.viewport.set(Z,Q,W,Y),J.scissor.set(Z,Q,W,Y)}function ZX(J,Z,Q){let W=new Float32Array(y6),Y=new T(0,1,0);return new L6({name:"SphericalGaussianBlur",defines:{n:y6,CUBEUV_TEXEL_WIDTH:1/Z,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Y}},vertexShader:g7(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function wJ(){return new L6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g7(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function PJ(){return new L6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function g7(){return`

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
	`}function QX(J){let Z=new WeakMap,Q=null;function W(X){if(X&&X.isTexture){let U=X.mapping,V=U===303||U===304,q=U===301||U===302;if(V||q)if(X.isRenderTargetTexture&&X.needsPMREMUpdate===!0){X.needsPMREMUpdate=!1;let G=Z.get(X);if(Q===null)Q=new w7(J);return G=V?Q.fromEquirectangular(X,G):Q.fromCubemap(X,G),Z.set(X,G),G.texture}else if(Z.has(X))return Z.get(X).texture;else{let G=X.image;if(V&&G&&G.height>0||q&&G&&Y(G)){if(Q===null)Q=new w7(J);let E=V?Q.fromEquirectangular(X):Q.fromCubemap(X);return Z.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}return X}function Y(X){let U=0,V=6;for(let q=0;q<V;q++)if(X[q]!==void 0)U++;return U===V}function H(X){let U=X.target;U.removeEventListener("dispose",H);let V=Z.get(U);if(V!==void 0)Z.delete(U),V.dispose()}function K(){if(Z=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:W,dispose:K}}function WX(J){let Z={};function Q(W){if(Z[W]!==void 0)return Z[W];let Y;switch(W){case"WEBGL_depth_texture":Y=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Y=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Y=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Y=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Y=J.getExtension(W)}return Z[W]=Y,Y}return{has:function(W){return Q(W)!==null},init:function(W){if(W.isWebGL2)Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance");else Q("WEBGL_depth_texture"),Q("OES_texture_float"),Q("OES_texture_half_float"),Q("OES_texture_half_float_linear"),Q("OES_standard_derivatives"),Q("OES_element_index_uint"),Q("OES_vertex_array_object"),Q("ANGLE_instanced_arrays");Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture")},get:function(W){let Y=Q(W);if(Y===null)console.warn("THREE.WebGLRenderer: "+W+" extension not supported.");return Y}}}function YX(J,Z,Q,W){let Y={},H=new WeakMap;function K(G){let E=G.target;if(E.index!==null)Z.remove(E.index);for(let O in E.attributes)Z.remove(E.attributes[O]);for(let O in E.morphAttributes){let R=E.morphAttributes[O];for(let D=0,F=R.length;D<F;D++)Z.remove(R[D])}E.removeEventListener("dispose",K),delete Y[E.id];let N=H.get(E);if(N)Z.remove(N),H.delete(E);if(W.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;Q.memory.geometries--}function X(G,E){if(Y[E.id]===!0)return E;return E.addEventListener("dispose",K),Y[E.id]=!0,Q.memory.geometries++,E}function U(G){let E=G.attributes;for(let O in E)Z.update(E[O],J.ARRAY_BUFFER);let N=G.morphAttributes;for(let O in N){let R=N[O];for(let D=0,F=R.length;D<F;D++)Z.update(R[D],J.ARRAY_BUFFER)}}function V(G){let E=[],N=G.index,O=G.attributes.position,R=0;if(N!==null){let z=N.array;R=N.version;for(let B=0,L=z.length;B<L;B+=3){let P=z[B+0],k=z[B+1],f=z[B+2];E.push(P,k,k,f,f,P)}}else if(O!==void 0){let z=O.array;R=O.version;for(let B=0,L=z.length/3-1;B<L;B+=3){let P=B+0,k=B+1,f=B+2;E.push(P,k,k,f,f,P)}}else return;let D=new((tJ(E))?j7:h7)(E,1);D.version=R;let F=H.get(G);if(F)Z.remove(F);H.set(G,D)}function q(G){let E=H.get(G);if(E){let N=G.index;if(N!==null){if(E.version<N.version)V(G)}}else V(G);return H.get(G)}return{get:X,update:U,getWireframeAttribute:q}}function HX(J,Z,Q,W){let Y=W.isWebGL2,H;function K(N){H=N}let X,U;function V(N){X=N.type,U=N.bytesPerElement}function q(N,O){J.drawElements(H,O,X,N*U),Q.update(O,H,1)}function G(N,O,R){if(R===0)return;let D,F;if(Y)D=J,F="drawElementsInstanced";else if(D=Z.get("ANGLE_instanced_arrays"),F="drawElementsInstancedANGLE",D===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[F](H,O,X,N*U,R),Q.update(O,H,R)}function E(N,O,R){if(R===0)return;let D=Z.get("WEBGL_multi_draw");if(D===null)for(let F=0;F<R;F++)this.render(N[F]/U,O[F]);else{D.multiDrawElementsWEBGL(H,O,0,X,N,0,R);let F=0;for(let z=0;z<R;z++)F+=O[z];Q.update(F,H,1)}}this.setMode=K,this.setIndex=V,this.render=q,this.renderInstances=G,this.renderMultiDraw=E}function XX(J){let Z={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,K,X){switch(Q.calls++,K){case J.TRIANGLES:Q.triangles+=X*(H/3);break;case J.LINES:Q.lines+=X*(H/2);break;case J.LINE_STRIP:Q.lines+=X*(H-1);break;case J.LINE_LOOP:Q.lines+=X*H;break;case J.POINTS:Q.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",K);break}}function Y(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:Z,render:Q,programs:null,autoReset:!0,reset:Y,update:W}}function KX(J,Z){return J[0]-Z[0]}function UX(J,Z){return Math.abs(Z[1])-Math.abs(J[1])}function VX(J,Z,Q){let W={},Y=new Float32Array(8),H=new WeakMap,K=new K5,X=[];for(let V=0;V<8;V++)X[V]=[V,0];function U(V,q,G){let E=V.morphTargetInfluences;if(Z.isWebGL2===!0){let N=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,O=N!==void 0?N.length:0,R=H.get(q);if(R===void 0||R.count!==O){let w=function(){n.dispose(),H.delete(q),q.removeEventListener("dispose",w)};if(R!==void 0)R.texture.dispose();let z=q.morphAttributes.position!==void 0,B=q.morphAttributes.normal!==void 0,L=q.morphAttributes.color!==void 0,P=q.morphAttributes.position||[],k=q.morphAttributes.normal||[],f=q.morphAttributes.color||[],m=0;if(z===!0)m=1;if(B===!0)m=2;if(L===!0)m=3;let A=q.attributes.position.count*m,$=1;if(A>Z.maxTextureSize)$=Math.ceil(A/Z.maxTextureSize),A=Z.maxTextureSize;let v=new Float32Array(A*$*4*O),n=new f7(v,A,$,O);n.type=1015,n.needsUpdate=!0;let s=m*4;for(let _=0;_<O;_++){let u=P[_],a=k[_],c=f[_],d=A*$*4*_;for(let e=0;e<u.count;e++){let Q0=e*s;if(z===!0)K.fromBufferAttribute(u,e),v[d+Q0+0]=K.x,v[d+Q0+1]=K.y,v[d+Q0+2]=K.z,v[d+Q0+3]=0;if(B===!0)K.fromBufferAttribute(a,e),v[d+Q0+4]=K.x,v[d+Q0+5]=K.y,v[d+Q0+6]=K.z,v[d+Q0+7]=0;if(L===!0)K.fromBufferAttribute(c,e),v[d+Q0+8]=K.x,v[d+Q0+9]=K.y,v[d+Q0+10]=K.z,v[d+Q0+11]=c.itemSize===4?K.w:1}}R={count:O,texture:n,size:new q0(A,$)},H.set(q,R),q.addEventListener("dispose",w)}let D=0;for(let z=0;z<E.length;z++)D+=E[z];let F=q.morphTargetsRelative?1:1-D;G.getUniforms().setValue(J,"morphTargetBaseInfluence",F),G.getUniforms().setValue(J,"morphTargetInfluences",E),G.getUniforms().setValue(J,"morphTargetsTexture",R.texture,Q),G.getUniforms().setValue(J,"morphTargetsTextureSize",R.size)}else{let N=E===void 0?0:E.length,O=W[q.id];if(O===void 0||O.length!==N){O=[];for(let B=0;B<N;B++)O[B]=[B,0];W[q.id]=O}for(let B=0;B<N;B++){let L=O[B];L[0]=B,L[1]=E[B]}O.sort(UX);for(let B=0;B<8;B++)if(B<N&&O[B][1])X[B][0]=O[B][0],X[B][1]=O[B][1];else X[B][0]=Number.MAX_SAFE_INTEGER,X[B][1]=0;X.sort(KX);let R=q.morphAttributes.position,D=q.morphAttributes.normal,F=0;for(let B=0;B<8;B++){let L=X[B],P=L[0],k=L[1];if(P!==Number.MAX_SAFE_INTEGER&&k){if(R&&q.getAttribute("morphTarget"+B)!==R[P])q.setAttribute("morphTarget"+B,R[P]);if(D&&q.getAttribute("morphNormal"+B)!==D[P])q.setAttribute("morphNormal"+B,D[P]);Y[B]=k,F+=k}else{if(R&&q.hasAttribute("morphTarget"+B)===!0)q.deleteAttribute("morphTarget"+B);if(D&&q.hasAttribute("morphNormal"+B)===!0)q.deleteAttribute("morphNormal"+B);Y[B]=0}}let z=q.morphTargetsRelative?1:1-F;G.getUniforms().setValue(J,"morphTargetBaseInfluence",z),G.getUniforms().setValue(J,"morphTargetInfluences",Y)}}return{update:U}}function GX(J,Z,Q,W){let Y=new WeakMap;function H(U){let V=W.render.frame,q=U.geometry,G=Z.get(U,q);if(Y.get(G)!==V)Z.update(G),Y.set(G,V);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(Y.get(U)!==V){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);Y.set(U,V)}}if(U.isSkinnedMesh){let E=U.skeleton;if(Y.get(E)!==V)E.update(),Y.set(E,V)}return G}function K(){Y=new WeakMap}function X(U){let V=U.target;if(V.removeEventListener("dispose",X),Q.remove(V.instanceMatrix),V.instanceColor!==null)Q.remove(V.instanceColor)}return{update:H,dispose:K}}class p7 extends x5{constructor(J,Z,Q,W,Y,H,K,X,U,V){if(V=V!==void 0?V:1026,V!==1026&&V!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Q===void 0&&V===1026)Q=1014;if(Q===void 0&&V===1027)Q=1020;super(null,W,Y,H,K,X,V,Q,U);this.isDepthTexture=!0,this.image={width:J,height:Z},this.magFilter=K!==void 0?K:1003,this.minFilter=X!==void 0?X:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Z=super.toJSON(J);if(this.compareFunction!==null)Z.compareFunction=this.compareFunction;return Z}}var XZ=new x5,KZ=new p7(1,1);KZ.compareFunction=515;var UZ=new f7,VZ=new JZ,GZ=new _7,TJ=[],SJ=[],vJ=new Float32Array(16),fJ=new Float32Array(9),bJ=new Float32Array(4);function G8(J,Z,Q){let W=J[0];if(W<=0||W>0)return J;let Y=Z*Q,H=TJ[Y];if(H===void 0)H=new Float32Array(Y),TJ[Y]=H;if(Z!==0){W.toArray(H,0);for(let K=1,X=0;K!==Z;++K)X+=Q,J[K].toArray(H,X)}return H}function M5(J,Z){if(J.length!==Z.length)return!1;for(let Q=0,W=J.length;Q<W;Q++)if(J[Q]!==Z[Q])return!1;return!0}function z5(J,Z){for(let Q=0,W=Z.length;Q<W;Q++)J[Q]=Z[Q]}function L9(J,Z){let Q=SJ[Z];if(Q===void 0)Q=new Int32Array(Z),SJ[Z]=Q;for(let W=0;W!==Z;++W)Q[W]=J.allocateTextureUnit();return Q}function qX(J,Z){let Q=this.cache;if(Q[0]===Z)return;J.uniform1f(this.addr,Z),Q[0]=Z}function EX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y)J.uniform2f(this.addr,Z.x,Z.y),Q[0]=Z.x,Q[1]=Z.y}else{if(M5(Q,Z))return;J.uniform2fv(this.addr,Z),z5(Q,Z)}}function FX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z)J.uniform3f(this.addr,Z.x,Z.y,Z.z),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z}else if(Z.r!==void 0){if(Q[0]!==Z.r||Q[1]!==Z.g||Q[2]!==Z.b)J.uniform3f(this.addr,Z.r,Z.g,Z.b),Q[0]=Z.r,Q[1]=Z.g,Q[2]=Z.b}else{if(M5(Q,Z))return;J.uniform3fv(this.addr,Z),z5(Q,Z)}}function DX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z||Q[3]!==Z.w)J.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z,Q[3]=Z.w}else{if(M5(Q,Z))return;J.uniform4fv(this.addr,Z),z5(Q,Z)}}function NX(J,Z){let Q=this.cache,W=Z.elements;if(W===void 0){if(M5(Q,Z))return;J.uniformMatrix2fv(this.addr,!1,Z),z5(Q,Z)}else{if(M5(Q,W))return;bJ.set(W),J.uniformMatrix2fv(this.addr,!1,bJ),z5(Q,W)}}function OX(J,Z){let Q=this.cache,W=Z.elements;if(W===void 0){if(M5(Q,Z))return;J.uniformMatrix3fv(this.addr,!1,Z),z5(Q,Z)}else{if(M5(Q,W))return;fJ.set(W),J.uniformMatrix3fv(this.addr,!1,fJ),z5(Q,W)}}function RX(J,Z){let Q=this.cache,W=Z.elements;if(W===void 0){if(M5(Q,Z))return;J.uniformMatrix4fv(this.addr,!1,Z),z5(Q,Z)}else{if(M5(Q,W))return;vJ.set(W),J.uniformMatrix4fv(this.addr,!1,vJ),z5(Q,W)}}function MX(J,Z){let Q=this.cache;if(Q[0]===Z)return;J.uniform1i(this.addr,Z),Q[0]=Z}function zX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y)J.uniform2i(this.addr,Z.x,Z.y),Q[0]=Z.x,Q[1]=Z.y}else{if(M5(Q,Z))return;J.uniform2iv(this.addr,Z),z5(Q,Z)}}function BX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z)J.uniform3i(this.addr,Z.x,Z.y,Z.z),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z}else{if(M5(Q,Z))return;J.uniform3iv(this.addr,Z),z5(Q,Z)}}function AX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z||Q[3]!==Z.w)J.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z,Q[3]=Z.w}else{if(M5(Q,Z))return;J.uniform4iv(this.addr,Z),z5(Q,Z)}}function IX(J,Z){let Q=this.cache;if(Q[0]===Z)return;J.uniform1ui(this.addr,Z),Q[0]=Z}function $X(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y)J.uniform2ui(this.addr,Z.x,Z.y),Q[0]=Z.x,Q[1]=Z.y}else{if(M5(Q,Z))return;J.uniform2uiv(this.addr,Z),z5(Q,Z)}}function CX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z)J.uniform3ui(this.addr,Z.x,Z.y,Z.z),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z}else{if(M5(Q,Z))return;J.uniform3uiv(this.addr,Z),z5(Q,Z)}}function kX(J,Z){let Q=this.cache;if(Z.x!==void 0){if(Q[0]!==Z.x||Q[1]!==Z.y||Q[2]!==Z.z||Q[3]!==Z.w)J.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),Q[0]=Z.x,Q[1]=Z.y,Q[2]=Z.z,Q[3]=Z.w}else{if(M5(Q,Z))return;J.uniform4uiv(this.addr,Z),z5(Q,Z)}}function LX(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;let H=this.type===J.SAMPLER_2D_SHADOW?KZ:XZ;Q.setTexture2D(Z||H,Y)}function wX(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;Q.setTexture3D(Z||VZ,Y)}function PX(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;Q.setTextureCube(Z||GZ,Y)}function TX(J,Z,Q){let W=this.cache,Y=Q.allocateTextureUnit();if(W[0]!==Y)J.uniform1i(this.addr,Y),W[0]=Y;Q.setTexture2DArray(Z||UZ,Y)}function SX(J){switch(J){case 5126:return qX;case 35664:return EX;case 35665:return FX;case 35666:return DX;case 35674:return NX;case 35675:return OX;case 35676:return RX;case 5124:case 35670:return MX;case 35667:case 35671:return zX;case 35668:case 35672:return BX;case 35669:case 35673:return AX;case 5125:return IX;case 36294:return $X;case 36295:return CX;case 36296:return kX;case 35678:case 36198:case 36298:case 36306:case 35682:return LX;case 35679:case 36299:case 36307:return wX;case 35680:case 36300:case 36308:case 36293:return PX;case 36289:case 36303:case 36311:case 36292:return TX}}function vX(J,Z){J.uniform1fv(this.addr,Z)}function fX(J,Z){let Q=G8(Z,this.size,2);J.uniform2fv(this.addr,Q)}function bX(J,Z){let Q=G8(Z,this.size,3);J.uniform3fv(this.addr,Q)}function hX(J,Z){let Q=G8(Z,this.size,4);J.uniform4fv(this.addr,Q)}function jX(J,Z){let Q=G8(Z,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function yX(J,Z){let Q=G8(Z,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function _X(J,Z){let Q=G8(Z,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function xX(J,Z){J.uniform1iv(this.addr,Z)}function gX(J,Z){J.uniform2iv(this.addr,Z)}function pX(J,Z){J.uniform3iv(this.addr,Z)}function mX(J,Z){J.uniform4iv(this.addr,Z)}function lX(J,Z){J.uniform1uiv(this.addr,Z)}function uX(J,Z){J.uniform2uiv(this.addr,Z)}function dX(J,Z){J.uniform3uiv(this.addr,Z)}function cX(J,Z){J.uniform4uiv(this.addr,Z)}function nX(J,Z,Q){let W=this.cache,Y=Z.length,H=L9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTexture2D(Z[K]||XZ,H[K])}function sX(J,Z,Q){let W=this.cache,Y=Z.length,H=L9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTexture3D(Z[K]||VZ,H[K])}function iX(J,Z,Q){let W=this.cache,Y=Z.length,H=L9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTextureCube(Z[K]||GZ,H[K])}function oX(J,Z,Q){let W=this.cache,Y=Z.length,H=L9(Q,Y);if(!M5(W,H))J.uniform1iv(this.addr,H),z5(W,H);for(let K=0;K!==Y;++K)Q.setTexture2DArray(Z[K]||UZ,H[K])}function rX(J){switch(J){case 5126:return vX;case 35664:return fX;case 35665:return bX;case 35666:return hX;case 35674:return jX;case 35675:return yX;case 35676:return _X;case 5124:case 35670:return xX;case 35667:case 35671:return gX;case 35668:case 35672:return pX;case 35669:case 35673:return mX;case 5125:return lX;case 36294:return uX;case 36295:return dX;case 36296:return cX;case 35678:case 36198:case 36298:case 36306:case 35682:return nX;case 35679:case 36299:case 36307:return sX;case 35680:case 36300:case 36308:case 36293:return iX;case 36289:case 36303:case 36311:case 36292:return oX}}class qZ{constructor(J,Z,Q){this.id=J,this.addr=Q,this.cache=[],this.type=Z.type,this.setValue=SX(Z.type)}}class EZ{constructor(J,Z,Q){this.id=J,this.addr=Q,this.cache=[],this.type=Z.type,this.size=Z.size,this.setValue=rX(Z.type)}}class FZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Z,Q){let W=this.seq;for(let Y=0,H=W.length;Y!==H;++Y){let K=W[Y];K.setValue(J,Z[K.id],Q)}}}var z7=/(\w+)(\])?(\[|\.)?/g;function hJ(J,Z){J.seq.push(Z),J.map[Z.id]=Z}function aX(J,Z,Q){let W=J.name,Y=W.length;z7.lastIndex=0;while(!0){let H=z7.exec(W),K=z7.lastIndex,X=H[1],U=H[2]==="]",V=H[3];if(U)X=X|0;if(V===void 0||V==="["&&K+2===Y){hJ(Q,V===void 0?new qZ(X,J,Z):new EZ(X,J,Z));break}else{let G=Q.map[X];if(G===void 0)G=new FZ(X),hJ(Q,G);Q=G}}}class k8{constructor(J,Z){this.seq=[],this.map={};let Q=J.getProgramParameter(Z,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let Y=J.getActiveUniform(Z,W),H=J.getUniformLocation(Z,Y.name);aX(Y,H,this)}}setValue(J,Z,Q,W){let Y=this.map[Z];if(Y!==void 0)Y.setValue(J,Q,W)}setOptional(J,Z,Q){let W=Z[Q];if(W!==void 0)this.setValue(J,Q,W)}static upload(J,Z,Q,W){for(let Y=0,H=Z.length;Y!==H;++Y){let K=Z[Y],X=Q[K.id];if(X.needsUpdate!==!1)K.setValue(J,X.value,W)}}static seqWithValue(J,Z){let Q=[];for(let W=0,Y=J.length;W!==Y;++W){let H=J[W];if(H.id in Z)Q.push(H)}return Q}}function jJ(J,Z,Q){let W=J.createShader(Z);return J.shaderSource(W,Q),J.compileShader(W),W}var tX=37297,eX=0;function JK(J,Z){let Q=J.split(`
`),W=[],Y=Math.max(Z-6,0),H=Math.min(Z+6,Q.length);for(let K=Y;K<H;K++){let X=K+1;W.push(`${X===Z?">":" "} ${X}: ${Q[K]}`)}return W.join(`
`)}function ZK(J){let Z=Q5.getPrimaries(Q5.workingColorSpace),Q=Q5.getPrimaries(J),W;if(Z===Q)W="";else if(Z==="p3"&&Q==="rec709")W="LinearDisplayP3ToLinearSRGB";else if(Z==="rec709"&&Q==="p3")W="LinearSRGBToLinearDisplayP3";switch(J){case"srgb-linear":case"display-p3-linear":return[W,"LinearTransferOETF"];case"srgb":case"display-p3":return[W,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),[W,"LinearTransferOETF"]}}function yJ(J,Z,Q){let W=J.getShaderParameter(Z,J.COMPILE_STATUS),Y=J.getShaderInfoLog(Z).trim();if(W&&Y==="")return"";let H=/ERROR: 0:(\d+)/.exec(Y);if(H){let K=parseInt(H[1]);return Q.toUpperCase()+`

`+Y+`

`+JK(J.getShaderSource(Z),K)}else return Y}function QK(J,Z){let Q=ZK(Z);return`vec4 ${J}( vec4 value ) { return ${Q[0]}( ${Q[1]}( value ) ); }`}function WK(J,Z){let Q;switch(Z){case 1:Q="Linear";break;case 2:Q="Reinhard";break;case 3:Q="OptimizedCineon";break;case 4:Q="ACESFilmic";break;case 6:Q="AgX";break;case 5:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Z),Q="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}function YK(J){return[J.extensionDerivatives||!!J.envMapCubeUVHeight||J.bumpMap||J.normalMapTangentSpace||J.clearcoatNormalMap||J.flatShading||J.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(J.extensionFragDepth||J.logarithmicDepthBuffer)&&J.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",J.extensionDrawBuffers&&J.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(J.extensionShaderTextureLOD||J.envMap||J.transmission)&&J.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(H8).join(`
`)}function HK(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(H8).join(`
`)}function XK(J){let Z=[];for(let Q in J){let W=J[Q];if(W===!1)continue;Z.push("#define "+Q+" "+W)}return Z.join(`
`)}function KK(J,Z){let Q={},W=J.getProgramParameter(Z,J.ACTIVE_ATTRIBUTES);for(let Y=0;Y<W;Y++){let H=J.getActiveAttrib(Z,Y),K=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;Q[K]={type:H.type,location:J.getAttribLocation(Z,K),locationSize:X}}return Q}function H8(J){return J!==""}function _J(J,Z){let Q=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows)}function xJ(J,Z){return J.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}var UK=/^[ \t]*#include +<([\w\d./]+)>/gm;function P7(J){return J.replace(UK,GK)}var VK=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function GK(J,Z){let Q=x0[Z];if(Q===void 0){let W=VK.get(Z);if(W!==void 0)Q=x0[W],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Z,W);else throw Error("Can not resolve #include <"+Z+">")}return P7(Q)}var qK=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gJ(J){return J.replace(qK,EK)}function EK(J,Z,Q,W){let Y="";for(let H=parseInt(Z);H<parseInt(Q);H++)Y+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return Y}function pJ(J){let Z="precision "+J.precision+` float;
precision `+J.precision+" int;";if(J.precision==="highp")Z+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Z+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Z+=`
#define LOW_PRECISION`;return Z}function FK(J){let Z="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)Z="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)Z="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)Z="SHADOWMAP_TYPE_VSM";return Z}function DK(J){let Z="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:Z="ENVMAP_TYPE_CUBE";break;case 306:Z="ENVMAP_TYPE_CUBE_UV";break}return Z}function NK(J){let Z="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:Z="ENVMAP_MODE_REFRACTION";break}return Z}function OK(J){let Z="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:Z="ENVMAP_BLENDING_MULTIPLY";break;case 1:Z="ENVMAP_BLENDING_MIX";break;case 2:Z="ENVMAP_BLENDING_ADD";break}return Z}function RK(J){let Z=J.envMapCubeUVHeight;if(Z===null)return null;let Q=Math.log2(Z)-2,W=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:W,maxMip:Q}}function MK(J,Z,Q,W){let Y=J.getContext(),H=Q.defines,K=Q.vertexShader,X=Q.fragmentShader,U=FK(Q),V=DK(Q),q=NK(Q),G=OK(Q),E=RK(Q),N=Q.isWebGL2?"":YK(Q),O=HK(Q),R=XK(H),D=Y.createProgram(),F,z,B=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R].filter(H8).join(`
`),F.length>0)F+=`
`;if(z=[N,"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R].filter(H8).join(`
`),z.length>0)z+=`
`}else F=[pJ(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+q:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors&&Q.isWebGL2?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+U:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.useLegacyLights?"#define LEGACY_LIGHTS":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.logarithmicDepthBuffer&&Q.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(H8).join(`
`),z=[N,pJ(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+V:"",Q.envMap?"#define "+q:"",Q.envMap?"#define "+G:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+U:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.useLegacyLights?"#define LEGACY_LIGHTS":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.logarithmicDepthBuffer&&Q.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==0?"#define TONE_MAPPING":"",Q.toneMapping!==0?x0.tonemapping_pars_fragment:"",Q.toneMapping!==0?WK("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",x0.colorspace_pars_fragment,QK("linearToOutputTexel",Q.outputColorSpace),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(H8).join(`
`);if(K=P7(K),K=_J(K,Q),K=xJ(K,Q),X=P7(X),X=_J(X,Q),X=xJ(X,Q),K=gJ(K),X=gJ(X),Q.isWebGL2&&Q.isRawShaderMaterial!==!0)B=`#version 300 es
`,F=[O,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,z=["precision mediump sampler2DArray;","#define varying in",Q.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+z;let L=B+F+K,P=B+z+X,k=jJ(Y,Y.VERTEX_SHADER,L),f=jJ(Y,Y.FRAGMENT_SHADER,P);if(Y.attachShader(D,k),Y.attachShader(D,f),Q.index0AttributeName!==void 0)Y.bindAttribLocation(D,0,Q.index0AttributeName);else if(Q.morphTargets===!0)Y.bindAttribLocation(D,0,"position");Y.linkProgram(D);function m(n){if(J.debug.checkShaderErrors){let s=Y.getProgramInfoLog(D).trim(),w=Y.getShaderInfoLog(k).trim(),_=Y.getShaderInfoLog(f).trim(),u=!0,a=!0;if(Y.getProgramParameter(D,Y.LINK_STATUS)===!1)if(u=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Y,D,k,f);else{let c=yJ(Y,k,"vertex"),d=yJ(Y,f,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Y.getError()+" - VALIDATE_STATUS "+Y.getProgramParameter(D,Y.VALIDATE_STATUS)+`

Program Info Log: `+s+`
`+c+`
`+d)}else if(s!=="")console.warn("THREE.WebGLProgram: Program Info Log:",s);else if(w===""||_==="")a=!1;if(a)n.diagnostics={runnable:u,programLog:s,vertexShader:{log:w,prefix:F},fragmentShader:{log:_,prefix:z}}}Y.deleteShader(k),Y.deleteShader(f),A=new k8(Y,D),$=KK(Y,D)}let A;this.getUniforms=function(){if(A===void 0)m(this);return A};let $;this.getAttributes=function(){if($===void 0)m(this);return $};let v=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(v===!1)v=Y.getProgramParameter(D,tX);return v},this.destroy=function(){W.releaseStatesOfProgram(this),Y.deleteProgram(D),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=eX++,this.cacheKey=Z,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=f,this}var zK=0;class DZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Z,fragmentShader:Q}=J,W=this._getShaderStage(Z),Y=this._getShaderStage(Q),H=this._getShaderCacheForMaterial(J);if(H.has(W)===!1)H.add(W),W.usedTimes++;if(H.has(Y)===!1)H.add(Y),Y.usedTimes++;return this}remove(J){let Z=this.materialCache.get(J);for(let Q of Z)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Z=this.materialCache,Q=Z.get(J);if(Q===void 0)Q=new Set,Z.set(J,Q);return Q}_getShaderStage(J){let Z=this.shaderCache,Q=Z.get(J);if(Q===void 0)Q=new NZ(J),Z.set(J,Q);return Q}}class NZ{constructor(J){this.id=zK++,this.code=J,this.usedTimes=0}}function BK(J,Z,Q,W,Y,H,K){let X=new C9,U=new DZ,V=[],q=Y.isWebGL2,G=Y.logarithmicDepthBuffer,E=Y.vertexTextures,N=Y.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){if(A===0)return"uv";return`uv${A}`}function D(A,$,v,n,s){let w=n.fog,_=s.geometry,u=A.isMeshStandardMaterial?n.environment:null,a=(A.isMeshStandardMaterial?Q:Z).get(A.envMap||u),c=!!a&&a.mapping===306?a.image.height:null,d=O[A.type];if(A.precision!==null){if(N=Y.getMaxPrecision(A.precision),N!==A.precision)console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",N,"instead.")}let e=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,Q0=e!==void 0?e.length:0,y=0;if(_.morphAttributes.position!==void 0)y=1;if(_.morphAttributes.normal!==void 0)y=2;if(_.morphAttributes.color!==void 0)y=3;let i,W0,V0,k0;if(d){let f5=K6[d];i=f5.vertexShader,W0=f5.fragmentShader}else i=A.vertexShader,W0=A.fragmentShader,U.update(A),V0=U.getVertexShaderID(A),k0=U.getFragmentShaderID(A);let P0=J.getRenderTarget(),c0=s.isInstancedMesh===!0,v0=s.isBatchedMesh===!0,e0=!!A.map,j=!!A.matcap,v5=!!a,r0=!!A.aoMap,A0=!!A.lightMap,T0=!!A.bumpMap,y0=!!A.normalMap,i0=!!A.displacementMap,l0=!!A.emissiveMap,C=!!A.metalnessMap,M=!!A.roughnessMap,g=A.anisotropy>0,Z0=A.clearcoat>0,r=A.iridescence>0,J0=A.sheen>0,$0=A.transmission>0,K0=g&&!!A.anisotropyMap,F0=Z0&&!!A.clearcoatMap,B0=Z0&&!!A.clearcoatNormalMap,_0=Z0&&!!A.clearcoatRoughnessMap,t=r&&!!A.iridescenceMap,D5=r&&!!A.iridescenceThicknessMap,n0=J0&&!!A.sheenColorMap,b0=J0&&!!A.sheenRoughnessMap,D0=!!A.specularMap,N0=!!A.specularColorMap,s0=!!A.specularIntensityMap,W5=$0&&!!A.transmissionMap,a0=$0&&!!A.thicknessMap,Y5=!!A.gradientMap,Y0=!!A.alphaMap,S=A.alphaTest>0,X0=!!A.alphaHash,U0=!!A.extensions,S0=!!_.attributes.uv1,I0=!!_.attributes.uv2,H5=!!_.attributes.uv3,X5=0;if(A.toneMapped){if(P0===null||P0.isXRRenderTarget===!0)X5=J.toneMapping}return{isWebGL2:q,shaderID:d,shaderType:A.type,shaderName:A.name,vertexShader:i,fragmentShader:W0,defines:A.defines,customVertexShaderID:V0,customFragmentShaderID:k0,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:N,batching:v0,instancing:c0,instancingColor:c0&&s.instanceColor!==null,supportsVertexTextures:E,outputColorSpace:P0===null?J.outputColorSpace:P0.isXRRenderTarget===!0?P0.texture.colorSpace:"srgb-linear",map:e0,matcap:j,envMap:v5,envMapMode:v5&&a.mapping,envMapCubeUVHeight:c,aoMap:r0,lightMap:A0,bumpMap:T0,normalMap:y0,displacementMap:E&&i0,emissiveMap:l0,normalMapObjectSpace:y0&&A.normalMapType===1,normalMapTangentSpace:y0&&A.normalMapType===0,metalnessMap:C,roughnessMap:M,anisotropy:g,anisotropyMap:K0,clearcoat:Z0,clearcoatMap:F0,clearcoatNormalMap:B0,clearcoatRoughnessMap:_0,iridescence:r,iridescenceMap:t,iridescenceThicknessMap:D5,sheen:J0,sheenColorMap:n0,sheenRoughnessMap:b0,specularMap:D0,specularColorMap:N0,specularIntensityMap:s0,transmission:$0,transmissionMap:W5,thicknessMap:a0,gradientMap:Y5,opaque:A.transparent===!1&&A.blending===1,alphaMap:Y0,alphaTest:S,alphaHash:X0,combine:A.combine,mapUv:e0&&R(A.map.channel),aoMapUv:r0&&R(A.aoMap.channel),lightMapUv:A0&&R(A.lightMap.channel),bumpMapUv:T0&&R(A.bumpMap.channel),normalMapUv:y0&&R(A.normalMap.channel),displacementMapUv:i0&&R(A.displacementMap.channel),emissiveMapUv:l0&&R(A.emissiveMap.channel),metalnessMapUv:C&&R(A.metalnessMap.channel),roughnessMapUv:M&&R(A.roughnessMap.channel),anisotropyMapUv:K0&&R(A.anisotropyMap.channel),clearcoatMapUv:F0&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:B0&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_0&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:t&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:D5&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:n0&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:b0&&R(A.sheenRoughnessMap.channel),specularMapUv:D0&&R(A.specularMap.channel),specularColorMapUv:N0&&R(A.specularColorMap.channel),specularIntensityMapUv:s0&&R(A.specularIntensityMap.channel),transmissionMapUv:W5&&R(A.transmissionMap.channel),thicknessMapUv:a0&&R(A.thicknessMap.channel),alphaMapUv:Y0&&R(A.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(y0||g),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,vertexUv1s:S0,vertexUv2s:I0,vertexUv3s:H5,pointsUvs:s.isPoints===!0&&!!_.attributes.uv&&(e0||Y0),fog:!!w,useFog:A.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:G,skinning:s.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:Q0,morphTextureStride:y,numDirLights:$.directional.length,numPointLights:$.point.length,numSpotLights:$.spot.length,numSpotLightMaps:$.spotLightMap.length,numRectAreaLights:$.rectArea.length,numHemiLights:$.hemi.length,numDirLightShadows:$.directionalShadowMap.length,numPointLightShadows:$.pointShadowMap.length,numSpotLightShadows:$.spotShadowMap.length,numSpotLightShadowsWithMaps:$.numSpotLightShadowsWithMaps,numLightProbes:$.numLightProbes,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:A.dithering,shadowMapEnabled:J.shadowMap.enabled&&v.length>0,shadowMapType:J.shadowMap.type,toneMapping:X5,useLegacyLights:J._useLegacyLights,decodeVideoTexture:e0&&A.map.isVideoTexture===!0&&Q5.getTransfer(A.map.colorSpace)==="srgb",premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:U0&&A.extensions.derivatives===!0,extensionFragDepth:U0&&A.extensions.fragDepth===!0,extensionDrawBuffers:U0&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:U0&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:U0&&A.extensions.clipCullDistance&&W.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:q||W.has("EXT_frag_depth"),rendererExtensionDrawBuffers:q||W.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:q||W.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:W.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function F(A){let $=[];if(A.shaderID)$.push(A.shaderID);else $.push(A.customVertexShaderID),$.push(A.customFragmentShaderID);if(A.defines!==void 0)for(let v in A.defines)$.push(v),$.push(A.defines[v]);if(A.isRawShaderMaterial===!1)z($,A),B($,A),$.push(J.outputColorSpace);return $.push(A.customProgramCacheKey),$.join()}function z(A,$){A.push($.precision),A.push($.outputColorSpace),A.push($.envMapMode),A.push($.envMapCubeUVHeight),A.push($.mapUv),A.push($.alphaMapUv),A.push($.lightMapUv),A.push($.aoMapUv),A.push($.bumpMapUv),A.push($.normalMapUv),A.push($.displacementMapUv),A.push($.emissiveMapUv),A.push($.metalnessMapUv),A.push($.roughnessMapUv),A.push($.anisotropyMapUv),A.push($.clearcoatMapUv),A.push($.clearcoatNormalMapUv),A.push($.clearcoatRoughnessMapUv),A.push($.iridescenceMapUv),A.push($.iridescenceThicknessMapUv),A.push($.sheenColorMapUv),A.push($.sheenRoughnessMapUv),A.push($.specularMapUv),A.push($.specularColorMapUv),A.push($.specularIntensityMapUv),A.push($.transmissionMapUv),A.push($.thicknessMapUv),A.push($.combine),A.push($.fogExp2),A.push($.sizeAttenuation),A.push($.morphTargetsCount),A.push($.morphAttributeCount),A.push($.numDirLights),A.push($.numPointLights),A.push($.numSpotLights),A.push($.numSpotLightMaps),A.push($.numHemiLights),A.push($.numRectAreaLights),A.push($.numDirLightShadows),A.push($.numPointLightShadows),A.push($.numSpotLightShadows),A.push($.numSpotLightShadowsWithMaps),A.push($.numLightProbes),A.push($.shadowMapType),A.push($.toneMapping),A.push($.numClippingPlanes),A.push($.numClipIntersection),A.push($.depthPacking)}function B(A,$){if(X.disableAll(),$.isWebGL2)X.enable(0);if($.supportsVertexTextures)X.enable(1);if($.instancing)X.enable(2);if($.instancingColor)X.enable(3);if($.matcap)X.enable(4);if($.envMap)X.enable(5);if($.normalMapObjectSpace)X.enable(6);if($.normalMapTangentSpace)X.enable(7);if($.clearcoat)X.enable(8);if($.iridescence)X.enable(9);if($.alphaTest)X.enable(10);if($.vertexColors)X.enable(11);if($.vertexAlphas)X.enable(12);if($.vertexUv1s)X.enable(13);if($.vertexUv2s)X.enable(14);if($.vertexUv3s)X.enable(15);if($.vertexTangents)X.enable(16);if($.anisotropy)X.enable(17);if($.alphaHash)X.enable(18);if($.batching)X.enable(19);if(A.push(X.mask),X.disableAll(),$.fog)X.enable(0);if($.useFog)X.enable(1);if($.flatShading)X.enable(2);if($.logarithmicDepthBuffer)X.enable(3);if($.skinning)X.enable(4);if($.morphTargets)X.enable(5);if($.morphNormals)X.enable(6);if($.morphColors)X.enable(7);if($.premultipliedAlpha)X.enable(8);if($.shadowMapEnabled)X.enable(9);if($.useLegacyLights)X.enable(10);if($.doubleSided)X.enable(11);if($.flipSided)X.enable(12);if($.useDepthPacking)X.enable(13);if($.dithering)X.enable(14);if($.transmission)X.enable(15);if($.sheen)X.enable(16);if($.opaque)X.enable(17);if($.pointsUvs)X.enable(18);if($.decodeVideoTexture)X.enable(19);A.push(X.mask)}function L(A){let $=O[A.type],v;if($){let n=K6[$];v=VW.clone(n.uniforms)}else v=A.uniforms;return v}function P(A,$){let v;for(let n=0,s=V.length;n<s;n++){let w=V[n];if(w.cacheKey===$){v=w,++v.usedTimes;break}}if(v===void 0)v=new MK(J,$,A,H),V.push(v);return v}function k(A){if(--A.usedTimes===0){let $=V.indexOf(A);V[$]=V[V.length-1],V.pop(),A.destroy()}}function f(A){U.remove(A)}function m(){U.dispose()}return{getParameters:D,getProgramCacheKey:F,getUniforms:L,acquireProgram:P,releaseProgram:k,releaseShaderCache:f,programs:V,dispose:m}}function AK(){let J=new WeakMap;function Z(H){let K=J.get(H);if(K===void 0)K={},J.set(H,K);return K}function Q(H){J.delete(H)}function W(H,K,X){J.get(H)[K]=X}function Y(){J=new WeakMap}return{get:Z,remove:Q,update:W,dispose:Y}}function IK(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.material.id!==Z.material.id)return J.material.id-Z.material.id;else if(J.z!==Z.z)return J.z-Z.z;else return J.id-Z.id}function mJ(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.z!==Z.z)return Z.z-J.z;else return J.id-Z.id}function lJ(){let J=[],Z=0,Q=[],W=[],Y=[];function H(){Z=0,Q.length=0,W.length=0,Y.length=0}function K(G,E,N,O,R,D){let F=J[Z];if(F===void 0)F={id:G.id,object:G,geometry:E,material:N,groupOrder:O,renderOrder:G.renderOrder,z:R,group:D},J[Z]=F;else F.id=G.id,F.object=G,F.geometry=E,F.material=N,F.groupOrder=O,F.renderOrder=G.renderOrder,F.z=R,F.group=D;return Z++,F}function X(G,E,N,O,R,D){let F=K(G,E,N,O,R,D);if(N.transmission>0)W.push(F);else if(N.transparent===!0)Y.push(F);else Q.push(F)}function U(G,E,N,O,R,D){let F=K(G,E,N,O,R,D);if(N.transmission>0)W.unshift(F);else if(N.transparent===!0)Y.unshift(F);else Q.unshift(F)}function V(G,E){if(Q.length>1)Q.sort(G||IK);if(W.length>1)W.sort(E||mJ);if(Y.length>1)Y.sort(E||mJ)}function q(){for(let G=Z,E=J.length;G<E;G++){let N=J[G];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:Q,transmissive:W,transparent:Y,init:H,push:X,unshift:U,finish:q,sort:V}}function $K(){let J=new WeakMap;function Z(W,Y){let H=J.get(W),K;if(H===void 0)K=new lJ,J.set(W,[K]);else if(Y>=H.length)K=new lJ,H.push(K);else K=H[Y];return K}function Q(){J=new WeakMap}return{get:Z,dispose:Q}}function CK(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let Q;switch(Z.type){case"DirectionalLight":Q={direction:new T,color:new g0};break;case"SpotLight":Q={position:new T,direction:new T,color:new g0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new T,color:new g0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new T,skyColor:new g0,groundColor:new g0};break;case"RectAreaLight":Q={color:new g0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[Z.id]=Q,Q}}}function kK(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let Q;switch(Z.type){case"DirectionalLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q0};break;case"SpotLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q0};break;case"PointLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Z.id]=Q,Q}}}var LK=0;function wK(J,Z){return(Z.castShadow?2:0)-(J.castShadow?2:0)+(Z.map?1:0)-(J.map?1:0)}function PK(J,Z){let Q=new CK,W=kK(),Y={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let q=0;q<9;q++)Y.probe.push(new T);let H=new T,K=new F5,X=new F5;function U(q,G){let E=0,N=0,O=0;for(let n=0;n<9;n++)Y.probe[n].set(0,0,0);let R=0,D=0,F=0,z=0,B=0,L=0,P=0,k=0,f=0,m=0,A=0;q.sort(wK);let $=G===!0?Math.PI:1;for(let n=0,s=q.length;n<s;n++){let w=q[n],_=w.color,u=w.intensity,a=w.distance,c=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)E+=_.r*u*$,N+=_.g*u*$,O+=_.b*u*$;else if(w.isLightProbe){for(let d=0;d<9;d++)Y.probe[d].addScaledVector(w.sh.coefficients[d],u);A++}else if(w.isDirectionalLight){let d=Q.get(w);if(d.color.copy(w.color).multiplyScalar(w.intensity*$),w.castShadow){let e=w.shadow,Q0=W.get(w);Q0.shadowBias=e.bias,Q0.shadowNormalBias=e.normalBias,Q0.shadowRadius=e.radius,Q0.shadowMapSize=e.mapSize,Y.directionalShadow[R]=Q0,Y.directionalShadowMap[R]=c,Y.directionalShadowMatrix[R]=w.shadow.matrix,L++}Y.directional[R]=d,R++}else if(w.isSpotLight){let d=Q.get(w);d.position.setFromMatrixPosition(w.matrixWorld),d.color.copy(_).multiplyScalar(u*$),d.distance=a,d.coneCos=Math.cos(w.angle),d.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),d.decay=w.decay,Y.spot[F]=d;let e=w.shadow;if(w.map){if(Y.spotLightMap[f]=w.map,f++,e.updateMatrices(w),w.castShadow)m++}if(Y.spotLightMatrix[F]=e.matrix,w.castShadow){let Q0=W.get(w);Q0.shadowBias=e.bias,Q0.shadowNormalBias=e.normalBias,Q0.shadowRadius=e.radius,Q0.shadowMapSize=e.mapSize,Y.spotShadow[F]=Q0,Y.spotShadowMap[F]=c,k++}F++}else if(w.isRectAreaLight){let d=Q.get(w);d.color.copy(_).multiplyScalar(u),d.halfWidth.set(w.width*0.5,0,0),d.halfHeight.set(0,w.height*0.5,0),Y.rectArea[z]=d,z++}else if(w.isPointLight){let d=Q.get(w);if(d.color.copy(w.color).multiplyScalar(w.intensity*$),d.distance=w.distance,d.decay=w.decay,w.castShadow){let e=w.shadow,Q0=W.get(w);Q0.shadowBias=e.bias,Q0.shadowNormalBias=e.normalBias,Q0.shadowRadius=e.radius,Q0.shadowMapSize=e.mapSize,Q0.shadowCameraNear=e.camera.near,Q0.shadowCameraFar=e.camera.far,Y.pointShadow[D]=Q0,Y.pointShadowMap[D]=c,Y.pointShadowMatrix[D]=w.shadow.matrix,P++}Y.point[D]=d,D++}else if(w.isHemisphereLight){let d=Q.get(w);d.skyColor.copy(w.color).multiplyScalar(u*$),d.groundColor.copy(w.groundColor).multiplyScalar(u*$),Y.hemi[B]=d,B++}}if(z>0)if(Z.isWebGL2)if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=H0.LTC_FLOAT_1,Y.rectAreaLTC2=H0.LTC_FLOAT_2;else Y.rectAreaLTC1=H0.LTC_HALF_1,Y.rectAreaLTC2=H0.LTC_HALF_2;else if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=H0.LTC_FLOAT_1,Y.rectAreaLTC2=H0.LTC_FLOAT_2;else if(J.has("OES_texture_half_float_linear")===!0)Y.rectAreaLTC1=H0.LTC_HALF_1,Y.rectAreaLTC2=H0.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");Y.ambient[0]=E,Y.ambient[1]=N,Y.ambient[2]=O;let v=Y.hash;if(v.directionalLength!==R||v.pointLength!==D||v.spotLength!==F||v.rectAreaLength!==z||v.hemiLength!==B||v.numDirectionalShadows!==L||v.numPointShadows!==P||v.numSpotShadows!==k||v.numSpotMaps!==f||v.numLightProbes!==A)Y.directional.length=R,Y.spot.length=F,Y.rectArea.length=z,Y.point.length=D,Y.hemi.length=B,Y.directionalShadow.length=L,Y.directionalShadowMap.length=L,Y.pointShadow.length=P,Y.pointShadowMap.length=P,Y.spotShadow.length=k,Y.spotShadowMap.length=k,Y.directionalShadowMatrix.length=L,Y.pointShadowMatrix.length=P,Y.spotLightMatrix.length=k+f-m,Y.spotLightMap.length=f,Y.numSpotLightShadowsWithMaps=m,Y.numLightProbes=A,v.directionalLength=R,v.pointLength=D,v.spotLength=F,v.rectAreaLength=z,v.hemiLength=B,v.numDirectionalShadows=L,v.numPointShadows=P,v.numSpotShadows=k,v.numSpotMaps=f,v.numLightProbes=A,Y.version=LK++}function V(q,G){let E=0,N=0,O=0,R=0,D=0,F=G.matrixWorldInverse;for(let z=0,B=q.length;z<B;z++){let L=q[z];if(L.isDirectionalLight){let P=Y.directional[E];P.direction.setFromMatrixPosition(L.matrixWorld),H.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(H),P.direction.transformDirection(F),E++}else if(L.isSpotLight){let P=Y.spot[O];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(F),P.direction.setFromMatrixPosition(L.matrixWorld),H.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(H),P.direction.transformDirection(F),O++}else if(L.isRectAreaLight){let P=Y.rectArea[R];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(F),X.identity(),K.copy(L.matrixWorld),K.premultiply(F),X.extractRotation(K),P.halfWidth.set(L.width*0.5,0,0),P.halfHeight.set(0,L.height*0.5,0),P.halfWidth.applyMatrix4(X),P.halfHeight.applyMatrix4(X),R++}else if(L.isPointLight){let P=Y.point[N];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(F),N++}else if(L.isHemisphereLight){let P=Y.hemi[D];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(F),D++}}}return{setup:U,setupView:V,state:Y}}function uJ(J,Z){let Q=new PK(J,Z),W=[],Y=[];function H(){W.length=0,Y.length=0}function K(G){W.push(G)}function X(G){Y.push(G)}function U(G){Q.setup(W,G)}function V(G){Q.setupView(W,G)}return{init:H,state:{lightsArray:W,shadowsArray:Y,lights:Q},setupLights:U,setupLightsView:V,pushLight:K,pushShadow:X}}function TK(J,Z){let Q=new WeakMap;function W(H,K=0){let X=Q.get(H),U;if(X===void 0)U=new uJ(J,Z),Q.set(H,[U]);else if(K>=X.length)U=new uJ(J,Z),X.push(U);else U=X[K];return U}function Y(){Q=new WeakMap}return{get:W,dispose:Y}}class OZ extends V8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class RZ extends V8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var SK=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vK=`uniform sampler2D shadow_pass;
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
}`;function fK(J,Z,Q){let W=new k9,Y=new q0,H=new q0,K=new K5,X=new OZ({depthPacking:3201}),U=new RZ,V={},q=Q.maxTextureSize,G={[0]:1,[1]:0,[2]:2},E=new L6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q0},radius:{value:4}},vertexShader:SK,fragmentShader:vK}),N=E.clone();N.defines.HORIZONTAL_PASS=1;let O=new n5;O.setAttribute("position",new e5(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let R=new o(O,E),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let F=this.type;this.render=function(k,f,m){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(k.length===0)return;let A=J.getRenderTarget(),$=J.getActiveCubeFace(),v=J.getActiveMipmapLevel(),n=J.state;n.setBlending(0),n.buffers.color.setClear(1,1,1,1),n.buffers.depth.setTest(!0),n.setScissorTest(!1);let s=F!==3&&this.type===3,w=F===3&&this.type!==3;for(let _=0,u=k.length;_<u;_++){let a=k[_],c=a.shadow;if(c===void 0){console.warn("THREE.WebGLShadowMap:",a,"has no shadow.");continue}if(c.autoUpdate===!1&&c.needsUpdate===!1)continue;Y.copy(c.mapSize);let d=c.getFrameExtents();if(Y.multiply(d),H.copy(c.mapSize),Y.x>q||Y.y>q){if(Y.x>q)H.x=Math.floor(q/d.x),Y.x=H.x*d.x,c.mapSize.x=H.x;if(Y.y>q)H.y=Math.floor(q/d.y),Y.y=H.y*d.y,c.mapSize.y=H.y}if(c.map===null||s===!0||w===!0){let Q0=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(c.map!==null)c.map.dispose();c.map=new k6(Y.x,Y.y,Q0),c.map.texture.name=a.name+".shadowMap",c.camera.updateProjectionMatrix()}J.setRenderTarget(c.map),J.clear();let e=c.getViewportCount();for(let Q0=0;Q0<e;Q0++){let y=c.getViewport(Q0);K.set(H.x*y.x,H.y*y.y,H.x*y.z,H.y*y.w),n.viewport(K),c.updateMatrices(a,Q0),W=c.getFrustum(),L(f,m,c.camera,a,this.type)}if(c.isPointLightShadow!==!0&&this.type===3)z(c,m);c.needsUpdate=!1}F=this.type,D.needsUpdate=!1,J.setRenderTarget(A,$,v)};function z(k,f){let m=Z.update(R);if(E.defines.VSM_SAMPLES!==k.blurSamples)E.defines.VSM_SAMPLES=k.blurSamples,N.defines.VSM_SAMPLES=k.blurSamples,E.needsUpdate=!0,N.needsUpdate=!0;if(k.mapPass===null)k.mapPass=new k6(Y.x,Y.y);E.uniforms.shadow_pass.value=k.map.texture,E.uniforms.resolution.value=k.mapSize,E.uniforms.radius.value=k.radius,J.setRenderTarget(k.mapPass),J.clear(),J.renderBufferDirect(f,null,m,E,R,null),N.uniforms.shadow_pass.value=k.mapPass.texture,N.uniforms.resolution.value=k.mapSize,N.uniforms.radius.value=k.radius,J.setRenderTarget(k.map),J.clear(),J.renderBufferDirect(f,null,m,N,R,null)}function B(k,f,m,A){let $=null,v=m.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(v!==void 0)$=v;else if($=m.isPointLight===!0?U:X,J.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0){let n=$.uuid,s=f.uuid,w=V[n];if(w===void 0)w={},V[n]=w;let _=w[s];if(_===void 0)_=$.clone(),w[s]=_,f.addEventListener("dispose",P);$=_}if($.visible=f.visible,$.wireframe=f.wireframe,A===3)$.side=f.shadowSide!==null?f.shadowSide:f.side;else $.side=f.shadowSide!==null?f.shadowSide:G[f.side];if($.alphaMap=f.alphaMap,$.alphaTest=f.alphaTest,$.map=f.map,$.clipShadows=f.clipShadows,$.clippingPlanes=f.clippingPlanes,$.clipIntersection=f.clipIntersection,$.displacementMap=f.displacementMap,$.displacementScale=f.displacementScale,$.displacementBias=f.displacementBias,$.wireframeLinewidth=f.wireframeLinewidth,$.linewidth=f.linewidth,m.isPointLight===!0&&$.isMeshDistanceMaterial===!0){let n=J.properties.get($);n.light=m}return $}function L(k,f,m,A,$){if(k.visible===!1)return;if(k.layers.test(f.layers)&&(k.isMesh||k.isLine||k.isPoints)){if((k.castShadow||k.receiveShadow&&$===3)&&(!k.frustumCulled||W.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,k.matrixWorld);let s=Z.update(k),w=k.material;if(Array.isArray(w)){let _=s.groups;for(let u=0,a=_.length;u<a;u++){let c=_[u],d=w[c.materialIndex];if(d&&d.visible){let e=B(k,d,A,$);k.onBeforeShadow(J,k,f,m,s,e,c),J.renderBufferDirect(m,null,s,e,k,c),k.onAfterShadow(J,k,f,m,s,e,c)}}}else if(w.visible){let _=B(k,w,A,$);k.onBeforeShadow(J,k,f,m,s,_,null),J.renderBufferDirect(m,null,s,_,k,null),k.onAfterShadow(J,k,f,m,s,_,null)}}}let n=k.children;for(let s=0,w=n.length;s<w;s++)L(n[s],f,m,A,$)}function P(k){k.target.removeEventListener("dispose",P);for(let m in V){let A=V[m],$=k.target.uuid;if($ in A)A[$].dispose(),delete A[$]}}}function bK(J,Z,Q){let W=Q.isWebGL2;function Y(){let S=!1,X0=new K5,U0=null,S0=new K5(0,0,0,0);return{setMask:function(I0){if(U0!==I0&&!S)J.colorMask(I0,I0,I0,I0),U0=I0},setLocked:function(I0){S=I0},setClear:function(I0,H5,X5,R5,f5){if(f5===!0)I0*=R5,H5*=R5,X5*=R5;if(X0.set(I0,H5,X5,R5),S0.equals(X0)===!1)J.clearColor(I0,H5,X5,R5),S0.copy(X0)},reset:function(){S=!1,U0=null,S0.set(-1,0,0,0)}}}function H(){let S=!1,X0=null,U0=null,S0=null;return{setTest:function(I0){if(I0)v0(J.DEPTH_TEST);else e0(J.DEPTH_TEST)},setMask:function(I0){if(X0!==I0&&!S)J.depthMask(I0),X0=I0},setFunc:function(I0){if(U0!==I0){switch(I0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}U0=I0}},setLocked:function(I0){S=I0},setClear:function(I0){if(S0!==I0)J.clearDepth(I0),S0=I0},reset:function(){S=!1,X0=null,U0=null,S0=null}}}function K(){let S=!1,X0=null,U0=null,S0=null,I0=null,H5=null,X5=null,R5=null,f5=null;return{setTest:function(t0){if(!S)if(t0)v0(J.STENCIL_TEST);else e0(J.STENCIL_TEST)},setMask:function(t0){if(X0!==t0&&!S)J.stencilMask(t0),X0=t0},setFunc:function(t0,W6,Y6){if(U0!==t0||S0!==W6||I0!==Y6)J.stencilFunc(t0,W6,Y6),U0=t0,S0=W6,I0=Y6},setOp:function(t0,W6,Y6){if(H5!==t0||X5!==W6||R5!==Y6)J.stencilOp(t0,W6,Y6),H5=t0,X5=W6,R5=Y6},setLocked:function(t0){S=t0},setClear:function(t0){if(f5!==t0)J.clearStencil(t0),f5=t0},reset:function(){S=!1,X0=null,U0=null,S0=null,I0=null,H5=null,X5=null,R5=null,f5=null}}}let X=new Y,U=new H,V=new K,q=new WeakMap,G=new WeakMap,E={},N={},O=new WeakMap,R=[],D=null,F=!1,z=null,B=null,L=null,P=null,k=null,f=null,m=null,A=new g0(0,0,0),$=0,v=!1,n=null,s=null,w=null,_=null,u=null,a=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),c=!1,d=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)d=parseFloat(/^WebGL (\d)/.exec(e)[1]),c=d>=1;else if(e.indexOf("OpenGL ES")!==-1)d=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),c=d>=2;let Q0=null,y={},i=J.getParameter(J.SCISSOR_BOX),W0=J.getParameter(J.VIEWPORT),V0=new K5().fromArray(i),k0=new K5().fromArray(W0);function P0(S,X0,U0,S0){let I0=new Uint8Array(4),H5=J.createTexture();J.bindTexture(S,H5),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let X5=0;X5<U0;X5++)if(W&&(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY))J.texImage3D(X0,0,J.RGBA,1,1,S0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(X0+X5,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return H5}let c0={};if(c0[J.TEXTURE_2D]=P0(J.TEXTURE_2D,J.TEXTURE_2D,1),c0[J.TEXTURE_CUBE_MAP]=P0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),W)c0[J.TEXTURE_2D_ARRAY]=P0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),c0[J.TEXTURE_3D]=P0(J.TEXTURE_3D,J.TEXTURE_3D,1,1);X.setClear(0,0,0,1),U.setClear(1),V.setClear(0),v0(J.DEPTH_TEST),U.setFunc(3),l0(!1),C(1),v0(J.CULL_FACE),y0(0);function v0(S){if(E[S]!==!0)J.enable(S),E[S]=!0}function e0(S){if(E[S]!==!1)J.disable(S),E[S]=!1}function j(S,X0){if(N[S]!==X0){if(J.bindFramebuffer(S,X0),N[S]=X0,W){if(S===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=X0;if(S===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=X0}return!0}return!1}function v5(S,X0){let U0=R,S0=!1;if(S){if(U0=O.get(X0),U0===void 0)U0=[],O.set(X0,U0);if(S.isWebGLMultipleRenderTargets){let I0=S.texture;if(U0.length!==I0.length||U0[0]!==J.COLOR_ATTACHMENT0){for(let H5=0,X5=I0.length;H5<X5;H5++)U0[H5]=J.COLOR_ATTACHMENT0+H5;U0.length=I0.length,S0=!0}}else if(U0[0]!==J.COLOR_ATTACHMENT0)U0[0]=J.COLOR_ATTACHMENT0,S0=!0}else if(U0[0]!==J.BACK)U0[0]=J.BACK,S0=!0;if(S0)if(Q.isWebGL2)J.drawBuffers(U0);else Z.get("WEBGL_draw_buffers").drawBuffersWEBGL(U0)}function r0(S){if(D!==S)return J.useProgram(S),D=S,!0;return!1}let A0={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};if(W)A0[103]=J.MIN,A0[104]=J.MAX;else{let S=Z.get("EXT_blend_minmax");if(S!==null)A0[103]=S.MIN_EXT,A0[104]=S.MAX_EXT}let T0={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA,[211]:J.CONSTANT_COLOR,[212]:J.ONE_MINUS_CONSTANT_COLOR,[213]:J.CONSTANT_ALPHA,[214]:J.ONE_MINUS_CONSTANT_ALPHA};function y0(S,X0,U0,S0,I0,H5,X5,R5,f5,t0){if(S===0){if(F===!0)e0(J.BLEND),F=!1;return}if(F===!1)v0(J.BLEND),F=!0;if(S!==5){if(S!==z||t0!==v){if(B!==100||k!==100)J.blendEquation(J.FUNC_ADD),B=100,k=100;if(t0)switch(S){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}L=null,P=null,f=null,m=null,A.set(0,0,0),$=0,z=S,v=t0}return}if(I0=I0||X0,H5=H5||U0,X5=X5||S0,X0!==B||I0!==k)J.blendEquationSeparate(A0[X0],A0[I0]),B=X0,k=I0;if(U0!==L||S0!==P||H5!==f||X5!==m)J.blendFuncSeparate(T0[U0],T0[S0],T0[H5],T0[X5]),L=U0,P=S0,f=H5,m=X5;if(R5.equals(A)===!1||f5!==$)J.blendColor(R5.r,R5.g,R5.b,f5),A.copy(R5),$=f5;z=S,v=!1}function i0(S,X0){S.side===2?e0(J.CULL_FACE):v0(J.CULL_FACE);let U0=S.side===1;if(X0)U0=!U0;l0(U0),S.blending===1&&S.transparent===!1?y0(0):y0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),U.setFunc(S.depthFunc),U.setTest(S.depthTest),U.setMask(S.depthWrite),X.setMask(S.colorWrite);let S0=S.stencilWrite;if(V.setTest(S0),S0)V.setMask(S.stencilWriteMask),V.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),V.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);g(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?v0(J.SAMPLE_ALPHA_TO_COVERAGE):e0(J.SAMPLE_ALPHA_TO_COVERAGE)}function l0(S){if(n!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);n=S}}function C(S){if(S!==0){if(v0(J.CULL_FACE),S!==s)if(S===1)J.cullFace(J.BACK);else if(S===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else e0(J.CULL_FACE);s=S}function M(S){if(S!==w){if(c)J.lineWidth(S);w=S}}function g(S,X0,U0){if(S){if(v0(J.POLYGON_OFFSET_FILL),_!==X0||u!==U0)J.polygonOffset(X0,U0),_=X0,u=U0}else e0(J.POLYGON_OFFSET_FILL)}function Z0(S){if(S)v0(J.SCISSOR_TEST);else e0(J.SCISSOR_TEST)}function r(S){if(S===void 0)S=J.TEXTURE0+a-1;if(Q0!==S)J.activeTexture(S),Q0=S}function J0(S,X0,U0){if(U0===void 0)if(Q0===null)U0=J.TEXTURE0+a-1;else U0=Q0;let S0=y[U0];if(S0===void 0)S0={type:void 0,texture:void 0},y[U0]=S0;if(S0.type!==S||S0.texture!==X0){if(Q0!==U0)J.activeTexture(U0),Q0=U0;J.bindTexture(S,X0||c0[S]),S0.type=S,S0.texture=X0}}function $0(){let S=y[Q0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function K0(){try{J.compressedTexImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function F0(){try{J.compressedTexImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function B0(){try{J.texSubImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _0(){try{J.texSubImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function t(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function D5(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function n0(){try{J.texStorage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function b0(){try{J.texStorage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function D0(){try{J.texImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function N0(){try{J.texImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function s0(S){if(V0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),V0.copy(S)}function W5(S){if(k0.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),k0.copy(S)}function a0(S,X0){let U0=G.get(X0);if(U0===void 0)U0=new WeakMap,G.set(X0,U0);let S0=U0.get(S);if(S0===void 0)S0=J.getUniformBlockIndex(X0,S.name),U0.set(S,S0)}function Y5(S,X0){let S0=G.get(X0).get(S);if(q.get(X0)!==S0)J.uniformBlockBinding(X0,S0,S.__bindingPointIndex),q.set(X0,S0)}function Y0(){if(J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),W===!0)J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null);J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),E={},Q0=null,y={},N={},O=new WeakMap,R=[],D=null,F=!1,z=null,B=null,L=null,P=null,k=null,f=null,m=null,A=new g0(0,0,0),$=0,v=!1,n=null,s=null,w=null,_=null,u=null,V0.set(0,0,J.canvas.width,J.canvas.height),k0.set(0,0,J.canvas.width,J.canvas.height),X.reset(),U.reset(),V.reset()}return{buffers:{color:X,depth:U,stencil:V},enable:v0,disable:e0,bindFramebuffer:j,drawBuffers:v5,useProgram:r0,setBlending:y0,setMaterial:i0,setFlipSided:l0,setCullFace:C,setLineWidth:M,setPolygonOffset:g,setScissorTest:Z0,activeTexture:r,bindTexture:J0,unbindTexture:$0,compressedTexImage2D:K0,compressedTexImage3D:F0,texImage2D:D0,texImage3D:N0,updateUBOMapping:a0,uniformBlockBinding:Y5,texStorage2D:n0,texStorage3D:b0,texSubImage2D:B0,texSubImage3D:_0,compressedTexSubImage2D:t,compressedTexSubImage3D:D5,scissor:s0,viewport:W5,reset:Y0}}function hK(J,Z,Q,W,Y,H,K){let X=Y.isWebGL2,U=Z.has("WEBGL_multisampled_render_to_texture")?Z.get("WEBGL_multisampled_render_to_texture"):null,V=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),q=new WeakMap,G,E=new WeakMap,N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function O(C,M){return N?new OffscreenCanvas(C,M):B9("canvas")}function R(C,M,g,Z0){let r=1;if(C.width>Z0||C.height>Z0)r=Z0/Math.max(C.width,C.height);if(r<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let J0=M?L7:Math.floor,$0=J0(r*C.width),K0=J0(r*C.height);if(G===void 0)G=O($0,K0);let F0=g?O($0,K0):G;return F0.width=$0,F0.height=K0,F0.getContext("2d").drawImage(C,0,0,$0,K0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+$0+"x"+K0+")."),F0}else{if("data"in C)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+").");return C}return C}function D(C){return XJ(C.width)&&XJ(C.height)}function F(C){if(X)return!1;return C.wrapS!==1001||C.wrapT!==1001||C.minFilter!==1003&&C.minFilter!==1006}function z(C,M){return C.generateMipmaps&&M&&C.minFilter!==1003&&C.minFilter!==1006}function B(C){J.generateMipmap(C)}function L(C,M,g,Z0,r=!1){if(X===!1)return M;if(C!==null){if(J[C]!==void 0)return J[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J0=M;if(M===J.RED){if(g===J.FLOAT)J0=J.R32F;if(g===J.HALF_FLOAT)J0=J.R16F;if(g===J.UNSIGNED_BYTE)J0=J.R8}if(M===J.RED_INTEGER){if(g===J.UNSIGNED_BYTE)J0=J.R8UI;if(g===J.UNSIGNED_SHORT)J0=J.R16UI;if(g===J.UNSIGNED_INT)J0=J.R32UI;if(g===J.BYTE)J0=J.R8I;if(g===J.SHORT)J0=J.R16I;if(g===J.INT)J0=J.R32I}if(M===J.RG){if(g===J.FLOAT)J0=J.RG32F;if(g===J.HALF_FLOAT)J0=J.RG16F;if(g===J.UNSIGNED_BYTE)J0=J.RG8}if(M===J.RGBA){let $0=r?"linear":Q5.getTransfer(Z0);if(g===J.FLOAT)J0=J.RGBA32F;if(g===J.HALF_FLOAT)J0=J.RGBA16F;if(g===J.UNSIGNED_BYTE)J0=$0==="srgb"?J.SRGB8_ALPHA8:J.RGBA8;if(g===J.UNSIGNED_SHORT_4_4_4_4)J0=J.RGBA4;if(g===J.UNSIGNED_SHORT_5_5_5_1)J0=J.RGB5_A1}if(J0===J.R16F||J0===J.R32F||J0===J.RG16F||J0===J.RG32F||J0===J.RGBA16F||J0===J.RGBA32F)Z.get("EXT_color_buffer_float");return J0}function P(C,M,g){if(z(C,g)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006)return Math.log2(Math.max(M.width,M.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return M.mipmaps.length;else return 1}function k(C){if(C===1003||C===1004||C===1005)return J.NEAREST;return J.LINEAR}function f(C){let M=C.target;if(M.removeEventListener("dispose",f),A(M),M.isVideoTexture)q.delete(M)}function m(C){let M=C.target;M.removeEventListener("dispose",m),v(M)}function A(C){let M=W.get(C);if(M.__webglInit===void 0)return;let g=C.source,Z0=E.get(g);if(Z0){let r=Z0[M.__cacheKey];if(r.usedTimes--,r.usedTimes===0)$(C);if(Object.keys(Z0).length===0)E.delete(g)}W.remove(C)}function $(C){let M=W.get(C);J.deleteTexture(M.__webglTexture);let g=C.source,Z0=E.get(g);delete Z0[M.__cacheKey],K.memory.textures--}function v(C){let M=C.texture,g=W.get(C),Z0=W.get(M);if(Z0.__webglTexture!==void 0)J.deleteTexture(Z0.__webglTexture),K.memory.textures--;if(C.depthTexture)C.depthTexture.dispose();if(C.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(g.__webglFramebuffer[r]))for(let J0=0;J0<g.__webglFramebuffer[r].length;J0++)J.deleteFramebuffer(g.__webglFramebuffer[r][J0]);else J.deleteFramebuffer(g.__webglFramebuffer[r]);if(g.__webglDepthbuffer)J.deleteRenderbuffer(g.__webglDepthbuffer[r])}else{if(Array.isArray(g.__webglFramebuffer))for(let r=0;r<g.__webglFramebuffer.length;r++)J.deleteFramebuffer(g.__webglFramebuffer[r]);else J.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)J.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)J.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let r=0;r<g.__webglColorRenderbuffer.length;r++)if(g.__webglColorRenderbuffer[r])J.deleteRenderbuffer(g.__webglColorRenderbuffer[r])}if(g.__webglDepthRenderbuffer)J.deleteRenderbuffer(g.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let r=0,J0=M.length;r<J0;r++){let $0=W.get(M[r]);if($0.__webglTexture)J.deleteTexture($0.__webglTexture),K.memory.textures--;W.remove(M[r])}W.remove(M),W.remove(C)}let n=0;function s(){n=0}function w(){let C=n;if(C>=Y.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+Y.maxTextures);return n+=1,C}function _(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function u(C,M){let g=W.get(C);if(C.isVideoTexture)i0(C);if(C.isRenderTargetTexture===!1&&C.version>0&&g.__version!==C.version){let Z0=C.image;if(Z0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V0(g,C,M);return}}Q.bindTexture(J.TEXTURE_2D,g.__webglTexture,J.TEXTURE0+M)}function a(C,M){let g=W.get(C);if(C.version>0&&g.__version!==C.version){V0(g,C,M);return}Q.bindTexture(J.TEXTURE_2D_ARRAY,g.__webglTexture,J.TEXTURE0+M)}function c(C,M){let g=W.get(C);if(C.version>0&&g.__version!==C.version){V0(g,C,M);return}Q.bindTexture(J.TEXTURE_3D,g.__webglTexture,J.TEXTURE0+M)}function d(C,M){let g=W.get(C);if(C.version>0&&g.__version!==C.version){k0(g,C,M);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+M)}let e={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},Q0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},y={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function i(C,M,g){if(g){if(J.texParameteri(C,J.TEXTURE_WRAP_S,e[M.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,e[M.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,e[M.wrapR]);J.texParameteri(C,J.TEXTURE_MAG_FILTER,Q0[M.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,Q0[M.minFilter])}else{if(J.texParameteri(C,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(C,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,J.CLAMP_TO_EDGE);if(M.wrapS!==1001||M.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,k(M.magFilter)),J.texParameteri(C,J.TEXTURE_MIN_FILTER,k(M.minFilter)),M.minFilter!==1003&&M.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(M.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,y[M.compareFunction]);if(Z.has("EXT_texture_filter_anisotropic")===!0){let Z0=Z.get("EXT_texture_filter_anisotropic");if(M.magFilter===1003)return;if(M.minFilter!==1005&&M.minFilter!==1008)return;if(M.type===1015&&Z.has("OES_texture_float_linear")===!1)return;if(X===!1&&(M.type===1016&&Z.has("OES_texture_half_float_linear")===!1))return;if(M.anisotropy>1||W.get(M).__currentAnisotropy)J.texParameterf(C,Z0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,Y.getMaxAnisotropy())),W.get(M).__currentAnisotropy=M.anisotropy}}function W0(C,M){let g=!1;if(C.__webglInit===void 0)C.__webglInit=!0,M.addEventListener("dispose",f);let Z0=M.source,r=E.get(Z0);if(r===void 0)r={},E.set(Z0,r);let J0=_(M);if(J0!==C.__cacheKey){if(r[J0]===void 0)r[J0]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,g=!0;r[J0].usedTimes++;let $0=r[C.__cacheKey];if($0!==void 0){if(r[C.__cacheKey].usedTimes--,$0.usedTimes===0)$(M)}C.__cacheKey=J0,C.__webglTexture=r[J0].texture}return g}function V0(C,M,g){let Z0=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)Z0=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)Z0=J.TEXTURE_3D;let r=W0(C,M),J0=M.source;Q.bindTexture(Z0,C.__webglTexture,J.TEXTURE0+g);let $0=W.get(J0);if(J0.version!==$0.__version||r===!0){Q.activeTexture(J.TEXTURE0+g);let K0=Q5.getPrimaries(Q5.workingColorSpace),F0=M.colorSpace===""?null:Q5.getPrimaries(M.colorSpace),B0=M.colorSpace===""||K0===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,B0);let _0=F(M)&&D(M.image)===!1,t=R(M.image,_0,!1,Y.maxTextureSize);t=l0(M,t);let D5=D(t)||X,n0=H.convert(M.format,M.colorSpace),b0=H.convert(M.type),D0=L(M.internalFormat,n0,b0,M.colorSpace,M.isVideoTexture);i(Z0,M,D5);let N0,s0=M.mipmaps,W5=X&&M.isVideoTexture!==!0&&D0!==36196,a0=$0.__version===void 0||r===!0,Y5=P(M,t,D5);if(M.isDepthTexture){if(D0=J.DEPTH_COMPONENT,X)if(M.type===1015)D0=J.DEPTH_COMPONENT32F;else if(M.type===1014)D0=J.DEPTH_COMPONENT24;else if(M.type===1020)D0=J.DEPTH24_STENCIL8;else D0=J.DEPTH_COMPONENT16;else if(M.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(M.format===1026&&D0===J.DEPTH_COMPONENT){if(M.type!==1012&&M.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=1014,b0=H.convert(M.type)}if(M.format===1027&&D0===J.DEPTH_COMPONENT){if(D0=J.DEPTH_STENCIL,M.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=1020,b0=H.convert(M.type)}if(a0)if(W5)Q.texStorage2D(J.TEXTURE_2D,1,D0,t.width,t.height);else Q.texImage2D(J.TEXTURE_2D,0,D0,t.width,t.height,0,n0,b0,null)}else if(M.isDataTexture)if(s0.length>0&&D5){if(W5&&a0)Q.texStorage2D(J.TEXTURE_2D,Y5,D0,s0[0].width,s0[0].height);for(let Y0=0,S=s0.length;Y0<S;Y0++)if(N0=s0[Y0],W5)Q.texSubImage2D(J.TEXTURE_2D,Y0,0,0,N0.width,N0.height,n0,b0,N0.data);else Q.texImage2D(J.TEXTURE_2D,Y0,D0,N0.width,N0.height,0,n0,b0,N0.data);M.generateMipmaps=!1}else if(W5){if(a0)Q.texStorage2D(J.TEXTURE_2D,Y5,D0,t.width,t.height);Q.texSubImage2D(J.TEXTURE_2D,0,0,0,t.width,t.height,n0,b0,t.data)}else Q.texImage2D(J.TEXTURE_2D,0,D0,t.width,t.height,0,n0,b0,t.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(W5&&a0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,Y5,D0,s0[0].width,s0[0].height,t.depth);for(let Y0=0,S=s0.length;Y0<S;Y0++)if(N0=s0[Y0],M.format!==1023)if(n0!==null)if(W5)Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,Y0,0,0,0,N0.width,N0.height,t.depth,n0,N0.data,0,0);else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,Y0,D0,N0.width,N0.height,t.depth,0,N0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W5)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,Y0,0,0,0,N0.width,N0.height,t.depth,n0,b0,N0.data);else Q.texImage3D(J.TEXTURE_2D_ARRAY,Y0,D0,N0.width,N0.height,t.depth,0,n0,b0,N0.data)}else{if(W5&&a0)Q.texStorage2D(J.TEXTURE_2D,Y5,D0,s0[0].width,s0[0].height);for(let Y0=0,S=s0.length;Y0<S;Y0++)if(N0=s0[Y0],M.format!==1023)if(n0!==null)if(W5)Q.compressedTexSubImage2D(J.TEXTURE_2D,Y0,0,0,N0.width,N0.height,n0,N0.data);else Q.compressedTexImage2D(J.TEXTURE_2D,Y0,D0,N0.width,N0.height,0,N0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W5)Q.texSubImage2D(J.TEXTURE_2D,Y0,0,0,N0.width,N0.height,n0,b0,N0.data);else Q.texImage2D(J.TEXTURE_2D,Y0,D0,N0.width,N0.height,0,n0,b0,N0.data)}else if(M.isDataArrayTexture)if(W5){if(a0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,Y5,D0,t.width,t.height,t.depth);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,n0,b0,t.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,D0,t.width,t.height,t.depth,0,n0,b0,t.data);else if(M.isData3DTexture)if(W5){if(a0)Q.texStorage3D(J.TEXTURE_3D,Y5,D0,t.width,t.height,t.depth);Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,n0,b0,t.data)}else Q.texImage3D(J.TEXTURE_3D,0,D0,t.width,t.height,t.depth,0,n0,b0,t.data);else if(M.isFramebufferTexture){if(a0)if(W5)Q.texStorage2D(J.TEXTURE_2D,Y5,D0,t.width,t.height);else{let{width:Y0,height:S}=t;for(let X0=0;X0<Y5;X0++)Q.texImage2D(J.TEXTURE_2D,X0,D0,Y0,S,0,n0,b0,null),Y0>>=1,S>>=1}}else if(s0.length>0&&D5){if(W5&&a0)Q.texStorage2D(J.TEXTURE_2D,Y5,D0,s0[0].width,s0[0].height);for(let Y0=0,S=s0.length;Y0<S;Y0++)if(N0=s0[Y0],W5)Q.texSubImage2D(J.TEXTURE_2D,Y0,0,0,n0,b0,N0);else Q.texImage2D(J.TEXTURE_2D,Y0,D0,n0,b0,N0);M.generateMipmaps=!1}else if(W5){if(a0)Q.texStorage2D(J.TEXTURE_2D,Y5,D0,t.width,t.height);Q.texSubImage2D(J.TEXTURE_2D,0,0,0,n0,b0,t)}else Q.texImage2D(J.TEXTURE_2D,0,D0,n0,b0,t);if(z(M,D5))B(Z0);if($0.__version=J0.version,M.onUpdate)M.onUpdate(M)}C.__version=M.version}function k0(C,M,g){if(M.image.length!==6)return;let Z0=W0(C,M),r=M.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+g);let J0=W.get(r);if(r.version!==J0.__version||Z0===!0){Q.activeTexture(J.TEXTURE0+g);let $0=Q5.getPrimaries(Q5.workingColorSpace),K0=M.colorSpace===""?null:Q5.getPrimaries(M.colorSpace),F0=M.colorSpace===""||$0===K0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,F0);let B0=M.isCompressedTexture||M.image[0].isCompressedTexture,_0=M.image[0]&&M.image[0].isDataTexture,t=[];for(let Y0=0;Y0<6;Y0++){if(!B0&&!_0)t[Y0]=R(M.image[Y0],!1,!0,Y.maxCubemapSize);else t[Y0]=_0?M.image[Y0].image:M.image[Y0];t[Y0]=l0(M,t[Y0])}let D5=t[0],n0=D(D5)||X,b0=H.convert(M.format,M.colorSpace),D0=H.convert(M.type),N0=L(M.internalFormat,b0,D0,M.colorSpace),s0=X&&M.isVideoTexture!==!0,W5=J0.__version===void 0||Z0===!0,a0=P(M,D5,n0);i(J.TEXTURE_CUBE_MAP,M,n0);let Y5;if(B0){if(s0&&W5)Q.texStorage2D(J.TEXTURE_CUBE_MAP,a0,N0,D5.width,D5.height);for(let Y0=0;Y0<6;Y0++){Y5=t[Y0].mipmaps;for(let S=0;S<Y5.length;S++){let X0=Y5[S];if(M.format!==1023)if(b0!==null)if(s0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S,0,0,X0.width,X0.height,b0,X0.data);else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S,N0,X0.width,X0.height,0,X0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(s0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S,0,0,X0.width,X0.height,b0,D0,X0.data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S,N0,X0.width,X0.height,0,b0,D0,X0.data)}}}else{if(Y5=M.mipmaps,s0&&W5){if(Y5.length>0)a0++;Q.texStorage2D(J.TEXTURE_CUBE_MAP,a0,N0,t[0].width,t[0].height)}for(let Y0=0;Y0<6;Y0++)if(_0){if(s0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,t[Y0].width,t[Y0].height,b0,D0,t[Y0].data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,N0,t[Y0].width,t[Y0].height,0,b0,D0,t[Y0].data);for(let S=0;S<Y5.length;S++){let U0=Y5[S].image[Y0].image;if(s0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S+1,0,0,U0.width,U0.height,b0,D0,U0.data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S+1,N0,U0.width,U0.height,0,b0,D0,U0.data)}}else{if(s0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,b0,D0,t[Y0]);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,N0,b0,D0,t[Y0]);for(let S=0;S<Y5.length;S++){let X0=Y5[S];if(s0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S+1,0,0,b0,D0,X0.image[Y0]);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,S+1,N0,b0,D0,X0.image[Y0])}}}if(z(M,n0))B(J.TEXTURE_CUBE_MAP);if(J0.__version=r.version,M.onUpdate)M.onUpdate(M)}C.__version=M.version}function P0(C,M,g,Z0,r,J0){let $0=H.convert(g.format,g.colorSpace),K0=H.convert(g.type),F0=L(g.internalFormat,$0,K0,g.colorSpace);if(!W.get(M).__hasExternalTextures){let _0=Math.max(1,M.width>>J0),t=Math.max(1,M.height>>J0);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Q.texImage3D(r,J0,F0,_0,t,M.depth,0,$0,K0,null);else Q.texImage2D(r,J0,F0,_0,t,0,$0,K0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,C),y0(M))U.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,r,W.get(g).__webglTexture,0,T0(M));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,Z0,r,W.get(g).__webglTexture,J0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function c0(C,M,g){if(J.bindRenderbuffer(J.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let Z0=X===!0?J.DEPTH_COMPONENT24:J.DEPTH_COMPONENT16;if(g||y0(M)){let r=M.depthTexture;if(r&&r.isDepthTexture){if(r.type===1015)Z0=J.DEPTH_COMPONENT32F;else if(r.type===1014)Z0=J.DEPTH_COMPONENT24}let J0=T0(M);if(y0(M))U.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,J0,Z0,M.width,M.height);else J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,Z0,M.width,M.height)}else J.renderbufferStorage(J.RENDERBUFFER,Z0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){let Z0=T0(M);if(g&&y0(M)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,Z0,J.DEPTH24_STENCIL8,M.width,M.height);else if(y0(M))U.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Z0,J.DEPTH24_STENCIL8,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,J.DEPTH_STENCIL,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.RENDERBUFFER,C)}else{let Z0=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let r=0;r<Z0.length;r++){let J0=Z0[r],$0=H.convert(J0.format,J0.colorSpace),K0=H.convert(J0.type),F0=L(J0.internalFormat,$0,K0,J0.colorSpace),B0=T0(M);if(g&&y0(M)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,B0,F0,M.width,M.height);else if(y0(M))U.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,B0,F0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,F0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function v0(C,M){if(M&&M.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer(J.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!W.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;u(M.depthTexture,0);let Z0=W.get(M.depthTexture).__webglTexture,r=T0(M);if(M.depthTexture.format===1026)if(y0(M))U.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,Z0,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,Z0,0);else if(M.depthTexture.format===1027)if(y0(M))U.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,Z0,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,Z0,0);else throw Error("Unknown depthTexture format")}function e0(C){let M=W.get(C),g=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(g)throw Error("target.depthTexture not supported in Cube render targets");v0(M.__webglFramebuffer,C)}else if(g){M.__webglDepthbuffer=[];for(let Z0=0;Z0<6;Z0++)Q.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[Z0]),M.__webglDepthbuffer[Z0]=J.createRenderbuffer(),c0(M.__webglDepthbuffer[Z0],C,!1)}else Q.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=J.createRenderbuffer(),c0(M.__webglDepthbuffer,C,!1);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function j(C,M,g){let Z0=W.get(C);if(M!==void 0)P0(Z0.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(g!==void 0)e0(C)}function v5(C){let M=C.texture,g=W.get(C),Z0=W.get(M);if(C.addEventListener("dispose",m),C.isWebGLMultipleRenderTargets!==!0){if(Z0.__webglTexture===void 0)Z0.__webglTexture=J.createTexture();Z0.__version=M.version,K.memory.textures++}let r=C.isWebGLCubeRenderTarget===!0,J0=C.isWebGLMultipleRenderTargets===!0,$0=D(C)||X;if(r){g.__webglFramebuffer=[];for(let K0=0;K0<6;K0++)if(X&&M.mipmaps&&M.mipmaps.length>0){g.__webglFramebuffer[K0]=[];for(let F0=0;F0<M.mipmaps.length;F0++)g.__webglFramebuffer[K0][F0]=J.createFramebuffer()}else g.__webglFramebuffer[K0]=J.createFramebuffer()}else{if(X&&M.mipmaps&&M.mipmaps.length>0){g.__webglFramebuffer=[];for(let K0=0;K0<M.mipmaps.length;K0++)g.__webglFramebuffer[K0]=J.createFramebuffer()}else g.__webglFramebuffer=J.createFramebuffer();if(J0)if(Y.drawBuffers){let K0=C.texture;for(let F0=0,B0=K0.length;F0<B0;F0++){let _0=W.get(K0[F0]);if(_0.__webglTexture===void 0)_0.__webglTexture=J.createTexture(),K.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(X&&C.samples>0&&y0(C)===!1){let K0=J0?M:[M];g.__webglMultisampledFramebuffer=J.createFramebuffer(),g.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let F0=0;F0<K0.length;F0++){let B0=K0[F0];g.__webglColorRenderbuffer[F0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,g.__webglColorRenderbuffer[F0]);let _0=H.convert(B0.format,B0.colorSpace),t=H.convert(B0.type),D5=L(B0.internalFormat,_0,t,B0.colorSpace,C.isXRRenderTarget===!0),n0=T0(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,n0,D5,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+F0,J.RENDERBUFFER,g.__webglColorRenderbuffer[F0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)g.__webglDepthRenderbuffer=J.createRenderbuffer(),c0(g.__webglDepthRenderbuffer,C,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(r){Q.bindTexture(J.TEXTURE_CUBE_MAP,Z0.__webglTexture),i(J.TEXTURE_CUBE_MAP,M,$0);for(let K0=0;K0<6;K0++)if(X&&M.mipmaps&&M.mipmaps.length>0)for(let F0=0;F0<M.mipmaps.length;F0++)P0(g.__webglFramebuffer[K0][F0],C,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,F0);else P0(g.__webglFramebuffer[K0],C,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0);if(z(M,$0))B(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(J0){let K0=C.texture;for(let F0=0,B0=K0.length;F0<B0;F0++){let _0=K0[F0],t=W.get(_0);if(Q.bindTexture(J.TEXTURE_2D,t.__webglTexture),i(J.TEXTURE_2D,_0,$0),P0(g.__webglFramebuffer,C,_0,J.COLOR_ATTACHMENT0+F0,J.TEXTURE_2D,0),z(_0,$0))B(J.TEXTURE_2D)}Q.unbindTexture()}else{let K0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)if(X)K0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(Q.bindTexture(K0,Z0.__webglTexture),i(K0,M,$0),X&&M.mipmaps&&M.mipmaps.length>0)for(let F0=0;F0<M.mipmaps.length;F0++)P0(g.__webglFramebuffer[F0],C,M,J.COLOR_ATTACHMENT0,K0,F0);else P0(g.__webglFramebuffer,C,M,J.COLOR_ATTACHMENT0,K0,0);if(z(M,$0))B(K0);Q.unbindTexture()}if(C.depthBuffer)e0(C)}function r0(C){let M=D(C)||X,g=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Z0=0,r=g.length;Z0<r;Z0++){let J0=g[Z0];if(z(J0,M)){let $0=C.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,K0=W.get(J0).__webglTexture;Q.bindTexture($0,K0),B($0),Q.unbindTexture()}}}function A0(C){if(X&&C.samples>0&&y0(C)===!1){let M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],g=C.width,Z0=C.height,r=J.COLOR_BUFFER_BIT,J0=[],$0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=W.get(C),F0=C.isWebGLMultipleRenderTargets===!0;if(F0)for(let B0=0;B0<M.length;B0++)Q.bindFramebuffer(J.FRAMEBUFFER,K0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,K0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,K0.__webglMultisampledFramebuffer),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,K0.__webglFramebuffer);for(let B0=0;B0<M.length;B0++){if(J0.push(J.COLOR_ATTACHMENT0+B0),C.depthBuffer)J0.push($0);let _0=K0.__ignoreDepthValues!==void 0?K0.__ignoreDepthValues:!1;if(_0===!1){if(C.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(F0)J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,K0.__webglColorRenderbuffer[B0]);if(_0===!0)J.invalidateFramebuffer(J.READ_FRAMEBUFFER,[$0]),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[$0]);if(F0){let t=W.get(M[B0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,t,0)}if(J.blitFramebuffer(0,0,g,Z0,0,0,g,Z0,r,J.NEAREST),V)J.invalidateFramebuffer(J.READ_FRAMEBUFFER,J0)}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),F0)for(let B0=0;B0<M.length;B0++){Q.bindFramebuffer(J.FRAMEBUFFER,K0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.RENDERBUFFER,K0.__webglColorRenderbuffer[B0]);let _0=W.get(M[B0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,K0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.TEXTURE_2D,_0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,K0.__webglMultisampledFramebuffer)}}function T0(C){return Math.min(Y.maxSamples,C.samples)}function y0(C){let M=W.get(C);return X&&C.samples>0&&Z.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function i0(C){let M=K.render.frame;if(q.get(C)!==M)q.set(C,M),C.update()}function l0(C,M){let{colorSpace:g,format:Z0,type:r}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===1035)return M;if(g!=="srgb-linear"&&g!=="")if(Q5.getTransfer(g)==="srgb"){if(X===!1)if(Z.has("EXT_sRGB")===!0&&Z0===1023)C.format=1035,C.minFilter=1006,C.generateMipmaps=!1;else M=S7.sRGBToLinear(M);else if(Z0!==1023||r!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",g);return M}this.allocateTextureUnit=w,this.resetTextureUnits=s,this.setTexture2D=u,this.setTexture2DArray=a,this.setTexture3D=c,this.setTextureCube=d,this.rebindTextures=j,this.setupRenderTarget=v5,this.updateRenderTargetMipmap=r0,this.updateMultisampleRenderTarget=A0,this.setupDepthRenderbuffer=e0,this.setupFrameBufferTexture=P0,this.useMultisampledRTT=y0}function jK(J,Z,Q){let W=Q.isWebGL2;function Y(H,K=""){let X,U=Q5.getTransfer(K);if(H===1009)return J.UNSIGNED_BYTE;if(H===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(H===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(H===1010)return J.BYTE;if(H===1011)return J.SHORT;if(H===1012)return J.UNSIGNED_SHORT;if(H===1013)return J.INT;if(H===1014)return J.UNSIGNED_INT;if(H===1015)return J.FLOAT;if(H===1016){if(W)return J.HALF_FLOAT;if(X=Z.get("OES_texture_half_float"),X!==null)return X.HALF_FLOAT_OES;else return null}if(H===1021)return J.ALPHA;if(H===1023)return J.RGBA;if(H===1024)return J.LUMINANCE;if(H===1025)return J.LUMINANCE_ALPHA;if(H===1026)return J.DEPTH_COMPONENT;if(H===1027)return J.DEPTH_STENCIL;if(H===1035)if(X=Z.get("EXT_sRGB"),X!==null)return X.SRGB_ALPHA_EXT;else return null;if(H===1028)return J.RED;if(H===1029)return J.RED_INTEGER;if(H===1030)return J.RG;if(H===1031)return J.RG_INTEGER;if(H===1033)return J.RGBA_INTEGER;if(H===33776||H===33777||H===33778||H===33779)if(U==="srgb")if(X=Z.get("WEBGL_compressed_texture_s3tc_srgb"),X!==null){if(H===33776)return X.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(H===33777)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(H===33778)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(H===33779)return X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(X=Z.get("WEBGL_compressed_texture_s3tc"),X!==null){if(H===33776)return X.COMPRESSED_RGB_S3TC_DXT1_EXT;if(H===33777)return X.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(H===33778)return X.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(H===33779)return X.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(H===35840||H===35841||H===35842||H===35843)if(X=Z.get("WEBGL_compressed_texture_pvrtc"),X!==null){if(H===35840)return X.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(H===35841)return X.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(H===35842)return X.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(H===35843)return X.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(H===36196)if(X=Z.get("WEBGL_compressed_texture_etc1"),X!==null)return X.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(H===37492||H===37496)if(X=Z.get("WEBGL_compressed_texture_etc"),X!==null){if(H===37492)return U==="srgb"?X.COMPRESSED_SRGB8_ETC2:X.COMPRESSED_RGB8_ETC2;if(H===37496)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:X.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(H===37808||H===37809||H===37810||H===37811||H===37812||H===37813||H===37814||H===37815||H===37816||H===37817||H===37818||H===37819||H===37820||H===37821)if(X=Z.get("WEBGL_compressed_texture_astc"),X!==null){if(H===37808)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:X.COMPRESSED_RGBA_ASTC_4x4_KHR;if(H===37809)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:X.COMPRESSED_RGBA_ASTC_5x4_KHR;if(H===37810)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:X.COMPRESSED_RGBA_ASTC_5x5_KHR;if(H===37811)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:X.COMPRESSED_RGBA_ASTC_6x5_KHR;if(H===37812)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:X.COMPRESSED_RGBA_ASTC_6x6_KHR;if(H===37813)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:X.COMPRESSED_RGBA_ASTC_8x5_KHR;if(H===37814)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:X.COMPRESSED_RGBA_ASTC_8x6_KHR;if(H===37815)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:X.COMPRESSED_RGBA_ASTC_8x8_KHR;if(H===37816)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:X.COMPRESSED_RGBA_ASTC_10x5_KHR;if(H===37817)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:X.COMPRESSED_RGBA_ASTC_10x6_KHR;if(H===37818)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:X.COMPRESSED_RGBA_ASTC_10x8_KHR;if(H===37819)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:X.COMPRESSED_RGBA_ASTC_10x10_KHR;if(H===37820)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:X.COMPRESSED_RGBA_ASTC_12x10_KHR;if(H===37821)return U==="srgb"?X.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:X.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(H===36492||H===36494||H===36495)if(X=Z.get("EXT_texture_compression_bptc"),X!==null){if(H===36492)return U==="srgb"?X.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:X.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(H===36494)return X.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(H===36495)return X.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(H===36283||H===36284||H===36285||H===36286)if(X=Z.get("EXT_texture_compression_rgtc"),X!==null){if(H===36492)return X.COMPRESSED_RED_RGTC1_EXT;if(H===36284)return X.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(H===36285)return X.COMPRESSED_RED_GREEN_RGTC2_EXT;if(H===36286)return X.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(H===1020){if(W)return J.UNSIGNED_INT_24_8;if(X=Z.get("WEBGL_depth_texture"),X!==null)return X.UNSIGNED_INT_24_8_WEBGL;else return null}return J[H]!==void 0?J[H]:null}return{convert:Y}}class MZ extends h5{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class q5 extends k5{constructor(){super();this.isGroup=!0,this.type="Group"}}var yK={type:"move"};class z9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new q5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new q5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new q5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Z=this._hand;if(Z)for(let Q of J.hand.values())this._getHandJoint(Z,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Z,Q){let W=null,Y=null,H=null,K=this._targetRay,X=this._grip,U=this._hand;if(J&&Z.session.visibilityState!=="visible-blurred"){if(U&&J.hand){H=!0;for(let O of J.hand.values()){let R=Z.getJointPose(O,Q),D=this._getHandJoint(U,O);if(R!==null)D.matrix.fromArray(R.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=R.radius;D.visible=R!==null}let V=U.joints["index-finger-tip"],q=U.joints["thumb-tip"],G=V.position.distanceTo(q.position),E=0.02,N=0.005;if(U.inputState.pinching&&G>E+N)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&G<=E-N)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(Y=Z.getPose(J.gripSpace,Q),Y!==null){if(X.matrix.fromArray(Y.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Y.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Y.linearVelocity);else X.hasLinearVelocity=!1;if(Y.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Y.angularVelocity);else X.hasAngularVelocity=!1}}if(K!==null){if(W=Z.getPose(J.targetRaySpace,Q),W===null&&Y!==null)W=Y;if(W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(yK)}}}if(K!==null)K.visible=W!==null;if(X!==null)X.visible=Y!==null;if(U!==null)U.visible=H!==null;return this}_getHandJoint(J,Z){if(J.joints[Z.jointName]===void 0){let Q=new q5;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[Z.jointName]=Q,J.add(Q)}return J.joints[Z.jointName]}}class zZ extends _6{constructor(J,Z){super();let Q=this,W=null,Y=1,H=null,K="local-floor",X=1,U=null,V=null,q=null,G=null,E=null,N=null,O=Z.getContextAttributes(),R=null,D=null,F=[],z=[],B=new q0,L=null,P=new h5;P.layers.enable(1),P.viewport=new K5;let k=new h5;k.layers.enable(2),k.viewport=new K5;let f=[P,k],m=new MZ;m.layers.enable(1),m.layers.enable(2);let A=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let i=F[y];if(i===void 0)i=new z9,F[y]=i;return i.getTargetRaySpace()},this.getControllerGrip=function(y){let i=F[y];if(i===void 0)i=new z9,F[y]=i;return i.getGripSpace()},this.getHand=function(y){let i=F[y];if(i===void 0)i=new z9,F[y]=i;return i.getHandSpace()};function v(y){let i=z.indexOf(y.inputSource);if(i===-1)return;let W0=F[i];if(W0!==void 0)W0.update(y.inputSource,y.frame,U||H),W0.dispatchEvent({type:y.type,data:y.inputSource})}function n(){W.removeEventListener("select",v),W.removeEventListener("selectstart",v),W.removeEventListener("selectend",v),W.removeEventListener("squeeze",v),W.removeEventListener("squeezestart",v),W.removeEventListener("squeezeend",v),W.removeEventListener("end",n),W.removeEventListener("inputsourceschange",s);for(let y=0;y<F.length;y++){let i=z[y];if(i===null)continue;z[y]=null,F[y].disconnect(i)}A=null,$=null,J.setRenderTarget(R),E=null,G=null,q=null,W=null,D=null,Q0.stop(),Q.isPresenting=!1,J.setPixelRatio(L),J.setSize(B.width,B.height,!1),Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){if(Y=y,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){if(K=y,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||H},this.setReferenceSpace=function(y){U=y},this.getBaseLayer=function(){return G!==null?G:E},this.getBinding=function(){return q},this.getFrame=function(){return N},this.getSession=function(){return W},this.setSession=async function(y){if(W=y,W!==null){if(R=J.getRenderTarget(),W.addEventListener("select",v),W.addEventListener("selectstart",v),W.addEventListener("selectend",v),W.addEventListener("squeeze",v),W.addEventListener("squeezestart",v),W.addEventListener("squeezeend",v),W.addEventListener("end",n),W.addEventListener("inputsourceschange",s),O.xrCompatible!==!0)await Z.makeXRCompatible();if(L=J.getPixelRatio(),J.getSize(B),W.renderState.layers===void 0||J.capabilities.isWebGL2===!1){let i={antialias:W.renderState.layers===void 0?O.antialias:!0,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Y};E=new XRWebGLLayer(W,Z,i),W.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new k6(E.framebufferWidth,E.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil})}else{let i=null,W0=null,V0=null;if(O.depth)V0=O.stencil?Z.DEPTH24_STENCIL8:Z.DEPTH_COMPONENT24,i=O.stencil?1027:1026,W0=O.stencil?1020:1014;let k0={colorFormat:Z.RGBA8,depthFormat:V0,scaleFactor:Y};q=new XRWebGLBinding(W,Z),G=q.createProjectionLayer(k0),W.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),D=new k6(G.textureWidth,G.textureHeight,{format:1023,type:1009,depthTexture:new p7(G.textureWidth,G.textureHeight,W0,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0});let P0=J.properties.get(D);P0.__ignoreDepthValues=G.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(X),U=null,H=await W.requestReferenceSpace(K),Q0.setContext(W),Q0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode};function s(y){for(let i=0;i<y.removed.length;i++){let W0=y.removed[i],V0=z.indexOf(W0);if(V0>=0)z[V0]=null,F[V0].disconnect(W0)}for(let i=0;i<y.added.length;i++){let W0=y.added[i],V0=z.indexOf(W0);if(V0===-1){for(let P0=0;P0<F.length;P0++)if(P0>=z.length){z.push(W0),V0=P0;break}else if(z[P0]===null){z[P0]=W0,V0=P0;break}if(V0===-1)break}let k0=F[V0];if(k0)k0.connect(W0)}}let w=new T,_=new T;function u(y,i,W0){w.setFromMatrixPosition(i.matrixWorld),_.setFromMatrixPosition(W0.matrixWorld);let V0=w.distanceTo(_),k0=i.projectionMatrix.elements,P0=W0.projectionMatrix.elements,c0=k0[14]/(k0[10]-1),v0=k0[14]/(k0[10]+1),e0=(k0[9]+1)/k0[5],j=(k0[9]-1)/k0[5],v5=(k0[8]-1)/k0[0],r0=(P0[8]+1)/P0[0],A0=c0*v5,T0=c0*r0,y0=V0/(-v5+r0),i0=y0*-v5;i.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(i0),y.translateZ(y0),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert();let l0=c0+y0,C=v0+y0,M=A0-i0,g=T0+(V0-i0),Z0=e0*v0/C*l0,r=j*v0/C*l0;y.projectionMatrix.makePerspective(M,g,Z0,r,l0,C),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}function a(y,i){if(i===null)y.matrixWorld.copy(y.matrix);else y.matrixWorld.multiplyMatrices(i.matrixWorld,y.matrix);y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(W===null)return;if(m.near=k.near=P.near=y.near,m.far=k.far=P.far=y.far,A!==m.near||$!==m.far)W.updateRenderState({depthNear:m.near,depthFar:m.far}),A=m.near,$=m.far;let i=y.parent,W0=m.cameras;a(m,i);for(let V0=0;V0<W0.length;V0++)a(W0[V0],i);if(W0.length===2)u(m,P,k);else m.projectionMatrix.copy(P.projectionMatrix);c(y,m,i)};function c(y,i,W0){if(W0===null)y.matrix.copy(i.matrixWorld);else y.matrix.copy(W0.matrixWorld),y.matrix.invert(),y.matrix.multiply(i.matrixWorld);if(y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(i.projectionMatrix),y.projectionMatrixInverse.copy(i.projectionMatrixInverse),y.isPerspectiveCamera)y.fov=k7*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1}this.getCamera=function(){return m},this.getFoveation=function(){if(G===null&&E===null)return;return X},this.setFoveation=function(y){if(X=y,G!==null)G.fixedFoveation=y;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=y};let d=null;function e(y,i){if(V=i.getViewerPose(U||H),N=i,V!==null){let W0=V.views;if(E!==null)J.setRenderTargetFramebuffer(D,E.framebuffer),J.setRenderTarget(D);let V0=!1;if(W0.length!==m.cameras.length)m.cameras.length=0,V0=!0;for(let k0=0;k0<W0.length;k0++){let P0=W0[k0],c0=null;if(E!==null)c0=E.getViewport(P0);else{let e0=q.getViewSubImage(G,P0);if(c0=e0.viewport,k0===0)J.setRenderTargetTextures(D,e0.colorTexture,G.ignoreDepthValues?void 0:e0.depthStencilTexture),J.setRenderTarget(D)}let v0=f[k0];if(v0===void 0)v0=new h5,v0.layers.enable(k0),v0.viewport=new K5,f[k0]=v0;if(v0.matrix.fromArray(P0.transform.matrix),v0.matrix.decompose(v0.position,v0.quaternion,v0.scale),v0.projectionMatrix.fromArray(P0.projectionMatrix),v0.projectionMatrixInverse.copy(v0.projectionMatrix).invert(),v0.viewport.set(c0.x,c0.y,c0.width,c0.height),k0===0)m.matrix.copy(v0.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale);if(V0===!0)m.cameras.push(v0)}}for(let W0=0;W0<F.length;W0++){let V0=z[W0],k0=F[W0];if(V0!==null&&k0!==void 0)k0.update(V0,i,U||H)}if(d)d(y,i);if(i.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:i});N=null}let Q0=new HZ;Q0.setAnimationLoop(e),this.setAnimationLoop=function(y){d=y},this.dispose=function(){}}}function _K(J,Z){function Q(D,F){if(D.matrixAutoUpdate===!0)D.updateMatrix();F.value.copy(D.matrix)}function W(D,F){if(F.color.getRGB(D.fogColor.value,QZ(J)),F.isFog)D.fogNear.value=F.near,D.fogFar.value=F.far;else if(F.isFogExp2)D.fogDensity.value=F.density}function Y(D,F,z,B,L){if(F.isMeshBasicMaterial)H(D,F);else if(F.isMeshLambertMaterial)H(D,F);else if(F.isMeshToonMaterial)H(D,F),G(D,F);else if(F.isMeshPhongMaterial)H(D,F),q(D,F);else if(F.isMeshStandardMaterial){if(H(D,F),E(D,F),F.isMeshPhysicalMaterial)N(D,F,L)}else if(F.isMeshMatcapMaterial)H(D,F),O(D,F);else if(F.isMeshDepthMaterial)H(D,F);else if(F.isMeshDistanceMaterial)H(D,F),R(D,F);else if(F.isMeshNormalMaterial)H(D,F);else if(F.isLineBasicMaterial){if(K(D,F),F.isLineDashedMaterial)X(D,F)}else if(F.isPointsMaterial)U(D,F,z,B);else if(F.isSpriteMaterial)V(D,F);else if(F.isShadowMaterial)D.color.value.copy(F.color),D.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function H(D,F){if(D.opacity.value=F.opacity,F.color)D.diffuse.value.copy(F.color);if(F.emissive)D.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)D.map.value=F.map,Q(F.map,D.mapTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,Q(F.alphaMap,D.alphaMapTransform);if(F.bumpMap){if(D.bumpMap.value=F.bumpMap,Q(F.bumpMap,D.bumpMapTransform),D.bumpScale.value=F.bumpScale,F.side===1)D.bumpScale.value*=-1}if(F.normalMap){if(D.normalMap.value=F.normalMap,Q(F.normalMap,D.normalMapTransform),D.normalScale.value.copy(F.normalScale),F.side===1)D.normalScale.value.negate()}if(F.displacementMap)D.displacementMap.value=F.displacementMap,Q(F.displacementMap,D.displacementMapTransform),D.displacementScale.value=F.displacementScale,D.displacementBias.value=F.displacementBias;if(F.emissiveMap)D.emissiveMap.value=F.emissiveMap,Q(F.emissiveMap,D.emissiveMapTransform);if(F.specularMap)D.specularMap.value=F.specularMap,Q(F.specularMap,D.specularMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest;let z=Z.get(F).envMap;if(z)D.envMap.value=z,D.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,D.reflectivity.value=F.reflectivity,D.ior.value=F.ior,D.refractionRatio.value=F.refractionRatio;if(F.lightMap){D.lightMap.value=F.lightMap;let B=J._useLegacyLights===!0?Math.PI:1;D.lightMapIntensity.value=F.lightMapIntensity*B,Q(F.lightMap,D.lightMapTransform)}if(F.aoMap)D.aoMap.value=F.aoMap,D.aoMapIntensity.value=F.aoMapIntensity,Q(F.aoMap,D.aoMapTransform)}function K(D,F){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,F.map)D.map.value=F.map,Q(F.map,D.mapTransform)}function X(D,F){D.dashSize.value=F.dashSize,D.totalSize.value=F.dashSize+F.gapSize,D.scale.value=F.scale}function U(D,F,z,B){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,D.size.value=F.size*z,D.scale.value=B*0.5,F.map)D.map.value=F.map,Q(F.map,D.uvTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,Q(F.alphaMap,D.alphaMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest}function V(D,F){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,D.rotation.value=F.rotation,F.map)D.map.value=F.map,Q(F.map,D.mapTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,Q(F.alphaMap,D.alphaMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest}function q(D,F){D.specular.value.copy(F.specular),D.shininess.value=Math.max(F.shininess,0.0001)}function G(D,F){if(F.gradientMap)D.gradientMap.value=F.gradientMap}function E(D,F){if(D.metalness.value=F.metalness,F.metalnessMap)D.metalnessMap.value=F.metalnessMap,Q(F.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=F.roughness,F.roughnessMap)D.roughnessMap.value=F.roughnessMap,Q(F.roughnessMap,D.roughnessMapTransform);if(Z.get(F).envMap)D.envMapIntensity.value=F.envMapIntensity}function N(D,F,z){if(D.ior.value=F.ior,F.sheen>0){if(D.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),D.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)D.sheenColorMap.value=F.sheenColorMap,Q(F.sheenColorMap,D.sheenColorMapTransform);if(F.sheenRoughnessMap)D.sheenRoughnessMap.value=F.sheenRoughnessMap,Q(F.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(D.clearcoat.value=F.clearcoat,D.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)D.clearcoatMap.value=F.clearcoatMap,Q(F.clearcoatMap,D.clearcoatMapTransform);if(F.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,Q(F.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(D.clearcoatNormalMap.value=F.clearcoatNormalMap,Q(F.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===1)D.clearcoatNormalScale.value.negate()}}if(F.iridescence>0){if(D.iridescence.value=F.iridescence,D.iridescenceIOR.value=F.iridescenceIOR,D.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)D.iridescenceMap.value=F.iridescenceMap,Q(F.iridescenceMap,D.iridescenceMapTransform);if(F.iridescenceThicknessMap)D.iridescenceThicknessMap.value=F.iridescenceThicknessMap,Q(F.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(F.transmission>0){if(D.transmission.value=F.transmission,D.transmissionSamplerMap.value=z.texture,D.transmissionSamplerSize.value.set(z.width,z.height),F.transmissionMap)D.transmissionMap.value=F.transmissionMap,Q(F.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=F.thickness,F.thicknessMap)D.thicknessMap.value=F.thicknessMap,Q(F.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=F.attenuationDistance,D.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(D.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)D.anisotropyMap.value=F.anisotropyMap,Q(F.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=F.specularIntensity,D.specularColor.value.copy(F.specularColor),F.specularColorMap)D.specularColorMap.value=F.specularColorMap,Q(F.specularColorMap,D.specularColorMapTransform);if(F.specularIntensityMap)D.specularIntensityMap.value=F.specularIntensityMap,Q(F.specularIntensityMap,D.specularIntensityMapTransform)}function O(D,F){if(F.matcap)D.matcap.value=F.matcap}function R(D,F){let z=Z.get(F).light;D.referencePosition.value.setFromMatrixPosition(z.matrixWorld),D.nearDistance.value=z.shadow.camera.near,D.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Y}}function xK(J,Z,Q,W){let Y={},H={},K=[],X=Q.isWebGL2?J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS):0;function U(z,B){let L=B.program;W.uniformBlockBinding(z,L)}function V(z,B){let L=Y[z.id];if(L===void 0)O(z),L=q(z),Y[z.id]=L,z.addEventListener("dispose",D);let P=B.program;W.updateUBOMapping(z,P);let k=Z.render.frame;if(H[z.id]!==k)E(z),H[z.id]=k}function q(z){let B=G();z.__bindingPointIndex=B;let L=J.createBuffer(),P=z.__size,k=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,L),J.bufferData(J.UNIFORM_BUFFER,P,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,B,L),L}function G(){for(let z=0;z<X;z++)if(K.indexOf(z)===-1)return K.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(z){let B=Y[z.id],L=z.uniforms,P=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,B);for(let k=0,f=L.length;k<f;k++){let m=Array.isArray(L[k])?L[k]:[L[k]];for(let A=0,$=m.length;A<$;A++){let v=m[A];if(N(v,k,A,P)===!0){let n=v.__offset,s=Array.isArray(v.value)?v.value:[v.value],w=0;for(let _=0;_<s.length;_++){let u=s[_],a=R(u);if(typeof u==="number"||typeof u==="boolean")v.__data[0]=u,J.bufferSubData(J.UNIFORM_BUFFER,n+w,v.__data);else if(u.isMatrix3)v.__data[0]=u.elements[0],v.__data[1]=u.elements[1],v.__data[2]=u.elements[2],v.__data[3]=0,v.__data[4]=u.elements[3],v.__data[5]=u.elements[4],v.__data[6]=u.elements[5],v.__data[7]=0,v.__data[8]=u.elements[6],v.__data[9]=u.elements[7],v.__data[10]=u.elements[8],v.__data[11]=0;else u.toArray(v.__data,w),w+=a.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,n,v.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(z,B,L,P){let k=z.value,f=B+"_"+L;if(P[f]===void 0){if(typeof k==="number"||typeof k==="boolean")P[f]=k;else P[f]=k.clone();return!0}else{let m=P[f];if(typeof k==="number"||typeof k==="boolean"){if(m!==k)return P[f]=k,!0}else if(m.equals(k)===!1)return m.copy(k),!0}return!1}function O(z){let B=z.uniforms,L=0,P=16;for(let f=0,m=B.length;f<m;f++){let A=Array.isArray(B[f])?B[f]:[B[f]];for(let $=0,v=A.length;$<v;$++){let n=A[$],s=Array.isArray(n.value)?n.value:[n.value];for(let w=0,_=s.length;w<_;w++){let u=s[w],a=R(u),c=L%P;if(c!==0&&P-c<a.boundary)L+=P-c;n.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),n.__offset=L,L+=a.storage}}}let k=L%P;if(k>0)L+=P-k;return z.__size=L,z.__cache={},this}function R(z){let B={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")B.boundary=4,B.storage=4;else if(z.isVector2)B.boundary=8,B.storage=8;else if(z.isVector3||z.isColor)B.boundary=16,B.storage=12;else if(z.isVector4)B.boundary=16,B.storage=16;else if(z.isMatrix3)B.boundary=48,B.storage=48;else if(z.isMatrix4)B.boundary=64,B.storage=64;else if(z.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z);return B}function D(z){let B=z.target;B.removeEventListener("dispose",D);let L=K.indexOf(B.__bindingPointIndex);K.splice(L,1),J.deleteBuffer(Y[B.id]),delete Y[B.id],delete H[B.id]}function F(){for(let z in Y)J.deleteBuffer(Y[z]);K=[],Y={},H={}}return{bind:U,update:V,dispose:F}}class w9{constructor(J={}){let{canvas:Z=sQ(),context:Q=null,depth:W=!0,stencil:Y=!0,alpha:H=!1,antialias:K=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:U=!1,powerPreference:V="default",failIfMajorPerformanceCaveat:q=!1}=J;this.isWebGLRenderer=!0;let G;if(Q!==null)G=Q.getContextAttributes().alpha;else G=H;let E=new Uint32Array(4),N=new Int32Array(4),O=null,R=null,D=[],F=[];this.domElement=Z,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let z=this,B=!1,L=0,P=0,k=null,f=-1,m=null,A=new K5,$=new K5,v=null,n=new g0(0),s=0,w=Z.width,_=Z.height,u=1,a=null,c=null,d=new K5(0,0,w,_),e=new K5(0,0,w,_),Q0=!1,y=new k9,i=!1,W0=!1,V0=null,k0=new F5,P0=new q0,c0=new T,v0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function e0(){return k===null?u:1}let j=Q;function v5(I,h){for(let p=0;p<I.length;p++){let l=I[p],x=Z.getContext(l,h);if(x!==null)return x}return null}try{let I={alpha:!0,depth:W,stencil:Y,antialias:K,premultipliedAlpha:X,preserveDrawingBuffer:U,powerPreference:V,failIfMajorPerformanceCaveat:q};if("setAttribute"in Z)Z.setAttribute("data-engine","three.js r160");if(Z.addEventListener("webglcontextlost",Y5,!1),Z.addEventListener("webglcontextrestored",Y0,!1),Z.addEventListener("webglcontextcreationerror",S,!1),j===null){let h=["webgl2","webgl","experimental-webgl"];if(z.isWebGL1Renderer===!0)h.shift();if(j=v5(h,I),j===null)if(v5(h))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(j.getShaderPrecisionFormat===void 0)j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let r0,A0,T0,y0,i0,l0,C,M,g,Z0,r,J0,$0,K0,F0,B0,_0,t,D5,n0,b0,D0,N0,s0;function W5(){r0=new WX(j),A0=new aH(j,r0,J),r0.init(A0),D0=new jK(j,r0,A0),T0=new bK(j,r0,A0),y0=new XX(j),i0=new AK,l0=new hK(j,r0,T0,i0,A0,D0,y0),C=new eH(z),M=new QX(z),g=new DW(j,A0),N0=new oH(j,r0,g,A0),Z0=new YX(j,g,y0,N0),r=new GX(j,Z0,g,y0),D5=new VX(j,A0,l0),B0=new tH(i0),J0=new BK(z,C,M,r0,A0,N0,B0),$0=new _K(z,i0),K0=new $K,F0=new TK(r0,A0),t=new iH(z,C,M,T0,r,G,X),_0=new fK(z,r,A0),s0=new xK(j,y0,A0,T0),n0=new rH(j,r0,y0,A0),b0=new HX(j,r0,y0,A0),y0.programs=J0.programs,z.capabilities=A0,z.extensions=r0,z.properties=i0,z.renderLists=K0,z.shadowMap=_0,z.state=T0,z.info=y0}W5();let a0=new zZ(z,j);this.xr=a0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let I=r0.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=r0.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return u},this.setPixelRatio=function(I){if(I===void 0)return;u=I,this.setSize(w,_,!1)},this.getSize=function(I){return I.set(w,_)},this.setSize=function(I,h,p=!0){if(a0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(w=I,_=h,Z.width=Math.floor(I*u),Z.height=Math.floor(h*u),p===!0)Z.style.width=I+"px",Z.style.height=h+"px";this.setViewport(0,0,I,h)},this.getDrawingBufferSize=function(I){return I.set(w*u,_*u).floor()},this.setDrawingBufferSize=function(I,h,p){w=I,_=h,u=p,Z.width=Math.floor(I*p),Z.height=Math.floor(h*p),this.setViewport(0,0,I,h)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(d)},this.setViewport=function(I,h,p,l){if(I.isVector4)d.set(I.x,I.y,I.z,I.w);else d.set(I,h,p,l);T0.viewport(A.copy(d).multiplyScalar(u).floor())},this.getScissor=function(I){return I.copy(e)},this.setScissor=function(I,h,p,l){if(I.isVector4)e.set(I.x,I.y,I.z,I.w);else e.set(I,h,p,l);T0.scissor($.copy(e).multiplyScalar(u).floor())},this.getScissorTest=function(){return Q0},this.setScissorTest=function(I){T0.setScissorTest(Q0=I)},this.setOpaqueSort=function(I){a=I},this.setTransparentSort=function(I){c=I},this.getClearColor=function(I){return I.copy(t.getClearColor())},this.setClearColor=function(){t.setClearColor.apply(t,arguments)},this.getClearAlpha=function(){return t.getClearAlpha()},this.setClearAlpha=function(){t.setClearAlpha.apply(t,arguments)},this.clear=function(I=!0,h=!0,p=!0){let l=0;if(I){let x=!1;if(k!==null){let G0=k.texture.format;x=G0===1033||G0===1031||G0===1029}if(x){let G0=k.texture.type,O0=G0===1009||G0===1014||G0===1012||G0===1020||G0===1017||G0===1018,L0=t.getClearColor(),f0=t.getClearAlpha(),m0=L0.r,h0=L0.g,j0=L0.b;if(O0)E[0]=m0,E[1]=h0,E[2]=j0,E[3]=f0,j.clearBufferuiv(j.COLOR,0,E);else N[0]=m0,N[1]=h0,N[2]=j0,N[3]=f0,j.clearBufferiv(j.COLOR,0,N)}else l|=j.COLOR_BUFFER_BIT}if(h)l|=j.DEPTH_BUFFER_BIT;if(p)l|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);j.clear(l)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if(Z.removeEventListener("webglcontextlost",Y5,!1),Z.removeEventListener("webglcontextrestored",Y0,!1),Z.removeEventListener("webglcontextcreationerror",S,!1),K0.dispose(),F0.dispose(),i0.dispose(),C.dispose(),M.dispose(),r.dispose(),N0.dispose(),s0.dispose(),J0.dispose(),a0.dispose(),a0.removeEventListener("sessionstart",R5),a0.removeEventListener("sessionend",f5),V0)V0.dispose(),V0=null;t0.stop()};function Y5(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Y0(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let I=y0.autoReset,h=_0.enabled,p=_0.autoUpdate,l=_0.needsUpdate,x=_0.type;W5(),y0.autoReset=I,_0.enabled=h,_0.autoUpdate=p,_0.needsUpdate=l,_0.type=x}function S(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function X0(I){let h=I.target;h.removeEventListener("dispose",X0),U0(h)}function U0(I){S0(I),i0.remove(I)}function S0(I){let h=i0.get(I).programs;if(h!==void 0){if(h.forEach(function(p){J0.releaseProgram(p)}),I.isShaderMaterial)J0.releaseShaderCache(I)}}this.renderBufferDirect=function(I,h,p,l,x,G0){if(h===null)h=v0;let O0=x.isMesh&&x.matrixWorld.determinant()<0,L0=YQ(I,h,p,l,x);T0.setMaterial(l,O0);let f0=p.index,m0=1;if(l.wireframe===!0){if(f0=Z0.getWireframeAttribute(p),f0===void 0)return;m0=2}let h0=p.drawRange,j0=p.attributes.position,E5=h0.start*m0,g5=(h0.start+h0.count)*m0;if(G0!==null)E5=Math.max(E5,G0.start*m0),g5=Math.min(g5,(G0.start+G0.count)*m0);if(f0!==null)E5=Math.max(E5,0),g5=Math.min(g5,f0.count);else if(j0!==void 0&&j0!==null)E5=Math.max(E5,0),g5=Math.min(g5,j0.count);let I5=g5-E5;if(I5<0||I5===1/0)return;N0.setup(x,l,L0,p,f0);let G6,U5=n0;if(f0!==null)G6=g.get(f0),U5=b0,U5.setIndex(G6);if(x.isMesh)if(l.wireframe===!0)T0.setLineWidth(l.wireframeLinewidth*e0()),U5.setMode(j.LINES);else U5.setMode(j.TRIANGLES);else if(x.isLine){let u0=l.linewidth;if(u0===void 0)u0=1;if(T0.setLineWidth(u0*e0()),x.isLineSegments)U5.setMode(j.LINES);else if(x.isLineLoop)U5.setMode(j.LINE_LOOP);else U5.setMode(j.LINE_STRIP)}else if(x.isPoints)U5.setMode(j.POINTS);else if(x.isSprite)U5.setMode(j.TRIANGLES);if(x.isBatchedMesh)U5.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)U5.renderInstances(E5,I5,x.count);else if(p.isInstancedBufferGeometry){let u0=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,m9=Math.min(p.instanceCount,u0);U5.renderInstances(E5,I5,m9)}else U5.render(E5,I5)};function I0(I,h,p){if(I.transparent===!0&&I.side===2&&I.forceSinglePass===!1)I.side=1,I.needsUpdate=!0,l8(I,h,p),I.side=0,I.needsUpdate=!0,l8(I,h,p),I.side=2;else l8(I,h,p)}this.compile=function(I,h,p=null){if(p===null)p=I;if(R=F0.get(p),R.init(),F.push(R),p.traverseVisible(function(x){if(x.isLight&&x.layers.test(h.layers)){if(R.pushLight(x),x.castShadow)R.pushShadow(x)}}),I!==p)I.traverseVisible(function(x){if(x.isLight&&x.layers.test(h.layers)){if(R.pushLight(x),x.castShadow)R.pushShadow(x)}});R.setupLights(z._useLegacyLights);let l=new Set;return I.traverse(function(x){let G0=x.material;if(G0)if(Array.isArray(G0))for(let O0=0;O0<G0.length;O0++){let L0=G0[O0];I0(L0,p,x),l.add(L0)}else I0(G0,p,x),l.add(G0)}),F.pop(),R=null,l},this.compileAsync=function(I,h,p=null){let l=this.compile(I,h,p);return new Promise((x)=>{function G0(){if(l.forEach(function(O0){if(i0.get(O0).currentProgram.isReady())l.delete(O0)}),l.size===0){x(I);return}setTimeout(G0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)G0();else setTimeout(G0,10)})};let H5=null;function X5(I){if(H5)H5(I)}function R5(){t0.stop()}function f5(){t0.start()}let t0=new HZ;if(t0.setAnimationLoop(X5),typeof self<"u")t0.setContext(self);this.setAnimationLoop=function(I){H5=I,a0.setAnimationLoop(I),I===null?t0.stop():t0.start()},a0.addEventListener("sessionstart",R5),a0.addEventListener("sessionend",f5),this.render=function(I,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(a0.enabled===!0&&a0.isPresenting===!0){if(a0.cameraAutoUpdate===!0)a0.updateCamera(h);h=a0.getCamera()}if(I.isScene===!0)I.onBeforeRender(z,I,h,k);if(R=F0.get(I,F.length),R.init(),F.push(R),k0.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),y.setFromProjectionMatrix(k0),W0=this.localClippingEnabled,i=B0.init(this.clippingPlanes,W0),O=K0.get(I,D.length),O.init(),D.push(O),W6(I,h,0,z.sortObjects),O.finish(),z.sortObjects===!0)O.sort(a,c);if(this.info.render.frame++,i===!0)B0.beginShadows();let p=R.state.shadowsArray;if(_0.render(p,I,h),i===!0)B0.endShadows();if(this.info.autoReset===!0)this.info.reset();if(t.render(O,I),R.setupLights(z._useLegacyLights),h.isArrayCamera){let l=h.cameras;for(let x=0,G0=l.length;x<G0;x++){let O0=l[x];Y6(O,I,O0,O0.viewport)}}else Y6(O,I,h);if(k!==null)l0.updateMultisampleRenderTarget(k),l0.updateRenderTargetMipmap(k);if(I.isScene===!0)I.onAfterRender(z,I,h);if(N0.resetDefaultState(),f=-1,m=null,F.pop(),F.length>0)R=F[F.length-1];else R=null;if(D.pop(),D.length>0)O=D[D.length-1];else O=null};function W6(I,h,p,l){if(I.visible===!1)return;if(I.layers.test(h.layers)){if(I.isGroup)p=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(h)}else if(I.isLight){if(R.pushLight(I),I.castShadow)R.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||y.intersectsSprite(I)){if(l)c0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(k0);let O0=r.update(I),L0=I.material;if(L0.visible)O.push(I,O0,L0,p,c0.z,null)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||y.intersectsObject(I)){let O0=r.update(I),L0=I.material;if(l){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();c0.copy(I.boundingSphere.center)}else{if(O0.boundingSphere===null)O0.computeBoundingSphere();c0.copy(O0.boundingSphere.center)}c0.applyMatrix4(I.matrixWorld).applyMatrix4(k0)}if(Array.isArray(L0)){let f0=O0.groups;for(let m0=0,h0=f0.length;m0<h0;m0++){let j0=f0[m0],E5=L0[j0.materialIndex];if(E5&&E5.visible)O.push(I,O0,E5,p,c0.z,j0)}}else if(L0.visible)O.push(I,O0,L0,p,c0.z,null)}}}let G0=I.children;for(let O0=0,L0=G0.length;O0<L0;O0++)W6(G0[O0],h,p,l)}function Y6(I,h,p,l){let{opaque:x,transmissive:G0,transparent:O0}=I;if(R.setupLightsView(p),i===!0)B0.setGlobalState(z.clippingPlanes,p);if(G0.length>0)WQ(x,G0,h,p);if(l)T0.viewport(A.copy(l));if(x.length>0)m8(x,h,p);if(G0.length>0)m8(G0,h,p);if(O0.length>0)m8(O0,h,p);T0.buffers.depth.setTest(!0),T0.buffers.depth.setMask(!0),T0.buffers.color.setMask(!0),T0.setPolygonOffset(!1)}function WQ(I,h,p,l){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;let G0=A0.isWebGL2;if(V0===null)V0=new k6(1,1,{generateMipmaps:!0,type:r0.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:G0?4:0});if(z.getDrawingBufferSize(P0),G0)V0.setSize(P0.x,P0.y);else V0.setSize(L7(P0.x),L7(P0.y));let O0=z.getRenderTarget();if(z.setRenderTarget(V0),z.getClearColor(n),s=z.getClearAlpha(),s<1)z.setClearColor(16777215,0.5);z.clear();let L0=z.toneMapping;z.toneMapping=0,m8(I,p,l),l0.updateMultisampleRenderTarget(V0),l0.updateRenderTargetMipmap(V0);let f0=!1;for(let m0=0,h0=h.length;m0<h0;m0++){let j0=h[m0],E5=j0.object,g5=j0.geometry,I5=j0.material,G6=j0.group;if(I5.side===2&&E5.layers.test(l.layers)){let U5=I5.side;I5.side=1,I5.needsUpdate=!0,V4(E5,p,l,g5,I5,G6),I5.side=U5,I5.needsUpdate=!0,f0=!0}}if(f0===!0)l0.updateMultisampleRenderTarget(V0),l0.updateRenderTargetMipmap(V0);z.setRenderTarget(O0),z.setClearColor(n,s),z.toneMapping=L0}function m8(I,h,p){let l=h.isScene===!0?h.overrideMaterial:null;for(let x=0,G0=I.length;x<G0;x++){let O0=I[x],L0=O0.object,f0=O0.geometry,m0=l===null?O0.material:l,h0=O0.group;if(L0.layers.test(p.layers))V4(L0,h,p,f0,m0,h0)}}function V4(I,h,p,l,x,G0){if(I.onBeforeRender(z,h,p,l,x,G0),I.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),x.onBeforeRender(z,h,p,l,I,G0),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1)x.side=1,x.needsUpdate=!0,z.renderBufferDirect(p,h,l,x,I,G0),x.side=0,x.needsUpdate=!0,z.renderBufferDirect(p,h,l,x,I,G0),x.side=2;else z.renderBufferDirect(p,h,l,x,I,G0);I.onAfterRender(z,h,p,l,x,G0)}function l8(I,h,p){if(h.isScene!==!0)h=v0;let l=i0.get(I),x=R.state.lights,G0=R.state.shadowsArray,O0=x.state.version,L0=J0.getParameters(I,x.state,G0,h,p),f0=J0.getProgramCacheKey(L0),m0=l.programs;if(l.environment=I.isMeshStandardMaterial?h.environment:null,l.fog=h.fog,l.envMap=(I.isMeshStandardMaterial?M:C).get(I.envMap||l.environment),m0===void 0)I.addEventListener("dispose",X0),m0=new Map,l.programs=m0;let h0=m0.get(f0);if(h0!==void 0){if(l.currentProgram===h0&&l.lightsStateVersion===O0)return q4(I,L0),h0}else L0.uniforms=J0.getUniforms(I),I.onBuild(p,L0,z),I.onBeforeCompile(L0,z),h0=J0.acquireProgram(L0,f0),m0.set(f0,h0),l.uniforms=L0.uniforms;let j0=l.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)j0.clippingPlanes=B0.uniform;if(q4(I,L0),l.needsLights=XQ(I),l.lightsStateVersion=O0,l.needsLights)j0.ambientLightColor.value=x.state.ambient,j0.lightProbe.value=x.state.probe,j0.directionalLights.value=x.state.directional,j0.directionalLightShadows.value=x.state.directionalShadow,j0.spotLights.value=x.state.spot,j0.spotLightShadows.value=x.state.spotShadow,j0.rectAreaLights.value=x.state.rectArea,j0.ltc_1.value=x.state.rectAreaLTC1,j0.ltc_2.value=x.state.rectAreaLTC2,j0.pointLights.value=x.state.point,j0.pointLightShadows.value=x.state.pointShadow,j0.hemisphereLights.value=x.state.hemi,j0.directionalShadowMap.value=x.state.directionalShadowMap,j0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,j0.spotShadowMap.value=x.state.spotShadowMap,j0.spotLightMatrix.value=x.state.spotLightMatrix,j0.spotLightMap.value=x.state.spotLightMap,j0.pointShadowMap.value=x.state.pointShadowMap,j0.pointShadowMatrix.value=x.state.pointShadowMatrix;return l.currentProgram=h0,l.uniformsList=null,h0}function G4(I){if(I.uniformsList===null){let h=I.currentProgram.getUniforms();I.uniformsList=k8.seqWithValue(h.seq,I.uniforms)}return I.uniformsList}function q4(I,h){let p=i0.get(I);p.outputColorSpace=h.outputColorSpace,p.batching=h.batching,p.instancing=h.instancing,p.instancingColor=h.instancingColor,p.skinning=h.skinning,p.morphTargets=h.morphTargets,p.morphNormals=h.morphNormals,p.morphColors=h.morphColors,p.morphTargetsCount=h.morphTargetsCount,p.numClippingPlanes=h.numClippingPlanes,p.numIntersection=h.numClipIntersection,p.vertexAlphas=h.vertexAlphas,p.vertexTangents=h.vertexTangents,p.toneMapping=h.toneMapping}function YQ(I,h,p,l,x){if(h.isScene!==!0)h=v0;l0.resetTextureUnits();let G0=h.fog,O0=l.isMeshStandardMaterial?h.environment:null,L0=k===null?z.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:"srgb-linear",f0=(l.isMeshStandardMaterial?M:C).get(l.envMap||O0),m0=l.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,h0=!!p.attributes.tangent&&(!!l.normalMap||l.anisotropy>0),j0=!!p.morphAttributes.position,E5=!!p.morphAttributes.normal,g5=!!p.morphAttributes.color,I5=0;if(l.toneMapped){if(k===null||k.isXRRenderTarget===!0)I5=z.toneMapping}let G6=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,U5=G6!==void 0?G6.length:0,u0=i0.get(l),m9=R.state.lights;if(i===!0){if(W0===!0||I!==m){let u5=I===m&&l.id===f;B0.setState(l,I,u5)}}let G5=!1;if(l.version===u0.__version){if(u0.needsLights&&u0.lightsStateVersion!==m9.state.version)G5=!0;else if(u0.outputColorSpace!==L0)G5=!0;else if(x.isBatchedMesh&&u0.batching===!1)G5=!0;else if(!x.isBatchedMesh&&u0.batching===!0)G5=!0;else if(x.isInstancedMesh&&u0.instancing===!1)G5=!0;else if(!x.isInstancedMesh&&u0.instancing===!0)G5=!0;else if(x.isSkinnedMesh&&u0.skinning===!1)G5=!0;else if(!x.isSkinnedMesh&&u0.skinning===!0)G5=!0;else if(x.isInstancedMesh&&u0.instancingColor===!0&&x.instanceColor===null)G5=!0;else if(x.isInstancedMesh&&u0.instancingColor===!1&&x.instanceColor!==null)G5=!0;else if(u0.envMap!==f0)G5=!0;else if(l.fog===!0&&u0.fog!==G0)G5=!0;else if(u0.numClippingPlanes!==void 0&&(u0.numClippingPlanes!==B0.numPlanes||u0.numIntersection!==B0.numIntersection))G5=!0;else if(u0.vertexAlphas!==m0)G5=!0;else if(u0.vertexTangents!==h0)G5=!0;else if(u0.morphTargets!==j0)G5=!0;else if(u0.morphNormals!==E5)G5=!0;else if(u0.morphColors!==g5)G5=!0;else if(u0.toneMapping!==I5)G5=!0;else if(A0.isWebGL2===!0&&u0.morphTargetsCount!==U5)G5=!0}else G5=!0,u0.__version=l.version;let P6=u0.currentProgram;if(G5===!0)P6=l8(l,h,x);let E4=!1,O8=!1,l9=!1,w5=P6.getUniforms(),T6=u0.uniforms;if(T0.useProgram(P6.program))E4=!0,O8=!0,l9=!0;if(l.id!==f)f=l.id,O8=!0;if(E4||m!==I){w5.setValue(j,"projectionMatrix",I.projectionMatrix),w5.setValue(j,"viewMatrix",I.matrixWorldInverse);let u5=w5.map.cameraPosition;if(u5!==void 0)u5.setValue(j,c0.setFromMatrixPosition(I.matrixWorld));if(A0.logarithmicDepthBuffer)w5.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(l.isMeshPhongMaterial||l.isMeshToonMaterial||l.isMeshLambertMaterial||l.isMeshBasicMaterial||l.isMeshStandardMaterial||l.isShaderMaterial)w5.setValue(j,"isOrthographic",I.isOrthographicCamera===!0);if(m!==I)m=I,O8=!0,l9=!0}if(x.isSkinnedMesh){w5.setOptional(j,x,"bindMatrix"),w5.setOptional(j,x,"bindMatrixInverse");let u5=x.skeleton;if(u5)if(A0.floatVertexTextures){if(u5.boneTexture===null)u5.computeBoneTexture();w5.setValue(j,"boneTexture",u5.boneTexture,l0)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}if(x.isBatchedMesh)w5.setOptional(j,x,"batchingTexture"),w5.setValue(j,"batchingTexture",x._matricesTexture,l0);let u9=p.morphAttributes;if(u9.position!==void 0||u9.normal!==void 0||u9.color!==void 0&&A0.isWebGL2===!0)D5.update(x,p,P6);if(O8||u0.receiveShadow!==x.receiveShadow)u0.receiveShadow=x.receiveShadow,w5.setValue(j,"receiveShadow",x.receiveShadow);if(l.isMeshGouraudMaterial&&l.envMap!==null)T6.envMap.value=f0,T6.flipEnvMap.value=f0.isCubeTexture&&f0.isRenderTargetTexture===!1?-1:1;if(O8){if(w5.setValue(j,"toneMappingExposure",z.toneMappingExposure),u0.needsLights)HQ(T6,l9);if(G0&&l.fog===!0)$0.refreshFogUniforms(T6,G0);$0.refreshMaterialUniforms(T6,l,u,_,V0),k8.upload(j,G4(u0),T6,l0)}if(l.isShaderMaterial&&l.uniformsNeedUpdate===!0)k8.upload(j,G4(u0),T6,l0),l.uniformsNeedUpdate=!1;if(l.isSpriteMaterial)w5.setValue(j,"center",x.center);if(w5.setValue(j,"modelViewMatrix",x.modelViewMatrix),w5.setValue(j,"normalMatrix",x.normalMatrix),w5.setValue(j,"modelMatrix",x.matrixWorld),l.isShaderMaterial||l.isRawShaderMaterial){let u5=l.uniformsGroups;for(let d9=0,KQ=u5.length;d9<KQ;d9++)if(A0.isWebGL2){let F4=u5[d9];s0.update(F4,P6),s0.bind(F4,P6)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return P6}function HQ(I,h){I.ambientLightColor.needsUpdate=h,I.lightProbe.needsUpdate=h,I.directionalLights.needsUpdate=h,I.directionalLightShadows.needsUpdate=h,I.pointLights.needsUpdate=h,I.pointLightShadows.needsUpdate=h,I.spotLights.needsUpdate=h,I.spotLightShadows.needsUpdate=h,I.rectAreaLights.needsUpdate=h,I.hemisphereLights.needsUpdate=h}function XQ(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}if(this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,h,p){i0.get(I.texture).__webglTexture=h,i0.get(I.depthTexture).__webglTexture=p;let l=i0.get(I);if(l.__hasExternalTextures=!0,l.__hasExternalTextures){if(l.__autoAllocateDepthBuffer=p===void 0,!l.__autoAllocateDepthBuffer){if(r0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),l.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(I,h){let p=i0.get(I);p.__webglFramebuffer=h,p.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(I,h=0,p=0){k=I,L=h,P=p;let l=!0,x=null,G0=!1,O0=!1;if(I){let f0=i0.get(I);if(f0.__useDefaultFramebuffer!==void 0)T0.bindFramebuffer(j.FRAMEBUFFER,null),l=!1;else if(f0.__webglFramebuffer===void 0)l0.setupRenderTarget(I);else if(f0.__hasExternalTextures)l0.rebindTextures(I,i0.get(I.texture).__webglTexture,i0.get(I.depthTexture).__webglTexture);let m0=I.texture;if(m0.isData3DTexture||m0.isDataArrayTexture||m0.isCompressedArrayTexture)O0=!0;let h0=i0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(h0[h]))x=h0[h][p];else x=h0[h];G0=!0}else if(A0.isWebGL2&&I.samples>0&&l0.useMultisampledRTT(I)===!1)x=i0.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(h0))x=h0[p];else x=h0;A.copy(I.viewport),$.copy(I.scissor),v=I.scissorTest}else A.copy(d).multiplyScalar(u).floor(),$.copy(e).multiplyScalar(u).floor(),v=Q0;if(T0.bindFramebuffer(j.FRAMEBUFFER,x)&&A0.drawBuffers&&l)T0.drawBuffers(I,x);if(T0.viewport(A),T0.scissor($),T0.setScissorTest(v),G0){let f0=i0.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+h,f0.__webglTexture,p)}else if(O0){let f0=i0.get(I.texture),m0=h||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,f0.__webglTexture,p||0,m0)}f=-1},this.readRenderTargetPixels=function(I,h,p,l,x,G0,O0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L0=i0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&O0!==void 0)L0=L0[O0];if(L0){T0.bindFramebuffer(j.FRAMEBUFFER,L0);try{let f0=I.texture,m0=f0.format,h0=f0.type;if(m0!==1023&&D0.convert(m0)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let j0=h0===1016&&(r0.has("EXT_color_buffer_half_float")||A0.isWebGL2&&r0.has("EXT_color_buffer_float"));if(h0!==1009&&D0.convert(h0)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(h0===1015&&(A0.isWebGL2||r0.has("OES_texture_float")||r0.has("WEBGL_color_buffer_float")))&&!j0){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=I.width-l&&(p>=0&&p<=I.height-x))j.readPixels(h,p,l,x,D0.convert(m0),D0.convert(h0),G0)}finally{let f0=k!==null?i0.get(k).__webglFramebuffer:null;T0.bindFramebuffer(j.FRAMEBUFFER,f0)}}},this.copyFramebufferToTexture=function(I,h,p=0){let l=Math.pow(2,-p),x=Math.floor(h.image.width*l),G0=Math.floor(h.image.height*l);l0.setTexture2D(h,0),j.copyTexSubImage2D(j.TEXTURE_2D,p,0,0,I.x,I.y,x,G0),T0.unbindTexture()},this.copyTextureToTexture=function(I,h,p,l=0){let x=h.image.width,G0=h.image.height,O0=D0.convert(p.format),L0=D0.convert(p.type);if(l0.setTexture2D(p,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,p.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,p.unpackAlignment),h.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,l,I.x,I.y,x,G0,O0,L0,h.image.data);else if(h.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,l,I.x,I.y,h.mipmaps[0].width,h.mipmaps[0].height,O0,h.mipmaps[0].data);else j.texSubImage2D(j.TEXTURE_2D,l,I.x,I.y,O0,L0,h.image);if(l===0&&p.generateMipmaps)j.generateMipmap(j.TEXTURE_2D);T0.unbindTexture()},this.copyTextureToTexture3D=function(I,h,p,l,x=0){if(z.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let G0=I.max.x-I.min.x+1,O0=I.max.y-I.min.y+1,L0=I.max.z-I.min.z+1,f0=D0.convert(l.format),m0=D0.convert(l.type),h0;if(l.isData3DTexture)l0.setTexture3D(l,0),h0=j.TEXTURE_3D;else if(l.isDataArrayTexture||l.isCompressedArrayTexture)l0.setTexture2DArray(l,0),h0=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,l.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,l.unpackAlignment);let j0=j.getParameter(j.UNPACK_ROW_LENGTH),E5=j.getParameter(j.UNPACK_IMAGE_HEIGHT),g5=j.getParameter(j.UNPACK_SKIP_PIXELS),I5=j.getParameter(j.UNPACK_SKIP_ROWS),G6=j.getParameter(j.UNPACK_SKIP_IMAGES),U5=p.isCompressedTexture?p.mipmaps[x]:p.image;if(j.pixelStorei(j.UNPACK_ROW_LENGTH,U5.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,U5.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,I.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,I.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,I.min.z),p.isDataTexture||p.isData3DTexture)j.texSubImage3D(h0,x,h.x,h.y,h.z,G0,O0,L0,f0,m0,U5.data);else if(p.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(h0,x,h.x,h.y,h.z,G0,O0,L0,f0,U5.data);else j.texSubImage3D(h0,x,h.x,h.y,h.z,G0,O0,L0,f0,m0,U5);if(j.pixelStorei(j.UNPACK_ROW_LENGTH,j0),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,E5),j.pixelStorei(j.UNPACK_SKIP_PIXELS,g5),j.pixelStorei(j.UNPACK_SKIP_ROWS,I5),j.pixelStorei(j.UNPACK_SKIP_IMAGES,G6),x===0&&l.generateMipmaps)j.generateMipmap(h0);T0.unbindTexture()},this.initTexture=function(I){if(I.isCubeTexture)l0.setTextureCube(I,0);else if(I.isData3DTexture)l0.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)l0.setTexture2DArray(I,0);else l0.setTexture2D(I,0);T0.unbindTexture()},this.resetState=function(){L=0,P=0,k=null,T0.reset(),N0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Z=this.getContext();Z.drawingBufferColorSpace=J==="display-p3"?"display-p3":"srgb",Z.unpackColorSpace=Q5.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(J){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=J===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(J){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=J}}class BZ extends w9{}BZ.prototype.isWebGL1Renderer=!0;class P9{constructor(J,Z=0.00025){this.isFogExp2=!0,this.name="",this.color=new g0(J),this.density=Z}clone(){return new P9(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class m7 extends k5{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Z){if(super.copy(J,Z),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Z=super.toJSON(J);if(this.fog!==null)Z.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Z.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Z.object.backgroundIntensity=this.backgroundIntensity;return Z}}class R6 extends x5{constructor(J,Z,Q,W,Y,H,K,X,U){super(J,Z,Q,W,Y,H,K,X,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class J6{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(J,Z){let Q=this.getUtoTmapping(J);return this.getPoint(Q,Z)}getPoints(J=5){let Z=[];for(let Q=0;Q<=J;Q++)Z.push(this.getPoint(Q/J));return Z}getSpacedPoints(J=5){let Z=[];for(let Q=0;Q<=J;Q++)Z.push(this.getPointAt(Q/J));return Z}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Z=[],Q,W=this.getPoint(0),Y=0;Z.push(0);for(let H=1;H<=J;H++)Q=this.getPoint(H/J),Y+=Q.distanceTo(W),Z.push(Y),W=Q;return this.cacheArcLengths=Z,Z}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Z){let Q=this.getLengths(),W=0,Y=Q.length,H;if(Z)H=Z;else H=J*Q[Y-1];let K=0,X=Y-1,U;while(K<=X)if(W=Math.floor(K+(X-K)/2),U=Q[W]-H,U<0)K=W+1;else if(U>0)X=W-1;else{X=W;break}if(W=X,Q[W]===H)return W/(Y-1);let V=Q[W],G=Q[W+1]-V,E=(H-V)/G;return(W+E)/(Y-1)}getTangent(J,Z){let W=J-0.0001,Y=J+0.0001;if(W<0)W=0;if(Y>1)Y=1;let H=this.getPoint(W),K=this.getPoint(Y),X=Z||(H.isVector2?new q0:new T);return X.copy(K).sub(H).normalize(),X}getTangentAt(J,Z){let Q=this.getUtoTmapping(J);return this.getTangent(Q,Z)}computeFrenetFrames(J,Z){let Q=new T,W=[],Y=[],H=[],K=new T,X=new F5;for(let E=0;E<=J;E++){let N=E/J;W[E]=this.getTangentAt(N,new T)}Y[0]=new T,H[0]=new T;let U=Number.MAX_VALUE,V=Math.abs(W[0].x),q=Math.abs(W[0].y),G=Math.abs(W[0].z);if(V<=U)U=V,Q.set(1,0,0);if(q<=U)U=q,Q.set(0,1,0);if(G<=U)Q.set(0,0,1);K.crossVectors(W[0],Q).normalize(),Y[0].crossVectors(W[0],K),H[0].crossVectors(W[0],Y[0]);for(let E=1;E<=J;E++){if(Y[E]=Y[E-1].clone(),H[E]=H[E-1].clone(),K.crossVectors(W[E-1],W[E]),K.length()>Number.EPSILON){K.normalize();let N=Math.acos(C5(W[E-1].dot(W[E]),-1,1));Y[E].applyMatrix4(X.makeRotationAxis(K,N))}H[E].crossVectors(W[E],Y[E])}if(Z===!0){let E=Math.acos(C5(Y[0].dot(Y[J]),-1,1));if(E/=J,W[0].dot(K.crossVectors(Y[0],Y[J]))>0)E=-E;for(let N=1;N<=J;N++)Y[N].applyMatrix4(X.makeRotationAxis(W[N],E*N)),H[N].crossVectors(W[N],Y[N])}return{tangents:W,normals:Y,binormals:H}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class T9 extends J6{constructor(J=0,Z=0,Q=1,W=1,Y=0,H=Math.PI*2,K=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Z,this.xRadius=Q,this.yRadius=W,this.aStartAngle=Y,this.aEndAngle=H,this.aClockwise=K,this.aRotation=X}getPoint(J,Z){let Q=Z||new q0,W=Math.PI*2,Y=this.aEndAngle-this.aStartAngle,H=Math.abs(Y)<Number.EPSILON;while(Y<0)Y+=W;while(Y>W)Y-=W;if(Y<Number.EPSILON)if(H)Y=0;else Y=W;if(this.aClockwise===!0&&!H)if(Y===W)Y=-W;else Y=Y-W;let K=this.aStartAngle+J*Y,X=this.aX+this.xRadius*Math.cos(K),U=this.aY+this.yRadius*Math.sin(K);if(this.aRotation!==0){let V=Math.cos(this.aRotation),q=Math.sin(this.aRotation),G=X-this.aX,E=U-this.aY;X=G*V-E*q+this.aX,U=G*q+E*V+this.aY}return Q.set(X,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class AZ extends T9{constructor(J,Z,Q,W,Y,H){super(J,Z,Q,Q,W,Y,H);this.isArcCurve=!0,this.type="ArcCurve"}}function l7(){let J=0,Z=0,Q=0,W=0;function Y(H,K,X,U){J=H,Z=X,Q=-3*H+3*K-2*X-U,W=2*H-2*K+X+U}return{initCatmullRom:function(H,K,X,U,V){Y(K,X,V*(X-H),V*(U-K))},initNonuniformCatmullRom:function(H,K,X,U,V,q,G){let E=(K-H)/V-(X-H)/(V+q)+(X-K)/q,N=(X-K)/q-(U-K)/(q+G)+(U-X)/G;E*=q,N*=q,Y(K,X,E,N)},calc:function(H){let K=H*H,X=K*H;return J+Z*H+Q*K+W*X}}}var R9=new T,B7=new l7,A7=new l7,I7=new l7;class IZ extends J6{constructor(J=[],Z=!1,Q="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Z,this.curveType=Q,this.tension=W}getPoint(J,Z=new T){let Q=Z,W=this.points,Y=W.length,H=(Y-(this.closed?0:1))*J,K=Math.floor(H),X=H-K;if(this.closed)K+=K>0?0:(Math.floor(Math.abs(K)/Y)+1)*Y;else if(X===0&&K===Y-1)K=Y-2,X=1;let U,V;if(this.closed||K>0)U=W[(K-1)%Y];else R9.subVectors(W[0],W[1]).add(W[0]),U=R9;let q=W[K%Y],G=W[(K+1)%Y];if(this.closed||K+2<Y)V=W[(K+2)%Y];else R9.subVectors(W[Y-1],W[Y-2]).add(W[Y-1]),V=R9;if(this.curveType==="centripetal"||this.curveType==="chordal"){let E=this.curveType==="chordal"?0.5:0.25,N=Math.pow(U.distanceToSquared(q),E),O=Math.pow(q.distanceToSquared(G),E),R=Math.pow(G.distanceToSquared(V),E);if(O<0.0001)O=1;if(N<0.0001)N=O;if(R<0.0001)R=O;B7.initNonuniformCatmullRom(U.x,q.x,G.x,V.x,N,O,R),A7.initNonuniformCatmullRom(U.y,q.y,G.y,V.y,N,O,R),I7.initNonuniformCatmullRom(U.z,q.z,G.z,V.z,N,O,R)}else if(this.curveType==="catmullrom")B7.initCatmullRom(U.x,q.x,G.x,V.x,this.tension),A7.initCatmullRom(U.y,q.y,G.y,V.y,this.tension),I7.initCatmullRom(U.z,q.z,G.z,V.z,this.tension);return Q.set(B7.calc(X),A7.calc(X),I7.calc(X)),Q}copy(J){super.copy(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Z=0,Q=this.points.length;Z<Q;Z++){let W=this.points[Z];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(new T().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function dJ(J,Z,Q,W,Y){let H=(W-Z)*0.5,K=(Y-Q)*0.5,X=J*J,U=J*X;return(2*Q-2*W+H+K)*U+(-3*Q+3*W-2*H-K)*X+H*J+Q}function gK(J,Z){let Q=1-J;return Q*Q*Z}function pK(J,Z){return 2*(1-J)*J*Z}function mK(J,Z){return J*J*Z}function L8(J,Z,Q,W){return gK(J,Z)+pK(J,Q)+mK(J,W)}function lK(J,Z){let Q=1-J;return Q*Q*Q*Z}function uK(J,Z){let Q=1-J;return 3*Q*Q*J*Z}function dK(J,Z){return 3*(1-J)*J*J*Z}function cK(J,Z){return J*J*J*Z}function w8(J,Z,Q,W,Y){return lK(J,Z)+uK(J,Q)+dK(J,W)+cK(J,Y)}class u7 extends J6{constructor(J=new q0,Z=new q0,Q=new q0,W=new q0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Z,this.v2=Q,this.v3=W}getPoint(J,Z=new q0){let Q=Z,W=this.v0,Y=this.v1,H=this.v2,K=this.v3;return Q.set(w8(J,W.x,Y.x,H.x,K.x),w8(J,W.y,Y.y,H.y,K.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class $Z extends J6{constructor(J=new T,Z=new T,Q=new T,W=new T){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Z,this.v2=Q,this.v3=W}getPoint(J,Z=new T){let Q=Z,W=this.v0,Y=this.v1,H=this.v2,K=this.v3;return Q.set(w8(J,W.x,Y.x,H.x,K.x),w8(J,W.y,Y.y,H.y,K.y),w8(J,W.z,Y.z,H.z,K.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class d7 extends J6{constructor(J=new q0,Z=new q0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Z}getPoint(J,Z=new q0){let Q=Z;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,Z){return this.getPoint(J,Z)}getTangent(J,Z=new q0){return Z.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Z){return this.getTangent(J,Z)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class CZ extends J6{constructor(J=new T,Z=new T){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Z}getPoint(J,Z=new T){let Q=Z;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,Z){return this.getPoint(J,Z)}getTangent(J,Z=new T){return Z.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Z){return this.getTangent(J,Z)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class c7 extends J6{constructor(J=new q0,Z=new q0,Q=new q0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Z,this.v2=Q}getPoint(J,Z=new q0){let Q=Z,W=this.v0,Y=this.v1,H=this.v2;return Q.set(L8(J,W.x,Y.x,H.x),L8(J,W.y,Y.y,H.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class kZ extends J6{constructor(J=new T,Z=new T,Q=new T){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Z,this.v2=Q}getPoint(J,Z=new T){let Q=Z,W=this.v0,Y=this.v1,H=this.v2;return Q.set(L8(J,W.x,Y.x,H.x),L8(J,W.y,Y.y,H.y),L8(J,W.z,Y.z,H.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class n7 extends J6{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Z=new q0){let Q=Z,W=this.points,Y=(W.length-1)*J,H=Math.floor(Y),K=Y-H,X=W[H===0?H:H-1],U=W[H],V=W[H>W.length-2?W.length-1:H+1],q=W[H>W.length-3?W.length-1:H+2];return Q.set(dJ(K,X.x,U.x,V.x,q.x),dJ(K,X.y,U.y,V.y,q.y)),Q}copy(J){super.copy(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Z=0,Q=this.points.length;Z<Q;Z++){let W=this.points[Z];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Z=0,Q=J.points.length;Z<Q;Z++){let W=J.points[Z];this.points.push(new q0().fromArray(W))}return this}}var cJ=Object.freeze({__proto__:null,ArcCurve:AZ,CatmullRomCurve3:IZ,CubicBezierCurve:u7,CubicBezierCurve3:$Z,EllipseCurve:T9,LineCurve:d7,LineCurve3:CZ,QuadraticBezierCurve:c7,QuadraticBezierCurve3:kZ,SplineCurve:n7});class LZ extends J6{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Z=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Z)){let Q=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cJ[Q](Z,J))}return this}getPoint(J,Z){let Q=J*this.getLength(),W=this.getCurveLengths(),Y=0;while(Y<W.length){if(W[Y]>=Q){let H=W[Y]-Q,K=this.curves[Y],X=K.getLength(),U=X===0?0:1-H/X;return K.getPointAt(U,Z)}Y++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Z=0;for(let Q=0,W=this.curves.length;Q<W;Q++)Z+=this.curves[Q].getLength(),J.push(Z);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Z=[];for(let Q=0;Q<=J;Q++)Z.push(this.getPoint(Q/J));if(this.autoClose)Z.push(Z[0]);return Z}getPoints(J=12){let Z=[],Q;for(let W=0,Y=this.curves;W<Y.length;W++){let H=Y[W],K=H.isEllipseCurve?J*2:H.isLineCurve||H.isLineCurve3?1:H.isSplineCurve?J*H.points.length:J,X=H.getPoints(K);for(let U=0;U<X.length;U++){let V=X[U];if(Q&&Q.equals(V))continue;Z.push(V),Q=V}}if(this.autoClose&&Z.length>1&&!Z[Z.length-1].equals(Z[0]))Z.push(Z[0]);return Z}copy(J){super.copy(J),this.curves=[];for(let Z=0,Q=J.curves.length;Z<Q;Z++){let W=J.curves[Z];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Z=0,Q=this.curves.length;Z<Q;Z++){let W=this.curves[Z];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Z=0,Q=J.curves.length;Z<Q;Z++){let W=J.curves[Z];this.curves.push(new cJ[W.type]().fromJSON(W))}return this}}class wZ extends LZ{constructor(J){super();if(this.type="Path",this.currentPoint=new q0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Z=1,Q=J.length;Z<Q;Z++)this.lineTo(J[Z].x,J[Z].y);return this}moveTo(J,Z){return this.currentPoint.set(J,Z),this}lineTo(J,Z){let Q=new d7(this.currentPoint.clone(),new q0(J,Z));return this.curves.push(Q),this.currentPoint.set(J,Z),this}quadraticCurveTo(J,Z,Q,W){let Y=new c7(this.currentPoint.clone(),new q0(J,Z),new q0(Q,W));return this.curves.push(Y),this.currentPoint.set(Q,W),this}bezierCurveTo(J,Z,Q,W,Y,H){let K=new u7(this.currentPoint.clone(),new q0(J,Z),new q0(Q,W),new q0(Y,H));return this.curves.push(K),this.currentPoint.set(Y,H),this}splineThru(J){let Z=[this.currentPoint.clone()].concat(J),Q=new n7(Z);return this.curves.push(Q),this.currentPoint.copy(J[J.length-1]),this}arc(J,Z,Q,W,Y,H){let K=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+K,Z+X,Q,W,Y,H),this}absarc(J,Z,Q,W,Y,H){return this.absellipse(J,Z,Q,Q,W,Y,H),this}ellipse(J,Z,Q,W,Y,H,K,X){let U=this.currentPoint.x,V=this.currentPoint.y;return this.absellipse(J+U,Z+V,Q,W,Y,H,K,X),this}absellipse(J,Z,Q,W,Y,H,K,X){let U=new T9(J,Z,Q,W,Y,H,K,X);if(this.curves.length>0){let q=U.getPoint(0);if(!q.equals(this.currentPoint))this.lineTo(q.x,q.y)}this.curves.push(U);let V=U.getPoint(1);return this.currentPoint.copy(V),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class s7 extends n5{constructor(J=[new q0(0,-0.5),new q0(0.5,0),new q0(0,0.5)],Z=12,Q=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Z,phiStart:Q,phiLength:W},Z=Math.floor(Z),W=C5(W,0,Math.PI*2);let Y=[],H=[],K=[],X=[],U=[],V=1/Z,q=new T,G=new q0,E=new T,N=new T,O=new T,R=0,D=0;for(let F=0;F<=J.length-1;F++)switch(F){case 0:R=J[F+1].x-J[F].x,D=J[F+1].y-J[F].y,E.x=D*1,E.y=-R,E.z=D*0,O.copy(E),E.normalize(),X.push(E.x,E.y,E.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:R=J[F+1].x-J[F].x,D=J[F+1].y-J[F].y,E.x=D*1,E.y=-R,E.z=D*0,N.copy(E),E.x+=O.x,E.y+=O.y,E.z+=O.z,E.normalize(),X.push(E.x,E.y,E.z),O.copy(N)}for(let F=0;F<=Z;F++){let z=Q+F*V*W,B=Math.sin(z),L=Math.cos(z);for(let P=0;P<=J.length-1;P++){q.x=J[P].x*B,q.y=J[P].y,q.z=J[P].x*L,H.push(q.x,q.y,q.z),G.x=F/Z,G.y=P/(J.length-1),K.push(G.x,G.y);let k=X[3*P+0]*B,f=X[3*P+1],m=X[3*P+0]*L;U.push(k,f,m)}}for(let F=0;F<Z;F++)for(let z=0;z<J.length-1;z++){let B=z+F*J.length,L=B,P=B+J.length,k=B+J.length+1,f=B+1;Y.push(L,P,f),Y.push(k,f,P)}this.setIndex(Y),this.setAttribute("position",new V5(H,3)),this.setAttribute("uv",new V5(K,2)),this.setAttribute("normal",new V5(U,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s7(J.points,J.segments,J.phiStart,J.phiLength)}}class M6 extends s7{constructor(J=1,Z=1,Q=4,W=8){let Y=new wZ;Y.absarc(0,-Z/2,J,Math.PI*1.5,0),Y.absarc(0,Z/2,J,0,Math.PI*0.5);super(Y.getPoints(Q),W);this.type="CapsuleGeometry",this.parameters={radius:J,length:Z,capSegments:Q,radialSegments:W}}static fromJSON(J){return new M6(J.radius,J.length,J.capSegments,J.radialSegments)}}class S9 extends n5{constructor(J=1,Z=32,Q=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Z,thetaStart:Q,thetaLength:W},Z=Math.max(3,Z);let Y=[],H=[],K=[],X=[],U=new T,V=new q0;H.push(0,0,0),K.push(0,0,1),X.push(0.5,0.5);for(let q=0,G=3;q<=Z;q++,G+=3){let E=Q+q/Z*W;U.x=J*Math.cos(E),U.y=J*Math.sin(E),H.push(U.x,U.y,U.z),K.push(0,0,1),V.x=(H[G]/J+1)/2,V.y=(H[G+1]/J+1)/2,X.push(V.x,V.y)}for(let q=1;q<=Z;q++)Y.push(q,q+1,0);this.setIndex(Y),this.setAttribute("position",new V5(H,3)),this.setAttribute("normal",new V5(K,3)),this.setAttribute("uv",new V5(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class O5 extends n5{constructor(J=1,Z=1,Q=1,W=32,Y=1,H=!1,K=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Z,height:Q,radialSegments:W,heightSegments:Y,openEnded:H,thetaStart:K,thetaLength:X};let U=this;W=Math.floor(W),Y=Math.floor(Y);let V=[],q=[],G=[],E=[],N=0,O=[],R=Q/2,D=0;if(F(),H===!1){if(J>0)z(!0);if(Z>0)z(!1)}this.setIndex(V),this.setAttribute("position",new V5(q,3)),this.setAttribute("normal",new V5(G,3)),this.setAttribute("uv",new V5(E,2));function F(){let B=new T,L=new T,P=0,k=(Z-J)/Q;for(let f=0;f<=Y;f++){let m=[],A=f/Y,$=A*(Z-J)+J;for(let v=0;v<=W;v++){let n=v/W,s=n*X+K,w=Math.sin(s),_=Math.cos(s);L.x=$*w,L.y=-A*Q+R,L.z=$*_,q.push(L.x,L.y,L.z),B.set(w,k,_).normalize(),G.push(B.x,B.y,B.z),E.push(n,1-A),m.push(N++)}O.push(m)}for(let f=0;f<W;f++)for(let m=0;m<Y;m++){let A=O[m][f],$=O[m+1][f],v=O[m+1][f+1],n=O[m][f+1];V.push(A,$,n),V.push($,v,n),P+=6}U.addGroup(D,P,0),D+=P}function z(B){let L=N,P=new q0,k=new T,f=0,m=B===!0?J:Z,A=B===!0?1:-1;for(let v=1;v<=W;v++)q.push(0,R*A,0),G.push(0,A,0),E.push(0.5,0.5),N++;let $=N;for(let v=0;v<=W;v++){let s=v/W*X+K,w=Math.cos(s),_=Math.sin(s);k.x=m*_,k.y=R*A,k.z=m*w,q.push(k.x,k.y,k.z),G.push(0,A,0),P.x=w*0.5+0.5,P.y=_*0.5*A+0.5,E.push(P.x,P.y),N++}for(let v=0;v<W;v++){let n=L+v,s=$+v;if(B===!0)V.push(s,s+1,n);else V.push(s+1,s,n);f+=3}U.addGroup(D,f,B===!0?1:2),D+=f}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O5(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class v9 extends O5{constructor(J=1,Z=1,Q=32,W=1,Y=!1,H=0,K=Math.PI*2){super(0,J,Z,Q,W,Y,H,K);this.type="ConeGeometry",this.parameters={radius:J,height:Z,radialSegments:Q,heightSegments:W,openEnded:Y,thetaStart:H,thetaLength:K}}static fromJSON(J){return new v9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class f9 extends n5{constructor(J=0.5,Z=1,Q=32,W=1,Y=0,H=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Z,thetaSegments:Q,phiSegments:W,thetaStart:Y,thetaLength:H},Q=Math.max(3,Q),W=Math.max(1,W);let K=[],X=[],U=[],V=[],q=J,G=(Z-J)/W,E=new T,N=new q0;for(let O=0;O<=W;O++){for(let R=0;R<=Q;R++){let D=Y+R/Q*H;E.x=q*Math.cos(D),E.y=q*Math.sin(D),X.push(E.x,E.y,E.z),U.push(0,0,1),N.x=(E.x/Z+1)/2,N.y=(E.y/Z+1)/2,V.push(N.x,N.y)}q+=G}for(let O=0;O<W;O++){let R=O*(Q+1);for(let D=0;D<Q;D++){let F=D+R,z=F,B=F+Q+1,L=F+Q+2,P=F+1;K.push(z,B,P),K.push(B,L,P)}}this.setIndex(K),this.setAttribute("position",new V5(X,3)),this.setAttribute("normal",new V5(U,3)),this.setAttribute("uv",new V5(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class s5 extends n5{constructor(J=1,Z=32,Q=16,W=0,Y=Math.PI*2,H=0,K=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Z,heightSegments:Q,phiStart:W,phiLength:Y,thetaStart:H,thetaLength:K},Z=Math.max(3,Math.floor(Z)),Q=Math.max(2,Math.floor(Q));let X=Math.min(H+K,Math.PI),U=0,V=[],q=new T,G=new T,E=[],N=[],O=[],R=[];for(let D=0;D<=Q;D++){let F=[],z=D/Q,B=0;if(D===0&&H===0)B=0.5/Z;else if(D===Q&&X===Math.PI)B=-0.5/Z;for(let L=0;L<=Z;L++){let P=L/Z;q.x=-J*Math.cos(W+P*Y)*Math.sin(H+z*K),q.y=J*Math.cos(H+z*K),q.z=J*Math.sin(W+P*Y)*Math.sin(H+z*K),N.push(q.x,q.y,q.z),G.copy(q).normalize(),O.push(G.x,G.y,G.z),R.push(P+B,1-z),F.push(U++)}V.push(F)}for(let D=0;D<Q;D++)for(let F=0;F<Z;F++){let z=V[D][F+1],B=V[D][F],L=V[D+1][F],P=V[D+1][F+1];if(D!==0||H>0)E.push(z,B,P);if(D!==Q-1||X<Math.PI)E.push(B,L,P)}this.setIndex(E),this.setAttribute("position",new V5(N,3)),this.setAttribute("normal",new V5(O,3)),this.setAttribute("uv",new V5(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s5(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class z0 extends V8{constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new g0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new g0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class S8 extends z0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return C5(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Z){this.ior=(1+0.4*Z)/(1-0.4*Z)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new g0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new g0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new g0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}function M9(J,Z,Q){if(!J||!Q&&J.constructor===Z)return J;if(typeof Z.BYTES_PER_ELEMENT==="number")return new Z(J);return Array.prototype.slice.call(J)}function nK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class v8{constructor(J,Z,Q,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Z.constructor(Q),this.sampleValues=Z,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Z=this.parameterPositions,Q=this._cachedIndex,W=Z[Q],Y=Z[Q-1];Q:{J:{let H;Z:{W:if(!(J<W)){for(let K=Q+2;;){if(W===void 0){if(J<Y)break W;return Q=Z.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===K)break;if(Y=W,W=Z[++Q],J<W)break J}H=Z.length;break Z}if(!(J>=Y)){let K=Z[1];if(J<K)Q=2,Y=K;for(let X=Q-2;;){if(Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===X)break;if(W=Y,Y=Z[--Q-1],J>=Y)break J}H=Q,Q=0;break Z}break Q}while(Q<H){let K=Q+H>>>1;if(J<Z[K])H=K;else Q=K+1}if(W=Z[Q],Y=Z[Q-1],Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return Q=Z.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,Y,W)}return this.interpolate_(Q,Y,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Z=this.resultBuffer,Q=this.sampleValues,W=this.valueSize,Y=J*W;for(let H=0;H!==W;++H)Z[H]=Q[Y+H];return Z}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class PZ extends v8{constructor(J,Z,Q,W){super(J,Z,Q,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Z,Q){let W=this.parameterPositions,Y=J-2,H=J+1,K=W[Y],X=W[H];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:Y=J,K=2*Z-Q;break;case 2402:Y=W.length-2,K=Z+W[Y]-W[Y+1];break;default:Y=J,K=Q}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*Q-Z;break;case 2402:H=1,X=Q+W[1]-W[0];break;default:H=J-1,X=Z}let U=(Q-Z)*0.5,V=this.valueSize;this._weightPrev=U/(Z-K),this._weightNext=U/(X-Q),this._offsetPrev=Y*V,this._offsetNext=H*V}interpolate_(J,Z,Q,W){let Y=this.resultBuffer,H=this.sampleValues,K=this.valueSize,X=J*K,U=X-K,V=this._offsetPrev,q=this._offsetNext,G=this._weightPrev,E=this._weightNext,N=(Q-Z)/(W-Z),O=N*N,R=O*N,D=-G*R+2*G*O-G*N,F=(1+G)*R+(-1.5-2*G)*O+(-0.5+G)*N+1,z=(-1-E)*R+(1.5+E)*O+0.5*N,B=E*R-E*O;for(let L=0;L!==K;++L)Y[L]=D*H[V+L]+F*H[U+L]+z*H[X+L]+B*H[q+L];return Y}}class TZ extends v8{constructor(J,Z,Q,W){super(J,Z,Q,W)}interpolate_(J,Z,Q,W){let Y=this.resultBuffer,H=this.sampleValues,K=this.valueSize,X=J*K,U=X-K,V=(Q-Z)/(W-Z),q=1-V;for(let G=0;G!==K;++G)Y[G]=H[U+G]*q+H[X+G]*V;return Y}}class SZ extends v8{constructor(J,Z,Q,W){super(J,Z,Q,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class U6{constructor(J,Z,Q,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Z===void 0||Z.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=M9(Z,this.TimeBufferType),this.values=M9(Q,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Z=J.constructor,Q;if(Z.toJSON!==this.toJSON)Q=Z.toJSON(J);else{Q={name:J.name,times:M9(J.times,Array),values:M9(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)Q.interpolation=W}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new SZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new TZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new PZ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Z;switch(J){case 2300:Z=this.InterpolantFactoryMethodDiscrete;break;case 2301:Z=this.InterpolantFactoryMethodLinear;break;case 2302:Z=this.InterpolantFactoryMethodSmooth;break}if(Z===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=Z,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Z=this.times;for(let Q=0,W=Z.length;Q!==W;++Q)Z[Q]+=J}return this}scale(J){if(J!==1){let Z=this.times;for(let Q=0,W=Z.length;Q!==W;++Q)Z[Q]*=J}return this}trim(J,Z){let Q=this.times,W=Q.length,Y=0,H=W-1;while(Y!==W&&Q[Y]<J)++Y;while(H!==-1&&Q[H]>Z)--H;if(++H,Y!==0||H!==W){if(Y>=H)H=Math.max(H,1),Y=H-1;let K=this.getValueSize();this.times=Q.slice(Y,H),this.values=this.values.slice(Y*K,H*K)}return this}validate(){let J=!0,Z=this.getValueSize();if(Z-Math.floor(Z)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,W=this.values,Y=Q.length;if(Y===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let K=0;K!==Y;K++){let X=Q[K];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,K,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,K,X,H),J=!1;break}H=X}if(W!==void 0){if(nK(W))for(let K=0,X=W.length;K!==X;++K){let U=W[K];if(isNaN(U)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,K,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Z=this.values.slice(),Q=this.getValueSize(),W=this.getInterpolation()===2302,Y=J.length-1,H=1;for(let K=1;K<Y;++K){let X=!1,U=J[K],V=J[K+1];if(U!==V&&(K!==1||U!==J[0]))if(!W){let q=K*Q,G=q-Q,E=q+Q;for(let N=0;N!==Q;++N){let O=Z[q+N];if(O!==Z[G+N]||O!==Z[E+N]){X=!0;break}}}else X=!0;if(X){if(K!==H){J[H]=J[K];let q=K*Q,G=H*Q;for(let E=0;E!==Q;++E)Z[G+E]=Z[q+E]}++H}}if(Y>0){J[H]=J[Y];for(let K=Y*Q,X=H*Q,U=0;U!==Q;++U)Z[X+U]=Z[K+U];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Z.slice(0,H*Q);else this.times=J,this.values=Z;return this}clone(){let J=this.times.slice(),Z=this.values.slice(),W=new this.constructor(this.name,J,Z);return W.createInterpolant=this.createInterpolant,W}}U6.prototype.TimeBufferType=Float32Array;U6.prototype.ValueBufferType=Float32Array;U6.prototype.DefaultInterpolation=2301;class q8 extends U6{}q8.prototype.ValueTypeName="bool";q8.prototype.ValueBufferType=Array;q8.prototype.DefaultInterpolation=2300;q8.prototype.InterpolantFactoryMethodLinear=void 0;q8.prototype.InterpolantFactoryMethodSmooth=void 0;class vZ extends U6{}vZ.prototype.ValueTypeName="color";class fZ extends U6{}fZ.prototype.ValueTypeName="number";class bZ extends v8{constructor(J,Z,Q,W){super(J,Z,Q,W)}interpolate_(J,Z,Q,W){let Y=this.resultBuffer,H=this.sampleValues,K=this.valueSize,X=(Q-Z)/(W-Z),U=J*K;for(let V=U+K;U!==V;U+=4)x6.slerpFlat(Y,0,H,U-K,H,U,X);return Y}}class b9 extends U6{InterpolantFactoryMethodLinear(J){return new bZ(this.times,this.values,this.getValueSize(),J)}}b9.prototype.ValueTypeName="quaternion";b9.prototype.DefaultInterpolation=2301;b9.prototype.InterpolantFactoryMethodSmooth=void 0;class E8 extends U6{}E8.prototype.ValueTypeName="string";E8.prototype.ValueBufferType=Array;E8.prototype.DefaultInterpolation=2300;E8.prototype.InterpolantFactoryMethodLinear=void 0;E8.prototype.InterpolantFactoryMethodSmooth=void 0;class hZ extends U6{}hZ.prototype.ValueTypeName="vector";class jZ{constructor(J,Z,Q){let W=this,Y=!1,H=0,K=0,X=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Z,this.onError=Q,this.itemStart=function(V){if(K++,Y===!1){if(W.onStart!==void 0)W.onStart(V,H,K)}Y=!0},this.itemEnd=function(V){if(H++,W.onProgress!==void 0)W.onProgress(V,H,K);if(H===K){if(Y=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(V){if(W.onError!==void 0)W.onError(V)},this.resolveURL=function(V){if(X)return X(V);return V},this.setURLModifier=function(V){return X=V,this},this.addHandler=function(V,q){return U.push(V,q),this},this.removeHandler=function(V){let q=U.indexOf(V);if(q!==-1)U.splice(q,2);return this},this.getHandler=function(V){for(let q=0,G=U.length;q<G;q+=2){let E=U[q],N=U[q+1];if(E.global)E.lastIndex=0;if(E.test(V))return N}return null}}}var sK=new jZ;class yZ{constructor(J){this.manager=J!==void 0?J:sK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Z){let Q=this;return new Promise(function(W,Y){Q.load(J,W,Z,Y)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}yZ.DEFAULT_MATERIAL_NAME="__DEFAULT";class f8 extends k5{constructor(J,Z=1){super();this.isLight=!0,this.type="Light",this.color=new g0(J),this.intensity=Z}dispose(){}copy(J,Z){return super.copy(J,Z),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Z=super.toJSON(J);if(Z.object.color=this.color.getHex(),Z.object.intensity=this.intensity,this.groundColor!==void 0)Z.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Z.object.distance=this.distance;if(this.angle!==void 0)Z.object.angle=this.angle;if(this.decay!==void 0)Z.object.decay=this.decay;if(this.penumbra!==void 0)Z.object.penumbra=this.penumbra;if(this.shadow!==void 0)Z.object.shadow=this.shadow.toJSON();return Z}}class i7 extends f8{constructor(J,Z,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(k5.DEFAULT_UP),this.updateMatrix(),this.groundColor=new g0(Z)}copy(J,Z){return super.copy(J,Z),this.groundColor.copy(J.groundColor),this}}var $7=new F5,nJ=new T,sJ=new T;class o7{constructor(J){this.camera=J,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q0(512,512),this.map=null,this.mapPass=null,this.matrix=new F5,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new k9,this._frameExtents=new q0(1,1),this._viewportCount=1,this._viewports=[new K5(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Z=this.camera,Q=this.matrix;nJ.setFromMatrixPosition(J.matrixWorld),Z.position.copy(nJ),sJ.setFromMatrixPosition(J.target.matrixWorld),Z.lookAt(sJ),Z.updateMatrixWorld(),$7.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix($7),Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Q.multiply($7)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var iJ=new F5,$8=new T,C7=new T;class _Z extends o7{constructor(){super(new h5(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new q0(4,2),this._viewportCount=6,this._viewports=[new K5(2,1,1,1),new K5(0,1,1,1),new K5(3,1,1,1),new K5(1,1,1,1),new K5(3,0,1,1),new K5(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(J,Z=0){let Q=this.camera,W=this.matrix,Y=J.distance||Q.far;if(Y!==Q.far)Q.far=Y,Q.updateProjectionMatrix();$8.setFromMatrixPosition(J.matrixWorld),Q.position.copy($8),C7.copy(Q.position),C7.add(this._cubeDirections[Z]),Q.up.copy(this._cubeUps[Z]),Q.lookAt(C7),Q.updateMatrixWorld(),W.makeTranslation(-$8.x,-$8.y,-$8.z),iJ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iJ)}}class F8 extends f8{constructor(J,Z,Q=0,W=2){super(J,Z);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=W,this.shadow=new _Z}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Z){return super.copy(J,Z),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class xZ extends o7{constructor(){super(new x7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class r7 extends f8{constructor(J,Z){super(J,Z);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(k5.DEFAULT_UP),this.updateMatrix(),this.target=new k5,this.shadow=new xZ}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class a7 extends f8{constructor(J,Z){super(J,Z);this.isAmbientLight=!0,this.type="AmbientLight"}}var t7="\\[\\]\\.:\\/",iK=new RegExp("["+t7+"]","g"),e7="[^"+t7+"]",oK="[^"+t7.replace("\\.","")+"]",rK=/((?:WC+[\/:])*)/.source.replace("WC",e7),aK=/(WCOD+)?/.source.replace("WCOD",oK),tK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e7),eK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e7),JU=new RegExp("^"+rK+aK+tK+eK+"$"),ZU=["material","materials","bones","map"];class gZ{constructor(J,Z,Q){let W=Q||Z5.parseTrackName(Z);this._targetGroup=J,this._bindings=J.subscribe_(Z,W)}getValue(J,Z){this.bind();let Q=this._targetGroup.nCachedObjects_,W=this._bindings[Q];if(W!==void 0)W.getValue(J,Z)}setValue(J,Z){let Q=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Y=Q.length;W!==Y;++W)Q[W].setValue(J,Z)}bind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Q=J.length;Z!==Q;++Z)J[Z].bind()}unbind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Q=J.length;Z!==Q;++Z)J[Z].unbind()}}class Z5{constructor(J,Z,Q){this.path=Z,this.parsedPath=Q||Z5.parseTrackName(Z),this.node=Z5.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Z,Q){if(!(J&&J.isAnimationObjectGroup))return new Z5(J,Z,Q);else return new Z5.Composite(J,Z,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iK,"")}static parseTrackName(J){let Z=JU.exec(J);if(Z===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:Z[2],objectName:Z[3],objectIndex:Z[4],propertyName:Z[5],propertyIndex:Z[6]},W=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Y=Q.nodeName.substring(W+1);if(ZU.indexOf(Y)!==-1)Q.nodeName=Q.nodeName.substring(0,W),Q.objectName=Y}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,Z){if(Z===void 0||Z===""||Z==="."||Z===-1||Z===J.name||Z===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName(Z);if(Q!==void 0)return Q}if(J.children){let Q=function(Y){for(let H=0;H<Y.length;H++){let K=Y[H];if(K.name===Z||K.uuid===Z)return K;let X=Q(K.children);if(X)return X}return null},W=Q(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Z){J[Z]=this.targetObject[this.propertyName]}_getValue_array(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)J[Z++]=Q[W]}_getValue_arrayElement(J,Z){J[Z]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Z){this.resolvedProperty.toArray(J,Z)}_setValue_direct(J,Z){this.targetObject[this.propertyName]=J[Z]}_setValue_direct_setNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)Q[W]=J[Z++]}_setValue_array_setNeedsUpdate(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)Q[W]=J[Z++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Z){let Q=this.resolvedProperty;for(let W=0,Y=Q.length;W!==Y;++W)Q[W]=J[Z++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z]}_setValue_arrayElement_setNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Z){this.resolvedProperty.fromArray(J,Z)}_setValue_fromArray_setNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Z){this.bind(),this.getValue(J,Z)}_setValue_unbound(J,Z){this.bind(),this.setValue(J,Z)}bind(){let J=this.node,Z=this.parsedPath,Q=Z.objectName,W=Z.propertyName,Y=Z.propertyIndex;if(!J)J=Z5.findNode(this.rootNode,Z.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let U=Z.objectIndex;switch(Q){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let V=0;V<J.length;V++)if(J[V].name===U){U=V;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(U!==void 0){if(J[U]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let H=J[W];if(H===void 0){let U=Z.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+U+"."+W+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)K=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)K=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(Y!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Y]!==void 0)Y=J.morphTargetDictionary[Y]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=Y}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Z5.Composite=gZ;Z5.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Z5.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Z5.prototype.GetterByBindingType=[Z5.prototype._getValue_direct,Z5.prototype._getValue_array,Z5.prototype._getValue_arrayElement,Z5.prototype._getValue_toArray];Z5.prototype.SetterByBindingTypeAndVersioning=[[Z5.prototype._setValue_direct,Z5.prototype._setValue_direct_setNeedsUpdate,Z5.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Z5.prototype._setValue_array,Z5.prototype._setValue_array_setNeedsUpdate,Z5.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Z5.prototype._setValue_arrayElement,Z5.prototype._setValue_arrayElement_setNeedsUpdate,Z5.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Z5.prototype._setValue_fromArray,Z5.prototype._setValue_fromArray_setNeedsUpdate,Z5.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kU=new Float32Array(1);class h9{constructor(J,Z,Q=0,W=1/0){this.ray=new b7(J,Z),this.near=Q,this.far=W,this.camera=null,this.layers=new C9,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Z){this.ray.set(J,Z)}setFromCamera(J,Z){if(Z.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Z.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Z).sub(this.ray.origin).normalize(),this.camera=Z;else if(Z.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Z.near+Z.far)/(Z.near-Z.far)).unproject(Z),this.ray.direction.set(0,0,-1).transformDirection(Z.matrixWorld),this.camera=Z;else console.error("THREE.Raycaster: Unsupported camera type: "+Z.type)}intersectObject(J,Z=!0,Q=[]){return T7(J,this,Q,Z),Q.sort(oJ),Q}intersectObjects(J,Z=!0,Q=[]){for(let W=0,Y=J.length;W<Y;W++)T7(J[W],this,Q,Z);return Q.sort(oJ),Q}}function oJ(J,Z){return J.distance-Z.distance}function T7(J,Z,Q,W){if(J.layers.test(Z.layers))J.raycast(Z,Q);if(W===!0){let Y=J.children;for(let H=0,K=Y.length;H<K;H++)T7(Y[H],Z,Q,!0)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="160";var g6=(J,Z,Q)=>Math.min(Q,Math.max(Z,J));var WU=(J)=>J<0.5?2*J*J:1-Math.pow(-2*J+2,2)/2,pZ=[{id:0,key:"ava",height:1.68,shoulder:0.46,hair:"long"},{id:1,key:"max",height:1.78,shoulder:0.54,hair:"short"},{id:2,key:"rin",height:1.64,shoulder:0.48,hair:"beanie"}],h8=[3526911,16732067,16757575,7069818,10189823,16743004,15262678,3046911];function p6(J,Z){let Q=document.createElement("canvas");return Q.width=J,Q.height=Z,{canvas:Q,ctx:Q.getContext("2d")}}function YU(J,Z,Q,W){let Y=String(Z||"").split(/\s+/),H=[],K="";for(let X of Y){let U=K?`${K} ${X}`:X;if(J.measureText(U).width>Q&&K){if(H.push(K),K=X,H.length===W)return H[W-1]=`${H[W-1].replace(/[.,;:]$/,"")}…`,H}else K=U}if(K)H.push(K);return H}function l5(J,Z){let Q=J>>16&255,W=J>>8&255,Y=J&255;return`rgba(${Q}, ${W}, ${Y}, ${Z})`}class J4{constructor(J,Z){this.canvas=J,this.layoutDesks=Z&&Z.desks?Z.desks:[],this.lang="en",this.projects=[],this.focusId=-1,this.mode="cinematic",this.blend=0,this.time=0,this.avatarPos={x:9,z:14.1},this.avatarYaw=Math.PI,this.targetYaw=Math.PI,this.speed=0,this.walkPhase=0,this.cameraOrbit={yaw:0,pitch:0.24,dist:5.6},this.cameraTarget=new T(9,1.15,14.1),this.cameraPos=new T(9,2.4,9),this.panelAnchors=[],this.raycaster=new h9,this.cameraRay=new h9,this.pointer=new q0,this.blockers=[],this.renderer=new w9({canvas:J,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rJ,this.renderer.outputColorSpace=O6,this.renderer.toneMapping=aJ,this.renderer.toneMappingExposure=1.28,this.scene=new m7,this.scene.background=new g0(329228),this.scene.fog=new P9(395022,0.012),this.camera=new h5(56,1,0.05,120),this.buildLights(),this.buildRoom(),this.buildCity(),this.buildReception(),this.buildLounge(),this.buildDetails(),this.buildDesks(),this.buildAvatar(),this.scene.traverse((Q)=>{if(Q.isMesh&&Q.userData&&Q.userData.blocker)this.blockers.push(Q)}),this.resize()}buildLights(){let J=new i7(8163263,2761252,0.95);this.scene.add(J);let Z=new a7(5988736,0.85);this.scene.add(Z);let Q=new r7(10467071,1.7);Q.position.set(6,11,-4),Q.castShadow=!0,Q.shadow.mapSize.set(2048,2048),Q.shadow.camera.left=-15,Q.shadow.camera.right=15,Q.shadow.camera.top=15,Q.shadow.camera.bottom=-15,Q.shadow.camera.near=1,Q.shadow.camera.far=40,Q.shadow.bias=-0.0006,Q.shadow.normalBias=0.03,this.scene.add(Q);let W=16764826,Y=[[5.2,4.2],[11.2,4.2],[18.4,4.2],[5.2,10.8],[11.2,10.8],[18.4,10.8]];for(let[V,q]of Y){let G=new F8(W,42,15,2);G.position.set(V,3.05,q),this.scene.add(G);let E=new o(new C0(2,0.07,0.16),new z0({color:16773590,emissive:16767400,emissiveIntensity:2.4,roughness:0.4}));E.position.set(V,3.34,q),this.scene.add(E);let N=new o(new O5(0.01,0.01,0.28,4),new B5({color:1118744}));N.position.set(V,3.46,q),this.scene.add(N)}let H=new F8(7317759,10,18,2);H.position.set(12,2.4,0.6),this.scene.add(H);let K=new F8(16766894,34,18,2);K.position.set(10,3,18.4),this.scene.add(K);let X=new o(new C0(1.8,0.06,0.14),new z0({color:16773590,emissive:16767400,emissiveIntensity:2.2,roughness:0.4}));X.position.set(12,3.5,19.6),this.scene.add(X);let U=new F8(10475775,16,10,2);U.position.set(12,2.6,11.6),this.scene.add(U)}buildRoom(){let W=(()=>{let{canvas:$,ctx:v}=p6(256,256);v.fillStyle="#2a2732",v.fillRect(0,0,256,256);for(let s=0;s<2400;s+=1){let w=28+Math.random()*28;v.fillStyle=`rgba(${w+8}, ${w+4}, ${w+14}, 0.5)`,v.fillRect(Math.random()*256,Math.random()*256,1.5,1.5)}v.strokeStyle="rgba(12, 11, 18, 0.5)",v.lineWidth=1;for(let s=0;s<=256;s+=32)v.beginPath(),v.moveTo(s,0),v.lineTo(s,256),v.stroke(),v.beginPath(),v.moveTo(0,s),v.lineTo(256,s),v.stroke();let n=new R6($);return n.colorSpace=O6,n.wrapS=P8,n.wrapT=P8,n.repeat.set(12,8),n.anisotropy=8,n})(),Y=new o(new A5(24,40),new z0({color:16777215,map:W,roughness:0.9,metalness:0.04}));Y.rotation.x=-Math.PI/2,Y.position.set(12,0,12),Y.receiveShadow=!0,this.scene.add(Y);let H=new o(new C0(24,0.02,0.1),new z0({color:4868696,metalness:0.4,roughness:0.4}));H.position.set(12,0.01,16),this.scene.add(H);let K=new o(new A5(22,3.2),new S8({color:7311296,transparent:!0,opacity:0.08,roughness:0.1,metalness:0.2,side:A9}));K.position.set(12,1.6,23.4),this.scene.add(K);for(let $=0;$<5;$+=1){let v=new o(new C0(0.07,3.2,0.07),new z0({color:1315867,roughness:0.5}));v.position.set(1.6+$*20.8/4,1.6,23.4),this.scene.add(v)}let X=new o(new A5(3.2,12.4),new z0({color:2828089,roughness:1}));X.rotation.x=-Math.PI/2,X.position.set(12,0.006,8.2),X.receiveShadow=!0,this.scene.add(X);let U=new z0({color:2894646,roughness:0.95}),V=new z0({color:1841956,roughness:0.9}),q=($,v,n,s,w,_=0)=>{let u=new o(new C0($,v,0.16),U);return u.position.set(n,s,w),u.rotation.y=_,u.receiveShadow=!0,u.userData.blocker=!0,this.scene.add(u),u};q(0.16,3.6,0,1.8,8,Math.PI/2),q(0.16,3.6,24,1.8,8,Math.PI/2);let G=5.4,E=0.9,N=4.6;q(N-0.45,3.6,(N-0.45)/2,1.8,0),q(24-(N+G*3+E*2)+0.45,3.6,(N+G*3+E*2+24)/2,1.8,0);for(let $=0;$<3;$+=1){let v=N+$*(G+E);if(q(G,0.85,v+G/2,0.425,0),q(G,0.5,v+G/2,3.35,0),$<2)q(E,3.6,v+G+E/2,1.8,0);let n=new o(new A5(G-0.1,2.2),new S8({color:10340351,transparent:!0,opacity:0.09,roughness:0.08,metalness:0.1,side:A9}));n.position.set(v+G/2,2.25,0.02),this.scene.add(n);for(let w=0;w<=2;w+=1){let _=new o(new C0(0.06,2.2,0.06),V);_.position.set(v+0.05+w*(G-0.1)/2,2.25,0.06),this.scene.add(_)}let s=new o(new C0(G,0.06,0.3),V);s.position.set(v+G/2,1.12,0.14),s.castShadow=!0,this.scene.add(s)}let O=new o(new A5(24,16),new z0({color:1513247,roughness:1}));O.rotation.x=Math.PI/2,O.position.set(12,3.6,8),this.scene.add(O);let R=new o(new A5(24,10),new z0({color:1381661,roughness:1}));R.rotation.x=Math.PI/2,R.position.set(12,3.6,19),this.scene.add(R);let D=new o(new A5(8,3.4),new z0({color:3485764,roughness:1}));D.rotation.x=-Math.PI/2,D.position.set(12,0.008,19.2),D.receiveShadow=!0,this.scene.add(D);let F=new z0({color:3812904,roughness:0.7}),z=new o(new C0(3.2,0.1,0.5),F);z.position.set(12,0.44,21.4),z.castShadow=!0,this.scene.add(z);for(let $ of[-1.3,1.3]){let v=new o(new C0(0.08,0.42,0.44),new z0({color:1381402,roughness:0.5}));v.position.set(12+$,0.21,21.4),this.scene.add(v)}let B=new z0({color:1315867,roughness:0.7}),L=($,v,n,s=0)=>{let w=new o(new C0($,0.12,0.05),B);w.position.set(v,0.06,n),w.rotation.y=s,this.scene.add(w)};L(16,0.1,8,Math.PI/2),L(16,23.9,8,Math.PI/2),this.buildNeonSign(23.9,2.4,9.4,-Math.PI/2);let P=new q5,k=new o(new O5(0.22,0.22,0.03,28),new z0({color:14275266,roughness:0.7}));k.rotation.x=Math.PI/2,P.add(k);let f=new B5({color:1315867}),m=new o(new C0(0.02,0.13,0.012),f);m.position.set(0,0.05,0.03),m.rotation.z=-0.6,P.add(m);let A=new o(new C0(0.015,0.18,0.012),f);A.position.set(0.03,0.07,0.035),A.rotation.z=-1.9,P.add(A),P.position.set(2.4,2.45,0.12),this.scene.add(P)}buildNeonSign(J,Z,Q,W){let{canvas:Y,ctx:H}=p6(1024,320);H.fillStyle="#0a0810",H.fillRect(0,0,1024,320),H.strokeStyle="rgba(255,79,163,0.85)",H.lineWidth=6,H.strokeRect(10,10,1004,300),H.font="900 128px ui-sans-serif, system-ui, sans-serif",H.textAlign="center",H.textBaseline="middle",H.shadowColor="#ff4fa3",H.shadowBlur=46,H.fillStyle="#ffbfd9",H.fillText("AFTER HOURS",512,156),H.shadowBlur=0,H.font="600 30px ui-monospace, monospace",H.fillStyle="rgba(255,191,217,0.6)",H.fillText("NO STANDUPS PAST MIDNIGHT",512,266);let K=new R6(Y);K.colorSpace=O6,K.anisotropy=4;let X=new o(new A5(3.2,1),new B5({map:K,transparent:!0}));X.position.set(J,Z,Q),X.rotation.y=W,this.scene.add(X)}buildCity(){let J=(()=>{let{canvas:W,ctx:Y}=p6(128,256);Y.fillStyle="#05060c",Y.fillRect(0,0,128,256);for(let K=6;K<250;K+=10)for(let X=6;X<122;X+=12)if(Math.random()<0.42){let U=Math.random()<0.35;Y.fillStyle=U?"rgba(255,190,110,0.85)":"rgba(130,190,255,0.7)",Y.fillRect(X,K,5,4)}let H=new R6(W);return H.colorSpace=O6,H.wrapS=P8,H.wrapT=P8,H})(),Z=(W,Y)=>W+Math.random()*(Y-W);for(let W=0;W<26;W+=1){let Y=Z(2.5,6),H=Z(4,20),K=Z(-10,34),X=Z(-24,-3.5),U=J.clone();U.needsUpdate=!0,U.repeat.set(Math.max(1,Math.round(Y/2.2)),Math.max(1,Math.round(H/4)));let V=new o(new C0(Y,H,Y),new B5({map:U,color:8952251,fog:!0}));V.position.set(K,H/2-1.2,X),this.scene.add(V)}for(let W=0;W<16;W+=1){let Y=Z(3,7),H=Z(5,18),K=Z(-6,30),X=Z(27,40),U=J.clone();U.needsUpdate=!0,U.repeat.set(Math.max(1,Math.round(Y/2.2)),Math.max(1,Math.round(H/4)));let V=new o(new C0(Y,H,Y),new B5({map:U,color:8228016,fog:!0}));V.position.set(K,H/2-1.4,X),this.scene.add(V)}let Q=new o(new S9(1.2,32),new B5({color:13621503,transparent:!0,opacity:0.55}));Q.position.set(17,10,-28),this.scene.add(Q)}buildReception(){let J=new q5,Z=new z0({color:2763576,roughness:0.65}),Q=new o(new C0(4,1.08,1.2),Z);Q.position.set(12,0.54,11.8),Q.castShadow=!0,Q.receiveShadow=!0,Q.userData.blocker=!0,J.add(Q);let W=new o(new C0(4.25,0.07,1.4),new z0({color:4864560,roughness:0.5}));W.position.set(12,1.12,11.8),W.castShadow=!0,W.userData.blocker=!0,J.add(W);let Y=new o(new C0(3.6,0.035,0.02),new B5({color:3526911}));Y.position.set(12,0.92,12.41),J.add(Y);let{canvas:H,ctx:K}=p6(1024,320);K.clearRect(0,0,1024,320),K.textAlign="center",K.font="800 96px ui-sans-serif, system-ui, sans-serif",K.fillStyle="#eef1f7",K.fillText("ARGGON LABS",512,120),K.font="600 30px ui-monospace, monospace",K.fillStyle="#6f7488",K.letterSpacing="8px",K.fillText("CANDIDATE EVALUATION",512,184);let X=new R6(H);X.colorSpace=O6;let U=new o(new A5(3.1,0.97),new B5({map:X,transparent:!0}));U.position.set(12,1.55,12.42),J.add(U);let V=new q5,q=new o(new C0(0.9,0.55,0.05),new z0({color:723728,roughness:0.4}));V.add(q);let G=new o(new A5(0.82,0.47),new B5({map:this.screenTexture(-1,"INTAKE",3526911)}));G.position.z=0.03,V.add(G),V.position.set(10.85,1.47,11.55),V.rotation.y=0,J.add(V);let E=new z0({color:14209732,roughness:0.9});for(let N=0;N<3;N+=1){let O=new o(new C0(0.34,0.02,0.26),E);O.position.set(13+N*0.02,1.18+N*0.022,11.72+N*0.015),O.rotation.y=N*0.14,O.castShadow=!0,J.add(O)}this.scene.add(J)}buildLounge(){let J=new q5,Z=new z0({color:3422797,roughness:0.95}),Q=new o(new C0(3.2,0.42,1.4),Z);Q.position.set(12,0.21,1.9),Q.castShadow=!0,Q.userData.blocker=!0,J.add(Q);let W=new o(new C0(3.2,0.62,0.32),Z);W.position.set(12,0.72,1.34),W.castShadow=!0,W.userData.blocker=!0,J.add(W);for(let G of[10.55,13.45]){let E=new o(new C0(0.32,0.2,1.4),Z);E.position.set(G,0.62,1.9),E.castShadow=!0,J.add(E)}for(let G of[11.2,12.8]){let E=new o(new C0(1.2,0.16,1.05),Z);E.position.set(G,0.5,1.94),E.castShadow=!0,J.add(E)}for(let[G,E]of[[11,16732067],[13,3526911]]){let N=new o(new C0(0.4,0.34,0.14),new z0({color:E,roughness:0.9}));N.position.set(G,0.66,1.62),N.rotation.z=G<12?0.3:-0.3,N.castShadow=!0,J.add(N)}let Y=new z0({color:3878697,roughness:0.55}),H=new o(new C0(1.6,0.06,0.9),Y);H.position.set(12,0.42,3.55),H.castShadow=!0,H.receiveShadow=!0,J.add(H);for(let[G,E]of[[-0.7,-0.35],[0.7,-0.35],[-0.7,0.35],[0.7,0.35]]){let N=new o(new C0(0.05,0.42,0.05),new z0({color:1512989,roughness:0.4}));N.position.set(12+G,0.21,3.55+E),J.add(N)}let K=new z0({color:16757575,roughness:0.6}),X=new o(new O5(0.06,0.055,0.11,12),K);X.position.set(11.7,0.51,3.5),X.castShadow=!0,J.add(X);let U=new o(new C0(0.42,0.02,0.3),new z0({color:2434606,roughness:0.4}));U.position.set(12.35,0.46,3.45),J.add(U);let V=new o(new C0(0.42,0.27,0.015),new z0({color:1381660,roughness:0.3}));V.position.set(12.35,0.6,3.28),V.rotation.x=-0.25,J.add(V);let q=new o(new A5(5.4,3.4),new z0({color:3287872,roughness:1}));q.rotation.x=-Math.PI/2,q.position.set(12,0.004,2.6),q.receiveShadow=!0,J.add(q),this.scene.add(J)}buildDetails(){for(let[E,N,O]of[[1.3,1.3,1.1],[22.7,1.3,1.2],[1.3,14.7,1],[22.7,14.7,1.15]]){let R=new q5,D=new o(new O5(0.28,0.22,0.5,12),new z0({color:2762016,roughness:0.9}));D.position.y=0.25,D.castShadow=!0,R.add(D);let F=new o(new O5(0.035,0.045,0.9,6),new z0({color:3097652,roughness:1}));F.position.y=0.95,R.add(F);for(let z=0;z<5;z+=1){let B=new o(new s5(0.3,8,6),new z0({color:z%2?3107653:4030290,roughness:1})),L=z/5*Math.PI*2;B.position.set(Math.cos(L)*0.28,1.35+z%3*0.16,Math.sin(L)*0.28),B.scale.set(1,0.7,1),B.castShadow=!0,R.add(B)}R.position.set(E,0,N),R.scale.setScalar(O),this.scene.add(R)}let J=new q5,Z=new z0({color:3812904,roughness:0.7}),Q=new o(new C0(0.7,4,4.2),Z);Q.position.set(1.05,2,6.4),Q.castShadow=!0,Q.receiveShadow=!0,Q.userData.blocker=!0,J.add(Q);for(let E=0;E<5;E+=1){let N=0.45+E*0.78,O=[16732067,16757575,3526911,7069818,10189823,14209732];for(let R=0;R<7;R+=1){let D=0.07+Math.random()*0.05,F=0.3+Math.random()*0.18,z=new o(new C0(0.24,F,D),new z0({color:O[(R+E)%O.length],roughness:0.85}));z.position.set(1.42,N+F/2,4.55+R*0.24),z.castShadow=!0,J.add(z)}}this.scene.add(J);let W=new q5,Y=new o(new O5(0.32,0.32,1,14),new z0({color:13223613,roughness:0.7}));Y.position.y=0.5,Y.castShadow=!0,W.add(Y);let H=new o(new O5(0.22,0.26,0.5,14),new S8({color:8369896,roughness:0.15,transparent:!0,opacity:0.6}));H.position.y=1.25,W.add(H),W.position.set(22.9,0,8),this.scene.add(W);let K=new o(new C0(2.8,1.5,0.06),new z0({color:14276559,roughness:0.85}));K.position.set(21.2,1.9,0.12),K.castShadow=!0,K.userData.blocker=!0,this.scene.add(K);let X=(()=>{let{canvas:E,ctx:N}=p6(1024,560);N.fillStyle="#e6e4db",N.fillRect(0,0,1024,560),N.strokeStyle="rgba(30,30,40,0.14)";for(let D=80;D<560;D+=90)N.beginPath(),N.moveTo(0,D),N.lineTo(1024,D),N.stroke();N.fillStyle="#1d2440",N.font="700 44px ui-sans-serif, system-ui, sans-serif",N.fillText("BEFORE WE SHIP",54,78),N.font="600 32px ui-monospace, monospace",["1. kill flaky tests   ✓","2. demo > slides      ✓","3. docs future-me     ~","4. deploy on friday   ?"].forEach((D,F)=>{N.fillStyle=F===3?"#b4232f":"#2b3550",N.fillText(D,56,160+F*78)}),N.strokeStyle="#b4232f",N.lineWidth=5,N.beginPath(),N.moveTo(714,390),N.lineTo(908,434),N.stroke();let R=new R6(E);return R.colorSpace=O6,R})(),U=new o(new A5(2.7,1.4),new B5({map:X}));U.position.set(21.2,1.9,0.16),this.scene.add(U);let V=new q5,q=new o(new O5(0.03,0.03,1.8,8),new z0({color:1644832,metalness:0.5,roughness:0.4}));q.position.y=0.9,V.add(q);let G=new o(new v9(0.34,0.9,8),new z0({color:4865877,roughness:0.95}));G.position.set(0.1,1.35,0.05),G.rotation.z=0.08,V.add(G),V.position.set(21.8,0,14.2),this.scene.add(V)}buildDesks(){this.deskGroups=[],this.panels=[];let J=this.layoutDesks||[];for(let Z=0;Z<6;Z+=1){let Q=J[Z]||{x:380,y:270,w:300,h:120,hue:3526911,side:0};this.buildDesk(Q,Z)}}buildDesk(J,Z){let Q=new q5,W=J.x/100,Y=J.y/100,H=J.w/100,K=J.h/100,X=W+H/2,U=Y+K/2,V=J.side||0,q=J.hue,G=V===0?1:-1,E=new z0({color:4075817,roughness:0.62}),N=new z0({color:1513246,metalness:0.5,roughness:0.35}),O=new z0({color:q,emissive:q,emissiveIntensity:0.8,roughness:0.4}),R=new o(new C0(H,0.08,K),E);R.position.set(X,0.78,U),R.castShadow=!0,R.receiveShadow=!0,R.userData.blocker=!0,Q.add(R);let D=new o(new C0(0.06,0.5,K*0.9),E);D.position.set(X+G*(H/2-0.06),0.5,U),Q.add(D);for(let[y,i]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let W0=new o(new C0(0.06,0.78,0.06),N);W0.position.set(X+y*(H/2-0.12),0.39,U+i*(K/2-0.12)),Q.add(W0)}let F=new q5,z=new o(new C0(0.98,0.6,0.05),new z0({color:657936,roughness:0.35}));z.castShadow=!0,F.add(z);let B=new o(new A5(0.9,0.52),new B5({map:this.screenTexture(Z,"",q)}));B.position.z=0.028,B.userData={deskId:Z},F.add(B);let L=new o(new O5(0.025,0.025,0.26,8),N);L.position.y=-0.43,F.add(L);let P=new o(new C0(0.34,0.03,0.18),N);P.position.y=-0.56,F.add(P),F.position.set(X+G*0.35,1.16,U),F.rotation.y=V===0?Math.PI/2:-Math.PI/2,Q.add(F);let k=new o(new C0(0.52,0.025,0.17),new z0({color:1842212,roughness:0.6}));k.position.set(X+G*-0.15,0.835,U),k.rotation.y=F.rotation.y,k.castShadow=!0,Q.add(k);let f=new o(new O5(0.055,0.05,0.12,12),new z0({color:Z%2?15262678:2829107,roughness:0.6}));f.position.set(X+G*-0.55,0.88,U+0.32),f.castShadow=!0,Q.add(f);let m=new o(new O5(0.09,0.07,0.13,8),new z0({color:7031349,roughness:0.9}));m.position.set(X+G*-0.72,0.86,U-0.36),Q.add(m);let A=new o(new s5(0.1,8,6),new z0({color:4160079,roughness:1}));A.scale.y=0.7,A.position.set(X+G*-0.72,0.96,U-0.36),A.castShadow=!0,Q.add(A);let $=new q5,v=new z0({color:2105642,roughness:0.9}),n=new o(new C0(0.52,0.09,0.5),v);n.position.y=0.47,n.castShadow=!0,$.add(n);let s=new o(new C0(0.5,0.55,0.08),v);s.position.set(0,0.78,-0.22),s.rotation.x=0.08,s.castShadow=!0,$.add(s);let w=new o(new O5(0.04,0.04,0.38,8),N);w.position.y=0.24,$.add(w);for(let y=0;y<5;y+=1){let i=y/5*Math.PI*2,W0=new o(new C0(0.3,0.04,0.06),N);W0.position.set(Math.cos(i)*0.13,0.05,Math.sin(i)*0.13),W0.rotation.y=-i,$.add(W0)}$.position.set(X+G*-0.95,0,U+0.05),$.rotation.y=V===0?-0.35:Math.PI+0.35,Q.add($);let _=new q5,u=this.panelTexture(Z),a=new B5({map:u,transparent:!0,toneMapped:!1}),c=new o(new A5(1.7,1.03),a);c.userData={deskId:Z,blocker:!0},_.add(c);let d=new o(new A5(1.82,1.15),new z0({color:789780,emissive:q,emissiveIntensity:0.35,metalness:0.4,roughness:0.35,transparent:!0,opacity:0.75}));d.position.z=-0.012,d.userData.blocker=!0,_.add(d);let e=new o(new O5(0.035,0.045,1.1,8),N);e.position.set(X+G*0.85,1,U-0.5),Q.add(e);let Q0=new o(new s5(0.05,8,6),O);Q0.position.set(X+G*0.85,1.5,U-0.5),Q.add(Q0),_.position.set(X+G*0.92,2,U),_.rotation.y=V===0?Math.PI/2:-Math.PI/2,_.rotation.x=-0.05,Q.add(_),this.panels.push({group:_,mesh:c,tex:u,index:Z,baseY:2}),this.scene.add(Q),this.deskGroups.push(Q)}buildAvatar(){let J=new o(new f9(0.62,0.74,56),new B5({color:3526911,transparent:!0,opacity:0.45,side:A9}));J.rotation.x=-Math.PI/2,J.position.set(12,0.02,7.9),J.visible=!1,this.createPad=J,this.scene.add(J),this.avatar=new q5,this.scene.add(this.avatar),this.setAvatar({preset:0,color:h8[0]})}setAvatar({preset:J=0,color:Z=h8[0]}){if(this.avatarPreset=J,this.avatarColor=Z,this.avatarBody)this.avatar.remove(this.avatarBody),this.avatarBody.traverse((L)=>{if(L.geometry)L.geometry.dispose();if(L.material)L.material.dispose()});let Q=pZ[J]||pZ[0],W=new q5,Y=new z0({color:Z,roughness:0.85}),H=new z0({color:new g0(Z).multiplyScalar(0.55),roughness:0.9}),K=new z0({color:14264703,roughness:0.75}),X=new z0({color:1578012,roughness:0.9}),U=new z0({color:1052692,roughness:0.6}),V=Q.shoulder,q=0.78,G=new o(new M6(0.17,0.14,4,10),H);G.position.y=q,G.castShadow=!0,W.add(G);let E=new o(new M6(0.2,0.34,5,12),Y);E.position.y=1.12,E.scale.x=V/0.42,E.castShadow=!0,W.add(E);let N=new o(new O5(0.11,0.13,0.06,10),H);N.position.y=1.4,W.add(N);let O=new o(new O5(0.06,0.065,0.09,8),K);O.position.y=1.45,W.add(O);let R=new o(new s5(0.155,18,14),K);R.scale.set(1,1.08,0.98),R.position.y=1.57,R.castShadow=!0,W.add(R);let D=new B5({color:1512480});for(let L of[-0.055,0.055]){let P=new o(new s5(0.019,8,6),D);P.scale.set(0.9,1.15,0.6),P.position.set(L,1.6,0.142),W.add(P);let k=new o(new C0(0.052,0.009,0.012),X);k.position.set(L,1.645,0.146),k.rotation.z=L<0?0.08:-0.08,W.add(k)}let F=new o(new C0(0.045,0.008,0.008),new B5({color:9067082}));if(F.position.set(0,1.535,0.149),W.add(F),Q.hair==="long"){let L=new o(new s5(0.163,16,12),X);L.scale.set(1.02,0.92,1.02),L.position.set(0,1.65,-0.015),L.castShadow=!0,W.add(L);let P=new o(new M6(0.09,0.26,4,10),X);P.position.set(0,1.42,-0.13),P.castShadow=!0,W.add(P)}else if(Q.hair==="short"){let L=new o(new s5(0.16,16,10,0,Math.PI*2,0,Math.PI*0.55),X);L.position.set(0,1.66,-0.01),L.castShadow=!0,W.add(L)}else{let L=new o(new O5(0.158,0.166,0.14,14),H);L.position.y=1.7,L.castShadow=!0,W.add(L);let P=new o(new s5(0.05,8,6),Y);P.position.y=1.79,W.add(P)}let z=(L)=>{let P=new q5;P.position.set(L*(V/2+0.015),1.33,0);let k=new o(new M6(0.055,0.24,4,8),Y);k.position.y=-0.17,k.castShadow=!0,P.add(k);let f=new o(new s5(0.06,10,8),K);return f.position.y=-0.35,f.castShadow=!0,P.add(f),W.add(P),P};this.armL=z(-1),this.armR=z(1);let B=(L)=>{let P=new q5;P.position.set(L*0.11,q-0.04,0);let k=new o(new M6(0.075,0.28,4,8),H);k.position.y=-0.2,k.castShadow=!0,P.add(k);let f=new o(new M6(0.06,0.24,4,8),H);f.position.y=-0.48,f.castShadow=!0,P.add(f);let m=new o(new C0(0.14,0.08,0.26),U);return m.position.set(0,-0.65,0.05),m.castShadow=!0,P.add(m),W.add(P),P};this.legL=B(-1),this.legR=B(1),this.avatarBaseScale=Q.height/1.78,W.scale.setScalar(this.avatarBaseScale),this.avatarBody=W,this.avatar.add(W)}projectData(J){let Z=this.projects[J]||{};return{name:(Z.name||`project-${J+1}`).replace(/-/g," "),desc:(this.lang==="es"?Z.es:Z.description)||Z.description||"",tags:(Z.topics&&Z.topics.length?Z.topics:Z.tags||[]).slice(0,4),lang:Z.language||"code",stars:Z.stars||0,hue:this.deskHue(J)}}deskHue(J){let Z=this.layoutDesks[J];if(Z&&typeof Z.hue==="number")return Z.hue;let Q=[3526911,16732067,16757575,7069818,10189823,16743004];return Q[J%Q.length]}panelTexture(J){let Z=this.projectData(J),{canvas:Q,ctx:W}=p6(1024,620),Y=Z.hue,H=W.createLinearGradient(0,0,1024,620);H.addColorStop(0,"rgba(12, 16, 28, 0.97)"),H.addColorStop(1,"rgba(7, 9, 16, 0.97)"),W.fillStyle=H,W.fillRect(0,0,1024,620);let K=W.createRadialGradient(820,40,20,820,40,700);K.addColorStop(0,l5(Y,0.18)),K.addColorStop(1,"rgba(0,0,0,0)"),W.fillStyle=K,W.fillRect(0,0,1024,620),W.strokeStyle=l5(Y,0.75),W.lineWidth=3,W.strokeRect(1.5,1.5,1021,617),W.fillStyle=l5(Y,0.95),W.fillRect(0,0,1024,7),W.font="800 118px ui-sans-serif, system-ui, sans-serif",W.fillStyle=l5(Y,0.2),W.textAlign="right",W.fillText(String(J+1).padStart(2,"0"),980,150),W.textAlign="left",W.font="700 22px ui-monospace, monospace",W.fillStyle="rgba(164, 169, 187, 0.9)",W.fillText(`STATION ${String(J+1).padStart(2,"0")} / 06`,54,62),W.font="800 52px ui-sans-serif, system-ui, sans-serif",W.fillStyle="#f2f4f8";let X=Z.name.toUpperCase();W.fillText(X.length>22?`${X.slice(0,21)}…`:X,54,140),W.font="400 25px ui-sans-serif, system-ui, sans-serif",W.fillStyle="rgba(198, 203, 219, 0.92)",YU(W,Z.desc,900,3).forEach((N,O)=>W.fillText(N,54,196+O*36));let V=54,q=344;W.font="700 17px ui-monospace, monospace";for(let N of Z.tags){let O=String(N).toUpperCase().slice(0,18),R=W.measureText(O).width+28;if(V+R>960)break;W.fillStyle=l5(Y,0.12),b8(W,V,q,R,40,20),W.fill(),W.strokeStyle=l5(Y,0.45),W.lineWidth=1.5,b8(W,V,q,R,40,20),W.stroke(),W.fillStyle=l5(Y,0.95),W.fillText(O,V+14,q+26),V+=R+10}W.strokeStyle="rgba(150, 165, 210, 0.18)",W.lineWidth=1,W.beginPath(),W.moveTo(54,416),W.lineTo(970,416),W.stroke(),[0.55,0.8,0.35,0.92,0.62].forEach((N,O)=>{W.fillStyle=l5(Y,0.35+O*0.08),b8(W,54+O*82,452,58*N,12,6),W.fill()}),W.font="700 20px ui-monospace, monospace",W.fillStyle="rgba(164, 169, 187, 0.85)",W.textAlign="right",W.fillText(`${Z.lang.toUpperCase()}  ·  ${Z.stars}★`,968,462),W.fillText("GITHUB  ↗",968,500),W.textAlign="left",W.font="600 15px ui-monospace, monospace",W.fillStyle=l5(Y,0.55),W.fillText("LIVE PANEL · BEND",54,500);let E=new R6(Q);return E.colorSpace=O6,E.anisotropy=8,E}screenTexture(J,Z,Q){let{canvas:W,ctx:Y}=p6(1024,600);Y.fillStyle="#0b0d15",Y.fillRect(0,0,1024,600);let H=Y.createLinearGradient(0,0,1024,600);H.addColorStop(0,l5(Q,0.22)),H.addColorStop(1,"rgba(5,6,12,0)"),Y.fillStyle=H,Y.fillRect(0,0,1024,600),Y.fillStyle="rgba(255,255,255,0.06)",Y.fillRect(0,0,1024,54),["#ff4fa3","#ffb347","#6be07a"].forEach((U,V)=>{Y.beginPath(),Y.arc(32+V*28,27,7,0,Math.PI*2),Y.fillStyle=U,Y.fill()}),Y.font="600 18px ui-monospace, monospace",Y.fillStyle="rgba(200,205,220,0.5)",Y.fillText(Z?`${Z.toLowerCase()} — zsh`:"intake — zsh",150,34),Y.font="700 190px ui-sans-serif, system-ui, sans-serif",Y.fillStyle=l5(Q,0.16),Y.textAlign="right",Y.fillText(J<0?"HR":String(J+1).padStart(2,"0"),960,430),Y.textAlign="left",Y.font="600 24px ui-monospace, monospace",(J<0?["$ opening candidate file","$ authorizing: gonzalo","$ six projects found","$ run --in-person"]:["$ git log --oneline -3","$ deploy --prod","$ status: ships","$ coffee --refill"]).forEach((U,V)=>{Y.fillStyle=V===0?l5(Q,0.95):"rgba(200,205,220,0.55)",Y.fillText(U,60,150+V*52)});for(let U=0;U<4;U+=1){let V=400+U*34;Y.fillStyle="rgba(255,255,255,0.07)",b8(Y,60,V,520,12,6),Y.fill(),Y.fillStyle=l5(Q,0.8),b8(Y,60,V,120+U*92,12,6),Y.fill()}let X=new R6(W);return X.colorSpace=O6,X}setLayout(J){this.layoutDesks=J.desks}setLang(J){this.lang=J;for(let Z of this.panels)Z.tex.dispose(),Z.tex=this.panelTexture(Z.index),Z.mesh.material.map=Z.tex,Z.mesh.material.needsUpdate=!0}setProjects(J){this.projects=J;for(let Z of this.panels)Z.tex.dispose(),Z.tex=this.panelTexture(Z.index),Z.mesh.material.map=Z.tex,Z.mesh.material.needsUpdate=!0}setFocus(J){this.focusId=J;for(let Z of this.panels){let Q=Z.index===J;Z.group.scale.setScalar(Q?1.035:1);let W=Z.group.children[1];if(W&&W.material)W.material.emissiveIntensity=Q?1.15:0.35}}placeAvatar(J,Z,Q,W){this.avatarPos.x=J,this.avatarPos.z=Z,this.targetYaw=Q,this.speed=W}setMode(J){if(this.mode=J,this.createPad)this.createPad.visible=J==="create"}setBlend(J){this.blend=g6(J,0,1)}setCamera({yaw:J,pitch:Z,dist:Q}){if(J!==void 0)this.cameraOrbit.yaw=J;if(Z!==void 0)this.cameraOrbit.pitch=Z;if(Q!==void 0)this.cameraOrbit.dist=Q}snapCamera(){let{yaw:J,pitch:Z,dist:Q}=this.cameraOrbit,W=new T(this.avatarPos.x,1.15,this.avatarPos.z);this.cameraPos.set(W.x+Math.sin(J)*Math.cos(Z)*Q,W.y+Math.sin(Z)*Q,W.z+Math.cos(J)*Math.cos(Z)*Q),this.cameraPos.x=g6(this.cameraPos.x,0.9,23.1),this.cameraPos.z=g6(this.cameraPos.z,0.9,21),this.cameraPos.y=g6(this.cameraPos.y,0.75,3.2),this.cameraTarget.copy(W),this.camera.position.copy(this.cameraPos),this.camera.lookAt(this.cameraTarget)}pickAt(J,Z){let Q=this.canvas.getBoundingClientRect();this.pointer.x=(J-Q.left)/Q.width*2-1,this.pointer.y=-((Z-Q.top)/Q.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);let W=[];for(let H of this.panels)W.push(...H.group.children);let Y=this.raycaster.intersectObjects(W,!1);for(let H of Y){let K=H.object.userData&&H.object.userData.deskId;if(typeof K==="number")return K}return null}groundAt(J,Z){let Q=this.canvas.getBoundingClientRect(),W=new q0((J-Q.left)/Q.width*2-1,-((Z-Q.top)/Q.height)*2+1);this.raycaster.setFromCamera(W,this.camera);let Y=new X6(new T(0,1,0),0),H=new T;if(!this.raycaster.ray.intersectPlane(Y,H))return null;if(Math.abs(H.x-12)>20||Math.abs(H.z-8)>14)return null;return{x:H.x,z:H.z}}pointerOnDesk(J,Z){return this.pickAt(J,Z)}resize(){let{innerWidth:J,innerHeight:Z}=window;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(J,Z,!1),this.camera.aspect=J/Z,this.camera.updateProjectionMatrix()}update(J){this.time+=J;let Z=this.time,Q=Math.min(1,this.speed/2.6);this.walkPhase+=J*(3.2+this.speed*2.4);let W=Math.sin(this.walkPhase)*0.62*Q;if(this.legL&&this.legR){this.legL.rotation.x=W,this.legR.rotation.x=-W,this.armL.rotation.x=-W*0.8,this.armR.rotation.x=W*0.8,this.avatarBody.position.y=Math.abs(Math.sin(this.walkPhase*2))*0.03*Q,this.avatarBody.rotation.z=Math.sin(this.walkPhase)*0.015*Q;let H=1+Math.sin(Z*1.6)*0.008;this.avatarBody.scale.y=this.avatarBaseScale*H}let Y=this.targetYaw-this.avatarYaw;while(Y>Math.PI)Y-=Math.PI*2;while(Y<-Math.PI)Y+=Math.PI*2;if(this.avatarYaw+=Y*Math.min(1,J*11),this.avatar.position.set(this.avatarPos.x,0,this.avatarPos.z),this.avatar.rotation.y=this.avatarYaw,this.mode==="create")this.avatar.rotation.y=Math.sin(Z*0.32)*0.32;for(let H of this.panels){H.group.position.y=H.baseY+Math.sin(Z*1.1+H.index*0.8)*0.012;let K=H.index===this.focusId?1.035:1;H.group.scale.x+=(K-H.group.scale.x)*Math.min(1,J*8),H.group.scale.y=H.group.scale.x,H.group.scale.z=H.group.scale.x}this.updateCamera(J),this.renderer.render(this.scene,this.camera)}updateCamera(J){let Z=new T(this.avatarPos.x,1.15,this.avatarPos.z),Q,W;if(this.mode==="cinematic"){let H=this.time*0.05;Q=new T(12+Math.cos(H)*5.2,2.6+Math.sin(H*0.7)*0.14,9.6+Math.sin(H)*2.6),W=new T(12,1.25,7.2)}else if(this.mode==="create")Q=new T(this.avatarPos.x+0.72,1.55,this.avatarPos.z+2.85),W=new T(this.avatarPos.x,1.02,this.avatarPos.z);else{let{yaw:H,pitch:K,dist:X}=this.cameraOrbit;Q=new T(Z.x+Math.sin(H)*Math.cos(K)*X,Z.y+Math.sin(K)*X,Z.z+Math.cos(H)*Math.cos(K)*X),W=Z;let U=new T(Z.x,1.4,Z.z),V=new T().subVectors(Q,U),q=V.length();if(q>0.1){V.normalize(),this.cameraRay.set(U,V),this.cameraRay.far=q;let G=this.cameraRay.intersectObjects(this.blockers,!1);if(G.length){let E=Math.max(0.9,G[0].distance-0.28);Q.copy(U).addScaledVector(V,E)}}if(this.blend>0&&this.blend<1){let G=this.blend,E=new T(this.avatarPos.x+0.72,1.55,this.avatarPos.z+2.85),N=new T(this.avatarPos.x,1.02,this.avatarPos.z),O=WU(G);Q.lerpVectors(E,Q,O),W=new T().lerpVectors(N,W,O)}}Q.x=g6(Q.x,0.9,23.1),Q.z=g6(Q.z,0.9,21),Q.y=g6(Q.y,0.75,3.2);let Y=this.mode==="cinematic"?1-Math.exp(-J*1.6):1-Math.exp(-J*9);this.cameraPos.lerp(Q,Y),this.cameraTarget.lerp(W,1-Math.exp(-J*12)),this.camera.position.copy(this.cameraPos),this.camera.lookAt(this.cameraTarget)}}function b8(J,Z,Q,W,Y,H){let K=Math.min(H,Y/2,W/2);J.beginPath(),J.moveTo(Z+K,Q),J.arcTo(Z+W,Q,Z+W,Q+Y,K),J.arcTo(Z+W,Q+Y,Z,Q+Y,K),J.arcTo(Z,Q+Y,Z,Q,K),J.arcTo(Z,Q,Z+W,Q,K),J.closePath()}class Z4{constructor(){this.enabled=!1,this.ctx=null,this.master=null,this.ambient=null,this.lastStep=0}ensure(){if(this.ctx){if(this.ctx.state==="suspended")this.ctx.resume();return}let J=window.AudioContext||window.webkitAudioContext;if(!J)return;this.ctx=new J,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination),this.buildAmbient()}buildAmbient(){let J=this.ctx,Z=J.createGain();Z.gain.value=0.035;let Q=J.createBiquadFilter();Q.type="lowpass",Q.frequency.value=420,Q.Q.value=0.6,Z.connect(Q),Q.connect(this.master);let Y=[55,82.5,110,164.81].map((X,U)=>{let V=J.createOscillator();V.type=U===3?"sine":"triangle",V.frequency.value=X,V.detune.value=(U-1.5)*6;let q=J.createGain();return q.gain.value=U===3?0.05:0.16/(U+1),V.connect(q),q.connect(Z),V.start(),V}),H=J.createOscillator();H.frequency.value=0.05;let K=J.createGain();K.gain.value=140,H.connect(K),K.connect(Q.frequency),H.start(),this.ambient={bus:Z,filter:Q,oscs:[...Y,H]}}setEnabled(J){if(this.enabled=!!J,this.enabled){if(this.ensure(),this.master){let Z=this.ctx.currentTime;this.master.gain.cancelScheduledValues(Z),this.master.gain.setTargetAtTime(0.5,Z,0.35)}}else if(this.master){let Z=this.ctx.currentTime;this.master.gain.cancelScheduledValues(Z),this.master.gain.setTargetAtTime(0,Z,0.2)}}tone(J,Z=0.12,{type:Q="sine",gain:W=0.12,slide:Y=0,delay:H=0}={}){if(!this.enabled||!this.ctx)return;let K=this.ctx,X=K.currentTime+H,U=K.createOscillator();if(U.type=Q,U.frequency.setValueAtTime(J,X),Y)U.frequency.exponentialRampToValueAtTime(Math.max(40,J+Y),X+Z);let V=K.createGain();return V.gain.setValueAtTime(0.0001,X),V.gain.exponentialRampToValueAtTime(W,X+0.012),V.gain.exponentialRampToValueAtTime(0.0001,X+Z),U.connect(V),V.connect(this.master),U.start(X),U.stop(X+Z+0.05),U}noise(J=0.08,{gain:Z=0.05,freq:Q=500,q:W=1.2,delay:Y=0}={}){if(!this.enabled||!this.ctx)return;let H=this.ctx,K=H.currentTime+Y,X=Math.max(1,Math.floor(H.sampleRate*J)),U=H.createBuffer(1,X,H.sampleRate),V=U.getChannelData(0);for(let N=0;N<X;N+=1)V[N]=Math.random()*2-1;let q=H.createBufferSource();q.buffer=U;let G=H.createBiquadFilter();G.type="bandpass",G.frequency.value=Q,G.Q.value=W;let E=H.createGain();E.gain.setValueAtTime(Z,K),E.gain.exponentialRampToValueAtTime(0.0001,K+J),q.connect(G),G.connect(E),E.connect(this.master),q.start(K),q.stop(K+J+0.02)}step(){let J=performance.now();if(J-this.lastStep<230)return;this.lastStep=J,this.noise(0.07,{gain:0.035,freq:260+Math.random()*120,q:0.9})}ui(){this.tone(720,0.06,{type:"square",gain:0.04})}open(){this.tone(392,0.16,{type:"triangle",gain:0.09}),this.tone(587.33,0.28,{type:"triangle",gain:0.07,delay:0.06})}close(){this.tone(587.33,0.12,{type:"triangle",gain:0.05,slide:-180})}chime(){[523.25,659.25,783.99].forEach((J,Z)=>{this.tone(J,0.5,{type:"sine",gain:0.08,delay:Z*0.09})})}startShift(){this.tone(110,0.5,{type:"sine",gain:0.16}),this.noise(0.25,{gain:0.04,freq:180,q:0.7}),this.chime()}}var mZ="Arggon",j9="https://github.com/Arggon",Q4="https://github.com/Arggon/arggon-cv";var lZ=[{name:"dotnet-batchyard",description:".NET 10 backend showcase: TVP+MERGE batch ingest, JWT plans and roles, CQRS payments with outbox and RabbitMQ, a strangler migration from monolith to service via YARP, OpenTelemetry. k6 on a cloud VM: extracted ingest p50 93% lower than the monolith at 500 items/request.",language:"TypeScript",stars:0,forks:0,homepage:null,topics:["arggonmanager","aspnetcore","cqrs","csharp","dotnet","k6","microservices","opentelemetry","outbox-pattern","rabbitmq","redis","sql-server","strangler-fig","testcontainers","yarp"],updated:"2026-10-15",url:"https://github.com/Arggon/dotnet-batchyard"},{name:"cuentas-claras",description:"Shared-expense tracker for trips and groups: log who paid, see who owes whom, settle up with the fewest transfers. Node + TypeScript + Express.",language:"TypeScript",stars:0,forks:0,homepage:null,topics:["expense-tracker","express","nodejs","split-bills","typescript"],updated:"2026-10-14",url:"https://github.com/Arggon/cuentas-claras"},{name:"suizo",description:"Swiss-system tournament manager for amateur events — one binary, one JSON file",language:"Go",stars:0,forks:0,homepage:null,topics:["cli","go","swiss-system","tournament"],updated:"2026-10-14",url:"https://github.com/Arggon/suizo"},{name:"racha",description:"Tracker de hábitos con rachas — CLI en Rust, datos locales, notificaciones de escritorio",language:"Rust",stars:0,forks:0,homepage:null,topics:["cli","habit-tracker","productivity","rust","streaks"],updated:"2026-10-13",url:"https://github.com/Arggon/racha"},{name:"estanteria",description:"Tracker de lectura personal: CLI en Go + ledger JSON atómico",language:"Go",stars:0,forks:0,homepage:null,topics:["cli","go","json","reading-tracker"],updated:"2026-10-14",url:"https://github.com/Arggon/estanteria"},{name:"ember-ascent",description:"Ember Ascent — agent-playable roguelike deckbuilder (browser, zero deps)",language:"JavaScript",stars:0,forks:0,homepage:null,topics:[],updated:"2026-10-18",url:"https://github.com/Arggon/ember-ascent"}];var E0=(J)=>document.getElementById(J);function m6(J){let Z=[],Q=J;while(Q&&Q.$==="Con")Z.push(Q.head),Q=Q.tail;return Z}var _9=(J,Z,Q)=>Math.min(Q,Math.max(Z,J)),V6={get(J,Z){try{let Q=localStorage.getItem(J);return Q===null?Z:Q}catch{return Z}},set(J,Z){try{localStorage.setItem(J,String(Z))}catch{}}},HU=window.matchMedia("(prefers-reduced-motion: reduce)").matches,N8=window.matchMedia("(pointer: coarse)").matches,j8=S6.layout(),Q6={room:j8.room,start:j8.start,desks:m6(j8.desks),props:m6(j8.props),palette:m6(j8.palette)},l6=Q6.palette.length?Q6.palette:h8,w0=S6.ui(),g8=m6(S6.story()),XU=m6(S6.projects()),p0={lang:V6.get("al.lang",navigator.language&&navigator.language.toLowerCase().startsWith("es")?"es":"en"),sound:V6.get("al.sound","off")==="on",name:V6.get("al.name",""),preset:_9(Number(V6.get("al.preset","0"))||0,0,2),color:_9(Number(V6.get("al.color","0"))||0,0,l6.length-1)},w6=XU.map((J)=>{let Z=lZ.find((Q)=>Q.name===J.name)||{};return{name:J.name,lang:J.lang,es:J.es,tags:m6(J.tags),fallbackTags:m6(J.tags),description:Z.description||"",language:Z.language||"code",stars:Z.stars||0,topics:Z.topics||[],homepage:Z.homepage||"",updated:Z.updated||"",url:Z.url||`${j9}/${J.name}`}}),i5=(J)=>J?J[p0.lang]:"",KU=(J)=>J.topics&&J.topics.length?J.topics:J.tags||[],b={phase:"hero",modal:null,storyIndex:0,x:Q6.start.x,y:Q6.start.y,vx:0,vy:0,facing:Math.PI,camYaw:0,camPitch:N8?0.13:0.24,camDist:N8?7.4:5.6,blend:0,hovered:-1,focus:{idx:-1,can:!1},target:null,pending:null,moveSpeed:300,onboardingUntil:0},J5;try{J5=new J4(E0("scene"),Q6),J5.setProjects(w6),J5.setLang(p0.lang),J5.setAvatar({preset:p0.preset,color:l6[p0.color]}),J5.placeAvatar(b.x/100,b.y/100,b.facing,0)}catch(J){throw console.error("WebGL unavailable:",J),document.querySelectorAll(".screen").forEach((Z)=>Z.classList.add("hidden")),E0("btn-lang-intro").classList.add("hidden"),E0("screen-fatal").classList.remove("hidden"),J}var L5=new Z4;L5.enabled=p0.sound;var UU=["screen-hero","screen-story","screen-create"];function p8(J){for(let Z of UU)E0(Z).classList.toggle("hidden",Z!==J);E0("hud").classList.toggle("hidden",J!==null)}function g9(J){E0("hud").classList.toggle("hidden",!J),E0("btn-lang-intro").classList.toggle("hidden",J)}function o0(J,Z){let Q=E0(J);if(Q)Q.textContent=Z}function Y4(){document.documentElement.lang=p0.lang;let J=(Q)=>i5(Q);o0("hero-kicker",J(w0.kicker)),o0("hero-role",J(w0.role)),o0("hero-intro",J(w0.intro)),o0("hero-credits",J(w0.credits)),o0("btn-enter",J(w0.enter)),o0("btn-hero-skip",J(w0.skip)),E0("hero-github").href=j9,E0("hero-cv").href=Q4;let Z=E0("hero-facts");Z.innerHTML="";for(let Q of[`${Q6.desks.length.toString().padStart(2,"0")} ${J(w0.factStations)}`,J(w0.factEngine),J(w0.factData)]){let W=document.createElement("li");W.textContent=Q,Z.appendChild(W)}if(o0("story-kicker",J(w0.kicker)),o0("btn-story-next",J(w0.next)),o0("btn-story-skip",J(w0.skip)),X4(),o0("create-kicker",J(w0.kicker)),o0("create-title",J(w0.createTitle)),o0("create-sub",J(w0.createSub)),o0("name-label",J(w0.nameLabel)),E0("name-input").placeholder=J(w0.namePlaceholder),o0("look-label",J(w0.lookLabel)),o0("color-label",J(w0.colorLabel)),o0("btn-back",J(w0.back)),o0("btn-clock-in",J(w0.clockIn)),o0("name-error",J(w0.nameError)),o0("player-role",J(w0.playerRole)),o0("hint",N8?J(w0.hudHintTouch):J(w0.hudHint)),E0("btn-lang").textContent=p0.lang==="en"?"ES":"EN",E0("btn-lang-intro").textContent=p0.lang==="en"?"ES":"EN",E0("btn-lang").setAttribute("aria-label",p0.lang==="en"?"Cambiar a español":"Switch to English"),E0("btn-sound").setAttribute("aria-label",p0.sound?J(w0.soundOn):J(w0.soundOff)),E0("btn-sound").setAttribute("aria-pressed",p0.sound?"true":"false"),E0("btn-about").setAttribute("aria-label",J(w0.aboutTitle)),o0("a-title",J(w0.aboutTitle)),o0("a-body",J(w0.aboutBody)),o0("a-github",J(w0.aboutGithub)+" ↗"),E0("a-github").href=j9,o0("a-cv",J(w0.aboutCv)+" ↗"),E0("a-cv").href=Q4,o0("a-credits",J(w0.credits)),o0("a-technical",J(w0.technical)),o0("a-restart",J(w0.restart)),o0("a-close",J(w0.close)),o0("p-close",J(w0.close)),eZ(),JQ(),document.title=p0.lang==="es"?"Arggon Labs — fuera de horario":"Arggon Labs — after hours",b.modal==="project")U4(b.openProject);if(b.phase==="story")H4(g8[b.storyIndex][p0.lang],!0)}var z6={timer:null,full:"",done:!0};function tZ(){if(z6.timer)clearTimeout(z6.timer);z6.timer=null}function W4(){tZ(),E0("story-text").textContent=z6.full,E0("story-text").classList.add("done"),z6.done=!0}function H4(J,Z=!1){tZ(),z6.full=J,z6.done=!1;let Q=E0("story-text");if(Q.classList.remove("done"),Z||HU){W4();return}let W=0,Y=()=>{if(W=Math.min(J.length,W+1),Q.textContent=J.slice(0,W),W>=J.length)W4();else z6.timer=setTimeout(Y,14+Math.random()*26)};Y()}function X4(){let J=E0("story-dots");J.innerHTML="";for(let Z=0;Z<g8.length;Z+=1){let Q=document.createElement("i");if(Z===b.storyIndex)Q.className="on";J.appendChild(Q)}}function y9(J=0){b.phase="story",b.storyIndex=J,J5.setMode("cinematic"),p8("screen-story"),X4(),H4(g8[J][p0.lang]),E0("btn-story-next").focus()}function uZ(){if(!z6.done){W4();return}if(b.storyIndex<g8.length-1)b.storyIndex+=1,X4(),H4(g8[b.storyIndex][p0.lang]);else K4()}function dZ(){K4()}function eZ(){let J=E0("presets");J.innerHTML="";let Z=[i5(w0.presetA),i5(w0.presetB),i5(w0.presetC)],Q=["☾","◈","◇"];Z.forEach((W,Y)=>{let H=document.createElement("button");H.type="button",H.className="preset",H.setAttribute("role","radio"),H.setAttribute("aria-checked",String(Y===p0.preset)),H.setAttribute("aria-label",W),H.innerHTML=`<span class="silhouette" aria-hidden="true">${Q[Y]}</span><strong>${W}</strong><small>0${Y+1}</small>`,H.addEventListener("click",()=>{p0.preset=Y,V6.set("al.preset",Y),J5.setAvatar({preset:Y,color:l6[p0.color]}),eZ(),L5.ui()}),J.appendChild(H)})}function JQ(){let J=E0("swatches");J.innerHTML="",h8.forEach((Z,Q)=>{let W=document.createElement("button");W.type="button",W.className="swatch",W.setAttribute("role","radio"),W.setAttribute("aria-checked",String(Q===p0.color)),W.setAttribute("aria-label",`Color ${Q+1}`),W.style.background=`#${Z.toString(16).padStart(6,"0")}`,W.addEventListener("click",()=>{p0.color=Q,V6.set("al.color",Q),J5.setAvatar({preset:p0.preset,color:l6[Q]}),JQ(),L5.ui()}),J.appendChild(W)})}function K4(){b.phase="create",b.modal=null,b.x=1200,b.y=790,b.facing=0,J5.setMode("create"),J5.placeAvatar(12,7.9,b.facing,0),J5.setAvatar({preset:p0.preset,color:l6[p0.color]}),p8("screen-create"),g9(!1),E0("name-error").classList.add("hidden"),E0("name-input").value=p0.name||"",L5.ui(),setTimeout(()=>E0("name-input").focus(),80)}function cZ(){let J=E0("name-input").value.trim().replace(/\s+/g," ");if(!J){E0("name-error").classList.remove("hidden"),E0("name-input").focus(),L5.close();return}p0.name=J.slice(0,20),V6.set("al.name",p0.name),b.phase="play",b.modal=null,b.x=Q6.start.x,b.y=Q6.start.y,b.vx=0,b.vy=0,b.facing=Math.PI,b.camYaw=0,b.camPitch=N8?0.13:0.24,b.camDist=N8?7.4:5.6,b.blend=1,b.target=null,b.pending=null,b.onboardingUntil=performance.now()+5200,J5.setMode("follow"),J5.setBlend(1),J5.placeAvatar(b.x/100,b.y/100,b.facing,0),J5.setCamera({yaw:b.camYaw,pitch:b.camPitch,dist:b.camDist}),J5.snapCamera(),o0("player-name",p0.name),E0("badge-chip").style.background=`#${l6[p0.color].toString(16).padStart(6,"0")}`,E0("badge-chip").style.color=`#${l6[p0.color].toString(16).padStart(6,"0")}`,p8(null),g9(!0),E0("status").textContent=i5(w0.onboarding),L5.startShift(),E0("prompt").classList.add("hidden"),D8()}var y8="";function D8(){if(performance.now()<b.onboardingUntil)return;E0("status").textContent=y8}var ZQ="al.repos.v1",VU=600000;function nZ(J){for(let Z of w6){let Q=J.find((W)=>W.name===Z.name);if(!Q)continue;Z.description=Q.description||Z.description,Z.language=Q.language||Z.language,Z.stars=Q.stargazers_count||0,Z.topics=Q.topics||[],Z.homepage=Q.homepage||"",Z.updated=(Q.updated_at||"").slice(0,10),Z.url=Q.html_url||Z.url}J5.setProjects(w6)}function GU(){try{let J=sessionStorage.getItem(ZQ);if(!J)return null;let Z=JSON.parse(J);if(!Z||!Array.isArray(Z.repos))return null;if(Date.now()-Number(Z.at)>VU)return null;return Z.repos}catch{return null}}function qU(J){try{sessionStorage.setItem(ZQ,JSON.stringify({at:Date.now(),repos:J.map((Z)=>({name:Z.name,description:Z.description,language:Z.language,stargazers_count:Z.stargazers_count,topics:Z.topics,homepage:Z.homepage,updated_at:Z.updated_at,html_url:Z.html_url}))}))}catch{}}async function EU(){let J=GU();if(J){nZ(J),y8=`${w6.length} · ${i5(w0.live)}`,D8();return}y8=i5(w0.loading),D8();let Z=new AbortController,Q=setTimeout(()=>Z.abort(),7000);try{let W=await fetch(`https://api.github.com/users/${mZ}/repos?per_page=100&sort=updated`,{headers:{Accept:"application/vnd.github+json"},signal:Z.signal});if(!W.ok)throw Error(`GitHub ${W.status}`);let Y=await W.json();nZ(Y),qU(Y),y8=`${w6.length} · ${i5(w0.live)}`}catch(W){y8=`${w6.length} · ${i5(w0.offline)}`}finally{if(clearTimeout(Q),b.onboardingUntil=0,D8(),b.modal==="project")U4(b.openProject)}}function U4(J){let Z=w6[J];if(!Z)return;b.openProject=J,o0("p-index",`STATION ${String(J+1).padStart(2,"0")} / 06 · ${(Z.lang||Z.language||"code").toUpperCase()}`),o0("p-title",Z.name.replace(/-/g," ").toUpperCase());let Q=p0.lang==="es"?Z.es||Z.description:Z.description||Z.es;o0("p-desc",Q||"");let W=E0("p-tags");W.innerHTML="";for(let K of KU(Z).slice(0,8)){let X=document.createElement("span");X.textContent=String(K).toUpperCase(),W.appendChild(X)}o0("p-meta",[Z.lang||Z.language||"",`${Z.stars||0}★`,Z.updated||""].filter(Boolean).join(" · "));let Y=E0("p-repo");Y.href=Z.url,Y.textContent=i5(w0.openRepo)+" ↗";let H=E0("p-live");if(Z.homepage)H.href=Z.homepage,H.textContent=i5(w0.liveDemo)+" ↗",H.classList.remove("hidden");else H.classList.add("hidden")}function QQ(J){if(b.phase!=="play")return;b.modal="project",U4(J),E0("modal-project").classList.remove("hidden"),E0("p-close").focus(),L5.open(),p9()}function sZ(){b.modal="about",E0("modal-about").classList.remove("hidden"),E0("a-close").focus(),L5.open(),p9()}function _8(){if(!b.modal)return;b.modal=null,E0("modal-project").classList.add("hidden"),E0("modal-about").classList.add("hidden"),E0("scene").focus(),L5.close()}var Z6=new Set,j5=null,x9=-1,iZ={x:0,y:0};function p9(){Z6.clear(),b.vx=0,b.vy=0}function FU(J){let Z=Q6.desks[J];if(!Z)return null;let Q=Z.x+Z.w/2,W=Z.y+Z.h/2;return{x:Z.side===0?Z.x+Z.w+80:Z.x-80,y:W}}function DU(J,Z){if(b.phase!=="play"||b.modal)return;let Q=J5.pickAt(J,Z);if(Q!==null){let Y=FU(Q);b.pending=Q,b.target=Y,L5.ui();return}let W=J5.groundAt(J,Z);if(W)b.target={x:W.x*100,y:W.z*100},b.pending=null,L5.ui()}function NU(){let J=E0("scene");J.addEventListener("pointerdown",(Q)=>{if(b.phase!=="play"||b.modal)return;J.setPointerCapture(Q.pointerId),j5={x:Q.clientX,y:Q.clientY,moved:!1,id:Q.pointerId},iZ={x:Q.clientX,y:Q.clientY}}),J.addEventListener("pointermove",(Q)=>{if(iZ={x:Q.clientX,y:Q.clientY},j5&&j5.id===Q.pointerId){let W=Q.clientX-j5.x,Y=Q.clientY-j5.y;if(!j5.moved&&Math.hypot(W,Y)>5)j5.moved=!0;if(j5.moved)b.camYaw-=W*0.006,b.camPitch=_9(b.camPitch+Y*0.004,0.08,1.12),j5.x=Q.clientX,j5.y=Q.clientY,J.style.cursor="grabbing";return}if(b.phase==="play"&&!b.modal){let W=J5.pickAt(Q.clientX,Q.clientY);x9=W===null?-1:W,J.style.cursor=x9>=0?"pointer":"grab"}});let Z=(Q)=>{if(!j5||j5.id!==Q.pointerId)return;let W=!j5.moved;if(j5=null,J.style.cursor="grab",W)DU(Q.clientX,Q.clientY)};J.addEventListener("pointerup",Z),J.addEventListener("pointercancel",()=>{j5=null,J.style.cursor="grab"}),J.addEventListener("wheel",(Q)=>{if(b.phase!=="play"||b.modal)return;Q.preventDefault(),b.camDist=_9(b.camDist+Math.sign(Q.deltaY)*0.45,3.6,10)},{passive:!1}),window.addEventListener("keydown",(Q)=>{let W=Q.target&&Q.target.tagName||"";if(W==="INPUT"||W==="TEXTAREA"){if(Q.key==="Enter"&&b.phase==="create")cZ();return}if((W==="BUTTON"||W==="A")&&(Q.key==="Enter"||Q.key===" "))return;let Y=Q.key.toLowerCase();if(b.modal){if(Y==="escape")_8();return}if(b.phase==="hero"){if(Y==="enter"||Y===" ")Q.preventDefault(),y9(0);return}if(b.phase==="story"){if(Y==="enter"||Y===" "||Y==="arrowright")Q.preventDefault(),uZ();if(Y==="escape")dZ();return}if(b.phase==="create"){if(Y==="escape")y9(0);return}if(b.phase!=="play")return;if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(Y))Q.preventDefault(),Z6.add(Y),b.target=null,b.pending=null;if(Y==="e")Q.preventDefault(),oZ();if(Y==="h")sZ();if(Y==="m")aZ();if(Y==="escape")_8()}),window.addEventListener("keyup",(Q)=>{Z6.delete(Q.key.toLowerCase())}),window.addEventListener("blur",p9),E0("btn-enter").addEventListener("click",()=>y9(0)),E0("btn-hero-skip").addEventListener("click",()=>K4()),E0("btn-story-next").addEventListener("click",uZ),E0("btn-story-skip").addEventListener("click",dZ),E0("btn-back").addEventListener("click",()=>y9(0)),E0("btn-clock-in").addEventListener("click",cZ),E0("prompt").addEventListener("click",oZ),E0("btn-about").addEventListener("click",sZ),E0("btn-lang").addEventListener("click",rZ),E0("btn-lang-intro").addEventListener("click",rZ),E0("btn-sound").addEventListener("click",aZ),E0("a-restart").addEventListener("click",zU),document.querySelectorAll("[data-close]").forEach((Q)=>{Q.addEventListener("click",_8)}),document.querySelectorAll(".modal").forEach((Q)=>{Q.addEventListener("pointerdown",(W)=>{if(W.target===Q)_8()})}),RU(),OU()}function oZ(){if(b.phase!=="play"||b.modal)return;if(b.focus&&b.focus.can&&b.focus.idx>=0)QQ(b.focus.idx)}function rZ(){if(p0.lang=p0.lang==="en"?"es":"en",V6.set("al.lang",p0.lang),J5.setLang(p0.lang),Y4(),b.phase==="play")D8();L5.ui()}function aZ(){if(p0.sound=!p0.sound,V6.set("al.sound",p0.sound?"on":"off"),L5.setEnabled(p0.sound),p0.sound)L5.ui();Y4()}function OU(){let J=()=>{if(p0.sound)L5.setEnabled(!0);window.removeEventListener("pointerdown",J),window.removeEventListener("keydown",J)};window.addEventListener("pointerdown",J,{once:!0}),window.addEventListener("keydown",J,{once:!0})}var S5={active:!1,id:null,x:0,y:0};function RU(){let J=E0("joystick"),Z=J.querySelector(".knob");if(!N8){J.classList.add("hidden");return}J.classList.remove("hidden");let Q=(Y)=>{let H=J.getBoundingClientRect(),K=H.left+H.width/2,X=H.top+H.height/2,U=(Y.clientX-K)/(H.width*0.42),V=(Y.clientY-X)/(H.height*0.42),q=Math.hypot(U,V),G=q>1?U/q:U,E=q>1?V/q:V;S5.x=G,S5.y=E,Z.style.transform=`translate(${G*32}px, ${E*32}px)`};J.addEventListener("pointerdown",(Y)=>{if(b.phase!=="play"||b.modal)return;Y.preventDefault(),J.setPointerCapture(Y.pointerId),S5.active=!0,S5.id=Y.pointerId,Q(Y)}),J.addEventListener("pointermove",(Y)=>{if(S5.active&&S5.id===Y.pointerId)Q(Y)});let W=(Y)=>{if(S5.id!==Y.pointerId)return;S5.active=!1,S5.id=null,S5.x=0,S5.y=0,Z.style.transform="translate(0, 0)"};J.addEventListener("pointerup",W),J.addEventListener("pointercancel",W)}function MU(J){let Z=0,Q=0;if(Z6.has("w")||Z6.has("arrowup"))Q+=1;if(Z6.has("s")||Z6.has("arrowdown"))Q-=1;if(Z6.has("d")||Z6.has("arrowright"))Z+=1;if(Z6.has("a")||Z6.has("arrowleft"))Z-=1;if(S5.active&&(Math.abs(S5.x)>0.08||Math.abs(S5.y)>0.08))Z+=S5.x,Q+=-S5.y;let W=0,Y=0;if(Math.abs(Z)+Math.abs(Q)>0.05){let E=Math.hypot(Z,Q)||1;Z/=E,Q/=E;let N=-Math.sin(b.camYaw),O=-Math.cos(b.camYaw),R=Math.cos(b.camYaw),D=-Math.sin(b.camYaw),F=N*Q+R*Z,z=O*Q+D*Z;W=F*b.moveSpeed,Y=z*b.moveSpeed,b.target=null}else if(b.target){let E=b.target.x-b.x,N=b.target.y-b.y,O=Math.hypot(E,N);if(O<16)b.target=null;else W=E/O*b.moveSpeed,Y=N/O*b.moveSpeed}let H=1-Math.exp(-J*12);if(b.vx+=(W-b.vx)*H,b.vy+=(Y-b.vy)*H,Math.abs(b.vx)<0.5)b.vx=0;if(Math.abs(b.vy)<0.5)b.vy=0;let K=Math.round(b.x+b.vx*J),X=Math.round(b.y+b.vy*J),U=S6.slide(b.x,b.y,K,X);b.x=U.x,b.y=U.y;let V=Math.hypot(b.vx,b.vy);if(V>6){if(b.facing=Math.atan2(b.vx,b.vy),V>80)L5.step()}J5.placeAvatar(b.x/100,b.y/100,b.facing,V/100),J5.setCamera({yaw:b.camYaw,pitch:b.camPitch,dist:b.camDist});let q=S6.focus(b.x,b.y);b.focus={idx:q.can?Number(q.idx):-1,can:!!q.can};let G=x9>=0?x9:b.focus.can?b.focus.idx:-1;if(J5.setFocus(G),b.focus.can){let E=b.focus.idx;o0("prompt-text",`${i5(w0.inspect)} — ${w6[E].name.replace(/-/g," ")}`),E0("prompt").classList.remove("hidden")}else E0("prompt").classList.add("hidden");if(b.pending!==null&&b.focus.can&&b.focus.idx===b.pending){let E=b.pending;b.pending=null,b.target=null,QQ(E)}}function x8(J){let Z=Math.min(0.05,(J-x8.last)/1000||0.016);if(x8.last=J,b.phase==="play"&&!b.modal)MU(Z);if(b.blend<1){if(b.blend=Math.min(1,b.blend+Z/1.6),J5)J5.setBlend(b.blend)}if(b.onboardingUntil&&performance.now()>b.onboardingUntil)b.onboardingUntil=0,D8();J5.update(Z),requestAnimationFrame(x8)}x8.last=performance.now();function zU(){_8(),b.phase="hero",b.storyIndex=0,b.x=Q6.start.x,b.y=Q6.start.y,b.vx=0,b.vy=0,b.facing=Math.PI,b.target=null,b.pending=null,b.blend=0,p9(),J5.setMode("cinematic"),J5.placeAvatar(b.x/100,b.y/100,b.facing,0),p8("screen-hero"),g9(!1),L5.close()}window.addEventListener("resize",()=>J5.resize());function BU(){NU(),Y4(),p8("screen-hero"),g9(!1),E0("btn-enter").focus({preventScroll:!0}),EU(),requestAnimationFrame(x8)}BU();

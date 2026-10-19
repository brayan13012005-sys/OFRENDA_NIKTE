import * as THREE from "../js/three.module.js";
export default function E06 ({x,y,z}){


//PATAS DELANTERA IZQ

var geometry01 = new THREE.BoxGeometry(6,4,7,4,4,4);
var material01 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

mesh01.position.set(-7,3,4);

var geometry02 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material02 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);

mesh02.position.set(-8.5,3,7.7);

var geometry03 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material03 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);

mesh03.position.set(-7,3,7.7);


var geometry04 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material04 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);

mesh04.position.set(-5.5,3,7.7);


//PATA DELANTERA DERECHA

var geometry05 = new THREE.BoxGeometry(6,4,7,4,4,4);
var material05 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);

mesh05.position.set(7,3,4);

var geometry06 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material06 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);

mesh06.position.set(8.5,3,7.7);

var geometry07 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material07 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);

//scene.add(mesh07);

mesh07.position.set(7,3,7.7);


var geometry08 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material08 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);

mesh08.position.set(5.5,3,7.7);


//PIERNA DELANTERA IZQ

var geometry09 = new THREE.CylinderGeometry(1,1,8,30);
var material09 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);
mesh09.position.set(-7,9,4);

var geometry10 = new THREE.SphereGeometry(2);
var material10 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);
mesh10.position.set(-7,14,4);

var geometry11 = new THREE.CylinderGeometry(1,1,8,30);
var material11 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry11,material11);

//scene.add(mesh11);

mesh11.position.set(-7,19,4);

var geometry12 = new THREE.SphereGeometry(2);
var material12 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry12,material12);

//scene.add(mesh12);
mesh12.position.set(-7,23,4);


//PIERNA DELANTERA DERECHA

var geometry13 = new THREE.CylinderGeometry(1,1,8,30);
var material13 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry13,material13);

//scene.add(mesh13);
mesh13.position.set(7,9,4);

var geometry14 = new THREE.SphereGeometry(2);
var material14 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry14,material14);

//scene.add(mesh14);
mesh14.position.set(7,14,4);

var geometry15 = new THREE.CylinderGeometry(1,1,8,30);
var material15 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(geometry15,material15);

//scene.add(mesh15);

mesh15.position.set(7,19,4);

var geometry16 = new THREE.SphereGeometry(2);
var material16 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(geometry16,material16);

//scene.add(mesh16);
mesh16.position.set(7,23,4);

//PECHO

var geometry17 = new THREE.CylinderGeometry(1,1,11,30);
var material17 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(geometry17,material17);

//scene.add(mesh17);
mesh17.position.set(0,23,4);
mesh17.rotation.set(0,0,Math.PI/2);


//COLUMNA

var geometry18 = new THREE.CylinderGeometry(1,1,30,30);
var material18 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh18 = new THREE.Mesh(geometry18,material18);

//scene.add(mesh18);
mesh18.position.set(0,13,-7);
mesh18.rotation.set(Math.PI/4,0,0);

var geometry19 = new THREE.SphereGeometry(2);
var material19 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(geometry19,material19);

//scene.add(mesh19);
mesh19.position.set(0,23,4);

//COSTILLA 1

var geometry20 = new THREE.CylinderGeometry(1,1,11,30);
var material20 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh20 = new THREE.Mesh(geometry20,material20);

//scene.add(mesh20);
mesh20.position.set(0,20,0);
mesh20.rotation.set(0,0,Math.PI/2);


var geometry21 = new THREE.CylinderGeometry(1,1,5,30);
var material21 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh21 = new THREE.Mesh(geometry21,material21);

//scene.add(mesh21);

mesh21.position.set(6.5,18.48,0);

var geometry22 = new THREE.CylinderGeometry(1,1,5,30);
var material22 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh22 = new THREE.Mesh(geometry22,material22);

//scene.add(mesh22);

mesh22.position.set(-6.5,18.48,0);

var geometry23 = new THREE.CylinderGeometry(1,1,5,30);
var material23 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh23 = new THREE.Mesh(geometry23,material23);

//scene.add(mesh23);
mesh23.position.set(4.8,16.5,0);
mesh23.rotation.set(0,0,Math.PI/2);

var geometry24 = new THREE.CylinderGeometry(1,1,5,30);
var material24 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh24 = new THREE.Mesh(geometry24,material24);

//scene.add(mesh24);
mesh24.position.set(-4.8,16.5,0);
mesh24.rotation.set(0,0,Math.PI/2);


//COSTILLA 2

var geometry25 = new THREE.CylinderGeometry(1,1,10,30);
var material25 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh25 = new THREE.Mesh(geometry25,material25);

//scene.add(mesh25);
mesh25.position.set(0,16,-4);
mesh25.rotation.set(0,0,Math.PI/2);


var geometry26 = new THREE.CylinderGeometry(1,1,5,30);
var material26 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh26 = new THREE.Mesh(geometry26,material26);

//scene.add(mesh26);

mesh26.position.set(5,14.48,-4);

var geometry27 = new THREE.CylinderGeometry(1,1,5,30);
var material27 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh27 = new THREE.Mesh(geometry27,material27);

//scene.add(mesh27);

mesh27.position.set(-5,14.48,-4);

var geometry28 = new THREE.CylinderGeometry(1,1,3,30);
var material28 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh28 = new THREE.Mesh(geometry28,material28);

//scene.add(mesh28);
mesh28.position.set(4.5,12.5,-4);
mesh28.rotation.set(0,0,Math.PI/2);

var geometry29 = new THREE.CylinderGeometry(1,1,3,30);
var material29 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh29 = new THREE.Mesh(geometry29,material29);

//scene.add(mesh29);
mesh29.position.set(-4.5,12.5,-4);
mesh29.rotation.set(0,0,Math.PI/2);



//COSTILLA 3

var geometry30 = new THREE.CylinderGeometry(1,1,9,30);
var material30 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh30 = new THREE.Mesh(geometry30,material30);

//scene.add(mesh30);
mesh30.position.set(0,12,-8);
mesh30.rotation.set(0,0,Math.PI/2);


var geometry31 = new THREE.CylinderGeometry(1,1,5,30);
var material31 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh31 = new THREE.Mesh(geometry31,material31);

//scene.add(mesh31);

mesh31.position.set(5,10.48,-8);

var geometry32 = new THREE.CylinderGeometry(1,1,5,30);
var material32 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh32 = new THREE.Mesh(geometry32,material32);

//scene.add(mesh32);

mesh32.position.set(-5,10.48,-8);

var geometry33 = new THREE.CylinderGeometry(1,1,3,30);
var material33 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh33 = new THREE.Mesh(geometry33,material33);

//scene.add(mesh33);
mesh33.position.set(4.5,8.5,-8);
mesh33.rotation.set(0,0,Math.PI/2);

var geometry34 = new THREE.CylinderGeometry(1,1,3,30);
var material34 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh34 = new THREE.Mesh(geometry34,material34);

//scene.add(mesh34);
mesh34.position.set(-4.5,8.5,-8);
mesh34.rotation.set(0,0,Math.PI/2);

//COLA

var geometry35 = new THREE.BoxGeometry(6,2,7,4,4,4);
var material35 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh35 = new THREE.Mesh(geometry35,material35);

//scene.add(mesh35);

mesh35.position.set(0,2.5,-16);


// PIERNA TRASERA IZQ
var geometry36 = new THREE.CylinderGeometry(1,1,18,30);
var material36 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh36 = new THREE.Mesh(geometry36,material36);

//scene.add(mesh36);
mesh36.position.set(-7,8.5,-17);
mesh36.rotation.set(0,0,Math.PI/4)

var geometry37 = new THREE.SphereGeometry(2);
var material37 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh37 = new THREE.Mesh(geometry37,material37);

//scene.add(mesh37);
mesh37.position.set(-12.5,14,-17);

var geometry38 = new THREE.CylinderGeometry(1,1,13,30);
var material38 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh38 = new THREE.Mesh(geometry38,material38);

//scene.add(mesh38);
mesh38.position.set(-12.5,8.5,-17);


//PATA TRASERA IZQ

var geometry39 = new THREE.BoxGeometry(6,4,7,4,4,4);
var material39 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh39 = new THREE.Mesh(geometry39,material39);

//scene.add(mesh39);

mesh39.position.set(-12.5,3,-16);

var geometry40 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material40 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh40 = new THREE.Mesh(geometry40,material40);

//scene.add(mesh40);

mesh40.position.set(-14,3,-12.3);

var geometry41 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material41 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh41 = new THREE.Mesh(geometry41,material41);

//scene.add(mesh41);

mesh41.position.set(-12.5,3,-12.3);


var geometry42 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material42 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh42 = new THREE.Mesh(geometry42,material42);

//scene.add(mesh42);

mesh42.position.set(-11,3,-12.3);


// PIERNA TRASERA DERECHA
var geometry43 = new THREE.CylinderGeometry(1,1,18,30);
var material43 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh43 = new THREE.Mesh(geometry43,material43);

//scene.add(mesh43);
mesh43.position.set(7,8.5,-17);
mesh43.rotation.set(0,0,3*Math.PI/4)

var geometry44 = new THREE.SphereGeometry(2);
var material44 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh44 = new THREE.Mesh(geometry44,material44);

//scene.add(mesh44);
mesh44.position.set(12.5,14,-17);

var geometry45 = new THREE.CylinderGeometry(1,1,13,30);
var material45 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh45 = new THREE.Mesh(geometry45,material45);

//scene.add(mesh45);
mesh45.position.set(12.5,8.5,-17);


//PATA TRASERA DERECHA

var geometry46 = new THREE.BoxGeometry(6,4,7,4,4,4);
var material46 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh46 = new THREE.Mesh(geometry46,material46);

//scene.add(mesh46);

mesh46.position.set(12.5,3,-16);

var geometry47 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material47 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh47 = new THREE.Mesh(geometry47,material47);

//scene.add(mesh47);

mesh47.position.set(14,3,-12.3);

var geometry48 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material48 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh48 = new THREE.Mesh(geometry48,material48);

//scene.add(mesh48);

mesh48.position.set(12.5,3,-12.3);


var geometry49 = new THREE.BoxGeometry(0.3,4,0.3,1,1,1);
var material49 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh49 = new THREE.Mesh(geometry49,material49);

//scene.add(mesh49);

mesh49.position.set(11,3,-12.3);

//COLA

var geometry50 = new THREE.CylinderGeometry(1,1,20,30);
var material50 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh50 = new THREE.Mesh(geometry50,material50);

//scene.add(mesh50);
mesh50.position.set(0,10,-23);
mesh50.rotation.set(3*Math.PI/4,0,0)

var geometry51 = new THREE.SphereGeometry(3);
var material51 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh51 = new THREE.Mesh(geometry51,material51);

//scene.add(mesh51);
mesh51.position.set(0,16,-29);


//CUELLO

var geometry52 = new THREE.CylinderGeometry(1,1,10,30);
var material52 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh52 = new THREE.Mesh(geometry52,material52);

//scene.add(mesh52);
mesh52.position.set(0,27,4);


//COLLAR

var geometry53 = new THREE.TorusGeometry(3,1,30,30);
var material53 = new THREE.MeshLambertMaterial({
    color:0xCC2F04,
    side: THREE.DoubleSide
});
var mesh53 = new THREE.Mesh(geometry53,material53);

//scene.add(mesh53);
mesh53.position.set(0,27,4);
mesh53.rotation.set(Math.PI/2,0,0);

//CABEZA

var geometry54 = new THREE.SphereGeometry(8.5);
var material54 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh54 = new THREE.Mesh(geometry54,material54);

//scene.add(mesh54);
mesh54.position.set(0,37,4);

//OSICO

var geometry55 = new THREE.BoxGeometry(9,8,8,5,5,5);
var material55 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh55 = new THREE.Mesh(geometry55,material55);

//scene.add(mesh55);

mesh55.position.set(0,35,13);

//NARIZ

var geometry56 = new THREE.SphereGeometry(1.5);
var material56 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh56 = new THREE.Mesh(geometry56,material56);

//scene.add(mesh56);
mesh56.position.set(0,37,18.5);


//OJOS

var geometry57 = new THREE.SphereGeometry(2);
var material57 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh57 = new THREE.Mesh(geometry57,material57);

//scene.add(mesh57);
mesh57.position.set(-3,41,10);

var geometry58 = new THREE.SphereGeometry(2);
var material58 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh58 = new THREE.Mesh(geometry58,material58);

//scene.add(mesh58);
mesh58.position.set(3,41,10);

//OREJAS

var geometry59 = new THREE.ConeGeometry(2,8,15,15);
var material59 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh59 = new THREE.Mesh(geometry59,material59);

//scene.add(mesh59);

mesh59.position.set(-5,45,3);
mesh59.rotation.set(0,0,Math.PI);


var geometry60 = new THREE.ConeGeometry(2,8,15,15);
var material60 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh60 = new THREE.Mesh(geometry60,material60);

//scene.add(mesh60);

mesh60.position.set(7,44,3);
mesh60.rotation.set(0,0,3*Math.PI/4)

var PERRITO = new THREE.Group();
PERRITO.add(
    mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10,
    mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17, mesh18, mesh19, mesh20,
    mesh21, mesh22, mesh23, mesh24, mesh25, mesh26, mesh27, mesh28, mesh29, mesh30,
    mesh31, mesh32, mesh33, mesh34, mesh35, mesh36, mesh37, mesh38, mesh39, mesh40,
    mesh41, mesh42, mesh43, mesh44, mesh45, mesh46, mesh47, mesh48, mesh49, mesh50,
    mesh51, mesh52, mesh53, mesh54, mesh55, mesh56, mesh57, mesh58, mesh59, mesh60
);
//scene.add(PERRITO);
PERRITO.position.set(x,y,z);
return PERRITO;


}
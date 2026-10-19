import * as THREE from "../js/three.module.js";
export default function E01 ({x,y,z}){


//CABEZA
var geometry01 = new THREE.SphereGeometry(3);
var material01 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

mesh01.position.set(0,15,1);


//PIE 1
var geometry02 = new THREE.BoxGeometry(2,1,3,4,4,4);
var material02 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(-2.5,0.5,1.5);

//PIE 2
var geometry03 = new THREE.BoxGeometry(2,1,3,4,4,4);
var material03 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});

var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(2.5,0.5,1.5);

//PIERNA 1
var geometry04 = new THREE.CylinderGeometry(0.3,0.3,2.7,30);
var material04 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);

mesh04.position.set(-2.5,2.3,1);

//PIERNA 2
var geometry05 = new THREE.CylinderGeometry(0.3,0.3,2.7,30);
var material05 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);

mesh05.position.set(2.5,2.3,1);

//RODILLA 1
var geometry06 = new THREE.SphereGeometry(0.5);
var material06 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);

mesh06.position.set(2.5,4,1);

//RODILLA 2
var geometry07 = new THREE.SphereGeometry(0.5);
var material07 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);

//scene.add(mesh07);

mesh07.position.set(-2.5,4,1);

//CADERA 1
var geometry08 = new THREE.CylinderGeometry(0.3,0.3,1.5,30);
var material08 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);

mesh08.position.set(2,4.6,1);
mesh08.rotation.set(0,0,Math.PI/4)

//CADERA2
var geometry09 = new THREE.CylinderGeometry(0.3,0.3,1.5,30);
var material09 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);

mesh09.position.set(-2,4.6,1);
mesh09.rotation.set(0,0,3*Math.PI/4)

//TAPARRABOS

var geometry10 = new THREE.BoxGeometry(3,4,1,4,4,4);
var material10 = new THREE.MeshLambertMaterial({
    color:0xC90404,
    side: THREE.DoubleSide
});

var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(0,4,1);


//TAPARRABOS 2
var geometry11 = new THREE.BoxGeometry(3,0.3,1,4,4,4);
var material11 = new THREE.MeshLambertMaterial({
    color:0xEBC605,
    side: THREE.DoubleSide
});

var mesh11 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh11);
mesh11.position.set(0,6.15,1);

//COLUMNA

var geometry12 = new THREE.CylinderGeometry(0.3,0.3,6,30);
var material12 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry12,material12);

//scene.add(mesh12);

mesh12.position.set(0,9,1);

//COSTILLAS
var geometry13 = new THREE.CylinderGeometry(0.3,0.3,3,30);
var material13 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry13,material13);

//scene.add(mesh13);

mesh13.position.set(0,11,1);
mesh13.rotation.set(0,0,Math.PI/2);

var geometry14 = new THREE.CylinderGeometry(0.3,0.3,3,30);
var material14 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry14,material14);

//scene.add(mesh14);

mesh14.position.set(0,10,1);
mesh14.rotation.set(0,0,Math.PI/2);

var geometry15 = new THREE.CylinderGeometry(0.3,0.3,3,30);
var material15 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh15= new THREE.Mesh(geometry15,material15);

//scene.add(mesh15);

mesh15.position.set(0,9,1);
mesh15.rotation.set(0,0,Math.PI/2);

var geometry16 = new THREE.CylinderGeometry(0.3,0.3,2,30);
var material16 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(geometry16,material16);

//scene.add(mesh16);

mesh16.position.set(0,8,1);
mesh16.rotation.set(0,0,Math.PI/2);

//HOMBROS
var geometry17 = new THREE.SphereGeometry(0.5);
var material17 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(geometry17,material17);

//scene.add(mesh17);

mesh17.position.set(-1.8,11,1);

var geometry18 = new THREE.SphereGeometry(0.5);
var material18 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh18 = new THREE.Mesh(geometry18,material18);

//scene.add(mesh18);

mesh18.position.set(1.8,11,1);

//BRAZOS
var geometry19 = new THREE.CylinderGeometry(0.3,0.3,2.7,30);
var material19 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(geometry19,material19);

//scene.add(mesh19);

mesh19.position.set(-2.9,10,1);
mesh19.rotation.set(0,0,3*Math.PI/4)

var geometry20 = new THREE.CylinderGeometry(0.3,0.3,2.7,30);
var material20 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh20 = new THREE.Mesh(geometry20,material20);

//scene.add(mesh20);

mesh20.position.set(2.9,10,1);
mesh20.rotation.set(0,0,Math.PI/4);

//CODOS
var geometry21 = new THREE.SphereGeometry(0.5);
var material21 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh21 = new THREE.Mesh(geometry21,material21);

//scene.add(mesh21);

mesh21.position.set(-3.8,9,1);

var geometry22 = new THREE.SphereGeometry(0.5);
var material22 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh22 = new THREE.Mesh(geometry22,material22);

//scene.add(mesh22);

mesh22.position.set(3.8,9,1);

//ANTEBRAZOS
var geometry23 = new THREE.CylinderGeometry(0.3,0.3,2,30);
var material23 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh23 = new THREE.Mesh(geometry23,material23);

//scene.add(mesh23);

mesh23.position.set(-4.5,9.8,1);
mesh23.rotation.set(0,0,Math.PI/4);

var geometry24 = new THREE.CylinderGeometry(0.3,0.3,2,30);
var material24 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh24 = new THREE.Mesh(geometry24,material24);

//scene.add(mesh24);

mesh24.position.set(3.8,9,2);
mesh24.rotation.set(Math.PI/2,0,0);

//MANOS
var geometry25 = new THREE.SphereGeometry(0.7);
var material25 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh25 = new THREE.Mesh(geometry25,material25);

//scene.add(mesh25);

mesh25.position.set(-5.6,11,1);

var geometry26 = new THREE.SphereGeometry(0.7);
var material26 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh26 = new THREE.Mesh(geometry26,material26);

//scene.add(mesh26);

mesh26.position.set(3.8,9,3);

//ESCUDO
var geometry27 = new THREE.CircleGeometry(3,40,);
var material27 = new THREE.MeshLambertMaterial({
    color:0xC90404,
    side: THREE.DoubleSide
});
var mesh27 = new THREE.Mesh(geometry27,material27);

//scene.add(mesh27);

mesh27.position.set(4,9,3.7);

var geometry28 = new THREE.RingGeometry(5,4,10);
var material28 = new THREE.MeshLambertMaterial({
    color:0xF5CF0A,
    side: THREE.DoubleSide
});
var mesh28 = new THREE.Mesh(geometry28,material28);

//scene.add(mesh28);

mesh28.position.set(4,9,3.85);
mesh28.scale.set(0.5,0.5,0.5);

var geometry29 = new THREE.CircleGeometry(1,10);
var material29 = new THREE.MeshLambertMaterial({
    color:0xF5CF0A,
    side: THREE.DoubleSide
});
var mesh29 = new THREE.Mesh(geometry29,material29);

//scene.add(mesh29);

mesh29.position.set(4,9,3.85);

//PALO
var geometry30 = new THREE.CylinderGeometry(0.3,0.3,14,30);
var material30 = new THREE.MeshLambertMaterial({
    color:0x995231,
    side: THREE.DoubleSide
});
var mesh30 = new THREE.Mesh(geometry30,material30);

//scene.add(mesh30);

mesh30.position.set(-5.6,7,1);

//DETALLES PALO
var geometry31 = new THREE.CylinderGeometry(0.4,0.4,0.3,30);
var material31 = new THREE.MeshLambertMaterial({
    color:0x66351E,
    side: THREE.DoubleSide
});
var mesh31 = new THREE.Mesh(geometry31,material31);

//scene.add(mesh31);

mesh31.position.set(-5.6,12.5,1);

var geometry32 = new THREE.CylinderGeometry(0.4,0.4,0.3,30);
var material32 = new THREE.MeshLambertMaterial({
    color:0x66351E,
    side: THREE.DoubleSide
});
var mesh32 = new THREE.Mesh(geometry32,material32);

//scene.add(mesh32);

mesh32.position.set(-5.6,13,1);

var geometry32 = new THREE.CylinderGeometry(0.4,0.4,0.3,30);
var material32 = new THREE.MeshLambertMaterial({
    color:0x66351E,
    side: THREE.DoubleSide
});
var mesh32 = new THREE.Mesh(geometry32,material32);

//scene.add(mesh32);

mesh32.position.set(-5.6,13.5,1);

//PUNTA DE LANZA
var geometry33 = new THREE.SphereGeometry(1);
var material33 = new THREE.MeshLambertMaterial({
    color:0x66351E,
    side: THREE.DoubleSide
});
var mesh33 = new THREE.Mesh(geometry33,material33);

//scene.add(mesh33);

mesh33.position.set(-5.6,15,1);

var geometry34 = new THREE.ConeGeometry(1.3,3,20,20);
var material34 = new THREE.MeshLambertMaterial({
    color:0x3EBA16,
    side: THREE.DoubleSide
});
var mesh34 = new THREE.Mesh(geometry34,material34);

//scene.add(mesh34);

mesh34.position.set(-5.6,16.5,1);

//DETALLES CARA
var geometry35 = new THREE.SphereGeometry(0.7);
var material35 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh35 = new THREE.Mesh(geometry35,material35);

//scene.add(mesh35);

mesh35.position.set(-1.3,15,3.8);

var geometry36 = new THREE.SphereGeometry(0.7);
var material36 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh36 = new THREE.Mesh(geometry36,material36);

//scene.add(mesh36);

mesh36.position.set(1.3,15,3.8);

var geometry37 = new THREE.ConeGeometry(1.3,3,20,20);
var material37 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh37 = new THREE.Mesh(geometry37,material37);

//scene.add(mesh37);

mesh37.position.set(0,14.3,3.9);
mesh37.scale.set(0.3,0.3,0.3);

var geometry38 = new THREE.CylinderGeometry(0.1,0.1,2,30);
var material38 = new THREE.MeshLambertMaterial({
    color:0X000000,
    side: THREE.DoubleSide
});
var mesh38 = new THREE.Mesh(geometry38,material38);

//scene.add(mesh38);

mesh38.position.set(0,13,3.4);
mesh38.rotation.set(0,0,Math.PI/2);

var geometry39 = new THREE.CylinderGeometry(0.1,0.1,0.5,30);
var material39 = new THREE.MeshLambertMaterial({
    color:0X000000,
    side: THREE.DoubleSide
});
var mesh39 = new THREE.Mesh(geometry39,material39);

//scene.add(mesh39);

mesh39.position.set(-0.6,13,3.4);
mesh39.rotation.set(0,0,0);

var geometry40 = new THREE.CylinderGeometry(0.1,0.1,0.5,30);
var material40 = new THREE.MeshLambertMaterial({
    color:0X000000,
    side: THREE.DoubleSide
});
var mesh40 = new THREE.Mesh(geometry40,material40);

//scene.add(mesh40);

mesh40.position.set(0,13,3.4);
mesh40.rotation.set(0,0,0);



var geometry41 = new THREE.CylinderGeometry(0.1,0.1,0.5,30);
var material41 = new THREE.MeshLambertMaterial({
    color:0X000000,
    side: THREE.DoubleSide
});
var mesh41 = new THREE.Mesh(geometry41,material41);
//scene.add(mesh41);

mesh41.position.set(0.6,13,3.4);
mesh41.rotation.set(0,0,0);


var CALACA = new THREE.Group();
CALACA.add(mesh01,mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13, mesh14,
    mesh15, mesh16, mesh17, mesh18, mesh19, mesh20, mesh21, mesh22, mesh23, mesh24, mesh25, mesh26, mesh27, mesh28,mesh29,
    mesh30, mesh31, mesh32, mesh33, mesh34, mesh35, mesh36, mesh37, mesh38, mesh39, mesh40,mesh41);
//scene.add(CALACA);
CALACA.position.set(x,y,z);

return CALACA;

}
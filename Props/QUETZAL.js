import * as THREE from "../js/three.module.js";
export default function E07 ({x,y,z}){

//BASE CABEZA 

var geometry01 = new THREE.BoxGeometry(22,19,18,4,4,4);
var material01 = new THREE.MeshLambertMaterial({
    color:0x1C4C02,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

mesh01.position.set(0,15,0);


//OSICO
var geometry02 = new THREE.BoxGeometry(10,2.5,11,5,5,5);
var material02 = new THREE.MeshLambertMaterial({
    color:0xC2980A,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);


mesh02.position.set(0,17,14);

var geometry03 = new THREE.BoxGeometry(10,2.5,11,5,5,5);
var material03 = new THREE.MeshLambertMaterial({
    color:0xC2980A,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);


mesh03.position.set(0,10,14);


//DIENTES BASES

var geometry04 = new THREE.CylinderGeometry(1.5,1.5,1,30);
var material04 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);

mesh04.position.set(-3.5,15.5,11);

var geometry05 = new THREE.CylinderGeometry(1.5,1.5,1,30);
var material05 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);

mesh05.position.set(-3.5,15.5,18);

var geometry06 = new THREE.CylinderGeometry(1.5,1.5,1,30);
var material06 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);

mesh06.position.set(3.5,15.5,18);

var geometry07 = new THREE.CylinderGeometry(1.5,1.5,1,30);
var material07 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);

//scene.add(mesh07);

mesh07.position.set(3.5,15.5,11);


//DIENTES

var geometry08 = new THREE.ConeGeometry(1.4,3.5,20,20);
var material08 = new THREE.MeshLambertMaterial({
    color:0xBAB9B6,
    side: THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);

mesh08.position.set(-3.5,13.8,11);
mesh08.rotation.set(0,0,Math.PI);


var geometry09 = new THREE.ConeGeometry(1.4,3.5,20,20);
var material09 = new THREE.MeshLambertMaterial({
    color:0xBAB9B6,
    side: THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);

mesh09.position.set(-3.5,13.8,18);
mesh09.rotation.set(0,0,Math.PI);


var geometry10 = new THREE.ConeGeometry(1.4,3.5,20,20);
var material10 = new THREE.MeshLambertMaterial({
    color:0xBAB9B6,
    side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);

mesh10.position.set(3.5,13.8,18);
mesh10.rotation.set(0,0,Math.PI);

var geometry11 = new THREE.ConeGeometry(1.4,3.5,20,20);
var material11 = new THREE.MeshLambertMaterial({
    color:0xBAB9B6,
    side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry11,material11);

//scene.add(mesh11);

mesh11.position.set(3.5,13.8,11);
mesh11.rotation.set(0,0,Math.PI);


//NARIZ
var geometry12 = new THREE.BoxGeometry(4,2.5,3,4,4,4);
var material12 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry12,material12);

//scene.add(mesh12);

mesh12.position.set(0,19.5,18);

var geometry13 = new THREE.BoxGeometry(1,1,11,4,4,4);
var material13 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry13,material13);

//scene.add(mesh13);

mesh13.position.set(-4,18.75,14);


var geometry14 = new THREE.BoxGeometry(1,1,11,4,4,4);
var material14 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry14,material14);

//scene.add(mesh14);

mesh14.position.set(4,18.75,14);

//DETALLES NARIZ

var geometry141 = new THREE.BoxGeometry(0.2,2.5,0.2,4,4,4);
var material141 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh141 = new THREE.Mesh(geometry141,material141);

//scene.add(mesh141);

mesh141.position.set(0,19.5,19.6);


var geometry15 = new THREE.BoxGeometry(1.05,0.2,0.2,4,4,4);
var material15 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(geometry15,material15);

//scene.add(mesh15);

mesh15.position.set(-1.5,19,19.6);

var geometry16 = new THREE.BoxGeometry(1.05,0.2,0.2,4,4,4);
var material16 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(geometry16,material16);

//scene.add(mesh16);

mesh16.position.set(1.5,19,19.6);


var geometry17 = new THREE.BoxGeometry(0.2,1,0.2,4,4,4);
var material17 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(geometry17,material17);

//scene.add(mesh17);

mesh17.position.set(-1,19.4,19.6);

var geometry18 = new THREE.BoxGeometry(0.2,1,0.2,4,4,4);
var material18 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh18 = new THREE.Mesh(geometry18,material18);

//scene.add(mesh18);

mesh18.position.set(1,19.4,19.6);

var geometry19 = new THREE.BoxGeometry(0.5,0.2,0.2,4,4,4);
var material19 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(geometry19,material19);

//scene.add(mesh19);

mesh19.position.set(1.15,20,19.6);

var geometry20 = new THREE.BoxGeometry(0.5,0.2,0.2,4,4,4);
var material20 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh20 = new THREE.Mesh(geometry20,material20);

//scene.add(mesh20);

mesh20.position.set(-1.15,20,19.6);


//OJOS
var geometry21 = new THREE.CylinderGeometry(4,4,1,30);
var material21 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh21 = new THREE.Mesh(geometry21,material21);

//scene.add(mesh21);

mesh21.position.set(-4.5,24,9.5);
mesh21.rotation.set(Math.PI/2,0,0)

var geometry22 = new THREE.CylinderGeometry(4,4,1,30);
var material22 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh22 = new THREE.Mesh(geometry22,material22);

//scene.add(mesh22);

mesh22.position.set(4.5,24,9.5);
mesh22.rotation.set(Math.PI/2,0,0)


var geometry23 = new THREE.CylinderGeometry(3,3,1,30);
var material23 = new THREE.MeshLambertMaterial({
    color:0xBAB9B6,
    side: THREE.DoubleSide
});
var mesh23 = new THREE.Mesh(geometry23,material23);

//scene.add(mesh23);

mesh23.position.set(-4.5,24,10.5);
mesh23.rotation.set(Math.PI/2,0,0)

var geometry24 = new THREE.CylinderGeometry(3,3,1,30);
var material24 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh24 = new THREE.Mesh(geometry24,material24);

//scene.add(mesh24);

mesh24.position.set(4.5,24,10.5);
mesh24.rotation.set(Math.PI/2,0,0)

var geometry25 = new THREE.CylinderGeometry(2,2,1,30);
var material25 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh25 = new THREE.Mesh(geometry25,material25);

//scene.add(mesh25);

mesh25.position.set(4,23,11.5);
mesh25.rotation.set(Math.PI/2,0,0)

var geometry26 = new THREE.CylinderGeometry(2,2,1,30);
var material26 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh26 = new THREE.Mesh(geometry26,material26);

//scene.add(mesh26);

mesh26.position.set(-4,23,11.5);
mesh26.rotation.set(Math.PI/2,0,0)

//OREJAS 

var geometry27 = new THREE.CylinderGeometry(5,5,3,30);
var material27 = new THREE.MeshLambertMaterial({
    color:0x0B2602,
    side: THREE.DoubleSide
});
var mesh27 = new THREE.Mesh(geometry27,material27);

//scene.add(mesh27);

mesh27.position.set(-12.5,24,2);
mesh27.rotation.set(0,0,Math.PI/2)

var geometry28 = new THREE.CylinderGeometry(5,5,3,30);
var material28 = new THREE.MeshLambertMaterial({
    color:0x0B2602,
    side: THREE.DoubleSide
});
var mesh28 = new THREE.Mesh(geometry28,material28);

//scene.add(mesh28);

mesh28.position.set(12.5,24,2);
mesh28.rotation.set(0,0,Math.PI/2)


var geometry29 = new THREE.BoxGeometry(10,2.5,11,5,5,5);
var material29 = new THREE.MeshLambertMaterial({
    color:0x0B2602,
    side: THREE.DoubleSide
});
var mesh29 = new THREE.Mesh(geometry29,material29);

//scene.add(mesh29);
mesh29.position.set(0,25.5,1.5);

//CEJAS

var geometry30 = new THREE.BoxGeometry(5,1.5,1,5,5,5);
var material30 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh30 = new THREE.Mesh(geometry30,material30);

//scene.add(mesh30);
mesh30.position.set(3,30.5,9);
mesh30.rotation.set(0,0,Math.PI/4)

var geometry31 = new THREE.BoxGeometry(5,1.5,1,5,5,5);
var material31 = new THREE.MeshLambertMaterial({
    color:0xA17D05,
    side: THREE.DoubleSide
});
var mesh31 = new THREE.Mesh(geometry31,material31);

//scene.add(mesh31);
mesh31.position.set(-3,30.5,9);
mesh31.rotation.set(0,0,3*Math.PI/4)

//PLUMA CENTRAL

var geometry32 = new THREE.ConeGeometry(3,15,20,20);
var material32 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh32 = new THREE.Mesh(geometry32,material32);

//scene.add(mesh32);

mesh32.position.set(0,45,-5);
mesh32.rotation.set(0,0,0);

//PLUMAS IZQ

var geometry33 = new THREE.ConeGeometry(3,15,20,20);
var material33 = new THREE.MeshLambertMaterial({
    color:0xC2980A,
    side: THREE.DoubleSide
});
var mesh33 = new THREE.Mesh(geometry33,material33);

//scene.add(mesh33);

mesh33.position.set(-10,43,-5);
mesh33.rotation.set(0,0,Math.PI/8);

var geometry34 = new THREE.ConeGeometry(3,15,20,20);
var material34 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh34 = new THREE.Mesh(geometry34,material34);

//scene.add(mesh34);

mesh34.position.set(-20,37,-5);
mesh34.rotation.set(0,0,Math.PI/4);

var geometry35 = new THREE.ConeGeometry(3,15,20,20);
var material35 = new THREE.MeshLambertMaterial({
    color:0xC2980A,
    side: THREE.DoubleSide
});
var mesh35 = new THREE.Mesh(geometry35,material35);

//scene.add(mesh35);

mesh35.position.set(-25,27,-5);
mesh35.rotation.set(0,0,3 * Math.PI/8);

var geometry36 = new THREE.ConeGeometry(3,15,20,20);
var material36 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh36 = new THREE.Mesh(geometry36,material36);

//scene.add(mesh36);

mesh36.position.set(-28,17,-5);
mesh36.rotation.set(0,0,Math.PI/2);

//PLUMAS DERECHO 

var geometry37 = new THREE.ConeGeometry(3,15,20,20);
var material37 = new THREE.MeshLambertMaterial({
    color:0xC2980A,
    side: THREE.DoubleSide
});
var mesh37 = new THREE.Mesh(geometry37,material37);

//scene.add(mesh37);

mesh37.position.set(10,43,-5);
mesh37.rotation.set(0,0,-Math.PI/8);

var geometry38 = new THREE.ConeGeometry(3,15,20,20);
var material38 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh38 = new THREE.Mesh(geometry38,material38);

//scene.add(mesh38);

mesh38.position.set(20,37,-5);
mesh38.rotation.set(0,0,-Math.PI/4);

var geometry39 = new THREE.ConeGeometry(3,15,20,20);
var material39 = new THREE.MeshLambertMaterial({
    color:0xC2980A,
    side: THREE.DoubleSide
});
var mesh39 = new THREE.Mesh(geometry39,material39);

//scene.add(mesh39);

mesh39.position.set(25,27,-5);
mesh39.rotation.set(0,0,-3 * Math.PI/8);

var geometry40 = new THREE.ConeGeometry(3,15,20,20);
var material40 = new THREE.MeshLambertMaterial({
    color:0xC23308,
    side: THREE.DoubleSide
});
var mesh40 = new THREE.Mesh(geometry40,material40);

//scene.add(mesh40);

mesh40.position.set(28,17,-5);
mesh40.rotation.set(0,0,-Math.PI/2);

var     QUETZAL = new THREE.Group();
QUETZAL.add(
    mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10,
    mesh11, mesh12, mesh13, mesh14, mesh141, mesh15, mesh16, mesh17, mesh18, mesh19,
    mesh20, mesh21, mesh22, mesh23, mesh24, mesh25, mesh26, mesh27, mesh28, mesh29,
    mesh30, mesh31, mesh32, mesh33, mesh34, mesh35, mesh36, mesh37, mesh38, mesh39,
    mesh40
);
//scene.add(QUETZAL);

QUETZAL.position.set(x,y,z);
return QUETZAL;

}
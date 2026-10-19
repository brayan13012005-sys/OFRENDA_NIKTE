import * as THREE from "../js/three.module.js";
export default function E08 ({x,y,z}){

//PLATO
var geometry01 = new THREE.CylinderGeometry(10,10,0.5,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0xC26D17,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

mesh01.position.set(0,1.3,0);

var geometry02 = new THREE.CylinderGeometry(5,5,1,30);
var material02 = new THREE.MeshLambertMaterial({
    color:0x754412,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);

mesh02.position.set(0,0.5,0);

//DETALLES PLANO
var geometry03 = new THREE.RingGeometry(9,10,30);
var material03 = new THREE.MeshLambertMaterial({
    color:0x8A2219,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);

mesh03.position.set(0,1.8,0);
mesh03.rotation.set(Math.PI/2,0,0)

var geometry04 = new THREE.RingGeometry(6.5,7.5,30);
var material04 = new THREE.MeshLambertMaterial({
    color:0x8A2219,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);

mesh04.position.set(0,1.8,0);
mesh04.rotation.set(Math.PI/2,0,0)

//TAZA

var geometry05 = new THREE.SphereGeometry(5.5);
var material05 = new THREE.MeshLambertMaterial({
    color:0xB56009,
    side: THREE.DoubleSide
});

var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);

mesh05.position.set(0,6,0);

var geometry06 = new THREE.CylinderGeometry(4,2.5,4,30);
var material06 = new THREE.MeshLambertMaterial({
    color:0xB56009,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);

mesh06.position.set(0,11.8,0);

var geometry07 = new THREE.CylinderGeometry(3.4,2.5,2,30);
var material07 = new THREE.MeshLambertMaterial({
    color:0x8A2219,
    side: THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);

//scene.add(mesh07);

mesh07.position.set(0,11,0);

var geometry08 = new THREE.CircleGeometry(4,40);
var material08 = new THREE.MeshLambertMaterial({
    color:0x472104,
    side: THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);

mesh08.position.set(0,14,0);
mesh08.rotation.set(Math.PI/2,0,0);

var geometry09 = new THREE.TorusGeometry(3.8,0.5,40,40);
var material09 = new THREE.MeshLambertMaterial({
    color:0xB56009,
    side: THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);

mesh09.position.set(0,13.9,0);
mesh09.rotation.set(Math.PI/2,0,0);


//OREJA
var geometry10 = new THREE.TorusGeometry(2,0.5,40,40);
var material10 = new THREE.MeshLambertMaterial({
    color:0xB56009,
    side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);

mesh10.position.set(5,10,0);
mesh10.rotation.set(0,0,Math.PI/2);

//TAZA FINAL

var TAZA = new THREE.Group();
TAZA.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10);
//scene.add(TAZA);
TAZA.position.set(x,y,z);

return TAZA;

}










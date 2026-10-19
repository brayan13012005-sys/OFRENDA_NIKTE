import * as THREE from "../js/three.module.js";
export default function E09 ({x,y,z}){



//BOTELLA
var geometry01 = new THREE.BoxGeometry(8,19,8,8,4,4);
var material01 = new THREE.MeshLambertMaterial({
    color:0xF28F16,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

mesh01.position.set(0,10,0);


var geometry02 = new THREE.CylinderGeometry(1.5,1.5,7,30);
var material02 = new THREE.MeshLambertMaterial({
    color:0xF28F16,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);

mesh02.position.set(0,23,0);


var geometry03 = new THREE.CylinderGeometry(3.3,2.8,2,30);
var material03 = new THREE.MeshLambertMaterial({
    color:0x75001D,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);

mesh03.position.set(0,26,0);

//ETIQUETA

var geometry04 = new THREE.BoxGeometry(10.1,9,0.5,8,4,4);
var texture04 = new THREE.TextureLoader().load("./assets/JoseCuervo.jpg");
var material04 = new THREE.MeshLambertMaterial({map:texture04});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);

mesh04.position.set(0,10.5,5.3);


var geometry05 = new THREE.BoxGeometry(11,9,0.5,8,4,4);
var material05 = new THREE.MeshLambertMaterial({
    color:0x75001D,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);

mesh05.position.set(5.3,10.5,0);
mesh05.rotation.set(0,Math.PI/2,0);


var geometry06 = new THREE.BoxGeometry(11,9,0.5,8,4,4);
var material06 = new THREE.MeshLambertMaterial({
    color:0x75001D,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);

mesh06.position.set(-5.3,10.5,0);
mesh06.rotation.set(0,Math.PI/2,0);


var geometry07 = new THREE.BoxGeometry(10.1,9,0.5,8,4,4);
var texture07 = new THREE.TextureLoader().load("./assets/JoseCuervo.jpg");
var material07 = new THREE.MeshLambertMaterial({map:texture07});
var mesh07 = new THREE.Mesh(geometry07,material07);

//scene.add(mesh07);

mesh07.position.set(0,10.5,-5.3);


//CABALLITO 1

var geometry08 = new THREE.CylinderGeometry(3,2,7,30);
var material08 = new THREE.MeshLambertMaterial({
    color:0xF7F4F0,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);

mesh08.position.set(-10,3.5,9);


var geometry09 = new THREE.CylinderGeometry(2.3,1.5,4,30);
var material09 = new THREE.MeshLambertMaterial({
    color:0xF28F16,
    
    side: THREE.DoubleSide,
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);

mesh09.position.set(-10,3,9);


//CABALLITO 2

var geometry10 = new THREE.CylinderGeometry(3,2,7,30);
var material10 = new THREE.MeshLambertMaterial({
    color:0xF7F4F0,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);

mesh10.position.set(10,3.5,9);


var geometry11 = new THREE.CylinderGeometry(2.3,1.5,4,30);
var material11 = new THREE.MeshLambertMaterial({
    color:0xF28F16,
    
    side: THREE.DoubleSide,
});
var mesh11 = new THREE.Mesh(geometry11,material11);

//scene.add(mesh11);

mesh11.position.set(10,3,9);


//CRISTAL

var geometry12 = new THREE.BoxGeometry(10,20,10,8,4,4);
var material12 = new THREE.MeshLambertMaterial({
    color:0xF7F4F0,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
});
var mesh12 = new THREE.Mesh(geometry12,material12);

//scene.add(mesh12);

mesh12.position.set(0,10,0);


var geometry13 = new THREE.CylinderGeometry(2,2,7,30);
var material13 = new THREE.MeshLambertMaterial({
    color:0xF7F4F0,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
});
var mesh13 = new THREE.Mesh(geometry13,material13);

//scene.add(mesh13);

mesh13.position.set(0,23,0);


var TEQUILA = new THREE.Group();
TEQUILA.add(
    mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13
);
//scene.add(TEQUILA);

TEQUILA.position.set(x,y,z);

return TEQUILA;


}
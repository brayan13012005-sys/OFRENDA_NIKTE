import * as THREE from "../js/three.module.js";
export default function E11 ({x,y,z}){


//BOTELLA CRISTAL
var geometry01 = new THREE.CylinderGeometry(5,6,7,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0x00000,
    side: THREE.DoubleSide,
   
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);
mesh01.position.set(-0,3.5,0);

var geometry02 = new THREE.CylinderGeometry(5,5,15,30);
var material02 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide,
   
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);
mesh02.position.set(-0,14,0);

var geometry03 = new THREE.CylinderGeometry(2,5,5,30);
var material03 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide,
   
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);
mesh03.position.set(-0,24,0);

var geometry04 = new THREE.CylinderGeometry(2,2,2,30);
var material04 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide,
    
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);
mesh04.position.set(-0,27,0);

var geometry05 = new THREE.CylinderGeometry(2,2.3,2,30);
var material05 = new THREE.MeshLambertMaterial({
    color:0xDE2804,
    side: THREE.DoubleSide,
    
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);
mesh05.position.set(-0,29,0);


//ETIQUETA

var geometry10 = new THREE.CylinderGeometry(5.2,5.2,8,30);
var texture10 = new THREE.TextureLoader().load("./assets/ET_COCA.jpg");
var material10 = new THREE.MeshLambertMaterial({map:texture10});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);
mesh10.position.set(-0,15,0);

var COCACOLA = new THREE.Group();
COCACOLA.add(
    mesh01, mesh02, mesh03, mesh04, mesh05, mesh10
);
//scene.add(COCACOLA);

COCACOLA.position.set(x,y,z);
return COCACOLA;


}
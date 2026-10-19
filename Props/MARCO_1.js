import * as THREE from "../js/three.module.js";
export default function E04 ({x,y,z}){

//var geometry01 = new THREE.PlaneGeometry(6,6);
//var material01 = new THREE.MeshBasicMaterial({color:0x7512CC});
//var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

//BASE
var geometry01 = new THREE.BoxGeometry(10,12,1,4,4,4);
var material01 = new THREE.MeshLambertMaterial({
    color:0xBA6830,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);
mesh01.position.set(0,6,0);


//RETRATO
var geometry02 = new THREE.BoxGeometry(8,10,0.8,4,4,4);
var texture02 = new THREE.TextureLoader().load("./assets/AbuelitaManu.jpeg");
var material02 = new THREE.MeshLambertMaterial({map:texture02});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);
mesh02.position.set(0,6,0.5);

//RESPALDO
var geometry03 = new THREE.BoxGeometry(2.5,8,0.5,2,4,4);
var material03 = new THREE.MeshLambertMaterial({
    color:0X8A4D20,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);
mesh03.position.set(0,3,0.-3);
mesh03.rotation.set(Math.PI/4,0,0);


//MARCO

var MARCO = new THREE.Group();
MARCO.add(mesh01, mesh02, mesh03);
//scene.add(MARCO);
MARCO.position.set(x,y,z);

return MARCO;
}
import * as THREE from "../js/three.module.js";
export default function E013 ({x,y,z}){


var flor1 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat1 = new THREE.MeshLambertMaterial({color:0xD15C02});

var mesh00 = new THREE.Mesh(flor1,mat1);
mesh00.position.set(0,2,-20);
mesh00.rotation.set(Math.PI/2,0,0);
//scene.add(mesh00);
flor1.castShadow = true;
mesh00.scale.set(0.5,0.5,0.5);

var flor2 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat2 = new THREE.MeshLambertMaterial({color:0xD15C02});
var mesh002 = new THREE.Mesh(flor2,mat2);
mesh002.position.set(0,2,0);
mesh002.rotation.set(Math.PI/2,0,0);
//scene.add(mesh002);
flor2.castShadow = true;
mesh002.scale.set(0.5,0.5,0.5);

var flor3 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat3 = new THREE.MeshLambertMaterial({color:0xD15C02});
var mesh003 = new THREE.Mesh(flor3,mat3);
mesh003.position.set(0,2,20);
mesh003.rotation.set(Math.PI/2,0,0);
//scene.add(mesh003);
flor3.castShadow = true;
mesh003.scale.set(0.5,0.5,0.5);

var flor4 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat4 = new THREE.MeshLambertMaterial({color:0xD15C02});
var mesh004 = new THREE.Mesh(flor4,mat4);
mesh004.position.set(0,2,10);
mesh004.rotation.set(Math.PI/2,0,0);
//scene.add(mesh004);
flor4.castShadow = true;
mesh004.scale.set(0.5,0.5,0.5);

var flor5 = new THREE.TorusKnotGeometry(4,3,100,16,18,13);
var mat5 = new THREE.MeshLambertMaterial({color:0xD15C02});
var mesh005 = new THREE.Mesh(flor5,mat5);
mesh005.position.set(0,2,-10);
mesh005.rotation.set(Math.PI/2,0,0);
//scene.add(mesh005);
flor5.castShadow = true;
mesh005.scale.set(0.5,0.5,0.5);


var FLORES = new THREE.Group();
FLORES.add(mesh00,mesh002,mesh003,mesh004,mesh005);
//scene.add(FLORES);

FLORES.position.set(x,y,z);
return FLORES;
}
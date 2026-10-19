import * as THREE from "../js/three.module.js"; 
export default function E016 ({ x, y, z}){

// CALAVERITA 1 

var geometry07 = new THREE.SphereGeometry(12, 32, 32); 
var material07 = new THREE.MeshLambertMaterial({ color: 0xED153C });
var mesh07 = new THREE.Mesh(geometry07, material07);
//scene.add(mesh07);
mesh07.position.set(-30, 12, 0);

// Ojo izquierdo
var geometry08 = new THREE.BoxGeometry(3.5, 3.5, 3.5);
var material08 = new THREE.MeshLambertMaterial({ color: 0x000000, side: THREE.DoubleSide });
var mesh08 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh08);
mesh08.position.set(-33.5, 15, 9.5);

// Ojo derecho
var geometry09 = new THREE.BoxGeometry(3.5, 3.5, 3.5);
var material09 = new THREE.MeshLambertMaterial({ color: 0x000000, side: THREE.DoubleSide });
var mesh09 = new THREE.Mesh(geometry09, material09);
//scene.add(mesh09);
mesh09.position.set(-26.5, 15, 9.5);

// Nariz
var geometry10 = new THREE.ConeGeometry(1.3,3,20,20);
var material10 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);
mesh10.position.set(-30,12,12)

// Mandíbula grande
var geomMandibula = new THREE.BoxGeometry(16.5, 7.5, 10.5);
var matMandibula = new THREE.MeshLambertMaterial({ color: 0xED153C });
var meshMan1 = new THREE.Mesh(geomMandibula, matMandibula);
//scene.add(meshMan1);
meshMan1.position.set(-30, 3.5, 7.5);

// Dientes grandes
var geometryD = new THREE.BoxGeometry(1.5, 2.5, 1.5);
var materialD = new THREE.MeshLambertMaterial({ color: 0x000000 });

var diente1 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente1);
diente1.position.set(-33.0, 6.2, 13);

var diente2 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente2);
diente2.position.set(-31.0, 6.2, 13);

var diente3 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente3);
diente3.position.set(-29.0, 6.2, 13);

var diente4 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente4);
diente4.position.set(-27.0, 6.2, 13);



// CALAVERITA 2

var geometry11 = new THREE.SphereGeometry(12, 32, 32);
var material11 = new THREE.MeshLambertMaterial({ color: 0xA53AE8 });
var mesh11 = new THREE.Mesh(geometry11, material11);
//scene.add(mesh11);
mesh11.position.set(0, 12, 0);

// Ojo izquierdo
var mesh12 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh12);
mesh12.position.set(-3.5, 15, 9.5);

// Ojo derecho
var mesh13 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh13);
mesh13.position.set(3.5, 15, 9.5);

// Nariz
var geometry14 = new THREE.ConeGeometry(1.3,3,20,20);
var material14 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry14,material14);

//scene.add(mesh14);
mesh14.position.set(0,12,12)

// Mandíbula centro
var matMandibula2 = new THREE.MeshLambertMaterial({ color: 0xA53AE8 });
var meshMan2 = new THREE.Mesh(geomMandibula, matMandibula2);
//scene.add(meshMan2);
meshMan2.position.set(0, 3.5, 7.5);

// Dientes centro
var diente5 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente5);
diente5.position.set(-3.0, 6.2, 13);

var diente6 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente6);
diente6.position.set(-1.0, 6.2, 13);

var diente7 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente7);
diente7.position.set(1.0, 6.2, 13);

var diente8 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente8);
diente8.position.set(3.0, 6.2, 13);



// CALAVERITA 3 (Derecha - Blanca)
var geometry15 = new THREE.SphereGeometry(12, 35, 32);
var material15 = new THREE.MeshLambertMaterial({ color: 0x08C95E });
var mesh15 = new THREE.Mesh(geometry15, material15);
//scene.add(mesh15);
mesh15.position.set(30, 12, 0);

// Ojo izquierdo
var mesh16 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh16);
mesh16.position.set(26.5, 15, 9.5);

// Ojo derecho
var mesh17 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh17);
mesh17.position.set(33.5, 15, 9.5);

// Nariz
var geometry18 = new THREE.ConeGeometry(1.3,3,20,20);
var material18 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh18 = new THREE.Mesh(geometry18,material18);

//scene.add(mesh18);
mesh18.position.set(30,12,12)

// Mandíbula derecha
var matMandibula8 = new THREE.MeshLambertMaterial({ color: 0x08C95E });
var meshMan8 = new THREE.Mesh(geomMandibula, matMandibula8);
//scene.add(meshMan8);
meshMan8.position.set(30, 3.5, 7.5);

// Dientes derecha
var diente9 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente9);
diente9.position.set(27.0, 6.2, 13);

var diente10 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente10);
diente10.position.set(29.0, 6.2, 13);

var diente11 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente11);
diente11.position.set(31.0, 6.2, 13);

var diente12 = new THREE.Mesh(geometryD, materialD);
//scene.add(diente12);
diente12.position.set(33.0, 6.2, 13);


var CALAVERITAS = new THREE.Group();
CALAVERITAS.add(
    mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17, mesh18, 
    meshMan1, meshMan2, meshMan8, diente1, diente2, diente3, diente4, diente5, diente6, diente7, diente8,  
    diente9, diente10, diente11, diente12
);
//scene.add(CALAVERITAS);

CALAVERITAS.position.set(x,y,z);
return CALAVERITAS;




}
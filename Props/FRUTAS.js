import * as THREE from "../js/three.module.js";
export default function E02 ({x,y,z}){

//PLATO
var geometry01 = new THREE.CylinderGeometry(10,10,0.5,30);
var material01 = new THREE.MeshLambertMaterial({
    color:0xffffff,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);

//scene.add(mesh01);

mesh01.position.set(-6,1.2,0);

var geometry02 = new THREE.CylinderGeometry(5,5,1,30);
var material02 = new THREE.MeshLambertMaterial({
    color:0xD1D0CF,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);

mesh02.position.set(-6,0.5,0);

//DETALLES PLANO
var geometry03 = new THREE.RingGeometry(9,10,30);
var material03 = new THREE.MeshLambertMaterial({
    color:0xD1D0CF,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);

mesh03.position.set(-6,1.5,0);
mesh03.rotation.set(Math.PI/2,0,0)

var PLATO= new THREE.Group();
PLATO.add(mesh01, mesh02, mesh03);
//scene.add(PLATO);
PLATO.position.set(6,0,0);


//MANZANA

var geometry04 = new THREE.SphereGeometry(2);
var material04 = new THREE.MeshLambertMaterial({
    color:0xEB2F09,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);

mesh04.position.set(-1,3.5,1);

var geometry05 = new THREE.SphereGeometry(2);
var material05 = new THREE.MeshLambertMaterial({
    color:0xEB2F09,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);

mesh05.position.set(-0.1,3.5,1);

var geometry06 = new THREE.CylinderGeometry(0.15,0.15,1.7,30);
var material06 = new THREE.MeshLambertMaterial({
    color:0x61320B,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);

mesh06.position.set(-0.5,6,1);

var geometry07 = new THREE.CircleGeometry(0.6,40);
var material07 = new THREE.MeshLambertMaterial({
    color:0x31DE16,
    side: THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);

//cene.add(mesh07);

mesh07.position.set(0.1,5.8,1);

var MANZANA = new THREE.Group();
MANZANA.add(mesh04, mesh05, mesh06, mesh07);
//scene.add(MANZANA);
MANZANA.position.set(6,0,0);


//MANDARINA
var geometry08 = new THREE.SphereGeometry(2);
var material08 = new THREE.MeshLambertMaterial({
    color:0xF78E11,
    side: THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);
mesh08.position.set(0,3.5,0);

var geometry09 = new THREE.SphereGeometry(0.2);
var material09 = new THREE.MeshLambertMaterial({
    color:0xF2CC22,
    side: THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);
mesh09.position.set(0,5.5,0);

var MANDARINA = new THREE.Group();
MANDARINA.add(mesh08, mesh09);
//scene.add(MANDARINA);
MANDARINA.position.set(0,0.3,5);
MANDARINA.scale.set(0.8,0.8,0.8)


//UVAS
var geometry10 = new THREE.SphereGeometry(0.5);
var material10 = new THREE.MeshLambertMaterial({
    color:0x8F14E0,
    side: THREE.DoubleSide
});
var UNO10 = new THREE.Mesh(geometry10,material10);

//scene.add(UNO10);
UNO10.position.set(0,5.5,0);

var  DOS = UNO10.clone();
//scene.add(DOS);
DOS.position.set(1,5.58,0);

var  TRES = UNO10.clone();
//scene.add(TRES);
TRES.position.set(2,5.58,0);

var  CUATRO = UNO10.clone();
//scene.add(CUATRO);
CUATRO.position.set(3,5.58,0);

var  CINCO = UNO10.clone();
//scene.add(CINCO);
CINCO.position.set(0.5,5.58,0.8);

var  SEIS = UNO10.clone();
//scene.add(SEIS);
SEIS.position.set(1.5,5.58,0.8);

var  SIETE = UNO10.clone();
//scene.add(SIETE);
SIETE.position.set(2.5,5.58,0.8);

var  OCHO = UNO10.clone();
//scene.add(OCHO);
OCHO.position.set(2,5.58,1.6);

var  NUEVE = UNO10.clone();
//scene.add(NUEVE);
NUEVE.position.set(1,5.58,1.6);

var  DIEZ = UNO10.clone();
//scene.add(DIEZ);
DIEZ.position.set(2,5.58,1.6);

var  ONCE = UNO10.clone();
//scene.add(ONCE);
ONCE.position.set(1.5,5.58,2.4);

var  DOCE = UNO10.clone();
//scene.add(DOCE);
DOCE.position.set(1.9,6.5,0.8);

var  TRECE = UNO10.clone();
//scene.add(TRECE);
TRECE.position.set(0.9,6.5,0.8);

var  CATORCE = UNO10.clone();
//scene.add(CATORCE);
CATORCE.position.set(1.4,6.5,1.5);

var  QUINCE = UNO10.clone();
//scene.add(QUINCE);
QUINCE.position.set(1.4,7.4,1.2);

var geometry11 = new THREE.CylinderGeometry(0.15,0.15,1.7,30);
var material11 = new THREE.MeshLambertMaterial({
    color:0x61320B,
    side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry11,material11);

//scene.add(mesh11);

mesh11.position.set(1.4,8,1.2);

var geometry12 = new THREE.CircleGeometry(0.3,40);
var material12 = new THREE.MeshLambertMaterial({
    color:0x31DE16,
    side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry12,material12);

//scene.add(mesh12);

mesh12.position.set(1.8,7.8,1);

var UVAS = new THREE.Group();
UVAS.add(UNO10, DOS, TRES, CUATRO, CINCO, SEIS, SIETE, OCHO, NUEVE, DIEZ, ONCE, DOCE, TRECE, CATORCE, QUINCE,
    mesh11, mesh12);
//scene.add(UVAS);
UVAS.position.set(2.7,-8.75,-2);
UVAS.rotation.set(0,Math.PI,0);
UVAS.scale.set(2,2,2)


//MANZANA VERDE

var geometry13 = new THREE.SphereGeometry(2);
var material13 = new THREE.MeshLambertMaterial({
    color:0x338528,
    side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry13,material13);

//scene.add(mesh13);

mesh13.position.set(-1,3.5,1);

var geometry14 = new THREE.SphereGeometry(2);
var material14 = new THREE.MeshLambertMaterial({
    color:0x338528,
    side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry14,material14);

//scene.add(mesh14);

mesh14.position.set(-0.1,3.5,1);

var geometry15 = new THREE.CylinderGeometry(0.15,0.15,1.7,30);
var material15 = new THREE.MeshLambertMaterial({
    color:0x61320B,
    side: THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(geometry15,material15);

//scene.add(mesh15);

mesh15.position.set(-0.5,6,1);

var geometry16 = new THREE.CircleGeometry(0.6,40);
var material16 = new THREE.MeshLambertMaterial({
    color:0x31DE16,
    side: THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(geometry16,material16);

//scene.add(mesh16);

mesh16.position.set(0.1,5.8,1);

var MANZANAVERDE = new THREE.Group();
MANZANAVERDE.add(mesh13, mesh14, mesh15, mesh16);
//scene.add(MANZANAVERDE);
MANZANAVERDE.position.set(-5,0,0);

var FRUTAS = new THREE.Group();
FRUTAS.add(MANZANA, MANDARINA, UVAS, MANZANAVERDE, PLATO);
//scene.add(FRUTAS);
FRUTAS.position.set(x,y,z);

return FRUTAS;

}















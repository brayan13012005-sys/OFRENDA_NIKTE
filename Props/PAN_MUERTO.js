import * as THREE from "../js/three.module.js";
export default function E06 ({x,y,z}){

var geometryPan = new THREE.SphereGeometry(55,32,32); 
var materialPan = new THREE.MeshStandardMaterial({ 
    color: 0xC97932, roughness: 0.8 });
 var pan = new THREE.Mesh(geometryPan, materialPan); 
 // Deformamos la esfera para que parezca un pan 
 pan.scale.set(1.35,0.65,1.35);
  pan.position.set(0,35,0);
 // scene.add(pan);
 
var geometryHueso = new THREE.CapsuleGeometry(8,55,8,16);
 var materialHueso = new THREE.MeshStandardMaterial({ 
    color: 0xE7A15A, roughness: 0.7
 }); 
    var huesoVertical = new THREE.Mesh( geometryHueso, materialHueso );
     huesoVertical.rotation.z = Math.PI / 2;
      huesoVertical.position.set(0,70,0);
      // scene.add(huesoVertical);

var huesoHorizontal = new THREE.Mesh( geometryHueso, materialHueso );
 huesoHorizontal.rotation.x = Math.PI / 2;
  huesoHorizontal.position.set(0,70,0); 
 // scene.add(huesoHorizontal);   
  
var geometryBola = new THREE.SphereGeometry(10,20,20);
 var materialBola = new THREE.MeshStandardMaterial({ 
    color: 0xE7A15A, roughness: 0.7 }); 
    // Bolita superior 
var bola1 = new THREE.Mesh(geometryBola, materialBola); 
bola1.position.set(0,70,30); 
//scene.add(bola1); 
// Bolita inferior
 var bola2 = new THREE.Mesh(geometryBola, materialBola);
  bola2.position.set(0,71,-30); 
  //scene.add(bola2); 

  // Bolita izquierda 
  var bola3 = new THREE.Mesh(geometryBola, materialBola); 
  bola3.position.set(-30,70,0);
   //scene.add(bola3); 
// Bolita derecha
 var bola4 = new THREE.Mesh(geometryBola, materialBola);
  bola4.position.set(30,70,0); 
  //scene.add(bola4);  

var huesito1 = new THREE.CapsuleGeometry(8,25,8,16);
var Huesito = new THREE.MeshStandardMaterial({ 
    color: 0xE7A15A, roughness: 0.7
 }); 
var huesito1 = new THREE.Mesh( huesito1, Huesito );
      huesito1.position.set(50,60,0);
      huesito1.rotation.z = Math.PI /3;
      // scene.add(huesito1);


var huesito2 = new THREE.CapsuleGeometry(8,25,8,16);       
var Huesito2 = new THREE.MeshStandardMaterial({ 
    color: 0xE7A15A, roughness: 0.7
 }); 
 var huesito2 = new THREE.Mesh( huesito2, Huesito2 );
      huesito2.position.set(2,60,50);
      huesito2.rotation.set(60,80,39);
      // scene.add(huesito2);       

var huesito3 = new THREE.CapsuleGeometry(8,25,8,16);       
var Huesito3 = new THREE.MeshStandardMaterial({ 
    color: 0xE7A15A, roughness: 0.7
 }); 
 var huesito3 = new THREE.Mesh( huesito3, Huesito3 );
      huesito3.position.set(-2,60,-50);
      huesito3.rotation.set(40,80,39);
       //scene.add(huesito3); 

var huesito4 = new THREE.CapsuleGeometry(8,25,8,16);
var Huesito4 = new THREE.MeshStandardMaterial({ 
    color: 0xE7A15A, roughness: 0.7
 }); 
var huesito4 = new THREE.Mesh( huesito4, Huesito4 );
      huesito4.position.set(-50,60,0);
      huesito4.rotation.set(0,0,860);
       //scene.add(huesito4);   

       
//PLATO
var geometry01 = new THREE.CylinderGeometry(100,100,7,60);
var material01 = new THREE.MeshLambertMaterial({
    color:0x4F2202,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,3,0);


var geometry02 = new THREE.TorusGeometry(98,5,50,50);
var material02 = new THREE.MeshLambertMaterial({
    color:0x4F2202,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);

//scene.add(mesh02);

mesh02.position.set(0,4,0);
mesh02.rotation.set(Math.PI/2,0,0);

//AZUCAR

var geometry03 = new THREE.SphereGeometry(2);
var material03 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);

//scene.add(mesh03);
mesh03.position.set(-13,70,15);


var geometry04 = new THREE.SphereGeometry(2);
var material04 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);

//scene.add(mesh04);
mesh04.position.set(13,70,15);

var geometry05 = new THREE.SphereGeometry(2);
var material05 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);

//scene.add(mesh05);
mesh05.position.set(13,70,-15);

var geometry06 = new THREE.SphereGeometry(2);
var material06 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);

//scene.add(mesh06);
mesh06.position.set(-13,70,-15);

var geometry07 = new THREE.SphereGeometry(2);
var material07 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);

//scene.add(mesh07);
mesh07.position.set(-13,68,-30);

var geometry08 = new THREE.SphereGeometry(2);
var material08 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);

//scene.add(mesh08);
mesh08.position.set(13,68,-30);

var geometry09 = new THREE.SphereGeometry(2);
var material09 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);

//scene.add(mesh09);
mesh09.position.set(13,68,30);

var geometry10 = new THREE.SphereGeometry(2);
var material10 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);

//scene.add(mesh10);
mesh10.position.set(-13,68,30);


var geometry11 = new THREE.SphereGeometry(2);
var material11 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry11,material11);

//scene.add(mesh11);
mesh11.position.set(-27,69,15);

var geometry12 = new THREE.SphereGeometry(2);
var material12 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry12,material12);

//scene.add(mesh12);
mesh12.position.set(27,69,15);

var geometry13 = new THREE.SphereGeometry(2);
var material13 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry13,material13);

//scene.add(mesh13);
mesh13.position.set(27,69,-15);

var geometry14 = new THREE.SphereGeometry(2);
var material14 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry14,material14);

//scene.add(mesh14);
mesh14.position.set(-27,69,-15);


var geometry15= new THREE.SphereGeometry(4);
var material15 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(geometry15,material15);

//scene.add(mesh15);
mesh15.position.set(0,80,0);

var PAN = new THREE.Group();
PAN.add(geometryHueso,geometryPan,pan,geometryBola,huesito1,huesito2,huesito3,huesito4,huesoHorizontal,huesoVertical,Huesito,
Huesito2,Huesito3,Huesito4, mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, 
mesh13, mesh14, mesh15);
//scene.add(PAN);       
PAN.position.set(x,y,z)
PAN.scale.set(0.1,0.1,0.1)

return PAN;

}
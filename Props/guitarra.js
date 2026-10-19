import * as THREE from "../js/three.module.js"; 
export default function E03 ({ x, y, z}){

//ukulele
//cuerpo inferior
var geometryukulele = new THREE.CylinderGeometry(4,4,1.2,32,1);
var texturaukulele = new THREE.TextureLoader().load("./assets/madera.jpg");
var materialukulele = new THREE.MeshLambertMaterial({map:texturaukulele,side:THREE.DoubleSide});
var meshukulele = new THREE.Mesh(geometryukulele,materialukulele);
meshukulele.position.set(0,4,0);
meshukulele.rotation.set(Math.PI/2,0,0);
meshukulele.scale.set(1.15,1,1);

//cuerpo superior
var geometryukulele3 = new THREE.CylinderGeometry(3,3,1.2,32,1);
var texturaukulele3 = new THREE.TextureLoader().load("./assets/madera.jpg");
var materialukulele3 = new THREE.MeshLambertMaterial({map:texturaukulele3,side:THREE.DoubleSide});
var meshukulele3 = new THREE.Mesh(geometryukulele3,materialukulele3);
meshukulele3.position.set(0,7.5,0);
meshukulele3.rotation.set(Math.PI/2,0,0);
meshukulele3.scale.set(1.1,1,1);

//mástil
var geometryukulele5 = new THREE.BoxGeometry(1.35,9,0.8);
var materialukulele5 = new THREE.MeshLambertMaterial({color:0x4A2511,side:THREE.DoubleSide});
var meshukulele5 = new THREE.Mesh(geometryukulele5,materialukulele5);
meshukulele5.position.set(0,13,0);

//diapasón
var geometryukulele6 = new THREE.BoxGeometry(1.15,8.5,0.12);
var materialukulele6 = new THREE.MeshLambertMaterial({color:0x30201A,side:THREE.DoubleSide});
var meshukulele6 = new THREE.Mesh(geometryukulele6,materialukulele6);
meshukulele6.position.set(0,13.1,-0.46);

//cabeza
var geometryukulele7 = new THREE.BoxGeometry(2.2,3,0.85);
var materialukulele7 = new THREE.MeshLambertMaterial({color:0x4A2511,side:THREE.DoubleSide});
var meshukulele7 = new THREE.Mesh(geometryukulele7,materialukulele7);
meshukulele7.position.set(0,19,0);

//placa de la cabeza
var geometryukulele8 = new THREE.BoxGeometry(1.8,2.5,0.08);
var materialukulele8 = new THREE.MeshLambertMaterial({color:0x8B4513,side:THREE.DoubleSide});
var meshukulele8 = new THREE.Mesh(geometryukulele8,materialukulele8);
meshukulele8.position.set(0,19,-0.47);

//boca
var geometryukulele9 = new THREE.CylinderGeometry(1.25,1.25,0.12,32,1);
var materialukulele9 = new THREE.MeshLambertMaterial({color:0x171313,side:THREE.DoubleSide});
var meshukulele9 = new THREE.Mesh(geometryukulele9,materialukulele9);
meshukulele9.position.set(0,5.5,-0.68);
meshukulele9.rotation.set(Math.PI/2,0,0);

//roseta exterior
var geometryukulele10 = new THREE.TorusGeometry(1.42,0.12,8,40);
var materialukulele10 = new THREE.MeshLambertMaterial({color:0xF5DEB3,side:THREE.DoubleSide});
var meshukulele10 = new THREE.Mesh(geometryukulele10,materialukulele10);
meshukulele10.position.set(0,5.5,-0.72);

//roseta interior
var geometryukulele11 = new THREE.TorusGeometry(1.28,0.045,6,40);
var materialukulele11 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshukulele11 = new THREE.Mesh(geometryukulele11,materialukulele11);
meshukulele11.position.set(0,5.5,-0.76);

//puente
var geometryukulele12 = new THREE.BoxGeometry(2.8,0.45,0.35);
var materialukulele12 = new THREE.MeshLambertMaterial({color:0x4A2511,side:THREE.DoubleSide});
var meshukulele12 = new THREE.Mesh(geometryukulele12,materialukulele12);
meshukulele12.position.set(0,2.3,-0.78);

//selleta
var geometryukulele13 = new THREE.BoxGeometry(2.3,0.12,0.12);
var materialukulele13 = new THREE.MeshLambertMaterial({color:0xF5DEB3,side:THREE.DoubleSide});
var meshukulele13 = new THREE.Mesh(geometryukulele13,materialukulele13);
meshukulele13.position.set(0,2.58,-0.98);

//cuerda 1
var geometrycuerda = new THREE.CylinderGeometry(0.035,0.035,18,8);
var materialcuerda = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshcuerda = new THREE.Mesh(geometrycuerda,materialcuerda);
meshcuerda.position.set(-0.42,11,-0.78);

//cuerda 2
var geometrycuerda2 = new THREE.CylinderGeometry(0.035,0.035,18,8);
var materialcuerda2 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshcuerda2 = new THREE.Mesh(geometrycuerda2,materialcuerda2);
meshcuerda2.position.set(-0.14,11,-0.78);

//cuerda 3
var geometrycuerda3 = new THREE.CylinderGeometry(0.035,0.035,18,8);
var materialcuerda3 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshcuerda3 = new THREE.Mesh(geometrycuerda3,materialcuerda3);
meshcuerda3.position.set(0.14,11,-0.78);

//cuerda 4
var geometrycuerda4 = new THREE.CylinderGeometry(0.035,0.035,18,8);
var materialcuerda4 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshcuerda4 = new THREE.Mesh(geometrycuerda4,materialcuerda4);
meshcuerda4.position.set(0.42,11,-0.78);

//traste 1
var geometrytraste = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste = new THREE.Mesh(geometrytraste,materialtraste);
meshtraste.position.set(0,9.2,-0.55);

//traste 2
var geometrytraste2 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste2 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste2 = new THREE.Mesh(geometrytraste2,materialtraste2);
meshtraste2.position.set(0,9.85,-0.55);

//traste 3
var geometrytraste3 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste3 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste3 = new THREE.Mesh(geometrytraste3,materialtraste3);
meshtraste3.position.set(0,10.5,-0.55);

//traste 4
var geometrytraste4 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste4 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste4 = new THREE.Mesh(geometrytraste4,materialtraste4);
meshtraste4.position.set(0,11.15,-0.55);

//traste 5
var geometrytraste5 = new THREE.BoxGeometry(1.16,0.07,0.045);
var meshtraste5 = new THREE.Mesh(geometrytraste5,materialtraste5);
var materialtraste5 = new THREE.MeshLambertMaterial({ color: 0xC0C0C0 });
meshtraste5.position.set(0,11.8,-0.55);

//traste 6
var geometrytraste6 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste6 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste6 = new THREE.Mesh(geometrytraste6,materialtraste6);
meshtraste6.position.set(0,12.45,-0.55);

//traste 7
var geometrytraste7 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste7 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste7 = new THREE.Mesh(geometrytraste7,materialtraste7);
meshtraste7.position.set(0,13.1,-0.55);

//traste 8
var geometrytraste8 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste8 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste8 = new THREE.Mesh(geometrytraste8,materialtraste8);
meshtraste8.position.set(0,13.75,-0.55);

//traste 9
var geometrytraste9 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste9 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste9 = new THREE.Mesh(geometrytraste9,materialtraste9);
meshtraste9.position.set(0,14.4,-0.55);

//traste 10
var geometrytraste10 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste10 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste10 = new THREE.Mesh(geometrytraste10,materialtraste10);
meshtraste10.position.set(0,15.05,-0.55);

//traste 11
var geometrytraste11 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste11 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste11 = new THREE.Mesh(geometrytraste11,materialtraste11);
meshtraste11.position.set(0,15.7,-0.55);

//traste 12
var geometrytraste12 = new THREE.BoxGeometry(1.16,0.07,0.045);
var materialtraste12 = new THREE.MeshLambertMaterial({color:0xC0C0C0,side:THREE.DoubleSide});
var meshtraste12 = new THREE.Mesh(geometrytraste12,materialtraste12);
meshtraste12.position.set(0,16.35,-0.55);

//agrupar
var ukulele = new THREE.Group();
ukulele.add(
    meshukulele, meshukulele3, meshukulele5, meshukulele6, 
    meshukulele7, meshukulele8, meshukulele9, meshukulele10, 
    meshukulele11, meshukulele12, meshukulele13, 
    meshcuerda, meshcuerda2, meshcuerda3, meshcuerda4, 
    meshtraste, meshtraste2, meshtraste3, meshtraste4, 
    meshtraste5, meshtraste6, meshtraste7, meshtraste8, 
    meshtraste9, meshtraste10, meshtraste11, meshtraste12
);
//scene.add(ukulele);
ukulele.position.set(x, y, z);


return ukulele;
}
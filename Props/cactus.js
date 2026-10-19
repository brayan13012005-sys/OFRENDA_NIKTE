import * as THREE from "../js/three.module.js"; 
export default function E14 ({ x, y, z}){


//cactus
//cuerpo principal
var geometrycactus = new THREE.CylinderGeometry(2,1.5,5,16,16);
var materialcactus = new THREE.MeshLambertMaterial({color:0x228B22,side:THREE.DoubleSide});
var meshcactus = new THREE.Mesh(geometrycactus,materialcactus);
meshcactus.position.set(0,4.4,0);
meshcactus.scale.set(1,1,1);
//scene.add(meshcactus);

//cara redonda (Corregido: Math.PI * 2)
var geometrytope = new THREE.SphereGeometry(2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
var materialtope = new THREE.MeshLambertMaterial({color:0x228B22,side:THREE.DoubleSide});
var meshtope = new THREE.Mesh(geometrytope, materialtope);
meshtope.position.set(0, 6.9, 0);
//scene.add(meshtope);

//brazo izquierdo
var geometrybrazoizq1 = new THREE.CylinderGeometry(0.9, 0.6, 4.5, 16, 16);
var materialbrazoizq1 = new THREE.MeshLambertMaterial({color:0x228B22, side:THREE.DoubleSide});
var meshbrazoizq1 = new THREE.Mesh(geometrybrazoizq1, materialbrazoizq1);
meshbrazoizq1.position.set(-1.8, 4.5, 0);
meshbrazoizq1.rotation.set(0, 0, Math.PI / 2.8);
//scene.add(meshbrazoizq1);

//vertical brazo izquierdo
var geometrybrazoizq2 = new THREE.CylinderGeometry(0.7, 1, 2.5, 32, 16);
var materialbrazoizq2 = new THREE.MeshLambertMaterial({color:0x228B22, side:THREE.DoubleSide});
var meshbrazoizq2 = new THREE.Mesh(geometrybrazoizq2, materialbrazoizq2);
meshbrazoizq2.position.set(-3.45, 6, 0);
//scene.add(meshbrazoizq2);

//punta brazo izquierdo (Corregido: Math.PI * 2)
var geometrypuntabrazoizq = new THREE.SphereGeometry(0.7, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
var materialpuntabrazoizq = new THREE.MeshLambertMaterial({color:0x228B22, side:THREE.DoubleSide});
var meshpuntabrazoizq = new THREE.Mesh(geometrypuntabrazoizq, materialpuntabrazoizq);
meshpuntabrazoizq.position.set(-3.45, 7.2, 0);
//scene.add(meshpuntabrazoizq);

// base del brazo derecho
var geometrybrazoder1 = new THREE.CylinderGeometry(0.65, 0.55, 3.8, 16, 16);
var materialbrazoder1 = new THREE.MeshLambertMaterial({color:0x228B22, side:THREE.DoubleSide});
var meshbrazoder1 = new THREE.Mesh(geometrybrazoder1, materialbrazoder1);
meshbrazoder1.position.set(1.8, 3.4, 0);
meshbrazoder1.rotation.set(0, 0, -Math.PI / 2.8);
//scene.add(meshbrazoder1);

//vertical brazo derecho
var geometrybrazoder2 = new THREE.CylinderGeometry(0.4, 0.7, 2.2, 16, 16);
var materialbrazoder2 = new THREE.MeshLambertMaterial({color:0x228B22, side:THREE.DoubleSide});
var meshbrazoder2 = new THREE.Mesh(geometrybrazoder2, materialbrazoder2);
meshbrazoder2.position.set(3.3, 4.8, 0);
//scene.add(meshbrazoder2);

// punta brazo derecho (Corregido: Math.PI * 2)
var geometrypuntabrazoder = new THREE.SphereGeometry(0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
var materialpuntabrazoder = new THREE.MeshLambertMaterial({color:0x228B22, side:THREE.DoubleSide});
var meshpuntabrazoder = new THREE.Mesh(geometrypuntabrazoder, materialpuntabrazoder);
meshpuntabrazoder.position.set(3.3, 5.8, 0);
//scene.add(meshpuntabrazoder);

//agrupar
var cactus = new THREE.Group();
cactus.add(meshcactus, meshtope, meshbrazoizq1, meshbrazoizq2, meshpuntabrazoizq, meshbrazoder1, meshbrazoder2, meshpuntabrazoder);
//scene.add(cactus);
cactus.position.set(0, 2, 0);

//maceta
var geometrymaceta = new THREE.CylinderGeometry(2.4, 1.5, 2.0, 32, 1);
var materialmaceta = new THREE.MeshLambertMaterial({color:0x8B433A, side:THREE.DoubleSide});
var meshmaceta = new THREE.Mesh(geometrymaceta, materialmaceta);
meshmaceta.position.set(0,3, 0);
//scene.add(meshmaceta);

//borde superior
var geometryborde = new THREE.TorusGeometry(2.3, .1, 12, 32);
var materialborde = new THREE.MeshLambertMaterial({color:0xD17A52, side:THREE.DoubleSide});
var meshborde = new THREE.Mesh(geometryborde, materialborde);
meshborde.rotation.x = Math.PI / 2; // Acostado horizontalmente
meshborde.position.set(0,4, 0);
//scene.add(meshborde);

//Tierra
var geometrytierra = new THREE.CylinderGeometry(2.2, 1.6, 0.15, 32, 1);
var materialtierra = new THREE.MeshLambertMaterial({color:0x4B2E19, side:THREE.DoubleSide});
var meshtierra = new THREE.Mesh(geometrytierra, materialtierra);
meshtierra.position.set(0,4, 0);
//scene.add(meshtierra);

//espina1
var espina1 = new THREE.SphereGeometry(0.18, 16, 16, 0, Math.PI * 2, 0);
var materialespina = new THREE.MeshLambertMaterial({color: 0xD1BEAB, side: THREE.DoubleSide});
var meshespina1 = new THREE.Mesh(espina1, materialespina);
meshespina1.position.set(0, 6.5, 1.96);
//cactus.add(meshespina1);

//espina2
var meshespina2 = meshespina1.clone();
meshespina2.position.set(0, 5.5, 1.86);
//cactus.add(meshespina2);

//espina 3
var meshespina3 = meshespina1.clone();
meshespina3.position.set(0, 4.5, 1.76);
//cactus.add(meshespina3);

//espina 4
var meshespina4 = meshespina1.clone();
meshespina4.position.set(0, 3.5, 1.66);
//cactus.add(meshespina4);

//espina 5
var meshespina5 = meshespina1.clone();
meshespina5.position.set(0, 2.5, 1.56);
//cactus.add(meshespina5);

//espina 6
var meshespina6 = meshespina1.clone();
meshespina6.position.set(0, 6.5, -1.96);
//cactus.add(meshespina6);

//espina 7
var meshespina7 = meshespina1.clone();
meshespina7.position.set(0, 5.5, -1.86);
//cactus.add(meshespina7);

//espina 8
var meshespina8 = meshespina1.clone();
meshespina8.position.set(0, 4.5, -1.76);
//cactus.add(meshespina8);

//espina 9
var meshespina9 = meshespina1.clone();
meshespina9.position.set(0, 3.5, -1.66);
//cactus.add(meshespina9);

//espina 10
var meshespina10 = meshespina1.clone();
meshespina10.position.set(0, 2.5, -1.56);
//cactus.add(meshespina10);

var meshespina11 = meshespina1.clone();
meshespina11.position.set(0, 7.5, 1.91);
//cactus.add(meshespina11);

//espina 12
var meshespina12 = meshespina1.clone();
meshespina12.position.set(0, 8.5, 1.2);
//cactus.add(meshespina12);

//espina 13
var meshespina13 = meshespina1.clone();
meshespina13.position.set(0, 7.5, -1.91);
//cactus.add(meshespina13);

//espina 14
var meshespina14 = meshespina1.clone();
meshespina14.position.set(0, 8.5, -1.2);
//cactus.add(meshespina14);

//espina 15
var meshespina15 = meshespina1.clone();
meshespina15.position.set(0, 8.9, 0);
//cactus.add(meshespina15);

//grupo espinas
var grupoEspinas1 = new THREE.Group();
grupoEspinas1.add(meshespina1, meshespina2, meshespina3, meshespina4, meshespina5,meshespina6, meshespina7, meshespina8, meshespina9, meshespina10,meshespina11, meshespina12, meshespina13, meshespina14, meshespina15);
//scene.add(grupoEspinas1);
grupoEspinas1.position.set(0,2, 0);

//clonar
var grupoespinas2 = grupoEspinas1.clone();
grupoespinas2.position.set(0, 2, 0);
grupoespinas2.rotation.set(0, Math.PI/2, 0);
//cactus.add(grupoespinas2);

//clonar
var grupoespinas3 = grupoEspinas1.clone();
grupoespinas3.position.set(0, 2, 0);
grupoespinas3.rotation.set(0, Math.PI/4, 0);
//cactus.add(grupoespinas3);

//clonar
var grupoespinas4 = grupoEspinas1.clone();
grupoespinas4.position.set(0, 2, 0);
grupoespinas4.rotation.set(0, 3*Math.PI/4, 0);
//cactus.add(grupoespinas4);

//espina 16
var meshespina16 = meshespina1.clone();
meshespina16.position.set(-3.45, 9.9, 0);
//cactus.add(meshespina16);

//espina 17
var meshespina17 = meshespina1.clone();
meshespina17.position.set(-3.45, 9.0, 0.73);
//cactus.add(meshespina17);

//espina 18
var meshespina18 = meshespina1.clone();
meshespina18.position.set(-3.45, 8.0, 0.85);
//cactus.add(meshespina18);

//espina 19
var meshespina19 = meshespina1.clone();
meshespina19.position.set(-3.45, 9.0, -0.73);
//cactus.add(meshespina19);

//espina 20
var meshespina20 = meshespina1.clone();
meshespina20.position.set(-3.45, 8.0, -0.85);
//cactus.add(meshespina20);

//espina 21
var meshespina21 = meshespina1.clone();
meshespina21.position.set(-3.45, 7.0, -0.93);
//cactus.add(meshespina21);

//espina 22
var meshespina22 = meshespina1.clone();
meshespina22.position.set(0.65, 6.0, 1.58);
//cactus.add(meshespina22);

//espina 23
var meshespina23 = meshespina1.clone();
meshespina23.position.set(1.49, 5.0, 0.62);
//cactus.add(meshespina23);

//espina 24
var meshespina24 = meshespina1.clone();
meshespina24.position.set(-2.21, 6.70, 0.78);
//cactus.add(meshespina24);

//espina 25
var meshespina25 = meshespina1.clone();
meshespina25.position.set(-2.21, 6.70, -0.78);
//cactus.add(meshespina25);

//espina 26
var meshespina26 = meshespina1.clone();
meshespina26.position.set(-2.81, 6.99, -0.83);
//cactus.add(meshespina26);

//espina 27
var meshespina27 = meshespina1.clone();
meshespina27.position.set(3.3, 8.2, 0);
//cactus.add(meshespina27);

//espina 28
var meshespina28 = meshespina1.clone();
meshespina28.position.set(3.3, 7.4, 0.47);
//cactus.add(meshespina28);

//espina 29
var meshespina29 = meshespina1.clone();
meshespina29.position.set(3.3, 7.4, -0.47);
//cactus.add(meshespina29);

//espina 30
var meshespina30 = meshespina1.clone();
meshespina30.position.set(3.3, 6.6, -0.58);
//cactus.add(meshespina30);

//espina 31
var meshespina31 = meshespina1.clone();
meshespina31.position.set(3.3, 6.6, 0.58);
//cactus.add(meshespina31);

//espina 32
var meshespina32 = meshespina1.clone();
meshespina32.position.set(3.3, 5.9, -0.67);
//cactus.add(meshespina32);

//espina 33
var meshespina33 = meshespina1.clone();
meshespina33.position.set(3.3, 5.9, 0.67);
//cactus.add(meshespina33);

//espina 34
var meshespina34 = meshespina1.clone();
meshespina34.position.set(1.8, 5.4, 0.6);
//cactus.add(meshespina34);

//espina 35
var meshespina35 = meshespina1.clone();
meshespina35.position.set(2.49, 5.73, -0.62);
//cactus.add(meshespina35);

//grupo final
var cactusfinal = new THREE.Group();
cactusfinal.add(cactus, meshmaceta, meshborde, meshtierra, grupoEspinas1, grupoespinas2, grupoespinas3, grupoespinas4,meshespina16, meshespina17, meshespina18, meshespina19, meshespina20, meshespina21, meshespina22, meshespina23, meshespina24, meshespina25, meshespina26, meshespina27, meshespina28, meshespina29, meshespina30, meshespina31, meshespina32, meshespina33, meshespina34, meshespina35); 
cactusfinal.position.set(x, y, z);
//scene.add(cactusfinal);

return cactusfinal;

}
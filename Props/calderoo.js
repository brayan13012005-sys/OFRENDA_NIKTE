import * as THREE from "../js/three.module.js"; 
export default function E015 ({ x, y, z}){

//OBJETOS  ✏️✏️✏️✏️  🪶
//base
var base = new THREE.CylinderGeometry(25, 32, 18, 32); 
var material01 = new THREE.MeshPhysicalMaterial({color: 0x4a1c0d, side: THREE.DoubleSide,roughness: 0.1,metalness: 0.0, clearcoat: 1.0,clearcoatRoughness: 0.05 });
var mallaBase = new THREE.Mesh(base, material01);
//scene.add(mallaBase);
mallaBase.position.set(0, 9, 0);

//cuello
var cuello = new THREE.CylinderGeometry(15, 18, 14, 32);
var material02 = new THREE.MeshPhysicalMaterial({color: 0x4a1c0d,side: THREE.DoubleSide,roughness: 0.1,metalness: 0.0,clearcoat: 1.0,clearcoatRoughness: 0.05});
var mallaCuello = new THREE.Mesh(cuello, material02);
//scene.add(mallaCuello);
mallaCuello.position.set(0, 25, 0);

//cuerpo
var cuerpo = new THREE.CylinderGeometry(34, 20, 28, 32);
var material03 = new THREE.MeshPhysicalMaterial({color: 0x823115, side: THREE.DoubleSide,roughness: 0.1,metalness: 0.0,clearcoat: 1.0,clearcoatRoughness: 0.05});
var mallaCuerpo = new THREE.Mesh(cuerpo, material03);
//scene.add(mallaCuerpo);
mallaCuerpo.position.set(0, 43, 0);

//relieve
var relieve = new THREE.CylinderGeometry(35, 35, 8, 32);
var material04 = new THREE.MeshPhysicalMaterial({color: 0xd4af37,side: THREE.DoubleSide,roughness: 0.3,metalness: 1.0 });
var mallarelieve = new THREE.Mesh(relieve, material04);
//scene.add(mallarelieve);
mallarelieve.position.set(0, 61, 0);

// cordon
var cordon = new THREE.TorusGeometry(35, 0.8, 8, 50); 
var material04a = new THREE.MeshPhysicalMaterial({color: 0x0e7490,roughness: 0.1,metalness: 0.0,clearcoat: 1.0,clearcoatRoughness: 0.05});
var mallaCordon = new THREE.Mesh(cordon, material04a);
mallaCordon.rotation.x = Math.PI / 2; 
mallaCordon.position.set(0, 61, 0);
//scene.add(mallaCordon);

//superior (Corregido MeshLambertMaterial)
var GEOMETRIA_CAZOLETA_BASE = new THREE.CylinderGeometry(42, 42, 4, 32); 
var material05 = new THREE.MeshLambertMaterial({color: 0x823115,side: THREE.DoubleSide});
var mallaCazoletaBase = new THREE.Mesh(GEOMETRIA_CAZOLETA_BASE, material05);
//scene.add(mallaCazoletaBase);
mallaCazoletaBase.position.set(0, 66, 0); 

//borde
var borde = new THREE.TorusGeometry(42, 1.5, 8, 60); 
var material05a = new THREE.MeshLambertMaterial({color: 0x823115});
var borde = new THREE.Mesh(borde, material05a);
borde.rotation.set (Math.PI / 2,0,0);
borde.position.set(0, 68, 0);
//scene.add(borde);

//fondo
var fondo = new THREE.CylinderGeometry(34, 34, 2, 32);
var material06 = new THREE.MeshLambertMaterial({ color: 0x111111 });
var fondo = new THREE.Mesh(fondo, material06);
//scene.add(fondo);
fondo.position.set(0, 68, 0);

//fuego
var fuego = new THREE.ConeGeometry(8, 15, 16);
var material07 = new THREE.MeshLambertMaterial({color: 0xf97316,emissive: 0xf97316,emissiveIntensity: 3.0,side: THREE.DoubleSide,transparent: true,opacity: 0.9});
var fuego = new THREE.Mesh(fuego, material07);
//scene.add(fuego);
fuego.position.set(0, 75, 0);

//fuego2
var fuego2 = new THREE.ConeGeometry(16, 30, 16);
var material08 = new THREE.MeshLambertMaterial({color: 0xF50202,emissive: 0xF50202,side: THREE.DoubleSide,transparent: true,opacity: .4});
var fuego2 = new THREE.Mesh(fuego2, material08);
//scene.add(fuego2);
fuego2.position.set(0, 83, 0);

var luzFuego = new THREE.PointLight(0xf97316, 30, 150);
luzFuego.position.set(0, 83, 0);
//scene.add(luzFuego);

//grupo final
var caldero = new THREE.Group();
caldero.add(mallaBase,mallaCuello, mallaCuerpo,mallarelieve,mallaCordon,mallaCazoletaBase,borde,fondo,fuego,fuego2,luzFuego);
caldero.position.set(x, y, z);
//scene.add(caldero);

return caldero;

}
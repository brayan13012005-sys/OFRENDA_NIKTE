import * as THREE from "../js/three.module.js"; 
export default function E10 ({ x, y, z}){

//cuerpo vela
var geometryCuerpo = new THREE.CylinderGeometry(1.5, 1.5, 4.5, 32);
var materialCuerpo = new THREE.MeshLambertMaterial({ color: 0xfdfbf7 });
var meshCuerpo = new THREE.Mesh(geometryCuerpo, materialCuerpo);
meshCuerpo.position.set(0, 2.45, 0);

//vaso vela
var geometryVaso = new THREE.CylinderGeometry(1.9, 1.7, 4.7, 25);
var materialVaso = new THREE.MeshLambertMaterial({ color: 0xDEDEDE, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
var meshVaso = new THREE.Mesh(geometryVaso, materialVaso);
meshVaso.position.set(0, 2.3, 0);

//mecha
var geometryMecha = new THREE.CylinderGeometry(0.06, 0.06, 0.6, 8);
var materialMecha = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
var meshMecha = new THREE.Mesh(geometryMecha, materialMecha);
meshMecha.position.set(0, 4.85, 0);

//flama exterior
var geometryFlamaExterior = new THREE.SphereGeometry(0.5, 16, 16);
geometryFlamaExterior.scale(0.6, 1.6, 0.6);
var materialFlamaExterior = new THREE.MeshLambertMaterial({ color: 0xFFCB00, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
var meshFlamaExterior = new THREE.Mesh(geometryFlamaExterior, materialFlamaExterior);
meshFlamaExterior.position.set(0, 5.9, 0);

//flama interior
var geometryFlamaInterior = new THREE.SphereGeometry(0.3, 16, 16);
geometryFlamaInterior.scale(0.5, 1.3, 0.5);
var materialFlamaInterior = new THREE.MeshLambertMaterial({ color: 0xE81410, transparent: true, opacity: 0.9 });
var meshFlamaInterior = new THREE.Mesh(geometryFlamaInterior, materialFlamaInterior);
meshFlamaInterior.position.set(0, 5.5, 0);
        
//agrupar
var vela = new THREE.Group();
vela.add(meshCuerpo, meshVaso, meshMecha, meshFlamaExterior, meshFlamaInterior);
//scene.add(vela);
vela.position.set(x, y, z);

return vela;
}
import * as THREE from "../js/three.module.js";
export default function E12 ({x,y,z}){

// CAJETILLA

var CAJETILLA = new THREE.BoxGeometry(35,50,12);

var matcajetilla = new THREE.MeshStandardMaterial({ 

    color: 0xF2F2F2,

    roughness: 0.8

    });

var cajetilla = new THREE.Mesh(CAJETILLA,matcajetilla);

cajetilla.position.set(0,25,0);

//scene.add(cajetilla);


// PARTE ROJA DE LA CAJETILLA

var PARTE_ROJA = new THREE.BoxGeometry(38,14,13);

var matrojo = new THREE.MeshStandardMaterial({ 

    color: 0xB82020,

    roughness: 0.8

    });

var parteRoja = new THREE.Mesh(PARTE_ROJA,matrojo);

parteRoja.position.set(0,44,0);

//scene.add(parteRoja);


// PARTE DORADA

var PARTE_DORADA = new THREE.BoxGeometry(25,5,13);

var matdorado = new THREE.MeshStandardMaterial({ 

    color: 0xD6A52A,

    roughness: 0.8

    });

var parteDorada = new THREE.Mesh(PARTE_DORADA,matdorado);

parteDorada.position.set(0,34,0);

//scene.add(parteDorada);


// CIGARRO 1

var CIGARRO1 = new THREE.CylinderGeometry(3,3,35,30);

var matcigarro1 = new THREE.MeshStandardMaterial({ 

    color: 0xF5E6C8,

    roughness: 0.8

    });

var cigarro1 = new THREE.Mesh(CIGARRO1,matcigarro1);

cigarro1.position.set(-10,68,0);

//scene.add(cigarro1);


// FILTRO DEL CIGARRO 1

var FILTRO1 = new THREE.CylinderGeometry(3.2,3.2,7,30);

var matfiltro1 = new THREE.MeshStandardMaterial({ 

    color: 0xD6A52A,

    roughness: 0.8

    });

var filtro1 = new THREE.Mesh(FILTRO1,matfiltro1);

filtro1.position.set(-10,87,0);

//scene.add(filtro1);


// CIGARRO 2

var CIGARRO2 = new THREE.CylinderGeometry(3,3,35,30);

var matcigarro2 = new THREE.MeshStandardMaterial({ 

    color: 0xF5E6C8,

    roughness: 0.8

    });

var cigarro2 = new THREE.Mesh(CIGARRO2,matcigarro2);

cigarro2.position.set(0,68,0);

//scene.add(cigarro2);


// FILTRO DEL CIGARRO 2

var FILTRO2 = new THREE.CylinderGeometry(3.2,3.2,7,30);

var matfiltro2 = new THREE.MeshStandardMaterial({ 

    color: 0xD6A52A,

    roughness: 0.8

    });

var filtro2 = new THREE.Mesh(FILTRO2,matfiltro2);

filtro2.position.set(0,87,0);

//scene.add(filtro2);


// CIGARRO 3

var CIGARRO3 = new THREE.CylinderGeometry(3,3,35,30);

var matcigarro3 = new THREE.MeshStandardMaterial({ 

    color: 0xF5E6C8,

    roughness: 0.8

    });

var cigarro3 = new THREE.Mesh(CIGARRO3,matcigarro3);

cigarro3.position.set(10,68,0);

//scene.add(cigarro3);


// FILTRO DEL CIGARRO 3

var FILTRO3 = new THREE.CylinderGeometry(3.2,3.2,7,30);

var matfiltro3 = new THREE.MeshStandardMaterial({ 

    color: 0xD6A52A,

    roughness: 0.8

    });

var filtro3 = new THREE.Mesh(FILTRO3,matfiltro3);

filtro3.position.set(10,87,0);

//scene.add(filtro3);


// CIGARRO 4

var CIGARRO4 = new THREE.CylinderGeometry(3,3,35,30);

var matcigarro4 = new THREE.MeshStandardMaterial({ 

    color: 0xF5E6C8,

    roughness: 0.8

    });

var cigarro4 = new THREE.Mesh(CIGARRO4,matcigarro4);

cigarro4.position.set(-5,68,4);

//scene.add(cigarro4);


// FILTRO DEL CIGARRO 4

var FILTRO4 = new THREE.CylinderGeometry(3.2,3.2,7,30);

var matfiltro4 = new THREE.MeshStandardMaterial({ 

    color: 0xD6A52A,

    roughness: 0.8

    });

var filtro4 = new THREE.Mesh(FILTRO4,matfiltro4);

filtro4.position.set(-5,87,4);

//scene.add(filtro4);


// CIGARRO 5

var CIGARRO5 = new THREE.CylinderGeometry(3,3,35,30);

var matcigarro5 = new THREE.MeshStandardMaterial({ 

    color: 0xF5E6C8,

    roughness: 0.8

    });

var cigarro5 = new THREE.Mesh(CIGARRO5,matcigarro5);

cigarro5.position.set(5,68,4);

//scene.add(cigarro5);


// FILTRO DEL CIGARRO 5

var FILTRO5 = new THREE.CylinderGeometry(3.2,3.2,7,30);

var matfiltro5 = new THREE.MeshStandardMaterial({ 

    color: 0xD6A52A,

    roughness: 0.8

    });

var filtro5 = new THREE.Mesh(FILTRO5,matfiltro5);

filtro5.position.set(5,87,4);

//scene.add(filtro5);


// CENIZA DEL CIGARRO 1

var CENIZA1 = new THREE.CylinderGeometry(3.1,3.1,3,30);

var matceniza1 = new THREE.MeshStandardMaterial({ 

    color: 0x8A8A8A,

    roughness: 0.8

    });

var ceniza1 = new THREE.Mesh(CENIZA1,matceniza1);

ceniza1.position.set(-10,87,0);

//scene.add(ceniza1);

var CIGARROS = new THREE.Group();
CIGARROS.add(cajetilla, parteRoja, parteDorada, cigarro1, filtro1, cigarro2,
filtro2, cigarro3, filtro3, cigarro4, filtro4, cigarro5, filtro5, ceniza1);
//scene.add(CIGARROS);
CIGARROS.position.set(x,y,z);
return CIGARROS;


CIGARROS.scale.set(0.2,0.2,0.2);

}
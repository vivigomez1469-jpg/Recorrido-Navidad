import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

//ARBOLITO
//TRONCO 
var tronco = new THREE.CylinderGeometry(4, 4, 20, 30);
var material0 = new THREE.MeshLambertMaterial({
    color: 0x8B4513, side: THREE.DoubleSide});
var mesh0 = new THREE.Mesh(tronco, material0);
mesh0.castShadow = true;
//scene.add(mesh0);
mesh0.position.set(-60, 12, -60); 

// Cilindros del árbol 
var cilindro1 = new THREE.CylinderGeometry(10, 20, 20, 32);
var material1 = new THREE.MeshLambertMaterial({ color: 0x0b610b });
var mesh1 = new THREE.Mesh(cilindro1, material1);
mesh1.castShadow = true;
mesh1.position.set(-60, 23, -60);
//scene.add(mesh1);

var cilindro2 = new THREE.CylinderGeometry(7, 15, 18, 32);
var material2 = new THREE.MeshLambertMaterial({ color: 0x0b610b });
var mesh2 = new THREE.Mesh(cilindro2, material2);
mesh2.castShadow = true;
mesh2.position.set(-60, 38, -60);
//scene.add(mesh2);

var cilindro3 = new THREE.CylinderGeometry(5, 12, 16, 32);
var material3 = new THREE.MeshLambertMaterial({ color: 0x0b610b });
var mesh3 = new THREE.Mesh(cilindro3, material3);
mesh3.castShadow = true;
mesh3.position.set(-60, 52, -60);
//scene.add(mesh3);

var cilindro4 = new THREE.CylinderGeometry(1, 8, 14, 32);
var material4 = new THREE.MeshLambertMaterial({ color: 0x0b610b });
var mesh4 = new THREE.Mesh(cilindro4, material4);
mesh4.castShadow = true;
mesh4.position.set(-60, 66, -60);
//scene.add(mesh4);

var esfera = new THREE.SphereGeometry(2, 30, 30);
var material5 = new THREE.MeshLambertMaterial({
    color: 0xEBFFFF
, side: THREE.DoubleSide
});

// Nivel 1
var mesh5 = new THREE.Mesh(esfera, material5);
//scene.add(mesh5);
mesh5.position.set(-60, 19, -44);

var mesh6 = new THREE.Mesh(esfera, material5);
//scene.add(mesh6);
mesh6.position.set(-50, 21, -48);

var mesh7 = new THREE.Mesh(esfera, material5);
//scene.add(mesh7);
mesh7.position.set(-70, 21, -48);

// Nivel 2
var mesh8 = new THREE.Mesh(esfera, material5);
//scene.add(mesh8);
mesh8.position.set(-60, 37, -49);

var mesh9 = new THREE.Mesh(esfera, material5);
//scene.add(mesh9);
mesh9.position.set(-60, 23, -74);

// Nivel 3
var mesh10 = new THREE.Mesh(esfera, material5);
//scene.add(mesh10);
mesh10.position.set(-50, 40, -58);

var mesh11 = new THREE.Mesh(esfera, material5);
//scene.add(mesh11);
mesh11.position.set(-68, 40, -54);

var mesh12 = new THREE.Mesh(esfera, material5);
//scene.add(mesh12);
mesh12.position.set(-73, 32, -62);

var mesh13 = new THREE.Mesh(esfera, material5);
//scene.add(mesh13);
mesh13.position.set(-60, 50, -51);

// Nivel 4
var mesh14 = new THREE.Mesh(esfera, material5);
//scene.add(mesh14);
mesh14.position.set(-53, 54, -60);

var mesh15 = new THREE.Mesh(esfera, material5);
//scene.add(mesh15);
mesh15.position.set(-67, 54, -60);

var mesh16 = new THREE.Mesh(esfera, material5);
//scene.add(mesh16);
mesh16.position.set(-60, 54, -67);

var mesh17 = new THREE.Mesh(esfera, material5);
//scene.add(mesh17);
mesh17.position.set(-60, 40, -70);

var mesh18 = new THREE.Mesh(esfera, material5);
//scene.add(mesh18);
mesh18.position.set(-55, 63, -63);

var mesh19= new THREE.Mesh(esfera, material5);
//scene.add(mesh19);
mesh19.position.set(-44, 20, -63);

var mesh20= new THREE.Mesh(esfera, material5);
//scene.add(mesh20);
mesh20.position.set(-64, 64, -62);

var mesh20= new THREE.Mesh(esfera, material5);
//scene.add(mesh20);
mesh20.position.set(-60, 64, -55);

var cilindro = new THREE.CylinderGeometry(6.4, 8.5, 4, 32);
var material21 = new THREE.MeshLambertMaterial({ color: 0xEBFFFF
});
var mesh21 = new THREE.Mesh(cilindro, material21);
mesh21.castShadow = true;
mesh21.position.set(-60, 61.4, -60);
//scene.add(mesh21);

var cilindro = new THREE.CylinderGeometry(13.3, 16, 5, 32);
var material22 = new THREE.MeshLambertMaterial({ color: 0xEBFFFF
});
var mesh22 = new THREE.Mesh(cilindro, material22);
mesh22.castShadow = true;
mesh22.position.set(-60, 31.9, -60);
//scene.add(mesh22);

var cilindro = new THREE.CylinderGeometry(11, 13, 3.2, 32);
var material23 = new THREE.MeshLambertMaterial({ color: 0xEBFFFF
});
var mesh23 = new THREE.Mesh(cilindro, material23);
mesh23.castShadow = true;
mesh23.position.set(-60, 46, -60);
//scene.add(mesh23);

var cilindro = new THREE.CylinderGeometry(18.6, 22, 5, 32);
var material24 = new THREE.MeshLambertMaterial({ color: 0xEBFFFF

});
var mesh24 = new THREE.Mesh(cilindro, material24);
mesh24.castShadow = true;
mesh24.position.set(-60, 15, -60);
//scene.add(mesh24);


//NIEVE


var arbol = new THREE.Group();
        arbol.add(mesh0,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24);
        arbol.position.set(x,y,z);
        return arbol;
}

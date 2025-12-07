import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){


// Superficie
var superficie = new THREE.BoxGeometry(50, 2.5, 30, 1, 1, 1);
var material1 = new THREE.MeshLambertMaterial({
    color: 0xA0522D,
    side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(superficie, material1);
//scene.add(mesh1);
mesh1.position.set(0, 15, 0);

// Pata delantera izquierda
var pata1 = new THREE.BoxGeometry(2, 15, 2, 1, 1, 1);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(pata1, material2);
//scene.add(mesh2);
mesh2.position.set(-20, 7.5, 13);

// Pata delantera derecha
var pata2 = new THREE.BoxGeometry(2, 15, 2, 1, 1, 1);
var material3 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(pata2, material3);
//scene.add(mesh3);
mesh3.position.set(20, 7.5, 13);

// Pata trasera izquierda
var pata3 = new THREE.BoxGeometry(2, 15, 2, 1, 1, 1);
var material4 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(pata3, material4);
//scene.add(mesh4);
mesh4.position.set(-20, 7.5, -13);

// Pata trasera derecha
var pata4 = new THREE.BoxGeometry(2, 15, 2, 1, 1, 1);
var material5 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh5 = new THREE.Mesh(pata4, material5);
//scene.add(mesh5);
mesh5.position.set(20, 7.5, -13);

var mantel = new THREE.PlaneGeometry(50, 15);
var texture1 = new THREE.TextureLoader().load("./image/mantel.png");
var material6 = new THREE.MeshLambertMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    transparent:true
});
var mesh6 = new THREE.Mesh(mantel, material6);
mesh6.castShadow = true;
//scene.add(mesh6);
mesh6.position.set(0, 16.5, 0);
mesh6.rotation.x = 1.57;

var mesa = new THREE.Group();
    mesa.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6);
        mesa.position.set(x,y,z);
        return mesa;
}


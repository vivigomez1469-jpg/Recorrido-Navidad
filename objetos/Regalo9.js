import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){


//regalo 

var Caja = new THREE.BoxGeometry(15, 15, 17, 15, 15, 15);
var material15 = new THREE.MeshLambertMaterial({
    color: 0xE895D6, side: THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(Caja, material15);
//scene.add(mesh15);
mesh15.position.set(0, 10, 50);

var Caja = new THREE.BoxGeometry(17, 5, 17.2, 5, 5, 5);
var material16 = new THREE.MeshLambertMaterial({
    color: 0x912379, side: THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(Caja, material16);
//scene.add(mesh16);
mesh16.position.set(0, 17, 50);


var Caja = new THREE.BoxGeometry(2,1,16.5,4,2,2);
var material17 = new THREE.MeshLambertMaterial({
    color: 0xDE9D52
, side: THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(Caja, material17);
//scene.add(mesh17);
mesh17.position.set(0.3, 19.3, 50);

var Caja = new THREE.BoxGeometry(16,1,1.5,4,2,2);
var mesh18 = new THREE.Mesh(Caja, material17);
//scene.add(mesh18);
mesh18.position.set(0.3, 19.3, 50);

var Caja = new THREE.BoxGeometry(1.5,16.9,1.5,4,2,2);
var mesh19 = new THREE.Mesh(Caja, material17);
//scene.add(mesh19);
mesh19.position.set(0.3, 11.2, 58);



var Caja = new THREE.BoxGeometry(1.5,16.9,1.5,4,2,2);
var mesh20 = new THREE.Mesh(Caja, material17);
//scene.add(mesh20);
mesh20.position.set(0.3, 11.2, 42);



var Caja = new THREE.BoxGeometry(2,17,1.6,4,2,2);
var mesh21 = new THREE.Mesh(Caja, material17);
//scene.add(mesh21);
mesh21.position.set(-7.7, 11.2, 50);


var Caja = new THREE.BoxGeometry(2,17,1.6,4,2,2);
var mesh22 = new THREE.Mesh(Caja, material17);
//scene.add(mesh22);
mesh22.position.set(7.7, 11.2, 50);


var esfera= new THREE.SphereGeometry(2, 30, 30);
var mesh23 = new THREE.Mesh(esfera, material17);
mesh23.castShadow = true;
//scene.add(mesh23);
mesh23.position.set(-1.7, 20, 50);

var esfera= new THREE.SphereGeometry(1, 30, 30);
var mesh24 = new THREE.Mesh(esfera, material17);
mesh24.castShadow = true;
//scene.add(mesh24);
mesh24.position.set(1, 20, 50);



var esfera= new THREE.SphereGeometry(2, 30, 30);
var mesh25 = new THREE.Mesh(esfera, material17);
mesh25.castShadow = true;
//scene.add(mesh25);
mesh25.position.set(3, 20, 50);


var reg9 = new THREE.Group();
        reg9.add(mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25);
        reg9.position.set(x,y,z);
        return reg9;
}
import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

// BASE DE LA CORONA
var corona1 = new THREE.TorusGeometry(10, 2.5, 16, 100);
var material1 = new THREE.MeshLambertMaterial({
    color: 0x0b6623,
    side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(corona1, material1);
//scene.add(mesh1);
mesh1.scale.set(2, 2, 2);
mesh1.position.set(0, 50, 0);

// FOLLAJE 
var esfera1 = new THREE.SphereGeometry(10, 16, 16);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x228b22
});
var mesh2 = new THREE.Mesh(esfera1, material2);
//scene.add(mesh2);
mesh2.position.set(23, 50, 0);

var esfera2 = new THREE.SphereGeometry(10, 16, 16);
var mesh3 = new THREE.Mesh(esfera2, material2);
//scene.add(mesh3);
mesh3.position.set(-23, 50, 0);

var esfera3 = new THREE.SphereGeometry(10, 16, 16);
var mesh4 = new THREE.Mesh(esfera3, material2);
//scene.add(mesh4);
mesh4.position.set(0, 70, 0);

var esfera4 = new THREE.SphereGeometry(10, 16, 16);
var mesh5 = new THREE.Mesh(esfera4, material2);
//scene.add(mesh5);
mesh5.position.set(0, 30, 0);

var esfera5 = new THREE.SphereGeometry(10, 16, 16);
var mesh6 = new THREE.Mesh(esfera5, material1);
//scene.add(mesh6);
mesh6.position.set(15, 64, 0);

var esfera6 = new THREE.SphereGeometry(10, 16, 16);
var mesh7 = new THREE.Mesh(esfera6, material1);
//scene.add(mesh7);
mesh7.position.set(-15, 35, 0);

var esfera7 = new THREE.SphereGeometry(10, 16, 16);
var mesh8 = new THREE.Mesh(esfera7, material1);
//scene.add(mesh8);
mesh8.position.set(-17, 64, 0);

var esfera8 = new THREE.SphereGeometry(10, 16, 16);
var mesh9 = new THREE.Mesh(esfera8, material1);
//scene.add(mesh9);
mesh9.position.set(15, 36, 0);

// ESFERAS 
var esfera9 = new THREE.SphereGeometry(3, 16, 16);
var material3 = new THREE.MeshLambertMaterial({
    color: 0xff0000 
});
var mesh10 = new THREE.Mesh(esfera9, material3);
//scene.add(mesh10);
mesh10.position.set(0, 70, 10);

var esfera10 = new THREE.SphereGeometry(3, 16, 16);
var material4 = new THREE.MeshLambertMaterial({
    color: 0xffff00 
});
var mesh11 = new THREE.Mesh(esfera10, material4);
//scene.add(mesh11);
mesh11.position.set(20, 50, 10);

var esfera11 = new THREE.SphereGeometry(3, 16, 16);
var material5 = new THREE.MeshLambertMaterial({
    color: 0x0000ff 
});
var mesh12 = new THREE.Mesh(esfera11, material5);
//scene.add(mesh12);
mesh12.position.set(-20, 50, 10);

var esfera12 = new THREE.SphereGeometry(3, 16, 16);
var material6 = new THREE.MeshLambertMaterial({
    color: 0xffa500 
});
var mesh13 = new THREE.Mesh(esfera12, material6);
//scene.add(mesh13);
mesh13.position.set(0, 30, 10);

// MOÑO 
var moñoCentro = new THREE.BoxGeometry(10, 8, 2);
var material7 = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
var mesh14 = new THREE.Mesh(moñoCentro, material7);
//scene.add(mesh14);
mesh14.position.set(0, 70, 10);

var lazo1 = new THREE.BoxGeometry(12, 5, 2);
var mesh15 = new THREE.Mesh(lazo1, material7);
//scene.add(mesh15);
mesh15.position.set(-9, 69, 10);
mesh15.rotation.z = 0.3;

var lazo2 = new THREE.BoxGeometry(12, 5, 2);
var mesh16 = new THREE.Mesh(lazo2, material7);
//scene.add(mesh16);
mesh16.position.set(9, 69, 10);
mesh16.rotation.z = -0.3;

// CINTAS
var cinta1 = new THREE.BoxGeometry(4, 15, 2);
var mesh17 = new THREE.Mesh(cinta1, material7);
//scene.add(mesh17);
mesh17.position.set(3, 59, 10);
mesh17.rotation.z = 0.1;

var cinta2 = new THREE.BoxGeometry(4, 15, 2);
var mesh18 = new THREE.Mesh(cinta2, material7);
//scene.add(mesh18);
mesh18.position.set(-3, 59, 10);
mesh18.rotation.z = -0.1;



var corona = new THREE.Group();
        corona.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15,mesh16,mesh17,mesh18,);
        corona.position.set(x,y,z);
        return corona;
}


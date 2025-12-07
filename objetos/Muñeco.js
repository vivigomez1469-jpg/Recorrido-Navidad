import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){
//cuerpo
var esfera= new THREE.SphereGeometry(11, 30, 30);
var material2 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh2 = new THREE.Mesh(esfera, material2);
mesh2.castShadow = true;
//scene.add(mesh2);
mesh2.position.set(0, 9.9, 0);

//panza
var esfera= new THREE.SphereGeometry(7.5, 30, 30);
var material3 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh3 = new THREE.Mesh(esfera, material3);
mesh3.castShadow = true;
//scene.add(mesh3);
mesh3.position.set(0, 20.1, 0);
 

 
//cabeza 
var esfera= new THREE.SphereGeometry(5.5, 30, 30);
var material4 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide});
var mesh4 = new THREE.Mesh(esfera, material4);
mesh4.castShadow = true;
//scene.add(mesh4);
mesh4.position.set(0, 30, 0);

//ojo1
var esfera= new THREE.SphereGeometry(1, 30, 30);
var material5 = new THREE.MeshLambertMaterial({
    color: 0x0a0a0a, side: THREE.DoubleSide});
var mesh5 = new THREE.Mesh(esfera, material5);
mesh5.castShadow = true;
//scene.add(mesh5);
mesh5.position.set(-1.7, 30, 5.5);


//ojo2
var esfera= new THREE.SphereGeometry(1, 30, 30);
var material6 = new THREE.MeshLambertMaterial({
    color: 0x0a0a0a, side: THREE.DoubleSide});
var mesh6 = new THREE.Mesh(esfera, material6);
mesh6.castShadow = true;
//scene.add(mesh6);
mesh6.position.set(2.7, 30, 5.5);


// Nariz
var cono = new THREE.ConeGeometry(1, 5, 30, 30, 30, 0, 6.28);
var material7= new THREE.MeshLambertMaterial({
    color: 0xeb5109, side: THREE.DoubleSide
});
var mesh7 = new THREE.Mesh(cono, material7);
//scene.add(mesh7);
mesh7.position.set(0.5, 30, 6);
mesh7.rotation.set(-1.5,9.4,22);

// brazo1
var cilindro = new THREE.CylinderGeometry(0.7, 0.7, 9, 30, 30, false, 0, 6.28);
var material8= new THREE.MeshLambertMaterial({
    color: 0x782902, side: THREE.DoubleSide
});
var mesh8 = new THREE.Mesh(cilindro, material8);
//scene.add(mesh8);
mesh8.position.set(11, 20, 2);
mesh8.rotation.set(6,15.6,11.3);

// brazo2
var cilindro = new THREE.CylinderGeometry(0.7, 0.7, 9, 30, 30, false, 0, 6.28);
var material9= new THREE.MeshLambertMaterial({
    color: 0x782902, side: THREE.DoubleSide
});
var mesh9 = new THREE.Mesh(cilindro, material9);
//scene.add(mesh9);
mesh9.position.set(-11, 20, 2);
mesh9.rotation.set(9,15.6,11.3);


//bufanda
var torus = new THREE.TorusGeometry(4.6, 1, 30, 30, 6.28);
var material10 = new THREE.MeshLambertMaterial({
    color: 0x660508, side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(torus, material10);
//scene.add(mesh10);
mesh10.position.set(0, 26, 0);
mesh10.rotation.set(14.2,15.7,20); 



//sombrero 

var torus = new THREE.TorusGeometry(4.6, 1, 30, 30, 6.28);
var material11 = new THREE.MeshLambertMaterial({
    color: 0x000000, side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(torus, material11);
//scene.add(mesh11);
mesh11.position.set(0, 34, 0);
mesh11.rotation.set(14.2,15.7,20); 


var cilindro = new THREE.CylinderGeometry(4,4, 5, 30, 30, false, 0, 6.28);
var material12 = new THREE.MeshLambertMaterial({
    color: 0x000000, side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(cilindro, material12);
//scene.add(mesh12);
mesh12.position.set(0, 37, 0);

//botones 

var esfera= new THREE.SphereGeometry(1, 30, 30);
var material13 = new THREE.MeshLambertMaterial({
    color: 0x0a0a0a, side: THREE.DoubleSide});
var mesh13 = new THREE.Mesh(esfera, material13);
mesh13.castShadow = true;
//scene.add(mesh13);
mesh13.position.set(0, 23, 6.4);


var esfera= new THREE.SphereGeometry(1, 30, 30);
var material14 = new THREE.MeshLambertMaterial({
    color: 0x0a0a0a, side: THREE.DoubleSide});
var mesh14 = new THREE.Mesh(esfera, material14);
mesh14.castShadow = true;
//scene.add(mesh14);
mesh14.position.set(0, 20, 7);

var muñe = new THREE.Group();
    muñe.add(mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14);
        muñe.position.set(x,y,z);
        return muñe;
}

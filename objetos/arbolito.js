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


//esferas
var esfera1 = new THREE.SphereGeometry(1.5, 20, 20);
var material5 = new THREE.MeshLambertMaterial({
    color: 0xff0000, side: THREE.DoubleSide});
var mesh5 = new THREE.Mesh(esfera1, material5);
mesh5.castShadow = true;
//scene.add(mesh5);
mesh5.position.set(-74, 25, -60); 

var esfera2 = new THREE.SphereGeometry(1.5, 20, 20);
var material6 = new THREE.MeshLambertMaterial({
    color: 0xffff00, side: THREE.DoubleSide});
var mesh6 = new THREE.Mesh(esfera2, material6);
mesh6.castShadow = true;
//scene.add(mesh6);
mesh6.position.set(-46, 25, -60);

var esfera3 = new THREE.SphereGeometry(1.5, 20, 20);
var material7 = new THREE.MeshLambertMaterial({
    color: 0x0000ff, side: THREE.DoubleSide});
var mesh7 = new THREE.Mesh(esfera3, material7);
mesh7.castShadow = true;
//scene.add(mesh7);
mesh7.position.set(-60, 35, -73);

var esfera4 = new THREE.SphereGeometry(1.5, 20, 20);
var material8 = new THREE.MeshLambertMaterial({
    color: 0xff00ff, side: THREE.DoubleSide});
var mesh8 = new THREE.Mesh(esfera4, material8);
mesh8.castShadow = true;
//scene.add(mesh8);
mesh8.position.set(-60, 40, -50);

var esfera5 = new THREE.SphereGeometry(1.5, 20, 20);
var material9 = new THREE.MeshLambertMaterial({
    color: 0x00ffff, side: THREE.DoubleSide});
var mesh9 = new THREE.Mesh(esfera5, material9);
mesh9.castShadow = true;
//scene.add(mesh9);
mesh9.position.set(-60, 20, -43);

var esfera6 = new THREE.SphereGeometry(1.5, 20, 20);
var material10 = new THREE.MeshLambertMaterial({
    color: 0xffa500, side: THREE.DoubleSide});
var mesh10 = new THREE.Mesh(esfera6, material10);
mesh10.castShadow = true;
//scene.add(mesh10);
mesh10.position.set(-48, 35, -57);

var esfera7 = new THREE.SphereGeometry(1.5, 20, 20);
var material11 = new THREE.MeshLambertMaterial({
    color: 0xffffff, side: THREE.DoubleSide});
var mesh11 = new THREE.Mesh(esfera7, material11);
mesh11.castShadow = true;
//scene.add(mesh11);
mesh11.position.set(-65, 54, -54);

var esfera8 = new THREE.SphereGeometry(1.5, 20, 20);
var material12 = new THREE.MeshLambertMaterial({
    color: 0xff69b4, side: THREE.DoubleSide});
var mesh12 = new THREE.Mesh(esfera8, material12);
mesh12.castShadow = true;
//scene.add(mesh12);
mesh12.position.set(-52, 54, -60);

var esfera9 = new THREE.SphereGeometry(1.5, 20, 20);
var material13 = new THREE.MeshLambertMaterial({
    color: 0x7fffd4, side: THREE.DoubleSide});
var mesh13 = new THREE.Mesh(esfera9, material13);
mesh13.castShadow = true;
//scene.add(mesh13);
mesh13.position.set(-65, 63, -63);

var esfera10 = new THREE.SphereGeometry(1.5, 20, 20);
var material14 = new THREE.MeshLambertMaterial({
    color: 0xffd700, side: THREE.DoubleSide});
var mesh14 = new THREE.Mesh(esfera10, material14);
mesh14.castShadow = true;
//scene.add(mesh14);
mesh14.position.set(-56, 63, -56);

var esfera11 = new THREE.SphereGeometry(2, 20, 20);
var material15 = new THREE.MeshLambertMaterial({
    color: 0xffff33, side: THREE.DoubleSide});
var mesh15 = new THREE.Mesh(esfera11, material15);
mesh15.castShadow = true;
//scene.add(mesh15);
mesh15.position.set(-60, 74, -60);

var arbolito = new THREE.Group();
        arbolito.add(mesh0,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, );
        arbolito.position.set(x,y,z);
        return arbolito;
}

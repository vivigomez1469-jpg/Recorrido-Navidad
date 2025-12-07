import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

//Fabrica
var Caja = new THREE.BoxGeometry(100, 10, 25, 5, 5, 5);
var material2 = new THREE.MeshBasicMaterial({
    color: 0xf0ad26, side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(Caja, material2);
//scene.add(mesh2);
mesh2.position.set(0, 17, -15);

var Caja = new THREE.BoxGeometry(20, 20, 24, 5, 5, 5);
var material3 = new THREE.MeshBasicMaterial({
    color: 0xf0ad26, side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(Caja, material3);
//scene.add(mesh3);
mesh3.position.set(0, 29, -15);

var Caja = new THREE.BoxGeometry(80, 20, 24, 5, 5, 5);
var material4 = new THREE.MeshBasicMaterial({
    color: 0x39393b, side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(Caja, material4);
//scene.add(mesh4);
mesh4.position.set(0, 10, -15);

var Caja = new THREE.BoxGeometry(2, 20, 24, 5, 5, 5);
var material5 = new THREE.MeshBasicMaterial({
    color: 0x996703, side: THREE.DoubleSide
});
var mesh5 = new THREE.Mesh(Caja, material5);
//scene.add(mesh5);
mesh5.position.set(-11, 29, -15);

var Caja = new THREE.BoxGeometry(2, 20, 24, 5, 5, 5);
var material6 = new THREE.MeshBasicMaterial({
    color: 0x996703, side: THREE.DoubleSide
});
var mesh6 = new THREE.Mesh(Caja, material6);
//scene.add(mesh6);
mesh6.position.set(11, 29, -15);

var Caja = new THREE.BoxGeometry(2, 16, 20, 5, 5, 5);
var material7 = new THREE.MeshBasicMaterial({
    color: 0x050505, side: THREE.DoubleSide
});
var mesh7 = new THREE.Mesh(Caja, material7);
//scene.add(mesh7);
mesh7.position.set(12, 30, -15);

var Caja = new THREE.BoxGeometry(2, 16, 20, 5, 5, 5);
var material8 = new THREE.MeshBasicMaterial({
    color: 0x050505, side: THREE.DoubleSide
});
var mesh8 = new THREE.Mesh(Caja, material8);
//scene.add(mesh8);
mesh8.position.set(-12, 30, -15);

var Caja = new THREE.BoxGeometry(92, 0.7, 20, 5, 5, 5);
var material9 = new THREE.MeshBasicMaterial({
    color: 0x5c5c5c, side: THREE.DoubleSide
});
var mesh9 = new THREE.Mesh(Caja, material9);
//scene.add(mesh9);
mesh9.position.set(0, 22, -15);

var Caja = new THREE.BoxGeometry(92, 2, 1, 5, 5, 5);
var material10 = new THREE.MeshBasicMaterial({
    color: 0x242424, side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(Caja, material10);
//scene.add(mesh10);
mesh10.position.set(0, 22.4, -25);

var Caja = new THREE.BoxGeometry(92, 2, 1, 5, 5, 5);
var material11 = new THREE.MeshBasicMaterial({
    color: 0x242424, side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(Caja, material11);
//scene.add(mesh11);
mesh11.position.set(0, 22.4, -5);
//foco1
var esfera = new THREE.SphereGeometry(4, 30, 30);
var material12 = new THREE.MeshBasicMaterial({
    color: 0xc98e04, side: THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(esfera, material12);
//scene.add(mesh12);
mesh12.position.set(8, 45, -14);

var cilindro = new THREE.CylinderGeometry(1.5, 1.5, 5, 30, 30, false, 0, 6.28);
var material13 = new THREE.MeshBasicMaterial({
    color: 0xc98e04, side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(cilindro, material13);
//scene.add(mesh13);
mesh13.position.set(8, 40, -14);

var cilindro = new THREE.CylinderGeometry(1.9, 1.9, 1, 30, 30, false, 0, 6.28);
var material14 = new THREE.MeshBasicMaterial({
    color: 0x7d7d7d, side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(cilindro, material14);
//scene.add(mesh14);
mesh14.position.set(8, 39.6, -14);
//foco2
var esfera = new THREE.SphereGeometry(4, 30, 30);
var material15 = new THREE.MeshBasicMaterial({
    color: 0x49a63c, side: THREE.DoubleSide
});
var mesh15= new THREE.Mesh(esfera, material15);
//scene.add(mesh15);
mesh15.position.set(-8, 45, -14);

var cilindro = new THREE.CylinderGeometry(1.5, 1.5, 5, 30, 30, false, 0, 6.28);
var material16 = new THREE.MeshBasicMaterial({
    color: 0x49a63c, side: THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(cilindro, material16);
//scene.add(mesh16);
mesh16.position.set(-8, 40, -14);

var cilindro = new THREE.CylinderGeometry(1.9, 1.9, 1, 30, 30, false, 0, 6.28);
var material17 = new THREE.MeshBasicMaterial({
    color: 0x7d7d7d, side: THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(cilindro, material17);
//scene.add(mesh17);
mesh17.position.set(-8, 39.6, -14);
//foco3
var esfera = new THREE.SphereGeometry(3, 30, 30);
var material18 = new THREE.MeshBasicMaterial({
    color: 0xba241c, side: THREE.DoubleSide
});
var mesh18= new THREE.Mesh(esfera, material18);
//scene.add(mesh18);
mesh18.position.set(0, 44, -14);

var cilindro = new THREE.CylinderGeometry(1, 1, 3.3, 30, 30, false, 0, 6.28);
var material19 = new THREE.MeshBasicMaterial({
    color: 0xba241c, side: THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(cilindro, material19);
//scene.add(mesh19);
mesh19.position.set(0, 40, -14);

var cilindro = new THREE.CylinderGeometry(1.9, 1.9, 1, 30, 30, false, 0, 6.28);
var material20 = new THREE.MeshBasicMaterial({
    color: 0x7d7d7d, side: THREE.DoubleSide
});
var mesh20= new THREE.Mesh(cilindro, material20);
//scene.add(mesh20);
mesh20.position.set(0, 39.5, -14);
//Botones
var cilindro = new THREE.CylinderGeometry(1.4, 1.4, 1, 30, 30, false, 0, 6.28);
var material21 = new THREE.MeshBasicMaterial({
    color: 0x8a0f01, side: THREE.DoubleSide
});
var mesh21= new THREE.Mesh(cilindro, material21);
//scene.add(mesh21);
mesh21.position.set(47.7, 23, -4);

var cilindro = new THREE.CylinderGeometry(1.4, 1.4, 1, 30, 30, false, 0, 6.28);
var material22 = new THREE.MeshBasicMaterial({
    color: 0x1e8f01, side: THREE.DoubleSide
});
var mesh22= new THREE.Mesh(cilindro, material22);
//scene.add(mesh22);
mesh22.position.set(47.7, 23, -8);

var fabrica= new THREE.Group();
        fabrica.add(mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22, );
        fabrica.position.set(x,y,z);
        return fabrica;
}

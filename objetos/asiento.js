import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

//Asiento
var cilindro = new THREE.CylinderGeometry(15, 15, 2, 30, 30, false, 0, 6.28);
var material2 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(cilindro, material2);
//scene.add(mesh2);
mesh2.position.set(0, 25, 0);
mesh2.rotation.set(7.9,0,0);

var cilindro = new THREE.CylinderGeometry(13, 13, 4, 30, 30, false, 0, 6.28);
var material3 = new THREE.MeshLambertMaterial({
    color: 0x632D07, side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(cilindro, material3);
//scene.add(mesh3);
mesh3.position.set(0, 22, 2);
mesh3.rotation.set(7.9,0,0);

var cilindro = new THREE.CylinderGeometry(12, 12, 4, 30, 30, false, 0, 6.28);
var material4 = new THREE.MeshLambertMaterial({
    color: 0x632D07, side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(cilindro, material4);
//scene.add(mesh4);
mesh4.position.set(0, 12, 10);

var cilindro = new THREE.CylinderGeometry(2.5, 2.5, 11, 30, 30, false, 0, 6.28);
var material5 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh5= new THREE.Mesh(cilindro, material5);
//scene.add(mesh5);
mesh5.position.set(-7, 7, 7);

var cilindro = new THREE.CylinderGeometry(2.5, 2.5, 11, 30, 30, false, 0, 6.28);
var material6 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh6= new THREE.Mesh(cilindro, material6);
//scene.add(mesh6);
mesh6.position.set(7, 7, 7);

var cilindro = new THREE.CylinderGeometry(2.5, 2.5, 11, 30, 30, false, 0, 6.28);
var material7 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh7 = new THREE.Mesh(cilindro, material7);
//scene.add(mesh7);
mesh7.position.set(7, 7, 15);

var cilindro = new THREE.CylinderGeometry(2.5, 2.5, 11, 30, 30, false, 0, 6.28);
var material8 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh8 = new THREE.Mesh(cilindro, material8);
//scene.add(mesh8);
mesh8.position.set(-7, 7, 15);

var Caja = new THREE.BoxGeometry(2, 7, 2, 5, 5, 5);
var material9 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh9 = new THREE.Mesh(Caja, material9);
//scene.add(mesh9);
mesh9.position.set(-9, 14, 15);

var Caja = new THREE.BoxGeometry(2, 7, 2, 5, 5, 5);
var material10 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh10= new THREE.Mesh(Caja, material10);
//scene.add(mesh10);
mesh10.position.set(-9, 14, 7);

var Caja = new THREE.BoxGeometry(2, 2, 10, 5, 5, 5);
var material11 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh11= new THREE.Mesh(Caja, material11);
//scene.add(mesh11);
mesh11.position.set(-9, 18, 11);

var Caja = new THREE.BoxGeometry(2, 7, 2, 5, 5, 5);
var material12 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh12= new THREE.Mesh(Caja, material12);
//scene.add(mesh12);
mesh12.position.set(9, 14, 15);

var Caja = new THREE.BoxGeometry(2, 7, 2, 5, 5, 5);
var material13 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh13= new THREE.Mesh(Caja, material13);
//scene.add(mesh13);
mesh13.position.set(9, 14, 7);

var Caja = new THREE.BoxGeometry(2, 2, 10, 5, 5, 5);
var material14 = new THREE.MeshLambertMaterial({
    color: 0xFF8C00, side: THREE.DoubleSide
});
var mesh14= new THREE.Mesh(Caja, material14);
//scene.add(mesh14);
mesh14.position.set(9, 18, 11);





var asiento = new THREE.Group();
        asiento.add(mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14,);
        asiento.position.set(x,y,z);
        return asiento;
}

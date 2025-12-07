import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

// CAMPANA 1
var campana1 = new THREE.CylinderGeometry(2.5, 6, 11, 32);
var material1 = new THREE.MeshLambertMaterial({
    color: 0xffd700, 
    side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(campana1, material1);
mesh1.castShadow = true;
//scene.add(mesh1);
mesh1.position.set(5, 15, 0);
mesh1.rotation.z = 0.3;

var bolita1 = new THREE.SphereGeometry(1.5, 16, 16);
var mesh2 = new THREE.Mesh(bolita1, material1);
mesh2.castShadow = true;
//scene.add(mesh2);
mesh2.position.set(7.5, 9, 0);

// CAMPANA 2
var campana2 = new THREE.CylinderGeometry(2.5, 6, 11, 32);
var mesh3 = new THREE.Mesh(campana2, material1);
mesh3.castShadow = true;
//scene.add(mesh3);
mesh3.position.set(-5, 15, 0);
mesh3.rotation.z = -0.3;

var bolita2 = new THREE.SphereGeometry(1.5, 16, 16);
var mesh4 = new THREE.Mesh(bolita2, material1);
mesh4.castShadow = true;
//scene.add(mesh4);
mesh4.position.set(-7.5, 9, 0);

// FRUTILLAS 
var frutilla1 = new THREE.SphereGeometry(3, 16, 16);
var material5 = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
var mesh5 = new THREE.Mesh(frutilla1, material5);
mesh5.castShadow = true;
//scene.add(mesh5);
mesh5.position.set(0, 24, -1.5);

var frutilla2 = new THREE.SphereGeometry(3, 16, 16);
var material6 = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
var mesh6 = new THREE.Mesh(frutilla2, material6);
mesh6.castShadow = true;
//scene.add(mesh6);
mesh6.position.set(-3, 22, -1.5);

var frutilla3 = new THREE.SphereGeometry(3, 16, 16);
var material7 = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
var mesh7 = new THREE.Mesh(frutilla3, material7);
mesh7.castShadow = true;
//scene.add(mesh7);
mesh7.position.set(3, 22, -1.5);

// HOJA IZQUIERDA
var hoja1 = new THREE.PlaneGeometry(25, 15);
var texture1 = new THREE.TextureLoader().load("./image/hoja.png");
var material8 = new THREE.MeshLambertMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    transparent:true
});
var mesh8 = new THREE.Mesh(hoja1, material8);
mesh8.castShadow = true;
//scene.add(mesh8);
mesh8.position.set(-9.5, 25, -2);
mesh8.rotation.z = -3;

// HOJA DERECHA
var hoja2 = new THREE.PlaneGeometry(25, 15);
var texture2 = new THREE.TextureLoader().load("./image/hoja.png");
var material9 = new THREE.MeshLambertMaterial({
    map: texture2,
    side: THREE.DoubleSide,
    transparent:true
});
var mesh9 = new THREE.Mesh(hoja2, material9);
mesh9.castShadow = true;
//scene.add(mesh9);
mesh9.position.set(9.5, 25, -0.5);
mesh9.rotation.z = -0.6;


var campana = new THREE.Group();
        campana.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, );
        campana.position.set(x,y,z);
        return campana;
}


import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

// esfera
var esfera = new THREE.SphereGeometry(50, 30, 30);
var texture1 = new THREE.TextureLoader().load("./image/iglu.jpg");
var material1 =new THREE .MeshLambertMaterial({map:texture1,side:THREE.DoubleSide})
var mesh1 = new THREE.Mesh(esfera, material1);
//scene.add(mesh1);
mesh1.position.set(0, 7, -30);

var cilindro = new THREE.TorusGeometry(20, 10, 16, 100, 3.14);
var texture2 = new THREE.TextureLoader().load("./image/iglu2.jpg");
var material2 =new THREE .MeshLambertMaterial({map:texture2,side:THREE.DoubleSide})
var mesh2 = new THREE.Mesh(cilindro, material2);
//scene.add(mesh2);
mesh2.position.set(0, 1, 20);
mesh2.rotation.x = 3.14;
mesh2.rotation.z = 3.14;

var puerta = new THREE.CircleGeometry(18, 20);
var texture3 = new THREE.TextureLoader().load("./image/puerta2.png");
var material3 =new THREE .MeshLambertMaterial({map:texture3,side:THREE.DoubleSide, transparent:true})
var mesh10 = new THREE.Mesh(puerta, material3);
mesh10.position.set(0, 6, 30);
//scene.add(mesh10);

var iglu = new THREE.Group();
    iglu.add(mesh1,mesh2,mesh10);
        iglu.position.set(x,y,z);
        return iglu;
}

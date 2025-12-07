import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

//comida

// cuerpo del plato
var plato1 = new THREE.CylinderGeometry(4, 3, 2, 32);
var material1 = new THREE.MeshLambertMaterial({ color: 0xEBBC5B });
var mesh1 = new THREE.Mesh(plato1, material1);
//scene.add(mesh1);
mesh1.position.set(-6, 0, 0);

//arriba
var anillo1 = new THREE.TorusGeometry(4, 0.3, 16, 40);
var mesh2 = new THREE.Mesh(anillo1, material1);
mesh2.rotation.x = 1.57;
mesh2.position.set(-6, 1, 0);
//scene.add(mesh2);

// verduras 
var verdura1 = new THREE.SphereGeometry(1.7, 16, 16);
var material2 = new THREE.MeshLambertMaterial({ color: 0x35c94a });

var mesh3 = new THREE.Mesh(verdura1, material2);
mesh3.position.set(-4.5, 1, 1);
//scene.add(mesh3);

var mesh4 = new THREE.Mesh(verdura1, material2);
mesh4.position.set(-5.4, 1, -0.5);
//scene.add(mesh4);

var mesh5 = new THREE.Mesh(verdura1, material2);
mesh5.position.set(-6, 1, -2);
//scene.add(mesh5);

var mesh6 = new THREE.Mesh(verdura1, material2);
mesh6.position.set(-7.2, 1, 0.6);
//scene.add(mesh6);


//plato

// cuerpo del plato
var plato2 = new THREE.CylinderGeometry(4, 3, 2, 32);
var material3 = new THREE.MeshLambertMaterial({ color: 0xEBBC5B });
var mesh7 = new THREE.Mesh(plato2, material3);
//scene.add(mesh7);
mesh7.position.set(6, 0, 0);

//arriba
var anillo2 = new THREE.TorusGeometry(4, 0.3, 16, 40);
var mesh8 = new THREE.Mesh(anillo2, material3);
mesh8.rotation.x = 1.57;
mesh8.position.set(6, 1, 0);
//scene.add(mesh8);

// agua
var agua1 = new THREE.CylinderGeometry(3.8, 2.2, 0.8, 32);
var material4 = new THREE.MeshLambertMaterial({
    color: 0x4aaaff,


});
var mesh9 = new THREE.Mesh(agua1, material4);
//scene.add(mesh9);
mesh9.position.set(6, 0.8, 0);

var plato = new THREE.Group();
        plato.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9);
        plato.position.set(x,y,z);
        return plato;
}


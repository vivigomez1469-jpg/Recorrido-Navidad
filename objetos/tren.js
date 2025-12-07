import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

//tren
//parte de abajo
var cuerpo = new THREE.BoxGeometry(26, 3, 6);
var material1 = new THREE.MeshLambertMaterial({
    color: 0xE3C636,
    side: THREE.DoubleSide
});
var mesh1 = new THREE.Mesh(cuerpo, material1);
mesh1.castShadow = true;
//scene.add(mesh1);
mesh1.position.set(-1, 4, 0);

//cabina de atras
var cabina = new THREE.BoxGeometry(7.5, 9, 6);
var mesh2 = new THREE.Mesh(cabina, material1);
mesh2.castShadow = true;
//scene.add(mesh2);
mesh2.position.set(8, 8.5, 0);

//cilindro motor
var motor = new THREE.CylinderGeometry(3, 3, 18, 20);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x3C82AB, 
    side: THREE.DoubleSide
});
var mesh3 = new THREE.Mesh(motor, material2);
mesh3.castShadow = true;
//scene.add(mesh3);
mesh3.rotation.z = 1.57;
mesh3.position.set(-4.5, 7, 0);

//chimeneas
var chimenea1 = new THREE.CylinderGeometry(0.9, 0.9, 3, 16);
var material3 = new THREE.MeshLambertMaterial({
    color: 0x000000, 
    side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(chimenea1, material3);
mesh4.castShadow = true;
//scene.add(mesh4);
mesh4.position.set(-8, 10.6, 0);

var chimenea2 = new THREE.CylinderGeometry(0.9, 0.9, 3, 16);
var mesh5 = new THREE.Mesh(chimenea2, material3);
mesh5.castShadow = true;
//scene.add(mesh5);
mesh5.position.set(-4, 10.6, 0);

// ruedas
var rueda1 = new THREE.TorusGeometry(1.8, 0.6, 16, 100);
var material4 = new THREE.MeshLambertMaterial({
    color: 0x000000, // negro
    side: THREE.DoubleSide
});
var mesh6 = new THREE.Mesh(rueda1, material4);
mesh6.castShadow = true;
//scene.add(mesh6);
mesh6.position.set(7.5, 2.5, 3.3);


var rueda2 = new THREE.TorusGeometry(1.8, 0.6, 16, 100);
var mesh7 = new THREE.Mesh(rueda2, material4);
mesh7.castShadow = true;
//scene.add(mesh7);
mesh7.position.set(-7.5, 2.5, 3.3);


var rueda3 = new THREE.TorusGeometry(1.8, 0.6, 16, 100);
var mesh8 = new THREE.Mesh(rueda3, material4);
mesh8.castShadow = true;
//scene.add(mesh8);
mesh8.position.set(7.5, 2.5, -3.3);


var rueda4 = new THREE.TorusGeometry(1.8, 0.6, 16, 100);
var mesh9 = new THREE.Mesh(rueda4, material4);
mesh9.castShadow = true;
//scene.add(mesh9);
mesh9.position.set(-7.5, 2.5, -3.3);

//centros de las ruedas
var centroRueda = new THREE.CircleGeometry(1.2, 16);
var material5 = new THREE.MeshLambertMaterial({
    color: 0x808080, // gris
    side: THREE.DoubleSide
});


var mesh10 = new THREE.Mesh(centroRueda, material5);
mesh10.position.set(7.5, 2.5, 3.2);
//scene.add(mesh10);


var mesh11 = new THREE.Mesh(centroRueda, material5);
mesh11.position.set(-7.5, 2.5, 3.2);
//scene.add(mesh11);


var mesh12 = new THREE.Mesh(centroRueda, material5);
mesh12.position.set(7.5, 2.5, -3.2);
//scene.add(mesh12);


var mesh13 = new THREE.Mesh(centroRueda, material5);
mesh13.position.set(-7.5, 2.5, -3.2);
//scene.add(mesh13);


var tren = new THREE.Group();
    tren.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, );
        tren.position.set(x,y,z);
        return tren;
}

import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";
export default function E01({x,y,z}){

//RENO
//pata1
var pata = new THREE.CylinderGeometry(2, 2, 20, 30);
var material1 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide});
var mesh1 = new THREE.Mesh(pata, material1);
mesh1.castShadow = true;
//scene.add(mesh1);
mesh1.position.set(-4, 12, 0); 
//pata2
var pata = new THREE.CylinderGeometry(2, 2, 20, 30);
var material2 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide});
var mesh2 = new THREE.Mesh(pata, material2);
mesh2.castShadow = true;
//scene.add(mesh2);
mesh2.position.set(4, 12, 0); 
//pata 3
var pata = new THREE.CylinderGeometry(2, 2, 20, 30);
var material3 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide});
var mesh3 = new THREE.Mesh(pata, material3);
mesh3.castShadow = true;
//scene.add(mesh3);
mesh3.position.set(4, 12, -16); 
//pata4
var pata = new THREE.CylinderGeometry(2, 2, 20, 30);
var material4 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide});
var mesh4 = new THREE.Mesh(pata, material4);
mesh4.castShadow = true;
//scene.add(mesh4);
mesh4.position.set(-4, 12, -16); 

//pesuña1
var pesuña = new THREE.CylinderGeometry(2.5, 2.5, 5, 30);
var material5 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide});
var mesh5= new THREE.Mesh(pesuña , material5);
mesh5.castShadow = true;
//scene.add(mesh5);
mesh5.position.set(-4, 4, 0); 
//pesuña2
var pesuña = new THREE.CylinderGeometry(2.5, 2.5, 5, 30);
var material6 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide});
var mesh6 = new THREE.Mesh(pesuña , material6);
mesh6.castShadow = true;
//scene.add(mesh6);
mesh6.position.set(4, 4, 0); 
//pesuña 3
var pesuña = new THREE.CylinderGeometry(2.5, 2.5, 5, 30);
var material7 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide});
var mesh7 = new THREE.Mesh(pesuña , material7);
mesh7.castShadow = true;
//scene.add(mesh7);
mesh7.position.set(4, 4, -16); 
//pesuña4
var pesuña = new THREE.CylinderGeometry(2.5, 2.5, 5, 30);
var material8 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide});
var mesh8 = new THREE.Mesh(pesuña , material8);
mesh8.castShadow = true;
//scene.add(mesh8);
mesh8.position.set(-4, 4, -16); 
//cuaerpo
var Cuerpo = new RoundedBoxGeometry (15,30,15,12.5,10);
var material9 = new THREE.MeshLambertMaterial({
    color:0x5C381A, side: THREE.DoubleSide});
var mesh9 = new THREE.Mesh(Cuerpo,material9);
//scene.add(mesh9);
mesh9.position.set(0,27,-8);
mesh9.rotation.set(1.57,0,0);
//cuello
var cilindro = new THREE.CylinderGeometry(2, 4, 10, 30, 30, false, 0, 6.28);
var material10 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide
});
var mesh10= new THREE.Mesh(cilindro, material10);
//scene.add(mesh10);
mesh10.position.set(0, 34, -0.4);
//cara
var esfera = new THREE.SphereGeometry(7, 30, 30);
var material11 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(esfera, material11);
//scene.add(mesh11);
mesh11.position.set(0, 45, 0);
//osico
var esfera = new THREE.SphereGeometry(3.4, 30, 30);
var material12 = new THREE.MeshLambertMaterial({
    color: 0xAB7A60, side: THREE.DoubleSide
});
var mesh12= new THREE.Mesh(esfera, material12);
//scene.add(mesh12);
mesh12.position.set(0, 42, 7);
//nariz
var esfera = new THREE.SphereGeometry(1, 30, 30);
var material13 = new THREE.MeshLambertMaterial({
    color:0x000000, side: THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(esfera, material13);
//scene.add(mesh13);
mesh13.position.set(0, 45, 9);
//ojo1
var esfera = new THREE.SphereGeometry(1.3, 30, 30);
var material14 = new THREE.MeshLambertMaterial({
    color: 0x000000, side: THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(esfera, material14);
//scene.add(mesh14);
mesh14.position.set(-4, 45, 5);
//ojo2
var esfera = new THREE.SphereGeometry(1.3, 30, 30);
var material15 = new THREE.MeshLambertMaterial({
    color: 0x000000, side: THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(esfera, material15);
//scene.add(mesh15);
mesh15.position.set(4, 45, 5);
//cuerno1
var cilindro = new THREE.CylinderGeometry(0.9, 1.4, 12, 30, 30, false, 0, 6.28);
var material16 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide
});
var mesh16= new THREE.Mesh(cilindro, material16);
//scene.add(mesh16);
mesh16.position.set(-5, 51, -1);
mesh16.rotation.set(0,0,0.5)
//cuerno2
var cilindro = new THREE.CylinderGeometry(0.9, 1.4, 12, 30, 30, false, 0, 6.28);
var material17 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide
});
var mesh17= new THREE.Mesh(cilindro, material17);
//scene.add(mesh17);
mesh17.position.set(5, 51, -1);
mesh17.rotation.set(0,0,5.5)
//Cuerno1.2
var cilindro = new THREE.CylinderGeometry(0.4, 1, 3, 30, 30, false, 0, 6.28);
var material18 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide
});
var mesh18= new THREE.Mesh(cilindro, material18);
//scene.add(mesh18);
mesh18.position.set(8, 51, -1);
mesh18.rotation.set(0,0,4)
//cuerno1.3
var cilindro = new THREE.CylinderGeometry(1, 0.4, 3, 30, 30, false, 0, 6.28);
var material19 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide
});
var mesh19= new THREE.Mesh(cilindro, material19);
//scene.add(mesh19);
mesh19.position.set(6.4, 55.3, -1);
mesh19.rotation.set(0,0,4)
//cueno2.2
var cilindro = new THREE.CylinderGeometry(1, 0.4, 3, 30, 30, false, 0, 6.28);
var material20 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide
});
var mesh20= new THREE.Mesh(cilindro, material20);
//scene.add(mesh20);
mesh20.position.set(-6, 55.3, -1);
mesh20.rotation.set(0,0,2)
//cuerno2.3
var cilindro = new THREE.CylinderGeometry(0.4, 1, 3, 30, 30, false, 0, 6.28);
var material21 = new THREE.MeshLambertMaterial({
    color: 0x291402, side: THREE.DoubleSide
});
var mesh21= new THREE.Mesh(cilindro, material21);
//scene.add(mesh21);
mesh21.position.set(-8, 51, -1);
mesh21.rotation.set(0,0,2)
//oreja1
var cilindro = new THREE.CylinderGeometry(0.7, 1.8, 4, 30, 30, false, 0, 6.28);
var material22 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide
});
var mesh22= new THREE.Mesh(cilindro, material22);
//scene.add(mesh22);
mesh22.position.set(-5, 51, 1);
mesh22.rotation.set(0,0,0.5)
//oreja2
var cilindro = new THREE.CylinderGeometry(1.8, 0.7, 4, 30, 30, false, 0, 6.28);
var material23 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide
});
var mesh23= new THREE.Mesh(cilindro, material23);
//scene.add(mesh23);
mesh23.position.set(5, 51, 1);
mesh23.rotation.set(0,0,2.5)
//colita
var cilindro = new THREE.CylinderGeometry(1.6, 0.5, 5, 30, 30, false, 0, 6.28);
var material24 = new THREE.MeshLambertMaterial({
    color: 0x5C381A, side: THREE.DoubleSide
});
var mesh24= new THREE.Mesh(cilindro, material24);
//scene.add(mesh24);
mesh24.position.set(0, 35, -20);
mesh24.rotation.set(2.5,0,0)

var reno2 = new THREE.Group();
    reno2.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,);
        reno2.position.set(x,y,z);
        return reno2;
}

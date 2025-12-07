import *as THREE from"../js/three.module.js";
import { FontLoader } from "../js/FontLoader.js";
import { TextGeometry } from "../js/TextGeometry.js";
export default function E01({x,y,z}){

//TEXTO
//TEXTO
 var loader =new FontLoader();
 
 var font = loader.parse(fontJSON);
 var geometry1 = new TextGeometry('Preparcion de Regalos',{
    font: font,
    size: 20,
    height:5,
 
 });
 geometry1.center();
 
 var materialT =new THREE.MeshLambertMaterial({
    color:0x022633,
    emissive:0x9c0e1c,
    shading:THREE.FlatShading,
 });
 
var texto  = new THREE.Mesh(geometry1,materialT);
//scene.add(texto);
texto.position.set(0,30,0);
texto.rotation.set(0,32.9,0);
texto.castShadow = true;
texto.receiveShadow = true;

var caja = new THREE.BoxGeometry(320, 80, 20, 50, 50, 50);
var texture2 = new THREE.TextureLoader().load("./image/carteles.png");
var material2 = new THREE.MeshLambertMaterial({map: texture2, side: THREE.DoubleSide});
var mesh2 = new THREE.Mesh(caja, material2);
//scene.add(mesh2);
mesh2.position.set(-15, 40, 0);
mesh2.rotation.set(0,29.8,0);


var cartel4= new THREE.Group();
        cartel4.add(texto,mesh2);
        cartel4.position.set(x,y,z);
        return cartel4;
}

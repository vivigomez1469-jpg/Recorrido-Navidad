import *as THREE from"../js/three.module.js";
import {TextGeometry} from "../js/TextGeometry.js";
        import {FontLoader} from "../js/FontLoader.js";
export default function E01({x,y,z}){
    

//cartel
var cajac = new THREE.BoxGeometry(320, 80, 20, 50, 50, 50);
var texture44 = new THREE.TextureLoader().load("./image/cartel.jpg");
var material44 = new THREE.MeshLambertMaterial({map: texture44, side: THREE.DoubleSide});
var mesh44 = new THREE.Mesh(cajac, material44);
//scene.add(mesh44);
mesh44.position.set(50, 340, 1050);

 //TEXTO
 var loader =new FontLoader();
 
 var font = loader.parse(fontJSON);
 var geometry1 = new TextGeometry('Bienvenidos',{
    font: font,
    size: 40,
    height:2,
 
 });
 geometry1.center();
 
 var materialT =new THREE.MeshLambertMaterial({
    color:0xEB0707,
    emissive:0x9c0e1c,
    shading:THREE.FlatShading,
 });
 
var texto  = new THREE.Mesh(geometry1,materialT);
//scene.add(texto);
texto.position.set(50,344,1090,2);
texto.castShadow = true;
texto.receiveShadow = true;

var cartelb = new THREE.Group();
        cartelb.add(mesh44,texto);
        cartelb.position.set(x,y,z);
        return cartelb;
}

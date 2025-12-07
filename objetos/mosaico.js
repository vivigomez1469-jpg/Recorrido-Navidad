import *as THREE from"../js/three.module.js";
export default function E01({x,y,z}){

//Cubo2

var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material1= new THREE.MeshLambertMaterial({map:texture});
var mesh1 = new THREE.Mesh(Caja2, material1);
//scene.add(mesh1);
mesh1.position.set(7, 2.7, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0;
texture.offset.y=0;

var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material2= new THREE.MeshLambertMaterial({map:texture});
var mesh2 = new THREE.Mesh(Caja2, material2);
//scene.add(mesh2);
mesh2.position.set(7, 8, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0;
texture.offset.y=0.33;


var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material3= new THREE.MeshLambertMaterial({map:texture});
var mesh3 = new THREE.Mesh(Caja2, material3);
//scene.add(mesh3);
mesh3.position.set(7, 13.1, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0;
texture.offset.y=0.66;



var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material4= new THREE.MeshLambertMaterial({map:texture});
var mesh4 = new THREE.Mesh(Caja2, material4);
//scene.add(mesh4);
mesh4.position.set(12.5, 2.7, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0.33;
texture.offset.y=0;


var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material5= new THREE.MeshLambertMaterial({map:texture});
var mesh5 = new THREE.Mesh(Caja2, material5);
//scene.add(mesh5);
mesh5.position.set(17.9, 2.7, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0.66;
texture.offset.y=0;



var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material6= new THREE.MeshLambertMaterial({map:texture});
var mesh6 = new THREE.Mesh(Caja2, material6);
//scene.add(mesh6);
mesh6.position.set(12.5, 7.9, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0.33;
texture.offset.y=0.33;

 
 var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material7= new THREE.MeshLambertMaterial({map:texture});
var mesh7 = new THREE.Mesh(Caja2, material7);
//scene.add(mesh7);
mesh7.position.set(17.9, 7.9, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0.66;
texture.offset.y=0.33;


 
 var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material8= new THREE.MeshLambertMaterial({map:texture});
var mesh8 = new THREE.Mesh(Caja2, material8);
//scene.add(mesh8);
mesh8.position.set(17.9, 13, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0.66;
texture.offset.y=0.66;


 var Caja2 = new THREE.BoxGeometry(5, 5, 1, 5, 5, 5);
var texture = new THREE.TextureLoader() .load("./image/foto1.jpg");
var material9= new THREE.MeshLambertMaterial({map:texture});
var mesh9 = new THREE.Mesh(Caja2, material9);
//scene.add(mesh9);
mesh9.position.set(12.5, 13, -9);

texture.wrapS=THREE.RepeatWrawpping;
texture.wrapT=THREE.RepeatWrawpping;
texture.repeat.set(0.33,0.33);
texture.offset.x=0.33;
texture.offset.y=0.66;

var mosaico = new THREE.Group();
    mosaico.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9,);
        mosaico.position.set(x,y,z);
        return mosaico;
}

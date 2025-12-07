import *as THREE from"../js/three.module.js";
import reg2 from "./Regalo2.js"
import reg4 from "./Regalo4.js"
import reg5 from "./Regalo5.js"
    import reg6 from "./Regalo6.js"
    import reg7 from "./Regalo7.js"
    import reg8 from "./Regalo8.js"
    import reg9 from "./Regalo9.js"
    import reg10 from "./Regalo10.js"
export default function E01({x,y,z}){

    
// TRINEO

// Base
var geometria1 = new THREE.BoxGeometry(39, 5, 20);
var material1 = new THREE.MeshLambertMaterial({ color: 0x8B0000 });
var mesh1 = new THREE.Mesh(geometria1, material1);
mesh1.position.set(0, 5, 0);
//scene.add(mesh1);

// Asiento
var geometria2 = new THREE.BoxGeometry(30, 10, 15);
var texture1 = new THREE.TextureLoader().load("./image/sillon.jpg");
var material2 = new THREE.MeshLambertMaterial({
    map: texture1,
    side: THREE.DoubleSide
});
var mesh2 = new THREE.Mesh(geometria2, material2);
mesh2.position.set(0, 13, 40);
//scene.add(mesh2);

// Respaldo
var geometria3 = new THREE.BoxGeometry(30, 15, 2);
var mesh3 = new THREE.Mesh(geometria3, material2);
mesh3.position.set(0, 18, 33);
//scene.add(mesh3);

// Barandales laterales
var geometria4 = new THREE.CircleGeometry(15, 30);
var texture4 = new THREE.TextureLoader().load("./image/copos.jpeg");
var material4 = new THREE.MeshLambertMaterial({
    map: texture4,
    side: THREE.DoubleSide
});
var mesh4 = new THREE.Mesh(geometria4, material4);
mesh4.position.set(-20, 12, 0);
mesh4.rotation.y=1.57;
//scene.add(mesh4);

var geometria5 = new THREE.CircleGeometry(15,30);
var mesh5 = new THREE.Mesh(geometria5, material4);
mesh5.position.set(20, 12, 0);
mesh5.rotation.y=1.57
//scene.add(mesh5);

//De atras
var geometria21 = new THREE.CircleGeometry(25,30);
var material21 = new THREE.MeshLambertMaterial({ color: 0x8B4513, side: THREE.DoubleSide});
var mesh21 = new THREE.Mesh(geometria21, material4);
mesh21.position.set(0, 13, -12);
//scene.add(mesh21);

// Patines
var geometria6 = new THREE.CylinderGeometry(1.5, 1.5, 45, 16);
var material6 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh6 = new THREE.Mesh(geometria6, material6);
mesh6.rotation.z = 1.57;
mesh6.position.set(0, 3, -10);
//scene.add(mesh6);

var geometria7 = new THREE.CylinderGeometry(1.5, 1.5, 45, 16);
var material7 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh7 = new THREE.Mesh(geometria7, material7);
mesh7.rotation.z = 1.57;
mesh7.position.set(0, 3, 10);
//scene.add(mesh7);

// ruedas
var geometria8 = new THREE.TorusGeometry(4, 1.2, 8, 16);
var material8 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh8 = new THREE.Mesh(geometria8, material8);
mesh8.rotation.y = 1.57;
mesh8.position.set(22, 3, -10);
//scene.add(mesh8);

var geometria9 = new THREE.TorusGeometry(4, 1.2, 8, 16);
var material9 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh9 = new THREE.Mesh(geometria9, material9);
mesh9.rotation.y = 1.57;
mesh9.position.set(22, 3, 10);
//scene.add(mesh9);

var geometria15 = new THREE.TorusGeometry(4, 1.2, 8, 16 );
var material15 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh15 = new THREE.Mesh(geometria15, material15);
mesh15.rotation.y = 1.57;
mesh15.position.set(-22, 3, 10);
//scene.add(mesh15);

var geometria16 = new THREE.TorusGeometry(4, 1.2, 8, 16 );
var material16 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh16 = new THREE.Mesh(geometria16, material16);
mesh16.rotation.y = 1.57;
mesh16.position.set(-22, 3, -10);
//scene.add(mesh16);

// Detalledorado 
var geometria10 = new THREE.BoxGeometry(40, 2, 2);
var material10 = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
var mesh10 = new THREE.Mesh(geometria10, material10);
mesh10.position.set(0, 10, 51);
//scene.add(mesh10);

var geometria22 = new THREE.BoxGeometry(42, 2, 2);
var mesh22 = new THREE.Mesh(geometria22, material10);
mesh22.position.set(0, 15, 51);
//scene.add(mesh22);

var geometria23 = new THREE.BoxGeometry(42, 2, 2);
var mesh23 = new THREE.Mesh(geometria23, material10);
mesh23.position.set(20, 15, 30);
mesh23.rotation.y= 1.57;
//scene.add(mesh23);

var geometria24 = new THREE.BoxGeometry(42, 2, 2);
var mesh24 = new THREE.Mesh(geometria24, material10);
mesh24.position.set(-20, 15, 30);
mesh24.rotation.y= 1.57;
//scene.add(mesh24);


// Piso frontal 
var geometria11 = new THREE.BoxGeometry(40, 2,40,30,30, 30);
var material11 = new THREE.MeshLambertMaterial({ color: 0x8B0000 });
var mesh11 = new THREE.Mesh(geometria11, material11);
mesh11.position.set(0, 5, 30);
//scene.add(mesh11);

// Pared izquierda del frente
var geometria12 = new THREE.BoxGeometry(2, 8,40,30,30, 30);
var material12 = new THREE.MeshLambertMaterial({ color: 0xBA2813 });
var mesh12 = new THREE.Mesh(geometria12, material12);
mesh12.position.set(20, 10, 30);
//scene.add(mesh12);

// Pared derecha del frente
var geometria13 = new THREE.BoxGeometry(2, 8,40,30,30, 30);
var material13 = new THREE.MeshLambertMaterial({ color: 0xBA2813 });
var mesh13 = new THREE.Mesh(geometria13, material13);
mesh13.position.set(-20, 10, 30);
//scene.add(mesh13);

// Pared frontal baja
var geometria14 = new THREE.BoxGeometry(41,10,2,30,30, 30);
var material14 = new THREE.MeshLambertMaterial({ color: 0xBA2813 });
var mesh14 = new THREE.Mesh(geometria14, material14);
mesh14.position.set(0, 10, 50);
//scene.add(mesh14);

//cilindros
var geometria17 = new THREE.CylinderGeometry(1.5, 1.5, 70, 16);
var material17 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh17 = new THREE.Mesh(geometria17, material17);
mesh17.rotation.z = 1.57;
mesh17.rotation.y = 1.57;
mesh17.position.set(20, 3, 21);
//scene.add(mesh17);

var geometria18 = new THREE.CylinderGeometry(1.5, 1.5, 70, 16);
var material18 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh18 = new THREE.Mesh(geometria18, material18);
mesh18.rotation.z = 1.57;
mesh18.rotation.y = 1.57;
mesh18.position.set(-20, 3, 21);
//scene.add(mesh18);

var curva = new THREE.TorusGeometry(4, 2, 16, 100, 1.57);
var material19 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh19 = new THREE.Mesh(curva, material19);
mesh19.castShadow = true;
//scene.add(mesh19);
mesh19.position.set(-20, 4, 58);
mesh19.rotation.y = 1.57;

var curva2 = new THREE.TorusGeometry(4, 2, 16, 100, 1.57);
var material20 = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
var mesh20 = new THREE.Mesh(curva2, material20);
mesh20.castShadow = true;
//scene.add(mesh20);
mesh20.position.set(20, 4, 58);
mesh20.rotation.y = 1.57;

//Cosas importadas
//regalo
//regalos
var ob1 = reg2({x:0,y:0,z:0});
//scene.add(ob1);
ob1.position.set(1, 5, -29);
ob1.scale.set(.6,.9,.6);
ob1.receiveShadow = true;
ob1.castShadow = true;

var ob2 = reg6({x:0,y:0,z:0});
//scene.add(ob2);
ob2.position.set(-30 , 5, 40);
ob2.scale.set(.7,.9,.7);
ob2.receiveShadow = true;
ob2.castShadow = true;
ob2.rotation.y = 15;

var ob3 = reg4({x:0,y:0,z:0});
//scene.add(ob3);
ob3.position.set(-32, 5, -15);
ob3.scale.set(.5,1,.5 );
ob3.receiveShadow = true;
ob3.castShadow = true;
ob3.rotation.y = 1;

var ob4 = reg9({x:0,y:0,z:0});
//scene.add(ob4);
ob4.position.set(12, 5, -32);
ob4.scale.set(.6,.8,.6);
ob4.receiveShadow = true;
ob4.castShadow = true;

var ob5 = reg7({x:0,y:0,z:0});
//scene.add(ob5);
ob5.position.set(10, 5, -18);
ob5.scale.set(.6,.8,.6);
ob5.receiveShadow = true;
ob5.castShadow = true;

var ob6 = reg10({x:0,y:0,z:0});
//scene.add(ob6);
ob6.position.set(-27, 5, 5);
ob6.scale.set(.7,.8,.7);
ob6.receiveShadow = true;
ob6.castShadow = true;
ob6.rotation.y = 1;

var ob7 = reg8({x:0,y:0,z:0});
//scene.add(ob7);
ob7.position.set(-12, 5, -3);
ob7.scale.set(.6,.9,.6);
ob7.receiveShadow = true;
ob7.castShadow = true;

var ob8 = reg5({x:0,y:0,z:0});
//scene.add(ob8);
ob8.position.set(13, 5, 8);
ob8.scale.set(.4,.7,.4);
ob8.receiveShadow = true;
ob8.castShadow = true;
 
var trineo = new THREE.Group();
    trineo.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8 );
        trineo.position.set(x,y,z);
        return trineo;
}

//3 THINGS THAT WE NEED: Scene, Camera, and Renderer
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera 
(50,
window.innerWidth / window.innerHeight,
0.1,
1000);

camera.position.x = -3.968;
camera.position.y = 3.422;
camera.position.z = -0.100;
camera.rotation.y = -89.6;

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

// WALL //
let wallGeometry = new THREE.BoxGeometry(1, 10, 15);
let wallMaterial = new THREE.MeshPhongMaterial({color: 0x1d3752});
let wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.x = 2.128;
wall.position.y = 4.244;
wall.position.z = -0.702;
scene.add(wall);

// DESK //
let deskGeometry = new THREE.BoxGeometry(3.00, 0.24, 6.00);
let deskMaterial = new THREE.MeshPhongMaterial({color: 0xaf8c72});
let desk = new THREE.Mesh(deskGeometry, deskMaterial);
desk.position.x = 0.116;
desk.position.y = 2.191;
desk.position.z = 0.183;
scene.add(desk);

// MONITOR //
let monitor1BaseGeometry = new THREE.CylinderGeometry(0.2, 1, 0.4, 30);
let monitor1BaseMaterial = new THREE.MeshStandardMaterial({color: 0xa39193});
let monitor1Base = new THREE.Mesh( monitor1BaseGeometry, monitor1BaseMaterial);
monitor1Base.position.x = 1.037;
monitor1Base.position.y = 2.374;
scene.add(monitor1Base);

let monitor1StandGeometry = new THREE.CylinderGeometry(0.07, 0.07, 1.5, 30);
let monitor1StandMaterial = new THREE.MeshStandardMaterial({color: 0xa39193});
let monitor1Stand = new THREE.Mesh( monitor1StandGeometry, monitor1StandMaterial);
monitor1Stand.position.x = 1.033;
monitor1Stand.position.y = 2.374;
scene.add(monitor1Stand);

let monitor1Geometry = new THREE.BoxGeometry(0.5, 1.6, 2.700);
let monitor1Material = new THREE.MeshStandardMaterial({color: 0x66545e});
let monitor1 = new THREE.Mesh( monitor1Geometry, monitor1Material);
monitor1.position.x = 1;
monitor1.position.y = 3.7;
scene.add(monitor1);

let monitor2BaseGeometry = new THREE.CylinderGeometry(0.2, 1, 0.4, 30);
let monitor2BaseMaterial = new THREE.MeshStandardMaterial({color: 0xa39193});
let monitor2Base = new THREE.Mesh( monitor2BaseGeometry, monitor2BaseMaterial);
monitor2Base.position.x = 0.166;
monitor2Base.position.y = 2.374;
monitor2Base.position.z = 2.408;
scene.add(monitor2Base);

let monitor2StandGeometry = new THREE.CylinderGeometry(0.07, 0.07, 1.5, 30);
let monitor2StandMaterial = new THREE.MeshStandardMaterial({color: 0xa39193});
let monitor2Stand = new THREE.Mesh( monitor2StandGeometry, monitor2StandMaterial);
monitor2Stand.position.x = 0.166;
monitor2Stand.position.y = 2.374;
monitor2Stand.position.z = 2.408;
scene.add(monitor2Stand);

let monitor2Geometry = new THREE.BoxGeometry(0.5, 1.71, 2.700);
let monitor2Material = new THREE.MeshStandardMaterial({color: 0x66545e});
let monitor2 = new THREE.Mesh( monitor2Geometry, monitor2Material);
monitor2.position.x = 0.123;
monitor2.position.y = 3.7;
monitor2.position.z = 2.399;
monitor2.rotation.y = -41.80;
scene.add(monitor2);

// BOOKS //
let book1Geometry = new THREE.BoxGeometry(1.30, 0.20, 0.84);
let book1Material = new THREE.MeshStandardMaterial({color: 0xaa6f73});
let book1 = new THREE.Mesh( book1Geometry, book1Material);
book1.position.x = -0.271;
book1.position.y = 2.390;
book1.position.z = -1.120;
scene.add(book1);

let book2Geometry = new THREE.BoxGeometry(1.30, 0.20, 0.84);
let book2Material = new THREE.MeshStandardMaterial({color: 0xf6e0b5});
let book2 = new THREE.Mesh( book2Geometry, book2Material);
book2.position.x = -0.236;
book2.position.y = 2.587;
book2.position.z = -1.120;
book2.rotation.y = 6.40;
scene.add(book2);

let book3Geometry = new THREE.BoxGeometry(1.30, 0.20, 0.84);
let book3Material = new THREE.MeshStandardMaterial({color: 0xeea990});
let book3 = new THREE.Mesh( book3Geometry, book3Material);
book3.position.x = -0.269;
book3.position.y = 2.786;
book3.position.z = -1.120;
book3.rotation.y = -9.00;
scene.add(book3);

// LAMP //
let lampBaseGeometry = new THREE.CylinderGeometry(0.500, 0.500, 0.3, 30);
let lampBaseMaterial = new THREE.MeshStandardMaterial({color: 0xffd700});
let lampBase = new THREE.Mesh( lampBaseGeometry, lampBaseMaterial);
lampBase.position.x = 0.971;
lampBase.position.y = 2.385;
lampBase.position.z = -2.029;
scene.add(lampBase);

let lampStand1Geometry = new THREE.CylinderGeometry(0.060, 0.060, 1.762, 30);
let lampStand1Material = new THREE.MeshStandardMaterial({color: 0xffd700});
let lampStand1 = new THREE.Mesh( lampStand1Geometry, lampStand1Material);
lampStand1.position.x = 0.971;
lampStand1.position.y = 3.336;
lampStand1.position.z = -2.029;
scene.add(lampStand1);

let lampStand2Geometry = new THREE.CylinderGeometry(0.060, 0.060, 1.560, 30);
let lampStand2Material = new THREE.MeshStandardMaterial({color: 0xffd700});
let lampStand2 = new THREE.Mesh( lampStand2Geometry, lampStand2Material);
lampStand2.position.x = 0.96;
lampStand2.position.y = 4.579;
lampStand2.position.z = -1.912;
lampStand2.rotation.y = 26.00;
lampStand2.rotation.z = 50.80;
scene.add(lampStand2);

let lampHeadGeometry = new THREE.CylinderGeometry(0.14, 0.56, 1, 30);
let lampHeadMaterial = new THREE.MeshStandardMaterial({color: 0xffd700});
let lampHead = new THREE.Mesh( lampHeadGeometry, lampHeadMaterial);
lampHead.position.x = 0.315;
lampHead.position.y = 5.100;
lampHead.position.z = -1.437;
lampHead.rotation.x = -41.30;
lampHead.rotation.y = -42.40;
lampHead.rotation.z = -15.95;
scene.add(lampHead);

// SPOTLIGHT //
let spotLight = new THREE.SpotLight( 0xffffff );
spotLight.angle = 0.674;
spotLight.position.x = 0.215;
spotLight.position.y = 5.000;
spotLight.position.z = -1.337;
spotLight.castShadow = true;
scene.add(spotLight);

// POINTLIGHT //
let pointLight = new THREE.PointLight( 0xffffff, 11.20, 1 ); 
pointLight.distance = 0.65;
pointLight.position.x = 0.08;
pointLight.position.y = 4.46;
pointLight.position.z = -1;
pointLight.castShadow = true;
scene.add(pointLight);

// AMBIANCE //
let ambience = new THREE.AmbientLight(0x222022, 2);
ambience.position.set(-0.300, 10.041, 0);
scene.add(ambience);

let helper = new THREE.CameraHelper( spotLight.shadow.camera );
scene.add(helper);
renderer.render(scene, camera);



const SCENE = new THREE.Scene();
const CLOCK = new THREE.Clock();
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 5000;
const RENDERER = new THREE.WebGLRenderer();
let deltaTime;

document.body.appendChild(RENDERER.domElement);
RENDERER.setSize(window.innerWidth, window.innerHeight);

///////////////////////////
/////     CAMERA     /////
/////////////////////////

let camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR
);

//camera position
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 100;

camera.lookAt(new THREE.Vector3());

///////////////////////////
/////     GALAXY     /////
/////////////////////////

//galaxy geometry
let galaxyGeo = new THREE.BoxGeometry(3840, 2400, 1);

//galaxy texture
let galaxyTex = new THREE.TextureLoader().load('images/galaxy.jpg');

//galaxy material
let galaxyMat = new THREE.MeshBasicMaterial({map: galaxyTex});

//combine all of the galaxy components as one
let galaxy = new THREE.Mesh(galaxyGeo, galaxyMat);

//galaxy position
galaxy.position.z = -900;

SCENE.add(galaxy);

///////////////////////////
/////     SATURN     /////
/////////////////////////

//saturn geometry
let saturnGeo = new THREE.SphereGeometry(50, 30, 30);

//saturn texture
let saturnTex = new THREE.TextureLoader().load('images/saturn.jpg');

//saturn material
let saturnMat = new THREE.MeshBasicMaterial({map: saturnTex});

//combine all of the saturn components as one
let saturn = new THREE.Mesh(saturnGeo, saturnMat);

SCENE.add(saturn);

/////////////////////////
/////     RING     /////
///////////////////////

//ring geometry
let ringGeo = new THREE.Geometry();

//ring particles
for (let i = 0; i < MAXPARTICLES; i++) {
  ringGeo.vertices.push(
    new THREE.Vector4(
      random(-100, 100),
      random(-3, 3),
      random(-100, 100),
      random(-100, 100))
  );
}

//ring texture
let ringTex = new THREE.TextureLoader().load('images/particle.png');

//ring material
let ringMat = new THREE.PointsMaterial({
  map: ringTex,
  alphaTest: 0.5,
  transparent: true
});

//combine all of the ring components as one
let ring = new THREE.Points(ringGeo, ringMat);
ring.sortParticle = true;

SCENE.add(ring);

//////////////////////////////
/////     RANDOMIZE     /////
////////////////////////////

// random helper RNG
function random(min, max) {
  if (isNaN(max)) {``
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

/////////////////////////
/////     LOOP     /////
///////////////////////

// render loop
function render() {
    requestAnimationFrame(render);
    deltaTime = CLOCK.getDelta();

    ring.rotation.y = Date.now() * 0.00007;
    saturn.rotation.y = Date.now() * -0.00007;

    RENDERER.render(SCENE, camera);
  }
render();
  
///////////////////////////
/////     RESIZE     /////
/////////////////////////

// resize
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  RENDERER.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize, false);
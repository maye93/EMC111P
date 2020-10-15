const SCENE = new THREE.Scene();
const CLOCK = new THREE.Clock();
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 2000;
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

//position
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 100;

camera.lookAt(new THREE.Vector3());

///////////////////////////
/////     SATURN     /////
/////////////////////////

//saturn geometry
let saturnGeo = new THREE.SphereGeometry(50, 30, 30);

//saturn texture
let saturnTex = new THREE.TextureLoader().load('images/8k_saturn.jpg');

//saturn material
let saturnMat = new THREE.MeshBasicMaterial({map: saturnTex});

//combine all of the saturn components as one
let saturn = new THREE.Mesh(saturnGeo, saturnMat);

//saturn position
saturn.position.x = 0;
saturn.position.y = 0;
saturn.position.z = 0;

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
let ringMat = new THREE.PointsMaterial({map: ringTex});

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
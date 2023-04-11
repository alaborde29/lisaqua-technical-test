import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Initialisation de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x404040)) 

// Création du matériau de la ligne
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffc300  });

// triforce gauche
const triangle1Geometry = new THREE.BufferGeometry();
const triangle1Vertices = new Float32Array([
  0-1, 0-1, 0,
  1-1, 0-1, 0,
  0.5-1, 0.8-1, 0
]);
triangle1Geometry.setAttribute('position', new THREE.BufferAttribute(triangle1Vertices, 3));
const triangle1 = new THREE.LineLoop(triangle1Geometry, lineMaterial);

// triforce haut
const triangle2Geometry = new THREE.BufferGeometry();
const triangle2Vertices = new Float32Array([
  0.5-1, 0.8-1, 0,
  1.5-1, 0.8-1, 0,
  1-1, 1.6-1, 0
]);
triangle2Geometry.setAttribute('position', new THREE.BufferAttribute(triangle2Vertices, 3));
const triangle2 = new THREE.LineLoop(triangle2Geometry, lineMaterial);

// triforce droite
const triangle3Geometry = new THREE.BufferGeometry();
const triangle3Vertices = new Float32Array([
  1-1, 0-1, 0,
  2-1, 0-1, 0,
  1.5-1, 0.8-1, 0
]);
triangle3Geometry.setAttribute('position', new THREE.BufferAttribute(triangle3Vertices, 3));
const triangle3 = new THREE.LineLoop(triangle3Geometry, lineMaterial);

// Ajout des triangles à la scène
scene.add(triangle1);
scene.add(triangle2);
scene.add(triangle3);

// Positionnement de la caméra
camera.position.z = 3;

// Boucle de rendu
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

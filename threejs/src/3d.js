import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Initialisation de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x404040)) 

// Chargement de l'objet 3D au format OBJ
const loader = new OBJLoader();
loader.load(
  '../assets/triforce.obj',
  function(object) {
    // Ajout de l'objet à la scène
    scene.add(object);
  },
  function(xhr) {
    // Affichage de la progression du chargement
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function(error) {
    // Affichage d'une erreur en cas d'échec du chargement
    console.error('Failed to load object', error);
  }
);

// Positionnement de la caméra
camera.position.z = 3;

// Boucle de rendu
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();

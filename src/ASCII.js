import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

// Initialisation de Three.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
let effect;
let mesh;

renderer.setSize(window.innerWidth, window.innerHeight);

scene.add(new THREE.AmbientLight(0x404040)) 

const loader = new OBJLoader()
loader.load('../assets/triforce_UV.obj',
  (obj) => {
        mesh = obj;
        mesh.position.y = -25
        scene.add(mesh)
        
    },
  (xhr) => {
      console.log(xhr)
  },
  (err) => {
      console.error("loading .obj went wrong, ", err)
    }
)

camera.position.z = 40;

effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
effect.setSize( window.innerWidth, window.innerHeight );
effect.domElement.style.color = 'white';
effect.domElement.style.backgroundColor = 'brown';
document.body.appendChild( effect.domElement );
const controls = new OrbitControls( camera, effect.domElement );
function render() {
  requestAnimationFrame(render);
  mesh.rotation.y += 0.005
  effect.render( scene, camera );
}
render();

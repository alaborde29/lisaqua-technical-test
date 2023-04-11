import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let mesh
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add(new THREE.AmbientLight(0x404040)) 

const loader = new OBJLoader()
loader.load('../assets/triforce_UV.obj',
  (obj) => {
        let material = new THREE.PointsMaterial({ color: 0xffc300, size: 0.25 })
        mesh = new THREE.Points(obj.children[0].geometry, material)
        mesh.position.y = -15
        scene.add(mesh)
        
    },
  (xhr) => {
      console.log(xhr)
  },
  (err) => {
      console.error("loading .obj went wrong, ", err)
    }
)

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
  mesh.rotation.y += 0.005
	renderer.render( scene, camera );
}

animate();
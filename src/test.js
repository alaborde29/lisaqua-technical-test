import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add(new THREE.AmbientLight(0x404040)) 

let geometry = new THREE.TorusGeometry(10, 3, 16, 100)
let material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.25 })
let mesh = new THREE.Points(geometry, material)
  
scene.add(mesh)

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.005
	renderer.render( scene, camera );
}

animate();
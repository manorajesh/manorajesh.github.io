import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import "./style.css"

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// get array of model divs
const modelCanvas = document.querySelectorAll('.model');
modelCanvas.forEach(canvas => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // import model from models/models.glb
  const loader = new GLTFLoader();
  loader.load('models/model1.glb', function (gltf) {
    // resize gltf to fit in div 
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
  }, undefined, function (error) {
    console.error(error);
  });


  // Add a light
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 0, 10);
  scene.add(light);

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
});

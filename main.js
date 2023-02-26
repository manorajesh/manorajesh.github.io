import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Loop through each model canvas and render the 3D models
const modelCanvases = document.querySelectorAll('canvas');
modelCanvases.forEach(function(canvas, index) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(canvas.parentElement.clientWidth, canvas.parentElement.clientHeight);
  const scene = new THREE.Scene();

  // Set up the camera
  const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
  camera.position.set(3, 3, 3);
  scene.add(camera);

  // Set up the lighting
  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);

  // Load the 3D model
  const loader = new GLTFLoader();
  loader.load('./models/model' + (index + 1) + '.glb', function(gltf) {
    gltf.scene.position.set(0, 0, 0);
    scene.add(gltf.scene);

    // Set up the isometric view
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.update();
    controls.addEventListener('change', function() {
      renderer.render(scene, camera);
    });

    // Render the scene
    renderer.render(scene, camera);
  });

  // Add the canvas to the DOM
  canvas.appendChild(renderer.domElement);
});

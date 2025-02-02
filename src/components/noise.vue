<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from "https://cdn.skypack.dev/three@0.133.1";
import { ImprovedNoise } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/math/ImprovedNoise.js";

const canvas = ref(null);

onMounted(() => {
  // Initialize Three.js components
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 10;
  
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    canvas: canvas.value
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Initialize points
  const gridSize = 64;
  const gap = 0.2;
  const coords = [];
  const colors = [];
  const points = [];
  
  for (let i = -gridSize; i < gridSize; i += 1) {
    for (let j = -gridSize; j < gridSize; j += 1) {
      const x = i * gap;
      const y = j * gap;
      const point = {
        position: { x, y, z: 0 },
        color: new THREE.Color(0.6, 0.6, 0.6)
      };
      
      points.push(point);
      coords.push(x, y, 0);
      colors.push(0.6, 0.6, 0.6);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(coords, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({ size: 0.40, vertexColors: true });
  const pointsObj = new THREE.Points(geo, mat);
  scene.add(pointsObj);

  const Noise = new ImprovedNoise();
  const timeMult = 0.0001;

  function updatePoints(t) {
    const newCoords = [];
    const newColors = [];
    const nScale = 1;
    const zPosScale = 0.8;
    const lowColor = new THREE.Color(0.0, 0, 0);
    const highColor = new THREE.Color(1, 1, 1);

    points.forEach((p) => {
      const ns = Noise.noise(p.position.x * nScale, p.position.y * nScale, t);
      p.position.z = ns * zPosScale;
      p.color.lerpColors(lowColor, highColor, ns * 1.5);
      
      newCoords.push(p.position.x, p.position.y, p.position.z);
      newColors.push(p.color.r, p.color.g, p.color.b);
    });

    geo.setAttribute("position", new THREE.Float32BufferAttribute(newCoords, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(newColors, 3));
    geo.attributes.position.needsUpdate = true;
  }

  function animate(timeStep) {
    requestAnimationFrame(animate);
    updatePoints(timeStep * timeMult);
    renderer.render(scene, camera);
  }

  function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Start animation and event listeners
  animate(0);
  window.addEventListener('resize', handleWindowResize);

  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', handleWindowResize);
    renderer.dispose();
    geo.dispose();
    mat.dispose();
  });
});
</script>

<template>
  <canvas ref="canvas" class="min-h-screen min-w-screen fixed z-[0] bg-fixed top-0 left-0"></canvas>
</template>

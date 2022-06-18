// import * as THREE from 'three';
//
// let scene;
// let camera;
// let renderer;
//
// function main() {
//
//   const canvas = document.querySelector('#c');
//
//   canvas.style.backgroundColor = 'red'
//
//
//   scene = new THREE.Scene();
//
//   camera = new THREE.PrespectiveCamera(45, window.innerHeight, 0.1, 1000);
//   camera.position.z = 2;
//   scene.add(camera);
//
//   renderer = new THREE.WebGLRenderer({canvas: camera, antialias: true,});
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);
//
//   renderer.autoClear = false;
//   renderer.setClearColor(0x00000, 0.0,);
//
//   //create earthgeometry
//   const earthgeometry = new THREE.SphereGeometry(0.6, 32, 32);
//
//   const earthmaterial = new THREE.MeshPhongMaterial({
//     roughness: 1,
//     metalness: 0,
//     map: THREE.ImageUtils.loadTexture('./images/map2.img'),
//     bumpMap: THREE.ImageUtils.loadTextura('./images/map2.img'),
//     bumpScale: 0.3,
//   });
//
//   const earthmesh = new THREE.Mesh(earthgeometry, earthmaterial);
//
//   scene.add(earthmesh);
//
//   //set ambientlight
//
//   const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
//   scene.add(ambientLight);
//
//   //set point light
//
//   const pointerlight = new THREE.PointLight(0xffffff, 0.9);
//
//   //set light position
//
//   pointerlight.position.set(5,3,5);
//   scene.add(pointerlight);
//
//
//   const animate = () => {
//     requestAnimationFrame(animate)
//     earthmesh.rotation.y -= 0.00015;
//
//     render()
//   };
//
//   const render = () => {
//     renderer.render(scene, camera);
//   }
//
//   animate();
//
// }
//
// window.onload = main;
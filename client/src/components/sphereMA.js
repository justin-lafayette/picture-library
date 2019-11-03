import React from 'react';
import logo from './logo.svg';
import './Sphere.css';

function Sphere() {
  return (
    <div className="Sphere">
      <header className="Sphere-header">
        <img src={logo} className="Sphere-logo" alt="logo" />
        <p>
          Edit <code>src/Sphere.js</code> and save to reload.
        </p>
{/* 
        var renderer = new THREE.WebGLRenderer();
        var w = 300;
        var h = 200;
        renderer.setSize(w, h);
        document.body.appendChild(renderer.domElement);

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
        45, // Field of view
        w / h, // Aspect ratio
        0.1, // Near
        10000 // Far
        );
        camera.position.set(15, 10, 15);
        camera.lookAt(scene.position);
        controls = new THREE.OrbitControls(camera, renderer.domElement);

        var light = new THREE.PointLight(0xFFFF00);
            light.position.set(20, 20, 20);
            scene.add(light);

        var light1 = new THREE.AmbientLight(0x808080);
            light1.position.set(20, 20, 20);
            scene.add(light1);

        var light2 = new THREE.PointLight(0x00FFFF);
            light2.position.set(-20, 20, -20);
            scene.add(light2);

        var light3 = new THREE.PointLight(0xFF00FF);
            light3.position.set(-20, -20, -20);
            scene.add(light3);

        var sphereGeom = new THREE.SphereGeometry(5, 16, 16); */}

        function rnd(rng) {
        return (Math.random() * rng)
        }

        function irnd(rng) {
        return rnd(rng) | 0
        }

        function randomCanvasTexture(sz) {
        var canv = document.createElement('canvas');
        canv.width = canv.height = sz;
        var ctx = canv.getContext('2d')
        for (var i = 0; i < 100; i++) {
            ctx.fillStyle = `rgb(${irnd(256)},${irnd(256)},${irnd(256)})`
            ctx.fillRect(irnd(sz), irnd(sz), 32, 32)
        }
        var tex = new THREE.Texture(canv);
        tex.needsUpdate = true;
        return tex;
        }

        var material = new THREE.MeshLambertMaterial({
        color: 0x808080,
        map: randomCanvasTexture(256)
        });
        var mesh = new THREE.Mesh(sphereGeom, material);

        var mesh1 = mesh.clone()
        mesh1.material = mesh.material.clone()
        mesh1.material.transparent = true;
        mesh1.material.opacity = 0.5;
        mesh1.material.map = randomCanvasTexture(256)
        scene.add(mesh);
        scene.add(mesh1);

        renderer.setClearColor(0xdddddd, 1);

        (function animate() {
        mesh1.material.opacity = (Math.sin(performance.now() * 0.001) + 1) * 0.5
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        })();

        <script src="https://threejs.org/build/three.min.js"></script>
        <script src="https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/controls/OrbitControls.js"></script>

        </header>
        </div>
);
}

export default Sphere;
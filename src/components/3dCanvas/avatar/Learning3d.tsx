import { GUI } from 'dat.gui';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

const Learning3d = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const canvasRef2 = React.useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (!canvasRef.current || !canvasRef2.current) return;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        // Lighting
        // Intensity use Math.PI
        const light = new THREE.AmbientLight(0xffffff, Math.PI);

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 7;

        const camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 20);
        camera2.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
        });
        // renderer.setSize(window.innerWidth, window.innerHeight);

        const renderer2 = new THREE.WebGLRenderer({
            canvas: canvasRef2.current,
        });
        // renderer.setSize(window.innerWidth, window.innerHeight);

        const control = new OrbitControls(camera, renderer.domElement);
        control.addEventListener('change', render);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // window.addEventListener('resize', onWindowResize, false);

        // function onWindowResize() {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        //     render();
        // }

        // Helper
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
        const camera2Helper = new THREE.CameraHelper(camera2);
        scene.add(camera2Helper);

        // Stats
        const stats = new Stats();
        document.body.appendChild(stats.dom);

        // GUI
        const gui = new GUI();
        const cubeGui = gui.addFolder('Cube');
        const cubePositionGui = cubeGui.addFolder('Position');
        cubePositionGui.add(cube.position, 'x', -10, 10, 1);
        cubePositionGui.add(cube.position, 'y', -10, 10, 1);
        cubePositionGui.add(cube.position, 'z', -10, 10, 1);
        const cubeScaleGui = cubeGui.addFolder('Scale');
        cubeScaleGui.add(cube.scale, 'x', -10, 10, 1);
        cubeScaleGui.add(cube.scale, 'y', -10, 10, 1);
        cubeScaleGui.add(cube.scale, 'z', -10, 10, 1);

        const cubeRotationGui = cubeGui.addFolder('Rotation');
        cubeRotationGui.add(cube.rotation, 'x', 0, Math.PI * 2, 1);
        cubeRotationGui.add(cube.rotation, 'y', 0, Math.PI * 2, 1);
        cubeRotationGui.add(cube.rotation, 'z', 0, Math.PI * 2, 1);
        cubeGui.open();
        const cameraGui = gui.addFolder('Camera');
        const cameraPositionGui = cameraGui.addFolder('Position');
        cameraPositionGui.add(camera2.position, 'x', 0, 10, 1);
        cameraPositionGui.add(camera2.position, 'y', 0, 10, 1);
        cameraPositionGui.add(camera2.position, 'z', 0, 10, 1);
        const cameraRotationGui = cameraGui.addFolder('Rotation');
        cameraRotationGui.add(camera2.rotation, 'x', 0, Math.PI * 2, 1);
        cameraRotationGui.add(camera2.rotation, 'y', 0, Math.PI * 2, 1);
        cameraRotationGui.add(camera2.rotation, 'z', 0, Math.PI * 2, 1);
        cameraGui.open();

        function animate() {
            requestAnimationFrame(animate);

            stats.update();
            cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;

            render();
        }

        function render() {
            renderer.render(scene, camera);
            renderer2.render(scene, camera2);
        }

        animate();
        // render();
        return () => {
            gui.destroy();
            // window.removeEventListener('resize', onWindowResize);
        };
    }, []);
    return (
        <div className="flex flex-row gap-2">
            <canvas ref={canvasRef} id="canvas"></canvas>
            <canvas ref={canvasRef2} id="canvas2"></canvas>
        </div>
    );
};

export default Learning3d;

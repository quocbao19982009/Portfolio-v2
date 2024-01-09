import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Avatar from './Avatar';

const CameraLogger = () => {
    const { camera, scene } = useThree();
    const cameraHelper = new THREE.CameraHelper(camera);
    scene.add(cameraHelper);
    scene.background = new THREE.Color('grey');
    const poistion = {
        x: 0,
        y: 0.5,
        z: 0.45,
    };

    camera.position.x = poistion.x;
    camera.position.y = poistion.y;
    camera.position.z = poistion.z;

    useFrame(() => {
        camera.lookAt(new THREE.Vector3(poistion.x, poistion.y, poistion.z));
        camera.updateProjectionMatrix();
    });

    return null;
};

const AvatarCanvas = () => {
    return (
        // <Canvas>
        //     <Avatar />
        /* The X axis is colored red.
The Y axis is colored green.
The Z axis is colored blue.*/
        // </Canvas>
        <>
            <Canvas
                camera={{ fov: 96 }}
                shadows
                style={{ width: '200px', height: '200px' }}
            >
                <CameraLogger />
                <Environment preset="sunset" />
                {/* <OrbitControls /> */}
                {/* <ambientLight /> */}

                <group position-y={-1}>
                    <Avatar />
                    {/* A box with the front color blue*/}

                    {/* <OrbitControls /> */}
                    <axesHelper args={[5]} />
                </group>
                {/* <cameraHelper
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
            /> */}
            </Canvas>
            <Canvas
                shadows
                orthographic
                camera={{ fov: 30 }}
                style={{ width: '200px', height: '200px' }}
            >
                <CameraLogger />
                <Environment preset="sunset" />
                <OrbitControls />
                {/* <ambientLight /> */}

                <group position-y={-1}>
                    <Avatar />
                    {/* A box with the front color blue*/}

                    {/* <OrbitControls /> */}
                    <axesHelper args={[5]} />
                </group>
                {/* <cameraHelper
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
            /> */}
            </Canvas>
        </>
    );
};

export default AvatarCanvas;

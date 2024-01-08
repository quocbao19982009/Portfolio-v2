import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Avatar from './Avatar';

const AvatarCanvas = () => {
    return (
        // <Canvas>
        //     <Avatar />
        /* The X axis is colored red.
The Y axis is colored green.
The Z axis is colored blue.*/
        // </Canvas>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
            {/* <CameraLogger /> */}
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
    );
};

export default AvatarCanvas;

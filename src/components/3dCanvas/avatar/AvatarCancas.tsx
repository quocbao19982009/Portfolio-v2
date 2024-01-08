import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Avatar from './Avatar'

const CameraLogger = () => {
    const { camera, scene } = useThree()
    const cameraHelper = new THREE.CameraHelper(camera)
    scene.add(cameraHelper)
    scene.background = new THREE.Color('grey')
    camera.position.z = 1.5
    camera.position.y = -1

    const lookAt = new THREE.Vector3(0, 0, 1.4)
    useFrame(() => {
        camera.lookAt(lookAt)
        camera.updateProjectionMatrix()
    })

    return null
}

const AvatarCanvas = () => {
    return (
        // <Canvas>
        //     <Avatar />
        /* The X axis is colored red.
The Y axis is colored green.
The Z axis is colored blue.*/
        // </Canvas>
        <Canvas shadows>
            <CameraLogger />
            {/* <OrbitControls /> */}
            <ambientLight />
            <directionalLight
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize={1024}
            />
            <group>
                <Avatar />
                {/* A box with the front color blue*/}
            </group>
            {/* <OrbitControls /> */}
            <axesHelper
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
                args={[5]}
            />
            {/* <cameraHelper
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
            /> */}
        </Canvas>
    )
}

export default AvatarCanvas

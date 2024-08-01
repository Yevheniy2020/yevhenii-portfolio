import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";

const Model = () => {
    const {scene} = useGLTF('/scene/david_head.glb');
    return <primitive object={scene} scale={[0.1, 0.1, 0.1]}/>
};


const CanvasModel = () => {
    return (
        <Canvas>
            <directionalLight position={[10, 10, 10]} intensity={10} color="#FFFFFF" />
            <ambientLight intensity={1} />
            <OrbitControls/>
            <PerspectiveCamera position={[-10, -10, -10]} rotation={[0,1,0]} >
                <Model />
            </PerspectiveCamera>
        </Canvas>
    );
};

export default CanvasModel;
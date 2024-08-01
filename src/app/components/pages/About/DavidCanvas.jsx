import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import React, {useRef} from "react";

const Model = () => {
    const modelRef= useRef()

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta ;
        }
    });

    const {scene} = useGLTF('/scene/david_head.glb');
    return <primitive ref={modelRef} object={scene} scale={[0.1, 0.1, 0.1]}/>
};


const DavidCanvas = () => {
    return (
        // <Canvas style={{maxWidth: '490px', width: '100%', height: '660px'}}>
        //     <directionalLight position={[10, 10, 10]} intensity={5} color="#FFFFFF" />
        //     <ambientLight intensity={1} />
        //     {/*<OrbitControls/>*/}
        //     <PerspectiveCamera scale={[0.27, 0.27, 0.27]} position={[0.2,-2.5,0]} rotation={[0,0.5,0]} >
        //         <Model />
        //     </PerspectiveCamera>
        // </Canvas>

        <Canvas style={{  width: '100%', maxHeight: '560px', zIndex: '1' }}>
            {/* Key Light: Main source of light, slightly off to the side */}
            <directionalLight position={[1, 2, 4]} intensity={2} color={"#FFEBBB"} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-radius={5} />

            {/* Fill Light: Softens and extends the key light */}
            <directionalLight position={[-2, 1, 2]} intensity={0.4} color={"#FFFFFF"} />

            {/* Back Light: Highlights the contours of the model */}
            <directionalLight position={[0, 2, -5]} intensity={0.3} color={"#DDEEFF"} />

            <ambientLight intensity={0.7} /> {/* Ambient light for overall illumination */}

            {/*<OrbitControls/>*/}
            <PerspectiveCamera scale={[0.27, 0.27, 0.27]} position={[0, -2.5, -1.55]} rotation={[0, 5, 0]}>
                <Model />
            </PerspectiveCamera>
        </Canvas>

        // <Canvas style={{ maxWidth: '490px', width: '100%', maxHeight: '560px', zIndex: '1' }}>
        //     <directionalLight position={[10, 10, 10]} intensity={0.7} color={"#FFFAF0"} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        //     <ambientLight intensity={0.1} color={"#202020"} />
        //     <PerspectiveCamera scale={[0.27, 0.26, 0.27]} position={[0.1, -2.5, 0]} rotation={[0, 0.5, 0]}>
        //         <Model />
        //     </PerspectiveCamera>
        // </Canvas>




    );
};

export default DavidCanvas;
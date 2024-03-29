'use client';

import { Canvas } from '@react-three/fiber';
import { FC } from 'react';
import Scene from './Scene';

const Background: FC = () => {
    return (
        <Canvas
            style={{
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                position: 'absolute',
                top: 0,
                left: 0
            }}
            camera={{ position: [0, 0, 50], fov: 75 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <Scene />
        </Canvas>
    );
};

export default Background;

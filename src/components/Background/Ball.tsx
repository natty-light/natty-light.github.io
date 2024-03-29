import colors from '@/colors';
import { Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { FC, useState } from 'react';
import * as THREE from 'three';

const Ball: FC<{ position: THREE.Vector3; velocity: THREE.Vector3 }> = ({
    position,
    velocity
}) => {
    const [pos, setPos] = useState<THREE.Vector3>(position);

    useFrame(() => {
        setPos((prev) => {
            const newPos = prev.clone().add(velocity);

            if (newPos.x > 50 || newPos.x < -50) {
                velocity.x *= -1;
            }
            if (newPos.y > 50 || newPos.y < -50) {
                velocity.y *= -1;
            }
            if (newPos.z > 50 || newPos.z < -50) {
                velocity.z *= -1;
            }

            return newPos;
        });
    });

    return (
        <Sphere args={[1, 32, 32]} position={pos}>
            <meshBasicMaterial attach="material" color={colors.accent} />
        </Sphere>
    );
};

export default Ball;

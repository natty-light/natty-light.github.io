'use client';
import { useFrame } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Ball from './Ball';
import { BallRef } from './types';

const Scene: FC = () => {
    const balls = useRef<BallRef[]>([]);

    for (let i = 0; i < 100; i++) {
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
        );

        const vel = new THREE.Vector3(
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1
        );

        balls.current[i] = {
            position: pos,
            velocity: vel
        };
    }

    useFrame(() => {
        balls.current.forEach((ball) => {
            ball.position.add(ball.velocity);

            if (ball.position.x > 50 || ball.position.x < -50) {
                ball.velocity.x *= -1;
            }
            if (ball.position.y > 50 || ball.position.y < -50) {
                ball.velocity.y *= -1;
            }
            if (ball.position.z > 50 || ball.position.z < -50) {
                ball.velocity.z *= -1;
            }
        });
    });

    return (
        <>
            {balls.current.map((ball, idx) => (
                <Ball key={`${idx}-ball`} {...ball} />
            ))}
        </>
    );
};

export default Scene;

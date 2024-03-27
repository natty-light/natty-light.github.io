'use client';

import colors from '@/colors';
import { FC, useState, useEffect } from 'react';

const Cursor: FC = () => {
    const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', moveHandler);

        return () => {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: pos.y - 16,
                left: pos.x - 16,
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: colors.accent,
                boxShadow: `0 0 10px 10px ${colors.accent}`,
                pointerEvents: 'none', // Ensures cursor does not interfere with clicks
                zIndex: 1000, // Ensure the cursor is above most components
                mixBlendMode: 'difference' // Make the cursor visible on any background
            }}
        />
    );
};

export default Cursor;

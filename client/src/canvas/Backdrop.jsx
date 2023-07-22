import React, { useRef } from 'react';

import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

function Backdrop() {

    const shadows = useRef();

    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={1000}
            rotation={[Math.Pi / 2, 0, 0]}
            position={[0, -50, -5]}
        >
            <RandomizedLight
                amount={3}
                radius={0.55}
                intensity={0.25}
                ambient={0.25}
                position={[5, 5, -10]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop
import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";


const CameraRig = ({ children }) => {
    const group = useRef();

    useFrame((state, delta) => {
        let targetPosition = [0, 3, 0];

        easing.damp3(state.camera, targetPosition, 1, delta)

        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 2, -state.pointer.x / 0.2, 0],
            0.25,
            delta
        )
    })
    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig
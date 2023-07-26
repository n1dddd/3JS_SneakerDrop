import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from 'valtio';

import state from '../store';


const CameraRig = ({ children}) => {
    const group = useRef();
    const snap = useSnapshot(state);

    useFrame((state, delta) => {
        if(snap.intro) {
            easing.damp3(state.camera.position,  [0, 0, 0.6], 0.25, delta)
        }
        else {
            easing.damp3(state.camera.position,  [-0.22, 0, 0.35], 0.25, delta)
        }
    })
    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig
import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from 'valtio';

import state from '../store';


const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);

    const isBreakpoint1280 = window.innerWidth <= 1280;
    const isBreakpoint960 = window.innerWidth <= 960;
    const isBreakpoint760 = window.innerWidth <= 760;
    const isBreakpointMobile = window.innerWidth <= 540;

    let allShoesTargetPos = [0, 0, 0.6];
    let singleShoeTargetPos = [-0.18, 0, 0.35];

    useFrame((state, delta) => {
        if (snap.intro) {
            if (isBreakpoint1280) allShoesTargetPos = [0, 0, 0.6]
            if (isBreakpoint960) allShoesTargetPos = [0, 0, 0.7]
            if (isBreakpoint760) allShoesTargetPos = [0, 0, 0.8]
            if (isBreakpointMobile) allShoesTargetPos = [0, 0, 1]
            easing.damp3(state.camera.position, allShoesTargetPos, 0.3, delta)

        }
        else {
            if (isBreakpoint1280) singleShoeTargetPos = [0, -0.2, 0.5];
            easing.damp3(state.camera.position, singleShoeTargetPos, 0.3, delta)
        }
    })

    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig
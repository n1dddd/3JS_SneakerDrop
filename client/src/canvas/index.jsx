import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center, PresentationControls } from "@react-three/drei";
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import CameraRig from './CameraRig';

import state from '../store';



const CanvasModel = () => {

    const { nodes, materials } = useGLTF('/jordan.glb')


    const shoes = [
        {
            name: "jordan1BnW",
            geometry: nodes.Object_2.geometry,
            material: materials.Jordan1_LowPoly_BnW
        },
        {
            name: "jordan1Chg",
            geometry: nodes.Object_3.geometry,
            material: materials.Jordan1_LowPoly_Chicagp
        },
        {
            name: "jordan1Obs",
            geometry: nodes.Object_4.geometry,
            material: materials.Jordan1_LowPoly_Obsidian
        },
        {
            name: "jordan1Sbb",
            geometry: nodes.Object_5.geometry,
            material: materials.Jordan1_LowPoly_SBB
        },
        {
            name: "jordan1Uni",
            geometry: nodes.Object_6.geometry,
            material: materials.Jordan1_LowPoly_UniBLue
        },
    ]

    let shoesComponentArray = shoes.map((shoeObject) => {
        return (
            <mesh onClick={() => handleFilter(shoeObject.name)} key={shoeObject.name} rotation={[-Math.PI / 2, -0.01, 0]} polar={[0, 0, Math.PI / 4]} geometry={shoeObject.geometry} material={shoeObject.material} />
        )
    })

    const [shoeComponent, setShoeComponent] = useState()


    const handleFilter = (value) => {
        const individualShoe = shoes.findIndex(object => object.name === value)
        state.intro = false;
        state.shoe = shoesComponentArray[individualShoe].key;
        setShoeComponent(shoesComponentArray[individualShoe]);
    }

    const snap = useSnapshot(state);

    return (
        <>
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 75 }}
                gl={{ preserveDrawingBuffer: true }}
                className="transition=all ease-in touch-none z-0">
                <ambientLight intensity={0.5} />
                <Environment preset="forest" />
                <PresentationControls polar={[-0.2, 0.2]} global={true}>
                    <CameraRig>
                        <Suspense fallback={null}>
                            {snap.intro ? (<group><Center>{shoesComponentArray}</Center></group>) : (<Center><group>{shoeComponent}</group></Center>)}
                        </Suspense>
                    </CameraRig>
                </PresentationControls>
            </Canvas >
        </>
    )
}

export default CanvasModel
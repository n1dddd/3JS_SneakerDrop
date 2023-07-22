import { Canvas } from '@react-three/fiber';
import { Environment, Center, PerspectiveCamera, PresentationControls } from "@react-three/drei";

import Jordan from './Jordans';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 4, 5], fov: 8 }}
            className="w-full max-w-full h-full transition=all ease-in"
        >
            <ambientLight intensity={0.5} />
            <Environment preset="dawn" />
            <CameraRig>
                <Backdrop />
                <Center>
                    <Jordan />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel
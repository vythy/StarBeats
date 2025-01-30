import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"

const SongSelectScene = () => {
    return (
    <Canvas>
        <Environment preset="forest" background/>
        <OrbitControls/>
    </Canvas>
    )
}

export default SongSelectScene;
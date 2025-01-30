import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"

const MainMenuScene = () => {
    return (
    <Canvas>
        <Environment preset="lobby" background/>
        <OrbitControls/>
    </Canvas>
    )
}

export default MainMenuScene;
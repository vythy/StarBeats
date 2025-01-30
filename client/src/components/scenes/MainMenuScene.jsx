import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei"
import { Stars } from "@react-three/drei";

const MainMenuScene = () => {
    return (
    <Canvas>
        <Stars fade speed={3}/>
    </Canvas>
    )
}

export default MainMenuScene;
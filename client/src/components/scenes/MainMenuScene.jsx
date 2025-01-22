import { Environment, OrbitControls } from "@react-three/drei"

const MainMenuScene = () => {
    return (
    <>
        <Environment preset="lobby" background/>
        <OrbitControls/>
    </>
    )
}

export default MainMenuScene;
import { Environment, OrbitControls } from "@react-three/drei"

const SongSelectScene = () => {
    return (
    <>
        <Environment preset="forest" background/>
        <OrbitControls/>
    </>
    )
}

export default SongSelectScene;
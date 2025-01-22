import React, { useRef } from "react"
import { extend } from "@react-three/fiber";
import { Environment, PerspectiveCamera, FlyControls, OrbitControls, Wireframe } from "@react-three/drei"
import { BoxGeometry, PlaneGeometry } from "three";

import useGameStore from "../../shared/gameStore";
import NotesController from "../canvas/Notes/NotesController";

extend(PlaneGeometry);

const GameScene = () => {
    const gameStart = useGameStore((state) => state.gameStart)

    return (
    <>
        <PerspectiveCamera
              makeDefault
              position={[0, 0.085, 1.37]}
              rotation={[-Math.PI*0.08, 0, 0]}
              fov={40}
              near={0.01}
              far={20}
        />
        <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
            <planeGeometry arrach="geometry" args={[0.15, 2.5, 4, 1]} />
            <Wireframe stroke={"#9955f0"}/>
        </mesh>

        {/* <mesh position={[-0.0525+0.036+0.0335+0.037, 0, 1.21]}>
            <boxGeometry args={[0.025, 0.025, 0.04]} />
            <meshStandardMaterial color="orange"/>
        </mesh> */}

        {gameStart && <NotesController/>}
        <Environment preset="night" background/>
        {/* <FlyControls/> */}
    </>
    )
}

export default GameScene;
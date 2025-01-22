import React, { useEffect, useRef } from "react";

import useGameStore from "../../../shared/gameStore";
import { useFrame } from "@react-three/fiber";
import { Instance } from "@react-three/drei";

const Note = ({ position, lane, hitTime }) => {
    const songPosition = useGameStore((state) => state.songPosition)
    const noteRef = useRef(null)

    const startZ = position
    const endZ = 1.21

    const travelDistance = endZ - startZ

    useFrame((state, delta) => {
        noteRef.current.position.z = startZ + ((songPosition/hitTime) * travelDistance)
        console.log("what")
    })

    return <Instance ref={noteRef} position={position}/>
}

export default Note;
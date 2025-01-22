import React, { useEffect, useRef } from "react";

import parseMap from "../../../helper/parseMap";
import { Instances } from "@react-three/drei";

import Note from "./Note";

const NotesController = () => {
    const mapData = parseMap()

    return (
        <Instances limit={mapData.length}>
            <boxGeometry args={[0.025, 0.025, 0.04]} />
            <meshStandardMaterial color="orange"/>
            {mapData.map((noteData) => {
                <Note position={noteData[0]} lane={noteData[1]} hitTime={noteData[2]}/>
            })}
        </Instances>
    )
}

export default NotesController;
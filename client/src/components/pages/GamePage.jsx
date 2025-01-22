import React, { useEffect } from "react"

import MusicPlayer from "../canvas/MusicPlayer";

import NavButton from "../ui/NavButton";
import useGameStore from "../../shared/gameStore";

const GamePage = () => {
  const setScreenState = useGameStore((state) => state.setScreenState)

  useEffect(() => setScreenState("Game"), []);

  return (
    <>
    <MusicPlayer/>
    <div style={{position: "absolute", top: 0, left: 0}}>
      <NavButton destination="/" prompt="back"/>
    </div>
    </>
  );
}

export default GamePage;
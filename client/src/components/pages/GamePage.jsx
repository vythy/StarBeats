import React, { useEffect } from "react"

import "./GamePage.css"
import MusicPlayer from "../canvas/MusicPlayer";
import NavButton from "../ui/NavButton";

import GameScene from "../scenes/GameScene";

const GamePage = () => {
  return (
    <>
      <GameScene/>
      <MusicPlayer/>
      <div style={{position: "absolute", top: 0, left: 0}}>
        <NavButton destination="/" prompt="back"/>
      </div>
    </>
  );
}

export default GamePage;
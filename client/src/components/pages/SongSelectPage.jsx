import React, { useEffect } from "react";

import "../../utilities.css";
import "./SongSelectPage.css"
import NavButton from "../ui/NavButton";

import SongSelectScene from "../scenes/SongSelectScene";

const SongSelectPage = () => {
  return (
    <>
      <SongSelectScene/>
      <div style={{position: "absolute", top: 0, left: 0}}>
        <NavButton destination="/" prompt="Back"/>
      </div>
      <div className="song-select-box">
        <h1>Lauv - I Like Me Better</h1>
        <img alt="oops Lauv broke" style={{width: 510, height: "auto"}}/>
        <NavButton destination="/game" prompt="Play!"/>
      </div>
    </>
  );
};

export default SongSelectPage;

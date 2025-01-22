import React, { useEffect } from "react"
import NavButton from "../ui/NavButton";

import useGameStore from "../../shared/gameStore";

const TutorialPage = () => {
  const setScreenState = useGameStore((state) => state.setScreenState)

  useEffect(() => setScreenState("Tutorial"), []);

  return (
      <div style={{position: "absolute", top: 0, left: 0}}>
        <h1>Tutorial</h1>
        <p>Use the (s, d, j, k) keys to activate the lanes from left to right. 
          Once a note reaches the transition between white and purple at the bottom, activate the corresponding lane
        </p>
        <NavButton destination="/" prompt="back"/>
      </div>
    );
}

export default TutorialPage;
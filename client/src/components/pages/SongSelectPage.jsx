import React, { useEffect, useState } from "react";

import "../../utilities.css";
import "./SongSelectPage.css"
import NavButton from "../ui/NavButton";

import SongSelectScene from "../scenes/SongSelectScene";
import SongLink from "../ui/SongLink";
import useLoginStore from "../../shared/loginStore";

import { get } from "../../utilities";

const SongSelectPage = () => {
  const userId = useLoginStore((state) => state.userId)
  const [ score, setScore ] = useState(0)

  // useEffect(() => {
  //   if (userId) {
  //     get("/api/totalscore", {userid: userId}).then((totalscore) => {
  //         setScore(totalscore.totalscore);
  //     })
  //   }
  // }, [])

  return (
    <>
      <SongSelectScene/>
      <div style={{position: "absolute", top: 0, left: 0}}>
        <NavButton destination="/" prompt="Back"/>
      </div>
      <div className="song-select-box">
        {userId && <h1>Total Score: {score} </h1>}
        <SongLink songName={"Coldplay - A Sky Full of Stars (Easy)"} songFileName={"Coldplay - A Sky Full of Stars"}/>
        <SongLink songName={"keshi - beside you (Intermediate)"} songFileName={"keshi - beside you"}/>
        <SongLink songName={"Lauv - I Like Me Better (Hard)"} songFileName={"Lauv - I like me better"}/>
        <SongLink songName={"succducc - me & u (Hard)"} songFileName={"succducc - me & u"}/>
      </div>
    </>
  );
};

export default SongSelectPage;

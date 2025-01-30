import React, { useEffect, useState } from "react";

import "../../utilities.css";
import "./SongSelectPage.css"
import NavButton from "../ui/NavButton";

import SongSelectScene from "../scenes/SongSelectScene";
import SongLink from "../ui/songLink";
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
        <SongLink songName={"succducc - me & u"} songFileName={"succducc - me & u"}/>
        <SongLink songName={"Lauv - I Like Me Better"} songFileName={"Lauv - I like me better"}/>
      </div>
    </>
  );
};

export default SongSelectPage;

import React, { useEffect, useRef } from "react";
import lauvSong from "../../songs/635189 Lauv - I like me better/audio.mp3";

import useGameStore from "../../shared/gameStore";
import { setInterval } from "core-js";

const MusicPlayer = () => {
    const songRef = useRef(null)
    const startButtonRef = useRef(null)
    const songReady = useGameStore((state) => state.songReady)
    const setSongReady = useGameStore((state) => state.setSongReady)
    const setGameStart = useGameStore((state) => state.setGameStart)
    const setSongPosition = useGameStore((state) => state.setSongPosition)

    useEffect(() => {
        const song = songRef.current

        const handleReady = () => {
            setSongReady(true)
        }

        if (song) song.addEventListener("canplaythrough", handleReady);

        return () => {
            if (song) song.removeEventListener("canplaythrough", handleReady);
        }
    }, [])

    const handleSongPlayButton = () => {
        startButtonRef.current.style.display = "none"
        songRef.current.play()
        const songUpdatesId = setInterval(() => {
            setSongPosition(songRef.current.currentTime*1000)
        }, 30)

        songRef.current.addEventListener("ended", () => {
            clearInterval(songUpdatesId)
        }, { once: true })

        setGameStart(true)
    }

    return (
        <div ref={startButtonRef} style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
            <audio ref={songRef} src={lauvSong}/>
            {songReady && <button onClick={handleSongPlayButton}>Click To Start</button>}
        </div>
    )
}

export default MusicPlayer;
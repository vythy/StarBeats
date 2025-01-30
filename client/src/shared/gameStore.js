import { create } from 'zustand'
import { useAudioPlayer } from "react-use-audio-player";

const useGameStore = create((set) => ({
    gameStart: false,
    gameReady: false,
    songPosition: 0,
    selectedSong: "Lauv - I like me better",
    setGameStart: (state) => set({ gameStart: state }),
    setGameReady: (state) => set({ gameReady: state }),
    setSongPosition: (state) => set({ songPosition: state}),
    setSelectedSong: (state) => set({ selectedSong: state}),
}))

export default useGameStore;
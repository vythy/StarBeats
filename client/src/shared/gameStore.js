import { create } from 'zustand'

const useGameStore = create((set) => ({
    screenState: "MainMenu",
    gameStart: false,
    songReady: false,
    songPosition: 0,
    setScreenState: (state) => set({ screenState: state }),
    setGameStart: (state) => set({ gameStart: state }),
    setSongReady: (state) => set({ songReady: state }),
    setSongPosition: (state) => set({ songPosition: state})
}))

export default useGameStore;
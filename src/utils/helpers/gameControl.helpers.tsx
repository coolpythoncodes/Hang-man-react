import { IInitialState } from "./store.helpers"

const checkGameOver = (store: IInitialState, setStore: (store: IInitialState) => void, TotalNumberOfGuessesAllowed: number) => {
    if (store.numberOfWrongGuesses === TotalNumberOfGuessesAllowed) {
        // @ts-ignore
        setStore((prevState) => ({ ...prevState, isGameOver: true }))
    }
}

const checkGameWon = (isGameOver: boolean, randomNigeriaState: string, store: IInitialState, setStore: (store: IInitialState) => void) => {
    if (!isGameOver) {
        if (Array.from(randomNigeriaState).every(x => store.userClickedLetter.includes(x))) {
            // @ts-ignore
            setStore((prevState) => ({ ...prevState, isGameWon: true }))
        }
    }
}

const getRandomNigeriaState = (nigeriaStates:string[]):string => {
    return nigeriaStates[Math.floor(Math.random() * nigeriaStates.length)];
}




export { checkGameOver, checkGameWon, getRandomNigeriaState }
import { nigeriaStates, } from "../nigeriaStates";

export interface IInitialState {
    numberOfWrongGuesses: number;
    userClickedLetter: string[];
    isGameOver: boolean;
    isGameWon: boolean;
    randomNigeriaState:string;
}

export interface StoreContextInterface {
    numberOfWrongGuesses: number;
    userClickedLetter: string[];
    store: IInitialState;
    isGameOver: boolean;
    isGameWon: boolean;
    randomNigeriaState:string;
    setStore: (store: IInitialState) => void
}

export const initialState = {
    numberOfWrongGuesses: 0,
    userClickedLetter: [],
    isGameOver: false,
    isGameWon: false,
    randomNigeriaState: nigeriaStates[Math.floor(Math.random() * nigeriaStates.length)]
}


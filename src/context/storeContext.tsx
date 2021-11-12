import React, { createContext, useContext, useState } from 'react'

interface IInitialState {
    numberOfWrongGuesses: number;
    userClickedLetter: string[];
    gameOver: boolean;
}

interface StoreContextInterface {
    numberOfWrongGuesses: number;
    userClickedLetter: string[];
    store: IInitialState;
    gameOver: boolean;
    setStore: (store: IInitialState) => void
}

const StoreContext = createContext<StoreContextInterface | null>(null)

type StoreContextProviderProps = {
    children: React.ReactNode
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
    const initialState = {
        numberOfWrongGuesses: 0,
        userClickedLetter: [],
        gameOver: false,
    }
    const [store, setStore] = useState<IInitialState>(initialState)
    return (
        <StoreContext.Provider value={{ store, setStore, ...store }}>
            {children}
        </StoreContext.Provider>

    )
}

const useStoreContext = () => useContext(StoreContext)!

export { StoreContextProvider, useStoreContext };
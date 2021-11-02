import React, { createContext, useState } from 'react'

interface IInitialState{
    currentLetter: string
}

interface StoreContextInterface {
    store: IInitialState
}

const StoreContext = createContext<StoreContextInterface | null>(null)

type StoreContextProviderProps = {
    children: React.ReactNode
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
    const initialState = {
        currentLetter: "",
    }
    const [store, setStore] = useState<IInitialState>(initialState)
    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider;

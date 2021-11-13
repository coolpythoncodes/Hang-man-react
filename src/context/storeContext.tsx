import React, { createContext, useContext, useState } from 'react'
import { IInitialState, initialState, StoreContextInterface } from '../utils/helpers/store.helpers'



const StoreContext = createContext<StoreContextInterface | null>(null)

type StoreContextProviderProps = {
    children: React.ReactNode
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {

    const [store, setStore] = useState<IInitialState>(initialState)
    return (
        <StoreContext.Provider value={{ store, setStore, ...store }}>
            {children}
        </StoreContext.Provider>

    )
}

const useStoreContext = () => useContext(StoreContext)!

export { StoreContextProvider, useStoreContext };
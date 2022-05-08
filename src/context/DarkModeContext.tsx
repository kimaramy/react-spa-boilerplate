import { createContext, useContext, useState } from 'react'

// const darkModeReducer = (prev: boolean, next?: boolean) => next || prev // deep copy string

const useDarkMode = () => useState(false)

export const DarkModeContext = createContext([] as unknown as ReturnType<typeof useDarkMode>)

export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeContextProvider: React.FC = ({ children }) => (
  <DarkModeContext.Provider value={useDarkMode()}>{children}</DarkModeContext.Provider>
)

import { createContext, useContext } from "react"

export const StylesContext = createContext<null | React.ReactNode>(null)
export const StylesProvider = StylesContext.Provider
export const useStyles = () => useContext(StylesContext)

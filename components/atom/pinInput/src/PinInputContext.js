import {createContext, useContext} from 'react'

const PinInputContext = createContext({})

const PinInputContextProvider = ({children, ...props}) => (
  <PinInputContext.Provider value={props}>{children}</PinInputContext.Provider>
)

const usePinInputContext = () => useContext(PinInputContext)

export {PinInputContextProvider, usePinInputContext}

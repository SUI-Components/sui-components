import {createContext, useContext} from 'react'
import PropTypes from 'prop-types'

const PinInputContext = createContext({})

const PinInputContextProvider = ({children, ...props}) => (
  <PinInputContext.Provider value={props}>{children}</PinInputContext.Provider>
)

const usePinInputContext = () => useContext(PinInputContext)

PinInputContextProvider.propTypes = {
  children: PropTypes.node
}

export {PinInputContextProvider, usePinInputContext}

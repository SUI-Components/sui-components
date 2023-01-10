import {createContext} from 'react'

import PropTypes from 'prop-types'

import {MODE} from '../settings.js'

export const ThemeContext = createContext({})

const ThemeProvider = ({children, tokens, mode, onModeChange}) => (
  <ThemeContext.Provider value={{tokens, mode, setMode: onModeChange}}>
    {children}
  </ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  children: PropTypes.string,
  tokens: PropTypes.shape({}), // TODO
  mode: PropTypes.oneOf(Object.values(MODE)),
  onModeChange: PropTypes.func
}

export default ThemeProvider

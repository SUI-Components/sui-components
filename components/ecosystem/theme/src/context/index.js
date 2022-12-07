import {createContext} from 'react'

import PropTypes from 'prop-types'

import {MODE} from '../settings.js'

export const ThemeContext = createContext({})
export const ComponentContext = createContext({})

const ThemeProvider = ({children, tokens, components, mode, onModeChange}) => (
  <ThemeContext.Provider value={{tokens, mode, setMode: onModeChange}}>
    <ComponentContext.Provider value={components}>
      {children}
    </ComponentContext.Provider>
  </ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  children: PropTypes.string,
  tokens: PropTypes.shape({}), // TODO
  components: PropTypes.shape({}), // TODO
  mode: PropTypes.oneOf(Object.values(MODE)),
  onModeChange: PropTypes.func
}

export default ThemeProvider

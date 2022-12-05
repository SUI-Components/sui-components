import {createContext, useContext} from 'react'

import PropTypes from 'prop-types'

const ThemeContext = createContext({})

const ThemeProvider = ({children, ...props}) => (
  <ThemeContext.Provider value={{...props}}>{children}</ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  children: PropTypes.string
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider

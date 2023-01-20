import {useContext} from 'react'

import {ThemeContext, ComponentContext} from '../context/index.js'

export const useTheme = () => useContext(ThemeContext).tokens

export const useComponentTheme = () => useContext(ComponentContext)

export const useMode = () => {
  const {mode, setMode} = useContext(ThemeContext)
  return Object.assign([mode, setMode], {
    mode,
    setMode
  })
}

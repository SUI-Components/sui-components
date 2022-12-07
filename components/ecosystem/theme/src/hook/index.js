import {useContext} from 'react'

import {ComponentContext, ThemeContext} from '../context/index.js'

export const useTheme = () => {
  const {tokens} = useContext(ThemeContext)
  return tokens
}

export const useMode = () => {
  const {mode, setMode} = useContext(ThemeContext)
  return Object.assign([mode, setMode], {
    mode,
    setMode
  })
}

export const useComponentTheme = () => useContext(ComponentContext)

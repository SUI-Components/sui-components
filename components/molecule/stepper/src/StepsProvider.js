import {createContext, useContext, useRef, useLayoutEffect} from 'react'

import {ALIGNMENT, DESIGN, JUSTIFY_CONTENT} from './settings.js'

const StepsContext = createContext({})

const useRefs = () => {
  const refs = useRef(new Set())

  const useContextRef = node => {
    if (node === null) return
    if (refs.current.has(node)) {
      refs.current.delete(node)
    }
    refs.current.add(node)
  }

  const unUseContextRef = ref =>
    useLayoutEffect(() => () => refs.current.delete(ref.current), [])

  return {useContextRef, unUseContextRef}
}

export const StepsProvider = ({children, ...props}) => {
  const {useContextRef, unUseContextRef} = useRefs()
  return (
    <StepsContext.Provider value={{...props, useContextRef, unUseContextRef}}>
      {children}
    </StepsContext.Provider>
  )
}

export const useStepsContext = () =>
  useContext(StepsContext) || {
    as: 'li',
    useContextRef: () => null,
    unUseContextRef: () => null,
    design: DESIGN.DEFAULT,
    alignment: ALIGNMENT.HORIZONTAL,
    justifyContent: JUSTIFY_CONTENT.LEGACY
  }

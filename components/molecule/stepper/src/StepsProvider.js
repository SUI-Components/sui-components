import {createContext, useContext, useRef, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'

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
  const useContextUnRef = ref =>
    useLayoutEffect(() => () => refs.current.delete(ref.current), [ref])

  return {useContextRef, useContextUnRef}
}

export const StepsProvider = ({children, ...props}) => {
  const {useContextRef, useContextUnRef} = useRefs()
  return (
    <StepsContext.Provider value={{...props, useContextRef, useContextUnRef}}>
      {children}
    </StepsContext.Provider>
  )
}

StepsProvider.displayName = 'StepsProvider'

StepsProvider.propTypes = {
  children: PropTypes.node
}

export const useStepsContext = () =>
  useContext(StepsContext) || {
    as: 'li',
    useContextRef: () => null,
    useContextUnRef: () => null,
    design: DESIGN.DEFAULT,
    alignment: ALIGNMENT.HORIZONTAL,
    justifyContent: JUSTIFY_CONTENT.LEGACY
  }

import {
  createContext,
  useContext,
  useRef,
  useLayoutEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'

import {ALIGNMENT, DESIGN, JUSTIFY_CONTENT} from './settings.js'

const StepsContext = createContext({})

const useRefs = () => {
  const refs = useRef(new Set())
  const [steps, setSteps] = useState(0)

  const useContextRef = node => {
    if (node === null) return
    if (refs.current.has(node)) {
      refs.current.delete(node)
    }
    refs.current.add(node)
    setSteps(refs.current.size)
  }
  const useContextUnRef = ref =>
    useLayoutEffect(
      () => () => {
        refs.current.delete(ref.current)
        setSteps(refs.current.size)
      },
      [ref, steps]
    )

  return {useContextRef, useContextUnRef, steps}
}

export const StepsProvider = ({children, ...props}) => {
  const {useContextRef, useContextUnRef, steps} = useRefs()
  return (
    <StepsContext.Provider
      value={{...props, useContextRef, useContextUnRef, steps}}
    >
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
    justifyContent: JUSTIFY_CONTENT.LEGACY,
    steps: 0
  }

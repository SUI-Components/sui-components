import {useMemo, useRef, useState} from 'react'
import isEqual from 'react-fast-compare'

import {createPopper as defaultCreatePopper} from '@popperjs/core'

import useIsomorphicLayoutEffect from '@s-ui/react-hooks/lib/useIsomorphicLayoutEffect'

const EMPTY_MODIFIERS = []

const usePopper = function usePopper(referenceElement, popperElement, options = {}) {
  const prevOptions = useRef(null)
  const optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  }

  const [state, setState] = useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  })

  const updateStateModifier = useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn({state}) {
        const elements = Object.keys(state.elements)
        setState({
          styles: Object.fromEntries(
            elements.map(function (element) {
              return [element, state.styles[element] || {}]
            })
          ),
          attributes: Object.fromEntries(
            elements.map(function (element) {
              return [element, state.attributes[element]]
            })
          )
        })
      },
      requires: ['computeStyles']
    }
  }, [])

  const popperOptions = useMemo(
    function () {
      const newOptions = {
        onFirstUpdate: optionsWithDefaults.onFirstUpdate,
        placement: optionsWithDefaults.placement,
        strategy: optionsWithDefaults.strategy,
        modifiers: [].concat(optionsWithDefaults.modifiers, [
          updateStateModifier,
          {
            name: 'applyStyles',
            enabled: false
          }
        ])
      }

      if (isEqual(prevOptions.current, newOptions)) {
        return prevOptions.current || newOptions
      } else {
        prevOptions.current = newOptions
        return newOptions
      }
    },
    [
      optionsWithDefaults.onFirstUpdate,
      optionsWithDefaults.placement,
      optionsWithDefaults.strategy,
      optionsWithDefaults.modifiers,
      updateStateModifier
    ]
  )
  const popperInstanceRef = useRef()

  useIsomorphicLayoutEffect(
    function () {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.setOptions(popperOptions)
      }
    },
    [popperOptions]
  )
  useIsomorphicLayoutEffect(
    function () {
      if (referenceElement == null || popperElement == null || popperInstanceRef.current) {
        return
      }

      const createPopper = options.createPopper || defaultCreatePopper
      const popperInstance = createPopper(referenceElement, popperElement, popperOptions)
      popperInstanceRef.current = popperInstance
      return function () {
        popperInstance.destroy()
        popperInstanceRef.current = null
      }
    },
    [referenceElement, popperElement, options.createPopper]
  )
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  }
}

export default usePopper

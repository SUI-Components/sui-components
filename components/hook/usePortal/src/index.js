/* eslint-disable react/prop-types */
import {forwardRef, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {createPortal, findDOMNode} from 'react-dom'
import {isFragment} from 'react-is'

import cx from 'classnames'
import PropTypes from 'prop-types'
import useSSR from 'use-ssr'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import useMount from '@s-ui/react-hooks/lib/useMount'

import {BASE_CLASS, DEFAULT_IS_OPEN} from './settings.js'

const usePortal = ({
  isOpen: defaultIsOpen = DEFAULT_IS_OPEN,
  target,
  onOpen,
  onClose,
  onToggle,
  hasCloseOnOutsideClick = false,
  hasCloseOnEsc = false,
  ...eventHandlers
} = {}) => {
  const {onClick} = eventHandlers
  const {isServer} = useSSR()
  const [isReady, setIsReady] = useState()
  const [isOpened, setIsOpened] = useState(defaultIsOpen)

  const triggerElement = useRef() // this is the element you are clicking/hovering/whatever, to trigger opening the portal
  const portal = useRef()

  useMount(() => {
    setIsReady(true)
  })

  const elToMountTo = useMemo(() => {
    if (isServer) return
    return (target && findDOMNode(target)) || document.body
  }, [isServer, target])

  const createCustomEvent = event => {
    if (!event) return {portal, triggerElement, event}
    const response = event || {}
    if (response.persist) response.persist()
    response.portal = portal
    response.triggerElement = triggerElement
    response.event = event
    return response
  }

  // this should handle all eventHandlers like onClick, onMouseOver, etc. passed into the config
  const customEventHandlers = Object.entries(eventHandlers).reduce((acc, [handlerName, eventHandler]) => {
    acc[handlerName] = event => {
      if (isServer) return
      eventHandler(createCustomEvent(event))
    }
    return acc
  }, {})

  const setIsOpen = useCallback(
    value => event => {
      if (isServer) return
      const customEvent = createCustomEvent(event)
      if (onOpen && value === true) setTimeout(() => onOpen(customEvent), 0)
      if (onClose && value === false) onClose(customEvent)
      setIsOpened(value)
    },
    [isServer, setIsOpened, onClose, onOpen]
  )

  const openPortal = setIsOpen(true)
  const closePortal = setIsOpen(false)

  const togglePortal = event => (isOpened ? closePortal(event) : openPortal(event))

  const handleKeydown = useCallback(
    event => (event.key === 'Escape' && hasCloseOnEsc ? closePortal(event) : undefined),
    [hasCloseOnEsc, closePortal]
  )

  const handleOutsideMouseClick = useCallback(
    event => {
      const containsTarget = target => target.current?.contains(event.target)
      if (containsTarget(portal) || event.button !== 0 || !isOpened || containsTarget(triggerElement)) {
        return
      }
      if (hasCloseOnOutsideClick) {
        closePortal(event)
      }
    },
    [closePortal, hasCloseOnOutsideClick, portal, isOpened]
  )

  const handleMouseDown = useCallback(
    event => {
      if (isServer || !(portal.current instanceof HTMLElement)) return
      const customEvent = createCustomEvent(event)
      if (portal.current.contains(customEvent.target) && onClick) onClick(customEvent)
      handleOutsideMouseClick(event)
    },
    [handleOutsideMouseClick, isServer, onClick]
  )

  // used to remove the event listeners on unmount
  const eventListeners = useRef({})

  useEffect(() => {
    if (isServer) return
    if (!(elToMountTo instanceof HTMLElement) || !(portal.current instanceof HTMLElement)) {
      return
    }

    // TODO: eventually will need to figure out a better solution for this.
    // Surely we can find a way to map onScroll/onWheel -> scroll/wheel better,
    // but for all other event handlers. For now this works.
    const eventHandlerMap = {
      onScroll: 'scroll',
      onWheel: 'wheel'
    }
    Object.entries(eventHandlerMap).forEach(([handlerName /* onScroll */, eventListenerName /* scroll */]) => {
      if (!eventHandlers[handlerName]) return
      eventListeners.current[handlerName] = event => eventHandlers[handlerName](createCustomEvent(event))
      document.addEventListener(eventListenerName, eventListeners.current[handlerName])
    })
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      // handles all special case handlers. Currently only onScroll and onWheel
      Object.entries(eventHandlerMap).forEach(([handlerName, eventListenerName]) => {
        if (!eventHandlers[handlerName]) return
        document.removeEventListener(eventListenerName, eventListeners.current[handlerName])
        delete eventListeners.current[handlerName] // eslint-disable-line react-hooks/exhaustive-deps
      })
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [isServer, handleOutsideMouseClick, handleKeydown, elToMountTo, portal, eventHandlers, handleMouseDown])

  const Portal = forwardRef(({as: As = 'div', children, isOpen: isOpenProp, className, ...props}, forwardedRef) => {
    const ref = useMergeRefs(forwardedRef, portal)
    useEffect(() => {
      if (isServer) return
      if (isOpenProp !== undefined) {
        setIsOpened(isOpenProp)
      }
    }, [isOpenProp])

    return isReady && isOpened
      ? createPortal(
          <As
            {...(!isFragment(<As />) && {
              ref,
              className: cx(BASE_CLASS, className),
              ...props
            })}
          >
            {children}
          </As>,
          target || document.body
        )
      : null
  })
  Portal.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    className: PropTypes.string
  }
  Portal.displayName = 'Portal'

  return Object.assign([Portal, openPortal, closePortal, isOpened, togglePortal, triggerElement, portal], {
    isOpen: isOpened,
    triggerRef: triggerElement,
    open: openPortal,
    close: closePortal,
    toggle: togglePortal,
    Portal,
    portalRef: portal,
    ...customEventHandlers,
    bind: {
      // used if you want to spread all html attributes onto the target element
      ref: triggerElement,
      ...customEventHandlers
    }
  })
}

export default usePortal

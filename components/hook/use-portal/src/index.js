import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  forwardRef,
  useLayoutEffect
} from 'react'
import {createPortal, findDOMNode} from 'react-dom'
import {isFragment} from 'react-is'

import cx from 'classnames'
import useSSR from 'use-ssr'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {BASE_CLASS, errorMessage1, DEFAULT_IS_OPEN} from './settings.js'

const usePortal = ({
  hasCloseOnOutsideClick = false,
  hasCloseOnEsc = false,
  target = document.body,
  onOpen,
  onClose,
  isOpen: defaultIsOpen = DEFAULT_IS_OPEN,
  onToggle,
  onClick,
  ...eventHandlers
} = {}) => {
  const {isServer, isBrowser} = useSSR()
  const [isOpened, setOpened] = useState(defaultIsOpen)

  // we use this ref because `isOpen` is stale for handleOutsideMouseClick
  const isOpen = useRef(isOpened)

  const setIsOpen = useCallback(value => {
    // workaround to not have stale `isOpened` in the handleOutsideMouseClick
    isOpen.current = value
    setOpened(value)
  }, [])

  const triggerElement = useRef() // this is the element you are clicking/hovering/whatever, to trigger opening the portal
  const portal = useRef()

  const elToMountTo = useMemo(() => {
    if (isServer) return
    return (target && findDOMNode(target)) || document.body
  }, [isServer, target])

  const createCustomEvent = event => {
    if (!event) return {portal, triggerElement, event}
    debugger
    const response = event || {}
    if (response.persist) response.persist()
    response.portal = portal
    response.triggerElement = triggerElement
    response.event = event
    return response
  }

  // this should handle all eventHandlers like onClick, onMouseOver, etc. passed into the config
  const customEventHandlers = Object.entries(eventHandlers).reduce(
    (acc, [handlerName, eventHandler]) => {
      acc[handlerName] = event => {
        if (isServer) return
        eventHandler(createCustomEvent(event))
      }
      return acc
    },
    {}
  )

  const openPortal = useCallback(
    event => {
      if (isServer) return
      const customEvent = createCustomEvent(event)
      if (onOpen && isOpen.current === false) onOpen(customEvent)
      if (isOpen.current === false) setIsOpen(true)
    },
    [isServer, setIsOpen, onOpen]
  )

  const closePortal = useCallback(
    event => {
      if (isServer) return
      const customEvent = createCustomEvent(event)
      if (onClose && isOpen.current === true) onClose(customEvent)
      if (isOpen.current === true) setIsOpen(false)
    },
    [isServer, onClose, setIsOpen]
  )

  const togglePortal = useCallback(
    event => (isOpen.current ? closePortal(event) : openPortal(event)),
    [closePortal, openPortal]
  )

  const handleKeydown = useCallback(
    event =>
      event.key === 'Escape' && hasCloseOnEsc ? closePortal(event) : undefined,
    [hasCloseOnEsc, closePortal]
  )

  const handleOutsideMouseClick = useCallback(
    event => {
      const containsTarget = target => target.current?.contains(event.target)
      if (
        containsTarget(portal) ||
        event.button !== 0 ||
        !isOpen.current ||
        containsTarget(triggerElement)
      ) {
        return
      }
      if (hasCloseOnOutsideClick) {
        closePortal(event)
      }
    },
    [isServer, closePortal, hasCloseOnOutsideClick, portal]
  )

  const handleMouseDown = useCallback(
    event => {
      if (isServer || !(portal.current instanceof HTMLElement)) return
      const customEvent = createCustomEvent(event)
      if (portal.current.contains(customEvent.target) && onClick)
        onClick(customEvent)
      handleOutsideMouseClick(event)
    },
    [handleOutsideMouseClick]
  )

  // used to remove the event listeners on unmount
  const eventListeners = useRef({})

  useEffect(() => {
    if (isServer) return
    if (
      !(elToMountTo instanceof HTMLElement) ||
      !(portal.current instanceof HTMLElement)
    )
      return

    // TODO: eventually will need to figure out a better solution for this.
    // Surely we can find a way to map onScroll/onWheel -> scroll/wheel better,
    // but for all other event handlers. For now this works.
    const eventHandlerMap = {
      onScroll: 'scroll',
      onWheel: 'wheel'
    }
    Object.entries(eventHandlerMap).forEach(
      ([handlerName /* onScroll */, eventListenerName /* scroll */]) => {
        if (!eventHandlers[handlerName]) return
        eventListeners.current[handlerName] = event =>
          eventHandlers[handlerName](createCustomEvent(event))
        document.addEventListener(
          eventListenerName,
          eventListeners.current[handlerName]
        )
      }
    )
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      // handles all special case handlers. Currently only onScroll and onWheel
      Object.entries(eventHandlerMap).forEach(
        ([handlerName, eventListenerName]) => {
          if (!eventHandlers[handlerName]) return
          document.removeEventListener(
            eventListenerName,
            eventListeners.current[handlerName]
          )
          delete eventListeners.current[handlerName]
        }
      )
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [isServer, handleOutsideMouseClick, handleKeydown, elToMountTo, portal])

  const Portal = forwardRef(
    (
      {as: As = 'div', children, isOpen: isOpenProp, className, ...props},
      forwardedRef
    ) => {
      const ref = useMergeRefs(forwardedRef, portal, () => {
        console.log(triggerElement)
        debugger
      })
      useEffect(() => {
        if (isServer) return
        if (isOpenProp !== undefined) {
          setIsOpen(isOpenProp)
        }
      }, [isOpenProp])

      return isOpen.current
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
            target
          )
        : null
    }
  )

  return Object.assign(
    [
      openPortal,
      closePortal,
      isOpen.current,
      Portal,
      togglePortal,
      triggerElement,
      portal
    ],
    {
      isOpen: isOpen.current,
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
    }
  )
}

export default usePortal

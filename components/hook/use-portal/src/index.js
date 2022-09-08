import {useState, useRef, useEffect, useCallback, useMemo} from 'react'
import {createPortal, findDOMNode} from 'react-dom'
import useSSR from 'use-ssr'

import { BASE_CLASS, errorMessage1 } from './settings.js'

const usePortal = ({
  hasCloseOnOutsideClick = false,
  hasCloseOnEsc = false,
  target,
  isOpen: defaultIsOpen = true,
  onOpen,
  onClose,
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
  const element = useMemo(() => {
    let element = null
    if (isBrowser) {
      element = document.createElement('div')
      element.classList.add(BASE_CLASS)
    }
    return element
  }, [isBrowser])
  const portal = useRef(isBrowser ? element : null)

  useEffect(() => {
    if (isBrowser && !portal.current) {
      portal.current = element
    }
  }, [isBrowser, portal])

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
    const {currentTarget} = event
    if (!triggerElement.current && currentTarget && currentTarget !== document)
      triggerElement.current = response.currentTarget
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
      // for some reason, when we don't have the event argument, there
      // is a weird race condition. Would like to see if we can remove
      // setTimeout, but for now this works
      if (triggerElement.current == null) {
        setTimeout(() => setIsOpen(true), 0)
        throw Error(errorMessage1)
      }
      if (onOpen) onOpen(customEvent)
      setIsOpen(true)
    },
    [isServer, portal, setIsOpen, triggerElement, onOpen]
  )

  const closePortal = useCallback(
    event => {
      if (isServer) return
      const customEvent = createCustomEvent(event)
      if (onClose && isOpen.current) onClose(customEvent)
      if (isOpen.current) setIsOpen(false)
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
    const node = portal.current
    elToMountTo.appendChild(portal.current)
    // handles all special case handlers. Currently only onScroll and onWheel
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
      elToMountTo.removeChild(node)
    }
  }, [isServer, handleOutsideMouseClick, handleKeydown, elToMountTo, portal])

  const Portal = useCallback(
    ({children, isOpen: isOpenProp}) => {
      useEffect(() => {
        if (isServer) return
        setIsOpen(isOpenProp)
      }, [isOpenProp])
      if (portal.current != null && isOpen.current)
        return createPortal(children, portal.current)
      return null
    },
    [portal]
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
      ref: triggerElement,
      open: openPortal,
      close: closePortal,
      togglePortal,
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

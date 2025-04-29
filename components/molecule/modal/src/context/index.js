import {createContext} from 'react'

const defaultContext = {
  isOpen: false,
  forceMount: false,
  setForceMount: () => {},
  animation: 'none',
  setAnimation: () => {},
  hasAnimation: false,
  isMounted: false,
  isRendered: false
}

const ModalContext = createContext(defaultContext)

export default ModalContext

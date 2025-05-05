import {useEffect, useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Root as RadixRoot} from '@radix-ui/react-dialog'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import ModalContext from './context/index.js'
import {useDelayedRender} from './hooks/index.js'
import {ANIMATION_ENTER_DELAY, ANIMATION_EXIT_DELAY} from './config.js'

/** Contains all the parts of a dialog. React context of contained Modal **/
const Root = ({
  defaultIsOpen = false,
  isOpen,
  onOpen,
  onOpenDelayed,
  onClose,
  onCloseDelayed,
  onOpenToggle,
  modal = true,
  children,
  ...props
}) => {
  const [open, setOpen] = useControlledState(isOpen, defaultIsOpen)
  const activeElementRef = useRef()
  const [forceMount, setForceMount] = useState(undefined)
  const [animation, setAnimation] = useState(undefined)

  /**
   * This function captures the active element when the Dialog is opened
   * and sets focus back to it when the Dialog is closed.
   */
  function handleActiveElementFocus() {
    if (isOpen && document.activeElement) {
      activeElementRef.current = document.activeElement
    }

    if (!isOpen) {
      setTimeout(() => {
        if (!(activeElementRef.current instanceof HTMLElement)) return
        activeElementRef.current.focus()
      }, 0)
    }
  }

  useEffect(handleActiveElementFocus, [open])

  const {isMounted, isRendered} = useDelayedRender(open, {
    enterDelay: ANIMATION_ENTER_DELAY,
    exitDelay: ANIMATION_EXIT_DELAY,
    onEnterDelayed: onOpenDelayed,
    onExitDelayed: onCloseDelayed
  })

  const onOpenChange = open => {
    const dialogEvent = new Event(open ? 'onOpenDialog' : 'onCloseDialog')
    setOpen(open)
    open
      ? typeof onOpen === 'function' && onOpen(dialogEvent, {isOpen: open})
      : typeof onClose === 'function' && onClose(dialogEvent, {isOpen: open})
    typeof onOpenToggle === 'function' && onOpenToggle(dialogEvent, {isOpen: open})
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen: open,
        forceMount,
        setForceMount,
        animation,
        hasAnimation: animation !== 'none',
        setAnimation,
        isMounted,
        isRendered
      }}
    >
      <RadixRoot defaultOpen={defaultIsOpen} open={open} onOpenChange={onOpenChange} modal={modal} {...props}>
        {children}
      </RadixRoot>
    </ModalContext.Provider>
  )
}

Root.displayName = 'MoleculeModal.Root'

Root.propTypes = {
  /** The open state of the modal when it is initially rendered. Use when you do not need to control its open state. */
  defaultIsOpen: PropTypes.bool,

  /** The controlled open state of the modal. Must be used in conjunction with onOpenChange. **/
  isOpen: PropTypes.bool,

  /** Event handler called when the open state of the modal changes. **/
  onOpenToggle: PropTypes.func,

  /** Event handler called when the open the modal gets opened. **/
  onOpen: PropTypes.func,

  /** Event handler called when the open modal animation ended. **/
  onOpenDelayed: PropTypes.func,

  /** Event handler called when the open the modal gets closed. **/
  onClose: PropTypes.func,

  /** Event handler called when the close modal animation ended. **/
  onCloseDelayed: PropTypes.func,

  /** The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. **/
  modal: PropTypes.bool,

  /** The children of the modal. **/
  children: PropTypes.node
}

export default Root

import {useEffect, useRef} from 'react'

import PropTypes from 'prop-types'
import {Root as RadixRoot} from '@radix-ui/react-dialog'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

/** Contains all the parts of a dialog. React context of contained Modal **/
const Root = ({defaultOpen, open, onOpen, onClose, onOpenToggle, modal = true, children, ...props}) => {
  const [isOpen] = useControlledState(open, defaultOpen)
  const activeElementRef = useRef()

  /**
   * This function captures the active element when the Dialog is opened
   * and sets focus back to it when the Dialog is closed.
   */
  function handleActiveElementFocus() {
    if (open && document.activeElement) {
      activeElementRef.current = document.activeElement
    }

    if (!open) {
      setTimeout(() => {
        if (!(activeElementRef.current instanceof HTMLElement)) return
        activeElementRef.current.focus()
      }, 0)
    }
  }

  useEffect(handleActiveElementFocus, [isOpen])

  const onOpenChange = open => {
    const dialogEvent = new Event(open ? 'onOpenDialog' : 'onCloseDialog')
    open
      ? typeof onOpen === 'function' && onOpen(dialogEvent, {open})
      : typeof onClose === 'function' && onClose(dialogEvent, {open})
    typeof onOpenToggle === 'function' && onOpenToggle(dialogEvent, {open})
  }

  return (
    <RadixRoot defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal} {...props}>
      {children}
    </RadixRoot>
  )
}

Root.displayName = 'MoleculeModal.Root'

Root.propTypes = {
  /** The open state of the modal when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen: PropTypes.bool,

  /** The controlled open state of the modal. Must be used in conjunction with onOpenChange. **/
  open: PropTypes.bool,

  /** Event handler called when the open state of the modal changes. **/
  onOpenToggle: PropTypes.func,

  /** Event handler called when the open the modal gets opened. **/
  onOpen: PropTypes.func,

  /** Event handler called when the open the modal gets closed. **/
  onClose: PropTypes.func,

  /** The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. **/
  modal: PropTypes.bool,

  /** The children of the modal. **/
  children: PropTypes.node
}

export default Root

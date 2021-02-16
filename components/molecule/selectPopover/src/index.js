import {useState, useEffect, useRef, useCallback} from 'react'
import Button from '@s-ui/react-atom-button'
import cx from 'classnames'
import PropTypes from 'prop-types'
import {SIZES, PLACEMENTS} from './config'

const BASE_CLASS = 'sui-MoleculeSelectPopover'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function MoleculeSelectPopover({
  acceptButtonText,
  cancelButtonText,
  children,
  hideActions,
  iconArrowDown: IconArrowDown,
  isSelected = false,
  onAccept = () => {},
  onCancel = () => {},
  onClose = () => {},
  onOpen = () => {},
  placement = PLACEMENTS.RIGHT,
  selectText,
  size = 'm',
  title
}) {
  const [isOpen, setIsOpen] = useState(false)
  const previousIsOpen = usePrevious(isOpen)

  useEffect(() => {
    /**
     * Only run open events:
     *  - After first render
     *  - When isOpen actually changes
     **/
    if (typeof previousIsOpen === 'undefined' || isOpen === previousIsOpen) {
      return
    }
    const openEvent = isOpen ? onOpen : onClose
    openEvent()
  }, [isOpen, onClose, onOpen, previousIsOpen])

  const selectRef = useRef()
  const popoverRef = useRef()

  const selectClassName = cx(
    `${BASE_CLASS}-select`,
    `${BASE_CLASS}-select--${size}`,
    {
      'is-open': isOpen,
      'is-selected': isSelected
    }
  )

  const popoverClassName = cx(
    `${BASE_CLASS}-popover`,
    `${BASE_CLASS}-popover--${placement}`
  )

  const handleOnAccept = () => {
    setIsOpen(false)
    onAccept()
  }

  const handleOnCancel = useCallback(() => {
    setIsOpen(false)
    onCancel()
  }, [onCancel])

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        isOpen &&
        !popoverRef.current.contains(e.target) &&
        !selectRef.current.contains(e.target)
      ) {
        handleOnCancel()
      }
    }
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleOnCancel, isOpen])

  const handleOpenToggle = () => {
    if (isOpen) {
      setIsOpen(false)
      handleOnCancel()
      return
    }
    setIsOpen(true)
  }

  return (
    <div className={BASE_CLASS} title={title}>
      <div
        ref={selectRef}
        className={selectClassName}
        onClick={handleOpenToggle}
      >
        <span className={`${BASE_CLASS}-selectText`}>{selectText}</span>
        <div className={`${BASE_CLASS}-selectIcon`}>
          <IconArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className={popoverClassName} ref={popoverRef}>
          <div className={`${BASE_CLASS}-popoverContent`}>{children}</div>
          {!hideActions && (
            <div className={`${BASE_CLASS}-popoverActionBar`}>
              <Button onClick={handleOnCancel} design="flat">
                {cancelButtonText}
              </Button>
              <Button onClick={handleOnAccept}>{acceptButtonText}</Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

MoleculeSelectPopover.displayName = 'MoleculeSelectPopover'
MoleculeSelectPopover.propTypes = {
  acceptButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hideActions: PropTypes.bool,
  iconArrowDown: PropTypes.elementType.isRequired,
  isSelected: PropTypes.bool,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  placement: PropTypes.string,
  selectText: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string
}

export default MoleculeSelectPopover
export {SIZES as selectPopoverSizes, PLACEMENTS as selectPopoverPlacements}

import React, {useState, useEffect, useRef, useCallback} from 'react'
import Button from '@s-ui/react-atom-button'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-MoleculeSelectPopover'

const SIZES = {
  MEDIUM: 'm',
  SMALL: 's',
  XSMALL: 'xs'
}

function MoleculeSelectPopover({
  acceptButtonText,
  cancelButtonText,
  children,
  iconArrowDown: IconArrowDown,
  isSelected = false,
  onAccept = () => {},
  onCancel = () => {},
  selectText,
  size = 'm',
  title
}) {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <div className={BASE_CLASS} title={title}>
      <div
        ref={selectRef}
        className={selectClassName}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${BASE_CLASS}-selectText`}>{selectText}</span>
        <div className={`${BASE_CLASS}-selectIcon`}>
          <IconArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className={`${BASE_CLASS}-popover`} ref={popoverRef}>
          <div className={`${BASE_CLASS}-popoverContent`}>{children}</div>
          <div className={`${BASE_CLASS}-popoverActionBar`}>
            <Button onClick={handleOnCancel} design="flat">
              {cancelButtonText}
            </Button>
            <Button onClick={handleOnAccept}>{acceptButtonText}</Button>
          </div>
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
  iconArrowDown: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  selectText: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string
}

export default MoleculeSelectPopover
export {SIZES as selectPopoverSizes}

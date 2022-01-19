import {useState, useEffect, useRef, useCallback, cloneElement} from 'react'
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
  acceptButtonOptions,
  cancelButtonText,
  cancelButtonOptions,
  customButtonText,
  customButtonOptions,
  children,
  fullWidth,
  hideActions,
  iconArrowDown: IconArrowDown,
  isDisabled = false,
  isSelected = false,
  onAccept = () => {},
  onCancel = () => {},
  onCustomAction = () => {},
  onClose = () => {},
  onOpen = () => {},
  placement = PLACEMENTS.RIGHT,
  renderContentWrapper: renderContentWrapperProp,
  renderSelect: renderSelectProp,
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
  const contentWrapperRef = useRef()

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

  const handleOnCustomAction = () => {
    onCustomAction()
  }

  const handleOnCancel = useCallback(() => {
    setIsOpen(false)
    onCancel()
  }, [onCancel])

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        isOpen &&
        contentWrapperRef.current &&
        !contentWrapperRef.current.contains(e.target) &&
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

  const renderActions = () => (
    <>
      {customButtonText ? (
        <Button onClick={handleOnCustomAction} {...customButtonOptions}>
          {customButtonText}
        </Button>
      ) : null}
      {cancelButtonText ? (
        <Button onClick={handleOnCancel} design="flat" {...cancelButtonOptions}>
          {cancelButtonText}
        </Button>
      ) : null}
      {acceptButtonText ? (
        <Button onClick={handleOnAccept} {...acceptButtonOptions}>
          {acceptButtonText}
        </Button>
      ) : null}
    </>
  )

  const renderProp = (render, props) => {
    return typeof render === 'function'
      ? render(props)
      : cloneElement(render, {
          ...render.props,
          ...props
        })
  }

  const renderSelect = () => {
    const newSelectProps = {
      ref: selectRef,
      className: selectClassName,
      onClick: handleOpenToggle
    }

    if (renderSelectProp) {
      return renderProp(renderSelectProp, {...newSelectProps, isOpen})
    }

    return (
      <div className={selectClassName} {...newSelectProps}>
        <span className={`${BASE_CLASS}-selectText`}>{selectText}</span>
        <div className={`${BASE_CLASS}-selectIcon`}>
          <IconArrowDown />
        </div>
      </div>
    )
  }

  const renderContentWrapper = () => {
    const pieces = {
      actions: renderActions(),
      content: children,
      contentWrapperRef, // required for `handleClickOutside` to work
      isOpen,
      setIsOpen
    }

    /**
     * Custom content wrapper from render prop
     */
    if (renderContentWrapperProp) {
      return renderProp(renderContentWrapperProp, pieces)
    }

    /**
     * Default content wrapper as a popover
     */
    return (
      pieces.isOpen && (
        <div className={popoverClassName} ref={contentWrapperRef}>
          <div className={`${BASE_CLASS}-popoverContent`}>{pieces.content}</div>
          {!hideActions && (
            <div className={`${BASE_CLASS}-popoverActionBar`}>
              {pieces.actions}
            </div>
          )}
        </div>
      )
    )
  }

  const classNames = cx(
    BASE_CLASS,
    fullWidth && `${BASE_CLASS}--fullWidth`,
    isDisabled && 'is-disabled',
    renderContentWrapperProp && `${BASE_CLASS}--hasCustomWrapper`
  )

  return (
    <div className={classNames} title={title}>
      {renderSelect()}
      {renderContentWrapper()}
    </div>
  )
}

MoleculeSelectPopover.displayName = 'MoleculeSelectPopover'
MoleculeSelectPopover.propTypes = {
  acceptButtonText: PropTypes.string,
  acceptButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    negative: PropTypes.bool
  }),
  cancelButtonText: PropTypes.string,
  cancelButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    negative: PropTypes.bool
  }),
  customButtonText: PropTypes.string,
  customButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    negative: PropTypes.bool
  }),
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  hideActions: PropTypes.bool,
  iconArrowDown: PropTypes.elementType.isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  onCustomAction: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  placement: PropTypes.string,
  renderContentWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  renderSelect: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  selectText: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string
}

export default MoleculeSelectPopover
export {SIZES as selectPopoverSizes, PLACEMENTS as selectPopoverPlacements}

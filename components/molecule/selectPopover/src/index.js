import {cloneElement, useCallback, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Button, {atomButtonDesigns} from '@s-ui/react-atom-button'

import {
  BASE_CLASS,
  getPlacement,
  OVERLAY_TYPES,
  PLACEMENTS,
  SIZES
} from './config.js'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const popoverBaseClass = `${BASE_CLASS}-popover`

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
  onCancelButtonClick = () => {},
  onClose = () => {},
  onCustomAction = () => {},
  onOpen = () => {},
  overlayType = OVERLAY_TYPES.NONE,
  placement,
  renderContentWrapper: renderContentWrapperProp,
  renderSelect: renderSelectProp,
  selectText,
  size = 'm',
  title
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [popoverClassName, setPopoverClassName] = useState(
    cx(`${popoverBaseClass}`, `${popoverBaseClass}--${getPlacement(placement)}`)
  )

  const previousIsOpen = usePrevious(isOpen)
  const selectRef = useRef()
  const contentWrapperRef = useRef()

  const hasOverlay = overlayType !== OVERLAY_TYPES.NONE

  const getPopoverClassName = () => {
    const {left, right} =
      contentWrapperRef.current?.getBoundingClientRect() || {}
    const outFromTheLeftSide = left < 0
    const outFromTheRightSide =
      right > (window.innerWidth || document.documentElement.clientWidth)

    if (outFromTheRightSide) {
      return cx(`${popoverBaseClass}`, `${popoverBaseClass}--left`)
    } else if (outFromTheLeftSide) {
      return cx(`${popoverBaseClass}`, `${popoverBaseClass}--right`)
    }

    return popoverClassName
  }

  useEffect(() => {
    /**
     * Only run open events:
     *  - After first render
     *  - When isOpen actually changes
     **/
    if (typeof previousIsOpen === 'undefined' || isOpen === previousIsOpen) {
      return
    }

    if (
      isOpen &&
      [PLACEMENTS.AUTO_END, PLACEMENTS.AUTO_START].includes(placement)
    ) {
      setPopoverClassName(getPopoverClassName())
    }

    const openEvent = isOpen ? onOpen : onClose
    openEvent()
  }, [isOpen, onClose, onOpen, previousIsOpen, getPopoverClassName])

  useEffect(() => {
    setPopoverClassName(
      cx(
        `${popoverBaseClass}`,
        `${popoverBaseClass}--${getPlacement(placement)}`
      )
    )
  }, [placement])

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

  const handleOnCustomAction = () => {
    onCustomAction()
  }

  const handleCancelButtonClick = () => {
    onCancelButtonClick()
    handleOnCancel()
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
        <Button
          onClick={handleCancelButtonClick}
          design={atomButtonDesigns.FLAT}
          {...cancelButtonOptions}
        >
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
      const newRenderSelectProps = {
        ...newSelectProps,
        isOpen,
        onClick: renderSelectProp.props?.onClick
          ? ev => {
              renderSelectProp.props.onClick(ev)
              handleOpenToggle(ev)
            }
          : handleOpenToggle
      }

      return renderProp(renderSelectProp, newRenderSelectProps)
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
    renderContentWrapperProp && `${BASE_CLASS}--hasCustomWrapper`,
    hasOverlay && `${BASE_CLASS}-overlay--${overlayType}`,
    isOpen && 'is-open'
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
  onCancelButtonClick: PropTypes.func,
  onClose: PropTypes.func,
  onCustomAction: PropTypes.func,
  onOpen: PropTypes.func,
  overlayType: PropTypes.oneOf(Object.keys(OVERLAY_TYPES)),
  placement: PropTypes.oneOf([
    PLACEMENTS.AUTO_END,
    PLACEMENTS.AUTO_START,
    PLACEMENTS.LEFT,
    PLACEMENTS.RIGHT
  ]),
  renderContentWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  renderSelect: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  selectText: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string
}

export default MoleculeSelectPopover
export {
  OVERLAY_TYPES as selectPopoverOverlayTypes,
  PLACEMENTS as selectPopoverPlacements,
  SIZES as selectPopoverSizes
}

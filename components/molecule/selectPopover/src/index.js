import {cloneElement, Fragment, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomButton, {atomButtonDesigns} from '@s-ui/react-atom-button'
import usePortal from '@s-ui/react-hook-use-portal'

import SelectIcon from './components/SelectIcon.js'
import {BASE_CLASS, getContentId, getLabelId, getPlacement, OVERLAY_TYPES, PLACEMENTS, SHAPES, SIZES} from './config.js'
import RenderActions from './RenderActions.js'
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const popoverBaseClass = `${BASE_CLASS}-popover`

const MoleculeSelectPopover = ({
  acceptButtonText,
  acceptButtonOptions,
  cancelButtonText,
  cancelButtonOptions,
  customButtonText,
  customButtonOptions,
  children,
  forceClosePopover = false,
  fullWidth,
  hideActions,
  iconArrowDown: IconArrowDown,
  id,
  isDisabled = false,
  isSelected = false,
  onAccept = () => {},
  onCancel = () => {},
  onCancelButtonClick = () => {},
  onClose = () => {},
  onCustomAction = () => {},
  onOpen = () => {},
  overlayContentRef = {},
  overlayType = OVERLAY_TYPES.NONE,
  placement,
  removeButtonOptions = null,
  renderContentWrapper: renderContentWrapperProp,
  renderSelect: renderSelectProp,
  renderActions: renderActionsProp,
  selectText,
  shape = SHAPES.CIRCULAR,
  size = 'm',
  title
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [popoverClassName, setPopoverClassName] = useState(
    cx(`${popoverBaseClass}`, `${popoverBaseClass}--${getPlacement(placement)}`)
  )

  const previousIsOpen = usePrevious(isOpen)
  const selectRef = useRef()
  const contentWrapperRef = useRef()
  const {Portal} = usePortal({target: overlayContentRef.current})

  const hasOverlay = Boolean(overlayContentRef.current) && overlayType !== OVERLAY_TYPES.NONE

  const {contentId, labelId} = useMemo(() => ({contentId: getContentId(id), labelId: getLabelId(id)}), [id])

  useEffect(() => {
    forceClosePopover && setIsOpen(false)
  }, [forceClosePopover])

  useEffect(() => {
    /**
     * Only run open events:
     *  - After first render
     *  - When isOpen actually changes
     *  - When placement changes
     **/
    if (typeof previousIsOpen === 'undefined' || isOpen === previousIsOpen) {
      return
    }

    const getPopoverClassName = () => {
      if (isOpen && [PLACEMENTS.AUTO_END, PLACEMENTS.AUTO_START].includes(placement)) {
        const {left, right} = contentWrapperRef.current?.getBoundingClientRect() || {}
        const outFromTheLeftSide = left < 0
        const outFromTheRightSide = right > (window.innerWidth || document.documentElement.clientWidth)

        if (outFromTheRightSide) {
          return cx(`${popoverBaseClass}`, `${popoverBaseClass}--left`)
        } else if (outFromTheLeftSide) {
          return cx(`${popoverBaseClass}`, `${popoverBaseClass}--right`)
        }
      }

      return cx(`${popoverBaseClass}`, `${popoverBaseClass}--${getPlacement(placement)}`)
    }

    setPopoverClassName(getPopoverClassName())
    const openEvent = isOpen ? onOpen : onClose
    openEvent()
  }, [isOpen, onClose, onOpen, previousIsOpen, placement])

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
      className: cx(
        `${BASE_CLASS}-select`,
        shape && `${BASE_CLASS}-select--${shape}`,
        `${BASE_CLASS}-select--${size}`,
        {
          [`${BASE_CLASS}-select--withRemoveOption`]: removeButtonOptions,
          'is-open': isOpen,
          'is-selected': isSelected
        }
      ),
      onClick: handleOpenToggle,
      ...(id && {id})
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
      <AtomButton
        aria-controls={contentId}
        aria-expanded={isOpen}
        aria-haspopup
        aria-labelledby={labelId}
        ref={selectRef}
        shape={shape}
        size={size}
        design={atomButtonDesigns.OUTLINE}
        onClick={handleOpenToggle}
        selected={isSelected}
      >
        <span className={`${BASE_CLASS}-selectText`} id={labelId}>
          {selectText}
        </span>
        <div className={`${BASE_CLASS}-selectIcon`}>
          <SelectIcon iconArrowDown={IconArrowDown} removeButtonOptions={removeButtonOptions} />
        </div>
      </AtomButton>
    )
  }

  const renderContentWrapper = () => {
    const pieces = {
      actions: (
        <RenderActions
          onCustomAction={handleOnCustomAction}
          customButtonText={customButtonText}
          customButtonOptions={customButtonOptions}
          onCancel={handleCancelButtonClick}
          cancelButtonText={cancelButtonText}
          cancelButtonOptions={cancelButtonOptions}
          onAccept={handleOnAccept}
          acceptButtonOptions={acceptButtonOptions}
          acceptButtonText={acceptButtonText}
        >
          {renderActionsProp}
        </RenderActions>
      ),
      content: children,
      contentWrapperRef, // required for `handleClickOutside` to work
      id: contentId,
      isOpen,
      setIsOpen,
      id: contentId
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
        <div className={popoverClassName} id={contentId} ref={contentWrapperRef}>
          <div className={`${BASE_CLASS}-popoverContent`}>{pieces.content}</div>
          {!hideActions && pieces.actions}
        </div>
      )
    )
  }

  return (
    <>
      <div
        className={cx(
          BASE_CLASS,
          fullWidth && `${BASE_CLASS}--fullWidth`,
          isDisabled && 'is-disabled',
          renderContentWrapperProp && `${BASE_CLASS}--hasCustomWrapper`
        )}
        title={title}
      >
        {renderSelect()}
        {renderContentWrapper()}
      </div>
      {hasOverlay && (
        <Portal as={Fragment} isOpen={isOpen}>
          <div className={cx(`${BASE_CLASS}-overlay`, `${BASE_CLASS}-overlay--${overlayType}`)} />
        </Portal>
      )}
    </>
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
  forceClosePopover: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hideActions: PropTypes.bool,
  iconArrowDown: PropTypes.elementType.isRequired,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  onCancelButtonClick: PropTypes.func,
  onClose: PropTypes.func,
  onCustomAction: PropTypes.func,
  onOpen: PropTypes.func,
  overlayContentRef: PropTypes.object,
  overlayType: PropTypes.oneOf(Object.values(OVERLAY_TYPES)),
  placement: PropTypes.oneOf([PLACEMENTS.AUTO_END, PLACEMENTS.AUTO_START, PLACEMENTS.LEFT, PLACEMENTS.RIGHT]),
  removeButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    isShowng: PropTypes.bool,
    negative: PropTypes.bool,
    onClick: PropTypes.func,
    rightIcon: PropTypes.elementType.isRequired,
    shape: PropTypes.string,
    size: PropTypes.string
  }),
  renderContentWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  renderSelect: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  renderActions: PropTypes.node,
  selectText: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(Object.values(SHAPES)),
  size: PropTypes.string,
  title: PropTypes.string
}

export default MoleculeSelectPopover
export {
  OVERLAY_TYPES as selectPopoverOverlayTypes,
  PLACEMENTS as selectPopoverPlacements,
  SHAPES as selectPopoverShapes,
  SIZES as selectPopoverSizes,
  RenderActions
}

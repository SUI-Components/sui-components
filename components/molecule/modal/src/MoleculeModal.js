import {Children, cloneElement, forwardRef, useCallback, useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {Close} from './Close/index.js'
import MoleculeModalContent from './Content/index.js'
import {HeaderRender} from './HeaderRender/index.js'
import {MODAL_SIZES, SUPPORTED_KEYS, toggleWindowScroll} from './config.js'
import {suitClass} from './helpers.js'

const MoleculeModal = forwardRef(
  (
    {
      children,
      closeOnEscKeyDown = false,
      closeOnOutsideClick = false,
      isPageScrollable = true,
      enableContentScroll = false,
      fitContent = false,
      floatingIconClose = false,
      size,
      header,
      iconClose = false,
      isClosing,
      isOpen = false,
      onAnimationEnd,
      onClose = () => {},
      portalContainerId = 'modal-react-portal',
      usePortal = true,
      withoutIndentation = false,
      isContentless,
      withAnimation = true,
      isOverflowVisible = false
    },
    forwardedRef
  ) => {
    const wrapperRef = useRef()
    const ref = useMergeRefs(wrapperRef, forwardedRef)

    const blockScrollPage = () => (document.body.style.overflow = 'hidden')
    const enableScrollPage = () => (document.body.style.overflow = 'auto')

    const [isClientReady, setIsClientReady] = useState(false)
    const shoudlCloseOnOutsideClick = useRef()

    const getContainer = () => {
      let containerDOMEl = document.getElementById(portalContainerId)
      if (!containerDOMEl) {
        containerDOMEl = document.createElement('div')
        containerDOMEl.id = portalContainerId
        document.body.appendChild(containerDOMEl)
      }
      return containerDOMEl
    }

    const closeModal = useCallback(
      ev => {
        ev && ev.stopPropagation()
        toggleWindowScroll(false)
        if (!isPageScrollable) enableScrollPage()
        onClose()
      },
      [isPageScrollable, onClose]
    )

    const onKeyDown = useCallback(
      ev => {
        if (isOpen === false || closeOnEscKeyDown === false) return
        if (SUPPORTED_KEYS.includes(ev.key)) {
          closeModal(ev)
          ev.preventDefault()
        }
      },
      [isOpen, closeOnEscKeyDown, closeModal]
    )

    useEffect(() => {
      shoudlCloseOnOutsideClick.current = false

      if (isOpen && !isPageScrollable) blockScrollPage()
      else if (!isOpen && !isPageScrollable) enableScrollPage()

      if (!isPageScrollable) return () => enableScrollPage()
    }, [isOpen, isPageScrollable])

    useEffect(() => {
      if (usePortal) setIsClientReady(true)
    }, [usePortal])

    useEffect(() => {
      document.removeEventListener('keydown', onKeyDown)
      document.addEventListener('keydown', onKeyDown)

      return () => {
        toggleWindowScroll(false)
        document.removeEventListener('keydown', onKeyDown)
      }
    }, [onKeyDown])

    const handleOutsideMouseDown = ev => {
      if (closeOnOutsideClick && ev.target === wrapperRef.current) {
        shoudlCloseOnOutsideClick.current = true
      } else {
        shoudlCloseOnOutsideClick.current = false
      }
    }

    const handleOutsideMouseUp = ev => {
      if (closeOnOutsideClick && shoudlCloseOnOutsideClick.current && ev.target === wrapperRef.current) {
        closeModal(ev)
      }
    }

    const renderChildren = () =>
      Children.toArray(children).map(child =>
        cloneElement(child, {
          onClose: closeModal
        })
      )

    const renderModal = () => {
      const wrapperClassName = cx(suitClass(), {
        'is-static': !withAnimation,
        'is-MoleculeModal-open': isOpen,
        [suitClass({element: 'out'})]: isClosing && !isOpen
      })

      const dialogClassName = cx(suitClass({element: 'dialog'}), {
        [suitClass({element: 'dialog--out'})]: isClosing && !isOpen,
        [suitClass({element: 'dialog--fit'})]: fitContent,
        [suitClass({element: `dialog--size-${size}`})]: !!size,
        [suitClass({element: 'dialog--visible-overflow'})]: isOverflowVisible
      })

      return (
        <div
          className={wrapperClassName}
          ref={ref}
          onAnimationEnd={onAnimationEnd}
          onMouseDown={handleOutsideMouseDown}
          onMouseUp={handleOutsideMouseUp}
          draggable="false"
        >
          <div className={dialogClassName}>
            {(iconClose || header) && (
              <HeaderRender
                close={iconClose && <Close icon={iconClose} onClick={closeModal} floating={floatingIconClose} />}
                header={header}
                floatingIconClose={floatingIconClose}
              />
            )}
            {isContentless ? (
              renderChildren()
            ) : (
              <MoleculeModalContent
                enableContentScroll={enableContentScroll}
                withoutIndentation={withoutIndentation}
                isOverflowVisible={isOverflowVisible}
              >
                {renderChildren()}
              </MoleculeModalContent>
            )}
          </div>
        </div>
      )
    }

    const modalElement = renderModal()

    if (usePortal) {
      return isClientReady ? createPortal(modalElement, getContainer()) : null
    }

    // temporary fix to avoid executing this on SSR
    // we should move to functions this and create as a function
    if (isClientReady) {
      toggleWindowScroll(isOpen)
    }

    return modalElement
  }
)

MoleculeModal.propTypes = {
  /**
   * true if you want close the modal by clicking outside the modal itself, otherwise, false
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * true if you want to let the ESC key to close the modal, otherwise, false
   */
  closeOnEscKeyDown: PropTypes.bool,
  /**
   * The content of the modal itself
   */
  children: PropTypes.node,
  /**
   * false to prevent scroll body
   */
  isPageScrollable: PropTypes.node,
  /**
   * true to prevent scroll in content
   */
  enableContentScroll: PropTypes.bool,
  /**
   * true if you want a modal that fit contents in mobile devices, otherwise, false
   */
  fitContent: PropTypes.bool,
  /**
   * Max width of the modal to be used
   */
  size: PropTypes.oneOf(Object.values(MODAL_SIZES)),
  /**
   * true if you want a modal without content indentation
   */
  withoutIndentation: PropTypes.bool,
  /**
   * content of the modal's header
   */
  header: PropTypes.node,
  /**
   * customitzable close icon
   */
  iconClose: PropTypes.node,
  /**
   * If is true, iconClose will be floating over layers
   */
  floatingIconClose: PropTypes.bool,
  /**
   * prop to mark if the modal is currently open or not
   */
  isOpen: PropTypes.bool,
  /**
   * onClose function handler
   */
  onClose: PropTypes.func,
  /**
   * A boolean to identify if the modal is being closed or not used by the HoC WithAnimation
   */
  isClosing: PropTypes.bool,
  /**
   * The callback function to be called when the animation ends, defined by the HoC WithAnimation
   */
  onAnimationEnd: PropTypes.func,
  /**
   * Defines whether children will be wrapped with content or not
   */
  isContentless: PropTypes.bool,
  /**
   * Container id element to be used to render the portal. If not available, it will be created for you.
   */
  portalContainerId: PropTypes.string,
  /**
   * Determines if modal will be rendered using a React Portal.
   */
  usePortal: PropTypes.bool,
  /**
   * Define the modal hash, for url update / read
   */
  hash: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The function that manages when the modal open. It'll be executed for open
   * MoleculeModalWithURLState on pop state changes
   */
  openModalTrigger: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /**
   * Determines if modal has open/close animation
   */
  withAnimation: PropTypes.bool,
  /**
   * Determines if the modal overflow is visible or not
   */
  isOverflowVisible: PropTypes.bool
}

MoleculeModal.displayName = 'MoleculeModal'

export default MoleculeModal

import PropTypes from 'prop-types'
import React, {useRef, useState, useEffect, useCallback} from 'react'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import {SUPPORTED_KEYS} from './config'
import {suitClass} from './helpers'
import {Close} from './Close'
import {HeaderRender} from './HeaderRender'
import WithAnimation from './HoC/WithAnimation'
import WithUrlState from './HoC/WithUrlState'

const toggleWindowScroll = disableScroll => {
  window.document.body.classList.toggle('is-MoleculeModal-open', disableScroll)
}

const MoleculeModal = ({
  portalContainerId,
  header,
  children,
  iconClose,
  isOpen,
  fitWindow,
  fitContent,
  isClosing,
  onAnimationEnd,
  usePortal,
  closeOnOutsideClick,
  closeOnEscKeyDown,
  onClose,
  enableContentScroll
}) => {
  const contentRef = useRef()
  const wrapperRef = useRef()

  const [isClientReady, setIsClientReady] = useState(false)

  const getContainer = () => {
    let containerDOMEl = document.getElementById(portalContainerId)
    if (!containerDOMEl) {
      containerDOMEl = document.createElement('div')
      containerDOMEl.id = portalContainerId
      document.body.appendChild(containerDOMEl)
    }
    return containerDOMEl
  }

  const closeModal = useCallback(() => {
    toggleWindowScroll(false)
    onClose()
  }, [onClose])

  const onKeyDown = useCallback(
    ev => {
      if (isOpen === false || closeOnEscKeyDown === false) return
      if (SUPPORTED_KEYS.includes(ev.key)) {
        closeModal()
        ev.preventDefault()
      }
    },
    [isOpen, closeOnEscKeyDown, closeModal]
  )

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

  const preventScrollIfNeeded = ev => {
    const {clientHeight, scrollHeight} = contentRef.current
    const noScroll = scrollHeight <= clientHeight
    if (!enableContentScroll && noScroll) ev.preventDefault()
  }

  const avoidOverscroll = () => {
    const {offsetHeight, scrollTop, scrollHeight} = contentRef.current
    const currentScroll = scrollTop + offsetHeight

    if (scrollTop === 0) {
      contentRef.current.scrollTop = 1
    } else if (currentScroll >= scrollHeight) {
      contentRef.current.scrollTop = scrollTop - 1
    }
  }

  const handleOutsideClick = ev => {
    if (closeOnOutsideClick && ev.target === wrapperRef.current) {
      closeModal()
    }
  }

  const extendedChildren = React.Children.toArray(children).map(child =>
    React.cloneElement(child, {
      onClose: closeModal
    })
  )

  const renderModal = () => {
    const wrapperClassName = cx(suitClass(), {
      'is-MoleculeModal-open': isOpen,
      [suitClass({element: 'out'})]: isClosing
    })

    const dialogClassName = cx(suitClass({element: 'dialog'}), {
      [suitClass({element: 'dialog--full'})]: fitWindow,
      [suitClass({element: 'dialog--out'})]: isClosing,
      [suitClass({element: 'dialog--fit'})]: fitContent
    })

    return (
      <div
        className={wrapperClassName}
        ref={wrapperRef}
        onAnimationEnd={onAnimationEnd}
        onClick={handleOutsideClick}
      >
        <div className={dialogClassName}>
          {(iconClose || header) && (
            <HeaderRender
              close={
                iconClose && <Close icon={iconClose} onClick={closeModal} />
              }
              header={header}
            />
          )}
          <div
            className={suitClass({element: 'content'})}
            onTouchStart={avoidOverscroll}
            onTouchMove={preventScrollIfNeeded}
            ref={contentRef}
          >
            {extendedChildren}
          </div>
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
   * true to prevent scroll
   */
  enableContentScroll: PropTypes.bool,
  /**
   * true if you want a fullscreen modal, otherwise, false
   */
  fitWindow: PropTypes.bool,
  /**
   * true if you want a modal that fit contents in mobile devices, otherwise, false
   */
  fitContent: PropTypes.bool,
  /**
   * content of the modal's header
   */
  header: PropTypes.element,
  /**
   * customitzable close icon
   */
  iconClose: PropTypes.element,
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
   * Container id element to be used to render the portal. If not available, it will be created for you.
   */
  portalContainerId: PropTypes.string,
  /**
   * Determines if modal will be rendered using a React Portal.
   */
  usePortal: PropTypes.bool
}

MoleculeModal.defaultProps = {
  closeOnOutsideClick: false,
  closeOnEscKeyDown: false,
  enableContentScroll: false,
  fitWindow: false,
  fitContent: false,
  isOpen: false,
  portalContainerId: 'modal-react-portal',
  usePortal: true,
  onClose: () => {}
}

MoleculeModal.displayName = 'MoleculeModal'

const MoleculeModalWithAnimation = WithAnimation(MoleculeModal)
const MoleculeModalWithUrlState = WithUrlState(MoleculeModalWithAnimation)

export {MoleculeModalWithUrlState, MoleculeModalWithAnimation}
export default MoleculeModalWithAnimation

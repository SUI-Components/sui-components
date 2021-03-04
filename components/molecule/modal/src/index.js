/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types'
import {
  Children,
  cloneElement,
  forwardRef,
  useRef,
  useState,
  useEffect,
  useCallback
} from 'react'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import {SUPPORTED_KEYS} from './config'
import {suitClass} from './helpers'
import {Close} from './Close'
import {HeaderRender} from './HeaderRender'
import MoleculeModalContent from './Content'
import MoleculeModalFooter from './Footer'
import WithAnimation from './HoC/WithAnimation'
import WithUrlState from './HoC/WithUrlState'

export const MODAL_SIZES = {
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const toggleWindowScroll = disableScroll => {
  window.document.body.classList.toggle('is-MoleculeModal-open', disableScroll)
}

const combineRefs = (...refs) => value => {
  refs.forEach(ref => {
    if (typeof ref === 'function') {
      ref(value)
    } else if (ref != null) {
      ref.current = value
    }
  })
}

const MoleculeModal = forwardRef(
  (
    {
      children,
      closeOnEscKeyDown = false,
      closeOnOutsideClick = false,
      enableContentScroll = false,
      fitContent = false,
      fitWindow = false,
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
      isContentless
    },
    forwardedRef
  ) => {
    const wrapperRef = useRef()
    const ref = combineRefs(wrapperRef, forwardedRef)

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

    const closeModal = useCallback(
      ev => {
        ev && ev.stopPropagation()
        toggleWindowScroll(false)
        onClose()
      },
      [onClose]
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

    const handleOutsideClick = ev => {
      if (closeOnOutsideClick && ev.target === ref.current) {
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
        'is-MoleculeModal-open': isOpen,
        [suitClass({element: 'out'})]: isClosing
      })

      const dialogClassName = cx(suitClass({element: 'dialog'}), {
        [suitClass({element: 'dialog--full'})]: fitWindow,
        [suitClass({element: 'dialog--out'})]: isClosing,
        [suitClass({element: 'dialog--fit'})]: fitContent,
        [suitClass({element: `dialog--${size}`})]: !!size
      })

      return (
        <div
          className={wrapperClassName}
          ref={ref}
          onAnimationEnd={onAnimationEnd}
          onClick={handleOutsideClick}
        >
          <div className={dialogClassName}>
            {(iconClose || header) && (
              <HeaderRender
                close={
                  iconClose && (
                    <Close
                      icon={iconClose}
                      onClick={closeModal}
                      floating={floatingIconClose}
                    />
                  )
                }
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
  header: PropTypes.element,
  /**
   * customitzable close icon
   */
  iconClose: PropTypes.element,
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
  hash: PropTypes.string,
  /**
   * The function that manages when the modal open. It'll be executed for open
   * MoleculeModalWithUrlState on pop state changes
   */
  openModalTrigger: PropTypes.func
}

MoleculeModal.displayName = 'MoleculeModal'

const MoleculeModalWithAnimation = WithAnimation(MoleculeModal)
const MoleculeModalWithUrlState = WithUrlState(MoleculeModalWithAnimation)

MoleculeModalWithAnimation.displayName = 'MoleculeModal'

MoleculeModalWithAnimation.Content = MoleculeModalContent
MoleculeModalWithAnimation.Footer = MoleculeModalFooter

export {MoleculeModalWithUrlState, MoleculeModalWithAnimation}
export default MoleculeModalWithAnimation

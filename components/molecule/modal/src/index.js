import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import {SUPPORTED_KEYS} from './config'
import {suitClass} from './helpers'
import {Close} from './Close'
import {HeaderRender} from './HeaderRender'
import WithAnimation from './HoC/WithAnimation'

const toggleWindowScroll = disableScroll => {
  window.document.body.classList.toggle('is-MoleculeModal-open', disableScroll)
}

class MoleculeModal extends Component {
  _contentRef = React.createRef()
  _wrapperRef = React.createRef()

  state = {
    isClientReady: false
  }

  _getContainer() {
    const {portalContainerId} = this.props
    let containerDOMEl = document.getElementById(portalContainerId)
    if (!containerDOMEl) {
      containerDOMEl = document.createElement('div')
      containerDOMEl.id = portalContainerId
      document.body.appendChild(containerDOMEl)
    }
    return containerDOMEl
  }

  componentDidMount() {
    const {usePortal} = this.props
    if (usePortal) {
      this.setState({isClientReady: true})
    }
    document.addEventListener('keydown', this._onKeyDown)
  }
  componentWillUnmount() {
    toggleWindowScroll(false)
    document.removeEventListener('keydown', this._onKeyDown)
  }

  _onKeyDown = event => {
    if (this.props.isOpen === false || this.props.closeOnEscKeyDown === false)
      return
    if (SUPPORTED_KEYS.includes(event.key)) {
      this._closeModal()
      event.preventDefault()
    }
  }

  _preventScrollIfNeeded = e => {
    if (this.noScroll) e.preventDefault()
  }

  _avoidOverscroll = () => {
    const {
      clientHeight,
      offsetHeight,
      scrollTop,
      scrollHeight
    } = this._contentRef.current
    const currentScroll = scrollTop + offsetHeight
    // check if the content has to scroll in order to prevent the default
    // behaviour of the touchmove in case we don't need the scroll
    // that fixes the weird overscroll on ios and android
    this.noScroll = scrollHeight <= clientHeight

    if (scrollTop === 0) {
      this._contentRef.current.scrollTop = 1
    } else if (currentScroll >= scrollHeight) {
      this._contentRef.current.scrollTop = scrollTop - 1
    }
  }

  _closeModal = () => {
    toggleWindowScroll(false)
    this.props.onClose()
  }

  _handleCloseClick = () => {
    this._closeModal()
  }

  _handleOutsideClick = event => {
    if (
      this.props.closeOnOutsideClick &&
      event.target === this._wrapperRef.current
    ) {
      this._closeModal()
    }
  }

  get extendedChildren() {
    const {children} = this.props
    return React.Children.toArray(children).map((child, index) => {
      return React.cloneElement(child, {
        onClose: this._closeModal
      })
    })
  }

  _renderModal() {
    const {
      header,
      iconClose,
      isOpen,
      fitWindow,
      fitContent,
      isClosing,
      onAnimationEnd
    } = this.props
    toggleWindowScroll(isOpen)
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
        ref={this._wrapperRef}
        onAnimationEnd={onAnimationEnd}
        onClick={this._handleOutsideClick}
      >
        <div className={dialogClassName}>
          {(iconClose || header) && (
            <HeaderRender
              close={
                iconClose && (
                  <Close icon={iconClose} onClick={this._handleCloseClick} />
                )
              }
              header={header}
            />
          )}
          <div
            className={suitClass({element: 'content'})}
            onTouchStart={this._avoidOverscroll}
            onTouchMove={this._preventScrollIfNeeded}
            ref={this._contentRef}
          >
            {this.extendedChildren}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {usePortal} = this.props
    const {isClientReady} = this.state

    const modalElement = this._renderModal()

    if (usePortal) {
      return isClientReady
        ? createPortal(modalElement, this._getContainer())
        : null
    }

    return modalElement
  }
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
  fitWindow: false,
  fitContent: false,
  isOpen: false,
  portalContainerId: 'modal-react-portal',
  usePortal: true,
  onClose: () => {}
}

MoleculeModal.displayName = 'MoleculeModal'

export default WithAnimation(MoleculeModal)

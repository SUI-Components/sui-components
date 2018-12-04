import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'
import {SUPPORTED_KEYS} from './config'
import {suitClass} from './helpers'

const toggleWindowScroll = disableScroll => {
  window.document.body.classList.toggle('is-modal-open', disableScroll)
}

class MoleculeModal extends Component {
  _contentRef = React.createRef()
  _wrapperRef = React.createRef()

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown)
  }

  _onKeyDown = event => {
    if (this.props.open === false || this.props.closeOnEscKeyDown === false)
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

  _renderCloseIcon = () => {
    const {iconClose} = this.props
    return (
      <button
        type="button"
        className={suitClass({element: 'close'})}
        onClick={this._handleCloseClick}
      >
        {iconClose}
      </button>
    )
  }

  _renderHeader = () => {
    const {header} = this.props
    return (
      <div
        className={suitClass({element: 'header'})}
        onTouchMove={e => e.preventDefault()}
      >
        {header}
        {this._renderCloseIcon()}
      </div>
    )
  }

  _renderNoHeader = () => {
    return (
      <div className={suitClass({element: 'no-header'})}>
        {this._renderCloseIcon()}
      </div>
    )
  }

  render() {
    const {header, children} = this.props

    const wrapperClassName = cx(suitClass({}), {
      'is-open': this.props.open,
      [suitClass({modifier: 'verticallyCentered'})]: this.props.centerVertically
    })

    const dialogClassName = cx(suitClass({element: 'dialog'}), {
      [suitClass({element: 'dialog--full'})]: this.props.fitWindow
    })

    return (
      <div
        className={wrapperClassName}
        ref={this._wrapperRef}
        onClick={this._handleOutsideClick}
      >
        <div className={dialogClassName}>
          {(header && this._renderHeader()) || this._renderNoHeader()}
          <div
            className={suitClass({element: 'content'})}
            onTouchStart={this._avoidOverscroll}
            onTouchMove={this._preventScrollIfNeeded}
            ref={this._contentRef}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

MoleculeModal.propTypes = {
  /**
   * true if you want to fit the content vertically, otherwise, false
   */
  centerVertically: PropTypes.bool,
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
   * content of the modal's header
   */
  header: PropTypes.element,
  /**
   * customitzable close icon
   */
  iconClose: PropTypes.element.isRequired,
  /**
   * prop to mark if the modal is currently open or not
   */
  open: PropTypes.bool,
  /**
   * OnClose function handler
   */
  onClose: PropTypes.func
}

MoleculeModal.defaultProps = {
  centerVertically: false,
  closeOnOutsideClick: false,
  closeOnEscKeyDown: false,
  fitWindow: false,
  open: false,
  onClose: () => {}
}

MoleculeModal.displayName = 'MoleculeModal'

export default MoleculeModal

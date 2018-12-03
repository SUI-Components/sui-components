import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'
import {SUPPORTED_KEYS} from './config'
import {suitClass} from './helpers'

class MoleculeModal extends Component {
  constructor(...args) {
    super(...args)

    this.contentDOMEl = null
    this.wrapperDOMEl = null
    this.state = {
      open: this.props.open
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this._onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown)
  }

  _onKeyDown = event => {
    if (this.state.open === false || this.props.closeOnEscKeyDown === false)
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
    } = this.contentDOMEl
    const currentScroll = scrollTop + offsetHeight
    // check if the content has to scroll in order to prevent the default
    // behaviour of the touchmove in case we don't need the scroll
    // that fixes the weird overscroll on ios and android
    this.noScroll = scrollHeight <= clientHeight

    if (scrollTop === 0) {
      this.contentDOMEl.scrollTop = 1
    } else if (currentScroll >= scrollHeight) {
      this.contentDOMEl.scrollTop = scrollTop - 1
    }
  }

  _closeModal = () => {
    this._toggleWindowScroll(false)
    this.setState({open: false})
    this.props.onClose()
  }

  _toggleWindowScroll(disableScroll) {
    window.document.body.classList.toggle('is-modal-open', disableScroll)
  }

  _handleCloseClick = () => {
    this._closeModal()
  }

  _handleOutsideClick = event => {
    if (this.props.closeOnOutsideClick && event.target === this.wrapperDOMEl) {
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

  componentWillReceiveProps({open, disableWindowScroll}) {
    if (open && disableWindowScroll) {
      this._toggleWindowScroll(true)
    }

    if (open !== this.state.open) {
      this.setState({open})
    }
  }

  render() {
    const {header, children} = this.props

    const wrapperClassName = cx(suitClass({}), {
      'is-open': this.state.open,
      [suitClass({modifier: 'verticallyCentered'})]: this.props.centerVertically
    })

    const dialogClassName = cx(suitClass({element: 'dialog'}), {
      [suitClass({element: 'dialog--full'})]: this.props.fitWindow
    })

    return (
      <div
        className={wrapperClassName}
        ref={node => {
          this.wrapperDOMEl = node
        }}
        onClick={this._handleOutsideClick}
      >
        <div className={dialogClassName}>
          {(header && this._renderHeader()) || this._renderNoHeader()}
          <div
            className={suitClass({element: 'content'})}
            onTouchStart={this._avoidOverscroll}
            onTouchMove={this._preventScrollIfNeeded}
            ref={node => {
              this.contentDOMEl = node
            }}
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
   * true if you want to disable the scroll on current window, otherwise, false
   */
  disableWindowScroll: PropTypes.bool,
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
  disableWindowScroll: true,
  fitWindow: false,
  open: false,
  onClose: () => {}
}

MoleculeModal.displayName = 'MoleculeModal'

export default MoleculeModal

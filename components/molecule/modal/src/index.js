import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'

class MoleculeModal extends Component {
  constructor(...args) {
    super(...args)

    this.contentDOMEl = null
    this.wrapperDOMEl = null
    this.state = {
      open: this.props.open
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
    const {iconClose, textClose, textCloseHidden} = this.props
    return (
      <button
        type="button"
        className="sui-MoleculeModal-close"
        onClick={this._handleCloseClick}
      >
        {iconClose}
        {textCloseHidden ? (
          <span className="sui-MoleculeModal-closeTextHidden">{textClose}</span>
        ) : (
          textClose
        )}
      </button>
    )
  }

  _renderHeader = () => {
    const {header, iconClose, textClose, textCloseHidden} = this.props
    return (
      <div
        className="sui-MoleculeModal-header"
        onTouchMove={e => e.preventDefault()}
      >
        {header}
        {this._renderCloseIcon()}
      </div>
    )
  }

  _renderNoHeader = () => {
    return (
      <div className="sui-MoleculeModal-no-header">
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
    const {header, content} = this.props

    const wrapperClassName = cx('sui-MoleculeModal', {
      'is-open': this.state.open,
      'sui-MoleculeModal--verticallyCentered': this.props.centerVertically
    })

    const dialogClassName = cx('sui-MoleculeModal-dialog', {
      'sui-MoleculeModal-dialog--full': this.props.fitWindow
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
            className="sui-MoleculeModal-content"
            onTouchStart={this._avoidOverscroll}
            onTouchMove={this._preventScrollIfNeeded}
            ref={node => {
              this.contentDOMEl = node
            }}
          >
            {content}
          </div>
        </div>
      </div>
    )
  }
}

MoleculeModal.propTypes = {
  centerVertically: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  content: PropTypes.element.isRequired,
  disableWindowScroll: PropTypes.bool,
  fitWindow: PropTypes.bool,
  header: PropTypes.element,
  iconClose: PropTypes.element.isRequired,
  open: PropTypes.bool,
  textClose: PropTypes.string,
  textCloseHidden: PropTypes.bool,
  onClose: PropTypes.func
}

MoleculeModal.defaultProps = {
  centerVertically: false,
  closeOnOutsideClick: false,
  disableWindowScroll: true,
  fitWindow: false,
  open: false,
  textClose: 'Close',
  textCloseHidden: true,
  onClose: () => {}
}

MoleculeModal.displayName = 'MoleculeModal'

export default MoleculeModal

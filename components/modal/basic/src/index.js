import PropTypes from 'prop-types'
import React, {Component} from 'react'
import IconX from '@schibstedspain/sui-svgiconset/lib/X'
import cx from 'classnames'

class ModalBasic extends Component {
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

  _renderHeader = () => {
    const {
      header,
      iconClose: IconClose,
      textClose,
      textCloseHidden
    } = this.props
    return (
      <div
        className="sui-ModalBasic-header"
        onTouchMove={e => e.preventDefault()}
      >
        {header}
        <button
          type="button"
          className="sui-ModalBasic-close"
          onClick={this._handleCloseClick}
        >
          <IconClose svgClass="sui-ModalBasic-closeIcon" />
          {textCloseHidden ? (
            <span className="sui-ModalBasic-closeTextHidden">{textClose}</span>
          ) : (
            textClose
          )}
        </button>
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
    const {header, content, footer} = this.props

    const wrapperClassName = cx('sui-ModalBasic', {
      'is-open': this.state.open,
      'sui-ModalBasic--verticallyCentered': this.props.centerVertically
    })

    const dialogClassName = cx('sui-ModalBasic-dialog', {
      'sui-ModalBasic-dialog--full': this.props.fitWindow
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
          {header && this._renderHeader()}
          <div
            className="sui-ModalBasic-content"
            onTouchStart={this._avoidOverscroll}
            onTouchMove={this._preventScrollIfNeeded}
            ref={node => {
              this.contentDOMEl = node
            }}
          >
            {content}
          </div>
          {footer && <div className="sui-ModalBasic-footer">{footer}</div>}
        </div>
      </div>
    )
  }
}

ModalBasic.propTypes = {
  centerVertically: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  content: PropTypes.element.isRequired,
  disableWindowScroll: PropTypes.bool,
  fitWindow: PropTypes.bool,
  footer: PropTypes.element,
  header: PropTypes.element,
  iconClose: PropTypes.func,
  open: PropTypes.bool,
  textClose: PropTypes.string,
  textCloseHidden: PropTypes.bool,
  onClose: PropTypes.func
}

ModalBasic.defaultProps = {
  centerVertically: false,
  closeOnOutsideClick: false,
  disableWindowScroll: true,
  fitWindow: false,
  iconClose: IconX,
  open: false,
  textClose: 'Close',
  textCloseHidden: true,
  onClose: () => {}
}

ModalBasic.displayName = 'ModalBasic'

export default ModalBasic

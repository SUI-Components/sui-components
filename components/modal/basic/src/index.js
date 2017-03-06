import React, { Component, PropTypes } from 'react'
import IconX from '@schibstedspain/sui-svgiconset/lib/X'
import cx from 'classnames'

class ModalBasic extends Component {
  static get defaultProps () {
    return {
      centerVertically: false,
      closeOnOutsideClick: false,
      disableWindowScroll: true,
      fitWindow: false,
      iconClose: <IconX fillColor='#000000' size='16' />,
      open: false,
      textClose: 'Close',
      textCloseHidden: true,
      onClose: () => {}
    }
  }

  static get propTypes () {
    return {
      centerVertically: PropTypes.bool,
      closeOnOutsideClick: PropTypes.bool,
      content: PropTypes.element.isRequired,
      disableWindowScroll: PropTypes.bool,
      fitWindow: PropTypes.bool,
      footer: PropTypes.element,
      header: PropTypes.element,
      iconClose: PropTypes.element,
      open: PropTypes.bool,
      textClose: PropTypes.string,
      textCloseHidden: PropTypes.bool,
      onClose: PropTypes.func
    }
  }

  constructor (...args) {
    super(...args)

    this.contentDOMEl = null
    this.wrapperDOMEl = null

    this.avoidOverscroll = this.avoidOverscroll.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.preventDefaultEvent = this.preventDefaultEvent.bind(this)
    this.preventScrollIfNeeded = this.preventScrollIfNeeded.bind(this)

    this.state = {
      open: this.props.open
    }
  }

  preventDefaultEvent (e) {
    e.preventDefault()
  }

  preventScrollIfNeeded (e) {
    if (this.noScroll) e.preventDefault()
  }

  avoidOverscroll (e) {
    const {clientHeight, offsetHeight, scrollTop, scrollHeight} = this.contentDOMEl
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

  componentWillReceiveProps ({open, disableWindowScroll}) {
    if (open && disableWindowScroll) {
      this.toggleWindowScroll(true)
    }

    if (open !== this.state.open) {
      this.setState({ open })
    }
  }

  closeModal () {
    this.toggleWindowScroll(false)
    this.setState({ open: false })
    this.props.onClose()
  }

  toggleWindowScroll (disableScroll) {
    window.document.body.style.overflowY = disableScroll ? 'hidden' : ''
  }

  handleCloseClick () {
    this.closeModal()
  }

  handleOutsideClick (event) {
    if (this.props.closeOnOutsideClick && event.target === this.wrapperDOMEl) {
      this.closeModal()
    }
  }

  renderHeader () {
    const { header, iconClose, textClose, textCloseHidden } = this.props
    return (
      <div
        className='sui-ModalBasic-header'
        onTouchMove={this.preventDefaultEvent}>
        {header}
        <button
          type='button'
          className='sui-ModalBasic-close'
          onClick={this.handleCloseClick}
        >
          {iconClose}
          {textCloseHidden
            ? <span className='sui-ModalBasic-closeTextHidden'>{textClose}</span>
            : textClose
          }
        </button>
      </div>
    )
  }

  render () {
    const { header, content, footer } = this.props

    const wrapperClassName = cx('sui-ModalBasic', {
      'sui-ModalBasic--open': this.state.open,
      'sui-ModalBasic--verticallyCentered': this.props.centerVertically
    })

    const dialogClassName = cx('sui-ModalBasic-dialog', {
      'sui-ModalBasic-dialog--full': this.props.fitWindow
    })

    return (
      <div
        className={wrapperClassName}
        ref={node => { this.wrapperDOMEl = node }}
        onClick={this.handleOutsideClick}
      >
        <div className={dialogClassName}>
          {header && this.renderHeader() }
          <div
            className='sui-ModalBasic-content'
            onTouchStart={this.avoidOverscroll}
            onTouchMove={this.preventScrollIfNeeded}
            ref={node => { this.contentDOMEl = node }}>
            {content}
          </div>
          {footer &&
            <div className='sui-ModalBasic-footer'>
              {footer}
            </div>
          }
        </div>
      </div>
    )
  }
}

ModalBasic.displayName = 'ModalBasic'

export default ModalBasic

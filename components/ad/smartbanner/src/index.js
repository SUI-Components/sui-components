import PropTypes from 'prop-types'
import React, {Component} from 'react'
import IconCloseDefault from '@schibstedspain/sui-svgiconset/lib/X'
import RatingStar from './rating-star'
import cx from 'classnames'

class AdSmartbanner extends Component {
  _handleClick = event => {
    const {onClick} = this.props
    event.preventDefault()
    onClick()
  }

  _handleClose = event => {
    const {onClose} = this.props
    event.preventDefault()
    onClose()
  }

  render() {
    const {
      imageUrl,
      title,
      text,
      buttonText,
      staticPosition,
      icon: IconClose,
      ratingValue,
      ratingMax,
      customRatingIcons
    } = this.props
    const className = cx('sui-AdSmartbanner', {
      'is-static': staticPosition
    })

    return (
      <div className={className}>
        <button
          className="sui-AdSmartbanner-buttonClose"
          onClick={this._handleClose}
        >
          <IconClose svgClass="sui-AdSmartbanner-buttonCloseIcon" />
        </button>
        <div className="sui-AdSmartbanner-primary">
          <img src={imageUrl} className="sui-AdSmartbanner-logo" />
        </div>
        <div className="sui-AdSmartbanner-secondary">
          <h3 className="sui-AdSmartbanner-title">{title}</h3>
          <p className="sui-AdSmartbanner-text">{text}</p>
          {ratingValue !== null && (
            <RatingStar
              ratingValue={ratingValue}
              ratingMax={ratingMax}
              icons={customRatingIcons}
            />
          )}
        </div>
        <button
          className="sui-AdSmartbanner-buttonInstall"
          onClick={this._handleClick}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

AdSmartbanner.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  icon: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  staticPosition: PropTypes.bool,
  customRatingIcons: PropTypes.object,
  ratingValue: PropTypes.number,
  ratingMax: PropTypes.number
}

AdSmartbanner.defaultProps = {
  staticPosition: false,
  ratingValue: null,
  icon: IconCloseDefault
}

AdSmartbanner.displayName = 'AdSmartbanner'

export default AdSmartbanner

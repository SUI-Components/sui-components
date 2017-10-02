import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TagBasic extends Component {
  static MAX_LABEL_LENGTH = 100

  /**
   * @param  {string} options.className custom classname
   * @param {fn} options.onClick
   * @return {string} all classnames joined by whitespace
   */
  _classNames ({className, onClick}) {
    return cx(
      'sui-TagBasic',
      onClick && 'sui-TagBasic-actionable',
      className
    )
  }

  /**
   * Cuts off exceeded char limit
   * @param  {string} label
   * @return {string}
   */
  _truncate (label) {
    return label.length < TagBasic.MAX_LABEL_LENGTH
      ? label
      : label.substr(0, TagBasic.MAX_LABEL_LENGTH)
  }

  /**
   * @param {Object} event
   */
  _stopEvent (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  /**
   * @param  {Object} event
   */
  onClose = (event) => {
    this._stopEvent()
    this.props.onClose()
  }

  /**
   * @param  {Object} event
   */
  onClick = (event) => {
    const onClick = this.props.onClick
    if (!onClick) return

    this._stopEvent(event)
    onClick()
  }

  render () {
    const {
      className,
      Icon,
      onClose,
      CloseIcon,
      onClick
    } = this.props

    const label = this._truncate(this.props.label)

    return (
      <div
        className={this._classNames({className, onClick})}
        onClick={this.onClick}>
        {
          Icon &&
            <span>
              <Icon svgClass='sui-TagBasic-icon' />
            </span>
        }
        <span className='sui-TagBasic-label' title={label}>
          {label}
        </span>
        {
          !onClick && onClose &&
            <span onClick={this.onClose}>
              <CloseIcon svgClass='sui-TagBasic-delete-icon' />
            </span>
        }
      </div>
    )
  }
}

TagBasic.displayName = 'TagBasic'

TagBasic.propTypes = {
  /**
   * Custom classes
   */
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func,
  onClose: PropTypes.func,
  /**
   * Will only be shown if the onClose fn is defined
   */
  CloseIcon: PropTypes.func,
  /**
   * If defined, onClose will be ignored
   */
  onClick: PropTypes.func
}

export default TagBasic

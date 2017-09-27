import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TagBasic extends Component {
  static MAX_LABEL_LENGTH = 100

  /**
   * @param  {string} options.className custom classname
   * @return {string} all classnames joined by whitespace
   */
  _classNames ({className}) {
    return cx(
      'sui-TagBasic',
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
   * @param  {Object} event click event
   */
  onClose = (event) => {
    event.preventDefault()
    event.stopPropagation()

    this.props.onClose()
  }

  render () {
    const {
      className,
      Icon,
      onClose,
      CloseIcon
    } = this.props

    const label = this._truncate(this.props.label)

    return (
      <div className={this._classNames({className})}>
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
          onClose &&
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
  Icon: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  /**
   * Will only be shown if the onClose fn is defined
   */
  CloseIcon: PropTypes.func
}

export default TagBasic

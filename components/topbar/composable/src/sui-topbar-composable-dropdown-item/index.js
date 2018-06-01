import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'

export default class DropdownMenuItem extends Component {
  shouldComponentUpdate(nextProps) {
    // update only when the dropdown is visible
    return (
      nextProps.active !== this.props.active ||
      nextProps.disabled !== this.props.disabled
    )
  }

  render() {
    const classesContainer = cx('sui-DropdownMenuItem', {
      'sui-DropdownMenuItem--disabled': this.props.disabled,
      'sui-DropdownMenuItem--active': this.props.active
    })

    return <li className={classesContainer}>{this.props.children}</li>
  }
}

DropdownMenuItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element
}

DropdownMenuItem.defaultProps = {
  active: false
}

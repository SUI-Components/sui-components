import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import Check from '@schibstedspain/sui-svgiconset/lib/Check'

const tagSelectableClassName = ({isSelected}) =>
  cx('sui-TagSelectable', {
    'is-selected': isSelected
  })

const TagSelectable = ({
  onClick,
  isSelected,
  value,
  label,
  icon: Icon = Check
}) => (
  <button
    onClick={event => onClick(event, value)}
    className={tagSelectableClassName({isSelected})}
  >
    {Icon && <Icon svgClass="sui-TagSelectable-icon" />}
    {label}
  </button>
)

TagSelectable.displayName = 'TagSelectable'

TagSelectable.propTypes = {
  /**
   * Click event that will send the value of the tag
   */
  onClick: PropTypes.func,
  /**
   * The label to display
   */
  label: PropTypes.string.isRequired,
  /**
   * The value of the selectable tag
   */
  value: PropTypes.any.isRequired,
  /**
   * True if the tag is selected
   */
  isSelected: PropTypes.bool.isRequired,
  /**
   * Tag custom icon
   */
  icon: PropTypes.func
}

export default TagSelectable

import React, {PropTypes} from 'react'
import cx from 'classnames'
import Check from '@schibstedspain/sui-svgiconset/lib/Check'

const TagSelectableClassName = ({isSelected}) => cx('sui-TagSelectable', {
  'is-selected': isSelected
})

const TagSelectable = ({onClick, isSelected, label, icon: Icon = Check} = {}) =>
  <button
    onClick={onClick}
    className={TagSelectableClassName({isSelected: isSelected})}>
    {Icon &&
      <Icon svgClass='sui-TagSelectable-icon' />
    }
    {label}
  </button>

TagSelectable.displayName = 'TagSelectable'

TagSelectable.propTypes = {
  /**
   * onClick event handler
   */
  onClick: PropTypes.func,
  /**
   * Tag text
   */
  label: PropTypes.string.isRequired,
  /**
   * Tag state
   */
  isSelected: PropTypes.bool.isRequired,
  /**
   * Tag custom icon
   */
  icon: PropTypes.func
}

export default TagSelectable

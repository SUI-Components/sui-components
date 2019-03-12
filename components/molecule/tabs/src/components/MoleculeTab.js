import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeTabs`

const CLASS_TAB = `${BASE_CLASS}-item`
const CLASS_TAB_ICON = `${CLASS_TAB}-icon`

/* status */
const CLASS_TAB_ACTIVE = `${CLASS_TAB}--active`
const CLASS_TAB_DISABLED = `${CLASS_TAB}--disabled`

const MoleculeTab = ({
  isActive,
  handleChange,
  disabled,
  icon,
  label,
  numTab
}) => {
  const _handleChange = ev => {
    !disabled && handleChange(ev, {numTab})
  }

  const className = cx(CLASS_TAB, {
    [CLASS_TAB_ACTIVE]: isActive,
    [CLASS_TAB_DISABLED]: disabled
  })

  return (
    <li className={className} onClick={_handleChange}>
      {icon && <span className={CLASS_TAB_ICON}>{icon}</span>}
      <span>{label}</span>
    </li>
  )
}

MoleculeTab.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Handler on Change Tabs */
  handleChange: PropTypes.func,

  /** icon (React component) */
  icon: PropTypes.node,

  /** text to display */
  label: PropTypes.string,

  /** Tab number */
  numTab: PropTypes.number,

  /** isActive */
  isActive: PropTypes.bool,

  /** isActive */
  disabled: PropTypes.bool
}

export default MoleculeTab

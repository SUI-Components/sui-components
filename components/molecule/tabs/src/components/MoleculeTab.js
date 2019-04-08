import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeTabs`

const CLASS_TAB = `${BASE_CLASS}-item`
const CLASS_TAB_ICON = `${CLASS_TAB}-icon`

/* status */
const CLASS_TAB_ACTIVE = `is-active`
const CLASS_TAB_DISABLED = `is-disabled`

const MoleculeTab = ({active, onChange, disabled, icon, label, numTab}) => {
  const handleChange = ev => {
    !disabled && onChange(ev, {numTab})
  }

  const className = cx(CLASS_TAB, {
    [CLASS_TAB_ACTIVE]: active,
    [CLASS_TAB_DISABLED]: disabled
  })

  return (
    <li className={className} onClick={handleChange}>
      {icon && <span className={CLASS_TAB_ICON}>{icon}</span>}
      <span>{label}</span>
    </li>
  )
}

MoleculeTab.propTypes = {
  /** Handler on Change Tabs */
  onChange: PropTypes.func,

  /** icon (React component) */
  icon: PropTypes.node,

  /** text to display */
  label: PropTypes.string,

  /** Tab number */
  numTab: PropTypes.number,

  /** is active */
  active: PropTypes.bool,

  /** is disabled */
  disabled: PropTypes.bool
}

export default MoleculeTab

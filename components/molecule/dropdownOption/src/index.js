import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomInput from '@s-ui/react-atom-input'

const BASE_CLASS = 'sui-MoleculeDropdownOption'
const CLASS_CHECKBOX = `${BASE_CLASS}-checkbox`
const CLASS_TEXT = `${BASE_CLASS}-text`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

const MoleculeDropdownOption = ({
  children,
  selected,
  checkbox,
  disabled,
  highlight,
  onClick,
  value
}) => {
  const className = cx(BASE_CLASS, {
    [CLASS_CHECKBOX]: checkbox,
    [CLASS_DISABLED]: disabled,
    'is-selected': selected
  })

  const handleClick = ev => {
    if (!disabled) onClick(ev, {value})
  }

  const highlightOption = option => {
    if (typeof option !== 'string') return option
    const regExpHighlight = new RegExp(highlight, 'gi')
    const highlightedOption = option.replace(regExpHighlight, `<mark>$&</mark>`)
    return <span dangerouslySetInnerHTML={{__html: highlightedOption}} />
  }

  return (
    <div className={className} onClick={handleClick}>
      {checkbox && (
        <AtomInput type="checkbox" checked={selected} disabled={disabled} />
      )}
      <span className={CLASS_TEXT}>
        {highlight ? highlightOption(children) : children}
      </span>
    </div>
  )
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  /** option value */
  value: PropTypes.string.isRequired,

  /** Content to be included in the option */
  children: PropTypes.node,

  /** Contains checkbox */
  checkbox: PropTypes.bool,

  /** Is disabled */
  disabled: PropTypes.bool,

  /** onClick callback (ev, {value}) */
  onClick: PropTypes.func,

  /** Is initial selected */
  selected: PropTypes.bool,

  /** Text to be highlighted in the option text if found */
  highlight: PropTypes.string
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onClick: () => {},
  selected: false
}

export default MoleculeDropdownOption

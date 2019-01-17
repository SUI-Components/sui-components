import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomInput from '@s-ui/react-atom-input'

import handlersFactory from './handlersFactory'

const BASE_CLASS = 'sui-MoleculeDropdownOption'
const CLASS_CHECKBOX = `${BASE_CLASS}-checkbox`
const CLASS_TEXT = `${BASE_CLASS}-text`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`
const CLASS_HIGHLIGHTED = `is-highlighted`
const CLASS_HIGHLIGHTED_MARK = `${BASE_CLASS}-mark`

const MoleculeDropdownOption = ({
  children,
  selected,
  checkbox,
  disabled,
  highlightQuery,
  onSelectKey,
  onSelect,
  innerRef,
  value
}) => {
  const className = cx(BASE_CLASS, {
    [CLASS_CHECKBOX]: checkbox,
    [CLASS_DISABLED]: disabled,
    'is-selected': selected
  })

  const {handleClick, handleKeyDown, handleFocus} = handlersFactory({
    disabled,
    value,
    onSelectKey,
    onSelect
  })

  const highlightOption = option => {
    if (typeof option !== 'string') return option
    const regExpHighlight = new RegExp(highlightQuery, 'gi')
    return option.replace(
      regExpHighlight,
      `<mark class="${cx(CLASS_HIGHLIGHTED_MARK, CLASS_HIGHLIGHTED)}">$&</mark>`
    )
  }

  const handleInnerCheckboxFocus = ev => {
    ev.preventDefault()
    innerRef.current.focus()
  }

  return (
    <div
      ref={innerRef}
      tabIndex="0"
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
    >
      {checkbox && (
        <AtomInput
          type="checkbox"
          checked={selected}
          disabled={disabled}
          onFocus={handleInnerCheckboxFocus}
        />
      )}
      {highlightQuery ? (
        <span
          dangerouslySetInnerHTML={{__html: highlightOption(children)}}
          className={CLASS_TEXT}
        />
      ) : (
        <span className={CLASS_TEXT}>{children}</span>
      )}
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

  /** onSelect callback (ev, {value}) */
  onSelect: PropTypes.func,

  /** Is initial selected */
  selected: PropTypes.bool,

  /** Text to be highlighted in the option text if found */
  highlightQuery: PropTypes.string,

  /* key to provoke the onClick callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values */
  onSelectKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.object
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onSelect: () => {},
  selected: false,
  onSelectKey: 'Enter',
  innerRef: React.createRef()
}

export default MoleculeDropdownOption
export {handlersFactory}

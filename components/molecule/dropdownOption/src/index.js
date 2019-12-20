import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomCheckbox from '@s-ui/react-atom-checkbox'

import handlersFactory from './handlersFactory'

const BASE_CLASS = 'sui-MoleculeDropdownOption'
const CLASS_CHECKBOX = `${BASE_CLASS}-checkbox`
const CLASS_TWO_LINES = `${BASE_CLASS}-twoLinesText`
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
  value,
  twoLinesText
}) => {
  const className = cx(BASE_CLASS, {
    [CLASS_CHECKBOX]: checkbox,
    [CLASS_DISABLED]: disabled,
    'is-selected': selected
  })

  const innerClassName = cx({
    [CLASS_TEXT]: !twoLinesText,
    [CLASS_TWO_LINES]: twoLinesText
  })

  const {handleClick, handleKeyDown, handleFocus} = handlersFactory({
    disabled,
    value,
    onSelectKey,
    onSelect
  })

  const renderHighlightOption = option => {
    if (typeof option !== 'string') {
      return (
        <span onFocus={handleInnerFocus} className={innerClassName}>
          {option}
        </span>
      )
    }
    const regExpHighlight = new RegExp(highlightQuery, 'gi')
    const mark = option.replace(
      regExpHighlight,
      `<mark class="${cx(CLASS_HIGHLIGHTED_MARK, CLASS_HIGHLIGHTED)}">$&</mark>`
    )
    return (
      <span
        onFocus={handleInnerFocus}
        dangerouslySetInnerHTML={{__html: mark}}
        className={innerClassName}
      />
    )
  }

  const handleInnerFocus = ev => {
    ev.preventDefault()
    innerRef.current.focus()
  }

  return (
    <li
      ref={innerRef}
      tabIndex="0"
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
    >
      {checkbox && (
        <AtomCheckbox
          checked={selected}
          disabled={disabled}
          onFocus={handleInnerFocus}
        />
      )}
      {highlightQuery ? (
        renderHighlightOption(children)
      ) : (
        <span onFocus={handleInnerFocus} className={innerClassName}>
          {children}
        </span>
      )}
    </li>
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
  innerRef: PropTypes.object,

  /** Text with css clamp = 2 */
  twoLinesText: PropTypes.bool
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

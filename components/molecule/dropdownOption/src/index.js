import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {highlightText} from '@s-ui/js/lib/string'
import AtomCheckbox from '@s-ui/react-atom-checkbox'

import handlersFactory from './handlersFactory'

const BASE_CLASS = 'sui-MoleculeDropdownOption'
const CLASS_CHECKBOX = `${BASE_CLASS}-checkbox`
const MODIFIER_TWO_LINES = `twoLines`
const MODIFIER_ELLIPSIS = 'ellipsis'
const MODIFIER_LINE_WRAP = 'lineWrap'
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
  withTwoLinesText,
  withLineWrap
}) => {
  const className = cx(BASE_CLASS, {
    [CLASS_CHECKBOX]: checkbox,
    [CLASS_DISABLED]: disabled,
    'is-selected': selected
  })

  const innerClassName = cx([
    CLASS_TEXT,
    withTwoLinesText && `${CLASS_TEXT}--${MODIFIER_TWO_LINES}`,
    withLineWrap && `${CLASS_TEXT}--${MODIFIER_LINE_WRAP}`,
    !withTwoLinesText && !withLineWrap && `${CLASS_TEXT}--${MODIFIER_ELLIPSIS}`
  ])

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

    const mark = highlightText({
      value: option,
      query: highlightQuery,
      startTag: `<mark class="${cx(
        CLASS_HIGHLIGHTED_MARK,
        CLASS_HIGHLIGHTED
      )}">`,
      endTag: '</mark>'
    })

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
  withTwoLinesText: PropTypes.bool,

  /** Multi-line text */
  withLineWrap: PropTypes.bool
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

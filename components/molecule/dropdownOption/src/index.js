import {createRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {highlightText} from '@s-ui/js/lib/string'
import AtomCheckbox from '@s-ui/react-atom-checkbox'

import handlersFactory from './handlersFactory/index.js'
import {
  BASE_CLASS,
  CLASS_CHECKBOX,
  MODIFIER_TWO_LINES,
  MODIFIER_THREE_LINES,
  MODIFIER_NO_WRAP,
  MODIFIER_LINE_WRAP,
  CLASS_TEXT,
  CLASS_DESCRIPTION,
  CLASS_DISABLED,
  CLASS_HIGHLIGHTED,
  CLASS_HIGHLIGHTED_MARK,
  TEXT_WRAP_STYLES,
  CLASS_WITH_DESCRIPTION
} from './config.js'

const MoleculeDropdownOption = ({
  checkbox,
  children,
  disabled,
  highlightQuery,
  highlightValue,
  innerRef,
  onSelectKey,
  onSelect,
  selected,
  textWrap,
  value,
  description,
  withTwoLinesText
}) => {
  const className = cx(BASE_CLASS, {
    [CLASS_CHECKBOX]: checkbox,
    [CLASS_DISABLED]: disabled,
    [CLASS_WITH_DESCRIPTION]: description,
    'is-selected': selected
  })
  const innerClassName = cx([
    CLASS_TEXT,
    (withTwoLinesText || textWrap === TEXT_WRAP_STYLES.TWO_LINES) &&
      `${CLASS_TEXT}--${MODIFIER_TWO_LINES}`,
    textWrap === TEXT_WRAP_STYLES.THREE_LINES &&
      `${CLASS_TEXT}--${MODIFIER_THREE_LINES}`,
    textWrap === TEXT_WRAP_STYLES.LINE_WRAP &&
      `${CLASS_TEXT}--${MODIFIER_LINE_WRAP}`,
    ((!withTwoLinesText && !textWrap) ||
      textWrap === TEXT_WRAP_STYLES.NO_WRAP) &&
      `${CLASS_TEXT}--${MODIFIER_NO_WRAP}`
  ])
  const {handleClick, handleKeyDown, handleFocus} = handlersFactory({
    disabled,
    onSelectKey,
    onSelect,
    value
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
      <>
        <span
          onFocus={handleInnerFocus}
          dangerouslySetInnerHTML={{__html: mark}}
          className={innerClassName}
        />
        {highlightValue ? children : null}
      </>
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
      role="option"
    >
      {checkbox && (
        <AtomCheckbox
          checked={selected}
          disabled={disabled}
          onFocus={handleInnerFocus}
        />
      )}
      {highlightQuery ? (
        renderHighlightOption(highlightValue || children)
      ) : (
        <span onFocus={handleInnerFocus} className={innerClassName}>
          {children}
        </span>
      )}
      {description && <span className={CLASS_DESCRIPTION}>{description}</span>}
    </li>
  )
}
MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'
MoleculeDropdownOption.propTypes = {
  /** option value */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
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
  /** Text to be display if used with highlight query with custom content */
  highlightValue: PropTypes.string,
  /* key to provoke the onClick callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values */
  onSelectKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.object,
  /** Text with css clamp = 2 */
  withTwoLinesText: PropTypes.bool,
  /** Text wrapping options */
  textWrap: PropTypes.oneOf(Object.values(TEXT_WRAP_STYLES)),
  /** Text to be displayed as a description of the value */
  description: PropTypes.string
}
MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onSelect: () => {},
  selected: false,
  onSelectKey: 'Enter',
  innerRef: createRef()
}
export default MoleculeDropdownOption
export {handlersFactory}
export {TEXT_WRAP_STYLES as MoleculeDropdownOptionTextWrapStyles}

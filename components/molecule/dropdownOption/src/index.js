import {createRef, forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {highlightText} from '@s-ui/js/lib/string'
import AtomCheckbox from '@s-ui/react-atom-checkbox'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'

import handlersFactory from './handlersFactory/index.js'
import {
  BASE_CLASS,
  CLASS_CHECKBOX,
  CLASS_DESCRIPTION,
  CLASS_DISABLED,
  CLASS_HIGHLIGHTED,
  CLASS_HIGHLIGHTED_MARK,
  CLASS_LEFT_ADDON,
  CLASS_TEXT,
  CLASS_WITH_DESCRIPTION,
  CLASS_WITH_DESCRIPTION_AND_ADDON,
  MODIFIER_LINE_WRAP,
  MODIFIER_NO_WRAP,
  MODIFIER_THREE_LINES,
  MODIFIER_TWO_LINES,
  TEXT_WRAP_STYLES
} from './config.js'

const MoleculeDropdownOption = forwardRef(
  (
    {
      checkbox,
      checkboxProps,
      children,
      disabled = false,
      highlightQuery,
      highlightValue,
      innerRef,
      leftAddon,
      selectKey = 'Enter',
      onSelect,
      selected,
      defaultSelected = false,
      textWrap,
      value,
      description,
      withTwoLinesText,
      ...props
    },
    forwardedRef
  ) => {
    const hasAddonAndDescription = description && !!leftAddon
    const ref = useMergeRefs(innerRef || createRef(), forwardedRef)
    const [innerSelected, setInnerSelected] = useControlledState(selected, defaultSelected)
    const className = cx(BASE_CLASS, {
      [CLASS_CHECKBOX]: checkbox,
      [CLASS_DISABLED]: disabled,
      [CLASS_WITH_DESCRIPTION]: description,
      [CLASS_WITH_DESCRIPTION_AND_ADDON]: hasAddonAndDescription,
      'is-selected': innerSelected
    })
    const innerClassName = cx([
      CLASS_TEXT,
      (withTwoLinesText || textWrap === TEXT_WRAP_STYLES.TWO_LINES) && `${CLASS_TEXT}--${MODIFIER_TWO_LINES}`,
      textWrap === TEXT_WRAP_STYLES.THREE_LINES && `${CLASS_TEXT}--${MODIFIER_THREE_LINES}`,
      textWrap === TEXT_WRAP_STYLES.LINE_WRAP && `${CLASS_TEXT}--${MODIFIER_LINE_WRAP}`,
      ((!withTwoLinesText && !textWrap) || textWrap === TEXT_WRAP_STYLES.NO_WRAP) &&
        `${CLASS_TEXT}--${MODIFIER_NO_WRAP}`
    ])
    const {handleClick, handleKeyDown, handleFocus} = handlersFactory({
      disabled,
      selectKey,
      onSelect,
      selected: innerSelected,
      setInnerSelected,
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
        startTag: `<mark class="${cx(CLASS_HIGHLIGHTED_MARK, CLASS_HIGHLIGHTED)}">`,
        endTag: '</mark>'
      })

      return (
        <>
          <span onFocus={handleInnerFocus} dangerouslySetInnerHTML={{__html: mark}} className={innerClassName} />
          {highlightValue ? children : null}
        </>
      )
    }
    const handleInnerFocus = ev => {
      innerRef.current && innerRef.current.focus()
    }

    return (
      <li
        ref={ref}
        tabIndex="0"
        className={className}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        role="option"
        data-value={value}
        aria-label={value}
        {...(checkbox ? {'aria-checked': innerSelected} : {'aria-selected': innerSelected})}
        {...Object.fromEntries(Object.entries(props).filter(([key]) => !['className', 'style'].includes(key)))}
      >
        {checkbox && (
          <AtomCheckbox
            checked={innerSelected}
            disabled={disabled}
            onChange={ev => {
              typeof onSelect === 'function' && onSelect(ev, {value})
            }}
            onFocus={handleInnerFocus}
            {...checkboxProps}
          />
        )}
        {highlightQuery ? (
          renderHighlightOption(highlightValue || children)
        ) : (
          <>
            {leftAddon ? <span className={CLASS_LEFT_ADDON}>{leftAddon}</span> : null}
            <span onFocus={handleInnerFocus} className={innerClassName}>
              {children}
              {hasAddonAndDescription && <span className={CLASS_DESCRIPTION}>{description}</span>}
            </span>
          </>
        )}
        {!hasAddonAndDescription && <span className={CLASS_DESCRIPTION}>{description}</span>}
      </li>
    )
  }
)

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'
MoleculeDropdownOption.propTypes = {
  /** option value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  /** Content to be included in the option */
  children: PropTypes.node,
  /** Contains checkbox */
  checkbox: PropTypes.bool,
  /** Additional props to set up the checkbox */
  checkboxProps: PropTypes.object,
  /** Is disabled */
  disabled: PropTypes.bool,
  /** Custom element set at left side of an option */
  leftAddon: PropTypes.node,
  /** onSelect callback (ev, {value}) */
  onSelect: PropTypes.func,
  /** Selected html controlled property */
  selected: PropTypes.bool,
  /** Initial selected **/
  defaultSelected: PropTypes.bool,
  /** Text to be highlighted in the option text if found */
  highlightQuery: PropTypes.string,
  /** Text to be display if used with highlight query with custom content */
  highlightValue: PropTypes.string,
  /* key to provoke the onClick callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values */
  selectKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.object,
  /** Text with css clamp = 2 */
  withTwoLinesText: PropTypes.bool,
  /** Text wrapping options */
  textWrap: PropTypes.oneOf(Object.values(TEXT_WRAP_STYLES)),
  /** Text to be displayed as a description of the value */
  description: PropTypes.string
}

export default MoleculeDropdownOption
export {handlersFactory}
export {TEXT_WRAP_STYLES as MoleculeDropdownOptionTextWrapStyles} // Deprecate
export {TEXT_WRAP_STYLES as moleculeDropdownOptionTextWrapStyles}

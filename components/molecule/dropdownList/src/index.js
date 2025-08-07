import {Children, forwardRef, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useDebounce from '@s-ui/react-hooks/lib/useDebounce'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {
  BASE_CLASS,
  CLASS_HIDDEN,
  DEBOUNCE_TIME,
  DESIGNS,
  moleculeDropdownListSelectHandler,
  POSITIONS,
  SIZES
} from './config.js'
import ExtendedChildren from './ExtendedChildren.js'

const MoleculeDropdownList = forwardRef(
  (
    {
      children,
      onSelect,
      position = POSITIONS.BOTTOM,
      alwaysRender = true,
      design = DESIGNS.SOLID,
      size = SIZES.SMALL,
      value,
      visible,
      onKeyDown,
      'aria-label': ariaLabel,
      className,
      ownProps = {},
      ...props
    },
    forwardedRef
  ) => {
    const refDropdownList = useRef()
    const ref = useMergeRefs(refDropdownList, forwardedRef)

    const [typedWord, setTypedWord] = useState('')
    const debouncedTypedWord = useDebounce(typedWord, DEBOUNCE_TIME)

    const getFocusedOptionIndex = options => {
      const currentElementFocused = document.activeElement
      return Array.from(options).reduce((focusedOptionIndex, option, index) => {
        if (option === currentElementFocused) focusedOptionIndex = index
        return focusedOptionIndex
      }, 0)
    }

    const handleKeyDown = event => {
      const {key} = event
      const {
        current: {children: options}
      } = refDropdownList
      const numOptions = options.length
      const index = getFocusedOptionIndex(options)
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        if (index >= 0 || index <= numOptions) {
          if (position === POSITIONS.TOP) {
            if (key === 'ArrowDown' && index > 0) options[index - 1].focus()
            if (key === 'ArrowUp' && index < numOptions - 1) options[index + 1].focus()
          } else {
            if (key === 'ArrowDown' && index < numOptions - 1) options[index + 1].focus()
            if (key === 'ArrowUp' && index > 0) options[index - 1].focus()
          }
        }
      } else {
        setTypedWord(value => value + key.toLowerCase())
        const word = typedWord + key.toLowerCase()
        const optionToFocusOn =
          Array.from(options).find((option, i) => i >= index && option.innerText.toLowerCase().indexOf(word) === 0) ||
          Array.from(options).find(option => option.innerText.toLowerCase().indexOf(word) === 0)
        optionToFocusOn && optionToFocusOn.focus()
      }
      typeof onKeyDown === 'function' && onKeyDown(event)
    }

    // When DEBOUNCE_TIME reset typed word
    useEffect(() => {
      setTypedWord('')
    }, [debouncedTypedWord])

    if (!visible && !alwaysRender) return null

    return (
      <ul
        ref={ref}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={cx(
          BASE_CLASS,
          `${BASE_CLASS}--position-${position}`,
          `${BASE_CLASS}--design-${design}`,
          `${BASE_CLASS}--size-${size}`,
          {
            [CLASS_HIDDEN]: !visible
          },
          className
        )}
        role="listbox"
        aria-label={ariaLabel}
        {...ownProps}
      >
        {Children.toArray(children)
          .filter(Boolean)
          .map((child, index) => (
            <ExtendedChildren key={index} value={value} onSelect={onSelect} {...props}>
              {child}
            </ExtendedChildren>
          ))}
      </ul>
    )
  }
)

MoleculeDropdownList.displayName = 'MoleculeDropdownList'

MoleculeDropdownList.propTypes = {
  /** No matter if is visible or invisible, render always the content */
  alwaysRender: PropTypes.bool,

  /** aria-label for accessibility */
  'aria-label': PropTypes.string,

  /** Content to be included in the list (MoleculeDropdownOption) */
  children: PropTypes.node,
  /**
   * class attribute
   */
  className: PropTypes.string,

  /** callback on select option */
  onSelect: PropTypes.func,

  /** checkbox contained in all DropdownOption **/
  checkbox: PropTypes.bool,

  /** design (flat|solid) of the list */
  design: PropTypes.oneOf(Object.values(DESIGNS)),

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** position of the list (top, bottom) default bottom */
  position: PropTypes.oneOf(Object.values(POSITIONS)),

  /** selected value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** Visible or not */
  visible: PropTypes.bool,

  /** Keydown handler callback **/
  onKeyDown: PropTypes.func,

  /** props object to add to the unordered list **/
  ownProps: PropTypes.object
}

export default MoleculeDropdownList
export {DESIGNS as moleculeDropdownListDesigns}
export {SIZES as moleculeDropdownListSizes}
export {POSITIONS as moleculeDropdownListPositions}
export {moleculeDropdownListSelectHandler}

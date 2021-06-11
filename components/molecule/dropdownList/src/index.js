import {
  Children,
  forwardRef,
  cloneElement,
  useState,
  useEffect,
  useRef
} from 'react'
import useDebounce from '@s-ui/react-hooks/lib/useDebounce'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import isEqual from 'lodash.isequal'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeDropdownList`
const CLASS_HIDDEN = `is-hidden`
const DEBOUNCE_TIME = 500

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const MoleculeDropdownList = forwardRef(
  (
    {
      children,
      onSelect,
      alwaysRender,
      size,
      value,
      visible,
      onKeyDown,
      ...props
    },
    forwardedRef
  ) => {
    const refDropdownList = useRef()
    const ref = useMergeRefs(refDropdownList, forwardedRef)

    const [typedWord, setTypedWord] = useState('')
    const debouncedTypedWord = useDebounce(typedWord, DEBOUNCE_TIME)

    const extendedChildren = Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        const {value: valueChild} = child.props
        let selected = false
        if (Array.isArray(value)) {
          selected = value.some(innerValue => isEqual(valueChild, innerValue))
        } else {
          selected = isEqual(value, valueChild)
        }
        return cloneElement(child, {
          ...props,
          index,
          onSelect,
          selected
        })
      })

    const classNames = cx(BASE_CLASS, `${BASE_CLASS}--${size}`, {
      [CLASS_HIDDEN]: !visible
    })

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
          if (key === 'ArrowDown' && index < numOptions - 1)
            options[index + 1].focus()
          if (key === 'ArrowUp' && index > 0) options[index - 1].focus()
        }
      } else {
        setTypedWord(value => value + key.toLowerCase())
        const word = typedWord + key.toLowerCase()
        const optionToFocusOn =
          Array.from(options).find(
            (option, i) =>
              i >= index && option.innerText.toLowerCase().indexOf(word) === 0
          ) ||
          Array.from(options).find(
            option => option.innerText.toLowerCase().indexOf(word) === 0
          )
        optionToFocusOn && optionToFocusOn.focus()
      }
      typeof onKeyDown === 'function' && onKeyDown(event)
      event.preventDefault()
      event.stopPropagation()
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
        className={classNames}
      >
        {extendedChildren}
      </ul>
    )
  }
)

MoleculeDropdownList.displayName = 'MoleculeDropdownList'

MoleculeDropdownList.propTypes = {
  /** No matter if is visible or invisible, render always the content */
  alwaysRender: PropTypes.bool,

  /** Content to be included in the list (MoleculeDropdownOption) */
  children: PropTypes.node,

  /** callback on select option */
  onSelect: PropTypes.func,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** selected value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** Visible or not */
  visible: PropTypes.bool,

  /** Keydown handler callback **/
  onKeyDown: PropTypes.func
}

MoleculeDropdownList.defaultProps = {
  alwaysRender: true,
  onSelect: () => {},
  size: SIZES.SMALL
}

export default MoleculeDropdownList
export {SIZES as moleculeDropdownListSizes}

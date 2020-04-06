import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PerfDynamicRendering from '@s-ui/react-perf-dynamic-rendering'

const BASE_CLASS = `sui-MoleculeDropdownList`
const CLASS_HIDDEN = `is-hidden`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}
const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  )
const MoleculeDropdownList = ({
  children,
  value,
  size,
  visible,
  onSelect,
  ...props
}) => {
  const refDropdownList = useRef()

  const extendedChildren = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      const {value: valueChild} = child.props
      const selected = Array.isArray(value)
        ? value.includes(valueChild)
        : value === valueChild
      return React.cloneElement(child, {
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

  const handleKeyDown = ev => {
    const {key} = ev
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
      const optionToFocusOn =
        Array.from(options).find(
          (option, i) =>
            i > index &&
            option.innerText.charAt(0).toLowerCase() === key.toLowerCase()
        ) ||
        Array.from(options).find(
          (option, i) =>
            option.innerText.charAt(0).toLowerCase() === key.toLowerCase()
        )
      optionToFocusOn && optionToFocusOn.focus()
    }
    ev.preventDefault()
    ev.stopPropagation()
  }
  if (!visible) return null
  const firstChildChunk = extendedChildren.slice(0, 100)
  const restChildren = extendedChildren.slice(100)

  const restChildrenChunks = chunk(
    restChildren,
    Math.max(restChildren.length * 0.1, 100)
  )
  const flattenRestChildrenChunks = flatten(
    restChildrenChunks.map((childrenChunk, index) => (
      <PerfDynamicRendering
        key={index}
        height={50}
        userAgent={navigator.userAgent}
      >
        {childrenChunk}
      </PerfDynamicRendering>
    ))
  )

  return (
    <ul
      ref={refDropdownList}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      className={classNames}
    >
      {firstChildChunk}
      {flattenRestChildrenChunks}
    </ul>
  )
}

MoleculeDropdownList.displayName = 'MoleculeDropdownList'

MoleculeDropdownList.propTypes = {
  /** Content to be included in the list (MoleculeDropdownOption) */
  children: PropTypes.node,

  /** Visible or not */
  visible: PropTypes.bool,

  /** selected value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** callback on select option */
  onSelect: PropTypes.func
}

MoleculeDropdownList.defaultProps = {
  size: SIZES.SMALL,
  onSelect: () => {}
}

export default MoleculeDropdownList
export {SIZES as moleculeDropdownListSizes}

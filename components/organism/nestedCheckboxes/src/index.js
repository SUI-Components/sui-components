import cx from 'classnames'
import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import useMount from '@s-ui/react-hooks/lib/useMount'
import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

import useMutationObserver from './hooks/useMutationObserver.js'
import {BASE_CLASS, BUTTON_CLASS, CHILD_CLASS, CONTAINER_CLASS, getInnerCheckboxes, isFunction} from './settings.js'

const OrganismNestedCheckboxes = ({
  children,
  id,
  name,
  value,
  defaultChecked = false,
  checked,
  uncheckedIcon: UncheckedIcon,
  checkedIcon: CheckedIcon,
  defaultIndeterminate = false,
  indeterminate,
  indeterminateIcon: IndeterminateIcon,
  label,
  onChange,
  onExpandToggle,
  defaultIsExpanded: defaultIsExpandedProp = true,
  isExpanded: isExpandedProp,
  isIndented = true,
  expandedIcon,
  collapsedIcon,
  ...props
}) => {
  const [checkedValue, setCheckedValue, isCheckedValueControlled] = useControlledState(checked, defaultChecked)
  const [indeterminateValue, setIndeterminateValue, isIndeterminateValueControlled] = useControlledState(
    indeterminate,
    defaultIndeterminate
  )
  const [isExpandedValue, setIsExpanded] = useControlledState(isExpandedProp, defaultIsExpandedProp)
  const isControlled = isCheckedValueControlled || isIndeterminateValueControlled
  const handleExpand = event => {
    setIsExpanded(!isExpandedValue)
    isFunction(onExpandToggle) &&
      onExpandToggle(event, {
        checked: checkedValue,
        expanded: !isExpandedValue,
        indeterminate: indeterminateValue,
        name,
        value
      })
  }

  useMount(() => {
    if (!isControlled) {
      const [checkboxes] = getInnerCheckboxes(ref.current, {
        checked: checkedValue,
        indeterminate: indeterminateValue
      })
      if (!indeterminateValue) {
        checkboxes.forEach(element => {
          element.checked !== checkedValue && element.click()
        })
      }
    }
  })

  const [ref] = useMutationObserver(node => {
    const [checkboxes, {checked, indeterminate}] = getInnerCheckboxes(node, {
      checked: checkedValue,
      indeterminate: indeterminateValue
    })
    if (!isControlled) {
      setCheckedValue(checked)
      setIndeterminateValue(indeterminate)
    }
    if (isFunction(onChange)) {
      const values = new Set()
      const skippedValues = new Set()
      if (checked) {
        values.add(value)
      } else {
        checkboxes.forEach(element => {
          if (element.checked !== checked) {
            const baseElement = element.closest(`.${BASE_CLASS}`)
            const childElement = baseElement && baseElement?.querySelector(`.${CHILD_CLASS}`)
            const hasNestedCheckboxes = baseElement.querySelector('input[type="checkbox"]') === element
            if (childElement !== ref.current && hasNestedCheckboxes) {
              const [innerCheckboxes] = getInnerCheckboxes(childElement, {
                checked: true,
                indeterminate: false
              })
              if (!skippedValues.has(element.value)) {
                values.add(element.value)
                innerCheckboxes.filter(n => n !== element).forEach(n => skippedValues.add(n.value))
              }
            } else {
              if (!skippedValues.has(element.value)) {
                values.add(element.value)
              }
            }
          }
        })
      }
      onChange(event, {
        value,
        name,
        expanded: isExpandedValue,
        checked,
        indeterminate,
        values: Array.from(values)
      })
    }
  })

  const onChangeHandler = (event, opts) => {
    const {checked, indeterminate} = opts
    const [checkboxes] = getInnerCheckboxes(ref.current, {
      checked,
      indeterminate
    })
    checkboxes.forEach(element => {
      if (element.checked !== checked) {
        element.click()
      }
    })
    if (!isControlled) {
      setIndeterminateValue(indeterminate)
      setCheckedValue(checked)
    }
    if (isFunction(onChange)) {
      const values = new Set()
      if (checked) {
        values.add(value)
      } else {
        checkboxes.forEach(element => {
          if (element.checked !== checked) {
            values.add(element.value)
          }
        })
      }
      onChange(event, {
        ...opts,
        checked,
        indeterminate,
        expanded: isExpandedValue,
        values: Array.from(values)
      })
    }
  }

  return (
    <div className={BASE_CLASS}>
      <div className={CONTAINER_CLASS}>
        <MoleculeCheckboxField
          id={id}
          name={name}
          value={value}
          checked={checkedValue}
          checkedIcon={CheckedIcon}
          uncheckedIcon={UncheckedIcon}
          indeterminate={indeterminateValue}
          indeterminateIcon={IndeterminateIcon}
          label={label}
          onChange={onChangeHandler}
          {...props}
        />
        <button
          type="button"
          className={cx(BUTTON_CLASS, `${BUTTON_CLASS}--${isExpandedValue ? 'expanded' : 'hidden'}`)}
          onClick={handleExpand}
        >
          {isExpandedValue ? expandedIcon : collapsedIcon}
        </button>
      </div>
      <div
        ref={ref}
        className={cx(CHILD_CLASS, {
          [`${CHILD_CLASS}--indented`]: isIndented
        })}
        {...(isExpandedValue ? {'aria-expanded': true} : {'aria-hidden': true})}
      >
        {children}
      </div>
    </div>
  )
}

OrganismNestedCheckboxes.displayName = 'OrganismNestedCheckboxes'

OrganismNestedCheckboxes.propTypes = {
  /** children */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /* Used for the label and element identifier */
  id: PropTypes.string,

  /**
   * Defines the value associated with the button's name when it's submitted with the form data.
   * This value is passed to the server in params when the form is submitted using this button.
   */
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /* Name attribute for the input */
  name: PropTypes.string,

  /* Mark the input as default initial selected */
  defaultChecked: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,
  /* AtomIcon when checkbox is checked */

  checkedIcon: PropTypes.elementType,

  /* AtomIcon when checkbox is unchecked */
  uncheckedIcon: PropTypes.elementType,

  /* Mark the input as default initial selected */
  defaultIndeterminate: PropTypes.bool,

  /* Mark the input as indeterminate */
  indeterminate: PropTypes.bool,

  /* AtomIcon when checkbox is intermediate */
  indeterminateIcon: PropTypes.elementType,

  /* Remove default left-padding indention on items */
  isIndented: PropTypes.bool,

  /* Text to be displayed as label on parent checkbox */
  label: PropTypes.string,

  /* onChange callback fired everytime any value changes */
  onChange: PropTypes.func,

  /* callback fired when expand changes */
  onExpandToggle: PropTypes.func,

  /* default expanded value (uncontrolled) */
  defaultIsExpanded: PropTypes.bool,
  /* expanded value (controlled) */
  isExpanded: PropTypes.bool,

  /* icon node to be displayed when children is expanded */
  expandedIcon: PropTypes.node,

  /* icon node to be displayed when children is collapsed */
  collapsedIcon: PropTypes.node
}

export default OrganismNestedCheckboxes

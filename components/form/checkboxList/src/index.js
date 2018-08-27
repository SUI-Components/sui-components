import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const isChecked = ({selectedValues = [], value} = {}) => {
  return selectedValues.indexOf(value) !== -1
}

const labelClassName = ({classNameItem, checked, value}) =>
  cx('sui-FormCheckboxList-label', {
    'is-active': checked,
    [`${classNameItem} ${classNameItem}--${value}`]: !!classNameItem
  })

const FormCheckboxList = ({
  classNameItem,
  handleChange,
  name,
  options,
  selectedValues
}) => (
  <div className="sui-FormCheckboxList">
    {options.map(
      ({value, label, checked = isChecked({selectedValues, value})}, index) => (
        <label
          key={index}
          className={labelClassName({
            checked,
            classNameItem,
            value
          })}
        >
          <input
            checked={checked}
            className="sui-FormCheckboxList-input"
            name={name}
            onChange={handleChange}
            type="checkbox"
            value={value}
          />
          {label}
        </label>
      )
    )}
  </div>
)

FormCheckboxList.displayName = 'FormCheckboxList'

FormCheckboxList.propTypes = {
  classNameItem: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
      ]),
      label: PropTypes.string.isRequired
    })
  ),
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ])
  )
}

export default FormCheckboxList

import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const isChecked = ({selectedValues = [], value} = {}) => {
  return selectedValues.indexOf(value) !== -1
}
const labelClassName = ({ classNameItem, checked, value }) =>
  cx('sui-FormCheckboxList-label', {
    'is-active': checked,
    [`${classNameItem} ${classNameItem}--${value}`]: !!classNameItem
  })

const FormCheckboxList = ({
  name,
  className,
  classNameItem,
  options,
  handleChange,
  selectedValues
} = {}) =>
  <div className='sui-FormCheckboxList'>
    {options.map((
      { value, label, checked = isChecked({ selectedValues, value }) },
      index
    ) =>
      <label key={index} className={labelClassName({
        classNameItem,
        value,
        checked
      })}>
        <input
          type='checkbox'
          value={value}
          checked={checked}
          name={name}
          onChange={handleChange}
          className='sui-FormCheckboxList-input'
        />
        {label}
      </label>
    )}
  </div>

FormCheckboxList.displayName = 'FormCheckboxList'

FormCheckboxList.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  classNameItem: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
      ]),
      label: PropTypes.string.isRequired
    }
    )),
  handleChange: PropTypes.func.isRequired,
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ])
  )
}

export default FormCheckboxList

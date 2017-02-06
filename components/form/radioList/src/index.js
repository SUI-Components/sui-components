import React, {PropTypes} from 'react'
import cx from 'classnames'
export default function FormRadioList ({
  name,
  className,
  options,
  handleChange,
  selectedValue
}) {
  function _renderOptions () {
    return options.map(({ value, label }, index) => {
      const checked = selectedValue === value
      const labelClassName = cx(
        `sui-FormRadioList-label`,
        `${className}--item`,
        `${className}--${value}`,
        { 'is-active': checked }
      )
      return (
        <label key={index} className={labelClassName}>
          <input
            type='radio'
            value={value}
            checked={checked}
            name={name}
            onChange={handleChange}
            className='sui-FormRadioList-input'
          />
          {label}
        </label>
      )
    })
  }
  const componentClassName = cx(
    className,
    `sui-FormRadioList`
  )
  return (
    <div className={componentClassName}>
      {_renderOptions()}
    </div>
  )
}

FormRadioList.displayName = 'FormRadioList'

FormRadioList.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
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
  selectedValue: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}

import React, {PropTypes} from 'react'
import cx from 'classnames'

const FormCheckbox = ({checked, className, errorMessage, label, name, onChange, svgIcons}) => (
  <div className={cx('sui-FormCheckbox', className)}>
    <label className='sui-FormCheckbox-container'>
      <input
        checked={checked}
        className={cx('sui-FormCheckbox-input', {'is-checked': checked})}
        name={name}
        onChange={onChange}
        type='checkbox' />
      {checked ? svgIcons.checked : svgIcons.unchecked}
      <span className='sui-FormCheckbox-label'>{label}</span>
    </label>
    {errorMessage &&
    <div className='sui-FormCheckbox-errorMessage'>
      <span className='sui-FormCheckbox-errorMessageLabel'>{errorMessage}</span>
    </div>
    }
  </div>
)

FormCheckbox.displayName = 'FormCheckbox'

FormCheckbox.propTypes = {
  /**
   * CSS classname to apply to component's container.
   */
  className: PropTypes.string,
  /**
   * Boolean attribute that specifies if the input should be displayed as selected or not.
   */
  checked: PropTypes.bool,
  /**
   * Text to display as error message below the checkbox label.
   */
  errorMessage: PropTypes.string,
  /**
   * Text to display as a description message on the right side of the chechbox input.
   */
  label: PropTypes.node,
  /**
   * Specifies the name of the checkbox component.
   */
  name: PropTypes.string.isRequired,
  /**
   * Custom callback function to execute when the checked/uncheched status of the checkbox has changed.
   */
  onChange: PropTypes.func,
  /**
   * Allows customisation of the icons to display representing the checked/unchecked status of the component.
   */
  svgIcons: PropTypes.shape({
    checked: PropTypes.node.isRequired,
    unchecked: PropTypes.node.isRequired
  })
}

FormCheckbox.defaultProps = {
  svgIcons: {
    checked: <svg className='sui-FormCheckbox-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
      <g fill='none' fillRule='evenodd' stroke='#2899B6' transform='translate(1 1)'>
        <rect width='13' height='13' x='.5' y='.5' rx='1' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.5 7.5l3 3 6-6' />
      </g>
    </svg>,
    unchecked: <svg className='sui-FormCheckbox-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
      <rect width='13' height='13' x='.5' y='.5' fill='none' fillRule='evenodd' stroke='#2899B6' rx='1' transform='translate(1 1)' />
    </svg>
  }
}

export default FormCheckbox

import PropTypes from 'prop-types'
import React from 'react'
import CheckboxChecked from '@schibstedspain/sui-svgiconset/lib/Checkboxchecked'
import CheckboxUnchecked from '@schibstedspain/sui-svgiconset/lib/Checkboxunchecked'
import cx from 'classnames'

const getCheckboxIcon = (checked, customIcons) => {
  let icon
  if (checked) {
    icon = customIcons ? customIcons.checked : CheckboxChecked
  } else {
    icon = customIcons ? customIcons.unchecked : CheckboxUnchecked
  }
  return icon
}

const FormCheckbox = ({
  checked,
  className,
  errorMessage,
  label,
  name,
  onChange,
  svgIcons
}) => {
  const CheckboxIcon = getCheckboxIcon(checked, svgIcons)
  return (
    <div className={cx('sui-FormCheckbox', className)}>
      <label className="sui-FormCheckbox-container">
        <input
          checked={checked}
          className={cx('sui-FormCheckbox-input', {'is-checked': checked})}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
        <CheckboxIcon svgClass="sui-FormCheckbox-icon" />
        <span className="sui-FormCheckbox-label">{label}</span>
      </label>
      {errorMessage && (
        <div className="sui-FormCheckbox-errorMessage">
          <span className="sui-FormCheckbox-errorMessageLabel">
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  )
}
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
   * Specifies the name of the checkbox element.
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

export default FormCheckbox

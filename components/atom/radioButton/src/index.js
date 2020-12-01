import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomRadioButton'
const CLASS_HIDDEN = `is-hidden`

const AtomRadioButton = ({
  id,
  disabled,
  checked,
  onChange: onChangeFromProps,
  isHidden,
  value,
  ...props
}) => {
  const handleChange = ev => {
    const {name, value} = ev.target
    if (!disabled) onChangeFromProps(ev, {name, value})
  }

  const className = cx(BASE_CLASS, {
    [CLASS_HIDDEN]: isHidden
  })

  return (
    <input
      className={className}
      value={value}
      type="radio"
      id={id}
      disabled={disabled}
      checked={checked}
      onChange={handleChange}
      {...props}
    />
  )
}

AtomRadioButton.displayName = 'AtomRadioButton'

AtomRadioButton.defaultProps = {
  checked: false,
  onChange: () => {}
}

AtomRadioButton.propTypes = {
  /* The DOM id global attribute. */
  id: PropTypes.string.isRequired,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func,

  /* Value assigned to the radio button */
  value: PropTypes.string,

  /* If is hidden */
  isHidden: PropTypes.bool
}

export default AtomRadioButton

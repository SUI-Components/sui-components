import {forwardRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {INPUT_SHAPES, INPUT_STATES} from '../config.js'
import Input from '../Input/index.js'
import {BASE_CLASS_PASSWORD, BASE_CLASS_PASSWORD_TOGGLE_BUTTON, PASSWORD, TEXT} from './config.js'

const Password = forwardRef(
  (
    {onChange, shape, pwShowLabel, pwHideLabel, toggleAriaLabel, value, defaultValue = '', state, ...props},
    forwardedRef
  ) => {
    const [type, setType] = useState(PASSWORD)
    const [innerValue, setInnerValue] = useControlledState(value, defaultValue)

    const toggle = () => {
      const inputType = type === PASSWORD ? TEXT : PASSWORD
      setType(inputType)
    }

    const handleChange = (ev, {value}) => {
      setInnerValue(value)
      typeof onChange === 'function' && onChange(ev, {value})
    }

    return (
      <div
        className={cx(
          BASE_CLASS_PASSWORD,
          shape && `${BASE_CLASS_PASSWORD}-shape-${shape}`,
          state && `${BASE_CLASS_PASSWORD}--state-${state}`
        )}
      >
        <Input
          ref={forwardedRef}
          shape={shape}
          {...props}
          onChange={handleChange}
          value={innerValue}
          type={type}
          noBorder
        />
        <button
          onClick={toggle}
          type="button"
          aria-pressed={type !== PASSWORD}
          aria-label={toggleAriaLabel}
          className={cx(
            BASE_CLASS_PASSWORD_TOGGLE_BUTTON,
            shape && `${BASE_CLASS_PASSWORD_TOGGLE_BUTTON}-shape-${shape}`
          )}
        >
          {type === PASSWORD ? pwShowLabel : pwHideLabel}
        </button>
      </div>
    )
  }
)

Password.propTypes = {
  /* Text to be shown to show the password on click */
  pwShowLabel: PropTypes.node,
  /* Text to be shown to hide the password on click */
  pwHideLabel: PropTypes.node,
  /* Aria label for the toggle button */
  toggleAriaLabel: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func,
  /* The name of the control */
  name: PropTypes.string,
  /* The id of the control */
  id: PropTypes.string,
  /* The value of the control */
  value: PropTypes.string,
  /* The default value of the control */
  defaultValue: PropTypes.string,
  /** Sets the shape of the input field. It can be 'rounded', 'square' or 'circle' */
  shape: PropTypes.oneOf(Object.values(INPUT_SHAPES)),
  /** 'success', 'error' or 'alert' */
  state: PropTypes.oneOf(Object.values(INPUT_STATES))
}

export default Password

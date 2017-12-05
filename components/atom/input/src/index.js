import React, {Component} from 'react'
import PropTypes from 'prop-types'

import nativeInputProps from './props/nativeInput'
import MaskedInput from './MaskedInput'
import DateInput from './DateInput'

import { filterObjectKeys } from './libs'

const TYPES = {
  TEXT: 'text',
  DATE: 'date'
}

class AtomInput extends Component {
  state = {
    error: false
  }

  get inputProps () {
    return filterObjectKeys(this.props, Object.keys(nativeInputProps))
  }

  render () {
    const {label, name, mask, type} = this.props
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        {
          mask &&
            <MaskedInput
              mask={mask}
              {...this.inputProps}
            />
        }
        {
          type === TYPES.DATE &&
            <DateInput
              {...this.inputProps}
            />
        }
      </div>
    )
  }
}

AtomInput.displayName = 'AtomInput'

AtomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)),
  mask: PropTypes.object,
  ...nativeInputProps
}

export default AtomInput
export {
  TYPES as AtomInputTypes
}

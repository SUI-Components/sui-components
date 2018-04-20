import React from 'react'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import {prefixClass, workClassNames} from './helpers'
import PropTypes from 'prop-types'

export const SingleSwitchTypeRender = (opts) => {
  const {
    name,
    label,
    labelOptionalText,
    size,
    type,
    disabled,
    isToggle,
    isFocus,
    focusSwitchCallback,
    blurSwitchCallback,
    toggleSwitchCallback
  } = opts

  return (
    <div
      className={workClassNames(size, type, 'singleType', isToggle, isFocus, disabled)}
      onClick={toggleSwitchCallback}>
      <div className={prefixClass('container')} tabIndex='0' onFocus={focusSwitchCallback} onBlur={blurSwitchCallback}>
        <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
        <div className={prefixClass('inputContainer')}>
          <div className={cx(prefixClass('circle'), {'sui-AtomSwitch--toggle': isToggle})} />
        </div>
      </div>
    </div>
  )
}

SingleSwitchTypeRender.displayName = 'SingleSwitchTypeRender'

SingleSwitchTypeRender.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  labelOptionalText: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isToggle: PropTypes.bool,
  isFocus: PropTypes.bool,
  focusSwitchCallback: PropTypes.func,
  blurSwitchCallback: PropTypes.func,
  toggleSwitchCallback: PropTypes.func,
}

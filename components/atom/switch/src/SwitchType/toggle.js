import React from 'react'
import cx from 'classnames'
import AtomLabel from '@s-ui/react-atom-label'
import {prefixClass, workClassNames} from './helpers'
import PropTypes from 'prop-types'

export const ToggleSwitchTypeRender = (opts) => {
  const {
    name,
    label,
    labelOptionalText,
    labelLeft,
    labelRight,
    size,
    type,
    disabled,
    isToggle,
    isFocus,
    focusSwitchCallback,
    blurSwitchCallback,
    toggleSwitchCallback,
    activateToggleCallback,
    deactivateToggleCallback
  } = opts

  return (
    <div
      className={workClassNames(size, type, 'toggleType', isToggle, isFocus, disabled)}>
      <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
      <div className={cx(prefixClass('container'))} tabIndex='0' onFocus={focusSwitchCallback} onBlur={blurSwitchCallback}>
        <span className={cx(prefixClass('text'), prefixClass('left'))} onClick={deactivateToggleCallback}>{labelLeft}</span>
        <div className={cx(prefixClass('inputContainer'))} onClick={toggleSwitchCallback}>
          <div className={cx(prefixClass('circle'), {'sui-AtomSwitch--toggle': isToggle})} />
        </div>
        <span className={cx(prefixClass('text'), prefixClass('right'))} onClick={activateToggleCallback}>{labelRight}</span>
      </div>
    </div>
  )
}

ToggleSwitchTypeRender.displayName = 'ToggleSwitchTypeRender'

ToggleSwitchTypeRender.propTypes = {
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
  activateToggleCallback: PropTypes.func,
  deactivateToggleCallback: PropTypes.func,
}

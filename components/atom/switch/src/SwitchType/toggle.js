import React from 'react'
import cx from 'classnames'
import {BASE_CLASS, TYPES} from '../index'
import AtomLabel from '@s-ui/react-atom-label'

export const ToggleSwitchTypeRender = (opts, isToggle, isFocus, isDisabled, focusSwitchCallback, blurSwitchCallback, activateToggleCallback, deactivateToggleCallback, toggleSwitchCallback) => {
  const {name, label, labelOptionalText, labelLeft, labelRight, size, type} = opts

  return (
    <div className={cx(
      BASE_CLASS,
      `${BASE_CLASS}--toggleType`,
      `${BASE_CLASS}--${size}`,
      {
        'sui-AtomSwitch--active': (isToggle || type === TYPES.SELECT),
        'sui-AtomSwitch--focus': isFocus,
        'sui-AtomSwitch--disabled': isDisabled
      })}>
      <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
      <div className={cx(`${BASE_CLASS}--container`)} tabIndex='0' onFocus={focusSwitchCallback} onBlur={blurSwitchCallback}>
        <span className={cx(`${BASE_CLASS}--text`, `${BASE_CLASS}--left`)} onClick={deactivateToggleCallback}>{labelLeft}</span>
        <div className={cx(`${BASE_CLASS}--inputContainer`)} onClick={toggleSwitchCallback}>
          <div className={cx(`${BASE_CLASS}--circle`, {'sui-AtomSwitch--toggle': isToggle})} />
        </div>
        <span className={cx(`${BASE_CLASS}--text`, `${BASE_CLASS}--right`)} onClick={activateToggleCallback}>{labelRight}</span>
      </div>
    </div>
  )
}

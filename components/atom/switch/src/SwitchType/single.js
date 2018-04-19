import React from 'react'
import cx from 'classnames'
import {BASE_CLASS, TYPES} from '../index'
import AtomLabel from '@s-ui/react-atom-label'

export const SingleSwitchTypeRender = (opts, isToggle, isFocus, isDisabled, focusSwitchCallback, blurSwitchCallback, toggleSwitchCallback) => {
  const {name, label, labelOptionalText, size, type} = opts

  return (
    <div className={cx(
      BASE_CLASS,
      `${BASE_CLASS}--singleType`,
      `${BASE_CLASS}--${size}`,
      {
        'sui-AtomSwitch--active': (isToggle || type === TYPES.SELECT),
        'sui-AtomSwitch--focus': isFocus,
        'sui-AtomSwitch--disabled': isDisabled
      })} onClick={toggleSwitchCallback}>
      <div className={`${BASE_CLASS}--container`} tabIndex='0' onFocus={focusSwitchCallback} onBlur={blurSwitchCallback}>
        <AtomLabel name={name} text={label} optionalText={labelOptionalText} />
        <div className={`${BASE_CLASS}--inputContainer`}>
          <div className={cx(`${BASE_CLASS}--circle`, {'sui-AtomSwitch--toggle': isToggle})} />
        </div>
      </div>
    </div>
  )
}

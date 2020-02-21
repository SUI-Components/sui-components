import React from 'react'
import PropTypes from 'prop-types'

import Button from '@s-ui/react-atom-button'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS_NAME} from './config'
const ALTERNATIVE_ACTION_TEXT = '- o -'
const BUTTON_COLOR = 'primary'
const BUTTON_SIZE = 'small'

const InitialState = ({buttonText, icon, text}) => {
  return (
    <div className={`${BASE_CLASS_NAME}-initialState`}>
      <div className={`${BASE_CLASS_NAME}-iconInitialState`}>
        <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{icon}</AtomIcon>
      </div>
      <div className={`${BASE_CLASS_NAME}-textState`}>
        <span>{text}</span>
        <span>{ALTERNATIVE_ACTION_TEXT}</span>
      </div>
      <div className={`${BASE_CLASS_NAME}-buttonState`}>
        <Button color={BUTTON_COLOR} size={BUTTON_SIZE}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

InitialState.displayName = 'InitialState'

InitialState.propTypes = {
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
}

export default InitialState

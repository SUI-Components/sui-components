import PropTypes from 'prop-types'

import Button, {atomButtonShapes} from '@s-ui/react-atom-button'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {
  INITIAL_STATE_CLASS_NAME,
  ALTERNATIVE_ACTION_TEXT,
  BUTTON_COLOR,
  BUTTON_DESIGN,
  BUTTON_SIZE,
  ICON_INITIAL_STATE_CLASS_NAME,
  TEXT_STATE_CLASS_NAME,
  TEXT_STATE_TEXT_CLASS_NAME,
  TEXT_STATE_DIVIDER_CLASS_NAME,
  BUTTON_STATE_CLASS_NAME
} from './config.js'

const InitialState = ({
  buttonDesign = BUTTON_DESIGN,
  buttonColor = BUTTON_COLOR,
  buttonText,
  buttonShape,
  buttonSize = BUTTON_SIZE,
  icon,
  text,
  dividerText = ALTERNATIVE_ACTION_TEXT
}) => {
  return (
    <div className={INITIAL_STATE_CLASS_NAME}>
      <div className={ICON_INITIAL_STATE_CLASS_NAME}>
        <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{icon}</AtomIcon>
      </div>
      <div className={TEXT_STATE_CLASS_NAME}>
        <span className={TEXT_STATE_TEXT_CLASS_NAME}>{text}</span>
        <span className={TEXT_STATE_DIVIDER_CLASS_NAME}>{dividerText}</span>
      </div>
      <div className={BUTTON_STATE_CLASS_NAME}>
        <Button
          color={buttonColor}
          design={buttonDesign}
          isButton
          shape={buttonShape}
          size={buttonSize}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

InitialState.displayName = 'InitialState'

InitialState.propTypes = {
  buttonColor: PropTypes.string,
  buttonDesign: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonShape: PropTypes.oneOf(Object.values(atomButtonShapes)),
  buttonSize: PropTypes.string,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  dividerText: PropTypes.string
}

export default InitialState

import PropTypes from 'prop-types'

import Button, {atomButtonShapes} from '@s-ui/react-atom-button'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS_NAME} from './config'
const ALTERNATIVE_ACTION_TEXT = '- o -'
const BUTTON_COLOR = 'primary'
const BUTTON_DESIGN = 'solid'
const BUTTON_SIZE = 'small'

const InitialState = ({
  buttonDesign = BUTTON_DESIGN,
  buttonColor = BUTTON_COLOR,
  buttonText,
  buttonShape = atomButtonShapes.ROUNDED,
  buttonSize = BUTTON_SIZE,
  icon,
  text,
  dividerText = ALTERNATIVE_ACTION_TEXT
}) => {
  return (
    <div className={`${BASE_CLASS_NAME}-initialState`}>
      <div className={`${BASE_CLASS_NAME}-iconInitialState`}>
        <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{icon}</AtomIcon>
      </div>
      <div className={`${BASE_CLASS_NAME}-textState`}>
        <span className={`${BASE_CLASS_NAME}-textStateText`}>{text}</span>
        <span className={`${BASE_CLASS_NAME}-textStateDivider`}>
          {dividerText}
        </span>
      </div>
      <div className={`${BASE_CLASS_NAME}-buttonState`}>
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

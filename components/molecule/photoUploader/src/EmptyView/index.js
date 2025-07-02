import cx from 'classnames'
import PropTypes from 'prop-types'

import Button, {atomButtonShapes} from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'

import {
  ALTERNATIVE_ACTION_TEXT,
  BUTTON_COLOR,
  BUTTON_DESIGN,
  BUTTON_SIZE,
  BUTTON_STATE_CLASS_NAME,
  EMPTY_VIEW_CLASS_NAME,
  ICON_EMPTY_VIEW_CLASS_NAME,
  TEXT_STATE_CLASS_NAME,
  TEXT_STATE_DIVIDER_CLASS_NAME,
  TEXT_STATE_TEXT_CLASS_NAME
} from './config.js'

const EmptyView = ({
  buttonDesign = BUTTON_DESIGN,
  buttonColor = BUTTON_COLOR,
  buttonText,
  buttonShape,
  buttonSize = BUTTON_SIZE,
  icon,
  iconSize,
  inputId,
  text,
  onClick,
  dividerText = ALTERNATIVE_ACTION_TEXT
}) => {
  return (
    <div
      className={EMPTY_VIEW_CLASS_NAME}
      onClick={ev => {
        ev.preventDefault()
        onClick()
      }}
    >
      <div className={ICON_EMPTY_VIEW_CLASS_NAME}>
        <AtomIcon size={iconSize}>{icon}</AtomIcon>
      </div>
      <div className={TEXT_STATE_CLASS_NAME}>
        <span className={cx(TEXT_STATE_TEXT_CLASS_NAME, {isSpaced: !dividerText})}>{text}</span>

        {dividerText ? <span className={TEXT_STATE_DIVIDER_CLASS_NAME}>{dividerText}</span> : null}
      </div>
      <div className={BUTTON_STATE_CLASS_NAME}>
        <Button
          as="label"
          color={buttonColor}
          design={buttonDesign}
          htmlFor={inputId}
          shape={buttonShape}
          size={buttonSize}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

EmptyView.displayName = 'EmptyView'

EmptyView.propTypes = {
  buttonColor: PropTypes.string,
  buttonDesign: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonShape: PropTypes.oneOf(Object.values(atomButtonShapes)),
  buttonSize: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconSize: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dividerText: PropTypes.string,
  onClick: PropTypes.func
}

export default EmptyView

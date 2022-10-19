import PropTypes from 'prop-types'

import {FONT_SIZES, getClass, TYPES} from './settings.js'

const AtomLabel = ({
  name,
  inline,
  text,
  optionalText,
  type,
  htmlFor,
  fontSize,
  onClick
}) => (
  <label
    htmlFor={htmlFor || name}
    className={getClass({type, inline, fontSize})}
    onClick={onClick}
  >
    {text}
    {optionalText && (
      <span className="sui-AtomLabel-optionalText">{optionalText}</span>
    )}
  </label>
)

AtomLabel.displayName = 'AtomLabel'

AtomLabel.propTypes = {
  /**
   * used as for attribute. Must be the same as the form element id
   */
  htmlFor: PropTypes.string,
  /**
   * used as for attribute. Must be the same as the form element id
   */
  name: PropTypes.string.isRequired,
  /**
   * The label itself
   */
  text: PropTypes.string.isRequired,
  /**
   * Allows label to be displayed inline to de left
   */
  inline: PropTypes.string,
  /**
   * The optional label text
   */
  optionalText: PropTypes.string,
  /**
   * Label type: 'success', 'error', 'alert' or 'contrast, use AtomLabelTypes
   */
  type: PropTypes.oneOf(Object.values(TYPES)),
  /**
   * Font size: set different font sizes, use AtomLabelFontSizes
   */
  fontSize: PropTypes.oneOf(Object.values(FONT_SIZES)),

  /** onClick event handler */
  onClick: PropTypes.func
}

export default AtomLabel
export {TYPES as AtomLabelTypes}
export {FONT_SIZES as AtomLabelFontSizes}

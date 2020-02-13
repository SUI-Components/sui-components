import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASSNAME = 'sui-AtomLabel'

const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  ALERT: 'alert',
  CONTRAST: 'contrast'
}

const FONT_SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
}

const getClass = ({type, inline, fontSize}) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${fontSize}`]: fontSize,
    [`${CLASSNAME}--${type}`]: type,
    [`${CLASSNAME}--inlineLeft`]: inline === 'left',
    [`${CLASSNAME}--inlineRight`]: inline === 'right'
  })

const AtomLabel = ({
  name,
  inline,
  text,
  optionalText,
  type,
  fontSize,
  onClick
}) => (
  <label
    htmlFor={name}
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

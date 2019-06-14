import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASSNAME = 'sui-AtomLabel'

const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const getClass = ({type, inline}) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${type}`]: type,
    [`${CLASSNAME}--inlineLeft`]: inline === 'left',
    [`${CLASSNAME}--inlineRight`]: inline === 'right'
  })

const AtomLabel = ({name, inline, text, optionalText, type, onClick}) => (
  <label htmlFor={name} className={getClass({type, inline})} onClick={onClick}>
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
   * Label type: 'success' or 'error', use AtomLabelTypes
   */
  type: PropTypes.oneOf(Object.values(TYPES)),

  /** onClick event handler */
  onClick: PropTypes.func
}

export default AtomLabel
export {TYPES as AtomLabelTypes}

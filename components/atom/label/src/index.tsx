/* eslint-disable react/prop-types */
import {FC, HTMLLabelElement, LabelHTMLAttributes} from 'react'

import cx from 'classnames'

import {CLASSNAME, FONT_SIZES, TYPES} from './settings'

type FontSize = typeof FONT_SIZES[keyof typeof FONT_SIZES]
type Type = typeof TYPES[keyof typeof TYPES]

interface AtomLabelProps extends Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor' | 'onClick'> {
  /**
   * used as for attribute. Must be the same as the form element id
   */
  name: string
  /**
   * The label itself
   */
  text: string
  /**
   * Allows label to be displayed inline to de left
   */
  inline?: string
  /**
   * The optional label text
   */
  optionalText?: string
  /**
   * Label type: 'success', 'error', 'alert' or 'contrast, use AtomLabelTypes
   */
  type?: Type
  /**
   * Font size: set different font sizes, use AtomLabelFontSizes
   */
  fontSize?: FontSize
}

const getClass = ({inline, type, fontSize}: Pick<AtomLabelProps, 'inline' | 'type' | 'fontSize'>): string =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${fontSize as string}`]: fontSize,
    [`${CLASSNAME}--${type as string}`]: type,
    [`${CLASSNAME}--inlineLeft`]: inline === 'left',
    [`${CLASSNAME}--inlineRight`]: inline === 'right'
  })

const AtomLabel: FC<AtomLabelProps> = ({name, text, inline, optionalText, type, fontSize, htmlFor, onClick}) => (
  <label htmlFor={htmlFor ?? name} className={getClass({inline, type, fontSize})} onClick={onClick}>
    {text}
    {Boolean(optionalText) && <span className="sui-AtomLabel-optionalText">{optionalText}</span>}
  </label>
)

AtomLabel.displayName = 'AtomLabel'

export default AtomLabel
export {FONT_SIZES as AtomLabelFontSizes}
export {TYPES as AtomLabelTypes}

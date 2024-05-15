import type {FC, LabelHTMLAttributes} from 'react'

import cx from 'classnames'

import {CLASSNAME, FONT_SIZES, TYPES} from './settings'

export type FontSize = typeof FONT_SIZES[keyof typeof FONT_SIZES]
export type Type = typeof TYPES[keyof typeof TYPES]
export type Inline = 'left' | 'right'

export interface AtomLabelProps extends Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor' | 'onClick'> {
  /**
   * used as for attribute. Must be the same as the form element id
   */
  name: string
  /**
   * The label itself
   */
  text: string
  /**
   * Allows the label to be displayed inline to any of both directions:
   * left or right
   */
  inline?: Inline
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

const getClass = ({inline, type, fontSize}: Pick<AtomLabelProps, 'inline' | 'type' | 'fontSize'>) =>
  cx(CLASSNAME, {
    [`${CLASSNAME}--${fontSize as string}`]: Boolean(fontSize),
    [`${CLASSNAME}--${type as string}`]: Boolean(type),
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

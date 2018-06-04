import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const FormTextarea = ({
  className,
  cols,
  label,
  name,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  rows,
  spellCheck,
  value
}) => (
  <div className={cx('sui-FormTextarea', className)}>
    {label && <label className="sui-FormTextarea-label">{label}</label>}
    <textarea
      className="sui-FormTextarea-element"
      cols={cols}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      rows={rows}
      spellCheck={spellCheck}
      value={value}
    />
  </div>
)

FormTextarea.displayName = 'FormTextarea'

FormTextarea.propTypes = {
  /**
   * CSS classname to apply to component's container.
   */
  className: PropTypes.string,
  /**
   * Specifies the visible width of text area.
   */
  cols: PropTypes.number,
  /**
   * Title label to show above the text area element.
   */
  label: PropTypes.string,
  /**
   * Specifies the name of the text area element.
   */
  name: PropTypes.string.isRequired,
  /**
   * Custom function callback to execute when the value of the text area has changed.
   */
  onChange: PropTypes.func,
  /**
   * Custom function callback to execute when cursor is focused on the field.
   */
  onFocus: PropTypes.func,
  /**
   * Custom function callback to execute when the textarea element loses the focus.
   */
  onBlur: PropTypes.func,
  /**
   * Specifies a shot hint that describes the expected value of the text area when it is empty.
   */
  placeholder: PropTypes.string,
  /**
   * Specifies the visible number of lines in a text area.
   */
  rows: PropTypes.number,
  /**
   * Specifies whether the element is to have its spelling and grammar checked or not.
   */
  spellCheck: PropTypes.bool,
  /**
   * Text value of the text area.
   */
  value: PropTypes.string
}

FormTextarea.defaultProps = {
  placeholder: '',
  spellCheck: false,
  value: ''
}

export default FormTextarea

import React, {PropTypes} from 'react'
import cx from 'classnames'

export default function TitleBasic ({align, className, subtitle, title}) {
  /**
   * Builds the modifier className to apply to the component following the SUIT naming convention (sui-TitleBasic--modifierInCamelCase).
   * @param alignProp {string} property value for Title alignment.
   * @returns {string} SUIT formatted classname.
   */
  function _buildAlignClassName (alignProp) {
    let alignClassName = ''
    if (alignProp) {
      alignClassName = 'sui-TitleBasic--align' + alignProp.charAt(0).toUpperCase() + alignProp.slice(1)
    }
    return alignClassName
  }

  const titleBasicClassName = cx('sui-TitleBasic', className, `${_buildAlignClassName(align)}`)

  return (
    <div className={titleBasicClassName}>
      {title ? <h1 className={`sui-TitleBasic-title`}>{title}</h1> : null}
      {subtitle ? <h2 className={`sui-TitleBasic-subtitle`}>{subtitle}</h2> : null}
    </div>
  )
}

TitleBasic.displayName = 'TitleBasic'

TitleBasic.propTypes = {
  /**
   * Defines the text alignment of title and subtitle.
   */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  /**
   * CSS classNames to apply to Title Basic container.
   */
  className: PropTypes.string,
  /**
   * Title to display.
   */
  title: PropTypes.string.isRequired,
  /**
   * Subtitle to display (optional).
   */
  subtitle: PropTypes.string
}

TitleBasic.defaultProps = {
  align: 'center'
}

import React, {PropTypes} from 'react'
import cx from 'classnames'

export default function TitleBasic ({align, className, subtitle, title}) {
  function buildAlignClassName (alignProp) {
    let alignClassName = ''
    if (alignProp) {
      alignClassName = 'sui-TitleBasic--align' + alignProp.charAt(0).toUpperCase() + alignProp.slice(1)
    }
    return alignClassName
  }

  const titleBasicClassName = cx('sui-TitleBasic', className, {
    [`${buildAlignClassName(align)}`]: true
  })

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
  className: PropTypes.node,
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

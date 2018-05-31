import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const TITLE_ALIGN_CLASSNAMES = {
  left: 'sui-TitleBasic--alignLeft',
  center: 'sui-TitleBasic--alignCenter',
  right: 'sui-TitleBasic--alignRight'
}

export default function TitleBasic({align, className, subtitle, title}) {
  const titleBasicClassName = cx(
    'sui-TitleBasic',
    className,
    TITLE_ALIGN_CLASSNAMES[align]
  )

  return (
    <div className={titleBasicClassName}>
      <h1 className="sui-TitleBasic-title">{title}</h1>
      {subtitle && <h2 className="sui-TitleBasic-subtitle">{subtitle}</h2>}
    </div>
  )
}

TitleBasic.displayName = 'TitleBasic'

TitleBasic.propTypes = {
  /**
   * Defines the text alignment of title and subtitle.
   */
  align: PropTypes.oneOf(Object.keys(TITLE_ALIGN_CLASSNAMES)),
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

import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const SECTION_TITLE_ALIGNMENTS = ['left', 'center', 'right']

const SectionBasic = ({className, children, textContent, title, titleAlign, subtitle, subtitleAlign, lineSeparator}) => (
  <section className={cx('sui-SectionBasic', className)}>
    <div className='sui-SectionBasic-header'>
      <h3 className={cx('sui-SectionBasic-title', `sui-SectionBasic-title--${titleAlign}`)}>{title}</h3>
      {subtitle &&
      <h5 className={cx('sui-SectionBasic-subtitle', `sui-SectionBasic-subtitle--${subtitleAlign}`)}>{subtitle}</h5>}
    </div>
    <div className='sui-SectionBasic-content'>
      {textContent && <p className='sui-SectionBasic-contentOnlyText'>{textContent}</p>}
      {children}
    </div>
    {lineSeparator && <hr className='sui-SectionBasic-lineSeparator' />}
  </section>
)

SectionBasic.displayName = 'SectionBasic'

SectionBasic.propTypes = {
  /**
   * HTML Node to include as component's children. Can be a single HTML element, a plain text, or an array of them.
   */
  children: PropTypes.node,
  /**
   * CSS className to apply to Section Basic container.
   */
  className: PropTypes.string,
  /**
   * If true, include an "hr" separator element at the bottom of the section.
   */
  lineSeparator: PropTypes.bool,
  /**
   * Text to be displayed as subtitle at the top of the Section (below section's main title).
   */
  subtitle: PropTypes.string,
  /**
   * Text alignment of Section's subtitle.
   */
  subtitleAlign: PropTypes.oneOf(SECTION_TITLE_ALIGNMENTS),
  /**
   * If the content of the Section will be pure text, it can be specified through this option and will be added directly
   * in the component wrapped by a HTML paragraph element.
   */
  textContent: PropTypes.string,
  /**
   * Text to be displayed as title at the top of the Section.
   */
  title: PropTypes.string,
  /**
   * Text alignment of Section's title.
   */
  titleAlign: PropTypes.oneOf(SECTION_TITLE_ALIGNMENTS)
}

SectionBasic.defaultProps = {
  lineSeparator: true,
  subtitleAlign: 'right',
  titleAlign: 'left'
}

export default SectionBasic

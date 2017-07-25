import React, {PropTypes} from 'react'
import cx from 'classnames'

const TitleMultisize = ({className, postTitle, preTitle, title}) => (
  <div className={cx('sui-TitleMultisize', className)}>
    {preTitle && <h3 className='sui-TitleMultisize-preTitle'>{preTitle}</h3>}
    {title && <h1 className='sui-TitleMultisize-title'>{title}</h1>}
    {postTitle && <h3 className='sui-TitleMultisize-postTitle'>{postTitle}</h3>}
  </div>
)

TitleMultisize.displayName = 'TitleMultisize'

TitleMultisize.propTypes = {
  /**
   * CSS classNames to apply to Title Multisize container.
   */
  className: PropTypes.node,
  /**
   * Text to display after main title (h3).
   */
  postTitle: PropTypes.node,
  /**
   * Text to display before main title (h3).
   */
  preTitle: PropTypes.node,
  /**
   * Text to display as main title (h1).
   */
  title: PropTypes.string.isRequired
}

export default TitleMultisize

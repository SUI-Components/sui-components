import React, {PropTypes} from 'react'
import cx from 'classnames'

/**
 * Builds an HTML/React Element depending on the size declared (s: H3, m: H2, l: H1).
 * @param size {string} Size (s, m, l) of title element.
 * @param className {string} CSS classNames to apply to element.
 * @param content {element} Children of title element. Could be an element (HTML/React Element), string, or an array of both.
 * @returns {element} React Title Element.
 * @private
 */
const _buildTitleElement = (size, className, content) => {
  let element = null
  if (content) {
    if (size === 'l') {
      element = <h1 className={className}>{content}</h1>
    } else if (size === 'm') {
      element = <h2 className={className}>{content}</h2>
    } else if (size === 's') {
      element = <h3 className={className}>{content}</h3>
    }
  }
  return element
}

const TitleMultisize = ({className, postTitle, postTitleSize, preTitle, preTitleSize, title, titleSize}) => (
  <div className={cx('sui-TitleMultisize', className)}>
    {_buildTitleElement(preTitleSize, cx('sui-TitleMultisize-preTitle', `sui-TitleMultisize-preTitle--${preTitleSize}`), preTitle)}
    {_buildTitleElement(titleSize, cx('sui-TitleMultisize-title', `sui-TitleMultisize-title--${titleSize}`), title)}
    {_buildTitleElement(postTitleSize, cx('sui-TitleMultisize-postTitle', `sui-TitleMultisize-postTitle--${postTitleSize}`), postTitle)}
  </div>
)

TitleMultisize.displayName = 'TitleMultisize'

TitleMultisize.propTypes = {
  /**
   * CSS classNames to apply to Title Multisize container.
   */
  className: PropTypes.string,
  /**
   * Text to display after main title (h3).
   */
  postTitle: PropTypes.node,
  /**
   * Size of post-title: s = h3, m = h2, l = h1.
   */
  postTitleSize: PropTypes.oneOf([
    's', 'm', 'l'
  ]),
  /**
   * Text to display before main title (h3).
   */
  preTitle: PropTypes.node,
  /**
   * Size of pre-title: s = h3, m = h2, l = h1.
   */
  preTitleSize: PropTypes.oneOf([
    's', 'm', 'l'
  ]),
  /**
   * Text to display as main title (h1).
   */
  title: PropTypes.string.isRequired,
  /**
   * Size of title: s = h3, m = h2, l = h1.
   */
  titleSize: PropTypes.oneOf([
    's', 'm', 'l'
  ])
}

TitleMultisize.defaultProps = {
  postTitleSize: 's',
  preTitleSize: 's',
  titleSize: 'l'
}

export default TitleMultisize

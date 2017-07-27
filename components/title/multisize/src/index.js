import React, {PropTypes} from 'react'
import cx from 'classnames'

// Map object for title sizes and HTML Tags.
const TAG_FOR_SIZE = {
  'l': 'h1',
  'm': 'h2',
  's': 'h3'
}

/**
 * Builds an HTML/React Element depending on the size declared (s: H3, m: H2, l: H1).
 * @param size {string} Size (s, m, l) of title element.
 * @param className {string} CSS classNames to apply to element.
 * @param content {element} Children of title element. Could be an element (HTML/React Element), string, or an array of both.
 * @returns {element} React Title Element.
 * @private
 */
const _buildTitleElement = (size, className, content) => {
  // get the corresponding tag for requested size
  const Tag = TAG_FOR_SIZE[size]
  // return the element if has content title
  return content && <Tag className={className}>{content}</Tag>
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

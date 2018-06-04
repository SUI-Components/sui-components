import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

// Map object for title sizes and HTML Tags.
const TAG_FOR_SIZE = {
  xl: 'h1',
  l: 'h2',
  m: 'h3',
  s: 'h4',
  xs: 'h5'
}

const TITLE_SIZES = Object.keys(TAG_FOR_SIZE)

/**
 * Builds an HTML/React Element depending on the size declared (xs: H5, s: H4, m: H3, l: H2, xl = H1).
 * @param size {string} Size (xs, s, m, l, xl) of title element.
 * @param className {string} CSS classNames to apply to element.
 * @param content {element} Children of title element. Could be an element (HTML/React Element), string, or an array of both.
 * @returns {element} React Title Element.
 */
const buildTitleElement = (size, className, content) => {
  const Tag = TAG_FOR_SIZE[size]
  return content && <Tag className={className}>{content}</Tag>
}

const TitleMultisize = ({
  className,
  orientation,
  postTitle,
  postTitleSize,
  preTitle,
  preTitleSize,
  title,
  titleSize
}) => (
  <div
    className={cx(
      'sui-TitleMultisize',
      `sui-TitleMultisize--${orientation}`,
      className
    )}
  >
    {buildTitleElement(
      preTitleSize,
      cx(
        'sui-TitleMultisize-preTitle',
        `sui-TitleMultisize-preTitle--${preTitleSize}`
      ),
      preTitle
    )}
    {buildTitleElement(
      titleSize,
      cx('sui-TitleMultisize-title', `sui-TitleMultisize-title--${titleSize}`),
      title
    )}
    {buildTitleElement(
      postTitleSize,
      cx(
        'sui-TitleMultisize-postTitle',
        `sui-TitleMultisize-postTitle--${postTitleSize}`
      ),
      postTitle
    )}
  </div>
)

TitleMultisize.displayName = 'TitleMultisize'

TitleMultisize.propTypes = {
  /**
   * CSS classNames to apply to Title Multisize container.
   */
  className: PropTypes.string,
  /**
   * Orientation of the title segments (vertical | horizontal).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Text to display after main title (h3).
   */
  postTitle: PropTypes.node,
  /**
   * Size of post-title: xs = h5, s = h4, m = h3, l = h2, xl = h1.
   */
  postTitleSize: PropTypes.oneOf(TITLE_SIZES),
  /**
   * Text to display before main title (h3).
   */
  preTitle: PropTypes.node,
  /**
   * Size of pre-title: xs = h5, s = h4, m = h3, l = h2, xl = h1.
   */
  preTitleSize: PropTypes.oneOf(TITLE_SIZES),
  /**
   * Text to display as main title (h1).
   */
  title: PropTypes.node.isRequired,
  /**
   * Size of title: xs = h5, s = h4, m = h3, l = h2, xl = h1.
   */
  titleSize: PropTypes.oneOf(TITLE_SIZES)
}

TitleMultisize.defaultProps = {
  orientation: 'vertical',
  postTitleSize: 's',
  preTitleSize: 'xs',
  titleSize: 'xl'
}

export default TitleMultisize

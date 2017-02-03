import React, {PropTypes} from 'react'
import CircleX from '@schibstedspain/sui-svgiconset/lib/CircleX'
import cx from 'classnames'

// onClick handler

const IconDelete = ({icon: Icon} = {}) => Icon
  ? <Icon svgClass='sui-TagChip-delete-icon' />
  : <CircleX svgClass='sui-TagChip-delete-icon' />

const Tag = ({Link, url, children, className}) => url
  ? <Link href={url} className={className}>{children}</Link>
  : <span className={className}>{children}</span>

const TagChip = ({onRequestDelete, onClick, label, link: url, linkFactory, icon}) =>
  <Tag
    onClick={onClick}
    url={url}
    Link={linkFactory}
    className={cx('sui-TagChip', {
      'sui-TagChip-link': url || onClick
    })}
    >
    {label}
    {onRequestDelete &&
      <span onClick={onRequestDelete} className='sui-TagChip-delete'>
        <IconDelete icon={icon} />
      </span>
    }
  </Tag>

TagChip.displayName = 'TagChip'

TagChip.propTypes = {
  /**
   * onRequestDelete event handler
   */
  onRequestDelete: PropTypes.func,
  /**
   * onClick event handler
   */
  onClick: PropTypes.func,
  /**
   * link url string
   */
  link: PropTypes.string,
  /**
   * tag text
   */
  label: PropTypes.string.isRequired,
  /**
   * Delete custom icon
   */
  icon: PropTypes.func,
  linkFactory: PropTypes.func
}

TagChip.defaultProps = {
  linkFactory: ({ href, className, children }) =>
    <a href={href} className={className}>{children}</a>
}

export default TagChip

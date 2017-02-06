import React, {PropTypes} from 'react'
import CircleX from '@schibstedspain/sui-svgiconset/lib/Circlex'
import cx from 'classnames'

const Tag = ({Link, children, url, ...rest} = {}) => url
  ? <Link href={url} {...rest}>{children}</Link>
  : <span {...rest}>{children}</span>

const tagChipClassName = ({isClickable}) => cx('sui-TagChip', {
  'sui-TagChip-link': isClickable
})

const preventDefaultHandler = handler => event =>
  handler && (
    event.preventDefault(),
    event.stopPropagation(),
    handler.apply()
  )

const TagChip = ({onRequestDelete, onClick, label, link: url, linkFactory, icon: Icon = CircleX} = {}) =>
  <Tag
    onClick={preventDefaultHandler(onClick)}
    url={url}
    Link={linkFactory}
    className={tagChipClassName({isClickable: url || onClick})}
    >
    {label}
    {onRequestDelete &&
      <span onClick={preventDefaultHandler(onRequestDelete)} className='sui-TagChip-delete'>
        <Icon svgClass='sui-TagChip-deleteIcon' />
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
  icon: PropTypes.func
}

TagChip.defaultProps = {
  linkFactory: ({ href, className, children } = {}) =>
    <a href={href} className={className}>{children}</a>
}

export default TagChip

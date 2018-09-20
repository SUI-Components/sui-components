import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_LINK = `${BASE_CLASS}-link`
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

const AtomCardDiv = ({
  className, // eslint-disable-line react/prop-types
  media: Media, // eslint-disable-line react/prop-types
  content: Content, // eslint-disable-line react/prop-types
  ...props
}) => (
  <div className={className} {...props}>
    <div className={CLASS_MEDIA}>
      <Media />
    </div>
    <div className={CLASS_INFO}>
      <Content />
    </div>
  </div>
)

const AtomCard = ({tabindex, vertical, highlight, href, ...props}) => {
  const className = cx(
    BASE_CLASS,
    vertical && `${BASE_CLASS}-vertical`,
    highlight && `${BASE_CLASS}-highlight`
  )

  if (href)
    return (
      <a href={href} tabIndex={tabindex} className={CLASS_LINK}>
        <AtomCardDiv className={className} {...props} />
      </a>
    )
  return <AtomCardDiv className={className} tabindex={tabindex} {...props} />
}

AtomCard.displayName = 'AtomCard'

AtomCard.propTypes = {
  /** HTML (component) to be displayed on one side */
  media: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /** HTML (component) to be displayed on the other side */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /** true for vertical layout */
  vertical: PropTypes.bool,

  /** true for highlight mode */
  highlight: PropTypes.bool,

  /** url target of the card */
  href: PropTypes.string,

  /** tab order */
  tabindex: PropTypes.string
}

export default AtomCard

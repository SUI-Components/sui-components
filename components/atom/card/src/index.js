import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
const CLASS_RESPONSIVE = `${BASE_CLASS}--responsive`
const CLASS_HIGHLIGHT = `${BASE_CLASS}--highlight`
const CLASS_LINK = `${BASE_CLASS}-link`

const AtomCard = ({
  media: Media,
  content: Content,
  vertical,
  responsive,
  highlight,
  href,
  tabIndex
}) => {
  const redirectToHref = () => {
    if (href) window.location.href = href
  }

  const redirectOnEnter = e => {
    if (e.key === 'Enter') redirectToHref()
  }

  const isVertical = vertical && !responsive

  const classNames = cx(
    BASE_CLASS,
    isVertical && CLASS_VERTICAL,
    responsive && CLASS_RESPONSIVE,
    highlight && CLASS_HIGHLIGHT,
    href && CLASS_LINK
  )

  return (
    <div
      className={classNames}
      tabIndex={tabIndex}
      onClick={redirectToHref}
      onKeyDown={redirectOnEnter}
    >
      <div className={CLASS_MEDIA}>
        <Media />
      </div>
      <div className={CLASS_INFO}>
        <Content />
      </div>
    </div>
  )
}

AtomCard.displayName = 'AtomCard'

AtomCard.propTypes = {
  /** HTML (component) to be displayed on the left/right side */
  media: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** HTML (component) to be displayed on the other side */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** true for vertical layout */
  vertical: PropTypes.bool,

  /** true for make responsive layout */
  responsive: PropTypes.bool,

  /** true for highlight mode */
  highlight: PropTypes.bool,

  /** url target of the card */
  href: PropTypes.string,

  /** tab order */
  tabIndex: PropTypes.string
}

export default AtomCard

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
const CLASS_HIGHLIGHT = `${BASE_CLASS}--highlight`
const CLASS_LINK = `${BASE_CLASS}-link`

class AtomCard extends Component {
  redirectToHref = () => {
    const {href} = this.props
    if (href) window.location.href = href
  }

  redirectOnEnter = e => {
    if (e.key === 'Enter') this.redirectToHref()
  }

  render() {
    const {
      media: Media,
      content: Content,
      vertical,
      highlight,
      href,
      tabIndex
    } = this.props
    return (
      <div
        className={cx(
          BASE_CLASS,
          vertical && CLASS_VERTICAL,
          highlight && CLASS_HIGHLIGHT,
          href && CLASS_LINK
        )}
        tabIndex={tabIndex}
        onClick={this.redirectToHref}
        onKeyDown={this.redirectOnEnter}
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
}

AtomCard.displayName = 'AtomCard'

AtomCard.propTypes = {
  /** HTML (component) to be displayed on the left/right side */
  media: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** HTML (component) to be displayed on the other side */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** true for vertical layout */
  vertical: PropTypes.bool,

  /** true for highlight mode */
  highlight: PropTypes.bool,

  /** url target of the card */
  href: PropTypes.string,

  /** tab order */
  tabIndex: PropTypes.string
}

export default AtomCard

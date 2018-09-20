import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

class AtomCard extends Component {
  redirectToHref = () => {
    const {href} = this.props
    if (href) window.location.href = href
  }

  redirectOnEnter = e => {
    const {keyCode} = e
    if (keyCode === 13) this.redirectToHref()
  }

  render() {
    const {
      media: Media,
      content: Content,
      vertical,
      highlight,
      href,
      tabindex
    } = this.props
    return (
      <div
        className={cx(
          BASE_CLASS,
          vertical && `${BASE_CLASS}-vertical`,
          highlight && `${BASE_CLASS}-highlight`,
          href && `${BASE_CLASS}-href`
        )}
        tabIndex={tabindex}
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
  /** HTML (component) to be displayed on one side */
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
  tabindex: PropTypes.string
}

export default AtomCard

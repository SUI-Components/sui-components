/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

class AtomCard extends Component {
  render() {
    const {
      media: Media,
      content: Content,
      vertical,
      highlight,
      href
    } = this.props
    return (
      <div
        className={cx(
          BASE_CLASS,
          vertical && `${BASE_CLASS}-vertical`,
          highlight && `${BASE_CLASS}-highlight`,
          href && `${BASE_CLASS}-href`
        )}
        onClick={e => href && (window.location.href = href)}
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

// Remove these comments if you need
// AtomCard.contextTypes = {i18n: PropTypes.object}
// AtomCard.propTypes = {}
// AtomCard.defaultProps = {}

export default AtomCard

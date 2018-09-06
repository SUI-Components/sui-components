import React, {Component} from 'react'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

class AtomCard extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <div className={CLASS_MEDIA} />
        <div className={CLASS_INFO} />
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

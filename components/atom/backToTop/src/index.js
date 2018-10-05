import React, {Component} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomBackToTop'

class AtomBackToTop extends Component {
  state = {
    intervalId: 0
  }

  scrollStep = () => {
    const {pageYOffset, scroll} = window
    const {scrollStep} = this.props
    const {intervalId} = this.state

    if (pageYOffset === 0) clearInterval(intervalId)
    scroll(0, pageYOffset - scrollStep)
  }

  scrollToTop = () => {
    const {scrollStep} = this
    const {delayHide} = this.props
    let intervalId = setInterval(scrollStep, delayHide)
    this.setState({intervalId})
  }

  render() {
    const {scrollToTop} = this
    return (
      <button title="Back to top" className={BASE_CLASS} onClick={scrollToTop}>
        <span className="arrow-up glyphicon glyphicon-chevron-up" />
      </button>
    )
  }
}

AtomBackToTop.displayName = 'AtomBackToTop'

AtomBackToTop.propTypes = {
  scrollStep: PropTypes.number,
  delayHide: PropTypes.number
  // delayShow: PropTypes.number,
  // fadeIn: PropTypes.number,
  // fadeOut: PropTypes.number
}

// Remove these comments if you need
// AtomBackToTop.contextTypes = {i18n: PropTypes.object}
// AtomBackToTop.propTypes = {}
// AtomBackToTop.defaultProps = {}

export default AtomBackToTop

import {Component} from 'react'
import PropTypes from 'prop-types'
import ViewportResize from './viewport-resize'

class BreakpointToggle extends Component {
  state = {}

  constructor (props) {
    super(props)
    this.onViewportResize = this.onViewportResize.bind(this)
  }

  componentDidMount () {
    ViewportResize.addListener(this.onViewportResize)
  }

  componentWillUnmount () {
    ViewportResize.removeListener(this.onViewportResize)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.isDisplayed !== this.state.isDisplayed
  }

  onViewportResize (width, height) {
    const {breakpoint, inverse} = this.props

    this.setState({
      isDisplayed: inverse ? width > breakpoint : width <= breakpoint
    })
  }

  render () {
    const {children} = this.props
    const {isDisplayed} = this.state
    return isDisplayed ? children : null
  }
}

BreakpointToggle.displayName = 'BreakpointToggle'

BreakpointToggle.propTypes = {
  /**
   * Max viewport width before hiding the element
   */
  breakpoint: PropTypes.number.isRequired,
  /**
   * Element to toggle view
   */
  children: PropTypes.element.isRequired,
  /**
   * Indicates the reverse operation
   */
  inverse: PropTypes.bool
}

BreakpointToggle.defaultProps = {
  inverse: false
}

export default BreakpointToggle

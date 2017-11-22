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
    let {breakpoint} = this.props
    this.setState({
      isDisplayed: width <= breakpoint
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
  children: PropTypes.element.isRequired
}

export default BreakpointToggle

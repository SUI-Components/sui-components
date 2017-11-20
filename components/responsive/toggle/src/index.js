import {Component} from 'react'
import PropTypes from 'prop-types'
import ViewportResize from './viewport-resize'

class ResponsiveToggle extends Component {
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

ResponsiveToggle.displayName = 'ResponsiveToggle'

// Remove these comments if you need
// ResponsiveToggle.contextTypes = {i18n: PropTypes.object}
ResponsiveToggle.propTypes = {
  /**
   * Max viewport width before hiding the element
   */
  breakpoint: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
}
// ResponsiveToggle.defaultProps = {}

export default ResponsiveToggle

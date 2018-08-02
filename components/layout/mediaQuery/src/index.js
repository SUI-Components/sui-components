import {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'
import shallowEqual from 'shallowequal'

import {getWidth, matchQueries} from './helpers'

import {BREAKPOINTS} from './breakpoints'

const LayoutMediaQueryFactory = BREAKPOINTS =>
  class extends Component {
    state = {
      params: {}
    }
    containerResizeObserver = null
    matchQueries = matchQueries(BREAKPOINTS)

    componentDidMount() {
      const {viewport} = this.props // eslint-disable-line react/prop-types
      const container = ReactDOM.findDOMNode(this)
      let initialWidth = 0

      if (viewport) {
        window.addEventListener('resize', this.handleWindowResize)
        initialWidth = window.outerWidth
      } else {
        this.containerResizeObserver = new ResizeObserver(
          this.handleContainerResize
        )
        this.containerResizeObserver.observe(container)
        initialWidth = getWidth(container)
      }

      const result = this.matchQueries(initialWidth)
      this.setState({params: result})
    }

    componentWillUnmount() {
      this.containerResizeObserver.disconnect()
      this.containerResizeObserver = null
      window.removeEventListener('resize', this.handleResize)
    }

    handleWindowResize = e => {
      const {outerWidth: width} = e.target
      const {params} = this.state
      const result = this.matchQueries(width)
      if (!shallowEqual(result, params)) this.setState({params: result})
    }

    handleContainerResize = entries => {
      const target = entries[0].target
      const width = getWidth(target)
      const {params} = this.state
      const result = this.matchQueries(width)
      if (!shallowEqual(result, params)) this.setState({params: result})
    }

    render() {
      return this.props.children(this.state.params) // eslint-disable-line react/prop-types
    }
  }

const LayoutMediaQuery = LayoutMediaQueryFactory(BREAKPOINTS)
LayoutMediaQuery.displayName = 'LayoutMediaQuery'

LayoutMediaQuery.propTypes = {
  /** Wether to listen to the viewport resize or not (it listens to the container resize by default) */
  viewport: PropTypes.bool
}

export default LayoutMediaQuery
export {LayoutMediaQueryFactory}

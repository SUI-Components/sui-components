import React, {Component, createRef} from 'react'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'
import shallowEqual from 'shallowequal'

import {getWidth, matchQueries} from './helpers'

import {BREAKPOINTS} from './breakpoints'

const LayoutMediaQueryFactory = function(BREAKPOINTS) {
  return class extends Component {
    static defaultProps = {
      initialMediaQueries: {}
    }

    static propTypes = {
      /**
       * MediaQueries to be used in the first render until componentDidMount is called and it setups the proper media query. Useful for SSR for avoiding re-renders.
       */
      initialMediaQueries: PropTypes.object,
      children: PropTypes.func
    }

    containerRef = createRef()
    state = {
      params: this.props.initialMediaQueries
    }

    containerResizeObserver = null
    matchQueries = matchQueries(BREAKPOINTS)

    componentDidMount() {
      const {viewport} = this.props // eslint-disable-line react/prop-types
      const container = this.containerRef.current
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

    shouldComponentUpdate(_, nextState) {
      return !shallowEqual(this.state.params, nextState.params)
    }

    render() {
      return (
        <div className="sui-Layout-MediaQuery" ref={this.containerRef}>
          {this.props.children(this.state.params)}
        </div>
      )
    }
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

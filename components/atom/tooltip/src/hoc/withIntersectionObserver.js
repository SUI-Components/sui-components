/* global IntersectionObserver */
import React, {Component} from 'react'
import 'intersection-observer' // polyfill
import {getTarget} from 'reactstrap/lib//utils'

export default threshold => BaseComponent => {
  const displayName = BaseComponent.displayName

  return class WithIntersectionObserver extends Component {
    static displayName = `withIntersectionObserver(${displayName})`
    static contextTypes = BaseComponent.contextTypes

    state = {
      isIntersecting: false
    }

    handleChange = ([{isIntersecting}]) => {
      this.setState({isIntersecting})
    }

    componentDidMount() {
      const target = getTarget(this.props.target) // eslint-disable-line react/prop-types
      new IntersectionObserver(this.handleChange).observe(target)
    }

    render() {
      return (
        <BaseComponent {...this.props} isVisible={this.state.isIntersecting} />
      )
    }
  }
}

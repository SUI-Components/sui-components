/* global IntersectionObserver */
import React, {Component} from 'react'
import 'intersection-observer' // polyfill

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

    innerRef = elem => {
      this.refTarget = elem
    }

    componentDidMount() {
      const target = this.refTarget
      new IntersectionObserver(this.handleChange).observe(target)
    }

    render() {
      return (
        <BaseComponent
          {...this.props}
          isVisible={this.state.isIntersecting}
          innerRef={this.innerRef}
        />
      )
    }
  }
}

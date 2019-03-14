import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Circle extends Component {

  static MAX_TRANSITION_TIME_IN_MS = 1250

  state = {
    currentPercentage: this.props.percentage,
    transitionTime: 0
  }

  static getDerivedStateFromProps(props, state) {
    if (Math.abs(props.percentage - state.currentPercentage) < 5) {
      return {
        currentPercentage: props.percentage,
        transitionTime: 0
      }
    }
    return {
        currentPercentage: props.percentage,
        transitionTime: (Circle.MAX_TRANSITION_TIME_IN_MS * props.percentage/100) / 1000
      }
  }

  getPathStyles(percentage, strokeWidth) {
    const {transitionTime} = this.state
    const {withAnimation} = this.props
    const radius = 50 - strokeWidth / 2
    const d = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`
    const len = Math.PI * 2 * radius
    const style = {
      strokeDasharray: `${len}px ${len}px`,
      strokeDashoffset: `${((100 - percentage) / 100) * len}px`,
      transition: withAnimation ? `stroke-dashoffset ${transitionTime}s ease 0s, stroke ${transitionTime}s ease` : ''
    }
    return {
      d,
      style
    }
  }

  getStokeList() {
    const {prefixCls, percentage, strokeWidth} = this.props

    const {pathString, pathStyle} = this.getPathStyles(percentage, strokeWidth)
    return (
      <path
        className={`${prefixCls}-circle-path`}
        d={pathString}
        strokeLinecap="square"
        strokeWidth={strokeWidth}
        fillOpacity="0"
        style={pathStyle}
      />
    )
  }

  render() {
    const {prefixCls, percentage, strokeWidth} = this.props
    return (
      <svg className={`${prefixCls}-circle`} viewBox="0 0 100 100">
        <path
          className={`${prefixCls}-circle-trail`}
          {...this.getPathStyles(100, strokeWidth)}
          strokeWidth={strokeWidth}
          fillOpacity="0"
        />
        <path
          className={`${prefixCls}-circle-path`}
          {...this.getPathStyles(percentage, strokeWidth)}
          strokeLinecap="square"
          strokeWidth={strokeWidth}
          fillOpacity="0"
        />
      </svg>
    )
  }
}

Circle.propTypes = {
  prefixCls: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  strokeWidth: PropTypes.node.isRequired,
  withAnimation: PropTypes.bool
}

Circle.defaultProps = {
  withAnimation: true
}

export default Circle

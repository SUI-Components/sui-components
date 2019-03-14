import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Circle extends Component {

  state = {
    currentPercent: this.props.percent,
    transitionTime: 0
  }

  static getDerivedStateFromProps(props, state) {
    if (Math.abs(props.percent - state.currentPercent) < 5) {
      return {
        currentPercent: props.percent,
        transitionTime: 0
      }
    }
    return {
        currentPercent: props.percent,
        transitionTime: (1250*props.percent/100)/1000
      }
  }

  getPathStyles(percent, strokeWidth) {
    const radius = 50 - strokeWidth / 2
    const {transitionTime} = this.state
    const d = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`
    const len = Math.PI * 2 * radius
    const style = {
      strokeDasharray: `${len}px ${len}px`,
      strokeDashoffset: `${((100 - percent) / 100) * len}px`,
      transition: `stroke-dashoffset ${transitionTime}s ease 0s, stroke ${transitionTime}s ease`
    }
    return {
      d,
      style
    }
  }

  getStokeList() {
    const {prefixCls, percent, strokeWidth} = this.props

    const {pathString, pathStyle} = this.getPathStyles(percent, strokeWidth)
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
    const {prefixCls, percent, strokeWidth} = this.props
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
          {...this.getPathStyles(percent, strokeWidth)}
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
  strokeWidth: PropTypes.node.isRequired
}

export default Circle

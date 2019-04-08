import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SIZES = {
  LARGE: 'large',
  SMALL: 'small'
}

const MODIFIERS = {
  LOADING: 'loading',
  PROGRESS: 'progress',
  ERROR: 'error'
}

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
      transitionTime:
        (Circle.MAX_TRANSITION_TIME_IN_MS * props.percentage) / 100 / 1000
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
      transition: withAnimation
        ? `stroke-dashoffset ${transitionTime}s ease 0s, stroke ${transitionTime}s ease`
        : ''
    }
    return {
      d,
      style
    }
  }

  getStokeList() {
    const {baseClassName, modifier, percentage, strokeWidth} = this.props

    const {pathString, pathStyle} = this.getPathStyles(percentage, strokeWidth)
    return (
      <path
        className={cx(`${baseClassName}-path`, {
          [`${baseClassName}-path--${modifier}`]: !!modifier
        })}
        d={pathString}
        strokeLinecap="square"
        strokeWidth={strokeWidth}
        fillOpacity="0"
        style={pathStyle}
      />
    )
  }

  render() {
    const {baseClassName, modifier, percentage, strokeWidth, size} = this.props
    return (
      <svg
        className={cx(`${baseClassName}-circle`, {
          [`${baseClassName}-circle--${modifier}`]: !!modifier,
          [`${baseClassName}-circle--${size}`]: !!size
        })}
        viewBox="0 0 100 100"
      >
        <path
          className={cx(`${baseClassName}-trail`, {
            [`${baseClassName}-trail--${modifier}`]: !!modifier
          })}
          {...this.getPathStyles(100, strokeWidth)}
          strokeWidth={strokeWidth}
          fillOpacity="0"
        />
        <path
          className={cx(`${baseClassName}-path`, {
            [`${baseClassName}-path--${modifier}`]: !!modifier
          })}
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
  /** Base className to be used in this component  */
  baseClassName: PropTypes.string.isRequired,
  /** CSS modifier for ERROR, LOADING variants  */
  modifier: PropTypes.oneOf(Object.values(MODIFIERS)),
  /** The percentage of the current progress */
  percentage: PropTypes.number.isRequired,
  /** width of the stroke  */
  strokeWidth: PropTypes.node.isRequired,
  /** boolean to activate/desactivate animations */
  withAnimation: PropTypes.bool,
  /** size of the circle [small, large]  */
  size: PropTypes.oneOf(Object.values(SIZES)).isRequired
}

Circle.defaultProps = {
  withAnimation: true
}

export default Circle

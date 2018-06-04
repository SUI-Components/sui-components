import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ViewportResize from './viewport-resize'

class LayoutBreakpointSplit extends Component {
  state = {}

  constructor(props) {
    super(props)
    this.onViewportResize = this.onViewportResize.bind(this)
  }

  componentDidMount() {
    ViewportResize.addListener(this.onViewportResize)
  }

  componentWillUnmount() {
    ViewportResize.removeListener(this.onViewportResize)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.isSplitted !== this.state.isSplitted ||
      nextProps.current !== this.props.current ||
      nextProps.children !== this.props.children
    )
  }

  onViewportResize(width, height) {
    let {breakpoint} = this.props
    this.setState({
      isSplitted: width <= breakpoint
    })
  }

  render() {
    let {children, current} = this.props
    let {isSplitted} = this.state
    children = isSplitted ? [children[current]] : children

    const content = React.Children.map(
      children,
      ({type: Type, props}, index) => (
        <Type
          {...props}
          key={index}
          className={cx(
            props.className,
            isSplitted && 'sui-LayoutBreakpointSplit-currentView'
          )}
        />
      )
    )

    const className = cx('sui-LayoutBreakpointSplit', this.props.className)
    return <span className={className}>{content}</span>
  }
}

LayoutBreakpointSplit.displayName = 'LayoutBreakpointSplit'

LayoutBreakpointSplit.propTypes = {
  /**
   * Elements each view
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Min viewport width before activating views split
   */
  breakpoint: PropTypes.number.isRequired,
  /**
   * View to show in mobile mode
   */
  current: PropTypes.number,
  /**
   * Custom className for container
   */
  className: PropTypes.string
}

LayoutBreakpointSplit.defaultProps = {
  current: 0
}

export default LayoutBreakpointSplit

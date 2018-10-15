import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeCollapsible'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const CONTAINER_BUTTON_CLASS = `${BASE_CLASS}-container`
const COLLAPSED_CLASS = 'is-collapsed'
const BUTTON_CLASS = `${BASE_CLASS}-btn`
const BUTTON_CONTENT_CLASS = `${BUTTON_CLASS}-content`
const ICON_CLASS = `${BASE_CLASS}-icon`
const MIN_HEIGHT = 100 // px
const MAX_HEIGHT = null

class MoleculeCollapsible extends Component {
  constructor(props) {
    super(props)
    const {isCollapsed} = this.props
    this.childrenContainer = React.createRef()
    this.state = {
      collapsed: isCollapsed,
      showButton: true,
      maxHeight: MIN_HEIGHT
    }
  }

  toggleCollapse = () => {
    const {collapsed, showButton} = this.state
    const {onOpen} = this.props
    if (showButton) {
      this.setState({collapsed: !collapsed})
      collapsed && onOpen()
    }
  }

  componentDidMount() {
    const offsetHeight = this.props.maxHeight
      ? this.props.maxHeight
      : this.childrenContainer.current.offsetHeight
    this.setState({
      showButton: offsetHeight >= this.props.minHeight,
      maxHeight: offsetHeight
    })
  }

  componentWillReceiveProps() {
    let offsetHeight
    if (this.props.maxHeight) {
      offsetHeight = this.props.maxHeight
    } else {
      offsetHeight =
        this.state.maxHeight === this.childrenContainer.current.offsetHeight
          ? this.state.maxHeight
          : this.childrenContainer.current.offsetHeight
    }
    this.setState({
      showButton: offsetHeight >= this.props.minHeight,
      maxHeight: offsetHeight
    })
  }

  render() {
    const {collapsed, showButton, maxHeight} = this.state
    const {
      children,
      minHeight,
      icon,
      showText,
      hideText,
      withGradient,
      withTransition
    } = this.props
    const wrapperClassName = cx(`${BASE_CLASS}`, {
      [`${BASE_CLASS}--withGradient`]: withGradient,
      [COLLAPSED_CLASS]: collapsed
    })
    const iconClassName = cx(`${ICON_CLASS}`, {
      [COLLAPSED_CLASS]: collapsed
    })
    const containerClassName = cx(`${CONTAINER_BUTTON_CLASS}`, {
      [`${CONTAINER_BUTTON_CLASS}--withGradient`]: withGradient,
      [COLLAPSED_CLASS]: collapsed
    })
    const contentClassName = cx(`${CONTENT_CLASS}`, {
      [`${CONTENT_CLASS}--withTransition`]: withTransition
    })
    const containerHeight =
      showButton && collapsed ? `${minHeight}px` : `${maxHeight}px`

    return (
      <div className={wrapperClassName}>
        <div
          className={contentClassName}
          style={{maxHeight: `${containerHeight}`}}
        >
          <div ref={this.childrenContainer}>{children}</div>
        </div>
        {showButton && (
          <div className={containerClassName}>
            <button
              type="button"
              className={BUTTON_CLASS}
              onClick={this.toggleCollapse}
            >
              <span className={BUTTON_CONTENT_CLASS} tabIndex="-1">
                {collapsed ? showText : hideText}
                <span className={iconClassName}>{icon}</span>
              </span>
            </button>
          </div>
        )}
      </div>
    )
  }
}

MoleculeCollapsible.displayName = 'MoleculeCollapsible'

MoleculeCollapsible.propTypes = {
  /**
   * Content to collapse
   */
  children: PropTypes.node.isRequired,
  /**
   * Define the min height visible
   */
  minHeight: PropTypes.number,
  /**
   * Define the max height visible
   */
  maxHeight: PropTypes.number,
  /**
   * Icon to be added on the right of the content
   */
  icon: PropTypes.node.isRequired,
  /**
   * Text to show when content is collapsed
   */
  showText: PropTypes.string.isRequired,
  /**
   * Text to show when content is not collapsed
   */
  hideText: PropTypes.string.isRequired,
  /**
   * Activate/deactivate gradient
   */
  withGradient: PropTypes.bool,
  /**
   * Activate/deactivate transition
   */
  withTransition: PropTypes.bool,
  /**
   * On open callback
   */
  onOpen: PropTypes.func,
  /**
   * On close callback
   */
  isCollapsed: PropTypes.bool
}

MoleculeCollapsible.defaultProps = {
  minHeight: MIN_HEIGHT,
  maxHeight: MAX_HEIGHT,
  withGradient: true,
  withTransition: true,
  onOpen: () => {},
  isCollapsed: true
}

export default MoleculeCollapsible

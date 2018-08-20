import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

const ANIMATION_SPEED_CLASSNAMES = {
  normal: 'sui-CollapsibleBasic-transitionNormal',
  fast: 'sui-CollapsibleBasic-transitionFast'
}

class CollapsibleBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {isCollapsed: props.collapsed}
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    // const with new state
    const isCollapsed = !this.state.isCollapsed
    this.setState({isCollapsed: isCollapsed})
    this.props.handleClick(isCollapsed)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isCollapsed: nextProps.collapsed})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isCollapsed !== nextState.isCollapsed
  }

  render() {
    const {
      icon: ArrowIcon,
      label,
      animationSpeed,
      hideTriggerIcon,
      children,
      isClickable
    } = this.props
    const {isCollapsed} = this.state
    const cssClassNames = cx('sui-CollapsibleBasic', {
      'is-collapsed': isCollapsed,
      'is-expanded': !isCollapsed
    })
    const contentCssClassNames = cx(
      'sui-CollapsibleBasic-collapsibleContent',
      ANIMATION_SPEED_CLASSNAMES[animationSpeed]
    )

    return (
      <div className={cssClassNames}>
        <div
          className="sui-CollapsibleBasic-trigger"
          onClick={isClickable ? this._handleClick : undefined}
        >
          <div className="sui-CollapsibleBasic-trigger-label">{label}</div>
          {!hideTriggerIcon && (
            <div className="sui-CollapsibleBasic-trigger-iconBox">
              <ArrowIcon
                svgClass="sui-CollapsibleBasic-trigger-iconBox-icon"
                className="sui-CollapsibleBasic-trigger-iconBox-icon"
              />
            </div>
          )}
        </div>
        <div className={contentCssClassNames}>{children}</div>
      </div>
    )
  }
}

CollapsibleBasic.displayName = 'CollapsibleBasic'

CollapsibleBasic.propTypes = {
  /**
   * label to be displayed.
   */
  label: PropTypes.node.isRequired,
  /**
   * children to be displayed when expanding component.
   */
  children: PropTypes.node.isRequired,
  /**
   * icon to be displayed.
   */
  icon: PropTypes.func,
  /**
   * first state.
   */
  collapsed: PropTypes.bool,
  /**
   * Click handler. Receives a boolean telling if the component is (or is being) collapsed.
   */
  handleClick: PropTypes.func,
  /**
   * Flag to hide the icon that triggers expand/collapse event.
   */
  hideTriggerIcon: PropTypes.bool,
  /**
   * Allow click in the label to open or close it
   */
  isClickable: PropTypes.bool,
  /**
   * Customise the speed of the transition animation: normal 0.3s, fast: 0.15s
   */
  animationSpeed: PropTypes.oneOf(Object.keys(ANIMATION_SPEED_CLASSNAMES))
}

CollapsibleBasic.defaultProps = {
  icon: Chevronbottom,
  collapsed: true,
  hideTriggerIcon: false,
  animationSpeed: 'normal',
  isClickable: true,
  handleClick: () => {}
}

export default CollapsibleBasic

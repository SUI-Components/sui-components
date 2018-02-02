import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

class CollapsibleBasic extends Component {
  constructor (props) {
    super(props)
    this.state = {isCollapsed: props.collapsed}
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick () {
    // const with new state
    const isCollapsed = !this.state.isCollapsed
    this.setState({isCollapsed: isCollapsed})
    this.props.handleClick(isCollapsed)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({isCollapsed: nextProps.collapsed})
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.isCollapsed !== nextState.isCollapsed
  }

  render () {
    const stateClassName = cx(
      {'is-collapsed': this.state.isCollapsed},
      {'is-expanded': !this.state.isCollapsed}
    )

    const mainClassNames = cx(
      'sui-CollapsibleBasic',
      stateClassName
    )

    const ArrowIcon = this.props.icon

    return (
      <div className={mainClassNames}>
        <div className='sui-CollapsibleBasic-trigger' onClick={this._handleClick}>
          <div className='sui-CollapsibleBasic-trigger-label'>{this.props.label}</div>
          <div className='sui-CollapsibleBasic-trigger-iconBox'>
            <ArrowIcon svgClass='sui-CollapsibleBasic-trigger-iconBox-icon' />
          </div>
        </div>
        <div className='sui-CollapsibleBasic-collapsibleContent'>{this.props.children}</div>
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
  handleClick: PropTypes.func
}

CollapsibleBasic.defaultProps = {
  icon: Chevronbottom,
  collapsed: true,
  handleClick: () => {}
}

export default CollapsibleBasic

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'

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

  render () {
    const stateClassName = cx(
      {'is-collapsed': this.state.isCollapsed},
      {'is-expanded': !this.state.isCollapsed}
    )

    const mainClassNames = cx(
      'sui-CollapsibleBasic',
      stateClassName
    )

    return (
      <div className={mainClassNames}>
        <div className='sui-CollapsibleBasic-trigger' onClick={this._handleClick}>
          <div className='sui-CollapsibleBasic-trigger-label'>{this.props.label}</div>
          <div className='sui-CollapsibleBasic-trigger-icon'>{this.props.icon}</div>
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
  icon: PropTypes.node,
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
  icon: <svg className='sui-CollapsibleBasic-defaultIcon' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><path fill='none' fillRule='evenodd' stroke='#2097B6' strokeLinecap='round' strokeLinejoin='round' d='M1.5 6L8 12l6.5-6' /></svg>,
  collapsed: true,
  handleClick: () => {}
}

export default CollapsibleBasic

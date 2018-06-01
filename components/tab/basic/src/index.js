import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'

export default class TabBasic extends Component {
  state = {
    activeTab: this.props.activeTab
  }

  _createHandleClick(index) {
    return event => {
      event.preventDefault()
      this.setState({activeTab: index})
      this.props.handleClick(index, this.props.tabsList[index])
    }
  }

  _renderTabs() {
    const {tabsList} = this.props
    const {activeTab} = this.state

    return tabsList.map((tabLabel, index) => {
      const tabLinkClassName = cx('sui-TabBasic-link', {
        'is-active': activeTab === index
      })

      return (
        <li className="sui-TabBasic-item" key={index}>
          <button
            className={tabLinkClassName}
            onClick={this._createHandleClick(index)}
            role="tab"
          >
            {tabLabel}
          </button>
        </li>
      )
    })
  }

  render() {
    return <ul className="sui-TabBasic">{this._renderTabs()}</ul>
  }
}

TabBasic.displayName = 'TabBasic'
TabBasic.defaultProps = {
  activeTab: 0
}

TabBasic.propTypes = {
  /**
   * List of tabs
   */
  tabsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

  /**
   * Point at the selected tab
   */
  activeTab: PropTypes.number,

  /**
   * By clicking on every single tab, `handleClick` is triggered and sends an
   * object with the item information and position in the array.
   */
  handleClick: PropTypes.func.isRequired
}

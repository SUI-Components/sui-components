import React, {Component, PropTypes} from 'react'
import cx from 'classnames'

export default class NavigationTabs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: props.activeTab
    }
  }
  _renderTabs () {
    const { tabsList, handleClick } = this.props
    return tabsList.map((tab, index) => {
      const { label, url } = tab
      const _handleClick = (index) => (event) => {
        event.preventDefault()
        this.setState({ activeTab: index })
        handleClick(this.props.tabsList[index], index)
      }
      const tabLinkClassName = cx('sui-NavigationTabs-link', {
        'is-active': this.state.activeTab === index
      })
      return (
        <li className='sui-NavigationTabs-item' key={index}>
          <a
            onClick={_handleClick(index)}
            className={tabLinkClassName}
            href={url}>
            {label}
          </a>
        </li>
      )
    })
  }
  render () {
    return (
      <ul className='sui-NavigationTabs'>
        {this._renderTabs()}
      </ul>
    )
  }
}
NavigationTabs.displayName = 'NavigationTabs'
NavigationTabs.defaultProps = {
  activeTab: 0
}

NavigationTabs.propTypes = {
  /**
   * List of tabs
   */
  tabsList: PropTypes.arrayOf(PropTypes.shape({

    /**
     * Tab content
     */
    label: PropTypes.string.isRequired
  })).isRequired,

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

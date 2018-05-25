import PropTypes from 'prop-types'
import React, {Component} from 'react'
import TabsBasic from '@schibstedspain/sui-tab-basic'
import cx from 'classnames'

const NO_OP = () => {}

class TabContent extends Component {
  state = {
    activeTab: this.props.activeTab
  }

  _handleClick = activeTab => {
    this.setState({activeTab})
    this.props.onTabChange(activeTab)
  }

  _renderContent({activeTab, tabsContent}) {
    const {renderInactiveContent} = this.props
    return tabsContent.reduce((contentToRender, content, indexTab) => {
      const isActive = indexTab === activeTab
      if (isActive || renderInactiveContent) {
        const className = cx('sui-TabContent-content', {
          'is-active': isActive
        })

        contentToRender.push(
          <section className={className} key={indexTab}>
            {content}
          </section>
        )
      }
      return contentToRender
    }, [])
  }

  shouldComponentUpdate(nextProps, nextState) {
    // re-render the component only if the user is changing the activated tab
    // we might want to make the content of the tabs dynamic as well and we may change this
    return nextState.activeTab !== this.state.activeTab
  }

  render() {
    const {panels} = this.props
    const {activeTab} = this.state

    const tabsList = panels.map(panel => panel.title)
    const tabsContent = panels.map(panel => panel.content)

    return (
      <div className="sui-TabContent">
        <TabsBasic
          activeTab={activeTab}
          handleClick={this._handleClick}
          tabsList={tabsList}
        />
        {this._renderContent({activeTab, tabsContent})}
      </div>
    )
  }
}

TabContent.displayName = 'TabContent'

TabContent.defaultProps = {
  activeTab: 0,
  renderInactiveContent: true,
  onTabChange: NO_OP
}

TabContent.propTypes = {
  /**
   * Point at the selected tab
   */
  activeTab: PropTypes.number,
  /**
   * Specify if you want to render the non active content tabs but hide it with css
   */
  renderInactiveContent: PropTypes.bool,
  /**
   * List of panels to be tabbed
   */
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Title for the panel
       */
      title: PropTypes.string.isRequired,
      /**
       * Content for the panel
       */
      content: PropTypes.element.isRequired
    }).isRequired
  ).isRequired,
  /**
   * Callback to execute when tab content has changed.
   */
  onTabChange: PropTypes.func
}

export default TabContent

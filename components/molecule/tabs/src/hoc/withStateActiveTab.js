import React, {Component} from 'react'
import PropTypes from 'prop-types'

const withStateActiveTab = BaseComponent => {
  const displayName = BaseComponent.displayName

  return class BaseComponentWithState extends Component {
    static displayName = `withStateActiveTab(${displayName})`

    static propTypes = {
      /** value */
      activeTab: PropTypes.any,

      /** onChange callback  */
      onChange: PropTypes.func
    }

    static defaultProps = {
      onChange: () => {}
    }

    state = {
      activeTab: null
    }

    componentDidMount() {
      const {children} = this.props // eslint-disable-line
      React.Children.forEach(children, (child, index) => {
        const {active} = child.props
        if (active) this.setState({activeTab: index + 1})
      })
    }

    get extendedChildren() {
      const {children} = this.props // eslint-disable-line
      const {activeTab} = this.state
      return React.Children.toArray(children)
        .filter(Boolean)
        .map((child, index, children) => {
          const numTab = index + 1
          const active = activeTab === numTab
          return React.cloneElement(child, {active})
        })
    }

    onChange = (e, {numTab}) => {
      const {onChange} = this.props
      this.setState({activeTab: numTab}, () => onChange(e, {numTab}))
    }

    render() {
      const {value} = this.state
      const {extendedChildren, onChange, props} = this
      return (
        <BaseComponent {...props} value={value} onChange={onChange}>
          {extendedChildren}
        </BaseComponent>
      )
    }
  }
}

export default withStateActiveTab

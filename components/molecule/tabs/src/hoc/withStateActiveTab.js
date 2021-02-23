import {Children, cloneElement, Component} from 'react'
import PropTypes from 'prop-types'

const withStateActiveTab = BaseComponent => {
  const displayName = BaseComponent.displayName

  class BaseComponentWithState extends Component {
    constructor(props) {
      super(props)
      this.state = {
        activeTab: null
      }
    }

    componentDidMount() {
      const {children} = this.props // eslint-disable-line
      Children.forEach(children, (child, index) => {
        if (child) {
          const {active} = child.props
          if (active) this.setState({activeTab: index + 1})
        }
      })
    }

    get extendedChildren() {
      const {children} = this.props // eslint-disable-line
      const {activeTab} = this.state
      return Children.toArray(children)
        .filter(Boolean)
        .map((child, index, children) => {
          const numTab = index + 1
          const active = activeTab === numTab
          return cloneElement(child, {active})
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
  BaseComponentWithState.propTypes = {
    /** value */
    activeTab: PropTypes.any,

    /** onChange callback  */
    onChange: PropTypes.func
  }

  BaseComponentWithState.defaultProps = {
    onChange: () => {}
  }
  BaseComponentWithState.displayName = `withStateActiveTab(${displayName})`

  return BaseComponentWithState
}

export default withStateActiveTab

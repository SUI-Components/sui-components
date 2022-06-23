import {Component} from 'react'

import PropTypes from 'prop-types'

export default (BaseComponent, BaseChildComponent) => getDynamicOptions => {
  const displayName = BaseComponent.displayName

  return class withDynamicOptions extends Component {
    static displayName = `withDynamicOptions(${displayName})`

    static propTypes = {
      value: PropTypes.string
    }

    state = {options: []}

    async componentDidMount() {
      const {value: query} = this.props
      const options = await getDynamicOptions({query})
      this.setState({options})
    }

    async componentDidUpdate({value: prevQuery}) {
      const {value: query} = this.props
      if (query !== prevQuery) {
        const options = await getDynamicOptions({query})
        this.setState({options})
      }
    }

    render() {
      const {props} = this
      const {options} = this.state
      return (
        <BaseComponent {...props}>
          {options.map((option, i) => (
            <BaseChildComponent key={i} value={option}>
              {option}
            </BaseChildComponent>
          ))}
        </BaseComponent>
      )
    }
  }
}

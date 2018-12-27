import React, {Component} from 'react'

export default (BaseComponent, BaseChildComponent) => options => {
  const displayName = BaseComponent.displayName

  return class withDynamicOptions extends Component {
    static displayName = `withDynamicOptions(${displayName})`

    get options() {
      const {value: option} = this.props // eslint-disable-line
      const currentValueOption = option && option.toLowerCase()
      return option
        ? options.filter(option =>
            option.toLowerCase().includes(currentValueOption)
          )
        : options
    }

    render() {
      const {options, props} = this
      const {value: valueInput} = props
      return (
        <BaseComponent {...props}>
          {options.map((option, i) => (
            <BaseChildComponent
              key={i}
              value={option}
              highlightQuery={valueInput}
            >
              {option}
            </BaseChildComponent>
          ))}
        </BaseComponent>
      )
    }
  }
}

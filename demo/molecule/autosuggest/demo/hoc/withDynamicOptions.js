/* eslint-disable */

import React, {Component} from 'react'

export default (BaseComponent, BaseChildComponent) => options => {
  const displayName = BaseComponent.displayName

  return class withDynamicOptions extends Component {
    static displayName = `withDynamicOptions(${displayName})`

    get options() {
      const {value} = this.props // eslint-disable-line
      const isValueString = value && typeof value === 'string'
      const isValueArray = value && value.map
      if (isValueString) {
        return options.filter(option => {
          const lowerCaseValue = value.toLowerCase()
          const lowerCaseOption = option.toLowerCase()
          return lowerCaseOption.includes(lowerCaseValue)
        })
      }
      if (isValueArray) {
        const lowerCaseValues = value.map(v => v.toLowerCase())
        return options.filter(option => {
          const toLowerCaseOption = option.toLowerCase()
          return lowerCaseValues.includes(toLowerCaseOption)
        })
      }
      console.log({value, options})
      return options
    }

    render() {
      const {options, props} = this
      const {value} = props
      console.log({value, options})
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

import React, {Component} from 'react'
import PropTypes from 'prop-types'

const withStateValue = BaseComponent => {
  const displayName = BaseComponent.displayName

  return class BaseComponentWithState extends Component {
    static displayName = `withStateValue(${displayName})`

    static propTypes = {
      /** value */
      value: PropTypes.any,

      /** onChange callback  */
      onChange: PropTypes.func,

      /** onSelect callback  */
      onSelect: PropTypes.func
    }

    static defaultProps = {
      onChange: () => {}
    }

    state = {
      value: this.props.value
    }

    onChange = (e, {value}) => {
      const {onChange} = this.props
      this.setState({value}, () => onChange(e, {value}))
    }

    onSelect = (e, {value}) => {
      const {onSelect} = this.props
      this.setState({value}, () => onSelect(e, {value}))
    }

    render() {
      const {value} = this.state
      const {onChange, onSelect, props} = this
      return (
        <BaseComponent
          {...props}
          value={value}
          onChange={onChange}
          onSelect={onSelect}
        />
      )
    }
  }
}

export default withStateValue

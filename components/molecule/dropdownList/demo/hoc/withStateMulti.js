/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {Component} from 'react'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownList'
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`

const withStateSingle = BaseComponent => {
  return class BaseComponentWithState extends Component {
    state = {
      value: this.props.value
    }

    static defaultProps = {
      onSelect: () => {},
      value: []
    }

    handleSelect = (e, {value}) => {
      const {onSelect} = this.props
      const newValues = this.state.value.includes(value)
        ? this.state.value.filter(v => v !== value)
        : [...this.state.value, value]

      this.setState({value: newValues}, () => onSelect(e, {value}))
    }

    render() {
      const {value} = this.state
      const {handleSelect, props} = this
      return (
        <div>
          <pre>{JSON.stringify(this.state)}</pre>
          <div className={CLASS_DEMO_LIST}>
            <BaseComponent {...props} value={value} onSelect={handleSelect} />
          </div>
        </div>
      )
    }
  }
}

export default withStateSingle

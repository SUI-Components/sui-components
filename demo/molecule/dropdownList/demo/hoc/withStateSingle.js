/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownList'
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`

const withStateSingle = BaseComponent => {
  return class BaseComponentWithState extends Component {
    state = {
      value: this.props.value
    }

    static defaultProps = {
      onChange: () => {},
      value: ''
    }

    onChange = (e, {value}) => {
      const {onChange} = this.props
      this.setState({value}, () => onChange(e, {value}))
    }

    render() {
      const {value} = this.state
      const {onChange, props} = this
      return (
        <div>
          <pre>{JSON.stringify(this.state)}</pre>
          <div className={CLASS_DEMO_LIST}>
            <BaseComponent {...props} value={value} onChange={onChange} />
          </div>
        </div>
      )
    }
  }
}

export default withStateSingle

/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component, Fragment} from 'react'
import MoleculeDropdownOption from '../../../../../components/molecule/dropdownOption/src'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownOption'
const CLASS_DEMO_OPTION = `${BASE_CLASS_DEMO}-option`

class BasicDropdownOptions extends Component {
  state = {
    selected: null
  }

  handleSelection = (ev, {value: selected}) => {
    this.setState({selected})
  }

  render() {
    const {options} = this.props
    const {selected} = this.state
    return (
      <Fragment>
        <div className={CLASS_DEMO_OPTION}>
          {options.map((option, index) => (
            <MoleculeDropdownOption
              key={index}
              value={option}
              onSelect={this.handleSelection}
              selected={selected === option}
            >
              {option}
            </MoleculeDropdownOption>
          ))}
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </Fragment>
    )
  }
}

export default BasicDropdownOptions

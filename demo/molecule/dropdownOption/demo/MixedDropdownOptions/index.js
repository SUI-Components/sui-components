/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component, Fragment} from 'react'
import MoleculeDropdownOption from '../../../../../components/molecule/dropdownOption/src'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownOption'
const CLASS_DEMO_OPTION = `${BASE_CLASS_DEMO}-option`

class MixedDropdownOptions extends Component {
  state = {
    selected: null
  }

  handleSelection = (ev, {value: selected}) => {
    this.setState({selected})
  }

  render() {
    const {selected} = this.state
    return (
      <Fragment>
        <div className={CLASS_DEMO_OPTION}>
          <MoleculeDropdownOption
            value="option-basic"
            onClick={this.handleSelection}
            selected={selected === 'option-basic'}
          >
            Basic
          </MoleculeDropdownOption>
          <MoleculeDropdownOption
            value="option-disabled"
            onClick={this.handleSelection}
            selected={selected === 'option-disabled'}
            disabled
          >
            Disabled Option
          </MoleculeDropdownOption>
          <MoleculeDropdownOption
            value="option-checkbox"
            onClick={this.handleSelection}
            selected={selected === 'option-checkbox'}
            checkbox
          >
            Option with checkox
          </MoleculeDropdownOption>
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </Fragment>
    )
  }
}

export default MixedDropdownOptions

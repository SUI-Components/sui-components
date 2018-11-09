/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
import MoleculeDropdownOption from '../../../../components/molecule/dropdownOption/src'
import './index.scss'

class Demo extends Component {
  state = {
    selected: {
      default: false,
      disabled: false,
      checkbox: false
    }
  }

  handleOnClick = type => (ev, {selected}) => {
    this.setState(prevState => ({
      selected: {
        ...prevState.selected,
        [type]: selected
      }
    }))
  }

  render() {
    return (
      <div className="DemoMoleculeDropdownOption">
        <h1>MoleculeDropdownOption</h1>
        <div className="DemoMoleculeDropdownOption-section">
          <h2>As a default option</h2>
          <div className="DemoMoleculeDropdownOption-option">
            <MoleculeDropdownOption
              text="Option 1"
              onClick={this.handleOnClick('default')}
            >
              Option 1
            </MoleculeDropdownOption>
          </div>
          <h2>As a disabled option</h2>
          <div className="DemoMoleculeDropdownOption-option">
            <MoleculeDropdownOption
              text="Option 1"
              onClick={this.handleOnClick('disabled')}
              disabled
            >
              Option 2
            </MoleculeDropdownOption>
          </div>
          <h2>As an option with checkbox</h2>
          <div className="DemoMoleculeDropdownOption-option">
            <MoleculeDropdownOption
              text="Option 1"
              onClick={this.handleOnClick('checkbox')}
              checkbox
            >
              Option 3
            </MoleculeDropdownOption>
          </div>
          <h2>Global state</h2>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default Demo

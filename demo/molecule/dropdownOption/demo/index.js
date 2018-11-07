/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
import MoleculeDropdownOption from '../../../../components/molecule/dropdownOption/src'
import './index.scss'

class Demo extends Component {
  state = {
    selected: {
      default: [],
      checkbox: [],
      disabled: []
    }
  }

  handleOnClick = (type, option) => optionSelected => {
    let selected = this.state.selected[type]

    optionSelected
      ? selected.push(option)
      : (selected = selected.filter(value => option !== value))

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
          <h2>As a group of default options</h2>
          <div className="DemoMoleculeDropdownOption-list">
            <MoleculeDropdownOption
              text="Option 1"
              onClick={this.handleOnClick('default', 'option1')}
            />
            <MoleculeDropdownOption
              text="Option 2"
              onClick={this.handleOnClick('default', 'option2')}
            />
            <MoleculeDropdownOption
              text="Option 3"
              onClick={this.handleOnClick('default', 'option3')}
            />
          </div>
          <pre>{JSON.stringify(this.state.selected.default, null, 2)}</pre>
        </div>
        <div className="DemoMoleculeDropdownOption-section">
          <h2>As a group of default options with disabled option</h2>
          <div className="DemoMoleculeDropdownOption-list">
            <MoleculeDropdownOption
              text="Option 1"
              onClick={this.handleOnClick('disabled', 'option1')}
            />
            <MoleculeDropdownOption
              text="Option 2"
              onClick={this.handleOnClick('disabled', 'option2')}
              disabled
            />
            <MoleculeDropdownOption
              text="Option 3"
              onClick={this.handleOnClick('disabled', 'option3')}
            />
          </div>
          <pre>{JSON.stringify(this.state.selected.disabled, null, 2)}</pre>
        </div>
        <div className="DemoMoleculeDropdownOption-section">
          <h2>As a group of options with checkbox</h2>
          <div className="DemoMoleculeDropdownOption-list">
            <MoleculeDropdownOption
              text="Option 1"
              onClick={this.handleOnClick('checkbox', 'option1')}
              checkbox
            />
            <MoleculeDropdownOption
              text="Option 2"
              onClick={this.handleOnClick('checkbox', 'option2')}
              checkbox
            />
            <MoleculeDropdownOption
              text="Option 3"
              onClick={this.handleOnClick('checkbox', 'option3')}
              checkbox
            />
          </div>
          <pre>{JSON.stringify(this.state.selected.checkbox, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default Demo

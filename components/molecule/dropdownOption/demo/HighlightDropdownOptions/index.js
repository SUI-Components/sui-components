/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {Component} from 'react'
import AtomInput from '@s-ui/react-atom-input'

import MoleculeDropdownOption from 'components/molecule/dropdownOption/src/index.js'

const BASE_CLASS_DEMO = 'DemoMoleculeDropdownOption'
const CLASS_DEMO_OPTION = `${BASE_CLASS_DEMO}-option`

class HighlightDropdownOptions extends Component {
  state = {
    selected: null,
    query: ''
  }

  handleSelection = (ev, {value: selected}) => {
    this.setState({selected})
  }

  onChange = (ev, {value: query}) => {
    this.setState({query})
  }

  render() {
    const {onChange} = this
    const {options} = this.props
    const {selected, query} = this.state
    return (
      <>
        <div className={CLASS_DEMO_OPTION}>
          <AtomInput
            placeholder="Type a text (highlight)..."
            onChange={onChange}
          />
          {options.map((option, index) => (
            <MoleculeDropdownOption
              key={index}
              value={option}
              onSelect={this.handleSelection}
              selected={selected === option}
              highlightQuery={query}
            >
              {option}
            </MoleculeDropdownOption>
          ))}
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    )
  }
}

export default HighlightDropdownOptions

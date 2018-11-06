import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AtomInput from '@s-ui/react-atom-input'

class MoleculeDropdownOption extends Component {
  state = {
    checked: this.props.checkboxChecked
  }

  handleCheckboxOnChange = checked => {
    this.setState({checked})
    this.props.checkboxOnChange()
  }

  render() {
    const {checked} = this.state
    const {text, checkbox, checkboxId} = this.props
    return (
      <div className="sui-MoleculeDropdownOption">
        {checkbox && (
          <AtomInput
            id={checkboxId}
            type="checkbox"
            checked={checked}
            onChange={() => {
              this.handleCheckboxOnChange(!checked)
            }}
          />
        )}
        <label htmlFor={checkboxId}>{text}</label>
      </div>
    )
  }
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  checkbox: PropTypes.bool,
  checkboxChecked: PropTypes.bool,
  checkboxId: PropTypes.string,
  checkboxOnChange: PropTypes.func,
  text: PropTypes.string.isRequired
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  checkboxChecked: false,
  checkboxId: 'dropdown_option_checkbox',
  checkboxOnChange: () => {}
}

export default MoleculeDropdownOption

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomInput from '@s-ui/react-atom-input'

const CLASS = 'sui-MoleculeDropdownOption'

class MoleculeDropdownOption extends Component {
  state = {
    selected: this.props.selected
  }

  handleSelect = () => {
    if (!this.props.disabled) {
      this.setState(
        prevState => ({
          selected: !prevState.selected
        }),
        this.props.onChange()
      )
    }
  }

  render() {
    const {selected} = this.state
    const {text, checkbox, disabled} = this.props
    const wrapperClassName = cx(CLASS, {
      [`${CLASS}-checkbox`]: checkbox,
      [`${CLASS}--disabled`]: disabled,
      [`${CLASS}--selected`]: selected
    })
    return (
      <div className={wrapperClassName} onClick={this.handleSelect}>
        {checkbox && (
          <AtomInput type="checkbox" checked={selected} disabled={disabled} />
        )}
        <label className={`${CLASS}-label`}>{text}</label>
      </div>
    )
  }
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  checkbox: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onChange: () => {},
  selected: false
}

export default MoleculeDropdownOption

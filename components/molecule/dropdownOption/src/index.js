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
    const {selected} = this.state
    this.setState({selected: !selected})
    this.props.onChange()
  }

  render() {
    const {selected} = this.state
    const {text, checkbox} = this.props
    const wrapperClassName = cx(CLASS, {
      [`${CLASS}-checkbox`]: checkbox,
      [`${CLASS}--selected`]: selected
    })
    return (
      <div className={wrapperClassName} onClick={e => this.handleSelect(e)}>
        {checkbox && <AtomInput type="checkbox" checked={selected} />}
        <label className={`${CLASS}-label`}>{text}</label>
      </div>
    )
  }
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  checkbox: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  onChange: () => {},
  selected: false
}

export default MoleculeDropdownOption

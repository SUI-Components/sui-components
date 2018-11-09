import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomInput from '@s-ui/react-atom-input'

const CLASS = 'sui-MoleculeDropdownOption'

class MoleculeDropdownOption extends Component {
  state = {
    selected: this.props.initialSelected
  }

  handleClick = ev => {
    if (!this.props.disabled) {
      this.setState(
        prevState => ({
          selected: !prevState.selected
        }),
        () => {
          this.props.onClick(ev, {selected: this.state.selected})
        }
      )
    }
  }

  render() {
    const {selected} = this.state
    const {children, checkbox, disabled} = this.props
    const wrapperClassName = cx(CLASS, {
      [`${CLASS}-checkbox`]: checkbox,
      [`${CLASS}--disabled`]: disabled,
      [`is-selected`]: selected
    })
    return (
      <div className={wrapperClassName} onClick={this.handleClick}>
        {checkbox && (
          <AtomInput type="checkbox" checked={selected} disabled={disabled} />
        )}
        <span className={`${CLASS}-text`}>{children}</span>
      </div>
    )
  }
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  /** Content to be included in the option */
  children: PropTypes.node,

  /** Contains checkbox */
  checkbox: PropTypes.bool,

  /** Is disabled */
  disabled: PropTypes.bool,

  /** onClick callback (ev, {selected}) */
  onClick: PropTypes.func,

  /** Is initial selected */
  initialSelected: PropTypes.bool
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onClick: () => {},
  initialSelected: false
}

export default MoleculeDropdownOption

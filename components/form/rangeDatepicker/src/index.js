import PropTypes from 'prop-types'
import React, {Component} from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import ButtonBasic from '@schibstedspain/sui-button-basic'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

const locale = 'es-es'

class FormRangeDatepicker extends Component {
  state = {
    startDate: this.props.startDate ? moment(this.props.startDate) : null,
    endDate: this.props.endDate ? moment(this.props.endDate) : null
  }

  _handleChange = ({
    startDate = this.state.startDate,
    endDate = this.state.endDate
  }) => {
    if (startDate && startDate.isAfter(endDate)) {
      endDate = startDate
    }

    this._updateDateStateValues({startDate, endDate}, () => {
      this.props.handleChange &&
        this.props.handleChange({
          ...this.state
        })
    })
  }

  _updateDateStateValues({startDate, endDate}, callBack) {
    this.setState(
      {
        ...(startDate && {startDate}),
        ...(endDate && {endDate})
      },
      callBack
    )
  }

  _handleChangeStart = startDate => {
    this._handleChange({startDate})
  }

  _handleChangeEnd = endDate => {
    this._handleChange({endDate})
  }

  _handleClickButton = () => {
    this.props.handleClickButton([this.state.startDate, this.state.endDate])
  }

  render() {
    const InputIcon = this.props.icon
    return (
      <div className="sui-FormRangeDatepicker">
        <div className="sui-FormRangeDatepicker-item">
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            maxDate={moment(this.props.maxDate)}
            onChange={this._handleChangeStart}
            className="sui-FormRangeDatepicker-input"
            locale={locale}
            withPortal={this.props.showModal}
          />
          <div className="sui-FormRangeDatepicker-box">
            <InputIcon svgClass="sui-FormRangeDatepicker-item-icon" />
          </div>
        </div>
        <div className="sui-FormRangeDatepicker-item">
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            maxDate={moment(this.props.maxDate)}
            onChange={this._handleChangeEnd}
            className="sui-FormRangeDatepicker-input"
            locale={locale}
            withPortal={this.props.showModal}
          />
          <div className="sui-FormRangeDatepicker-box">
            <InputIcon svgClass="sui-FormRangeDatepicker-item-icon" />
          </div>
        </div>
        {!!this.props.buttonLabel && (
          <div className="sui-FormRangeDatepicker-button">
            <ButtonBasic
              text={this.props.buttonLabel}
              onClick={this._handleClickButton}
            />
          </div>
        )}
      </div>
    )
  }
}

FormRangeDatepicker.displayName = 'FormRangeDatepicker'

FormRangeDatepicker.propTypes = {
  /**
   * The string content is the label of the button.
   * When is setted show a button.
   */
  buttonLabel: PropTypes.string,
  /**
   * End date of the selected range
   */
  endDate: PropTypes.instanceOf(Date),
  /**
   * Event that will send the init date
   */
  handleChange: PropTypes.func,
  /**
   * Click event that will send the date range
   */
  handleClickButton: PropTypes.func,
  /**
   * Maximum date that the calendar allows to select
   */
  maxDate: PropTypes.instanceOf(Date),
  /**
   * Init date of the selected range
   */
  startDate: PropTypes.instanceOf(Date),
  /**
   * Icon of select inputs
   */
  icon: PropTypes.func,
  /**
   * Show the datepicker in a new modal
   */
  showModal: PropTypes.bool
}

FormRangeDatepicker.defaultProps = {
  icon: Chevronbottom,
  showModal: false
}

export default FormRangeDatepicker

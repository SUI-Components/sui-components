import React, {Component, PropTypes} from 'react'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import ButtonBasic from '@schibstedspain/sui-button-basic'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

import 'react-datepicker/dist/react-datepicker.css'

const locale = 'es-es'

class FormRangeDatepicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      startDate: !(this.props.startDate) ? null : moment(this.props.startDate),
      endDate: !(this.props.endDate) ? null : moment(this.props.endDate)
    }

    this._handleChangeStart = this._handleChangeStart.bind(this)
    this._handleChangeEnd = this._handleChangeEnd.bind(this)
    this._handleClickButton = this._handleClickButton.bind(this)
  }

  _handleChangeStart (date) {
    this.setState({
      startDate: date
    })
    if (this.props.handleChangeStart) {
      this.props.handleChangeStart(date)
    }
  }

  _handleChangeEnd (date) {
    this.setState({
      endDate: date
    })
    if (this.props.handleChangeEnd) {
      this.props.handleChangeEnd(date)
    }
  }

  _handleClickButton () {
    this.props.handleClickButton([this.state.startDate, this.state.endDate])
  }

  render () {
    return (
      <div className='sui-FormRangeDatepicker'>
        <div className='sui-FormRangeDatepicker-item'>
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            maxDate={moment(this.props.maxDate)}
            onChange={this._handleChangeStart}
            className='sui-FormRangeDatepicker-input'
            locale={locale}
          />
          <div className='sui-FormRangeDatepicker-box'>
            <Chevronbottom svgClass='sui-FormRangeDatepicker-icon' />
          </div>
        </div>
        <div className='sui-FormRangeDatepicker-item'>
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            maxDate={moment(this.props.maxDate)}
            onChange={this._handleChangeEnd}
            className='sui-FormRangeDatepicker-input'
            locale={locale}
          />
          <div className='sui-FormRangeDatepicker-box'>
            <Chevronbottom svgClass='sui-FormRangeDatepicker-icon' />
          </div>
        </div>
        {!!this.props.buttonLabel &&
          <div className='sui-FormRangeDatepicker-button'>
            <ButtonBasic
              text={this.props.buttonLabel}
              onClick={this._handleClickButton}
            />
          </div>
        }
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
  endDate: PropTypes.object,
  /**
   * Event that will send the init date
   */
  handleChangeStart: PropTypes.func,
  /**
   * Event that will send the end date
   */
  handleChangeEnd: PropTypes.func,
  /**
   * Click event that will send the date range
   */
  handleClickButton: PropTypes.func,
  /**
   * Maximum date that the calendar allows to select
   */
  maxDate: PropTypes.object,
  /**
   * Init date of the selected range
   */
  startDate: PropTypes.object
}

export default FormRangeDatepicker

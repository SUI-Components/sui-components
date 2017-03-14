import React, {Component, PropTypes} from 'react'
import ResultsList from './results-list'
import cx from 'classnames'

const DELTA_MOVE = 1
const UP = 'ArrowUp'
const DOWN = 'ArrowDown'
const ENTER = 'Enter'
const ESCAPE = 'Escape'

export default class FormAutocompleted extends Component {
  constructor (...args) {
    super(...args)

    const { selectFirstByDefault, initialValue, focus } = this.props

    this.input = null
    this.defaultPosition = selectFirstByDefault ? 0 : -1
    this.state = {
      active: this.defaultPosition,
      value: initialValue,
      showResultList: false,
      focus
    }
  }

  _moveDown = () => {
    const { active } = this.state
    const lastPosition = this.props.suggests.length - 1
    return active === lastPosition
      ? active
      : active + DELTA_MOVE
  }

  _moveUp = () => {
    const { active } = this.state
    return active === this.defaultPosition
      ? active
      : active - DELTA_MOVE
  }

  _upDownHandler = (event) => {
    // Never go to negative values or value higher than the list length
    const active = event.key === DOWN
      ? this._moveDown()
      : this._moveUp()
    this.setState({ active })
    event.stopPropagation()
    event.preventDefault()
  }

  _enterHandler = () => {
    const suggest = this.props.suggests[this.state.active]

    if (suggest) {
      const value = suggest.literal || suggest.content
      this.setState({ value })
      this.handleSelect(suggest)
    }
  }

  _escapeHandler = () => {
    this.setState({
      showResultList: false,
      active: null
    })
  }

  _focusInput = () => {
    this.input.focus()
  }

  _handleChange = (event) => {
    const value = event.target.value
    this.setState({
      value,
      active: this.defaultPosition
    })
    this.props.handleChange(value)
  }

  _handleSubmit = () => {
    this.props.handleSubmit(this.state.value)
  }

  _handleClear = () => {
    this._handleChange({
      target: {
        value: ''
      }
    })
    this._focusInput()
  }

  _handleSelect = (suggest) => {
    this.setState({
      value: suggest.literal || suggest.content
    })
    this.props.handleSelect(suggest)
  }

  _handleKeyDown = (event) => {
    this.setState({
      showResultList: true
    })

    switch (event.key) {
      case UP:
      case DOWN:
        this._upDownHandler(event)
        break
      case ENTER:
        this._enterHandler()
        break
      case ESCAPE:
        this._escapeHandler()
        break
    }
  }

  _renderResultList () {
    const { suggests } = this.props
    const { active } = this.state

    return suggests && suggests.length > 0
      ? (
        <ResultsList
          {...this.props}
          handleSelect={this._handleSelect}
          active={active}
          />
        )
      : null
  }

  componentDidMount () {
    if (this.state.focus) {
      this._focusInput()
    }
  }

  componentWillReceiveProps ({ focus }) {
    if (this.state.focus !== focus) {
      this.setState({ focus })
    }
  }

  componentWillUpdate (nextProps, { focus }) {
    if (focus) {
      this._focusInput()
    }
  }

  render () {
    const { placeholder, handleFocus, handleBlur, submit, collapsed } = this.props
    const { text: submitText, icon: SubmitIcon } = submit
    const { value, showResultList } = this.state
    const formAutocompletedClassName = cx('sui-FormAutocompleted', {
      'is-collapsed': submit && collapsed
    })
    return (
      <div className='sui-FormAutocompleted-wrap'>
        <div className={formAutocompletedClassName}>
          <div className='sui-FormAutocompleted-inputWrap'>
            <input
              ref={node => { this.input = node }}
              value={value}
              placeholder={placeholder}
              className='sui-FormAutocompleted-input'
              type='text'
              onChange={this._handleChange}
              onKeyDown={this._handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {value &&
              <span
                className='sui-FormAutocompleted-clear'
                onClick={this._handleClear}
              />
            }
          </div>
          {submit &&
            <button className='sui-FormAutocompleted-submit' onClick={this._handleSubmit}>
              {SubmitIcon && <SubmitIcon svgClass='sui-FormAutocompleted-submitIcon' />}
              {submitText && submitText}
            </button>
          }
        </div>
        {showResultList && this._renderResultList()}
      </div>
    )
  }
}

FormAutocompleted.propTypes = {

  /**
   * This function is called everytime user exits the input
   */
  handleBlur: PropTypes.func,

  /**
   * This function is called everytime user change the input field value
   */
  handleChange: PropTypes.func.isRequired,

  /**
   * This function is called everytime user focus on the input
   */
  handleFocus: PropTypes.func,

  /**
   * This function is called everytime user click on clear icon
   */
  handleClear: PropTypes.func,

  /**
   * This function is called when one suggestion is selected (via click or
   * enter pressed)
   */
  handleSelect: PropTypes.func.isRequired,

  /**
   * This function is called everytime user click the submit button
   */
  handleSubmit: PropTypes.func,

  /**
   * Inicial input value
   */
  initialValue: PropTypes.string,

  /**
   * Input placeholder
   */
  placeholder: PropTypes.string,

  /**
   * Suggest content
   */
  suggests: PropTypes.array.isRequired,

  /**
   * Auto select first suggested item
   */
  selectFirstByDefault: PropTypes.bool,

  /**
   * Input focus state
   */
  focus: PropTypes.bool,

  /**
   * Stick input and button
   */
  collapsed: PropTypes.bool,

  /**
   * Submit button
   */
  submit: PropTypes.shape({
    icon: PropTypes.func,
    text: PropTypes.string
  })
}

FormAutocompleted.defaultProps = {
  initialValue: '',
  selectFirstByDefault: true,
  focus: false,
  submit: false
}

FormAutocompleted.displayName = 'FormAutocompleted'

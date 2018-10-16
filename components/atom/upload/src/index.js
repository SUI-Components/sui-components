import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const STATUSES = {
  ACTIVE: 'active',
  UPLOAD: 'upload',
  SUCCESS: 'success',
  ERROR: 'error'
}

const BASE_CLASS = 'sui-AtomUpload'
const CLASS_BLOCK_TEXT = `${BASE_CLASS}-blockText`
const CLASS_BLOCK_TEXT_MAIN = `${CLASS_BLOCK_TEXT}-main`
const CLASS_BLOCK_TEXT_SECONDARY = `${CLASS_BLOCK_TEXT}-secondary`

const capitalize = text => text[0].toUpperCase() + text.substr(1)

class AtomUpload extends PureComponent {
  state = {
    Dropzone: null
  }

  loadAsyncReactDropzone() {
    require.ensure(
      [],
      require => {
        const Dropzone = require('react-dropzone').default
        this.setState({Dropzone})
      },
      'react-dropzone'
    )
  }

  componentDidMount() {
    this.loadAsyncReactDropzone()
  }

  onDrop = files => {
    const {onFilesSelection} = this.props
    onFilesSelection && onFilesSelection(files)
  }

  renderStatusBlock(status) {
    const classNameIcon = `${BASE_CLASS}-icon${capitalize(status)}`
    const IconStatus = this.props[`icon${capitalize(status)}`]
    const textStatus = this.props[`text${capitalize(status)}`]
    const {textExplanation} = this.props
    return (
      <div
        className={cx(BASE_CLASS, `${BASE_CLASS}--${status}`)}
        onClick={this.handleClick}
      >
        <span className={classNameIcon}>
          <IconStatus />
        </span>
        <div className={CLASS_BLOCK_TEXT}>
          <h4 className={CLASS_BLOCK_TEXT_MAIN}>{textStatus}</h4>
          {status === STATUSES.ACTIVE &&
            textExplanation && (
              <p className={CLASS_BLOCK_TEXT_SECONDARY}>{textExplanation}</p>
            )}
        </div>
      </div>
    )
  }

  render() {
    const {status} = this.props
    const {Dropzone} = this.state
    const {onDrop} = this

    if (Object.values(STATUSES).includes(status)) {
      return (
        Dropzone && (
          <Dropzone
            className={`${BASE_CLASS}-dropzone`}
            disabled={status !== STATUSES.ACTIVE}
            onDrop={onDrop}
          >
            {this.renderStatusBlock(status)}
          </Dropzone>
        )
      )
    }
  }
}

AtomUpload.displayName = 'AtomUpload'

AtomUpload.propTypes = {
  /** Icon (component) to be displayed on active status */
  iconActive: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types

  /** Icon (component) to be displayed on upload status */
  iconUpload: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types

  /** Icon (component) to be displayed on success status */
  iconSuccess: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types

  /** Icon (component) to be displayed on error status */
  iconError: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types

  /** Text to be displayed on error status */
  textActive: PropTypes.string, // eslint-disable-line react/no-unused-prop-types

  /** Text to be displayed on upload status */
  textUpload: PropTypes.string, // eslint-disable-line react/no-unused-prop-types

  /** Text to be displayed on success status */
  textSuccess: PropTypes.string, // eslint-disable-line react/no-unused-prop-types

  /** Text to be displayed on error status */
  textError: PropTypes.string, // eslint-disable-line react/no-unused-prop-types

  /** Text to be displayed as explanation on active status */
  textExplanation: PropTypes.string,

  /**
   * Status of the upload
   *  ACTIVE → 'active'
   *  UPLOAD →'upload'
   *  SUCCESS → 'success'
   *  ERROR → 'error'
   */
  status: PropTypes.oneOf(Object.values(STATUSES)).isRequired,

  /** Callback to be called (with files selected) when there`s a file selection (via click or drag & drop) */
  onFilesSelection: PropTypes.func
}

export {STATUSES as uploadStatuses}
export default AtomUpload

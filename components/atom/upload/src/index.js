import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import cx from 'classnames'

const Dropzone = loadable(() => import('react-dropzone'), {ssr: true})

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

const AtomUpload = ({
  status,
  onFilesSelection = () => {},
  textExplanation,
  actionButton: Button,
  multiple,
  maxSize,
  accept,
  ...props
}) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  const renderStatusBlock = (status, getRootProps, getInputProps) => {
    const classNameIcon = `${BASE_CLASS}-icon${capitalize(status)}`
    const IconStatus = props[`icon${capitalize(status)}`]
    const textStatus = props[`text${capitalize(status)}`]
    const isActive = status === STATUSES.ACTIVE
    const hasTextExplanation = Boolean(textExplanation)
    const hasButton = Boolean(Button)
    return (
      <div
        className={cx(BASE_CLASS, `${BASE_CLASS}--${status}`)}
        {...getRootProps()}
      >
        <input type="hiden" {...getInputProps()} />
        <span className={classNameIcon}>{IconStatus}</span>
        <div className={CLASS_BLOCK_TEXT}>
          <h4 className={CLASS_BLOCK_TEXT_MAIN}>{textStatus}</h4>
          {isActive && (hasTextExplanation || hasButton) && (
            <>
              {Button}
              <p className={CLASS_BLOCK_TEXT_SECONDARY}>{textExplanation}</p>
            </>
          )}
        </div>
      </div>
    )
  }

  const hasValidStatus = Object.values(STATUSES).includes(status)
  const shouldRender = hasValidStatus && ready

  return (
    shouldRender && (
      <Dropzone
        accept={accept}
        className={`${BASE_CLASS}-dropzone`}
        disabled={status !== STATUSES.ACTIVE}
        maxSize={maxSize}
        multiple={multiple}
        onDrop={onFilesSelection}
      >
        {({getRootProps, getInputProps}) =>
          renderStatusBlock(status, getRootProps, getInputProps)
        }
      </Dropzone>
    )
  )
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

  /** Button component to be displayed on active status */
  actionButton: PropTypes.node, // eslint-disable-line react/no-unused-prop-types

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
  onFilesSelection: PropTypes.func,
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,
  /** Maximum file size (in bytes) */
  maxSize: PropTypes.number,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   */
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

export {STATUSES as uploadStatuses}
export default AtomUpload

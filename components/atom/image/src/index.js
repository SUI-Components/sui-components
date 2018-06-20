import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {htmlImgProps} from './types'

const BASE_CLASS = 'sui-AtomImage'
const BASE_CLASS_FIGURE = `${BASE_CLASS}-figure`
const CLASS_PLACEHOLDER = `${BASE_CLASS_FIGURE}--placeholder`
const CLASS_SKELETON = `${BASE_CLASS_FIGURE}--skeleton`
const CLASS_IMAGE = `${BASE_CLASS}-image`
const CLASS_SPINNER = `${BASE_CLASS}-spinner`
const CLASS_ERROR = `${BASE_CLASS}-error`

const Error = (
  {className, icon: Icon, text} // eslint-disable-line react/prop-types
) => (
  <div className={className}>
    {Icon && <Icon />}
    <p>{text}</p>
  </div>
)

class AtomImage extends Component {
  state = {
    loading: true,
    error: false
  }

  get classNames() {
    const {loading, error} = this.state
    return cx(
      BASE_CLASS,
      `is-${loading ? 'loading' : 'loaded'}`,
      error && `is-error`
    )
  }

  get classNamesFigure() {
    const {placeholder, skeleton} = this.props
    return cx(
      BASE_CLASS_FIGURE,
      placeholder && CLASS_PLACEHOLDER,
      skeleton && CLASS_SKELETON
    )
  }

  handleLoad = () => {
    const {onLoad} = this.props
    this.setState({loading: false})
    onLoad && onLoad()
  }

  handleError = () => {
    const {onError} = this.props
    this.setState({
      error: true,
      loading: false
    })
    onError && onError()
  }

  render() {
    const {
      placeholder,
      skeleton,
      bgStyles,
      spinner: Spinner,
      errorIcon,
      errorText,
      onError,
      onLoad,
      ...imgProps
    } = this.props

    const {loading, error} = this.state

    const figureStyles = {
      backgroundImage: `url(${placeholder || skeleton})`
    }

    return (
      <div className={this.classNames}>
        <figure
          className={this.classNamesFigure}
          style={!error && (placeholder || skeleton) ? figureStyles : {}}
        >
          <img
            className={CLASS_IMAGE}
            onLoad={this.handleLoad}
            onError={this.handleError}
            {...imgProps}
          />
        </figure>
        {!error && loading && Spinner && <Spinner className={CLASS_SPINNER} />}
        {error && (
          <Error className={CLASS_ERROR} icon={errorIcon} text={errorText} />
        )}
      </div>
    )
  }
}

AtomImage.displayName = 'AtomImage'
AtomImage.propTypes = {
  /** Image url or base64 */
  src: PropTypes.string.isRequired,

  /** Description of the image */
  alt: PropTypes.string.isRequired,

  /** Image displayed (blurred) while the final image is being loaded */
  placeholder: PropTypes.string,

  /** Image (wireframe, skeleton) displayed (not blurred) while the final image is being loaded */
  skeleton: PropTypes.string,

  /** Spinner (component) displayed while the final image is being loaded */
  spinner: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Icon (component) to be displayed in an Error Box when the image cannot be loaded */
  errorIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Text to be displayed in an Error Box when the image cannot be loaded */
  errorText: PropTypes.string,

  /** Function to be called when the image cannot be loaded  */
  onError: PropTypes.func,

  /** Function to be called when the image completed its loading  */
  onLoad: PropTypes.func,

  /** <img> props */
  ...htmlImgProps
}

export default AtomImage

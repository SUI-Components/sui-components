import PropTypes from 'prop-types'

/**
 * <img> props, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 */
const htmlImgProps = {
  alt: PropTypes.string.isRequired,
  crossorigin: PropTypes.string,
  height: PropTypes.string,
  ismap: PropTypes.bool,
  longdesc: PropTypes.string,
  referrerpolicy: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  usemap: PropTypes.string,
  width: PropTypes.string
}

const types = {

  /** Image displayed (blurred) while the final image is being loaded */
  placeholder: PropTypes.string,

  /** Image (wireframe, skeleton) displayed (not blurred) while the final image is being loaded */
  skeleton: PropTypes.string,

  /** Styles passed to the element that displays the skeleton as background */
  bgStyles: PropTypes.object,

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

export { htmlImgProps, types as default }

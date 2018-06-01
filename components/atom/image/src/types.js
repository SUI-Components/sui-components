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

  /** To be shown until the src prop is loaded */
  placeholder: PropTypes.string,

  /** To be shown until the src prop is loaded */
  skeleton: PropTypes.string,

  /** Icon to be shown in case the src prop does not load */
  errorIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Text to be shown in case the src prop does not load */
  errorText: PropTypes.string,

  /** XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
  spinner: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Image property but intercepted by the component in order to do its magic */
  onError: PropTypes.func,

  /** Image property but intercepted by the component in order to do its magic */
  onLoad: PropTypes.func,

  /** <img> prop */
  ...htmlImgProps
}

export { htmlImgProps, types as default }

import {useCallback, useEffect, useRef, useState, forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'
import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import ErrorImage from './ErrorImage.js'
import {
  BASE_CLASS,
  BASE_CLASS_FIGURE,
  CLASS_ERROR,
  CLASS_IMAGE,
  CLASS_PLACEHOLDER,
  CLASS_SKELETON,
  CLASS_SPINNER,
  DECODING,
  FETCHPRIORITY,
  LOADING
} from './settings.js'
import {htmlImgProps} from './types.js'

const AtomImage = forwardRef(
  (
    {
      as: As = 'div',
      alt,
      bgStyles,
      decoding = DECODING.AUTO,
      errorIcon,
      errorText,
      fetchpriority = FETCHPRIORITY.AUTO,
      loading = LOADING.EAGER,
      onError = () => {},
      onLoad = () => {},
      placeholder,
      skeleton,
      sources = [],
      spinner,
      className,
      ...imgProps
    },
    forwardedRef
  ) => {
    const imageRef = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const {src} = imgProps

    useEffect(() => {
      setIsLoading(true)
      setError(false)
    }, [src, setIsLoading, setError])

    const handleLoad = useCallback(() => {
      const loadCompleted = imageRef?.current?.complete
      if (loadCompleted === true) {
        setIsLoading(!loadCompleted)
        onLoad && onLoad()
      }
    }, [onLoad, setIsLoading])

    useEffect(() => {
      handleLoad()
    }, [handleLoad, imageRef])

    const handleError = () => {
      setIsLoading(false)
      setError(true)
      onError && onError()
    }

    const figureStyles = {
      backgroundImage: `url(${placeholder || skeleton})`
    }

    return (
      <PolymorphicElement
        as={As}
        className={cx(
          BASE_CLASS,
          {
            'is-error': error,
            'is-loading': isLoading,
            'is-loaded': !isLoading
          },
          className
        )}
        ref={forwardedRef}
      >
        <figure
          className={cx(BASE_CLASS_FIGURE, placeholder && CLASS_PLACEHOLDER, skeleton && CLASS_SKELETON)}
          style={!error && (placeholder || skeleton) ? figureStyles : {}}
        >
          <picture>
            {sources.map((source, idx) => (
              <source key={idx} {...source} />
            ))}
            <img
              alt={alt}
              className={CLASS_IMAGE}
              decoding={decoding}
              fetchpriority={fetchpriority}
              loading={loading}
              onError={handleError}
              onLoad={handleLoad}
              ref={imageRef}
              data-element="image"
              {...imgProps}
            />
          </picture>
        </figure>
        {!error && isLoading && spinner && <Injector classNames={CLASS_SPINNER}>{spinner}</Injector>}
        {error && <ErrorImage className={CLASS_ERROR} icon={errorIcon} text={errorText} />}
      </PolymorphicElement>
    )
  }
)

AtomImage.displayName = 'AtomImage'
AtomImage.propTypes = {
  /** Image url or base64 */
  src: PropTypes.string.isRequired,

  /** Description of the image */
  alt: PropTypes.string.isRequired,

  /**
   * Provides an image decoding hint to the browser
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-decoding
   */
  decoding: PropTypes.oneOf(Object.values(DECODING)),

  /**
   * Provides a hint of the relative priority to use when fetching the image
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-fetchpriority
   */
  fetchpriority: PropTypes.oneOf(Object.values(FETCHPRIORITY)),

  /**
   * Indicates how the browser should load the image
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading
   */
  loading: PropTypes.oneOf(Object.values(LOADING)),

  /** Image displayed (blurred) while the final image is being loaded */
  placeholder: PropTypes.string,

  /** Image (wireframe, skeleton) displayed (not blurred) while the final image is being loaded */
  skeleton: PropTypes.string,

  /** Spinner (component) displayed while the final image is being loaded */
  spinner: PropTypes.node,

  /** Icon (component) to be displayed in an Error Box when the image cannot be loaded */
  errorIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Text to be displayed in an Error Box when the image cannot be loaded */
  errorText: PropTypes.string,

  /** Function to be called when the image cannot be loaded  */
  onError: PropTypes.func,

  /** Function to be called when the image completed its loading  */
  onLoad: PropTypes.func,

  /**
   * Source tags inside picture element,
   * array of props defined in https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source expected
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcSet: PropTypes.string,
      media: PropTypes.string
    })
  ),

  /** <img> props */
  ...htmlImgProps
}

export default AtomImage

export {DECODING, FETCHPRIORITY, LOADING}

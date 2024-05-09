import cx from 'classnames'
import PropTypes from 'prop-types'

import ImageCaption from './ImageCaption.js'
import {BASE_CLASS, LINK_CLASS, THUMBNAIL_RATIOS, THUMBNAIL_SHAPES, THUMBNAIL_SIZES} from './settings.js'
import ThumbnailLink from './ThumbnailLink.js'

const MoleculeThumbnail = ({
  href,
  size = THUMBNAIL_SIZES.MEDIUM,
  ratio = THUMBNAIL_RATIOS['1:1'],
  shape = THUMBNAIL_SHAPES.SQUARED,
  target = '_blank',
  captionText,
  linkFactory: Link = ThumbnailLink,
  ...props
}) => {
  return (
    <figure className={cx(`${BASE_CLASS}`, `${BASE_CLASS}--${size}`, `${BASE_CLASS}--${shape}`)}>
      {href ? (
        <Link className={LINK_CLASS} href={href} target={target} rel={target === '_blank' ? 'noopener' : undefined}>
          <ImageCaption {...props} ratio={ratio} />
        </Link>
      ) : (
        <ImageCaption {...props} ratio={ratio} />
      )}
    </figure>
  )
}

MoleculeThumbnail.displayName = 'MoleculeThumbnail'

MoleculeThumbnail.propTypes = {
  /** Image source */
  src: PropTypes.string.isRequired,

  /** Image alt */
  alt: PropTypes.string.isRequired,

  /** Text shown at the bottom of the component */
  captionText: PropTypes.string,

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

  /** Anchor link */
  href: PropTypes.string,

  /** Define the target attribute('_self', '_blank', '_parent' or '_top') */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),

  /** Define the size (LARGE, MEDIUM, SMALL or XSMALL) */
  size: PropTypes.oneOf(Object.values(THUMBNAIL_SIZES)),

  /** Define the shape (SQUARED or CIRCLED) */
  shape: PropTypes.oneOf(Object.values(THUMBNAIL_SHAPES)),

  /** Define the ratio ('1:1', '4:3', '16:9') */
  ratio: PropTypes.oneOf(Object.values(THUMBNAIL_RATIOS)),

  /** Factory used to create navigation links */
  linkFactory: PropTypes.func
}

export default MoleculeThumbnail

export {
  THUMBNAIL_RATIOS as moleculeThumbnailRatio,
  THUMBNAIL_SHAPES as moleculeThumbnailShape,
  THUMBNAIL_SIZES as moleculeThumbnailSize
}

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomImage from '@s-ui/react-atom-image'

import {CAPTION_CLASS, CONTAINER_IMAGE, THUMBNAIL_RATIOS} from './settings.js'

const ImageCaption = ({captionText, ratio, ...props}) => (
  <div>
    <div className={cx(`${CONTAINER_IMAGE}`, {[`${CONTAINER_IMAGE}--${ratio}`]: ratio})}>
      <AtomImage {...props} />
    </div>
    {captionText && <figcaption className={CAPTION_CLASS}>{captionText}</figcaption>}
  </div>
)

ImageCaption.propTypes = {
  /** Text shown at the bottom of the component */
  captionText: PropTypes.string,
  /** Define the ratio ('1:1', '4:3', '16:9') */
  ratio: PropTypes.oneOf(Object.values(THUMBNAIL_RATIOS))
}

ImageCaption.displayName = 'ImageCaption'

export default ImageCaption

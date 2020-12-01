import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS_NAME} from './config'
const THUMB_CARD_CLASS_NAME = `${BASE_CLASS_NAME}-thumbCard`
const IMAGE_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-image`
const ICON_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-iconContainer`
const CONTAINER_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-imageContainer`
const ACTION_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-actions`
const BUTTON_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-button`

const ThumbCard = ({
  iconSize = ATOM_ICON_SIZES.small,
  callbackDeleteItem,
  callbackRetryUpload,
  callbackRotateItem,
  deleteIcon,
  index,
  image,
  mainPhotoLabel,
  outputImageAspectRatioDisabled,
  rejectPhotosIcon,
  retryIcon,
  rotateIcon
}) => {
  const hasErrors = image.hasErrors

  const counterClass = cx(`${THUMB_CARD_CLASS_NAME}-counter`, {
    [`${THUMB_CARD_CLASS_NAME}-mainCounter`]: index === 0
  })

  const imageThumbClass = cx(IMAGE_THUMB_CARD_CLASS_NAME, {
    [`${IMAGE_THUMB_CARD_CLASS_NAME}--ratioDisabled`]: outputImageAspectRatioDisabled
  })

  return (
    <div className={THUMB_CARD_CLASS_NAME}>
      <div className={counterClass}>
        {index === 0 ? mainPhotoLabel : index + 1}
      </div>
      <div className={CONTAINER_THUMB_CARD_CLASS_NAME}>
        {hasErrors ? (
          <div className={`${ICON_THUMB_CARD_CLASS_NAME}`}>
            <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
              {rejectPhotosIcon}
            </AtomIcon>
          </div>
        ) : (
          <img src={image.preview} className={imageThumbClass} />
        )}
      </div>
      <div className={ACTION_THUMB_CARD_CLASS_NAME}>
        <div
          className={BUTTON_THUMB_CARD_CLASS_NAME}
          onClick={() => callbackDeleteItem(index)}
        >
          <AtomIcon size={iconSize}>{deleteIcon}</AtomIcon>
        </div>
        {hasErrors ? (
          <div
            className={BUTTON_THUMB_CARD_CLASS_NAME}
            onClick={e => callbackRetryUpload(index)}
          >
            <AtomIcon size={iconSize}>{retryIcon}</AtomIcon>
          </div>
        ) : (
          <div
            className={BUTTON_THUMB_CARD_CLASS_NAME}
            onClick={e => callbackRotateItem(index)}
          >
            <AtomIcon size={iconSize}>{rotateIcon}</AtomIcon>
          </div>
        )}
      </div>
    </div>
  )
}

ThumbCard.displayName = 'ThumbCard'

ThumbCard.propTypes = {
  iconSize: PropTypes.oneOf(Object.keys(ATOM_ICON_SIZES)),
  callbackDeleteItem: PropTypes.func,
  callbackRetryUpload: PropTypes.func,
  callbackRotateItem: PropTypes.func,
  deleteIcon: PropTypes.node.isRequired,
  index: PropTypes.number,
  image: PropTypes.object.isRequired,
  mainPhotoLabel: PropTypes.string,
  outputImageAspectRatioDisabled: PropTypes.bool,
  rejectPhotosIcon: PropTypes.node.isRequired,
  retryIcon: PropTypes.node.isRequired,
  rotateIcon: PropTypes.node.isRequired
}

export default ThumbCard

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {DEFAULT_VIEW_TYPE, VIEW_TYPE} from './../config.js'
import {
  ACTION_THUMB_CARD_CLASS_NAME,
  BUTTON_THUMB_CARD_CLASS_NAME,
  CONTAINER_THUMB_CARD_CLASS_NAME,
  ICON_THUMB_CARD_CLASS_NAME,
  IMAGE_THUMB_CARD_CLASS_NAME,
  THUMB_CARD_CLASS_NAME
} from './config.js'

const ThumbCard = ({
  iconSize = ATOM_ICON_SIZES.small,
  callbackDeleteItem,
  callbackRetryUpload,
  callbackRotateItem,
  content: Content = () => null,
  deleteIcon,
  dragIcon,
  index,
  image,
  mainPhotoLabel,
  outputImageAspectRatioDisabled,
  rejectPhotosIcon,
  retryIcon,
  rotateIcon,
  viewType
}) => {
  const hasErrors = image.hasErrors

  const isDefaultView = viewType === DEFAULT_VIEW_TYPE
  const isListtView = viewType === VIEW_TYPE.LIST

  const counterClass = cx(`${THUMB_CARD_CLASS_NAME}-counter`, {
    [`${THUMB_CARD_CLASS_NAME}-mainCounter`]: index === 0 && isDefaultView
  })

  const imageThumbClass = cx(IMAGE_THUMB_CARD_CLASS_NAME, {
    [`${IMAGE_THUMB_CARD_CLASS_NAME}--ratioDisabled`]: outputImageAspectRatioDisabled
  })

  return (
    <div className={THUMB_CARD_CLASS_NAME}>
      <div className={counterClass}>{index === 0 && isDefaultView ? mainPhotoLabel : index + 1}</div>
      <div className={CONTAINER_THUMB_CARD_CLASS_NAME}>
        {hasErrors ? (
          <div className={`${ICON_THUMB_CARD_CLASS_NAME}`}>
            <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{rejectPhotosIcon}</AtomIcon>
          </div>
        ) : (
          <>
            {isListtView && <AtomIcon size={iconSize}>{dragIcon}</AtomIcon>}
            <img src={image.preview} className={imageThumbClass} />
          </>
        )}
      </div>
      <Content file={image} index={index} />
      <div className={ACTION_THUMB_CARD_CLASS_NAME}>
        <div className={BUTTON_THUMB_CARD_CLASS_NAME} onClick={() => callbackDeleteItem(index)}>
          <AtomIcon size={iconSize}>{deleteIcon}</AtomIcon>
        </div>
        {hasErrors ? (
          <div className={BUTTON_THUMB_CARD_CLASS_NAME} onClick={e => callbackRetryUpload(index)}>
            <AtomIcon size={iconSize}>{retryIcon}</AtomIcon>
          </div>
        ) : (
          <div className={BUTTON_THUMB_CARD_CLASS_NAME} onClick={e => callbackRotateItem(index)}>
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
  content: PropTypes.func,
  deleteIcon: PropTypes.node.isRequired,
  dragIcon: PropTypes.node.isRequired,
  index: PropTypes.number,
  image: PropTypes.object.isRequired,
  mainPhotoLabel: PropTypes.string,
  outputImageAspectRatioDisabled: PropTypes.bool,
  rejectPhotosIcon: PropTypes.node.isRequired,
  retryIcon: PropTypes.node.isRequired,
  rotateIcon: PropTypes.node.isRequired,
  viewType: PropTypes.oneOf(Object.keys(VIEW_TYPE))
}

export default ThumbCard

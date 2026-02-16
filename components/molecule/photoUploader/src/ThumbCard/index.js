import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomButton, {atomButtonDesigns, atomButtonSizes} from '@s-ui/react-atom-button'
import AtomIcon, {ATOM_ICON_COLORS, ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

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
  callbackDeleteItem,
  callbackRetryUpload,
  callbackRotateItem,
  content: Content = () => null,
  deleteButtonAriaLabel,
  deleteIcon,
  dragIcon,
  showDeleteButton = true,
  showRotateButton = true,
  iconSize = ATOM_ICON_SIZES.small,
  image,
  index,
  mainPhotoLabel,
  outputImageAspectRatioDisabled,
  rejectPhotosIcon,
  retryButtonAriaLabel,
  retryIcon,
  rotateButtonAriaLabel,
  rotateIcon,
  viewType
}) => {
  const hasErrors = image.hasErrors

  const isDefaultView = viewType === DEFAULT_VIEW_TYPE
  const isListView = viewType === VIEW_TYPE.LIST

  const counterClass = cx(`${THUMB_CARD_CLASS_NAME}-counter`, {
    [`${THUMB_CARD_CLASS_NAME}-mainCounter`]: index === 0 && isDefaultView
  })

  const imageThumbClass = cx(IMAGE_THUMB_CARD_CLASS_NAME, {
    [`${IMAGE_THUMB_CARD_CLASS_NAME}--ratioDisabled`]: outputImageAspectRatioDisabled,
    [`${IMAGE_THUMB_CARD_CLASS_NAME}--rotateAndDeleteButtonsHidden`]: !showDeleteButton && !showRotateButton
  })

  const thumbCardLabel = index === 0 && isDefaultView ? mainPhotoLabel : index + 1

  return (
    <div className={THUMB_CARD_CLASS_NAME}>
      <div className={counterClass}>{thumbCardLabel}</div>
      <div className={CONTAINER_THUMB_CARD_CLASS_NAME}>
        {hasErrors ? (
          <div className={`${ICON_THUMB_CARD_CLASS_NAME}`}>
            <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{rejectPhotosIcon}</AtomIcon>
          </div>
        ) : (
          <>
            {isListView && <AtomIcon size={iconSize}>{dragIcon}</AtomIcon>}
            <img src={image.preview} className={imageThumbClass} />
          </>
        )}
      </div>
      <Content file={image} index={index} />
      <div className={ACTION_THUMB_CARD_CLASS_NAME}>
        {showDeleteButton && (
          <div className={BUTTON_THUMB_CARD_CLASS_NAME}>
            <AtomButton
              aria-label={`${deleteButtonAriaLabel} ${thumbCardLabel}`}
              design={atomButtonDesigns.LINK}
              fullWidth
              onClick={() => callbackDeleteItem(index)}
              size={atomButtonSizes.SMALL}
              tabIndex="0"
              type="button"
            >
              <div className={`${BUTTON_THUMB_CARD_CLASS_NAME}Icon`}>
                <AtomIcon color={ATOM_ICON_COLORS.currentColor} size={iconSize}>
                  {deleteIcon}
                </AtomIcon>
              </div>
            </AtomButton>
          </div>
        )}
        {hasErrors ? (
          <div className={BUTTON_THUMB_CARD_CLASS_NAME}>
            <AtomButton
              aria-label={`${retryButtonAriaLabel} ${thumbCardLabel}`}
              design={atomButtonDesigns.LINK}
              fullWidth
              onClick={() => callbackRetryUpload(index)}
              size={atomButtonSizes.SMALL}
              tabIndex="0"
              type="button"
            >
              <div className={`${BUTTON_THUMB_CARD_CLASS_NAME}Icon`}>
                <AtomIcon color={ATOM_ICON_COLORS.currentColor} size={iconSize}>
                  {retryIcon}
                </AtomIcon>
              </div>
            </AtomButton>
          </div>
        ) : (
          showRotateButton && (
            <div className={BUTTON_THUMB_CARD_CLASS_NAME}>
              <AtomButton
                aria-label={`${rotateButtonAriaLabel} ${thumbCardLabel}`}
                design={atomButtonDesigns.LINK}
                fullWidth
                onClick={() => callbackRotateItem(index)}
                size={atomButtonSizes.SMALL}
                tabIndex="0"
                type="button"
              >
                <div className={`${BUTTON_THUMB_CARD_CLASS_NAME}Icon`}>
                  <AtomIcon color={ATOM_ICON_COLORS.currentColor} size={iconSize}>
                    {rotateIcon}
                  </AtomIcon>
                </div>
              </AtomButton>
            </div>
          )
        )}
      </div>
    </div>
  )
}

ThumbCard.displayName = 'ThumbCard'

ThumbCard.propTypes = {
  callbackDeleteItem: PropTypes.func,
  callbackRetryUpload: PropTypes.func,
  callbackRotateItem: PropTypes.func,
  content: PropTypes.func,
  deleteButtonAriaLabel: PropTypes.string.isRequired,
  deleteIcon: PropTypes.node.isRequired,
  dragIcon: PropTypes.node.isRequired,
  showDeleteButton: PropTypes.bool,
  showRotateButton: PropTypes.bool,
  iconSize: PropTypes.oneOf(Object.keys(ATOM_ICON_SIZES)),
  image: PropTypes.object.isRequired,
  index: PropTypes.number,
  mainPhotoLabel: PropTypes.string,
  outputImageAspectRatioDisabled: PropTypes.bool,
  rejectPhotosIcon: PropTypes.node.isRequired,
  retryButtonAriaLabel: PropTypes.string.isRequired,
  retryIcon: PropTypes.node.isRequired,
  rotateButtonAriaLabel: PropTypes.string.isRequired,
  rotateIcon: PropTypes.node.isRequired,
  viewType: PropTypes.oneOf(Object.keys(VIEW_TYPE))
}

export default ThumbCard

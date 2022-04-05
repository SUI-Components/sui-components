import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {
  THUMB_CARD_CLASS_NAME,
  IMAGE_THUMB_CARD_CLASS_NAME,
  ICON_THUMB_CARD_CLASS_NAME,
  CONTAINER_THUMB_CARD_CLASS_NAME,
  LABEL_THUMB_CARD_CLASS_NAME,
  ACTION_THUMB_CARD_CLASS_NAME,
  BUTTON_THUMB_CARD_CLASS_NAME
} from './config.js'

const ThumbCard = ({
  callbackDeleteItem,
  callbackLabelItem,
  callbackRetryUpload,
  callbackRotateItem,
  deleteIcon,
  iconSize = ATOM_ICON_SIZES.small,
  image,
  index,
  labels,
  labelsArrowIcon,
  labelsPlaceholder,
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
    [`${IMAGE_THUMB_CARD_CLASS_NAME}--ratioDisabled`]:
      outputImageAspectRatioDisabled
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
      {labels.length > 0 && (
        <div className={LABEL_THUMB_CARD_CLASS_NAME}>
          <MoleculeSelect
            value={image.label}
            onChange={(e, {value}) => callbackLabelItem({index, label: value})}
            iconArrowDown={labelsArrowIcon}
            placeholder={labelsPlaceholder}
          >
            {labels.map(label => (
              <MoleculeSelectOption key={label} value={label}>
                {label}
              </MoleculeSelectOption>
            ))}
          </MoleculeSelect>
        </div>
      )}
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
  callbackLabelItem: PropTypes.func,
  callbackRetryUpload: PropTypes.func,
  callbackRotateItem: PropTypes.func,
  deleteIcon: PropTypes.node.isRequired,
  index: PropTypes.number,
  image: PropTypes.object.isRequired,
  labels: PropTypes.array,
  labelsArrowIcon: PropTypes.func.isRequired,
  labelsPlaceholder: PropTypes.string,
  mainPhotoLabel: PropTypes.string,
  outputImageAspectRatioDisabled: PropTypes.bool,
  rejectPhotosIcon: PropTypes.node.isRequired,
  retryIcon: PropTypes.node.isRequired,
  rotateIcon: PropTypes.node.isRequired
}

export default ThumbCard

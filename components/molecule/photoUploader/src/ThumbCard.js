import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS_NAME} from './config'
const THUMB_CARD_CLASS_NAME = `${BASE_CLASS_NAME}-thumbCard`
const IMAGE_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-image`
const ICON_THUMB_CARD_CLASS_NAME = `${THUMB_CARD_CLASS_NAME}-iconContainer`

const ThumbCard = ({
  callbackDeleteItem,
  callbackRetryUpload,
  callbackRotateItem,
  deleteIcon,
  index,
  image,
  mainPhotoLabel,
  rejectPhotosIcon,
  retryIcon,
  rotateIcon
}) => {
  const hasErrors = image.hasErrors

  const counterClass = cx(`${THUMB_CARD_CLASS_NAME}-counter`, {
    [`${THUMB_CARD_CLASS_NAME}-mainCounter`]: index === 0
  })

  return (
    <div className="sui-MoleculePhotoUploader-thumbCard">
      <div className={counterClass}>
        {index === 0 ? mainPhotoLabel : index + 1}
      </div>
      <div className="sui-MoleculePhotoUploader-thumbCard-imageContainer">
        {hasErrors ? (
          <div className={`${ICON_THUMB_CARD_CLASS_NAME}`}>
            <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
              {rejectPhotosIcon}
            </AtomIcon>
          </div>
        ) : (
          <img src={image.preview} className={IMAGE_THUMB_CARD_CLASS_NAME} />
        )}
      </div>
      <div className="sui-MoleculePhotoUploader-thumbCard-actions">
        <div
          className="sui-MoleculePhotoUploader-thumbCard-button"
          onClick={() => callbackDeleteItem(index)}
        >
          <AtomIcon size={ATOM_ICON_SIZES.small}>{deleteIcon}</AtomIcon>
        </div>
        {hasErrors ? (
          <div
            className="sui-MoleculePhotoUploader-thumbCard-button"
            onClick={e => callbackRetryUpload(index)}
          >
            <AtomIcon size={ATOM_ICON_SIZES.small}>{retryIcon}</AtomIcon>
          </div>
        ) : (
          <div
            className="sui-MoleculePhotoUploader-thumbCard-button"
            onClick={e => callbackRotateItem(index)}
          >
            <AtomIcon size={ATOM_ICON_SIZES.small}>{rotateIcon}</AtomIcon>
          </div>
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
  deleteIcon: PropTypes.node.isRequired,
  index: PropTypes.number,
  image: PropTypes.object.isRequired,
  mainPhotoLabel: PropTypes.string,
  rejectPhotosIcon: PropTypes.node.isRequired,
  retryIcon: PropTypes.node.isRequired,
  rotateIcon: PropTypes.node.isRequired
}

export default ThumbCard

import {useState} from 'react'
import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculePhotoUploader from '../../src/index.js'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {
  _addPhotoTextButton,
  _addPhotoTextSkeleton,
  _allowUploadDuplicatedPhotos,
  _callbackPhotosRejected,
  _callbackPhotosUploaded,
  _callbackUploadPhoto,
  _callbackLabelItem,
  _dragDelay,
  _dragPhotoTextInitialContent,
  _dropPhotosHere,
  _errorCorruptedPhotoUploaded,
  _errorFileExcededMaxSize,
  _errorFormatPhotoUploaded,
  _errorInitialPhotoDownloadError,
  _limitPhotosUploaded,
  _limitPhotosUploadedNotification,
  _mainPhotoLabel,
  _maxPhotos,
  _notificationErrorFormatPhotoUploaded,
  _rotationDirection,
  _uploadingPhotosText,
  _dragPhotoDividerTextInitialContent,
  initialPhotosWithLabels,
  labels,
  labelsPlaceholder
} from '../config.js'
import {
  _addMorePhotosIcon,
  _deleteIcon,
  _dragPhotosIcon,
  _infoIcon,
  _labelsArrowIcon,
  _rejectPhotosIcon,
  _retryErrorPhotosIcon,
  _rotateIcon
} from '../icons.js'

const DefaultArticle = ({className}) => {
  const [photos, setPhotos] = useState(initialPhotosWithLabels)

  const handlePhotosChange = ({index, label}) => {
    const updatedPhotos = _callbackLabelItem({index, label})
    setPhotos(updatedPhotos)
  }

  const _content = ({index, file}) => { // eslint-disable-line
    const {label} = file // eslint-disable-line

    return (
      <MoleculeSelect
        value={label}
        onChange={(e, {value}) => handlePhotosChange({index, label: value})}
        iconArrowDown={_labelsArrowIcon()}
        placeholder={labelsPlaceholder}
      >
        {labels.map(label => (
          <MoleculeSelectOption key={label} value={label}>
            {label}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
    )
  }

  return (
    <Article className={className}>
      <H2>With Content - Select example</H2>
      <Paragraph>Use Content prop to show a select as example.</Paragraph>
      <MoleculePhotoUploader
        acceptedFileTypes="image/jpeg, image/gif, image/png, image/webp"
        addMorePhotosIcon={_addMorePhotosIcon}
        addPhotoTextButton={_addPhotoTextButton}
        addPhotoTextSkeleton={_addPhotoTextSkeleton}
        allowUploadDuplicatedPhotos={_allowUploadDuplicatedPhotos}
        callbackPhotosRejected={_callbackPhotosRejected}
        callbackPhotosUploaded={_callbackPhotosUploaded}
        callbackUploadPhoto={_callbackUploadPhoto}
        content={_content}
        deleteIcon={_deleteIcon}
        dragDelay={_dragDelay}
        dragPhotosIcon={_dragPhotosIcon}
        dragPhotoTextInitialContent={_dragPhotoTextInitialContent}
        dragPhotoDividerTextInitialContent={_dragPhotoDividerTextInitialContent}
        dropPhotosHereText={_dropPhotosHere}
        errorCorruptedPhotoUploadedText={_errorCorruptedPhotoUploaded}
        errorFileExcededMaxSizeText={_errorFileExcededMaxSize}
        errorFormatPhotoUploadedText={_errorFormatPhotoUploaded}
        errorInitialPhotoDownloadErrorText={_errorInitialPhotoDownloadError}
        infoIcon={_infoIcon}
        initialPhotos={photos}
        limitPhotosUploadedText={_limitPhotosUploaded}
        limitPhotosUploadedNotification={_limitPhotosUploadedNotification}
        mainPhotoLabel={_mainPhotoLabel}
        maxPhotos={_maxPhotos}
        notificationErrorFormatPhotoUploaded={
          _notificationErrorFormatPhotoUploaded
        }
        rejectPhotosIcon={_rejectPhotosIcon}
        retryIcon={_retryErrorPhotosIcon}
        rotateIcon={_rotateIcon}
        rotationDirection={_rotationDirection}
        uploadingPhotosText={_uploadingPhotosText}
      />
    </Article>
  )
}

DefaultArticle.displayName = 'DefaultArticle'

DefaultArticle.propTypes = {
  className: PropTypes.string
}

export default DefaultArticle

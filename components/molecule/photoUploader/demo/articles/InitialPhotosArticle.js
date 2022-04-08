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
  initialPhotos,
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

const _content = (image, index) => {
  return (
    <MoleculeSelect
      value={image.label}
      onChange={(e, {value}) => _callbackLabelItem({index, label: value})}
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

const DefaultArticle = ({className}) => {
  return (
    <Article className={className}>
      <H2>Initial Photos</H2>
      <Paragraph>
        A set of initial images can be load with an array of URLs passed by
        props.
      </Paragraph>
      <Paragraph>
        After they are loaded, the images can be sorted, rotated or deleted from
        the list.
      </Paragraph>
      <Paragraph>
        This example has an array of URLs passed by props, and the third one
        fails on load, so it shows an error notification.
      </Paragraph>
      <Paragraph>
        Also, in this example we're blocking .bmp images, which are accepted by
        default.
      </Paragraph>
      <Paragraph>
        Also, rotation direction is set to clockwise. rotateIcon not changed,
        though :P
      </Paragraph>
      <Paragraph>
        Also, dragDelay time set to 0, it must be 0 to improve user experience
        in desktop!
      </Paragraph>
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
        initialPhotos={initialPhotos}
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

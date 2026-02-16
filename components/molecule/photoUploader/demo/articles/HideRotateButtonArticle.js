import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculePhotoUploader from '../../src/index.js'
import {
  _addPhotoTextButton,
  _addPhotoTextSkeleton,
  _callbackPhotosRejected,
  _callbackPhotosUploaded,
  _callbackUploadPhoto,
  _dragPhotoDividerTextInitialContent,
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
  _uploadingPhotosText
} from '../config.js'
import {
  _addMorePhotosIcon,
  _deleteIcon,
  _dragPhotosIcon,
  _infoIcon,
  _rejectPhotosIcon,
  _retryErrorPhotosIcon,
  _rotateIcon
} from '../icons.js'

const HideRotateButtonArticle = ({className}) => {
  return (
    <Article className={className}>
      <H2>Hide Rotate Button</H2>
      <Paragraph>
        When <Code>showRotateButton</Code> prop is set to <Code>false</Code>, the rotate button will be hidden from the
        thumb cards. This is useful when you want to prevent users from rotating uploaded photos.
      </Paragraph>
      <Paragraph>Try uploading some photos below to see how the rotate button is hidden:</Paragraph>
      <MoleculePhotoUploader
        addMorePhotosIcon={_addMorePhotosIcon}
        addPhotoTextButton={_addPhotoTextButton}
        addPhotoTextSkeleton={_addPhotoTextSkeleton}
        callbackPhotosRejected={_callbackPhotosRejected}
        callbackPhotosUploaded={_callbackPhotosUploaded}
        callbackUploadPhoto={_callbackUploadPhoto}
        deleteIcon={_deleteIcon}
        dragPhotosIcon={_dragPhotosIcon}
        dragPhotoTextInitialContent={_dragPhotoTextInitialContent}
        dragPhotoDividerTextInitialContent={_dragPhotoDividerTextInitialContent}
        dropPhotosHereText={_dropPhotosHere}
        errorCorruptedPhotoUploadedText={_errorCorruptedPhotoUploaded}
        errorFileExcededMaxSizeText={_errorFileExcededMaxSize}
        errorFormatPhotoUploadedText={_errorFormatPhotoUploaded}
        errorInitialPhotoDownloadErrorText={_errorInitialPhotoDownloadError}
        showRotateButton={false}
        infoIcon={_infoIcon}
        limitPhotosUploadedText={_limitPhotosUploaded}
        limitPhotosUploadedNotification={_limitPhotosUploadedNotification}
        mainPhotoLabel={_mainPhotoLabel}
        maxPhotos={_maxPhotos}
        notificationErrorFormatPhotoUploaded={_notificationErrorFormatPhotoUploaded}
        rejectPhotosIcon={_rejectPhotosIcon}
        retryIcon={_retryErrorPhotosIcon}
        rotateIcon={_rotateIcon}
        uploadingPhotosText={_uploadingPhotosText}
      />
    </Article>
  )
}

HideRotateButtonArticle.displayName = 'HideRotateButtonArticle'

HideRotateButtonArticle.propTypes = {
  className: PropTypes.string
}

export default HideRotateButtonArticle

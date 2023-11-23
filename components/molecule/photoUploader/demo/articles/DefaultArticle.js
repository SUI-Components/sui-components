import PropTypes from 'prop-types'

import {Article, Code, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

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

const DefaultArticle = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        Every modification of the list will return a list of Blobs (jpeg encoded!) to be uploaded on a server or
        whatever you like, and with the Blob, some useful info:
      </Paragraph>
      <Paragraph>
        Once uploaded into the component, all images will be resized if they are exceeding the max resolution defined by
        props and/or cropped to fit a given ratio. And JPEG encoded with a little bit of compression.
      </Paragraph>
      <UnorderedList>
        {[
          [
            'url',
            'string',
            "if the image is one of the initially passed by props will contain an url, if it's undefined, it's a new image."
          ],
          ['id', 'string', 'you could pass an id to identify each image that was initially passed'],
          [
            'isNew',
            'boolean',
            "if it's a new uploaded image, will be true, if not, will be false and it will have an `url`."
          ],
          ['isModified', 'boolean', 'if an image of the initialPhotos, has been rotated, will be `isModified: true`'],
          [
            'hasErrors',
            'boolean',
            'if a initial photo has some kind of error when the component try to download, will have `hasErrors: true`'
          ],
          ['file', 'object', "it's the new uploaded file"],
          [
            'previewUrl',
            'string',
            'a preview url to use if you wanna preview the images outside the photoUploader component'
          ]
        ].map(([key, propType, text]) => (
          <ListItem key={key}>
            <Code>{key}</Code>
            {propType}: {text}
          </ListItem>
        ))}
      </UnorderedList>
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

DefaultArticle.displayName = 'DefaultArticle'

DefaultArticle.propTypes = {
  className: PropTypes.string
}

export default DefaultArticle

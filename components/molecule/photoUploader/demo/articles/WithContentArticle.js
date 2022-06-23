import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeSelect from '@s-ui/react-molecule-select'

import MoleculePhotoUploader from '../../src/index.js'
import {
  _addPhotoTextButton,
  _addPhotoTextSkeleton,
  _allowUploadDuplicatedPhotos,
  _callbackPhotosRejected,
  _callbackPhotosUploaded,
  _callbackUploadPhoto,
  _dragDelay,
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
  _rotationDirection,
  _uploadingPhotosText,
  initialFormValues,
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

const DefaultArticle = ({className}) => {
  const [formState, setFormState] = useState(initialFormValues)

  const handlePhotosChange = ({file: {label}}, index) => {
    setFormState(
      formState.map((currentLabel, i) => (index === i ? {label} : currentLabel))
    )
  }

  // eslint-disable-next-line react/prop-types
  const _content = ({file, index}) => (
    <div className="demo-child-body">
      <MoleculeSelect
        value={formState[index]?.label}
        onChange={(e, {value}) =>
          handlePhotosChange({file: {...file, label: value}}, index)
        }
        iconArrowDown={_labelsArrowIcon()}
        placeholder={labelsPlaceholder}
      >
        {labels.map(label => (
          <MoleculeSelectOption key={label} value={label}>
            {label}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
    </div>
  )

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
        callbackPhotosUploaded={(files, action, ...args) => {
          if (action.action === 'DELETE') {
            const {
              data: {itemIndex}
            } = action
            formState.splice(itemIndex, 1)
            setFormState(formState)
          }
          _callbackPhotosUploaded(files, action, ...args)
        }}
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

import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {ReactSortable} from 'react-sortablejs'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {useMount} from '@schibstedspain/sui-react-hooks'

import {formatToBase64, cropAndRotateImage, base64ToBlob} from './photoTools'

import ThumbCard from './ThumbCard'
import DragNotification from './DragNotification'
import DragState from './DragState'
import InitialState from './InitialState'
import SkeletonCard from './SkeletonCard'

import {
  BASE_CLASS_NAME,
  THUMB_CLASS_NAME,
  THUMB_SORTABLE_CLASS_NAME,
  DEFAULT_IMAGE_ROTATION_DEGREES,
  DEFAULT_IMAGE_ASPECT_RATIO,
  DEFAULT_MAX_IMAGE_HEIGHT,
  DEFAULT_MAX_IMAGE_WIDTH,
  DEFAULT_FILE_TYPES_ACCEPTED,
  DEFAULT_MAX_FILE_SIZE_ACCEPTED,
  DEFAULT_NOTIFICATION_ERROR,
  DEFAULT_HAS_ERRORS_STATUS,
  DRAG_STATUS_REJECTED
} from './config'

const MoleculePhotoUploader = ({
  acceptedFileTypes = DEFAULT_FILE_TYPES_ACCEPTED,
  acceptedFileMaxSize = DEFAULT_MAX_FILE_SIZE_ACCEPTED,
  addMorePhotosIcon,
  addPhotoTextButton,
  addPhotoTextSkeleton,
  callbackPhotosUploaded = () => {},
  deleteIcon,
  dragPhotosIcon,
  dragPhotoTextInitialContent,
  dropPhotosHereText,
  errorCorruptedPhotoUploadedText,
  errorFileExcededMaxSizeText,
  errorFormatPhotoUploadedText,
  errorInitialPhotoDownloadErrorText,
  infoIcon,
  initialPhotos = [],
  limitPhotosUploadedText,
  limitPhotosUploadedNotification,
  mainPhotoLabel,
  maxImageHeight = DEFAULT_MAX_IMAGE_HEIGHT,
  maxPhotos,
  maxImageWidth = DEFAULT_MAX_IMAGE_WIDTH,
  notificationErrorFormatPhotoUploaded,
  outputImageAspectRatio = DEFAULT_IMAGE_ASPECT_RATIO,
  rejectPhotosIcon,
  retryIcon,
  rotateIcon,
  uploadingPhotosText
}) => {
  const [files, setFiles] = useState([])
  const [isLoading, setIsLoading] = useState(Boolean(initialPhotos.length))
  const [notificationError, setNotificationError] = useState(
    DEFAULT_NOTIFICATION_ERROR
  )

  const DEFAULT_FORMAT_TO_BASE_64_OPTIONS = {
    rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
    outputImageAspectRatio,
    maxImageHeight,
    maxImageWidth
  }

  const _callbackPhotosUploaded = list => {
    if (list.length) {
      const blobsArray = list.reduce((array, file) => {
        const {blob, url, isNew, isModified, hasErrors} = file
        array.push({blob, url, isNew, isModified, hasErrors})
        return [...array]
      }, [])
      callbackPhotosUploaded(blobsArray)
    }
  }

  const _onDropRejected = rejectedFiles => {
    setNotificationError({
      isError: true,
      text: notificationErrorFormatPhotoUploaded
    })
  }

  const _onDropAccepted = acceptedFiles => {
    setNotificationError(DEFAULT_NOTIFICATION_ERROR)
    if (isLoading) return false
    if (isPhotoUploaderFully()) {
      setNotificationError({
        isError: true,
        text: limitPhotosUploadedNotification
      })
      return false
    }

    setIsLoading(true)

    const notExcedingMaxSizeFiles = acceptedFiles.filter(acceptedFile => {
      if (acceptedFile.size >= acceptedFileMaxSize) {
        setNotificationError({isError: true, text: errorFileExcededMaxSizeText})
        return false
      }
      return true
    })

    const notRepeatedFiles = notExcedingMaxSizeFiles.filter(
      notExcedingMaxSizeFile =>
        !files.some(file => file.path === notExcedingMaxSizeFile?.path)
    )

    if (!notRepeatedFiles.length) {
      setIsLoading(false)
      return false
    }

    if (files.length + notRepeatedFiles.length >= maxPhotos) {
      setNotificationError({
        isError: true,
        text: limitPhotosUploadedNotification
      })
      const howManyFilesToMax = maxPhotos - files.length
      notRepeatedFiles.splice(
        howManyFilesToMax - 1,
        notRepeatedFiles.length - howManyFilesToMax
      )
    }

    const _files = [...files]

    notRepeatedFiles.reduce((accumulatorPromise, nextFile, index) => {
      return accumulatorPromise
        .then(() =>
          formatToBase64({
            file: nextFile,
            options: DEFAULT_FORMAT_TO_BASE_64_OPTIONS
          })
        )
        .then(
          ({
            blob,
            originalBase64,
            croppedBase64,
            hasErrors = DEFAULT_HAS_ERRORS_STATUS
          }) => {
            if (hasErrors) {
              const errorText = errorCorruptedPhotoUploadedText.replace(
                '%{filepath}',
                nextFile.path
              )
              setNotificationError({
                isError: true,
                text: errorText
              })
            } else {
              _files.push({
                path: nextFile.path,
                blob,
                originalBase64,
                preview: croppedBase64,
                rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
                isNew: true,
                isModified: false,
                hasErrors
              })
            }
          }
        )
        .then(() => {
          setFiles([..._files])
          if (index >= notRepeatedFiles.length - 1) {
            setIsLoading(false)
            _callbackPhotosUploaded(_files)
          }
        })
    }, Promise.resolve())
  }

  useMount(() => {
    if (initialPhotos.length) {
      const filesWithBase64 = initialPhotos.map(url =>
        formatToBase64({url, options: DEFAULT_FORMAT_TO_BASE_64_OPTIONS})
      )

      Promise.all(filesWithBase64).then(newFiles => {
        const readyPhotos = newFiles.map(
          ({
            blob,
            croppedBase64,
            url,
            hasErrors = DEFAULT_HAS_ERRORS_STATUS
          }) => ({
            blob,
            url,
            hasErrors,
            originalBase64: croppedBase64,
            preview: croppedBase64,
            rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
            isNew: false,
            isModified: false
          })
        )
        if (readyPhotos.some(photos => photos.hasErrors)) {
          setNotificationError({
            isError: true,
            text: errorInitialPhotoDownloadErrorText
          })
        }
        setFiles([...readyPhotos])
        _callbackPhotosUploaded(readyPhotos)
        setIsLoading(false)
      })
    }
  })

  const isPhotoUploaderFully = () => files.length >= maxPhotos

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    noClick: isPhotoUploaderFully(),
    noKeyboard: isPhotoUploaderFully(),
    accept: acceptedFileTypes,
    onDropAccepted: acceptedFiles => _onDropAccepted(acceptedFiles),
    onDropRejected: rejectedFiles => _onDropRejected(rejectedFiles)
  })

  const dropzoneClassName = cx(BASE_CLASS_NAME, {
    [`${BASE_CLASS_NAME}--disabled`]: isPhotoUploaderFully()
  })

  const _deleteItem = index => {
    const list = [...files]
    list.splice(index, 1)
    setFiles(list)
    setNotificationError(DEFAULT_NOTIFICATION_ERROR)
    _callbackPhotosUploaded(list)
  }

  const _retryUpload = index => {
    setIsLoading(true)
    const _files = [...files]
    const photoToRetry = _files[index]

    formatToBase64({
      url: photoToRetry.url,
      options: DEFAULT_FORMAT_TO_BASE_64_OPTIONS
    }).then(
      ({blob, croppedBase64, url, hasErrors = DEFAULT_HAS_ERRORS_STATUS}) => {
        if (hasErrors) {
          setNotificationError({
            isError: true,
            text: errorInitialPhotoDownloadErrorText
          })
        } else {
          setNotificationError(DEFAULT_NOTIFICATION_ERROR)
        }
        _files[index] = {
          blob,
          url,
          hasErrors,
          originalBase64: croppedBase64,
          preview: croppedBase64,
          rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
          isNew: false,
          isModified: false
        }

        setFiles([..._files])
        _callbackPhotosUploaded(_files)
        setIsLoading(false)
      }
    )
  }

  const _rotateItem = index => {
    const list = [...files]
    list[index].rotation =
      list[index].rotation === 270 ? 0 : list[index].rotation + 90

    cropAndRotateImage({
      base64Image: list[index].originalBase64,
      rotation: list[index].rotation,
      outputImageAspectRatio: DEFAULT_IMAGE_ASPECT_RATIO,
      maxImageHeight: DEFAULT_MAX_IMAGE_HEIGHT,
      maxImageWidth: DEFAULT_MAX_IMAGE_WIDTH
    })
      .then(value => base64ToBlob(value))
      .then(({blob, base64}) => {
        list[index].preview = base64
        list[index].blob = blob
        setFiles(list)
        list[index].isModified = true
        setNotificationError(DEFAULT_NOTIFICATION_ERROR)
        _callbackPhotosUploaded(list)
      })
  }

  const _onSortEnd = () => {
    _callbackPhotosUploaded(files)
  }

  const thumbClassName = cx(THUMB_CLASS_NAME, {
    [THUMB_SORTABLE_CLASS_NAME]: files.length > 1
  })

  const photosPreview = () => {
    const thumbCards = files =>
      files.map((file, index) => {
        return (
          <li
            className={thumbClassName}
            key={`${file.preview}${index}`}
            onClick={e => e.stopPropagation()}
          >
            <ThumbCard
              image={file}
              index={index}
              mainPhotoLabel={mainPhotoLabel}
              callbackDeleteItem={_deleteItem}
              callbackRetryUpload={_retryUpload}
              callbackRotateItem={_rotateItem}
              rotateIcon={rotateIcon}
              deleteIcon={deleteIcon}
              retryIcon={retryIcon}
              rejectPhotosIcon={rejectPhotosIcon}
            />
          </li>
        )
      })

    return (
      <ReactSortable
        className="sui-MoleculePhotoUploader-preview"
        handle=".sui-MoleculePhotoUploader-thumbCard-imageContainer"
        ghostClass={`${THUMB_CLASS_NAME}--ghost`}
        dragClass={`${THUMB_CLASS_NAME}--drag`}
        chosenClass={`${THUMB_CLASS_NAME}--chosen`}
        tag="ul"
        list={files}
        setList={setFiles}
        animation={200}
        draggable={`.${THUMB_SORTABLE_CLASS_NAME}`}
        onEnd={() => _onSortEnd()}
        delay={100}
      >
        <>
          {thumbCards(files)}
          {!isPhotoUploaderFully() && (
            <SkeletonCard
              icon={addMorePhotosIcon}
              text={addPhotoTextSkeleton}
            />
          )}
        </>
      </ReactSortable>
    )
  }

  return (
    <>
      <div {...getRootProps({className: dropzoneClassName})}>
        <input {...getInputProps()} />
        {Boolean(!files.length) && !isDragActive && (
          <InitialState
            buttonText={addPhotoTextButton}
            icon={dragPhotosIcon}
            text={dragPhotoTextInitialContent}
          />
        )}
        {Boolean(files.length) && photosPreview()}
        {isDragAccept && !isPhotoUploaderFully() && !isLoading && (
          <DragState icon={dragPhotosIcon} text={dropPhotosHereText} />
        )}
        {isDragAccept && isPhotoUploaderFully() && (
          <DragState
            icon={rejectPhotosIcon}
            status={DRAG_STATUS_REJECTED}
            text={limitPhotosUploadedText}
          />
        )}
        {isDragAccept && !isPhotoUploaderFully() && isLoading && (
          <DragState
            icon={rejectPhotosIcon}
            status={DRAG_STATUS_REJECTED}
            text={uploadingPhotosText}
          />
        )}
        {isDragReject && (
          <DragState
            icon={rejectPhotosIcon}
            status={DRAG_STATUS_REJECTED}
            text={errorFormatPhotoUploadedText}
          />
        )}
      </div>
      <DragNotification
        icon={infoIcon}
        onCloseCallback={() => setNotificationError(DEFAULT_NOTIFICATION_ERROR)}
        show={notificationError.isError}
        text={notificationError.text}
      />
    </>
  )
}

MoleculePhotoUploader.displayName = 'MoleculePhotoUploader'
MoleculePhotoUploader.propTypes = {
  /**
   *  A string with MIME file types separated by comma, ie:
   *  "image/jpeg, image/png, image/tiff"
   *  The default value is "image/*" , so it can accept any image file
   */
  acceptedFileTypes: PropTypes.string,

  /**
   *  The max file size accepted, defined as the number of bytes.
   *  The default value is 5e7 bytes (50 MB).
   */
  acceptedFileMaxSize: PropTypes.number,
  addMorePhotosIcon: PropTypes.node.isRequired,
  addPhotoTextButton: PropTypes.string.isRequired,
  addPhotoTextSkeleton: PropTypes.string.isRequired,
  callbackPhotosUploaded: PropTypes.func,
  deleteIcon: PropTypes.node.isRequired,
  dragPhotosIcon: PropTypes.node.isRequired,
  dragPhotoTextInitialContent: PropTypes.string.isRequired,
  dropPhotosHereText: PropTypes.string.isRequired,
  errorCorruptedPhotoUploadedText: PropTypes.string.isRequired,
  errorFileExcededMaxSizeText: PropTypes.string.isRequired,
  errorFormatPhotoUploadedText: PropTypes.string.isRequired,
  errorInitialPhotoDownloadErrorText: PropTypes.string.isRequired,
  infoIcon: PropTypes.node.isRequired,
  /**
   *  An array containing URLs of default, maybe uploaded, images
   */
  initialPhotos: PropTypes.arrayOf(PropTypes.string),
  limitPhotosUploadedText: PropTypes.string.isRequired,
  limitPhotosUploadedNotification: PropTypes.string.isRequired,
  mainPhotoLabel: PropTypes.string,
  maxImageHeight: PropTypes.number,
  maxPhotos: PropTypes.number,
  maxImageWidth: PropTypes.number,
  notificationErrorFormatPhotoUploaded: PropTypes.string.isRequired,
  outputImageAspectRatio: PropTypes.number,
  rejectPhotosIcon: PropTypes.node.isRequired,
  retryIcon: PropTypes.node.isRequired,
  rotateIcon: PropTypes.node.isRequired,
  uploadingPhotosText: PropTypes.string.isRequired
}

export default MoleculePhotoUploader

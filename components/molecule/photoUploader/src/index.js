import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {ReactSortable} from 'react-sortablejs'
import {getTarget} from '@s-ui/js/lib/react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {useMount} from '@schibstedspain/sui-react-hooks'

import {formatToBase64, cropAndRotateImage, base64ToBlob} from './photoTools'

import ThumbCard from './ThumbCard'
import DragNotification from './DragNotification'
import DragState from './DragState'
import InitialState from './InitialState'
import SkeletonCard from './SkeletonCard'

import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {
  BASE_CLASS_NAME,
  DROPZONE_CLASS_NAME,
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
  DRAG_STATE_STATUS_REJECTED,
  ROTATION_DIRECTION
} from './config'

const MoleculePhotoUploader = ({
  acceptedFileTypes = DEFAULT_FILE_TYPES_ACCEPTED,
  acceptedFileMaxSize = DEFAULT_MAX_FILE_SIZE_ACCEPTED,
  allowUploadDuplicatedPhotos = false,
  addMorePhotosIcon,
  addPhotoTextButton,
  addPhotoButtonSize,
  addPhotoTextSkeleton,
  callbackPhotosRejected = () => {},
  callbackPhotosUploaded = () => {},
  deleteIcon,
  disableScrollToBottom = false,
  dragPhotosIcon,
  dragPhotoTextInitialContent,
  dragPhotoDividerTextInitialContent,
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
  rotationDirection = ROTATION_DIRECTION.counterclockwise,
  uploadingPhotosText,
  thumbIconSize
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
    _scrollToBottom()
    callbackPhotosRejected(rejectedFiles)
  }

  const _onDropAccepted = acceptedFiles => {
    setNotificationError(DEFAULT_NOTIFICATION_ERROR)
    if (isLoading) return false
    if (isPhotoUploaderFully()) {
      setNotificationError({
        isError: true,
        text: limitPhotosUploadedNotification
      })
      _scrollToBottom()
      return false
    }

    setIsLoading(true)

    const notExcedingMaxSizeFiles = acceptedFiles.filter(acceptedFile => {
      if (acceptedFile.size >= acceptedFileMaxSize) {
        setNotificationError({isError: true, text: errorFileExcededMaxSizeText})
        _scrollToBottom()
        return false
      }
      return true
    })

    let notRepeatedFiles
    if (allowUploadDuplicatedPhotos) {
      notRepeatedFiles = notExcedingMaxSizeFiles
    } else {
      notRepeatedFiles = notExcedingMaxSizeFiles.filter(
        notExcedingMaxSizeFile => {
          const {
            path: newFilePath,
            size: newFileSize,
            lastModified: newFileLastModified
          } = notExcedingMaxSizeFile
          return !files.some(file => {
            const {path, size, lastModified} = file.properties
            return (
              path === newFilePath &&
              size === newFileSize &&
              lastModified === newFileLastModified
            )
          })
        }
      )
    }

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
            rotation,
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
                properties: {
                  path: nextFile.path,
                  size: nextFile.size,
                  lastModified: nextFile.lastModified
                },
                blob,
                originalBase64,
                preview: croppedBase64,
                rotation,
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
            _scrollToBottom()
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

  const dropzoneClassName = cx(DROPZONE_CLASS_NAME, {
    [`${DROPZONE_CLASS_NAME}--disabled`]: isPhotoUploaderFully()
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
          _scrollToBottom()
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

    if (rotationDirection === ROTATION_DIRECTION.clockwise) {
      list[index].rotation =
        list[index].rotation === 270 ? 0 : list[index].rotation + 90
    } else {
      list[index].rotation =
        list[index].rotation === 0 ? 270 : list[index].rotation - 90
    }

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

  const container = getTarget(document.querySelector(`.${BASE_CLASS_NAME}`))

  const _scrollToBottom = () => {
    if (!disableScrollToBottom) {
      const bounding = container.getBoundingClientRect()
      if (
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        container.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
      }
    }
  }

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
              iconSize={thumbIconSize}
              image={file}
              index={index}
              mainPhotoLabel={mainPhotoLabel}
              callbackDeleteItem={_deleteItem}
              callbackRetryUpload={_retryUpload}
              callbackRotateItem={_rotateItem}
              rotateIcon={rotateIcon()}
              deleteIcon={deleteIcon()}
              retryIcon={retryIcon()}
              rejectPhotosIcon={rejectPhotosIcon()}
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
              icon={addMorePhotosIcon()}
              text={addPhotoTextSkeleton}
            />
          )}
        </>
      </ReactSortable>
    )
  }

  return (
    <>
      <div className={BASE_CLASS_NAME}>
        <div {...getRootProps({className: dropzoneClassName})}>
          <input {...getInputProps()} />
          {Boolean(!files.length) && !isDragActive && (
            <InitialState
              buttonText={addPhotoTextButton}
              buttonSize={addPhotoButtonSize}
              icon={dragPhotosIcon()}
              text={dragPhotoTextInitialContent}
              dividerText={dragPhotoDividerTextInitialContent}
            />
          )}
          {Boolean(files.length) && photosPreview()}
          {isDragAccept && !isPhotoUploaderFully() && !isLoading && (
            <DragState icon={dragPhotosIcon()} text={dropPhotosHereText} />
          )}
          {isDragAccept && isPhotoUploaderFully() && (
            <DragState
              icon={rejectPhotosIcon()}
              status={DRAG_STATE_STATUS_REJECTED}
              text={limitPhotosUploadedText}
            />
          )}
          {isDragAccept && !isPhotoUploaderFully() && isLoading && (
            <DragState
              icon={rejectPhotosIcon()}
              status={DRAG_STATE_STATUS_REJECTED}
              text={uploadingPhotosText}
            />
          )}
          {isDragReject && (
            <DragState
              icon={rejectPhotosIcon()}
              status={DRAG_STATE_STATUS_REJECTED}
              text={errorFormatPhotoUploadedText}
            />
          )}
        </div>
        <DragNotification
          icon={infoIcon()}
          onCloseCallback={() =>
            setNotificationError(DEFAULT_NOTIFICATION_ERROR)
          }
          show={notificationError.isError}
          text={notificationError.text}
        />
      </div>
    </>
  )
}

MoleculePhotoUploader.displayName = 'MoleculePhotoUploader'
MoleculePhotoUploader.propTypes = {
  /**
   *  A string with MIME file types separated by comma, ie, the default value is:
   *  "image/jpeg, image/gif, image/png, image/webp, image/bmp"
   *  To use any format, use "image/*" , but not all format are tested, and some of them fails.
   */
  acceptedFileTypes: PropTypes.string,

  /**
   *  The max file size accepted, defined as the number of bytes.
   *  The default value is 5e7 bytes (50 MB).
   */
  acceptedFileMaxSize: PropTypes.number,

  /** Icon placed in skeleton placed after thumbails */
  addMorePhotosIcon: PropTypes.node.isRequired,

  /** Button size of the initial state button */
  addPhotoButtonSize: PropTypes.string,

  /** Text showed at the button of initial screen, when no photos are added */
  addPhotoTextButton: PropTypes.string.isRequired,

  /** Text showed at skeleton placed after thumbails */
  addPhotoTextSkeleton: PropTypes.string.isRequired,

  /** A boolean to let the user upload the same photo many times */
  allowUploadDuplicatedPhotos: PropTypes.bool,

  /** Callback that returns an array of rejected files */
  callbackPhotosRejected: PropTypes.func,

  /**
   *  Callback that returns an array of files
   *  It's executed everytime an image is added, or is deleted, or is rotated, or is sorted
   */
  callbackPhotosUploaded: PropTypes.func,

  /** Icon placed in the button that deletes image */
  deleteIcon: PropTypes.node.isRequired,

  /** A boolean to disable that the component scroll to bottom everytime the user add a photo or there's an error */
  disableScrollToBottom: PropTypes.bool,

  /** Icon placed in the initial screen to invite the user to drag images */
  dragPhotosIcon: PropTypes.node.isRequired,

  /** Text showed at the initial content screen, with the previous icon */
  dragPhotoTextInitialContent: PropTypes.string.isRequired,

  /** Text showed between the initial content screen (dragPhotosIcon), with the icon (dragPhotosIcon) */
  dragPhotoDividerTextInitialContent: PropTypes.string.isRequired,

  /** Text showed when the user drag files into the dropzone, to indicate he can drop */
  dropPhotosHereText: PropTypes.string.isRequired,

  /**
   *  In this string you can add
   *   %{filepath}
   *  and it will be replaced with the failed file name
   */
  errorCorruptedPhotoUploadedText: PropTypes.string.isRequired,

  /** Text showed at error notification when a file too big is dropped */
  errorFileExcededMaxSizeText: PropTypes.string.isRequired,

  /** Text showed at error notification when a file with not accepted filetype is dropped */
  errorFormatPhotoUploadedText: PropTypes.string.isRequired,

  /** Text showed at error notification when some file of the initialPhotos fails */
  errorInitialPhotoDownloadErrorText: PropTypes.string.isRequired,

  /** Info icon */
  infoIcon: PropTypes.node.isRequired,

  /** An array containing URLs of default images to be loaded into the preview */
  initialPhotos: PropTypes.arrayOf(PropTypes.string),

  /** Text showed at dropzone when the user drag (but not drop) some images and maxPhotos has been reached */
  limitPhotosUploadedText: PropTypes.string.isRequired,

  /** Text showed at error notification when the user drops more images than the max allowed at maxPhotos */
  limitPhotosUploadedNotification: PropTypes.string.isRequired,

  /**
   *  Text placed at badge of the preview first item.
   *  If none is send: will be number '1'
   */
  mainPhotoLabel: PropTypes.string,

  /**
   *  Maximum image height to be saved.
   *  Default value: 1080
   *  Maximum image width will be calculated with the ratio defined and this maxImageHeight
   *  The user can upload images with a bigger resolution, but if he does, the component will resize automatically.
   *  Too much big resolutions will decrease the performance, so be cautious!
   * */
  maxImageHeight: PropTypes.number,

  /**
   *  Maximum photos that the user can upload to the component.
   *  If not defined, unlimited photos can be upload.
   */
  maxPhotos: PropTypes.number,

  /**
   *  You can define also maximum width resolution of the image.
   *  If not, it will be calculated with maximum height and ratio (recommended)
   */
  maxImageWidth: PropTypes.number,

  /** Text showed at error notification when a file with not allowed MIME filetype is dropped */
  notificationErrorFormatPhotoUploaded: PropTypes.string.isRequired,

  /**
   *  Ratio to crop the dropped images.
   *  Default value: 4/3
   */
  outputImageAspectRatio: PropTypes.number,

  /** Icon showed at the dropzone when an user drags (before drop!) not allowed files  */
  rejectPhotosIcon: PropTypes.node.isRequired,

  /** Icon placed in the button that retry download initial image, when it fails */
  retryIcon: PropTypes.node.isRequired,

  /** Icon placed in the button that rotate image */
  rotateIcon: PropTypes.node.isRequired,

  /**
   *  A string defining rotation direction.
   *  It can be 'clockwise' or 'counterclockwise'.
   *  Take care of being consistent with your 'rotateIcon' pointing direction! :)
   */
  rotationDirection: PropTypes.oneOf(Object.values(ROTATION_DIRECTION)),

  /** Text placed at the dragzone when an user tries to drag files, before previous dropped photos has been fully loaded */
  uploadingPhotosText: PropTypes.string.isRequired,

  /** Icon size inside action buttons in thumb card */
  thumbIconSize: PropTypes.oneOf(Object.keys(ATOM_ICON_SIZES))
}

export default MoleculePhotoUploader

export {ROTATION_DIRECTION as MoleculePhotoUploaderRotationDirection}

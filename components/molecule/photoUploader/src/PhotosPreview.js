import PropTypes from 'prop-types'
import cx from 'classnames'

import {ReactSortable} from 'react-sortablejs'

import ThumbCard from './ThumbCard'
import SkeletonCard from './SkeletonCard'
import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {formatToBase64, cropAndRotateImage, base64ToBlob} from './photoTools'
import {callbackUploadPhotoHandler} from './fileTools'

import {
  BASE_CLASS_NAME,
  THUMB_CLASS_NAME,
  THUMB_SORTABLE_CLASS_NAME,
  DEFAULT_NOTIFICATION_ERROR,
  DEFAULT_HAS_ERRORS_STATUS,
  DEFAULT_IMAGE_ROTATION_DEGREES,
  ROTATION_DIRECTION,
  DEFAULT_IMAGE_ASPECT_RATIO,
  DEFAULT_MAX_IMAGE_HEIGHT,
  DEFAULT_MAX_IMAGE_WIDTH,
  ACTIONS
} from './config'

const PREVIEW_CARD_CLASS_NAME = `${BASE_CLASS_NAME}-preview`

const PhotosPreview = ({
  _callbackPhotosUploaded,
  _scrollToBottom,
  addMorePhotosIcon,
  addPhotoTextSkeleton,
  callbackUploadPhoto,
  defaultFormatToBase64Options,
  deleteIcon,
  dragDelay,
  errorInitialPhotoDownloadErrorText,
  files,
  isPhotoUploaderFully,
  mainPhotoLabel,
  outputImageAspectRatioDisabled,
  rejectPhotosIcon,
  rotateIcon,
  rotationDirection,
  retryIcon,
  setFiles,
  setIsLoading,
  setNotificationError,
  thumbIconSize
}) => {
  const _onSortEnd = event => {
    _callbackPhotosUploaded(files, {action: ACTIONS.SORT, data: event})
  }

  const _deleteItem = index => {
    const list = [...files]
    list.splice(index, 1)
    setFiles(list)
    setNotificationError(DEFAULT_NOTIFICATION_ERROR)
    _callbackPhotosUploaded(list, {
      action: ACTIONS.DELETE,
      data: {
        itemIndex: index,
        item: files[index]
      }
    })
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
      maxImageWidth: DEFAULT_MAX_IMAGE_WIDTH,
      outputImageAspectRatioDisabled
    })
      .then(value => base64ToBlob(value))
      .then(async ({blob, base64}) => {
        list[index].preview = base64
        list[index].blob = blob
        list[index].isModified = true

        list[index].url = await callbackUploadPhotoHandler(
          blob,
          callbackUploadPhoto,
          list[index].url
        )
        setFiles(list)
        setNotificationError(DEFAULT_NOTIFICATION_ERROR)
        _callbackPhotosUploaded(list, {
          action: ACTIONS.ROTATE,
          data: {
            itemIndex: index,
            item: files[index]
          }
        })
      })
  }

  const _retryUpload = index => {
    setIsLoading(true)
    const _files = [...files]
    const photoToRetry = _files[index]

    formatToBase64({
      item: photoToRetry,
      options: defaultFormatToBase64Options
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
        _callbackPhotosUploaded(_files, {
          ACTION: ACTIONS.RETRY_UPLOAD,
          data: {
            itemIndex: index,
            item: files[index]
          }
        })
        setIsLoading(false)
      }
    )
  }

  const thumbClassName = cx(THUMB_CLASS_NAME, {
    [THUMB_SORTABLE_CLASS_NAME]: files.length > 1
  })

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
            outputImageAspectRatioDisabled={outputImageAspectRatioDisabled}
          />
        </li>
      )
    })

  const previewCardClass = cx(PREVIEW_CARD_CLASS_NAME, {
    [`${PREVIEW_CARD_CLASS_NAME}--ratioDisabled`]: outputImageAspectRatioDisabled
  })

  return (
    <ReactSortable
      className={previewCardClass}
      handle=".sui-MoleculePhotoUploader-thumbCard-imageContainer"
      ghostClass={`${THUMB_CLASS_NAME}--ghost`}
      dragClass={`${THUMB_CLASS_NAME}--drag`}
      chosenClass={`${THUMB_CLASS_NAME}--chosen`}
      tag="ul"
      list={files}
      setList={setFiles}
      animation={200}
      draggable={`.${THUMB_SORTABLE_CLASS_NAME}`}
      onEnd={sortedFile => _onSortEnd(sortedFile)}
      delay={dragDelay}
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

PhotosPreview.displayName = 'PhotosPreview'

PhotosPreview.propTypes = {
  _callbackPhotosUploaded: PropTypes.func.isRequired,
  _scrollToBottom: PropTypes.func.isRequired,
  addMorePhotosIcon: PropTypes.node.isRequired,
  addPhotoTextSkeleton: PropTypes.string.isRequired,
  callbackUploadPhoto: PropTypes.func,
  defaultFormatToBase64Options: PropTypes.object.isRequired,
  deleteIcon: PropTypes.node.isRequired,
  dragDelay: PropTypes.number.isRequired,
  errorInitialPhotoDownloadErrorText: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  isPhotoUploaderFully: PropTypes.bool.isRequired,
  mainPhotoLabel: PropTypes.string.isRequired,
  outputImageAspectRatioDisabled: PropTypes.isRequired,
  rejectPhotosIcon: PropTypes.node.isRequired,
  rotateIcon: PropTypes.node.isRequired,
  rotationDirection: PropTypes.oneOf(Object.values(ROTATION_DIRECTION)),
  retryIcon: PropTypes.node.isRequired,
  setFiles: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setNotificationError: PropTypes.func.isRequired,
  thumbIconSize: PropTypes.oneOf(Object.keys(ATOM_ICON_SIZES))
}

export default PhotosPreview

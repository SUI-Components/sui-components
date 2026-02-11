import {forwardRef, useState} from 'react'
import {useDropzone} from 'react-dropzone'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {getTarget} from '@s-ui/js/lib/react'
import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import useMount from '@s-ui/react-hooks/lib/useMount'

import DragNotification from './DragNotification/index.js'
import DragState from './DragState/index.js'
import EmptyView from './EmptyView/index.js'
import PhotosPreview from './PhotosPreview/index.js'
import {
  ACTIONS,
  BASE_CLASS_NAME,
  DEFAULT_DRAG_DELAY_TIME,
  DEFAULT_FILE_TYPES_ACCEPTED,
  DEFAULT_IMAGE_ASPECT_RATIO,
  DEFAULT_IMAGE_ROTATION_DEGREES,
  DEFAULT_INPUT_ID,
  DEFAULT_MAX_FILE_SIZE_ACCEPTED,
  DEFAULT_MAX_IMAGE_HEIGHT,
  DEFAULT_MAX_IMAGE_WIDTH,
  DEFAULT_NOTIFICATION_ERROR,
  DEFAULT_VIEW_TYPE,
  DRAG_STATE_STATUS_REJECTED,
  DROPZONE_CLASS_NAME,
  REJECT_FILES_REASONS,
  ROTATION_DIRECTION,
  VIEW_TYPE
} from './config.js'
import {filterValidFiles, loadInitialPhotos, prepareFiles} from './fileTools.js'

const noop = () => {}

const MoleculePhotoUploader = forwardRef(
  (
    {
      acceptedFileMaxSize = DEFAULT_MAX_FILE_SIZE_ACCEPTED,
      acceptedFileTypes = DEFAULT_FILE_TYPES_ACCEPTED,
      addMorePhotosIcon,
      addPhotoButtonColor,
      addPhotoButtonDesign,
      addPhotoButtonShape,
      addPhotoButtonSize,
      addPhotoTextButton,
      addPhotoTextSkeleton,
      allowUploadDuplicatedPhotos = false,
      callbackPhotosRejected = noop,
      callbackPhotosUploaded = noop,
      callbackUploadPhoto,
      content,
      deleteButtonAriaLabel = '',
      deleteIcon,
      dragIcon = noop,
      disableScrollToBottom = false,
      dragDelay = DEFAULT_DRAG_DELAY_TIME,
      dragPhotoDividerTextInitialContent,
      dragPhotosIcon = noop,
      dragPhotosIconSize = ATOM_ICON_SIZES.extraLarge,
      dragPhotoTextInitialContent,
      dropPhotosHereText,
      errorCorruptedPhotoUploadedText,
      errorFileExcededMaxSizeText,
      errorFormatPhotoUploadedText,
      errorInitialPhotoDownloadErrorText,
      errorSaveImageEndpoint,
      showDeleteButton = true,
      id = DEFAULT_INPUT_ID,
      infoIcon = noop,
      initialPhotos = [],
      limitPhotosUploadedNotification,
      limitPhotosUploadedText,
      onLimitPhotosUploaded,
      mainPhotoLabel,
      maxImageHeight = DEFAULT_MAX_IMAGE_HEIGHT,
      maxImageWidth = DEFAULT_MAX_IMAGE_WIDTH,
      maxPhotos,
      notificationErrorFormatPhotoUploaded,
      onDropFiles = noop,
      onFileDialogOpen = noop,
      onEmptyViewClick = noop,
      onSortPhotoStart = noop,
      onSortPhotoEnd = noop,
      outputImageAspectRatio = DEFAULT_IMAGE_ASPECT_RATIO,
      outputImageAspectRatioDisabled = false,
      photosPreviewAriaLabel,
      rejectPhotosIcon,
      retryButtonAriaLabel = '',
      retryIcon,
      rotateButtonAriaLabel = '',
      rotateIcon,
      rotationDirection = ROTATION_DIRECTION.counterclockwise,
      thumbIconSize,
      uploadingPhotosText,
      isClickable = true,
      viewType = DEFAULT_VIEW_TYPE
    },
    forwardedRef
  ) => {
    const [files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(Boolean(initialPhotos.length))
    const [notificationError, setNotificationError] = useState(DEFAULT_NOTIFICATION_ERROR)

    const DEFAULT_FORMAT_TO_BASE_64_OPTIONS = {
      rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
      outputImageAspectRatioDisabled,
      outputImageAspectRatio,
      maxImageHeight,
      maxImageWidth
    }

    const isPhotoUploaderEmpty = !files.length
    const isPhotoUploaderFully = () => files.length >= maxPhotos

    useMount(() => {
      if (initialPhotos.length) {
        loadInitialPhotos({
          initialPhotos,
          defaultFormatToBase64Options: DEFAULT_FORMAT_TO_BASE_64_OPTIONS,
          setInitialDownloadError: () => {
            setNotificationError({
              isError: true,
              text: errorInitialPhotoDownloadErrorText
            })
          },
          setFiles,
          _callbackPhotosUploaded,
          setIsLoading
        })
      }
    })

    const _callbackPhotosUploaded = (list, ...rest) => {
      const blobsArray = list.reduce((array, currentFile) => {
        const {originalBase64, preview, ...restOfCurrentFile} = currentFile
        array.push({
          previewUrl: preview,
          ...restOfCurrentFile
        })
        return [...array]
      }, [])
      callbackPhotosUploaded(blobsArray, ...rest)
    }

    const _onDropRejected = rejectedFiles => {
      setNotificationError({
        isError: true,
        text: notificationErrorFormatPhotoUploaded
      })
      _scrollToBottom()
      const rejectedFilesWithReason = rejectedFiles.map(rejectedFile => ({
        rejectedFile,
        reason: REJECT_FILES_REASONS.fileType
      }))
      callbackPhotosRejected(rejectedFilesWithReason)
    }

    const _onLimitPhotosUpload = () => {
      if (onLimitPhotosUploaded) {
        onLimitPhotosUploaded()
        return
      }

      setNotificationError({
        isError: true,
        text: limitPhotosUploadedNotification
      })
    }

    const _onDropAccepted = acceptedFiles => {
      setNotificationError(DEFAULT_NOTIFICATION_ERROR)
      if (isLoading) return false

      if (isPhotoUploaderFully()) {
        _onLimitPhotosUpload()
        _scrollToBottom()
        return false
      }

      setIsLoading(true)

      const validFiles = filterValidFiles({
        files,
        filesToBeFiltered: acceptedFiles,
        acceptedFileMaxSize,
        handlePhotosRejected: callbackPhotosRejected,
        setMaxSizeError: () => {
          setNotificationError({
            isError: true,
            text: errorFileExcededMaxSizeText
          })
          _scrollToBottom()
        },
        setMaxPhotosError: () => {
          _onLimitPhotosUpload()
        },
        allowUploadDuplicatedPhotos,
        maxPhotos
      })

      if (!validFiles.length) {
        setIsLoading(false)
        return false
      }

      prepareFiles({
        handlePhotosRejected: callbackPhotosRejected,
        currentFiles: [...files],
        newFiles: validFiles,
        defaultFormatToBase64Options: DEFAULT_FORMAT_TO_BASE_64_OPTIONS,
        errorCorruptedPhotoUploadedText,
        errorSaveImageEndpoint,
        setCorruptedFileError: errorText => {
          setNotificationError({
            isError: true,
            text: errorText
          })
        },
        setFiles,
        setIsLoading,
        _scrollToBottom,
        callbackUploadPhoto,
        _callbackPhotosUploaded
      })
    }

    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      inputRef: dropzoneInputRef
    } = useDropzone({
      noClick: isPhotoUploaderFully() || !isClickable,
      noKeyboard: isPhotoUploaderFully(),
      accept: acceptedFileTypes,
      onDrop: onDropFiles,
      onFileDialogOpen,
      onDropAccepted: acceptedFiles => _onDropAccepted(acceptedFiles),
      onDropRejected: rejectedFiles => _onDropRejected(rejectedFiles)
    })

    const inputRef = useMergeRefs(dropzoneInputRef, forwardedRef)

    const mainClassName = cx(BASE_CLASS_NAME, {
      [`${BASE_CLASS_NAME}--${viewType}`]: viewType !== DEFAULT_VIEW_TYPE
    })

    const dropzoneClassName = cx(DROPZONE_CLASS_NAME, {
      [`${DROPZONE_CLASS_NAME}--disabled`]: isPhotoUploaderFully(),
      [`${DROPZONE_CLASS_NAME}--empty`]: isPhotoUploaderEmpty
    })

    const container = getTarget(document.querySelector(`.${BASE_CLASS_NAME}`))

    const _scrollToBottom = () => {
      if (!disableScrollToBottom) {
        const bounding = container.getBoundingClientRect()
        if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
          container.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          })
        }
      }
    }

    const _onSortPhotoStart = () => {
      onSortPhotoStart()
    }

    const _onSortPhotoEnd = () => {
      onSortPhotoEnd()
    }

    return (
      <>
        <div className={mainClassName}>
          <div {...getRootProps({className: dropzoneClassName})}>
            <input {...getInputProps()} ref={inputRef} id={id} />
            {isPhotoUploaderEmpty && !isDragActive && (
              <EmptyView
                onClick={onEmptyViewClick}
                buttonColor={addPhotoButtonColor}
                buttonDesign={addPhotoButtonDesign}
                buttonText={addPhotoTextButton}
                buttonShape={addPhotoButtonShape}
                buttonSize={addPhotoButtonSize}
                icon={dragPhotosIcon()}
                iconSize={dragPhotosIconSize}
                inputId={id}
                text={dragPhotoTextInitialContent}
                dividerText={dragPhotoDividerTextInitialContent}
              />
            )}
            {!isPhotoUploaderEmpty && (
              <PhotosPreview
                _callbackPhotosUploaded={_callbackPhotosUploaded}
                _onSortPhotoEnd={_onSortPhotoEnd}
                _onSortPhotoStart={_onSortPhotoStart}
                _scrollToBottom={_scrollToBottom}
                addMorePhotosIcon={addMorePhotosIcon}
                addPhotoTextSkeleton={addPhotoTextSkeleton}
                ariaLabel={photosPreviewAriaLabel ?? addPhotoTextButton}
                callbackUploadPhoto={callbackUploadPhoto}
                content={content}
                defaultFormatToBase64Options={DEFAULT_FORMAT_TO_BASE_64_OPTIONS}
                deleteButtonAriaLabel={deleteButtonAriaLabel}
                deleteIcon={deleteIcon}
                dragDelay={dragDelay}
                dragIcon={dragIcon}
                showDeleteButton={showDeleteButton}
                errorInitialPhotoDownloadErrorText={errorInitialPhotoDownloadErrorText}
                files={files}
                inputId={id}
                isPhotoUploaderFully={isPhotoUploaderFully}
                mainPhotoLabel={mainPhotoLabel}
                outputImageAspectRatioDisabled={outputImageAspectRatioDisabled}
                rejectPhotosIcon={rejectPhotosIcon}
                retryButtonAriaLabel={retryButtonAriaLabel}
                retryIcon={retryIcon}
                rotateButtonAriaLabel={rotateButtonAriaLabel}
                rotateIcon={rotateIcon}
                rotationDirection={rotationDirection}
                setFiles={setFiles}
                setIsLoading={setIsLoading}
                setNotificationError={setNotificationError}
                thumbIconSize={thumbIconSize}
                viewType={viewType}
              />
            )}
            {isDragAccept && !isPhotoUploaderFully() && !isLoading && (
              <DragState icon={dragPhotosIcon()} text={dropPhotosHereText} />
            )}
            {isDragAccept && isPhotoUploaderFully() && (
              <DragState icon={rejectPhotosIcon()} status={DRAG_STATE_STATUS_REJECTED} text={limitPhotosUploadedText} />
            )}
            {isDragAccept && !isPhotoUploaderFully() && isLoading && (
              <DragState icon={rejectPhotosIcon()} status={DRAG_STATE_STATUS_REJECTED} text={uploadingPhotosText} />
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
            onCloseCallback={() => setNotificationError(DEFAULT_NOTIFICATION_ERROR)}
            show={notificationError.isError}
            text={notificationError.text}
          />
        </div>
      </>
    )
  }
)

MoleculePhotoUploader.displayName = 'MoleculePhotoUploader'
MoleculePhotoUploader.propTypes = {
  /**
   *  A string with MIME file types separated by comma, ie, the default value is:
   *  "image/jpeg, image/gif, image/png, image/webp, image/bmp" .
   *  To use any format, use "image/*" , but not all format are tested, and some of them fails.
   */
  acceptedFileTypes: PropTypes.string,

  /**
   *  The max file size accepted, defined as the number of bytes.
   *  The default value is 5e7 bytes (50 MB).
   */
  acceptedFileMaxSize: PropTypes.number,

  /** Icon placed in skeleton placed after thumbails */
  addMorePhotosIcon: PropTypes.func.isRequired,

  /** Button color of the initial state button */
  addPhotoButtonColor: PropTypes.string,

  /** Button design of the initial state button */
  addPhotoButtonDesign: PropTypes.string,

  /** Button shape of the initial state button */
  addPhotoButtonShape: PropTypes.string,

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
   *  Callback that returns an array of files.
   *  It's executed everytime an image is added, or is deleted, or is rotated, or is sorted
   */
  callbackPhotosUploaded: PropTypes.func,

  /**
   * Callback that executes every time that new image is added or modified.
   * Returns the new Blob and old URL if exists.
   * If the callback returns the new URL it will be added to the image.
   */
  callbackUploadPhoto: PropTypes.func,

  /** Component to render inside content space */
  content: PropTypes.elementType,

  /**
   * Aria label for the delete button on thumbcards
   */
  deleteButtonAriaLabel: PropTypes.string,

  /** Icon placed in the button that deletes image */
  deleteIcon: PropTypes.func.isRequired,

  /** Icon placed for draggable help in viewtype list */
  dragIcon: PropTypes.func,

  /** A boolean to disable that the component scroll to bottom everytime the user add a photo or there's an error */
  disableScrollToBottom: PropTypes.bool,

  /**
   *  Delay time (in ms) to start dragging after clicking a thumbcard. Recommended: 0 in desktop, and around 100 in mobile.
   *  Default Value: 100
   */
  dragDelay: PropTypes.number,

  /** Icon placed in the initial screen to invite the user to drag images */
  dragPhotosIcon: PropTypes.func.isRequired,

  /** Icon size for the icon in the initial screen to invite the user to drag images */
  dragPhotosIconSize: PropTypes.string,

  /** Text showed at the initial content screen, with the previous icon */
  dragPhotoTextInitialContent: PropTypes.string.isRequired,

  /** Text showed between the initial content screen (dragPhotosIcon), with the icon (dragPhotosIcon) */
  dragPhotoDividerTextInitialContent: PropTypes.string.isRequired,

  /** Text showed when the user drag files into the dropzone, to indicate he can drop */
  dropPhotosHereText: PropTypes.string.isRequired,

  /** Show the delete button on thumb cards */
  showDeleteButton: PropTypes.bool,

  /** Id of the input element */
  id: PropTypes.string,

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

  /** Text showed at error notification when the saveImages endpoint returns an error  */
  errorSaveImageEndpoint: PropTypes.string,

  /** Info icon */
  infoIcon: PropTypes.func.isRequired,

  /** An array containing URLs of default images to be loaded into the preview */
  initialPhotos: PropTypes.arrayOf(PropTypes.string),

  /** Text showed at dropzone when the user drag (but not drop) some images and maxPhotos has been reached */
  limitPhotosUploadedText: PropTypes.string.isRequired,

  /** Text showed at error notification when the user drops more images than the max allowed at maxPhotos */
  limitPhotosUploadedNotification: PropTypes.string.isRequired,

  /** Function called when the user drops more images than the max allowed at maxPhotos. If defined no notification will be displayed */
  onLimitPhotosUploaded: PropTypes.func,

  /**
   *  Text placed at badge of the preview first item.
   *  If none is send: will be number '1'
   */
  mainPhotoLabel: PropTypes.string,

  /**
   *  Maximum image height to be saved.
   *  Default value: 1080 .
   *  Maximum image width will be calculated with the ratio defined and this maxImageHeight.
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

  /** Func to be executed when files, valids or not, are dropped */
  onDropFiles: PropTypes.func,

  /** Func to be executed when file dialog is opened */
  onFileDialogOpen: PropTypes.func,

  /**
   *  Ratio to crop the dropped images.
   *  Default value: 4/3
   */
  outputImageAspectRatio: PropTypes.number,

  /** Disable cropping funcionality */
  outputImageAspectRatioDisabled: PropTypes.bool,

  /** Aria label for the photos preview */
  photosPreviewAriaLabel: PropTypes.string,

  /** Icon showed at the dropzone when an user drags (before drop!) not allowed files  */
  rejectPhotosIcon: PropTypes.func.isRequired,

  /**
   * Aria label for the retry button on thumbcards
   */
  retryButtonAriaLabel: PropTypes.string,

  /** Icon placed in the button that retry download initial image, when it fails */
  retryIcon: PropTypes.func.isRequired,

  /**
   * Aria label for the rotate button on thumbcards
   */
  rotateButtonAriaLabel: PropTypes.string,

  /** Icon placed in the button that rotate image */
  rotateIcon: PropTypes.func.isRequired,

  /**
   *  A string defining rotation direction.
   *  It can be 'clockwise' or 'counterclockwise'.
   *  Take care of being consistent with your 'rotateIcon' pointing direction! :)
   */
  rotationDirection: PropTypes.oneOf(Object.values(ROTATION_DIRECTION)),

  /** Text placed at the dragzone when an user tries to drag files, before previous dropped photos has been fully loaded */
  uploadingPhotosText: PropTypes.string.isRequired,

  /** Icon size inside action buttons in thumb card */
  thumbIconSize: PropTypes.oneOf(Object.keys(ATOM_ICON_SIZES)),

  /** Func to be executed when dropzone area is clicked */
  onEmptyViewClick: PropTypes.func,

  /** Func to be executed when photo is being sorted */
  onSortPhotoStart: PropTypes.func,

  /** Func to be executed when photo is sorted */
  onSortPhotoEnd: PropTypes.func,

  /** A boolean to enable click in dropzone area */
  isClickable: PropTypes.bool,

  /** View types of the component */
  viewType: PropTypes.oneOf(Object.values(VIEW_TYPE))
}

export default MoleculePhotoUploader

export {
  ROTATION_DIRECTION as MoleculePhotoUploaderRotationDirection,
  ACTIONS as MoleculePhotoUploaderActions,
  VIEW_TYPE as MoleculePhotoUploaderViewType
}

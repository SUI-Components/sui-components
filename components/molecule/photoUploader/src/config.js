export const DEFAULT_INPUT_ID = 'sui-MoleculePhotoUploader-id'

export const BASE_CLASS_NAME = 'sui-MoleculePhotoUploader'
export const DROPZONE_CLASS_NAME = `${BASE_CLASS_NAME}-dropzone`
export const THUMB_CLASS_NAME = `${BASE_CLASS_NAME}-thumb`
export const THUMB_SORTABLE_CLASS_NAME = `${THUMB_CLASS_NAME}--sortable`

export const DEFAULT_DRAG_DELAY_TIME = 100
export const DEFAULT_IMAGE_ROTATION_DEGREES = 0
export const DEFAULT_IMAGE_ASPECT_RATIO = 4 / 3
export const DEFAULT_MAX_IMAGE_HEIGHT = 1080
export const DEFAULT_MAX_IMAGE_WIDTH = DEFAULT_MAX_IMAGE_HEIGHT * DEFAULT_IMAGE_ASPECT_RATIO

export const FORM_IMAGE_UPLOADER_DEFAULT_FORMAT_TO_BASE_64_OPTIONS = {
  rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
  outputImageAspectRatio: DEFAULT_IMAGE_ASPECT_RATIO,
  maxImageHeight: DEFAULT_MAX_IMAGE_HEIGHT,
  maxImageWidth: DEFAULT_MAX_IMAGE_WIDTH
}

export const DEFAULT_FILE_TYPE_EXPORTED = 'image/jpeg'
export const DEFAULT_IMAGE_QUALITY_EXPORTED = 0.8

export const DEFAULT_FILE_TYPES_ACCEPTED = 'image/jpeg, image/gif, image/png, image/webp, image/bmp'
export const DEFAULT_MAX_FILE_SIZE_ACCEPTED = 5e7
export const DEFAULT_NOTIFICATION_ERROR = {isError: false, text: ''}
export const DEFAULT_HAS_ERRORS_STATUS = false

export const DRAG_STATE_STATUS_ACCEPTED = 'accepted'
export const DRAG_STATE_STATUS_REJECTED = 'rejected'

export const ROTATION_DIRECTION = {
  clockwise: 'clockwise',
  counterclockwise: 'counterclockwise'
}

export const REJECT_FILES_REASONS = {
  repeated: 'File already loaded.',
  fileType: 'Not accepted file type.',
  maxSize: 'Exceding max size of : ',
  loadFailed: 'Load failed, corrupt file.'
}

export const ACTIONS = {
  SORT: 'SORT',
  DELETE: 'DELETE',
  ROTATE: 'ROTATE',
  UPLOAD: 'UPLOAD',
  RETRY_UPLOAD: 'RETRY_UPLOAD',
  INITIAL_LOAD: 'INITIAL_LOAD'
}

export const VIEW_TYPE = {
  GRID: 'grid',
  LIST: 'list'
}

export const DEFAULT_VIEW_TYPE = VIEW_TYPE.GRID

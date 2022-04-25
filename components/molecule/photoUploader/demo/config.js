import {MoleculePhotoUploaderRotationDirection} from '../src/index.js'

export const BASE_CLASS_DEMO = 'DemoMoleculePagination'
export const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

export const lineStyles = {
  color: 'black',
  paddingLeft: 20
}

export const _maxPhotos = 10
export const _mainPhotoLabel = 'MAIN'
export const _addPhotoTextSkeleton = 'Add more'
export const _dropPhotosHere = 'Drop your photos here'
export const _addPhotoTextButton = 'Select your device photos'
export const _allowUploadDuplicatedPhotos = true
export const _dragDelay = 0
export const _dragPhotoTextInitialContent = 'Drag photos here'
export const _dragPhotoDividerTextInitialContent =
  'dragPhotoDividerTextInitialContent'
export const _limitPhotosUploaded = 'Uploaded photo limit exceeded'
export const _limitPhotosUploadedNotification =
  'You reached the uploaded photo limit'
export const _errorFormatPhotoUploaded =
  'The images must have JPEG, PNG, GIF, BMP or WEBP format'
export const _errorCorruptedPhotoUploaded =
  'The file %{filepath} uploading has failed'
export const _errorInitialPhotoDownloadError = 'Error loading images'
export const _errorFileExcededMaxSize = 'The images must be lower than 50Mb'
export const _notificationErrorFormatPhotoUploaded =
  'The valid formats are: JPEG, PNG, GIF, BMP o WEBP'
export const _uploadingPhotosText = 'Uploading images...'
export const _rotationDirection =
  MoleculePhotoUploaderRotationDirection.clockwise

export const labels = ['Comedor', 'Cocina', 'Baño', 'Garaje', 'Habitación']

export const labelsPlaceholder = 'Choose one'

export const initialPhotos = [
  {
    url: 'https://picsum.photos/seed/---all---/200/200',
    id: '9cded3e2-7fc6-4999-acc5-1fd42d6ea49a'
  },
  {
    url: 'https://picsum.photos/seed/--your---/800/300',
    id: '6c7ee3d8-97db-4142-8520-5136fccfc40b'
  },
  {url: 'https://FAILUM.FAILED/FAIL/--base---/200/800'},
  {url: 'https://picsum.photos/seed/---are---/800/600'},
  {url: 'https://picsum.photos/seed/--belong-/200/300'},
  {url: 'https://picsum.photos/seed/---to----/200/300'},
  {url: 'https://picsum.photos/seed/---us----/200/300'}
]

export const initialFormValues = [
  {label: 'Comedor'},
  {},
  {},
  {},
  {label: 'Baño'},
  {},
  {}
]

export const _callbackPhotosUploaded = (list, ...args) => {
  console.log('_callbackPhotosUploaded: ', list, ...args) // eslint-disable-line no-console
}

export const _callbackPhotosRejected = list => {
  console.log('_callbackPhotosRejected: ', list) // eslint-disable-line no-console
}

export const _callbackUploadPhoto = (file, oldUrl) => {
  const url = {url: `https://pre.cdn.coches.net/${Date.now()}`}
  return Promise.resolve(url)
}

import {formatToBase64} from './photoTools'

import {
  ACTIONS,
  DEFAULT_HAS_ERRORS_STATUS,
  DEFAULT_IMAGE_ROTATION_DEGREES,
  REJECT_FILES_REASONS
} from './config'

export const filterValidFiles = ({
  files,
  filesToBeFiltered,
  acceptedFileMaxSize,
  handlePhotosRejected,
  setMaxSizeError,
  setMaxPhotosError,
  allowUploadDuplicatedPhotos,
  maxPhotos
}) => {
  const notExcedingMaxSizeFiles = []
  const excedingMaxSizeFiles = []

  const notExcedingMaxSizeFilesFilter = filesToFilter =>
    filesToFilter.map(fileToFilter => {
      if (fileToFilter.size >= acceptedFileMaxSize) {
        excedingMaxSizeFiles.push({
          rejectedFile: fileToFilter,
          reason: `${REJECT_FILES_REASONS.maxSize}${acceptedFileMaxSize}`
        })
      } else {
        notExcedingMaxSizeFiles.push(fileToFilter)
      }
    })

  const notRepeatedFiles = []
  const repeatedFiles = []

  const notRepeatedFilesFilter = filesToFilter =>
    filesToFilter.map(fileToFilter => {
      const {
        path: newFilePath,
        size: newFileSize,
        lastModified: newFileLastModified
      } = fileToFilter
      const isFileAlready = files.some(file => {
        const {url, properties} = file
        if (url) return false
        const {path, size, lastModified} = properties
        return (
          path === newFilePath &&
          size === newFileSize &&
          lastModified === newFileLastModified
        )
      })
      if (isFileAlready) {
        repeatedFiles.push({
          rejectedFile: fileToFilter,
          reason: REJECT_FILES_REASONS.repeated
        })
      } else {
        notRepeatedFiles.push(fileToFilter)
      }
    })

  notExcedingMaxSizeFilesFilter(filesToBeFiltered)

  if (excedingMaxSizeFiles.length) {
    setMaxSizeError()
    handlePhotosRejected(excedingMaxSizeFiles)
  }

  if (allowUploadDuplicatedPhotos) {
    notRepeatedFiles.push(...notExcedingMaxSizeFiles)
  } else {
    notRepeatedFilesFilter(notExcedingMaxSizeFiles)
  }

  if (repeatedFiles.length) {
    handlePhotosRejected(repeatedFiles)
  }

  if (!notRepeatedFiles.length) return notRepeatedFiles

  if (files.length + notRepeatedFiles.length >= maxPhotos) {
    setMaxPhotosError()
    const howManyFilesToMax = maxPhotos - files.length
    notRepeatedFiles.splice(
      howManyFilesToMax - 1,
      notRepeatedFiles.length - howManyFilesToMax
    )
  }
  return notRepeatedFiles
}

export async function callbackUploadPhotoHandler(
  blob,
  callbackUploadPhoto,
  oldUrl
) {
  if (callbackUploadPhoto) {
    try {
      const response = await callbackUploadPhoto(blob, oldUrl)
      return response.url
    } catch (e) {}
  }
}

export const prepareFiles = ({
  callbackUploadPhoto,
  currentFiles,
  defaultFormatToBase64Options,
  errorCorruptedPhotoUploadedText,
  errorSaveImageEndpoint,
  handlePhotosRejected,
  newFiles,
  setCorruptedFileError,
  setFiles,
  setIsLoading,
  _scrollToBottom,
  _callbackPhotosUploaded
}) => {
  newFiles.reduce((accumulatorPromise, nextFile, index) => {
    return accumulatorPromise
      .then(() =>
        formatToBase64({
          file: nextFile,
          options: defaultFormatToBase64Options
        })
      )
      .then(
        async ({
          file,
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
            handlePhotosRejected([
              {
                rejectedFile: nextFile,
                reason: REJECT_FILES_REASONS.loadFailed
              }
            ])
            setCorruptedFileError(errorText)
          } else {
            const url = await callbackUploadPhotoHandler(
              blob,
              callbackUploadPhoto
            )
            if (!url) {
              setCorruptedFileError(errorSaveImageEndpoint)
            } else {
              currentFiles.push({
                blob,
                file,
                hasErrors,
                isModified: false,
                isNew: true,
                originalBase64,
                properties: {
                  path: nextFile.path,
                  size: nextFile.size,
                  lastModified: nextFile.lastModified
                },
                preview: croppedBase64,
                rotation,
                url
              })
            }
          }
        }
      )
      .then(() => {
        setFiles([...currentFiles])
        if (index >= newFiles.length - 1) {
          setIsLoading(false)
          _scrollToBottom()
          _callbackPhotosUploaded(currentFiles, {action: ACTIONS.UPLOAD})
        }
      })
  }, Promise.resolve())
}

export const loadInitialPhotos = ({
  initialPhotos,
  defaultFormatToBase64Options,
  setInitialDownloadError,
  setFiles,
  _callbackPhotosUploaded,
  setIsLoading
}) => {
  const filesWithBase64 = initialPhotos.map(item =>
    formatToBase64({item, options: defaultFormatToBase64Options})
  )

  Promise.all(filesWithBase64).then(newFiles => {
    const readyPhotos = newFiles.map(
      ({
        blob,
        croppedBase64,
        url,
        hasErrors = DEFAULT_HAS_ERRORS_STATUS,
        id
      }) => ({
        blob,
        url,
        hasErrors,
        originalBase64: croppedBase64,
        preview: croppedBase64,
        rotation: DEFAULT_IMAGE_ROTATION_DEGREES,
        isNew: false,
        isModified: false,
        id
      })
    )
    if (readyPhotos.some(photos => photos.hasErrors)) {
      setInitialDownloadError()
    }
    setFiles([...readyPhotos])
    _callbackPhotosUploaded(readyPhotos, {action: ACTIONS.INITIAL_LOAD})
    setIsLoading(false)
  })
}

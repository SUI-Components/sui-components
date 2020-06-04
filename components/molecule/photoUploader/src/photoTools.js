import {
  FORM_IMAGE_UPLOADER_DEFAULT_FORMAT_TO_BASE_64_OPTIONS,
  DEFAULT_FILE_TYPE_EXPORTED,
  DEFAULT_IMAGE_QUALITY_EXPORTED,
  DEFAULT_IMAGE_ROTATION_DEGREES
} from './config'

export function formatToBase64({
  file,
  url,
  options = FORM_IMAGE_UPLOADER_DEFAULT_FORMAT_TO_BASE_64_OPTIONS
}) {
  if (file) {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    let originalBase64

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        getExifOrientation(file)
          .then(getExifOrientationResult => {
            switch (getExifOrientationResult) {
              case (3, 4):
                options.rotation = 180
                break
              case (5, 6):
                options.rotation = 90
                break
              case (7, 8):
                options.rotation = 270
            }
            return resizeImage({
              base64Image: reader.result,
              ...options
            })
          })
          .then(base64Image => {
            originalBase64 = base64Image
            return cropAndRotateImage({
              base64Image,
              ...options
            })
          })
          .then(value => base64ToBlob(value))
          .then(({blob, base64}) => {
            resolve({
              file,
              blob,
              originalBase64,
              croppedBase64: base64,
              rotation: options.rotation
            })
          })
          .catch(e => {
            resolve({hasErrors: true})
          })
      }
    })
  } else {
    return new Promise((resolve, reject) => {
      cropAndRotateImage({
        imageURL: url,
        ...options
      })
        .then(value => base64ToBlob(value))
        .then(({blob, base64}) => {
          resolve({
            url,
            blob,
            croppedBase64: base64
          })
        })
        .catch(e => {
          resolve({url, hasErrors: true})
        })
    })
  }
}

export function resizeImage({
  base64Image,
  maxImageWidth,
  maxImageHeight,
  imageMimeType
}) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  const image = new Image() // eslint-disable-line
  image.src = base64Image

  return new Promise((resolve, reject) => {
    image.onerror = () => {
      reject(new Error(`Image load fails. Origin: File resizing`))
    }
    image.onload = () => {
      const inputWidth = image.naturalWidth
      const inputHeight = image.naturalHeight

      if (inputHeight > maxImageHeight || inputWidth > maxImageWidth) {
        const inputImageAspectRatio = inputWidth / inputHeight

        if (inputHeight > inputWidth) {
          const scaleFactorHeight = maxImageHeight / inputHeight

          canvas.width = maxImageHeight * inputImageAspectRatio
          canvas.height = maxImageHeight

          context.translate(canvas.width / 2, canvas.height / 2)
          context.scale(scaleFactorHeight, scaleFactorHeight)
          context.translate(-canvas.width / 2, -canvas.height / 2)
        } else {
          const scaleFactorWidth = maxImageWidth / inputWidth

          canvas.width = maxImageWidth
          canvas.height = maxImageWidth / inputImageAspectRatio

          context.translate(canvas.width / 2, canvas.height / 2)
          context.scale(scaleFactorWidth, scaleFactorWidth)
          context.translate(-canvas.width / 2, -canvas.height / 2)
        }
        context.drawImage(
          image,
          (canvas.width - inputWidth) / 2,
          (canvas.height - inputHeight) / 2
        )
        resolve(canvas.toDataURL(imageMimeType, 1))
      } else {
        resolve(base64Image)
      }
    }
  })
}

export function cropAndRotateImage({
  base64Image,
  imageURL,
  rotation = DEFAULT_IMAGE_ROTATION_DEGREES,
  outputImageAspectRatio,
  outputImageAspectRatioDisabled,
  imageQuality = DEFAULT_IMAGE_QUALITY_EXPORTED,
  imageMimeType = DEFAULT_FILE_TYPE_EXPORTED
}) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  const image = new Image() // eslint-disable-line

  if (imageURL) {
    image.crossOrigin = 'Anonymous'
  }

  if (base64Image) {
    image.src = base64Image
  } else {
    image.src = imageURL
  }

  return new Promise((resolve, reject) => {
    image.onerror = () => {
      reject(
        new Error(
          `Image load fails. Origin: ${
            imageURL ? `URL ${imageURL}` : `File upload`
          }`
        )
      )
    }
    image.onload = () => {
      const inputWidth = image.naturalWidth
      const inputHeight = image.naturalHeight

      let outputWidth
      let outputHeight
      let inputImageAspectRatio

      if (rotation === 0 || rotation === 180) {
        inputImageAspectRatio = inputWidth / inputHeight
        outputWidth = inputWidth
        outputHeight = inputHeight
      } else {
        inputImageAspectRatio = inputHeight / inputWidth
        outputWidth = inputHeight
        outputHeight = inputWidth
      }

      if (!outputImageAspectRatioDisabled) {
        if (inputImageAspectRatio > outputImageAspectRatio) {
          outputWidth = outputHeight * outputImageAspectRatio
        } else if (inputImageAspectRatio < outputImageAspectRatio) {
          outputHeight = outputWidth / outputImageAspectRatio
        }
      }

      canvas.width = outputWidth
      canvas.height = outputHeight

      switch (rotation) {
        case 0:
          context.translate(
            (outputWidth - inputWidth) * 0.5,
            (outputHeight - inputHeight) * 0.5
          )
          break
        case 90:
          context.rotate(0.5 * Math.PI)
          context.translate(
            (outputHeight - inputWidth) * 0.5,
            -(outputWidth + inputHeight) * 0.5
          )

          break
        case 180:
          context.rotate(Math.PI)
          context.translate(
            -(outputWidth + inputWidth) * 0.5,
            -(outputHeight + inputHeight) * 0.5
          )

          break
        case 270:
          context.rotate((270 * Math.PI) / 180)
          context.translate(
            -(outputHeight + inputWidth) * 0.5,
            (outputWidth - inputHeight) * 0.5
          )
      }

      context.drawImage(image, 0, 0)
      resolve(canvas.toDataURL(imageMimeType, imageQuality))
    }
  })
}

/**
 *
 * @param {String} base64 to transform to Blob type
 * @param {String} imageMimeType to define the Blob's MIME type (default: JPEG)
 *
 * returns a new Blob and the original base64 string
 */
export function base64ToBlob(
  base64,
  imageMimeType = DEFAULT_FILE_TYPE_EXPORTED
) {
  var byteString = atob(base64.split(',')[1]) // eslint-disable-line
  var ab = new ArrayBuffer(byteString.length)
  var ia = new Uint8Array(ab)

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Promise((resolve, reject) => resolve({blob: new Blob([ia], {type: imageMimeType}), base64})) // eslint-disable-line
}

/**
 *
 * @param {File} file containing image data
 *
 * returns a number, with this possible values:
 *    1, 2, 3, 4, 5, 6, 7 or 8 : EXIF orientation values
 *    -1 : EXIF orientation value not defined
 *    -2 : not a JPEG type file
 */
function getExifOrientation(file) {
  var reader = new window.FileReader()

  return new Promise((resolve, reject) => {
    reader.onload = function(e) {
      var view = new DataView(e.target.result)

      if (view.getUint16(0, false) !== 0xffd8) {
        resolve(-2)
      }
      var length = view.byteLength
      var offset = 2
      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) resolve(-1)
        var marker = view.getUint16(offset, false)
        offset += 2
        if (marker === 0xffe1) {
          if (view.getUint32((offset += 2), false) !== 0x45786966) {
            resolve(-1)
          }

          var little = view.getUint16((offset += 6), false) === 0x4949
          offset += view.getUint32(offset + 4, little)
          var tags = view.getUint16(offset, little)
          offset += 2
          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 0x0112) {
              resolve(view.getUint16(offset + i * 12 + 8, little))
            }
          }
        } else if ((marker && 0xff00) !== 0xff00) {
          break
        } else {
          offset += view.getUint16(offset, false)
        }
      }
      resolve(-1)
    }
    reader.readAsArrayBuffer(file)
  })
}

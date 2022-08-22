import {Buffer} from 'buffer'

export const FILE_READER = {
  DATA_URL: 'readAsDataURL', // Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data.
  ARRAY_BUFFER: 'readAsArrayBuffer', // Starts reading the contents of the specified Blob, once finished, the result attribute contains an ArrayBuffer representing the file's data.
  // BINARY_STRING: 'readAsBinaryString', // Starts reading the contents of the specified Blob, once finished, the result attribute contains the raw binary data from the file as a string.
  TEXT: 'readAsText' // Starts reading the contents of the specified Blob, once finished, the result attribute contains the contents of the file as a text string. An optional encoding name can be specified.
}
export const READY_STATE = {
  EMPTY: 0, // No data has been loaded yet.
  LOADING: 1, //	Data is currently being loaded.
  DONE: 2 //	The entire read request has been completed.
}
export const STATUS = {
  EMPTY: 'empty',
  READY: 'ready',
  CREATED: 'created',
  UPDATED: 'updated',
  REMOVED: 'removed',
}

export const arrayBuffer2string = (buffer, encoding = 'utf8') =>
  Buffer.from(buffer).toString(encoding)
export const string2arrayBuffer = string => {
  let buffer = new ArrayBuffer(string.length * 2) // 2 bytes for each char
  let bufferView = new Uint16Array(buffer)
  for (let i = 0, strLen = string.length; i < strLen; i++) {
    bufferView[i] = string.charCodeAt(i)
  }
  return buffer
}
export const binary2string = binary =>
  binary
    .split(' ')
    .map(elem => String.fromCharCode(parseInt(elem, 2)))
    .join('')

export const read = (
  file,
  resolver = reader => {
    return new Promise((resolve, reject) => {
      reader.onload = event => {
        resolve(event.target)
      }
      reader.onerror = error => {
        debugger
        reject(error)
      }
    })
  },
  [fileReader = FILE_READER.DATA_URL, options] = []
) => {
  const reader = new FileReader()
  const {
    /** Properties **/
    // error,
    // readyState,
    // result,
    /** methods **/
    // readAsDataURL,
    // readAsArrayBuffer,
    // readAsBinaryString,
    // readAsText,
    // abort
    /** events **/
    // onabort,
    // onloadstart,
    // onload,
    // onloadend,
    // onerror,
    // onprogress
  } = reader

  return new Promise((resolve, reject) => {
    resolver(reader)
      .then(response => resolve(response))
      .catch(error => reject(error))
    if (typeof reader[fileReader] === 'function') {
      try {
        reader[fileReader](file, options)
      } catch (error) {
        reject(error)
      }
    }
  })
}

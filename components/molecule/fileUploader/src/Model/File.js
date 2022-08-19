const FILE_READER = {
  DATA_URL: 'readAsDataURL',
  ARRAY_BUFFER: 'readAsArrayBuffer',
  BINARY_STRING: 'readAsBinaryString',
  TEXT: 'readAsText'
}

class File {
  static FILE_READER = FILE_READER
  static read = (file, resolver = ({onLoad, onError}) => new Promise(([resolve, reject]) => {
    resolve()
  }), fileReader = FILE_READER.DATA_URL) => {
    const reader = new FileReader()
    const {
      /** Properties **/
      error,
      readyState,
      result,

      /** methods **/
      // readAsDataURL,
      // readAsArrayBuffer,
      // readAsBinaryString,
      // readAsText,
      abort
    } = reader

    if (typeof reader[fileReader] === 'function') {
      reader[fileReader](file)
    }

    let {
      /** events **/
      onabort,
      onloadstart,
      onload,
      onloadend,
      onerror,
      onprogress
    } = reader

      return resolver({
                        onAbort: onabort,
                        onLoadStart: onloadstart,
                        onLoad: onload,
                        onLoadEnd: onloadend,
                        onError: onerror,
                        onProgress: onprogress
                      },
                      abort)
    }
  }

  static getState = () => {}

  #defaultValue
  #value
  #data
  constructor({value}) {
    this.#defaultValue = value
    this.value = value
    debugger
  }

  get() {}

  set() {}

  update() {}
}

export default File

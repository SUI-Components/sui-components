import file from '../../lib/Model/File.js'
import {
  arrayBuffer2string,
  string2arrayBuffer,
  binary2string,
  read,
  FILE_READER,
  READY_STATE,
  STATUS
} from './helpers.js'

class FileView {
  static FILE_READER = FILE_READER
  static READY_STATE = READY_STATE
  static STATUS = STATUS

  static arrayBuffer2string = arrayBuffer2string
  static string2arrayBuffer = string2arrayBuffer
  static binary2string = binary2string

  static read = read

  #defaultName
  #name
  #defaultValue
  #value
  #status
  constructor(...args) {
    const resolver = async function (resolve) {
      let value, name
      if (typeof args[0] === 'object' && args[0] instanceof File) {
        const fileReader = await read(args[0])
        value = fileReader.result
        name = args[0].name
      } else {
        ;[value, name] = args
      }
      this.#defaultName = name
      this.#name = name
      this.#defaultValue = value
      this.#value = value
      this.#status =
        value === undefined ? FileView.STATUS.EMPTY : FileView.STATUS.READY
      resolve(this)
    }

    return new Promise(resolver.bind(this))
  }

  get [Symbol.toStringTag]() {
    return 'FileView'
  }

  get status() {
    return this.#status
  }

  get value() {
    return this.#value
  }

  get defaultValue() {
    return this.#defaultValue
  }

  get name() {
    return this.#name
  }

  set name(name) {
    this.#name = name
  }

  get defaultName() {
    return this.#defaultName
  }

  get() {
    return {
      name: this.#name,
      value: this.#value,
      status: this.#status
    }
  }

  set(...args) {}

  update(...args) {}

  render() {}
}

export default FileView

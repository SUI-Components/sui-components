/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {demoBaseClassName} from '@s-ui/react-primitive-injector-demo/settings.js'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
// import sinon from 'sinon'

import json from '../package.json'
import * as pkg from '../src/index.js'

import FileModel from '../src/Model/FileModel.js'

chai.use(chaiDOM)

describe('Model', () => {
  describe('FileModel', () => {
    const fileContent = 'fileContent'
    const name = 'filename'
    const fileExtension = 'txt'
    const fileName = `${name}.${fileExtension}`

    describe('statics', () => {
      describe('FILE_READER', () => {
        it('value must be an object enum', () => {
          // Given

          // When
          const {FILE_READER: actual} = FileModel

          // Then
          expect(actual).to.be.an('object')
        })

        it('value must be a defined string-key pair filled', () => {
          // Given
          const expected = {
            DATA_URL: 'readAsDataURL',
            ARRAY_BUFFER: 'readAsArrayBuffer',
            // BINARY_STRING: 'readAsBinaryString',
            TEXT: 'readAsText'
          }

          // When
          const {FILE_READER: actual} = FileModel
          const {
            DATA_URL,
            ARRAY_BUFFER,
            // BINARY_STRING,
            TEXT,
            ...others
          } = actual

          // Then
          expect(Object.keys(others).length).to.equal(0)
          expect(Object.keys(actual)).to.have.members(Object.keys(expected))
          Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
            expect(Object.keys(actual).includes(expectedKey)).to.be.true
            expect(actual[expectedKey]).to.equal(expectedValue)
          })
        })
      })

      describe('READY_STATE', () => {
        it('value must be an object enum', () => {
          // Given

          // When
          const {READY_STATE: actual} = FileModel

          // Then
          expect(actual).to.be.an('object')
        })

        it('value must be a defined string-key pair filled', () => {
          // Given
          const expected = {
            EMPTY: 0,
            LOADING: 1,
            DONE: 2
          }

          // When
          const {READY_STATE: actual} = FileModel
          const {EMPTY, LOADING, DONE, ...others} = actual

          // Then
          expect(Object.keys(others).length).to.equal(0)
          expect(Object.keys(actual)).to.have.members(Object.keys(expected))
          Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
            expect(Object.keys(actual).includes(expectedKey)).to.be.true
            expect(actual[expectedKey]).to.equal(expectedValue)
          })
        })
      })

      describe('read', () => {
        it('given a file should return the data', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const {error, readyState, result, ...others} = await FileModel.read(
            file
          )
          // Then
          expect(error).to.be.null
          expect(readyState).to.equal(FileModel.READY_STATE.DONE)
          expect(Object.keys(others).length).to.equal(0)
          expect(result).to.be.string
          expect(atob(result.split(',')[1])).to.equal(fileContent)
        })

        it('given a file should return the data when file reader is data-url', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const {error, readyState, result, ...others} = await FileModel.read(
          file,
          FileModel.FILE_READER.DATA_URL.DATA_URL
          )
          // Then
          expect(error).to.be.null
          expect(readyState).to.equal(FileModel.READY_STATE.DONE)
          expect(Object.keys(others).length).to.equal(0)
          expect(result).to.be.string
          expect(atob(result.split(',')[1])).to.equal(fileContent)
        })

        it('given a file should return the data when file reader is array-buffer', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const {error, readyState, result, ...others} = await FileModel.read(
            file,
            undefined,
            [FileModel.FILE_READER.ARRAY_BUFFER]
          )
          // Then
          expect(error).to.be.null
          expect(readyState).to.equal(FileModel.READY_STATE.DONE)
          expect(Object.keys(others).length).to.equal(0)
          expect(result).to.be.string
          expect(FileModel.arrayBuffer2string(result)).to.equal(fileContent)
        })

        it('given a file should return the data when file reader is text', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const {error, readyState, result, ...others} = await FileModel.read(
            file,
            undefined,
            [FileModel.FILE_READER.TEXT]
          )
          // Then
          expect(error).to.be.null
          expect(readyState).to.equal(FileModel.READY_STATE.DONE)
          expect(Object.keys(others).length).to.equal(0)
          expect(result).to.be.string
          expect(result).to.equal(fileContent)
        })

        it('given NOT a file should fire a reading error', async () => {
          // Given
          const file = 1

          // When

          // Then
          await FileModel.read(file).catch(error => {
            expect(error.message).to.equal(
              "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'."
            )
          })
        })

        it('given a file and aborting the loading should fire an error', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const resolver = reader =>
            new Promise((resolve, reject) => {
              reader.onabort = event => {
                reject(event.target.error)
              }
              reader.onloadstart = () => {
                reader.abort()
              }
            })

          // When

          // Then
          await FileModel.read(file, resolver).catch(error => {
            expect(error.message).to.equal(
              'An ongoing operation was aborted, typically with a call to abort().'
            )
          })
        })
      })
    })

    describe('constructor', async () => {
      it('given undefined value should return an empty FileModel', async () => {
        // Given

        // When
        const current = await new FileModel(undefined, undefined)

        // Then
        expect(Object.keys(current).length).to.equal(0)
        expect(current.status).to.equal(FileModel.STATUS.EMPTY)
        expect(current.value).to.be.undefined
        expect(current.defaultValue).to.be.undefined
        expect(current.name).to.be.undefined
        expect(current.defaultName).to.be.undefined
      })

      it('given af File value should return a FileModel', async () => {
        // Given
        const file = new File([fileContent], fileName)

        // When
        const current = await new FileModel(file)

        // Then
        expect(Object.keys(current).length).to.equal(0)
        expect(current.status).to.equal(FileModel.STATUS.READY)
        expect(current.value).to.not.be.undefined
        expect(current.defaultValue).to.not.be.undefined
        expect(current.name).to.not.be.undefined
        expect(current.name).to.equal(file.name)
        expect(current.defaultName).to.not.be.undefined
        expect(current.defaultName).to.equal(current.name)
      })

      it('given af FileReader result should return a FileModel', async () => {
        // Given
        const file = new File([fileContent], fileName)
        const {result: base64FileData} = await FileModel.read(file)

        // When
        const current = await new FileModel(base64FileData)

        // Then
        expect(Object.keys(current).length).to.equal(0)
        expect(current.status).to.equal(FileModel.STATUS.READY)
        expect(current.value).to.not.be.undefined
        expect(current.defaultValue).to.not.be.undefined
        expect(current.name).to.be.undefined
        expect(current.defaultName).to.be.undefined
        expect(current.defaultName).to.equal(current.name)
      })

      it('given af FileReader rand its filename result should return a FileModel', async () => {
        // Given
        const file = new File([fileContent], fileName)
        const {result: base64FileData} = await FileModel.read(file)

        // When
        const current = await new FileModel(base64FileData, fileName)

        // Then
        expect(Object.keys(current).length).to.equal(0)
        expect(current.status).to.equal(FileModel.STATUS.READY)
        expect(current.value).to.not.be.undefined
        expect(current.defaultValue).to.not.be.undefined
        expect(current.name).to.not.be.undefined
        expect(current.name).to.equal(file.name)
        expect(current.defaultName).to.not.be.undefined
        expect(current.defaultName).to.equal(current.name)
      })
    })
    describe('get', async () => {
      it('given undefined value should get an empty object', async () => {
        // Given
        const expected = {
          name: undefined,
          value: undefined,
          status: FileModel.STATUS.EMPTY
        }

        // When
        const current = await new FileModel(undefined, undefined)
        const actual = current.get()
        const {name, value, status, ...others} = actual

        // Then
        expect(actual).to.be.an('object')

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
      it('given File value should get an object', async () => {
        // Given
        const file = new File([fileContent], fileName)
        const expected = {
          name: fileName,
          value: `data:application/octet-stream;base64,${btoa(fileContent)}`,
          status: FileModel.STATUS.READY
        }

        // When
        const current = await new FileModel(file)
        const actual = current.get()
        const {name, value, status, ...others} = actual

        // Then
        expect(actual).to.be.an('object')

        // Then
        expect(Object.keys(others).length).to.equal(0)
        expect(Object.keys(actual)).to.have.members(Object.keys(expected))
        Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
          expect(Object.keys(actual).includes(expectedKey)).to.be.true
          expect(actual[expectedKey]).to.equal(expectedValue)
        })
      })
    })
    describe('status', () => {
      describe('get', () => {
        it('given an empty file the status might be empty', async () => {
          // Given

          // When
          const current = await new FileModel(undefined, undefined)

          // Then
          expect(current.status).to.equal(FileModel.STATUS.EMPTY)
        })

        it('given a  file the status might be ready', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const current = await new FileModel(file)

          // Then
          expect(current.status).to.equal(FileModel.STATUS.READY)
        })

        it('given a fileReader the status might be ready', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData)

          // Then
          expect(current.status).to.equal(FileModel.STATUS.READY)
        })
      })

      describe('set', () => {
        it('given an status the status might NOT change', async () => {
          // Given
          const status = FileModel.STATUS.READY
          const fileModel = await new FileModel(undefined, undefined)

          // When

          // Then
          expect(() => fileModel.status = status).to.throw('Cannot set property status of #<FileModel> which has only a getter')
        })
      })
    })
    describe('value', () => {
      describe('get', () => {
        it('given an empty file the value might be empty', async () => {
          // Given

          // When
          const current = await new FileModel(undefined, undefined)

          // Then
          expect(current.value).to.be.undefined
        })

        it('given a  file the value might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const current = await new FileModel(file)

          // Then
          expect(current.value).to.not.be.undefined
          expect(atob(current.value.split(',')[1])).to.equal(fileContent)
        })

        it('given a fileReader the value might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData)

          // Then
          expect(current.value).to.not.be.undefined
          expect(atob(current.value.split(',')[1])).to.equal(fileContent)
        })
      })

      describe('set', () => {
        it('given a value the value might NOT change', async () => {
          // Given
          const value = btoa(fileContent)
          const fileModel = await new FileModel(undefined, undefined)

          // When

          // Then
          expect(() => fileModel.value = value).to.throw('Cannot set property value of #<FileModel> which has only a getter')
        })
      })
    })
    describe('defaultValue', () => {
      describe('get', () => {
        it('given an empty file the defaultValue might be empty', async () => {
          // Given

          // When
          const current = await new FileModel(undefined, undefined)

          // Then
          expect(current.defaultValue).to.be.undefined
        })

        it('given a  file the defaultValue might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const current = await new FileModel(file)

          // Then
          expect(current.defaultValue).to.not.be.undefined
          expect(atob(current.defaultValue.split(',')[1])).to.equal(fileContent)
        })

        it('given a fileReader the defaultValue might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData)

          // Then
          expect(current.defaultValue).to.not.be.undefined
          expect(atob(current.defaultValue.split(',')[1])).to.equal(fileContent)
        })
      })

      describe('set', () => {
        it('given a value the defaultValue might NOT change', async () => {
          // Given
          const defaultValue = btoa(fileContent)
          const fileModel = await new FileModel(undefined, undefined)

          // When

          // Then
          expect(() => fileModel.defaultValue = defaultValue).to.throw('Cannot set property defaultValue of #<FileModel> which has only a getter')
        })
      })
    })
    describe('name', () => {
      describe('get', () => {
        it('given an empty file the name might be empty', async () => {
          // Given

          // When
          const current = await new FileModel(undefined, undefined)

          // Then
          expect(current.name).to.be.undefined
        })

        it('given an empty file and a name the name might NOT be undefined', async () => {
          // Given
          const filename = fileName

          // When
          const current = await new FileModel(undefined, filename)

          // Then
          expect(current.name).to.not.be.undefined
          expect(current.name).to.equal(filename)
        })

        it('given a file the name might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const current = await new FileModel(file)

          // Then
          expect(current.name).to.not.be.undefined
          expect(current.name).to.equal(fileName)
        })

        it('given a fileReader the name might NOT exist', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData)

          // Then
          expect(current.name).to.be.undefined
        })

        it('given a fileReader and filename the name might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData, fileName)

          // Then
          expect(current.name).to.not.be.undefined
          expect(current.name).to.equal(fileName)
        })
      })

      describe('set', () => {
        it('given a value the value might NOT change', async () => {
          // Given
          const filename = 'newFilename'
          const fileModel = await new FileModel(undefined, undefined)

          // When
          fileModel.name = filename

          // Then
          expect(fileModel.name).to.not.be.undefined
          expect(fileModel.name).to.not.equal(fileName)
          expect(fileModel.name).to.equal(filename)
        })
      })
    })
    describe('defaultName', () => {
      describe('get', () => {
        it('given an empty file the defaultName might be empty', async () => {
          // Given

          // When
          const current = await new FileModel(undefined, undefined)

          // Then
          expect(current.defaultName).to.be.undefined
        })

        it('given an empty file and a name the defaultName might NOT be undefined', async () => {
          // Given
          const filename = fileName

          // When
          const current = await new FileModel(undefined, filename)

          // Then
          expect(current.defaultName).to.not.be.undefined
          expect(current.defaultName).to.equal(filename)
        })

        it('given a file the defaultName might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)

          // When
          const current = await new FileModel(file)

          // Then
          expect(current.defaultName).to.not.be.undefined
          expect(current.defaultName).to.equal(fileName)
        })

        it('given a fileReader the defaultName might NOT exist', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData)

          // Then
          expect(current.defaultName).to.be.undefined
        })

        it('given a fileReader and filename the defaultName might exist', async () => {
          // Given
          const file = new File([fileContent], fileName)
          const {result: base64FileData} = await FileModel.read(file)

          // When
          const current = await new FileModel(base64FileData, fileName)

          // Then
          expect(current.defaultName).to.not.be.undefined
          expect(current.defaultName).to.equal(fileName)
        })
      })

      describe('set', () => {
        it('given a value the defaultName might NOT change', async () => {
          // Given
          const defaultName = 'newDefaultName'
          const fileModel = await new FileModel(undefined, undefined)

          // When

          // Then
          expect(() => fileModel.defaultName = defaultName).to.throw('Cannot set property defaultName of #<FileModel> which has only a getter')
        })
      })
    })
  })
})

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  const IconElement = () => <svg />

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['default']

    // When
    const {default: MoleculeFileUploader, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe('File', () => {})

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {}

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const props = {}

      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })
  })
})

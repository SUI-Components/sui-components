/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  const IconElement = () => <svg />

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'MoleculePhotoUploaderRotationDirection',
      'MoleculePhotoUploaderActions',
      'default'
    ]

    // When
    const {
      MoleculePhotoUploaderRotationDirection,
      MoleculePhotoUploaderActions,
      default: MoleculePhotoUploader,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        addMorePhotosIcon: IconElement,
        addPhotoTextSkeleton: 'addPhotoTextSkeleton',
        addPhotoTextButton: 'addPhotoTextButton',
        deleteIcon: IconElement,
        dragPhotoDividerTextInitialContent:
          'dragPhotoDividerTextInitialContent',
        dragPhotoTextInitialContent: 'dragPhotoTextInitialContent',
        dragPhotosIcon: IconElement,
        dropPhotosHereText: 'dropPhotosHereText',
        errorCorruptedPhotoUploadedText: 'errorCorruptedPhotoUploadedText',
        errorFileExcededMaxSizeText: 'errorFileExcededMaxSizeText',
        errorFormatPhotoUploadedText: 'errorFormatPhotoUploadedText',
        errorInitialPhotoDownloadErrorText:
          'errorInitialPhotoDownloadErrorText',
        infoIcon: IconElement,
        limitPhotosUploadedText: 'limitPhotosUploadedText',
        limitPhotosUploadedNotification: 'limitPhotosUploadedNotification',
        notificationErrorFormatPhotoUploaded:
          'notificationErrorFormatPhotoUploaded',
        rejectPhotosIcon: IconElement,
        retryIcon: IconElement,
        rotateIcon: IconElement,
        uploadingPhotosText: 'uploadingPhotosText'
      }

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {
        addMorePhotosIcon: IconElement,
        addPhotoTextSkeleton: 'addPhotoTextSkeleton',
        addPhotoTextButton: 'addPhotoTextButton',
        deleteIcon: IconElement,
        dragPhotoDividerTextInitialContent:
          'dragPhotoDividerTextInitialContent',
        dragPhotoTextInitialContent: 'dragPhotoTextInitialContent',
        dragPhotosIcon: IconElement,
        dropPhotosHereText: 'dropPhotosHereText',
        errorCorruptedPhotoUploadedText: 'errorCorruptedPhotoUploadedText',
        errorFileExcededMaxSizeText: 'errorFileExcededMaxSizeText',
        errorFormatPhotoUploadedText: 'errorFormatPhotoUploadedText',
        errorInitialPhotoDownloadErrorText:
          'errorInitialPhotoDownloadErrorText',
        infoIcon: IconElement,
        limitPhotosUploadedText: 'limitPhotosUploadedText',
        limitPhotosUploadedNotification: 'limitPhotosUploadedNotification',
        notificationErrorFormatPhotoUploaded:
          'notificationErrorFormatPhotoUploaded',
        rejectPhotosIcon: IconElement,
        retryIcon: IconElement,
        rotateIcon: IconElement,
        uploadingPhotosText: 'uploadingPhotosText'
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const props = {
        addMorePhotosIcon: IconElement,
        addPhotoTextSkeleton: 'addPhotoTextSkeleton',
        addPhotoTextButton: 'addPhotoTextButton',
        className: 'extended-classNames',
        deleteIcon: IconElement,
        dragPhotoDividerTextInitialContent:
          'dragPhotoDividerTextInitialContent',
        dragPhotoTextInitialContent: 'dragPhotoTextInitialContent',
        dragPhotosIcon: IconElement,
        dropPhotosHereText: 'dropPhotosHereText',
        errorCorruptedPhotoUploadedText: 'errorCorruptedPhotoUploadedText',
        errorFileExcededMaxSizeText: 'errorFileExcededMaxSizeText',
        errorFormatPhotoUploadedText: 'errorFormatPhotoUploadedText',
        errorInitialPhotoDownloadErrorText:
          'errorInitialPhotoDownloadErrorText',
        infoIcon: IconElement,
        limitPhotosUploadedText: 'limitPhotosUploadedText',
        limitPhotosUploadedNotification: 'limitPhotosUploadedNotification',
        notificationErrorFormatPhotoUploaded:
          'notificationErrorFormatPhotoUploaded',
        rejectPhotosIcon: IconElement,
        retryIcon: IconElement,
        rotateIcon: IconElement,
        uploadingPhotosText: 'uploadingPhotosText'
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })
  })

  describe('MoleculePhotoUploaderRotationDirection', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculePhotoUploaderRotationDirection: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        clockwise: 'clockwise',
        counterclockwise: 'counterclockwise'
      }

      // When
      const {MoleculePhotoUploaderRotationDirection: actual} = library
      const {clockwise, counterclockwise, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('MoleculePhotoUploaderActions', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculePhotoUploaderActions: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SORT: 'SORT',
        DELETE: 'DELETE',
        ROTATE: 'ROTATE',
        UPLOAD: 'UPLOAD',
        RETRY_UPLOAD: 'RETRY_UPLOAD',
        INITIAL_LOAD: 'INITIAL_LOAD'
      }

      // When
      const {MoleculePhotoUploaderActions: actual} = library
      const {
        SORT,
        DELETE,
        ROTATE,
        UPLOAD,
        RETRY_UPLOAD,
        INITIAL_LOAD,
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
})

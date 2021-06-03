/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/photoUploader', () => {
  const Component = MoleculePhotoUploader
  const setup = setupEnvironment(Component)
  const IconElement = () => <svg />

  // https://github.com/SUI-Components/sui-components/issues/1546
  it.skip('should render without crashing', () => {
    // Given
    const props = {
      addMorePhotosIcon: IconElement,
      addPhotoTextSkeleton: 'addPhotoTextSkeleton',
      addPhotoTextButton: 'addPhotoTextButton',
      deleteIcon: IconElement,
      dragPhotoDividerTextInitialContent: 'dragPhotoDividerTextInitialContent',
      dragPhotoTextInitialContent: 'dragPhotoTextInitialContent',
      dragPhotosIcon: IconElement,
      dropPhotosHereText: 'dropPhotosHereText',
      errorCorruptedPhotoUploadedText: 'errorCorruptedPhotoUploadedText',
      errorFileExcededMaxSizeText: 'errorFileExcededMaxSizeText',
      errorFormatPhotoUploadedText: 'errorFormatPhotoUploadedText',
      errorInitialPhotoDownloadErrorText: 'errorInitialPhotoDownloadErrorText',
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

  // https://github.com/SUI-Components/sui-components/issues/1546
  it.skip('should NOT render null', () => {
    // Given
    const props = {
      addMorePhotosIcon: IconElement,
      addPhotoTextSkeleton: 'addPhotoTextSkeleton',
      addPhotoTextButton: 'addPhotoTextButton',
      deleteIcon: IconElement,
      dragPhotoDividerTextInitialContent: 'dragPhotoDividerTextInitialContent',
      dragPhotoTextInitialContent: 'dragPhotoTextInitialContent',
      dragPhotosIcon: IconElement,
      dropPhotosHereText: 'dropPhotosHereText',
      errorCorruptedPhotoUploadedText: 'errorCorruptedPhotoUploadedText',
      errorFileExcededMaxSizeText: 'errorFileExcededMaxSizeText',
      errorFormatPhotoUploadedText: 'errorFormatPhotoUploadedText',
      errorInitialPhotoDownloadErrorText: 'errorInitialPhotoDownloadErrorText',
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

  it.skip('example', () => {
    // Example TO BE DELETED!!!!

    // Given
    // const props = {}

    // When
    // const {getByRole} = setup(props)

    // Then
    // expect(getByRole('button')).to.have.text('HOLA')
    expect(true).to.be.eql(false)
  })
})

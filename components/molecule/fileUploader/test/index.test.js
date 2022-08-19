/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
// import sinon from 'sinon'

import json from '../package.json'
import * as pkg from '../src/index.js'

import File from '../src/Model/File.js'

chai.use(chaiDOM)

describe('Model', () => {
  describe('File', () => {
    const fileContent = 'fileContent'
    const fileName = 'filename'
    const fileExtension = 'txt'
    const filePath = `${fileName}.${fileExtension}`
    const mockedFile = new window.File([fileContent], filePath)
    it('should be constructed without crashing', async () => {
      // Given
      // const spy = sinon.spy()
      debugger
      const resolver = File.read(mockedFile, () => {})
      // When

      resolver({onLoad})

      // Ten
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

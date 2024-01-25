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

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['atomToastPositions', 'atomToastAutoCloseTimes', 'default']

    // When
    const {atomToastPositions, atomToastAutoCloseTimes, default: AtomToast, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        children: 'children'
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
        children: 'children'
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

  describe('atomToastPositions', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomToastPositions: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        topLeft: 'top-left',
        top: 'top',
        topRight: 'top-right',
        bottomLeft: 'bottom-left',
        bottom: 'bottom',
        bottomRight: 'bottom-right'
      }

      // When
      const {atomToastPositions: actual} = library
      const {topLeft, top, topRight, bottomLeft, bottom, bottomRight, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomToastAutoCloseTimes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomToastAutoCloseTimes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        short: 3000,
        medium: 6000,
        long: 9000
      }

      // When
      const {atomToastAutoCloseTimes: actual} = library
      const {short, medium, long, ...others} = actual

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

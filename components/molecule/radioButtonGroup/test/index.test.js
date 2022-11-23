/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import {fireEvent} from '@testing-library/react'

import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['default']

    // When
    const {default: MoleculeRadioButtonGroup, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

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
      const props = {
        className: 'extended-classNames'
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('given an onChange event should change its inner value', () => {
      // Given
      const spyOnChange = sinon.spy()
      const values = new Array(5).fill('').map((_, i) => i)
      const props = {
        onChange: spyOnChange,
        defaultValue: [0],
        name: 'name',
        children: values.map(v => (
          <MoleculeRadioButtonField
            key={v}
            id={`${v}`}
            value={v}
            label={`${v}`}
          />
        ))
      }

      // When
      const {getByText} = setup(props)

      // Then
      sinon.assert.callCount(spyOnChange, 0)

      // And
      // When
      fireEvent.click(getByText(`${values[0]}`))

      // Then
      sinon.assert.callCount(spyOnChange, 1)
      sinon.assert.calledWith(
        spyOnChange,
        sinon.match.truthy,
        sinon.match({name: props.name, value: `${values[0]}`})
      )
    })
  })
})

/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src/index.js'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['default']

    // When
    const {default: OrganismNestedCheckboxes, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        children: [
          {id: 'nested-01', label: 'Nested 1', checked: true},
          {id: 'nested-02', label: 'Nested 2', checked: false},
          {id: 'nested-03', label: 'Nested 3', checked: true},
          {id: 'nested-04', label: 'Nested 4', checked: true},
          {id: 'nested-05', label: 'Nested 5', checked: true}
        ].map(({checked, id, label}, index) => (
          <MoleculeCheckboxField
            key={id}
            id={id}
            checked={checked}
            checkedIcon={() => null}
            intermediateIcon={() => null}
            onChange={() => null}
            label={label}
          />
        ))
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
        children: [
          {id: 'nested-01', label: 'Nested 1', checked: true},
          {id: 'nested-02', label: 'Nested 2', checked: false},
          {id: 'nested-03', label: 'Nested 3', checked: true},
          {id: 'nested-04', label: 'Nested 4', checked: true},
          {id: 'nested-05', label: 'Nested 5', checked: true}
        ].map(({checked, id, label}, index) => (
          <MoleculeCheckboxField
            key={id}
            id={id}
            checked={checked}
            checkedIcon={() => null}
            intermediateIcon={() => null}
            onChange={() => null}
            label={label}
          />
        ))
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
        children: [
          {id: 'nested-01', label: 'Nested 1', checked: true},
          {id: 'nested-02', label: 'Nested 2', checked: false},
          {id: 'nested-03', label: 'Nested 3', checked: true},
          {id: 'nested-04', label: 'Nested 4', checked: true},
          {id: 'nested-05', label: 'Nested 5', checked: true}
        ].map(({checked, id, label}, index) => (
          <MoleculeCheckboxField
            key={id}
            id={id}
            checked={checked}
            checkedIcon={() => null}
            intermediateIcon={() => null}
            onChange={() => null}
            label={label}
          />
        )),
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
  })
})

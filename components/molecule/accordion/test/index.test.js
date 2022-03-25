/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'
import userEvents from '@testing-library/user-event'

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
    const {default: MoleculeAccordion, ...others} = library

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
          <div key={0} label="label 1">
            element 1
          </div>,
          <div key={1} label="label 2">
            element 2
          </div>
        ],
        icon: <svg />
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
          <div key={0} label="label 1">
            element 1
          </div>,
          <div key={1} label="label 2">
            element 2
          </div>
        ],
        icon: <svg />
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
        className: 'extended-classNames',
        children: [
          <div key={0} label="label 1">
            element 1
          </div>,
          <div key={1} label="label 2">
            element 2
          </div>
        ],
        icon: <svg />
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should trigger onToggleTab when tab is clicked', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        children: [
          <div key={0} label="label 1">
            element 1
          </div>,
          <div key={1} label="label 2">
            element 2
          </div>
        ],
        icon: <svg />,
        onToggleTab: spy
      }
      const {getByText} = setup(props)

      // When
      const tab = getByText('label 1')
      userEvents.click(tab)

      // Then
      sinon.assert.called(spy)
    })

    it('should show the second and third tab open', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        children: [
          <div key={0} label="label 1">
            element 1
          </div>,
          <div key={1} label="label 2">
            element 2
          </div>,
          <div key={2} label="label 3">
            element 3
          </div>
        ],
        icon: <svg />,
        onToggleTab: spy,
        openedTabs: [1, 2]
      }
      const {getAllByRole} = setup(props)

      // When
      const tabs = getAllByRole('tab')

      // Then
      tabs.forEach((tab, index) => {
        expect(Boolean(tab.hasAttribute('aria-expanded'))).to.be.true
        expect(Boolean(tab.hasAttribute('aria-hidden'))).to.be.false
        expect(['element 2', 'element 3'].some(text => tab.innerText === text))
          .to.be.true
      })
    })
  })
})

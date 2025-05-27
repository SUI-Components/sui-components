/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
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
    const libraryExportedMembers = ['default']

    // When
    const {default: MoleculeBreadcrumb, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        items: [
          {
            label: 'item 0'
          },
          {
            label: 'item 1'
          }
        ]
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
        items: [
          {
            label: 'item 0'
          },
          {
            label: 'item 1'
          }
        ]
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {
        className: 'extended-classNames',
        items: [
          {
            label: 'item 0'
          },
          {
            label: 'item 1'
          }
        ]
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should return forwardRef html breadcrumb element when giving a ref to the component', () => {
      // Given
      const props = {
        items: [
          {
            label: 'item 0'
          },
          {
            label: 'item 1'
          }
        ]
      }
      const ref = createRef()

      // When
      const component = <Component {...props} ref={ref} />
      const div = document.createElement('div')
      ReactDOM.render(component, div)

      // Then
      expect(ref.current).to.not.equal(undefined)
      expect(ref.current.nodeName).to.equal('NAV')
    })
  })
})

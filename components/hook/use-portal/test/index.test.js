import React, {useRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import * as pkg from '../src/index.js'

describe(json.name, () => {
  const {default: usePortal} = pkg
  const Component = ({children, ...props}) => {
    const targetRef = useRef()
    const {Portal} = usePortal({target: targetRef.current})

    return (
      <div className="portal-test-container">
        <div className="portal-test-container-origin">
          <Portal {...props}>{children}</Portal>
        </div>
        <div ref={targetRef} className="portal-test-container-target" />
      </div>
    )
  }

  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['default']

    // When
    const {default: usePortal, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe('hook', () => {
    it('should render without crashing', () => {
      // Given
      const props = {as: 'h1'}

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
  })
})

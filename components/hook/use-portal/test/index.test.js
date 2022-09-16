import React from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {act, cleanup, renderHook} from '@testing-library/react-hooks'

import json from '../package.json'
import * as pkg from '../src/index.js'

describe(json.name, () => {
  const {default: hook} = pkg
  const setupEnvironment =
    hook =>
    (...args) =>
      renderHook(() => hook(...args))
  const setup = setupEnvironment(hook)

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
    it('should be called without crashing', () => {
      // Given

      // When
      const {result} = setup()

      // Then
      expect(() => result.current).to.not.throw()
    })

    it('should return proper props as an array', () => {
      // Given

      // When
      const {result} = setup()
      const [
        Portal
        // open, close, isOpen, toggle, triggerRef, portalRef
      ] = result.current

      // console.log(result.current)

      // Then
      expect(Portal).to.be.a('function')
      // expect(Portal.displayName).to.equal('Portal')
      // expect(open).to.be.a('function')
      // expect(close).to.be.a('function')
      // expect(toggle).to.be.a('function')
    })
  })
})

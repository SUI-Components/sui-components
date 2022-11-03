/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React, {useRef} from 'react'
import ReactDOM from 'react-dom'

import {expect} from 'chai'
import PropTypes from 'prop-types'
import sinon from 'sinon'

import {fireEvent, waitFor} from '@testing-library/react'

import json from '../package.json'
import * as pkg from '../src/index.js'

describe(json.name, () => {
  const {default: usePortal} = pkg
  const OPEN = 'open'
  const CLOSE = 'close'
  const TOGGLE = 'toggle'
  const BIND = 'bind'
  const Component = ({children, isOpen: isOpenProps, ...handlers}) => {
    const targetRef = useRef()
    const {Portal, isOpen, open, close, toggle, bind} = usePortal({
      target: targetRef.current,
      isOpen: isOpenProps,
      ...handlers
    })

    return (
      <div data-testid="portal-test-container">
        <div data-testid="portal-test-container-origin">
          <Portal isOpen={isOpen}>{children}</Portal>
        </div>
        <div ref={targetRef} data-testid="portal-test-container-target" />
        <button onClick={open}>{OPEN}</button>
        <button onClick={close}>{CLOSE}</button>
        <button onClick={toggle}>{TOGGLE}</button>
        <button onClick={bind}>{BIND}</button>
      </div>
    )
  }

  Component.propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool
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
      const props = {}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should first render null', () => {
      // Given
      const props = {children: 'children'}

      // When
      const {container, getByTestId, getByText} = setup(props)
      const portalContainerElement = getByTestId('portal-test-container')
      const portalContainerOriginElement = getByTestId(
        'portal-test-container-origin'
      )
      const portalContainerTargetElement = getByTestId(
        'portal-test-container-target'
      )
      const portalElement = getByText(props.children)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerElement.innerHTML).to.be.a('string')
      expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerOriginElement.innerHTML).to.be.a('string')
      expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

      expect(portalContainerTargetElement.innerHTML).to.be.a('string')
      expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalElement.innerHTML).to.be.a('string')
      expect(portalElement.innerHTML).to.equal(props.children)
    })

    it('should add portal to the right place', () => {
      // Given
      const props = {children: 'portal-content'}

      // When
      const {container, getByTestId, getByText} = setup(props)
      const portalContainerElement = getByTestId('portal-test-container')
      const portalContainerOriginElement = getByTestId(
        'portal-test-container-origin'
      )
      const portalContainerTargetElement = getByTestId(
        'portal-test-container-target'
      )
      const portalElement = getByText(props.children)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerElement.innerHTML).to.be.a('string')
      expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerOriginElement.innerHTML).to.be.a('string')
      expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

      expect(portalContainerTargetElement.innerHTML).to.be.a('string')
      expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalElement.innerHTML).to.be.a('string')
      expect(portalElement.innerHTML).to.equal(props.children)
    })

    it('given isOpen=false should NOT add portal', () => {
      // Given
      const props = {children: 'portal-content', isOpen: false}

      // When
      const {container, getByTestId} = setup(props)
      const portalContainerElement = getByTestId('portal-test-container')
      const portalContainerOriginElement = getByTestId(
        'portal-test-container-origin'
      )
      const portalContainerTargetElement = getByTestId(
        'portal-test-container-target'
      )

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerElement.innerHTML).to.be.a('string')
      expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerOriginElement.innerHTML).to.be.a('string')
      expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

      expect(portalContainerTargetElement.innerHTML).to.be.a('string')
      expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
    })

    it('given isOpen=true should add portal', () => {
      // Given
      const props = {children: 'portal-content', isOpen: true}

      // When
      const {container, getByTestId, getByText} = setup(props)
      const portalContainerElement = getByTestId('portal-test-container')
      const portalContainerOriginElement = getByTestId(
        'portal-test-container-origin'
      )
      const portalContainerTargetElement = getByTestId(
        'portal-test-container-target'
      )
      const portalElement = getByText(props.children)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerElement.innerHTML).to.be.a('string')
      expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalContainerOriginElement.innerHTML).to.be.a('string')
      expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

      expect(portalContainerTargetElement.innerHTML).to.be.a('string')
      expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)

      expect(portalElement.innerHTML).to.be.a('string')
      expect(portalElement.innerHTML).to.equal(props.children)
    })

    describe('fire events', () => {
      describe('close', () => {
        it('should close portal when it is fired', () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }
          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(CLOSE))

          // Then
          sinon.assert.callCount(spyOnClose, 1)
          sinon.assert.calledWith(spyOnClose, sinon.match.truthy)
          sinon.assert.callCount(spyOnOpen, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
        })

        it('should close portal when it is fired and has isOpen: true configured', () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            isOpen: true,
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }

          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(CLOSE))

          // Then
          sinon.assert.callCount(spyOnClose, 1)
          sinon.assert.calledWith(spyOnClose, sinon.match.truthy)
          sinon.assert.callCount(spyOnOpen, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
        })

        it('should close portal when it is fired and has isOpen: false configured', () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            isOpen: false,
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }

          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(CLOSE))

          // Then
          sinon.assert.callCount(spyOnClose, 1)
          sinon.assert.calledWith(spyOnClose, sinon.match.truthy)
          sinon.assert.callCount(spyOnOpen, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
        })
      })

      describe('open', () => {
        it('should open portal when it is fired', async () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }
          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(OPEN))

          // Then
          sinon.assert.callCount(spyOnOpen, 0)
          await waitFor(() =>
            expect(sinon.assert.callCount(spyOnOpen, 1), {interval: 100})
          )
          sinon.assert.calledWith(spyOnOpen, sinon.match.truthy)
          sinon.assert.callCount(spyOnClose, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
        })

        it('should open portal when it is fired and has isOpen: true configured', async () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            isOpen: true,
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }

          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(OPEN))

          // Then
          sinon.assert.callCount(spyOnOpen, 0)
          await waitFor(() =>
            expect(sinon.assert.callCount(spyOnOpen, 1), {interval: 100})
          )
          sinon.assert.calledWith(spyOnOpen, sinon.match.truthy)
          sinon.assert.callCount(spyOnClose, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
        })

        it('should open portal when it is fired and has isOpen: false configured', async () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            isOpen: false,
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }

          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(OPEN))

          // Then
          sinon.assert.callCount(spyOnOpen, 0)
          await waitFor(() =>
            expect(sinon.assert.callCount(spyOnOpen, 1), {interval: 100})
          )
          sinon.assert.calledWith(spyOnOpen, sinon.match.truthy)
          sinon.assert.callCount(spyOnClose, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
        })
      })

      describe('toggle', () => {
        it('should toggle portal when it is fired', () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }
          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(TOGGLE))

          // Then
          sinon.assert.callCount(spyOnClose, 1)
          sinon.assert.calledWith(spyOnClose, sinon.match.truthy)
          sinon.assert.callCount(spyOnOpen, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
        })

        it('should toggle portal when it is fired and has isOpen: true configured', () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            isOpen: true,
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }

          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(TOGGLE))

          // Then
          sinon.assert.callCount(spyOnClose, 1)
          sinon.assert.calledWith(spyOnClose, sinon.match.truthy)
          sinon.assert.callCount(spyOnOpen, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
        })

        it('should toggle portal when it is fired and has isOpen: false configured', async () => {
          // Given
          const spyOnClose = sinon.spy()
          const spyOnOpen = sinon.spy()
          const props = {
            children: 'portal-content',
            isOpen: false,
            onClose: spyOnClose,
            onOpen: spyOnOpen
          }

          // When
          const {getByTestId, getByText} = setup(props)
          const portalContainerElement = getByTestId('portal-test-container')
          const portalContainerOriginElement = getByTestId(
            'portal-test-container-origin'
          )
          const portalContainerTargetElement = getByTestId(
            'portal-test-container-target'
          )
          // Then
          expect(portalContainerElement.innerHTML).to.be.a('string')
          expect(portalContainerElement.innerHTML).to.not.have.lengthOf(0)

          expect(portalContainerOriginElement.innerHTML).to.be.a('string')
          expect(portalContainerOriginElement.innerHTML).to.have.lengthOf(0)

          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.have.lengthOf(0)
          // And
          // When
          fireEvent.click(getByText(TOGGLE))

          // Then
          sinon.assert.callCount(spyOnOpen, 0)
          await waitFor(() =>
            expect(sinon.assert.callCount(spyOnOpen, 1), {interval: 100})
          )
          sinon.assert.calledWith(spyOnOpen, sinon.match.truthy)
          sinon.assert.callCount(spyOnClose, 0)
          expect(portalContainerTargetElement.innerHTML).to.be.a('string')
          expect(portalContainerTargetElement.innerHTML).to.not.have.lengthOf(0)
        })
      })
    })
  })
})

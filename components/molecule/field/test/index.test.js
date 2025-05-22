/* eslint-disable sui/default-component-test */
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
    const libraryExportedMembers = ['moleculeFieldStatus', 'default']

    // When
    const {moleculeFieldStatus, default: MoleculeField, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        name: 'name'
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
        name: 'name'
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
        name: 'name'
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    describe('prop helpText', () => {
      it('given a helpText it should be properly rendered', async function () {
        // Given
        const props = {
          name: 'name',
          children: <span>children</span>,
          helpText: 'helpText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        const helpTextElement = await findByText(props.helpText)
        expect(helpTextElement.innerHTML).to.equal(props.helpText)

        const helpTextId = `${props.name}-help-text`
        expect(helpTextElement).to.have.attribute('id', helpTextId)
        expect(helpTextElement).to.not.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })
    })

    describe('prop label', () => {
      it('given a label string it should be properly rendered', async function () {
        // Given
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        const labelElement = await findByText(props.label)
        expect(labelElement.innerHTML).to.equal(props.label)
      })
      it('given a nodeLabel react node it should be properly rendered', async function () {
        // Given
        const label = 'label'
        const props = {
          name: 'name',
          children: <span>children</span>,
          nodeLabel: <span>{label}</span>
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        const labelElement = await findByText(label)
        expect(labelElement.innerHTML).to.equal(label)
      })
      it('given a label react node it should be properly rendered', async function () {
        // Given
        const label = 'label'
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: <span>{label}</span>
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        const labelElement = await findByText(label)
        expect(labelElement.innerHTML).to.equal(label)
      })
    })
    describe('prop status', () => {
      const {moleculeFieldStatus} = pkg
      it('given a success status will properly render', async function () {
        // Given
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label',
          status: moleculeFieldStatus.SUCCESS,
          statusText: 'statusText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.querySelector(`[data-status="${props.status}"]`)).to.not.be.null
        const statusTextElement = await findByText(props.statusText)
        expect(statusTextElement.innerHTML).to.equal(props.statusText)

        const helpTextId = `${props.name}-help-text`
        expect(statusTextElement).to.have.attribute('id', helpTextId)
        expect(statusTextElement).to.not.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })

      it('given a successText will properly render', async function () {
        // Given
        const status = moleculeFieldStatus.SUCCESS
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label',
          successText: 'successText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.querySelector(`[data-status="${status}"]`)).to.not.be.null
        const successTextElement = await findByText(props.successText)
        expect(successTextElement.innerHTML).to.equal(props.successText)

        const helpTextId = `${props.name}-help-text`
        expect(successTextElement).to.have.attribute('id', helpTextId)
        expect(successTextElement).to.not.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })

      it('given a error status will properly render', async function () {
        // Given
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label',
          status: moleculeFieldStatus.ERROR,
          statusText: 'statusText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.querySelector(`[data-status="${props.status}"]`)).to.not.be.null
        const statusTextElement = await findByText(props.statusText)
        expect(statusTextElement.innerHTML).to.equal(props.statusText)

        const helpTextId = `${props.name}-help-text`
        expect(statusTextElement).to.have.attribute('id', helpTextId)
        expect(statusTextElement).to.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })

      it('given a errorText will properly render', async function () {
        // Given
        const status = moleculeFieldStatus.ERROR
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label',
          errorText: 'errorText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.querySelector(`[data-status="${status}"]`)).to.not.be.null
        const errorTextElement = await findByText(props.errorText)
        expect(errorTextElement.innerHTML).to.equal(props.errorText)

        const helpTextId = `${props.name}-help-text`
        expect(errorTextElement).to.have.attribute('id', helpTextId)
        expect(errorTextElement).to.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })

      it('given a alert status will properly render', async function () {
        // Given
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label',
          status: moleculeFieldStatus.ALERT,
          statusText: 'statusText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.querySelector(`[data-status="${props.status}"]`)).to.not.be.null
        const statusTextElement = await findByText(props.statusText)
        expect(statusTextElement.innerHTML).to.equal(props.statusText)

        const helpTextId = `${props.name}-help-text`
        expect(statusTextElement).to.have.attribute('id', helpTextId)
        expect(statusTextElement).to.not.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })

      it('given a alertText will properly render', async function () {
        // Given
        const status = moleculeFieldStatus.ALERT
        const props = {
          name: 'name',
          children: <span>children</span>,
          label: 'label',
          alertText: 'alertText'
        }

        // When
        const {container, findByText} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.querySelector(`[data-status="${status}"]`)).to.not.be.null
        const alertTextElement = await findByText(props.alertText)
        expect(alertTextElement.innerHTML).to.equal(props.alertText)

        const helpTextId = `${props.name}-help-text`
        expect(alertTextElement).to.have.attribute('id', helpTextId)
        expect(alertTextElement).to.not.have.attribute('role', 'alert')
        expect(container.querySelector(`[aria-describedby="${helpTextId}"]`)).to.not.be.null
      })
    })
  })
})

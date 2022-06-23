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
    const libraryExportedMembers = [
      'moleculeStepperAlignment',
      'moleculeStepperDesign',
      'moleculeStepperJustifyContent',
      'Step',
      'useStepsContext',
      'default'
    ]

    // When
    const {
      moleculeStepperAlignment,
      moleculeStepperDesign,
      moleculeStepperJustifyContent,
      Step,
      useStepsContext,
      default: MoleculeStepper,
      ...others
    } = library

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
      const props = {className: 'extended-classNames'}
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    describe('forwardRef', () => {
      it('should return forwardRef html default ordered list element "ol" element when giving a ref to the component', () => {
        // Given
        const props = {}
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('OL')
      })
    })

    describe('polymorfism', () => {
      it('should return forwardRef html "a" element given an "as=a" prop element when giving a ref to the component', () => {
        // Given
        const props = {as: 'a'}
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal(props.as.toUpperCase())
      })
    })

    describe('a11y', () => {
      it('given a current step an a number of steps it should set that number of given steps as listItems and the step number as the current', () => {
        // Given
        const props = {
          steps: 6,
          step: 2,
          labels: Array(6)
            .fill(null)
            .map((_, index) => `step-${index}`)
        }

        // When
        const {getAllByRole, getByText} = setup(props)
        const listElements = getAllByRole('list')
        const listItemElements = getAllByRole('listitem')
        const listItemSeparators = getAllByRole('separator')

        // Then
        expect(listElements.length).to.equal(1)
        expect(listItemElements.length).to.equal(props.steps)
        expect(listItemSeparators.length).to.equal(props.steps - 1)
        // expect(listItemElements[props.step].ariaCurrent).to.equal('step')
        props.labels.forEach(label => {
          expect(getByText(label).innerText).to.equal(label)
        })
      })

      it('given a current step an a number of steps it should set that number of given steps as listItems and the step number as the current even when both changes', () => {
        // Given
        const props = {steps: 6, step: 2}

        // When
        const {getAllByRole, rerender} = setup(props)
        let listElements = getAllByRole('list')
        let listItemElements = getAllByRole('listitem')
        let listItemSeparators = getAllByRole('separator')

        // Then
        expect(listElements.length).to.equal(1)
        expect(listItemElements.length).to.equal(props.steps)
        expect(listItemSeparators.length).to.equal(props.steps - 1)
        // expect(listItemElements[props.step].ariaCurrent).to.equal('step')

        // And
        // Given
        const nextProps = {step: 3, steps: 5}

        // When
        rerender(<Component {...nextProps} />)
        listElements = getAllByRole('list')
        listItemElements = getAllByRole('listitem')
        listItemSeparators = getAllByRole('separator')

        // Then
        expect(listElements.length).to.equal(1)
        expect(listItemElements.length).to.equal(nextProps.steps)
        expect(listItemSeparators.length).to.equal(nextProps.steps - 1)
        // expect(listItemElements[nextProps.step].ariaCurrent).to.equal('step')
      })
    })

    describe('design compressed', () => {
      it('given a current step an a number of steps it should set that number of given steps as listItems and the step number as the current', () => {
        // Given
        const props = {
          steps: 6,
          step: 2,
          design: pkg.moleculeStepperDesign.COMPRESSED,
          labels: Array(6)
            .fill(null)
            .map((_, index) => `step-${index}`)
        }

        // When
        const {getAllByRole} = setup(props)
        const listElements = getAllByRole('list')
        const listItemElements = getAllByRole('listitem')
        const listItemSeparators = getAllByRole('separator')

        // Then
        expect(listElements.length).to.equal(1)
        expect(listItemElements.length).to.equal(props.steps)
        expect(listItemSeparators.length).to.equal(props.steps - 1)
        // expect(listItemElements[props.step].ariaCurrent).to.equal('step')
      })
    })

    describe('design basic', () => {
      it('given a current step an a number of steps it should set that number of given steps as listItems and the step number as the current', () => {
        // Given
        const props = {
          steps: 6,
          step: 2,
          design: pkg.moleculeStepperDesign.BASIC,
          labels: Array(6)
            .fill(null)
            .map((_, index) => `step-${index}`)
        }

        // When
        const {getAllByRole, getByText} = setup(props)
        const listElements = getAllByRole('list')
        const listItemElements = getAllByRole('listitem')
        const listItemSeparators = getAllByRole('separator')

        // Then
        expect(listElements.length).to.equal(1)
        expect(listItemElements.length).to.equal(props.steps)
        expect(listItemSeparators.length).to.equal(props.steps - 1)
        props.labels.forEach(label => {
          expect(getByText(label)).to.be.displayed
        })
      })
    })
  })
})

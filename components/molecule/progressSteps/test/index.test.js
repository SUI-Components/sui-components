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
    const libraryExportedMembers = [
      'MoleculeProgressStep',
      'STATUSES',
      'moleculeProgressStepsStatuses',
      'moleculeProgressStepsJustifyContentBar',
      'moleculeProgressContentStyle',
      'default'
    ]

    // When
    const {
      MoleculeProgressStep,
      STATUSES,
      moleculeProgressStepsStatuses,
      moleculeProgressStepsJustifyContentBar,
      moleculeProgressContentStyle,
      default: MoleculeProgressSteps,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    const library = pkg
    const {MoleculeProgressStep, moleculeProgressStepsStatuses} = library
    it('should render without crashing', () => {
      // Given
      const props = {
        iconStepDone: <svg />
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
        iconStepDone: <svg />
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
        iconStepDone: <svg />
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should render all children contents', () => {
      // Given
      const childrenPropsArray = [
        {
          label: 'label1',
          content: 'content1',
          status: moleculeProgressStepsStatuses.VISITED
        },
        {
          label: 'label2',
          content: 'content2',
          status: moleculeProgressStepsStatuses.ACTIVE
        },
        {
          label: 'label3',
          content: 'content3',
          status: moleculeProgressStepsStatuses.NORMAL
        }
      ]
      const props = {
        iconStepDone: <svg />,
        children: childrenPropsArray.map(({label, content, status, icon = <svg />}, index) => (
          <MoleculeProgressStep key={index} label={label} status={status} icon={icon}>
            {content}
          </MoleculeProgressStep>
        ))
      }

      // When
      const {container, getByText} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
      childrenPropsArray.forEach(child => {
        expect(getByText(child.content).innerHTML).to.equal(child.content)
      })
    })

    it('should render all children contents in compressed mode', () => {
      // Given
      const childrenPropsArray = [
        {
          label: 'label1',
          content: 'content1',
          status: moleculeProgressStepsStatuses.VISITED
        },
        {
          label: 'label2',
          content: 'content2',
          status: moleculeProgressStepsStatuses.ACTIVE
        },
        {
          label: 'label3',
          content: 'content3',
          status: moleculeProgressStepsStatuses.NORMAL
        }
      ]
      const props = {
        iconStepDone: <svg />,
        compressed: true,
        children: childrenPropsArray.map(({label, content, status, icon = <svg />}, index) => (
          <MoleculeProgressStep key={index} label={label} status={status} icon={icon}>
            {content}
          </MoleculeProgressStep>
        ))
      }

      // When
      const {container, getByText} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
      childrenPropsArray.forEach(child => {
        expect(getByText(child.content).innerHTML).to.equal(child.content)
      })
    })
  })

  describe('MoleculeProgressSteps.MoleculeProgressStep', () => {
    const Component = pkg.MoleculeProgressStep
    const setup = setupEnvironment(Component)

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
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should render without crashing with given icon', () => {
      // Given
      const props = {icon: <svg />}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should render without crashing with lastStep', () => {
      // Given
      const props = {lastStep: true}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should render without crashing with lastStep and compressed also', () => {
      // Given
      const props = {lastStep: true, compressed: true}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('given visited status should be visited', () => {
      // Given
      const props = {
        status: pkg.STATUSES.VISITED
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findStepClassName = findSentence('sui-MoleculeProgressSteps-path-step--visited')
      const findBarClassName = findSentence('sui-MoleculeProgressSteps-path-bar--visited')
      // Then
      expect(findStepClassName(container.innerHTML)).to.not.be.null
      expect(findBarClassName(container.innerHTML)).to.not.be.null
    })

    it('given active status should be active', () => {
      // Given
      const props = {
        status: pkg.STATUSES.ACTIVE
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findStepClassName = findSentence('sui-MoleculeProgressSteps-path-step--active')
      // Then
      expect(findStepClassName(container.innerHTML)).to.not.be.null
    })
  })

  describe('STATUSES', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {STATUSES: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        VISITED: 'VISITED',
        NORMAL: 'NORMAL',
        ACTIVE: 'ACTIVE'
      }

      // When
      const {STATUSES: actual} = library
      const {VISITED, NORMAL, ACTIVE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeProgressStepsStatuses', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeProgressStepsStatuses: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        VISITED: 'VISITED',
        NORMAL: 'NORMAL',
        ACTIVE: 'ACTIVE'
      }

      // When
      const {moleculeProgressStepsStatuses: actual} = library
      const {VISITED, NORMAL, ACTIVE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })

    describe('moleculeProgressStepsJustifyContentBar', () => {
      it('value must be an object enum', () => {
        // Given
        const library = pkg

        // When
        const {moleculeProgressStepsJustifyContentBar: actual} = library

        // Then
        expect(actual).to.be.an('object')
      })

      it('value must be a defined string-key pair filled', () => {
        // Given
        const library = pkg
        const expected = {
          LEGACY: 'legacy',
          CENTER: 'center',
          FLEX_START: 'flex-start',
          FLEX_END: 'flex-end'
        }

        // When
        const {moleculeProgressStepsJustifyContentBar: actual} = library
        const {LEGACY, CENTER, FLEX_START, FLEX_END, ...others} = actual

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
})

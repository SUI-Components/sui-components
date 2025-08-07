/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

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
      'moleculeDropdownListDesigns',
      'moleculeDropdownListSizes',
      'moleculeDropdownListSelectHandler',
      'moleculeDropdownListPositions',
      'default'
    ]

    // When
    const {
      moleculeDropdownListDesigns,
      moleculeDropdownListSizes,
      moleculeDropdownListSelectHandler,
      moleculeDropdownListPositions,
      default: MoleculeDropDownList,
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

    it('should extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should forward a given ref to the `ul` element', () => {
      // Given
      const props = {}
      const ref = createRef()

      // When
      const component = <Component {...props} ref={ref} />
      const div = document.createElement('div')
      ReactDOM.render(component, div)

      // Then
      expect(ref.current).to.not.equal(undefined)
      expect(ref.current.nodeName).to.equal('UL')
    })

    it("element role must be 'listbox' not visible by default", () => {
      // Given
      const props = {
        children: (
          <>
            {Array(5)
              .fill()
              .map((value, index) => (
                <MoleculeDropdownOption value={index.toString()} key={index}>
                  {index}
                </MoleculeDropdownOption>
              ))}
          </>
        )
      }

      // When
      const {getByRole} = setup(props)

      // Then
      expect(() => getByRole('listbox', {hidden: true})).to.not.throw()
    })

    it("element role must be 'listbox' visible when visible prop is true", () => {
      // Given
      const props = {
        children: (
          <>
            {Array(5)
              .fill()
              .map((value, index) => (
                <MoleculeDropdownOption value={index.toString()} key={index}>
                  {index}
                </MoleculeDropdownOption>
              ))}
          </>
        ),
        visible: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      expect(() => getByRole('listbox')).to.not.throw()
    })

    describe('props', () => {
      describe('visible', () => {
        it('should not render the children if visible is not defined', async () => {
          // Given
          const props = {
            children: (
              <>
                {Array(5)
                  .fill()
                  .map((value, index) => (
                    <MoleculeDropdownOption value={index.toString()} key={index}>
                      {index}
                    </MoleculeDropdownOption>
                  ))}
              </>
            )
          }

          // When
          const {container, getByText} = setup(...props)

          // Then
          expect(container).to.be.not.undefined
          expect(() => getByText('1', {visible: true})).to.throw()
        })

        it('should render the children if it is visible', async () => {
          // Given
          const props = {
            visible: true,
            children: (
              <>
                {Array(5)
                  .fill()
                  .map((value, index) => (
                    <MoleculeDropdownOption value={index.toString()} key={index}>
                      {index}
                    </MoleculeDropdownOption>
                  ))}
              </>
            )
          }

          // When
          const {container, getByText} = setup(props)

          // Then
          const element = getByText('1')
          expect(container).to.be.not.undefined
          expect(element).to.be.not.undefined
        })

        it('should not render the children if it is not visible', async () => {
          // Given
          const props = {
            visible: false,
            children: (
              <>
                {Array(5)
                  .fill()
                  .map((value, index) => (
                    <MoleculeDropdownOption value={index.toString()} key={index}>
                      {index}
                    </MoleculeDropdownOption>
                  ))}
              </>
            )
          }

          // When
          const {container} = setup(props)

          // Then
          expect(container).to.be.not.undefined
          expect(container.children.length).to.be.equal(1)
        })

        it('should render the children if it is not visible but alwaysRender is enabled', async () => {
          // Given
          const props = {
            children: (
              <>
                {Array(5)
                  .fill()
                  .map((value, index) => (
                    <MoleculeDropdownOption value={index.toString()} key={index}>
                      {index}
                    </MoleculeDropdownOption>
                  ))}
              </>
            ),
            alwaysRender: true,
            visible: false
          }

          // When
          const {container} = setup(props)

          // Then
          expect(container).to.be.not.undefined
          expect(container.children.length).to.be.equal(1)
        })

        it('should NOT render the children if it is not visible and alwaysRender is disabled', async () => {
          // Given
          const props = {
            children: (
              <>
                {Array(5)
                  .fill()
                  .map((value, index) => (
                    <MoleculeDropdownOption value={index.toString()} key={index}>
                      {index}
                    </MoleculeDropdownOption>
                  ))}
              </>
            ),
            alwaysRender: false,
            visible: false
          }

          // When
          const {container} = setup(props)

          // Then
          expect(container).to.be.not.undefined
          expect(container.children.length).to.be.equal(0)
        })
      })
    })
  })

  describe('moleculeDropdownListDesigns', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDropdownListDesigns: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        FLAT: 'flat',
        SOLID: 'solid'
      }

      // When
      const {moleculeDropdownListDesigns: actual} = library
      const {FLAT, SOLID, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeDropdownListSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDropdownListSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large'
      }

      // When
      const {moleculeDropdownListSizes: actual} = library
      const {SMALL, MEDIUM, LARGE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeDropdownListSelectHandler', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDropdownListSelectHandler: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        single: () => {},
        multiple: () => {}
      }

      // When
      const {moleculeDropdownListSelectHandler: actual} = library
      const {single, multiple, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
      })
    })

    describe('moleculeDropdownListSelectHandler.single', () => {
      it('if the newValue selected does not exist in the selected state it must replace that value', () => {
        // Given
        const value = 'value'
        const newValue = 'newValue'
        const selected = value !== newValue
        const library = pkg
        const {moleculeDropdownListSelectHandler} = library
        const spy = sinon.spy()
        const expected = {
          value,
          onSelect: spy
        }

        // When
        const eventHandler = moleculeDropdownListSelectHandler.single(expected)

        // Then
        expect(eventHandler).to.be.a('function')

        // And

        // Given
        const args = {
          value: newValue,
          selected
        }

        // When
        const response = eventHandler(event, args)

        // Then
        expect(response).to.equal(undefined)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, undefined, sinon.match({value: newValue, selected}))
      })

      it('if the newValue selected does not exist in the selected state it must remove that value', () => {
        // Given
        const value = 'value'
        const newValue = value
        const selected = value !== newValue
        const library = pkg
        const {moleculeDropdownListSelectHandler} = library
        const spy = sinon.spy()
        const expected = {
          value,
          onSelect: spy
        }

        // When
        const eventHandler = moleculeDropdownListSelectHandler.single(expected)

        // Then
        expect(eventHandler).to.be.a('function')

        // And

        // Given
        const args = {
          value: newValue,
          selected
        }

        // When
        const response = eventHandler(event, args)

        // Then
        expect(response).to.equal(undefined)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, undefined, sinon.match({value: undefined, selected}))
      })
    })

    describe('moleculeDropdownListSelectHandler.multiple', () => {
      it('if the newValue selected does not exist in the selected state it must replace that value', () => {
        // Given
        const value = ['value 1', 'value 2']
        const newValue = 'newValue'
        const selected = !value.includes(newValue)
        const library = pkg
        const {moleculeDropdownListSelectHandler} = library
        const spy = sinon.spy()
        const expected = {
          value,
          onSelect: spy
        }

        // When
        const eventHandler = moleculeDropdownListSelectHandler.multiple(expected)

        // Then
        expect(eventHandler).to.be.a('function')

        // And

        // Given
        const args = {
          value: newValue,
          selected
        }

        // When
        const response = eventHandler(event, args)

        // Then
        expect(response).to.equal(undefined)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, undefined, sinon.match({value: [...value, newValue], selected}))
      })

      it('if the newValue selected does not exist in the selected state it must remove that value', () => {
        // Given
        const value = ['value 1', 'value 2']
        const newValue = value[0]
        const selected = !value.includes(newValue)
        const library = pkg
        const {moleculeDropdownListSelectHandler} = library
        const spy = sinon.spy()
        const expected = {
          value,
          onSelect: spy
        }

        // When
        const eventHandler = moleculeDropdownListSelectHandler.multiple(expected)

        // Then
        expect(eventHandler).to.be.a('function')

        // And

        // Given
        const args = {
          value: newValue,
          selected
        }

        // When
        const response = eventHandler(event, args)

        // Then
        expect(response).to.equal(undefined)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, undefined, sinon.match({value: value.filter(val => val !== newValue), selected}))
      })

      it('if the newValue selected does not exist in the selected state it must remove that value and maintain the undefined selected state', () => {
        // Given
        const value = ['value 1', 'value 2']
        const newValue = value[0]
        const selected = undefined
        const library = pkg
        const {moleculeDropdownListSelectHandler} = library
        const spy = sinon.spy()
        const expected = {
          value,
          onSelect: spy
        }

        // When
        const eventHandler = moleculeDropdownListSelectHandler.multiple(expected)

        // Then
        expect(eventHandler).to.be.a('function')

        // And

        // Given
        const args = {
          value: newValue,
          selected
        }

        // When
        const response = eventHandler(event, args)

        // Then
        expect(response).to.equal(undefined)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          undefined,
          sinon.match({
            value: value.filter(val => val !== newValue),
            selected
          })
        )
      })

      it('if the newValue selected does not exist in the selected initial empty state it must add that value', () => {
        // Given
        const value = undefined
        const newValue = 'newValue'
        const selected = undefined
        const library = pkg
        const {moleculeDropdownListSelectHandler} = library
        const spy = sinon.spy()
        const expected = {
          value,
          onSelect: spy
        }

        // When
        const eventHandler = moleculeDropdownListSelectHandler.multiple(expected)

        // Then
        expect(eventHandler).to.be.a('function')

        // And

        // Given
        const args = {
          value: newValue,
          selected
        }

        // When
        const response = eventHandler(event, args)

        // Then
        expect(response).to.equal(undefined)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          undefined,
          sinon.match({
            value: [newValue],
            selected
          })
        )
      })
    })
  })
})

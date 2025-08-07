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

import {fireEvent, waitFor} from '@testing-library/react'

import MoleculeDropDownOption from '@s-ui/react-molecule-dropdown-option'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['MoleculeAutosuggestDropdownListSizes', 'MoleculeAutosuggestStates', 'default']

    // When
    const {
      MoleculeAutosuggestDropdownListSizes,
      MoleculeAutosuggestStates,
      default: MoleculeAutosuggest,
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

    it('should have data attributes', () => {
      // Given
      const props = {'data-attribute': 'data-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {'aria-attribute': 'aria-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    describe('otherDropdownListProps', () => {
      describe('single selection', () => {
        it('should extend classNames', () => {
          // Given
          const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
          const props = {
            value: undefined,
            isOpenDefault: true,
            multiselection: false,
            children: values.map(value => (
              <MoleculeDropDownOption key={value} value={value}>
                {value}
              </MoleculeDropDownOption>
            )),
            otherDropdownListProps: {className: 'extended-classNames'}
          }
          const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findClassName = findSentence(props.otherDropdownListProps.className)

          // Then
          expect(findClassName(container.innerHTML)).to.not.be.null
        })

        it('should have data attributes', () => {
          // Given
          const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
          const props = {
            value: undefined,
            isOpenDefault: true,
            multiselection: false,
            children: values.map(value => (
              <MoleculeDropDownOption key={value} value={value}>
                {value}
              </MoleculeDropDownOption>
            )),
            otherDropdownListProps: {'data-attribute': 'data-attribute'}
          }

          // When
          const {container} = setup(props)
          const element = container.querySelector('[data-attribute]')

          // Then
          expect(element).to.not.be.null
        })

        it('should have aria attributes', () => {
          // Given
          const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
          const props = {
            value: undefined,
            isOpenDefault: true,
            multiselection: false,
            children: values.map(value => (
              <MoleculeDropDownOption key={value} value={value}>
                {value}
              </MoleculeDropDownOption>
            )),
            otherDropdownListProps: {'aria-attribute': 'aria-attribute'}
          }

          // When
          const {container} = setup(props)
          const element = container.querySelector('[aria-attribute]')

          // Then
          expect(element).to.not.be.null
        })
      })

      describe('multiple selection', () => {
        it('should extend classNames', () => {
          // Given
          const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
          const props = {
            value: undefined,
            isOpenDefault: true,
            multiselection: true,
            children: values.map(value => (
              <MoleculeDropDownOption key={value} value={value}>
                {value}
              </MoleculeDropDownOption>
            )),
            otherDropdownListProps: {className: 'extended-classNames'}
          }
          const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findClassName = findSentence(props.otherDropdownListProps.className)

          // Then
          expect(findClassName(container.innerHTML)).to.not.be.null
        })

        it('should have data attributes', () => {
          // Given
          const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
          const props = {
            value: undefined,
            isOpenDefault: true,
            multiselection: true,
            children: values.map(value => (
              <MoleculeDropDownOption key={value} value={value}>
                {value}
              </MoleculeDropDownOption>
            )),
            otherDropdownListProps: {'data-attribute': 'data-attribute'}
          }

          // When
          const {container} = setup(props)
          const element = container.querySelector('[data-attribute]')

          // Then
          expect(element).to.not.be.null
        })

        it('should have aria attributes', () => {
          // Given
          const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
          const props = {
            value: undefined,
            isOpenDefault: true,
            multiselection: true,
            children: values.map(value => (
              <MoleculeDropDownOption key={value} value={value}>
                {value}
              </MoleculeDropDownOption>
            )),
            otherDropdownListProps: {'aria-attribute': 'aria-attribute'}
          }

          // When
          const {container} = setup(props)
          const element = container.querySelector('[aria-attribute]')

          // Then
          expect(element).to.not.be.null
        })
      })
    })

    describe('forwardRef', () => {
      it('should return refMoleculeAutosuggest forwardRef html div element when giving a ref to the component', () => {
        // Given
        const props = {}
        const ref = createRef()

        // When
        const component = <Component {...props} refMoleculeAutosuggest={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('DIV')
      })

      it('should return refMoleculeAutosuggestInput forwardRef html input element when giving a ref to the component', () => {
        // Given
        const props = {}
        const ref = createRef()

        // When
        const component = <Component {...props} refMoleculeAutosuggestInput={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('INPUT')
      })
    })

    describe('isVisibleClear and iconClear props', () => {
      it("should NOT render the iconClear when its given and isVisibleClear='true' and there is NO value", () => {
        // Given
        const testID = 'testID'
        const props = {
          isVisibleClear: true,
          iconClear: <svg data-testId={testID} />
        }

        /// When
        const {getAllByTestId} = setup(props)

        // Then
        expect(() => getAllByTestId(testID)).to.throw()
      })

      it("should render the iconClear when its given and isVisibleClear='true' and has value", () => {
        // Given
        const testID = 'testID'
        const props = {
          isVisibleClear: true,
          iconClear: <svg data-testid={testID} />,
          value: '222'
        }

        /// When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testID)).to.be.an('array').to.have.lengthOf(1)
      })
    })

    it('should NOT render options if there is no value', () => {
      // Given
      const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
      const props = {
        value: undefined,
        children: values.map(value => (
          <MoleculeDropDownOption key={value} value={value}>
            {value}
          </MoleculeDropDownOption>
        ))
      }

      // When
      const {getByRole} = setup(props)
      const autoSuggestElement = getByRole('combobox')
      const autoSuggestInputElement = getByRole('textbox')

      // Then
      expect(() => getByRole('listbox')).to.throw()
      expect(() => getByRole('option')).to.throw()
      expect(autoSuggestElement.innerHTML).to.be.a('string')
      expect(autoSuggestElement.innerHTML).to.not.have.lengthOf(0)
      expect(autoSuggestInputElement.value).to.equal('')
    })

    it('should render options if there is a value', () => {
      // Given
      const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
      const props = {
        value: '1',
        children: values.map(value => (
          <MoleculeDropDownOption key={value} value={value}>
            {value}
          </MoleculeDropDownOption>
        ))
      }

      // When
      const {getByRole, getAllByRole} = setup(props)

      // Then
      expect(getByRole('combobox').innerHTML).to.be.a('string')
      expect(getByRole('combobox').innerHTML).to.not.have.lengthOf(0)
      expect(getByRole('textbox').value).to.equal(props.value)
      expect(() => getByRole('listbox', {hidden: true})).to.not.throw()
      expect(() =>
        getAllByRole('option', {
          hidden: true
        })
      ).to.not.throw()
      expect(
        getAllByRole('option', {
          hidden: true
        }).length
      ).to.equal(values.length)
    })
    it('should render options even if there is NO option matching the value', () => {
      // Given
      const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
      const props = {
        value: '5',
        children: values.map(value => (
          <MoleculeDropDownOption key={value} value={value}>
            {value}
          </MoleculeDropDownOption>
        ))
      }

      // When
      const {getByRole, getAllByRole} = setup(props)

      // Then
      expect(getByRole('combobox').innerHTML).to.be.a('string')
      expect(getByRole('combobox').innerHTML).to.not.have.lengthOf(0)
      expect(getByRole('textbox').value).to.equal(props.value)
      expect(() => getByRole('listbox', {hidden: true})).to.not.throw()
      expect(() =>
        getAllByRole('option', {
          hidden: true
        })
      ).to.not.throw()
      expect(
        getAllByRole('option', {
          hidden: true
        }).length
      ).to.equal(values.length)
    })

    it('should render options filtered if there is some options matching the value', () => {
      // Given
      const values = ['1a', '1b', '1c', '1d', '2a', '2b', '2c', '3a', '3b', '4a']
      const props = {
        value: '2a',
        children: values.map(value => (
          <MoleculeDropDownOption key={value} value={value}>
            {value}
          </MoleculeDropDownOption>
        ))
      }

      // When
      const {getByRole, getAllByRole} = setup(props)

      // Then
      expect(getByRole('combobox').innerHTML).to.be.a('string')
      expect(getByRole('combobox').innerHTML).to.not.have.lengthOf(0)
      expect(getByRole('textbox').value).to.equal(props.value)
      expect(() => getByRole('listbox', {hidden: true})).to.not.throw()
      expect(() =>
        getAllByRole('option', {
          hidden: true
        })
      ).to.not.throw()
      expect(
        getAllByRole('option', {
          hidden: true
        }).length
      ).to.equal(values.length)
    })

    describe('handlers', () => {
      describe('onFocus', () => {
        describe('SingleSelection', () => {
          it('should change its inner value when typing', async () => {
            // Given
            const spy = sinon.spy()
            const keyDownEvents = [{key: 'a'}, {key: 's'}, {key: 'd'}, {key: 'f'}]
            const changeEvent = {target: {value: 'asdf'}}
            const values = [1, 2, 3]
            const props = {
              value: undefined,
              children: values.map(value => (
                <MoleculeDropDownOption key={value} value={value}>
                  {value}
                </MoleculeDropDownOption>
              )),
              onToggle: spy,
              disabled: false,
              onChange: (_, {value: newValue}) => {
                props.value = newValue
              }
            }

            // When
            const {getByRole, rerender} = setup(props)
            keyDownEvents.forEach(keyDownEvent => fireEvent.keyDown(getByRole('combobox'), keyDownEvent))
            fireEvent.change(getByRole('textbox'), changeEvent)

            // Then
            expect(getByRole('textbox').value).to.equal('')

            // And
            // When

            rerender(<Component {...props} />)

            expect(getByRole('textbox').value).to.equal(changeEvent.target.value)
            sinon.assert.called(spy)
          })
        })

        describe('MultiSelection', () => {
          it('should change its inner value when typing', async () => {
            // Given
            const spy = sinon.spy()
            const keyDownEvents = [{key: 'a'}, {key: 's'}, {key: 'd'}, {key: 'f'}]
            const changeEvent = {target: {value: 'asdf'}}
            const values = [1, 2, 3]
            const props = {
              value: undefined,
              children: values.map(value => (
                <MoleculeDropDownOption key={value} value={value}>
                  {value}
                </MoleculeDropDownOption>
              )),
              onToggle: spy,
              disabled: false,
              onChange: (_, {value: newValue}) => {
                props.value = newValue
              },
              multiselection: true
            }

            // When
            const {getByRole, rerender} = setup(props)
            keyDownEvents.forEach(keyDownEvent => fireEvent.keyDown(getByRole('combobox'), keyDownEvent))
            fireEvent.change(getByRole('textbox'), changeEvent)

            // Then
            expect(getByRole('textbox').value).to.equal('')

            // And
            // When

            rerender(<Component {...props} />)

            expect(getByRole('textbox').value).to.equal(changeEvent.target.value)
            sinon.assert.called(spy)
          })
        })
      })
      describe('onBlur', () => {
        it.skip('should call onBlur handler when clicking outside', async () => {
          const onBlurSpy = sinon.spy()

          const props = {
            onBlur: onBlurSpy
          }

          const {getByRole} = setup(props)

          const $textBox = getByRole('textbox')

          $textBox.focus()
          $textBox.blur()

          await waitFor(() => expect(sinon.assert.called(onBlurSpy)))
        })

        it.skip('should call onBlur handler when clicking outside after input a text', async () => {
          const onBlurSpy = sinon.spy()

          const props = {
            onBlur: onBlurSpy
          }

          const {getByRole} = setup(props)
          const $textBox = getByRole('textbox')
          const changeEvent = {target: {value: 'asdf'}}

          fireEvent.change(getByRole('textbox'), changeEvent)

          $textBox.focus()
          $textBox.blur()

          await waitFor(() => expect(sinon.assert.called(onBlurSpy)))
        })
      })
    })
  })

  describe('MoleculeAutosuggestDropdownListSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculeAutosuggestDropdownListSizes: actual} = library

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
      const {MoleculeAutosuggestDropdownListSizes: actual} = library
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

  describe('MoleculeAutosuggestStates', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculeAutosuggestStates: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ERROR: 'error',
        SUCCESS: 'success',
        ALERT: 'alert'
      }

      // When
      const {MoleculeAutosuggestStates: actual} = library
      const {ERROR, SUCCESS, ALERT, ...others} = actual

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

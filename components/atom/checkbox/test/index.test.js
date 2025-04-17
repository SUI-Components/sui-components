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

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['atomCheckboxStatus', 'atomCheckboxSizes', 'default']

    // When
    const {atomCheckboxStatus, atomCheckboxSizes, default: AtomCheckbox, ...others} = library

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

    it('should have data test id', () => {
      // Given
      const testId = 'demo-testid'

      const props = {'data-testid': testId}

      // When
      const component = setup(props)
      const {getByTestId} = component
      const elementWithDefaultTestId = getByTestId(testId)

      // Then
      expect(elementWithDefaultTestId).to.not.be.null
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

    describe('native (no icons)', () => {
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

      it('should have data test id', () => {
        // Given
        const testId = 'demo-testid'

        const props = {'data-testid': testId}

        // When
        const component = setup(props)
        const {getByTestId} = component
        const elementWithDefaultTestId = getByTestId(testId)

        // Then
        expect(elementWithDefaultTestId).to.not.be.null
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

      it('should fire onChange handler value when the element is clicked when checked is undefined', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value'
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.called(spy)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: true,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when checked is true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          checked: true
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when defaultChecked is true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          defaultChecked: true
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.defaultChecked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when status is indeterminate = true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          checked: false,
          indeterminate: true
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: !props.indeterminate
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when status is defaultIndeterminate = true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          defaultIndeterminate: true
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when checked is false', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          checked: false
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.called(spy)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when defaultChecked is false', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          defaultChecked: false
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('checkbox')
        userEvents.click(element)
        sinon.assert.called(spy)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.defaultChecked,
            indeterminate: false
          })
        )
      })

      describe('readOnly', () => {
        it('should fire onChange handler value when the element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: false,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: true,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.checked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when defaultChecked is true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            defaultChecked: true,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.defaultChecked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when status is indeterminate = true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            indeterminate: true,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.checked,
              indeterminate: props.indeterminate
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when status is defaultIndeterminate = true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            defaultIndeterminate: true,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !!props.checked,
              indeterminate: props.defaultIndeterminate
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.checked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when defaultChecked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            defaultChecked: false,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.defaultChecked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the readOnly element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: undefined,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !!props.checked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the readOnly element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            readOnly: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !!props.checked,
              indeterminate: false
            })
          )
        })
      })

      describe('disabled', () => {
        it('should NOT fire onChange handler when the disabled element is clicked', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            disabled: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.notCalled(spy)
        })

        it('should NOT fire onChange handler value when the disabled element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: undefined,
            disabled: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.notCalled(spy)
        })

        it('should NOT fire onChange handler value when the disabled element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            disabled: true
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('checkbox')
          userEvents.click(element)
          sinon.assert.notCalled(spy)
        })
      })
    })
    describe('icons', () => {
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
        const props = {
          className: 'extended-classNames',
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.not.be.null
      })

      it('should have data attributes', () => {
        // Given
        const props = {
          'data-attribute': 'data-attribute',
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {container} = setup(props)
        const element = container.querySelector('[data-attribute]')

        // Then
        expect(element).to.not.be.null
      })

      it('should have different data test ids for internal checkbox and icon', () => {
        // Given
        const testId = 'demo-testid'

        const props = {
          'data-testid': testId,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const component = setup(props)
        const {getByTestId, queryByTestId} = component
        const elementWithDefaultTestId = queryByTestId(testId)
        const inputElement = getByTestId(`${testId}-input`)
        const iconElement = getByTestId(`${testId}-icon`)

        // Then
        expect(elementWithDefaultTestId).to.be.null
        expect(inputElement).to.not.be.null
        expect(iconElement).to.not.be.null
      })

      it('should have aria attributes', () => {
        // Given
        const props = {
          'aria-attribute': 'aria-attribute',
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {container} = setup(props)
        const element = container.querySelector('[aria-attribute]')

        // Then
        expect(element).to.not.be.null
      })

      it('should fire onChange handler value when the element is clicked when checked is undefined', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          readOnly: true,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.called(spy)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: false,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when checked is true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          checked: true,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when defaultChecked is true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          defaultChecked: true,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.defaultChecked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when status is indeterminate = true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          checked: false,
          indeterminate: true,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: !props.indeterminate
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when status is defaultIndeterminate = true', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          defaultIndeterminate: true,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when checked is false', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          checked: false,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.called(spy)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked,
            indeterminate: false
          })
        )
      })

      it('should fire onChange handler value when the element is clicked when defaultChecked is false', () => {
        // Given
        const spy = sinon.spy()
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          defaultChecked: false,
          checkedIcon: () => <i />,
          uncheckedIcon: () => <i />,
          indeterminateIcon: () => <i />
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('button')
        userEvents.click(element)
        sinon.assert.called(spy)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.defaultChecked,
            indeterminate: false
          })
        )
      })

      describe('readOnly', () => {
        it('should fire onChange handler value when the element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: false,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: true,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.checked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when defaultChecked is true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            defaultChecked: true,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.defaultChecked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when status is indeterminate = true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            indeterminate: true,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.checked,
              indeterminate: props.indeterminate
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when status is defaultIndeterminate = true', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            defaultIndeterminate: true,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !!props.checked,
              indeterminate: props.defaultIndeterminate
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.checked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when defaultChecked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            defaultChecked: false,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: props.defaultChecked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the readOnly element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: undefined,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !!props.checked,
              indeterminate: false
            })
          )
        })

        it('should fire onChange handler value when the readOnly element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            readOnly: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !!props.checked,
              indeterminate: false
            })
          )
        })
      })

      describe('disabled', () => {
        it('should NOT fire onChange handler when the disabled element is clicked', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            disabled: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.notCalled(spy)
        })

        it('should NOT fire onChange handler value when the disabled element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: undefined,
            disabled: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.notCalled(spy)
        })

        it('should NOT fire onChange handler value when the disabled element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            checked: false,
            disabled: true,
            checkedIcon: () => <i />,
            uncheckedIcon: () => <i />,
            indeterminateIcon: () => <i />
          }

          // When
          const {getByRole} = setup(props)

          // Then
          const element = getByRole('button')
          userEvents.click(element)
          sinon.assert.notCalled(spy)
        })
      })

      describe('status', () => {
        describe('native', () => {
          it('should NOT render null when status is alert', () => {
            // Given
            const {atomCheckboxStatus} = pkg
            const props = {
              status: atomCheckboxStatus.ALERT
            }

            // When
            const {container} = setup(props)

            // Then
            expect(container.innerHTML).to.be.a('string')
            expect(container.innerHTML).to.not.have.lengthOf(0)
          })

          it('should NOT render null when status is success', () => {
            // Given
            const {atomCheckboxStatus} = pkg
            const props = {
              status: atomCheckboxStatus.SUCCESS
            }

            // When
            const {container} = setup(props)

            // Then
            expect(container.innerHTML).to.be.a('string')
            expect(container.innerHTML).to.not.have.lengthOf(0)
          })

          it('should NOT render null when status is error', () => {
            // Given
            const {atomCheckboxStatus} = pkg
            const props = {
              status: atomCheckboxStatus.ERROR
            }

            // When
            const {container} = setup(props)

            // Then
            expect(container.innerHTML).to.be.a('string')
            expect(container.innerHTML).to.not.have.lengthOf(0)
          })
        })

        describe('not native (icon)', () => {
          it('should NOT render null when status is alert', () => {
            // Given
            const {atomCheckboxStatus} = pkg
            const props = {
              status: atomCheckboxStatus.ALERT,
              icon: () => <i />
            }

            // When
            const {container} = setup(props)

            // Then
            expect(container.innerHTML).to.be.a('string')
            expect(container.innerHTML).to.not.have.lengthOf(0)
          })

          it('should NOT render null when status is success', () => {
            // Given
            const {atomCheckboxStatus} = pkg
            const props = {
              status: atomCheckboxStatus.SUCCESS,
              icon: () => <i />
            }

            // When
            const {container} = setup(props)

            // Then
            expect(container.innerHTML).to.be.a('string')
            expect(container.innerHTML).to.not.have.lengthOf(0)
          })

          it('should NOT render null when status is error', () => {
            // Given
            const {atomCheckboxStatus} = pkg
            const props = {
              status: atomCheckboxStatus.ERROR,
              icon: () => <i />
            }

            // When
            const {container} = setup(props)

            // Then
            expect(container.innerHTML).to.be.a('string')
            expect(container.innerHTML).to.not.have.lengthOf(0)
          })
        })
      })
    })
  })

  describe('atomCheckboxStatus', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCheckboxStatus: actual} = library

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
      const {atomCheckboxStatus: actual} = library
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

  describe('atomCheckboxSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCheckboxSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {SMALL: 'small', MEDIUM: 'medium'}

      // When
      const {atomCheckboxSizes: actual} = library
      const {SMALL, MEDIUM, ...others} = actual

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

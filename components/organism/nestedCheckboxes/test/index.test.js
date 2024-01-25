/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import {waitFor} from '@testing-library/react'
import userEvents from '@testing-library/user-event'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

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
    const {default: OrganismNestedCheckboxes, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        label: 'label',
        children: [
          {id: 'nested-01', label: 'Nested 1', checked: true},
          {id: 'nested-02', label: 'Nested 2', checked: false},
          {id: 'nested-03', label: 'Nested 3', checked: true},
          {id: 'nested-04', label: 'Nested 4', checked: true},
          {id: 'nested-05', label: 'Nested 5', checked: true}
        ].map(({checked, id, label}, index) => (
          <MoleculeCheckboxField
            key={id}
            id={id}
            checked={checked}
            checkedIcon={() => null}
            indeterminateIcon={() => null}
            onChange={() => null}
            label={label}
          />
        ))
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
        label: 'label',
        children: [
          {id: 'nested-01', label: 'Nested 1', checked: true},
          {id: 'nested-02', label: 'Nested 2', checked: false},
          {id: 'nested-03', label: 'Nested 3', checked: true},
          {id: 'nested-04', label: 'Nested 4', checked: true},
          {id: 'nested-05', label: 'Nested 5', checked: true}
        ].map(({checked, id, label}, index) => (
          <MoleculeCheckboxField
            key={id}
            id={id}
            checked={checked}
            checkedIcon={() => null}
            indeterminateIcon={() => null}
            onChange={() => null}
            label={label}
          />
        ))
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it.skip('should NOT extend classNames', () => {
      // Given
      const props = {
        label: 'label',
        children: [
          {id: 'nested-01', label: 'Nested 1', checked: true},
          {id: 'nested-02', label: 'Nested 2', checked: false},
          {id: 'nested-03', label: 'Nested 3', checked: true},
          {id: 'nested-04', label: 'Nested 4', checked: true},
          {id: 'nested-05', label: 'Nested 5', checked: true}
        ].map(({checked, id, label}, index) => (
          <MoleculeCheckboxField
            key={id}
            id={id}
            checked={checked}
            checkedIcon={() => null}
            indeterminateIcon={() => null}
            onChange={() => null}
            label={label}
          />
        )),
        className: 'extended-classNames'
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)

      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    describe('onChange', () => {
      describe('parent checkbox', () => {
        it('should fire onChange handler value when the element is clicked when checked is undefined', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: true,
              indeterminate: false,
              values: [props.value]
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is true', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            checked: true,
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !props.checked,
              indeterminate: false,
              expanded: true,
              values: []
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when defaultChecked is true', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            defaultChecked: true,
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !props.defaultChecked,
              indeterminate: false,
              expanded: true
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when status is indeterminate = true', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            checked: false,
            indeterminate: true,
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !props.checked,
              indeterminate: !props.indeterminate,
              expanded: true
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when status is defaultIndeterminate = true', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            defaultIndeterminate: true,
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !props.checked,
              indeterminate: false,
              expanded: true
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is false', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            checked: false,
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !props.checked,
              indeterminate: false,
              expanded: true
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when defaultChecked is false', () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              checked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              checked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              checked: true
            },
            {
              id: 'nested-04',
              label: 'Nested 4',
              value: 'Nested 4',
              checked: true
            },
            {
              id: 'nested-05',
              label: 'Nested 5',
              value: 'Nested 5',
              checked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            defaultChecked: false,
            children: children.map(({checked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[0])
          sinon.assert.called(spy)
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            sinon.match.truthy,
            sinon.match({
              name: props.name,
              value: props.value,
              checked: !props.defaultChecked,
              indeterminate: false,
              expanded: true
            })
          )
        })
      })

      describe('children checkbox', () => {
        it('should fire onChange handler value when the element is clicked when checked is undefined and result is indeterminate', async () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              defaultChecked: false
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              defaultChecked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              defaultChecked: false
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            children: children.map(({defaultChecked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} defaultChecked={defaultChecked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[1])
          await waitFor(() => sinon.assert.called(spy))
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            undefined,
            sinon.match({
              value: props.value,
              name: props.name,
              checked: false,
              indeterminate: true,
              expanded: true,
              values: sinon.match.array
            })
          )
        })

        it('should fire onChange handler value when the element is clicked when checked is indeterminate and result is indeterminate', async () => {
          // Given
          const spy = sinon.spy()
          const children = [
            {
              id: 'nested-01',
              label: 'Nested 1',
              value: 'Nested 1',
              defaultChecked: true
            },
            {
              id: 'nested-02',
              label: 'Nested 2',
              value: 'Nested 2',
              defaultChecked: false
            },
            {
              id: 'nested-03',
              label: 'Nested 3',
              value: 'Nested 3',
              defaultChecked: true
            }
          ]
          const props = {
            onChange: spy,
            name: 'name',
            value: 'value',
            label: 'label',
            defaultIndeterminate: true,
            children: children.map(({defaultChecked, id, label, value}, index) => (
              <MoleculeCheckboxField key={id} id={id} value={value} defaultChecked={defaultChecked} label={label} />
            ))
          }

          // When
          const {getAllByRole} = setup(props)

          // Then
          const elements = getAllByRole('checkbox')
          userEvents.click(elements[1])
          await waitFor(() => sinon.assert.called(spy))
          sinon.assert.callCount(spy, 1)
          sinon.assert.calledWith(
            spy,
            undefined,
            sinon.match({
              value: props.value,
              name: props.name,
              checked: false,
              indeterminate: true,
              expanded: true,
              values: sinon.match.array
            })
          )
        })
      })

      it('should fire onChange handler value when the element is clicked when checked is indeterminate and result is checked', async () => {
        // Given
        const spy = sinon.spy()
        const children = [
          {
            id: 'nested-01',
            label: 'Nested 1',
            value: 'Nested 1',
            defaultChecked: false
          },
          {
            id: 'nested-02',
            label: 'Nested 2',
            value: 'Nested 2',
            defaultChecked: true
          },
          {
            id: 'nested-03',
            label: 'Nested 3',
            value: 'Nested 3',
            defaultChecked: true
          }
        ]
        const props = {
          onChange: spy,
          name: 'name',
          value: 'value',
          label: 'label',
          defaultIndeterminate: true,
          children: children.map(({defaultChecked, id, label, value}, index) => (
            <MoleculeCheckboxField key={id} id={id} value={value} defaultChecked={defaultChecked} label={label} />
          ))
        }

        // When
        const {getAllByRole} = setup(props)

        // Then
        const elements = getAllByRole('checkbox')
        userEvents.click(elements[1])
        await waitFor(() => sinon.assert.called(spy))
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(
          spy,
          undefined,
          sinon.match({
            value: props.value,
            name: props.name,
            checked: true,
            indeterminate: false,
            expanded: true,
            values: sinon.match.array
          })
        )
      })
    })

    describe('onExpandToggle', () => {
      it('should fire onExpandToggle handler value when the expand button is clicked and element default expanded', () => {
        // Given
        const spy = sinon.spy()
        const children = [
          {
            id: 'nested-01',
            label: 'Nested 1',
            value: 'Nested 1',
            checked: true
          },
          {
            id: 'nested-02',
            label: 'Nested 2',
            value: 'Nested 2',
            checked: false
          }
        ]
        const props = {
          onExpandToggle: spy,
          name: 'name',
          value: 'value',
          label: 'label',
          defaultIndeterminate: true,
          children: children.map(({checked, id, label, value}, index) => (
            <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
          ))
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
            checked: false,
            expanded: false,
            indeterminate: true,
            name: props.name,
            value: props.value
          })
        )
      })

      it('should fire onExpandToggle handler value when the expand button is clicked and element collapsed', () => {
        // Given
        const spy = sinon.spy()
        const children = [
          {
            id: 'nested-01',
            label: 'Nested 1',
            value: 'Nested 1',
            checked: true
          },
          {
            id: 'nested-02',
            label: 'Nested 2',
            value: 'Nested 2',
            checked: false
          }
        ]
        const props = {
          onExpandToggle: spy,
          name: 'name',
          value: 'value',
          label: 'label',
          defaultIndeterminate: true,
          defaultIsExpanded: false,
          children: children.map(({checked, id, label, value}, index) => (
            <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
          ))
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
            checked: false,
            expanded: true,
            indeterminate: true,
            name: props.name,
            value: props.value
          })
        )
      })

      it('should fire onExpandToggle handler value when the expand button is clicked and element expanded', () => {
        // Given
        const spy = sinon.spy()
        const children = [
          {
            id: 'nested-01',
            label: 'Nested 1',
            value: 'Nested 1',
            checked: true
          },
          {
            id: 'nested-02',
            label: 'Nested 2',
            value: 'Nested 2',
            checked: false
          }
        ]
        const props = {
          onExpandToggle: spy,
          name: 'name',
          value: 'value',
          label: 'label',
          defaultIndeterminate: true,
          defaultIsExpanded: true,
          children: children.map(({checked, id, label, value}, index) => (
            <MoleculeCheckboxField key={id} id={id} value={value} checked={checked} label={label} />
          ))
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
            checked: false,
            expanded: false,
            indeterminate: true,
            name: props.name,
            value: props.value
          })
        )
      })
    })
  })
})

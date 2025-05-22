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
    const libraryExportedMembers = ['inputTypes', 'inputSizes', 'inputStates', 'inputShapes', 'default']

    // When
    const {inputTypes, inputSizes, inputStates, inputShapes, default: AtomInput, ...others} = library

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

    it('given a valid input value using keyPress should set it as the value', () => {
      // Given
      const onChangeSpy = sinon.spy()
      const onKeyDownSpy = sinon.spy()
      const props = {
        onChange: onChangeSpy,
        onKeyDown: onKeyDownSpy
      }
      const value = '1'

      // When
      const {getByRole} = setup(props)
      const input = getByRole('textbox')

      userEvents.type(input, value)

      // Then
      sinon.assert.callCount(onChangeSpy, 1)
      sinon.assert.callCount(onKeyDownSpy, 1)
      expect(input.value).to.equal(value)
    })
  })

  describe(`${Component.displayName} ${pkg.inputTypes.NUMBER}`, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        type: pkg.inputTypes.NUMBER
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
        type: pkg.inputTypes.NUMBER
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames', type: pkg.inputTypes.NUMBER}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {'data-attribute': 'data-attribute', type: pkg.inputTypes.NUMBER}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {'aria-attribute': 'aria-attribute', type: pkg.inputTypes.NUMBER}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('given a valid input value using keyPress should set it as the value', () => {
      // Given
      const onChangeSpy = sinon.spy()
      const onKeyDownSpy = sinon.spy()
      const props = {
        type: pkg.inputTypes.NUMBER,
        onChange: onChangeSpy,
        onKeyDown: onKeyDownSpy
      }
      const value = '1'

      // When
      const {getByRole} = setup(props)
      const input = getByRole('spinbutton')

      userEvents.type(input, value)

      // Then
      sinon.assert.callCount(onChangeSpy, 1)
      sinon.assert.callCount(onKeyDownSpy, 1)
      expect(input.value).to.equal(value)
    })

    it('given a NON valid input value using keyPress should set it as the value', () => {
      // Given
      const onChangeSpy = sinon.spy()
      const onKeyDownSpy = sinon.spy()
      const props = {
        type: pkg.inputTypes.NUMBER,
        onChange: onChangeSpy,
        onKeyDown: onKeyDownSpy
      }
      const value = 'a'

      // When
      const {getByRole} = setup(props)
      const input = getByRole('spinbutton')

      userEvents.type(input, value)

      // Then
      sinon.assert.callCount(onChangeSpy, 0)
      sinon.assert.callCount(onKeyDownSpy, 0)
      expect(input.value).to.equal('')
    })

    it('given an enter input using keyPress should fire onEnter event', () => {
      // Given
      const onChangeSpy = sinon.spy()
      const onKeyDownSpy = sinon.spy()
      const onEnterSpy = sinon.spy()
      const props = {
        type: pkg.inputTypes.NUMBER,
        onChange: onChangeSpy,
        onKeyDown: onKeyDownSpy,
        onEnter: onEnterSpy
      }

      // When
      const {getByRole} = setup(props)
      const input = getByRole('spinbutton')

      userEvents.type(input, '{enter}')

      // Then
      sinon.assert.callCount(onChangeSpy, 0)
      sinon.assert.callCount(onKeyDownSpy, 1)
      expect(input.value).to.equal('')
      sinon.assert.callCount(onEnterSpy, 1)
    })

    it('given a tab key enter firer and firing a tab keyPress should fire onEnter event', () => {
      // Given
      const onChangeSpy = sinon.spy()
      const onKeyDownSpy = sinon.spy()
      const onEnterSpy = sinon.spy()
      const props = {
        type: pkg.inputTypes.NUMBER,
        onChange: onChangeSpy,
        onKeyDown: onKeyDownSpy,
        onEnter: onEnterSpy,
        onEnterKey: ['Tab', 'Enter']
      }

      // When
      const {getByRole} = setup(props)
      const input = getByRole('spinbutton')

      userEvents.type(input, '{Tab}')

      // Then
      sinon.assert.callCount(onChangeSpy, 0)
      sinon.assert.callCount(onKeyDownSpy, 1)
      expect(input.value).to.equal('')
      sinon.assert.callCount(onEnterSpy, 1)
    })

    it('given NULL key enter firer ant firing an enter keyPress should NOT fire onEnter event', () => {
      // Given
      const onChangeSpy = sinon.spy()
      const onKeyDownSpy = sinon.spy()
      const onEnterSpy = sinon.spy()
      const props = {
        type: pkg.inputTypes.NUMBER,
        onChange: onChangeSpy,
        onKeyDown: onKeyDownSpy,
        onEnter: onEnterSpy,
        onEnterKey: null
      }

      // When
      const {getByRole} = setup(props)
      const input = getByRole('spinbutton')

      userEvents.type(input, '{Tab}')

      // Then
      sinon.assert.callCount(onChangeSpy, 0)
      sinon.assert.callCount(onKeyDownSpy, 1)
      expect(input.value).to.equal('')
      sinon.assert.callCount(onEnterSpy, 0)
    })
  })

  describe(`${Component.displayName} ${pkg.inputTypes.MASK}`, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        type: pkg.inputTypes.MASK
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
        type: pkg.inputTypes.MASK
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames', type: pkg.inputTypes.MASK}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {'data-attribute': 'data-attribute', type: pkg.inputTypes.MASK}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {'aria-attribute': 'aria-attribute', type: pkg.inputTypes.MASK}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should format value given a valid mask', () => {
      let value = ''
      // Given
      const props = {
        className: 'extended-classNames',
        type: pkg.inputTypes.MASK,
        mask: {mask: 'ES00 0000 0000 00 0000000000'},
        placeholder: 'ES00 0000 0000 00 0000000000',
        charsSize: 31,
        value,
        onChange: e => {
          value = e.target.value
        }
      }
      // When
      const {container} = setup(props)
      const input = container.querySelector('input')
      const event = {target: {value: 'ES123456789012345678901234567890'}}
      userEvents.type(input, event.target.value)

      // Then
      expect(value).to.equal('ES12 3456 7890 12 3456789012')
    })

    it('should format value given a valid mask and a valid value', () => {
      const value = 'ES1234567890123456789012'
      // Given
      const props = {
        className: 'extended-classNames',
        type: pkg.inputTypes.MASK,
        mask: {mask: 'ES00 0000 0000 00 0000000000'},
        placeholder: 'ES00 0000 0000 00 0000000000',
        charsSize: 31,
        value
      }
      // When
      const {container} = setup(props)
      const input = container.querySelector('input')

      // Then
      expect(input.value).to.equal('ES12 3456 7890 12 3456789012')
    })

    it('should execute custom onChange function only when value exists', () => {
      let value = ''
      // Given
      const props = {
        className: 'extended-classNames',
        type: pkg.inputTypes.MASK,
        mask: {mask: 'ES00 0000 0000 00 0000000000'},
        placeholder: 'ES00 0000 0000 00 0000000000',
        charsSize: 31,
        value,
        onChange: e => {
          value = e.target.value
        }
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
      expect(value).to.equal('')
    })

    it('should be able to display addons', () => {
      const props = {
        className: 'extended-classNames',
        type: pkg.inputTypes.MASK,
        mask: {mask: Number},
        placeholder: 'Ex: 100.000,00',
        charsSize: 31,
        value: '100000',
        rightIcon: '€',
        radix: ',',
        thousandsSeparator: '.',
        mapToRadix: ['.'],
        leftAddon: 'leftAddon',
        rightAddon: 'rightAddon'
      }

      // When
      const {getByRole, getByText} = setup(props)
      const input = getByRole('textbox')

      // Then
      expect(input).to.have.value('100.000')
      expect(getByText('leftAddon')).to.exist
      expect(getByText('rightAddon')).to.exist
    })
  })

  describe(`${Component.displayName} ${pkg.inputTypes.SUI_PASSWORD}`, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        type: pkg.inputTypes.SUI_PASSWORD
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
        type: pkg.inputTypes.SUI_PASSWORD
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames', type: pkg.inputTypes.SUI_PASSWORD}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {'data-attribute': 'data-attribute', type: pkg.inputTypes.SUI_PASSWORD}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {'aria-attribute': 'aria-attribute', type: pkg.inputTypes.SUI_PASSWORD}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })
  })

  describe(`${Component.displayName} DEFAULT Wrappers`, () => {
    describe(`${Component.displayName} DEFAULT Wrappers Addons`, () => {
      it('should render without crashing', () => {
        // Given
        const testIdPrefix = 'testID'
        const getTestID = position => `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftAddon: <div data-testid={getTestID('leftAddon')}>leftAddon</div>,
          rightAddon: <div data-testid={getTestID('rightAddon')}>rightAddon</div>
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
        const testIdPrefix = 'testID'
        const getTestID = position => `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftAddon: <div data-testid={getTestID('leftAddon')}>leftAddon</div>,
          rightAddon: <div data-testid={getTestID('rightAddon')}>rightAddon</div>
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })

      it('should NOT extend classNames', () => {
        // Given
        const testIdPrefix = 'testID'
        const getTestID = position => `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftAddon: <div data-testid={getTestID('leftAddon')}>leftAddon</div>,
          rightAddon: <div data-testid={getTestID('rightAddon')}>rightAddon</div>,
          className: 'extended-classNames'
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.not.be.null
      })

      it('given addon props should return it rendered', () => {
        // Given
        const testIdPrefix = 'testID'
        const props = {
          leftAddon: <div data-testid={testIdPrefix}>leftAddon</div>,
          rightAddon: <div data-testid={testIdPrefix}>rightAddon</div>
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testIdPrefix)).to.be.an('array').to.have.lengthOf(2)
      })

      it('given addon props should return it rendered with its own shape', () => {
        // Given
        const testID = 'testID'
        const props = {
          leftAddon: <div data-testid={testID}>leftAddon</div>,
          rightAddon: <div data-testid={testID}>rightAddon</div>,
          shape: pkg.inputShapes.CIRCLE
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testID)).to.be.an('array').to.have.lengthOf(2)
      })
    })

    describe(`${Component.displayName} DEFAULT Wrappers Button`, () => {
      it('should render without crashing', () => {
        // Given
        const testId = 'testID'
        const props = {
          button: <button data-testid={testId}>leftAddon</button>
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
        const testId = 'testID'
        const props = {
          button: <button data-testid={testId}>leftAddon</button>
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })

      it('should NOT extend classNames', () => {
        // Given
        const testId = 'testID'
        const props = {
          button: <button data-testid={testId}>leftAddon</button>
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
      })

      it('given addon props should return it rendered', () => {
        // Given
        const testIdPrefix = 'testID'
        const props = {
          leftAddon: <div data-testid={testIdPrefix}>leftAddon</div>,
          rightAddon: <div data-testid={testIdPrefix}>rightAddon</div>
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testIdPrefix)).to.be.an('array').to.have.lengthOf(2)
      })

      it('given a button prop should return it rendered with its own shape', () => {
        // Given
        const testId = 'testID'
        const props = {
          button: <button data-testid={testId}>leftAddon</button>
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testId)).to.be.an('array').to.have.lengthOf(1)
      })
    })

    describe(`${Component.displayName} DEFAULT Wrappers Icons`, () => {
      it('should render without crashing', () => {
        // Given
        const testIdPrefix = 'testID'
        const getTestID = position => `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftIcon: <svg data-testid={getTestID('leftAddon')} />,
          rightIcon: <svg data-testid={getTestID('rightAddon')} />
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
        const testIdPrefix = 'testID'
        const getTestID = position => `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftIcon: <svg data-testid={getTestID('leftAddon')} />,
          rightIcon: <svg data-testid={getTestID('rightAddon')} />
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })

      it('should NOT extend classNames', () => {
        // Given
        const testIdPrefix = 'testID'
        const getTestID = position => `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftIcon: <svg data-testid={getTestID('leftAddon')} />,
          rightIcon: <svg data-testid={getTestID('rightAddon')} />
        }
        const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findClassName = findSentence(props.className)

        // Then
        expect(findClassName(container.innerHTML)).to.be.null
      })

      it('given icon props should return it rendered', () => {
        // Given
        const testID = 'testID'
        const props = {
          leftIcon: <svg data-testid={testID} />,
          rightIcon: <svg data-testid={testID} />
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testID)).to.be.an('array').to.have.lengthOf(2)
      })

      it('given addon props should return it rendered with its own shape', () => {
        // Given
        const testIdPrefix = 'testID'
        const props = {
          leftIcon: <div data-testid={testIdPrefix}>leftAddon</div>,
          rightIcon: <div data-testid={testIdPrefix}>rightAddon</div>,
          shape: pkg.inputShapes.CIRCLE
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testIdPrefix)).to.be.an('array').to.have.lengthOf(2)
      })

      it('given a left and right icon, when pressing left Icon should fire onClickLeftIcon', () => {
        // Given
        const testIdPrefix = 'testID'
        const onClickLeftIcon = sinon.spy()
        const onClickRightIcon = sinon.spy()
        const props = {
          leftIcon: <div data-testid={testIdPrefix}>leftAddon</div>,
          rightIcon: <div data-testid={testIdPrefix}>rightAddon</div>,
          onClickLeftIcon,
          onClickRightIcon
        }

        // When
        const {getAllByTestId} = setup(props)
        const [iconLeft] = getAllByTestId(testIdPrefix)

        userEvents.click(iconLeft)

        // Then
        sinon.assert.callCount(onClickLeftIcon, 1)
        sinon.assert.callCount(onClickRightIcon, 0)
      })

      it('given a left and right icon, when pressing right Icon should fire onClickRightIcon', () => {
        // Given
        const testIdPrefix = 'testID'
        const onClickLeftIcon = sinon.spy()
        const onClickRightIcon = sinon.spy()
        const props = {
          leftIcon: <div data-testid={testIdPrefix}>leftAddon</div>,
          rightIcon: <div data-testid={testIdPrefix}>rightAddon</div>,
          onClickLeftIcon,
          onClickRightIcon
        }

        // When
        const {getAllByTestId} = setup(props)
        const [, iconRight] = getAllByTestId(testIdPrefix)

        userEvents.click(iconRight)

        // Then
        sinon.assert.callCount(onClickLeftIcon, 0)
        sinon.assert.callCount(onClickRightIcon, 1)
      })
    })
  })

  describe('inputTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        DATE: 'date',
        EMAIL: 'email',
        MASK: 'mask',
        NONE: 'none',
        NUMBER: 'number',
        PASSWORD: 'password',
        SEARCH: 'search',
        SUI_PASSWORD: 'sui-password',
        TEL: 'tel',
        TEXT: 'text'
      }

      // When
      const {inputTypes: actual} = library
      const {DATE, MASK, NUMBER, PASSWORD, SUI_PASSWORD, SEARCH, TEXT, TEL, EMAIL, NONE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('inputSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XLARGE: 'xl',
        LARGE: 'l',
        MEDIUM: 'm',
        SMALL: 's',
        XSMALL: 'xs'
      }

      // When
      const {inputSizes: actual} = library
      const {XLARGE, LARGE, MEDIUM, SMALL, XSMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('inputStates', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputStates: actual} = library

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
      const {inputStates: actual} = library
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

  describe('inputShapes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputShapes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ROUNDED: 'rounded',
        SQUARE: 'square',
        CIRCLE: 'circle'
      }

      // When
      const {inputShapes: actual} = library
      const {ROUNDED, SQUARE, CIRCLE, ...others} = actual

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

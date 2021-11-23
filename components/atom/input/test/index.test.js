/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'inputTypes',
      'inputSizes',
      'inputStates',
      'inputShapes',
      'default'
    ]

    // When
    const {
      inputTypes,
      inputSizes,
      inputStates,
      inputShapes,
      default: AtomInput,
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

    it('should NOT extend classNames', () => {
      // Given
      const props = {
        className: 'extended-classNames',
        type: pkg.inputTypes.MASK
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
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

    it('should NOT extend classNames', () => {
      // Given
      const props = {
        className: 'extended-classNames',
        type: pkg.inputTypes.MASK
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })
  })

  describe(`${Component.displayName} DEFAULT Wrappers`, () => {
    describe(`${Component.displayName} DEFAULT Wrappers Addons`, () => {
      it('should render without crashing', () => {
        // Given
        const testIdPrefix = 'testID'
        const getTestID = position =>
          `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftAddon: <div data-testid={getTestID('leftAddon')}>leftAddon</div>,
          rightAddon: (
            <div data-testid={getTestID('rightAddon')}>rightAddon</div>
          )
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
        const getTestID = position =>
          `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftAddon: <div data-testid={getTestID('leftAddon')}>leftAddon</div>,
          rightAddon: (
            <div data-testid={getTestID('rightAddon')}>rightAddon</div>
          )
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
        const getTestID = position =>
          `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftAddon: <div data-testid={getTestID('leftAddon')}>leftAddon</div>,
          rightAddon: (
            <div data-testid={getTestID('rightAddon')}>rightAddon</div>
          ),
          className: 'extended-classNames'
        }
        const findSentence = str => string =>
          string.match(new RegExp(`S*${str}S*`))

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
        expect(getAllByTestId(testIdPrefix))
          .to.be.an('array')
          .to.have.lengthOf(2)
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
        expect(getAllByTestId(testID))
          .to.be.an('array')
          .to.have.lengthOf(2)
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
        const findSentence = str => string =>
          string.match(new RegExp(`S*${str}S*`))

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
        expect(getAllByTestId(testIdPrefix))
          .to.be.an('array')
          .to.have.lengthOf(2)
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
        expect(getAllByTestId(testId))
          .to.be.an('array')
          .to.have.lengthOf(1)
      })
    })

    describe(`${Component.displayName} DEFAULT Wrappers Icons`, () => {
      it('should render without crashing', () => {
        // Given
        const testIdPrefix = 'testID'
        const getTestID = position =>
          `${testIdPrefix} ${testIdPrefix}-${position}`
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
        const getTestID = position =>
          `${testIdPrefix} ${testIdPrefix}-${position}`
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
        const getTestID = position =>
          `${testIdPrefix} ${testIdPrefix}-${position}`
        const props = {
          leftIcon: <svg data-testid={getTestID('leftAddon')} />,
          rightIcon: <svg data-testid={getTestID('rightAddon')} />
        }
        const findSentence = str => string =>
          string.match(new RegExp(`S*${str}S*`))

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
        expect(getAllByTestId(testID))
          .to.be.an('array')
          .to.have.lengthOf(2)
      })

      it('given addon props should return it rendered with its own shape', () => {
        // Given
        const testIdPrefix = 'testID'
        const props = {
          leftAddon: <div data-testid={testIdPrefix}>leftAddon</div>,
          rightAddon: <div data-testid={testIdPrefix}>rightAddon</div>,
          shape: pkg.inputShapes.CIRCLE
        }

        // When
        const {getAllByTestId} = setup(props)

        // Then
        expect(getAllByTestId(testIdPrefix))
          .to.be.an('array')
          .to.have.lengthOf(2)
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
        MASK: 'mask',
        NUMBER: 'number',
        PASSWORD: 'password',
        SUI_PASSWORD: 'sui-password',
        TEXT: 'text',
        TEL: 'tel',
        EMAIL: 'email'
      }

      // When
      const {inputTypes: actual} = library
      const {
        DATE,
        MASK,
        NUMBER,
        PASSWORD,
        SUI_PASSWORD,
        TEXT,
        TEL,
        EMAIL,
        ...others
      } = actual

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

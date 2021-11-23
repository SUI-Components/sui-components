/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src'

import json from '../package.json'

import {createClasses} from '../src/config'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  const {atomButtonColors, atomButtonDesigns} = pkg

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'atomButtonGroupPositions',
      'atomButtonColors',
      'atomButtonDesigns',
      'atomButtonSizes',
      'atomButtonTypes',
      'atomButtonAlignment',
      'atomButtonShapes',
      'default'
    ]

    // When
    const {
      atomButtonGroupPositions,
      atomButtonColors,
      atomButtonDesigns,
      atomButtonSizes,
      atomButtonTypes,
      atomButtonAlignment,
      atomButtonShapes,
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

    it('should not render null', () => {
      // Given
      const props = {}

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it.skip('should NOT extend classNames', () => {
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
      it('should return forwardRef html button element when giving a ref to the component', () => {
        // Given
        const props = {children: 'button'}
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('BUTTON')
      })

      it('should return forwardRef html anchor element when giving a ref to the component', () => {
        // Given
        const props = {
          children: 'button',
          link: true,
          href: 'htttps://www.google.com'
        }
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('A')
      })
    })

    describe('deprecated type usage', () => {
      describe("type='primary'", () => {
        it("given deprecated type='primary' should convert it to color='primary' and design='solid'", () => {
          // Given
          const props = {
            type: 'primary'
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.primary)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.SOLID]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })

        it("given deprecated type='primary' and link flag should convert it to color='primary' and design='link'", () => {
          // Given
          const props = {
            type: 'primary',
            link: true
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.primary)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.LINK]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })
      })

      describe("type='accent'", () => {
        it("given deprecated type='accent' should convert it to color='accent' and design='solid'", () => {
          // Given
          const props = {
            type: 'accent'
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.accent)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.SOLID]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })

        it("given deprecated type='accent' and link flag should convert it to color='accent' and design='link'", () => {
          // Given
          const props = {
            type: 'accent',
            link: true
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.accent)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.LINK]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })
      })

      describe("type='secondary'", () => {
        it("given deprecated type='secondary' should convert it to color='accent' and design='solid'", () => {
          // Given
          const props = {
            type: 'secondary'
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.primary)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.OUTLINE]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })

        it("given deprecated type='secondary' and link flag should convert it to color='accent' and design='link'", () => {
          // Given
          const props = {
            type: 'secondary',
            link: true
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.primary)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.LINK]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })
      })

      describe("type='tertiary'", () => {
        it("given deprecated type='tertiary' should convert it to color='accent' and design='solid'", () => {
          // Given
          const props = {
            type: 'tertiary'
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.primary)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.FLAT]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })

        it("given deprecated type='tertiary' and link flag should convert it to color='accent' and design='link'", () => {
          // Given
          const props = {
            type: 'tertiary',
            link: true
          }
          const classes = createClasses([
            ...atomButtonColors,
            ...Object.values(atomButtonDesigns)
          ])
          const findSentence = str => string =>
            string.match(new RegExp(`S*${str}S*`))

          // When
          const {container} = setup(props)
          const findColorClassName = findSentence(classes.primary)
          const findDesignClassName = findSentence(
            classes[atomButtonDesigns.LINK]
          )

          // Then
          expect(findColorClassName(container.innerHTML)).to.not.be.null
          expect(findDesignClassName(container.innerHTML)).to.not.be.null
        })
      })
    })

    describe('getPropsWithDefaultValues', () => {
      it("should add default design='solid' classname if any given prop", () => {
        // Given
        const props = {}
        const classes = createClasses([...Object.values(atomButtonDesigns)])
        const findSentence = str => string =>
          string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findDesignClassName = findSentence(
          classes[atomButtonDesigns.SOLID]
        )

        // Then
        expect(findDesignClassName(container.innerHTML)).to.not.be.null
      })

      it("should add default design=link' classname if link='true'", () => {
        // Given
        const props = {link: true}
        const classes = createClasses([...Object.values(atomButtonDesigns)])
        const findSentence = str => string =>
          string.match(new RegExp(`S*${str}S*`))

        // When
        const {container} = setup(props)
        const findDesignClassName = findSentence(
          classes[atomButtonDesigns.LINK]
        )

        // Then
        expect(findDesignClassName(container.innerHTML)).to.not.be.null
      })
    })

    it('should show loader if loading', () => {
      // Given
      const text = 'Text'
      const loaderId = 'loader'
      const props = {
        children: text,
        loader: <span data-testid={loaderId} />,
        isLoading: true
      }

      // When
      const {getByTestId} = setup(props)

      // Then
      expect(getByTestId(loaderId)).to.be.visible
    })

    it('should show loading text if loading and there is content', () => {
      // Given
      const loadingText = 'Loading'
      const loaderId = 'loader'
      const props = {
        loader: <span data-testid={loaderId} />,
        loadingText,
        children: 'Button',
        isLoading: true
      }

      // When
      const {getByText, getByTestId} = setup(props)

      // Then
      expect(getByText(loadingText)).to.be.visible
      expect(getByTestId(loaderId)).to.be.visible
    })

    it('should not show loading text if loading and there is no content', () => {
      // Given
      const loadingText = 'Loading'
      const loaderId = 'loader'
      const props = {
        loader: <span data-testid={loaderId} />,
        loadingText,
        isLoading: true
      }

      // When
      const {queryByText, getByTestId} = setup(props)

      // Then
      expect(queryByText(loadingText)).to.be.null
      expect(getByTestId(loaderId)).to.be.visible
    })

    it('should show default loading spinner if isLoading and there is content', () => {
      // Given
      const loadingText = 'Loading'
      const props = {
        loadingText,
        children: 'Button',
        isLoading: true
      }

      // When
      const {getByText, getByRole} = setup(props)

      // Then
      expect(getByText(loadingText)).to.be.visible
      expect(getByRole('status')).to.be.visible
    })
  })

  describe('atomButtonGroupPositions', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonGroupPositions: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        FIRST: 'first',
        MIDDLE: 'middle',
        LAST: 'last'
      }

      // When
      const {atomButtonGroupPositions: actual} = library
      const {FIRST, MIDDLE, LAST, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomButtonColors', () => {
    it('value must be an array', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonColors: actual} = library

      // Then
      expect(actual).to.be.an('array')
    })

    it('value must contain the defined array values', () => {
      // Given
      const library = pkg
      const expected = [
        'primary',
        'accent',
        'neutral',
        'success',
        'alert',
        'error',
        'social-facebook',
        'social-twitter',
        'social-google',
        'social-youtube',
        'social-whatsapp',
        'social-instagram'
      ]

      // When
      const {atomButtonColors: actual} = library

      // Then
      expect(actual.length).to.equal(expected.length)
      expect(actual).to.have.members(expected)
    })
  })

  describe('atomButtonDesigns', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonDesigns: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SOLID: 'solid',
        OUTLINE: 'outline',
        FLAT: 'flat',
        LINK: 'link'
      }

      // When
      const {atomButtonDesigns: actual} = library
      const {SOLID, OUTLINE, FLAT, LINK, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomButtonSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {SMALL: 'small', LARGE: 'large'}

      // When
      const {atomButtonSizes: actual} = library
      const {SMALL, LARGE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomButtonTypes', () => {
    it('value must be an array', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonTypes: actual} = library

      // Then
      expect(actual).to.be.an('array')
    })

    it('value must contain the defined array values', () => {
      // Given
      const library = pkg
      const expected = ['primary', 'accent', 'secondary', 'tertiary']

      // When
      const {atomButtonTypes: actual} = library

      // Then
      expect(actual.length).to.equal(expected.length)
      expect(actual).to.have.members(expected)
    })
  })

  describe('atomButtonAlignment', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonAlignment: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        CENTER: 'center',
        LEFT: 'left',
        RIGHT: 'right'
      }

      // When
      const {atomButtonAlignment: actual} = library
      const {CENTER, LEFT, RIGHT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomButtonShapes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomButtonShapes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SQUARED: 'squared',
        ROUNDED: 'rounded',
        CIRCULAR: 'circular'
      }

      // When
      const {atomButtonShapes: actual} = library
      const {SQUARED, ROUNDED, CIRCULAR, ...others} = actual

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

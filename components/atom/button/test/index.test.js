/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src'

import json from '../package.json'

import {createClasses} from '../src/config'

import {atomButtonColors, atomButtonDesigns} from '../src'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

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
  })
})

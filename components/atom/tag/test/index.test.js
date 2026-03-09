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
    const libraryExportedMembers = [
      'atomTagDesigns',
      'atomTagLinkTypes',
      'atomTagIconPlacements',
      'atomTagSizes',
      'atomTagColors',
      'linkTypes',
      'default'
    ]

    // When
    const {
      atomTagDesigns,
      atomTagLinkTypes,
      atomTagIconPlacements,
      atomTagSizes,
      linkTypes,
      atomTagColors,
      default: AtomTag,
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
      const props = {
        label: 'label'
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
        label: 'label'
      }

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

    describe('Element', () => {
      describe('Default', () => {
        it('by default should render an <span/> element', () => {
          // Given
          const props = {
            label: 'label',
            ref: {current: null}
          }

          // When
          setup(props)

          // Then
          expect(props.ref.current.innerHTML).to.be.a('string')
          expect(props.ref.current.nodeName).to.equal('SPAN')
        })
      })
      describe('Link', () => {
        it('given an href should render a link', () => {
          // Given
          const props = {
            label: 'label',
            href: '#',
            ref: {current: null}
          }

          // When
          const {getByRole} = setup(props)
          const tagElement = getByRole('link')

          // Then
          expect(props.ref.current.innerHTML).to.be.a('string')
          expect(props.ref.current.nodeName).to.equal('A')
          expect(tagElement.innerHTML).to.be.a('string')
          expect(tagElement.nodeName).to.equal('A')
        })
      })
      describe('Button', () => {
        it('given an handler should render a button', () => {
          // Given
          const props = {
            label: 'label',
            onClick: () => {},
            ref: {current: null}
          }

          // When
          const {getByRole} = setup(props)
          const tagElement = getByRole('button')

          // Then
          expect(tagElement.innerHTML).to.be.a('string')
          expect(tagElement.nodeName).to.equal('BUTTON')
        })
      })
    })

    it('should not trigger click when disabled', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        disabled: true,
        onClick: spy,
        label: 'Actionable'
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const tag = getByRole('button', {name: /actionable/i})
      userEvents.click(tag)
      sinon.assert.notCalled(spy)
    })

    it('should not trigger click when read-only', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        readOnly: true,
        onClick: spy,
        label: 'Actionable'
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const tag = getByRole('button', {name: /actionable/i})

      userEvents.click(tag)

      sinon.assert.notCalled(spy)
    })

    it('should add a title attribute when defined', () => {
      // Given
      const props = {
        label: 'tag with title',
        title: 'title'
      }

      // When
      const {getByText} = setup(props)
      const tag = getByText(props.label)

      // Then
      expect(tag).to.have.attribute('title', 'title')
    })

    it('should not add a title attribute when not defined', () => {
      // Given
      const props = {
        label: 'tag without title'
      }

      // When
      const {getByText} = setup(props)
      const tag = getByText(props.label)

      // Then
      expect(tag).to.not.have.attribute('title')
    })

    describe('closeIcon', () => {
      it('given a closeIcon and clicking on it should fire onClose event', () => {
        // Given
        const spy = sinon.spy()
        const closeIconText = 'closeIcon'
        const props = {
          onClose: spy,
          label: 'Actionable',
          closeIcon: <i>{closeIconText}</i>
        }

        // When
        const {getByText} = setup(props)

        // Then
        const tag = getByText(closeIconText)
        userEvents.click(tag)
        sinon.assert.callCount(spy, 1)
      })

      it('given a closeIcon and tag disabled should not render the closeIcon', () => {
        // Given
        const spy = sinon.spy()
        const closeIconText = 'closeIcon'
        const props = {
          disabled: true,
          onClose: spy,
          label: 'Actionable',
          closeIcon: <i>{closeIconText}</i>
        }

        // When
        const {getByText} = setup(props)

        // Then
        expect(() => getByText(closeIconText)).to.throw()
      })

      it('given a closeIcon and tag read-only should not render the closeIcon', () => {
        // Given
        const spy = sinon.spy()
        const closeIconText = 'closeIcon'
        const props = {
          readOnly: true,
          onClose: spy,
          label: 'Actionable',
          closeIcon: <i>{closeIconText}</i>
        }

        // When
        const {getByText} = setup(props)

        // Then
        expect(() => getByText(closeIconText)).to.throw()
      })
    })
  })

  describe('atomTagDesigns', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomTagDesigns: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SOLID: 'solid',
        TINTED: 'tinted',
        OUTLINE: 'outline',
        DASHED: 'dashed'
      }

      // When
      const {atomTagDesigns: actual} = library
      const {SOLID, TINTED, OUTLINE, DASHED, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomTagIconPlacements', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomTagIconPlacements: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        LEFT: 'left',
        RIGHT: 'right'
      }

      // When
      const {atomTagIconPlacements: actual} = library
      const {LEFT, RIGHT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomTagLinkTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomTagLinkTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NOFOLLOW: 'nofollow',
        NOOPENER: 'noopener',
        NOREFERRER: 'noreferrer',
        PREV: 'prev',
        NEXT: 'next',
        TAG: 'tag'
      }

      // When
      const {atomTagLinkTypes: actual} = library
      const {NOFOLLOW, NOOPENER, NOREFERRER, PREV, NEXT, TAG, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomTagSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomTagSizes: actual} = library

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
      const {atomTagSizes: actual} = library
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

  describe('atomTagColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomTagColors: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        PRIMARY: 'primary',
        ACCENT: 'accent',
        SUCCESS: 'success',
        ALERT: 'alert',
        ERROR: 'error',
        NEUTRAL: 'neutral',
        SURFACE: 'surface'
      }

      // When
      const {atomTagColors: actual} = library
      const {PRIMARY, ACCENT, SUCCESS, ALERT, ERROR, NEUTRAL, SURFACE, ...others} = actual

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

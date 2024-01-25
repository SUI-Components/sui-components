/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
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
      'MOLECULE_AVATAR_SIZES',
      'MOLECULE_AVATAR_BADGE_STATUSES',
      'MOLECULE_AVATAR_BADGE_PLACEMENTS',
      'MOLECULE_AVATAR_BADGE_SIZES',
      'moleculeAvatarSizes',
      'moleculeAvatarBadgeStatuses',
      'moleculeAvatarBadgePlacements',
      'moleculeAvatarBadgeSizes',
      'default'
    ]

    // When
    const {
      MOLECULE_AVATAR_SIZES,
      MOLECULE_AVATAR_BADGE_STATUSES,
      MOLECULE_AVATAR_BADGE_PLACEMENTS,
      MOLECULE_AVATAR_BADGE_SIZES,
      moleculeAvatarSizes,
      moleculeAvatarBadgeStatuses,
      moleculeAvatarBadgePlacements,
      moleculeAvatarBadgeSizes,
      default: MoleculeAvatar,
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

    it('should NOT extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should render default fallback icon if no name or src is provided', () => {
      // Given
      const props = {}

      // When
      const {getByRole} = setup(props)

      // Then
      expect(getByRole('img')).to.be.visible
    })

    it('should render custom fallback icon if no name or src is provided', () => {
      // Given
      const testId = 'fallback-icon'
      const props = {
        fallbackIcon: <i data-testid={testId} />
      }

      // When
      const {getByTestId} = setup(props)
      const fallbackIconEl = getByTestId(testId)

      // Then
      expect(fallbackIconEl).to.be.visible
      expect(fallbackIconEl.getAttribute('role')).to.be.eql('img')
    })

    it('should render name if no src is provided', () => {
      // Given
      const name = 'Jon Snow'
      const props = {
        name
      }

      // When
      const {getByText} = setup(props)
      const nameEl = getByText('JS')

      // Then
      expect(nameEl).to.be.visible
      expect(nameEl.getAttribute('aria-label')).to.be.eql(name)
    })

    it('should render image if src is provided', () => {
      // Given
      const name = 'Jon Snow'
      const props = {
        name,
        src: 'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest?cb=20190714094440'
      }

      // When
      const {getByAltText} = setup(props)

      // Then
      expect(getByAltText(name)).to.be.visible
    })

    it('should render skeleton if loading', () => {
      // Given
      const skeletonTestId = 'skeleton'
      const childTestId = 'child'
      const props = {
        isLoading: true,
        skeleton: <span data-testid={skeletonTestId} />,
        children: <div data-testid={childTestId} />
      }

      // When
      const {getByTestId, queryByTestId} = setup(props)

      // Then
      expect(getByTestId(skeletonTestId)).to.be.visible
      expect(queryByTestId(childTestId)).to.be.null
    })

    it('should render badge', () => {
      // Given
      const testId = 'badge'
      const props = {
        children: <MoleculeAvatar.Badge data-testid={testId} />
      }

      // When
      const {getByTestId} = setup(props)

      // Then
      expect(getByTestId(testId)).to.be.visible
    })

    it('should render fallback name initials uppercase', () => {
      // Given
      const name = 'jon snow'
      const props = {
        name
      }

      // When
      const {getByText} = setup(props)

      // Then
      expect(getByText('js')).to.be.visible
    })

    describe('forwardRef', () => {
      it('should return forwardRef html span element when giving a ref to the component', () => {
        // Given
        const props = {}
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('SPAN')
      })
    })
  })

  describe('moleculeAvatarSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAvatarSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXLARGE: 'xxlarge',
        XLARGE: 'xlarge',
        LARGE: 'large',
        MEDIUM: 'medium',
        SMALL: 'small',
        XSMALL: 'xsmall'
      }

      // When
      const {moleculeAvatarSizes: actual} = library
      const {XXLARGE, XLARGE, LARGE, MEDIUM, SMALL, XSMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAvatarBadgeStatuses', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAvatarBadgeStatuses: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ERROR: 'error',
        SUCCESS: 'success',
        ALERT: 'alert',
        MUTED: 'muted'
      }

      // When
      const {moleculeAvatarBadgeStatuses: actual} = library
      const {ERROR, SUCCESS, ALERT, MUTED, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAvatarBadgePlacements', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAvatarBadgePlacements: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        TOP: 'top',
        BOTTOM: 'bottom'
      }

      // When
      const {moleculeAvatarBadgePlacements: actual} = library
      const {TOP, BOTTOM, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAvatarBadgeSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAvatarBadgeSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXLARGE: 'xxlarge',
        XLARGE: 'xlarge',
        LARGE: 'large',
        MEDIUM: 'medium',
        SMALL: 'small',
        XSMALL: 'xsmall'
      }

      // When
      const {moleculeAvatarBadgeSizes: actual} = library
      const {XXLARGE, XLARGE, LARGE, MEDIUM, SMALL, XSMALL, ...others} = actual

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

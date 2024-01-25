/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

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
      'ATOM_SKELETON_VARIANTS',
      'ATOM_SKELETON_ANIMATIONS',
      'atomSkeletonVariants',
      'atomSkeletonAnimations',
      'default'
    ]

    // When
    const {
      ATOM_SKELETON_VARIANTS,
      ATOM_SKELETON_ANIMATIONS,
      atomSkeletonVariants,
      atomSkeletonAnimations,
      default: AtomSkeleton,
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

    it('should render a set of skeletons', () => {
      // Given
      const count = 3
      const testid = 'skeleton'
      const props = {
        'data-testid': testid,
        count
      }

      // When
      const {getAllByTestId} = setup(props)

      // Then
      expect(getAllByTestId(testid)).to.be.an('array').to.have.lengthOf(count)
    })
  })

  describe('atomSkeletonVariants', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSkeletonVariants: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        round: 'round',
        circle: 'circle',
        square: 'square'
      }

      // When
      const {atomSkeletonVariants: actual} = library
      const {round, circle, square, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomSkeletonAnimations', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSkeletonAnimations: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        wave: 'wave',
        pulse: 'pulse'
      }

      // When
      const {atomSkeletonAnimations: actual} = library
      const {wave, pulse, ...others} = actual

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

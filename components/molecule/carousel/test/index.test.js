/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import * as pkg from '../src/index.js'
import * as slidy from '../src/slidy.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['default']

    // When
    const {default: MoleculeButtonGroup, ...others} = library

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
      const props = {
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

    it('renders without problems without lazyLoad', () => {
      // Given
      const elementsText = ['slide 1', 'slide 2', 'slide 3', 'slide 4']
      const [elementText1, ...otherElementsText] = elementsText
      const props = {
        hasLazyLoadSlider: false,
        children: elementsText.map((elementText, index) => (
          <span key={index}>{elementText}</span>
        ))
      }
      // When
      const {getByText} = setup(props)

      // Then
      const slide1Element = getByText(elementText1)
      expect(slide1Element.innerHTML).to.equal(elementText1)
      otherElementsText.forEach(otherElementText => {
        expect(() => getByText(otherElementText)).to.throw()
      })
    })

    it('renders without problems with lazyLoad', async () => {
      // Given
      const elementsText = ['slide 1', 'slide 2', 'slide 3', 'slide 4']
      const [elementText1, ...otherElementsText] = elementsText
      const props = {
        children: elementsText.map((elementText, index) => (
          <span key={index}>{elementText}</span>
        ))
      }
      // When
      const {findByText, getByText} = setup(props)

      // Then
      const slide1Element = await findByText(elementText1)
      expect(slide1Element.innerHTML).to.equal(elementText1)
      otherElementsText.forEach(otherElementText => {
        expect(() => getByText(otherElementText)).to.throw()
      })
    })

    it('renders without problems with hasArrows=false and has the arrows', () => {
      // Given
      const elementsText = ['slide 1', 'slide 2', 'slide 3', 'slide 4']
      const [arrowLeftText, arrowRightText] = ['arrowLeft', 'arrowRight']
      const props = {
        hasLazyLoadSlider: false,
        hasArrows: true,
        children: elementsText.map((elementText, index) => (
          <span key={index}>{elementText}</span>
        )),
        ArrowLeft: () => <span>{arrowLeftText}</span>,
        ArrowRight: () => <span>{arrowRightText}</span>
      }
      // When
      const {getByText} = setup(props)

      // Then
      const arrowLeftElement = getByText(arrowLeftText)
      expect(arrowLeftElement.innerHTML).to.equal(arrowLeftText)
      const arrowRightElement = getByText(arrowRightText)
      expect(arrowRightElement.innerHTML).to.equal(arrowRightText)
    })

    it('renders without problems with hasArrows=false and has NOT the arrows', () => {
      // Given
      const elementsText = ['slide 1', 'slide 2', 'slide 3', 'slide 4']
      const [arrowLeftText, arrowRightText] = ['arrowLeft', 'arrowRight']
      const props = {
        hasLazyLoadSlider: false,
        hasArrows: false,
        children: elementsText.map((elementText, index) => (
          <span key={index}>{elementText}</span>
        )),
        ArrowLeft: () => <span>{arrowLeftText}</span>,
        ArrowRight: () => <span>{arrowRightText}</span>
      }
      // When
      const {getByText} = setup(props)

      // Then
      expect(() => getByText(arrowLeftText)).to.throw()
      expect(() => getByText(arrowRightText)).to.throw()
    })
  })

  describe('slidy', () => {
    const {clampNumber, infiniteIndex, translate} = slidy
    describe('clampNumber', () => {
      it('when a number that is less than min value is provided then the min value is returned', () => {
        // Given
        const values = [
          [{value: 2, minValue: 4, maxValue: 8}, 4],
          [{value: -3, minValue: 0, maxValue: 4}, 0]
        ]

        // When
        const results = values.map(
          ([{value, minValue, maxValue}, expected]) => [
            clampNumber(value, minValue, maxValue),
            expected
          ]
        )

        // Then
        results.forEach(({current, expected}) => {
          expect(current).to.equal(expected)
        })
      })

      it('when a number that is greater than max value is provided then the max value is returned', () => {
        // Given
        const [value, minValue, maxValue] = [16, 4, 8]
        const expected = 8

        // When
        const current = clampNumber(value, minValue, maxValue)

        // Then
        expect(current).to.equal(expected)
      })

      it('when a number that is greater than max value is provided then the max value is returned', () => {
        // Given
        const [value, minValue, maxValue] = [7, 4, 8]
        const expected = 7

        // When
        const current = clampNumber(value, minValue, maxValue)

        // Then
        expect(current).to.equal(expected)
      })
    })

    describe('infiniteIndex', () => {
      it('when a number that is less than 0 is provided then the end value - 1 is returned', () => {
        // Given
        const values = [
          [{value: -1, endValue: 4}, 3],
          [{value: -3, endValue: 9}, 8]
        ]

        const results = values.map(([{value, endValue}, expected]) => [
          infiniteIndex(value, endValue),
          expected
        ])

        // Then
        results.forEach(({current, expected}) => {
          expect(current).to.equal(expected)
        })
      })

      it('when a number that is greater than end value is provided then 0 is returned', () => {
        // Given
        const [value, endValue] = [12, 8]
        const expected = 0

        // When
        const current = infiniteIndex(value, endValue)

        // Then
        expect(current).to.equal(expected)
      })

      it('when a number that is between 0 and the end value is provided then the same value is returned', () => {
        // Given
        const values = [
          [{value: 0, endValue: 4}, 0],
          [{value: 1, endValue: 9}, 1],
          [{value: 5, endValue: 9}, 5]
        ]

        // When
        const results = values.map(([{value, endValue}, expected]) => [
          infiniteIndex(value, endValue),
          expected
        ])

        // Then
        results.forEach(({current, expected}) => {
          expect(current).to.equal(expected)
        })
      })
    })

    describe('translate', () => {
      it('when you want to translate to the right, the next slide', () => {
        // Given
        const [to, fineTuningPixels, numberOfSlides] = [1, -57, 1]
        const percentage = 100 / numberOfSlides
        const expected = 'translate3d(calc(-100% - -57px), 0, 0)'

        // When
        const current = translate(to, fineTuningPixels, percentage)

        // Then
        expect(current).to.equal(expected)
      })

      it('when you want to translate to the left, the previous slide', () => {
        // Given
        const [to, fineTuningPixels, numberOfSlides] = [-1, -57, 1]
        const percentage = 100 / numberOfSlides
        const expected = 'translate3d(calc(100% - -57px), 0, 0)'

        // When
        const current = translate(to, fineTuningPixels, percentage)

        // Then
        expect(current).to.equal(expected)
      })

      it('when you want to translate to the left, the previous slide with default percentage', () => {
        // Given
        const [to, fineTuningPixels] = [1, -57]
        const expected = 'translate3d(calc(-100% - -57px), 0, 0)'

        // When
        const current = translate(to, fineTuningPixels)

        // Then
        expect(current).to.equal(expected)
      })
    })
  })
})

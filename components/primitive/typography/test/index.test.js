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

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'useTypography',
      'primitiveTypographyDesign',
      'primitiveTypographyFontFamily',
      'primitiveTypographyVariant',
      'primitiveTypographyFontSize',
      'primitiveTypographyLetterSpacing',
      'primitiveTypographyFontStyle',
      'primitiveTypographyTextDecoration',
      'primitiveTypographyFontWeight',
      'primitiveTypographyFontStretch',
      'primitiveTypographyLineHeight',
      'PrimitiveTypographyDisplay1',
      'PrimitiveTypographyDisplay2',
      'PrimitiveTypographyDisplay3',
      'PrimitiveTypographyHeadline1',
      'PrimitiveTypographyHeadline2',
      'PrimitiveTypographySubHead',
      'PrimitiveTypographyBody1',
      'PrimitiveTypographyBody2',
      'PrimitiveTypographyCaption',
      'PrimitiveTypographySmall',
      'PrimitiveTypographyCallout',
      'default'
    ]

    // When
    const {
      useTypography,
      primitiveTypographyDesign,
      primitiveTypographyFontFamily,
      primitiveTypographyVariant,
      primitiveTypographyFontSize,
      primitiveTypographyLetterSpacing,
      primitiveTypographyFontStyle,
      primitiveTypographyTextDecoration,
      primitiveTypographyFontWeight,
      primitiveTypographyFontStretch,
      primitiveTypographyLineHeight,
      PrimitiveTypographyDisplay1,
      PrimitiveTypographyDisplay2,
      PrimitiveTypographyDisplay3,
      PrimitiveTypographyHeadline1,
      PrimitiveTypographyHeadline2,
      PrimitiveTypographySubHead,
      PrimitiveTypographyBody1,
      PrimitiveTypographyBody2,
      PrimitiveTypographyCaption,
      PrimitiveTypographySmall,
      PrimitiveTypographyCallout,
      default: MoleculeAccordionDefault,
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
  })

  describe('primitiveTypographyDesign', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyDesign: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        DISPLAY_1: 'display-1',
        DISPLAY_2: 'display-2',
        DISPLAY_3: 'display-3',
        HEADLINE_1: 'headline-1',
        HEADLINE_2: 'headline-2',
        SUBHEAD: 'subhead',
        BODY_1: 'body-1',
        BODY_2: 'body-2',
        CAPTION: 'caption',
        SMALL: 'small',
        CALLOUT: 'callout'
      }

      // When
      const {primitiveTypographyDesign: actual} = library
      const {
        DISPLAY_1,
        DISPLAY_2,
        DISPLAY_3,
        HEADLINE_1,
        HEADLINE_2,
        SUBHEAD,
        BODY_1,
        BODY_2,
        CAPTION,
        SMALL,
        CALLOUT,
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

  describe('primitiveTypographyVariant', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyVariant: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        EXPANDED: 'expanded',
        DEFAULT: 'default'
        // COLLAPSED: 'collapsed'
      }

      // When
      const {primitiveTypographyVariant: actual} = library
      const {
        EXPANDED,
        DEFAULT,
        // COLLAPSED,
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

  describe('primitiveTypographyFontSize', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyFontSize: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXS: 'xxs', // 10px
        XS: 'xs', // 12px
        S: 's', // 14px
        M: 'm', // 16px
        L: 'l', // 18px
        XL: 'xl', // 20px
        XXL: 'xxl', // 24px
        XXXL: 'xxxl', // 28px
        GIANT: 'giant' // 36px
      }

      // When
      const {primitiveTypographyFontSize: actual} = library
      const {XXS, XS, S, M, L, XL, XXL, XXXL, GIANT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('primitiveTypographyLetterSpacing', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyLetterSpacing: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXS: 'xxs', // 1.5px
        XS: 'xs', // 1.2px
        S: 's', // 0.38px
        M: 'm', // 0.37px
        L: 'l', // 0.36px
        XL: 'xl', // 0.35px
        XXL: 'xxl', // 0.25px
        XXXL: 'xxxl', // 0.2px
        GIANT: 'giant' // 0.1px
      }

      // When
      const {primitiveTypographyLetterSpacing: actual} = library
      const {XXS, XS, S, M, L, XL, XXL, XXXL, GIANT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('primitiveTypographyFontStyle', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyFontStyle: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ITALIC: 'italic',
        OBLIQUE: 'oblique'
      }

      // When
      const {primitiveTypographyFontStyle: actual} = library
      const {ITALIC, OBLIQUE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('primitiveTypographyTextDecoration', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyTextDecoration: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        UNDERLINE: 'underline',
        OVERLINE: 'overline',
        LINE_THROUGH: 'line-through'
      }

      // When
      const {primitiveTypographyTextDecoration: actual} = library
      const {UNDERLINE, OVERLINE, LINE_THROUGH, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('primitiveTypographyFontWeight', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyFontWeight: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        THIN: 'thin', // 100
        EXTRA_LIGHT: 'extra-light', // 200
        LIGHT: 'light', // 300
        REGULAR: 'regular', // 400
        MEDIUM: 'medium', // 500
        SEMI_BOLD: 'semi-bold', // 600
        BOLD: 'bold', // 700
        EXTRA_BOLD: 'extra-bold', // 800
        BLACK: 'black' // 900
      }

      // When
      const {primitiveTypographyFontWeight: actual} = library
      const {
        THIN,
        EXTRA_LIGHT,
        LIGHT,
        REGULAR,
        MEDIUM,
        SEMI_BOLD,
        BOLD,
        EXTRA_BOLD,
        BLACK,
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

  describe('primitiveTypographyFontStretch', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyFontStretch: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ULTRA_CONDENSED: 'ultra-condensed', // 50%
        EXTRA_CONDENSED: 'extra-condensed', // 62.5%
        CONDENSED: 'condensed', // 75%
        SEMI_CONDENSED: 'semi-condensed', // 87.5%
        NORMAL: 'normal', // 100%
        SEMI_EXPANDED: 'semi-expanded', // 112.5%
        EXPANDED: 'expanded', // 125%
        EXTRA_EXPANDED: 'extra-expanded', // 150%
        ULTRA_EXPANDED: 'ultra-expanded' // 200%
      }

      // When
      const {primitiveTypographyFontStretch: actual} = library
      const {
        ULTRA_CONDENSED,
        EXTRA_CONDENSED,
        CONDENSED,
        SEMI_CONDENSED,
        NORMAL,
        SEMI_EXPANDED,
        EXPANDED,
        EXTRA_EXPANDED,
        ULTRA_EXPANDED,
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

  describe('primitiveTypographyLineHeight', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {primitiveTypographyLineHeight: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXS: 'xxs', // 12px
        XS: 'xs', // 14.4px
        S: 's', // 18.8px
        M: 'm', // 20.8px
        L: 'l', // 21.6px
        XL: 'xl', // 24px
        XXL: 'xxl', // 28.8px
        XXXL: 'xxxl', // 33.6px
        GIANT: 'giant' // 43.2px
      }

      // When
      const {primitiveTypographyLineHeight: actual} = library
      const {XXS, XS, S, M, L, XL, XXL, XXXL, GIANT, ...others} = actual

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

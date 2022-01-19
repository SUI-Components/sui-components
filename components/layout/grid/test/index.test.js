/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src'
import json from '../package.json'

import {getColSpanClassNamesTransform} from 'components/layout/grid/src/gridItem'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'default',
      'DeprecatedLayoutGrid',
      'LayoutGridItem',
      'LayoutGridAlignContent',
      'LayoutGridAlignItems',
      'LayoutGridJustifyContent',
      'LayoutGridGutterValues',
      'LayoutGridCellNumbers',
      'LayoutGridBreakpoints'
    ]

    // When
    const {
      default: LayoutGrid,
      DeprecatedLayoutGrid,
      LayoutGridItem,
      LayoutGridAlignContent,
      LayoutGridAlignItems,
      LayoutGridJustifyContent,
      LayoutGridGutterValues,
      LayoutGridCellNumbers,
      LayoutGridBreakpoints,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // given
      const props = {}
      // when
      const component = <Component {...props} />
      // then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // given
      const props = {}
      // when
      const {container} = setup(props)
      // then
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

  describe('LayoutGridAlignContent', () => {
    const {LayoutGridAlignContent} = pkg
    it('enum', () => {
      // given
      const actual = LayoutGridAlignContent
      const expected = {
        CENTER: 'center',
        FLEX_START: 'flex-start',
        FLEX_END: 'flex-end',
        SPACE_AROUND: 'space-around',
        SPACE_BETWEEN: 'space-between',
        SPACE_EVENLY: 'space-evenly',
        STRETCH: 'stretch'
      }
      // when

      // then
      expect(actual).to.be.a('object')
      expect(Object.keys(actual).length).to.equal(Object.keys(expected).length)
      expect(Object.values(actual).length).to.equal(
        Object.values(expected).length
      )
      Object.keys(actual).forEach(value => {
        const expectedValue = Object.keys(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
      Object.values(actual).forEach(value => {
        const expectedValue = Object.values(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
    })
  })

  describe('LayoutGridAlignItems', () => {
    const {LayoutGridAlignItems} = pkg
    it('enum', () => {
      // given
      const actual = LayoutGridAlignItems
      const expected = {
        BASELINE: 'baseline',
        CENTER: 'center',
        FLEX_START: 'flex-start',
        FLEX_END: 'flex-end',
        STRETCH: 'stretch'
      }
      // when

      // then
      expect(actual).to.be.a('object')
      expect(Object.keys(actual).length).to.equal(Object.keys(expected).length)
      expect(Object.values(actual).length).to.equal(
        Object.values(expected).length
      )
      Object.keys(actual).forEach(value => {
        const expectedValue = Object.keys(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
      Object.values(actual).forEach(value => {
        const expectedValue = Object.values(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
    })
  })

  describe('LayoutGridJustifyContent', () => {
    const {LayoutGridJustifyContent} = pkg
    it('enum', () => {
      // given
      const actual = LayoutGridJustifyContent
      const expected = {
        CENTER: 'center',
        FLEX_START: 'flex-start',
        FLEX_END: 'flex-end',
        SPACE_AROUND: 'space-around',
        SPACE_BETWEEN: 'space-between'
      }
      // when

      // then
      expect(actual).to.be.a('object')
      expect(Object.keys(actual).length).to.equal(Object.keys(expected).length)
      expect(Object.values(actual).length).to.equal(
        Object.values(expected).length
      )
      Object.keys(actual).forEach(value => {
        const expectedValue = Object.keys(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
      Object.values(actual).forEach(value => {
        const expectedValue = Object.values(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
    })
  })

  describe('LayoutGridBreakpoints', () => {
    const {LayoutGridBreakpoints} = pkg
    it('enum', () => {
      // given
      const actual = LayoutGridBreakpoints
      const expected = {
        XXS: 'xxs',
        XS: 'xs',
        S: 's',
        M: 'm',
        L: 'l',
        XL: 'xl',
        XXL: 'xxl'
      }
      // when

      // then
      expect(actual).to.be.a('object')
      expect(Object.keys(actual).length).to.equal(Object.keys(expected).length)
      expect(Object.values(actual).length).to.equal(
        Object.values(expected).length
      )
      Object.keys(actual).forEach(value => {
        const expectedValue = Object.keys(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
      Object.values(actual).forEach(value => {
        const expectedValue = Object.values(expected).find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
    })
  })

  describe('LayoutGridGutterValues', () => {
    const {LayoutGridGutterValues} = pkg
    it('array', () => {
      // given
      const actual = LayoutGridGutterValues
      const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      // when

      // then
      expect(actual).to.be.a('array')
      expect(actual.length).to.equal(expected.length)
      actual.forEach(value => {
        const expectedValue = expected.find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
    })
  })

  describe('LayoutGridCellNumbers', () => {
    const {LayoutGridCellNumbers} = pkg
    it('array', () => {
      // given
      const actual = LayoutGridCellNumbers
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      // when

      // then
      expect(actual).to.be.a('array')
      expect(actual.length).to.equal(expected.length)
      actual.forEach(value => {
        const expectedValue = expected.find(val => value === val)
        expect(value).to.equal(expectedValue)
      })
    })
  })

  describe('getColSpanClassNamesTransform', () => {
    it('not giving any value should be null', () => {
      // given
      const props = {}
      // when
      const response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.be.null
    })

    it('giving a single integer valid value should return xxs class', () => {
      // given
      const props = {
        colSpan: 1
      }
      // when
      const response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.not.be.null
      expect(response).to.be.a('string')
      expect(response).to.not.have.lengthOf(0)
      expect(response).to.equal('sui-LayoutGrid-item--xxs-1')
    })

    it('giving a single integer NOT valid value should be null', () => {
      // given
      const props = {
        colSpan: -1
      }
      // when
      let response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.be.null

      // and
      // then
      props.colSpan = 13
      // when
      response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.be.null
    })

    it('giving a value for each breakpoint should be a combination of all of them', () => {
      // given
      const props = {
        colSpan: {xxs: 1, xs: 2, s: 3, m: 4, l: 5, xl: 6, xxl: 7}
      }
      // when
      const response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.not.be.null
      expect(response).to.be.a('string')
      expect(response).to.not.have.lengthOf(0)
      expect(response).to.equal(
        'sui-LayoutGrid-item--xxs-1 sui-LayoutGrid-item--xs-2 sui-LayoutGrid-item--s-3 sui-LayoutGrid-item--m-4 sui-LayoutGrid-item--l-5 sui-LayoutGrid-item--xl-6 sui-LayoutGrid-item--xxl-7'
      )
    })

    it('giving a value for each breakpoint should be a combination of all of them prefering the direct prop', () => {
      // given
      const props = {
        colSpan: {xxs: 1, xs: 2, s: 3, m: 4, l: 5, xl: 6, xxl: 7},
        xxs: 2,
        s: 1
      }
      // when
      const response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.not.be.null
      expect(response).to.be.a('string')
      expect(response).to.not.have.lengthOf(0)
      expect(response).to.equal(
        'sui-LayoutGrid-item--xxs-2 sui-LayoutGrid-item--xs-2 sui-LayoutGrid-item--s-1 sui-LayoutGrid-item--m-4 sui-LayoutGrid-item--l-5 sui-LayoutGrid-item--xl-6 sui-LayoutGrid-item--xxl-7'
      )
    })
    it('giving a value for each breakpoint should ignore colSpan unique value', () => {
      // given
      const props = {
        colSpan: 1,
        xxs: 2,
        xs: 2,
        s: 2,
        m: 2,
        l: 2,
        xl: 2,
        xxl: 2
      }
      // when
      const response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.not.be.null
      expect(response).to.be.a('string')
      expect(response).to.not.have.lengthOf(0)
      expect(response).to.equal(
        'sui-LayoutGrid-item--xxs-2 sui-LayoutGrid-item--xs-2 sui-LayoutGrid-item--s-2 sui-LayoutGrid-item--m-2 sui-LayoutGrid-item--l-2 sui-LayoutGrid-item--xl-2 sui-LayoutGrid-item--xxl-2'
      )
    })

    it('giving a value for each breakpoint should ignore colSpan value keys', () => {
      // given
      const props = {
        colSpan: {
          xxs: 1,
          xs: 1,
          s: 1,
          m: 1,
          l: 1,
          xl: 1,
          xxl: 1
        },
        xxs: 2,
        xs: 2,
        s: 2,
        m: 2,
        l: 2,
        xl: 2,
        xxl: 2
      }
      // when
      const response = getColSpanClassNamesTransform(props)
      // then
      expect(response).to.not.be.null
      expect(response).to.be.a('string')
      expect(response).to.not.have.lengthOf(0)
      expect(response).to.equal(
        'sui-LayoutGrid-item--xxs-2 sui-LayoutGrid-item--xs-2 sui-LayoutGrid-item--s-2 sui-LayoutGrid-item--m-2 sui-LayoutGrid-item--l-2 sui-LayoutGrid-item--xl-2 sui-LayoutGrid-item--xxl-2'
      )
    })
  })
})

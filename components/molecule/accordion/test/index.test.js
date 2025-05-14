/* eslint-disable sui/default-component-test */
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

const DATA_TEST_ID = 'accordion-panel-item'

const sharedProps = {
  'data-testId': DATA_TEST_ID
}

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'MoleculeAccordion',
      'MoleculeAccordionItem',
      'MoleculeAccordionItemHeader',
      'MoleculeAccordionItemHeaderIcon',
      'MoleculeAccordionItemPanel',
      'moleculeAccordionBehavior',
      'moleculeAccordionAnimationDuration',
      'moleculeAccordionHeaderIconPosition',
      'moleculeAccordionHeaderLabelWraps',
      'default'
    ]

    // When
    const {
      MoleculeAccordion,
      MoleculeAccordionItem,
      MoleculeAccordionItemHeader,
      MoleculeAccordionItemHeaderIcon,
      MoleculeAccordionItemPanel,
      moleculeAccordionBehavior,
      moleculeAccordionAnimationDuration,
      moleculeAccordionHeaderIconPosition,
      moleculeAccordionHeaderLabelWraps,
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
      const {MoleculeAccordionItem} = pkg
      const props = {
        children: [
          <MoleculeAccordionItem key={0} label="label 1" value={1} id={1} content="content 1" />,
          <MoleculeAccordionItem key={1} label="label 2" value={2} id={2} content="content 2" />
        ]
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
      const {MoleculeAccordionItem} = pkg
      const props = {
        children: [
          <MoleculeAccordionItem key={0} label="label 1" value={1} header="header 1" content="content 1" />,
          <MoleculeAccordionItem key={1} label="label 2" value={2} header="header 2" content="content 2" />
        ]
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const {MoleculeAccordionItem} = pkg
      const props = {
        className: 'extended-classNames',
        children: [
          <MoleculeAccordionItem key={0} label="label 1" value={1} header="header 1" content="content 1" />,
          <MoleculeAccordionItem key={1} label="label 2" value={2} header="header 2" content="content 2" />
        ]
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should trigger onChange when tab is clicked given single behavior', () => {
      // Given
      const spy = sinon.spy()
      const {MoleculeAccordionItem} = pkg
      const props = {
        maxHeight: 20,
        behavior: 'single',
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
            maxHeight={100}
            isExpanded
          />,
          <MoleculeAccordionItem key={1} label="label 2" value={2} header="header 2" content="content 2" />
        ],
        onChange: spy
      }
      const {getByText} = setup(props)

      // When
      const tab = getByText('header 1')
      userEvents.click(tab)

      // Then
      sinon.assert.called(spy)
    })

    it('should trigger onChange when tab is clicked given undefined behavior', () => {
      // Given
      const spy = sinon.spy()
      const {MoleculeAccordionItem} = pkg
      const props = {
        maxHeight: 20,
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
            maxHeight={100}
            isExpanded
          />,
          <MoleculeAccordionItem key={1} label="label 2" value={2} header="header 2" content="content 2" />
        ],
        onChange: spy
      }
      const {getByText} = setup(props)

      // When
      const tab = getByText('header 1')
      userEvents.click(tab)

      // Then
      sinon.assert.called(spy)
    })

    it('should trigger onChange when tab is clicked given multiple behavior', () => {
      // Given
      const spy = sinon.spy()
      const {MoleculeAccordionItem} = pkg
      const props = {
        maxHeight: 20,
        behavior: 'multiple',
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
            maxHeight={100}
            isExpanded
          />,
          <MoleculeAccordionItem key={1} label="label 2" value={2} header="header 2" content="content 2" />
        ],
        onChange: spy
      }
      const {getByText} = setup(props)

      // When
      const tab = getByText('header 1')
      userEvents.click(tab)

      // Then
      sinon.assert.called(spy)
    })

    it('should show the second and third tab open when set via openedTabs prop', () => {
      // Given
      const spy = sinon.spy()
      const {MoleculeAccordionItem} = pkg
      const props = {
        maxHeight: 50,
        behavior: 'multiple',
        children: [
          <MoleculeAccordionItem
            key={0}
            as="section"
            headerAs="header"
            headerLevel={1}
            label="label 1"
            value={1}
            content="content 1"
            maxHeight={100}
            {...sharedProps}
          />,
          <MoleculeAccordionItem
            key={1}
            as="section"
            headerAs="header"
            headerLevel={1}
            label="label 2"
            value={2}
            content="content 2"
            maxHeight={100}
            {...sharedProps}
          />,
          <MoleculeAccordionItem key={2} label="label 3" value={3} content="content 3" {...sharedProps} />
        ],
        onChange: spy,
        values: [1, 2]
      }
      const {getAllByTestId} = setup(props)

      // When
      const panels = getAllByTestId(DATA_TEST_ID)

      // Then
      panels.forEach(panel => {
        if (['content 1', 'content 2'].includes(panel.innerText)) {
          expect(Boolean(panel.hasAttribute('aria-expanded'))).to.be.true
        } else if (['content 3'].includes(panel.innerText)) {
          expect(Boolean(panel.hasAttribute('aria-collapsed'))).to.be.false
        }
        expect(['content 1', 'content 2', 'content 3'].some(text => panel.innerText === text)).to.be.true
      })
    })
  })

  describe('moleculeAccordionBehavior', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAccordionBehavior: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SINGLE: 'single',
        MULTIPLE: 'multiple'
      }

      // When
      const {moleculeAccordionBehavior: actual} = library
      const {SINGLE, MULTIPLE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAccordionAnimationDuration', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAccordionAnimationDuration: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NONE: 0,
        FAST: 100,
        NORMAL: 300,
        SLOW: 500
      }

      // When
      const {moleculeAccordionAnimationDuration: actual} = library
      const {NONE, FAST, NORMAL, SLOW, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAccordionHeaderIconPosition', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAccordionHeaderIconPosition: actual} = library

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
      const {moleculeAccordionHeaderIconPosition: actual} = library
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

  describe('moleculeAccordionHeaderLabelWraps', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAccordionHeaderLabelWraps: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NO_WRAP: 'noWrap',
        WRAP: 'wrap'
      }

      // When
      const {moleculeAccordionHeaderLabelWraps: actual} = library
      const {NO_WRAP, WRAP, ...others} = actual

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

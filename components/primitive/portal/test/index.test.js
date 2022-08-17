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
import getComponent from './getComponent.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Portal} = pkg
  const TRIGGER_CLASS = 'trigger-class'
  const TARGET_CLASS = 'target-class'
  const Component = getComponent({
    triggerClass: TRIGGER_CLASS,
    targetClass: TARGET_CLASS,
    component: Portal
  })
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['default']

    // When
    const {default: PrimitivePortal, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Portal.displayName, () => {
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

    it('should render null', () => {
      // Given
      const props = {}

      // When
      const {container} = setup(props)
      const target = container.querySelector(`.${TARGET_CLASS}`)
      const trigger = container.querySelector(`.${TRIGGER_CLASS}`)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)

      expect(trigger.innerHTML).to.be.a('string')
      expect(trigger.innerHTML).to.have.lengthOf(0)

      expect(target.innerHTML).to.be.a('string')
      expect(target.innerHTML).to.have.lengthOf(0)
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

    it('should add a portal to the right dom place', () => {
      // Given
      const props = {
        children: <div>portal-test</div>
      }

      // When
      const {container} = setup(props)
      const target = container.querySelector(`.${TARGET_CLASS}`)
      const trigger = container.querySelector(`.${TRIGGER_CLASS}`)

      // Then
      expect(trigger.innerHTML).to.be.a('string')
      expect(trigger.innerHTML).to.have.lengthOf(0)

      expect(target.innerHTML).to.be.a('string')
      expect(target.innerHTML).to.not.have.lengthOf(0)
    })
  })
})

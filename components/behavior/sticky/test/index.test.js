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
  const {default: Component, BehaviorStickyProvider} = pkg
  const TestedComponent = props => (
    <BehaviorStickyProvider>
      <Component {...props} />
    </BehaviorStickyProvider>
  )
  const setup = setupEnvironment(TestedComponent)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'BehaviorStickyScrollUp',
      'BehaviorStickyProvider',
      'BehaviorSticky',
      'default'
    ]

    // When
    const {
      BehaviorStickyProvider,
      BehaviorStickyScrollUp,
      BehaviorSticky,
      default: BehaviorStickyDefault,
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

    it.skip('example', () => {
      // Example TO BE DELETED!!!!

      // Given
      // const props = {}

      // When
      // const {getByRole} = setup(props)

      // Then
      // expect(getByRole('button')).to.have.text('HOLA')
      expect(true).to.be.eql(false)
    })
  })
})

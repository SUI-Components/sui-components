/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {createRef} from 'react'

chai.use(chaiDOM)

describe('molecule/autosuggest', () => {
  const Component = MoleculeAutosuggest
  const setup = setupEnvironment(Component)

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
    const props = {className: 'extended-classNames'}
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  describe('forwardRef', () => {
    it('should return refMoleculeAutosuggest forwardRef html div element when giving a ref to the component', () => {
      // Given
      const props = {}
      const ref = createRef()

      // When
      const component = <Component {...props} refMoleculeAutosuggest={ref} />
      const div = document.createElement('div')
      ReactDOM.render(component, div)

      // Then
      expect(ref.current).to.not.equal(undefined)
      expect(ref.current.nodeName).to.equal('DIV')
    })

    it('should return refMoleculeAutosuggestInput forwardRef html input element when giving a ref to the component', () => {
      // Given
      const props = {}
      const ref = createRef()

      // When
      const component = (
        <Component {...props} refMoleculeAutosuggestInput={ref} />
      )
      const div = document.createElement('div')
      ReactDOM.render(component, div)

      // Then
      expect(ref.current).to.not.equal(undefined)
      expect(ref.current.nodeName).to.equal('INPUT')
    })
  })
})

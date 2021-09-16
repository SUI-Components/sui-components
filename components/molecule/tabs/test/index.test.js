/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {MoleculeTab, MoleculeTabs} from 'components/molecule/tabs/src'

chai.use(chaiDOM)

describe('molecule/tabs', () => {
  const Component = MoleculeTabs
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

  it('should display the active content', () => {
    // Given
    const content = 'Content 1'
    const props = {
      children: [
        <MoleculeTab key={0} label="Tab 1" active>
          {content}
        </MoleculeTab>,
        <MoleculeTab key={1} label="Tab 2">
          Content 2
        </MoleculeTab>
      ]
    }

    // When
    const {getByText} = setup(props)

    // Then
    expect(getByText(content).innerHTML).to.equal(content)
  })

  it('should display the active content given count props', () => {
    // Given
    const content = 'Content 1'
    const count = ['3', '-3', '0']
    const props = {
      children: [
        <MoleculeTab key={0} label="Tab 1" count={count[0]} active>
          {content}
        </MoleculeTab>,
        <MoleculeTab key={1} label="Tab 2" count={count[1]}>
          Content 2
        </MoleculeTab>,
        <MoleculeTab key={2} label="Tab 3" count={count[2]}>
          Content 3
        </MoleculeTab>
      ]
    }

    // When
    const {getByText} = setup(props)

    // Then
    expect(getByText(content).innerHTML).to.equal(content)
    expect(getByText(count[0].toString()).innerHTML).to.equal(
      count[0].toString()
    )
    expect(getByText(count[1].toString()).innerHTML).to.equal(
      count[1].toString()
    )
    expect(getByText(count[2].toString()).innerHTML).to.equal(
      count[2].toString()
    )
  })
})

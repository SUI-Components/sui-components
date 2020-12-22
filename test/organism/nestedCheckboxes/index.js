/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeCheckboxField from '../../../components/molecule/checkboxField'

chai.use(chaiDOM)

describe('organism/nestedCheckboxes', () => {
  const Component = OrganismNestedCheckboxes
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      children: [
        {id: 'nested-01', label: 'Nested 1', checked: true},
        {id: 'nested-02', label: 'Nested 2', checked: false},
        {id: 'nested-03', label: 'Nested 3', checked: true},
        {id: 'nested-04', label: 'Nested 4', checked: true},
        {id: 'nested-05', label: 'Nested 5', checked: true}
      ].map(({checked, id, label}, index) => (
        <MoleculeCheckboxField
          key={id}
          id={id}
          checked={checked}
          checkedIcon={() => null}
          intermediateIcon={() => null}
          onChange={() => null}
          label={label}
        />
      ))
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
    const props = {
      children: [
        {id: 'nested-01', label: 'Nested 1', checked: true},
        {id: 'nested-02', label: 'Nested 2', checked: false},
        {id: 'nested-03', label: 'Nested 3', checked: true},
        {id: 'nested-04', label: 'Nested 4', checked: true},
        {id: 'nested-05', label: 'Nested 5', checked: true}
      ].map(({checked, id, label}, index) => (
        <MoleculeCheckboxField
          key={id}
          id={id}
          checked={checked}
          checkedIcon={() => null}
          intermediateIcon={() => null}
          onChange={() => null}
          label={label}
        />
      ))
    }

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

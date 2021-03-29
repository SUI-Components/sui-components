/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import BreadcrumbBasic from '../../../components/molecule/breadcrumb/src'

chai.use(chaiDOM)

describe('molecule/breadcrumb', () => {
  const Component = BreadcrumbBasic
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      items: [
        {
          label: 'item 0'
        },
        {
          label: 'item 1'
        }
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
    const props = {
      items: [
        {
          label: 'item 0'
        },
        {
          label: 'item 1'
        }
      ]
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

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('MoleculeAvatar', () => {
  const Component = MoleculeAvatar
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

  it('should not render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should render default fallback icon if no name or src is provided', () => {
    // Given
    const props = {}

    // When
    const {getByRole} = setup(props)

    // Then
    expect(getByRole('img')).to.be.visible
  })

  it('should render custom fallback icon if no name or src is provided', () => {
    // Given
    const testId = 'fallback-icon'
    const props = {
      fallbackIcon: <i data-testid={testId} />
    }

    // When
    const {getByTestId} = setup(props)
    const fallbackIconEl = getByTestId(testId)

    // Then
    expect(fallbackIconEl).to.be.visible
    expect(fallbackIconEl.getAttribute('role')).to.be.eql('img')
  })

  it('should render name if no src is provided', () => {
    // Given
    const name = 'Jon Snow'
    const props = {
      name
    }

    // When
    const {getByText} = setup(props)
    const nameEl = getByText('JS')

    // Then
    expect(nameEl).to.be.visible
    expect(nameEl.getAttribute('aria-label')).to.be.eql(name)
  })

  it('should render image if src is provided', () => {
    // Given
    const name = 'Jon Snow'
    const props = {
      name,
      src:
        'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest?cb=20190714094440'
    }

    // When
    const {getByAltText} = setup(props)

    // Then
    expect(getByAltText(name)).to.be.visible
  })

  it('should render skeleton if loading', () => {
    // Given
    const skeletonTestId = 'skeleton'
    const childTestId = 'child'
    const props = {
      isLoading: true,
      skeleton: <span data-testid={skeletonTestId} />,
      children: <div data-testid={childTestId} />
    }

    // When
    const {getByTestId, queryByTestId} = setup(props)

    // Then
    expect(getByTestId(skeletonTestId)).to.be.visible
    expect(queryByTestId(childTestId)).to.be.null
  })

  it('should render badge', () => {
    // Given
    const testId = 'badge'
    const props = {
      children: <MoleculeAvatar.Badge data-testid={testId} />
    }

    // When
    const {getByTestId} = setup(props)

    // Then
    expect(getByTestId(testId)).to.be.visible
  })
})

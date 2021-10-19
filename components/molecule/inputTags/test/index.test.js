/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/inputTags', () => {
  const Component = MoleculeInputTags
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
    const props = {
      className: 'extended-classNames'
    }
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  describe('when the is disabled', () => {
    it('should be disabled', () => {
      // Given
      const props = {disabled: true}

      // When
      const {queryByRole} = setup(props)
      const input = queryByRole('textbox')

      // Then
      expect(input).to.be.null
    })
  })

  describe('when has placeholder', () => {
    it('should display the placeholder if no tags avaiable', () => {
      // Given
      const props = {placeholder: 'Type your favorite beetle'}

      // When
      const {getByPlaceholderText} = setup(props)
      const expected = getByPlaceholderText(props.placeholder)

      // Then
      expect(expected).to.be.visible
    })

    it('should not display the placeholder after adding tags', async () => {
      // Given
      const props = {placeholder: 'Type your favorite beetle', tags: ['Lenon']}

      // When
      const {queryByPlaceholderText} = setup(props)
      const expected = queryByPlaceholderText(props.placeholder)

      // then
      expect(expected).to.be.null
    })
  })

  describe('when has maxTags', () => {
    it('should allow add tags if max not reached', () => {
      // Given
      const props = {
        maxTags: 4,
        tags: []
      }

      // When
      const {getByRole} = setup(props)
      const expected = getByRole('textbox')

      // Then
      expect(expected).to.be.visible
    })

    it('should not allow add tags if max reached', () => {
      // Given
      const props = {
        maxTags: 4,
        tags: ['Paul', 'John', 'Ringo', 'George']
      }

      // When
      const {queryByRole} = setup(props)
      const expected = queryByRole('textbox')

      // Then
      expect(expected).to.be.null
    })
  })
})

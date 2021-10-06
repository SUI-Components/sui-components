/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('atom/switch', () => {
  const Component = AtomSwitch
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      name: 'name',
      label: 'label'
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
      name: 'name',
      label: 'label'
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should NOT extend classNames', () => {
    // Given
    const props = {
      className: 'extended-classNames',
      name: 'name',
      label: 'label'
    }
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  it('should render single type with left label', () => {
    // Given
    const props = {label: 'label', name: 'name', type: 'single'}

    // When
    const {getByText} = setup(props)

    // Then
    const label = getByText(props.label)
    const childNodes = label.parentElement.childNodes

    expect(childNodes[0]).to.be.eql(label)
  })

  it('should render single type with right label', () => {
    // Given
    const props = {labelRight: 'labelRight', name: 'name', type: 'single'}

    // When
    const {getByText} = setup(props)

    // Then
    const label = getByText(props.labelRight)
    const childNodes = label.parentElement.childNodes

    expect(childNodes[1]).to.be.eql(label)
  })
})

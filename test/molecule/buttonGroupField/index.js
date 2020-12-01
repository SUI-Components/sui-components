/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/buttonGroupField', () => {
  const Component = MoleculeButtonGroupField
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      children: (
        <>
          <div>BUTTON 1</div>
          <div>BUTTON 2</div>
        </>
      )
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
      children: (
        <>
          <div>BUTTON 1</div>
          <div>BUTTON 2</div>
        </>
      )
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should see a label before button group', () => {
    // Given
    const props = {
      id: 'testId',
      label: 'Test Label',
      helpTest: 'Test description here',
      children: (
        <>
          <div>BUTTON 1</div>
          <div>BUTTON 2</div>
        </>
      )
    }

    // When
    const {getByText} = setup(props)

    // Then
    const expected = getByText(props.label)
    expect(expected).to.be.exist
  })

  it('should see successHelpText after button group', () => {
    // Given
    const props = {
      id: 'testId',
      label: 'Test Label',
      successText: 'Test Everything ok!',
      children: (
        <>
          <div>BUTTON 1</div>
          <div>BUTTON 2</div>
        </>
      )
    }

    // When
    const {getByText} = setup(props)

    // Then
    const expected = getByText(props.successText)
    expect(expected).to.be.exist
  })

  it('should see errorHelpText after button group', () => {
    // Given
    const props = {
      id: 'testId',
      label: 'Test Label',
      errorText: 'Test All wrong!',
      children: (
        <>
          <div>BUTTON 1</div>
          <div>BUTTON 2</div>
        </>
      )
    }

    // When
    const {getByText} = setup(props)

    // Then
    const expected = getByText(props.errorText)
    expect(expected).to.be.exist
  })

  it('should see alertHelpText after button group', () => {
    // Given
    const props = {
      id: 'testId',
      label: 'Test Label',
      alertText: 'Test Alert!!!',
      children: (
        <>
          <div>BUTTON 1</div>
          <div>BUTTON 2</div>
        </>
      )
    }

    // When
    const {getByText} = setup(props)

    // Then
    const expected = getByText(props.alertText)
    expect(expected).to.be.exist
  })
})

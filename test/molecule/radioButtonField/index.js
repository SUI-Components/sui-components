/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/radioButtonField', () => {
  const Component = MoleculeRadioButtonField
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

  describe('props', () => {
    describe('label & nodeLabel', () => {
      it('should render the empty component if there is not label or nodeLabel props', async () => {
        // Given
        const props = {}

        // When
        const {container} = setup(props)

        // Then
        expect(container).to.be.not.undefined
      })

      it('should render the component if there is label', async () => {
        // Given
        const props = {
          label: 'label'
        }

        // When
        const {container, getByText} = setup(props)

        // Then
        const labelElement = getByText(props.label)
        expect(container).to.be.not.undefined
        expect(labelElement).to.be.not.undefined
        expect(labelElement.innerText).to.equal(props.label)
        expect(labelElement.classList.contains('sui-AtomLabel')).to.be.true
      })

      it('should render the component if there is nodeLabel', async () => {
        // Given
        const text = 'nodeLabel'
        const props = {
          nodeLabel: <div className="testNodeLabel">{text}</div>
        }

        // When
        const {container, getByText} = setup(props)

        // Then
        const labelElement = getByText(text)
        expect(container).to.be.not.undefined
        expect(labelElement).to.be.not.undefined
        expect(labelElement.innerText).to.equal(text)
        expect(labelElement.classList.contains('testNodeLabel')).to.be.true
      })

      it('should render the component with label value if there is label and nodeLabel props', async () => {
        // Given
        const text = 'label'
        const props = {
          label: text,
          nodeLabel: <div className="testNodeLabel">{text}</div>
        }

        // When
        const {container, getByText} = setup(props)

        // Then
        const labelElement = getByText(text)
        expect(container).to.be.not.undefined
        expect(labelElement).to.be.not.undefined
        expect(labelElement.innerText).to.equal(props.label)
        expect(labelElement.classList.contains('sui-AtomLabel')).to.be.true
        expect(labelElement.classList.contains('testNodeLabel')).to.be.false
      })
    })
  })
})

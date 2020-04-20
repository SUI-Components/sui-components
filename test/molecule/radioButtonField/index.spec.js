/* eslint react/jsx-no-undef:0 */

import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeRadioButtonField from '../../../components/molecule/radioButtonField/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const setup = setupBuilder(childrenComponent => childrenComponent)(
  MoleculeRadioButtonField
)

describe('molecule/radioButtonField', () => {
  renderTest({Component: MoleculeRadioButtonField})()

  nullishTest({setup})()

  describe('props', () => {
    describe('label & nodeLabel', () => {
      it('should render the empty component if there is not label or nodeLabel props', async () => {
        // Given
        // When
        const {container} = setup()
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

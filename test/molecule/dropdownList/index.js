/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */

import React from 'react'
import {render} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeDropdownList from '../../../components/molecule/dropdownList/src/index'
import MoleculeDropdownOption from '../../../components/molecule/dropdownOption/src/index'

chai.use(chaiDOM)

const setupBuilder = Component => props => (
  renderFn = () => <Component {...props} />
) => {
  const container = document.createElement('div')
  container.setAttribute('id', 'test-container')
  const utils = render(renderFn(), {
    container: document.body.appendChild(container)
  })
  return utils
}

const setup = setupBuilder(MoleculeDropdownList)

const testDefaultProps = {
  children: (
    <>
      {Array(5)
        .fill()
        .map((value, index) => (
          <MoleculeDropdownOption value={index} key={index}>
            {index}
          </MoleculeDropdownOption>
        ))}
    </>
  )
}

describe('molecule/dropdownList', () => {
  describe('props', () => {
    describe('visible', () => {
      it('should render the children if visible is not defined', async () => {
        // Given
        const props = {}
        // When
        const {container, getByText} = setup({
          ...testDefaultProps,
          ...props
        })()
        // Then
        const element = getByText('1')
        expect(container).to.be.not.undefined
        expect(element).to.be.not.undefined
      })

      it('should render the children if it is visible', async () => {
        // Given
        const props = {
          visible: true
        }
        // When
        const {container, getByText} = setup({
          ...testDefaultProps,
          ...props
        })()
        // Then
        const element = getByText('1')
        expect(container).to.be.not.undefined
        expect(element).to.be.not.undefined
      })

      it('should render the children if it is not visible', async () => {
        // Given
        const props = {
          visible: false
        }
        // When
        const {container} = setup({
          ...testDefaultProps,
          ...props
        })()
        // Then
        expect(container).to.be.not.undefined
        expect(container.children.length).to.be.equal(1)
      })

      it('should render the children if it is not visible but alwaysRender is enabled', async () => {
        // Given
        const props = {
          alwaysRender: true,
          visible: false
        }
        // When
        const {container} = setup({
          ...testDefaultProps,
          ...props
        })()
        // Then
        expect(container).to.be.not.undefined
        expect(container.children.length).to.be.equal(1)
      })

      it('should NOT render the children if it is not visible and alwaysRender is disabled', async () => {
        // Given
        const props = {
          alwaysRender: false,
          visible: false
        }
        // When
        const {container} = setup({
          ...testDefaultProps,
          ...props
        })()
        // Then
        expect(container).to.be.not.undefined
        expect(container.children.length).to.be.equal(0)
      })
    })
  })
})

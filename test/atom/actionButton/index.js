import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render, getByText} from '@testing-library/react'

chai.use(chaiDOM)

const BUTTON_TEXT = 'Lorem Ipsum'

const container = document.body

const Icon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m6.3506 6.3506 2.649 2.649h-6v-6l1.938 1.938c1.842-1.849 4.347-2.938 7.062-2.938 5.515 0 10 4.486 10 10h-2c0-4.411-3.588-8-8-8-2.172 0-4.176.872-5.649 2.351zm11.2988 11.2988-2.649-2.649h6v6l-1.938-1.939c-1.842 1.85-4.347 2.939-7.062 2.939-5.515 0-10-4.486-10-10h2c0 4.411 3.588 8 8 8 2.172 0 4.176-.872 5.649-2.351z" />
    </svg>
  )
}

const createComponent = () => {
  return <AtomActionButton icon={Icon}>{BUTTON_TEXT}</AtomActionButton>
}

describe('atom/actionButton', () => {
  beforeEach(async () => {
    const component = createComponent()
    render(component)
  })

  it('Displays the expected button', () => {
    const expectedLabel = getByText(container, BUTTON_TEXT)
    expect(expectedLabel).to.be.exist
  })

  it('Displays the expected text', () => {
    const actionButtonElement = getByText(container, BUTTON_TEXT)
    expect(actionButtonElement.innerText).to.be.equal(BUTTON_TEXT)
  })
})

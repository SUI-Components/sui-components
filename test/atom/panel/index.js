/**
 * Remember: YOUR COMPONENT IS DEFINE GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */

// import React from 'react'
// import {render} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('AtomButton', () => {
  it('Render', () => {
    // Example TO BE DELETED!!!!
    // const {getByRole} = render(<AtomButton>HOLA</AtomButton>)
    // expect(getByRole('button')).to.have.text('HOLA')
    expect(true).to.be.eql(false)
  })
})
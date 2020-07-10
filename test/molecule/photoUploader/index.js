import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('MoleculePhotoUploader', () => {
  it.skip('Render', () => {
    render(<MoleculePhotoUploader />)
    expect(true).to.be.eql(false)
  })
})

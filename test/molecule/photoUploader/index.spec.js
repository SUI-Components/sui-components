/* eslint react/jsx-no-undef:0 */

// import React from 'react'

import chai from 'chai'
import chaiDOM from 'chai-dom'
import chaiSnapshot from 'mocha-chai-snapshot'

import MoleculePhotoUploader from '../../../components/molecule/photoUploader/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiSnapshot)
chai.use(chaiDOM)

const setup = setupBuilder(childrenComponent => childrenComponent)(
  MoleculePhotoUploader
)

describe('organism/nestedCheckboxes', () => {
  renderTest({Component: MoleculePhotoUploader})()

  nullishTest({setup})()
})

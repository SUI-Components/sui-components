/* eslint react/jsx-no-undef:0 */

// import React from 'react'

import chai from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeSelectPopover from '../../../components/molecule/selectPopover/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const setup = setupBuilder(childrenComponent => childrenComponent)(
  MoleculeSelectPopover
)

describe('molecule/tabs', () => {
  renderTest({Component: MoleculeSelectPopover})()

  nullishTest({setup, isNull: true})()

  describe('props', () => {})
})

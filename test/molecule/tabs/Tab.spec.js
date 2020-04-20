/* eslint react/jsx-no-undef:0 */

import React from 'react'

import chai from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeTabs, {MoleculeTab} from '../../../components/molecule/tabs/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const setup = setupBuilder(childElement => (
  <MoleculeTabs>{childElement}</MoleculeTabs>
))(MoleculeTab)

describe('molecule/tabs', () => {
  describe('tab', () => {
    renderTest({Component: MoleculeTab})()

    nullishTest({setup})()

    describe('props', () => {})
  })
})

/* eslint react/jsx-no-undef:0 */

import React from 'react'

import chai from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeTabs, {MoleculeTab} from '../../../components/molecule/tabs/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const TestedComponent = props => (
  <MoleculeTabs>
    <MoleculeTab />
  </MoleculeTabs>
)

const setup = setupBuilder(childrenComponent => childrenComponent)(
  TestedComponent
)

describe('molecule/tabs', () => {
  describe('tab', () => {
    renderTest({Component: MoleculeTab})()

    renderTest({Component: TestedComponent})(
      'should render in a MoleculeTab without crushing'
    )

    nullishTest({setup})()

    describe('props', () => {})
  })
})

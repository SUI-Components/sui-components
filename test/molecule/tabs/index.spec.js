/* eslint react/jsx-no-undef:0 */

// import React from 'react'

import chai from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeTabs from '../../../components/molecule/tabs/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const setup = setupBuilder()(MoleculeTabs)

describe('molecule/tabs', () => {
  renderTest({Component: MoleculeTabs})()

  nullishTest({setup})()

  describe('props', () => {})
})

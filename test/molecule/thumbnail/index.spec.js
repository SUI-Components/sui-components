/* eslint react/jsx-no-undef:0 */

// import React from 'react'

import chai from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeThumbnail from '../../../components/molecule/thumbnail/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const setup = setupBuilder()(MoleculeThumbnail)

describe('molecule/tumbnail', () => {
  renderTest({Component: MoleculeThumbnail})()

  nullishTest({setup})()

  describe('props', () => {})
})

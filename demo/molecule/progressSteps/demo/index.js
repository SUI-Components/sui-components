/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import './index.scss'

import {configBasic, configWithIcons} from './config'
import DynamicProgressSteps from './DynamicProgressSteps'

const BASE_CLASS_DEMO = 'DemoMoleculeProgressSteps'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`
const CLASS_DEMO_CONTENT_STEP = `${BASE_CLASS_DEMO}-contentStep`

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculeProgressSteps</code>
      </h1>
      <h2>Basic</h2>

      <div className={CLASS_DEMO_SECTION}>
        <DynamicProgressSteps config={configBasic} />
      </div>

      <h2>w/ Icons</h2>

      <div className={CLASS_DEMO_SECTION}>
        <DynamicProgressSteps config={configWithIcons} />
      </div>
    </div>
  )
}

export default Demo

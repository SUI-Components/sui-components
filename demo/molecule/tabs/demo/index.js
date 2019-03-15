/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import cx from 'classnames'

// import LayoutMediaQuery from '@s-ui/react-layout-media-query'
import MoleculeTabs, {
  MoleculeTab,
  moleculeTabsTypes,
  moleculeTabsVariants
} from '../../../../components/molecule/tabs/src'

import {configBasic, configBasic6Steps, configWithIcons} from './config'

import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeTabs'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_VERTICAL = `${CLASS_DEMO_SECTION}--vertical`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`
const CLASS_DEMO_CONTENT_STEP = `${BASE_CLASS_DEMO}-contentStep`

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculeTabs</code>
      </h1>
      <h2>Dynamic</h2>

      <h3>Basic</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeTabs>
          {Object.values(configBasic).map(({content, ...props}, index) => (
            <MoleculeTab key={index} numTab={index + 1} {...props}>
              {content}
            </MoleculeTab>
          ))}
        </MoleculeTabs>
      </div>

      <h3>Variant → HIGHLIGHTED</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeTabs variant={moleculeTabsVariants.HIGHLIGHTED}>
          {Object.values(configBasic).map(({content, ...props}, index) => (
            <MoleculeTab key={index} numTab={index + 1} {...props}>
              {content}
            </MoleculeTab>
          ))}
        </MoleculeTabs>
      </div>

      <h3>w/ Icons</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeTabs>
          {Object.values(configWithIcons).map(({content, ...props}, index) => (
            <MoleculeTab key={index} numTab={index + 1} {...props}>
              {content}
            </MoleculeTab>
          ))}
        </MoleculeTabs>
      </div>

      <h3>w/ Icons (Type → FULLWIDTH)</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeTabs type={moleculeTabsTypes.FULLWIDTH}>
          {Object.values(configWithIcons).map(({content, ...props}, index) => (
            <MoleculeTab key={index} numTab={index + 1} {...props}>
              {content}
            </MoleculeTab>
          ))}
        </MoleculeTabs>
      </div>

      <h3>w/ Icons (Type → VERTICAL)</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeTabs type={moleculeTabsTypes.VERTICAL}>
          {Object.values(configWithIcons).map(({content, ...props}, index) => (
            <MoleculeTab key={index} numTab={index + 1} {...props}>
              {content}
            </MoleculeTab>
          ))}
        </MoleculeTabs>
      </div>
    </div>
  )
}

export default Demo

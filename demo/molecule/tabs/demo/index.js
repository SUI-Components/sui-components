/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import cx from 'classnames'

// import LayoutMediaQuery from '@s-ui/react-layout-media-query'
import MoleculeTabs, {
  MoleculeTabs as StaticMoleculeTabs,
  MoleculeTab,
  moleculeTabsTypes,
  moleculeTabsVariants
} from '../../../../components/molecule/tabs/src'

import {configBasic, configBasic6Steps, configWithIcons} from './config'
import {IconLineBackup, IconLineDashboard, IconLineExtension} from './Icons'

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

      <h3>w/ Icons (Type → VERTICAL & Variant → HIGHLIGHTED)</h3>
      <div className={CLASS_DEMO_SECTION}>
        <MoleculeTabs
          type={moleculeTabsTypes.VERTICAL}
          variant={moleculeTabsVariants.HIGHLIGHTED}
        >
          {Object.values(configWithIcons).map(({content, ...props}, index) => (
            <MoleculeTab key={index} numTab={index + 1} {...props}>
              {content}
            </MoleculeTab>
          ))}
        </MoleculeTabs>
      </div>

      <h2>Static</h2>

      <h3>Basic</h3>
      <div className={CLASS_DEMO_SECTION}>
        <StaticMoleculeTabs>
          <MoleculeTab numTab="1" label="Tab 1">
            <div>
              <h1>Content Tab 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </MoleculeTab>
          <MoleculeTab numTab="2" label="Tab 2" active>
            <div>
              <h1>Content Tab 2</h1>
              <p>
                Cumque ad corrupti id neque aperiam deleniti voluptate iusto
                excepturi rem officia qui nihil natus, quos doloribus numquam
                laboriosam veritatis?
              </p>
            </div>
          </MoleculeTab>
          <MoleculeTab numTab="3" label="Tab 3">
            <div>
              <h1>Content Tab 3</h1>
              <p>
                Deleniti voluptate iusto excepturi rem officia qui nihil natus,
                quos doloribus numquam
              </p>
            </div>
          </MoleculeTab>
        </StaticMoleculeTabs>
      </div>

      <h3>w/ Icons</h3>
      <div className={CLASS_DEMO_SECTION}>
        <StaticMoleculeTabs>
          <MoleculeTab
            numTab="1"
            label="Tab 1"
            icon={<IconLineBackup />}
            active
          >
            <div>
              <h1>Content Tab 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </MoleculeTab>
          <MoleculeTab numTab="2" label="Tab 2" icon={<IconLineDashboard />}>
            <div>
              <h1>Content Tab 2</h1>
              <p>
                Cumque ad corrupti id neque aperiam deleniti voluptate iusto
                excepturi rem officia qui nihil natus, quos doloribus numquam
                laboriosam veritatis?
              </p>
            </div>
          </MoleculeTab>
          <MoleculeTab
            numTab="3"
            label="Tab 3"
            icon={<IconLineExtension />}
            disabled
          >
            <div>
              <h1>Content Tab 3</h1>
              <p>
                Deleniti voluptate iusto excepturi rem officia qui nihil natus,
                quos doloribus numquam
              </p>
            </div>
          </MoleculeTab>
        </StaticMoleculeTabs>
      </div>
    </div>
  )
}

export default Demo

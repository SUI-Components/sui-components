/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import cx from 'classnames'

import LayoutMediaQuery from '@s-ui/react-layout-media-query'
import MoleculeProgressSteps, {
  MoleculeProgressStep,
  statuses
} from '../../../../components/molecule/progressSteps/src'

import './index.scss'

import {FillCheckIcon} from './Icons'
import {configBasic, configBasic6Steps, configWithIcons} from './config'
import DynamicProgressSteps from './DynamicProgressSteps'

const BASE_CLASS_DEMO = 'DemoMoleculeProgressSteps'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_VERTICAL = `${CLASS_DEMO_SECTION}--vertical`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`
const CLASS_DEMO_CONTENT_STEP = `${BASE_CLASS_DEMO}-contentStep`

console.log(configBasic)
const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculeProgressSteps</code>
      </h1>
      <h2>Dynamic</h2>
      <h3>Basic</h3>

      <div className={CLASS_DEMO_SECTION}>
        <DynamicProgressSteps config={configBasic6Steps} />
      </div>

      <h3>w/ Icons</h3>

      <div className={CLASS_DEMO_SECTION}>
        <DynamicProgressSteps config={configWithIcons} />
      </div>

      <h2>Static</h2>

      <h3>Basic</h3>

      <div className={CLASS_DEMO_SECTION}>
        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>
          {Object.values(configBasic).map(
            ({status, label, content, icon}, index) => (
              <MoleculeProgressStep
                key={index}
                label={label}
                status={status}
                icon={icon}
              >
                {content}
              </MoleculeProgressStep>
            )
          )}
        </MoleculeProgressSteps>
      </div>

      <h3>Basic 6 steps</h3>

      <div className={CLASS_DEMO_SECTION}>
        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>
          {Object.values(configBasic).map(
            ({status, label, content, icon}, index) => (
              <MoleculeProgressStep
                key={index}
                label={label}
                status={status}
                icon={icon}
              >
                {content}
              </MoleculeProgressStep>
            )
          )}
        </MoleculeProgressSteps>
      </div>

      <h3>Vertical</h3>

      <div className={cx(CLASS_DEMO_SECTION, CLASS_DEMO_SECTION_VERTICAL)}>
        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />} vertical>
          {Object.values(configBasic6Steps).map(
            ({status, label, content, icon}, index) => (
              <MoleculeProgressStep
                key={index}
                label={label}
                status={status}
                icon={icon}
              >
                {content}
              </MoleculeProgressStep>
            )
          )}
        </MoleculeProgressSteps>
      </div>

      <h3>Vertical w/ Icons</h3>

      <div className={cx(CLASS_DEMO_SECTION, CLASS_DEMO_SECTION_VERTICAL)}>
        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />} vertical>
          {Object.values(configWithIcons).map(
            ({status, label, content, icon}, index) => (
              <MoleculeProgressStep
                key={index}
                label={label}
                status={status}
                icon={icon}
              >
                {content}
              </MoleculeProgressStep>
            )
          )}
        </MoleculeProgressSteps>
      </div>
    </div>
  )
}

export default Demo

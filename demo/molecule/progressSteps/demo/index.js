/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import MoleculeProgressSteps, {
  MoleculeProgressStep,
  statuses
} from '../../../../components/molecule/progressSteps/src'

import {FillCheckIcon, FillEditPaper, LineUserIcon} from './Icons'
import './index.scss'

const BASE_CLASS_DEMO = 'DemoMoleculeProgressSteps'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculeProgressSteps</code>
      </h1>
      <h2>Basic</h2>

      <div className={CLASS_DEMO_SECTION}>
        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>
          <MoleculeProgressStep label="Step 1" status={statuses.VISITED} />
          <MoleculeProgressStep label="Step 2" status={statuses.ACTIVE} />
          <MoleculeProgressStep label="Step 3" status={statuses.NORMAL} />
          <MoleculeProgressStep label="Step 4" status={statuses.NORMAL} />
        </MoleculeProgressSteps>
      </div>

      <h2>w/ Icons</h2>

      <div className={CLASS_DEMO_SECTION}>
        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>
          <MoleculeProgressStep
            label="Step 1"
            icon={<FillEditPaper />}
            status={statuses.VISITED}
          />
          <MoleculeProgressStep
            label="Step 2"
            icon={<LineUserIcon />}
            status={statuses.ACTIVE}
          />
          <MoleculeProgressStep
            label="Step 3"
            icon={<FillEditPaper />}
            status={statuses.NORMAL}
          />
          <MoleculeProgressStep
            label="Step 4"
            icon={<LineUserIcon />}
            status={statuses.NORMAL}
          />
        </MoleculeProgressSteps>
      </div>
    </div>
  )
}

export default Demo

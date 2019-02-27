/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import LayoutMediaQuery from '@s-ui/react-layout-media-query'

import MoleculeProgressSteps, {
  statuses
} from '../../../../components/molecule/progressSteps/src'
// import DynamicMoleculePagination from './DynamicMoleculePagination'
import {FillCheckIcon, FillEditPaper, LineUserIcon} from './Icons'
import './index.scss'

// const prevButtonText = 'Anterior'
// const nextButtonText = 'Siguiente'

// const onSelectNext = (_, {page}) => {
//   console.log(page)
// }
// const onSelectPrev = (_, {page}) => {
//   console.log(page)
// }
// const onSelectPage = (_, {page}) => {
//   console.log(page)
// }

// const Icons = {prevButtonIcon, nextButtonIcon}
// const Texts = {prevButtonText, nextButtonText}
// const OnClicks = {onSelectNext, onSelectPrev, onSelectPage}

const BASE_CLASS_DEMO = 'DemoMoleculeProgressSteps'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`

const configSteps = {
  1: {
    description: 'Step 1',
    icon: <FillEditPaper />,
    status: statuses.VISITED
  },
  2: {
    description: 'Step 2',
    icon: <LineUserIcon />,
    status: statuses.ACTIVE
  },
  3: {
    description: 'Step 3',
    icon: <FillEditPaper />,
    status: statuses.NORMAL
  },
  4: {
    description: 'Step 4',
    icon: <LineUserIcon />,
    status: statuses.NORMAL
  }
}

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>
        <code>MoleculeProgressSteps</code>
      </h1>
      <h2>Basic</h2>
      <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
        <MoleculeProgressSteps
          iconStepDone={<FillCheckIcon />}
          configSteps={configSteps}
        />
      </div>
    </div>
  )
}

export default Demo

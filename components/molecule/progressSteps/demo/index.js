/* eslint-disable react/prop-types, no-unused-vars, no-console */

import cx from 'classnames'

import LayoutMediaQuery from '@s-ui/react-layout-media-query'
import MoleculeProgressSteps, {
  MoleculeProgressStep
} from 'components/molecule/progressSteps/src'

import './index.scss'

import {IconFillCheck} from './Icons'
import {H1} from '@s-ui/documentation-library'
import {configBasic, configBasic6Steps, configWithIcons} from './config'
import DynamicProgressSteps from './DynamicProgressSteps'
import JustifyContentProgressBarArticle from './JustifyContentProgressBarArticle'

const BASE_CLASS_DEMO = 'DemoMoleculeProgressSteps'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_SECTION_VERTICAL = `${CLASS_DEMO_SECTION}--vertical`
const CLASS_DEMO_SECTION_RESPONSIVE = `${CLASS_DEMO_SECTION}-responsive`

const baseClass = 'DemoMoleculeProgressSteps'
const articleClass = `${baseClass}-article`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Progress Steps</H1>
        <JustifyContentProgressBarArticle className={articleClass} />
        <h2>Dynamic</h2>
        <h3>Basic (Responsive)</h3>
        <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
          <LayoutMediaQuery>
            {({S}) => {
              return (
                <DynamicProgressSteps
                  config={configBasic6Steps}
                  compressed={!S}
                />
              )
            }}
          </LayoutMediaQuery>
        </div>

        <h3>w/ Icons (Responsive)</h3>
        <div className={CLASS_DEMO_SECTION_RESPONSIVE}>
          <LayoutMediaQuery>
            {({S}) => {
              return (
                <DynamicProgressSteps
                  config={configWithIcons}
                  compressed={!S}
                />
              )
            }}
          </LayoutMediaQuery>
        </div>

        <h2>Static</h2>

        <h3>Basic</h3>
        <div className={CLASS_DEMO_SECTION}>
          <MoleculeProgressSteps iconStepDone={<IconFillCheck />}>
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

        <h3>Compressed</h3>
        <div className={CLASS_DEMO_SECTION}>
          <MoleculeProgressSteps iconStepDone={<IconFillCheck />} compressed>
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
          <MoleculeProgressSteps iconStepDone={<IconFillCheck />} vertical>
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
          <MoleculeProgressSteps iconStepDone={<IconFillCheck />} vertical>
            {Object.values(configWithIcons).map(
              ({status, label, content, icon, iconActive}, index) => (
                <MoleculeProgressStep
                  key={index}
                  label={label}
                  status={status}
                  icon={icon}
                  iconActive={iconActive}
                >
                  {content}
                </MoleculeProgressStep>
              )
            )}
          </MoleculeProgressSteps>
        </div>
      </div>
    </div>
  )
}

export default Demo

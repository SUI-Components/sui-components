import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  Paragraph,
  Code,
  Article,
  Label,
  Input,
  RadioButton,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import MoleculeProgressSteps, {
  MoleculeProgressStep,
  moleculeProgressStepsJustifyContentBar
} from '../src'
import {AtomTooltipTriggers} from '@s-ui/react-atom-tooltip/src'
import DelayArticle from '@s-ui/react-atom-tooltip-demo/DelayArticle'
import {IconFillCheck} from './Icons'
import {configBasic} from './config'

const JustifyContentProgressBarArticle = ({className}) => {
  const [
    isProgressBarAutoSizedLength,
    setIsProgressBarAutoSizedLength
  ] = useState(true)
  return (
    <Article className={className}>
      <H2>ProgressSteps Bar Alignment</H2>
      <Paragraph>
        <Code>progressBarJustifyContent</Code>
      </Paragraph>
      <Paragraph>
        <Code>isProgressBarAutoSizedLength</Code>
      </Paragraph>
      <RadioButton
        onClick={() =>
          setIsProgressBarAutoSizedLength(!isProgressBarAutoSizedLength)
        }
        checked={isProgressBarAutoSizedLength}
        label={`isProgressBarAutoSizedLength ${isProgressBarAutoSizedLength.toString()}`}
      />
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <MoleculeProgressSteps
            iconStepDone={<IconFillCheck />}
            isProgressBarAutoSizedLength={isProgressBarAutoSizedLength}
          >
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
        </Cell>
        <Cell>
          <MoleculeProgressSteps
            iconStepDone={<IconFillCheck />}
            isProgressBarAutoSizedLength={isProgressBarAutoSizedLength}
            vertical
          >
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
        </Cell>
      </Grid>
    </Article>
  )
}

JustifyContentProgressBarArticle.propTypes = {
  className: PropTypes.string
}

export default JustifyContentProgressBarArticle

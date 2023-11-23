import {useCallback, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Cell,
  Code,
  Grid,
  H2,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'

import MoleculeProgressSteps, {
  MoleculeProgressStep,
  moleculeProgressStepsJustifyContentBar,
  moleculeProgressStepsStatuses
} from '../src/index.js'
import {configBasic} from './config/index.js'
import {iconFillCheck} from './Icons/index.js'

const getStatus = (step, index) => {
  if (index + 1 === step) {
    return moleculeProgressStepsStatuses.ACTIVE
  } else if (index + 1 < step) {
    return moleculeProgressStepsStatuses.VISITED
  }
  return moleculeProgressStepsStatuses.NORMAL
}

const getLabel = (index, keys) => {
  if (index < Math.min(...keys)) {
    return 'start'
  } else if (index > Math.max(...keys)) {
    return 'end'
  }
  return `step ${index}`
}

const JustifyContentProgressBarArticle = ({className}) => {
  const [justifyContentBarStatus, setJustifyContentBarStatus] = useState()
  const [isCompressed, setIsCompressed] = useState(false)
  const [isVertical, setIsVertical] = useState(false)
  const [step, setStep] = useState(1)
  const setStatus = useCallback(
    step => {
      setStep(step)
    },
    [setStep]
  )
  return (
    <Article className={className}>
      <H2>ProgressSteps Bar Alignment</H2>
      <Paragraph>
        The progress steps path alignment can be custom aligned using the <Code>progressBarJustifyContent</Code> enum
        prop. It must be provided using one of the values defined under the{' '}
        <Code>moleculeProgressStepsJustifyContentBar</Code> different enum values:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Bold>LEGACY</Bold>: (default) step bars grow for getting the full-width area covered.
        </ListItem>
        <ListItem>
          Positional alignment:
          <UnorderedList>
            <ListItem>
              <Bold>CENTER</Bold>: pack items around the center
            </ListItem>
            <ListItem>
              <Bold>FLEX_START</Bold>: pack flex items from the start
            </ListItem>
            <ListItem>
              <Bold>FLEX_END</Bold>: pack flex items from the end
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup value={step} onChange={(event, value) => setStatus(value || 0)}>
            {[0, ...Object.keys(configBasic), Object.keys(configBasic).length + 1].map(stepValue => (
              <RadioButton
                key={`step ${parseInt(stepValue)}`}
                value={parseInt(stepValue)}
                checked={step === parseInt(stepValue)}
                label={getLabel(
                  stepValue,
                  Object.keys(configBasic).map(v => parseInt(v))
                )}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            value={justifyContentBarStatus}
            onChange={(event, value) => setJustifyContentBarStatus(value)}
          >
            {[undefined, ...Object.values(moleculeProgressStepsJustifyContentBar)].map(justifyContentValue => (
              <RadioButton
                key={`${justifyContentValue}`}
                value={justifyContentValue}
                checked={justifyContentBarStatus === justifyContentValue}
                label={`${justifyContentValue}`}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButton
            value={isCompressed}
            onClick={() => setIsCompressed(!isCompressed)}
            checked={isCompressed}
            label="compressed"
          />
        </Cell>
        <Cell>
          <RadioButton
            value={isVertical}
            onClick={() => setIsVertical(!isVertical)}
            checked={isVertical}
            label="vertical"
          />
        </Cell>
        <Cell>
          <MoleculeProgressSteps
            iconStepDone={iconFillCheck}
            progressBarJustifyContent={justifyContentBarStatus}
            compressed={isCompressed}
            vertical={isVertical}
          >
            {Object.values(configBasic).map(({label, content, icon}, index) => (
              <MoleculeProgressStep key={`${index}`} label={label} status={getStatus(step, index)} icon={icon}>
                {content}
              </MoleculeProgressStep>
            ))}
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

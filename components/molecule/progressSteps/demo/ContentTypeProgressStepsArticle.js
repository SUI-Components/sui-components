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
  moleculeProgressContentStyle,
  MoleculeProgressStep,
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

const DefaultProgressStepsArticle = ({className}) => {
  const [step, setStep] = useState(1)
  const [contentType, setContentType] = useState(moleculeProgressContentStyle.FIXED)

  const setStatus = useCallback(
    step => {
      setStep(step)
    },
    [setStep]
  )
  return (
    <Article className={className}>
      <H2>ProgressSteps Content Type</H2>
      <Paragraph>
        The progress steps content type can be custom using the <Code>contentStyle</Code> enum prop. It must be provided
        using one of the values defined under the <Code>moleculeProgressContentStyle</Code> different enum values:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          Content type values:
          <UnorderedList>
            <ListItem>
              <Bold>FIXED</Bold>: All tabs have the size of the highest tab content
            </ListItem>
            <ListItem>
              <Bold>FLUID</Bold>: Each tab is sized to fit its own content
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
          <RadioButtonGroup value={contentType} onChange={(event, value) => setContentType(value)}>
            <RadioButton
              value={moleculeProgressContentStyle.FIXED}
              checked={contentType === moleculeProgressContentStyle.FIXED}
              label="Fixed"
            />
            <RadioButton
              value={moleculeProgressContentStyle.FLUID}
              checked={contentType === moleculeProgressContentStyle.FLUID}
              label="Fluid"
            />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <MoleculeProgressSteps iconStepDone={iconFillCheck} contentStyle={contentType}>
            {Object.values(configBasic).map(({label, content, icon}, index) => (
              <MoleculeProgressStep key={index} label={label} status={getStatus(step, index)} icon={icon}>
                {content}
              </MoleculeProgressStep>
            ))}
          </MoleculeProgressSteps>
        </Cell>
      </Grid>
    </Article>
  )
}

DefaultProgressStepsArticle.propTypes = {
  className: PropTypes.string
}

export default DefaultProgressStepsArticle

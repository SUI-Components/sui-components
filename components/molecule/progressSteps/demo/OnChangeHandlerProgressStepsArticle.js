import {useCallback, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Grid,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import MoleculeProgressSteps, {
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

const OnChangeHandlerProgressStepsArticle = ({className}) => {
  const [step, setStep] = useState(1)
  const setStatus = useCallback(
    step => {
      setStep(step)
    },
    [setStep]
  )
  return (
    <Article className={className}>
      <H2>onChange</H2>
      <Paragraph>
        By default the progressSteps is horizontal extended and stretched (100%
        of its width)
      </Paragraph>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup
            value={step}
            onChange={(event, value) => setStatus(value || 0)}
          >
            {[
              0,
              ...Object.keys(configBasic),
              Object.keys(configBasic).length + 1
            ].map(stepValue => (
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
          <MoleculeProgressSteps
            iconStepDone={iconFillCheck}
            onChange={(event, {step}) => {
              setStatus(step)
            }}
          >
            {Object.values(configBasic).map(({label, content, icon}, index) => (
              <MoleculeProgressStep
                key={index}
                label={label}
                status={getStatus(step, index)}
                icon={icon}
              >
                {content}
              </MoleculeProgressStep>
            ))}
          </MoleculeProgressSteps>
        </Cell>
      </Grid>
    </Article>
  )
}

OnChangeHandlerProgressStepsArticle.propTypes = {
  className: PropTypes.string
}

export default OnChangeHandlerProgressStepsArticle

import {useCallback, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import MoleculeProgressSteps, {MoleculeProgressStep, moleculeProgressStepsStatuses} from '../src/index.js'
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

const CompressedProgressBarArticle = ({className}) => {
  const [isCompressed, setIsCompressed] = useState(true)
  const [isVertical, setIsVertical] = useState(false)
  const [hasLabel, setHasLabel] = useState(true)
  const [step, setStep] = useState(1)
  const setStatus = useCallback(
    step => {
      setStep(step)
    },
    [setStep]
  )
  return (
    <Article className={className}>
      <H2>Compressed</H2>
      <Paragraph>
        The progress bar has also a compressed Look and feel specially designed for small devices. It is the compressed
        mode and can be configured using the <Code>compressed</Code> boolean prop (default undefined). It works in
        vertical mode also.
      </Paragraph>
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
          <RadioButton value={hasLabel} onClick={() => setHasLabel(!hasLabel)} checked={hasLabel} label="hasLabel" />
        </Cell>
        <Cell>
          <MoleculeProgressSteps
            iconStepDone={iconFillCheck}
            compressed={isCompressed}
            vertical={isVertical}
            showLabel={hasLabel}
          >
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

CompressedProgressBarArticle.propTypes = {
  className: PropTypes.string
}

export default CompressedProgressBarArticle

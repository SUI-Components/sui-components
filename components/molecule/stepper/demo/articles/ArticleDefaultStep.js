import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import {StepsProvider} from '../../src/context/index.js'
import {moleculeStepperAlignment, moleculeStepperDesign, Step} from '../../src/index.js'

const steps = 3

const ArticleDefaultStep = ({className}) => {
  const [alignment, setAlignment] = useState(moleculeStepperAlignment.HORIZONTAL)
  const [design, setDesign] = useState(moleculeStepperDesign.DEFAULT)
  const [step, setStep] = useState(Math.ceil(steps / 2))
  return (
    <Article className={className}>
      <H2>Default Step</H2>
      <Paragraph>
        The package offers a default Step content but it can be customized also using the <Code>children</Code> prop of
        the <Code>Step</Code> component.
      </Paragraph>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            width: alignment === moleculeStepperAlignment.VERTICAL ? 'auto' : '100%',
            alignItems: alignment === moleculeStepperAlignment.VERTICAL ? 'flex-start' : 'unset',
            flexDirection: alignment === moleculeStepperAlignment.VERTICAL ? 'column' : 'row'
          }}
        >
          <StepsProvider alignment={alignment} design={design} steps={steps}>
            {Array(steps)
              .fill()
              .map((_, i) => (
                <Step
                  as="li"
                  key={i}
                  hasConnector
                  onClick={(event, {step}) => setStep(step)}
                  label="label"
                  step={i + 1}
                  visited={i + 1 < step}
                  current={step === i + 1}
                />
              ))}
          </StepsProvider>
        </div>
      </Box>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>step</Label>
        </Cell>
        <Cell>
          <Label>alignment</Label>
        </Cell>
        <Cell>
          <Label>design</Label>
        </Cell>
        <Cell>
          <RadioButtonGroup fullWidth value={step} onChange={(_, value) => value !== undefined && setStep(value)}>
            {Array(steps)
              .fill()
              .map((_, index) => (
                <RadioButton key={index} value={index + 1} label={index + 1} checked={index + 1 === step} />
              ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            fullWidth
            value={alignment}
            onChange={(_, value) => value !== undefined && setAlignment(value)}
          >
            {Object.values(moleculeStepperAlignment).map(moleculeStepperAlignmentValue => (
              <RadioButton
                key={moleculeStepperAlignmentValue}
                value={moleculeStepperAlignmentValue}
                label={moleculeStepperAlignmentValue}
                checked={moleculeStepperAlignmentValue === alignment}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup fullWidth value={design} onChange={(_, value) => value !== undefined && setDesign(value)}>
            {Object.values(moleculeStepperDesign).map(moleculeStepperDesignValue => (
              <RadioButton
                key={moleculeStepperDesignValue}
                value={moleculeStepperDesignValue}
                label={moleculeStepperDesignValue}
                checked={moleculeStepperDesignValue === design}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDefaultStep.displayName = 'ArticleDefaultStep'

ArticleDefaultStep.propTypes = {className: PropTypes.string}

export default ArticleDefaultStep

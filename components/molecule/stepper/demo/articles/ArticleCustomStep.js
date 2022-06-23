import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Grid,
  H2,
  H3,
  H4,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import {StepsProvider} from '../../src/context/index.js'
import {moleculeStepperAlignment, Step} from '../../src/index.js'
import DotCustomStep from '../customSteps/DotCustomStep/DotCustomStep.js'
import TextCustomStep from '../customSteps/TextCustomStep/TextCustomStep.js'

const steps = 5

const ArticleCustomStep = ({className}) => {
  const [alignment, setAlignment] = useState(
    moleculeStepperAlignment.HORIZONTAL
  )
  const [step, setStep] = useState(Math.ceil(steps / 2))
  return (
    <Article className={className}>
      <H2>Custom Step</H2>
      <Paragraph>
        The provided Step component can be also customized giving a children to
        its props. All the root elements given to the Step component will
        receive the Step props in order to manage it for any purpose.
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>step</Label>
        </Cell>
        <Cell>
          <Label>alignment</Label>
        </Cell>
        <Cell />
        <Cell>
          <RadioButtonGroup
            fullWidth
            value={step}
            onChange={(_, value) => value !== undefined && setStep(value)}
          >
            {Array(steps)
              .fill()
              .map((_, index) => (
                <RadioButton
                  key={index}
                  value={index + 1}
                  label={index + 1}
                  checked={index + 1 === step}
                />
              ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            fullWidth
            value={alignment}
            onChange={(_, value) => value !== undefined && setAlignment(value)}
          >
            {Object.values(moleculeStepperAlignment).map(
              moleculeStepperAlignmentValue => (
                <RadioButton
                  key={moleculeStepperAlignmentValue}
                  value={moleculeStepperAlignmentValue}
                  label={moleculeStepperAlignmentValue}
                  checked={moleculeStepperAlignmentValue === alignment}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <H3>Examples</H3>
      <Paragraph>There are 2 different Step custom demo examples:</Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <H4>Custom Dot</H4>
          <Paragraph>A dotted carousel l&f</Paragraph>
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
                width:
                  alignment === moleculeStepperAlignment.VERTICAL
                    ? 'auto'
                    : '100%',
                alignItems:
                  alignment === moleculeStepperAlignment.VERTICAL
                    ? 'flex-start'
                    : 'unset',
                flexDirection:
                  alignment === moleculeStepperAlignment.VERTICAL
                    ? 'column'
                    : 'row'
              }}
            >
              <StepsProvider
                alignment={alignment}
                design={undefined}
                steps={steps}
              >
                {Array(steps)
                  .fill()
                  .map((_, i) => (
                    <Step
                      as="li"
                      key={i}
                      onClick={(event, {step}) => setStep(step)}
                      label="label"
                      step={i + 1}
                      visited={i + 1 < step}
                      current={step === i + 1}
                      hasConnector={false}
                    >
                      <DotCustomStep />
                    </Step>
                  ))}
              </StepsProvider>
            </div>
          </Box>
        </Cell>
        <Cell>
          <H4>Custom Text</H4>
          <Paragraph>A labeled text l&f</Paragraph>
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
                justifyContent: 'center',
                width:
                  alignment === moleculeStepperAlignment.VERTICAL
                    ? 'auto'
                    : '100%',
                alignItems:
                  alignment === moleculeStepperAlignment.VERTICAL
                    ? 'flex-start'
                    : 'unset',
                flexDirection:
                  alignment === moleculeStepperAlignment.VERTICAL
                    ? 'column'
                    : 'row'
              }}
            >
              <StepsProvider
                alignment={alignment}
                design={undefined}
                steps={steps}
              >
                {Array(steps)
                  .fill()
                  .map((_, i) => (
                    <Step
                      as="li"
                      key={i}
                      label={`step-label-${i + 1}`}
                      step={i + 1}
                      visited={i + 1 < step}
                      current={step === i + 1}
                      hasConnector={false}
                    >
                      <TextCustomStep
                        onNextClick={() => setStep(i + 1 + 1)}
                        onPreviousClick={() => setStep(i + 1 - 1)}
                      />
                    </Step>
                  ))}
              </StepsProvider>
            </div>
          </Box>
        </Cell>
      </Grid>
      <Paragraph>
        It also allows creating multiple different designs you can imagine. Be
        creative! 😊
      </Paragraph>
    </Article>
  )
}

ArticleCustomStep.displayName = 'ArticleCustomStep'

ArticleCustomStep.propTypes = {className: PropTypes.string}

export default ArticleCustomStep

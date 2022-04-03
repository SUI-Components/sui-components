import {useState} from 'react'

import {
  H1,
  Button,
  Grid,
  Cell,
  RadioButtonGroup,
  RadioButton,
  Label
} from '@s-ui/documentation-library'

import MoleculeStepper, {
  Step,
  moleculeStepperAlignment,
  moleculeStepperDesign,
  moleculeStepperJustifyContent
} from 'components/molecule/stepper/src/index.js'
import LoremIpsum from './LoremIpsum.js'
import {
  visitedIcon as iconVisited,
  currentIcon as iconCurrent,
  defaultIcon as iconDefault
} from './settings.js'

const getStep = step => step - 1

export default () => {
  const [steps, setSteps] = useState(5)
  const [step, setStep] = useState(Math.trunc(steps / 2))
  const [alignment, setAlignment] = useState(
    moleculeStepperAlignment.HORIZONTAL
  )
  const [design, setDesign] = useState(moleculeStepperDesign.DEFAULT)
  const [icon, setIcon] = useState(false)
  const [visitedIcon, setVisitedIcon] = useState(false)
  const [currentIcon, setCurrentIcon] = useState(false)
  const updateSteps = steps => {
    setSteps(steps)
    steps - 1 < step && setStep(steps - 1)
  }
  const [justifyContent, setJustifyContent] = useState(
    moleculeStepperJustifyContent.LEGACY
  )
  return (
    <div className="sui-StudioPreview">
      <H1>MoleculeStepper</H1>
      <Grid cols={6} gutter={[8, 8]}>
        <Cell span={3}>
          <Label>Alignment</Label>
        </Cell>
        <Cell span={3}>
          <Label>Design</Label>
        </Cell>
        <Cell span={3}>
          <RadioButtonGroup
            value={alignment}
            onChange={(e, value) => value && setAlignment(value)}
            fullWidth
          >
            {Object.values(moleculeStepperAlignment).map(
              moleculeStepperAlignmentValue => (
                <RadioButton
                  key={moleculeStepperAlignmentValue}
                  label={moleculeStepperAlignmentValue}
                  value={moleculeStepperAlignmentValue}
                  checked={alignment === moleculeStepperAlignmentValue}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell span={3}>
          <RadioButtonGroup
            value={design}
            onChange={(e, value) => value && setDesign(value)}
            fullWidth
          >
            {Object.values(moleculeStepperDesign).map(
              moleculeStepperDesignValue => (
                <RadioButton
                  key={moleculeStepperDesignValue}
                  label={moleculeStepperDesignValue}
                  value={moleculeStepperDesignValue}
                  checked={design === moleculeStepperDesignValue}
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell span={6}>
          <Label>Step</Label>
        </Cell>
        <Cell span={6}>
          <RadioButtonGroup
            value={step}
            onChange={(e, value) =>
              value !== undefined && setStep(getStep(value))
            }
            fullWidth
          >
            {Array(steps + 2)
              .fill()
              .map((_, index) => (
                <RadioButton
                  key={index}
                  label={index}
                  value={index}
                  checked={step === getStep(index)}
                />
              ))}
          </RadioButtonGroup>
        </Cell>
        <Cell style={{display: 'flex', alignItems: 'center'}}>
          <Button
            disabled={steps <= 0}
            onClick={() => updateSteps(steps - 1)}
            fullWidth
          >
            ➖
          </Button>
        </Cell>
        <Cell
          span={4}
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection:
              alignment === moleculeStepperAlignment.HORIZONTAL
                ? 'column'
                : 'row',
            minHeight: '50vh'
          }}
        >
          <MoleculeStepper
            steps={steps}
            step={step}
            alignment={alignment}
            design={design}
            justifyContent={justifyContent}
            onChange={(event, {step}) => setStep(getStep(step))}
            visitedIcon={visitedIcon && iconVisited}
            currentIcon={currentIcon && iconCurrent}
            icon={icon && iconDefault}
            labels={Array(steps)
              .fill()
              .map((v, index) => (
                <LoremIpsum units="words" count={2} format="plain" />
              ))}
          />
          <MoleculeStepper
            alignment={alignment}
            design={design}
            justifyContent={justifyContent}
            visitedIcon={visitedIcon && iconVisited}
            currentIcon={currentIcon && iconCurrent}
            icon={icon && iconDefault}
          >
            {new Array(steps).fill().map((i, index) => (
              <Step
                key={index}
                label={<LoremIpsum units="words" count={2} format="plain" />}
                step={index + 1}
                visited={index < step}
                onClick={(event, {step}) => setStep(getStep(step))}
                current={step === index}
              />
            ))}
          </MoleculeStepper>
        </Cell>
        <Cell style={{display: 'flex', alignItems: 'center'}}>
          <Button onClick={() => updateSteps(steps + 1)} fullWidth>
            ➕
          </Button>
        </Cell>
        <Cell span={6}>
          <Label>Justify Content</Label>
        </Cell>
        <Cell span={6}>
          <RadioButtonGroup
            value={justifyContent}
            onChange={(e, value) => value && setJustifyContent(value)}
            fullWidth
          >
            {Object.values(moleculeStepperJustifyContent).map(
              moleculeStepperJustifyContentValue => (
                <RadioButton
                  key={moleculeStepperJustifyContentValue}
                  label={moleculeStepperJustifyContentValue}
                  value={moleculeStepperJustifyContentValue}
                  checked={
                    justifyContent === moleculeStepperJustifyContentValue
                  }
                />
              )
            )}
          </RadioButtonGroup>
        </Cell>
        <Cell span={2}>
          <Label>Icon</Label>
        </Cell>
        <Cell span={2}>
          <Label>Visited Icon</Label>
        </Cell>
        <Cell span={2}>
          <Label>Current Icon</Label>
        </Cell>
        <Cell span={2}>
          <RadioButton
            label="icon"
            checked={icon}
            onClick={() => setIcon(!icon)}
            fullWidth
          />
        </Cell>
        <Cell span={2}>
          <RadioButton
            label="visitedIcon"
            checked={visitedIcon}
            onClick={() => setVisitedIcon(!visitedIcon)}
            fullWidth
          />
        </Cell>
        <Cell span={2}>
          <RadioButton
            label="currentIcon"
            checked={currentIcon}
            onClick={() => setCurrentIcon(!currentIcon)}
            fullWidth
          />
        </Cell>
      </Grid>
    </div>
  )
}

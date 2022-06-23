import {useState} from 'react'

import MoleculeStepper, {
  moleculeStepperAlignment,
  moleculeStepperDesign,
  moleculeStepperJustifyContent,
  Step
} from 'components/molecule/stepper/src/index.js'
import PropTypes from 'prop-types'

import {
  Article,
  Button,
  Cell,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import CustomStep from '../CustomStep.js'
import LoremIpsum from '../LoremIpsum.js'
import {
  currentIcon as iconCurrent,
  defaultIcon as iconDefault,
  visitedIcon as iconVisited
} from '../settings.js'

const ArticlePlayground = ({className}) => {
  const [steps, setSteps] = useState(5)
  const [step, setStep] = useState(Math.ceil(steps / 2))
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
    <Article className={className}>
      <H2>Playground</H2>
      <Paragraph>Combine as much props as you can imagine...</Paragraph>
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
            onChange={(e, value) => value !== undefined && setStep(value)}
            fullWidth
          >
            {Array(steps + 2)
              .fill()
              .map((_, index) => (
                <RadioButton
                  key={index}
                  label={index}
                  value={index}
                  checked={step === index}
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
            onChange={(event, {step}) => setStep(step)}
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
            steps={steps}
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
                visited={index + 1 < step}
                current={step === index + 1}
                onClick={(event, {step}) => setStep(step)}
              >
                <CustomStep />
              </Step>
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
    </Article>
  )
}

ArticlePlayground.dsplayName = 'ArticlePlayground'

ArticlePlayground.propTypes = {
  className: PropTypes.string
}

export default ArticlePlayground

import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  AntDesignIcon,
  Paragraph,
  Article,
  RadioButton,
  RadioButtonGroup,
  Grid,
  Cell
} from '@s-ui/documentation-library'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import MoleculeProgressSteps, {
  MoleculeProgressStep,
  moleculeProgressStepsStatuses
} from '../src'
import {configWithIcons} from './config'

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

const CustomIconsProgressStepsArticle = ({className}) => {
  const [step, setStep] = useState(1)
  const setStatus = useCallback(
    step => {
      setStep(step)
    },
    [setStep]
  )
  return (
    <Article className={className}>
      <H2>Icons</H2>
      <Paragraph>
        The step Icons can be customized providing a react node to each
        progress-step.
      </Paragraph>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <RadioButtonGroup
            value={step}
            onChange={(event, value) => setStatus(value || 0)}
          >
            {[
              0,
              ...Object.keys(configWithIcons),
              Object.keys(configWithIcons).length + 1
            ].map(stepValue => (
              <RadioButton
                key={`step ${parseInt(stepValue)}`}
                value={parseInt(stepValue)}
                checked={step === parseInt(stepValue)}
                label={getLabel(
                  stepValue,
                  Object.keys(configWithIcons).map(v => parseInt(v))
                )}
              />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <MoleculeProgressSteps
            iconStepDone={
              <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
                <AntDesignIcon
                  icon="AiFillCheckCircle"
                  style={{color: 'currentColor'}}
                />
              </AtomIcon>
            }
          >
            {Object.values(configWithIcons).map(
              ({label, content, icon, iconActive}, index) => (
                <MoleculeProgressStep
                  key={index}
                  label={label}
                  status={getStatus(step, index)}
                  icon={icon}
                  iconActive={iconActive}
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

CustomIconsProgressStepsArticle.propTypes = {
  className: PropTypes.string
}

export default CustomIconsProgressStepsArticle

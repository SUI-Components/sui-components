import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {naturalNumber} from '../prop-types.js'

import Step from '../Step/Step.js'
import {useStepsContext} from '../context/index.js'

const Stepper = ({
  children,
  steps: stepsNumber,
  step: currentStep,
  labels = []
}) => {
  const {
    design,
    alignment,
    icon,
    visitedIcon,
    currentIcon,
    onChange,
    hasConnector
  } = useStepsContext()
  if (children)
    return (
      <Injector
        steps={stepsNumber}
        step={currentStep}
        labels={labels}
        design={design}
        alignment={alignment}
        icon={icon}
        visitedIcon={visitedIcon}
        currentIcon={currentIcon}
        hasConnector={hasConnector}
        onChange={onChange}
      >
        {children}
      </Injector>
    )
  else if (stepsNumber === undefined) return null

  return Array(Math.max(stepsNumber, labels.length))
    .fill()
    .map((u, index) => (
      <Step
        key={index}
        steps={stepsNumber}
        step={index + 1}
        visited={index + 1 < currentStep}
        current={currentStep === index + 1}
        label={labels[index]}
      />
    ))
}

Stepper.displayName = 'Stepper'

Stepper.propTypes = {
  children: PropTypes.node,
  labels: PropTypes.arrayOf(PropTypes.string),
  steps: naturalNumber,
  step: naturalNumber
}

export default Stepper

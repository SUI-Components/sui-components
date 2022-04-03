import PropTypes from 'prop-types'

import {naturalNumber} from '../prop-types.js'

import {Step} from '../index.js'

const Stepper = ({
  children,
  steps: stepsNumber,
  step: currentStep,
  labels = []
}) => {
  if (children) return children
  else if (stepsNumber === undefined) return null

  return Array(Math.max(stepsNumber, labels.length))
    .fill()
    .map((u, index) => (
      <Step
        key={index}
        steps={stepsNumber}
        step={index + 1}
        visited={index < currentStep}
        current={currentStep === index}
        label={labels[index]}
      />
    ))
}

Stepper.displayName = 'Stepper'

Stepper.propTypes = {
  children: PropTypes.node,
  steps: naturalNumber,
  step: naturalNumber
}

export default Stepper

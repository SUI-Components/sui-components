import PropTypes from 'prop-types'

import {naturalNumber} from '../prop-types.js'

import {Step, useStepsContext} from '../index.js'
import Children from '../Children.js'

const Stepper = ({
  children,
  steps: stepsNumber,
  step: currentStep,
  labels = []
}) => {
  const {design, alignment, icon, visitedIcon, currentIcon, onChange} =
    useStepsContext()
  if (children)
    return (
      <Children
        steps={stepsNumber}
        step={currentStep}
        labels={labels}
        design={design}
        alignment={alignment}
        icon={icon}
        visitedIcon={visitedIcon}
        currentIcon={currentIcon}
        onChange={onChange}
      >
        {children}
      </Children>
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

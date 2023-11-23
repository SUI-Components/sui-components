import PropTypes from 'prop-types'

import {naturalNumber} from '../src/prop-types.js'
import {ALIGNMENT, DESIGN} from '../src/settings.js'
import DefaultStep from '../src/Step/DefaultStep.js'

const CustomStep = ({alignment, design, label, step, steps, current, visited, icon, visitedIcon, currentIcon}) => {
  return (
    <DefaultStep
      alignment={alignment}
      design={design}
      label={label}
      step={step}
      steps={steps}
      current={current}
      visited={visited}
      icon={icon}
      visitedIcon={visitedIcon}
      currentIcon={currentIcon}
    />
  )
}

CustomStep.displayName = 'CustomStep'

CustomStep.propTypes = {
  /** element orientation **/
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)),
  /** different look and feels **/
  design: PropTypes.oneOf(Object.values(DESIGN)),
  /** the number of the step in the list **/
  step: naturalNumber,
  /** number of steps needed to be inner created **/
  steps: naturalNumber,
  /** the text label of the step **/
  label: PropTypes.string,
  /** stepper points to that step or not **/
  current: PropTypes.bool,
  /** stepper step is higher to that step or not **/
  visited: PropTypes.bool,
  /** react-node icon passed to all inner steps **/
  icon: PropTypes.node,
  /** react-node icon passed to all inner visited steps **/
  visitedIcon: PropTypes.node,
  /** react-node icon passed to inner current steps **/
  currentIcon: PropTypes.node
}

export default CustomStep

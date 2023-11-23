import cx from 'classnames'
import PropTypes from 'prop-types'

import {moleculeStepperAlignment, moleculeStepperDesign} from '../../../src/index.js'

const BASE_CLASS = 'dotCustomStep'

const DotCustomStep = ({alignment, design, label, current, visited}) => {
  return (
    <span
      className={cx(BASE_CLASS, {
        [`${BASE_CLASS}--alignment-${alignment}`]: alignment,
        [`${BASE_CLASS}--design-${design}`]: design,
        [`${BASE_CLASS}--current`]: current,
        [`${BASE_CLASS}--visited`]: visited
      })}
      aria-label={label}
    />
  )
}

DotCustomStep.propTypes = {
  /** element orientation **/
  alignment: PropTypes.oneOf(Object.values(moleculeStepperAlignment)),
  /** different look and feels **/
  design: PropTypes.oneOf(Object.values(moleculeStepperDesign)),
  /** the text label of the step **/
  label: PropTypes.string,
  /** stepper points to that step or not **/
  current: PropTypes.bool,
  /** stepper step is higher to that step or not **/
  visited: PropTypes.bool
}

DotCustomStep.displayName = 'DotCustomStep'

export default DotCustomStep

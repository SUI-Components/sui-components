import cx from 'classnames'
import PropTypes from 'prop-types'

import {moleculeStepperAlignment, moleculeStepperDesign} from '../../../src/index.js'
import {naturalNumber} from '../../../src/prop-types.js'

const BASE_CLASS = 'textCustomStep'

const TextCustomStep = ({alignment, design, label, step, steps, current, visited, onPreviousClick, onNextClick}) => {
  return (
    <span
      className={cx(BASE_CLASS, {
        [`${BASE_CLASS}--alignment-${alignment}`]: alignment,
        [`${BASE_CLASS}--design-${design}`]: design,
        [`${BASE_CLASS}--current`]: current,
        [`${BASE_CLASS}--visited`]: visited
      })}
      aria-hidden={!current}
      aria-label={label}
    >
      <button
        role="button"
        className={cx(`${BASE_CLASS}ButtonPrevious`)}
        disabled={step <= 1}
        {...(step > 1 && {onClick: onPreviousClick})}
      >
        {alignment === moleculeStepperAlignment.HORIZONTAL ? <>&larr;</> : <>&uarr;</>}
      </button>
      <span className={`${BASE_CLASS}Container`}>
        <span className={`${BASE_CLASS}Pager`}>
          {step} / {steps}
        </span>
        <span className={`${BASE_CLASS}Label`}>{label}</span>
      </span>
      <button
        role="button"
        className={cx(`${BASE_CLASS}ButtonNext`)}
        disabled={step >= steps}
        {...(step < steps && {onClick: onNextClick})}
      >
        {alignment === moleculeStepperAlignment.HORIZONTAL ? <>&rarr;</> : <>&darr;</>}
      </button>
    </span>
  )
}

TextCustomStep.propTypes = {
  /** element orientation **/
  alignment: PropTypes.oneOf(Object.values(moleculeStepperAlignment)),
  /** different look and feels **/
  design: PropTypes.oneOf(Object.values(moleculeStepperDesign)),
  /** the text label of the step **/
  label: PropTypes.string,
  /** number of steps needed to be inner created **/
  steps: naturalNumber,
  /** current step position **/
  step: naturalNumber,
  /** stepper points to that step or not **/
  current: PropTypes.bool,
  /** stepper step is higher to that step or not **/
  visited: PropTypes.bool,
  /** previous handler click **/
  onPreviousClick: PropTypes.func,
  /** next handler click **/
  onNextClick: PropTypes.func
}

TextCustomStep.displayName = 'TextCustomStep'

export default TextCustomStep

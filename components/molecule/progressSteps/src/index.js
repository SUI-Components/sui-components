import {Children, useState, useEffect} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import MoleculeStepper, {
  moleculeStepperDesign,
  moleculeStepperAlignment,
  Step
} from '@s-ui/react-molecule-stepper'

import {
  BASE_CLASS,
  CLASS_CONTENT,
  CLASS_VERTICAL,
  CLASS_COMPRESSED,
  PROGRESS_BAR_JUSTIFY_CONTENT,
  CONTENT_STYLE
} from './config.js'
import MoleculeProgressStep, {
  STATUSES
} from './components/MoleculeProgressStep/index.js'

const MoleculeProgressSteps = ({
  vertical,
  children,
  iconStepDone,
  compressed,
  progressBarJustifyContent = PROGRESS_BAR_JUSTIFY_CONTENT.LEGACY,
  contentStyle = CONTENT_STYLE.FIXED,
  onChange
}) => {
  const [step, setStep] = useState()

  const className = cx(BASE_CLASS, {
    [CLASS_VERTICAL]: vertical,
    [CLASS_COMPRESSED]: compressed
  })

  useEffect(() => {
    if (children) {
      const currentStep = Children.toArray(children)
        .filter(Boolean)
        .map((child, index, elements) => child.props.status)
        .lastIndexOf(STATUSES.ACTIVE)
      const lastVisitedStep = Children.toArray(children)
        .filter(Boolean)
        .map((child, index, elements) => child.props.status)
        .lastIndexOf(STATUSES.VISITED)
      const steps = Children.toArray(children).filter(Boolean).length

      if (currentStep >= 0 && step !== currentStep) {
        setStep(currentStep)
      } else if (steps - 1 === lastVisitedStep && step !== steps) {
        setStep(steps)
      } else if (lastVisitedStep === -1 && currentStep === -1) {
        setStep(-1)
      }
    }
  }, [children, step])

  const onChangeHandler = (event, {step, ...args}) => {
    typeof onChange === 'function' && onChange(event, {step, ...args})
  }

  return (
    <div className={className}>
      {children && (
        <MoleculeStepper
          steps={Children.toArray(children).length}
          step={step}
          visitedIcon={iconStepDone}
          labels={Children.toArray(children)
            .filter(Boolean)
            .map(({props: {label} = {}, index}) => {
              return label
            })}
          justifyContent={progressBarJustifyContent}
          design={
            compressed
              ? moleculeStepperDesign.COMPRESSED
              : moleculeStepperDesign.DEFAULT
          }
          alignment={
            vertical
              ? moleculeStepperAlignment.VERTICAL
              : moleculeStepperAlignment.HORIZONTAL
          }
          onChange={onChangeHandler}
        >
          {Children.toArray(children)
            .filter(Boolean)
            .map((child, index, elements) => (
              <Step
                key={index}
                steps={elements.length}
                step={index + 1}
                visited={index < step}
                current={step === index}
                label={child?.props?.label}
                icon={child?.props?.icon}
                currentIcon={child?.props?.iconActive}
                onClick={child?.props.onClick}
              />
            ))}
        </MoleculeStepper>
      )}
      <div className={cx(CLASS_CONTENT, contentStyle)}>
        {Children.toArray(children)
          .filter(Boolean)
          .map((child, index) => {
            const {children: childrenChild, status} = child.props
            return (
              <div
                key={index}
                className={cx(`${CLASS_CONTENT}-item`, {
                  [`${CLASS_CONTENT}-item--active`]: status === STATUSES.ACTIVE
                })}
              >
                {childrenChild}
              </div>
            )
          })}
      </div>
    </div>
  )
}

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

MoleculeProgressSteps.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Icon to display when status VISITED */
  iconStepDone: PropTypes.node.isRequired,

  /** Compressed mode (mobile) */
  compressed: PropTypes.bool,

  /** Vertical mode */
  vertical: PropTypes.bool,

  /** Fit the content size */
  contentStyle: PropTypes.oneOf(Object.values(CONTENT_STYLE)),

  /** justify the progressbar elements in its area following the element declared **/
  progressBarJustifyContent: PropTypes.oneOf(
    Object.values(PROGRESS_BAR_JUSTIFY_CONTENT)
  ),
  /** callback fired every time page changes **/
  onChange: PropTypes.func
}

export default MoleculeProgressSteps
export {
  MoleculeProgressStep,
  STATUSES,
  STATUSES as moleculeProgressStepsStatuses,
  PROGRESS_BAR_JUSTIFY_CONTENT as moleculeProgressStepsJustifyContentBar,
  CONTENT_STYLE as moleculeProgressContentStyle
}

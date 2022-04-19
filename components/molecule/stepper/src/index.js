import {useRef, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'
import Poly from '@s-ui/react-atom-polymorphic-element'

import {naturalNumber} from './prop-types.js'
import {BASE_CLASS, JUSTIFY_CONTENT, ALIGNMENT, DESIGN} from './settings.js'
import Stepper from './Stepper/Stepper.js'
import {StepsProvider, useStepsContext} from './context/index.js'

import Step from './Step/Step.js'

const MoleculeStepper = forwardRef(
  (
    {
      as = 'ol',
      asSteps = 'li',
      children,
      design = DESIGN.DEFAULT,
      alignment = ALIGNMENT.HORIZONTAL,
      justifyContent = JUSTIFY_CONTENT.LEGACY,
      labels = [],
      steps,
      step,
      icon,
      visitedIcon,
      currentIcon,
      hasConnector = true,
      onChange
    },
    forwardedRef
  ) => {
    const innerRef = useRef()
    const ref = useMergeRefs(innerRef, forwardedRef)
    return (
      <Poly
        as={as}
        ref={ref}
        role="list"
        data-steps={`${steps}`}
        className={cx(BASE_CLASS, [
          `${BASE_CLASS}--design-${design}`,
          `${BASE_CLASS}--alignment-${alignment}`,
          `${BASE_CLASS}--justifyContent-${justifyContent}`
        ])}
      >
        <StepsProvider
          design={design}
          alignment={alignment}
          icon={icon}
          visitedIcon={visitedIcon}
          currentIcon={currentIcon}
          justifyContent={justifyContent}
          as={asSteps}
          hasConnector={hasConnector}
          onChange={onChange}
        >
          <Stepper steps={steps} step={step} labels={labels}>
            {children}
          </Stepper>
        </StepsProvider>
      </Poly>
    )
  }
)

MoleculeStepper.displayName = 'MoleculeStepper'
MoleculeStepper.propTypes = {
  /** element tag **/
  as: PropTypes.element,
  /** element children's tag **/
  asSteps: PropTypes.element,
  /** element orientation **/
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)),
  /** inner content **/
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.instanceOf(Step)])
  ),
  /** different look and feels **/
  design: PropTypes.oneOf(Object.values(DESIGN)),
  /** element position alignements **/
  justifyContent: PropTypes.oneOf(Object.values(JUSTIFY_CONTENT)),
  /** an array of step tags if there is no children declared **/
  labels: PropTypes.arrayOf(PropTypes.string),
  /** number of steps needed to be inner created **/
  steps: naturalNumber,
  /** current step position **/
  step: naturalNumber,
  /** react-node icon passed to all inner steps **/
  icon: PropTypes.node,
  /** react-node icon passed to all inner visited steps **/
  visitedIcon: PropTypes.node,
  /** react-node icon passed to inner current steps **/
  currentIcon: PropTypes.node,
  /** has or not a connector element between steps **/
  hasConnector: PropTypes.bool,
  /** change handler to get the step fired **/
  onChange: PropTypes.func
}

export default MoleculeStepper

export {
  ALIGNMENT as moleculeStepperAlignment,
  DESIGN as moleculeStepperDesign,
  JUSTIFY_CONTENT as moleculeStepperJustifyContent,
  useStepsContext,
  Step
}

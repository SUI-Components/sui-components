import {useRef, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'
import Poly from '@s-ui/react-atom-polymorphic-element'

import {naturalNumber} from './prop-types.js'
import {BASE_CLASS, JUSTIFY_CONTENT, ALIGNMENT, DESIGN} from './settings.js'
import Stepper from './Stepper/Stepper.js'
import {StepsProvider} from './StepsProvider.js'

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
  as: PropTypes.element,
  asSteps: PropTypes.element,
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)),
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(Step),
      PropTypes.instanceOf(Connector)
    ])
  ),
  design: PropTypes.oneOf(Object.values(DESIGN)),
  justifyContent: PropTypes.oneOf(Object.values(JUSTIFY_CONTENT)),
  labels: PropTypes.arrayOf(PropTypes.string),
  steps: naturalNumber,
  step: naturalNumber,
  icon: PropTypes.node,
  visitedIcon: PropTypes.node,
  currentIcon: PropTypes.node,
  onChange: PropTypes.func
}

export default MoleculeStepper

export {
  ALIGNMENT as moleculeStepperAlignment,
  DESIGN as moleculeStepperDesign,
  JUSTIFY_CONTENT as moleculeStepperJustifyContent
}

export {Step}

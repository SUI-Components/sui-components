import {useRef, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'
import Poly from '@s-ui/react-atom-polymorphic-element'

import {naturalNumber} from '../prop-types.js'
import {BASE_CLASS_STEP} from './settings.js'
import DefaultStep from './DefaultStep.js'
import Children from '../Children.js'
import {useStepsContext} from '../StepsProvider.js'

const Step = forwardRef(
  (
    {
      as,
      children = <DefaultStep />,
      label,
      current,
      visited,
      step,
      icon,
      visitedIcon,
      currentIcon,
      onClick
    },
    forwardedRef
  ) => {
    const {
      as: asContext,
      alignment,
      design,
      steps,
      useContextRef,
      useContextUnRef,
      justifyContent,
      icon: iconContext,
      visitedIcon: visitedIconContext,
      currentIcon: currentIconContext,
      hasConnector = true,
      onChange
    } = useStepsContext()
    const innerRef = useRef()
    const ref = useMergeRefs(forwardedRef, innerRef, useContextRef)
    const As = as || asContext
    useContextUnRef(innerRef)
    const onClickHandler = event => {
      typeof onClick === 'function' && onClick(event, {step})
      typeof onChange === 'function' && onChange(event, {step})
    }
    return (
      <>
        <Poly
          as={As}
          ref={ref}
          role="listitem"
          data-step={`${step}`}
          {...(current && {'aria-current': 'step'})}
          className={cx(
            BASE_CLASS_STEP,
            [
              `${BASE_CLASS_STEP}--design-${design}`,
              `${BASE_CLASS_STEP}--alignment-${alignment}`,
              `${BASE_CLASS_STEP}--justifyContent-${justifyContent}`
            ],
            {
              [`${BASE_CLASS_STEP}--current`]: current,
              [`${BASE_CLASS_STEP}--visited`]: visited
            }
          )}
          onClick={onClickHandler}
        >
          <Children
            alignment={alignment}
            design={design}
            label={label}
            step={step}
            steps={steps}
            current={current}
            visited={visited}
            icon={icon || iconContext}
            visitedIcon={visitedIcon || visitedIconContext}
            currentIcon={currentIcon || currentIconContext}
          >
            {children}
          </Children>
        </Poly>
        {hasConnector && steps !== step - 1 && (
          <Poly
            role="separator"
            {...(steps === step && {'aria-hidden': true})}
            as={As}
            className={cx(`${BASE_CLASS_STEP}Connector`)}
          >
            <div className={cx(`${BASE_CLASS_STEP}ConnectorLine`)} />
          </Poly>
        )}
      </>
    )
  }
)

Step.displayName = 'Step'

Step.propTypes = {
  /** element tag **/
  as: PropTypes.element,
  /** inner content **/
  children: PropTypes.node,
  /** the number of the step in the list **/
  step: naturalNumber,
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
  currentIcon: PropTypes.node,
  /** change handler to get the step fired **/
  onClick: PropTypes.func,
  /** has or not a connector element between steps **/
  hasConnector: PropTypes.bool
}

export default Step

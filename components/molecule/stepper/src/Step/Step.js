import {useRef, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'
import Poly from '@s-ui/react-atom-polymorphic-element'

import {naturalNumber} from '../prop-types.js'
import {BASE_CLASS_STEP, getIcon} from './settings.js'
import {useStepsContext} from '../StepsProvider.js'

const Step = forwardRef(
  (
    {
      as,
      children,
      label,
      current,
      visited,
      step,
      icon,
      visitedIcon,
      currentIcon,
      status,
      onClick
    },
    forwardedRef
  ) => {
    const {
      useContextRef,
      unUseContextRef,
      design,
      alignment,
      justifyContent,
      icon: iconContext,
      visitedIcon: visitedIconContext,
      currentIcon: currentIconContext,
      as: asContext,
      onChange
    } = useStepsContext()
    const innerRef = useRef()
    const ref = useMergeRefs(forwardedRef, innerRef, useContextRef)
    const As = as || asContext
    unUseContextRef(innerRef)
    const resultingIcon = getIcon({
      visited,
      current,
      step,
      icon,
      iconContext,
      visitedIcon,
      visitedIconContext,
      currentIcon,
      currentIconContext
    })
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
          className={cx(
            BASE_CLASS_STEP,
            [
              `${BASE_CLASS_STEP}--design-${design}`,
              `${BASE_CLASS_STEP}--alignment-${alignment}`,
              `${BASE_CLASS_STEP}--justifyContent-${justifyContent}`,
              `${BASE_CLASS_STEP}--status-${status}`
            ],
            {
              [`${BASE_CLASS_STEP}--current`]: current,
              [`${BASE_CLASS_STEP}--visited`]: visited
            }
          )}
          onClick={onClickHandler}
        >
          {children || (
            <>
              <div className={cx(`${BASE_CLASS_STEP}Icon`)}>
                {resultingIcon}
              </div>
              <div className={cx(`${BASE_CLASS_STEP}Label`)}>{label}</div>
            </>
          )}
        </Poly>
        <Poly as={As} className={cx(`${BASE_CLASS_STEP}Connector`)}>
          <div className={cx(`${BASE_CLASS_STEP}ConnectorLine`)} />
        </Poly>
      </>
    )
  }
)

Step.displayName = 'Step'

Step.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  step: naturalNumber,
  steps: naturalNumber,
  label: PropTypes.string,
  current: PropTypes.bool,
  visited: PropTypes.bool
}

export default Step

import cx from 'classnames'
import PropTypes from 'prop-types'

import {naturalNumber} from '../prop-types.js'
import {ALIGNMENT, DESIGN} from '../settings.js'
import {BASE_CLASS_STEP, getIcon, getLabel} from './settings.js'

const DefaultStep = ({
  alignment,
  design,
  label,
  step,
  steps,
  current,
  visited,
  icon,
  visitedIcon,
  showLabel,
  currentIcon
}) => {
  const resultingIcon = getIcon({
    design,
    visited,
    current,
    step,
    icon,
    visitedIcon,
    currentIcon
  })
  return (
    <>
      <div className={cx(`${BASE_CLASS_STEP}Icon`)}>{resultingIcon}</div>
      {showLabel && (
        <div
          className={cx(`${BASE_CLASS_STEP}Label`)}
          {...(design === DESIGN.COMPRESSED &&
            current &&
            alignment === ALIGNMENT.HORIZONTAL && {
              style: {
                marginLeft: `calc(-${(step - 1) * 100}% - ${(step - 1) * 8}px)`
              }
            })}
        >
          {getLabel({steps, step, design, label, current})}
        </div>
      )}
    </>
  )
}

DefaultStep.displayName = 'DefaultStep'

DefaultStep.propTypes = {
  /** inner content **/
  children: PropTypes.node,
  /** element orientation **/
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)),
  /** different look and feels **/
  design: PropTypes.oneOf(Object.values(DESIGN)),
  /** show label or not */
  showLabel: PropTypes.bool,
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
  currentIcon: PropTypes.node,
  /** change handler to get the step fired **/
  onClick: PropTypes.func
}

export default DefaultStep

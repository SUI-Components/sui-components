import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeProgressSteps`

const CLASS_STEPS = `${BASE_CLASS}-path`
const CLASS_FULL_STEP = `${CLASS_STEPS}-fullStep`

const CLASS_BAR = `${CLASS_STEPS}-bar`
const CLASS_STEP = `${CLASS_STEPS}-step`

const CLASS_STEP_NUMBER = `${CLASS_STEP}-number`
const CLASS_STEP_ICON = `${CLASS_STEP}-icon`

const CLASS_STEP_DESCRIPTION = `${CLASS_STEP}-description`

/* status */
const CLASS_BAR_VISITED = `${CLASS_BAR}--visited`
const CLASS_STEP_ACTIVE = `${CLASS_STEP}--active`
const CLASS_STEP_VISITED = `${CLASS_STEP}--visited`

const STATUSES = {
  VISITED: 'VISITED',
  NORMAL: 'NORMAL',
  ACTIVE: 'ACTIVE'
}

const isVisited = status => status === STATUSES.VISITED
const isActive = status => status === STATUSES.ACTIVE

const getStatusClass = status => {
  if (isVisited(status)) return [CLASS_STEP_VISITED, CLASS_BAR_VISITED]
  if (isActive(status)) return [CLASS_STEP_ACTIVE, '']
  return ['', '']
}

const MoleculeProgressStep = ({
  status,
  icon,
  label,
  numStep,
  lastStep,
  compressed,
  vertical,
  isActive,
  isInline,
  children
}) => {
  const [CLASS_STEP_STATUS, CLASS_BAR_STATUS] = getStatusClass(status)
  const CLASS_INLINE_CONTENT = `${CLASS_STEPS}-labelBar`
  const CLASS_FULL_STEP_MODIFIERS = cx(CLASS_FULL_STEP, {
    [`${CLASS_FULL_STEP}--isInline`]: isInline,
    [`${CLASS_FULL_STEP}--vertical`]: vertical
  })
  const bar = <hr className={cx(CLASS_BAR, CLASS_BAR_STATUS)} />
  return (
    <div className={CLASS_FULL_STEP_MODIFIERS}>
      {!compressed && (
        <div className={cx(CLASS_STEP, CLASS_STEP_STATUS)}>
          {icon ? (
            <div className={CLASS_STEP_ICON}>{icon}</div>
          ) : (
            <p className={CLASS_STEP_NUMBER}>{numStep}</p>
          )}
          <p className={CLASS_STEP_DESCRIPTION}>{label}</p>
        </div>
      )}
      <div className={CLASS_INLINE_CONTENT}>
        {!lastStep ? bar : compressed && bar}
        {vertical && isActive && isInline && children}
      </div>
    </div>
  )
}

MoleculeProgressStep.propTypes = {
  /** status of the step */
  status: PropTypes.oneOf(Object.values(STATUSES)),

  /** icon (React component) */
  icon: PropTypes.node,

  /** text to display */
  label: PropTypes.string,

  /** step number */
  numStep: PropTypes.number,

  /** is last step */
  lastStep: PropTypes.bool,

  /** Compressed */
  compressed: PropTypes.bool,

  /** vertical mode */
  vertical: PropTypes.bool,

  /** is step active */
  isActive: PropTypes.bool,

  /** show content inline with label */
  isInline: PropTypes.bool,

  children: PropTypes.element
}

export default MoleculeProgressStep
export {STATUSES}

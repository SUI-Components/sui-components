import {useMemo} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  CLASS_BAR,
  CLASS_STEP,
  CLASS_STEP_NUMBER,
  CLASS_STEP_ICON,
  CLASS_STEP_DESCRIPTION,
  STATUSES,
  getStatusClass
} from './config'

const MoleculeProgressStep = ({
  status,
  icon,
  label,
  numStep,
  lastStep,
  compressed,
  isProgressBarAutoSizedLength = true,
  progressBarJustifyContent
}) => {
  const [CLASS_STEP_STATUS, CLASS_BAR_STATUS] = useMemo(
    getStatusClass.bind(this, status),
    [status]
  )
  const bar = (
    <hr
      className={cx(CLASS_BAR, CLASS_BAR_STATUS, {
        [`${CLASS_BAR}--grow`]: isProgressBarAutoSizedLength,
        [`${CLASS_BAR}--justifyContent-${progressBarJustifyContent}`]: progressBarJustifyContent
      })}
    />
  )
  return (
    <>
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
      {!lastStep ? bar : compressed && bar}
    </>
  )
}

MoleculeProgressStep.propTypes = {
  /** status of the step */
  status: PropTypes.oneOf(Object.values(STATUSES)),

  /** icon (React component) */
  icon: PropTypes.node,

  /** text to display */
  label: PropTypes.string,

  /** Vertical mode */
  numStep: PropTypes.number,

  /** Vertical mode */
  lastStep: PropTypes.bool,

  /** Compressed */
  compressed: PropTypes.bool
}

export default MoleculeProgressStep
export {STATUSES}

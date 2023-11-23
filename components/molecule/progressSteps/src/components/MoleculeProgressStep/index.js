import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  CLASS_BAR,
  CLASS_STEP,
  CLASS_STEP_DESCRIPTION,
  CLASS_STEP_ICON,
  CLASS_STEP_NUMBER,
  getStatusClass,
  STATUSES
} from './config.js'

const MoleculeProgressStep = ({status, icon, label, numStep, lastStep, compressed, onClick}) => {
  const [CLASS_STEP_STATUS, CLASS_BAR_STATUS] = getStatusClass(status)
  const bar = <hr onClick={onClick} className={cx(CLASS_BAR, CLASS_BAR_STATUS)} />
  return (
    <>
      {!compressed && (
        <div className={cx(CLASS_STEP, CLASS_STEP_STATUS)} onClick={onClick}>
          {icon ? <div className={CLASS_STEP_ICON}>{icon}</div> : <p className={CLASS_STEP_NUMBER}>{numStep}</p>}
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
  compressed: PropTypes.bool,

  /** onClick handler **/
  onClick: PropTypes.func
}

export default MoleculeProgressStep
export {STATUSES}

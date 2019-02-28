/* eslint-disable */
import React, {Component, Fragment} from 'react'
import cx from 'classnames'
// import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeProgressSteps`
const CLASS_BAR = `${BASE_CLASS}-bar`
const CLASS_BAR_VISITED = `${CLASS_BAR}--visited`
const CLASS_STEP = `${BASE_CLASS}-step`

const CLASS_STEP_ACTIVE = `${CLASS_STEP}--active`
const CLASS_STEP_VISITED = `${CLASS_STEP}--visited`

const CLASS_STEP_NUMBER = `${CLASS_STEP}-number`
const CLASS_STEP_DESCRIPTION = `${CLASS_STEP}-description`

export const statuses = {
  VISITED: 'VISITED',
  NORMAL: 'NORMAL',
  ACTIVE: 'ACTIVE'
}
export const MoleculeProgressStep = ({
  status,
  icon,
  label,
  numStep,
  lastStep
}) => (
  <Fragment>
    <div className={cx(CLASS_STEP, [`CLASS_STEP_${status}`])}>
      {icon || <span className={CLASS_STEP_NUMBER}>{numStep}</span>}
      <span className={CLASS_STEP_DESCRIPTION}>{label}</span>
    </div>
    {!lastStep && <hr className={cx(CLASS_BAR, [`CLASS_STEP_${status}`])} />}
  </Fragment>
)

class MoleculeProgressSteps extends Component {
  get extendedChildren() {
    const {children, iconStepDone} = this.props
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index, children) => {
        const {icon: iconChild, status} = child.props
        const totalChildren = children.length
        const numStep = index + 1
        const lastStep = index >= totalChildren - 1
        console.log(status === statuses.VISITED)
        const icon = status === statuses.VISITED ? iconStepDone : iconChild
        return React.cloneElement(child, {
          numStep,
          lastStep,
          icon
        })
      })
  }

  render() {
    const {extendedChildren} = this
    return <div className={BASE_CLASS}>{extendedChildren}</div>
  }
}

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

// Remove these comments if you need
// MoleculeProgressSteps.contextTypes = {i18n: PropTypes.object}
// MoleculeProgressSteps.propTypes = {}
// MoleculeProgressSteps.defaultProps = {}

export default MoleculeProgressSteps

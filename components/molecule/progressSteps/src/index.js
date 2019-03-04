/* eslint-disable */
import React, {Component, Fragment} from 'react'
import cx from 'classnames'
// import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeProgressSteps`

const CLASS_STEPS = `${BASE_CLASS}-path`
const CLASS_CONTENT = `${BASE_CLASS}-content`

const CLASS_BAR = `${CLASS_STEPS}-bar`
const CLASS_STEP = `${CLASS_STEPS}-step`

const CLASS_STEP_NUMBER = `${CLASS_STEP}-number`
const CLASS_STEP_ICON = `${CLASS_STEP}-icon`

const CLASS_STEP_DESCRIPTION = `${CLASS_STEP}-description`

const CLASS_VERTICAL = `${BASE_CLASS}--vertical`

/* status */
const CLASS_BAR_VISITED = `${CLASS_BAR}--visited`
const CLASS_STEP_ACTIVE = `${CLASS_STEP}--active`
const CLASS_STEP_VISITED = `${CLASS_STEP}--visited`


export const statuses = {
  VISITED: 'VISITED',
  NORMAL: 'NORMAL',
  ACTIVE: 'ACTIVE'
}

const isVisited = status => status === statuses.VISITED
const isActive = status => status === statuses.ACTIVE

const getStatusClass = status => {
  if (isVisited(status)) return [CLASS_STEP_VISITED, CLASS_BAR_VISITED]
  if (isActive(status)) return [CLASS_STEP_ACTIVE, '']
  return ['','']
}

export const MoleculeProgressStep = ({
  status,
  icon,
  label,
  numStep,
  lastStep,
  children
}) => {
  const [CLASS_STEP_STATUS, CLASS_BAR_STATUS] = getStatusClass(status)
  return (
    <Fragment>
      <div className={cx(CLASS_STEP, CLASS_STEP_STATUS)}>
        {
          icon 
          ? <span className={CLASS_STEP_ICON}>{icon}</span>
          : <span className={CLASS_STEP_NUMBER}>{numStep}</span>
        }
        <span className={CLASS_STEP_DESCRIPTION}>{label}</span>
      </div>
      {!lastStep && <hr className={cx(CLASS_BAR, CLASS_BAR_STATUS)} />}
    </Fragment>
  )
}

/*  className={cx(CLASS_STEP, CLASS_STATUS)} */

class MoleculeProgressSteps extends Component {
  get extendedChildren() {
    const {children, iconStepDone} = this.props
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index, children) => {
        const {icon: iconChild, status, children: childrenChild} = child.props
        const totalChildren = children.length
        const numStep = index + 1
        const lastStep = index >= totalChildren - 1
        const isVisited = status === statuses.VISITED
        const isActive = status === statuses.ACTIVE
        const icon = isVisited ? iconStepDone : iconChild
        if (isActive) this.activeStepContent = childrenChild

        return React.cloneElement(child, {
          numStep,
          lastStep,
          icon
        })
      })
  }

  render() {
    const {extendedChildren, activeStepContent} = this
    const {vertical} = this.props
    return (
      <div className={cx(BASE_CLASS, {[CLASS_VERTICAL]: vertical})}>
        <div className={CLASS_STEPS}>{extendedChildren}</div>
        <div className={CLASS_CONTENT}>{activeStepContent}</div>
      </div>
    )
  }
}

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

// Remove these comments if you need
// MoleculeProgressSteps.contextTypes = {i18n: PropTypes.object}
// MoleculeProgressSteps.propTypes = {}
// MoleculeProgressSteps.defaultProps = {}

export default MoleculeProgressSteps

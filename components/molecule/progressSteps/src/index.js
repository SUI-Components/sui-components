import React, {Component} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import MoleculeProgressStep, {STATUSES} from './components/MoleculeProgressStep'

const BASE_CLASS = `sui-MoleculeProgressSteps`

const CLASS_STEPS = `${BASE_CLASS}-path`
const CLASS_CONTENT = `${BASE_CLASS}-content`
const CLASS_COMPRESSED_INFO = `${BASE_CLASS}-compressedInfo`

const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
const CLASS_COMPRESSED = `${BASE_CLASS}--compressed`

class MoleculeProgressSteps extends Component {
  get className() {
    const {vertical, compressed} = this.props
    return cx(BASE_CLASS, {
      [CLASS_VERTICAL]: vertical,
      [CLASS_COMPRESSED]: compressed
    })
  }

  get compressedInfoSteps() {
    const {children} = this.props
    const childrenNodes = React.Children.toArray(children)
    const totalSteps = childrenNodes.length
    const [activeLabel, numActiveStep] = childrenNodes.reduce(
      (acc, child, index) => {
        const {status} = child.props
        if (status === STATUSES.ACTIVE) acc = [child.props.label, index + 1]
        return acc
      },
      []
    )
    const stepPositionInfo = `${numActiveStep}/${totalSteps}`
    return `${stepPositionInfo}: ${activeLabel}`
  }

  get extendedChildren() {
    const {children, iconStepDone, compressed} = this.props
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index, children) => {
        const {
          icon: iconChild,
          iconActive,
          status,
          children: childrenChild
        } = child.props

        const totalChildren = children.length
        const numStep = index + 1
        const lastStep = index >= totalChildren - 1

        const isVisited = status === STATUSES.VISITED
        const isActive = status === STATUSES.ACTIVE
        let icon = iconChild
        if (isVisited) icon = iconStepDone
        if (isActive) {
          icon = iconActive || iconChild
          this.activeStepContent = childrenChild
        }

        return React.cloneElement(child, {
          numStep,
          lastStep,
          icon,
          compressed
        })
      })
  }

  render() {
    const {
      extendedChildren,
      compressedInfoSteps,
      activeStepContent,
      className
    } = this
    const {compressed} = this.props
    return (
      <div className={className}>
        {compressed && (
          <p className={CLASS_COMPRESSED_INFO}>{compressedInfoSteps}</p>
        )}
        <div className={CLASS_STEPS}>{extendedChildren}</div>
        <div className={CLASS_CONTENT}>{activeStepContent}</div>
      </div>
    )
  }
}

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

MoleculeProgressSteps.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Icon to display when status VISITED */
  iconStepDone: PropTypes.node.isRequired,

  /** Compressed mode (mobile) */
  compressed: PropTypes.bool,

  /** Vertical mode */
  vertical: PropTypes.bool
}

export default MoleculeProgressSteps
export {MoleculeProgressStep, STATUSES}

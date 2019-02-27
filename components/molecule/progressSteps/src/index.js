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

class MoleculeProgressSteps extends Component {
  render() {
    const {iconStepDone, configSteps} = this.props
    console.log({iconStepDone, configSteps})
    return (
      configSteps && (
        <div className={BASE_CLASS}>
          {Object.values(configSteps).map((config, indexStep, stepsConfigs) => {
            const totalSteps = stepsConfigs.length
            const numStep = indexStep + 1
            const lastStep = indexStep >= totalSteps - 1
            return (
              <Fragment key={indexStep}>
                <div
                  className={cx(CLASS_STEP, [`CLASS_STEP_${config.status}`])}
                >
                  {config.icon || (
                    <span className={CLASS_STEP_NUMBER}>{numStep}</span>
                  )}
                  <span className={CLASS_STEP_DESCRIPTION}>
                    {config.description}
                  </span>
                </div>
                {!lastStep && (
                  <hr
                    className={cx(CLASS_BAR, [`CLASS_STEP_${config.status}`])}
                  />
                )}
              </Fragment>
            )
          })}
        </div>
      )
    )
  }
}

/*

  <div className={cx(CLASS_STEP, CLASS_STEP_ACTIVE)}>
    <span className={CLASS_STEP_NUMBER}>2</span>
    <span className={CLASS_STEP_DESCRIPTION}>Step 2</span>
  </div>
  <hr className={CLASS_BAR} />
 
  <div className={CLASS_STEP}>
    <span className={CLASS_STEP_NUMBER}>3</span>
    <span className={CLASS_STEP_DESCRIPTION}>Step 3</span>
  </div>
  <hr className={CLASS_BAR} />
 
  <div className={CLASS_STEP}>
    <span className={CLASS_STEP_NUMBER}>4</span>
    <span className={CLASS_STEP_DESCRIPTION}>Step 4</span>
  </div>
  */

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

// Remove these comments if you need
// MoleculeProgressSteps.contextTypes = {i18n: PropTypes.object}
// MoleculeProgressSteps.propTypes = {}
// MoleculeProgressSteps.defaultProps = {}

export default MoleculeProgressSteps

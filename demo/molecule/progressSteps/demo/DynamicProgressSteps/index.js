import React, {Component, Fragment} from 'react'

import MoleculeProgressSteps, {
  MoleculeProgressStep,
  statuses
} from '../../../../../components/molecule/progressSteps/src'
import {FillCheckIcon} from '../Icons'

class DynamicMoleculeProgressSteps extends Component {
  state = {
    statuses: Object.values(this.props.config).map(({status}) => status) // eslint-disable-line
  }

  setStep = e => {
    e.preventDefault()
    const {
      dataset: {step: selectedStep}
    } = e.target
    const newStatuses = this.state.statuses.map((status, index) => {
      const step = index + 1
      if (+selectedStep > step) return statuses.VISITED
      if (+selectedStep === step) return statuses.ACTIVE
      return statuses.NORMAL
    })
    this.setState({
      statuses: newStatuses
    })
  }

  // updatePage = (e, {page}) => {
  //   console.log({e, page}) // eslint-disable-line
  //   this.setState({page}, () => {
  //     console.log(this.state) // eslint-disable-line
  //   })
  // }

  render() {
    const {setStep} = this
    const {config} = this.props // eslint-disable-line
    const {statuses} = this.state // eslint-disable-line
    return (
      <Fragment>
        <div style={{padding: '10px', margin: '10px'}}>
          {Object.keys(config).map((stepNumber, index) => (
            <a
              key={index}
              href="#"
              onClick={setStep}
              data-step={stepNumber}
              style={{padding: '0 5px'}}
            >
              Step {stepNumber}
            </a>
          ))}
        </div>

        <MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>
          {Object.values(config).map(
            ({status, label, content, icon}, index) => (
              <MoleculeProgressStep
                key={index}
                label={label}
                status={statuses[index]}
                icon={icon}
              >
                {content}
              </MoleculeProgressStep>
            )
          )}
        </MoleculeProgressSteps>
      </Fragment>
    )
  }
}

export default DynamicMoleculeProgressSteps

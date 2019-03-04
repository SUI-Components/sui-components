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
          Set{' '}
          <button onClick={setStep} data-step="1">
            Step1
          </button>
          <button onClick={setStep} data-step="2">
            Step2
          </button>
          <button onClick={setStep} data-step="3">
            Step3
          </button>
          <button onClick={setStep} data-step="4">
            Step4
          </button>

          <button onClick={setStep} data-step="5">
            All Done
          </button>
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

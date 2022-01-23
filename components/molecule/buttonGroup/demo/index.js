/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'

import AtomButton, {atomButtonGroupPositions} from '@s-ui/react-atom-button'

import MoleculeButtonGroup from 'components/molecule/buttonGroup/src/index.js'

import SimpleOptionsRadioForm from './inputRadio/index.js'
import SimpleOptionsCheckboxForm from './inputCheckbox/index.js'

import './index.scss'

const ButtonDesignByState = () => {
  const [selected, setSelected] = useState()

  const _onClick = buttonId => {
    console.log(buttonId)
    setSelected(buttonId)
  }

  return (
    <MoleculeButtonGroup>
      <AtomButton
        design={selected !== 'A' ? 'outline' : 'solid'}
        onClick={() => _onClick('A')}
      >
        A
      </AtomButton>
      <AtomButton
        design={selected !== 'B' ? 'outline' : 'solid'}
        onClick={() => _onClick('B')}
      >
        B
      </AtomButton>
      <AtomButton
        design={selected !== 'C' ? 'outline' : 'solid'}
        onClick={() => _onClick('C')}
      >
        C
      </AtomButton>
    </MoleculeButtonGroup>
  )
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Button Group</h1>
        <div className="DemoMoleculeButtonGroup-section DemoMoleculeButtonGroup-designs">
          <h2>As a group of buttons that trigger some action (or link)</h2>
          <div>
            <MoleculeButtonGroup>
              <AtomButton
                design="solid"
                onClick={e => window.alert('clicked A')}
              >
                A
              </AtomButton>
              <AtomButton
                design="solid"
                onClick={e => window.alert('clicked B')}
              >
                B
              </AtomButton>
              <AtomButton
                design="solid"
                onClick={e => window.alert('clicked C')}
              >
                C
              </AtomButton>
            </MoleculeButtonGroup>
            <MoleculeButtonGroup>
              <AtomButton
                design="outline"
                onClick={e => window.alert('clicked A')}
              >
                A
              </AtomButton>
              <AtomButton
                design="outline"
                onClick={e => window.alert('clicked B')}
              >
                B
              </AtomButton>
              <AtomButton
                design="outline"
                onClick={e => window.alert('clicked C')}
              >
                C
              </AtomButton>
            </MoleculeButtonGroup>
            <MoleculeButtonGroup>
              <AtomButton
                design="flat"
                onClick={e => window.alert('clicked A')}
              >
                A
              </AtomButton>
              <AtomButton
                design="flat"
                onClick={e => window.alert('clicked B')}
              >
                B
              </AtomButton>
              <AtomButton
                design="flat"
                onClick={e => window.alert('clicked C')}
              >
                C
              </AtomButton>
            </MoleculeButtonGroup>
          </div>
          <div className="DemoMoleculeButtonGroup-negative">
            <MoleculeButtonGroup>
              <AtomButton
                design="solid"
                negative
                onClick={e => window.alert('clicked A')}
              >
                A
              </AtomButton>
              <AtomButton
                design="solid"
                negative
                onClick={e => window.alert('clicked B')}
              >
                B
              </AtomButton>
              <AtomButton
                design="solid"
                negative
                onClick={e => window.alert('clicked C')}
              >
                C
              </AtomButton>
            </MoleculeButtonGroup>
            <MoleculeButtonGroup>
              <AtomButton
                design="outline"
                negative
                onClick={e => window.alert('clicked A')}
              >
                A
              </AtomButton>
              <AtomButton
                design="outline"
                negative
                onClick={e => window.alert('clicked B')}
              >
                B
              </AtomButton>
              <AtomButton
                design="outline"
                negative
                onClick={e => window.alert('clicked C')}
              >
                C
              </AtomButton>
            </MoleculeButtonGroup>
            <MoleculeButtonGroup>
              <AtomButton
                design="flat"
                negative
                onClick={e => window.alert('clicked A')}
              >
                A
              </AtomButton>
              <AtomButton
                design="flat"
                negative
                onClick={e => window.alert('clicked B')}
              >
                B
              </AtomButton>
              <AtomButton
                design="flat"
                negative
                onClick={e => window.alert('clicked C')}
              >
                C
              </AtomButton>
            </MoleculeButtonGroup>
          </div>
        </div>
        <div className="DemoMoleculeButtonGroup-section">
          <h2>
            As a group of choices (only one can be selected) → 'input radio'
            like
          </h2>
          <SimpleOptionsRadioForm />
        </div>
        <div className="DemoMoleculeButtonGroup-section">
          <h2>
            As a group of choices (several can be selected) → 'checkbox' like
          </h2>
          <SimpleOptionsCheckboxForm />
        </div>
        <div
          style={{width: '500px'}}
          className="DemoMoleculeButtonGroup-section"
        >
          <h2>specifying groupPositions</h2>
          <MoleculeButtonGroup groupPositions={atomButtonGroupPositions}>
            <AtomButton design="solid">A</AtomButton>
            <AtomButton design="solid">B</AtomButton>
            <AtomButton design="solid">C</AtomButton>
          </MoleculeButtonGroup>
        </div>
        <div className="DemoMoleculeButtonGroup-section">
          <h2>different design dependeding on state</h2>
          <ButtonDesignByState />
        </div>
      </div>
    </div>
  )
}

export default Demo

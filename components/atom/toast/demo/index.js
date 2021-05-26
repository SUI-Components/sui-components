/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {useState} from 'react'
import Button from '@s-ui/react-atom-button'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import IconClose from '@s-ui/react-icons/lib/Close'
import {IconArrowDown} from './Icons'

import AtomToast, {
  atomToastPositions,
  atomToastAutoCloseTimes
} from 'components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)

  const [position, setPosition] = useState(atomToastPositions.topRight)
  const [autoClose, setAutoClose] = useState(true)
  const [autoCloseTime, setAutoCloseTime] = useState(
    atomToastAutoCloseTimes.short
  )
  const [globalClose, setGlobalClose] = useState()
  const [effect, setEffect] = useState(true)

  const renderContent = () => (
    <div className="DemoToast-content">
      <span>Morty! I'm a pickle!!!!!!!!!!!!!!! 🥒</span>
    </div>
  )

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Toast</h1>
        <label className="DemoToast-label">Position</label>
        <MoleculeSelect
          value={position}
          onChange={(ev, {value}) => setPosition(value)}
          placeholder="Select a position..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(atomToastPositions).map(key => (
            <MoleculeSelectOption key={key} value={atomToastPositions[key]}>
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <label className="DemoToast-label">Auto close time</label>
        <MoleculeSelect
          value={autoCloseTime}
          onChange={(ev, {value}) => setAutoCloseTime(value)}
          placeholder="Select an auto close time..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(atomToastAutoCloseTimes).map(key => (
            <MoleculeSelectOption
              key={key}
              value={atomToastAutoCloseTimes[key]}
            >
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <label className="DemoToast-label">Auto close</label>
        <input
          type="checkbox"
          checked={autoClose}
          onChange={ev => setAutoClose(ev.target.checked)}
        />
        <label className="DemoToast-label">Global close</label>
        <input
          type="checkbox"
          checked={globalClose}
          onChange={ev => setGlobalClose(ev.target.checked)}
        />
        <label className="DemoToast-label">Effect</label>
        <input
          type="checkbox"
          checked={effect}
          onChange={ev => setEffect(ev.target.checked)}
        />
        <br />
        <Button onClick={() => setShow(true)} fullWidth>
          Show Toast
        </Button>
        {show && (
          <AtomToast
            autoClose={Boolean(autoClose)}
            autoCloseTime={autoCloseTime}
            effect={effect}
            iconClose={<IconClose />}
            position={position}
            onClose={() => setShow(false)}
            globalClose={globalClose}
          >
            {renderContent()}
          </AtomToast>
        )}
      </div>
    </div>
  )
}

export default Demo

/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'
import Button from '@s-ui/react-atom-button'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import IconClose from '@schibstedspain/sui-svgiconset/lib/Close'
import {IconArrowDown} from './Icons'
import AtomPopover, {
  atomPopoverPositions
} from '../../../../components/atom/popover/src'
import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)
  const [closeIcon, setCloseIcon] = useState(true)
  const [position, setPosition] = useState(atomPopoverPositions.BOTTOM)

  const renderContent = () => (
    <div style={{width: '200px', padding: '8px'}}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mauris
        ornare, imperdiet nunc a, interdum dolor.
      </span>
    </div>
  )

  return (
    <div className="DemoPopover">
      <h1>Atom Popover</h1>
      <label className="DemoPopover-label">Position</label>
      <MoleculeSelect
        value={position}
        onChange={(ev, {value}) => setPosition(value)}
        placeholder="Select a position..."
        iconArrowDown={<IconArrowDown />}
      >
        {Object.keys(atomPopoverPositions).map(key => (
          <MoleculeSelectOption key={key} value={atomPopoverPositions[key]}>
            {key}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
      <br />
      <label className="DemoPopover-label">Add close icon</label>
      <input
        type="checkbox"
        checked={closeIcon}
        onChange={ev => setCloseIcon(ev.target.checked)}
      />

      <div className="DemoPopover-buttons">
        <AtomPopover
          closeIcon={closeIcon && <IconClose />}
          placement={position}
          onClose={() => console.log('CLOSE POPOVER!')}
          content={renderContent()}
          id="random-id"
        >
          <Button>Show Popover in component without "ref"</Button>
        </AtomPopover>
        <AtomPopover
          closeIcon={closeIcon && <IconClose />}
          placement={position}
          onClose={() => console.log('CLOSE POPOVER!')}
          content={renderContent()}
        >
          <div className="DemoPopover-button">Show Popover in HTML ELEMENT</div>
        </AtomPopover>
      </div>
    </div>
  )
}

export default Demo

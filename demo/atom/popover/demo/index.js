/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import {IconArrowDown} from './Icons'
import AtomPopover, {
  atomPopoverPositions
} from '../../../../components/atom/popover/src'
import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)

  const [position, setPosition] = useState(atomPopoverPositions.BOTTOM)

  const renderContent = () => (
    <div style={{width: '200px', padding: '16px'}}>
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

      <div className="DemoPopover-buttons">
        <AtomPopover
          placement={position}
          onClose={() => console.log('CLOSE POPOVER!')}
          content={() => renderContent()}
          id="random-id"
        >
          <Button>Show Popover in component without "ref"</Button>
        </AtomPopover>
        <AtomPopover
          placement={position}
          onClose={() => console.log('CLOSE POPOVER!')}
          content={() => renderContent()}
        >
          <div className="DemoPopover-button">Show Popover in HTML ELEMENT</div>
        </AtomPopover>
      </div>
    </div>
  )
}

export default Demo

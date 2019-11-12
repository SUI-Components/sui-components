/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'

import AtomToast, {
  atomToastPosistions
} from '../../../../components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [showToast, setShowToast] = useState(false)
  const [position, setPosition] = useState(atomToastPosistions.bottom)

  const renderContent = () => (
    <div className="DemoToast-content">
      <span>Lorem ipsum</span>
    </div>
  )

  return (
    <>
      <h1>Atom Toast</h1>
      <label>
        Position
        <select onChange={ev => setPosition(ev.target.value)}>
          {Object.keys(atomToastPosistions).map(position => (
            <option key={position} value={atomToastPosistions[position]}>
              {atomToastPosistions[position]}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <AtomToast position={position}>{renderContent()}</AtomToast>
      )}
    </>
  )
}

export default Demo

/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'

import AtomToast, {
  atomToastPosistions
} from '../../../../components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState(atomToastPosistions.bottom)
  const [autoClose, setAutoClose] = useState(true)

  const renderContent = () => (
    <div className="DemoToast-content">
      <span>Lorem ipsum</span>
    </div>
  )

  return (
    <>
      <h1>Atom Toast</h1>
      <label>
        position
        <select value={position} onChange={ev => setPosition(ev.target.value)}>
          {Object.keys(atomToastPosistions).map(position => (
            <option key={position} value={atomToastPosistions[position]}>
              {atomToastPosistions[position]}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        autoClose
        <select
          value={autoClose}
          onChange={ev => setAutoClose(ev.target.value)}
        >
          <option value>true</option>
          <option value={false}>false</option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={() => setShow(true)}>Show Toast</button>
      {show && (
        <AtomToast
          autoClose={autoClose}
          position={position}
          onClose={() => setShow(false)}
        >
          {renderContent()}
        </AtomToast>
      )}
    </>
  )
}

export default Demo

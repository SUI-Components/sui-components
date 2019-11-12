/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'

import AtomToast, {
  atomToastPosistions,
  atomToastAutoCloseTimes
} from '../../../../components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState(atomToastPosistions.bottom)
  const [autoClose, setAutoClose] = useState(true)
  const [autoCloseTime, setAutoCloseTime] = useState(
    atomToastAutoCloseTimes.SHORT
  )

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
              {position}
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
      <label>
        autoCloseTime
        <select
          value={autoCloseTime}
          onChange={ev => setAutoCloseTime(ev.target.value)}
        >
          {Object.keys(atomToastAutoCloseTimes).map(time => (
            <option key={time} value={atomToastAutoCloseTimes[time]}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={() => setShow(true)}>Show Toast</button>
      {show && (
        <AtomToast
          autoClose={autoClose}
          autoCloseTime={autoCloseTime}
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

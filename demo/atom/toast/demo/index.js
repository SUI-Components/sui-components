/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'

import AtomToast, {
  atomToastPosistions,
  atomToastAutoCloseTimes,
  atomToastSizes,
  atomToastMargins
} from '../../../../components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState(atomToastPosistions.TOP_RIGHT)
  const [autoClose, setAutoClose] = useState(false)
  const [autoCloseTime, setAutoCloseTime] = useState(
    atomToastAutoCloseTimes.SHORT
  )
  const [crossToClose, setCrossToClose] = useState(true)
  const [size, setSize] = useState(atomToastSizes.MEDIUM)
  const [margin, setMargin] = useState(atomToastMargins.MEDIUM)
  const [globalClose, setGlobalClose] = useState(false)
  const [effect, setEffect] = useState(true)

  const renderContent = () => (
    <div className="DemoToast-content">
      <span>Morty! I'm a pickle! 🥒</span>
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
        <input
          type="checkbox"
          checked={autoClose}
          onChange={ev => setAutoClose(ev.target.checked)}
        />
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
      <label>
        crossToClose
        <input
          type="checkbox"
          checked={crossToClose}
          onChange={ev => setCrossToClose(ev.target.checked)}
        />
      </label>
      <br />
      <label>
        size
        <select value={size} onChange={ev => setSize(ev.target.value)}>
          {Object.keys(atomToastSizes).map(size => (
            <option key={size} value={atomToastSizes[size]}>
              {size}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        margin
        <select value={margin} onChange={ev => setMargin(ev.target.value)}>
          {Object.keys(atomToastMargins).map(margin => (
            <option key={margin} value={atomToastMargins[margin]}>
              {margin}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        globalClose
        <input
          type="checkbox"
          checked={globalClose}
          onChange={ev => setGlobalClose(ev.target.checked)}
        />
      </label>
      <br />
      <label>
        effect
        <input
          type="checkbox"
          checked={effect}
          onChange={ev => setEffect(ev.target.checked)}
        />
      </label>
      <br />
      <button onClick={() => setShow(true)}>Show Toast</button>
      {show && (
        <AtomToast
          autoClose={Boolean(autoClose)}
          autoCloseTime={autoCloseTime}
          crossToClose={crossToClose}
          effect={effect}
          position={position}
          onClose={() => setShow(false)}
          size={size}
          margin={margin}
          globalClose={globalClose}
        >
          {renderContent()}
        </AtomToast>
      )}
    </>
  )
}

export default Demo

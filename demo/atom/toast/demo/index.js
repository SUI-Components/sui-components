/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {useState} from 'react'

import AtomToast from '../../../../components/atom/toast/src'

import './index.scss'

const Demo = () => {
  const [showToast, setShowToast] = useState(false)

  return (
    <>
      <h3>Atom Toast</h3>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && <AtomToast />}
    </>
  )
}

export default Demo

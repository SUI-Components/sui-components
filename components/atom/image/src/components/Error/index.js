import React from 'react'
import types from './types'

const Error = ({ className, icon, text }) => (
  <div className={className}>
    <p>icon</p>
    <p>{text}</p>
  </div>
)

Error.propTypes = types

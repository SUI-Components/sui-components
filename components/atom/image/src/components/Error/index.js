import React from 'react'
import types from './types'

const Error = ({ className, icon: Icon, text }) => (
  <div className={className}>
    { Icon && <Icon />}
    <p>{text}</p>
  </div>
)

Error.propTypes = types

export default Error

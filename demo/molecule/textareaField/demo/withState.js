import React, {useState, useCallback} from 'react'

const handleChange = setter => (e, {value}) => {
  setter(value)
}

export default BaseComponent => ({value, onChange, ...otherProps}) => {
  const [ownValue, setValue] = useState(value || '')
  return (
    <BaseComponent
      {...otherProps}
      value={ownValue}
      onChange={useCallback(handleChange(setValue))}
    />
  )
}

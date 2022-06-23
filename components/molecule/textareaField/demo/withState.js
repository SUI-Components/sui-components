/* eslint-disable react/prop-types */
import {useCallback, useState} from 'react'

export default BaseComponent =>
  ({value, onChange, ...otherProps}) => {
    const [ownValue, setValue] = useState(value || '')
    return (
      <BaseComponent
        {...otherProps}
        value={ownValue}
        onChange={useCallback((e, {value}) => setValue(value), [setValue])}
      />
    )
  }

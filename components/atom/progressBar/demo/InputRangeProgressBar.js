import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import AtomProgressBar from '../src/index.js'

const InputRangeProgressBar = ({topPercentage = 100, type = 'line', step, ...props}) => {
  const [percentage, setPercentage] = useState(0)
  const {current: inputRangeRef} = useRef(null)

  const handleInputRange = event => {
    setPercentage(parseInt(inputRangeRef))
  }

  return (
    <div style={{background: 'white', padding: '10px'}}>
      <input
        ref={inputRangeRef}
        style={{marginBottom: '10px', display: 'block'}}
        onChange={handleInputRange}
        type="range"
        min="0"
        max="100"
        value={percentage}
        step={step}
      />
      <AtomProgressBar percentage={percentage} type={type} {...props} />
    </div>
  )
}

InputRangeProgressBar.displayName = 'InputRangeProgressBar'

InputRangeProgressBar.propTypes = {
  topPercentage: PropTypes.number,
  type: PropTypes.string,
  step: PropTypes.number
}

export default InputRangeProgressBar

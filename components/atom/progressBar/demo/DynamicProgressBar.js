import {useEffect, useRef, useState} from 'react'

import PropTypes from 'prop-types'

import AtomProgressBar from '../src/index.js'

const DynamicProgressBar = ({topPercentage = 100, type = 'line', intervalTime, step: stepProp}) => {
  const [percentage, setPercentage] = useState(0)
  const {current: intervalId} = useRef(null)

  const handleClick = () => {
    const intervalId = setInterval(() => {
      const step = stepProp === undefined ? Math.ceil(Math.random() * (topPercentage - percentage)) : stepProp
      if (percentage < topPercentage) {
        setPercentage(percentage + step)
      } else {
        clearInterval(intervalId)
      }
    }, intervalTime)
  }

  useEffect(() => {
    return () => clearInterval(intervalId)
  }, [intervalId])

  return (
    <div style={{background: 'white', padding: '10px'}}>
      <button style={{marginBottom: '10px', display: 'block'}} onClick={handleClick}>
        Start Progress
      </button>
      <AtomProgressBar percentage={percentage} type={type} />
    </div>
  )
}

DynamicProgressBar.propTypes = {
  topPercentage: PropTypes.number,
  type: PropTypes.string,
  intervalTime: PropTypes.number,
  step: PropTypes.number
}

DynamicProgressBar.displayName = 'DynamicProgressBar'

export default DynamicProgressBar

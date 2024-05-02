import {useEffect, useRef, useState} from 'react'

import PropTypes from 'prop-types'

import AtomProgressBar from '../src/index.js'

const StaticWithAnimation = ({
  percentage: percentageProp = 0,
  mainBarPercentage: mainBarPercentageProp,
  extraBarPercentage: extraBarPercentageProp,
  type = 'line',
  topPercentage,
  ...props
}) => {
  const {current: timeoutId} = useRef()
  const [mainBarPercentage, setMainBarPercentage] = useState(0)
  const [extraBarPercentage, setExtraBarPercentage] = useState(0)
  const [percentage, setPercentage] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (mainBarPercentageProp) {
        setMainBarPercentage(mainBarPercentage)
        setExtraBarPercentage(extraBarPercentageProp)
      } else {
        setPercentage(percentageProp)
      }
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <div style={{background: 'white', padding: '10px'}}>
      <AtomProgressBar
        type={type}
        percentage={percentage}
        mainBarPercentage={mainBarPercentage}
        extraBarPercentage={extraBarPercentage}
        topPercentage={topPercentage}
        {...props}
      />
    </div>
  )
}

StaticWithAnimation.displayName = 'StaticWithAnimation'

StaticWithAnimation.propTypes = {
  type: PropTypes.string,
  percentage: PropTypes.number,
  mainBarPercentage: PropTypes.number,
  extraBarPercentage: PropTypes.number,
  topPercentage: PropTypes.number
}

export default StaticWithAnimation

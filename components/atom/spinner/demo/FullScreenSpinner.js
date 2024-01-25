/* eslint-disable react/prop-types */
import {useState} from 'react'

import {Button} from '@s-ui/documentation-library'

import AtomSpinner, {atomSpinnerTypes} from '../src/index.js'

const FullScreenSpinner = ({children, overlayType}) => {
  const [show, setShow] = useState(false)

  const handleOnClick = () => {
    setShow(true)
    setTimeout(() => setShow(false), 5000)
  }
  return (
    <>
      <Button onClick={handleOnClick}>Click to show fullscreen spinner for 5 seconds</Button>
      {show && (
        <AtomSpinner overlayType={overlayType} type={atomSpinnerTypes.FULL}>
          {children}
        </AtomSpinner>
      )}
    </>
  )
}

FullScreenSpinner.displayName = 'FullScreenSpinner'

export default FullScreenSpinner

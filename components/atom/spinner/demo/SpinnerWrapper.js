import {useEffect, useState} from 'react'

import {Paragraph} from '@s-ui/documentation-library'

import AtomSpinner from '../src/index.js'
import {dashStyle} from './settings.js'

const SpinnerWrapper = () => {
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true)
    }, 5000)
  }, [])
  return contentLoaded ? (
    <Paragraph style={dashStyle}>Content loaded, spinner disappears</Paragraph>
  ) : (
    <Paragraph style={dashStyle}>
      Slowly loading content, delayed spinner will be shown
      <AtomSpinner isDelayed />
    </Paragraph>
  )
}

SpinnerWrapper.displayName = 'SpinnerWrapper'

export default SpinnerWrapper

import React from 'react'
import PropTypes from 'prop-types'
import {useNearScreen} from '@s-ui/react-hooks'
import AtomIcon from './Icon'

export default function LazyIcon({children, ...restOfProps}) {
  const [isIntersecting, outerRef] = useNearScreen()

  return (
    <AtomIcon {...restOfProps}>
      {isIntersecting ? children : <svg ref={outerRef} />}
    </AtomIcon>
  )
}

LazyIcon.propTypes = {
  children: PropTypes.element
}

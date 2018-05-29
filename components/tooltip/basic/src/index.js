import PropTypes from 'prop-types'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import cx from 'classnames'

export default function TooltipBasic(props) {
  const {className} = props
  const customClass = cx(`sui-TooltipBasic`, {
    [className]: !!className
  })
  return (
    <ReactTooltip {...props} className={customClass} insecure={false} border />
  )
}

TooltipBasic.propTypes = {
  className: PropTypes.string
}

TooltipBasic.displayName = 'TooltipBasic'

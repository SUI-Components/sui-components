import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import {Handle} from './settings.js'

const Handler = ({
  value,
  index,
  dragging,
  refAtomSlider,
  hideTooltip,
  className: handleClassName,
  ...restProps
}) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!ready) setReady(!ready)
  }, [ready])
  if (!refAtomSlider?.current) {
    return null
  }
  if (hideTooltip) {
    return <Handle value={value} {...restProps} />
  }
  return null
}

Handler.propTypes = {
  /** value  */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  index: PropTypes.number,
  dragging: PropTypes.bool,
  refAtomSlider: PropTypes.func,
  hideTooltip: PropTypes.bool,
  className: PropTypes.string
}

export default Handler

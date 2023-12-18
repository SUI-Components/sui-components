import {useRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS, Handle, SliderTooltip} from './settings.js'

const Handler = ({value, dragging, refAtomSlider, hideTooltip, className: handleClassName, ...restProps}) => {
  const refHandle = useRef()
  if (hideTooltip) {
    return (
      <Handle ref={refHandle} value={value} {...restProps} className={cx(`${BASE_CLASS}-handle`, handleClassName)} />
    )
  }

  return (
    <SliderTooltip prefixCls="rc-slider-tooltip" overlay={value} placement="top" visible>
      <Handle ref={refHandle} value={value} {...restProps} className={cx(`${BASE_CLASS}-handle`, handleClassName)} />
    </SliderTooltip>
  )
}

Handler.propTypes = {
  /** value  */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  dragging: PropTypes.bool,
  refAtomSlider: PropTypes.func,
  hideTooltip: PropTypes.bool,
  className: PropTypes.string
}

export default Handler

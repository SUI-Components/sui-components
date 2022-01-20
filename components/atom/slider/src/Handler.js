import {useRef, useState, useEffect} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import {Handle, Tooltip, BASE_CLASS} from './settings'

const Handler = ({
  value,
  index,
  dragging,
  refAtomSlider,
  hideTooltip,
  className: handleClassName,
  ...restProps
}) => {
  const refHandle = useRef()
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(!ready)
  }, [])
  if (!refAtomSlider?.current) {
    return null
  }
  if (hideTooltip) {
    return <Handle value={value} {...restProps} />
  }
  return (
    <Tooltip
      getTooltipContainer={() => refHandle?.current?.handle}
      prefixCls="rc-slider-tooltip"
      overlay={value}
      placement="top"
      visible
      key={index}
    >
      <Handle
        ref={refHandle}
        value={value}
        {...restProps}
        className={cx(`${BASE_CLASS}-handle`, handleClassName)}
      />
    </Tooltip>
  )
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

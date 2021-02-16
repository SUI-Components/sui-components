import {lazy, Suspense} from 'react'
import Handle from 'rc-slider/lib/Handle'

const Tooltip = lazy(() => import('rc-tooltip'))

const createHandler = (refAtomSlider, hideTooltip) => props => {
  const {value, index, dragging, ...restProps} = props // eslint-disable-line
  if (!refAtomSlider?.current) {
    return null
  }

  if (hideTooltip) {
    return Handle ? (
      <Suspense fallback={null}>
        <Handle value={value} {...restProps} dragging={dragging.toString()} />
      </Suspense>
    ) : null
  }
  return Handle ? (
    <Suspense fallback={null}>
      <Tooltip
        getTooltipContainer={() => refAtomSlider.current}
        key={index}
        overlay={value}
        placement="top"
        prefixCls="rc-slider-tooltip"
        visible
      >
        <Handle value={value} {...restProps} dragging={dragging.toString()} />
      </Tooltip>
    </Suspense>
  ) : null
}

export default createHandler

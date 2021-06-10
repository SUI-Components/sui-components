import loadable from '@loadable/component'
import Handle from 'rc-slider/lib/Handle'

const Tooltip = loadable(() => import('rc-tooltip'), {ssr: true})

const createHandler = (refAtomSlider, hideTooltip) => props => {
  const {value, index, dragging, ...restProps} = props // eslint-disable-line
  if (!refAtomSlider?.current) {
    return null
  }

  if (hideTooltip) {
    return Handle ? (
      <Handle value={value} {...restProps} dragging={dragging.toString()} />
    ) : null
  }
  return Handle ? (
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
  ) : null
}

export default createHandler

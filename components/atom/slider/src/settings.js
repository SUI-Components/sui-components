import Range from 'rc-slider/lib/Range'
import Slider from 'rc-slider/lib/Slider'
import Handle from 'rc-slider/lib/Handle'
import Tooltip from 'rc-tooltip/lib/Tooltip'
import Label from './Label'

const SliderTooltip = Slider
const RangeTooltip = Range

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`
const CLASS_INVERSE = `${BASE_CLASS}--inverse`

export {
  RangeTooltip as Range,
  SliderTooltip as Slider,
  Label,
  Handle,
  Tooltip,
  BASE_CLASS,
  CLASS_DISABLED,
  CLASS_INVERSE
}

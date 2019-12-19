import AddonHoc from './Features/Addon'
import IconHoc from './Features/Icon'
import WithButtonHoc from './Features/WithButton'
import Component, {inputSizes} from './Component'

export default WithButtonHoc(AddonHoc(IconHoc(Component)))
export {inputSizes}

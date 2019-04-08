import AddonHoc from './Features/Addon'
import IconHoc from './Features/Icon'
import Component, {inputSizes} from './Component'

export default AddonHoc(IconHoc(Component))
export {inputSizes}

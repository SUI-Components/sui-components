import AddonHoc from './Features/Addon'
import IconHoc from './Features/Icon'
import TagsHoc from './Features/Tags'
import Component, {inputSizes} from './Component'

export default AddonHoc(IconHoc(TagsHoc(Component)))
export {inputSizes}

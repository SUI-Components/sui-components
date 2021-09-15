import withAddons from './Features/Addon'
import withIcons from './Features/Icon'
import withButton from './Features/WithButton'
import Input, {inputStates, inputSizes} from './Component'

export default withButton(withAddons(withIcons(Input)))
export {inputSizes, inputStates}

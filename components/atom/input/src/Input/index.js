import withAddons from './HOC/withAddons'
import withIcons from './HOC/withIcons'
import withButton from './HOC/withButton'
import Input, {inputStates, inputSizes} from './Component'

export default withButton(withAddons(withIcons(Input)))
export {inputSizes, inputStates}

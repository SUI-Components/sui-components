import Input from '../Input/index.js'
import Mask from '../Mask/index.js'
import Password from '../Password/index.js'

export default ({type, ...rest}) => {
  switch (type) {
    case 'sui-password':
      return [Password, {...rest, type}]
    case 'mask':
      return [Mask, {...rest}]
    default:
      return [Input, {...rest, type}]
  }
}

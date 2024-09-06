import {IMaskMixin} from 'react-imask'

import Input from '../Input/index.js'

const IMask = IMaskMixin(({inputRef, value, size, ...props}) => {
  return <Input type="text" ref={inputRef} size={size} value={value} {...props} />
})

export default IMask

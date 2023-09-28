import {IMaskMixin} from 'react-imask'

import Input from '../Input/Component/index.js'

const IMask = IMaskMixin(({inputRef, value, size, ...props}) => {
  return (
    <Input type="text" ref={inputRef} size={size} value={value} {...props} />
  )
})

export default IMask

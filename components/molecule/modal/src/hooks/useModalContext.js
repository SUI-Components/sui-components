import {useContext} from 'react'

import ModalContext from '../context/index.js'

const useModalContext = () => {
  return useContext(ModalContext)
}

export default useModalContext

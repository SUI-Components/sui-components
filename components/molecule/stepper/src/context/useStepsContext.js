import {useContext} from 'react'

import StepsContext from './StepsContext.js'

export const useStepsContext = () => {
  return useContext(StepsContext)
}

export default useStepsContext

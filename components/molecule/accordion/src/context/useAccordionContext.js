import {useContext} from 'react'

import AccordionContext from './AccordionContext.js'

export const useAccordionContext = () => {
  return useContext(AccordionContext)
}

export default useAccordionContext

import {createContext} from 'react'

import {HEADER_ICON_POSITION} from '../settings.js'

export const defaultAccordionContext = {
  icon: undefined,
  headerIconPosition: HEADER_ICON_POSITION.RIGHT,
  values: []
}

const AccordionContext = createContext(defaultAccordionContext)

export default AccordionContext

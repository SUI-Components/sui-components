import {createContext} from 'react'
import {
  ALIGNMENT,
  DESIGN,
  JUSTIFY_CONTENT,
  HEADER_ICON_POSITION
} from '../settings.js'

export const defaultAccordionContext = {
  icon: undefined,
  headerIconPosition: HEADER_ICON_POSITION.RIGHT
}

const AccordionContext = createContext(defaultAccordionContext)

export default AccordionContext

import {createContext} from 'react'
import {ALIGNMENT, DESIGN, JUSTIFY_CONTENT} from '../settings.js'

export const defaultAccordionContext = {
}

const AccordionContext = createContext(defaultAccordionContext)

export default AccordionContext

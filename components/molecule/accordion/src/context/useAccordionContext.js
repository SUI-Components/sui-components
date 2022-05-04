import {useContext, useLayoutEffect} from 'react'

import AccordionContext from './AccordionContext.js'

export const useAccordionContext = ({isExpanded, value}) => {
  const context = useContext(AccordionContext)
  useLayoutEffect(() => {
    if (isExpanded === true && !context.values.includes(value)) {
      context.setValues([...context.values, value])
    } else if (isExpanded === false && context.values.includes(value)) {
      context.setValues(context.values.filter(val => val !== value))
    } else if (isExpanded === undefined) {
      console.log({isExpanded, value}, context.values)
    }
  }, [isExpanded, value])
  return context
}

export default useAccordionContext

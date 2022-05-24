import {useContext, useLayoutEffect} from 'react'

import AccordionContext from './AccordionContext.js'

export const useAccordionContext = ({isExpanded, value}) => {
  const context = useContext(AccordionContext)
  const {setValues, values} = context
  useLayoutEffect(() => {
    if (isExpanded === true && !values.includes(value)) {
      setValues([...values, value])
    } else if (isExpanded === false && values.includes(value)) {
      setValues(values.filter(val => val !== value))
    }
  }, [isExpanded, value, setValues, values])
  return context
}

export default useAccordionContext

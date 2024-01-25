import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import {BEHAVIOR} from '../settings.js'
import AccordionContext, {defaultAccordionContext} from './index.js'

const AccordionProvider = ({children, values, defaultValues, onChange, behavior, ...props}) => {
  const [stateValues, setStateValues] = useControlledState(values, defaultValues)
  return (
    <AccordionContext.Provider
      value={{
        ...defaultAccordionContext,
        ...props,
        behavior,
        onChange,
        values: stateValues,
        setValues: setStateValues
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

AccordionProvider.displayName = 'AccordionProvider'

AccordionProvider.propTypes = {
  /** The change default behavior **/
  behavior: PropTypes.oneOf(Object.values(BEHAVIOR)),
  /** the inner element **/
  children: PropTypes.node,
  /** function fired everytime a panel toggles its status */
  onChange: PropTypes.func,
  /** The initial opened values **/
  defaultValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /** The opened values **/
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
}

export default AccordionProvider

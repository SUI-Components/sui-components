import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import AccordionContext, {defaultAccordionContext} from './index.js'

const AccordionProvider = ({
  children,
  values,
  defaultValues,
  onChange,
  behavior,
  ...props
}) => {
  const [stateValues, setStateValues] = useControlledState(
    values,
    defaultValues
  )
  return (
    <AccordionContext.Provider
      value={{
        ...defaultAccordionContext,
        ...props,
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
  children: PropTypes.node
}

export default AccordionProvider

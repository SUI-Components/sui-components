import PropTypes from 'prop-types'

import useRefs from '../hooks/useRefs.js'
import StepsContext, {defaultStepsContext} from './index.js'

const StepsProvider = ({children, ...props}) => {
  const {useContextRef, useContextUnRef, steps} = useRefs()
  return (
    <StepsContext.Provider
      value={{
        ...defaultStepsContext,
        ...props,
        useContextRef,
        useContextUnRef,
        steps
      }}
    >
      {children}
    </StepsContext.Provider>
  )
}

StepsProvider.displayName = 'StepsProvider'

StepsProvider.propTypes = {
  children: PropTypes.node
}

export default StepsProvider

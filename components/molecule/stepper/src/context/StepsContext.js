import {createContext} from 'react'

import {ALIGNMENT, DESIGN, JUSTIFY_CONTENT} from '../settings.js'

export const defaultStepsContext = {
  as: 'li',
  useContextRef: () => null,
  useContextUnRef: () => null,
  hasConnector: true,
  design: DESIGN.DEFAULT,
  alignment: ALIGNMENT.HORIZONTAL,
  justifyContent: JUSTIFY_CONTENT.LEGACY,
  steps: 0
}

const StepsContext = createContext(defaultStepsContext)

export default StepsContext

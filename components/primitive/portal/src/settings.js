import {getTarget} from '@s-ui/js/lib/react/index.js'

export const BASE_CLASS = 'sui-PrimitivePortal'

const isRef = ref => typeof ref === 'object' && ref.hasOwnProperty('current')

export const getContainer = target => {
  if (target === undefined) {
    return globalThis?.document?.body
  } else if (isRef(target)) {
    return target.current
  }
  return getTarget(target)
}

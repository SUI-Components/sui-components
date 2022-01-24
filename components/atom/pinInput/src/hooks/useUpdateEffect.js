import {useEffect, useRef} from 'react'
/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
const useUpdateEffect = (effect = () => null, dependencies = []) => {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  }, dependencies) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useUpdateEffect

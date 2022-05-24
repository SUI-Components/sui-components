import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

import SUILoader from './SUILoader/index.js'
import {
  TYPES,
  DELAY,
  getParentClassName,
  addParentClass,
  removeParentClass
} from './settings.js'

const AtomSpinner = ({
  delayed: delayedFromProps = false,
  loader = <SUILoader />,
  negative = false,
  noBackground = false,
  type = TYPES.SECTION
}) => {
  const [delayed, setDelayed] = useState(delayedFromProps)
  const refSpinner = useRef()

  useEffect(() => {
    const parentClassName = getParentClassName({
      negative,
      noBackground,
      type
    })
    const parentNodeClassList = refSpinner.current.parentNode.classList

    if (!delayed) addParentClass(parentNodeClassList)(parentClassName)

    const timer = setTimeout(() => {
      setDelayed(false)
      addParentClass(parentNodeClassList)(parentClassName)
    }, DELAY)

    return () => {
      clearTimeout(timer)
      removeParentClass(parentNodeClassList)(parentClassName)
    }
  }, [delayed, noBackground, type])

  return <span ref={refSpinner}>{!delayed ? loader : <noscript />}</span>
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  /**
   * Possible options:
   * 'FULL': The spinner fits the whole page container
   * 'SECTION': The spinner fits a specific site component
   */
  type: PropTypes.oneOf(Object.values(TYPES)),

  /** Makes the spinner appear after 500 ms */
  delayed: PropTypes.bool,

  /** Alternate overlay color */
  negative: PropTypes.bool,

  /** No background */
  noBackground: PropTypes.bool,

  /** Loader to be shown in the middle of the container */
  loader: PropTypes.object
}

export default AtomSpinner
export {TYPES as AtomSpinnerTypes}

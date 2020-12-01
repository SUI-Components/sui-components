import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SUILoader from './SUILoader'

const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

const DELAY = 500 // ms
const BASE_CLASS = 'sui-AtomSpinner'
const CLASS_FULL = `${BASE_CLASS}--fullPage`
const CLASS_NO_BACKGROUND = `${BASE_CLASS}--noBackground`

const getParentClassName = ({type, noBackground}) =>
  cx({
    [BASE_CLASS]: type === TYPES.SECTION,
    [CLASS_FULL]: type === TYPES.FULL,
    [CLASS_NO_BACKGROUND]: noBackground
  })

const addParentClass = parentNodeClassList => parentClassName =>
  parentNodeClassList.add(...parentClassName.split(' '))
const removeParentClass = parentNodeClassList => parentClassName =>
  parentNodeClassList.remove(...parentClassName.split(' '))

const AtomSpinner = ({
  delayed: delayedFromProps,
  loader,
  type,
  noBackground
}) => {
  const [delayed, setDelayed] = useState(delayedFromProps)
  const refSpinner = useRef()

  useEffect(() => {
    const parentClassName = getParentClassName({type, noBackground})
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

  /** No background */
  noBackground: PropTypes.bool,

  /** Loader to be shown in the middle of the container */
  loader: PropTypes.object
}

AtomSpinner.defaultProps = {
  delayed: false,
  type: TYPES.SECTION,
  loader: <SUILoader />
}

export default AtomSpinner
export {TYPES as AtomSpinnerTypes}

import React, {useState, useEffect} from 'react'
// import ReactDOM from 'react-dom'
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

const AtomSpinner = ({delayed: _delayed, loader, type, noBackground}) => {
  const [delayed, setDelayed] = useState(_delayed)
  const parentClassName = getParentClassName({type, noBackground})

  useEffect(
    () => {
      // const parentNodeClassList = ReactDOM.findDOMNode(loader).parentNode.classList

      if (!delayed) {
        addParentClass()
        return
      }

      const timer = setTimeout(() => {
        setDelayed(false)
        addParentClass(addParentClass)
      }, DELAY)
      return () => {
        clearTimeout(timer)
        removeParentClass()
      }
    },
    [delayed, loader, parentClassName]
  )

  return !delayed ? loader : <noscript />
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

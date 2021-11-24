import {useEffect, useRef, forwardRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {
  CLASS_TAB,
  CLASS_TAB_ICON,
  CLASS_TAB_COUNT,
  CLASS_TAB_ACTIVE,
  CLASS_TAB_DISABLED
} from './config'

const MoleculeTab = forwardRef(
  (
    {active, onChange, disabled, icon, count, label, numTab, isIntersecting},
    forwardedRef
  ) => {
    const innerRef = useRef()

    const handleChange = ev => {
      !disabled && onChange(ev, {numTab})
    }

    useEffect(() => {
      if (active && isIntersecting) {
        innerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        })
      }
    }, [active, innerRef])

    const className = cx(CLASS_TAB, {
      [CLASS_TAB_ACTIVE]: active,
      [CLASS_TAB_DISABLED]: disabled
    })

    return (
      <li
        className={className}
        onClick={handleChange}
        ref={useMergeRefs(innerRef, forwardedRef)}
      >
        {icon && <span className={CLASS_TAB_ICON}>{icon}</span>}
        {!isNaN(count) && <span className={CLASS_TAB_COUNT}>{count}</span>}
        <span>{label}</span>
      </li>
    )
  }
)

MoleculeTab.propTypes = {
  /** Handler on Change Tabs */
  onChange: PropTypes.func,

  /** icon (React component) */
  icon: PropTypes.node,

  /** count to display */
  count: PropTypes.string,

  /** text to display */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Tab number */
  numTab: PropTypes.number,

  /** is active */
  active: PropTypes.bool,

  /** is disabled */
  disabled: PropTypes.bool,

  /** determines if the cntainer element is intersectiong in the view **/
  isIntersecting: PropTypes.bool
}

export default MoleculeTab

import {forwardRef, useEffect, useRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {CLASS_TAB, CLASS_TAB_ACTIVE, CLASS_TAB_COUNT, CLASS_TAB_DISABLED, CLASS_TAB_ICON} from './config.js'

const MoleculeTab = forwardRef(
  (
    {
      active,
      autoScrollIntoView = true,
      count,
      disabled,
      icon,
      id = 'molecule-tab-content',
      isIntersecting,
      label,
      numTab,
      onChange
    },
    forwardedRef
  ) => {
    const innerRef = useRef()

    const handleChange = ev => {
      !disabled && onChange(ev, {numTab})
    }

    useEffect(() => {
      if (autoScrollIntoView && active && isIntersecting) {
        innerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        })
      }
    }, [autoScrollIntoView, active, isIntersecting, innerRef])

    const className = cx(CLASS_TAB, {
      [CLASS_TAB_ACTIVE]: active,
      [CLASS_TAB_DISABLED]: disabled
    })

    return (
      <li
        className={className}
        onClick={handleChange}
        ref={useMergeRefs(innerRef, forwardedRef)}
        role="tab"
        aria-selected={active}
        aria-controls={`${id}-${numTab}`}
      >
        {icon && <span className={CLASS_TAB_ICON}>{icon}</span>}
        {!isNaN(count) && <span className={CLASS_TAB_COUNT}>{count}</span>}
        <span>{label}</span>
      </li>
    )
  }
)

MoleculeTab.propTypes = {
  /** Enable scroll into view funcionality */
  autoScrollIntoView: PropTypes.bool,

  /** Handler on Change Tabs */
  onChange: PropTypes.func,

  /** icon (React component) */
  icon: PropTypes.node,

  /** id used to make tabs unique per page */
  id: PropTypes.string,

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

  /** determines if the container element is intersecting in the view **/
  isIntersecting: PropTypes.bool
}

export default MoleculeTab

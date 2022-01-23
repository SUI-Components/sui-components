import {useCallback, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
  BASE_CLASS,
  CONTENT_CLASS,
  CONTAINER_BUTTON_CLASS,
  COLLAPSED_CLASS,
  BUTTON_CLASS,
  BUTTON_CONTENT_CLASS,
  ICON_CLASS,
  MIN_HEIGHT,
  CONTENT_ALIGN
} from './settings.js'

const MoleculeCollapsible = ({
  onClose = () => {},
  onOpen = () => {},
  alignContainer,
  children,
  height = MIN_HEIGHT,
  icon,
  showText,
  hideText,
  withGradient = true,
  withOverflow = false,
  withTransition = true
}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [showButton, setShowButton] = useState(true)
  const [childrenHeight, setChildrenHeight] = useState(0)

  const nodeCallback = useCallback(node => {
    setChildrenHeight(node !== null ? node.getBoundingClientRect().height : 0)
  }, [])

  const toggleCollapse = () => {
    if (showButton) {
      setCollapsed(!collapsed)
      ;(collapsed && onOpen()) || onClose()
    }
  }

  useEffect(() => {
    if (!childrenHeight) return
    setShowButton(childrenHeight >= height)
  }, [childrenHeight, height, setShowButton])
  const wrapperClassName = cx(`${BASE_CLASS}`, {
    [`${BASE_CLASS}--withGradient`]: withGradient,
    [COLLAPSED_CLASS]: collapsed
  })
  const iconClassName = cx(`${ICON_CLASS}`, {
    [COLLAPSED_CLASS]: collapsed
  })
  const containerClassName = cx(`${CONTAINER_BUTTON_CLASS}`, {
    [`${CONTAINER_BUTTON_CLASS}--withGradient`]: withGradient,
    [COLLAPSED_CLASS]: collapsed
  })
  const contentClassName = cx(`${CONTENT_CLASS}`, {
    [`${CONTENT_CLASS}--withTransition`]: withTransition,
    [`${CONTENT_CLASS}--withOverflow`]: withOverflow,
    [`${CONTENT_CLASS}--alignContainer-${alignContainer}`]: alignContainer
  })
  const containerHeight = collapsed ? `${height}px` : `${childrenHeight}px`

  return (
    <div className={wrapperClassName}>
      <div
        className={contentClassName}
        style={{maxHeight: !showButton ? 'none' : containerHeight}}
      >
        <div ref={nodeCallback}>{children}</div>
      </div>
      {showButton && (
        <div className={containerClassName}>
          <button
            type="button"
            className={BUTTON_CLASS}
            onClick={toggleCollapse}
          >
            <span className={BUTTON_CONTENT_CLASS} tabIndex="-1">
              {collapsed ? showText : hideText}
              <span className={iconClassName}>{icon}</span>
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

MoleculeCollapsible.displayName = 'MoleculeCollapsible'

MoleculeCollapsible.propTypes = {
  /**
   * Container align center || right
   */
  alignContainer: PropTypes.oneOf(Object.values(CONTENT_ALIGN)),
  /**
   * Content to collapse
   */
  children: PropTypes.node.isRequired,
  /**
   * Define the min height visible
   */
  height: PropTypes.number,
  /**
   * Icon to be added on the right of the content
   */
  icon: PropTypes.node.isRequired,
  /**
   * Text to show when content is collapsed
   */
  showText: PropTypes.string.isRequired,
  /**
   * Text to show when content is not collapsed
   */
  hideText: PropTypes.string.isRequired,
  /**
   * Activate/deactivate gradient
   */
  withGradient: PropTypes.bool,
  /**
   * Activate/deactivate horizontal overflow
   */
  withOverflow: PropTypes.bool,
  /**
   * Activate/deactivate transition
   */
  withTransition: PropTypes.bool,
  /**
   * On open callback
   */
  onOpen: PropTypes.func,
  /**
   * On close callback
   */
  onClose: PropTypes.func
}

export default MoleculeCollapsible

export {CONTENT_ALIGN}

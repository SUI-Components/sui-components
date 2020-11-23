import {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeCollapsible'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const CONTAINER_BUTTON_CLASS = `${BASE_CLASS}-container`
const COLLAPSED_CLASS = 'is-collapsed'
const BUTTON_CLASS = `${BASE_CLASS}-btn`
const BUTTON_CONTENT_CLASS = `${BUTTON_CLASS}-content`
const ICON_CLASS = `${BASE_CLASS}-icon`
const MIN_HEIGHT = 100 // px
const CONTENT_ALIGN = {
  CENTER: 'center',
  RIGHT: 'right'
}

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
  const childrenContainer = useRef()
  const [collapsed, setCollapsed] = useState(true)
  const [showButton, setShowButton] = useState(true)
  const [maxHeight, setMaxHeight] = useState(MIN_HEIGHT)

  const toggleCollapse = () => {
    if (showButton) {
      setCollapsed(!collapsed)
      ;(collapsed && onOpen()) || onClose()
    }
  }

  useEffect(() => {
    const {
      current: {offsetHeight}
    } = childrenContainer
    setShowButton(offsetHeight >= height)
    setMaxHeight(offsetHeight)
  }, [height])
  const wrapperClassName = cx(`${BASE_CLASS}`, {
    [`${BASE_CLASS}--withGradient`]: withGradient,
    [COLLAPSED_CLASS]: collapsed
  })
  const iconClassName = cx(`${ICON_CLASS}`, {
    [COLLAPSED_CLASS]: collapsed
  })
  const containerClassName = cx(`${CONTAINER_BUTTON_CLASS}`, {
    [`${CONTAINER_BUTTON_CLASS}--withGradient`]: withGradient,
    [COLLAPSED_CLASS]: collapsed,
    [`${CONTAINER_BUTTON_CLASS}--${alignContainer}`]: alignContainer
  })
  const contentClassName = cx(`${CONTENT_CLASS}`, {
    [`${CONTENT_CLASS}--withTransition`]: withTransition,
    [`${CONTENT_CLASS}--withOverflow`]: withOverflow
  })
  const containerHeight =
    showButton && collapsed ? `${height}px` : `${maxHeight}px`

  return (
    <div className={wrapperClassName}>
      <div
        className={contentClassName}
        style={{maxHeight: `${containerHeight}`}}
      >
        <div ref={childrenContainer}>{children}</div>
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

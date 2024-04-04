import {useCallback, useEffect, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {
  BASE_CLASS,
  BUTTON_CLASS,
  BUTTON_CONTENT_CLASS,
  BUTTON_TEXT_ALIGN,
  COLLAPSED_CLASS,
  CONTAINER_BUTTON_CLASS,
  CONTENT_ALIGN,
  CONTENT_CLASS,
  ICON_CLASS,
  MIN_HEIGHT
} from './settings.js'

const MoleculeCollapsible = ({
  onClose = () => {},
  onOpen = () => {},
  alignButtonText,
  alignContainer,
  children,
  height = MIN_HEIGHT,
  icon,
  isCollapsible = true,
  isDefaultExpanded = false,
  isExpanded,
  showText,
  hideText,
  withGradient = true,
  withOverflow = false,
  withTransition = true
}) => {
  const [expanded, setExpanded] = useControlledState(isExpanded, isDefaultExpanded)
  const [showButton, setShowButton] = useState(true)
  const [childrenHeight, setChildrenHeight] = useState(0)

  const nodeCallback = useCallback(
    node => {
      setChildrenHeight(node !== null ? node.getBoundingClientRect().height : 0)
    },
    [children]
  )

  const toggleCollapse = () => {
    if (showButton) {
      setExpanded(!expanded)
      expanded ? onClose() : onOpen()
    }
  }

  useEffect(() => {
    if (!childrenHeight || !expanded) return
    setShowButton(isCollapsible && childrenHeight >= height)
  }, [childrenHeight, expanded, height, isCollapsible, setShowButton])

  const wrapperClassName = cx(`${BASE_CLASS}`, {
    [`${BASE_CLASS}--withGradient`]: withGradient,
    [COLLAPSED_CLASS]: !expanded
  })
  const iconClassName = cx(`${ICON_CLASS}`, {
    [COLLAPSED_CLASS]: !expanded
  })
  const containerClassName = cx(`${CONTAINER_BUTTON_CLASS}`, {
    [`${CONTAINER_BUTTON_CLASS}--withGradient`]: withGradient,
    [`${CONTAINER_BUTTON_CLASS}--alignButtonText-${alignButtonText}`]: alignButtonText,
    [COLLAPSED_CLASS]: !expanded
  })
  const contentClassName = cx(`${CONTENT_CLASS}`, {
    [`${CONTENT_CLASS}--withTransition`]: withTransition,
    [`${CONTENT_CLASS}--withOverflow`]: withOverflow,
    [`${CONTENT_CLASS}--alignContainer-${alignContainer}`]: alignContainer
  })
  const containerHeight = !expanded ? `${height}px` : `${childrenHeight}px`

  return (
    <div className={wrapperClassName}>
      <div className={contentClassName} style={{maxHeight: !showButton ? 'none' : containerHeight}}>
        <div ref={nodeCallback}>{children}</div>
      </div>
      {showButton && (
        <div className={containerClassName}>
          <button type="button" className={BUTTON_CLASS} onClick={toggleCollapse}>
            <span className={BUTTON_CONTENT_CLASS} tabIndex="-1">
              {!expanded ? showText : hideText}
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
   * Button text align center || right || left
   */
  alignButtonText: PropTypes.oneOf(Object.values(BUTTON_TEXT_ALIGN)),
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
   * When expanded, do not show the inner toggle button for collapsing.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Make it expanded/collapsed uncontrolled
   */
  isDefaultExpanded: PropTypes.bool,
  /**
   * Make it expanded/collapsed controlled
   */
  isExpanded: PropTypes.bool,
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

export {
  CONTENT_ALIGN,
  CONTENT_ALIGN as moleculeCollapsibleContentAlign,
  BUTTON_TEXT_ALIGN as moleculeCollapsibleButtonAlign
}

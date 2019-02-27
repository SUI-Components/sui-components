import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeAccordion-tab'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const CONTAINER_BUTTON_CLASS = `${BASE_CLASS}-container`
const OPEN_CLASS = 'is-open'
const BUTTON_CLASS = `${BASE_CLASS}-btn`
const BUTTON_CONTENT_CLASS = `${BUTTON_CLASS}-content`
const BUTTON_TITLE_CLASS = `${BUTTON_CLASS}-title`
const ICON_CLASS = `${BASE_CLASS}-icon`
const MAX_HEIGHT = 100

class Tab extends Component {
  toggleCollapse = () => {
    const {onToggle} = this.props
    onToggle()
  }

  render() {
    const {
      children,
      icon,
      title,
      withTransition,
      isOpen,
      maxHeight
    } = this.props
    const wrapperClassName = cx(`${BASE_CLASS}`, {
      [OPEN_CLASS]: isOpen
    })
    const iconClassName = cx(`${ICON_CLASS}`, {
      [OPEN_CLASS]: isOpen
    })
    const containerClassName = cx(`${CONTAINER_BUTTON_CLASS}`, {
      [OPEN_CLASS]: isOpen
    })
    const contentClassName = cx(`${CONTENT_CLASS}`, {
      [`${CONTENT_CLASS}--withTransition`]: withTransition
    })
    const containerHeight = isOpen ? `${maxHeight}px` : `0px`

    return (
      <div className={wrapperClassName}>
        <div className={containerClassName}>
          <button
            type="button"
            className={BUTTON_CLASS}
            onClick={this.toggleCollapse}
          >
            <span className={BUTTON_CONTENT_CLASS} tabIndex="-1">
              <span className={BUTTON_TITLE_CLASS}>{title}</span>
              <span className={iconClassName}>{icon}</span>
            </span>
          </button>
        </div>
        <div
          className={contentClassName}
          style={{maxHeight: `${containerHeight}`}}
        >
          <div ref={this.childrenContainer}>{children}</div>
        </div>
      </div>
    )
  }
}

Tab.displayName = 'Tab'

Tab.propTypes = {
  /**
   * Content to collapse
   */
  children: PropTypes.node.isRequired,
  /**
   * Define the max height visible
   */
  maxHeight: PropTypes.number,
  /**
   * Icon to be added on the right of the content
   */
  icon: PropTypes.node.isRequired,
  /**
   * Title tab
   */
  title: PropTypes.string.isRequired,
  /**
   * Activate/deactivate transition
   */
  withTransition: PropTypes.bool,
  /**
   * On toggle callback
   */
  onToggle: PropTypes.func,
  /**
   * Initial collapsed state
   */
  isOpen: PropTypes.bool
}

Tab.defaultProps = {
  maxHeight: MAX_HEIGHT,
  withTransition: true,
  onToggle: () => {},
  isOpen: false
}

export default Tab

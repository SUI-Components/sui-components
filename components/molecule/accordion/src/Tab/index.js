import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeAccordion-tab'
const CONTENT_CLASS = `${BASE_CLASS}Content`
const CONTENT_CONTAINER_CLASS = `${CONTENT_CLASS}Container`
const CONTAINER_BUTTON_CLASS = `${BASE_CLASS}TitleContainer`
const OPEN_CLASS = 'is-open'
const BUTTON_CLASS = `${BASE_CLASS}Btn`
const BUTTON_CONTENT_CLASS = `${BUTTON_CLASS}Content`
const BUTTON_TITLE_CLASS = `${BUTTON_CLASS}Title`
const ICON_CLASS = `${BASE_CLASS}Icon`
const MAX_HEIGHT = 100

const Tab = ({
  autoHeight,
  children,
  icon,
  isOpen,
  maxHeight,
  onToggle,
  title,
  customTitle: CustomTitleComponent,
  withScrollVisible,
  withTransition,
  withGap,
  withMultilineLabel = false
}) => {
  const wrapperClassName = cx(BASE_CLASS, {
    [OPEN_CLASS]: isOpen,
    [`${BASE_CLASS}--withGap`]: withGap,
    [`${BASE_CLASS}--withMultilineLabel`]: withMultilineLabel
  })
  const iconClassName = cx(ICON_CLASS, {
    [OPEN_CLASS]: isOpen
  })
  const containerClassName = cx(CONTAINER_BUTTON_CLASS, {
    [OPEN_CLASS]: isOpen
  })
  const contentClassName = cx(CONTENT_CONTAINER_CLASS, {
    [`${CONTENT_CONTAINER_CLASS}--withTransition`]: withTransition,
    [`${CONTENT_CONTAINER_CLASS}--withScrollVisible`]: withScrollVisible
  })

  const maxHeightType = autoHeight ? '' : `${maxHeight}px`
  const containerHeight = isOpen ? maxHeightType : `0px`

  return (
    <div className={wrapperClassName}>
      <div className={containerClassName}>
        <button type="button" className={BUTTON_CLASS} onClick={onToggle}>
          <span className={BUTTON_CONTENT_CLASS} tabIndex="-1">
            {CustomTitleComponent ? (
              <div className={BUTTON_TITLE_CLASS}>
                <CustomTitleComponent />
              </div>
            ) : (
              <span className={BUTTON_TITLE_CLASS}>{title}</span>
            )}
            <span className={iconClassName}>{icon}</span>
          </span>
        </button>
      </div>
      <div
        className={contentClassName}
        style={{maxHeight: `${containerHeight}`}}
      >
        <div className={CONTENT_CLASS}>{children}</div>
      </div>
    </div>
  )
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
   * Define the content auto height
   */
  autoHeight: PropTypes.bool,
  /**
   * Icon to be added on the right of the content
   */
  icon: PropTypes.node,
  /**
   * Title tab
   */
  title: PropTypes.string.isRequired,
  /**
   * Custom component to use as title
   */
  customTitle: PropTypes.node,
  /**
   * Force scroll visible
   */
  withScrollVisible: PropTypes.bool,
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
  isOpen: PropTypes.bool,
  /**
   * Add gap between tabs
   */
  withGap: PropTypes.bool,
  /**
   * Activate/deactivate multiline label
   */
  withMultilineLabel: PropTypes.bool
}

Tab.defaultProps = {
  isOpen: false,
  maxHeight: MAX_HEIGHT,
  autoHeight: false,
  onToggle: () => {},
  withScrollVisible: false,
  withTransition: true,
  withGap: false
}

export default Tab

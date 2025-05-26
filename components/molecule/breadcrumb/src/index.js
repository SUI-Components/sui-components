import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'
import ChevronRight from '@s-ui/react-icons/lib/Chevronright'

import {BASE_CLASS, breadcrumbClassName, isFunction} from './settings.js'

const BreadcrumbBasic = ({
  ariaLabelText,
  items,
  icon,
  linkFactory: Link = ({to, href, className, children}) => (
    <a href={to || href} className={className}>
      {children}
    </a>
  ),
  isScrollable = false,
  isExpanded,
  defaultIsExpanded = false,
  onExpand,
  onCollapse,
  onClick
}) => {
  const [isExpandedState, setIsExpandedState] = useControlledState(isExpanded, defaultIsExpanded)
  const handleClick = event => {
    setIsExpandedState(!isExpandedState)
    isFunction(onClick) && onClick(event, {value: !isExpandedState})
    if (isExpandedState) {
      isFunction(onCollapse) && onCollapse(event, {value: false})
    } else {
      isFunction(onExpand) && onExpand(event, {value: true})
    }
  }

  const IconAngle = icon || ChevronRight
  const numItems = items.length - 1

  return (
    <nav aria-label={ariaLabelText}>
      <div
        className={breadcrumbClassName({
          isExpanded: isExpandedState,
          isScrollable
        })}
      >
        <button onClick={handleClick} className={`${BASE_CLASS}-btn`}>
          ...
        </button>
        <ul className={`${BASE_CLASS}-list`}>
          {items.map(({url, label}, index) => (
            <li className={`${BASE_CLASS}-listItem`} key={index}>
              {index !== 0 && index <= numItems && <IconAngle svgClass={`${BASE_CLASS}-icon`} />}
              {url ? (
                <Link to={url} href={url} className={`${BASE_CLASS}-link`}>
                  {label}
                </Link>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

BreadcrumbBasic.displayName = 'BreadcrumbBasic'

BreadcrumbBasic.propTypes = {
  /**
   * Aria label for the breadcrumb
   */
  ariaLabelText: PropTypes.string,
  /**
   * List of link objects
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * link text
       */
      label: PropTypes.string.isRequired,
      /**
       * URL for the link
       */
      url: PropTypes.string
    })
  ).isRequired,
  /**
   * Comments custom icon (React component).
   */
  icon: PropTypes.func,
  /**
   * Function for creating links so it allows to customize it
   */
  linkFactory: PropTypes.func,
  /**
   * Boolean that allows us to show the items with a horizontal scroll
   */
  isScrollable: PropTypes.bool,
  /**
   * The controlled value of the expanded l&f of the component
   */
  isExpanded: PropTypes.bool,
  /**
   * The initial value of the expanded l&f of the component
   */
  defaultIsExpanded: PropTypes.bool,
  /** expand handler **/
  onExpand: PropTypes.func,
  /** collapse handler **/
  onCollapse: PropTypes.func,
  /** click handler (expand or collapse) **/
  onClick: PropTypes.func
}

export default BreadcrumbBasic

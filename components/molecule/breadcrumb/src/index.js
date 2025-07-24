import {forwardRef, Fragment, isValidElement} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'
import ChevronRight from '@s-ui/react-icons/lib/Chevronright'
import PrimitiveInjector from '@s-ui/react-primitive-injector'

import {BASE_CLASS, breadcrumbClassName, isFunction} from './settings.js'

const Breadcrumb = forwardRef(
  (
    {
      items,
      icon: Icon = <ChevronRight svgClass={`${BASE_CLASS}-icon`} />,
      linkFactory: Link = ({to, href, className, children, ...props}) => (
        <a href={to || href} className={className} {...props}>
          {children}
        </a>
      ),
      isScrollable = false,
      isExpanded,
      defaultIsExpanded = false,
      onExpand,
      onCollapse,
      onClick,
      className,
      ...props
    },
    forwardedRef
  ) => {
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

    const numItems = items.length - 1
    const icon = isValidElement(Icon) ? Icon : <Icon />

    return (
      <nav {...props} ref={forwardedRef}>
        <div
          className={breadcrumbClassName({
            isExpanded: isExpandedState,
            isScrollable,
            className
          })}
        >
          <button onClick={handleClick} className={`${BASE_CLASS}-btn`}>
            ...
          </button>
          <ul className={`${BASE_CLASS}-list`}>
            {items.map(({url, label, 'aria-current': ariaCurrent, ...rest}, index) => {
              const [Element, elementProps] = url
                ? [Link, {to: url, href: url, className: `${BASE_CLASS}-link`, children: label}]
                : [PrimitiveInjector, {children: typeof label === 'string' ? <span>{label}</span> : label}]
              return (
                <Fragment key={index}>
                  {index !== 0 && index <= numItems && (
                    <li className={`${BASE_CLASS}-icon`} role="presentation" aria-hidden="true">
                      {icon}
                    </li>
                  )}
                  <li className={`${BASE_CLASS}-listItem`} aria-current={ariaCurrent}>
                    <Element {...{...elementProps, ...rest}} />
                  </li>
                </Fragment>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
)

Breadcrumb.displayName = 'Breadcrumb'

Breadcrumb.propTypes = {
  /**
   * Additional class names to extend the component
   */
  className: PropTypes.string,
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
   * Icon node to be used as a separator between items.
   */
  icon: PropTypes.node,
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

export default Breadcrumb

import {forwardRef} from 'react'
import {isFragment} from 'react-is'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'

import {useAccordionContext} from './context/index.js'
import AccordionItemHeaderChildrenDefault from './AccordionItemHeaderChildrenDefault.js'
import {
  BASE_CLASS_ELEMENT,
  BASE_CLASS_ITEM_HEADER,
  getBehavior,
  getIcon,
  HEADER_ICON_POSITION,
  HEADER_LABEL_WRAPS
} from './settings.js'

const AccordionItemHeader = forwardRef(
  (
    {
      as: As = 'h1',
      id,
      panelId,
      icon: iconProp,
      iconPosition: iconPositionProp,
      children = <AccordionItemHeaderChildrenDefault />,
      animationDuration: animationDurationProp,
      value,
      label,
      labelWrap: labelWrapProp,
      level,
      disabled,
      onClick
    },
    forwardedRef
  ) => {
    const {
      values,
      onChange,
      behavior,
      setValues,
      headerIconExpanded: iconExpandedContext,
      headerIconCollapsed: iconCollapsedContext,
      headerIconPosition: iconPositionContext,
      headerLabelWrap: labelWrapContext,
      animationDuration: animationDurationContext
    } = useAccordionContext({value})
    const handleClick = event => {
      const response = getBehavior(behavior)({value, values})
      setValues(response.values)
      ;[onChange, onClick].forEach(onHandler => {
        typeof onHandler === 'function' && onHandler(event, response)
      })
    }

    const isFragmentProp = isFragment(<As />)
    const isExpanded = values.includes(value)
    const icon = getIcon(
      {icon: iconProp, isExpanded},
      {iconExpanded: iconExpandedContext, iconCollapsed: iconCollapsedContext}
    )
    const iconPosition = iconPositionProp || iconPositionContext
    const animationDuration = animationDurationProp || animationDurationContext
    const labelWrap = labelWrapProp || labelWrapContext
    const isHeadingElement = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(As)
    return (
      <Poly
        as={As}
        {...{
          ...(!isFragmentProp && {
            className: cx(BASE_CLASS_ITEM_HEADER, BASE_CLASS_ELEMENT),
            ref: forwardedRef
          }),
          ...(!isHeadingElement && !isFragmentProp && {role: 'heading'}),
          ...(!isHeadingElement && level && !isFragmentProp && {'aria-level': level}),
          ...(!isFragmentProp && {'data-expanded': isExpanded}),
          ...(!isFragmentProp && {
            style: {
              transition: `border-radius 0s linear ${isExpanded ? 0 : animationDuration}ms`
            }
          })
        }}
      >
        <button
          type="button"
          id={id}
          className={cx(
            `${BASE_CLASS_ITEM_HEADER}Button`,
            `${BASE_CLASS_ITEM_HEADER}Button--icon-position-${iconPosition}`
          )}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          {...(disabled && {'aria-disabled': disabled, disabled})}
          onClick={handleClick}
        >
          <Injector
            headerIconExpanded={iconExpandedContext}
            headerIconCollapsed={iconCollapsedContext}
            headerIconPosition={iconPositionContext}
            headerLabelWrap={labelWrapContext}
            disabled={disabled}
            animationDuration={animationDuration}
            icon={icon}
            iconPosition={iconPosition}
            values={values}
            value={value}
            isExpanded={values.includes(value)}
            label={label}
            labelWrap={labelWrap}
          >
            {children}
          </Injector>
        </button>
      </Poly>
    )
  }
)

AccordionItemHeader.displayName = 'AccordionItemHeader'

AccordionItemHeader.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** child element **/
  children: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** unique identifier **/
  id: PropTypes.string,
  /** unique identifier of the controlled panel **/
  panelId: PropTypes.string,
  /** The header Icn element **/
  icon: PropTypes.node,
  /** where the icon is header positioned */
  iconPosition: PropTypes.oneOf(Object.values(HEADER_ICON_POSITION)),
  /** appropriate for the information architecture of the page **/
  label: PropTypes.string.isRequired,
  /** Defines the wrap behavior of the label */
  labelWrap: PropTypes.oneOf(Object.values(HEADER_LABEL_WRAPS)),
  /** the unique value of the element **/
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** the heading level **/
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', 1, 2, 3, 4, 5, 6]),
  /** header clicking handler **/
  onClick: PropTypes.func
}

export default AccordionItemHeader

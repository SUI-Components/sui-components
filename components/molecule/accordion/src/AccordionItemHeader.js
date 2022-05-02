import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'
import Injector, {combineHandler} from '@s-ui/react-primitive-injector'

import AccordionItemHeaderDefaultChildren from './AccordionItemHeaderDefaultChildren.js'
import {useAccordionContext} from './context/index.js'

import {
  BASE_CLASS_ITEM_HEADER,
  isAccordionItemPanelExpanded
} from './settings.js'

const AccordionItemHeader = forwardRef(
  (
    {
      as = 'div',
      icon,
      children = <AccordionItemHeaderDefaultChildren />,
      value,
      isExpanded: isExpandedProp,
      label,
      disabled,
      onClick
    },
    forwardedRef
  ) => {
    const {values, onChange} = useAccordionContext()
    const isExpanded = isAccordionItemPanelExpanded({
      isExpanded: isExpandedProp,
      values,
      value
    })
    const handleClick = combineHandler(
      onChange,
      event =>
        typeof onClick === 'function' &&
        onClick(event, {value, isExpanded, values})
    )
    console.log({...(label && {children: label})})
    return (
      <Poly
        as={as}
        ref={forwardedRef}
        className={BASE_CLASS_ITEM_HEADER}
        role="heading"
        {...{
          ...(label && {'aria-label': label}),
          ...(disabled && {'aria-disabled': disabled})
        }}
      >
        <button
          type="button"
          className={`${BASE_CLASS_ITEM_HEADER}Button`}
          aria-pressed={isExpanded}
          {...{
            ...(disabled && {'aria-disabled': disabled})
          }}
          onClick={handleClick}
        >
          <Injector
            icon={icon}
            isExpanded={isExpanded}
            values={values}
            value={value}
            disabled={disabled}
            {...(label && {children: label})}
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
  /** appropriate for the information architecture of the page **/
  label: PropTypes.string.isRequired
}

export default AccordionItemHeader

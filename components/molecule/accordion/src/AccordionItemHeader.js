import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'
import {
  combineHandler,
  inject,
  combineProps
} from '@s-ui/react-primitive-injector'

import AccordionItemHeaderDefaultChildren from './AccordionItemHeaderDefaultChildren.js'
import {useAccordionContext} from './context/index.js'

import {BASE_CLASS_ITEM_HEADER, getBehavior} from './settings.js'

const AccordionItemHeader = forwardRef(
  (
    {
      as = 'div',
      icon,
      children = <AccordionItemHeaderDefaultChildren />,
      value,
      label,
      disabled,
      onClick
    },
    forwardedRef
  ) => {
    const {values, onChange, behavior, setValues} = useAccordionContext({value})

    const handleClick = event => {
      const response = getBehavior(behavior)({value, values})
      setValues(response.values)
      combineHandler(onChange(event, response), onClick(event, response))
    }

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
          aria-pressed={values.includes(value)}
          {...{
            ...(disabled && {'aria-disabled': disabled})
          }}
          onClick={handleClick}
        >
          {inject(children, [
            {
              props: {
                ...(label && {children: label}),
                disabled,
                icon,
                values,
                value
              },
              proviso: () => true,
              combine: combineProps
            }
          ])}
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

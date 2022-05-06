import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Poly from '@s-ui/react-primitive-polymorphic-element'
import {
  combineHandler,
  inject,
  combineProps
} from '@s-ui/react-primitive-injector'

import AccordionItemHeaderChildrenDefault from './AccordionItemHeaderChildrenDefault.js'
import {useAccordionContext} from './context/index.js'

import {BASE_CLASS_ITEM_HEADER, getBehavior} from './settings.js'

const AccordionItemHeader = forwardRef(
  (
    {
      as = 'div',
      id,
      panelId,
      icon: iconProp,
      iconPosition: iconPositionProp,
      children = <AccordionItemHeaderChildrenDefault />,
      animationDuration: animationDurationProp,
      value,
      label,
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
      headerIcon: iconContext,
      headerIconPosition: iconPositionContext,
      animationDuration: animationDurationContext
    } = useAccordionContext({value})

    const handleClick = event => {
      const response = getBehavior(behavior)({value, values})
      setValues(response.values)
      ;[onChange, onClick].forEach(onHandler => {
        typeof onHandler === 'function' && onHandler(event, response)
      })
    }

    const icon = iconProp || iconContext
    const iconPosition = iconPositionProp || iconPositionContext
    const animationDuration = animationDurationProp || animationDurationContext
    return (
      <Poly
        as={as}
        ref={forwardedRef}
        className={BASE_CLASS_ITEM_HEADER}
        role="heading"
      >
        <button
          type="button"
          id={id}
          className={cx(
            `${BASE_CLASS_ITEM_HEADER}Button`,
            `${BASE_CLASS_ITEM_HEADER}Button--icon-position-${iconPosition}`
          )}
          aria-pressed={values.includes(value)}
          aria-controls={panelId}
          {...{
            ...(disabled && {'aria-disabled': disabled}),
            ...(label && {'aria-label': label})
          }}
          onClick={handleClick}
        >
          {inject(children, [
            {
              props: {
                ...(label && {children: label}),
                disabled,
                icon,
                iconPosition,
                values,
                value,
                animationDuration
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
  label: PropTypes.string.isRequired,
}

export default AccordionItemHeader

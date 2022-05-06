import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'
import {inject, combineProps} from '@s-ui/react-primitive-injector'

import {useAccordionContext} from './context/index.js'
import {
  BASE_CLASS_ITEM_PANEL,
  BASE_CLASS_ITEM_PANEL_CONTENT
} from './settings.js'
import useMeasure from './hook/useMeasure.js'
import AccordionItemPanelDefaultChildren from './AccordionItemPanelDefaultChildren.js'

const AccordionItemPanel = forwardRef(
  (
    {
      as = 'div',
      id,
      content,
      children = <AccordionItemPanelDefaultChildren />,
      isExpanded,
      value,
      animationDuration: animationDurationProp,
      label
    },
    forwardedRef
  ) => {
    const [contentRef, {height}] = useMeasure()

    const {values, animationDuration: animationDurationContext} =
      useAccordionContext({isExpanded, value})
    const animationDuration = animationDurationProp || animationDurationContext
    return (
      <Poly
        as={as}
        id={id}
        ref={forwardedRef}
        role="region"
        className={BASE_CLASS_ITEM_PANEL}
        aria-expanded={values.includes(value)}
        arial-labeledby={label}
        style={{
          ...(values.includes(value) && {maxHeight: height}),
          transition: `max-height ${animationDuration}ms ${
            values.includes(value) ? 'ease-out' : 'ease-in'
          }`
        }}
      >
        <div
          ref={contentRef}
          className={`${BASE_CLASS_ITEM_PANEL_CONTENT}Wrapper`}
        >
          {inject(children, [
            {
              props: {
                ...(content && {children: content}),
                isExpanded,
                values,
                value
              },
              proviso: () => true,
              combine: combineProps
            }
          ])}
        </div>
      </Poly>
    )
  }
)

AccordionItemPanel.displayName = 'AccordionItemPanel'

AccordionItemPanel.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType
}

export default AccordionItemPanel

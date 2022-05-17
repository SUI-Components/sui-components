import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Poly from '@s-ui/react-primitive-polymorphic-element'
import {inject, combineProps} from '@s-ui/react-primitive-injector'

import {useAccordionContext} from './context/index.js'
import {
  BASE_CLASS_ELEMENT,
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
      headerId,
      content,
      children = <AccordionItemPanelDefaultChildren />,
      isExpanded,
      maxHeight: maxHeightProp,
      value,
      animationDuration: animationDurationProp,
      disabled
    },
    forwardedRef
  ) => {

    const [contentRef, {height}] = useMeasure()

    const {
      values,
      animationDuration: animationDurationContext,
      maxHeight: maxHeightContext
    } = useAccordionContext({isExpanded, value})
    const maxHeight =
      maxHeightProp !== undefined ? maxHeightProp : maxHeightContext
    const animationDuration = animationDurationProp || animationDurationContext
    return (
      <Poly
        as={as}
        id={id}
        ref={forwardedRef}
        role="region"
        className={cx(BASE_CLASS_ITEM_PANEL, BASE_CLASS_ELEMENT)}
        aria-expanded={values.includes(value)}
        aria-labelledby={headerId}
        aria-disabled={disabled}
        style={{
          overflowY:
            height > maxHeight && maxHeight !== 0 ? 'scroll' : 'hidden',
          transition: `max-height ${animationDuration}ms ${
            values.includes(value) ? 'ease-out' : 'ease-in'
          }, opacity 0s linear ${
            values.includes(value) ? 0 : animationDuration
          }ms`,
          ...(values.includes(value) && {
            maxHeight: maxHeight === 0 ? height : maxHeight
          })
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
                value,
                disabled
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
  as: PropTypes.elementType,
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** child element **/
  children: PropTypes.node,
  /** panel inner content **/
  content: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** unique identifier **/
  id: PropTypes.string,
  /** a required string indicating the button id controlling the panel **/
  headerId: PropTypes.string.isRequired,
  /** controlled expanded accordion item behavior */
  isExpanded: PropTypes.bool,
  /** the max height limit a panel can reach when its expanded **/
  maxHeight: PropTypes.number,
  /** the unique value of the element **/
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default AccordionItemPanel

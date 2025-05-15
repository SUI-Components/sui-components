import {forwardRef} from 'react'
import {isFragment} from 'react-is'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {combineProps, inject} from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'

import {useAccordionContext} from './context/index.js'
import useMeasure from './hook/useMeasure.js'
import AccordionItemPanelDefaultChildren from './AccordionItemPanelDefaultChildren.js'
import {BASE_CLASS_ELEMENT, BASE_CLASS_ITEM_PANEL, BASE_CLASS_ITEM_PANEL_CONTENT} from './settings.js'

const AccordionItemPanel = forwardRef(
  (
    {
      as,
      id,
      headerId,
      content,
      children = <AccordionItemPanelDefaultChildren />,
      isExpanded,
      maxHeight: maxHeightProp,
      value,
      animationDuration: animationDurationProp,
      disabled,
      ...props
    },
    forwardedRef
  ) => {
    const [contentRef, {height}] = useMeasure()

    const {
      values,
      animationDuration: animationDurationContext,
      maxHeight: maxHeightContext
    } = useAccordionContext({isExpanded, value})
    const maxHeight = maxHeightProp !== undefined ? maxHeightProp : maxHeightContext
    const animationDuration = animationDurationProp || animationDurationContext

    const className = cx(BASE_CLASS_ITEM_PANEL, BASE_CLASS_ELEMENT, {
      [`${BASE_CLASS_ITEM_PANEL}--expanded`]: values.includes(value)
    })
    return (
      <div
        id={id}
        ref={forwardedRef}
        className={className}
        aria-disabled={disabled}
        style={{
          overflowY: height > maxHeight && maxHeight !== 0 ? 'scroll' : 'hidden',
          transition: `max-height ${animationDuration}ms ${
            values.includes(value) ? 'ease-out' : 'ease-in'
          }, opacity 0s linear ${values.includes(value) ? 0 : animationDuration}ms, border-top-width 0s linear ${
            values.includes(value) ? 0 : animationDuration
          }ms`,
          ...(values.includes(value) && {
            maxHeight: maxHeight === 0 ? height : maxHeight
          })
        }}
        {...props}
      >
        <Poly
          as={as}
          {...{
            ...(!isFragment && {
              className: `${BASE_CLASS_ITEM_PANEL_CONTENT}Wrapper`
            })
          }}
        >
          <div className={`${BASE_CLASS_ITEM_PANEL_CONTENT}WrapperRef`} ref={contentRef}>
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
      </div>
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

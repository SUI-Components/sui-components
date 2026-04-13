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
    const accordionItemPanelClassName = cx(
      BASE_CLASS_ITEM_PANEL,
      BASE_CLASS_ELEMENT,
      `${BASE_CLASS_ITEM_PANEL}--${values.includes(value) ? 'expanded' : 'collapsed'}`
    )
    return (
      <div
        id={id}
        role="region"
        ref={forwardedRef}
        aria-labelledby={headerId}
        className={accordionItemPanelClassName}
        aria-disabled={disabled}
        style={{
          // grid-template-rows animation is layout-safe: siblings are pushed down
          // correctly in all browsers including iOS Safari ≥16.4.
          // max-height animation was replaced because it requires transform/will-change
          // hacks to avoid Safari repaint corruption, and those hacks break document flow.
          display: 'grid',
          gridTemplateRows: values.includes(value) ? '1fr' : '0fr',
          transition: `grid-template-rows ${animationDuration}ms ${
            values.includes(value) ? 'ease-out' : 'ease-in'
          }, opacity 0s linear ${values.includes(value) ? 0 : animationDuration}ms, border-top-width 0s linear ${
            values.includes(value) ? 0 : animationDuration
          }ms`
        }}
        {...props}
      >
        <Poly
          as={as}
          // overflow:hidden + min-height:0 must be on the direct grid child so that
          // grid-template-rows:0fr can collapse it to zero height. These cannot live
          // inside the !isFragment spread because isFragment is a function (always truthy),
          // making !isFragment always false — the spread never executes.
          style={{overflow: 'hidden', minHeight: 0}}
          {...{
            ...(!isFragment && {
              className: `${BASE_CLASS_ITEM_PANEL_CONTENT}Wrapper`
            })
          }}
        >
          <div
            className={`${BASE_CLASS_ITEM_PANEL_CONTENT}WrapperRef`}
            ref={contentRef}
            style={{
              // min-height: 0 is required for grid-template-rows: 0fr to collapse the child to zero
              overflow: 'hidden',
              minHeight: 0,
              // maxHeight prop caps panel height and enables scroll — applied here (not on
              // the outer grid wrapper) so it constrains content without affecting the animation
              ...(maxHeight !== 0 && {
                maxHeight,
                overflowY: height > maxHeight ? 'scroll' : 'hidden'
              })
            }}
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

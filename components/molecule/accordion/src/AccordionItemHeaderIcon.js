import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'

import AccordionItemHeaderIconDefault from './AccordionItemHeaderIconDefault.js'
import {BASE_CLASS_ITEM_HEADER_ICON} from './settings.js'

const AccordionItemHeaderIcon = forwardRef(
  (
    {as = 'div', children = <AccordionItemHeaderIconDefault />, isExpanded, disabled, animationDuration},
    forwardedRef
  ) => (
    <Poly as={as} ref={forwardedRef} className={BASE_CLASS_ITEM_HEADER_ICON}>
      <Injector disabled={disabled} isExpanded={isExpanded} animationDuration={animationDuration}>
        {children}
      </Injector>
    </Poly>
  )
)

AccordionItemHeaderIcon.displayName = 'AccordionItemHeaderIcon'

AccordionItemHeaderIcon.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** child element **/
  children: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** controlled expanded accordion item behavior */
  isExpanded: PropTypes.bool
}

export default AccordionItemHeaderIcon

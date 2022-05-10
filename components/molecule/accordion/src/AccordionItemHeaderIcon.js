import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'
import {combineProps, inject} from '@s-ui/react-primitive-injector'

import AccordionItemHeaderIconDefault from './AccordionItemHeaderIconDefault.js'
import {BASE_CLASS} from './settings.js'

const AccordionItemHeaderIcon = forwardRef(
  (
    {
      as = 'div',
      children = <AccordionItemHeaderIconDefault />,
      isExpanded,
      disabled,
      icon
    },
    forwardedRef
  ) => {
    return (
      <Poly as={as} ref={forwardedRef} className={BASE_CLASS}>
        {inject(children, [
          {
            props: {
              disabled,
              isExpanded,
              children: icon
            },
            proviso: () => true,
            combine: combineProps
          }
        ])}
      </Poly>
    )
  }
)

AccordionItemHeaderIcon.displayName = 'AccordionItemHeaderIcon'

AccordionItemHeaderIcon.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** child element **/
  children: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** controlled expanded accordion item behavior */
  isExpanded: PropTypes.bool,
  /** The header Icon element **/
  icon: PropTypes.node
}

export default AccordionItemHeaderIcon

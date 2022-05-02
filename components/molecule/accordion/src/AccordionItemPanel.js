import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {useAccordionContext} from './context/index.js'
import {BASE_CLASS, isAccordionItemPanelExpanded} from './settings.js'

const AccordionItemPanel = forwardRef(
  ({as = 'div', children, isExpanded: isExpandedProp, value}, forwardedRef) => {
    const {values} = useAccordionContext()
    const isExpanded = isAccordionItemPanelExpanded({
      isExpanded: isExpandedProp,
      values,
      value
    })
    return (
      <Poly
        as={as}
        ref={forwardedRef}
        className={BASE_CLASS}
        aria-expanded={isExpanded}
      >
        {children}
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

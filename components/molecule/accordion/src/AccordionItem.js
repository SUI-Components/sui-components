import {forwardRef, Fragment} from 'react'
import {isFragment} from 'react-is'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {
  MoleculeAccordionItemHeader as AccordionItemHeader,
  MoleculeAccordionItemPanel as AccordionItemPanel
} from './index.js'

const AccordionItem = forwardRef(
  (
    {
      as = Fragment,
      header,
      children,
      headerIcon,
      disabled,
      isExpanded,
      value,
      label,
      onClick,
      content
    },
    forwardedRef
  ) => {
    return (
      <Poly as={as} {...(isFragment(as) && {ref: forwardedRef})}>
        <AccordionItemHeader
          disabled={disabled}
          value={value}
          headerIcon={headerIcon}
          label={label}
          onClick={onClick}
        >
          {header}
        </AccordionItemHeader>
        <AccordionItemPanel
          isExpanded={isExpanded}
          disabled={disabled}
          value={value}
          content={content}
        >
          {children}
        </AccordionItemPanel>
      </Poly>
    )
  }
)

AccordionItem.displayName = 'AccordionItem'

AccordionItem.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  headerIcon: PropTypes.node,
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
  label: PropTypes.string.isRequired
}

export default AccordionItem

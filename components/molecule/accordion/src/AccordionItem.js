import {forwardRef, Fragment} from 'react'
import {isFragment} from 'react-is'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {
  MoleculeAccordionItemHeader as AccordionItemHeader,
  MoleculeAccordionItemPanel as AccordionItemPanel
} from './index.js'
import {HEADER_ICON_POSITION} from './settings.js'

const AccordionItem = forwardRef(
  (
    {
      as = Fragment,
      id,
      header,
      children,
      headerIcon,
      headerIconPosition,
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
          id={`header-${id === undefined ? value : id}`}
          panelId={`panel-${id === undefined ? value : id}`}
          value={value}
          icon={headerIcon}
          iconPosition={headerIconPosition}
          label={label}
          onClick={onClick}
        >
          {header}
        </AccordionItemHeader>
        <AccordionItemPanel
          id={`panel-${id === undefined ? value : id}`}
          isExpanded={isExpanded}
          disabled={disabled}
          value={value}
          content={content}
          label={label}
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
  headerIconPosition: PropTypes.oneOf(Object.values(HEADER_ICON_POSITION)),
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
  label: PropTypes.string.isRequired
}

export default AccordionItem

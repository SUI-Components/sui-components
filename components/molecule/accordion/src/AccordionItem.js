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
    const headerId = `header-${id === undefined ? value : id}`
    const panelId = `panel-${id === undefined ? value : id}`
    return (
      <Poly as={as} {...(isFragment(as) && {ref: forwardedRef})}>
        <AccordionItemHeader
          disabled={disabled}
          id={headerId}
          panelId={panelId}
          value={value}
          icon={headerIcon}
          iconPosition={headerIconPosition}
          label={label}
          onClick={onClick}
        >
          {header}
        </AccordionItemHeader>
        <AccordionItemPanel
          id={panelId}
          headerId={headerId}
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
  /** child element **/
  children: PropTypes.node,
  /** panel inner content **/
  content: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** unique identifier **/
  id: PropTypes.string,
  /** header button inner content */
  header: PropTypes.string,
  /** The header Icon element **/
  headerIcon: PropTypes.node,
  /** where the icon is header positioned */
  headerIconPosition: PropTypes.oneOf(Object.values(HEADER_ICON_POSITION)),
  /** controlled expanded accordion item behavior */
  isExpanded: PropTypes.bool,
  /** a required string indicating the content **/
  label: PropTypes.string.isRequired,
  /** the unique value of the element **/
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** header clicking handler **/
  onClick: PropTypes.func
}

export default AccordionItem

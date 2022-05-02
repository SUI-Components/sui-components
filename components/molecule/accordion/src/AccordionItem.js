import {forwardRef, Fragment} from 'react'
import PropTypes from 'prop-types'

import {AccordionItemHeader, AccordionItemPanel} from './index.js'

const AccordionItem = forwardRef(
  (
    {header, children, headerIcon, disabled, isExpanded, value, label, onClick, content},
    forwardedRef
  ) => {
    return (
      <Fragment ref={forwardedRef}>
        <AccordionItemHeader
          isExpanded={isExpanded}
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
      </Fragment>
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

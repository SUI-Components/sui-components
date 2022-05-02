import {forwardRef, Fragment} from 'react'
import {isFragment} from 'react-is'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {BASE_CLASS, BEHAVIOR, SPACING} from './settings.js'
import {AccordionProvider} from './context/index.js'
import AccordionItem from './AccordionItem.js'
import AccordionItemHeader from './AccordionItemHeader.js'
import AccordionItemHeaderIcon from './AccordionItemHeaderIcon.js'
import AccordionItemPanel from './AccordionItemPanel.js'

const Index = forwardRef(
  (
    {as = Fragment, values, defaultValues = [], onChange, behavior, children},
    forwardedRef
  ) => {
    return (
      <Poly
        as={as}
        {...(isFragment(as) && {ref: forwardedRef, className: BASE_CLASS})}
      >
        <AccordionProvider
          values={values}
          defaultValues={defaultValues}
          onChange={onChange}
          behavior={behavior}
        >
          {children}
        </AccordionProvider>
      </Poly>
    )
  }
)

Index.displayName = 'Accordion'

Index.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The opened values **/
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  /** The initial opened values **/
  defaultValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  /** The change default behavior **/
  behavior: PropTypes.oneOf(Object.values(BEHAVIOR)),
  /** The space AccordionItems **/
  gap: PropTypes.oneOf(Object.values(SPACING)),
  /** handler fired everytime an item changes its collapsed/expanded state **/
  onChange: PropTypes.func
}

export {
  Index,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemHeaderIcon,
  AccordionItemPanel
}

export default Index

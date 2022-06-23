import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {BASE_CLASS_ITEM_HEADER_ICON} from './settings.js'

const AccordionItemHeaderIconDefault = forwardRef(
  ({as = 'i', children, isExpanded, animationDuration}, forwardedRef) => (
    <Poly
      as={as}
      ref={forwardedRef}
      className={cx(`${BASE_CLASS_ITEM_HEADER_ICON}Default`, {
        [`${BASE_CLASS_ITEM_HEADER_ICON}Default--expanded`]: isExpanded
      })}
      style={{
        transition: `transform ${animationDuration}ms ${
          isExpanded ? 'ease-out' : 'ease-in'
        }`
      }}
    >
      {children}
    </Poly>
  )
)

AccordionItemHeaderIconDefault.displayName = 'AccordionItemHeaderIconDefault'

AccordionItemHeaderIconDefault.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** child element **/
  children: PropTypes.node,
  /** controlled expanded accordion item behavior */
  isExpanded: PropTypes.bool
}

export default AccordionItemHeaderIconDefault

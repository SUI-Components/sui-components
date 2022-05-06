import {forwardRef} from 'react'
import PropTypes from 'prop-types'

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

AccordionItemHeaderIcon.propTypes = {}

export default AccordionItemHeaderIcon

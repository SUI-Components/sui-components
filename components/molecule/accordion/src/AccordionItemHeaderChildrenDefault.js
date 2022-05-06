import {Fragment} from 'react'

import Injector from '@s-ui/react-primitive-injector'

import AccordionItemHeaderIconDefault from './AccordionItemHeaderIconDefault.js'
import {
  BASE_CLASS_ITEM_HEADER,
  BASE_CLASS_ITEM_HEADER_ICON
} from './settings.js'

const AccordionItemHeaderChildrenDefault = ({
  children,
  icon = <AccordionItemHeaderIconDefault />,
  value,
  values,
  animationDuration
}) => {
  return (
    <Fragment>
      <div className={`${BASE_CLASS_ITEM_HEADER}ButtonContent`}>{children}</div>
      <div className={`${BASE_CLASS_ITEM_HEADER_ICON}Wrapper`}>
        <Injector
          isExpanded={values.includes(value)}
          animationDuration={animationDuration}
        >
          {icon}
        </Injector>
      </div>
    </Fragment>
  )
}

AccordionItemHeaderChildrenDefault.displayName =
  'AccordionItemHeaderChildrenDefault'

AccordionItemHeaderChildrenDefault.propTypes = {}

export default AccordionItemHeaderChildrenDefault

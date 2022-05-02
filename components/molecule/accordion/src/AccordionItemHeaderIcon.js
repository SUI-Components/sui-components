import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const AccordionItemHeaderIcon = forwardRef(({as = 'div'}, forwardedRef) => {
  return (
    <Poly as={as} ref={forwardedRef} className={BASE_CLASS}>
      {children}
    </Poly>
  )
})

AccordionItemHeaderIcon.displayName = 'AccordionItemHeaderIcon'

AccordionItemHeaderIcon.propTypes = {
}

export default AccordionItemHeaderIcon

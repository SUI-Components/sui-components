import {forwardRef} from 'react'
import cx from 'classnames'

import PropTypes from 'prop-types'
import {Trigger as RadixOpenTrigger} from '@radix-ui/react-dialog'
import PrimitiveInjector from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_OPEN_TRIGGER = `${BASE_CLASS}-OpenTrigger`

/** The trigger slot that opens the dialog. **/
const OpenTrigger = forwardRef(({as: As = PrimitiveInjector, className, ...props}, forwardedRef) => {
  return (
    <RadixOpenTrigger asChild={true}>
      <As
        data-sui-component={OpenTrigger.displayName}
        className={cx(BASE_CLASS_OPEN_TRIGGER, className)}
        ref={forwardedRef}
        {...props}
      />
    </RadixOpenTrigger>
  )
})

OpenTrigger.displayName = 'MoleculeModal.OpenTrigger'

OpenTrigger.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string
}

export default OpenTrigger

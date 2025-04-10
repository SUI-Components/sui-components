import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {Close as RadixCloseTrigger} from '@radix-ui/react-dialog'
import PrimitiveInjector from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_CLOSE_TRIGGER = `${BASE_CLASS}-CloseTrigger`

/** The trigger slot that closes the dialog. **/
const CloseTrigger = forwardRef(({as: As = PrimitiveInjector, className, ariaLabel, ...props}, forwardedRef) => {
  return (
    <RadixCloseTrigger asChild={true}>
      <As className={cx(BASE_CLASS_CLOSE_TRIGGER, className)} ref={forwardedRef} aria-label={ariaLabel} {...props} />
    </RadixCloseTrigger>
  )
})

CloseTrigger.displayName = 'MoleculeModal.CloseTrigger'

CloseTrigger.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** Aria label for the close trigger */
  ariaLabel: PropTypes.string
}

export default CloseTrigger

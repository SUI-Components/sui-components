import {forwardRef} from 'react'
import cx from 'classnames'

import PropTypes from 'prop-types'
import {Trigger as RadixTrigger} from '@radix-ui/react-dialog'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_TRIGGER = `${BASE_CLASS}-Trigger`

/** The button that opens the dialog. **/
const Trigger = forwardRef(({as: As = 'button', className, ...props}, forwardedRef) => {
  return (
    <RadixTrigger asChild={true}>
      <As className={cx(BASE_CLASS_TRIGGER, className)} ref={forwardedRef} {...props} />
    </RadixTrigger>
  )
})

Trigger.displayName = 'MoleculeModal.Trigger'

Trigger.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string
}

export default Trigger

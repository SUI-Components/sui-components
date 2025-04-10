import {forwardRef} from 'react'
import cx from 'classnames'

import PropTypes from 'prop-types'
import {Overlay as RadixOverlay} from '@radix-ui/react-dialog'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_OVERLAY = `${BASE_CLASS}-Overlay`

/** A layer that covers the inert portion of the view when the dialog is open. **/
const Overlay = forwardRef(({as: As = 'div', forceMount, className, ...props}, forwardedRef) => {
  return (
    <RadixOverlay asChild={true} forceMount={forceMount}>
      <As
        data-sui-component={Overlay.displayName}
        className={cx(BASE_CLASS_OVERLAY, className)}
        {...props}
        ref={forwardedRef}
      />
    </RadixOverlay>
  )
})

Overlay.displayName = 'MoleculeModal.Overlay'

Overlay.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /* Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from Modal.Portal. **/
  forceMount: PropTypes.bool,

  /** Additional classes */
  className: PropTypes.string
}

export default Overlay

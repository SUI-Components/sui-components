import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {Description as RadixDescription} from '@radix-ui/react-dialog'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_DESCRIPTION = `${BASE_CLASS}-Description`

/**
 * An accessible title to be announced when the dialog is opened.
 *
 * If you want to hide the description, wrap it inside our Visually Hidden utility like this <VisuallyHidden asChild>.
 * If you want to remove the description entirely, remove this part and pass aria-describedby={undefined}
 * to Dialog.Content.
 **/
const Description = forwardRef(({as: As = 'p', className, ...props}, forwardedRef) => {
  return (
    <RadixDescription asChild={true}>
      <As
        data-sui-component={Description.displayName}
        className={cx(BASE_CLASS_DESCRIPTION, className)}
        ref={forwardedRef}
        {...props}
      />
    </RadixDescription>
  )
})

Description.displayName = 'MoleculeModal.Description'

Description.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string
}

export default Description

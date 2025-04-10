import {forwardRef} from 'react'
import cx from 'classnames'

import PropTypes from 'prop-types'
import {Title as RadixTitle} from '@radix-ui/react-dialog'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_TITLE = `${BASE_CLASS}-Title`

/**
 * An accessible title to be announced when the dialog is opened.
 *
 * If you want to hide the description, wrap it inside our Visually Hidden utility like this <VisuallyHidden asChild>.
 * If you want to remove the description entirely, remove this part and pass aria-describedby={undefined}
 * to Dialog.Content.
 **/
const Title = forwardRef(({as: As = 'h2', className, ...props}, forwardedRef) => {
  return (
    <RadixTitle asChild={true}>
      <As
        data-sui-component={Title.displayName}
        className={cx(BASE_CLASS_TITLE, className)}
        ref={forwardedRef}
        {...props}
      />
    </RadixTitle>
  )
})

Title.displayName = 'MoleculeModal.Title'

Title.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string
}

export default Title

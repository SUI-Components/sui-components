import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomIcon, {atomIconSizes} from '@s-ui/react-atom-icon'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_CLOSE_ICON_BUTTON = `${BASE_CLASS}-CloseIconButton`

/**
 * An accessible closing Icon.
 **/
const CloseIconButton = forwardRef(({as: As = 'button', className, size, ariaLabel, ...props}, forwardedRef) => {
  return (
    <As
      {...props}
      data-sui-component={CloseIconButton.displayName}
      className={cx(BASE_CLASS_CLOSE_ICON_BUTTON, className)}
      focusable="false"
      aria-busy="false"
      aria-live="off"
      aria-label={ariaLabel}
    >
      <AtomIcon size={size} aria-hidden="true">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="m21.6,19.67l-7.68-7.68,7.57-7.59c.53-.53.53-1.4,0-1.93-.53-.53-1.4-.53-1.93,0l-7.57,7.58L4.33,2.4c-.53-.53-1.4-.53-1.93,0-.53.53-.53,1.4,0,1.93l7.66,7.66-7.66,7.65c-.53.53-.53,1.4,0,1.93.53.53,1.4.53,1.93,0l7.66-7.66,7.68,7.68c.53.53,1.4.53,1.93,0,.53-.53.53-1.4,0-1.93h0Z"
          />
        </svg>
      </AtomIcon>
    </As>
  )
})

CloseIconButton.displayName = 'MoleculeModal.CloseIconButton'

CloseIconButton.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** Size of the icon */
  size: PropTypes.oneOf(Object.values(atomIconSizes)),

  /** Aria label for the close icon */
  ariaLabel: PropTypes.string
}

export default CloseIconButton

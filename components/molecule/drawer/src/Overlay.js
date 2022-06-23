import {forwardRef, useEffect} from 'react'

import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const DRAWER_OVERLAY_CLASS = `${BASE_CLASS}-overlay`

const DrawerOverlay = forwardRef(
  ({isVisible, target, children, ...props}, forwardedRef) => {
    useEffect(() => {
      if (target !== undefined) {
        target.current.style.position = 'relative'
        target.current.style.overflow = 'hidden'
      }
    }, [target])

    return isVisible ? (
      <div ref={forwardedRef} className={DRAWER_OVERLAY_CLASS} {...props}>
        {children}
      </div>
    ) : null
  }
)

DrawerOverlay.propTypes = {
  /** element ref which overlays covers **/
  target: PropTypes.object,
  /** inner content **/
  children: PropTypes.node,
  /** show-hide overlay  **/
  isVisible: PropTypes.bool,
  /** click handler **/
  onClick: PropTypes.func
}
DrawerOverlay.displayName = 'MoleculeDrawerOverlay'

export default DrawerOverlay

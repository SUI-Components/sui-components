import PropTypes from 'prop-types'
import {useEffect, forwardRef} from 'react'

const DrawerOverlay = forwardRef(
  ({isVisible, target, children, ...props}, forwardedRef) => {
    useEffect(() => {
      if (target !== undefined) {
        target.current.style.position = 'relative'
        target.current.style.overflow = 'hidden'
      }
    }, [target])
    return isVisible ? (
      <div
        ref={forwardedRef}
        className="react-MoleculeDrawer-overlay"
        {...props}
      >
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

import {forwardRef, useEffect} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import useEventListener from '@s-ui/react-hooks/lib/useEventListener'
import {
  PLACEMENTS as moleculeDrawerPlacements,
  SIZES as moleculeDrawerSizes,
  ANIMATION_DURATION as moleculeDrawerAnimationDuration
} from './settings'

import MoleculeDrawerOverlay from './Overlay'

const MoleculeDrawer = forwardRef(
  (
    {
      animationDuration = moleculeDrawerAnimationDuration.FAST,
      children,
      isOpen = false,
      onOpen,
      onClose,
      placement = moleculeDrawerPlacements.LEFT,
      size = moleculeDrawerSizes.AUTO,
      target,
      closeOnOutsideClick = false
    },
    forwardedRef
  ) => {
    useEffect(() => {
      if (target !== undefined) {
        target.current.style.position = 'relative'
        target.current.style.overflow = 'hidden'
      }
    }, [target])

    useEventListener('keydown', event => {
      if (isOpen === false) return
      event.preventDefault()
      if (event.key === 'Escape') {
        onClose(event, {isOpen: false})
      }
    })

    useEventListener('mousedown', event => {
      if (isOpen === false || !forwardedRef || !closeOnOutsideClick) return
      if (!forwardedRef.current.contains(event.target)) {
        onClose(event, {isOpen: false})
      }
    })

    return (
      <div
        className={cx(
          'react-MoleculeDrawer-content',
          `react-MoleculeDrawer-content--placement-${placement}`,
          `react-MoleculeDrawer-content--size-${size}`,
          `react-MoleculeDrawer-content--animationDuration-${animationDuration}`,
          `react-MoleculeDrawer-content--state-${isOpen ? 'opened' : 'closed'}`,
          {
            'react-MoleculeDrawer-content--placement':
              typeof target === 'undefined'
          }
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    )
  }
)

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  /** Duration in seconds for open/close animation */
  animationDuration: PropTypes.oneOf(
    Object.values(moleculeDrawerAnimationDuration)
  ),
  /** content **/
  children: PropTypes.node,
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On open callback triggered after animation */
  onOpen: PropTypes.func,
  /** On close callback triggered after animation */
  onClose: PropTypes.func,
  /** Screen position where the drawer will be displayed */
  placement: PropTypes.oneOf(Object.values(moleculeDrawerPlacements)),
  /** Size of the drawer content */
  size: PropTypes.oneOf(Object.values(moleculeDrawerSizes)),
  /** DOM Element which wraps the component. **/
  target: PropTypes.node,
  /** Tells if drawer should be closed when clicked outside the drawer area, needs ref to be defined **/
  closeOnOutsideClick: PropTypes.bool
}

export default MoleculeDrawer
export {MoleculeDrawer, MoleculeDrawerOverlay}
export {moleculeDrawerPlacements}
export {moleculeDrawerSizes}
export {moleculeDrawerAnimationDuration}

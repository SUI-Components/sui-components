import {forwardRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useEventListener from '@s-ui/react-hooks/lib/useEventListener'
import {ANIMATION_DURATION, PLACEMENTS, SIZES} from './settings'

const MoleculeDrawer = forwardRef(
  (
    {
      animationDuration = ANIMATION_DURATION.FAST,
      children,
      isOpen = false,
      onOpen,
      onClose,
      placement = PLACEMENTS.LEFT,
      size = SIZES.AUTO,
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
  animationDuration: PropTypes.oneOf(Object.values(ANIMATION_DURATION)),
  /** content **/
  children: PropTypes.node,
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On open callback triggered after animation */
  onOpen: PropTypes.func,
  /** On close callback triggered after animation */
  onClose: PropTypes.func,
  /** Screen position where the drawer will be displayed */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),
  /** Size of the drawer content */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /** DOM Element which wraps the component. **/
  target: PropTypes.node,
  /** Tells if drawer should be closed when clicked outside the drawer area, needs ref to be defined **/
  closeOnOutsideClick: PropTypes.bool
}

export default MoleculeDrawer

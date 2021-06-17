import PropTypes from 'prop-types'
import cx from 'classnames'
import useEventListener from '@s-ui/react-hooks/lib/useEventListener'
import {ANIMATION_DURATION, PLACEMENTS, SIZES} from './settings'

const MoleculeDrawer = ({
  isOpen = false,
  placement = PLACEMENTS.LEFT,
  size = SIZES.AUTO,
  animationDuration = ANIMATION_DURATION.FAST,
  onClose,
  children
}) => {
  useEventListener('keydown', event => {
    if (isOpen === false) return
    if (event.key === 'Escape') {
      typeof onClose === 'function' && onClose(event)
      event.preventDefault()
    }
  })

  return (
    <div
      onAnimationEnd={() => {
        !isOpen && onClose()
      }}
      className={cx(
        'react-MoleculeDrawer-content',
        `react-MoleculeDrawer-content--placement-${placement}`,
        `react-MoleculeDrawer-content--size-${size}`,
        `react-MoleculeDrawer-content--animationDuration-${animationDuration}`,
        {
          'react-MoleculeDrawer-open': isOpen
        }
      )}
    >
      <div className="react-MoleculeDrawer-body">{children}</div>
    </div>
  )
}

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  /** Duration in seconds for open/close animation */
  animationDuration: PropTypes.oneOf(Object.values(ANIMATION_DURATION)),
  /** content **/
  children: PropTypes.node,
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On close callback used to manage the isOpen prop from the parent */
  onClose: PropTypes.func,
  /** Screen position where the drawer will be displayed */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),
  /** Size of the drawer content */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default MoleculeDrawer

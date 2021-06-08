import {useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useEventListener from '@s-ui/react-hooks/lib/useEventListener'
import useMountedState from '@s-ui/react-hooks/lib/useMountedState'

const Overlay = 'div'
const Body = 'div'
const Content = 'div'

const PLACEMENTS = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
}

const SIZES = {
  M: 'm',
  FULLSCREEN: 'fullscreen'
}

const ANIMATIONS = {
  SLOW: 'slow',
  FAST: 'fast'
}

export default function MoleculeDrawer({
  isOpen = false,
  placement = PLACEMENTS.LEFT,
  size = SIZES.M,
  velocity = ANIMATIONS.FAST,
  onClose,
  children
}) {
  const overlayRef = useRef(null)
  const isMounted = useMountedState()

  useEventListener('keydown', event => {
    if (isOpen === false) return
    if (event.key === 'Escape') {
      typeof onClose === 'function' && onClose(event)
      event.preventDefault()
    }
  })

  return (
    <div className="react-MoleculeDrawer">
      {isOpen && (
        <Overlay
          ref={overlayRef}
          className="react-MoleculeDrawer-overlay"
          onClick={event => {
            overlayRef.current === event.target &&
              typeof onClose === 'function' &&
              onClose(event)
          }}
        />
      )}
      <Content
        onAnimationEnd={() => !isOpen && onClose()}
        className={cx(
          'react-MoleculeDrawer-content',
          'react-MoleculeDrawer-contentTransition',
          `react-MoleculeDrawer-content--${placement}`,
          {
            [`react-MoleculeDrawer-content--${placement}--closed`]: !isMounted(),
            'react-MoleculeDrawer-open': isOpen,
            'react-MoleculeDrawer-content--fullscreen':
              size === SIZES.FULLSCREEN,
            'react-MoleculeDrawer-contentTransition--slow':
              velocity === ANIMATIONS.SLOW
          }
        )}
      >
        <Body className="react-MoleculeDrawer-body">{children}</Body>
      </Content>
    </div>
  )
}

export {PLACEMENTS as moleculeDrawerPlacements}
export {SIZES as moleculeDrawerSizes}
export {ANIMATIONS as moleculeDrawerAnimation}

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On close callback used to manage the isOpen prop from the parent */
  onClose: PropTypes.func,
  /** Screen position where the drawer will be displayed */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),
  /** Size of the drawer content */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /** Duration in seconds for open/close animation */
  velocity: PropTypes.oneOf(Object.values(ANIMATIONS)),
  children: PropTypes.node
}

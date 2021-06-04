import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import {useEventListener} from '@s-ui/react-hooks'

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
  portalContainerId = 'drawer-react-portal',
  isOpen = false,
  placement = PLACEMENTS.LEFT,
  size = SIZES.M,
  velocity = ANIMATIONS.FAST,
  onClose,
  children
}) {
  const overlayRef = useRef(null)
  const [isClientReady, setClientReady] = useState(false)

  useEffect(() => {
    setClientReady(true)
  }, [])

  useEventListener('keydown', event => {
    if (isOpen === false) return
    if (event.key === 'Escape') {
      typeof onClose === 'function' && onClose(event)
      event.preventDefault()
    }
  })

  const getContainer = () => {
    let containerDOMEl = document.getElementById(portalContainerId)
    if (!containerDOMEl) {
      containerDOMEl = document.createElement('div')
      containerDOMEl.id = portalContainerId
      document.body.appendChild(containerDOMEl)
    }
    return containerDOMEl
  }

  const drawer = (
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

  return isClientReady ? createPortal(drawer, getContainer()) : null
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
  velocity: PropTypes.oneOf(Object.values(ANIMATIONS))
}

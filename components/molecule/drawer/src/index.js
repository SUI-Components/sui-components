import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import {useEventListener, useBoolean} from '@s-ui/react-hooks'

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

const SPEEDS = {
  SLOW: 'slow',
  FAST: 'fast'
}

const SPEED_TO_SECONDS = {
  slow: '1s',
  fast: '0.3s'
}

export default function MoleculeDrawer({
  portalContainerId = 'drawer-react-portal',
  isOpen = false,
  placement = PLACEMENTS.LEFT,
  size = SIZES.M,
  speed = SPEEDS.FAST,
  onClose,
  children
}) {
  const overlayRef = useRef(null)
  const [isClientReady, setClientReady] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [value, {off, on}] = useBoolean(isOpen)

  useEffect(() => {
    setClientReady(true)
  }, [])

  useEffect(() => {
    isOpen && on()
  }, [isOpen, on])

  const onCloseHandler = event =>
    typeof onClose === 'function' && !animating && onClose(event)

  useEventListener('keydown', event => {
    if (isOpen === false) return
    if (event.key === 'Escape') {
      onCloseHandler(event)
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

  const drawer = value && (
    <div className="react-MoleculeDrawer">
      <Overlay
        ref={overlayRef}
        className="react-MoleculeDrawer-overlay"
        onClick={event => {
          overlayRef.current === event.target && onCloseHandler(event)
        }}
      />
      <Content
        onAnimationEnd={() => {
          setAnimating(false)
          !isOpen && off()
        }}
        onAnimationStart={() => setAnimating(true)}
        className={cx(
          'react-MoleculeDrawer-content',
          `react-MoleculeDrawer-content--${placement}`,
          {
            'react-MoleculeDrawer-content--fullscreen':
              size === SIZES.FULLSCREEN
          }
        )}
        style={{
          animation: `${
            isOpen ? 'open' : 'close'
          }-drawer-${placement}--${size} ${SPEED_TO_SECONDS[speed]} both`
        }}
      >
        <Body className="react-MoleculeDrawer-body">{children}</Body>
      </Content>
    </div>
  )

  return isClientReady ? createPortal(drawer, getContainer()) : null
}

export {PLACEMENTS as moleculeDrawerPlacements}
export {SIZES as moleculeDrawerSizes}
export {SPEEDS as moleculeDrawerAnimationSpeeds}

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
  speed: PropTypes.oneOf(Object.values(SPEEDS))
}

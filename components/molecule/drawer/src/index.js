import {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'

const useOnCloseAnimation = isOpen => {
  const [showDrawer, setShowDrawer] = useState(isOpen)
  useEffect(() => {
    isOpen && setShowDrawer(isOpen)
  }, [isOpen])

  const handlerOnAnimationEnd = () => {
    !isOpen && setShowDrawer(false)
  }

  return [showDrawer, handlerOnAnimationEnd]
}

const Overlay = 'div'
const Body = 'div'
const Content = 'div'

const PLACEMENTS = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
}

export default function MoleculeDrawer({
  portalContainerId = 'drawer-react-portal',
  isOpen = false,
  placement = PLACEMENTS.LEFT,
  onClose,
  children
}) {
  const overlayRef = useRef(null)
  const [isClientReady, setClientReady] = useState(false)
  const [isOpenState, handlerOnAnimationEnd] = useOnCloseAnimation(isOpen)

  useEffect(() => {
    setClientReady(true)
  }, [])

  const onKeyDown = useCallback(
    ev => {
      if (isOpen === false) return
      if (ev.key === 'Escape') {
        onClose(ev)
        ev.preventDefault()
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  const getContainer = () => {
    let containerDOMEl = document.getElementById(portalContainerId)
    if (!containerDOMEl) {
      containerDOMEl = document.createElement('div')
      containerDOMEl.id = portalContainerId
      document.body.appendChild(containerDOMEl)
    }
    return containerDOMEl
  }

  const drawer = isOpenState && (
    <div className="react-MoleculeDrawer">
      <Overlay
        ref={overlayRef}
        className="react-MoleculeDrawer-overlay"
        onClick={e => {
          overlayRef.current === e.target && onClose()
        }}
      >
        <Content
          onAnimationEnd={handlerOnAnimationEnd}
          className={cx(
            'react-MoleculeDrawer-content',
            `react-MoleculeDrawer-content--${placement}`
          )}
          style={{
            animation: `${
              isOpen ? 'open' : 'close'
            }-drawer-${placement} 0.3s both`
          }}
        >
          <Body className="react-MoleculeDrawer-body">{children}</Body>
        </Content>
      </Overlay>
    </div>
  )

  return isClientReady ? createPortal(drawer, getContainer()) : null
}

export {PLACEMENTS as moleculeDrawerPlacements}

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On close callback used to manage the isOpen prop from the parent */
  onClose: PropTypes.func.isRequired,
  /** Screen position where the drawer will be displayed */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS))
}

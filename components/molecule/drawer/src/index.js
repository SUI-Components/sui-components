import {useState, useEffect, useRef, forwardRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'

const Overlay = forwardRef((props, ref) => {
  return <div ref={ref} className="react-MoleculeDrawer-overlay" {...props} />
})

const Body = props => {
  return <div className="react-MoleculeDrawer-body" {...props} />
}

const Content = forwardRef((props, ref) => {
  return <div ref={ref} className="react-MoleculeDrawer-content" {...props} />
})

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

export default function MoleculeDrawer({
  portalContainerId = 'drawer-react-portal',
  isOpen = false,
  placement = 'left',
  onClose,
  children
}) {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
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
    document.removeEventListener('keydown', onKeyDown)
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
        onClick={e => {
          overlayRef.current === e.target && onClose()
        }}
      >
        <Content
          ref={contentRef}
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
          <Body>{children}</Body>
        </Content>
      </Overlay>
    </div>
  )

  return isClientReady ? createPortal(drawer, getContainer()) : null
}

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  placement: PropTypes.oneOf(['right', 'left', 'bottom', 'top'])
}

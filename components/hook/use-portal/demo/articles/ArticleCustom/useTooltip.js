import {useRef, useState, useLayoutEffect} from 'react'
import cx from 'classnames'

import {usePopper} from 'react-popper'

import usePortal from '../../../src/index.js'

const useTooltip = ({isOpen, ...config} = {}) => {
  const {
    Portal,
    onMouseEnter,
    onMouseLeave,
    portalRef,
    open,
    close,
    isOpen: isOpened,
    triggerRef
  } = usePortal({
    onMouseEnter: event => open(event),
    onMouseLeave: event => close(event),
    isOpen: false,
    ...config
  })

  useLayoutEffect(() => {
    const {
      top: triggerTop = 0,
      y: triggerY = 0,
      height: triggerH = 0
    } = triggerRef.current?.getBoundingClientRect() || {}
    const {
      top: portalTop = 0,
      y: portalY = 0,
      height: portalH = 0
    } = portalRef.current?.getBoundingClientRect() || {}
    console.log('useLayoutEffect', {
      // isOpened,
      triggerRef: triggerRef.current,
      triggerRefBoundings: {top: triggerTop, y: triggerY, height: triggerH},
      portalRefBoundings: {top: portalTop, y: portalY, height: portalH},
      pageYOffset: window.pageYOffset,
      y: window.pageYOffset + triggerTop + triggerH
      // styles: structuredClone(styles),
      // attributes: structuredClone(attributes),
      // ...others
    })
  }, [isOpened])

  const {styles, attributes, ...others} = usePopper(
    portalRef.current && triggerRef.current,
    portalRef.current
  )

  return [
    {
      ref: triggerRef,
      onMouseEnter,
      onMouseLeave
    },
    ({children, className, style = {}, ...props}) => {
      return (
        <Portal
          className={cx('sui-DemoTooltip', className)}
          style={{...styles.popper, style}}
          {...attributes.popper}
          {...props}
        >
          {children}
        </Portal>
      )
    }
  ]
}

export default useTooltip

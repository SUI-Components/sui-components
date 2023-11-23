import {useCallback, useState} from 'react'

import cx from 'classnames'

import usePortal from '../../../src/index.js'
import usePopper from './usePopper.js'

const useTooltip = ({isOpen, ...config} = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const {Portal, onMouseEnter, onMouseLeave, portalRef, open, close, triggerRef} = usePortal({
    onMouseEnter: event => open(event),
    onMouseLeave: event => close(event),
    onOpen: () => setIsVisible(true),
    onClose: () => setIsVisible(false),
    isOpen: false,
    ...config
  })

  const {styles, attributes} = usePopper(triggerRef.current, isVisible ? portalRef.current : null)

  const Tooltip = useCallback(
    ({children, className, style = {}, ...props}) => {
      return (
        <Portal
          className={cx(className)}
          style={{
            ...styles.popper,
            style
          }}
          {...attributes.popper}
          {...props}
        >
          {children}
        </Portal>
      )
    },
    [styles, attributes]
  )

  return [
    {
      ref: triggerRef,
      onMouseEnter,
      onMouseLeave
    },
    Tooltip
  ]
}

export default useTooltip

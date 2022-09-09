import {usePopper} from 'react-popper'

import usePortal from '../../../src/index.js'

const useTooltip = ({isOpen = false, ...config} = {}) => {
  const {Portal, onMouseEnter, onMouseLeave, portalRef, open, close} =
    usePortal({
      onMouseEnter({portal, triggerElement}) {
        open()
        usePopper(triggerElement, portalRef)
      },
      isOpen,
      onMouseLeave: ({portal}) => {
        portal.current.removeAttribute('style')
        close()
      },
      ...config
    })

  return [
    {
      onMouseEnter,
      onMouseLeave
    },
    Portal
  ]
}

export default useTooltip

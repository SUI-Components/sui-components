import IconSuccess from '@s-ui/react-icons/lib/Linecheck'
import IconError from '@s-ui/react-icons/lib/Lineerror'
import IconInfo from '@s-ui/react-icons/lib/Lineinfo'
import IconWarning from '@s-ui/react-icons/lib/Linewarning'

export const CLASS = 'sui-MoleculeNotification'

export const EMPTY_METHOD = () => {}

export const POSITION = {
  top: 'top',
  bottom: 'bottom',
  relative: 'relative'
}

export const TYPES = {
  info: 'info',
  error: 'error',
  success: 'success',
  system: 'system',
  warning: 'warning'
}

export const ICONS = {
  info: <IconInfo />,
  error: <IconError />,
  success: <IconSuccess />,
  system: <IconInfo />,
  warning: <IconWarning />
}

export const AUTO_CLOSE = {
  short: 'short',
  medium: 'medium',
  long: 'long',
  manual: 'manual'
}

export const AUTO_CLOSE_TIME = {
  short: 3000,
  medium: 6000,
  long: 9000,
  manual: null
}

export const TRANSITION_DELAY = 1000 // ms
export const BUTTONS_MAX = 3 // buttons

export const VARIATIONS = {
  negative: 'negative',
  positive: 'positive',
  outline: 'outline'
}

export const BRDS_SIZE = {
  extraLarge: 'xl',
  large: 'l',
  medium: 'm',
  small: 's',
  extraSmall: 'xs'
}

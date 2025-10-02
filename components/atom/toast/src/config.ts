export const BASE_CLASS = 'sui-AtomToast'

export const EFFECT_DELAY = {
  close: 1000,
  open: 1
}

export const AUTO_CLOSE_TIMES = {
  short: 3000,
  medium: 6000,
  long: 9000
} as const

export type AutoCloseTime = typeof AUTO_CLOSE_TIMES[keyof typeof AUTO_CLOSE_TIMES]

export const POSITIONS = {
  topLeft: 'top-left',
  top: 'top',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottom: 'bottom',
  bottomRight: 'bottom-right'
} as const

export type Position = typeof POSITIONS[keyof typeof POSITIONS]

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
export type Position = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right'

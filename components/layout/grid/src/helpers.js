import {BASE_CLASS, BREAKPOINTS, GUTTER_VALUES} from './settings.js'

export const getGutterClassNames = (gutterConfig = {}) => {
  if (GUTTER_VALUES.includes(gutterConfig)) {
    return `${BASE_CLASS}--gutter-${BREAKPOINTS.XXS}-${gutterConfig}`
  } else if (typeof gutterConfig === 'object') {
    return Object.entries(gutterConfig)
      .map(([key, value]) =>
        Object.values(BREAKPOINTS).includes(key)
          ? `${BASE_CLASS}--gutter-${key}-${value}`
          : null
      )
      .filter(value => value !== null)
      .join(' ')
  }
  return null
}

export const transition = ({isGapless, ...oldProps}) => {
  const gutter = oldProps.gutter || isGapless ? 0 : undefined
  return {gutter, ...oldProps}
}

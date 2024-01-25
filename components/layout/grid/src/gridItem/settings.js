import {BASE_CLASS, BREAKPOINTS, CELL_NUMBERS} from '../settings.js'

/**
 * getColSpanClassNamesTransform: gets the classes of each media query
 * depending on the combination of its values. breakpoint key values
 * are preferred over colSpan values
 * @param colSpan
 * @param otherProps {xxs, xs, s, m, l, xl, xxl}
 * @returns {null|string} – classnames for the column span
 */
export const getColSpanClassNamesTransform = ({colSpan, ...otherProps}) => {
  const getValidBreakpointValue = (colSpanValue, breakpointValue) => {
    if (CELL_NUMBERS.includes(breakpointValue)) {
      return breakpointValue
    } else if (CELL_NUMBERS.includes(colSpanValue)) {
      return colSpanValue
    }
    return false
  }

  const response = Object.values(BREAKPOINTS).reduce((acc, breakpointName) => {
    let value
    if (breakpointName === 'xxs') {
      const colSpanValue =
        typeof colSpan === 'number' && CELL_NUMBERS.includes(colSpan) ? colSpan : colSpan?.[breakpointName]
      value = getValidBreakpointValue(colSpanValue, otherProps[breakpointName])
    } else {
      value = getValidBreakpointValue(colSpan?.[breakpointName], otherProps[breakpointName])
    }
    return value ? `${acc} ${BASE_CLASS}-item--${breakpointName}-${value}`.trim() : acc
  }, '')
  return response === '' ? null : response
}
